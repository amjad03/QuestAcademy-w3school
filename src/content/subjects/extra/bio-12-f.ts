import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

/*
 * ISC-only content that the rationalised NCERT (and so CBSE, Karnataka II PUC and the current
 * NEET syllabus) dropped: Strategies for Enhancement in Food Production (old NCERT ch 9),
 * Stem Cell Technology (ISC biotechnology) and Environmental Issues (old NCERT ch 16).
 */
export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Strategies for Enhancement in Food Production (ISC; old NCERT ch 9) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-bio-food-production",
    title: "Strategies for Enhancement in Food Production",
    icon: "🌾",
    description: "Animal husbandry (dairy, poultry, bee-keeping, fisheries), animal breeding and MOET, plant breeding for yield, disease and pest resistance, biofortification, single-cell protein, tissue culture and somatic hybridisation.",
    lessons: [
      {
        slug: "c12-bio-fp-animal-husbandry",
        title: "Animal Husbandry: Dairy, Poultry, Bees and Fish",
        summary: "What animal husbandry covers, how a dairy farm and a poultry farm are managed, bee-keeping and its value for crop pollination, and inland and marine fisheries.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🐄",
            caption: "A village dairy cooperative collects milk twice a day. Behind every litre are choices about breed, feed, shelter, cleanliness and health care.",
          },
          {
            type: "text",
            md: "The world population keeps rising, so food production must rise too. Biology helps in two broad ways: by improving **animals** we raise for food (animal husbandry and animal breeding) and by improving **crop plants** (plant breeding, tissue culture). It also finds new food sources such as **single-cell protein**.\n\n**Animal husbandry** is the agricultural practice of breeding and raising livestock: buffaloes, cows, pigs, horses, cattle, sheep, camels, goats and others useful to humans. In a wider sense it also includes **poultry** farming and **fisheries**. India and China together hold more than 70% of the world's livestock, yet their share of world farm produce is only about 25%. So productivity per animal is low, and better management and breeding are needed.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "This chapter is in the **ISC** Class 12 syllabus (unit Biology and Human Welfare). The rationalised NCERT removed it, so **CBSE and Karnataka II PUC** no longer teach it, and it is not in the current NEET syllabus. Older NEET and KCET papers did ask it.",
          },
          {
            type: "heading",
            text: "Dairy farm management",
          },
          {
            type: "text",
            md: "**Dairying** is the management of animals for milk and its products for human use. The aim is to raise the yield and the quality of milk. The key steps are:",
          },
          {
            type: "list",
            items: [
              "**Good breeds**: choose breeds with a high yield potential that suits the local climate and that resist disease.",
              "**Housing and water**: cattle are kept well housed, with enough clean water, and free of disease.",
              "**Scientific feeding**: the right quality and quantity of fodder.",
              "**Hygiene**: strict cleanliness of the cattle and of the people who handle them during milking, storage and transport of milk.",
              "**Records and checks**: regular inspection and a veterinary doctor's visits to catch problems early.",
            ],
          },
          {
            type: "text",
            md: "**Poultry** is the class of domesticated birds used for meat or eggs: chicken, ducks, turkeys and geese (the word often also covers other farmed birds). Poultry farm management follows the same ideas: disease-free and suitable breeds, proper and safe farm conditions, proper feed and water, and hygiene and health care.\n\nA serious threat is **bird flu** (avian influenza, caused by the **H5N1** strain of the influenza virus). When it breaks out, large numbers of birds are culled and poultry sales fall sharply.",
          },
          {
            type: "heading",
            text: "Bee-keeping and fisheries",
          },
          {
            type: "text",
            md: "**Bee-keeping (apiculture)** is the maintenance of hives of honeybees to get **honey** (a food of high nutritive value, also used in traditional medicine) and **beeswax** (used in cosmetics and polishes). The common Indian species is ***Apis indica***. It needs little investment and can be done wherever there are enough wild shrubs, fruit orchards or crops in flower.\n\nGood bee-keeping needs: knowledge of the nature and habits of bees; choosing a suitable site for the hives; catching and hiving swarms (groups of bees); managing hives in different seasons; and handling and collecting honey and wax. Bees are also **pollinators** of crops such as sunflower, *Brassica* (mustard), apple and pear. Keeping hives in fields during flowering raises pollination and so **crop yield**.\n\n**Fishery** is the industry of catching, processing and selling fish, shellfish (prawns, crabs, lobsters) and molluscs. **Aquaculture** is farming aquatic animals and plants; **pisciculture** is farming fish. The drive to raise fish production is called the **Blue Revolution**, on the model of the Green Revolution.",
          },
          {
            type: "table",
            headers: ["Kind of water", "Common food fishes"],
            rows: [
              ["Fresh water (rivers, ponds, lakes)", "*Catla*, Rohu, common carp"],
              ["Marine (sea)", "Hilsa, sardines, mackerel, pomfrets"],
            ],
          },
          {
            type: "example",
            title: "Planning a small honey unit",
            problem: "A farmer in Karnataka grows sunflower and wants to start bee-keeping. Give two benefits and three things he must learn first.",
            steps: [
              "Benefit 1: income from honey and beeswax with little investment.",
              "Benefit 2: bees pollinate sunflower flowers, so seed set and yield of the crop go up.",
              "He must learn the habits of bees, pick a good site near flowering plants, and learn to catch and hive swarms.",
              "He must also learn seasonal care of hives and safe collection of honey and wax.",
            ],
            answer: "Benefits: honey and wax income, better pollination and crop yield. Needs: knowledge of bee habits, a suitable site, swarm handling, seasonal hive care and honey collection.",
          },
          {
            type: "mistake",
            wrong: "Animal husbandry only means keeping cows and buffaloes for milk.",
            right: "Animal husbandry is the breeding and raising of all useful livestock, and in a wider sense includes poultry and fisheries. Bee-keeping is treated alongside it.",
            why: "Dairying is the most familiar example, so students shrink the term to it. Board questions often ask for poultry, fish or bees under the same heading.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each fish by where it is usually caught.",
              groups: ["Fresh water", "Marine"],
              items: [
                { text: "Catla", group: 0, hint: "An Indian major carp of rivers and ponds." },
                { text: "Rohu", group: 0, hint: "Another Indian major carp, common in ponds." },
                { text: "Common carp", group: 0, hint: "Farmed in fresh-water ponds." },
                { text: "Hilsa", group: 1, hint: "Listed by NCERT with marine fishes." },
                { text: "Sardine", group: 1, hint: "A small sea fish caught off the west coast." },
                { text: "Pomfret", group: 1, hint: "A flat sea fish." },
                { text: "Mackerel", group: 1, hint: "A sea fish, bangda in Marathi." },
              ],
              explain: "Indian major carps and common carp are fresh-water fishes; Hilsa, sardines, pomfrets and mackerel are the marine examples NCERT lists.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is **not** one of the key steps of dairy farm management?",
                options: ["Selecting high-yielding, disease-resistant breeds", "Hygiene during milking, storage and transport", "Feeding cattle with antibiotics every day to raise milk yield", "Regular visits by a veterinary doctor"],
                answer: 2,
                explain: "Good management means good breeds, housing, scientific feeding, hygiene and vet checks. Routine antibiotic feeding is not a management step and leaves residues in milk.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "How ISC marks this",
            md: "Short answers want lists: give **four or five** dairy management points, not one long sentence. Name the species of honeybee (*Apis indica*) and give two products of apiculture with one use each. For fisheries, name at least two fresh-water and two marine fishes.",
          },
          {
            type: "keypoints",
            items: [
              "Animal husbandry: breeding and raising livestock; includes poultry and fisheries in a wider sense.",
              "Dairy management: good breeds, housing and water, scientific feeding, hygiene, vet checks.",
              "Bird flu (H5N1) is a major threat to poultry.",
              "Apiculture gives honey and beeswax; bees also raise crop yield by pollination.",
              "Fresh-water fish: Catla, Rohu, common carp. Marine: Hilsa, sardines, mackerel, pomfrets. Blue Revolution = raising fish output.",
            ],
          },
        ],
        flashcards: [
          { front: "Animal husbandry", back: "The agricultural practice of breeding and raising livestock; in a wider sense it includes poultry and fisheries." },
          { front: "Share of world livestock held by India and China", back: "More than 70%, but only about 25% of world farm produce, so productivity is low." },
          { front: "Five points of dairy farm management", back: "Good breeds, good housing and water, scientific feeding, hygiene in milking/storage/transport, regular vet checks." },
          { front: "Virus strain causing bird flu", back: "H5N1 (avian influenza)." },
          { front: "Common Indian honeybee species", back: "Apis indica." },
          { front: "Two products of apiculture", back: "Honey (food, traditional medicine) and beeswax (cosmetics, polishes)." },
          { front: "Blue Revolution", back: "The drive to increase fish production, modelled on the Green Revolution." },
          { front: "Aquaculture vs pisciculture", back: "Aquaculture: farming of aquatic animals and plants. Pisciculture: farming of fish only." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which group lists only marine fishes?",
            options: ["Catla, Rohu, common carp", "Hilsa, sardines, mackerel", "Rohu, pomfret, Catla", "Common carp, sardine, Rohu"],
            answer: 1,
            explain: "Hilsa, sardines, mackerel and pomfrets are the marine examples; Catla, Rohu and common carp are fresh-water fishes.",
          },
          {
            kind: "truefalse",
            q: "Keeping beehives in a mustard field during flowering can raise the mustard yield.",
            answer: true,
            explain: "Bees pollinate mustard (*Brassica*), sunflower, apple and pear, so seed and fruit set improve.",
          },
          {
            kind: "fill",
            q: "Bird flu in poultry is caused by the ___ strain of influenza virus.",
            answer: ["H5N1"],
            explain: "Avian influenza H5N1 forces culling of birds and causes heavy losses.",
          },
          {
            kind: "multi",
            q: "Which are products or services of apiculture?",
            options: ["Honey", "Beeswax", "Silk", "Pollination of crops", "Lac"],
            answers: [0, 1, 3],
            explain: "Honey, beeswax and pollination come from bee-keeping. Silk comes from silkworms (sericulture) and lac from lac insects.",
          },
          {
            kind: "mcq",
            q: "India and China have more than 70% of the world's livestock but give about 25% of world farm produce. What does this show?",
            options: ["Their livestock numbers are too small", "Productivity per animal is low and must be improved", "They export most of their produce", "Their animals are all wild"],
            answer: 1,
            explain: "Many animals but a small share of output means low output per animal; better breeds and management are the answer.",
          },
          {
            kind: "mcq",
            q: "Pisciculture means",
            options: ["farming of all aquatic organisms", "farming of fish", "catching of marine fish only", "keeping of honeybees"],
            answer: 1,
            explain: "Pisciculture is fish farming; aquaculture is the wider term for farming aquatic animals and plants.",
          },
          {
            kind: "truefalse",
            q: "Hygiene during milking matters only on the farm; once milk leaves the farm it no longer matters.",
            answer: false,
            explain: "Cleanliness is needed during milking, storage and transport of milk, not just at milking.",
          },
        ],
      },
      {
        slug: "c12-bio-fp-animal-breeding",
        title: "Animal Breeding: Inbreeding, Outbreeding and MOET",
        summary: "What a breed is, how inbreeding builds pure lines and why it causes inbreeding depression, the three kinds of outbreeding, artificial insemination and multiple ovulation embryo transfer.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "**Animal breeding** aims to raise the yield of animals and improve the desirable qualities of their produce (more milk, more eggs, leaner meat).\n\nA **breed** is a group of animals related by descent and alike in most characters such as general appearance, features, size and configuration. Breeding can be done between animals of the same breed (**inbreeding**) or between different breeds or species (**outbreeding**).",
          },
          {
            type: "heading",
            text: "Inbreeding",
          },
          {
            type: "list",
            items: [
              "**Definition**: mating of more closely related individuals **within the same breed for 4–6 generations**.",
              "**Method**: superior males and superior females of the breed are identified and mated in pairs; the progeny are evaluated and the best are used for further mating. A superior **cow** gives more milk per lactation; a superior **bull** gives rise to superior progeny.",
              "**Effect on genes**: inbreeding increases **homozygosity**, so it helps develop a **pure line** in any animal.",
              "**Uses**: it exposes harmful recessive genes, which selection then removes; it helps accumulate superior genes and remove less desirable ones, raising the productivity of the line.",
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Inbreeding depression",
            md: "Continued close inbreeding usually **reduces fertility and even productivity**. This is **inbreeding depression**. The remedy: mate selected animals of the breeding population with **unrelated superior animals of the same breed**. This usually restores fertility and yield.",
          },
          {
            type: "heading",
            text: "Outbreeding",
          },
          {
            type: "table",
            headers: ["Type", "Who is mated", "Use / example"],
            rows: [
              ["**Out-crossing**", "animals of the **same breed** with **no common ancestors** on either side of their pedigree for 4–6 generations; the offspring is an **out-cross**", "best for animals below average in productivity (milk yield, growth rate in beef cattle); a single out-cross often overcomes inbreeding depression"],
              ["**Cross-breeding**", "superior males of **one breed** with superior females of **another breed**", "combines desirable qualities of two breeds; progeny may be used directly or inbred to make a new stable breed, e.g. **Hisardale** sheep (Punjab) from **Bikaneri ewes × Merino rams** (NCERT spells it Marino)"],
              ["**Interspecific hybridisation**", "male and female of **two different but related species**", "progeny may combine useful features of both parents, e.g. the **mule** from a female horse (mare) × male donkey"],
            ],
          },
          {
            type: "heading",
            text: "Controlled breeding: artificial insemination and MOET",
          },
          {
            type: "text",
            md: "In **artificial insemination (AI)**, semen of a chosen superior male is collected and injected into the reproductive tract of a selected female by the breeder. Semen can be used at once or frozen for later use, and it can be transported easily. AI avoids problems of normal mating and lets one elite bull sire many calves.\n\nAI success rate is often fairly low. To get more superior offspring from elite females, breeders use **Multiple Ovulation Embryo Transfer (MOET)**:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "The cow is given **hormones with FSH-like activity**, which induce follicle maturation and **superovulation**: about **6–8 eggs** per cycle instead of the usual one.",
              "The cow is mated with an **elite bull** or artificially inseminated.",
              "The fertilised eggs at the **8–32 cell stage** are recovered **non-surgically**.",
              "Each embryo is transferred to a **surrogate mother**, which carries it to birth.",
              "The genetic mother is free for another round of superovulation.",
            ],
          },
          {
            type: "text",
            md: "MOET has been used in cattle, sheep, rabbits, buffaloes and mares. It has produced high-milk-yielding females and high-quality bulls giving **lean meat with less lipid**, and it shortens the time needed to build up herd size.",
          },
          {
            type: "example",
            title: "Choosing the right method",
            problem: "A dairy has a herd of Sahiwal cows that has been inbred for many generations. Fertility and milk yield are now falling. What has happened, and what should the breeder do?",
            steps: [
              "Long inbreeding raises homozygosity, so harmful recessive alleles come together in many animals.",
              "Falling fertility and productivity after continued inbreeding is **inbreeding depression**.",
              "The fix is to mate the herd with **unrelated superior Sahiwal animals**, that is, animals of the same breed with no common ancestors for 4–6 generations.",
              "This is **out-crossing**; one out-cross is often enough to restore vigour.",
            ],
            answer: "The herd shows inbreeding depression. The breeder should out-cross: mate with unrelated superior animals of the same breed.",
          },
          {
            type: "mistake",
            wrong: "Out-crossing and cross-breeding mean the same thing: crossing two different breeds.",
            right: "Out-crossing mates unrelated animals of the **same breed**. Cross-breeding mates superior animals of **two different breeds**. Interspecific hybridisation mates two different species.",
            why: "Both words contain 'cross', so students merge them. Remember: out-cross stays in the breed; cross-breed crosses breeds.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each case to its breeding method.",
              pairs: [
                ["Brother–sister style mating in one breed for 5 generations", "Inbreeding"],
                ["Unrelated Murrah buffaloes mated to cure low fertility", "Out-crossing"],
                ["Bikaneri ewes × Merino rams giving Hisardale", "Cross-breeding"],
                ["Mare × male donkey giving a mule", "Interspecific hybridisation"],
                ["FSH-like hormone, 6–8 eggs, surrogate mothers", "MOET"],
              ],
              explain: "Same breed and related means inbreeding; same breed but unrelated means out-crossing; two breeds is cross-breeding; two species is interspecific hybridisation.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In MOET, at which stage are the fertilised eggs recovered for transfer?",
                options: ["Zygote, 1 cell", "8–32 cells", "Blastocyst with 200 cells", "Gastrula"],
                answer: 1,
                explain: "Embryos at the 8–32 cell stage are recovered non-surgically and placed in surrogate mothers.",
              },
              {
                kind: "truefalse",
                q: "Inbreeding increases heterozygosity.",
                answer: false,
                explain: "Inbreeding increases homozygosity; that is why it produces pure lines and also exposes harmful recessive alleles.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Define inbreeding with both parts: **closely related, same breed** and **4–6 generations**. For MOET, write the steps in order and state the numbers (6–8 eggs, 8–32 cells). A frequent two-mark question asks for the cause and remedy of inbreeding depression.",
          },
          {
            type: "keypoints",
            items: [
              "Breed: animals related by descent and similar in most characters.",
              "Inbreeding (same breed, 4–6 generations) raises homozygosity, makes pure lines, exposes harmful recessives; excess causes inbreeding depression.",
              "Out-crossing: same breed, no common ancestor for 4–6 generations; cures inbreeding depression.",
              "Cross-breeding: two breeds (Hisardale sheep). Interspecific hybridisation: two species (mule).",
              "MOET: FSH-like hormones → superovulation (6–8 eggs) → mating/AI → 8–32 cell embryos to surrogate mothers.",
            ],
          },
        ],
        flashcards: [
          { front: "Breed", back: "A group of animals related by descent and similar in most characters such as general appearance, features, size and configuration." },
          { front: "Inbreeding", back: "Mating of closely related individuals within the same breed for 4–6 generations." },
          { front: "Inbreeding depression and its cure", back: "Fall in fertility and productivity after continued inbreeding; cured by mating with unrelated superior animals of the same breed." },
          { front: "Out-cross", back: "The offspring of mating two unrelated animals of the same breed (no common ancestor on either side for 4–6 generations)." },
          { front: "Hisardale", back: "A sheep breed developed in Punjab by crossing Bikaneri ewes with Merino rams (cross-breeding)." },
          { front: "Mule", back: "Offspring of a female horse (mare) and a male donkey: interspecific hybridisation." },
          { front: "MOET numbers", back: "Superovulation gives 6–8 eggs per cycle; embryos recovered at the 8–32 cell stage." },
          { front: "Hormone used in MOET", back: "A hormone with FSH-like activity, to induce follicle maturation and superovulation." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which breeding method is best for animals that are below average in milk production?",
            options: ["Inbreeding", "Out-crossing", "Interspecific hybridisation", "Cloning"],
            answer: 1,
            explain: "Out-crossing is recommended for animals below average in productivity and also overcomes inbreeding depression.",
          },
          {
            kind: "mcq",
            q: "Hisardale is an example of",
            options: ["inbreeding", "out-crossing", "cross-breeding", "interspecific hybridisation"],
            answer: 2,
            explain: "Two different breeds of sheep (Bikaneri and Merino) were crossed, so it is cross-breeding.",
          },
          {
            kind: "order",
            q: "Arrange the steps of MOET in order.",
            items: ["Give FSH-like hormone to the cow", "Superovulation: 6–8 eggs", "Mating with elite bull or AI", "Recover 8–32 cell embryos", "Transfer to surrogate mothers"],
            explain: "Hormone first, then many eggs, then fertilisation, then recovery and transfer.",
          },
          {
            kind: "multi",
            q: "Which are advantages of inbreeding?",
            options: ["Develops pure lines", "Exposes harmful recessive genes for removal", "Always raises fertility", "Accumulates superior genes", "Increases heterozygosity"],
            answers: [0, 1, 3],
            explain: "Inbreeding raises homozygosity, gives pure lines, exposes recessives and gathers superior genes. Long inbreeding lowers fertility.",
          },
          {
            kind: "truefalse",
            q: "In MOET the genetic mother must carry all her embryos to birth herself.",
            answer: false,
            explain: "Embryos go to surrogate mothers, so the genetic mother is free for another superovulation.",
          },
          {
            kind: "fill",
            q: "Inbreeding is mating of closely related animals within the same breed for ___ generations.",
            answer: ["4-6", "4–6", "4 to 6", "four to six"],
            explain: "NCERT gives 4–6 generations for both inbreeding and the out-cross pedigree rule.",
          },
          {
            kind: "mcq",
            q: "A mule is produced by crossing",
            options: ["male horse × female donkey", "female horse × male donkey", "two breeds of horse", "two unrelated donkeys"],
            answer: 1,
            explain: "Mare (female horse) × male donkey gives a mule; the reverse cross gives a hinny.",
          },
        ],
      },
      {
        slug: "c12-bio-fp-plant-breeding",
        title: "Plant Breeding: Yield, Resistance and Biofortification",
        summary: "The Green Revolution, the five steps of plant breeding, varieties bred for disease and insect resistance, mutation breeding and biofortified crops.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "**Plant breeding** is the purposeful manipulation of plant species to create plant types that are better suited for cultivation, give better yields and resist disease. Farmers have done this for about 9000–11000 years by simple selection; modern breeding uses genetics and molecular tools.\n\nIn India the **Green Revolution** depended largely on plant breeding. From **1960 to 2000**, wheat production rose from **11 to 75 million tonnes** and rice from **35 to 89.5 million tonnes**.",
          },
          {
            type: "heading",
            text: "Steps in breeding a new variety",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Collection of variability**: gather all the diverse alleles of a crop, including its wild relatives. The full collection of plants or seeds with all the alleles is the **germplasm collection**.",
              "**Evaluation and selection of parents**: evaluate the germplasm and pick plants with the desired combination of characters to be parents. Pure lines are made where needed.",
              "**Cross hybridisation among selected parents**: cross parents so that the desired characters (say, high protein of one and disease resistance of the other) come together. This is slow: only one in a few hundred to a thousand crosses may give the wanted recombination.",
              "**Selection and testing of superior recombinants**: pick progeny with the desired combination; self-pollinate them for several generations until they become uniform (homozygous) so the characters do not segregate.",
              "**Testing, release and commercialisation**: test the new line in research fields and then in farmers' fields for **at least three growing seasons** at several places across agroclimatic zones, compared with the best local cultivar (the **check** or reference cultivar).",
            ],
          },
          {
            type: "table",
            headers: ["Crop", "What was bred", "Varieties / source"],
            rows: [
              ["Wheat", "semi-dwarf, high-yielding, disease-resistant (Norman E. Borlaug, CIMMYT, Mexico)", "**Sonalika** and **Kalyan Sona** introduced in India in 1963"],
              ["Rice", "semi-dwarf varieties from **IR-8** (IRRI, Philippines) and **Taichung Native-1** (Taiwan)", "**Jaya** and **Ratna** developed in India"],
              ["Sugarcane", "*Saccharum barberi* (north India, low sugar and yield) × *S. officinarum* (south India, thick stems, high sugar)", "hybrids with high yield, thick stems, high sugar that grow in north India"],
              ["Millets", "hybrid maize, jowar and bajra", "high-yielding and resistant to water stress"],
            ],
          },
          {
            type: "heading",
            text: "Breeding for disease resistance",
          },
          {
            type: "text",
            md: "Plant diseases are caused by **fungi** (brown rust of wheat, red rot of sugarcane, late blight of potato), **bacteria** (black rot of crucifers) and **viruses** (tobacco mosaic, turnip mosaic). The usual route is conventional breeding: screen germplasm for resistance, hybridise selected parents, select and evaluate the hybrids, then test and release.\n\n**Mutation breeding**: mutations are induced with **chemicals or radiation such as gamma rays**, and plants with the wanted character are selected and used as a source. In mung bean, resistance to **yellow mosaic virus and powdery mildew** was produced this way. Resistance genes from **wild relatives** also help: in bhindi (*Abelmoschus esculentus*), resistance to yellow mosaic virus came from a wild species, giving the variety **Parbhani Kranti**.",
          },
          {
            type: "table",
            headers: ["Crop", "Variety", "Resistant to"],
            rows: [
              ["Wheat", "Himgiri", "leaf and stripe rust, hill bunt"],
              ["*Brassica*", "Pusa Swarnim (Karan rai)", "white rust"],
              ["Cauliflower", "Pusa Shubhra, Pusa Snowball K-1", "black rot and curl blight black rot"],
              ["Cowpea", "Pusa Komal", "bacterial blight"],
              ["Chilli", "Pusa Sadabahar", "chilli mosaic virus, tobacco mosaic virus and leaf curl"],
            ],
          },
          {
            type: "text",
            md: "**Breeding for insect pest resistance** uses morphological, biochemical or physiological characters of the host. **Hairy leaves** resist jassids in cotton and cereal leaf beetle in wheat. **Solid stems** in wheat are not preferred by stem sawfly. **Smooth-leaved, nectarless** cotton does not attract bollworms. High **aspartic acid** with low nitrogen and sugar in maize gives resistance to maize stem borers. Varieties: *Brassica* **Pusa Gaurav** (aphids); flat bean **Pusa Sem 2, Pusa Sem 3** (jassids, aphids, fruit borer); okra **Pusa Sawani, Pusa A-4** (shoot and fruit borers).\n\n**Biofortification** is breeding crops with higher levels of vitamins and minerals, or more protein and healthier fats, to fight hidden hunger. Aims: better protein content and quality, oil content and quality, vitamin content, and micronutrient and mineral content. Examples: maize hybrids (2000) with **twice the lysine and tryptophan**; wheat **Atlas 66**, high in protein, used as a donor parent; **iron-fortified rice** with about five times as much iron; IARI vegetables rich in vitamin A (carrot, spinach, pumpkin), vitamin C (bitter gourd, bathua, mustard, tomato), iron and calcium (spinach, bathua) and protein (broad bean, lablab, French bean, garden pea).",
          },
          {
            type: "example",
            title: "Planning a resistant variety",
            problem: "A high-yielding chilli variety is badly hit by a mosaic virus. A wild relative resists it but gives poor fruit. Outline how breeders would combine the two characters.",
            steps: [
              "Screen the germplasm and confirm the wild relative carries the resistance; it becomes one parent, the high-yielder the other.",
              "Cross the two (cross hybridisation) to bring resistance and yield into one plant.",
              "Select progeny that are both resistant and high-yielding; self them for several generations until they breed true.",
              "Test the line in farmers' fields for at least three seasons at several places against the check cultivar, then release it.",
            ],
            answer: "Germplasm screening → hybridise resistant wild relative × high-yielder → select and stabilise recombinants → multi-season, multi-location trials → release (as was done for Parbhani Kranti in bhindi).",
          },
          {
            type: "mistake",
            wrong: "Mutation breeding means inserting a foreign gene into a plant.",
            right: "Mutation breeding induces changes in the plant's **own** DNA with chemicals or radiation (such as gamma rays), then selects useful mutants. Inserting a foreign gene is genetic engineering (as in Bt cotton).",
            why: "Both change genes, so they get mixed up. The source of the change is the key: induced mutation of existing genes versus transfer of a gene from another organism.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of plant breeding in order.",
              items: ["Collection of variability (germplasm)", "Evaluation and selection of parents", "Cross hybridisation among selected parents", "Selection and testing of superior recombinants", "Testing, release and commercialisation"],
              explain: "You cannot choose parents before collecting variability, and you test and release only after superior recombinants are stable.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which feature gives cotton resistance to jassids?",
                options: ["Solid stems", "Hairy leaves", "High aspartic acid", "Nectarless flowers"],
                answer: 1,
                explain: "Hairy leaves resist jassids in cotton. Solid stems resist stem sawfly in wheat; nectarless smooth cotton resists bollworms; aspartic acid works in maize.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Variety–resistance tables are the most-asked part. Learn them as crop → variety → disease or pest. In the steps question, name the **germplasm collection** and say that trials run for **at least three seasons** against a **check cultivar**; these words earn the marks.",
          },
          {
            type: "keypoints",
            items: [
              "Green Revolution 1960–2000: wheat 11 → 75 million t, rice 35 → 89.5 million t.",
              "Five steps: collect variability → select parents → hybridise → select recombinants → test, release, commercialise.",
              "Disease-resistant: Himgiri wheat, Pusa Swarnim, Pusa Shubhra, Pusa Komal, Pusa Sadabahar; mutation gave resistant mung bean; Parbhani Kranti got its gene from a wild bhindi.",
              "Insect-resistant: Pusa Gaurav, Pusa Sem 2/3, Pusa Sawani, Pusa A-4; hairy leaves, solid stems, nectarless cotton, aspartic acid in maize.",
              "Biofortification: more vitamins, minerals, protein or better oil (lysine-rich maize, Atlas 66 wheat, iron-rich rice).",
            ],
          },
        ],
        flashcards: [
          { front: "Germplasm collection", back: "The entire collection of plants or seeds holding all the diverse alleles of a crop, including wild relatives." },
          { front: "Semi-dwarf wheat in India (1963)", back: "Sonalika and Kalyan Sona, from Borlaug's CIMMYT work in Mexico." },
          { front: "Jaya and Ratna", back: "Semi-dwarf rice varieties developed in India from IR-8 and Taichung Native-1." },
          { front: "Himgiri", back: "Wheat variety resistant to leaf and stripe rust and hill bunt." },
          { front: "Parbhani Kranti", back: "Bhindi resistant to yellow mosaic virus; gene transferred from a wild species." },
          { front: "Pusa Gaurav", back: "Brassica (rapeseed mustard) variety resistant to aphids." },
          { front: "Biofortification", back: "Breeding crops with higher vitamins, minerals, protein or healthier fats." },
          { front: "Atlas 66", back: "A high-protein wheat used as a donor for improving cultivated wheat." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which variety is resistant to white rust?",
            options: ["Pusa Komal", "Pusa Swarnim", "Pusa Sadabahar", "Himgiri"],
            answer: 1,
            explain: "Pusa Swarnim (Karan rai) of Brassica resists white rust. Pusa Komal (cowpea) resists bacterial blight; Pusa Sadabahar (chilli) resists viruses; Himgiri (wheat) resists rusts and hill bunt.",
          },
          {
            kind: "mcq",
            q: "Two sugarcane species were crossed to get high-sugar canes that grow in north India. Which pair?",
            options: ["*S. officinarum* × *S. barberi*", "*S. officinarum* × *S. spontaneum*", "*S. barberi* × *S. robustum*", "*S. robustum* × *S. officinarum*"],
            answer: 0,
            explain: "*S. barberi* (north India, poor sugar) was crossed with *S. officinarum* (south India, thick stems, high sugar).",
          },
          {
            kind: "multi",
            q: "Which are insect-resistance characters described for crops?",
            options: ["Hairy leaves in cotton against jassids", "Solid stems in wheat against stem sawfly", "Nectarless cotton against bollworms", "High aspartic acid, low N and sugar in maize against stem borers", "Thin waxy leaves in rice against rust"],
            answers: [0, 1, 2, 3],
            explain: "The first four are NCERT examples. Rust is a fungal disease, not an insect pest, and the last option is made up.",
          },
          {
            kind: "numeric",
            q: "From 1960 to 2000, by how many million tonnes did India's wheat production rise?",
            answer: 64,
            unit: "million tonnes",
            explain: "75 − 11 = 64 million tonnes.",
          },
          {
            kind: "truefalse",
            q: "A new variety is released after a single season of testing in one research farm.",
            answer: false,
            explain: "It is tested in farmers' fields for at least three growing seasons at several locations against a check cultivar.",
          },
          {
            kind: "mcq",
            q: "Resistance to yellow mosaic virus and powdery mildew in mung bean was obtained by",
            options: ["cross-breeding with wheat", "induced mutation", "somatic hybridisation", "inserting a Bt gene"],
            answer: 1,
            explain: "It is the NCERT example of mutation breeding.",
          },
          {
            kind: "fill",
            q: "In 2000, maize hybrids were developed with twice the amount of the amino acids lysine and ___.",
            answer: ["tryptophan"],
            explain: "Lysine and tryptophan are essential amino acids that ordinary maize lacks.",
          },
          {
            kind: "mcq",
            q: "Which vegetable is listed as bred for higher vitamin C?",
            options: ["Carrot", "Pumpkin", "Bitter gourd", "Garden pea"],
            answer: 2,
            explain: "Bitter gourd, bathua, mustard and tomato are the vitamin C examples; carrot and pumpkin are vitamin A; garden pea is protein.",
          },
        ],
      },
      {
        slug: "c12-bio-fp-scp-tissue-culture",
        title: "Single-Cell Protein, Tissue Culture and Somatic Hybrids",
        summary: "Microbes as a protein source, totipotency and micropropagation, virus-free plants from meristems, and somatic hybridisation by protoplast fusion (pomato).",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Over a quarter of the world's people suffer from hunger and malnutrition. Animal meat costs a lot of grain, land and water to produce, so scientists look for other protein sources. **Single-cell protein (SCP)** is protein-rich biomass of microbes (bacteria, yeast, fungi, algae) grown for food or feed.\n\nThe blue-green alga ***Spirulina*** can be grown easily on wastes such as water from potato-processing plants (containing starch), straw, molasses, animal manure and even sewage. It is rich in protein, minerals, fats, carbohydrates and vitamins. Growing it also **reduces environmental pollution**.",
          },
          {
            type: "formula",
            tex: t`\underbrace{250\ \text{kg cow}}_{\text{per day}} \to 200\ \text{g protein} \qquad \underbrace{250\ \text{g } \textit{Methylophilus methylotrophus}}_{\text{per day}} \to 25\ \text{t protein}`,
            caption: "NCERT's comparison: the bacterium's very high growth rate and biomass production make it a far richer protein source.",
          },
          {
            type: "heading",
            text: "Tissue culture and micropropagation",
          },
          {
            type: "text",
            md: "**Totipotency** is the capacity of a cell or explant to give rise to a whole plant. An **explant** is any part of a plant taken out and grown in a test tube under sterile conditions on a special medium. The nutrient medium supplies a **carbon source (sucrose)**, inorganic salts, vitamins, amino acids and **growth regulators** such as auxins and cytokinins.\n\n**Micropropagation** is producing thousands of plants in a very short time by tissue culture. Each plant is genetically identical to the original, so they are called **somaclones**. Tomato, banana and apple are produced commercially this way.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Take an explant (leaf, stem bit, meristem) and sterilise it.",
              "Place it on a sterile nutrient medium with sucrose, salts, vitamins and growth regulators.",
              "Cells divide to form an undifferentiated mass, the **callus**.",
              "Change the auxin–cytokinin balance so the callus forms shoots and roots (plantlets).",
              "Harden the plantlets and transfer them to the field.",
            ],
          },
          {
            type: "text",
            md: "**Virus-free plants**: even if a plant is infected with a virus, its **meristem** (apical and axillary) is free of virus. Culturing the meristem gives healthy plants. Virus-free banana, sugarcane and potato have been raised this way.",
          },
          {
            type: "heading",
            text: "Somatic hybridisation",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Isolate single cells from two different plant varieties or species.",
              "Digest their cell walls with enzymes (cellulase, pectinase) to get naked **protoplasts** (cells surrounded only by the plasma membrane).",
              "**Fuse** protoplasts of the two plants (using agents such as polyethylene glycol or an electric pulse) to get **hybrid protoplasts**.",
              "Grow the hybrid protoplasts into a new plant, the **somatic hybrid**.",
            ],
          },
          {
            type: "text",
            md: "A protoplast of **tomato** was fused with one of **potato** to give the **pomato**. Unfortunately it did not have all the desired characters for commercial use. The method matters because it can combine species that cannot be crossed sexually.",
          },
          {
            type: "example",
            title: "Rescuing an infected banana crop",
            problem: "A banana farmer's suckers are all infected with bunchy top virus. Why will a tissue-culture lab use the shoot tip and not a leaf piece to make new plants?",
            steps: [
              "Viruses spread through vascular tissue and dividing cells, but the apical meristem has no vascular tissue and divides very fast.",
              "So the meristem cells usually carry no virus even in an infected plant.",
              "A meristem explant grown on medium gives plantlets free of virus; a leaf piece would carry the virus into every plantlet.",
              "Micropropagation then multiplies these virus-free somaclones quickly.",
            ],
            answer: "Use the apical or axillary meristem, which stays virus-free, then multiply it by micropropagation to get thousands of healthy, identical plants.",
          },
          {
            type: "mistake",
            wrong: "Somaclones are hybrids made by fusing protoplasts.",
            right: "Somaclones are **genetically identical copies** of the source plant made by micropropagation. Protoplast fusion makes **somatic hybrids** such as the pomato.",
            why: "Both words start with 'soma' (body cells), so they blur. Clone = identical copies; hybrid = a mix of two genomes.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Predict: is a pomato made by sexual crossing?",
              emoji: "🍅",
              options: ["Yes, tomato pollen on potato flowers", "No, by fusing protoplasts of the two", "No, by inserting a potato gene into tomato with Ti plasmid"],
              answer: 1,
              trap: 0,
              explain: "The pomato is a somatic hybrid: wall-less protoplasts of tomato and potato were fused and the hybrid cell grown into a plant.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which part of an infected plant is used to raise virus-free plants?",
                options: ["Mature leaf", "Meristem", "Root hair", "Phloem"],
                answer: 1,
                explain: "Apical and axillary meristems are free of virus, so they are cultured to give healthy plants.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Define **totipotency, explant, somaclone, micropropagation** in one line each. In the SCP answer, give *Spirulina* and *Methylophilus methylotrophus* with the cow comparison. For somatic hybridisation, mention **cell wall removal**, **protoplast fusion** and **pomato**.",
          },
          {
            type: "keypoints",
            items: [
              "SCP: microbial biomass as protein; *Spirulina* grows on wastes; *Methylophilus*: 250 g → 25 t protein vs a 250 kg cow → 200 g.",
              "Totipotency lets an explant grow into a whole plant on a medium with sucrose, salts, vitamins, amino acids and auxins/cytokinins.",
              "Micropropagation gives somaclones (identical); used for tomato, banana, apple.",
              "Meristem culture gives virus-free banana, sugarcane, potato.",
              "Somatic hybridisation: remove walls → fuse protoplasts → grow hybrid (pomato).",
            ],
          },
        ],
        flashcards: [
          { front: "Single-cell protein", back: "Protein-rich microbial biomass (algae, bacteria, yeast, fungi) used as food or feed." },
          { front: "Spirulina", back: "A blue-green alga grown on wastes such as starchy potato-plant water, straw, molasses, manure and sewage; rich in protein." },
          { front: "Methylophilus methylotrophus vs cow", back: "250 g of the bacterium can give 25 tonnes of protein in the time a 250 kg cow gives 200 g." },
          { front: "Totipotency", back: "The ability of a cell or explant to grow into a whole plant." },
          { front: "Explant", back: "Any plant part removed and grown in vitro under sterile conditions." },
          { front: "Somaclones", back: "Genetically identical plants produced by tissue culture (micropropagation)." },
          { front: "Source of virus-free plants", back: "Apical and axillary meristems." },
          { front: "Pomato", back: "Somatic hybrid from fused protoplasts of tomato and potato; not commercially useful." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Using NCERT's figures, how many times more protein (by mass) does 250 g of *Methylophilus methylotrophus* give than a 250 kg cow in the same time? (1 tonne = 10⁶ g)",
            answer: 125000,
            explain: "25 t = 25 × 10⁶ g. 25,000,000 ÷ 200 = 125,000 times.",
            difficulty: 2,
            hint: "Turn 25 tonnes into grams first.",
          },
          {
            kind: "mcq",
            q: "Plants produced by micropropagation from one explant are",
            options: ["somatic hybrids", "somaclones", "out-crosses", "mutants"],
            answer: 1,
            explain: "They are genetically identical copies of the source: somaclones.",
          },
          {
            kind: "mcq",
            q: "Which pair of hormones mainly controls shoot and root formation from callus?",
            options: ["Auxin and cytokinin", "FSH and LH", "Ethylene and ABA only", "Insulin and glucagon"],
            answer: 0,
            explain: "The auxin–cytokinin ratio decides whether callus forms roots or shoots.",
          },
          {
            kind: "truefalse",
            q: "Protoplasts are plant cells whose cell wall has been removed.",
            answer: true,
            explain: "Enzymes digest the wall, leaving a cell bounded by its plasma membrane.",
          },
          {
            kind: "multi",
            q: "Which plants does NCERT name as raised virus-free by meristem culture?",
            options: ["Banana", "Sugarcane", "Potato", "Wheat"],
            answers: [0, 1, 2],
            explain: "Banana, sugarcane and potato are the examples given.",
          },
          {
            kind: "mcq",
            q: "Which carbon source is usually added to a plant tissue culture medium?",
            options: ["Starch", "Sucrose", "Cellulose", "Glycogen"],
            answer: 1,
            explain: "Sucrose is the usual carbon source; explants cannot photosynthesise enough in the tube.",
          },
          {
            kind: "fill",
            q: "The capacity of a plant cell to generate a whole plant is called ___.",
            answer: ["totipotency"],
            explain: "Totipotency is the basis of plant tissue culture.",
          },
        ],
      },
      {
        slug: "c12-bio-fp-exam-edge",
        title: "Exam edge: Food Production for NEET and KCET",
        summary: "Where this dropped chapter still matters, the variety and method pairs older NEET and KCET papers loved, assertion–reason practice and the classic traps.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Syllabus status",
            md: "This chapter is **not in the current NEET UG syllabus** and is not in the current KCET (II PUC) syllabus, because the rationalised NCERT dropped it. It is still in **ISC**. Older NEET (AIPMT) and KCET papers asked it often, so it is useful for ISC students, for practice from old papers, and for related ideas (totipotency, tissue culture) that appear in other chapters.",
          },
          {
            type: "text",
            md: "**What older papers asked**: variety → resistance matching (one question almost every year), MOET steps and numbers, inbreeding vs out-crossing vs cross-breeding, the steps of plant breeding in order, SCP organisms, the pomato and the meristem rule. Most questions are one NCERT line turned into a statement; precise reading wins.",
          },
          {
            type: "table",
            headers: ["Trigger word", "Answer"],
            rows: [
              ["Bikaneri ewe × Merino ram", "Hisardale, cross-breeding"],
              ["no common ancestor for 4–6 generations, same breed", "out-crossing"],
              ["FSH-like hormone, 6–8 eggs, 8–32 cells", "MOET"],
              ["yellow mosaic virus, bhindi, wild species", "Parbhani Kranti"],
              ["aphids, Brassica", "Pusa Gaurav"],
              ["white rust", "Pusa Swarnim (Karan rai)"],
              ["bacterial blight, cowpea", "Pusa Komal"],
              ["twice lysine and tryptophan", "biofortified maize hybrids"],
            ],
          },
          {
            type: "example",
            title: "NEET style: pick the correct statement",
            problem: "Which statement is correct? (a) Inbreeding increases heterozygosity. (b) Out-crossing is mating of animals of two breeds. (c) In MOET, embryos at the 8–32 cell stage are transferred to surrogate mothers. (d) Mule is the product of out-crossing.",
            steps: [
              "(a) Inbreeding raises homozygosity, so (a) is wrong.",
              "(b) Out-crossing stays within one breed; two breeds is cross-breeding. Wrong.",
              "(c) Matches the MOET procedure exactly. Correct.",
              "(d) A mule comes from two species: interspecific hybridisation. Wrong.",
            ],
            answer: "(c)",
          },
          {
            type: "example",
            title: "Assertion–reason",
            problem: "Assertion (A): Meristem culture is used to obtain virus-free plants. Reason (R): Meristems lack vascular tissue and are usually free of virus even in an infected plant.",
            steps: [
              "A is true: virus-free banana, sugarcane and potato are made this way.",
              "R is true: the meristem has no developed vascular strands and its cells divide fast, so viruses rarely reach it.",
              "R is exactly why A works.",
            ],
            answer: "Both A and R are true and R is the correct explanation of A.",
          },
          {
            type: "example",
            title: "Match the columns",
            problem: "Match: (p) Pusa Sadabahar, (q) Pusa Shubhra, (r) Himgiri, (s) Pusa Sem 2 with (1) black rot of cauliflower, (2) jassids, aphids, fruit borer, (3) chilli mosaic virus and leaf curl, (4) leaf and stripe rust, hill bunt.",
            steps: [
              "Pusa Sadabahar is chilli, resisting viruses and leaf curl → 3.",
              "Pusa Shubhra is cauliflower → black rot → 1.",
              "Himgiri is wheat → rusts and hill bunt → 4.",
              "Pusa Sem 2 is flat bean → insect pests → 2.",
            ],
            answer: "p-3, q-1, r-4, s-2.",
          },
          {
            type: "example",
            title: "Harder: two-statement reasoning",
            problem: "Statement I: A single out-cross often helps overcome inbreeding depression. Statement II: Somatic hybridisation can combine two plants that cannot be crossed sexually, but the pomato lacked commercially useful characters. Choose: both true / both false / only I true / only II true.",
            steps: [
              "Statement I: NCERT says a single out-cross often helps overcome inbreeding depression. True.",
              "Statement II: protoplast fusion bypasses sexual barriers; the pomato did not have all the desired characters. True.",
              "The two statements are independent; no explanation link is asked.",
            ],
            answer: "Both statements are true.",
          },
          {
            type: "heading",
            text: "NCERT lines that became questions",
          },
          {
            type: "list",
            items: [
              "India and China: over 70% of world livestock, about 25% of farm produce.",
              "Plant breeding has been practised for 9000–11000 years.",
              "New varieties are tested for at least three growing seasons against a check cultivar.",
              "Semi-dwarf rice came from IR-8 (IRRI) and Taichung Native-1 (Taiwan); Jaya and Ratna were developed in India.",
              "Iron-fortified rice has about five times as much iron as common varieties.",
              "Bees pollinate sunflower, Brassica, apple and pear.",
            ],
          },
          {
            type: "mistake",
            wrong: "Sonalika and Kalyan Sona are semi-dwarf rice varieties.",
            right: "Sonalika and Kalyan Sona are **wheat**; **Jaya and Ratna** are the Indian semi-dwarf **rice** varieties.",
            why: "All four names sound Indian and all came with the Green Revolution, so options swap the crops. Tie wheat to Borlaug/CIMMYT and rice to IR-8/IRRI.",
          },
          {
            type: "mistake",
            wrong: "Pusa Komal resists aphids and Pusa Gaurav resists bacterial blight.",
            right: "**Pusa Komal** (cowpea) resists **bacterial blight**, a disease. **Pusa Gaurav** (Brassica) resists **aphids**, an insect pest.",
            why: "Papers swap diseases and pests. First ask: is the enemy a microbe or an insect? That halves the options.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the organism or product to the idea.",
              pairs: [
                ["Spirulina", "Single-cell protein from wastes"],
                ["Pomato", "Somatic hybrid"],
                ["Atlas 66", "Protein-rich donor wheat"],
                ["Apis indica", "Apiculture"],
                ["Hilsa", "Marine fishery"],
              ],
              explain: "These one-to-one pairs are the commonest older matching items from this chapter.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which pair is mismatched?",
                options: ["Pusa Swarnim – white rust", "Pusa Sawani – shoot and fruit borer", "Himgiri – hill bunt", "Pusa Gaurav – bacterial blight"],
                answer: 3,
                explain: "Pusa Gaurav resists aphids. Bacterial blight resistance is Pusa Komal (cowpea).",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Dropped from current NEET and KCET; still ISC; older papers asked it often.",
              "Memorise variety tables as crop → variety → enemy, and check microbe vs insect.",
              "Breeding types: inbreeding (same breed, related), out-crossing (same breed, unrelated), cross-breeding (two breeds), interspecific (two species).",
              "MOET numbers: 6–8 eggs, 8–32 cells, surrogate mothers.",
              "Meristem → virus-free; protoplast fusion → somatic hybrid; micropropagation → somaclones.",
            ],
          },
        ],
        flashcards: [
          { front: "Is this chapter in the current NEET syllabus?", back: "No. It was dropped with the rationalised NCERT; it is still in ISC." },
          { front: "Pusa Komal", back: "Cowpea resistant to bacterial blight." },
          { front: "Pusa Sem 2 and Pusa Sem 3", back: "Flat bean resistant to jassids, aphids and fruit borer." },
          { front: "Pusa Sawani and Pusa A-4", back: "Okra resistant to shoot and fruit borer." },
          { front: "IR-8 and Taichung Native-1", back: "Sources of semi-dwarf rice (IRRI, Philippines; Taiwan)." },
          { front: "Fortified rice: how much iron?", back: "About five times as much iron as common varieties." },
          { front: "Microbe or insect? Bacterial blight", back: "Microbe (bacterium): a disease, not a pest." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which variety is matched with an insect pest it resists?",
            options: ["Pusa Komal – bacterial blight", "Pusa A-4 – shoot and fruit borer", "Himgiri – leaf rust", "Pusa Shubhra – black rot"],
            answer: 1,
            explain: "Only Pusa A-4 (okra) is matched with an insect pest; the others are matched with diseases (correctly, but the question asks for a pest).",
            difficulty: 2,
            hint: "Separate diseases (rust, rot, blight) from insects (borers, aphids, jassids).",
          },
          {
            kind: "multi",
            q: "Which statements about MOET are correct?",
            options: ["The cow is given a hormone with FSH-like activity", "About 6–8 eggs are produced per cycle", "Embryos are recovered surgically at the blastocyst stage", "Embryos go to surrogate mothers", "It has been used in buffaloes and sheep"],
            answers: [0, 1, 3, 4],
            explain: "Embryos are recovered non-surgically at the 8–32 cell stage, so option 3 is wrong; the rest are NCERT facts.",
            difficulty: 2,
            hint: "Check the stage and the method of recovery.",
          },
          {
            kind: "mcq",
            q: "Assertion: Continued inbreeding may reduce fertility. Reason: Inbreeding increases homozygosity, bringing harmful recessive alleles together.",
            options: ["Both true; R explains A", "Both true; R does not explain A", "A true, R false", "A false, R true"],
            answer: 0,
            explain: "Inbreeding depression arises because harmful recessives become homozygous and show their effect.",
          },
          {
            kind: "mcq",
            q: "Semi-dwarf rice varieties developed in India are",
            options: ["Sonalika and Kalyan Sona", "Jaya and Ratna", "IR-8 and Taichung Native-1", "Himgiri and Atlas 66"],
            answer: 1,
            explain: "Jaya and Ratna were developed in India; IR-8 and Taichung Native-1 were the source varieties; Sonalika and Kalyan Sona are wheat.",
          },
          {
            kind: "numeric",
            q: "In the Green Revolution period (1960 to 2000), India's rice production rose from 35 to 89.5 million tonnes. What was the increase, in million tonnes?",
            answer: 54.5,
            tolerance: 0.01,
            unit: "million tonnes",
            explain: "89.5 − 35 = 54.5 million tonnes.",
          },
          {
            kind: "mcq",
            q: "Which is the correct order of plant breeding steps?",
            options: ["Hybridisation → collection of variability → selection of parents → release", "Collection of variability → evaluation and selection of parents → hybridisation → selection of recombinants → testing and release", "Selection of recombinants → hybridisation → collection → release", "Testing → release → hybridisation → selection"],
            answer: 1,
            explain: "Variability comes first; release comes last after multi-season trials.",
          },
          {
            kind: "mcq",
            q: "A breeder wants to combine a tomato and a potato that will not cross sexually. Which technique fits?",
            options: ["Micropropagation", "Meristem culture", "Somatic hybridisation", "Out-crossing"],
            answer: 2,
            explain: "Protoplast fusion bypasses sexual incompatibility; it produced the pomato.",
            difficulty: 2,
            hint: "Which method mixes two genomes without pollen?",
          },
          {
            kind: "multi",
            q: "Which are fungal diseases named in this chapter?",
            options: ["Brown rust of wheat", "Red rot of sugarcane", "Late blight of potato", "Black rot of crucifers", "Tobacco mosaic"],
            answers: [0, 1, 2],
            explain: "Black rot of crucifers is bacterial; tobacco mosaic is viral.",
            difficulty: 3,
            hint: "Sort by pathogen: fungus, bacterium, virus.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "12:Biology and Human Welfare": ["c12-bio-food-production"],
};
