import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;
void t;

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Morphology of Flowering Plants (NCERT Class 11, Chapter 5)          */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-morphology-of-flowering-plants",
    title: "Morphology of Flowering Plants",
    icon: "🌺",
    description: "Root, stem and leaf with their modifications; inflorescence, flower, fruit and seed; floral formulae and the families Fabaceae, Solanaceae and Liliaceae.",
    lessons: [
      /* ---------------- Lesson 1: root, stem, leaf ---------------- */
      {
        slug: "c11-root-stem-leaf",
        title: "Root, Stem and Leaf",
        summary: "Tap, fibrous and adventitious roots, the regions of a root, stem and leaf parts, venation, compound leaves, phyllotaxy and the modifications NEET loves.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🥕",
            caption: "A carrot, a potato and an onion all store food underground. Only one of them is a root: the carrot. The potato is a stem and the onion is mostly fleshy leaves.",
          },
          {
            type: "text",
            md: "**Morphology** is the study of the external form and features of an organism. A typical flowering plant has an underground **root system** and an above-ground **shoot system** (stem, leaves, flowers, fruits). Because plants are so varied, botanists identify an organ by its **origin and position**, not by how it looks or what it does.",
          },
          {
            type: "table",
            headers: ["Root system", "Develops from", "Typical of", "Examples"],
            rows: [
              ["Tap root system", "the **radicle**: a primary root that grows on and gives lateral (secondary, tertiary) roots", "most dicots", "mustard, gram"],
              ["Fibrous root system", "the primary root is short-lived and is replaced by many roots from the **base of the stem**", "monocots", "wheat, rice"],
              ["Adventitious roots", "any part of the plant **other than the radicle**", "both", "grass, Monstera, banyan (prop roots)"],
            ],
          },
          {
            type: "text",
            md: "**The root.** From tip upwards a root has four regions: the **root cap** (a thimble that protects the tender tip as it pushes through soil); the **region of meristematic activity** (small, thin-walled cells with dense protoplasm that divide repeatedly); the **region of elongation** (cells lengthen and enlarge, so the root grows in length); and the **region of maturation** (cells differentiate; some epidermal cells form fine **root hairs** that absorb water and minerals).",
          },
          {
            type: "table",
            headers: ["Root modification", "Function", "Examples"],
            rows: [
              ["Storage tap roots", "store food", "carrot (conical), turnip (napiform), radish (fusiform)"],
              ["Storage adventitious roots", "store food", "sweet potato"],
              ["Prop roots", "hanging roots from branches that support a spreading tree", "banyan"],
              ["Stilt roots", "supporting roots from the lower nodes of the stem", "maize, sugarcane"],
              ["Pneumatophores", "roots that grow vertically **up** out of swampy soil to get oxygen", "Rhizophora (mangroves)"],
            ],
          },
          {
            type: "text",
            md: "**The stem** develops from the **plumule** of the embryo. It bears **nodes** (where leaves arise) and **internodes** (the parts between nodes), and carries buds that may be terminal or axillary. A young stem is usually green. Stems are modified for storage, support, protection and vegetative propagation, and the key clue is always the same: a stem has nodes, internodes and buds, even when it lives underground.",
          },
          {
            type: "table",
            headers: ["Stem modification", "What it does", "Examples"],
            rows: [
              ["Underground storage stems", "store food, perennate (survive bad seasons)", "potato (tuber), ginger and turmeric (rhizome), zaminkand and Colocasia (corm)"],
              ["Stem tendrils (from axillary buds)", "slender, coiled; help weak stems climb", "cucumber, pumpkin, watermelon, grapevine"],
              ["Thorns (from axillary buds)", "woody, straight, pointed; protect from grazing animals", "Citrus, Bougainvillea"],
              ["Flattened (phylloclade) or fleshy cylindrical green stems", "photosynthesis in arid plants whose leaves are reduced to spines", "Opuntia (flattened), Euphorbia (fleshy, cylindrical)"],
              ["Runner, stolon, offset, sucker", "spread and vegetative propagation", "grass and strawberry (runner); mint and jasmine (stolon-like lateral branches); Pistia and Eichhornia (offset); banana, pineapple and Chrysanthemum (sucker)"],
            ],
          },
          {
            type: "text",
            md: "**The leaf** develops at the node and bears a bud in its axil. It has three main parts: **leaf base** (with two small **stipules** in many plants; in legumes the base may be swollen into a **pulvinus**), **petiole** (holds the blade towards light and lets it flutter in wind), and **lamina** (the green blade with veins and veinlets). In **reticulate venation** veinlets form a network (dicots); in **parallel venation** veins run parallel (most monocots).\n\nA leaf is **simple** if the lamina is entire or its incisions do not reach the midrib; it is **compound** if the incisions reach the midrib and break the lamina into leaflets. In a **pinnately compound** leaf (neem) leaflets sit on a common axis, the **rachis**; in a **palmately compound** leaf (silk cotton) leaflets are attached at one point, the tip of the petiole. A bud is present in the axil of the petiole of a compound leaf, never in the axil of a leaflet.",
          },
          {
            type: "table",
            headers: ["Phyllotaxy (leaf arrangement)", "Leaves per node", "Examples"],
            rows: [
              ["Alternate", "one, in alternate manner", "China rose, mustard, sunflower"],
              ["Opposite", "a pair, opposite each other", "Calotropis, guava"],
              ["Whorled", "more than two, in a whorl", "Alstonia"],
            ],
          },
          {
            type: "text",
            md: "**Leaf modifications:** tendrils for climbing (peas), spines for defence (cacti), fleshy storage leaves (onion, garlic), a flattened green **petiole** that does the leaf's work while the leaflets fall early (Australian Acacia), and leaves modified to trap insects (pitcher plant, Venus fly trap).",
          },
          {
            type: "example",
            title: "Identify the organ by its origin",
            problem: "A grapevine and a pea plant both climb using coiled tendrils. Are the two tendrils the same organ?",
            steps: [
              "Look at where each tendril arises. In grapevine (and cucumber, pumpkin) the tendril develops from an **axillary bud**, so it is a modified **stem**.",
              "In pea, the tendrils replace the upper leaflets of a compound leaf, so they are a modified **leaf** (part of the lamina).",
              "Same function and similar look but different origin: these are **analogous** structures, not homologous ones.",
            ],
            answer: "No. Grapevine tendrils are stem tendrils (from axillary buds); pea tendrils are leaf tendrils (modified leaflets).",
          },
          {
            type: "mistake",
            wrong: "Potato and sweet potato are both underground stems because both are swollen and store food.",
            right: "Potato is a stem tuber; sweet potato is a storage **adventitious root**.",
            why: "Storage and an underground position do not decide the organ. The 'eyes' of a potato are axillary buds at nodes, so it is a stem. A sweet potato has no nodes or buds; it arises as a root.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the modified part a root, a stem or a leaf?",
              groups: ["Root", "Stem", "Leaf"],
              items: [
                { text: "Carrot", group: 0, hint: "A swollen tap root from the radicle." },
                { text: "Ginger", group: 1, hint: "A rhizome: it has nodes, scale leaves and buds." },
                { text: "Onion bulb scales", group: 2, hint: "Fleshy leaves that store food." },
                { text: "Citrus thorn", group: 1, hint: "It arises from an axillary bud." },
                { text: "Cactus spine", group: 2, hint: "The leaf is reduced to cut water loss." },
                { text: "Banyan prop roots", group: 0, hint: "Hanging adventitious roots from branches." },
                { text: "Opuntia pad", group: 1, hint: "A flattened green stem (phylloclade)." },
                { text: "Sweet potato", group: 0, hint: "No nodes or buds: an adventitious root." },
              ],
              explain: "Decide by origin. Thorns come from axillary buds (stem), spines are modified leaves, and swollen roots have no nodes, internodes or buds.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Pneumatophores of Rhizophora help the plant to:",
                options: ["store food in swampy soil", "get oxygen for respiration", "climb nearby trees", "absorb salt from sea water"],
                answer: 1,
                explain: "Mangrove soil is waterlogged and poor in oxygen. Pneumatophores grow vertically upwards above the soil and take in air for respiration.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Tap root from the radicle (dicots); fibrous roots from the stem base (monocots); adventitious roots from any part other than the radicle.",
              "Root regions from the tip: root cap, meristematic region, elongation region, maturation region (root hairs).",
              "Stems have nodes, internodes and buds even underground: potato, ginger, Colocasia.",
              "Stem tendrils and thorns arise from axillary buds; leaf tendrils (pea) and spines (cacti) are modified leaves.",
              "Phyllotaxy: alternate (China rose), opposite (guava, Calotropis), whorled (Alstonia).",
            ],
          },
        ],
        flashcards: [
          { front: "Origin of a tap root", back: "The radicle of the embryo. The primary root persists and branches." },
          { front: "Fibrous root system", back: "The primary root is short-lived; many roots arise from the base of the stem. Seen in wheat and other monocots." },
          { front: "Stilt roots vs prop roots", back: "Stilt roots arise from the lower nodes of the stem (maize, sugarcane); prop roots hang down from branches (banyan)." },
          { front: "Stem tendrils", back: "Develop from axillary buds: cucumber, pumpkin, watermelon, grapevine." },
          { front: "Pulvinus", back: "A swollen leaf base, seen in leguminous plants." },
          { front: "Pinnately vs palmately compound", back: "Pinnate: leaflets on a rachis (neem). Palmate: leaflets from the tip of the petiole (silk cotton)." },
          { front: "Australian Acacia", back: "The leaves are small and short-lived; the petiole expands, turns green and makes food." },
          { front: "Offset", back: "A short lateral branch of one internode with a rosette of leaves and a tuft of roots at the node: Pistia, Eichhornia." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which one is NOT a stem modification?",
            options: ["Potato tuber", "Ginger rhizome", "Sweet potato", "Colocasia corm"],
            answer: 2,
            explain: "Sweet potato is a storage adventitious root. The others have nodes and buds and are underground stems.",
          },
          {
            kind: "mcq",
            q: "Whorled phyllotaxy is seen in:",
            options: ["China rose", "Guava", "Alstonia", "Mustard"],
            answer: 2,
            explain: "Alstonia has more than two leaves at a node. China rose and mustard are alternate; guava is opposite.",
          },
          {
            kind: "multi",
            q: "Select all plants whose tendrils develop from axillary buds.",
            options: ["Cucumber", "Pea", "Grapevine", "Watermelon", "Sweet pea"],
            answers: [0, 2, 3],
            explain: "Stem tendrils (axillary bud origin) occur in cucumber, pumpkin, watermelon and grapevine. Pea and sweet pea have leaf tendrils.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The region of a root where root hairs develop is the region of:",
            options: ["meristematic activity", "elongation", "maturation", "the root cap"],
            answer: 2,
            explain: "Cells of the region of maturation differentiate; some epidermal cells there form root hairs.",
          },
          {
            kind: "truefalse",
            q: "In a compound leaf, each leaflet has a bud in its axil.",
            answer: false,
            explain: "The bud is in the axil of the petiole of the whole compound leaf, not of the leaflets. This is how you tell a compound leaf from a branch with simple leaves.",
          },
          {
            kind: "mcq",
            q: "Thorns of Bougainvillea and spines of cacti are:",
            options: ["both modified stems", "both modified leaves", "modified stem and modified leaf respectively", "modified leaf and modified stem respectively"],
            answer: 2,
            explain: "Thorns arise from axillary buds (stem). Cactus spines are modified leaves.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The common axis bearing leaflets in a pinnately compound leaf is the ___.",
            answer: ["rachis"],
            explain: "The rachis represents the midrib of the leaf. Neem has pinnately compound leaves.",
          },
          {
            kind: "mcq",
            q: "Which plant propagates by suckers?",
            options: ["Strawberry", "Pistia", "Mint", "Banana"],
            answer: 3,
            explain: "Banana, pineapple and Chrysanthemum have suckers. Strawberry has runners, Pistia offsets and mint stolon-like lateral branches.",
          },
        ],
      },

      /* ---------------- Lesson 2: inflorescence, flower, fruit, seed ---------------- */
      {
        slug: "c11-flower-fruit-seed",
        title: "Inflorescence, Flower, Fruit and Seed",
        summary: "Racemose and cymose inflorescence, flower symmetry and ovary position, aestivation, stamen fusion, placentation, the drupe, and dicot and monocot seeds.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🌸",
            caption: "A flower is a shoot that has been changed for sexual reproduction: its nodes are pressed close together and its leaves have become sepals, petals, stamens and carpels.",
          },
          {
            type: "text",
            md: "The arrangement of flowers on the floral axis is the **inflorescence**. In **racemose** inflorescence the main axis keeps growing and flowers are borne laterally in **acropetal** order (older flowers below, younger above). In **cymose** inflorescence the main axis ends in a flower, so its growth is limited, and flowers are borne in **basipetal** order.",
          },
          {
            type: "text",
            md: "A typical flower has four whorls on the swollen tip of the stalk (**thalamus** or receptacle): **calyx**, **corolla**, **androecium** and **gynoecium**. When calyx and corolla look alike they are called **perianth** (lily). A flower with both androecium and gynoecium is **bisexual**; one with only one of them is **unisexual**. Flowers with bracts (reduced leaves at the base of the pedicel) are **bracteate**; those without are **ebracteate**. Flowers are **trimerous** (parts in threes, typical of monocots), **tetramerous** or **pentamerous** (typical of dicots).",
          },
          {
            type: "table",
            headers: ["Symmetry", "Meaning", "Examples"],
            rows: [
              ["Actinomorphic (radial)", "can be cut into two equal halves through any radial plane through the centre", "mustard, datura, chilli"],
              ["Zygomorphic (bilateral)", "can be cut into two similar halves in only one vertical plane", "pea, gulmohur, bean, Cassia"],
              ["Asymmetric (irregular)", "cannot be divided into similar halves by any vertical plane", "canna"],
            ],
          },
          {
            type: "table",
            headers: ["Ovary position", "How the other parts sit", "Ovary is", "Examples"],
            rows: [
              ["Hypogynous", "the ovary is highest; other parts arise below it", "superior", "mustard, China rose, brinjal"],
              ["Perigynous", "the thalamus forms a rim/cup; other parts arise from the rim at about the level of the ovary", "half inferior", "plum, rose, peach"],
              ["Epigynous", "the thalamus grows round the ovary and fuses with it; other parts arise above the ovary", "inferior", "guava, cucumber, ray florets of sunflower"],
            ],
          },
          {
            type: "text",
            md: "Sepals may be free (**polysepalous**) or united (**gamosepalous**); petals likewise (**polypetalous** or **gamopetalous**). **Aestivation** is how sepals or petals are arranged in the bud relative to one another.",
          },
          {
            type: "table",
            headers: ["Aestivation", "Arrangement", "Examples"],
            rows: [
              ["Valvate", "margins just touch, no overlap", "Calotropis"],
              ["Twisted", "one margin overlaps the next, regularly in one direction", "China rose, lady's finger, cotton"],
              ["Imbricate", "margins overlap, but not in any particular direction", "Cassia, gulmohur"],
              ["Vexillary (papilionaceous)", "the largest posterior petal (**standard**) overlaps two lateral **wings**, which overlap the two smallest anterior petals forming the **keel**", "pea, bean"],
            ],
          },
          {
            type: "text",
            md: "Each **stamen** has a filament and an anther; each anther is usually bilobed with two pollen sacs per lobe. A sterile stamen is a **staminode**. Stamens may be attached to petals (**epipetalous**, brinjal) or to the perianth (**epiphyllous**, lily). They may be free (**polyandrous**) or united: in **one bundle** (**monoadelphous**, China rose), **two bundles** (**diadelphous**, pea) or **more than two** (**polyadelphous**, citrus).\n\nThe gynoecium is made of **carpels** (stigma, style, ovary). Free carpels make it **apocarpous** (lotus, rose); fused carpels make it **syncarpous** (mustard, tomato). After fertilisation ovules become seeds and the ovary becomes the fruit.",
          },
          {
            type: "table",
            headers: ["Placentation", "Where ovules sit", "Examples"],
            rows: [
              ["Marginal", "along a ridge on the ventral suture of a one-chambered ovary", "pea"],
              ["Axile", "on a central axis of a multilocular ovary", "China rose, tomato, lemon"],
              ["Parietal", "on the inner wall; one-chambered ovary that becomes two-chambered by a false septum", "mustard, Argemone"],
              ["Free central", "on a central axis with no septa", "Dianthus, Primrose"],
              ["Basal", "a single ovule at the base of the ovary", "sunflower, marigold"],
            ],
          },
          {
            type: "example",
            title: "Reading a flower",
            problem: "A flower has five united sepals, five united petals, five stamens fused to the petals and a two-carpelled ovary with ovules on a central swollen axis. Petals of every flower can be split into equal halves in any plane through the centre. Describe it in botanical terms.",
            steps: [
              "Any radial plane gives equal halves, so the flower is **actinomorphic**.",
              "United sepals and petals: **gamosepalous** and **gamopetalous**.",
              "Stamens fused to petals: **epipetalous**.",
              "Two fused carpels: **bicarpellary, syncarpous**. Ovules on a central axis in a chambered ovary: **axile** placentation.",
            ],
            answer: "Actinomorphic, gamosepalous, gamopetalous, epipetalous stamens, bicarpellary syncarpous gynoecium with axile placentation (a Solanaceae-type flower such as brinjal).",
          },
          {
            type: "text",
            md: "**Fruit and seed.** The **fruit** is a mature or ripened ovary formed after fertilisation. A fruit formed **without** fertilisation is **parthenocarpic**. Its wall, the **pericarp**, may be dry or fleshy; a thick fleshy pericarp has an outer **epicarp**, middle **mesocarp** and inner **endocarp**. Mango and coconut are **drupes**: they develop from a **monocarpellary superior ovary** and are one-seeded. Mango's edible part is the fleshy mesocarp; coconut's mesocarp is fibrous. Both have a hard stony endocarp.\n\nA **dicot seed** (gram, pea) has a seed coat of two layers (outer **testa**, inner **tegmen**), a scar called the **hilum**, a pore called the **micropyle**, and an embryo with an **embryonal axis** and **two cotyledons** that store food. Bean, gram and pea are **non-endospermous**; castor is **endospermous**. Monocot seeds are generally **endospermic** (orchids are an exception). In **maize** the seed coat is fused with the fruit wall; the endosperm is bulky and separated from the embryo by a protein-rich **aleurone layer**. The single large cotyledon is the **scutellum**; the plumule is covered by the **coleoptile** and the radicle by the **coleorhiza**.",
          },
          {
            type: "mistake",
            wrong: "A drupe is any fruit with a hard stone, so its edible part is always the same layer.",
            right: "A drupe is a one-seeded fruit from a monocarpellary superior ovary with a stony endocarp. The edible part differs: fleshy mesocarp in mango, endosperm in coconut.",
            why: "Learners link 'stone fruit' with eating the flesh. In coconut the mesocarp is fibrous (coir) and we eat the endosperm, so NEET asks which layer is eaten in each fruit.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each placentation to its example.",
              pairs: [
                ["Marginal", "Pea"],
                ["Axile", "Tomato"],
                ["Parietal", "Mustard"],
                ["Free central", "Dianthus"],
                ["Basal", "Marigold"],
              ],
              explain: "Pea (marginal) is a legume; tomato and lemon have axile placentation in a multilocular ovary; mustard has a false septum (replum); Dianthus has a septum-free axis; sunflower and marigold have one basal ovule.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which pair has a half-inferior ovary?",
                options: ["Mustard and brinjal", "Plum and rose", "Guava and cucumber", "China rose and chilli"],
                answer: 1,
                explain: "Plum, rose and peach are perigynous: the ovary is half inferior. Guava and cucumber are epigynous (inferior); mustard and China rose are hypogynous (superior).",
              },
              {
                kind: "mcq",
                q: "In a maize grain, the protein-rich layer between endosperm and embryo is the:",
                options: ["scutellum", "aleurone layer", "coleoptile", "tegmen"],
                answer: 1,
                explain: "The aleurone layer separates the endosperm from the embryo. The scutellum is the single cotyledon.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Racemose: axis keeps growing, acropetal flowers. Cymose: axis ends in a flower, basipetal flowers.",
              "Hypogynous = superior ovary (mustard); perigynous = half inferior (rose, plum); epigynous = inferior (guava, cucumber).",
              "Aestivation: valvate (Calotropis), twisted (China rose, cotton), imbricate (Cassia, gulmohur), vexillary (pea, bean).",
              "Stamens: monoadelphous (China rose), diadelphous (pea), polyadelphous (citrus); epipetalous (brinjal), epiphyllous (lily).",
              "Placentation: marginal (pea), axile (tomato, lemon), parietal (mustard), free central (Dianthus), basal (sunflower).",
            ],
          },
        ],
        flashcards: [
          { front: "Racemose inflorescence", back: "Main axis continues to grow; flowers are lateral in acropetal succession." },
          { front: "Cymose inflorescence", back: "Main axis ends in a flower (limited growth); flowers are in basipetal order." },
          { front: "Epigynous flower", back: "The thalamus fuses with the ovary wall, so the ovary is inferior: guava, cucumber, ray florets of sunflower." },
          { front: "Twisted aestivation", back: "Each margin overlaps the next in one regular direction: China rose, lady's finger, cotton." },
          { front: "Vexillary aestivation", back: "Standard overlaps two wings, which overlap two keel petals: pea and bean." },
          { front: "Diadelphous stamens", back: "Stamens united in two bundles, as in pea (9 + 1)." },
          { front: "Parietal placentation", back: "Ovules on the inner ovary wall; the ovary becomes two-chambered by a false septum in mustard and Argemone." },
          { front: "Parthenocarpic fruit", back: "A fruit formed without fertilisation of the ovary." },
          { front: "Coleoptile and coleorhiza", back: "Sheaths covering the plumule and the radicle respectively in a monocot (maize) embryo." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In twisted aestivation:",
            options: ["margins of sepals or petals only touch", "one margin overlaps the next in a regular direction", "margins overlap in no fixed direction", "the largest petal covers two wings"],
            answer: 1,
            explain: "Twisted aestivation (China rose, cotton) has regular overlap in one direction. Touching margins is valvate; irregular overlap is imbricate; the last is vexillary.",
          },
          {
            kind: "mcq",
            q: "Flowers of canna are:",
            options: ["actinomorphic", "zygomorphic", "asymmetric", "radially symmetric and trimerous"],
            answer: 2,
            explain: "Canna flowers cannot be divided into two similar halves by any vertical plane, so they are asymmetric (irregular).",
          },
          {
            kind: "multi",
            q: "Select all examples of hypogynous flowers.",
            options: ["Mustard", "China rose", "Brinjal", "Guava", "Peach"],
            answers: [0, 1, 2],
            explain: "Mustard, China rose and brinjal have a superior ovary. Guava is epigynous; peach is perigynous.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Polyadelphous stamens are found in:",
            options: ["China rose", "pea", "citrus", "brinjal"],
            answer: 2,
            explain: "Citrus has stamens in more than two bundles. China rose is monoadelphous, pea diadelphous, brinjal epipetalous.",
          },
          {
            kind: "mcq",
            q: "The edible part of a mango is the:",
            options: ["epicarp", "fleshy mesocarp", "stony endocarp", "endosperm"],
            answer: 1,
            explain: "Mango is a drupe whose fleshy mesocarp is eaten. The endocarp is the hard stone.",
          },
          {
            kind: "truefalse",
            q: "Castor seed is endospermous, while bean and gram seeds are non-endospermous.",
            answer: true,
            explain: "In bean, gram and pea the endosperm is used up and food is stored in the cotyledons; castor keeps its endosperm.",
          },
          {
            kind: "mcq",
            q: "Free central placentation is seen in:",
            options: ["Argemone", "Dianthus", "lemon", "marigold"],
            answer: 1,
            explain: "Dianthus and Primrose have ovules on a central axis without septa.",
          },
          {
            kind: "order",
            q: "Arrange the four whorls of a typical flower from outside to inside.",
            items: ["Calyx", "Corolla", "Androecium", "Gynoecium"],
            explain: "Accessory whorls (calyx, corolla) lie outside the reproductive whorls (androecium, then gynoecium at the centre).",
          },
        ],
      },

      /* ---------------- Lesson 3: families and floral formulae ---------------- */
      {
        slug: "c11-floral-formula-families",
        title: "Floral Formula and Three Families",
        summary: "Semi-technical description, floral formula and floral diagram symbols, and the full description of Fabaceae, Solanaceae and Liliaceae with their economic uses.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🫘",
            caption: "Pea, potato and onion belong to three different families. Their flowers, written as short formulae, tell the families apart at a glance.",
          },
          {
            type: "text",
            md: "A **semi-technical description** of a plant follows a fixed order: habit, vegetative characters (root, stem, leaves), then floral characters (inflorescence and flower parts), and finally the **floral diagram** and **floral formula**.\n\nA **floral formula** packs the flower into a line of symbols. A **floral diagram** shows the number of parts, their arrangement and their relation to each other: the dot on top is the position of the **mother axis**, and the whorls are drawn as rings from calyx outside to gynoecium inside.",
          },
          {
            type: "table",
            headers: ["Symbol", "Meaning"],
            rows: [
              ["Br", "bracteate"],
              ["K, C, P", "calyx, corolla, perianth"],
              ["A, G", "androecium, gynoecium"],
              ["⊕ / %", "actinomorphic / zygomorphic"],
              ["⚥ (or ♂ / ♀)", "bisexual (or male / female)"],
              ["G with a line **below**", "superior ovary"],
              ["G with a line **above**", "inferior ovary"],
              ["( ) round a number", "parts united (**cohesion**, fusion within a whorl)"],
              ["a line or arc joining two whorls", "**adhesion** (fusion between whorls), e.g. epipetalous stamens"],
            ],
          },
          {
            type: "text",
            md: "**Fabaceae (pea family).** Earlier called Papilionoideae, a subfamily of **Leguminosae**; distributed all over the world. Trees, shrubs, herbs. **Root** with **root nodules**. **Stem** erect or climber. **Leaves** alternate, pinnately compound or simple, leaf base **pulvinate**, stipulate, reticulate venation. **Inflorescence** racemose. **Flower** bisexual, **zygomorphic**. **Calyx** of five sepals, gamosepalous, imbricate. **Corolla** of five petals, polypetalous, papilionaceous: posterior standard, two lateral wings, two anterior petals forming the keel (enclosing stamens and pistil), **vexillary** aestivation. **Androecium** ten, **diadelphous**, anthers dithecous. **Gynoecium** ovary superior, **monocarpellary**, unilocular with many ovules, single style. **Fruit** legume (pod). **Seed** one to many, **non-endospermic**.",
          },
          {
            type: "formula",
            tex: t`\%\;\text{⚥}\;K_{(5)}\;C_{1+2+(2)}\;A_{(9)+1}\;\underline{G}_{1}`,
            caption: "Fabaceae (pea): zygomorphic, bisexual; 5 united sepals; standard + 2 wings + 2 fused keel petals; 9 fused + 1 free stamen; one carpel, superior ovary.",
          },
          {
            type: "text",
            md: "**Solanaceae (potato family).** Widely distributed in tropics, subtropics and temperate zones. Mostly herbs and shrubs, rarely small trees. **Stem** herbaceous, rarely woody, aerial, erect, cylindrical, branched, solid or hollow, hairy or glabrous; underground stem in potato (*Solanum tuberosum*). **Leaves** alternate, simple, rarely pinnately compound, **exstipulate**, reticulate venation. **Inflorescence** solitary, axillary or cymose as in Solanum. **Flower** bisexual, **actinomorphic**. **Calyx** five sepals, united, **persistent**, valvate. **Corolla** five petals, united, valvate. **Androecium** five stamens, **epipetalous**. **Gynoecium** **bicarpellary, obliquely placed**, syncarpous; ovary superior, bilocular, placenta swollen with many ovules, **axile**. **Fruit** berry or capsule. **Seeds** many, **endospermous**.",
          },
          {
            type: "formula",
            tex: t`\oplus\;\text{⚥}\;K_{(5)}\;\overline{C_{(5)}\;A_{5}}\;\underline{G}_{(2)}`,
            caption: "Solanaceae (brinjal, potato): the bar over C and A shows epipetalous stamens; two fused carpels in a superior ovary.",
          },
          {
            type: "text",
            md: "**Liliaceae (lily family).** A characteristic **monocot** family, distributed worldwide. Perennial herbs with underground **bulbs, corms or rhizomes**. **Leaves** mostly basal, alternate, linear, exstipulate, **parallel venation**. **Inflorescence** solitary or cymose, often umbellate clusters. **Flower** bisexual, actinomorphic. **Perianth** of six **tepals** (3 + 3), often united into a tube, valvate. **Androecium** six stamens (3 + 3), attached to the perianth. **Gynoecium** **tricarpellary**, syncarpous, ovary superior, trilocular with many ovules, **axile** placentation. **Fruit** capsule, rarely berry. **Seed** endospermous.",
          },
          {
            type: "formula",
            tex: t`Br\;\oplus\;\text{⚥}\;\overline{P_{(3+3)}\;A_{3+3}}\;\underline{G}_{(3)}`,
            caption: "Liliaceae (onion, lily): bracteate; six united tepals in two whorls; six epiphyllous stamens; three fused carpels, superior ovary.",
          },
          {
            type: "table",
            headers: ["Family", "Economic importance"],
            rows: [
              ["Fabaceae", "pulses (gram, arhar, sem, moong, soybean); edible oil (soybean, groundnut); dye (Indigofera); fibre (sunhemp); fodder (Sesbania, Trifolium); ornamentals (lupin, sweet pea); medicine (muliathi)"],
              ["Solanaceae", "food (tomato, brinjal, potato); spice (chilli); medicine (belladonna, ashwagandha); fumigatory (tobacco); ornamental (petunia)"],
              ["Liliaceae", "ornamentals (tulip, Gloriosa); medicine (Aloe); vegetable (Asparagus); colchicine from Colchicum autumnale"],
            ],
          },
          {
            type: "example",
            title: "Decode a formula",
            problem: t`Which family does this formula belong to, and what does each part tell you? $\oplus\;\text{⚥}\;K_{(5)}\;\overline{C_{(5)}\;A_{5}}\;\underline{G}_{(2)}$`,
            steps: [
              "⊕ and ⚥: the flower is actinomorphic and bisexual.",
              "K(5) and C(5): five united sepals and five united petals (gamosepalous, gamopetalous).",
              "The bar over C and A: the five stamens are fused to the petals (epipetalous).",
              "G(2) with a line below: two fused carpels in a superior ovary. This combination of five epipetalous stamens and a bicarpellary superior ovary is Solanaceae.",
            ],
            answer: "Solanaceae (for example brinjal, tomato, potato, chilli).",
          },
          {
            type: "mistake",
            wrong: "In the Fabaceae formula, A(9)+1 means nine stamens are joined to the petals and one is free.",
            right: "A(9)+1 means nine stamens are united by their filaments into one bundle and one stamen is free: the diadelphous condition. It says nothing about fusion with petals.",
            why: "Brackets show cohesion within the same whorl. Fusion with another whorl (adhesion) is shown by a line joining the two whorls, as in Solanaceae. Mixing the two symbols is a common source of wrong options.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which family does each feature belong to?",
              groups: ["Fabaceae", "Solanaceae", "Liliaceae"],
              items: [
                { text: "Diadelphous stamens", group: 0, hint: "Nine fused plus one free: the pea family." },
                { text: "Persistent calyx", group: 1, hint: "Look at the green cap on a brinjal." },
                { text: "Six tepals in two whorls", group: 2, hint: "Calyx and corolla are not distinct: a monocot feature." },
                { text: "Ovary bicarpellary, obliquely placed", group: 1, hint: "A classic character of the potato family." },
                { text: "Pulvinate leaf base", group: 0, hint: "A swollen leaf base in legumes." },
                { text: "Tricarpellary trilocular ovary", group: 2, hint: "Parts in threes." },
                { text: "Root nodules", group: 0, hint: "Nitrogen-fixing bacteria live in them." },
                { text: "Underground bulbs and parallel venation", group: 2, hint: "Onion and garlic." },
              ],
              explain: "Think pea (zygomorphic, 9+1 stamens, one carpel), brinjal (epipetalous five, two oblique carpels, persistent calyx) and lily (3+3 tepals and stamens, three carpels).",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Colchicine is obtained from a plant of the family:",
                options: ["Fabaceae", "Solanaceae", "Liliaceae", "Brassicaceae"],
                answer: 2,
                explain: "Colchicine comes from Colchicum autumnale, a member of Liliaceae.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "For a 3 or 5 mark 'describe the family' answer, follow the fixed order (vegetative characters, inflorescence, flower, each whorl, fruit, seed), then write the formula and draw the floral diagram with the mother axis marked. Marks are lost for drawing the formula without the line under G or the bar showing epipetalous stamens.",
          },
          {
            type: "keypoints",
            items: [
              "Brackets = cohesion (fusion within a whorl); a joining line = adhesion (fusion between whorls); line below G = superior ovary.",
              "Fabaceae: % ⚥ K(5) C1+2+(2) A(9)+1 G1 (superior); legume fruit; non-endospermic seeds.",
              "Solanaceae: ⊕ ⚥ K(5) C(5) epipetalous A5, G(2) superior, oblique ovary, swollen axile placenta; berry or capsule.",
              "Liliaceae: Br ⊕ ⚥ P(3+3) A3+3 G(3) superior; capsule; endospermous seeds.",
            ],
          },
        ],
        flashcards: [
          { front: "Floral formula of Fabaceae", back: "% ⚥ K(5) C1+2+(2) A(9)+1 G1, with a superior ovary." },
          { front: "Floral formula of Solanaceae", back: "⊕ ⚥ K(5) C(5) A5 (epipetalous) G(2), with a superior ovary." },
          { front: "Floral formula of Liliaceae", back: "Br ⊕ ⚥ P(3+3) A3+3 G(3), with a superior ovary." },
          { front: "What is the dot at the top of a floral diagram?", back: "The position of the mother axis." },
          { front: "Fruit types of the three families", back: "Fabaceae: legume. Solanaceae: berry or capsule. Liliaceae: capsule, rarely berry." },
          { front: "Fabaceae: Indigofera and sunhemp", back: "Indigofera gives dye; sunhemp gives fibre." },
          { front: "Solanaceae medicines", back: "Belladonna and ashwagandha. Tobacco is fumigatory." },
          { front: "Aloe and Asparagus", back: "Liliaceae: Aloe is medicinal, Asparagus is a vegetable." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In Fabaceae, the gynoecium is:",
            options: ["bicarpellary, syncarpous, superior", "monocarpellary, unilocular, superior", "tricarpellary, trilocular, superior", "monocarpellary, inferior"],
            answer: 1,
            explain: "Fabaceae has a single carpel in a superior, one-chambered ovary with many ovules; the fruit is a legume.",
          },
          {
            kind: "mcq",
            q: "A persistent calyx and an obliquely placed bicarpellary ovary are characters of:",
            options: ["Liliaceae", "Fabaceae", "Solanaceae", "Malvaceae"],
            answer: 2,
            explain: "Both are classic Solanaceae features (brinjal, tomato).",
          },
          {
            kind: "numeric",
            q: "How many stamens are present in a typical flower of the Fabaceae family?",
            answer: 10,
            explain: "Ten stamens in the diadelphous condition: nine united and one free.",
          },
          {
            kind: "mcq",
            q: "In a floral formula, the ovary shown as G with a line above it means:",
            options: ["superior ovary", "inferior ovary", "half-inferior ovary", "free carpels"],
            answer: 1,
            explain: "A line above G marks an inferior ovary; a line below marks a superior ovary.",
          },
          {
            kind: "multi",
            q: "Select all Liliaceae characters.",
            options: ["Parallel venation", "Tricarpellary syncarpous ovary", "Stipulate leaves", "Perianth of six tepals", "Non-endospermous seeds"],
            answers: [0, 1, 3],
            explain: "Liliaceae leaves are exstipulate and the seeds are endospermous. Parallel venation, a tricarpellary ovary and six tepals are correct.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which pair is a correct match of plant and family?",
            options: ["Sesbania – Solanaceae", "Petunia – Liliaceae", "Muliathi – Fabaceae", "Tulip – Fabaceae"],
            answer: 2,
            explain: "Muliathi is a medicinal legume (Fabaceae). Sesbania is Fabaceae, petunia Solanaceae and tulip Liliaceae.",
          },
          {
            kind: "truefalse",
            q: "In Solanaceae, the placenta is swollen and placentation is axile.",
            answer: true,
            explain: "The bilocular superior ovary has a swollen placenta bearing many ovules on the central axis.",
          },
          {
            kind: "mcq",
            q: "The inflorescence of Fabaceae is:",
            options: ["racemose", "cymose", "solitary only", "umbellate clusters"],
            answer: 0,
            explain: "Fabaceae has racemose inflorescence. Solanaceae is solitary, axillary or cymose; Liliaceae is solitary or cymose, often in umbellate clusters.",
          },
        ],
      },

      /* ---------------- Lesson 4: Exam edge ---------------- */
      {
        slug: "c11-morphology-exam-edge",
        title: "Exam edge: Morphology of Flowering Plants",
        summary: "What NEET and KCET ask from morphology: example-based matching, floral formula decoding, family characters and assertion–reason items.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Morphology gives about **2–3 NEET questions** a year and regular KCET marks. Almost every question is a **match the example** item: an aestivation, a placentation, an ovary position or a modification paired with plants. A few lines of NCERT examples, learnt exactly, score these marks.",
          },
          {
            type: "table",
            headers: ["What is asked", "Learn exactly"],
            rows: [
              ["Modifications", "carrot/turnip/radish/sweet potato; potato/ginger/Colocasia; stem tendrils vs pea tendrils; thorns vs spines; Opuntia, Euphorbia, Australian Acacia"],
              ["Phyllotaxy, venation", "Alstonia whorled; guava and Calotropis opposite; neem pinnate, silk cotton palmate"],
              ["Flower", "ovary position triads; aestivation examples; mono/di/polyadelphous; epipetalous vs epiphyllous; placentation set"],
              ["Fruit and seed", "drupe layers; aleurone layer, scutellum, coleoptile, coleorhiza; endospermic vs non-endospermic seeds"],
              ["Families", "the three formulae and their economic plants"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcut: the 'number + fusion' scan",
            md: "To identify a family from a formula: count the carpels first (1 = Fabaceae, 2 oblique = Solanaceae, 3 = Liliaceae), then confirm with stamens (9+1, epipetalous 5, or 3+3 with P). This is safe for the three NCERT families; other families (Brassicaceae, Malvaceae) can share some features, so check one more whorl if a fourth family appears in the options.",
          },
          {
            type: "example",
            title: "NEET level: odd one out",
            problem: "Which of these does NOT have a superior ovary: mustard, brinjal, cucumber, China rose?",
            steps: [
              "Mustard, brinjal and China rose are hypogynous: the ovary is above the other parts, so it is superior.",
              "Cucumber is epigynous: the thalamus fuses with the ovary wall and the other parts arise above it.",
            ],
            answer: "Cucumber (inferior ovary).",
          },
          {
            type: "example",
            title: "NEET level: assertion–reason",
            problem: "Assertion (A): The tendril of a grapevine is a modified stem. Reason (R): It develops from an axillary bud.",
            steps: [
              "A is true: grapevine tendrils are stem tendrils.",
              "R is true: they arise from axillary buds.",
              "R explains A, because origin from an axillary bud is exactly what makes a structure a stem.",
            ],
            answer: "Both A and R are true and R is the correct explanation of A.",
          },
          {
            type: "example",
            title: "NCERT lines that become questions",
            problem: "Turn these NCERT-style facts into question pairs: (i) the bud is in the axil of the petiole of a compound leaf; (ii) in maize, the aleurone layer separates endosperm and embryo; (iii) Australian Acacia petioles are green and leaf-like.",
            steps: [
              "(i) becomes 'How do you distinguish a compound leaf from a twig with simple leaves?' Answer: the axillary bud is at the base of the petiole, never at the leaflets.",
              "(ii) becomes 'Name the proteinaceous layer of the maize endosperm.' Answer: the aleurone layer.",
              "(iii) becomes 'Which plant shows the petiole doing photosynthesis?' Answer: Australian Acacia (a phyllode).",
            ],
            answer: "Each one-line NCERT fact gives a direct one-mark MCQ; learn the example names with the facts.",
          },
          {
            type: "example",
            title: "Harder: a statement set",
            problem: "How many statements are correct? (a) Coconut is a drupe with a fibrous mesocarp. (b) Pea has marginal placentation. (c) Lily stamens are epipetalous. (d) Gulmohur shows imbricate aestivation. (e) Sunflower has axile placentation.",
            steps: [
              "(a) Correct: coconut is a drupe and its mesocarp is fibrous.",
              "(b) Correct: pea has marginal placentation.",
              "(c) Wrong: lily stamens are attached to the perianth, so they are epiphyllous.",
              "(d) Correct: gulmohur and Cassia have imbricate aestivation.",
              "(e) Wrong: sunflower (and marigold) has basal placentation.",
            ],
            answer: "Three statements (a, b and d) are correct.",
          },
          {
            type: "mistake",
            wrong: "Imbricate aestivation is found in pea because its petals overlap.",
            right: "Pea and bean have vexillary (papilionaceous) aestivation; imbricate examples are Cassia and gulmohur.",
            why: "Both have overlapping petals, but vexillary is a special fixed pattern (standard over wings over keel). NEET puts both in the options.",
          },
          {
            type: "mistake",
            wrong: "Free central and axile placentation are the same because both have a central axis.",
            right: "Axile placentation has septa dividing a multilocular ovary (tomato, lemon); free central has no septa (Dianthus, Primrose).",
            why: "The presence or absence of septa is the only difference, and it is exactly what the question tests.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which flower part does the drupe of coconut give us to eat?",
              emoji: "🥥",
              options: ["Fleshy mesocarp", "Endosperm", "Epicarp", "Cotyledons"],
              answer: 1,
              trap: 0,
              explain: "In mango we eat the mesocarp, but in coconut the mesocarp is fibrous (coir). The edible white kernel and coconut water are the endosperm.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Assertion: Opuntia stems are green and flattened. Reason: Leaves of Opuntia are modified into spines.",
                options: ["Both true; R explains A", "Both true; R does not explain A", "A true, R false", "A false, R true"],
                answer: 0,
                explain: "Because the leaves are reduced to spines to save water, the flattened green stem (phylloclade) takes over photosynthesis.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Learn the NCERT example lists exactly: most morphology MCQs are matching items.",
              "Identify organs by origin: axillary bud = stem; nodes and buds underground = stem.",
              "Separate look-alike terms: imbricate vs vexillary, axile vs free central, epipetalous vs epiphyllous.",
              "Family by carpels: 1 (Fabaceae), 2 oblique (Solanaceae), 3 (Liliaceae).",
            ],
          },
        ],
        flashcards: [
          { front: "Three examples of epigynous flowers", back: "Guava, cucumber, ray florets of sunflower." },
          { front: "Three examples of perigynous flowers", back: "Plum, rose, peach." },
          { front: "Valvate aestivation example", back: "Calotropis." },
          { front: "Epiphyllous stamens", back: "Stamens attached to the perianth, as in lily." },
          { front: "Basal placentation", back: "Sunflower and marigold." },
          { front: "Phyllode", back: "A green flattened petiole doing the work of the leaf, as in Australian Acacia." },
          { front: "Monocot seed with no endosperm", back: "Orchids." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Match the plant with the aestivation: (i) Calotropis (ii) cotton (iii) Cassia (iv) bean.",
            options: [
              "valvate, twisted, imbricate, vexillary",
              "twisted, valvate, vexillary, imbricate",
              "valvate, imbricate, twisted, vexillary",
              "imbricate, twisted, valvate, vexillary",
            ],
            answer: 0,
            explain: "Calotropis valvate, cotton twisted (like China rose and lady's finger), Cassia imbricate, bean vexillary.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Assertion: Sweet potato is a modified root. Reason: It stores food and grows underground.",
            options: ["Both true; R explains A", "Both true; R does not explain A", "A true, R false", "A false, R true"],
            answer: 1,
            explain: "Both statements are true, but storage and underground position do not make it a root (potato does the same and is a stem). It is a root because it is adventitious and has no nodes or buds.",
            difficulty: 3,
            hint: "Would the reason also apply to potato?",
          },
          {
            kind: "multi",
            q: "Select all correct pairs.",
            options: ["Stilt roots – maize", "Offset – Eichhornia", "Corm – ginger", "Runner – strawberry", "Pneumatophores – banyan"],
            answers: [0, 1, 3],
            explain: "Ginger is a rhizome (Colocasia and zaminkand are corms). Pneumatophores occur in Rhizophora; banyan has prop roots.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many of these have axile placentation: China rose, tomato, lemon, mustard, pea, Dianthus?",
            answer: 3,
            explain: "China rose, tomato and lemon are axile. Mustard is parietal, pea marginal, Dianthus free central.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The scutellum in a maize grain is:",
            options: ["the seed coat fused with fruit wall", "the single large shield-shaped cotyledon", "the sheath over the plumule", "the protein-rich layer of the endosperm"],
            answer: 1,
            explain: "Scutellum is the cotyledon. The coleoptile covers the plumule; the aleurone layer is the protein layer.",
          },
          {
            kind: "mcq",
            q: "A flower has the formula Br ⊕ ⚥ P(3+3) A3+3 G(3) with a superior ovary. Which statement is wrong?",
            options: ["It is trimerous", "Calyx and corolla are not distinct", "Its fruit is usually a legume", "The ovary is trilocular with axile placentation"],
            answer: 2,
            explain: "This is Liliaceae, whose fruit is a capsule (rarely a berry). A legume is the fruit of Fabaceae.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "In the Solanaceae formula, how many carpels form the gynoecium?",
            answer: 2,
            explain: "Bicarpellary, syncarpous, obliquely placed ovary: G(2).",
          },
          {
            kind: "mcq",
            q: "Which statement about racemose inflorescence is correct?",
            options: ["The main axis terminates in a flower", "Flowers are in basipetal order", "Flowers are in acropetal order and the axis keeps growing", "It is found only in monocots"],
            answer: 2,
            explain: "In racemose inflorescence the axis keeps growing and flowers are lateral, oldest at the base (acropetal). The other options describe cymose inflorescence or are false.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Morphology of Flowering Plants": "c11-morphology-of-flowering-plants",
};
