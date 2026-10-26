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

export const topics: Topic[] = [livingWorld];

export const links: Record<string, string | string[]> = {
  "11:The Living World": "c11-the-living-world",
};
