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
/* The Living World                                                    */
/* ------------------------------------------------------------------ */
const livingWorld: Topic = {
  slug: "c11-the-living-world",
  title: "The Living World",
  icon: "🌿",
  description:
    "Diversity of life, binomial nomenclature, taxonomy and systematics, taxonomic categories from species to kingdom, plus the characteristics of living organisms and taxonomical aids for ISC.",
  lessons: [
    /* ---------------- Lesson 1: diversity and nomenclature ---------------- */
    {
      slug: "c11-diversity-nomenclature",
      title: "Diversity, Nomenclature and Taxonomy",
      summary:
        "How many kinds of organisms we know, why every organism needs one scientific name, the rules of binomial nomenclature, and what taxonomy and systematics mean.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Walk through a vegetable market in Mysuru and in Lucknow. The same purple vegetable is *badanekayi* in one and *baingan* in the other, and *brinjal* or *eggplant* in English. A scientist in Japan reading about it needs a name that means exactly one kind of plant everywhere. That name is *Solanum melongena*.",
        },
        {
          type: "text",
          md: "Each different kind of plant, animal or other organism is a **species**. The variety of species on Earth is **biodiversity**. The number of species that have been found and described so far is about **1.7–1.8 million**. Many more, especially insects and microbes in tropical forests, are still undescribed.\n\nTo study so many organisms we must first **describe** them correctly (characterisation), **identify** them (find which known group they belong to), **name** them and then **classify** them.",
        },
        {
          type: "heading",
          text: "Nomenclature: one name, used worldwide",
        },
        {
          type: "text",
          md: "**Nomenclature** is the giving of a correct scientific name to an organism once it has been identified. Local names change from place to place, so biologists follow agreed rules:\n\n- Plants are named under the **International Code for Botanical Nomenclature (ICBN)**.\n- Animals are named under the **International Code of Zoological Nomenclature (ICZN)**.\n\nThe system of using two words for a name is **binomial nomenclature**, introduced by **Carolus Linnaeus**. The first word is the **genus** (generic name) and the second is the **specific epithet**.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Scientific names are in **Latin** or are Latinised, whatever language the word first came from.",
            "The first word is the **genus**; the second is the **specific epithet**.",
            "When printed, the name is in *italics*; when handwritten, the two words are **underlined separately**.",
            "The genus begins with a **capital** letter; the specific epithet begins with a **small** letter.",
            "The name of the author who first described the species may follow in abbreviated form, e.g. *Mangifera indica* Linn. (described by Linnaeus). The author's name is not italicised.",
          ],
        },
        {
          type: "example",
          title: "Writing a scientific name correctly",
          problem: "A student writes the name of mango in her answer sheet as 'Mangifera Indica'. Correct it and explain each correction, as the board expects.",
          steps: [
            "Genus = *Mangifera*: starts with a capital letter. This part is fine.",
            "Specific epithet = *indica*: must start with a small letter, so 'Indica' is wrong.",
            "In handwriting the words are not italicised, so each word must be underlined separately: Mangifera and indica, each with its own underline.",
            "If the author is given, it follows the epithet without italics or underline: Linn.",
          ],
          answer: "Mangifera indica (each word underlined separately in handwriting), optionally followed by Linn.",
        },
        {
          type: "mistake",
          wrong: "Homo Sapiens is the scientific name of human beings.",
          right: "It is *Homo sapiens*: capital H for the genus, small s for the specific epithet.",
          why: "In English we capitalise every important word in a title, so students capitalise both words. Binomial rules capitalise only the genus. Boards cut marks for a capital specific epithet or for one continuous underline in handwriting.",
        },
        {
          type: "heading",
          text: "Taxonomy and systematics",
        },
        {
          type: "table",
          headers: ["Term", "What it means"],
          rows: [
            ["Classification", "Grouping organisms into convenient categories based on easily observable characters, e.g. plants, animals, dogs, mammals."],
            ["Taxon (pl. taxa)", "A group of real organisms at any level of classification, e.g. 'mammals' or 'dogs'."],
            ["Taxonomy", "The process of classification based on characters. Characterisation, identification, classification and nomenclature are its basic processes."],
            ["Systematics", "From Latin *systema* (systematic arrangement). It arranges organisms and also takes account of their **evolutionary relationships**. Linnaeus titled his book *Systema Naturae*."],
          ],
        },
        {
          type: "text",
          md: "Modern taxonomic studies use external and internal structure, the structure of the cell, the developmental process and ecological information about organisms. Taxonomy helps agriculture, forestry and industry, and tells us what bio-resources we have.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each term with what it refers to.",
            pairs: [
              ["ICBN", "Rules for naming plants"],
              ["ICZN", "Rules for naming animals"],
              ["Specific epithet", "Second word of a binomial"],
              ["Systema Naturae", "Book by Linnaeus"],
              ["Systematics", "Classification that includes evolutionary relationships"],
            ],
            explain: "ICBN is for plants and ICZN for animals. Binomial nomenclature and the word systematics both go back to Linnaeus.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which name is written correctly as it would appear in print?",
              options: ["*Panthera Leo*", "*panthera leo*", "*Panthera leo*", "Panthera *leo*"],
              answer: 2,
              explain: "Genus capital, specific epithet small, and the whole binomial in italics in print.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A 2-mark 'rules of binomial nomenclature' question needs any four rules. Always give one example written correctly. In a diagram-free 3-mark answer on taxonomy, name the four basic processes: characterisation, identification, classification, nomenclature.",
        },
        {
          type: "keypoints",
          items: [
            "About 1.7–1.8 million species are known and described.",
            "ICBN names plants and ICZN names animals; binomial nomenclature was given by Linnaeus.",
            "Genus first with a capital letter, specific epithet second with a small letter; italics in print, separate underlines in handwriting.",
            "Taxonomy = characterisation, identification, classification, nomenclature. Systematics adds evolutionary relationships.",
          ],
        },
      ],
      flashcards: [
        { front: "Number of species known and described", back: "About 1.7–1.8 million." },
        { front: "ICBN", back: "International Code for Botanical Nomenclature: rules for naming plants." },
        { front: "ICZN", back: "International Code of Zoological Nomenclature: rules for naming animals." },
        { front: "Who gave binomial nomenclature?", back: "Carolus Linnaeus." },
        { front: "The two parts of a binomial", back: "Genus (capital first letter) and specific epithet (small first letter)." },
        { front: "Origin of the word 'systematics'", back: "Latin *systema*, meaning systematic arrangement of organisms." },
        { front: "What does 'Linn.' after *Mangifera indica* mean?", back: "The species was first described by Linnaeus (author citation)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In *Mangifera indica*, the word *indica* is the:",
          options: ["Genus", "Specific epithet", "Family name", "Author citation"],
          answer: 1,
          explain: "The second word of a binomial is the specific epithet.",
        },
        {
          kind: "truefalse",
          q: "In handwriting, the genus and specific epithet are underlined with one continuous line.",
          answer: false,
          explain: "They are underlined separately to show their Latin origin and that they are two distinct words.",
        },
        {
          kind: "fill",
          q: "Animals are named according to the rules of ___.",
          answer: ["ICZN", "International Code of Zoological Nomenclature"],
          explain: "ICZN is the zoological code; ICBN is the botanical code.",
        },
        {
          kind: "mcq",
          q: "Which branch of study classifies organisms and also considers their evolutionary relationships?",
          options: ["Nomenclature", "Identification", "Systematics", "Characterisation"],
          answer: 2,
          explain: "Systematics deals with arrangement of organisms and takes account of evolutionary relationships.",
        },
        {
          kind: "multi",
          q: "Which are basic processes of taxonomy?",
          options: ["Characterisation", "Identification", "Nomenclature", "Classification", "Fertilisation"],
          answers: [0, 1, 2, 3],
          explain: "Characterisation, identification, classification and nomenclature are basic to taxonomy. Fertilisation is a reproductive process.",
        },
        {
          kind: "mcq",
          q: "Scientific names are written in Latin mainly because:",
          options: [
            "Latin is the oldest language",
            "A single agreed language gives one name for each organism everywhere",
            "Only Latin has enough words",
            "Linnaeus did not know English",
          ],
          answer: 1,
          explain: "The point of nomenclature is a universal name; Latin (or Latinised words) gives a neutral common standard.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "'Mammals', 'dogs' and 'insects' are each examples of a:",
          options: ["Taxon", "Taxonomic key", "Specific epithet", "Herbarium"],
          answer: 0,
          explain: "A taxon is a group of real organisms at any level of classification.",
        },
      ],
    },

    /* ---------------- Lesson 2: taxonomic categories ---------------- */
    {
      slug: "c11-taxonomic-categories",
      title: "Taxonomic Categories: Species to Kingdom",
      summary:
        "The taxonomic hierarchy, the difference between a category and a taxon, and how species, genus, family, order, class, phylum and kingdom are built, with the NCERT examples.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "In a large library, books are kept by subject, then by shelf, then by row. Finding one book is easy because the arrangement is a **hierarchy**. Classification of organisms works the same way: small groups are nested inside larger groups.",
        },
        {
          type: "text",
          md: "Each level of this arrangement is a **category** (a rank), and all the categories together form the **taxonomic hierarchy**. A category is an abstract rank; the real group of organisms placed at that rank is a **taxon**. For example, *class* is a category, while *Insecta* (the insects) is a taxon at the class level.",
        },
        {
          type: "formula",
          tex: t`\text{Species} \rightarrow \text{Genus} \rightarrow \text{Family} \rightarrow \text{Order} \rightarrow \text{Class} \rightarrow \text{Phylum (Division)} \rightarrow \text{Kingdom}`,
          caption: "The seven obligate categories in ascending order. Going up, the number of organisms in a taxon rises and the number of characters they share falls. Plants use 'division' in place of 'phylum'.",
        },
        {
          type: "heading",
          text: "Species and genus",
        },
        {
          type: "text",
          md: "A **species** is a group of individual organisms with fundamental similarities. Species are told apart by clear morphological differences. In *Mangifera indica*, *Solanum tuberosum* (potato) and *Panthera leo* (lion), the second word is the species epithet and the first is the genus.\n\nA **genus** is a group of related species that have more characters in common with each other than with species of other genera. *Solanum* includes potato (*S. tuberosum*), brinjal (*S. melongena*) and *S. nigrum*. *Panthera* includes lion (*P. leo*), leopard (*P. pardus*) and tiger (*P. tigris*). The cat belongs to a different genus, *Felis*.",
        },
        {
          type: "table",
          headers: ["Category", "Definition", "NCERT example"],
          rows: [
            ["Family", "Group of related genera, fewer similarities than genus and species; uses vegetative and reproductive features", "Solanaceae: *Solanum*, *Petunia*, *Datura*. Felidae: *Panthera*, *Felis*. Dogs are in Canidae."],
            ["Order", "Group of families with a few similar characters (an aggregate of characters)", "Polymoniales: Convolvulaceae + Solanaceae (floral characters). Carnivora: Felidae + Canidae."],
            ["Class", "Group of related orders", "Mammalia: Primata (monkey, gorilla, gibbon) + Carnivora (tiger, cat, dog)."],
            ["Phylum / Division", "Group of classes with a few common features", "Chordata: fishes, amphibians, reptiles, birds, mammals (notochord, dorsal hollow neural system). Plants: division."],
            ["Kingdom", "Highest category", "Animalia for all animals; Plantae for all plants."],
          ],
        },
        {
          type: "table",
          headers: ["Common name", "Biological name", "Genus", "Family", "Order", "Class", "Phylum / Division"],
          rows: [
            ["Man", "*Homo sapiens*", "*Homo*", "Hominidae", "Primata", "Mammalia", "Chordata"],
            ["Housefly", "*Musca domestica*", "*Musca*", "Muscidae", "Diptera", "Insecta", "Arthropoda"],
            ["Mango", "*Mangifera indica*", "*Mangifera*", "Anacardiaceae", "Sapindales", "Dicotyledonae", "Angiospermae"],
            ["Wheat", "*Triticum aestivum*", "*Triticum*", "Poaceae", "Poales", "Monocotyledonae", "Angiospermae"],
          ],
        },
        {
          type: "example",
          title: "Reading the hierarchy",
          problem: "Lion, tiger, cat and dog are all in order Carnivora. Which two of them share the most characters, and which pair shares the fewest? Give the reason using categories.",
          steps: [
            "Lion (*Panthera leo*) and tiger (*Panthera tigris*) are in the same genus, *Panthera*.",
            "Cat (*Felis*) is in the same family, Felidae, as lion and tiger, but a different genus.",
            "Dog is in family Canidae, so it meets the cats only at the order level, Carnivora.",
            "The lower the category two organisms share, the more characters they share.",
          ],
          answer: "Lion and tiger share the most (same genus). Dog with any of the cats shares the fewest (common only up to order Carnivora).",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange the categories from genus upwards.",
            items: ["Genus", "Family", "Order", "Class", "Phylum", "Kingdom"],
            explain: "Ascending order: species → genus → family → order → class → phylum → kingdom. Each higher category holds more taxa that share fewer characters.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Housefly and mango differ at which lowest category in the table?",
              options: ["Order", "Class", "Phylum / Division", "Kingdom"],
              answer: 3,
              explain: "Housefly is in Animalia and mango is in Plantae; they share nothing even at the kingdom level.",
            },
            {
              kind: "fill",
              q: "In plants, the category 'phylum' is called ___.",
              answer: ["division"],
              explain: "Botanists use division; e.g. Angiospermae for mango and wheat in NCERT's table.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "As we go up the hierarchy, organisms in a taxon share more and more characters.",
          right: "As we go up, the number of organisms increases and the number of common characters decreases.",
          why: "Higher categories feel 'bigger and more important', so students think they must be more alike. A kingdom holds everything from sponges to whales, so only a few characters are common to all.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Learn NCERT's four-organism table row by row. Boards ask 'Give the family and order of the housefly' or 'Name the class of wheat'. NCERT spells the order of man as **Primata** and uses **Dicotyledonae / Monocotyledonae** as classes for mango and wheat.",
        },
        {
          type: "keypoints",
          items: [
            "Category = rank; taxon = real group at that rank.",
            "Species → genus → family → order → class → phylum (division) → kingdom.",
            "Higher category: more organisms, fewer shared characters.",
            "Solanaceae: Solanum, Petunia, Datura; Felidae: Panthera, Felis; Carnivora: Felidae + Canidae.",
          ],
        },
      ],
      flashcards: [
        { front: "Category vs taxon", back: "A category is a rank (e.g. class); a taxon is the actual group at that rank (e.g. Insecta)." },
        { front: "Three species of *Panthera*", back: "*P. leo* (lion), *P. pardus* (leopard), *P. tigris* (tiger)." },
        { front: "Three genera of Solanaceae in NCERT", back: "*Solanum*, *Petunia*, *Datura*." },
        { front: "Families placed in order Polymoniales", back: "Convolvulaceae and Solanaceae (based on floral characters)." },
        { front: "Family and order of housefly", back: "Muscidae, Diptera (class Insecta, phylum Arthropoda)." },
        { front: "Family and order of wheat", back: "Poaceae, Poales (class Monocotyledonae)." },
        { front: "Family and order of mango", back: "Anacardiaceae, Sapindales (class Dicotyledonae)." },
        { front: "Two orders in class Mammalia given by NCERT", back: "Primata (monkey, gorilla, gibbon) and Carnivora (tiger, cat, dog)." },
      ],
      quiz: [
        {
          kind: "order",
          q: "Arrange in descending order (highest first).",
          items: ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"],
          explain: "Descending: kingdom, phylum, class, order, family, genus, species.",
        },
        {
          kind: "mcq",
          q: "Order Carnivora includes the families:",
          options: ["Felidae and Hominidae", "Felidae and Canidae", "Canidae and Muscidae", "Solanaceae and Convolvulaceae"],
          answer: 1,
          explain: "Felidae (cats) and Canidae (dogs) both belong to Carnivora.",
        },
        {
          kind: "mcq",
          q: "Wheat belongs to the family:",
          options: ["Anacardiaceae", "Solanaceae", "Poaceae", "Muscidae"],
          answer: 2,
          explain: "*Triticum aestivum* is in Poaceae, order Poales.",
        },
        {
          kind: "truefalse",
          q: "Potato and brinjal belong to the same genus.",
          answer: true,
          explain: "Potato is *Solanum tuberosum* and brinjal is *Solanum melongena*.",
        },
        {
          kind: "mcq",
          q: "Which category groups related orders?",
          options: ["Family", "Class", "Phylum", "Genus"],
          answer: 1,
          explain: "A class is a group of related orders, e.g. Mammalia includes Primata and Carnivora.",
        },
        {
          kind: "mcq",
          q: "The class of housefly is:",
          options: ["Diptera", "Insecta", "Arthropoda", "Muscidae"],
          answer: 1,
          explain: "Diptera is the order, Muscidae the family and Arthropoda the phylum.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which statement about genus is correct?",
          options: [
            "It is a group of related families",
            "It is a group of related species with more characters in common than with species of other genera",
            "It is always written with a small letter",
            "It is the highest category",
          ],
          answer: 1,
          explain: "This is the definition of a genus. It always begins with a capital letter.",
        },
      ],
    },

    /* ---------------- Lesson 3: what is living, taxonomical aids ---------------- */
    {
      slug: "c11-living-characteristics-taxonomic-aids",
      title: "What is Living? and Taxonomical Aids",
      summary:
        "Growth, reproduction, metabolism, cellular organisation and consciousness as features of life, and the herbarium, botanical garden, museum, zoo and key as tools of taxonomy (ISC; earlier NCERT).",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "callout",
          tone: "note",
          title: "Who needs this lesson",
          md: "**ISC** students: the syllabus lists the tools for the study of taxonomy (museums, zoological parks, herbaria, botanical gardens). The sections 'What is living?' and 'Taxonomical aids' were **removed from the rationalised NCERT book**, so CBSE and Karnataka PUC students read it as background. Older NEET and KCET questions still use these ideas.",
        },
        {
          type: "text",
          md: "A pebble on a river bank and a seedling next to it: which is alive? We know at once, but saying *why* is hard. Biologists test each feature of life and ask whether it is a **defining property**, one found in every living thing and in no non-living thing.",
        },
        {
          type: "table",
          headers: ["Feature", "Is it defining?", "Reason"],
          rows: [
            ["Growth (increase in mass and number of cells)", "No", "Plants grow all their life, animals only up to an age. Non-living things like mountains, boulders and sand mounds also 'grow', but by accumulation of material on the surface, not from inside."],
            ["Reproduction", "No", "Mules, sterile worker bees and infertile human couples do not reproduce, yet are alive. In unicellular organisms growth and reproduction are the same thing (cell division)."],
            ["Metabolism (sum of all chemical reactions in the body)", "Yes", "All living organisms show it; no non-living thing does. Isolated reactions in a test tube (*in vitro*) are not living, but they are living reactions."],
            ["Cellular organisation", "Yes", "All life is made of cells; it underlies every other feature."],
            ["Consciousness (sensing and responding to the environment)", "Yes", "Plants respond to light, water, temperature, pollutants; photoperiod affects seasonal breeders. Only humans are aware of themselves (self-consciousness)."],
          ],
        },
        {
          type: "text",
          md: "So living organisms are **self-replicating, evolving and self-regulating interactive systems capable of responding to external stimuli**. A patient in a coma kept alive by machines shows metabolism but has lost self-consciousness; this is why defining life matters in medicine and law too.\n\nReproduction in non-cellular ways: yeast and *Hydra* reproduce by **budding**; *Planaria* shows true **regeneration** from fragments; filamentous algae, fungi and the protonema of mosses multiply by **fragmentation**.",
        },
        {
          type: "mistake",
          wrong: "Growth is proof that something is alive.",
          right: "Growth is not a defining property; metabolism, cellular organisation and consciousness are.",
          why: "We see babies and plants grow every day, so growth feels like life itself. But crystals and sand dunes also increase in mass. The difference is that living things grow from inside by cell division.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A mule cannot produce offspring. This shows that:",
              options: [
                "Mules are non-living",
                "Reproduction is not an all-inclusive defining feature of life",
                "Growth is the defining feature of life",
                "Metabolism is absent in mules",
              ],
              answer: 1,
              explain: "Mules are alive yet sterile, so reproduction cannot be used to define life.",
            },
          ],
        },
        {
          type: "heading",
          text: "Taxonomical aids",
        },
        {
          type: "table",
          headers: ["Aid", "What it holds", "Examples / note"],
          rows: [
            ["Herbarium", "Plant specimens dried, pressed and preserved on sheets, arranged by an accepted system of classification. Each sheet has a label: date and place of collection, English, local and botanical names, family, collector's name.", "A quick referral system for taxonomic studies."],
            ["Botanical garden", "Living plants grown for identification, each labelled with its scientific name and family", "Royal Botanical Gardens, Kew (England); Indian Botanical Garden, Howrah; National Botanical Research Institute, Lucknow"],
            ["Museum", "Preserved plants and animals: in jars of preservative, dried, insects pinned in insect boxes, larger birds and mammals stuffed; also skeletons", "Found in schools, colleges and research institutes"],
            ["Zoological park", "Wild animals kept under human care in conditions close to their natural habitat", "Lets us study food habits and behaviour"],
            ["Key", "Pairs of contrasting characters (a **couplet**); each statement is a **lead**; separate keys for family, genus and species; usually analytical", "Used to identify an unknown organism step by step"],
          ],
        },
        {
          type: "text",
          md: "Written aids: a **flora** gives the habitat and distribution of plants of an area; **manuals** help identify species of an area; a **monograph** covers one taxon; **catalogues** list species.",
        },
        {
          type: "example",
          title: "Using a two-lead key",
          problem: "A simple key reads: 1a. Leaves with parallel venation ... go to 2. 1b. Leaves with reticulate venation ... dicot. 2a. Stem hollow with solid nodes ... grass family. 2b. Stem not like this ... other monocot. A plant has parallel-veined leaves and a hollow stem with solid nodes. Identify its group and name the parts of the key.",
          steps: [
            "Couplet 1: the leaves are parallel-veined, so lead 1a applies; go to couplet 2.",
            "Couplet 2: the stem is hollow with solid nodes, so lead 2a applies.",
            "Each numbered pair (1a/1b, 2a/2b) is a couplet; each single statement is a lead.",
          ],
          answer: "The plant belongs to the grass family. The key works by choosing one lead from each couplet.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does each aid hold living or preserved specimens?",
            groups: ["Living organisms", "Preserved specimens"],
            items: [
              { text: "Botanical garden", group: 0, hint: "Plants grow there in soil." },
              { text: "Zoological park", group: 0, hint: "Animals live and feed there." },
              { text: "Herbarium", group: 1, hint: "Plants are dried and pressed on sheets." },
              { text: "Museum", group: 1, hint: "Jars, pinned insects and stuffed animals." },
              { text: "Insect box", group: 1, hint: "Insects are collected, killed and pinned." },
            ],
            explain: "Botanical gardens and zoos keep living organisms; herbaria and museums keep dead, preserved ones.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "ISC often asks 'Distinguish between a herbarium and a botanical garden' or 'What is a key? Name its two parts.' State one clear contrast per point (dried vs living; sheets vs field) and name an Indian example.",
        },
        {
          type: "keypoints",
          items: [
            "Defining features of life: metabolism, cellular organisation and consciousness (response to stimuli).",
            "Growth and reproduction are not defining: non-living things can 'grow'; mules and worker bees do not reproduce.",
            "Herbarium: dried pressed plants on labelled sheets; botanical garden: living labelled plants.",
            "A key uses couplets of contrasting leads; separate keys for each category.",
          ],
        },
      ],
      flashcards: [
        { front: "Defining properties of life", back: "Metabolism, cellular organisation and consciousness (ability to sense and respond)." },
        { front: "Why is growth not a defining property?", back: "Non-living things also increase in mass, by accumulation on the surface." },
        { front: "Organisms that live but do not reproduce", back: "Mules, sterile worker bees, infertile human couples." },
        { front: "Only organism with self-consciousness", back: "Human beings." },
        { front: "Herbarium", back: "Store of dried, pressed plant specimens on labelled sheets." },
        { front: "Couplet and lead", back: "A couplet is a pair of contrasting statements in a key; each statement is a lead." },
        { front: "Famous Indian botanical gardens", back: "Indian Botanical Garden, Howrah; National Botanical Research Institute, Lucknow." },
        { front: "Monograph", back: "Information on any one taxon." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is the best example to show that metabolism is a defining feature of living organisms?",
          options: [
            "Mountains grow by accumulation",
            "No non-living object shows metabolism",
            "Mules are sterile",
            "Plants grow throughout life",
          ],
          answer: 1,
          explain: "A defining property is found in every living thing and in no non-living thing. Metabolism fits.",
        },
        {
          kind: "truefalse",
          q: "In unicellular organisms, growth and reproduction are synonymous.",
          answer: true,
          explain: "A unicellular organism grows and multiplies by the same cell division.",
        },
        {
          kind: "mcq",
          q: "Information on any one taxon is found in a:",
          options: ["Flora", "Manual", "Monograph", "Catalogue"],
          answer: 2,
          explain: "A monograph deals with one taxon.",
        },
        {
          kind: "multi",
          q: "Which information is written on a herbarium sheet label?",
          options: ["Date and place of collection", "Botanical name", "Family", "Collector's name", "Chromosome number"],
          answers: [0, 1, 2, 3],
          explain: "Labels carry date and place, English, local and botanical names, family and collector. Chromosome number is not a standard label item.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Keys used for identification are generally:",
          options: ["Analytical", "Synthetic", "Statistical", "Historical"],
          answer: 0,
          explain: "Taxonomic keys are generally analytical, using pairs of contrasting characters.",
        },
        {
          kind: "fill",
          q: "Each statement in a taxonomic key is called a ___.",
          answer: ["lead"],
          explain: "A pair of leads forms a couplet.",
        },
        {
          kind: "mcq",
          q: "Royal Botanical Gardens are located at:",
          options: ["Howrah", "Lucknow", "Kew", "Ooty"],
          answer: 2,
          explain: "The Royal Botanical Gardens are at Kew, England.",
        },
      ],
    },

    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-living-world-exam-edge",
      title: "Exam edge: The Living World",
      summary:
        "What NEET and KCET ask from The Living World: naming rules, the NCERT organism table, category versus taxon, and statement-based reasoning.",
      minutes: 18,
      xp: 50,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually takes 1–2 questions from this short chapter, together with 8–10 from the whole Diversity unit (Living World, Biological Classification, Plant Kingdom, Animal Kingdom). Almost all are direct NCERT lines: the rules of nomenclature, the organism table and the meaning of category, taxon and systematics. **KCET** asks the same facts as one-liners, plus taxonomical aids that some state books still teach.",
        },
        {
          type: "list",
          items: [
            "NCERT line: the number of species known and described ranges between **1.7 and 1.8 million**.",
            "NCERT line: **characterisation, identification, classification and nomenclature** are basic to taxonomy.",
            "NCERT line: 'systematics' comes from Latin *systema*; Linnaeus used *Systema Naturae* as the title of his publication.",
            "NCERT line: each category, referred to as a unit of classification, represents a **rank** and is commonly termed **taxon**.",
            "NCERT line: order and higher categories are identified based on the **aggregates of characters**.",
            "NCERT line: Convolvulaceae and Solanaceae are in order **Polymoniales** mainly on **floral characters**.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{Higher category} \;\Rightarrow\; \uparrow \text{number of organisms},\;\; \downarrow \text{number of common characters}`,
          caption: "Safe for any question asking which category has the most or fewest shared characters: species has the most, kingdom the fewest.",
        },
        {
          type: "example",
          title: "NEET level: picking the correctly written name",
          problem: "Which is correctly written? (a) *Solanum Tuberosum* (b) solanum tuberosum (c) *Solanum tuberosum* (d) *Solanum* Tuberosum",
          steps: [
            "Rule: genus capital, epithet small, both italic in print.",
            "(a) capital epithet: wrong. (b) small genus and not italic: wrong. (d) capital epithet and roman type: wrong.",
          ],
          answer: "(c) *Solanum tuberosum*.",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: Lion and tiger are placed in the same genus. R: Both belong to family Felidae.",
          steps: [
            "A is true: both are *Panthera*.",
            "R is true: *Panthera* is in Felidae.",
            "Does R explain A? No. Cat (*Felis*) is also in Felidae but in a different genus, so sharing a family does not explain sharing a genus. Lion and tiger share a genus because they have more characters in common than with species of other genera.",
          ],
          answer: "Both A and R are true, but R is not the correct explanation of A.",
        },
        {
          type: "example",
          title: "Statement analysis on the NCERT table",
          problem: "How many statements are correct? (i) Mango belongs to order Sapindales. (ii) Housefly belongs to family Diptera. (iii) Wheat and mango share the same division. (iv) Man belongs to order Primata.",
          steps: [
            "(i) Correct: Anacardiaceae, order Sapindales.",
            "(ii) Wrong: Diptera is the order; the family is Muscidae.",
            "(iii) Correct: both are Angiospermae.",
            "(iv) Correct: NCERT gives Primata.",
          ],
          answer: "Three statements are correct: (i), (iii) and (iv).",
        },
        {
          type: "example",
          title: "Harder: category or taxon?",
          problem: "From this list, how many are taxa and how many are categories? Felidae, order, Mammalia, genus, *Panthera*, kingdom, Diptera.",
          steps: [
            "Categories are ranks: order, genus, kingdom (3).",
            "Taxa are named real groups: Felidae (family), Mammalia (class), *Panthera* (genus), Diptera (order) (4).",
          ],
          answer: "4 taxa and 3 categories.",
        },
        {
          type: "mistake",
          wrong: "Diptera is the family of the housefly and Muscidae is its order.",
          right: "Family is Muscidae; order is Diptera.",
          why: "Both names sound like ranks of insects. A shortcut: family names in animals end in **-idae** (Muscidae, Hominidae, Felidae); plant families usually end in **-aceae** (Poaceae, Anacardiaceae).",
        },
        {
          type: "mistake",
          wrong: "Taxonomy and systematics are the same; both only name and group organisms.",
          right: "Systematics also takes account of evolutionary relationships between organisms.",
          why: "Many books use the two words loosely. NEET follows NCERT, where systematics is the wider study including evolutionary relationships.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which category has the most characters in common?",
            emoji: "🧬",
            options: ["Kingdom", "Class", "Family", "Species"],
            answer: 3,
            trap: 0,
            explain: "Members of one species share the most characters. A kingdom is the biggest group, so it shares the fewest.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Scientific names are underlined separately when handwritten. R: The underline indicates their Latin origin.",
              options: AR,
              answer: 0,
              explain: "NCERT states both: separate underlining in handwriting signals the Latin origin of the name.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn the four-organism table (man, housefly, mango, wheat) row by row.",
            "-idae = animal family; -aceae = plant family; Diptera, Primata, Sapindales, Poales are orders.",
            "Category is the rank; taxon is the named group.",
            "Higher category: more organisms, fewer common characters.",
          ],
        },
      ],
      flashcards: [
        { front: "Category with maximum common characters", back: "Species." },
        { front: "Order of *Mangifera indica*", back: "Sapindales." },
        { front: "Family of *Homo sapiens*", back: "Hominidae." },
        { front: "Basis for grouping orders and higher categories", back: "Aggregates of characters." },
        { front: "Basis for placing Solanaceae and Convolvulaceae in Polymoniales", back: "Mainly floral characters." },
        { front: "Number of obligate categories in the hierarchy", back: "Seven: species, genus, family, order, class, phylum/division, kingdom." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A: Order Carnivora includes tiger and dog. R: Felidae and Canidae share a few characters and are grouped in the same order.",
          options: AR,
          answer: 0,
          explain: "Orders are groups of families with a few similar characters; Felidae (tiger) and Canidae (dog) are both in Carnivora.",
        },
        {
          kind: "numeric",
          q: "How many of the following are plant families? Poaceae, Muscidae, Solanaceae, Felidae, Anacardiaceae, Hominidae, Convolvulaceae.",
          answer: 4,
          explain: "Poaceae, Solanaceae, Anacardiaceae and Convolvulaceae (-aceae). Muscidae, Felidae and Hominidae are animal families.",
          difficulty: 2,
          hint: "Look at the endings.",
        },
        {
          kind: "mcq",
          q: "Which pair is correctly matched?",
          options: ["Wheat – Sapindales", "Housefly – Muscidae", "Mango – Poaceae", "Man – Diptera"],
          answer: 1,
          explain: "Housefly is in family Muscidae. Wheat is Poales, mango is Anacardiaceae, man is Primata.",
        },
        {
          kind: "multi",
          q: "Which statements are correct as per NCERT?",
          options: [
            "Genus comprises a group of related species",
            "Family is a group of related orders",
            "Class Mammalia includes order Primata",
            "Phylum Chordata animals have a notochord and dorsal hollow neural system",
          ],
          answers: [0, 2, 3],
          explain: "A family is a group of related genera; an order is a group of related families.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which feature is NOT one of the four basic processes of taxonomy?",
          options: ["Identification", "Nomenclature", "Phylogeny", "Characterisation"],
          answer: 2,
          explain: "The four are characterisation, identification, classification and nomenclature. Phylogeny belongs to systematics.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which is a taxon and not a category?",
          options: ["Genus", "Class", "Insecta", "Phylum"],
          answer: 2,
          explain: "Insecta is a real group at the class level. Genus, class and phylum are ranks.",
        },
        {
          kind: "mcq",
          q: "Potato, brinjal and *Petunia* all belong to the same:",
          options: ["Genus", "Species", "Family", "Specific epithet"],
          answer: 2,
          explain: "Potato and brinjal share the genus *Solanum*, but *Petunia* is a different genus. All three are in Solanaceae.",
          difficulty: 3,
          hint: "Find the lowest rank shared by all three, not just two.",
        },
        {
          kind: "numeric",
          q: "How many of these are categories of the taxonomic hierarchy? Species, couplet, family, lead, order, herbarium, kingdom.",
          answer: 4,
          explain: "Species, family, order and kingdom are categories. Couplet and lead are parts of a key; herbarium is a taxonomical aid.",
          difficulty: 3,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Biological Classification                                           */
/* ------------------------------------------------------------------ */
const bioClass: Topic = {
  slug: "c11-biological-classification",
  title: "Biological Classification",
  icon: "🦠",
  description:
    "From two kingdoms to Whittaker's five kingdoms: Monera, Protista and Fungi in detail, Plantae and Animalia in brief, and the acellular agents (viruses, viroids, prions) and lichens.",
  lessons: [
    /* ---------------- Lesson 1: five kingdoms and Monera ---------------- */
    {
      slug: "c11-five-kingdoms-monera",
      title: "The Five Kingdoms and Kingdom Monera",
      summary:
        "Why the two-kingdom system failed, Whittaker's five kingdoms and their criteria, archaebacteria, eubacteria, cyanobacteria, chemosynthetic and heterotrophic bacteria, and mycoplasma.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Milk set overnight turns into curd. Cow dung in a village gobar gas plant gives a gas that cooks food. A pond near a sewage drain turns bright green and smelly. All three are the work of the smallest and most ancient living things: **bacteria**. Where should they go in a classification of life?",
        },
        {
          type: "text",
          md: "**Aristotle** made the earliest scientific attempt: plants into trees, shrubs and herbs; animals into those with red blood and those without. **Linnaeus** used a **two-kingdom system**: Plantae and Animalia. It did not separate **prokaryotes from eukaryotes**, **unicellular from multicellular** organisms, or **photosynthetic** (green algae) from **non-photosynthetic** (fungi) organisms. Bacteria, blue-green algae, fungi, mosses, ferns, gymnosperms and angiosperms were all lumped as 'plants' just because they had a cell wall.\n\n**R.H. Whittaker (1969)** proposed **five kingdoms**: **Monera, Protista, Fungi, Plantae and Animalia**. His criteria were **cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships**.",
        },
        {
          type: "table",
          headers: ["Character", "Monera", "Protista", "Fungi", "Plantae", "Animalia"],
          rows: [
            ["Cell type", "Prokaryotic", "Eukaryotic", "Eukaryotic", "Eukaryotic", "Eukaryotic"],
            ["Cell wall", "Non-cellulosic (polysaccharide + amino acid)", "Present in some", "Present, without cellulose (chitin)", "Present (cellulose)", "Absent"],
            ["Nuclear membrane", "Absent", "Present", "Present", "Present", "Present"],
            ["Body organisation", "Cellular", "Cellular", "Multicellular / loose tissue", "Tissue / organ", "Tissue / organ / organ system"],
            ["Nutrition", "Autotrophic (chemosynthetic and photosynthetic) and heterotrophic (saprophytic / parasitic)", "Autotrophic (photosynthetic) and heterotrophic", "Heterotrophic (saprophytic / parasitic)", "Autotrophic (photosynthetic)", "Heterotrophic (holozoic, saprophytic etc.)"],
          ],
        },
        {
          type: "callout",
          tone: "fact",
          title: "After Whittaker",
          md: "Whittaker's Protista brought together *Chlamydomonas* and *Chlorella* (earlier algae, with cell walls) and *Paramoecium* and *Amoeba* (earlier animals, without walls). Later, the **three-domain system** split Monera into two domains (Archaea and Bacteria) and put all eukaryotes in the third domain, giving a **six-kingdom** classification.",
        },
        {
          type: "heading",
          text: "Kingdom Monera: the bacteria",
        },
        {
          type: "text",
          md: "Bacteria are the sole members of Monera and the most abundant microorganisms. They live in hot springs, deserts, snow and deep oceans, and many live inside other organisms as parasites. By shape they are **coccus** (spherical), **bacillus** (rod), **vibrio** (comma) and **spirillum** (spiral). Their structure is simple, but their **metabolism is extremely varied**.",
        },
        {
          type: "table",
          headers: ["Group", "Key features", "Examples / roles"],
          rows: [
            ["Archaebacteria", "Live in the harshest habitats; a **different cell wall structure** helps them survive there", "**Halophiles** (extreme salt), **thermoacidophiles** (hot springs), **methanogens** (marshes; gut of cows and buffaloes, make **methane / biogas** from dung)"],
            ["Cyanobacteria (blue-green algae)", "Photosynthetic autotrophs with **chlorophyll a** like plants; unicellular, colonial or filamentous; colonies in a gelatinous sheath; form **blooms** in polluted water", "*Nostoc*, *Anabaena* fix nitrogen in **heterocysts**"],
            ["Chemosynthetic autotrophs", "Oxidise inorganic substances (nitrates, nitrites, ammonia) to make ATP", "Recycle nitrogen, phosphorus, iron and sulphur"],
            ["Heterotrophic bacteria", "Most abundant; important decomposers", "Curdling milk, antibiotics, nitrogen fixation in legume roots; pathogens: cholera, typhoid, tetanus, citrus canker"],
          ],
        },
        {
          type: "example",
          title: "Identify the moneran",
          problem: "A filamentous organism forms a green scum in a polluted pond. Some cells in the filament are larger and thick-walled and fix atmospheric nitrogen. It has chlorophyll a but no nucleus. Name its group, the special cells and a likely genus.",
          steps: [
            "No nucleus → prokaryote → Monera.",
            "Chlorophyll a, photosynthetic, colonial filament in a sheath, bloom in polluted water → cyanobacterium (eubacteria).",
            "Thick-walled nitrogen-fixing cells → heterocysts.",
          ],
          answer: "A cyanobacterium (blue-green alga) with heterocysts, such as *Nostoc* or *Anabaena*.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Archaebacteria or eubacteria?",
            groups: ["Archaebacteria", "Eubacteria"],
            items: [
              { text: "Halophiles of salt pans", group: 0, hint: "Extreme salty habitat, special wall." },
              { text: "Methanogens in a buffalo's gut", group: 0, hint: "They make methane from dung." },
              { text: "Thermoacidophiles of hot springs", group: 0, hint: "Hot and acidic: a harsh habitat." },
              { text: "Anabaena with heterocysts", group: 1, hint: "A cyanobacterium." },
              { text: "Bacterium that curdles milk", group: 1, hint: "A heterotrophic 'true' bacterium." },
              { text: "Nitrifying chemosynthetic bacterium", group: 1, hint: "Oxidises ammonia and nitrites." },
            ],
            explain: "Archaebacteria live in extreme habitats (salt, heat, marshes and rumen) and have a different wall. All other bacteria, including cyanobacteria, are eubacteria.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Biogas is produced from cattle dung mainly by:",
              options: ["Halophiles", "Methanogens", "Cyanobacteria", "Mycoplasma"],
              answer: 1,
              explain: "Methanogens, archaebacteria found in the rumen of cattle, release methane.",
            },
          ],
        },
        {
          type: "text",
          md: "**Reproduction**: mainly by **fission**; under unfavourable conditions bacteria form **spores**; a primitive sexual process occurs by **transfer of DNA** from one bacterium to another.\n\n**Mycoplasma** completely **lack a cell wall**. They are the **smallest living cells known**, can survive **without oxygen**, and many are pathogenic in animals and plants.",
        },
        {
          type: "mistake",
          wrong: "Blue-green algae are true algae, so they belong to kingdom Plantae.",
          right: "Blue-green algae are cyanobacteria: prokaryotes in kingdom Monera.",
          why: "The old name and their green colour suggest algae. But they have no nucleus or membrane-bound plastids; their chlorophyll a lies in membranes in the cytoplasm.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Whittaker's five criteria are a favourite 2-mark question; write all five. For 'Give two uses of heterotrophic bacteria' and 'Name three groups of archaebacteria with habitats', answer in NCERT's words. Draw coccus, bacillus, vibrio and spirillum as simple outlines if asked for shapes.",
        },
        {
          type: "keypoints",
          items: [
            "Whittaker (1969): Monera, Protista, Fungi, Plantae, Animalia; criteria: cell structure, body organisation, nutrition, reproduction, phylogeny.",
            "Archaebacteria: halophiles, thermoacidophiles, methanogens (biogas from dung); different cell wall.",
            "Cyanobacteria: chlorophyll a, blooms, heterocysts in Nostoc and Anabaena.",
            "Mycoplasma: no cell wall, smallest living cells, survive without oxygen.",
          ],
        },
      ],
      flashcards: [
        { front: "Who proposed the five-kingdom classification, and when?", back: "R.H. Whittaker, 1969." },
        { front: "Whittaker's five criteria", back: "Cell structure, body organisation, mode of nutrition, reproduction, phylogenetic relationships." },
        { front: "Three groups of archaebacteria", back: "Halophiles (salty), thermoacidophiles (hot springs), methanogens (marshes, rumen)." },
        { front: "Heterocysts", back: "Specialised nitrogen-fixing cells of cyanobacteria such as *Nostoc* and *Anabaena*." },
        { front: "Smallest living cells known", back: "Mycoplasma; they lack a cell wall." },
        { front: "Bacterial shapes", back: "Coccus (sphere), bacillus (rod), vibrio (comma), spirillum (spiral)." },
        { front: "Role of chemosynthetic autotrophs", back: "Oxidise nitrates, nitrites, ammonia for ATP; recycle N, P, Fe and S." },
        { front: "Problems of the two-kingdom system", back: "No separation of prokaryotes/eukaryotes, unicellular/multicellular, photosynthetic/non-photosynthetic organisms." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which kingdom contains only prokaryotes?",
          options: ["Protista", "Monera", "Fungi", "Plantae"],
          answer: 1,
          explain: "Monera is the only prokaryotic kingdom.",
        },
        {
          kind: "mcq",
          q: "In Whittaker's table, the cell wall of fungi is described as:",
          options: ["Cellulosic", "Absent", "Present, without cellulose", "Polysaccharide + amino acid"],
          answer: 2,
          explain: "Fungal walls are of chitin and polysaccharides, not cellulose.",
        },
        {
          kind: "truefalse",
          q: "Mycoplasma can survive without oxygen.",
          answer: true,
          explain: "NCERT notes mycoplasma can live without oxygen; they also lack a cell wall.",
        },
        {
          kind: "multi",
          q: "Which diseases are caused by bacteria (as listed by NCERT)?",
          options: ["Cholera", "Typhoid", "Tetanus", "Citrus canker", "Malaria"],
          answers: [0, 1, 2, 3],
          explain: "Malaria is caused by the protist *Plasmodium*.",
        },
        {
          kind: "fill",
          q: "Archaebacteria found in hot springs are called ___.",
          answer: ["thermoacidophiles", "thermoacidophile"],
          explain: "Halophiles live in salty places; methanogens in marshes and rumen.",
        },
        {
          kind: "mcq",
          q: "Chemosynthetic autotrophic bacteria obtain energy by:",
          options: ["Absorbing sunlight", "Oxidising inorganic substances such as ammonia", "Digesting dead matter", "Parasitising plants"],
          answer: 1,
          explain: "They oxidise nitrates, nitrites and ammonia and use the energy to make ATP.",
        },
        {
          kind: "mcq",
          q: "Bacteria reproduce mainly by:",
          options: ["Budding", "Fission", "Conidia", "Zoospores"],
          answer: 1,
          explain: "Fission is the main mode; spores under unfavourable conditions; DNA transfer as a primitive sexual process.",
        },
        {
          kind: "mcq",
          q: "Which pair of organisms did Whittaker bring together into Protista even though one has a cell wall and the other does not?",
          options: ["*Chlamydomonas* and *Amoeba*", "*Nostoc* and *Anabaena*", "Yeast and *Penicillium*", "*Mucor* and *Rhizopus*"],
          answer: 0,
          explain: "*Chlamydomonas* (walled, earlier an alga) and *Amoeba* (no wall, earlier an animal) are both protists.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Lesson 2: Protista ---------------- */
    {
      slug: "c11-kingdom-protista",
      title: "Kingdom Protista",
      summary:
        "Single-celled eukaryotes: chrysophytes, dinoflagellates, euglenoids, slime moulds and the four groups of protozoans, with their NCERT examples.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Sometimes coastal water looks red, and dead fish wash up on the beach. Toothpaste and metal polish may contain a fine white powder made from the shells of microscopic organisms. Both stories belong to **protists**.",
        },
        {
          type: "illustration",
          emoji: "🌊",
          caption: "A red tide: the sea turns red when red dinoflagellates such as Gonyaulax multiply very fast.",
        },
        {
          type: "text",
          md: "Kingdom **Protista** contains all **single-celled eukaryotes**. Its boundaries are not well defined. Members are **primarily aquatic**. They have a well-formed nucleus and membrane-bound organelles; some have **flagella or cilia**. They reproduce **asexually and sexually** by cell fusion and zygote formation. Protists form a **link** with plants, animals and fungi.",
        },
        {
          type: "table",
          headers: ["Group", "Key features", "Examples / importance"],
          rows: [
            ["Chrysophytes", "Diatoms and golden algae (desmids); fresh water and marine; plankton; mostly photosynthetic. Diatom walls are **two overlapping shells like a soap box**, embedded with **silica**, so they do not decay", "Wall deposits = **diatomaceous earth**, used in polishing and filtering oils and syrups. Diatoms are the **chief producers in the oceans**."],
            ["Dinoflagellates", "Mostly marine, photosynthetic; yellow, green, brown, blue or red; **stiff cellulose plates** on the wall; **two flagella**, one longitudinal and one transverse in a furrow", "Red *Gonyaulax* multiplies fast and causes **red tides**; its toxins may kill fish"],
            ["Euglenoids", "Mostly in stagnant fresh water; **no cell wall** but a flexible protein-rich **pellicle**; **two flagella**, one short and one long; photosynthetic in light, heterotrophic (predators) in the dark; pigments identical to higher plants", "*Euglena*"],
            ["Slime moulds", "**Saprophytic**; body moves over decaying twigs and leaves, engulfing organic matter; in good conditions forms a **plasmodium** spreading over several feet; in bad conditions forms **fruiting bodies** with spores at the tips", "Spores have **true walls**, are extremely resistant, survive many years and spread by air"],
            ["Protozoans", "**Heterotrophs** (predators or parasites); thought to be primitive relatives of animals", "Four groups, below"],
          ],
        },
        {
          type: "heading",
          text: "The four groups of protozoans",
        },
        {
          type: "table",
          headers: ["Group", "Feature", "Example"],
          rows: [
            ["Amoeboid", "Fresh water, sea water or moist soil; move and capture prey with **pseudopodia**; marine forms have silica shells", "*Amoeba*; parasitic *Entamoeba*"],
            ["Flagellated", "Free-living or parasitic; move by flagella", "*Trypanosoma* causes **sleeping sickness**"],
            ["Ciliated", "Aquatic, actively moving with thousands of **cilia**; a cavity (**gullet**) opens to the outside; rows of cilia steer food-laden water into it", "*Paramoecium*"],
            ["Sporozoans", "An infectious **spore-like stage** in the life cycle", "*Plasmodium* causes **malaria**"],
          ],
        },
        {
          type: "example",
          title: "Identify the protist",
          problem: "A cell in a stagnant pond has no cell wall but keeps a definite yet changeable shape. It has two flagella of unequal length and chloroplasts. When the pond is shaded for a week it still survives by eating smaller organisms. Name it and its group, and state the features that prove it.",
          steps: [
            "Eukaryotic, single-celled → Protista.",
            "Flexible protein-rich covering instead of a wall → pellicle.",
            "Two flagella, one short and one long; photosynthetic in light and heterotrophic in darkness → euglenoid.",
          ],
          answer: "*Euglena*, a euglenoid: pellicle, two unequal flagella and mixed nutrition.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each protist with its feature.",
            pairs: [
              ["Gonyaulax", "Red tides"],
              ["Diatoms", "Silica walls; diatomaceous earth"],
              ["Trypanosoma", "Sleeping sickness"],
              ["Plasmodium", "Malaria"],
              ["Paramoecium", "Cilia and a gullet"],
              ["Slime mould", "Plasmodium stage and resistant spores"],
            ],
            explain: "Two different 'plasmodiums': *Plasmodium* (capital, italic) is the malaria parasite; a plasmodium is the feeding stage of a slime mould.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The chief producers in the oceans are:",
              options: ["Dinoflagellates", "Diatoms", "Euglenoids", "Slime moulds"],
              answer: 1,
              explain: "NCERT calls diatoms the chief 'producers' in the oceans.",
            },
            {
              kind: "truefalse",
              q: "Euglenoids have a cellulose cell wall.",
              answer: false,
              explain: "They lack a cell wall; a protein-rich pellicle makes the body flexible.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Slime moulds are fungi because they make spores and grow on decaying matter.",
          right: "Slime moulds are saprophytic protists in Whittaker's system.",
          why: "The word 'mould' and the spores suggest fungi. But the feeding stage is a wall-less, moving plasmodium that engulfs food, which is not how fungi feed.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For 'How are diatoms useful?' write: diatomaceous earth (polishing, filtration of oils and syrups) and chief producers in oceans. For dinoflagellates always add the red tide example *Gonyaulax*.",
        },
        {
          type: "keypoints",
          items: [
            "Protista: single-celled eukaryotes, mostly aquatic; link with plants, animals and fungi.",
            "Diatoms: silica soap-box walls → diatomaceous earth; chief producers in oceans.",
            "Dinoflagellates: cellulose plates, two flagella (longitudinal + transverse), Gonyaulax red tides.",
            "Euglenoids: pellicle, two unequal flagella, mixotrophic. Slime moulds: plasmodium, resistant spores.",
            "Protozoans: amoeboid (Entamoeba), flagellated (Trypanosoma), ciliated (Paramoecium), sporozoans (Plasmodium).",
          ],
        },
      ],
      flashcards: [
        { front: "Diatomaceous earth", back: "Silica-rich remains of diatom walls; used in polishing and filtering oils and syrups." },
        { front: "Cause of red tides", back: "Rapid multiplication of red dinoflagellates such as *Gonyaulax*." },
        { front: "Flagella of dinoflagellates", back: "Two: one longitudinal, one transverse in a furrow between wall plates." },
        { front: "Pellicle", back: "Flexible protein-rich layer of euglenoids, in place of a cell wall." },
        { front: "Plasmodium of slime moulds", back: "Aggregated feeding stage that may spread over several feet." },
        { front: "Protozoan with a gullet", back: "*Paramoecium* (ciliated)." },
        { front: "Sleeping sickness", back: "Caused by the flagellated protozoan *Trypanosoma*." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which protist group has cell walls like two overlapping shells of a soap box?",
          options: ["Diatoms", "Dinoflagellates", "Euglenoids", "Sporozoans"],
          answer: 0,
          explain: "Diatom walls are two thin overlapping silica shells.",
        },
        {
          kind: "mcq",
          q: "Malaria is caused by a:",
          options: ["Flagellated protozoan", "Ciliated protozoan", "Sporozoan", "Amoeboid protozoan"],
          answer: 2,
          explain: "*Plasmodium* is a sporozoan, with an infectious spore-like stage.",
        },
        {
          kind: "mcq",
          q: "Spores of slime moulds are:",
          options: ["Naked and short-lived", "With true walls and extremely resistant", "Flagellated", "Formed inside the gullet"],
          answer: 1,
          explain: "They have true walls, resist adverse conditions for many years and are carried by air.",
        },
        {
          kind: "truefalse",
          q: "Protozoans are believed to be primitive relatives of animals.",
          answer: true,
          explain: "They are heterotrophic predators or parasites, like animals.",
        },
        {
          kind: "multi",
          q: "Which are photosynthetic protists?",
          options: ["Diatoms", "Dinoflagellates", "Euglena (in light)", "Trypanosoma", "Slime moulds"],
          answers: [0, 1, 2],
          explain: "Trypanosoma is a parasite and slime moulds are saprophytes.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Marine amoeboid protozoans have shells made of ___.",
          answer: ["silica"],
          explain: "NCERT notes marine amoeboid forms have silica shells on their surface.",
        },
        {
          kind: "mcq",
          q: "An organism behaves like a plant in sunlight and like an animal in darkness. It is most likely:",
          options: ["*Paramoecium*", "*Euglena*", "*Amoeba*", "*Plasmodium*"],
          answer: 1,
          explain: "Euglenoids photosynthesise in light and become heterotrophs (predators) when deprived of light.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Lesson 3: Fungi ---------------- */
    {
      slug: "c11-kingdom-fungi",
      title: "Kingdom Fungi",
      summary:
        "Hyphae and mycelium, nutrition, vegetative, asexual and sexual reproduction, the dikaryon, and the four classes: Phycomycetes, Ascomycetes, Basidiomycetes and Deuteromycetes.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Bread left in a damp box in the monsoon grows fluffy black mould. Mushrooms pop up on a lawn after rain. White powdery spots appear on mustard leaves in a Rajasthan field. Yeast makes idli batter and bread rise. All these are **fungi**, a kingdom of heterotrophs that is neither plant nor animal.",
        },
        {
          type: "text",
          md: "Except unicellular **yeasts**, fungi are **filamentous**. Their bodies are long, slender threads called **hyphae**; the network of hyphae is the **mycelium**. Some hyphae are continuous tubes with many nuclei, called **coenocytic hyphae**; others have cross-walls (**septae**). The cell wall is made of **chitin and polysaccharides**.\n\nMost fungi are **saprophytes** absorbing soluble organic matter from dead substrates; some are **parasites** (e.g. *Puccinia*, wheat rust). Some live as **symbionts**: with algae as **lichens** and with roots of higher plants as **mycorrhiza**. Fungi are cosmopolitan and prefer **warm, humid places**, which is why we refrigerate food.",
        },
        {
          type: "list",
          items: [
            "**Vegetative reproduction**: fragmentation, fission and budding.",
            "**Asexual reproduction**: spores called **conidia**, **sporangiospores** or **zoospores**.",
            "**Sexual reproduction**: **oospores**, **ascospores** and **basidiospores**, formed in distinct structures called **fruiting bodies**.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{Plasmogamy} \;\rightarrow\; (\text{dikaryon } n+n) \;\rightarrow\; \text{Karyogamy } (2n) \;\rightarrow\; \text{Meiosis} \;\rightarrow\; \text{haploid spores } (n)`,
          caption: "The sexual cycle. Two haploid hyphae of compatible mating types fuse. In some fungi the cell becomes 2n at once; in ascomycetes and basidiomycetes a dikaryotic stage (dikaryophase) comes in between.",
        },
        {
          type: "table",
          headers: ["Class", "Mycelium", "Asexual spores", "Sexual spores", "Examples"],
          rows: [
            ["Phycomycetes", "**Aseptate, coenocytic**; aquatic, on moist decaying wood, or obligate parasites", "**Zoospores** (motile) or **aplanospores** (non-motile), endogenous in a sporangium", "**Zygospore** from fusion of two gametes (isogamous, anisogamous or oogamous)", "*Mucor*, *Rhizopus* (bread mould), *Albugo* (parasite on mustard)"],
            ["Ascomycetes (sac fungi)", "Branched, **septate**; mostly multicellular, yeast unicellular; saprophytic, parasitic or **coprophilous** (on dung)", "**Conidia**, exogenous on **conidiophores**", "**Ascospores**, endogenous in **asci**, inside **ascocarps**", "*Penicillium*, yeast (*Saccharomyces*), *Aspergillus*, *Claviceps*, *Neurospora*; morels and truffles"],
            ["Basidiomycetes", "Branched, **septate**; on soil, logs, tree stumps; rusts and smuts parasitic", "Generally **absent**; fragmentation common", "**Basidiospores**, exogenous on **basidia**, in **basidiocarps**; no sex organs, plasmogamy by fusion of somatic cells", "*Agaricus* (mushroom), *Ustilago* (smut), *Puccinia* (rust); bracket fungi, puffballs"],
            ["Deuteromycetes (imperfect fungi)", "Septate, branched; many decomposers of litter", "**Conidia** only", "**Not known**; when found, the fungus is moved to ascomycetes or basidiomycetes", "*Alternaria*, *Colletotrichum*, *Trichoderma*"],
          ],
        },
        {
          type: "example",
          title: "Identify the class",
          problem: "A fungus growing on a rotting log has septate hyphae and makes no asexual spores. Two somatic cells of different strains fuse, the cell stays with two nuclei for a long time, and finally club-shaped cells each produce four spores on their outside. Name the class and the structures.",
          steps: [
            "No asexual spores and plasmogamy by fusion of somatic cells → basidiomycete.",
            "The two-nucleate stage is the dikaryon (n + n).",
            "Karyogamy and meiosis in each club-shaped basidium give four exogenous basidiospores.",
          ],
          answer: "Basidiomycetes: dikaryotic mycelium, basidia, four basidiospores per basidium, borne in a basidiocarp.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each fungus into its class.",
            groups: ["Phycomycetes", "Ascomycetes", "Basidiomycetes"],
            items: [
              { text: "Mucor", group: 0, hint: "Coenocytic pin mould." },
              { text: "Albugo", group: 0, hint: "White spots on mustard; aseptate." },
              { text: "Aspergillus", group: 1, hint: "Conidia on conidiophores." },
              { text: "Neurospora", group: 1, hint: "Used in genetics; asci." },
              { text: "Claviceps", group: 1, hint: "A sac fungus." },
              { text: "Agaricus", group: 2, hint: "The common mushroom." },
              { text: "Ustilago", group: 2, hint: "Smut fungus." },
              { text: "Puccinia", group: 2, hint: "Rust of wheat." },
            ],
            explain: "Aseptate with zygospores → Phycomycetes. Asci and conidia → Ascomycetes. Basidia, rusts, smuts and mushrooms → Basidiomycetes.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Fungi known only by their asexual stage are placed in:",
              options: ["Phycomycetes", "Ascomycetes", "Basidiomycetes", "Deuteromycetes"],
              answer: 3,
              explain: "Deuteromycetes are the imperfect fungi; they reproduce only by conidia.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Fungal cell walls are made of cellulose, as in plants.",
          right: "Fungal cell walls are made of chitin and polysaccharides.",
          why: "Fungi were once called plants, so students borrow the plant wall. Chitin, the same substance as in insect exoskeletons, is one reason fungi are a separate kingdom.",
        },
        {
          type: "callout",
          tone: "fact",
          title: "Fungi and people",
          md: "Yeast makes bread and beer. *Penicillium* is a source of antibiotics. *Neurospora* is widely used in biochemical and genetic work. Morels and truffles are edible delicacies. *Puccinia* (wheat rust), *Ustilago* (smut) and *Albugo* (white rust of mustard) damage crops.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "The comparison table of the four classes is a 5-mark favourite. Use the same headings every time: mycelium, asexual spores, sexual spores, fruiting body, examples. Write 'exogenous' for conidia and basidiospores and 'endogenous' for ascospores and sporangial spores.",
        },
        {
          type: "keypoints",
          items: [
            "Hyphae form mycelium; coenocytic = aseptate and multinucleate; walls of chitin.",
            "Sexual cycle: plasmogamy → (dikaryon) → karyogamy → meiosis.",
            "Phycomycetes: aseptate, zygospore (Mucor, Rhizopus, Albugo).",
            "Ascomycetes: conidia, asci in ascocarps (yeast, Penicillium, Aspergillus, Claviceps, Neurospora).",
            "Basidiomycetes: basidia in basidiocarps (Agaricus, Ustilago, Puccinia). Deuteromycetes: conidia only (Alternaria, Colletotrichum, Trichoderma).",
          ],
        },
      ],
      flashcards: [
        { front: "Coenocytic hyphae", back: "Continuous hyphae without septae, with many nuclei in common cytoplasm." },
        { front: "Three steps of the fungal sexual cycle", back: "Plasmogamy, karyogamy, meiosis in the zygote." },
        { front: "Dikaryon", back: "A cell with two haploid nuclei (n + n), seen in ascomycetes and basidiomycetes." },
        { front: "Coprophilous fungi", back: "Fungi growing on dung (some ascomycetes)." },
        { front: "Fruiting body of ascomycetes", back: "Ascocarp, containing asci with ascospores." },
        { front: "Fruiting body of basidiomycetes", back: "Basidiocarp, bearing basidia with basidiospores." },
        { front: "Why are deuteromycetes called imperfect fungi?", back: "Only asexual or vegetative phases are known." },
        { front: "Fungus used in genetic studies", back: "*Neurospora*." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Asexual spores of ascomycetes are:",
          options: ["Zoospores", "Conidia", "Basidiospores", "Ascospores"],
          answer: 1,
          explain: "Conidia are produced exogenously on conidiophores. Ascospores are sexual.",
        },
        {
          kind: "mcq",
          q: "*Albugo* belongs to:",
          options: ["Phycomycetes", "Ascomycetes", "Basidiomycetes", "Deuteromycetes"],
          answer: 0,
          explain: "*Albugo*, the parasite causing white spots on mustard, is a phycomycete.",
        },
        {
          kind: "truefalse",
          q: "In basidiomycetes, sex organs are absent and plasmogamy occurs by fusion of somatic cells.",
          answer: true,
          explain: "Two vegetative cells of different strains fuse to form the dikaryotic mycelium.",
        },
        {
          kind: "mcq",
          q: "Which is a unicellular ascomycete?",
          options: ["*Mucor*", "Yeast", "*Agaricus*", "*Alternaria*"],
          answer: 1,
          explain: "Yeast (*Saccharomyces*) is a unicellular sac fungus.",
        },
        {
          kind: "multi",
          q: "Which are deuteromycetes?",
          options: ["*Alternaria*", "*Colletotrichum*", "*Trichoderma*", "*Claviceps*"],
          answers: [0, 1, 2],
          explain: "*Claviceps* is an ascomycete.",
        },
        {
          kind: "order",
          q: "Arrange the events of fungal sexual reproduction in order.",
          items: ["Fusion of two compatible hyphae (plasmogamy)", "Dikaryotic stage", "Fusion of nuclei (karyogamy)", "Meiosis forming haploid spores"],
          explain: "Plasmogamy comes first; karyogamy may be delayed by a dikaryotic stage; meiosis follows.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Basidiospores are produced:",
          options: ["Endogenously in asci", "Exogenously on basidia", "Endogenously in sporangia", "Exogenously on conidiophores"],
          answer: 1,
          explain: "Basidiospores form on the outside of the basidium.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which symbiotic association of a fungus is with roots of higher plants?",
          options: ["Lichen", "Mycorrhiza", "Heterocyst", "Coralloid root"],
          answer: 1,
          explain: "Mycorrhiza is fungus + root. Lichen is fungus + alga.",
        },
      ],
    },

    /* ---------------- Lesson 4: Plantae, Animalia, acellular agents, lichens ---------------- */
    {
      slug: "c11-viruses-viroids-lichens",
      title: "Plantae, Animalia, Viruses, Viroids, Prions and Lichens",
      summary:
        "Kingdoms Plantae and Animalia in brief, then the agents left out of the five kingdoms: viruses, viroids and prions, and the lichen partnership.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "**Kingdom Plantae** includes all eukaryotic **chlorophyll-containing** organisms: algae, bryophytes, pteridophytes, gymnosperms and angiosperms. Cell walls are mainly **cellulose**. A few are partially heterotrophic: **insectivorous** plants such as bladderwort and Venus fly trap, and **parasites** such as *Cuscuta*. Their life cycle shows **alternation of generations** between a diploid sporophyte and a haploid gametophyte.",
        },
        {
          type: "text",
          md: "**Kingdom Animalia** contains multicellular **heterotrophic eukaryotes** whose cells **lack cell walls**. They depend directly or indirectly on plants, digest food in an internal cavity (**holozoic** nutrition) and store food as **glycogen or fat**. They follow a definite growth pattern, most can move, and higher forms have elaborate sensory and neuromotor systems. Sexual reproduction is by copulation of male and female, followed by embryological development.",
        },
        {
          type: "heading",
          text: "Viruses: alive or not?",
        },
        {
          type: "text",
          md: "Whittaker's system has no place for **lichens** or for the **acellular** viruses, viroids and prions. Viruses have no cell. Outside a host they are **inert crystals**; inside a cell they take over its machinery to make copies of themselves, often killing it. They are **obligate parasites**. The word *virus* means venom or poisonous fluid.\n\n- **Dmitri Ivanowsky (1892)**: the agent of **tobacco mosaic** disease is smaller than bacteria, because it passes through bacteria-proof filters.\n- **M.W. Beijerinck (1898)**: extract of infected tobacco infects healthy plants; he called it **contagium vivum fluidum** (infectious living fluid).\n- **W.M. Stanley (1935)**: viruses can be **crystallised**; the crystals are mostly protein.",
        },
        {
          type: "table",
          headers: ["Virus type", "Usual genetic material"],
          rows: [
            ["Plant viruses", "Single-stranded RNA"],
            ["Animal viruses", "Single- or double-stranded RNA, or double-stranded DNA"],
            ["Bacteriophages (bacterial viruses)", "Usually double-stranded DNA"],
          ],
        },
        {
          type: "text",
          md: "A virus is a **nucleoprotein**: genetic material (RNA **or** DNA, never both) inside a protein coat, the **capsid**, made of subunits called **capsomeres** arranged in **helical or polyhedral** forms. The genetic material is the infectious part.\n\nHuman viral diseases: **mumps, smallpox, herpes, influenza, AIDS**. Plant symptoms: **mosaic formation, leaf rolling and curling, yellowing and vein clearing, dwarfing and stunted growth**.",
        },
        {
          type: "example",
          title: "Reasoning about the living status of viruses",
          problem: "Give one property of viruses that supports calling them living, and one that supports calling them non-living. Then say why Whittaker could not place them.",
          steps: [
            "Living-like: inside a host cell they replicate and carry genetic material (RNA or DNA) that can mutate.",
            "Non-living-like: they can be crystallised (Stanley) and are inert outside a host; they have no metabolism of their own.",
            "Whittaker's kingdoms are built on cell structure; viruses are acellular.",
          ],
          answer: "They replicate inside hosts (living) but are inert crystals outside (non-living); having no cells, they fit no kingdom.",
        },
        {
          type: "heading",
          text: "Viroids, prions and lichens",
        },
        {
          type: "table",
          headers: ["Agent", "What it is", "Disease / example"],
          rows: [
            ["Viroid", "**Free RNA** of low molecular weight, **no protein coat**; smaller than viruses; discovered by **T.O. Diener (1971)**", "**Potato spindle tuber** disease"],
            ["Prion", "**Abnormally folded protein**, similar in size to viruses", "**BSE** (mad cow disease) in cattle; **CJD** (Creutzfeldt–Jakob disease) in humans"],
            ["Lichen", "Mutually useful (symbiotic) association of an **alga (phycobiont)** and a **fungus (mycobiont)**", "**Pollution indicators**: do not grow in polluted areas"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{Lichen} = \underbrace{\text{phycobiont}}_{\text{alga: autotroph, makes food}} + \underbrace{\text{mycobiont}}_{\text{fungus: shelter, water, minerals}}`,
          caption: "Each partner gives the other what it cannot make for itself; so close is the partnership that the lichen looks like one organism.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "A viroid differs from a virus because it lacks a...",
            emoji: "🧫",
            options: ["Genetic RNA", "Protein coat", "Host plant", "Ability to cause disease"],
            answer: 1,
            trap: 0,
            explain: "A viroid is nothing but free RNA. It has RNA (so it is not RNA that is missing) but no capsid. It still causes disease, e.g. potato spindle tuber.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "'Contagium vivum fluidum' was the name given by:",
              options: ["Ivanowsky", "Beijerinck", "Stanley", "Diener"],
              answer: 1,
              explain: "M.W. Beijerinck (1898) called the infectious extract of diseased tobacco 'contagium vivum fluidum'.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Some viruses contain both DNA and RNA.",
          right: "No virus contains both; a virus has either RNA or DNA.",
          why: "Cells have both, so students expect viruses to have both too. A virus carries only one kind of genetic material inside its capsid.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "'Write a short note on viruses' (3–5 marks): history (three names with years), nucleoprotein structure, genetic material by host, capsid and capsomeres, two human and two plant symptoms. Add a labelled outline of TMV (helical) or a bacteriophage (head, tail, tail fibres) if asked.",
        },
        {
          type: "keypoints",
          items: [
            "Plantae: chlorophyll, cellulose walls, alternation of generations; Cuscuta parasitic; bladderwort and Venus fly trap insectivorous.",
            "Animalia: no cell walls, holozoic, glycogen or fat as reserve.",
            "Viruses: Ivanowsky 1892, Beijerinck 1898, Stanley 1935; RNA or DNA, never both; capsid of capsomeres.",
            "Viroid (Diener 1971): free RNA, potato spindle tuber. Prion: misfolded protein, BSE and CJD.",
            "Lichen: phycobiont + mycobiont; pollution indicator.",
          ],
        },
      ],
      flashcards: [
        { front: "Ivanowsky (1892)", back: "Found the tobacco mosaic agent is smaller than bacteria (passes bacteria-proof filters)." },
        { front: "Stanley (1935)", back: "Showed viruses can be crystallised; crystals mainly protein." },
        { front: "Genetic material of plant viruses", back: "Usually single-stranded RNA." },
        { front: "Genetic material of bacteriophages", back: "Usually double-stranded DNA." },
        { front: "Capsomeres", back: "Protein subunits of the capsid, arranged in helical or polyhedral form." },
        { front: "Viroid", back: "Free low molecular weight RNA without protein coat; potato spindle tuber disease (Diener, 1971)." },
        { front: "Prion diseases", back: "BSE (mad cow disease) in cattle; CJD in humans." },
        { front: "Phycobiont and mycobiont", back: "Algal and fungal partners of a lichen." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is a partially heterotrophic plant according to NCERT?",
          options: ["Mango", "Cuscuta", "Wheat", "Pinus"],
          answer: 1,
          explain: "*Cuscuta* is a parasite; insectivorous plants are also partially heterotrophic.",
        },
        {
          kind: "mcq",
          q: "Animals store food reserves as:",
          options: ["Starch", "Glycogen or fat", "Floridean starch", "Cellulose"],
          answer: 1,
          explain: "Animals store glycogen or fat.",
        },
        {
          kind: "multi",
          q: "Which are symptoms of viral infection in plants?",
          options: ["Mosaic formation", "Leaf rolling and curling", "Vein clearing", "Dwarfing", "Red tides"],
          answers: [0, 1, 2, 3],
          explain: "Red tides are caused by dinoflagellates.",
        },
        {
          kind: "truefalse",
          q: "Lichens grow well in heavily polluted industrial areas.",
          answer: false,
          explain: "Lichens do not grow in polluted areas, so they are good pollution indicators.",
        },
        {
          kind: "mcq",
          q: "Potato spindle tuber disease is caused by a:",
          options: ["Virus", "Viroid", "Prion", "Bacterium"],
          answer: 1,
          explain: "Diener (1971) found a viroid, a free RNA without protein coat.",
        },
        {
          kind: "fill",
          q: "The protein coat of a virus is called the ___.",
          answer: ["capsid"],
          explain: "The capsid is built of capsomeres.",
        },
        {
          kind: "mcq",
          q: "In a lichen, the partner that makes food is the:",
          options: ["Mycobiont", "Phycobiont", "Capsomere", "Heterocyst"],
          answer: 1,
          explain: "The algal phycobiont is autotrophic; the fungal mycobiont gives shelter and absorbs water and minerals.",
        },
        {
          kind: "mcq",
          q: "Which statement about prions is correct?",
          options: ["They are free RNA molecules", "They are abnormally folded proteins", "They have a cell wall", "They cause tobacco mosaic"],
          answer: 1,
          explain: "Prions are misfolded proteins that cause BSE and CJD.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-biological-classification-exam-edge",
      title: "Exam edge: Biological Classification",
      summary:
        "NEET and KCET favourites: the Whittaker table, organism–disease–group matches, fungal classes, viruses and viroids, with assertion–reason and statement questions.",
      minutes: 24,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually asks 2–4 questions from this chapter. Favourites: matching organisms with groups (*Gonyaulax*, *Trypanosoma*, *Albugo*, *Ustilago*), the fungal classes, Whittaker's criteria, mycoplasma, archaebacteria habitats, and virus history and genetic material. **KCET** asks the same as one-line facts and matches. Nearly every answer is an NCERT sentence, so learn the lines and the examples.",
        },
        {
          type: "list",
          items: [
            "NCERT line: bacteria are the **sole members** of kingdom Monera.",
            "NCERT line: archaebacteria differ from other bacteria in having a **different cell wall structure**.",
            "NCERT line: methanogens in the gut of ruminants produce **methane (biogas)** from the dung.",
            "NCERT line: mycoplasma are the **smallest living cells known** and can survive without oxygen.",
            "NCERT line: diatoms are the **chief producers** in the oceans.",
            "NCERT line: slime mould spores possess **true walls**.",
            "NCERT line: **no virus contains both RNA and DNA**.",
            "NCERT line: lichens are very good **pollution indicators**.",
          ],
        },
        {
          type: "table",
          headers: ["Organism", "Group", "Remember for"],
          rows: [
            ["*Gonyaulax*", "Dinoflagellate", "Red tides"],
            ["*Trypanosoma*", "Flagellated protozoan", "Sleeping sickness"],
            ["*Plasmodium*", "Sporozoan", "Malaria"],
            ["*Albugo*", "Phycomycete", "White spots on mustard"],
            ["*Puccinia* / *Ustilago*", "Basidiomycete", "Rust / smut"],
            ["*Claviceps*, *Neurospora*, *Aspergillus*", "Ascomycete", "Sac fungi; Neurospora in genetics"],
            ["*Alternaria*, *Colletotrichum*, *Trichoderma*", "Deuteromycete", "Conidia only"],
            ["*Nostoc*, *Anabaena*", "Cyanobacteria", "Heterocysts, N2 fixation"],
          ],
        },
        {
          type: "example",
          title: "NEET level: match the column",
          problem: "Match: (a) Methanogens (b) Gonyaulax (c) Ustilago (d) Mycoplasma with (i) no cell wall (ii) smut (iii) biogas (iv) red tide.",
          steps: [
            "Methanogens are archaebacteria in rumen → biogas: (a)–(iii).",
            "Gonyaulax is a red dinoflagellate → red tide: (b)–(iv).",
            "Ustilago is a basidiomycete → smut: (c)–(ii).",
            "Mycoplasma lack a cell wall: (d)–(i).",
          ],
          answer: "(a)–(iii), (b)–(iv), (c)–(ii), (d)–(i).",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: Deuteromycetes are called imperfect fungi. R: Only their asexual or vegetative phases are known.",
          steps: [
            "A is true: NCERT uses the name imperfect fungi.",
            "R is true: they reproduce only by conidia.",
            "R explains A: 'imperfect' means the perfect (sexual) stage is unknown.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Statement analysis",
          problem: "Which statement is incorrect? (i) Plant viruses usually have single-stranded RNA. (ii) Bacteriophages usually have double-stranded DNA. (iii) Animal viruses have only double-stranded DNA. (iv) Viroids lack a protein coat.",
          steps: [
            "(i), (ii) and (iv) are NCERT statements.",
            "(iii) is wrong: animal viruses may have single- or double-stranded RNA, or double-stranded DNA.",
          ],
          answer: "Statement (iii) is incorrect.",
        },
        {
          type: "example",
          title: "Harder: counting in basidiomycetes",
          problem: "In a mushroom, 60 basidia complete their development. How many karyogamies, meiotic divisions and basidiospores occur? What is the ploidy of the mycelium just before karyogamy?",
          steps: [
            "Each basidium receives a dikaryotic (n + n) cell: 1 karyogamy per basidium → 60.",
            "The 2n nucleus undergoes 1 meiosis per basidium → 60 meioses.",
            "Each meiosis gives 4 basidiospores → 60 × 4 = 240.",
            "Before karyogamy the cells are dikaryotic: n + n (two separate haploid nuclei), not 2n.",
          ],
          answer: "60 karyogamies, 60 meioses, 240 basidiospores; the mycelium is dikaryotic (n + n).",
        },
        {
          type: "mistake",
          wrong: "Slime moulds and mycoplasma are fungi.",
          right: "Slime moulds are protists; mycoplasma are monerans (wall-less bacteria).",
          why: "'Mould' and 'myco-' both sound fungal. NEET options use exactly this trap. Check: is it eukaryotic? does it have chitin walls and hyphae? Neither organism does.",
        },
        {
          type: "mistake",
          wrong: "A dikaryotic cell is diploid.",
          right: "A dikaryon has two separate haploid nuclei (n + n); it becomes 2n only after karyogamy.",
          why: "Two sets of chromosomes in one cell sounds like 2n. But ploidy refers to one nucleus; until the nuclei fuse, each stays haploid.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which feature did Whittaker NOT use as a criterion?",
            emoji: "🗂️",
            options: ["Mode of nutrition", "Body organisation", "Habitat", "Phylogenetic relationships"],
            answer: 2,
            trap: 0,
            explain: "The five criteria are cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships. Habitat is not one.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Cyanobacteria are placed in kingdom Monera. R: They have chlorophyll a similar to green plants.",
              options: AR,
              answer: 1,
              explain: "Both are true, but they are monerans because they are prokaryotic, not because of chlorophyll a (plants have it too).",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn organism → group → disease or use as one line each.",
            "Fungal classes by spores: zygospore (Phyco), ascospore (Asco), basidiospore (Basidio), conidia only (Deutero).",
            "Dikaryon = n + n, not 2n.",
            "Virus genetic material: plants ssRNA, phages dsDNA, animals ss/ds RNA or dsDNA; never both.",
          ],
        },
      ],
      flashcards: [
        { front: "Kingdom with only prokaryotes", back: "Monera." },
        { front: "Fungus causing white spots on mustard", back: "*Albugo* (Phycomycetes)." },
        { front: "Scientist who crystallised viruses", back: "W.M. Stanley (1935)." },
        { front: "Viroid discoverer and year", back: "T.O. Diener, 1971." },
        { front: "Spore types by fungal class", back: "Zygospore, ascospore, basidiospore; Deuteromycetes only conidia." },
        { front: "Protist causing red tides", back: "*Gonyaulax* (dinoflagellate)." },
        { front: "Edible ascomycetes", back: "Morels and truffles." },
        { front: "Ploidy of a dikaryotic cell", back: "n + n (two separate haploid nuclei)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A: Fungi prefer to grow in warm and humid places. R: Food is kept in refrigerators to prevent fungal spoilage.",
          options: AR,
          answer: 1,
          explain: "Both are true NCERT statements, but R is a consequence (application) of A, not its explanation.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which pair is wrongly matched?",
          options: ["*Trypanosoma* – sleeping sickness", "*Puccinia* – rust", "*Claviceps* – Deuteromycetes", "*Rhizopus* – Phycomycetes"],
          answer: 2,
          explain: "*Claviceps* is an ascomycete.",
        },
        {
          kind: "numeric",
          q: "How many of the following are ascomycetes? Yeast, Penicillium, Agaricus, Aspergillus, Mucor, Neurospora, Alternaria, Claviceps.",
          answer: 5,
          explain: "Yeast, Penicillium, Aspergillus, Neurospora and Claviceps. Agaricus is a basidiomycete, Mucor a phycomycete, Alternaria a deuteromycete.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about Monera are correct?",
          options: [
            "Some cyanobacteria fix nitrogen in heterocysts",
            "Mycoplasma have a rigid cell wall",
            "Chemosynthetic bacteria help recycle nutrients like N, P, Fe and S",
            "Archaebacteria have a different cell wall structure from eubacteria",
          ],
          answers: [0, 2, 3],
          explain: "Mycoplasma completely lack a cell wall.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which feature is common to euglenoids and dinoflagellates?",
          options: ["Cellulose plates", "Pellicle", "Two flagella", "Silica shells"],
          answer: 2,
          explain: "Both have two flagella. Plates are only in dinoflagellates, pellicle only in euglenoids, silica in diatoms.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "In an ascomycete, 25 asci each produce the usual number of ascospores (8 per ascus, one meiosis followed by one mitosis). How many ascospores form in total?",
          answer: 200,
          explain: "8 ascospores per ascus × 25 asci = 200.",
          difficulty: 3,
          hint: "Meiosis gives 4 nuclei; one mitosis doubles them.",
        },
        {
          kind: "mcq",
          q: "Which statement about viruses is incorrect?",
          options: [
            "They are obligate parasites",
            "Their genetic material is infectious",
            "They are crystallisable",
            "They have both DNA and RNA in the capsid",
          ],
          answer: 3,
          explain: "No virus has both RNA and DNA.",
        },
        {
          kind: "mcq",
          q: "A: Euglenoids can survive in darkness. R: When deprived of sunlight they behave like heterotrophs by predating on smaller organisms.",
          options: AR,
          answer: 0,
          explain: "R directly explains how they survive without light.",
        },
        {
          kind: "mcq",
          q: "An organism has a eukaryotic, cellular body organisation, may have a cell wall, and may be autotrophic or heterotrophic. In Whittaker's table it fits only:",
          options: ["Monera", "Protista", "Fungi", "Plantae"],
          answer: 1,
          explain: "Protista: eukaryotic, cellular, wall present in some, both photosynthetic and heterotrophic. Monera is prokaryotic; fungi are heterotrophic only; plants are autotrophic with tissues.",
          difficulty: 3,
          hint: "Use the cell type and nutrition rows of the table.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Plant Kingdom                                                       */
/* ------------------------------------------------------------------ */
const plantKingdom: Topic = {
  slug: "c11-plant-kingdom",
  title: "Plant Kingdom",
  icon: "🌱",
  description:
    "Systems of classification, algae and their three classes, bryophytes, pteridophytes, gymnosperms and angiosperms, and the haplontic, diplontic and haplo-diplontic life cycles.",
  lessons: [
    /* ---------------- Lesson 1: classification systems and algae ---------------- */
    {
      slug: "c11-classification-systems-algae",
      title: "Systems of Classification and Algae",
      summary:
        "Artificial, natural and phylogenetic systems, numerical, cyto- and chemotaxonomy, the general features and uses of algae, and Chlorophyceae, Phaeophyceae and Rhodophyceae.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "The jelly in a dessert is set with **agar** from a red seaweed. Ice-cream stays smooth thanks to algal gums. Astronauts have tested *Chlorella* tablets as a protein supplement. Seaweeds are collected along the coasts of Tamil Nadu and Gujarat. These useful plants are **algae**, the simplest members of kingdom Plantae.",
        },
        {
          type: "table",
          headers: ["System", "Based on", "Note"],
          rows: [
            ["Artificial (e.g. Linnaeus)", "A few superficial characters: habit, colour, number and shape of leaves, or mainly the **androecium**", "Gave equal weight to vegetative and sexual characters; vegetative characters are easily affected by environment"],
            ["Natural (e.g. Bentham and Hooker, for flowering plants)", "Natural affinities: external features plus **ultrastructure, anatomy, embryology and phytochemistry**", "Groups plants that are really similar"],
            ["Phylogenetic", "**Evolutionary relationships**; assumes members of a taxon share a common ancestor", "Current systems"],
          ],
        },
        {
          type: "text",
          md: "Newer tools help resolve difficulties:\n\n- **Numerical taxonomy**: computers handle all observable characters, each given a number and code and **equal importance**; hundreds of characters can be compared at a time.\n- **Cytotaxonomy**: cytological information such as **chromosome number, structure and behaviour**.\n- **Chemotaxonomy**: the **chemical constituents** of the plant.",
        },
        {
          type: "heading",
          text: "Algae: general features",
        },
        {
          type: "text",
          md: "Algae are **chlorophyll-bearing, simple, thalloid, autotrophic** and **largely aquatic** (fresh water and marine). They also grow on moist stones, soil and wood, with fungi in lichens, and on animals (e.g. on the sloth bear). They range from **colonial** *Volvox* and **filamentous** *Ulothrix* and *Spirogyra* to massive marine **kelps**.\n\nReproduction: **vegetative** by fragmentation; **asexual** by spores, most often flagellated **zoospores**; **sexual** by fusion of gametes.",
        },
        {
          type: "table",
          headers: ["Type of sexual reproduction", "Gametes", "Example"],
          rows: [
            ["Isogamous (flagellated)", "Similar in size, both flagellated", "*Ulothrix*"],
            ["Isogamous (non-flagellated)", "Similar in size, both non-motile", "*Spirogyra*"],
            ["Anisogamous", "Dissimilar in size", "*Eudorina*"],
            ["Oogamous", "Large non-motile female + small motile male", "*Volvox*, *Fucus*"],
          ],
        },
        {
          type: "text",
          md: "**Uses**: algae do at least **half of all CO2 fixation** on Earth, raise dissolved oxygen and are **primary producers**. About 70 marine species, including *Porphyra*, *Laminaria* and *Sargassum*, are eaten. Brown algae give **algin** and red algae give **carrageen** (hydrocolloids). **Agar** from *Gelidium* and *Gracilaria* is used to grow microbes and in ice-creams and jellies. Protein-rich *Chlorella* is a food supplement.",
        },
        {
          type: "table",
          headers: ["Class", "Common name", "Major pigments", "Stored food", "Cell wall", "Flagella", "Habitat"],
          rows: [
            ["Chlorophyceae", "Green algae", "Chlorophyll a, b", "Starch", "Cellulose", "2–8, equal, apical", "Fresh, brackish and salt water"],
            ["Phaeophyceae", "Brown algae", "Chlorophyll a, c, fucoxanthin", "Mannitol, laminarin", "Cellulose and algin", "2, unequal, lateral", "Fresh water (rare), brackish, salt water"],
            ["Rhodophyceae", "Red algae", "Chlorophyll a, d, phycoerythrin", "Floridean starch", "Cellulose, pectin and polysulphate esters", "Absent", "Fresh water (some), brackish, salt water (most)"],
          ],
        },
        {
          type: "text",
          md: "**Green algae**: chloroplasts may be discoid, plate-like, reticulate, cup-shaped, spiral or ribbon-shaped; most have **pyrenoids** (protein + starch); wall has inner cellulose and outer pectose. *Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara*.\n\n**Brown algae**: mostly marine; from filamentous *Ectocarpus* to kelps up to **100 m**; olive green to brown by the amount of **fucoxanthin**; body has a **holdfast**, a stalk (**stipe**) and leaf-like **frond**; zoospores **pear-shaped with two unequal lateral flagella**. *Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus*.\n\n**Red algae**: **r-phycoerythrin**; mostly marine in warm areas, both near the surface and at great depths; **floridean starch** (like amylopectin and glycogen); non-motile spores and gametes; oogamous with complex post-fertilisation development. *Polysiphonia, Porphyra, Gracilaria, Gelidium*.",
        },
        {
          type: "example",
          title: "Identify the class",
          problem: "A marine alga is olive-brown, stores mannitol, has a holdfast, stipe and frond, and its zoospores bear two unequal lateral flagella. Name its class and give two examples.",
          steps: [
            "Brown colour from fucoxanthin; food stored as mannitol or laminarin → Phaeophyceae.",
            "Holdfast, stipe and frond are typical of large brown algae (kelps).",
            "Two unequal lateral flagella on pear-shaped zoospores confirm brown algae.",
          ],
          answer: "Phaeophyceae (brown algae), e.g. *Laminaria*, *Sargassum*, *Fucus*.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each alga into its class.",
            groups: ["Chlorophyceae", "Phaeophyceae", "Rhodophyceae"],
            items: [
              { text: "Chlamydomonas", group: 0, hint: "Unicellular green alga." },
              { text: "Spirogyra", group: 0, hint: "Ribbon-shaped spiral chloroplasts." },
              { text: "Chara", group: 0, hint: "A green alga." },
              { text: "Ectocarpus", group: 1, hint: "Simple branched filamentous brown alga." },
              { text: "Laminaria", group: 1, hint: "A kelp." },
              { text: "Polysiphonia", group: 2, hint: "Red alga." },
              { text: "Gelidium", group: 2, hint: "Source of agar." },
              { text: "Porphyra", group: 2, hint: "Edible red alga." },
            ],
            explain: "Green: Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara. Brown: Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus. Red: Polysiphonia, Porphyra, Gracilaria, Gelidium.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Floridean starch is the stored food of:",
              options: ["Green algae", "Brown algae", "Red algae", "Blue-green algae"],
              answer: 2,
              explain: "Red algae store floridean starch, similar to amylopectin and glycogen.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Spirogyra is anisogamous because only one gamete moves to the other.",
          right: "Spirogyra is isogamous: its gametes are non-flagellated and similar in size.",
          why: "In Spirogyra one gamete crawls through a tube to the other, which looks like 'male and female'. But isogamy and anisogamy are about size, and both gametes are the same size.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Reproduce Table 3.1 (pigments, food, wall, flagella, habitat) for a 5-mark comparison. For 'economic importance of algae' write any four: CO2 fixation, food (Porphyra, Laminaria, Sargassum), algin / carrageen, agar (Gelidium, Gracilaria), Chlorella.",
        },
        {
          type: "keypoints",
          items: [
            "Artificial (few characters, Linnaeus) → natural (Bentham and Hooker) → phylogenetic (evolution). Numerical, cyto- and chemotaxonomy help.",
            "Algal sex: isogamous (Ulothrix flagellated, Spirogyra non-flagellated), anisogamous (Eudorina), oogamous (Volvox, Fucus).",
            "Green: chl a, b, starch, pyrenoids. Brown: chl a, c, fucoxanthin, mannitol/laminarin, algin. Red: chl a, d, phycoerythrin, floridean starch.",
            "Agar from Gelidium and Gracilaria; algin from brown, carrageen from red algae.",
          ],
        },
      ],
      flashcards: [
        { front: "Basis of Linnaeus's artificial system", back: "A few characters, mainly the androecium." },
        { front: "Numerical taxonomy", back: "Computer-based; all observable characters given numbers and codes, each of equal importance." },
        { front: "Chemotaxonomy", back: "Uses chemical constituents of plants to resolve classification." },
        { front: "Oogamous algae in NCERT", back: "*Volvox* and *Fucus*." },
        { front: "Anisogamous alga", back: "*Eudorina*." },
        { front: "Pyrenoids", back: "Storage bodies in chloroplasts of green algae, containing protein and starch." },
        { front: "Sources of agar", back: "*Gelidium* and *Gracilaria* (red algae)." },
        { front: "Parts of a large brown alga", back: "Holdfast, stipe and frond." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Chlorophyll d is found in:",
          options: ["Chlorophyceae", "Phaeophyceae", "Rhodophyceae", "All three classes"],
          answer: 2,
          explain: "Red algae have chlorophyll a and d plus phycoerythrin.",
        },
        {
          kind: "mcq",
          q: "Brown algae vary in colour from olive green to brown depending on the amount of:",
          options: ["Phycoerythrin", "Fucoxanthin", "Chlorophyll b", "Carrageen"],
          answer: 1,
          explain: "The xanthophyll fucoxanthin gives the brown colour.",
        },
        {
          kind: "truefalse",
          q: "Red algae have no flagellated stages.",
          answer: true,
          explain: "Rhodophyceae have non-motile spores and gametes; flagella are absent.",
        },
        {
          kind: "fill",
          q: "The natural system of classification for flowering plants was given by George Bentham and Joseph Dalton ___.",
          answer: ["Hooker"],
          explain: "Bentham and Hooker's system used natural affinities.",
        },
        {
          kind: "multi",
          q: "Which are uses of algae given in NCERT?",
          options: ["Agar for culturing microbes", "Algin from brown algae", "Chlorella as a protein supplement", "Penicillin production"],
          answers: [0, 1, 2],
          explain: "Penicillin comes from the fungus *Penicillium*.",
        },
        {
          kind: "mcq",
          q: "The flagella of Chlorophyceae are:",
          options: ["2, unequal, lateral", "2–8, equal, apical", "Absent", "1, posterior"],
          answer: 1,
          explain: "Green algae have 2–8 equal apical flagella; brown algae have 2 unequal lateral flagella.",
        },
        {
          kind: "mcq",
          q: "Classification using chromosome number, structure and behaviour is:",
          options: ["Numerical taxonomy", "Cytotaxonomy", "Chemotaxonomy", "Artificial system"],
          answer: 1,
          explain: "Cytotaxonomy uses cytological information.",
        },
        {
          kind: "mcq",
          q: "Why are red algae able to live at great depths?",
          options: [
            "They store floridean starch",
            "Phycoerythrin lets them use the little light that reaches deep water",
            "They have no cell wall",
            "They are heterotrophic",
          ],
          answer: 1,
          explain: "Red pigments absorb the blue-green light that penetrates deepest, so red algae can photosynthesise where little light reaches.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Lesson 2: bryophytes and pteridophytes ---------------- */
    {
      slug: "c11-bryophytes-pteridophytes",
      title: "Bryophytes and Pteridophytes",
      summary:
        "Amphibians of the plant kingdom: liverworts and mosses; the first vascular plants: the four classes of pteridophytes, homospory and heterospory.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "During the monsoon in Kodagu, old walls and tree trunks turn green and velvety with **mosses**. A little higher up, on shaded slopes, **ferns** unroll their curled young leaves. Both need water to complete sexual reproduction, but they are built very differently.",
        },
        {
          type: "text",
          md: "**Bryophytes** are called the **amphibians of the plant kingdom**: they live on land but need water for sexual reproduction. They grow in damp, humid, shaded places. The plant body is a thallus, prostrate or erect, attached by **rhizoids**; it has **no true roots, stems or leaves**.\n\nThe main plant body is **haploid** and makes gametes, so it is the **gametophyte**. Sex organs are **multicellular**: the **antheridium** makes **biflagellate antherozoids**; the flask-shaped **archegonium** makes a single egg. Antherozoids swim in water to the archegonium. The **zygote does not undergo meiosis at once**: it grows into a multicellular **sporophyte** that stays **attached to the gametophyte** and depends on it for food. Some sporophyte cells undergo **meiosis** to form haploid **spores**, which germinate into new gametophytes.",
        },
        {
          type: "list",
          items: [
            "Some mosses are food for herbaceous mammals and birds.",
            "*Sphagnum* gives **peat**, used as fuel and as packing material for living material because it **holds water**.",
            "Mosses, with **lichens**, are the **first organisms to colonise rocks**; they help break rocks into soil (plant succession).",
            "Moss mats reduce the impact of falling rain and **prevent soil erosion**.",
          ],
        },
        {
          type: "table",
          headers: ["Feature", "Liverworts", "Mosses"],
          rows: [
            ["Plant body", "Thalloid, dorsiventral, pressed to the substrate (e.g. *Marchantia*); leafy members have leaf-like appendages in two rows", "Gametophyte in two stages: **protonema** (creeping, green, branched, filamentous, from the spore) and **leafy stage** (upright axes with spirally arranged leaves, from a lateral bud on the secondary protonema)"],
            ["Rhizoids", "Present", "Multicellular and branched"],
            ["Asexual / vegetative", "Fragmentation; **gemmae** (green, multicellular buds in **gemma cups**)", "Fragmentation and budding in the secondary protonema"],
            ["Sex organs", "On the same or different thalli", "At the apex of the leafy shoots"],
            ["Sporophyte", "Foot, seta, capsule", "Foot, seta, capsule; more elaborate; elaborate spore dispersal"],
            ["Examples", "*Marchantia*", "*Funaria*, *Polytrichum*, *Sphagnum*"],
          ],
        },
        {
          type: "heading",
          text: "Pteridophytes: the first vascular plants",
        },
        {
          type: "text",
          md: "Pteridophytes (horsetails and ferns) are the **first terrestrial plants with vascular tissues, xylem and phloem**. They are used as medicines, soil-binders and ornamentals. They grow in cool, damp, shady places, though some live in sandy soil.\n\nThe main plant is the **sporophyte**, with **true roots, stem and leaves**. Leaves may be small **microphylls** (*Selaginella*) or large **macrophylls** (ferns). **Sporangia** are borne on leaf-like **sporophylls**, which may form compact **strobili** or cones (*Selaginella*, *Equisetum*). Spores (formed by meiosis) grow into a small, multicellular, free-living, mostly photosynthetic thalloid gametophyte, the **prothallus**, which bears antheridia and archegonia. **Water** carries the antherozoids to the archegonium. The zygote grows into the dominant sporophyte.",
        },
        {
          type: "table",
          headers: ["Class", "Examples"],
          rows: [
            ["Psilopsida", "*Psilotum*"],
            ["Lycopsida", "*Selaginella*, *Lycopodium*"],
            ["Sphenopsida", "*Equisetum* (horsetail)"],
            ["Pteropsida", "*Dryopteris*, *Pteris*, *Adiantum* (ferns)"],
          ],
        },
        {
          type: "text",
          md: "Most pteridophytes are **homosporous** (one kind of spore). *Selaginella* and *Salvinia* are **heterosporous**: they form large **megaspores** and small **microspores**, which grow into female and male gametophytes. The female gametophyte is retained on the parent sporophyte for a while, and the zygote develops into a young embryo inside it. This is a **precursor to the seed habit**, an important step in evolution.\n\nBecause the prothallus needs cool, damp, shady places and fertilisation needs water, living pteridophytes are restricted to narrow geographical regions.",
        },
        {
          type: "example",
          title: "Ploidy across a life cycle",
          problem: "Give the ploidy of: (a) moss protonema, (b) moss capsule wall, (c) fern prothallus, (d) fern leaf, (e) spore of either plant.",
          steps: [
            "Gametophyte structures are haploid: protonema (moss) and prothallus (fern) → n.",
            "Sporophyte structures are diploid: moss capsule (part of foot–seta–capsule) and fern leaf → 2n.",
            "Spores are formed by meiosis in the sporophyte → n.",
          ],
          answer: "(a) n, (b) 2n, (c) n, (d) 2n, (e) n.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the moss life cycle in order, starting from the spore.",
            items: ["Spore", "Protonema", "Leafy gametophyte", "Antheridia and archegonia", "Zygote", "Sporophyte (foot, seta, capsule)"],
            explain: "Spore → protonema → leafy stage with sex organs → fertilisation → zygote → sporophyte on the gametophyte → meiosis in capsule → spores again.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which pteridophyte is heterosporous?",
              options: ["*Dryopteris*", "*Selaginella*", "*Pteris*", "*Adiantum*"],
              answer: 1,
              explain: "*Selaginella* and *Salvinia* are the heterosporous examples in NCERT.",
            },
            {
              kind: "truefalse",
              q: "In bryophytes the sporophyte is free-living.",
              answer: false,
              explain: "The bryophyte sporophyte stays attached to the gametophyte and depends on it for nourishment.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The green leafy moss plant is the sporophyte, as in ferns.",
          right: "The leafy moss plant is the haploid gametophyte; the sporophyte is only the foot, seta and capsule on top.",
          why: "In ferns and flowering plants the visible plant is the sporophyte, so students assume the same for mosses. In bryophytes the gametophyte is dominant; in pteridophytes the sporophyte is.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Distinguish bryophytes and pteridophytes on: dominant phase (gametophyte vs sporophyte), vascular tissue (absent vs present), true roots (absent vs present), sporophyte (dependent vs independent). Always name *Sphagnum* for peat and *Selaginella* / *Salvinia* for heterospory.",
        },
        {
          type: "keypoints",
          items: [
            "Bryophytes: amphibians of the plant kingdom; haploid gametophyte dominant; sporophyte dependent; biflagellate antherozoids need water.",
            "Liverworts: Marchantia, gemmae in gemma cups. Mosses: protonema + leafy stage; Funaria, Polytrichum, Sphagnum (peat).",
            "Pteridophytes: first vascular land plants; sporophyte dominant; gametophyte = prothallus.",
            "Classes: Psilopsida, Lycopsida, Sphenopsida, Pteropsida. Heterospory in Selaginella and Salvinia → precursor to seed habit.",
          ],
        },
      ],
      flashcards: [
        { front: "Why are bryophytes called amphibians of the plant kingdom?", back: "They live on land but need water for sexual reproduction." },
        { front: "Gemmae", back: "Green multicellular asexual buds in gemma cups of liverworts like *Marchantia*." },
        { front: "Two stages of the moss gametophyte", back: "Protonema (from spore) and leafy stage (from secondary protonema bud)." },
        { front: "Parts of a bryophyte sporophyte", back: "Foot, seta and capsule." },
        { front: "Use of *Sphagnum*", back: "Peat for fuel; packing material for living things as it holds water." },
        { front: "Prothallus", back: "Small, free-living, mostly photosynthetic gametophyte of pteridophytes." },
        { front: "Heterosporous pteridophytes", back: "*Selaginella* and *Salvinia*." },
        { front: "Class of *Equisetum*", back: "Sphenopsida (horsetails)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The first terrestrial plants to possess vascular tissues were:",
          options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Algae"],
          answer: 1,
          explain: "Pteridophytes are the first land plants with xylem and phloem.",
        },
        {
          kind: "mcq",
          q: "In mosses, the leafy stage develops from:",
          options: ["The spore directly", "The secondary protonema as a lateral bud", "The capsule", "The gemma cup"],
          answer: 1,
          explain: "The spore gives the protonema; the leafy stage arises as a lateral bud on the secondary protonema.",
        },
        {
          kind: "fill",
          q: "The male sex organ of bryophytes is the ___.",
          answer: ["antheridium", "antheridia"],
          explain: "The antheridium produces biflagellate antherozoids; the archegonium produces one egg.",
        },
        {
          kind: "mcq",
          q: "*Lycopodium* belongs to:",
          options: ["Psilopsida", "Lycopsida", "Sphenopsida", "Pteropsida"],
          answer: 1,
          explain: "Lycopsida includes *Selaginella* and *Lycopodium*.",
        },
        {
          kind: "truefalse",
          q: "In pteridophytes, spores are produced by meiosis in spore mother cells.",
          answer: true,
          explain: "Sporangia produce haploid spores by meiosis.",
        },
        {
          kind: "multi",
          q: "Which are features of bryophytes?",
          options: ["Rhizoids", "Multicellular sex organs", "True roots", "Dependent sporophyte", "Xylem and phloem"],
          answers: [0, 1, 3],
          explain: "Bryophytes lack true roots and vascular tissue.",
        },
        {
          kind: "mcq",
          q: "Which feature of heterosporous pteridophytes is called a precursor to the seed habit?",
          options: [
            "Formation of microphylls",
            "Retention of the female gametophyte on the sporophyte and early embryo development inside it",
            "Presence of strobili",
            "Free-living prothallus",
          ],
          answer: 1,
          explain: "Keeping the female gametophyte and developing the embryo on the parent foreshadows the seed.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Why are living pteridophytes restricted to narrow geographical regions?",
          options: [
            "They lack vascular tissue",
            "The gametophyte needs cool, damp, shady places and fertilisation needs water",
            "They produce no spores",
            "They are all parasitic",
          ],
          answer: 1,
          explain: "These two needs restrict their spread.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Lesson 3: gymnosperms, angiosperms, life cycles ---------------- */
    {
      slug: "c11-gymnosperms-angiosperms-life-cycles",
      title: "Gymnosperms, Angiosperms and Plant Life Cycles",
      summary:
        "Naked-seeded gymnosperms (Cycas, Pinus), flowering plants, and the haplontic, diplontic and haplo-diplontic patterns of alternation of generations.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "A *Cycas* in a park looks like a small palm. Pine cones litter the paths of Shimla. On a pond, tiny green dots of *Wolffia* float, while a *Eucalyptus* tree towers over the road. All are **seed plants**, but only some hide their seeds inside fruits.",
        },
        {
          type: "text",
          md: "**Gymnosperms** (*gymnos*: naked, *sperma*: seed) have **ovules not enclosed by an ovary wall**, both before and after fertilisation, so the seeds are **naked**. They are medium or tall trees and shrubs; the giant redwood ***Sequoia*** is one of the tallest tree species.",
        },
        {
          type: "list",
          items: [
            "**Roots**: generally tap roots. *Pinus* roots have **mycorrhiza** (fungal association); *Cycas* has **coralloid roots** with **nitrogen-fixing cyanobacteria**.",
            "**Stems**: unbranched (*Cycas*) or branched (*Pinus*, *Cedrus*).",
            "**Leaves**: simple or compound; *Cycas* pinnate leaves last a few years. Conifers have **needle-like leaves** with less surface area, a **thick cuticle** and **sunken stomata** to cut water loss.",
          ],
        },
        {
          type: "text",
          md: "Gymnosperms are **heterosporous**. Sporophylls are arranged spirally in **strobili (cones)**. **Male strobili** bear microsporophylls; microspores grow into a highly reduced male gametophyte, the **pollen grain**. **Female strobili** bear megasporophylls with **ovules**. A megaspore mother cell from the **nucellus** undergoes meiosis to give four megaspores; one grows into a multicellular **female gametophyte** with **two or more archegonia**, retained inside the ovule.\n\nUnlike bryophytes and pteridophytes, **neither gametophyte is free-living**. Pollen is carried by **air** to the ovule; a **pollen tube** takes the male gametes to the archegonia. The zygote forms the embryo and the ovule becomes an uncovered seed.",
        },
        {
          type: "table",
          headers: ["Feature", "*Pinus*", "*Cycas*"],
          rows: [
            ["Male and female cones", "On the **same** tree", "On **different** trees (male cones and megasporophylls)"],
            ["Stem", "Branched", "Unbranched"],
            ["Special root association", "Mycorrhiza", "Coralloid roots with cyanobacteria"],
          ],
        },
        {
          type: "heading",
          text: "Angiosperms",
        },
        {
          type: "text",
          md: "In **angiosperms** (flowering plants) the pollen grains and ovules develop in **flowers**, and the **seeds are enclosed in fruits**. They are the largest plant group and live in a wide range of habitats, from the almost microscopic ***Wolffia*** to ***Eucalyptus*** trees **over 100 m** tall. They give food, fodder, fuel, medicines and many commercial products. They are divided into **dicotyledons** and **monocotyledons**. Their reproduction (double fertilisation) is studied in Class 12.",
        },
        {
          type: "example",
          title: "Explaining 'naked seeds'",
          problem: "A student says, 'Pine seeds are inside a cone, so they are covered; pine cannot be a gymnosperm.' Explain why she is wrong.",
          steps: [
            "Being 'covered' in botany means being inside an **ovary wall** (fruit).",
            "Pine ovules sit exposed on the surface of megasporophylls (cone scales); no ovary forms.",
            "The cone scales only shelter the seeds; they are not a fruit wall.",
          ],
          answer: "The seeds are not enclosed in an ovary or fruit, so they are naked even though cone scales shelter them. Pine is a gymnosperm.",
        },
        {
          type: "heading",
          text: "Plant life cycles and alternation of generations",
        },
        {
          type: "callout",
          tone: "note",
          title: "Board note",
          md: "This section was **removed from the rationalised NCERT book**. ISC teaches alternation of generations, and NEET and KCET questions on examples like *Fucus* and *Ectocarpus* still appear, so learn the table.",
        },
        {
          type: "table",
          headers: ["Pattern", "Dominant phase", "Where meiosis happens", "Examples"],
          rows: [
            ["Haplontic", "Haploid gametophyte; the sporophyte is only the one-celled zygote", "In the zygote", "*Volvox*, *Spirogyra*, some *Chlamydomonas*"],
            ["Diplontic", "Diploid sporophyte, independent and photosynthetic; gametophyte single to few-celled", "In spore mother cells of the sporophyte", "Gymnosperms, angiosperms; the alga *Fucus*"],
            ["Haplo-diplontic", "Both phases multicellular; gametophyte dominant in bryophytes, sporophyte dominant in pteridophytes", "In the sporophyte", "Bryophytes, pteridophytes; algae *Ectocarpus*, *Polysiphonia*, kelps"],
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort by life cycle pattern.",
            groups: ["Haplontic", "Diplontic", "Haplo-diplontic"],
            items: [
              { text: "Volvox", group: 0, hint: "Only the zygote is diploid." },
              { text: "Spirogyra", group: 0, hint: "Meiosis in the zygote." },
              { text: "Fucus", group: 1, hint: "The alga that behaves like seed plants." },
              { text: "Pinus", group: 1, hint: "Seed plant." },
              { text: "Mango", group: 1, hint: "Angiosperm." },
              { text: "Funaria", group: 2, hint: "A moss: both phases multicellular." },
              { text: "Dryopteris", group: 2, hint: "A fern." },
              { text: "Ectocarpus", group: 2, hint: "A brown alga with both phases multicellular." },
            ],
            explain: "Most algae are haplontic, but Fucus is diplontic and Ectocarpus, Polysiphonia and kelps are haplo-diplontic.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Coralloid roots with nitrogen-fixing cyanobacteria are found in:",
              options: ["*Pinus*", "*Cycas*", "*Cedrus*", "*Sequoia*"],
              answer: 1,
              explain: "*Pinus* roots have mycorrhiza; *Cycas* has coralloid roots.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "All algae are haplontic because they are simple plants.",
          right: "Most algae are haplontic, but *Fucus* is diplontic and *Ectocarpus*, *Polysiphonia* and kelps are haplo-diplontic.",
          why: "'Simple plant = simple life cycle' is a tempting rule. Exams test exactly these exceptions.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For gymnosperm features, mention: naked ovules, heterospory, cones, reduced gametophytes not free-living, pollen by wind, roots (mycorrhiza / coralloid) and xerophytic leaves. Name *Cycas* (dioecious) and *Pinus* (monoecious) as contrasting examples.",
        },
        {
          type: "keypoints",
          items: [
            "Gymnosperms: naked ovules and seeds; heterosporous; male and female cones; gametophytes not free-living; wind pollination.",
            "Pinus: mycorrhiza, branched, both cones on one tree. Cycas: coralloid roots, unbranched, separate male and female plants.",
            "Angiosperms: seeds in fruits; Wolffia smallest, Eucalyptus over 100 m.",
            "Haplontic (Volvox, Spirogyra), diplontic (seed plants, Fucus), haplo-diplontic (bryophytes, pteridophytes, Ectocarpus, Polysiphonia, kelps).",
          ],
        },
      ],
      flashcards: [
        { front: "Meaning of gymnosperm", back: "Naked seed: ovules not enclosed by an ovary wall." },
        { front: "One of the tallest tree species", back: "*Sequoia* (giant redwood), a gymnosperm." },
        { front: "Coralloid roots", back: "Specialised roots of *Cycas* with nitrogen-fixing cyanobacteria." },
        { front: "Xerophytic leaf features of conifers", back: "Needle shape, thick cuticle, sunken stomata." },
        { front: "Male gametophyte of gymnosperms", back: "The pollen grain, highly reduced." },
        { front: "Smallest and tallest angiosperms in NCERT", back: "*Wolffia*; *Eucalyptus* (over 100 m)." },
        { front: "Diplontic alga", back: "*Fucus*." },
        { front: "Haplo-diplontic algae", back: "*Ectocarpus*, *Polysiphonia*, kelps." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In which gymnosperm are male cones and megasporophylls borne on different trees?",
          options: ["*Pinus*", "*Cycas*", "*Cedrus*", "All gymnosperms"],
          answer: 1,
          explain: "*Cycas* is dioecious; *Pinus* bears both on the same tree.",
        },
        {
          kind: "truefalse",
          q: "In gymnosperms, the female gametophyte is free-living.",
          answer: false,
          explain: "Both gametophytes remain within sporangia on the sporophyte.",
        },
        {
          kind: "mcq",
          q: "In gymnosperms, pollen grains are carried to the ovules mainly by:",
          options: ["Water", "Insects", "Air currents", "Birds"],
          answer: 2,
          explain: "Pollen is carried by air currents to the ovule opening.",
        },
        {
          kind: "mcq",
          q: "The haplontic life cycle is shown by:",
          options: ["*Fucus*", "*Spirogyra*", "*Polysiphonia*", "*Funaria*"],
          answer: 1,
          explain: "*Spirogyra* and *Volvox* are haplontic.",
        },
        {
          kind: "multi",
          q: "Which features reduce water loss in conifer leaves?",
          options: ["Needle shape", "Thick cuticle", "Sunken stomata", "Large thin leaf blade"],
          answers: [0, 1, 2],
          explain: "Large thin blades would increase water loss.",
        },
        {
          kind: "fill",
          q: "The female gametophyte of gymnosperms bears two or more ___.",
          answer: ["archegonia", "archegonium"],
          explain: "Archegonia are retained inside the ovule.",
        },
        {
          kind: "mcq",
          q: "In a haplo-diplontic cycle of a pteridophyte, the dominant phase is:",
          options: ["Gametophyte", "Sporophyte", "Zygote only", "Protonema"],
          answer: 1,
          explain: "In pteridophytes the sporophyte dominates; in bryophytes the gametophyte does.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "The megaspore mother cell of a gymnosperm differentiates from a cell of the:",
          options: ["Integument", "Nucellus", "Pollen tube", "Archegonium"],
          answer: 1,
          explain: "One cell of the nucellus becomes the megaspore mother cell.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-plant-kingdom-exam-edge",
      title: "Exam edge: Plant Kingdom",
      summary:
        "How NEET and KCET test the plant groups: example lists, algal pigments and food, life-cycle exceptions, ploidy of gymnosperm tissues and the classic traps.",
      minutes: 24,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** typically asks 3–4 questions from Plant Kingdom. The highest-yield areas are: the algae comparison table, examples for each group and class, bryophyte and pteridophyte life cycles, heterospory, gymnosperm features and life-cycle patterns. **KCET** asks direct one-liners like 'agar is obtained from' or 'coralloid roots occur in'.",
        },
        {
          type: "list",
          items: [
            "NCERT line: at least **half of the total CO2 fixation** on Earth is carried out by algae.",
            "NCERT line: brown algae may reach a height of **100 m**.",
            "NCERT line: red algae food is **floridean starch**, very similar to amylopectin and glycogen.",
            "NCERT line: mosses along with lichens are the **first organisms to colonise rocks**.",
            "NCERT line: zygotes of bryophytes **do not undergo reduction division immediately**.",
            "NCERT line: heterospory with retained female gametophyte is a **precursor to the seed habit**.",
            "NCERT line: unlike bryophytes and pteridophytes, gymnosperm gametophytes **do not have an independent free-living existence**.",
          ],
        },
        {
          type: "table",
          headers: ["Plant tissue", "Ploidy", "Why"],
          rows: [
            ["Moss protonema, leafy shoot; fern prothallus", "n", "Gametophyte"],
            ["Moss capsule, seta, foot; fern frond", "2n", "Sporophyte"],
            ["Gymnosperm endosperm (female gametophyte)", "n", "Formed from the megaspore before fertilisation"],
            ["Gymnosperm embryo, nucellus, integument, leaf", "2n", "Sporophytic"],
            ["Angiosperm endosperm", "3n", "Triple fusion (Class 12)"],
          ],
        },
        {
          type: "example",
          title: "NEET level: example matching",
          problem: "Match: (a) *Marchantia* (b) *Salvinia* (c) *Gracilaria* (d) *Equisetum* with (i) Sphenopsida (ii) agar (iii) gemma cups (iv) heterospory.",
          steps: [
            "*Marchantia* is a liverwort with gemma cups: (a)–(iii).",
            "*Salvinia* is a heterosporous fern: (b)–(iv).",
            "*Gracilaria* is a red alga giving agar: (c)–(ii).",
            "*Equisetum* is a horsetail in Sphenopsida: (d)–(i).",
          ],
          answer: "(a)–(iii), (b)–(iv), (c)–(ii), (d)–(i).",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: Bryophytes are called amphibians of the plant kingdom. R: Bryophytes need water for the antherozoids to reach the egg.",
          steps: [
            "A is true.",
            "R is true: biflagellate antherozoids swim in water to the archegonium.",
            "R explains A: they live on land but depend on water for sexual reproduction, just as amphibians return to water to breed.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Statement analysis",
          problem: "How many are correct? (i) Phaeophyceae store mannitol and laminarin. (ii) Rhodophyceae have flagellated gametes. (iii) Chlorophyceae have pyrenoids with protein and starch. (iv) *Eudorina* is oogamous.",
          steps: [
            "(i) Correct.",
            "(ii) Wrong: red algae have no flagellated stage.",
            "(iii) Correct.",
            "(iv) Wrong: *Eudorina* is anisogamous; *Volvox* and *Fucus* are oogamous.",
          ],
          answer: "Two statements, (i) and (iii), are correct.",
        },
        {
          type: "example",
          title: "Harder: chromosome counting in a gymnosperm",
          problem: "A pine has 2n = 24 chromosomes. Find the number of chromosomes in one cell each of: the megaspore mother cell, a functional megaspore, the endosperm, the embryo and the leaf. Give the total.",
          steps: [
            "Megaspore mother cell is sporophytic: 24.",
            "Functional megaspore (after meiosis): 12.",
            "Endosperm of gymnosperms is the female gametophyte tissue: 12.",
            "Embryo (from zygote) = 24; leaf = 24.",
            "Total = 24 + 12 + 12 + 24 + 24 = 96.",
          ],
          answer: "24, 12, 12, 24 and 24; total 96.",
        },
        {
          type: "mistake",
          wrong: "Gymnosperm endosperm is triploid, as in angiosperms.",
          right: "Gymnosperm endosperm is haploid; it is the female gametophyte formed before fertilisation.",
          why: "Students learn 'endosperm = 3n' from angiosperms. Gymnosperms have no triple fusion, so their stored tissue is simply gametophyte tissue.",
        },
        {
          type: "mistake",
          wrong: "Pteridophytes have seeds because some are heterosporous.",
          right: "Heterospory is only a precursor to the seed habit; pteridophytes do not form seeds.",
          why: "The NCERT line about the 'seed habit' is read as 'have seeds'. A seed needs an integumented ovule, which pteridophytes lack.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which alga is diplontic?",
            emoji: "🌊",
            options: ["Spirogyra", "Ectocarpus", "Fucus", "Volvox"],
            answer: 2,
            trap: 1,
            explain: "Fucus is diplontic. Ectocarpus is haplo-diplontic, and Spirogyra and Volvox are haplontic.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Conifers can survive in cold, dry climates. R: Their needle-like leaves with thick cuticle and sunken stomata reduce water loss.",
              options: AR,
              answer: 0,
              explain: "These leaf features directly explain survival where water is scarce or frozen.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Algae: memorise pigments, food, wall, flagella and examples for all three classes.",
            "Gametophyte dominant: bryophytes; sporophyte dominant: pteridophytes and seed plants.",
            "Heterospory: Selaginella, Salvinia (also all gymnosperms). It is a precursor, not seeds.",
            "Gymnosperm endosperm = n; angiosperm endosperm = 3n.",
          ],
        },
      ],
      flashcards: [
        { front: "Agar-yielding algae", back: "*Gelidium* and *Gracilaria*." },
        { front: "Hydrocolloids from brown and red algae", back: "Algin (brown) and carrageen (red)." },
        { front: "Ploidy of gymnosperm endosperm", back: "Haploid (n)." },
        { front: "Pigment that gives red algae their colour", back: "r-phycoerythrin." },
        { front: "Moss used as fuel and packing material", back: "*Sphagnum* (peat)." },
        { front: "Pteridophyte class of *Psilotum*", back: "Psilopsida." },
        { front: "Monoecious gymnosperm example", back: "*Pinus* (male and female cones on one tree)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which pair is incorrectly matched?",
          options: ["*Volvox* – oogamous", "*Ulothrix* – isogamous", "*Eudorina* – anisogamous", "*Spirogyra* – oogamous"],
          answer: 3,
          explain: "*Spirogyra* is isogamous with non-flagellated gametes.",
        },
        {
          kind: "numeric",
          q: "How many of the following are brown algae? Ectocarpus, Dictyota, Porphyra, Laminaria, Volvox, Sargassum, Gelidium, Fucus.",
          answer: 5,
          explain: "Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus. Porphyra and Gelidium are red; Volvox is green.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A: The sporophyte of a moss cannot live independently. R: It is attached to the photosynthetic gametophyte and derives nourishment from it.",
          options: AR,
          answer: 0,
          explain: "Dependence on the gametophyte for food is why the sporophyte is not free-living.",
        },
        {
          kind: "multi",
          q: "Which are correct about gymnosperms?",
          options: [
            "They are heterosporous",
            "The male gametophyte is the pollen grain",
            "Ovules are enclosed in an ovary",
            "Pinus has mycorrhizal roots",
          ],
          answers: [0, 1, 3],
          explain: "Gymnosperm ovules are naked, not in an ovary.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A fern has 2n = 40. How many chromosomes are in one cell of its prothallus?",
          answer: 20,
          explain: "The prothallus is the haploid gametophyte: n = 20.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which statement is correct?",
          options: [
            "Liverworts reproduce asexually by protonema",
            "Mosses reproduce asexually by gemmae",
            "Liverworts form gemmae in gemma cups",
            "Mosses lack rhizoids",
          ],
          answer: 2,
          explain: "Gemmae occur in liverworts (Marchantia); protonema is a moss stage; moss rhizoids are multicellular and branched.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "In *Cycas* with 2n = 22, what is the total number of chromosomes in one cell each of the coralloid root, the endosperm and a male gamete?",
          answer: 44,
          explain: "Root 2n = 22; endosperm (female gametophyte) n = 11; male gamete n = 11. Total = 44.",
          difficulty: 3,
          hint: "Gymnosperm endosperm is not triploid.",
        },
        {
          kind: "mcq",
          q: "An alga has chlorophyll a and c, stores laminarin, and its life cycle has multicellular haploid and diploid phases. It is most likely:",
          options: ["*Fucus*", "*Ectocarpus*", "*Polysiphonia*", "*Chara*"],
          answer: 1,
          explain: "Chl a, c and laminarin → brown alga; haplo-diplontic brown alga → *Ectocarpus* (or kelps). *Fucus* is diplontic; *Polysiphonia* is red.",
          difficulty: 3,
          hint: "First find the class, then the life-cycle pattern.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Animal Kingdom                                                      */
/* ------------------------------------------------------------------ */
const animalKingdom: Topic = {
  slug: "c11-animal-kingdom",
  title: "Animal Kingdom",
  icon: "🐾",
  description:
    "Basis of classification (organisation, symmetry, germ layers, coelom, segmentation, notochord), the non-chordate phyla from Porifera to Hemichordata, protochordates and the vertebrate classes.",
  lessons: [
    /* ---------------- Lesson 1: basis of classification ---------------- */
    {
      slug: "c11-animal-basis-of-classification",
      title: "Basis of Classification of Animals",
      summary:
        "Levels of organisation, digestive and circulatory patterns, symmetry, diploblastic and triploblastic bodies, coelom, metamerism and the notochord.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "More than a million species of animals have been described. A bath sponge, a jellyfish, a roundworm in a child's intestine, an earthworm, a cockroach and a cat look nothing alike, yet zoologists place each of them in seconds. They use a few **fundamental features** that are common to whole groups.",
        },
        {
          type: "table",
          headers: ["Level of organisation", "What it means", "Animals"],
          rows: [
            ["Cellular", "Cells arranged as loose aggregates; no true tissues", "Sponges (Porifera)"],
            ["Tissue", "Cells performing the same function form tissues", "Coelenterates (and ctenophores)"],
            ["Organ", "Tissues grouped into organs, each for a particular function", "Platyhelminthes"],
            ["Organ system", "Organs associated into functional systems", "Annelids, arthropods, molluscs, echinoderms, chordates (NCERT also says this of aschelminthes)"],
          ],
        },
        {
          type: "text",
          md: "**Digestive system**: **incomplete** if there is a single opening serving as both mouth and anus (Platyhelminthes); **complete** if there are two openings, mouth and anus.\n\n**Circulatory system**: **open** if blood is pumped out of the heart and cells and tissues are bathed directly in it (arthropods, molluscs); **closed** if blood flows through vessels of varying diameters (annelids, chordates).",
        },
        {
          type: "table",
          headers: ["Symmetry", "Definition", "Animals"],
          rows: [
            ["Asymmetrical", "No plane through the centre divides the body into equal halves", "Most sponges"],
            ["Radial", "Any plane through the central axis gives two identical halves", "Coelenterates, ctenophores, adult echinoderms"],
            ["Bilateral", "Only one plane divides the body into identical left and right halves", "Platyhelminthes onwards: annelids, arthropods, etc."],
          ],
        },
        {
          type: "text",
          md: "**Germ layers**: **diploblastic** animals have an outer **ectoderm** and inner **endoderm** with an undifferentiated **mesoglea** between them (coelenterates). **Triploblastic** animals also have a **mesoderm** (Platyhelminthes to chordates).\n\n**Notochord**: a mesodermally derived rod on the dorsal side during embryonic development. Animals with it are **chordates**; those without are **non-chordates** (Porifera to Hemichordata).\n\n**Segmentation**: in some animals, the body is divided externally and internally into segments with serial repetition of some organs: **metameric segmentation** or **metamerism**, as in the earthworm.",
        },
        {
          type: "table",
          headers: ["Body cavity", "Meaning", "Animals"],
          rows: [
            ["Coelomate", "True coelom, a body cavity **lined by mesoderm**", "Annelids, molluscs, arthropods, echinoderms, hemichordates, chordates"],
            ["Pseudocoelomate", "Cavity not lined by mesoderm; mesoderm in scattered pouches between ectoderm and endoderm", "Aschelminthes"],
            ["Acoelomate", "No body cavity", "Platyhelminthes"],
          ],
        },
        {
          type: "example",
          title: "Classify from the basic features",
          problem: "An animal is triploblastic, bilaterally symmetrical and has a body cavity between the gut and body wall. The cavity is not lined by mesoderm, which occurs only as scattered pouches. To which phylum does it belong? Give an example.",
          steps: [
            "Triploblastic and bilateral rule out sponges, coelenterates and ctenophores.",
            "A body cavity exists, so it is not acoelomate (rules out Platyhelminthes).",
            "Cavity not lined by mesoderm → pseudocoelom → Aschelminthes.",
          ],
          answer: "Aschelminthes (roundworms), e.g. *Ascaris*.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort by type of body cavity.",
            groups: ["Acoelomate", "Pseudocoelomate", "Coelomate"],
            items: [
              { text: "Tapeworm (Taenia)", group: 0, hint: "A flatworm." },
              { text: "Liver fluke (Fasciola)", group: 0, hint: "Platyhelminthes." },
              { text: "Ascaris", group: 1, hint: "A roundworm." },
              { text: "Hookworm (Ancylostoma)", group: 1, hint: "Aschelminthes." },
              { text: "Earthworm", group: 2, hint: "Annelid." },
              { text: "Starfish", group: 2, hint: "Echinoderm." },
              { text: "Cockroach", group: 2, hint: "Arthropod." },
            ],
            explain: "Platyhelminthes are acoelomate; Aschelminthes are pseudocoelomate; annelids onwards (including arthropods and echinoderms) are coelomate.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which group is diploblastic?",
              options: ["Platyhelminthes", "Coelenterata", "Annelida", "Mollusca"],
              answer: 1,
              explain: "Coelenterates (and ctenophores) have only ectoderm and endoderm with mesoglea between.",
            },
            {
              kind: "mcq",
              q: "Open circulatory system is found in:",
              options: ["Annelids", "Chordates", "Arthropods", "All coelomates"],
              answer: 2,
              explain: "Arthropods and molluscs have open circulation; annelids and chordates have closed circulation.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Echinoderms are bilaterally symmetrical like other coelomates.",
          right: "Adult echinoderms are radially symmetrical; only their larvae are bilateral.",
          why: "Echinoderms are advanced triploblastic coelomates, so students expect bilateral symmetry. NEET loves this exception because the larvae do reveal their bilateral ancestry.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Draw simple cross-sections for coelomate, pseudocoelomate and acoelomate bodies: label ectoderm, mesoderm, endoderm, gut and body cavity. Marks go to showing whether mesoderm lines the cavity.",
        },
        {
          type: "keypoints",
          items: [
            "Cellular (sponges) → tissue (coelenterates) → organ (flatworms) → organ system (annelids onwards).",
            "Open circulation: arthropods, molluscs. Closed: annelids, chordates.",
            "Radial: coelenterates, ctenophores, adult echinoderms. Diploblastic: coelenterates, ctenophores.",
            "Acoelomate: Platyhelminthes; pseudocoelomate: Aschelminthes; coelomate: annelids to chordates.",
            "Metamerism in earthworm; notochord is mesodermal and marks chordates.",
          ],
        },
      ],
      flashcards: [
        { front: "Cellular level of organisation", back: "Sponges (Porifera): loose cell aggregates." },
        { front: "Incomplete digestive system", back: "Single opening as mouth and anus (Platyhelminthes)." },
        { front: "Mesoglea", back: "Undifferentiated layer between ectoderm and endoderm of diploblastic animals." },
        { front: "Coelom", back: "Body cavity lined by mesoderm." },
        { front: "Pseudocoelomates", back: "Aschelminthes: mesoderm in scattered pouches, cavity not lined by it." },
        { front: "Metamerism", back: "Serial repetition of segments and some organs, as in earthworm." },
        { front: "Notochord", back: "Mesodermal rod on the dorsal side formed during embryonic development of chordates." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Organ level of organisation is first seen in:",
          options: ["Porifera", "Coelenterata", "Platyhelminthes", "Annelida"],
          answer: 2,
          explain: "Platyhelminthes have tissues grouped into organs.",
        },
        {
          kind: "mcq",
          q: "Which animals show radial symmetry?",
          options: ["Annelids", "Ctenophores", "Arthropods", "Molluscs"],
          answer: 1,
          explain: "Coelenterates, ctenophores and adult echinoderms are radial.",
        },
        {
          kind: "truefalse",
          q: "Hemichordates are coelomates.",
          answer: true,
          explain: "NCERT lists hemichordates and chordates among coelomates.",
        },
        {
          kind: "fill",
          q: "Animals in which the body cavity is absent are called ___.",
          answer: ["acoelomates", "acoelomate"],
          explain: "Platyhelminthes are acoelomate.",
        },
        {
          kind: "multi",
          q: "Which phyla are triploblastic?",
          options: ["Platyhelminthes", "Coelenterata", "Arthropoda", "Chordata", "Ctenophora"],
          answers: [0, 2, 3],
          explain: "Coelenterata and Ctenophora are diploblastic.",
        },
        {
          kind: "mcq",
          q: "Closed circulatory system is found in:",
          options: ["Cockroach", "Pila", "Earthworm", "Prawn"],
          answer: 2,
          explain: "Annelids such as the earthworm have closed circulation; arthropods and molluscs have open circulation.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange levels of organisation from simplest to most complex.",
          items: ["Cellular", "Tissue", "Organ", "Organ system"],
          explain: "Sponges, coelenterates, flatworms, then annelids onwards.",
        },
      ],
    },

    /* ---------------- Lesson 2: Porifera to Annelida ---------------- */
    {
      slug: "c11-porifera-to-annelida",
      title: "Porifera to Annelida",
      summary:
        "Sponges, cnidarians, comb jellies, flatworms, roundworms and segmented worms: their defining features and NCERT examples.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "A bath sponge is the skeleton of an animal. A sea anemone rides on a hermit crab's shell. A filarial worm can swell a person's legs. An earthworm turns over the soil of a farm. These are the first six non-chordate phyla, in order of rising complexity.",
        },
        {
          type: "heading",
          text: "Porifera (sponges)",
        },
        {
          type: "text",
          md: "Generally **marine**, mostly **asymmetrical**, primitive multicellular animals at the **cellular level**. Their hallmark is the **water transport or canal system**: water enters through tiny pores, **ostia**, into the central cavity, **spongocoel**, and leaves through the **osculum**. This flow brings food, allows respiratory exchange and removes waste. **Choanocytes (collar cells)** line the spongocoel and canals. Digestion is **intracellular**. The skeleton is of **spicules** or **spongin fibres**.\n\nSponges are **hermaphrodite**. Asexual reproduction by **fragmentation**; sexual by gametes. Fertilisation is **internal** and development **indirect** (with a larva). Examples: *Sycon* (*Scypha*), *Spongilla* (freshwater sponge), *Euspongia* (bath sponge).",
        },
        {
          type: "heading",
          text: "Coelenterata (Cnidaria) and Ctenophora",
        },
        {
          type: "text",
          md: "**Coelenterates** are aquatic, mostly marine, sessile or free-swimming, **radially symmetrical**, **diploblastic**, at the **tissue level**. **Cnidoblasts (cnidocytes)** with stinging **nematocysts** on the tentacles and body are used for anchorage, defence and prey capture. A **gastro-vascular cavity** opens by a single mouth on the **hypostome**; digestion is **extracellular and intracellular**. Corals have a **calcium carbonate** skeleton.\n\nTwo body forms: the sessile, cylindrical **polyp** (*Hydra*, *Adamsia*) and the umbrella-shaped, free-swimming **medusa** (*Aurelia*, jellyfish). Where both occur, polyps produce medusae **asexually** and medusae form polyps **sexually**: **metagenesis**, e.g. ***Obelia***. Examples: *Physalia* (Portuguese man-of-war), *Adamsia* (sea anemone), *Pennatula* (sea-pen), *Gorgonia* (sea-fan), *Meandrina* (brain coral).\n\n**Ctenophores** (sea walnuts, comb jellies) are **exclusively marine**, radial, diploblastic, tissue level. They have **eight external rows of ciliated comb plates** for locomotion. Digestion is extra- and intracellular. **Bioluminescence** is well marked. Sexes are not separate; reproduction is **only sexual**; fertilisation **external**, development **indirect**. *Pleurobrachia*, *Ctenoplana*.",
        },
        {
          type: "table",
          headers: ["Feature", "Platyhelminthes", "Aschelminthes", "Annelida"],
          rows: [
            ["Common name", "Flatworms (dorso-ventrally flattened)", "Roundworms (circular in cross-section)", "Segmented worms (Latin *annulus*: little ring)"],
            ["Body cavity", "Acoelomate", "Pseudocoelomate", "Coelomate, metamerically segmented"],
            ["Level", "Organ", "Organ system", "Organ system"],
            ["Gut", "Incomplete", "Complete, with muscular pharynx", "Complete"],
            ["Excretion", "**Flame cells** (also osmoregulation)", "**Excretory tube** opening at an excretory pore", "**Nephridia** (also osmoregulation)"],
            ["Sexes", "Not separate (hermaphrodite); internal fertilisation; many larval stages", "**Separate**; females often **longer** than males; internal fertilisation; direct or indirect development", "*Nereis* dioecious; **earthworm and leech monoecious**"],
            ["Special", "Hooks and suckers in parasites; some absorb food through body surface; *Planaria* high regeneration", "Free-living or parasitic in plants and animals", "Longitudinal and circular muscles; **parapodia** in *Nereis*; closed circulation; paired ganglia and double ventral nerve cord"],
            ["Examples", "*Taenia* (tapeworm), *Fasciola* (liver fluke)", "*Ascaris* (roundworm), *Wuchereria* (filarial worm), *Ancylostoma* (hookworm)", "*Nereis*, *Pheretima* (earthworm), *Hirudinaria* (blood-sucking leech)"],
          ],
        },
        {
          type: "example",
          title: "Identify the phylum",
          problem: "A marine animal is diploblastic and radially symmetrical. It has no stinging cells, swims with eight rows of ciliated plates and glows at night. Name the phylum and an example, and give one reproductive fact.",
          steps: [
            "Diploblastic and radial → Coelenterata or Ctenophora.",
            "No cnidoblasts but eight rows of ciliated comb plates → Ctenophora.",
            "Glowing = bioluminescence, well marked in ctenophores.",
          ],
          answer: "Ctenophora, e.g. *Pleurobrachia* or *Ctenoplana*; they reproduce only sexually, with external fertilisation and indirect development.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each animal with its phylum.",
            pairs: [
              ["Spongilla", "Porifera"],
              ["Pennatula", "Coelenterata"],
              ["Ctenoplana", "Ctenophora"],
              ["Fasciola", "Platyhelminthes"],
              ["Wuchereria", "Aschelminthes"],
              ["Hirudinaria", "Annelida"],
            ],
            explain: "Learn one example per phylum first, then add the rest of NCERT's list.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Flame cells are excretory structures of:",
              options: ["Aschelminthes", "Platyhelminthes", "Annelida", "Porifera"],
              answer: 1,
              explain: "Flame cells help in osmoregulation and excretion in flatworms.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Hydra shows metagenesis because it is a coelenterate.",
          right: "*Hydra* exists only as a polyp; metagenesis (polyp ↔ medusa) is shown by *Obelia*.",
          why: "Hydra is the coelenterate everyone knows, so it gets credited with every coelenterate feature. Metagenesis needs both body forms in one life cycle.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For each phylum write 4–5 features in NCERT order (habitat, symmetry, level, germ layers, coelom, special feature, reproduction) and two examples with common names. 'Draw a labelled diagram of the canal system of a sponge' needs ostia, spongocoel, osculum and choanocytes.",
        },
        {
          type: "keypoints",
          items: [
            "Porifera: canal system (ostia → spongocoel → osculum), choanocytes, intracellular digestion, hermaphrodite.",
            "Coelenterata: cnidoblasts, polyp and medusa; metagenesis in Obelia; corals have CaCO3 skeleton.",
            "Ctenophora: eight comb plates, bioluminescence, only sexual reproduction.",
            "Flatworms: flame cells, acoelomate. Roundworms: pseudocoelom, sexes separate. Annelids: metameres, nephridia, closed circulation.",
          ],
        },
      ],
      flashcards: [
        { front: "Path of water in a sponge", back: "Ostia → spongocoel → osculum." },
        { front: "Choanocytes", back: "Collar cells lining the spongocoel and canals of sponges." },
        { front: "Function of cnidoblasts", back: "Anchorage, defence and capture of prey (contain nematocysts)." },
        { front: "Metagenesis", back: "Alternation of polyp (asexual) and medusa (sexual) forms, e.g. *Obelia*." },
        { front: "Comb plates", back: "Eight external rows of ciliated plates in ctenophores, for locomotion." },
        { front: "Monoecious annelids", back: "Earthworm (*Pheretima*) and leech (*Hirudinaria*); *Nereis* is dioecious." },
        { front: "Parapodia", back: "Lateral appendages of *Nereis* used in swimming." },
        { front: "Common names: Physalia, Adamsia, Gorgonia, Meandrina", back: "Portuguese man-of-war, sea anemone, sea-fan, brain coral." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In sponges, water leaves the body through the:",
          options: ["Ostia", "Osculum", "Spongocoel", "Hypostome"],
          answer: 1,
          explain: "Water enters through ostia and exits through the osculum.",
        },
        {
          kind: "mcq",
          q: "*Euspongia* is the:",
          options: ["Freshwater sponge", "Bath sponge", "Sea-pen", "Brain coral"],
          answer: 1,
          explain: "*Spongilla* is the freshwater sponge.",
        },
        {
          kind: "truefalse",
          q: "Ctenophores reproduce both asexually and sexually.",
          answer: false,
          explain: "Ctenophores reproduce only by sexual means.",
        },
        {
          kind: "mcq",
          q: "Which feature distinguishes aschelminthes from platyhelminthes?",
          options: ["Bilateral symmetry", "Triploblastic body", "Pseudocoelom and separate sexes", "Parasitic habit"],
          answer: 2,
          explain: "Both are bilateral, triploblastic and may be parasitic; roundworms have a pseudocoelom and separate sexes.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about annelids are correct?",
          options: [
            "Nephridia help in osmoregulation and excretion",
            "Circulatory system is open",
            "Neural system has a double ventral nerve cord",
            "Nereis has parapodia",
          ],
          answers: [0, 2, 3],
          explain: "Annelids have a closed circulatory system.",
        },
        {
          kind: "fill",
          q: "The skeleton of corals is made of calcium ___.",
          answer: ["carbonate"],
          explain: "Corals have a calcium carbonate skeleton.",
        },
        {
          kind: "mcq",
          q: "*Ancylostoma* is commonly called:",
          options: ["Filarial worm", "Hookworm", "Liver fluke", "Tapeworm"],
          answer: 1,
          explain: "*Wuchereria* is the filarial worm, *Fasciola* the liver fluke and *Taenia* the tapeworm.",
        },
        {
          kind: "mcq",
          q: "Digestion in sponges is:",
          options: ["Extracellular only", "Intracellular", "Both, in a gastro-vascular cavity", "Absent"],
          answer: 1,
          explain: "Sponges digest food inside cells; coelenterates and ctenophores digest both extra- and intracellularly.",
        },
      ],
    },

    /* ---------------- Lesson 3: Arthropoda to protochordates ---------------- */
    {
      slug: "c11-arthropoda-to-protochordates",
      title: "Arthropoda to Hemichordata, and the Chordates",
      summary:
        "Arthropods, molluscs, echinoderms and hemichordates; the three basic chordate characters, how chordates differ from non-chordates, and urochordates and cephalochordates.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Honey from a bee, silk from a silkworm, lac from a tiny insect, a pearl from an oyster, a starfish on the rocks at a beach in Goa: the most successful and varied non-chordates lead us finally to the animals with a backbone's ancestor, the **notochord**.",
        },
        {
          type: "text",
          md: "**Arthropoda** is the **largest phylum**: over **two-thirds** of all named species are arthropods, including insects. They are bilateral, triploblastic, **segmented** coelomates at the organ-system level, covered by a **chitinous exoskeleton**. The body has **head, thorax and abdomen** and **jointed appendages** (*arthros*: joint, *poda*: appendage). Respiration by **gills, book gills, book lungs or tracheae**; **open** circulation; sense organs include antennae, compound and simple eyes and **statocysts** (balance). Excretion by **Malpighian tubules**. Mostly dioecious, fertilisation usually internal, mostly oviparous; development direct or indirect.",
        },
        {
          type: "table",
          headers: ["Role", "Arthropod examples"],
          rows: [
            ["Economically important", "*Apis* (honey bee), *Bombyx* (silkworm), *Laccifer* (lac insect)"],
            ["Vectors", "*Anopheles*, *Culex*, *Aedes* (mosquitoes)"],
            ["Gregarious pest", "*Locusta* (locust)"],
            ["Living fossil", "*Limulus* (king crab)"],
          ],
        },
        {
          type: "text",
          md: "**Mollusca** is the **second largest** phylum: terrestrial or aquatic, bilateral, triploblastic, coelomate, organ-system level. The **unsegmented** body has a distinct **head, muscular foot and visceral hump**, usually covered by a **calcareous shell**. A soft spongy skin, the **mantle**, covers the hump; the **mantle cavity** holds **feather-like gills** for respiration and excretion. The head has sensory tentacles; the mouth has a file-like rasping **radula**. Usually dioecious and oviparous with indirect development. *Pila* (apple snail), *Pinctada* (pearl oyster), *Sepia* (cuttlefish), *Loligo* (squid), *Octopus* (devil fish), *Aplysia* (sea-hare), *Dentalium* (tusk shell), *Chaetopleura* (chiton).",
        },
        {
          type: "text",
          md: "**Echinodermata** (spiny-bodied) have an endoskeleton of **calcareous ossicles**. All are **marine**, organ-system level, triploblastic coelomates. **Adults are radial, larvae bilateral**. The gut is complete, with the **mouth on the lower (ventral)** side and **anus on the upper (dorsal)** side. The most distinctive feature is the **water vascular system** for locomotion, capture and transport of food, and respiration. **Excretory system is absent**. Sexes separate; fertilisation usually external; development indirect with a free-swimming larva. *Asterias* (starfish), *Echinus* (sea urchin), *Antedon* (sea lily), *Cucumaria* (sea cucumber), *Ophiura* (brittle star).\n\n**Hemichordata** were once a sub-phylum of Chordata but are now a separate **non-chordate** phylum. Small, worm-like, marine, bilateral, triploblastic coelomates. The body has a **proboscis, collar and trunk**. Open circulation; respiration by **gills**; excretion by the **proboscis gland**. A rudimentary **stomochord** in the collar region resembles a notochord. Sexes separate, fertilisation external, development indirect. *Balanoglossus*, *Saccoglossus*.",
        },
        {
          type: "heading",
          text: "Phylum Chordata",
        },
        {
          type: "table",
          headers: ["Chordates", "Non-chordates"],
          rows: [
            ["Notochord present", "Notochord absent"],
            ["Central nervous system dorsal, hollow and single", "CNS ventral, solid and double"],
            ["Pharynx perforated by gill slits", "Gill slits absent"],
            ["Heart ventral", "Heart dorsal (if present)"],
            ["Post-anal tail present", "Post-anal tail absent"],
          ],
        },
        {
          type: "text",
          md: "Chordates are bilateral, triploblastic, coelomate, at the organ-system level, with a **closed** circulatory system. They have three basic features: **notochord, dorsal hollow nerve cord and paired pharyngeal gill slits**. Phylum Chordata has three subphyla:\n\n- **Urochordata (Tunicata)**: notochord **only in the larval tail**. *Ascidia*, *Salpa*, *Doliolum*.\n- **Cephalochordata**: notochord runs from **head to tail** and **persists throughout life**. *Branchiostoma* (*Amphioxus*, lancelet).\n- **Vertebrata**: notochord in the embryo, replaced by a cartilaginous or bony **vertebral column** in the adult.\n\nUrochordates and cephalochordates are the **protochordates**, exclusively marine. All vertebrates are chordates, but not all chordates are vertebrates.",
        },
        {
          type: "example",
          title: "Placing a puzzling animal",
          problem: "A small marine worm-like animal has a proboscis, collar and trunk, gill slits, and a short rod in the collar region that looks like a notochord. Older books called it a chordate. Where does NCERT place it now, and why?",
          steps: [
            "Proboscis, collar and trunk with a proboscis gland → hemichordate (*Balanoglossus*).",
            "The rod in the collar is a stomochord, only similar to a notochord; there is no true notochord.",
            "Without a true notochord, it is placed outside Chordata.",
          ],
          answer: "In the separate non-chordate phylum Hemichordata; its stomochord is not a true notochord.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each animal into its phylum.",
            groups: ["Arthropoda", "Mollusca", "Echinodermata"],
            items: [
              { text: "Limulus", group: 0, hint: "The king crab, a living fossil." },
              { text: "Laccifer", group: 0, hint: "Lac insect." },
              { text: "Pinctada", group: 1, hint: "Pearl oyster." },
              { text: "Dentalium", group: 1, hint: "Tusk shell." },
              { text: "Octopus", group: 1, hint: "Devil fish with a radula." },
              { text: "Antedon", group: 2, hint: "Sea lily." },
              { text: "Ophiura", group: 2, hint: "Brittle star." },
              { text: "Cucumaria", group: 2, hint: "Sea cucumber." },
            ],
            explain: "Names that sound like fish, crabs or lilies mislead: king crab is an arthropod, devil fish (Octopus) is a mollusc, sea lily is an echinoderm.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Excretory system is absent in:",
              options: ["Mollusca", "Echinodermata", "Arthropoda", "Hemichordata"],
              answer: 1,
              explain: "Echinoderms lack an excretory system.",
            },
            {
              kind: "mcq",
              q: "In which subphylum does the notochord persist throughout life from head to tail?",
              options: ["Urochordata", "Cephalochordata", "Vertebrata", "Hemichordata"],
              answer: 1,
              explain: "Cephalochordates (*Branchiostoma*) keep the notochord all their life.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Starfish, cuttlefish and silverfish are fishes.",
          right: "Starfish (*Asterias*) is an echinoderm and cuttlefish (*Sepia*) is a mollusc; silverfish is an insect. Real fishes are vertebrates.",
          why: "Common names were given long before zoology. Always classify by the scientific name and features, not the English name.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "'Distinguish between chordates and non-chordates' (3 marks) is answered with the five-row table. 'Write any four features of arthropods' should include chitinous exoskeleton, jointed appendages, open circulation and Malpighian tubules.",
        },
        {
          type: "keypoints",
          items: [
            "Arthropoda: largest phylum, chitinous exoskeleton, jointed legs, Malpighian tubules, open circulation; Limulus living fossil.",
            "Mollusca: second largest; mantle, radula, foot, visceral hump; Pinctada pearl oyster, Sepia cuttlefish.",
            "Echinodermata: water vascular system, adults radial, no excretory system. Hemichordata: proboscis gland, stomochord.",
            "Chordates: notochord, dorsal hollow nerve cord, pharyngeal gill slits; urochordates (larval tail), cephalochordates (lifelong).",
          ],
        },
      ],
      flashcards: [
        { front: "Largest animal phylum", back: "Arthropoda: over two-thirds of named species." },
        { front: "Excretory organs of arthropods", back: "Malpighian tubules." },
        { front: "Living fossil arthropod", back: "*Limulus* (king crab)." },
        { front: "Radula", back: "File-like rasping feeding organ of molluscs." },
        { front: "Water vascular system", back: "Echinoderm system for locomotion, food capture and transport, and respiration." },
        { front: "Excretory organ of hemichordates", back: "Proboscis gland." },
        { front: "Three basic chordate characters", back: "Notochord, dorsal hollow nerve cord, paired pharyngeal gill slits." },
        { front: "Protochordates", back: "Urochordata (*Ascidia*, *Salpa*, *Doliolum*) and Cephalochordata (*Branchiostoma*)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Book lungs are respiratory organs of some:",
          options: ["Molluscs", "Arthropods", "Echinoderms", "Annelids"],
          answer: 1,
          explain: "Arthropods breathe by gills, book gills, book lungs or tracheae.",
        },
        {
          kind: "mcq",
          q: "*Bombyx* is the:",
          options: ["Lac insect", "Silkworm", "Honey bee", "Locust"],
          answer: 1,
          explain: "*Laccifer* is the lac insect, *Apis* the honey bee, *Locusta* the locust.",
        },
        {
          kind: "truefalse",
          q: "In echinoderms the mouth is on the ventral side and the anus on the dorsal side.",
          answer: true,
          explain: "NCERT: mouth on the lower (ventral) side and anus on the upper (dorsal) side.",
        },
        {
          kind: "fill",
          q: "In urochordates the notochord is present only in the larval ___.",
          answer: ["tail"],
          explain: "In cephalochordates it extends from head to tail throughout life.",
        },
        {
          kind: "multi",
          q: "Which are features of chordates?",
          options: ["Dorsal hollow single nerve cord", "Ventral heart", "Post-anal tail", "Ventral solid double nerve cord"],
          answers: [0, 1, 2],
          explain: "A ventral, solid, double nerve cord is a non-chordate feature.",
        },
        {
          kind: "mcq",
          q: "*Chaetopleura* (chiton) belongs to:",
          options: ["Arthropoda", "Mollusca", "Echinodermata", "Annelida"],
          answer: 1,
          explain: "*Chaetopleura* is a mollusc, as are *Dentalium* and *Aplysia*.",
        },
        {
          kind: "mcq",
          q: "Which animal has open circulation and respires by gills, with a proboscis, collar and trunk?",
          options: ["*Branchiostoma*", "*Balanoglossus*", "*Ascidia*", "*Asterias*"],
          answer: 1,
          explain: "*Balanoglossus*, a hemichordate.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "All vertebrates are chordates but not all chordates are vertebrates because:",
          options: [
            "Some chordates lack a notochord",
            "Protochordates have a notochord but no vertebral column",
            "Vertebrates have no gill slits",
            "Hemichordates are chordates",
          ],
          answer: 1,
          explain: "Urochordates and cephalochordates have a notochord but never a vertebral column.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Lesson 4: vertebrates ---------------- */
    {
      slug: "c11-vertebrata-classes",
      title: "Vertebrata: Cyclostomes to Mammals",
      summary:
        "Agnatha and Gnathostomata, and the features and NCERT examples of Cyclostomata, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves and Mammalia.",
      minutes: 25,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "Rohu and katla in a Kolkata fish market, a garden lizard on a wall in Bengaluru, a peacock in Rajasthan, a dolphin in the Ganga: all vertebrates. Besides the chordate features they have a **ventral muscular heart** with two, three or four chambers, **kidneys** for excretion and osmoregulation, and **paired appendages** (fins or limbs).",
        },
        {
          type: "list",
          items: [
            "**Division Agnatha** (no jaws) → class **Cyclostomata**.",
            "**Division Gnathostomata** (jaws) → superclass **Pisces** (fins): **Chondrichthyes**, **Osteichthyes**; superclass **Tetrapoda** (limbs): **Amphibia, Reptilia, Aves, Mammalia**.",
          ],
        },
        {
          type: "text",
          md: "**Cyclostomata**: all living members are **ectoparasites on fishes**. Long body with **6–15 pairs of gill slits**; **sucking, circular mouth without jaws**; no scales or paired fins; cranium and vertebral column **cartilaginous**; closed circulation. They are marine but **migrate to fresh water to spawn**, and **die within a few days** after spawning; larvae return to the ocean after metamorphosis. *Petromyzon* (lamprey), *Myxine* (hagfish).",
        },
        {
          type: "table",
          headers: ["Feature", "Chondrichthyes (cartilaginous fish)", "Osteichthyes (bony fish)"],
          rows: [
            ["Habitat", "Marine", "Marine and fresh water"],
            ["Endoskeleton", "Cartilaginous; notochord persists throughout life", "Bony"],
            ["Mouth", "Ventral", "Mostly terminal"],
            ["Gills", "Separate gill slits, **no operculum**", "Four pairs of gills covered by an **operculum** on each side"],
            ["Scales", "Minute **placoid** scales; teeth are modified placoid scales, backwardly directed", "**Cycloid / ctenoid** scales"],
            ["Air bladder", "**Absent**: must swim constantly to avoid sinking", "**Present**: regulates buoyancy"],
            ["Heart", "Two-chambered (one auricle, one ventricle)", "Two-chambered"],
            ["Reproduction", "Males have **claspers** on pelvic fins; internal fertilisation; many viviparous", "External fertilisation; mostly oviparous; direct development"],
            ["Special", "*Torpedo* has electric organs; *Trygon* has a poison sting", "—"],
            ["Examples", "*Scoliodon* (dogfish), *Pristis* (sawfish), *Carcharodon* (great white shark), *Trygon* (sting ray)", "Marine: *Exocoetus* (flying fish), *Hippocampus* (sea horse); fresh water: *Labeo* (rohu), *Catla* (katla), *Clarias* (magur); aquarium: *Betta* (fighting fish), *Pterophyllum* (angel fish)"],
          ],
        },
        {
          type: "text",
          md: "Both fish classes are **cold-blooded (poikilothermous)** with separate sexes.\n\n**Amphibia** live in water and on land. Most have two pairs of limbs; body of head and trunk, tail in some. **Moist skin without scales**; eyelids present; **tympanum** represents the ear. Gut, urinary and reproductive tracts open into a **cloaca**. Respiration by **gills, lungs and skin**. Heart **three-chambered** (two auricles, one ventricle). Cold-blooded; sexes separate; **external** fertilisation; oviparous; **indirect** development. *Bufo* (toad), *Rana* (frog), *Hyla* (tree frog), *Salamandra* (salamander), *Ichthyophis* (limbless amphibian).",
        },
        {
          type: "text",
          md: "**Reptilia** (creeping or crawling) are mostly terrestrial, with **dry, cornified skin** bearing **epidermal scales or scutes**. **No external ear openings**; tympanum represents the ear. Limbs, when present, two pairs. Heart usually **three-chambered**, but **four-chambered in crocodiles**. Poikilotherms. Snakes and lizards **shed their scales as skin cast**. Internal fertilisation; oviparous; direct development. *Chelone* (turtle), *Testudo* (tortoise), *Chameleon* (tree lizard), *Calotes* (garden lizard), *Crocodilus* (crocodile), *Alligator*, *Hemidactylus* (wall lizard); poisonous snakes *Naja* (cobra), *Bungarus* (krait; spelt 'Bangarus' in NCERT), *Vipera* (viper).",
        },
        {
          type: "text",
          md: "**Aves** have **feathers**; most fly except flightless birds such as the ostrich. They have a **beak**; forelimbs are **wings**; hind limbs usually have scales. Skin is **dry with no glands except the oil gland** at the base of the tail. The endoskeleton is fully bony, with hollow, air-filled (**pneumatic**) long bones. The gut has extra chambers, **crop and gizzard**. Heart **completely four-chambered**; **warm-blooded (homoiothermous)**. Lungs, supplemented by **air sacs**. Internal fertilisation; oviparous; direct development. *Corvus* (crow), *Columba* (pigeon), *Psittacula* (parrot), *Struthio* (ostrich), *Pavo* (peacock), *Aptenodytes* (penguin), *Neophron* (vulture).\n\n**Mammalia** live everywhere, from polar ice and deserts to dark caves; some fly or live in water. Their most unique feature is **mammary glands**. Skin has **hair**; external ears (**pinnae**); **different types of teeth** in the jaw; two pairs of limbs; four-chambered heart; homoiothermous; lungs. Internal fertilisation; with a few exceptions **viviparous** with direct development. Oviparous: *Ornithorhynchus* (platypus). Viviparous: *Macropus* (kangaroo), *Pteropus* (flying fox), *Camelus*, *Macaca* (monkey), *Rattus*, *Canis*, *Felis*, *Elephas*, *Equus*, *Delphinus* (common dolphin), *Balaenoptera* (blue whale), *Panthera tigris*, *Panthera leo*.",
        },
        {
          type: "table",
          headers: ["Class", "Heart chambers", "Body temperature", "Fertilisation"],
          rows: [
            ["Chondrichthyes", "2", "Poikilothermous", "Internal"],
            ["Osteichthyes", "2", "Poikilothermous", "Usually external"],
            ["Amphibia", "3", "Poikilothermous", "External"],
            ["Reptilia", "3 (4 in crocodiles)", "Poikilothermous", "Internal"],
            ["Aves", "4", "Homoiothermous", "Internal"],
            ["Mammalia", "4", "Homoiothermous", "Internal"],
          ],
        },
        {
          type: "example",
          title: "Identify the class",
          problem: "A vertebrate breathes by lungs, has a four-chambered heart and a constant body temperature, lays eggs and has no feathers. It has hair and feeds its young on milk. Name the class and the animal.",
          steps: [
            "Four-chambered heart + homoiothermous → bird or mammal.",
            "Hair and mammary glands, no feathers → Mammalia.",
            "Lays eggs → the oviparous mammal in NCERT.",
          ],
          answer: "Mammalia: *Ornithorhynchus* (platypus).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Agnatha, Pisces or Tetrapoda?",
            groups: ["Agnatha", "Pisces", "Tetrapoda"],
            items: [
              { text: "Petromyzon", group: 0, hint: "Lamprey: jawless, circular sucking mouth." },
              { text: "Myxine", group: 0, hint: "Hagfish: a cyclostome." },
              { text: "Hippocampus", group: 1, hint: "Sea horse: a bony fish." },
              { text: "Scoliodon", group: 1, hint: "Dogfish: a cartilaginous fish." },
              { text: "Ichthyophis", group: 2, hint: "A limbless amphibian, but still a tetrapod by class." },
              { text: "Delphinus", group: 2, hint: "Dolphin: a mammal." },
              { text: "Hemidactylus", group: 2, hint: "Wall lizard: a reptile." },
            ],
            explain: "Classes, not body shape, decide the superclass. A sea horse is a fish; a limbless Ichthyophis and a finned dolphin are tetrapods.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which fish lacks an air bladder and must swim constantly to avoid sinking?",
              options: ["*Labeo*", "*Catla*", "*Scoliodon*", "*Betta*"],
              answer: 2,
              explain: "*Scoliodon* is cartilaginous; Chondrichthyes have no air bladder.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "All reptiles have a three-chambered heart.",
          right: "Most reptiles have three chambers, but crocodiles have a four-chambered heart.",
          why: "'Reptiles = 3' is the class rule students memorise. The crocodile exception is stated in NCERT and is a favourite NEET distractor.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For 'two features and two examples' of each class, choose the most distinctive features (e.g. Aves: feathers, pneumatic bones; Mammalia: mammary glands, hair). Write scientific names with common names in brackets.",
        },
        {
          type: "keypoints",
          items: [
            "Cyclostomes: jawless ectoparasites, 6–15 gill slit pairs, die after spawning in fresh water.",
            "Chondrichthyes: placoid scales, no operculum, no air bladder, claspers. Osteichthyes: operculum, air bladder, external fertilisation.",
            "Amphibia: moist skin, cloaca, 3 chambers. Reptilia: dry scaly skin, 3 chambers (crocodile 4).",
            "Aves: feathers, pneumatic bones, crop and gizzard, air sacs, only oil gland. Mammalia: mammary glands, hair, pinnae; platypus lays eggs.",
          ],
        },
      ],
      flashcards: [
        { front: "Agnatha", back: "Jawless vertebrates: class Cyclostomata (*Petromyzon*, *Myxine*)." },
        { front: "Placoid scales", back: "Scales of cartilaginous fish; their teeth are modified placoid scales." },
        { front: "Claspers", back: "Modified pelvic fins of male cartilaginous fish, used in internal fertilisation." },
        { front: "Fish with electric organ / poison sting", back: "*Torpedo* / *Trygon*." },
        { front: "Limbless amphibian", back: "*Ichthyophis*." },
        { front: "Reptile with a four-chambered heart", back: "Crocodile (*Crocodilus*)." },
        { front: "Only skin gland of birds", back: "Oil gland at the base of the tail." },
        { front: "Oviparous mammal", back: "*Ornithorhynchus* (platypus)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Cyclostomes are:",
          options: ["Endoparasites of mammals", "Ectoparasites on fishes", "Free-living herbivores", "Parasites of birds"],
          answer: 1,
          explain: "All living cyclostomes are ectoparasites on some fishes.",
        },
        {
          kind: "mcq",
          q: "*Pterophyllum* is the:",
          options: ["Fighting fish", "Angel fish", "Flying fish", "Sea horse"],
          answer: 1,
          explain: "*Betta* is the fighting fish, *Exocoetus* the flying fish, *Hippocampus* the sea horse.",
        },
        {
          kind: "truefalse",
          q: "In amphibians, fertilisation is internal.",
          answer: false,
          explain: "Amphibians have external fertilisation and indirect development.",
        },
        {
          kind: "multi",
          q: "Which are features of birds?",
          options: ["Pneumatic bones", "Crop and gizzard", "Air sacs", "Sweat glands in skin"],
          answers: [0, 1, 2],
          explain: "Bird skin has no glands except the oil gland.",
        },
        {
          kind: "fill",
          q: "In amphibians, the alimentary canal, urinary and reproductive tracts open into a common chamber called the ___.",
          answer: ["cloaca"],
          explain: "The cloaca opens to the exterior.",
        },
        {
          kind: "mcq",
          q: "Which is a poisonous snake?",
          options: ["*Calotes*", "*Hemidactylus*", "*Bungarus*", "*Chelone*"],
          answer: 2,
          explain: "*Bungarus* (krait). *Calotes* and *Hemidactylus* are lizards; *Chelone* is a turtle.",
        },
        {
          kind: "mcq",
          q: "*Pteropus* is a:",
          options: ["Bird", "Flying mammal", "Flying reptile", "Flying fish"],
          answer: 1,
          explain: "*Pteropus* (flying fox) is a viviparous mammal.",
        },
        {
          kind: "mcq",
          q: "Bony fishes can stay at one depth without swimming because they have:",
          options: ["Operculum", "Air bladder", "Placoid scales", "Claspers"],
          answer: 1,
          explain: "The air bladder regulates buoyancy.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Exam edge 1: non-chordates ---------------- */
    {
      slug: "c11-animal-kingdom-exam-edge-nonchordates",
      title: "Exam edge: Animal Kingdom (Non-chordates)",
      summary:
        "The highest-yield NEET chapter of the Diversity unit: basis of classification, phylum-wise exceptions, example matching and statement-based questions.",
      minutes: 25,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**Animal Kingdom** is usually the **biggest scorer of the Diversity unit in NEET**, with about 3–5 questions every year. Questions are built from three things: the **basis of classification** (symmetry, coelom, germ layers, organisation), **phylum features** with their exceptions, and **example lists** with common names. **KCET** prefers direct matches of examples and features.",
        },
        {
          type: "table",
          headers: ["Phylum", "One-line identity", "Exceptions and traps"],
          rows: [
            ["Porifera", "Canal system, choanocytes", "Hermaphrodite, yet fertilisation internal; development indirect"],
            ["Coelenterata", "Cnidoblasts, polyp and medusa", "Metagenesis in *Obelia*, not *Hydra*; digestion extra + intracellular"],
            ["Ctenophora", "Eight comb plates, bioluminescence", "Only sexual reproduction; external fertilisation"],
            ["Platyhelminthes", "Flame cells, acoelomate", "Organ level; incomplete gut; *Planaria* regenerates"],
            ["Aschelminthes", "Pseudocoelom, muscular pharynx", "Dioecious; females longer than males"],
            ["Annelida", "Metameres, nephridia", "*Nereis* dioecious; earthworm and leech monoecious; closed circulation"],
            ["Arthropoda", "Jointed appendages, chitin", "Largest phylum (over 2/3 of species); open circulation; Malpighian tubules"],
            ["Mollusca", "Mantle, radula", "Second largest phylum; unsegmented; gills do respiration **and** excretion"],
            ["Echinodermata", "Water vascular system", "Adults radial, larvae bilateral; no excretory system"],
            ["Hemichordata", "Proboscis, collar, trunk", "Non-chordate now; proboscis gland; open circulation"],
          ],
        },
        {
          type: "list",
          items: [
            "NCERT line: sponges are **primitive multicellular** animals with **cellular** level of organisation.",
            "NCERT line: cnidoblasts are used for **anchorage, defence and capture of prey**.",
            "NCERT line: in ctenophores **bioluminescence** is well marked.",
            "NCERT line: some flatworms absorb nutrients from the host **directly through their body surface**.",
            "NCERT line: arthropods have **statocysts** or balancing organs.",
            "NCERT line: in echinoderms, the water vascular system helps in **locomotion, capture and transport of food and respiration**.",
          ],
        },
        {
          type: "example",
          title: "NEET level: feature → phylum",
          problem: "Name the phylum: (a) organ level, acoelomate, flame cells; (b) diploblastic, comb plates; (c) open circulation, Malpighian tubules; (d) water vascular system.",
          steps: [
            "(a) Flame cells + acoelomate → Platyhelminthes.",
            "(b) Comb plates → Ctenophora.",
            "(c) Malpighian tubules → Arthropoda.",
            "(d) Water vascular system → Echinodermata.",
          ],
          answer: "(a) Platyhelminthes, (b) Ctenophora, (c) Arthropoda, (d) Echinodermata.",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: Ctenophores are called comb jellies. R: They bear eight external rows of ciliated comb plates that help in locomotion.",
          steps: [
            "A is true.",
            "R is true and gives the source of the name: the comb plates.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Statement analysis",
          problem: "How many are correct? (i) Sponges show intracellular digestion. (ii) Roundworms are hermaphrodite. (iii) Leeches are monoecious. (iv) Molluscs show metameric segmentation. (v) Hemichordates have an open circulatory system.",
          steps: [
            "(i) Correct.",
            "(ii) Wrong: aschelminthes are dioecious.",
            "(iii) Correct.",
            "(iv) Wrong: the mollusc body is unsegmented.",
            "(v) Correct.",
          ],
          answer: "Three statements, (i), (iii) and (v), are correct.",
        },
        {
          type: "example",
          title: "Harder: combining several bases",
          problem: "From this list, how many animals are triploblastic, bilaterally symmetrical as adults, coelomate and have open circulation? *Pheretima*, *Periplaneta* (cockroach), *Pila*, *Asterias*, *Ascaris*, *Balanoglossus*, *Fasciola*.",
          steps: [
            "Remove non-coelomates: *Ascaris* (pseudocoelomate) and *Fasciola* (acoelomate).",
            "Remove radial adults: *Asterias*.",
            "Remove closed circulation: *Pheretima*.",
            "Remaining: *Periplaneta* (arthropod), *Pila* (mollusc), *Balanoglossus* (hemichordate): all open circulation.",
          ],
          answer: "Three: cockroach, *Pila* and *Balanoglossus*.",
        },
        {
          type: "mistake",
          wrong: "All coelomates have a closed circulatory system.",
          right: "Arthropods, molluscs and hemichordates are coelomates with open circulation.",
          why: "Students link 'advanced body cavity' with 'advanced circulation'. The two bases of classification are independent; NEET combines them to catch this.",
        },
        {
          type: "mistake",
          wrong: "Earthworm is dioecious like Nereis because both are annelids.",
          right: "*Nereis* is dioecious, but earthworms and leeches are monoecious (hermaphrodite).",
          why: "Phylum-level generalisations break inside Annelida. NCERT states this contrast in one sentence, which NEET quotes directly.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which animal shows metagenesis?",
            emoji: "🪼",
            options: ["Hydra", "Obelia", "Adamsia", "Pennatula"],
            answer: 1,
            trap: 0,
            explain: "Obelia alternates between polyp (asexual) and medusa (sexual) forms. Hydra and Adamsia exist only as polyps.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Hemichordata is placed among non-chordates. R: Hemichordates have a stomochord, which is only similar to a notochord.",
              options: AR,
              answer: 0,
              explain: "Lacking a true notochord, they are non-chordates; the stomochord is why they were earlier placed in Chordata.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn one line plus one exception per phylum.",
            "Open circulation: arthropods, molluscs, hemichordates. Closed: annelids, chordates.",
            "Monoecious: sponges, ctenophores, flatworms, earthworm, leech. Dioecious: roundworms, Nereis, most arthropods, molluscs, echinoderms, hemichordates.",
            "No excretory system: echinoderms. Proboscis gland: hemichordates.",
          ],
        },
      ],
      flashcards: [
        { front: "Phylum with cellular level of organisation", back: "Porifera." },
        { front: "Second largest animal phylum", back: "Mollusca." },
        { front: "Animal showing metagenesis", back: "*Obelia*." },
        { front: "Mollusc organ for both respiration and excretion", back: "Feather-like gills in the mantle cavity." },
        { front: "Coelomates with open circulation", back: "Arthropods, molluscs, hemichordates." },
        { front: "Annelid that is dioecious", back: "*Nereis*." },
        { front: "Flatworm with high regeneration capacity", back: "*Planaria*." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which set contains only pseudocoelomates?",
          options: ["*Ascaris*, *Wuchereria*, *Ancylostoma*", "*Taenia*, *Fasciola*, *Ascaris*", "*Nereis*, *Ascaris*, *Hirudinaria*", "*Planaria*, *Ascaris*, *Pheretima*"],
          answer: 0,
          explain: "All three are aschelminthes. *Taenia*, *Fasciola* and *Planaria* are acoelomate; annelids are coelomate.",
        },
        {
          kind: "mcq",
          q: "A: In sponges, fertilisation is internal. R: Sponges are hermaphrodite.",
          options: AR,
          answer: 1,
          explain: "Both are NCERT facts, but being hermaphrodite does not explain internal fertilisation (many hermaphrodites cross-fertilise externally).",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many of these are radially symmetrical (as adults)? Adamsia, Pleurobrachia, Asterias, Taenia, Ophiura, Nereis, Aurelia.",
          answer: 5,
          explain: "Adamsia and Aurelia (coelenterates), Pleurobrachia (ctenophore), Asterias and Ophiura (echinoderms). Taenia and Nereis are bilateral.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which are correctly matched?",
          options: ["*Laccifer* – lac insect", "*Pinctada* – pearl oyster", "*Antedon* – sea urchin", "*Aplysia* – sea-hare"],
          answers: [0, 1, 3],
          explain: "*Antedon* is the sea lily; *Echinus* is the sea urchin.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which feature is common to Ctenophora and Coelenterata?",
          options: ["Cnidoblasts", "Comb plates", "Diploblastic body with tissue-level organisation", "Only sexual reproduction"],
          answer: 2,
          explain: "Both are radial, diploblastic and tissue level. Cnidoblasts are only in coelenterates; comb plates and strictly sexual reproduction only in ctenophores.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many of these phyla are coelomate? Porifera, Platyhelminthes, Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata.",
          answer: 5,
          explain: "Annelida, Arthropoda, Mollusca, Echinodermata and Hemichordata. Porifera has no coelom, Platyhelminthes is acoelomate, Aschelminthes pseudocoelomate.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "An animal is triploblastic, coelomate, unsegmented, with a calcareous shell, a muscular foot and a rasping feeding organ. Its excretion is carried out by:",
          options: ["Nephridia", "Malpighian tubules", "Gills in the mantle cavity", "Flame cells"],
          answer: 2,
          explain: "It is a mollusc (radula); NCERT says the gills in the mantle cavity have respiratory and excretory functions.",
          difficulty: 3,
          hint: "Identify the phylum from the radula first.",
        },
        {
          kind: "mcq",
          q: "Which statement is incorrect?",
          options: [
            "Arthropods have statocysts for balance",
            "Echinoderm larvae are bilaterally symmetrical",
            "Platyhelminthes have a complete digestive system",
            "Nereis has parapodia",
          ],
          answer: 2,
          explain: "Flatworms have an incomplete gut with a single opening.",
        },
        {
          kind: "mcq",
          q: "Which animal is NOT a vector according to NCERT?",
          options: ["*Anopheles*", "*Culex*", "*Aedes*", "*Locusta*"],
          answer: 3,
          explain: "*Locusta* is a gregarious pest; the three mosquitoes are vectors.",
        },
      ],
    },

    /* ---------------- Exam edge 2: chordates ---------------- */
    {
      slug: "c11-animal-kingdom-exam-edge-chordates",
      title: "Exam edge: Animal Kingdom (Chordates)",
      summary:
        "Chordate and vertebrate questions for NEET and KCET: protochordates, fish classes, heart chambers, exceptions like the crocodile and platypus, and example lists.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "Chordate questions in **NEET** are mostly example-based ('which is a cartilaginous fish?', 'which is viviparous?') or exception-based ('reptile with four-chambered heart'). Assertion–reason questions on air bladder, claspers and pneumatic bones are common. **KCET** asks common name ↔ scientific name pairs.",
        },
        {
          type: "table",
          headers: ["Trap", "Correct fact"],
          rows: [
            ["'All vertebrates lay eggs or all mammals are viviparous'", "Platypus is an oviparous mammal; many cartilaginous fish are viviparous"],
            ["'Reptiles have three chambers'", "Crocodile has four"],
            ["'Fishes have an air bladder'", "Cartilaginous fish lack it and swim constantly"],
            ["'Sea horse is not a fish'", "*Hippocampus* is a bony fish"],
            ["'Whales and dolphins are fish'", "*Balaenoptera* and *Delphinus* are mammals"],
            ["'Amphibians have scales'", "Amphibian skin is moist and without scales"],
            ["'Birds have many skin glands'", "Only the oil gland at the base of the tail"],
          ],
        },
        {
          type: "list",
          items: [
            "NCERT line: cyclostomes, after spawning, **die within a few days**; their larvae return to the ocean after metamorphosis.",
            "NCERT line: teeth of cartilaginous fish are **modified placoid scales**, backwardly directed.",
            "NCERT line: notochord is **persistent throughout life** in Chondrichthyes (and Cephalochordata).",
            "NCERT line: **all vertebrates are chordates but all chordates are not vertebrates**.",
            "NCERT line: in reptiles, snakes and lizards **shed their scales as skin cast**.",
            "NCERT line: the most unique mammalian characteristic is **milk-producing mammary glands**.",
          ],
        },
        {
          type: "example",
          title: "NEET level: odd one out",
          problem: "Which is the odd one out? *Scoliodon*, *Pristis*, *Carcharodon*, *Exocoetus*.",
          steps: [
            "*Scoliodon* (dogfish), *Pristis* (sawfish) and *Carcharodon* (great white shark) are cartilaginous.",
            "*Exocoetus* (flying fish) is a bony fish.",
          ],
          answer: "*Exocoetus*, the only bony fish.",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: Cartilaginous fishes have to swim constantly. R: They have no air bladder.",
          steps: [
            "A is true and R is true (NCERT).",
            "Without an air bladder they cannot regulate buoyancy, so they would sink if they stopped swimming. R explains A.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Numerical reasoning with heart chambers",
          problem: "Add up the heart chambers of one each of: *Labeo*, *Rana*, *Calotes*, *Crocodilus*, *Columba*, *Macaca*.",
          steps: [
            "*Labeo* (bony fish) = 2.",
            "*Rana* (amphibian) = 3; *Calotes* (lizard) = 3.",
            "*Crocodilus* = 4 (the reptile exception).",
            "*Columba* (bird) = 4; *Macaca* (mammal) = 4.",
            "Total = 2 + 3 + 3 + 4 + 4 + 4 = 20.",
          ],
          answer: "20 chambers.",
        },
        {
          type: "example",
          title: "Harder: chained identification",
          problem: "A vertebrate has jaws and paired fins. Its skin bears minute scales that also form its teeth. Males have claspers. What can you say about its gill covering, air bladder, notochord in the adult and fertilisation?",
          steps: [
            "Jaws + fins → Pisces; placoid scales forming teeth + claspers → Chondrichthyes.",
            "Gill slits separate with no operculum.",
            "Air bladder absent.",
            "Notochord persists throughout life.",
            "Claspers are for internal fertilisation; many are viviparous.",
          ],
          answer: "No operculum, no air bladder, persistent notochord, internal fertilisation (often viviparous).",
        },
        {
          type: "mistake",
          wrong: "Since mammals are viviparous, all mammals give birth to live young.",
          right: "With a few exceptions mammals are viviparous; *Ornithorhynchus* (platypus) lays eggs.",
          why: "Viviparity is taught as a defining mammalian trait. The defining trait is actually mammary glands; egg-laying platypus still feeds its young on milk.",
        },
        {
          type: "mistake",
          wrong: "Cyclostomes are true fishes because they live in water and have gill slits.",
          right: "Cyclostomes are jawless (Agnatha), without scales or paired fins; fishes (Pisces) are jawed Gnathostomata.",
          why: "An eel-like shape and gills suggest fish. The real split in vertebrates is jaws or no jaws.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match the scientific name with the common name.",
            pairs: [
              ["Clarias", "Magur"],
              ["Neophron", "Vulture"],
              ["Aptenodytes", "Penguin"],
              ["Macropus", "Kangaroo"],
              ["Hyla", "Tree frog"],
              ["Testudo", "Tortoise"],
            ],
            explain: "KCET and NEET often test these pairs. Note Chelone is the turtle and Testudo the tortoise.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Birds have pneumatic bones. R: Long bones of birds are hollow with air cavities, reducing body weight for flight.",
              options: AR,
              answer: 0,
              explain: "R defines pneumatic bones and explains their role in flight.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Agnatha (cyclostomes) vs Gnathostomata (Pisces + Tetrapoda).",
            "Chondrichthyes: placoid scales, claspers, no air bladder, no operculum. Osteichthyes: operculum, air bladder.",
            "Heart: fish 2, amphibians 3, reptiles 3 (crocodile 4), birds and mammals 4.",
            "Exceptions: platypus oviparous, crocodile 4 chambers, Ichthyophis limbless, Pteropus flies, dolphin and whale are mammals.",
          ],
        },
      ],
      flashcards: [
        { front: "Cartilaginous fish examples", back: "*Scoliodon*, *Pristis*, *Carcharodon*, *Trygon*, *Torpedo*." },
        { front: "Bony fish examples (fresh water)", back: "*Labeo* (rohu), *Catla* (katla), *Clarias* (magur)." },
        { front: "Number of gill slit pairs in cyclostomes", back: "6–15 pairs." },
        { front: "Gill pairs in bony fish", back: "Four pairs, covered by an operculum on each side." },
        { front: "Turtle vs tortoise", back: "*Chelone* is the turtle; *Testudo* is the tortoise." },
        { front: "Aquatic mammals in NCERT", back: "*Delphinus* (common dolphin), *Balaenoptera* (blue whale)." },
        { front: "Superclass of Ichthyophis", back: "Tetrapoda (class Amphibia), even though it has no limbs." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is viviparous?",
          options: ["*Ornithorhynchus*", "*Macropus*", "*Columba*", "*Rana*"],
          answer: 1,
          explain: "Kangaroo is a viviparous mammal; platypus, pigeon and frog lay eggs.",
        },
        {
          kind: "numeric",
          q: "How many of the following are homoiothermous? Pavo, Hemidactylus, Elephas, Catla, Struthio, Salamandra, Equus.",
          answer: 4,
          explain: "Pavo, Struthio (birds), Elephas, Equus (mammals). The rest are poikilotherms.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A: Amphibians can respire through the skin. R: Amphibian skin is moist and without scales.",
          options: AR,
          answer: 0,
          explain: "A moist, scaleless skin allows gas exchange; amphibians also use gills and lungs.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which are correct about Chondrichthyes?",
          options: ["Mouth ventral", "Operculum present", "Teeth are modified placoid scales", "Many are viviparous"],
          answers: [0, 2, 3],
          explain: "Gill slits are without an operculum in cartilaginous fish.",
        },
        {
          kind: "mcq",
          q: "Which statement about cyclostomes is incorrect?",
          options: [
            "They have a sucking circular mouth without jaws",
            "Their cranium and vertebral column are cartilaginous",
            "They have paired fins and scales",
            "They migrate to fresh water for spawning",
          ],
          answer: 2,
          explain: "Cyclostomes lack scales and paired fins.",
        },
        {
          kind: "numeric",
          q: "Add the heart chambers of one each of: Trygon, Hyla, Chameleon, Psittacula, Delphinus.",
          answer: 16,
          explain: "Trygon 2 + Hyla 3 + Chameleon 3 + Psittacula 4 + Delphinus 4 = 16.",
          difficulty: 2,
          hint: "Use the class rule unless the animal is the crocodile.",
        },
        {
          kind: "mcq",
          q: "A chordate keeps its notochord from head to tail throughout life and never forms a vertebral column. It is:",
          options: ["*Ascidia*", "*Branchiostoma*", "*Petromyzon*", "*Scoliodon*"],
          answer: 1,
          explain: "*Branchiostoma* is a cephalochordate. *Ascidia* keeps it only in the larval tail; *Petromyzon* and *Scoliodon* are vertebrates with a vertebral column.",
          difficulty: 3,
          hint: "Vertebrates replace or surround the notochord with vertebrae.",
        },
        {
          kind: "mcq",
          q: "Which pair of features is shared by birds and mammals but not reptiles (other than crocodiles)?",
          options: ["Internal fertilisation and lungs", "Four-chambered heart and homoiothermy", "Scales and oviparity", "Pinnae and hair"],
          answer: 1,
          explain: "Birds and mammals both have a four-chambered heart and are warm-blooded. Reptiles also have internal fertilisation and lungs; pinnae and hair are only mammalian.",
          difficulty: 3,
        },
      ],
    },
  ],
};

export const topics: Topic[] = [livingWorld, bioClass, plantKingdom, animalKingdom];

export const links: Record<string, string | string[]> = {
  "11:The Living World": "c11-the-living-world",
  "11:Biological Classification": "c11-biological-classification",
  "11:Plant Kingdom": "c11-plant-kingdom",
  "11:Animal Kingdom": "c11-animal-kingdom",
  "11:Diversity of Living Organisms": ["c11-the-living-world", "c11-biological-classification", "c11-plant-kingdom", "c11-animal-kingdom"],
};
