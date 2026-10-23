import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "biology-senior";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

export const topics: Topic[] = [
  /* ------------------------------------------------------------ */
  /* Sexual Reproduction in Flowering Plants                       */
  /* ------------------------------------------------------------ */
  {
    slug: "sexual-reproduction-flowering-plants",
    title: "Sexual Reproduction in Flowering Plants",
    icon: "🌼",
    description: "Microsporogenesis and the embryo sac, pollination and outbreeding, double fertilisation, seeds, fruits and apomixis.",
    lessons: [
      {
        slug: "stamen-pistil-gametophytes",
        title: "Stamen, Pistil and the Gametophytes",
        summary: "Anther structure, pollen formation, the ovule and the 7-celled, 8-nucleate embryo sac.",
        minutes: 19,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🌻", caption: "Every sunflower head in a Karnataka field holds hundreds of tiny flowers, each with its own stamens and pistil." },
          {
            type: "text",
            md: "Long before a flower opens, its fate is fixed by hormonal and structural changes that turn a vegetative shoot apex into a floral one. In the flower, the **stamen** (androecium) makes the male gametophyte (pollen) and the **pistil** (gynoecium) makes the female gametophyte (embryo sac).",
          },
          { type: "heading", text: "The anther and pollen" },
          {
            type: "text",
            md: "A typical anther is **bilobed**, each lobe having two theca: it is **dithecous**. In section it is **tetragonal**, with four **microsporangia**, two in each lobe, which become **pollen sacs**. The microsporangium wall has four layers from outside in: **epidermis, endothecium, middle layers and tapetum**. The outer three protect the sac and help it dehisce; the **tapetum** nourishes developing pollen, and its cells have dense cytoplasm and often more than one nucleus.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Sporogenous tissue in each microsporangium forms **microspore mother cells** (pollen mother cells, 2n).",
              "Each undergoes **meiosis** to give a **microspore tetrad** of four haploid cells: **microsporogenesis**.",
              "As the anther matures and dries, tetrads separate into **pollen grains**.",
              "Each pollen grain divides by mitosis into a large **vegetative cell** and a small **generative cell**.",
            ],
          },
          {
            type: "text",
            md: "The pollen wall has a hard outer **exine** of **sporopollenin**, one of the most resistant organic materials known: it withstands high temperature, strong acids and alkalis, and no enzyme can degrade it. That is why pollen survives as fossils. Gaps in the exine where sporopollenin is absent are **germ pores**. The inner **intine** is thin, of cellulose and pectin. In over **60%** of angiosperms pollen is shed at the **2-celled** stage; in the rest the generative cell first divides to give two male gametes (**3-celled** stage).",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Pollen in daily life",
            md: "Pollen of **Parthenium** (carrot grass), which came into India as a contaminant with imported wheat, causes allergies and asthma. Pollen of rice and wheat stays viable only about **30 minutes**; some members of Rosaceae, Leguminosae and Solanaceae stay viable for months. Pollen can be stored for years in liquid nitrogen at **−196 °C** in pollen banks.",
          },
          { type: "heading", text: "The pistil and ovule" },
          {
            type: "text",
            md: "The ovule (**megasporangium**) hangs from the placenta by a stalk, the **funicle**; the junction is the **hilum**. One or two **integuments** enclose it except at a small opening, the **micropyle**. Opposite the micropyle is the **chalaza**. Inside the integuments is the **nucellus**, which houses the **embryo sac** (female gametophyte).",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A single **megaspore mother cell** (2n) forms in the micropylar region of the nucellus.",
              "It undergoes **meiosis** to give four megaspores; usually only one stays functional and three degenerate (**monosporic** development).",
              "The functional megaspore nucleus divides by mitosis three times, free-nuclear, giving 2, then 4, then **8 nuclei**.",
              "Cell walls form: 3 cells at the micropylar end make the **egg apparatus** (2 synergids + 1 egg), 3 at the chalazal end are **antipodals**, and the **2 polar nuclei** sit in the large **central cell**.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Filiform apparatus",
            md: "Synergids carry cellular thickenings at their micropylar tips called the **filiform apparatus**, which guides the pollen tube into the synergid.",
          },
          { type: "heading", text: "Worked example: counting meioses" },
          {
            type: "text",
            md: "**Problem.** How many meiotic divisions are needed to form 100 seeds?\n\n**Solution.** Each seed needs one functional megaspore, and each megaspore mother cell gives only **one** functional megaspore, so 100 female meioses are needed. Each seed also needs one pollen grain; one microspore mother cell gives **four** pollen grains, so 100 ÷ 4 = 25 male meioses. Total = 100 + 25 = **125**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many nuclei and how many cells does a typical mature embryo sac have? Enter the number of cells.",
                answer: 7,
                explain: "Eight nuclei but seven cells: 3 antipodals, 2 synergids, 1 egg and 1 central cell with 2 polar nuclei.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET traps",
            md: "The **tapetum** nourishes pollen; the **endothecium** helps dehiscence. Sporopollenin is in the **exine**, not intine. The embryo sac is **8-nucleate, 7-celled**. Synergids (with the filiform apparatus) and egg lie at the **micropylar** end; antipodals at the **chalazal** end.",
          },
          {
            type: "keypoints",
            items: [
              "Anther: bilobed, dithecous, tetragonal, 4 microsporangia; wall: epidermis, endothecium, middle layers, tapetum.",
              "Microspore mother cell → meiosis → tetrad → pollen with vegetative and generative cells.",
              "Exine of sporopollenin with germ pores; intine of cellulose and pectin.",
              "Ovule: funicle, hilum, integuments, micropyle, chalaza, nucellus.",
              "Monosporic development; three mitoses give an 8-nucleate, 7-celled embryo sac.",
            ],
          },
        ],
        flashcards: [
          { front: "Tapetum", back: "Innermost layer of the microsporangium wall; nourishes developing pollen." },
          { front: "Sporopollenin", back: "Highly resistant material of the pollen exine." },
          { front: "Monosporic development", back: "Embryo sac formation from a single functional megaspore." },
          { front: "Egg apparatus", back: "Egg cell + two synergids at the micropylar end of the embryo sac." },
          { front: "Chalaza", back: "Basal part of the ovule opposite the micropyle." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many meiotic divisions are needed to produce 40 seeds?",
            answer: 50,
            explain: "40 female meioses (one functional megaspore each) + 40 ÷ 4 = 10 male meioses = 50.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "Which wall layer of the microsporangium nourishes developing pollen?",
            options: ["Epidermis", "Endothecium", "Middle layers", "Tapetum"],
            answer: 3,
            explain: "The tapetum is the nutritive layer.",
          },
          {
            kind: "fill",
            q: "The regions of the pollen exine where sporopollenin is absent are called ___ pores.",
            answer: ["germ"],
            explain: "The pollen tube emerges through a germ pore.",
          },
          {
            kind: "truefalse",
            q: "In most angiosperms, pollen grains are shed at the 3-celled stage.",
            answer: false,
            explain: "In over 60% of angiosperms pollen is shed at the 2-celled stage.",
          },
          {
            kind: "order",
            q: "Arrange the steps of embryo sac formation in order.",
            items: ["Megaspore mother cell", "Meiosis gives four megaspores", "One functional megaspore", "Three free-nuclear mitoses", "8-nucleate, 7-celled embryo sac"],
            explain: "MMC → meiosis → one functional megaspore → 2, 4, 8 nuclei → walls form.",
          },
          {
            kind: "mcq",
            q: "The filiform apparatus is found in the:",
            options: ["Antipodals", "Egg cell", "Synergids", "Central cell"],
            answer: 2,
            explain: "Synergids carry the filiform apparatus that guides the pollen tube.",
          },
        ],
      },
      {
        slug: "pollination-and-outbreeding",
        title: "Pollination and Outbreeding Devices",
        summary: "Kinds of pollination, wind, water and animal agents, outbreeding devices and artificial hybridisation.",
        minutes: 17,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🐝", caption: "Honey bees working a mustard field in Rajasthan: the most important biotic pollinators of all." },
          {
            type: "text",
            md: "**Pollination** is the transfer of pollen from the anther to the stigma of a pistil. Plants cannot move, so they use wind, water or animals to carry pollen.",
          },
          {
            type: "table",
            headers: ["Kind", "Pollen source", "Genetic effect"],
            rows: [
              ["Autogamy", "Same flower", "Self; no new combinations"],
              ["Geitonogamy", "Another flower of the same plant", "Functionally cross (needs an agent) but genetically like autogamy"],
              ["Xenogamy", "A flower of a different plant", "The only type bringing genetically different pollen"],
            ],
          },
          {
            type: "text",
            md: "Flowers that open and expose anthers and stigma are **chasmogamous**. Some plants such as **Viola** (common pansy), **Oxalis** and **Commelina** also make **cleistogamous** flowers that never open, so they are always autogamous and give assured seed set even without pollinators.",
          },
          { type: "heading", text: "Abiotic agents" },
          {
            type: "list",
            items: [
              "**Wind**: light, non-sticky pollen; well-exposed stamens; large, often feathery stigmas; often a **single ovule** per ovary; many flowers in an inflorescence. Common in grasses. The **tassels** of a maize cob are its stigmas and styles waving in the wind.",
              "**Water**: rare, about 30 genera, mostly monocots. **Vallisneria**: female flowers reach the surface on long stalks and male flowers or pollen float to them. **Seagrasses** like **Zostera**: female flowers stay submerged and long, ribbon-like pollen is carried inside the water. Pollen of water-pollinated plants has a **mucilaginous** coat against wetting. Hydrilla is also water-pollinated.",
              "Water hyacinth and water lily grow in water but are pollinated by **insects or wind**.",
            ],
          },
          { type: "heading", text: "Biotic agents" },
          {
            type: "text",
            md: "Bees, butterflies, flies, beetles, wasps, ants, moths, birds (sunbirds, hummingbirds), bats, and even some primates and reptiles pollinate. Insect-pollinated flowers are usually large, colourful, fragrant and rich in nectar; small flowers cluster into an inflorescence. Pollen is sticky. Rewards are **nectar and pollen**; some plants offer safe places to lay eggs.\n\nThe tallest flower, of **Amorphophallus**, is about 6 feet tall. **Yucca** and a moth species cannot complete their life cycles without each other: the moth lays eggs in the ovary locule and pollinates the flower, and its larvae feed on some developing seeds. Many visitors take nectar or pollen without pollinating: **pollen or nectar robbers**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which pollination type is functionally cross-pollination but genetically similar to self-pollination?",
                options: ["Autogamy", "Geitonogamy", "Xenogamy", "Cleistogamy"],
                answer: 1,
                explain: "Geitonogamy needs a pollinating agent, but the pollen comes from the same plant.",
              },
            ],
          },
          { type: "heading", text: "Outbreeding devices" },
          {
            type: "table",
            headers: ["Device", "What it prevents"],
            rows: [
              ["Pollen release and stigma receptivity not synchronised", "Autogamy"],
              ["Anther and stigma at different positions", "Autogamy"],
              ["Self-incompatibility (genetic block on pollen germination or tube growth)", "Autogamy and geitonogamy"],
              ["Unisexual flowers on the same plant (monoecious: castor, maize)", "Autogamy only, not geitonogamy"],
              ["Male and female flowers on different plants (dioecious: papaya)", "Both autogamy and geitonogamy"],
            ],
          },
          { type: "heading", text: "Worked process: artificial hybridisation" },
          {
            type: "list",
            ordered: true,
            items: [
              "Choose parents with the desired characters (e.g. a high-yield and a disease-resistant wheat).",
              "**Emasculation**: remove the anthers from the female parent's bisexual flower bud with forceps before they dehisce.",
              "**Bagging**: cover the emasculated flower with a butter-paper bag to keep stray pollen out.",
              "When the stigma is receptive, dust it with pollen collected from the male parent, then **rebag** it and let fruit develop.",
              "If the female parent has unisexual flowers, skip emasculation; bag the female buds before they open.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board and NEET traps",
            md: "Monoecious plants (castor, maize) block autogamy but **not** geitonogamy; only **dioecy** (papaya) blocks both. Cleistogamous flowers are **always autogamous**. And remember the pollen–pistil interaction: the pistil can recognise compatible pollen and reject incompatible pollen by blocking germination or tube growth.",
          },
          {
            type: "keypoints",
            items: [
              "Autogamy, geitonogamy (same plant), xenogamy (different plant; only one giving new genes).",
              "Cleistogamous flowers of Viola, Oxalis, Commelina guarantee seed set.",
              "Wind: light pollen, feathery stigma, single ovule. Water: Vallisneria, Hydrilla, Zostera.",
              "Insects: nectar and pollen rewards; Yucca–moth mutualism.",
              "Emasculation and bagging are key steps of artificial hybridisation.",
            ],
          },
        ],
        flashcards: [
          { front: "Xenogamy", back: "Transfer of pollen to the stigma of a flower on a different plant." },
          { front: "Cleistogamous flowers", back: "Flowers that never open; always self-pollinated. E.g. Viola, Oxalis, Commelina." },
          { front: "Zostera pollination", back: "Water pollination below the surface; long ribbon-like pollen." },
          { front: "Emasculation", back: "Removal of anthers from a flower bud before dehiscence." },
          { front: "Dioecious plant that prevents both self and geitonogamy", back: "Papaya." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which plant has both chasmogamous and cleistogamous flowers?",
            options: ["Maize", "Commelina", "Papaya", "Vallisneria"],
            answer: 1,
            explain: "Commelina, Viola and Oxalis produce both kinds of flowers.",
          },
          {
            kind: "truefalse",
            q: "All aquatic plants are pollinated by water.",
            answer: false,
            explain: "Water hyacinth and water lily flowers emerge above water and are pollinated by insects or wind.",
          },
          {
            kind: "mcq",
            q: "Which condition prevents both autogamy and geitonogamy?",
            options: ["Monoecy", "Dioecy", "Cleistogamy", "Chasmogamy"],
            answer: 1,
            explain: "In dioecious plants like papaya, each plant bears only male or only female flowers.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Covering an emasculated flower with a butter-paper bag is called ___.",
            answer: ["bagging"],
            explain: "Bagging keeps unwanted pollen off the stigma.",
          },
          {
            kind: "order",
            q: "Arrange the steps of artificial hybridisation in a bisexual flower.",
            items: ["Select parents", "Emasculation", "Bagging", "Dusting pollen on the receptive stigma", "Rebagging"],
            explain: "Emasculate before dehiscence, bag, pollinate when receptive, then rebag.",
          },
          {
            kind: "mcq",
            q: "Wind-pollinated flowers usually have:",
            options: ["Sticky pollen and bright petals", "A single ovule and feathery stigma", "Nectar and fragrance", "Mucilage-coated pollen"],
            answer: 1,
            explain: "Wind-pollinated flowers have light pollen, exposed stamens, feathery stigmas and often a single ovule.",
          },
        ],
      },
      {
        slug: "double-fertilisation-seed-fruit",
        title: "Double Fertilisation, Seed and Fruit",
        summary: "Syngamy and triple fusion, endosperm and embryo development, seeds, fruits, apomixis and polyembryony.",
        minutes: 19,
        xp: 50,
        blocks: [
          { type: "illustration", emoji: "🥥", caption: "Tender coconut water from a Kerala roadside stall is free-nuclear endosperm; the white kernel is cellular endosperm." },
          {
            type: "text",
            md: "After a compatible pollen grain lands, it germinates and its **pollen tube** grows through the style, enters the ovule through the **micropyle**, and enters one **synergid** guided by the filiform apparatus. It releases **two male gametes** into the synergid.",
          },
          { type: "heading", text: "Double fertilisation" },
          {
            type: "formula",
            tex: t`\underbrace{\text{male gamete }(n)+\text{egg }(n)}_{\text{syngamy}} \rightarrow \text{zygote }(2n)`,
          },
          {
            type: "formula",
            tex: t`\underbrace{\text{male gamete }(n)+2\text{ polar nuclei }(n+n)}_{\text{triple fusion}} \rightarrow \text{PEN }(3n)`,
            caption: "Both fusions in one embryo sac: double fertilisation, unique to flowering plants.",
          },
          {
            type: "text",
            md: "The central cell becomes the **primary endosperm cell (PEC)** and forms the endosperm; the zygote forms the embryo. **Endosperm development precedes embryo development**, so the young embryo has food ready. The most common type is **free-nuclear**: the PEN divides many times without walls, and walls form later. In coconut the water is free-nuclear endosperm and the kernel is cellular endosperm.",
          },
          {
            type: "text",
            md: "**Embryo** development: zygote → **proembryo** → **globular** → **heart-shaped** → mature embryo. A dicot embryo has an embryonal axis and **two cotyledons**. Above the cotyledons is the **epicotyl**, ending in the **plumule**; below is the **hypocotyl**, ending in the **radicle** with its root cap. A grass embryo has one cotyledon, the **scutellum**, beside the axis; the radicle is enclosed in the **coleorhiza** and the shoot apex in the **coleoptile**.",
          },
          {
            type: "table",
            headers: ["Seed type", "Endosperm", "Examples"],
            rows: [
              ["Non-albuminous (ex-albuminous)", "Fully used up during embryo development", "Pea, groundnut, beans"],
              ["Albuminous", "Persists in the mature seed", "Wheat, maize, barley, castor"],
              ["Perispermous", "Remnant nucellus persists as perisperm", "Black pepper, beet"],
            ],
          },
          { type: "heading", text: "Worked example: ploidy" },
          {
            type: "text",
            md: "**Problem.** A leaf cell of a flowering plant has 24 chromosomes. How many are there in the egg, the synergid, the endosperm and the zygote?\n\n**Solution.** Leaf is 2n = 24, so n = 12. Egg and synergid are part of the haploid embryo sac: **12** each. Endosperm is 3n: **36**. Zygote is 2n: **24**. The nucellus and integuments are maternal sporophyte tissue: 2n = 24.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "If the egg of a plant has 8 chromosomes, how many chromosomes are in its endosperm cells?",
                answer: 24,
                explain: "n = 8, and endosperm is 3n = 24.",
              },
            ],
          },
          { type: "heading", text: "Seeds and fruits" },
          {
            type: "text",
            md: "Integuments harden into **seed coats**; the micropyle remains as a pore for water and oxygen entry at germination. Mature seeds dry to about **10 to 15% moisture** and may enter dormancy. The ovary becomes the **fruit** and its wall the **pericarp**. In **false fruits** the thalamus also forms part of the fruit: apple, strawberry, cashew. Fruits formed without fertilisation are **parthenocarpic** (banana); parthenocarpy can be induced by growth hormones.\n\nSeeds can stay viable for astonishing times: a **Lupinus arcticus** seed from the Arctic tundra germinated after about **10,000 years**, and a 2000-year-old **date palm** (Phoenix dactylifera) seed from King Herod's palace near the Dead Sea also grew.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Apomixis and polyembryony",
            md: "**Apomixis** is seed formation without fertilisation, a form of asexual reproduction that mimics sexual reproduction (some Asteraceae and grasses). If hybrid seed could be made apomictic, Indian farmers could reuse hybrid seed every year without losing its traits. **Polyembryony**, more than one embryo in a seed, occurs in **Citrus** and **mango**, where nucellar cells also form embryos.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET traps",
            md: "Endosperm is **3n**, the nucellus and perisperm **2n**, the embryo sac cells **n**. Endosperm develops **before** the embryo. Apple, strawberry and cashew are **false** fruits. Coconut water is endosperm, **not** cytoplasm or sap.",
          },
          {
            type: "keypoints",
            items: [
              "Pollen tube enters through the micropyle into a synergid and releases two male gametes.",
              "Syngamy gives the 2n zygote; triple fusion gives the 3n PEN: double fertilisation.",
              "Endosperm precedes embryo; free-nuclear is commonest (coconut water).",
              "Albuminous: wheat, maize, castor. Non-albuminous: pea, groundnut. Perisperm: black pepper, beet.",
              "False fruits: apple, strawberry, cashew; parthenocarpy in banana; polyembryony in Citrus and mango.",
            ],
          },
        ],
        flashcards: [
          { front: "Triple fusion", back: "Fusion of a male gamete with two polar nuclei to form the 3n primary endosperm nucleus." },
          { front: "Perisperm", back: "Residual persistent nucellus in a seed, e.g. black pepper, beet." },
          { front: "Coleoptile", back: "Sheath enclosing the shoot apex of a grass embryo." },
          { front: "Apomixis", back: "Formation of seeds without fertilisation." },
          { front: "False fruit", back: "Fruit in which the thalamus also contributes: apple, strawberry, cashew." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which seed is non-albuminous?",
            options: ["Wheat", "Castor", "Groundnut", "Maize"],
            answer: 2,
            explain: "In groundnut, pea and beans the endosperm is used up; food is stored in cotyledons.",
          },
          {
            kind: "numeric",
            q: "A plant's meiocyte has 2n = 16. How many chromosomes does its endosperm have?",
            answer: 24,
            explain: "n = 8, so endosperm (3n) has 24 chromosomes.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The embryo develops before the endosperm in most flowering plants.",
            answer: false,
            explain: "Endosperm development precedes embryo development, so food is ready for the young embryo.",
          },
          {
            kind: "fill",
            q: "The fusion of a male gamete with the egg is called ___.",
            answer: ["syngamy"],
            explain: "Syngamy forms the diploid zygote; the other fusion is triple fusion.",
          },
          {
            kind: "order",
            q: "Arrange the stages of embryo development in order.",
            items: ["Zygote", "Proembryo", "Globular embryo", "Heart-shaped embryo", "Mature embryo"],
            explain: "The proembryo becomes globular, then heart-shaped, then mature.",
          },
          {
            kind: "mcq",
            q: "Polyembryony due to nucellar embryos is common in:",
            options: ["Banana", "Citrus", "Wheat", "Pea"],
            answer: 1,
            explain: "Citrus and mango form extra embryos from nucellar cells.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Human Reproduction                                            */
  /* ------------------------------------------------------------ */
  {
    slug: "human-reproduction",
    title: "Human Reproduction",
    icon: "👶",
    description: "Male and female reproductive systems, gametogenesis, the menstrual cycle, fertilisation, pregnancy, parturition and lactation.",
    lessons: [
      {
        slug: "male-and-female-reproductive-systems",
        title: "The Male and Female Reproductive Systems",
        summary: "Testes, ducts and accessory glands; ovaries, oviducts, uterus and mammary glands.",
        minutes: 17,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🧬", caption: "Humans are sexually reproducing and viviparous: the embryo develops inside the mother." },
          {
            type: "text",
            md: "Reproductive events in humans are **gametogenesis**, **insemination**, **fertilisation**, **cleavage and blastocyst formation**, **implantation**, **gestation** and **parturition**. They happen after **puberty**, and there are marked differences between males and females: sperm formation continues into old age, while ova formation ceases around 50 years.",
          },
          { type: "heading", text: "The male system" },
          {
            type: "text",
            md: "The **testes** sit outside the abdomen in the **scrotum**, which keeps them **2 to 2.5 °C below** body temperature, needed for spermatogenesis. Each oval testis is about **4 to 5 cm** long and **2 to 3 cm** wide, with about **250 testicular lobules**. Each lobule holds **1 to 3** highly coiled **seminiferous tubules**, lined by **spermatogonia** (male germ cells) and **Sertoli cells** that nourish them. In the spaces between tubules, **Leydig (interstitial) cells** make **androgens** like testosterone.",
          },
          {
            type: "list",
            items: [
              "**Ducts**: rete testis → vasa efferentia → epididymis (on the back of each testis) → vas deferens → ejaculatory duct → urethra → urethral meatus.",
              "**Accessory glands**: paired **seminal vesicles**, a single **prostate**, and paired **bulbourethral** glands.",
              "Their secretions form **seminal plasma**, rich in **fructose, calcium and enzymes**. Bulbourethral secretion also lubricates the penis.",
              "The penis is the external genitalia; its tip, the **glans penis**, is covered by the foreskin.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which cells of the testis secrete androgens?",
                options: ["Sertoli cells", "Spermatogonia", "Leydig cells", "Spermatids"],
                answer: 2,
                explain: "Leydig (interstitial) cells outside the seminiferous tubules synthesise androgens.",
              },
            ],
          },
          { type: "heading", text: "The female system" },
          {
            type: "text",
            md: "The **ovaries** (2 to 4 cm long) produce the ovum and ovarian hormones. Each has an outer **cortex** and inner **medulla** in its stroma. The **oviduct (fallopian tube)**, 10 to 12 cm long, has three parts: the funnel-shaped **infundibulum** with finger-like **fimbriae** that collect the released ovum, the wide **ampulla**, and the narrow **isthmus** that joins the uterus.",
          },
          {
            type: "table",
            headers: ["Layer of uterus wall", "Nature", "Role"],
            rows: [
              ["Perimetrium", "Thin, external membrane", "Covering"],
              ["Myometrium", "Thick smooth muscle", "Strong contractions during delivery"],
              ["Endometrium", "Inner glandular lining", "Cyclical changes in the menstrual cycle; site of implantation"],
            ],
          },
          {
            type: "text",
            md: "The uterus is single and shaped like an inverted pear. It opens into the vagina through the narrow **cervix**; the cervical canal and vagina form the **birth canal**. External genitalia include the mons pubis, labia majora, labia minora, hymen and clitoris. The hymen may tear for many reasons, such as sports or cycling, so it is not a reliable indicator of virginity.",
          },
          {
            type: "text",
            md: "The **mammary glands** have glandular tissue divided into **15 to 20 mammary lobes** with clusters of **alveoli** that secrete milk. The milk path is: alveoli → mammary tubules → mammary duct → **mammary ampulla** → **lactiferous duct** → nipple.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Sequence questions",
            md: "The sperm path order (**rete testis → vasa efferentia → epididymis → vas deferens → ejaculatory duct → urethra**) and the milk path (**alveoli → tubules → duct → ampulla → lactiferous duct**) are asked almost every year. Don't put the epididymis before the vasa efferentia. Also, the prostate is **single**; seminal vesicles and bulbourethral glands are **paired**.",
          },
          {
            type: "keypoints",
            items: [
              "Scrotum keeps testes 2 to 2.5 °C cooler; about 250 lobules, 1 to 3 seminiferous tubules each.",
              "Sertoli cells nourish germ cells; Leydig cells make androgens.",
              "Seminal plasma is rich in fructose, calcium and enzymes.",
              "Oviduct: infundibulum (fimbriae), ampulla, isthmus. Uterus: perimetrium, myometrium, endometrium.",
              "Mammary gland: 15 to 20 lobes; alveoli → tubules → duct → ampulla → lactiferous duct.",
            ],
          },
        ],
        flashcards: [
          { front: "Sertoli cells", back: "Cells of the seminiferous tubules that nourish developing germ cells." },
          { front: "Leydig cells", back: "Interstitial cells of the testis that secrete androgens." },
          { front: "Fimbriae", back: "Finger-like projections of the infundibulum that collect the ovum after ovulation." },
          { front: "Myometrium", back: "Thick smooth-muscle middle layer of the uterus; contracts during delivery." },
          { front: "Birth canal", back: "The cervical canal together with the vagina." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the path of sperm from the testis to the outside.",
            items: ["Seminiferous tubules", "Rete testis", "Vasa efferentia", "Epididymis", "Vas deferens", "Ejaculatory duct", "Urethra"],
            explain: "Sperm leave the tubules via the rete testis and vasa efferentia, mature in the epididymis, then travel the vas deferens and ejaculatory duct into the urethra.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "About how many testicular lobules are present in each human testis?",
            answer: 250,
            explain: "Each testis has about 250 compartments called testicular lobules.",
          },
          {
            kind: "mcq",
            q: "Which accessory gland of the human male is unpaired?",
            options: ["Seminal vesicle", "Bulbourethral gland", "Prostate", "Cowper's gland"],
            answer: 2,
            explain: "There is one prostate; seminal vesicles and bulbourethral (Cowper's) glands are paired.",
          },
          {
            kind: "fill",
            q: "The layer of the uterus that undergoes cyclical changes during the menstrual cycle is the ___.",
            answer: ["endometrium"],
            explain: "The glandular endometrium builds up and breaks down each cycle.",
          },
          {
            kind: "truefalse",
            q: "The isthmus is the widest part of the oviduct.",
            answer: false,
            explain: "The ampulla is the wider part; the isthmus has a narrow lumen and joins the uterus.",
          },
        ],
      },
      {
        slug: "gametogenesis-and-menstrual-cycle",
        title: "Gametogenesis and the Menstrual Cycle",
        summary: "Spermatogenesis and its hormones, sperm structure, oogenesis and the four phases of the menstrual cycle.",
        minutes: 20,
        xp: 50,
        blocks: [
          { type: "illustration", emoji: "🔄", caption: "A 28-day cycle: one ovum released around day 14." },
          { type: "heading", text: "Spermatogenesis" },
          {
            type: "list",
            ordered: true,
            items: [
              "**Spermatogonia** (2n = 46) on the inner wall of seminiferous tubules multiply by mitosis.",
              "Some become **primary spermatocytes** (2n = 46).",
              "Meiosis I gives two equal haploid **secondary spermatocytes** (23 chromosomes each).",
              "Meiosis II gives four equal haploid **spermatids**.",
              "Spermatids change into **spermatozoa**: **spermiogenesis**. Sperm heads stay embedded in Sertoli cells.",
              "Sperm are released from the tubules: **spermiation**.",
            ],
          },
          {
            type: "text",
            md: "**Hormonal control** begins at puberty with a rise in **GnRH** from the hypothalamus. GnRH makes the anterior pituitary release **LH** and **FSH**. **LH** acts on **Leydig cells** to make androgens, which stimulate spermatogenesis. **FSH** acts on **Sertoli cells** to release factors that help **spermiogenesis**.",
          },
          {
            type: "text",
            md: "A **sperm** has a **head** (haploid nucleus capped by the enzyme-filled **acrosome**), a **neck**, a **middle piece** packed with **mitochondria** that power the tail, and a **tail**. About **200 to 300 million** sperm are ejaculated at a time. For normal fertility at least **60%** must have normal shape and size and at least **40%** must show vigorous motility.",
          },
          { type: "heading", text: "Oogenesis" },
          {
            type: "text",
            md: "Oogenesis starts **before birth**: a couple of million **oogonia** form in each foetal ovary, and none are added after birth. They enter prophase of meiosis I and stop: these are **primary oocytes**, each wrapped by granulosa cells into a **primary follicle**. Many degenerate, so only **60,000 to 80,000** primary follicles remain in each ovary at puberty. Primary follicles become **secondary** follicles (more granulosa layers and a theca), then **tertiary** follicles with a fluid-filled **antrum**. The primary oocyte now completes meiosis I **unequally**: a large haploid **secondary oocyte** and a tiny **first polar body**. The tertiary follicle becomes the mature **Graafian follicle**, the secondary oocyte forms the **zona pellucida**, and the follicle ruptures to release it: **ovulation**.",
          },
          {
            type: "table",
            headers: ["Feature", "Spermatogenesis", "Oogenesis"],
            rows: [
              ["Starts", "At puberty", "In the foetus"],
              ["Products per meiocyte", "4 functional sperm", "1 ovum + polar bodies"],
              ["Cytoplasm division", "Equal", "Unequal"],
              ["Continues", "Lifelong", "Until menopause (about 50)"],
            ],
          },
          { type: "heading", text: "Worked example" },
          {
            type: "text",
            md: "**Problem.** How many sperm form from 25 primary spermatocytes, and how many ova from 25 primary oocytes?\n\n**Solution.** Each primary spermatocyte gives 4 spermatids, hence 4 sperm: 25 × 4 = **100 sperm**. Each primary oocyte gives only **1 ovum** (the rest of the nuclei go into polar bodies): **25 ova**.",
          },
          { type: "heading", text: "The menstrual cycle" },
          {
            type: "table",
            headers: ["Phase (28-day cycle)", "Ovary", "Uterus", "Hormones"],
            rows: [
              ["Menstrual (days 1 to 5)", "No ovum fertilised", "Endometrium and its blood vessels break down: 3 to 5 days of flow", "Progesterone and estrogen low"],
              ["Follicular / proliferative", "Primary follicles grow into a Graafian follicle", "Endometrium regenerates by proliferation", "FSH and LH rise gradually; follicles secrete estrogen"],
              ["Ovulatory (about day 14)", "Graafian follicle ruptures, releasing the secondary oocyte", "Thick endometrium", "LH surge (LH and FSH peak mid-cycle)"],
              ["Luteal / secretory", "Remaining follicle becomes the corpus luteum", "Endometrium maintained, ready for implantation", "Corpus luteum secretes large amounts of progesterone"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which hormone surge triggers ovulation?",
                options: ["FSH", "LH", "Progesterone", "Prolactin"],
                answer: 1,
                explain: "The mid-cycle LH surge induces rupture of the Graafian follicle.",
              },
              {
                kind: "numeric",
                q: "How many chromosomes does a human secondary spermatocyte contain?",
                answer: 23,
                explain: "Meiosis I halves the number: secondary spermatocytes are haploid with 23 chromosomes.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET traps",
            md: "A secondary oocyte, **not** a mature ovum, is released at ovulation; meiosis II finishes only when a sperm enters. **LH → Leydig**, **FSH → Sertoli**. Spermiogenesis (spermatid → sperm) is different from spermiation (release of sperm). If fertilisation fails, the **corpus luteum degenerates**, progesterone falls and menstruation follows. The first cycle is **menarche**; cycles stop at **menopause** around 50.",
          },
          {
            type: "keypoints",
            items: [
              "Spermatogonia → primary spermatocyte → secondary spermatocytes → spermatids → sperm.",
              "GnRH → LH (Leydig, androgens) and FSH (Sertoli, spermiogenesis).",
              "200 to 300 million sperm per ejaculate; 60% normal shape, 40% vigorous motility needed.",
              "Oogenesis starts in the foetus; 60,000 to 80,000 follicles per ovary at puberty; secondary oocyte is ovulated.",
              "Cycle: menstrual, follicular, ovulatory (LH surge, day 14), luteal (corpus luteum, progesterone).",
            ],
          },
        ],
        flashcards: [
          { front: "Spermiogenesis", back: "Transformation of spermatids into spermatozoa." },
          { front: "Spermiation", back: "Release of sperm from the seminiferous tubules." },
          { front: "Acrosome", back: "Enzyme-filled cap on the sperm head, used to penetrate the ovum." },
          { front: "Graafian follicle", back: "Mature ovarian follicle that ruptures at ovulation." },
          { front: "Corpus luteum", back: "Remains of the Graafian follicle; secretes progesterone." },
          { front: "Menarche", back: "The first menstruation, at puberty." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many sperm are formed from 40 primary spermatocytes?",
            answer: 160,
            explain: "Each primary spermatocyte gives 4 sperm: 40 × 4 = 160.",
          },
          {
            kind: "mcq",
            q: "FSH acts on which cells in the testis?",
            options: ["Leydig cells", "Sertoli cells", "Spermatogonia", "Spermatids"],
            answer: 1,
            explain: "FSH acts on Sertoli cells, which release factors aiding spermiogenesis.",
          },
          {
            kind: "truefalse",
            q: "At ovulation a human female releases a mature ovum that has completed meiosis II.",
            answer: false,
            explain: "A secondary oocyte arrested at meiosis II is released; meiosis II completes after sperm entry.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "After ovulation, the ruptured Graafian follicle changes into the ___, which secretes progesterone.",
            answer: ["corpus luteum"],
            explain: "The corpus luteum maintains the endometrium during the luteal phase.",
          },
          {
            kind: "order",
            q: "Arrange the stages of follicle development.",
            items: ["Primary follicle", "Secondary follicle", "Tertiary follicle", "Graafian follicle", "Corpus luteum"],
            explain: "Follicles mature step by step; after ovulation the remnant becomes the corpus luteum.",
          },
          {
            kind: "mcq",
            q: "The middle piece of a sperm contains numerous:",
            options: ["Ribosomes", "Lysosomes", "Mitochondria", "Centrioles only"],
            answer: 2,
            explain: "Mitochondria in the middle piece supply energy for tail movement.",
          },
        ],
      },
      {
        slug: "fertilisation-to-lactation",
        title: "Fertilisation, Pregnancy, Parturition and Lactation",
        summary: "Fertilisation in the ampulla, cleavage to blastocyst, implantation, placenta hormones, foetal milestones, birth and colostrum.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🤰", caption: "About nine months from a single cell to a baby." },
          {
            type: "text",
            md: "During coitus semen is released into the vagina (**insemination**). Sperm swim through the cervix and uterus to the **ampullary region** of the fallopian tube. Fertilisation happens only if the ovum and sperm reach the ampulla at the same time, which is why not every coitus leads to pregnancy.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A sperm contacts the **zona pellucida**; this changes the membrane and **blocks entry of other sperm**.",
              "Acrosome secretions help the sperm pass through the zona pellucida and plasma membrane.",
              "Sperm entry makes the secondary oocyte finish **meiosis II**, giving a second polar body and a haploid ovum (**ootid**).",
              "Sperm and ovum nuclei fuse to form the diploid **zygote**.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Who decides the sex?",
            md: "Every ovum carries an X chromosome. A sperm carries either X or Y. An X sperm gives a girl (XX) and a Y sperm a boy (XY), so the **father's sperm** determines the sex of the baby, never the mother.",
          },
          { type: "heading", text: "From zygote to implantation" },
          {
            type: "text",
            md: "As the zygote moves through the isthmus towards the uterus it undergoes **cleavage** (mitosis) into 2, 4, 8, 16 **blastomeres**. An embryo of 8 to 16 blastomeres is a **morula**. It becomes a **blastocyst**, whose cells form an outer **trophoblast** and an **inner cell mass**. The trophoblast attaches to the endometrium, uterine cells cover the blastocyst and it embeds: **implantation**, which marks pregnancy. The inner cell mass becomes the embryo; it contains **stem cells** able to form all tissues and organs, and soon differentiates into **ectoderm, mesoderm and endoderm** (gastrulation).",
          },
          {
            type: "text",
            md: "Finger-like **chorionic villi** of the trophoblast interlock with uterine tissue to form the **placenta**, which supplies oxygen and nutrients, removes CO₂ and wastes, and connects to the embryo by the **umbilical cord**. It is also an endocrine organ, making **hCG, hPL, estrogens and progestogens**. Late in pregnancy the ovary secretes **relaxin**. hCG, hPL and relaxin are produced in women only during pregnancy. Home pregnancy kits sold at Indian chemists detect **hCG** in urine.",
          },
          {
            type: "table",
            headers: ["Time", "Milestone"],
            rows: [
              ["End of month 1", "Heart forms; heart sound can later be heard with a stethoscope"],
              ["End of month 2", "Limbs and digits develop"],
              ["End of week 12 (first trimester)", "Most major organ systems formed; limbs and external genitalia well developed"],
              ["Month 5", "First foetal movements; hair appears on the head"],
              ["End of week 24 (second trimester)", "Body covered with fine hair; eyelids separate; eyelashes form"],
              ["End of month 9", "Foetus fully developed, ready for delivery"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which hormone is detected by a home pregnancy test?",
                options: ["Relaxin", "hCG", "Oxytocin", "FSH"],
                answer: 1,
                explain: "The placenta's hCG appears in urine soon after implantation.",
              },
            ],
          },
          { type: "heading", text: "Parturition and lactation" },
          {
            type: "text",
            md: "Pregnancy lasts about **9 months** (gestation). At its end, signals from the fully developed foetus and the placenta cause mild uterine contractions: the **foetal ejection reflex**. This triggers **oxytocin** release from the maternal pituitary; oxytocin causes stronger contractions, which cause more oxytocin, a **positive feedback** loop that ends in birth. The placenta is expelled afterwards.\n\nMilk produced in the first few days is **colostrum**, rich in **antibodies (IgA)** that give the newborn passive immunity. Doctors recommend breastfeeding in the initial period of infant growth.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Classic NEET traps",
            md: "Fertilisation is in the **ampullary region**, implantation in the **uterus** (endometrium). The **morula** has 8 to 16 cells; the **blastocyst** has trophoblast + inner cell mass. Stem cells are in the **inner cell mass**, not the trophoblast. **Relaxin** comes from the ovary, not the placenta. Oxytocin acts by **positive** feedback.",
          },
          {
            type: "keypoints",
            items: [
              "Fertilisation in the ampulla; zona pellucida blocks polyspermy; meiosis II completes on sperm entry.",
              "Zygote → cleavage → morula (8 to 16 cells) → blastocyst → implantation.",
              "Placenta: chorionic villi + uterine tissue; makes hCG, hPL, estrogens, progestogens. Relaxin from ovary.",
              "Milestones: heart (month 1), limbs (month 2), organs (12 weeks), movement (month 5), eyelids (24 weeks).",
              "Foetal ejection reflex → oxytocin → contractions (positive feedback). Colostrum gives antibodies.",
            ],
          },
        ],
        flashcards: [
          { front: "Morula", back: "Embryo of 8 to 16 blastomeres." },
          { front: "Inner cell mass", back: "Blastocyst cells that form the embryo; contains stem cells." },
          { front: "Chorionic villi", back: "Finger-like trophoblast projections that form the placenta with uterine tissue." },
          { front: "Foetal ejection reflex", back: "Mild contractions triggered by signals from the foetus and placenta; leads to oxytocin release." },
          { front: "Colostrum", back: "First milk, rich in antibodies, giving the newborn passive immunity." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Where does fertilisation normally occur in humans?",
            options: ["Uterus", "Ampullary region of the fallopian tube", "Cervix", "Ovary"],
            answer: 1,
            explain: "Ovum and sperm meet in the ampullary region of the oviduct.",
          },
          {
            kind: "order",
            q: "Arrange the early stages of development in order.",
            items: ["Zygote", "Cleavage", "Morula", "Blastocyst", "Implantation"],
            explain: "The zygote cleaves into blastomeres, forms a morula, then a blastocyst that implants.",
          },
          {
            kind: "truefalse",
            q: "Relaxin is secreted by the ovary in the later phase of pregnancy.",
            answer: true,
            explain: "NCERT notes relaxin is secreted by the ovary in the later phase of pregnancy.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The first milk secreted after childbirth, rich in antibodies, is called ___.",
            answer: ["colostrum"],
            explain: "Colostrum contains antibodies that protect the newborn.",
          },
          {
            kind: "numeric",
            q: "By the end of which week of pregnancy (the first trimester) are most major organ systems formed?",
            answer: 12,
            unit: "weeks",
            explain: "By the end of 12 weeks most major organ systems are formed.",
          },
          {
            kind: "mcq",
            q: "The sex of a human baby is determined by:",
            options: ["The ovum", "The sperm", "The placenta", "Maternal hormones"],
            answer: 1,
            explain: "All ova carry X; the sperm carries X or Y and decides the sex.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Reproductive Health                                           */
  /* ------------------------------------------------------------ */
  {
    slug: "reproductive-health",
    title: "Reproductive Health",
    icon: "🩺",
    description: "Reproductive health and population, contraception and MTP, sexually transmitted infections, infertility and assisted reproductive technologies.",
    lessons: [
      {
        slug: "reproductive-health-and-population",
        title: "Reproductive Health and Population",
        summary: "What reproductive health means, India's RCH programmes, and the growth of population.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "illustration", emoji: "🇮🇳", caption: "India started a national family planning programme in 1951, one of the first countries to do so." },
          {
            type: "text",
            md: "The **World Health Organisation (WHO)** defines reproductive health as **total well-being in all aspects of reproduction: physical, emotional, behavioural and social**. A society with reproductively healthy people has people whose reproductive organs are normal and function normally, who are aware of their bodies and of safe practices.",
          },
          { type: "heading", text: "Problems and strategies" },
          {
            type: "text",
            md: "India launched **family planning** in **1951**. Improved programmes covering wider reproduction-related areas are today called **Reproductive and Child Health Care (RCH)** programmes. Key steps include:",
          },
          {
            type: "list",
            items: [
              "Sex education in schools to give correct information and remove myths about sex-related matters.",
              "Awareness of safe and hygienic sexual practices, STIs, contraception, and care of pregnant mothers, post-natal care and breastfeeding.",
              "A **statutory ban on amniocentesis for sex determination**, to check female foeticide.",
              "Massive child immunisation; medical facilities and care for problems like pregnancy, delivery, abortion, STIs, menstrual problems and infertility.",
              "Research on new contraceptives; for example, **Saheli**, an oral pill from CDRI, Lucknow.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Amniocentesis",
            md: "Amniocentesis tests amniotic fluid cells to detect chromosomal disorders in the foetus. It is legitimately used for genetic diagnosis, but its misuse to find the baby's sex led India to ban it for sex determination.",
          },
          { type: "heading", text: "Population growth" },
          {
            type: "table",
            headers: ["Year", "World", "India"],
            rows: [
              ["1900", "About 2 billion", "—"],
              ["1947 (independence)", "—", "About 350 million"],
              ["2000", "About 6 billion", "Crossed 1 billion in May 2000"],
              ["2011", "About 7.2 billion", "About 1.2 billion (Census 2011)"],
            ],
          },
          {
            type: "text",
            md: "The main causes of rapid growth were a fast decline in the **death rate**, **maternal mortality rate (MMR)** and **infant mortality rate (IMR)**, along with more people of reproductive age. Census 2011 put India's growth rate at less than 2%, i.e. about 20 per 1000 per year. Measures include motivating small families with contraception, and raising the legal marriageable age to **18 years for women and 21 for men**.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "text",
            md: "**Problem.** A district in Bihar has a birth rate of 24 per 1000 and a death rate of 8 per 1000 per year. Find its natural growth rate, and estimate how long its population would take to double.\n\n**Solution.** Growth rate = (24 − 8) / 1000 = 16 per 1000 = **1.6% per year**. By the rule of 70, doubling time ≈ 70 / 1.6 ≈ **44 years**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A population has a birth rate of 30 per 1000 and a death rate of 10 per 1000 per year. What is its growth rate in per cent per year?",
                answer: 2,
                unit: "%",
                explain: "(30 − 10) / 1000 = 20 per 1000 = 2% per year.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Traps",
            md: "Family planning began in **1951**, not 1971 (1971 is the MTP Act). WHO's definition includes **behavioural and social** well-being, not just physical. Amniocentesis is banned **for sex determination**, not entirely.",
          },
          {
            type: "keypoints",
            items: [
              "WHO: reproductive health = physical, emotional, behavioural and social well-being in reproduction.",
              "India: family planning 1951; now RCH programmes.",
              "Ban on amniocentesis for sex determination checks female foeticide.",
              "India: 350 million (1947) → 1 billion (2000) → 1.2 billion (2011).",
              "Growth driven by falling death rate, MMR and IMR; marriageable age 18 (women), 21 (men).",
            ],
          },
        ],
        flashcards: [
          { front: "RCH", back: "Reproductive and Child Health Care programmes." },
          { front: "Year India began family planning", back: "1951." },
          { front: "MMR and IMR", back: "Maternal mortality rate and infant mortality rate." },
          { front: "Amniocentesis", back: "Test of amniotic fluid for foetal chromosomal disorders; banned in India for sex determination." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "In which year did India launch its national family planning programme?",
            answer: 1951,
            explain: "India was among the first countries, starting in 1951.",
          },
          {
            kind: "mcq",
            q: "Which of these is NOT part of WHO's definition of reproductive health?",
            options: ["Physical well-being", "Emotional well-being", "Economic well-being", "Social well-being"],
            answer: 2,
            explain: "WHO lists physical, emotional, behavioural and social well-being.",
          },
          {
            kind: "truefalse",
            q: "A decline in infant mortality rate contributed to rapid population growth in India.",
            answer: true,
            explain: "Falling death rate, MMR and IMR raised the number of survivors and hence population.",
          },
          {
            kind: "fill",
            q: "The legal marriageable age for men in India, as given in NCERT, is ___ years.",
            answer: ["21", "twenty-one"],
            explain: "18 for women and 21 for men.",
          },
          {
            kind: "numeric",
            q: "A town has a birth rate of 22 and a death rate of 7 per 1000 per year. What is its growth rate in per cent?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "%",
            explain: "(22 − 7) / 1000 = 15 per 1000 = 1.5%.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "contraception-and-mtp",
        title: "Contraception and Medical Termination of Pregnancy",
        summary: "Natural, barrier, IUD, hormonal and surgical methods, and the law and safety of MTP in India.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "💊", caption: "Saheli, a once-a-week non-steroidal pill from CDRI Lucknow." },
          {
            type: "text",
            md: "An **ideal contraceptive** is user-friendly, easily available, effective and **reversible**, with few or no side effects, and does not interfere with sexual drive or the sexual act.",
          },
          {
            type: "table",
            headers: ["Method", "How it works", "Examples"],
            rows: [
              ["Periodic abstinence", "Avoid coitus on days 10 to 17 of the cycle, when ovulation is expected", "Rhythm method"],
              ["Withdrawal (coitus interruptus)", "Male withdraws before ejaculation", "Natural"],
              ["Lactational amenorrhea", "No ovulation during intense breastfeeding; effective up to about 6 months after delivery", "Natural"],
              ["Barriers", "Prevent sperm meeting ovum", "Condoms (Nirodh), female condoms, diaphragms, cervical caps, vaults, with spermicidal creams"],
              ["IUDs", "Inside the uterus", "Lippes loop; CuT, Cu7, Multiload 375; Progestasert, LNG-20"],
              ["Oral pills", "Progestogen or progestogen–estrogen; inhibit ovulation and implantation, thicken cervical mucus", "Daily for 21 days; Saheli weekly"],
              ["Injections and implants", "Same hormones, longer acting", "Under the skin"],
              ["Surgical (sterilisation)", "Block gamete transport; very effective, poorly reversible", "Vasectomy (vas deferens), tubectomy (fallopian tube)"],
            ],
          },
          { type: "heading", text: "How IUDs work" },
          {
            type: "list",
            items: [
              "**Non-medicated** (Lippes loop) and all IUDs increase **phagocytosis of sperm** in the uterus.",
              "**Copper-releasing** IUDs (CuT, Cu7, Multiload 375): Cu ions **suppress sperm motility and fertilising capacity**.",
              "**Hormone-releasing** IUDs (Progestasert, LNG-20) make the uterus unsuitable for implantation and the cervix hostile to sperm.",
              "IUDs are ideal for women who want to **delay or space** children and are one of the most widely accepted methods in India.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Saheli and emergency contraception",
            md: "**Saheli** is a **non-steroidal** oral pill taken **once a week**, with very few side effects, developed at the **Central Drug Research Institute (CDRI), Lucknow**. **Emergency contraception**, by progestogens, progestogen–estrogen combinations or an IUD, is effective if used **within 72 hours** of unprotected coitus, rape or casual intercourse.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Copper-releasing IUDs act mainly by:",
                options: ["Inhibiting ovulation", "Suppressing sperm motility and fertilising capacity", "Blocking the vas deferens", "Thickening the endometrium"],
                answer: 1,
                explain: "Cu ions suppress sperm motility and fertilising capacity.",
              },
            ],
          },
          { type: "heading", text: "Worked comparison: vasectomy vs tubectomy" },
          {
            type: "table",
            headers: ["Feature", "Vasectomy", "Tubectomy"],
            rows: [
              ["Who", "Male", "Female"],
              ["What is cut or tied", "A small part of the vas deferens", "A small part of the fallopian tube"],
              ["Incision", "Small cut on the scrotum", "Small cut in the abdomen or through the vagina"],
              ["Result", "No sperm in semen", "Ovum cannot reach the uterus"],
              ["Reversibility", "Very poor", "Very poor"],
            ],
          },
          { type: "heading", text: "Medical termination of pregnancy (MTP)" },
          {
            type: "text",
            md: "Intentional or voluntary termination of pregnancy before full term is **MTP** (induced abortion). About **45 to 50 million** MTPs happen worldwide each year, about one-fifth of all conceived pregnancies. India **legalised MTP in 1971** with strict conditions to avoid misuse such as female foeticide. NCERT describes the MTP (Amendment) Act, 2017: termination within the first **12 weeks** on the opinion of **one** registered medical practitioner, and between 12 and 24 weeks with **two**. (The MTP Amendment Act of 2021 later set the single-doctor limit at 20 weeks; check which version your board follows.)\n\nMTPs are **relatively safe in the first trimester** (up to 12 weeks); second-trimester abortions are much riskier. They are used when continuing the pregnancy would harm the mother or foetus, or after contraceptive failure or rape.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common NEET and board traps",
            md: "Lippes loop is **non-medicated**; CuT is **copper-releasing**; Progestasert and LNG-20 are **hormone-releasing**. Saheli is **non-steroidal** and **weekly**. Lactational amenorrhea works only up to about **6 months**. Emergency contraception must be within **72 hours**. Condoms are the only listed method that also protects against **STIs and AIDS**.",
          },
          {
            type: "keypoints",
            items: [
              "Natural: periodic abstinence (days 10 to 17), withdrawal, lactational amenorrhea (up to 6 months).",
              "Barriers: condoms (Nirodh), diaphragms, cervical caps, vaults; condoms also protect against STIs.",
              "IUDs: non-medicated, copper-releasing, hormone-releasing.",
              "Pills inhibit ovulation and implantation; Saheli is weekly and non-steroidal (CDRI, Lucknow).",
              "Vasectomy and tubectomy are permanent; MTP legal since 1971, safest in the first trimester.",
            ],
          },
        ],
        flashcards: [
          { front: "Nirodh", back: "Popular brand of male condom in India." },
          { front: "Multiload 375", back: "Copper-releasing IUD." },
          { front: "LNG-20", back: "Hormone-releasing IUD." },
          { front: "Saheli", back: "Once-a-week non-steroidal oral contraceptive from CDRI, Lucknow." },
          { front: "Emergency contraception window", back: "Within 72 hours of unprotected coitus." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which is a hormone-releasing IUD?",
            options: ["Lippes loop", "CuT", "Multiload 375", "Progestasert"],
            answer: 3,
            explain: "Progestasert and LNG-20 release hormones. Lippes loop is non-medicated; CuT and Multiload are copper-releasing.",
          },
          {
            kind: "numeric",
            q: "Within how many hours of unprotected coitus must emergency contraception be used?",
            answer: 72,
            unit: "hours",
            explain: "Emergency contraceptives are effective within 72 hours.",
          },
          {
            kind: "truefalse",
            q: "Saheli is a steroidal pill taken daily.",
            answer: false,
            explain: "Saheli is non-steroidal and taken once a week.",
          },
          {
            kind: "fill",
            q: "In vasectomy, a small part of the ___ is removed or tied up.",
            answer: ["vas deferens"],
            explain: "Tubectomy involves the fallopian tube instead.",
          },
          {
            kind: "mcq",
            q: "MTP is considered relatively safe up to:",
            options: ["The first trimester", "The second trimester", "Any stage", "24 weeks in all cases"],
            answer: 0,
            explain: "MTPs are relatively safe during the first trimester, up to 12 weeks.",
          },
          {
            kind: "numeric",
            q: "In which year did India legalise MTP?",
            answer: 1971,
            explain: "The MTP Act was passed in 1971.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "stis-infertility-art",
        title: "STIs, Infertility and Assisted Reproductive Technologies",
        summary: "Common STIs and their prevention, causes of infertility, and IVF, ZIFT, IUT, GIFT, ICSI and AI.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🧫", caption: "IVF clinics in Indian cities help thousands of couples every year." },
          {
            type: "text",
            md: "Infections transmitted through sexual intercourse are **sexually transmitted infections (STIs)**, also called venereal diseases or reproductive tract infections. They include **gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B and HIV**. Except **hepatitis-B, genital herpes and HIV**, all are completely curable if detected early and treated properly.",
          },
          {
            type: "text",
            md: "Hepatitis-B and HIV also spread by **sharing injection needles** or surgical instruments, **transfusion of infected blood**, and from an **infected mother to the foetus**. STIs are commonest in the **15 to 24** age group. Early symptoms are often minor (itching, fluid discharge, slight pain, swellings in the genital region), so people delay treatment. Untreated STIs can lead to **pelvic inflammatory disease (PID)**, abortions, still births, ectopic pregnancies, infertility and even cancer of the reproductive tract.",
          },
          {
            type: "list",
            items: [
              "Avoid sex with unknown partners or multiple partners.",
              "Always use condoms during coitus.",
              "In case of doubt, consult a qualified doctor early for diagnosis and complete treatment.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which STI is NOT completely curable?",
                options: ["Gonorrhoea", "Syphilis", "Genital herpes", "Trichomoniasis"],
                answer: 2,
                explain: "Genital herpes, hepatitis-B and HIV are not completely curable.",
              },
            ],
          },
          { type: "heading", text: "Infertility" },
          {
            type: "text",
            md: "Couples unable to conceive despite unprotected sexual cohabitation are **infertile**. The cause may be physical, congenital, disease-related, drugs, immunological or even psychological, and may lie with **either partner**, though in India the woman is often unfairly blamed. Specialised health clinics diagnose and correct problems, and **assisted reproductive technologies (ART)** help when they cannot be corrected.",
          },
          {
            type: "table",
            headers: ["Technique", "What is done", "Where it goes"],
            rows: [
              ["IVF–ET (test-tube baby)", "Ova and sperm fertilised outside the body in similar conditions, then embryo transfer", "See ZIFT / IUT"],
              ["ZIFT", "Zygote or early embryo with **up to 8 blastomeres** transferred", "Fallopian tube"],
              ["IUT", "Embryo with **more than 8 blastomeres** transferred", "Uterus"],
              ["GIFT", "Ovum from a donor transferred to a woman who cannot make ova but can support fertilisation", "Fallopian tube"],
              ["ICSI", "A single sperm injected directly into the ovum in the lab", "Embryo then transferred"],
              ["AI / IUI", "Semen from husband or donor introduced artificially (for low sperm counts)", "Vagina, or uterus in IUI"],
            ],
          },
          { type: "heading", text: "Worked example: choose the technique" },
          {
            type: "text",
            md: "**Case 1.** A woman's ovaries produce no ova, but her tubes and uterus are healthy. → **GIFT** with a donor ovum.\n\n**Case 2.** The husband's sperm count is very low. → **AI/IUI**, or **ICSI** if sperm cannot fertilise on their own.\n\n**Case 3.** An embryo formed by IVF has 16 blastomeres. It has more than 8 cells → **IUT** into the uterus. A 4-celled embryo would go by **ZIFT** into the fallopian tube.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "An Indian first",
            md: "In October 1978, about two months after the world's first IVF baby was born in England, Dr Subhash Mukhopadhyay in Kolkata reported India's first test-tube baby, Durga. Today ART in India is regulated by the ART (Regulation) Act, 2021. ART is costly and is available mostly in cities, and emotional, religious and social factors also limit its use; legal **adoption** is another option for childless couples.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "The 8-blastomere rule",
            md: "**Up to 8 blastomeres → ZIFT (fallopian tube). More than 8 → IUT (uterus).** GIFT transfers a **gamete** (ovum), not a zygote. ICSI injects **sperm into ovum**; IUI places **semen into the uterus**. These pairs are swapped in distractors every year.",
          },
          {
            type: "keypoints",
            items: [
              "STIs: gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B, HIV.",
              "Hepatitis-B, genital herpes and HIV are not completely curable.",
              "Untreated STIs cause PID, ectopic pregnancy, infertility, still births.",
              "ZIFT: up to 8 blastomeres into tube; IUT: more than 8 into uterus.",
              "GIFT: ovum into tube; ICSI: sperm into ovum; AI/IUI: semen into vagina/uterus.",
            ],
          },
        ],
        flashcards: [
          { front: "ZIFT", back: "Zygote intra-fallopian transfer: zygote or embryo up to 8 blastomeres into the fallopian tube." },
          { front: "IUT", back: "Intra-uterine transfer: embryo with more than 8 blastomeres into the uterus." },
          { front: "GIFT", back: "Gamete intra-fallopian transfer: donor ovum into the fallopian tube." },
          { front: "ICSI", back: "Intra-cytoplasmic sperm injection: sperm injected directly into the ovum." },
          { front: "STIs not completely curable", back: "Hepatitis-B, genital herpes and HIV." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "An embryo with 12 blastomeres is transferred by:",
            options: ["ZIFT", "IUT", "GIFT", "ICSI"],
            answer: 1,
            explain: "More than 8 blastomeres → intra-uterine transfer.",
          },
          {
            kind: "mcq",
            q: "Which technique transfers an ovum, not a zygote, into the fallopian tube?",
            options: ["ZIFT", "IUT", "GIFT", "IUI"],
            answer: 2,
            explain: "GIFT is gamete intra-fallopian transfer.",
          },
          {
            kind: "truefalse",
            q: "Hepatitis-B can be transmitted through sharing injection needles.",
            answer: true,
            explain: "Hepatitis-B and HIV spread through needles, infected blood and from mother to foetus, as well as sexually.",
          },
          {
            kind: "fill",
            q: "In ___, a sperm is directly injected into the ovum in the laboratory.",
            answer: ["ICSI", "intracytoplasmic sperm injection", "intra-cytoplasmic sperm injection"],
            explain: "ICSI: intra-cytoplasmic sperm injection.",
          },
          {
            kind: "numeric",
            q: "What is the maximum number of blastomeres an embryo can have to be transferred by ZIFT?",
            answer: 8,
            explain: "ZIFT transfers a zygote or early embryo of up to 8 blastomeres.",
          },
          {
            kind: "mcq",
            q: "STIs are most common in the age group:",
            options: ["5 to 14 years", "15 to 24 years", "35 to 44 years", "Above 60 years"],
            answer: 1,
            explain: "NCERT notes the highest incidence among 15 to 24 year olds.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Sexual Reproduction in Flowering Plants": "sexual-reproduction-flowering-plants",
  Reproduction: "sexual-reproduction-flowering-plants",
  "Human Reproduction": "human-reproduction",
  "Reproductive Health": "reproductive-health",
};
