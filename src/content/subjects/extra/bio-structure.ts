import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "biology-senior";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

export const topics: Topic[] = [
  /* ------------------------------------------------------------ */
  /* Morphology of Flowering Plants                                */
  /* ------------------------------------------------------------ */
  {
    slug: "morphology-of-flowering-plants",
    title: "Morphology of Flowering Plants",
    icon: "🌺",
    description: "Root, stem, leaf, flower, fruit and seed: their forms, modifications and the floral formulas of Fabaceae, Solanaceae and Liliaceae.",
    lessons: [
      {
        slug: "root-stem-and-leaf",
        title: "Root, Stem and Leaf",
        summary: "Types and regions of roots, stem modifications, venation, compound leaves and phyllotaxy.",
        minutes: 18,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🌳", caption: "A banyan tree in a village square: prop roots hanging from its branches hold up a huge canopy." },
          {
            type: "text",
            md: "**Morphology** is the study of the external form of an organism. Angiosperms vary hugely, from duckweed to the banyan, yet every one of them has the same basic plan: a **root system** underground and a **shoot system** (stem, leaves, flowers, fruits) above it. The NCERT unit *Structural Organisation in Plants and Animals* starts here, because you cannot read anatomy until you know the outside first.",
          },
          { type: "heading", text: "The root" },
          {
            type: "table",
            headers: ["Root system", "Origin", "Example"],
            rows: [
              ["Tap root", "Primary root from the radicle grows on; it bears lateral roots", "Mustard, gram (most dicots)"],
              ["Fibrous root", "Primary root is short-lived; many roots arise from the base of the stem", "Wheat, rice (monocots)"],
              ["Adventitious root", "Roots arise from any part other than the radicle", "Grass, Monstera, banyan"],
            ],
          },
          {
            type: "list",
            items: [
              "**Root cap**: a thimble-like cap that protects the tender apex as it pushes through soil.",
              "**Region of meristematic activity**: small, thin-walled cells with dense cytoplasm that divide repeatedly.",
              "**Region of elongation**: cells lengthen and enlarge, pushing the root deeper.",
              "**Region of maturation**: cells differentiate; some epidermal cells form **root hairs** that absorb water and minerals.",
            ],
          },
          {
            type: "table",
            headers: ["Root modification", "Function", "Example"],
            rows: [
              ["Storage tap root", "Food storage", "Carrot, turnip"],
              ["Storage adventitious root", "Food storage", "Sweet potato"],
              ["Prop roots", "Support from branches", "Banyan"],
              ["Stilt roots", "Support from lower nodes", "Maize, sugarcane"],
              ["Pneumatophores", "Grow upward to get oxygen in swampy soil", "Rhizophora (Sundarbans mangroves)"],
            ],
          },
          { type: "heading", text: "The stem" },
          {
            type: "text",
            md: "The stem develops from the **plumule**. It bears **nodes** (where leaves arise) and **internodes** (the portions between nodes). Many stems are modified:\n\n- **Underground food storage**: potato (tuber), ginger and turmeric (rhizome), zaminkand and Colocasia (corm), onion (bulb).\n- **Stem tendrils** from axillary buds help weak stems climb: cucumber, pumpkin, watermelon, grapevine.\n- **Thorns** (modified axillary buds) protect: Citrus, Bougainvillea.\n- **Flattened or fleshy green stems** photosynthesise in dry places: Opuntia (flattened), Euphorbia (fleshy cylindrical).\n- **Vegetative spread**: runners in grass and strawberry, stolons in mint and jasmine, offsets in Pistia and Eichhornia (water hyacinth), suckers in banana, pineapple and Chrysanthemum.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Classic trap: is it a root or a stem?",
            md: "Potato is a **stem** (it has nodes, the eyes, with buds) while sweet potato is a **root** (no nodes or buds). Thorns of Citrus are modified **stems** (axillary buds), but spines of cacti are modified **leaves**. Tendrils of pea are leaves; tendrils of cucumber are stems.",
          },
          { type: "heading", text: "The leaf" },
          {
            type: "text",
            md: "A typical leaf has a **leaf base** (sometimes with two small **stipules**; swollen into a **pulvinus** in legumes), a **petiole** and a **lamina**. **Venation** is reticulate (a network) in most dicots and **parallel** in most monocots. A leaf is **simple** when its lamina is entire or incised without reaching the midrib, and **compound** when the incisions reach the midrib and split it into leaflets: **pinnately compound** in neem (leaflets on a common axis, the rachis) and **palmately compound** in silk cotton (leaflets attached at one point, the tip of the petiole). A bud is found in the axil of the petiole of a compound leaf, never in the axil of a leaflet.",
          },
          {
            type: "table",
            headers: ["Phyllotaxy", "Leaves per node", "Example"],
            rows: [
              ["Alternate", "One", "China rose, mustard, sunflower"],
              ["Opposite", "A pair, facing each other", "Calotropis, guava"],
              ["Whorled", "More than two", "Alstonia"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A student finds buds in the axils of each leaf-like structure of a plant. These structures must be:",
                options: ["Leaflets of a compound leaf", "Simple leaves", "Phylloclades", "Stipules"],
                answer: 1,
                explain: "Axillary buds occur in the axil of a leaf, not of a leaflet. So each structure is a whole (simple) leaf.",
              },
            ],
          },
          {
            type: "text",
            md: "**Worked example: name the organ.** A green, flattened, leaf-like structure of Opuntia bears nodes with buds, and spines at those nodes. Nodes mean it is a **stem**, so it is a phylloclade; its spines, which sit where leaves should be, are modified **leaves**.\n\n**Leaf modifications**: tendrils (pea), spines (cacti), fleshy storage leaves (onion, garlic), **phyllodes** where the petiole becomes flat and green (Australian Acacia), and insect-trapping leaves (pitcher plant, Venus fly trap).",
          },
          {
            type: "keypoints",
            items: [
              "Tap root (dicots) from the radicle; fibrous (monocots); adventitious from other parts.",
              "Root regions from the tip: root cap, meristematic, elongation, maturation (root hairs).",
              "Potato, ginger, onion and Colocasia are underground stems; carrot and sweet potato are roots.",
              "Reticulate venation in dicots, parallel in monocots; neem pinnate, silk cotton palmate.",
              "Phyllotaxy: alternate (china rose), opposite (guava), whorled (Alstonia).",
            ],
          },
        ],
        flashcards: [
          { front: "Pneumatophores", back: "Upward-growing roots of mangroves like Rhizophora that take in oxygen in swampy soil." },
          { front: "Stilt roots", back: "Supporting roots from lower nodes of the stem, as in maize and sugarcane." },
          { front: "Phylloclade", back: "A flattened green photosynthetic stem, as in Opuntia." },
          { front: "Phyllode", back: "A flat green petiole that does the work of a lamina, as in Australian Acacia." },
          { front: "Whorled phyllotaxy", back: "More than two leaves at a node, as in Alstonia." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a modified stem?",
            options: ["Sweet potato", "Carrot", "Ginger", "Turnip"],
            answer: 2,
            explain: "Ginger is a rhizome with nodes, internodes and buds, so it is a stem. The other three are storage roots.",
          },
          {
            kind: "truefalse",
            q: "Tendrils of pea and tendrils of cucumber are homologous structures.",
            answer: false,
            explain: "Pea tendrils are modified leaves (leaflets); cucumber tendrils are modified stems (axillary buds). They are analogous, not homologous.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Root hairs arise from the region of ___ of the root.",
            answer: ["maturation"],
            explain: "Cells of the region of maturation differentiate, and some epidermal cells grow out as root hairs.",
          },
          {
            kind: "order",
            q: "Arrange the regions of a root from the tip upwards.",
            items: ["Root cap", "Region of meristematic activity", "Region of elongation", "Region of maturation"],
            explain: "The cap protects the dividing meristem; behind it cells elongate, then mature.",
          },
          {
            kind: "mcq",
            q: "Offsets are a means of vegetative spread in:",
            options: ["Mint", "Eichhornia", "Banana", "Grass"],
            answer: 1,
            explain: "Offsets (one internode long, with a rosette of leaves) occur in aquatic plants like Pistia and Eichhornia. Mint has stolons, banana suckers, grass runners.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Opposite phyllotaxy is seen in:",
            options: ["Mustard", "Alstonia", "Guava", "Sunflower"],
            answer: 2,
            explain: "Guava and Calotropis have a pair of leaves at each node. Mustard and sunflower are alternate; Alstonia is whorled.",
          },
        ],
      },
      {
        slug: "flower-and-inflorescence",
        title: "Inflorescence and the Flower",
        summary: "Racemose and cymose inflorescences, symmetry, ovary position, aestivation, androecium and placentation.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🌸", caption: "A china rose (hibiscus) from a Chennai garden: twisted petals, a staminal tube and an axile ovary." },
          {
            type: "text",
            md: "The **flower** is a modified shoot built for sexual reproduction. Its arrangement on the floral axis is the **inflorescence**. If the main axis keeps growing and flowers form laterally in **acropetal** succession (older below, younger above), it is **racemose**. If the main axis ends in a flower so growth is limited and flowers form in **basipetal** order, it is **cymose**.",
          },
          { type: "heading", text: "Parts of a flower" },
          {
            type: "list",
            items: [
              "**Calyx** (sepals) and **corolla** (petals) are accessory whorls. When they cannot be told apart (lily) they are called **perianth** (tepals).",
              "**Androecium**: stamens, each with a filament and anther. Sterile stamens are **staminodes**.",
              "**Gynoecium**: carpels, each with stigma, style and ovary. Free carpels = **apocarpous** (lotus, rose); fused = **syncarpous** (mustard, tomato).",
              "**Bracts** are reduced leaves at the base of the pedicel; flowers with them are bracteate.",
            ],
          },
          {
            type: "table",
            headers: ["Feature", "Type", "Example"],
            rows: [
              ["Symmetry", "Actinomorphic (radial): any radial plane divides it into two equal halves", "Mustard, datura, chilli"],
              ["Symmetry", "Zygomorphic: only one vertical plane gives equal halves", "Pea, gulmohur, bean, Cassia"],
              ["Symmetry", "Asymmetric: no plane works", "Canna"],
              ["Ovary position", "Hypogynous: ovary superior, other parts below it", "Mustard, china rose, brinjal"],
              ["Ovary position", "Perigynous: ovary half-inferior, parts at the rim of a cup-shaped thalamus", "Plum, rose, peach"],
              ["Ovary position", "Epigynous: thalamus fused with ovary wall, ovary inferior", "Guava, cucumber, ray florets of sunflower"],
            ],
          },
          { type: "heading", text: "Aestivation: how petals sit in the bud" },
          {
            type: "table",
            headers: ["Aestivation", "Arrangement", "Example"],
            rows: [
              ["Valvate", "Margins just touch, no overlap", "Calotropis"],
              ["Twisted", "Each petal overlaps the next one regularly", "China rose, lady's finger, cotton"],
              ["Imbricate", "Overlap with no fixed direction", "Cassia, gulmohur"],
              ["Vexillary (papilionaceous)", "Large standard covers two wings, which cover two fused keel petals", "Pea, bean"],
            ],
          },
          {
            type: "text",
            md: "**Androecium terms**: stamens attached to petals are **epipetalous** (brinjal); attached to the perianth they are **epiphyllous** (lily). Stamens fused by filaments into one bundle are **monoadelphous** (china rose), two bundles **diadelphous** (pea), more than two **polyadelphous** (Citrus).",
          },
          { type: "heading", text: "Placentation" },
          {
            type: "table",
            headers: ["Placentation", "Where ovules sit", "Example"],
            rows: [
              ["Marginal", "Along a ridge on the ventral suture of a one-chambered ovary", "Pea"],
              ["Axile", "On a central axis of a multilocular ovary", "China rose, tomato, lemon"],
              ["Parietal", "On the inner wall; ovary one-chambered, may become two by a false septum", "Mustard, Argemone"],
              ["Free central", "On a central axis with no septa", "Dianthus, Primrose"],
              ["Basal", "One ovule at the base of the ovary", "Sunflower, marigold"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A flower has a superior, two-chambered ovary with a false septum (replum) and ovules on the wall. The placentation is:",
                options: ["Axile", "Parietal", "Free central", "Marginal"],
                answer: 1,
                explain: "Ovules on the ovary wall with a false septum is parietal placentation, as in mustard.",
              },
            ],
          },
          { type: "heading", text: "Worked comparison: china rose vs pea" },
          {
            type: "table",
            headers: ["Character", "China rose (Hibiscus)", "Pea (Pisum)"],
            rows: [
              ["Symmetry", "Actinomorphic", "Zygomorphic"],
              ["Aestivation of corolla", "Twisted", "Vexillary"],
              ["Stamens", "Monoadelphous", "Diadelphous (9)+1"],
              ["Ovary", "Superior, pentacarpellary, syncarpous", "Superior, monocarpellary"],
              ["Placentation", "Axile", "Marginal"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Mix-ups examiners love",
            md: "Gulmohur and Cassia have **imbricate** aestivation even though they are legumes; pea and bean are **vexillary**. And sunflower ray florets are epigynous while sunflower placentation is **basal**. Learn the example list for each term, not just the definition.",
          },
          {
            type: "keypoints",
            items: [
              "Racemose: axis keeps growing, acropetal; cymose: axis ends in a flower, basipetal.",
              "Hypogynous = superior ovary; perigynous = half-inferior; epigynous = inferior.",
              "Aestivation: valvate (Calotropis), twisted (china rose), imbricate (Cassia), vexillary (pea).",
              "Monoadelphous china rose, diadelphous pea, polyadelphous Citrus; epipetalous brinjal, epiphyllous lily.",
              "Placentation: marginal pea, axile tomato, parietal mustard, free central Dianthus, basal sunflower.",
            ],
          },
        ],
        flashcards: [
          { front: "Acropetal succession", back: "Older flowers at the base, younger towards the tip: the racemose pattern." },
          { front: "Perigynous flower", back: "Ovary half-inferior with other whorls on the rim of the thalamus, as in rose, plum and peach." },
          { front: "Vexillary aestivation", back: "Standard (vexillum) covers 2 wings which cover 2 fused keel petals, as in pea and bean." },
          { front: "Epiphyllous stamens", back: "Stamens attached to the perianth, as in lily." },
          { front: "Free central placentation", back: "Ovules on a central axis with no septa, as in Dianthus and Primrose." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which flower is asymmetric?",
            options: ["Datura", "Pea", "Canna", "Mustard"],
            answer: 2,
            explain: "Canna cannot be divided into two equal halves by any vertical plane.",
          },
          {
            kind: "mcq",
            q: "Twisted aestivation is found in:",
            options: ["Calotropis", "Lady's finger", "Cassia", "Bean"],
            answer: 1,
            explain: "Twisted: china rose, lady's finger, cotton. Calotropis is valvate, Cassia imbricate, bean vexillary.",
          },
          {
            kind: "fill",
            q: "Stamens united by their filaments into two bundles are called ___.",
            answer: ["diadelphous"],
            explain: "Diadelphous, as in pea, where nine stamens are fused and one is free.",
          },
          {
            kind: "truefalse",
            q: "In an epigynous flower the ovary is said to be inferior.",
            answer: true,
            explain: "The thalamus grows round and fuses with the ovary, and the other whorls arise above it.",
          },
          {
            kind: "mcq",
            q: "Axile placentation is seen in:",
            options: ["Tomato", "Sunflower", "Argemone", "Pea"],
            answer: 0,
            explain: "Tomato, lemon and china rose show axile placentation. Sunflower is basal, Argemone parietal, pea marginal.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Perigynous flowers are found in:",
            options: ["Guava", "Brinjal", "Peach", "Cucumber"],
            answer: 2,
            explain: "Plum, rose and peach are perigynous. Guava and cucumber are epigynous; brinjal is hypogynous.",
          },
        ],
      },
      {
        slug: "fruit-seed-and-families",
        title: "Fruit, Seed and Three Key Families",
        summary: "Drupes, dicot and monocot seeds, floral formulas, and Fabaceae, Solanaceae and Liliaceae.",
        minutes: 20,
        xp: 50,
        blocks: [
          { type: "illustration", emoji: "🥭", caption: "An Alphonso mango from Ratnagiri: thin skin, juicy mesocarp, stony endocarp. A drupe." },
          {
            type: "text",
            md: "After fertilisation the ovary becomes the **fruit** and its wall the **pericarp**, often differentiated into **epicarp**, **mesocarp** and **endocarp**. A fruit formed without fertilisation is **parthenocarpic**. Mango and coconut are **drupes**: they develop from monocarpellary superior ovaries and are one-seeded. In mango the mesocarp is fleshy and edible; in coconut it is **fibrous** (coir).",
          },
          { type: "heading", text: "Dicot seed vs monocot seed" },
          {
            type: "table",
            headers: ["Part", "Dicot seed (gram, bean)", "Monocot seed (maize grain)"],
            rows: [
              ["Seed coat", "Outer testa, inner tegmen; hilum scar and micropyle visible", "Membranous, fused with the fruit wall"],
              ["Cotyledons", "Two, often fleshy with food", "One, shield-shaped, called the scutellum"],
              ["Food store", "Usually in cotyledons", "Bulky endosperm"],
              ["Special layers", "None", "Aleurone layer (protein-rich) separates endosperm from embryo"],
              ["Sheaths", "None", "Plumule in coleoptile, radicle in coleorhiza"],
            ],
          },
          { type: "heading", text: "Floral formula" },
          {
            type: "text",
            md: "A floral formula packs a whole flower into one line: Br = bracteate, K = calyx, C = corolla, P = perianth, A = androecium, G = gynoecium. Brackets mean fusion, a line joining C and A means epipetalous stamens, and a line **above** G means an inferior ovary, a line **below** G a superior ovary. ⊕ is actinomorphic and % zygomorphic; all three families below have bisexual flowers.",
          },
          {
            type: "formula",
            tex: t`\text{Fabaceae: } \%\ K_{(5)}\ C_{1+2+(2)}\ A_{(9)+1}\ \underline{G_1}`,
            caption: "Pea family: standard 1, wings 2, keel 2 fused; nine stamens fused plus one free; monocarpellary superior ovary.",
          },
          {
            type: "formula",
            tex: t`\text{Solanaceae: } \oplus\ K_{(5)}\ \overset{\frown}{C_{(5)}\ A_5}\ \underline{G_{(2)}}`,
            caption: "Potato family: five epipetalous stamens; bicarpellary syncarpous superior ovary.",
          },
          {
            type: "formula",
            tex: t`\text{Liliaceae: } Br\ \oplus\ \overset{\frown}{P_{(3+3)}\ A_{3+3}}\ \underline{G_{(3)}}`,
            caption: "Lily family: six tepals, six epiphyllous stamens, tricarpellary syncarpous superior ovary.",
          },
          {
            type: "table",
            headers: ["Character", "Fabaceae", "Solanaceae", "Liliaceae"],
            rows: [
              ["Class", "Dicot", "Dicot", "Monocot"],
              ["Leaves", "Pinnately compound, pulvinate, stipulate", "Simple, rarely pinnately compound", "Mostly basal, alternate, linear, parallel venation"],
              ["Corolla / perianth", "Papilionaceous, vexillary", "Five united, valvate", "Six tepals (3+3), often united"],
              ["Placentation", "Marginal", "Axile, placenta swollen", "Axile"],
              ["Fruit", "Legume (pod)", "Berry or capsule", "Capsule, rarely berry"],
              ["Seed", "Non-endospermous", "Endospermous", "Endospermous"],
              ["Economic", "Pulses (gram, arhar, moong), soybean, groundnut, indigo dye, sunhemp, muliathi", "Potato, brinjal, tomato, chilli, belladonna, ashwagandha, tobacco, petunia", "Tulip, Gloriosa, Aloe, Asparagus, colchicine (Colchicum)"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Using the floral formula of Fabaceae, how many stamens does a pea flower have?",
                answer: 10,
                explain: "A(9)+1 means nine fused stamens plus one free stamen: 10 in all.",
              },
              {
                kind: "mcq",
                q: "A floral formula shows a line joining C and A. This tells you the stamens are:",
                options: ["Epiphyllous", "Epipetalous", "Diadelphous", "Free"],
                answer: 1,
                explain: "The connecting line shows stamens fused with petals, as in Solanaceae.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap: the position of the bar on G",
            md: "A bar **below** G = superior ovary (all three families here are superior). A bar **above** G = inferior ovary. Also remember that in Liliaceae the stamens are **epiphyllous** (on tepals), not epipetalous, and that Fabaceae seeds lack endosperm while Solanaceae and Liliaceae seeds have it.",
          },
          {
            type: "keypoints",
            items: [
              "Ovary becomes fruit; pericarp = epicarp + mesocarp + endocarp; mango and coconut are drupes.",
              "Dicot seed: testa, tegmen, hilum, two cotyledons. Maize: aleurone, scutellum, coleoptile, coleorhiza.",
              "Fabaceae: % K(5) C1+2+(2) A(9)+1 G1, marginal, legume.",
              "Solanaceae: ⊕ K(5) C(5) A5 epipetalous G(2), axile with swollen placenta.",
              "Liliaceae: Br ⊕ P(3+3) A3+3 G(3), monocot, axile, capsule.",
            ],
          },
        ],
        flashcards: [
          { front: "Drupe", back: "One-seeded fruit from a monocarpellary superior ovary, with a stony endocarp: mango, coconut." },
          { front: "Scutellum", back: "The single shield-shaped cotyledon of a grass embryo such as maize." },
          { front: "Aleurone layer", back: "Protein-rich outer layer of the endosperm in maize, separating it from the embryo." },
          { front: "Coleorhiza", back: "Sheath enclosing the radicle in a monocot embryo." },
          { front: "Fabaceae floral formula", back: "% ⚥ K(5) C1+2+(2) A(9)+1 G1 (superior)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The edible part of mango is the:",
            options: ["Epicarp", "Mesocarp", "Endocarp", "Endosperm"],
            answer: 1,
            explain: "Mango's fleshy mesocarp is eaten; the endocarp is the hard stone.",
          },
          {
            kind: "mcq",
            q: "Which family has bicarpellary, syncarpous ovaries with a swollen placenta?",
            options: ["Fabaceae", "Liliaceae", "Solanaceae", "Brassicaceae"],
            answer: 2,
            explain: "Solanaceae has G(2), superior and bilocular, with a swollen axile placenta bearing many ovules.",
          },
          {
            kind: "fill",
            q: "In maize the plumule is enclosed in a hollow sheath called the ___.",
            answer: ["coleoptile"],
            explain: "The coleoptile protects the plumule; the coleorhiza covers the radicle.",
          },
          {
            kind: "truefalse",
            q: "Seeds of Fabaceae are endospermous.",
            answer: false,
            explain: "Legume seeds are non-endospermous: the endosperm is used up and food is stored in cotyledons.",
          },
          {
            kind: "numeric",
            q: "How many stamens are there in a typical Liliaceae flower?",
            answer: 6,
            explain: "A3+3 means two whorls of three stamens: 6.",
          },
          {
            kind: "mcq",
            q: "Colchicine, used to double chromosome numbers, comes from a member of:",
            options: ["Solanaceae", "Liliaceae", "Fabaceae", "Poaceae"],
            answer: 1,
            explain: "Colchicine is obtained from Colchicum autumnale, a member of Liliaceae.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Anatomy of Flowering Plants                                   */
  /* ------------------------------------------------------------ */
  {
    slug: "anatomy-of-flowering-plants",
    title: "Anatomy of Flowering Plants",
    icon: "🔬",
    description: "Meristems and permanent tissues, tissue systems, internal structure of roots, stems and leaves, and secondary growth.",
    lessons: [
      {
        slug: "plant-tissues",
        title: "Meristematic and Permanent Tissues",
        summary: "Apical, intercalary and lateral meristems; parenchyma, collenchyma, sclerenchyma; xylem and phloem.",
        minutes: 17,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🎋", caption: "Bamboo in Assam can grow tens of centimetres a day, thanks to intercalary meristems at its nodes." },
          {
            type: "text",
            md: "A **tissue** is a group of cells with a common origin that usually perform a common function. Plant tissues are classed by whether their cells can still divide: **meristematic** tissues divide, **permanent** tissues have stopped dividing and taken up a specific job.",
          },
          { type: "heading", text: "Meristems" },
          {
            type: "table",
            headers: ["Meristem", "Location", "Role"],
            rows: [
              ["Apical", "Tips of roots and shoots", "Primary growth: increase in length"],
              ["Intercalary", "Between mature tissues, e.g. at nodes of grasses", "Regrowth of grass after grazing; adds to length"],
              ["Lateral", "Sides of root and shoot of woody plants: vascular cambium, cork cambium", "Secondary growth: increase in girth"],
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Primary vs secondary meristem",
            md: "Apical and intercalary meristems appear early and build the **primary** plant body, so they are primary meristems. Lateral meristems such as fascicular cambium, interfascicular cambium and cork cambium appear later and are called **secondary** meristems.",
          },
          { type: "heading", text: "Simple permanent tissues" },
          {
            type: "table",
            headers: ["Tissue", "Cell wall", "Living?", "Function / example"],
            rows: [
              ["Parenchyma", "Thin, cellulose", "Yes", "Photosynthesis, storage, secretion; forms most of the ground tissue"],
              ["Collenchyma", "Thick at corners (cellulose, hemicellulose, pectin)", "Yes", "Mechanical support to young stems and petioles; hypodermis of dicot stems"],
              ["Sclerenchyma: fibres", "Very thick, lignified, few pits", "No (dead)", "Strength; long and pointed"],
              ["Sclerenchyma: sclereids", "Very thick, lignified, narrow lumen", "No (dead)", "Grittiness of guava, pear, sapota pulp; seed coats of legumes; tea leaves"],
            ],
          },
          { type: "heading", text: "Complex permanent tissues" },
          {
            type: "table",
            headers: ["Tissue", "Elements", "Notes"],
            rows: [
              ["Xylem (water and minerals up)", "Tracheids, vessels, xylem fibres, xylem parenchyma", "Only xylem parenchyma is living. Vessels are a hallmark of angiosperms; gymnosperms lack them."],
              ["Phloem (food transport)", "Sieve tube elements, companion cells, phloem parenchyma, phloem fibres (bast)", "Mature sieve tubes have no nucleus; companion cells keep them working. Phloem fibres are the only dead element."],
            ],
          },
          {
            type: "text",
            md: "The first-formed xylem is **protoxylem**, the later one **metaxylem**. In **stems** the protoxylem lies towards the centre (pith) and metaxylem towards the outside: **endarch**. In **roots** protoxylem is on the outside and metaxylem in the centre: **exarch**.\n\nIn gymnosperms phloem has **albuminous cells and sieve cells** instead of sieve tubes and companion cells. Phloem parenchyma is absent in most monocots. Bast fibres of jute, flax and hemp are commercial phloem fibres.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which element of xylem is living?",
                options: ["Tracheid", "Vessel", "Xylem fibre", "Xylem parenchyma"],
                answer: 3,
                explain: "Xylem parenchyma stores starch, fats and tannins, and conducts radially through rays. The other elements are dead.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board and NEET trap",
            md: "**Endarch = stem, exarch = root.** Students reverse this often. Also: gymnosperms lack **vessels** in xylem and **companion cells and sieve tubes** in phloem. And collenchyma is thickened with pectin and cellulose, not lignin; lignin is the mark of sclerenchyma.",
          },
          {
            type: "keypoints",
            items: [
              "Apical meristem adds length; intercalary regrows grasses; lateral meristems add girth.",
              "Parenchyma thin-walled; collenchyma corner-thickened with pectin; sclerenchyma lignified and dead.",
              "Xylem: tracheids, vessels, fibres, parenchyma (only parenchyma living).",
              "Phloem: sieve tubes, companion cells, parenchyma, fibres (only fibres dead).",
              "Stems endarch, roots exarch; gymnosperms lack vessels and companion cells.",
            ],
          },
        ],
        flashcards: [
          { front: "Intercalary meristem", back: "Meristem between mature tissues, as at grass nodes; lets grass regrow after grazing." },
          { front: "Collenchyma", back: "Living cells thickened at the corners with cellulose, hemicellulose and pectin; support young dicot stems." },
          { front: "Sclereids", back: "Short, very thick-walled dead cells; the grit in guava and pear pulp." },
          { front: "Exarch xylem", back: "Protoxylem towards the periphery, metaxylem towards the centre: seen in roots." },
          { front: "Albuminous cells", back: "The gymnosperm counterpart of companion cells in phloem." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which tissue gives grittiness to guava pulp?",
            options: ["Collenchyma", "Sclereids", "Fibres", "Parenchyma"],
            answer: 1,
            explain: "Sclereids (stone cells) in guava, pear and sapota give the gritty texture.",
          },
          {
            kind: "truefalse",
            q: "Interfascicular cambium is a primary meristem.",
            answer: false,
            explain: "It forms later from parenchyma between bundles, so it is a secondary (lateral) meristem.",
          },
          {
            kind: "fill",
            q: "Xylem in which protoxylem lies towards the pith is called ___ xylem.",
            answer: ["endarch"],
            explain: "Endarch xylem is typical of stems.",
          },
          {
            kind: "mcq",
            q: "Which is absent from gymnosperm phloem?",
            options: ["Sieve cells", "Phloem parenchyma", "Companion cells", "Albuminous cells"],
            answer: 2,
            explain: "Gymnosperms have sieve cells and albuminous cells, not sieve tubes and companion cells.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Lateral meristems are responsible for:",
            options: ["Increase in length", "Regrowth after grazing", "Increase in girth", "Formation of root hairs"],
            answer: 2,
            explain: "Vascular cambium and cork cambium add secondary tissues, increasing girth.",
          },
        ],
      },
      {
        slug: "tissue-systems-root-stem-leaf",
        title: "Tissue Systems and Internal Structure",
        summary: "Epidermal, ground and vascular tissue systems; dicot vs monocot roots, stems and leaves.",
        minutes: 19,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🌾", caption: "On a hot afternoon in Punjab, wheat and rice leaves roll up: bulliform cells at work." },
          {
            type: "text",
            md: "Tissues are grouped into three **tissue systems** by location. The **epidermal** system forms the outer covering (epidermis, cuticle, stomata, trichomes, root hairs). The **ground** system is everything between epidermis and vascular bundles (cortex, pericycle, pith, medullary rays; mesophyll in leaves). The **vascular** system contains xylem and phloem.",
          },
          {
            type: "text",
            md: "**Stomata** regulate transpiration and gas exchange. Each stoma has two **guard cells**: **bean-shaped** in dicots, **dumb-bell shaped** in grasses. Their outer walls are thin and inner walls (towards the pore) thick. Guard cells have chloroplasts. Specialised epidermal cells around them are **subsidiary cells**. Root hairs are unicellular; shoot trichomes are usually multicellular.",
          },
          {
            type: "table",
            headers: ["Vascular bundle", "Arrangement", "Found in"],
            rows: [
              ["Radial", "Xylem and phloem on different radii, alternating", "Roots"],
              ["Conjoint, collateral, open", "Xylem and phloem on the same radius, cambium between", "Dicot stems and leaves"],
              ["Conjoint, collateral, closed", "No cambium", "Monocot stems and leaves"],
            ],
          },
          { type: "heading", text: "Roots" },
          {
            type: "table",
            headers: ["Feature", "Dicot root (sunflower)", "Monocot root (maize)"],
            rows: [
              ["Xylem bundles", "2 to 4 (diarch to tetrarch)", "More than 6 (polyarch)"],
              ["Pith", "Small or inconspicuous", "Large and well developed"],
              ["Secondary growth", "Yes", "No"],
              ["Common to both", "Epiblema with root hairs, parenchymatous cortex, endodermis with Casparian strips of suberin, pericycle, exarch radial bundles", "Same"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Pericycle does double duty",
            md: "Lateral roots and, in dicots, part of the vascular cambium arise from the **pericycle**. The **Casparian strips** of suberin on the endodermis force water to pass through living cells before entering xylem.",
          },
          { type: "heading", text: "Stems" },
          {
            type: "table",
            headers: ["Feature", "Dicot stem (sunflower)", "Monocot stem (maize)"],
            rows: [
              ["Hypodermis", "Collenchyma", "Sclerenchyma"],
              ["Vascular bundles", "In a ring; conjoint, collateral, open, endarch", "Scattered; conjoint, collateral, closed; each with a sclerenchymatous bundle sheath"],
              ["Endodermis", "Present, rich in starch: the starch sheath", "Not distinct"],
              ["Pith and rays", "Large pith, medullary rays present", "No distinct cortex, pith or rays; ground tissue parenchyma"],
              ["Other", "Pericycle as semi-lunar sclerenchyma patches", "Peripheral bundles smaller than central ones; phloem parenchyma absent; water-containing cavities"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A section shows scattered vascular bundles with sclerenchymatous sheaths and water cavities. It is a:",
                options: ["Dicot root", "Monocot root", "Dicot stem", "Monocot stem"],
                answer: 3,
                explain: "Scattered, closed bundles with bundle sheaths and water-containing cavities identify a monocot stem.",
              },
            ],
          },
          { type: "heading", text: "Leaves" },
          {
            type: "table",
            headers: ["Feature", "Dorsiventral (dicot) leaf", "Isobilateral (monocot) leaf"],
            rows: [
              ["Stomata", "More on lower (abaxial) surface; may be absent above", "Equal on both surfaces"],
              ["Mesophyll", "Palisade (adaxial, elongated) and spongy (abaxial, loose) layers", "Not differentiated"],
              ["Venation", "Reticulate: bundles of different sizes", "Parallel: bundles nearly equal except at the main vein"],
              ["Special cells", "None", "Bulliform cells in grasses"],
            ],
          },
          {
            type: "text",
            md: "**Bulliform cells** are large, empty, colourless cells on the upper epidermis of grass leaves. When turgid, the leaf is flat and exposed. When they lose water under water stress, they become flaccid and the leaf **curls inwards**, cutting water loss.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Spot-the-section tips",
            md: "Count the xylem bundles and look for pith: 2 to 4 bundles and small pith = dicot root; more than 6 and big pith = monocot root. Endarch xylem means a **stem**; exarch means a **root**. Bean-shaped guard cells = dicot, dumb-bell = grass.",
          },
          {
            type: "keypoints",
            items: [
              "Three tissue systems: epidermal, ground, vascular.",
              "Roots have radial bundles; dicot stems open conjoint collateral; monocot stems closed.",
              "Dicot root 2 to 4 xylem bundles, small pith; monocot root polyarch, large pith.",
              "Monocot stem: scattered bundles, sclerenchymatous sheath, water cavities, sclerenchymatous hypodermis.",
              "Dorsiventral leaf has palisade and spongy mesophyll; grass leaves have bulliform cells.",
            ],
          },
        ],
        flashcards: [
          { front: "Casparian strip", back: "Band of suberin on the radial and inner tangential walls of endodermal cells in roots." },
          { front: "Polyarch", back: "Root with more than six xylem bundles, typical of monocots." },
          { front: "Starch sheath", back: "Starch-rich endodermis of a dicot stem." },
          { front: "Bulliform cells", back: "Large colourless upper epidermal cells of grass leaves that make the leaf roll in water stress." },
          { front: "Guard cells in grasses", back: "Dumb-bell shaped." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Lateral roots arise from the:",
            options: ["Endodermis", "Cortex", "Pericycle", "Epiblema"],
            answer: 2,
            explain: "Lateral roots originate endogenously from the pericycle.",
          },
          {
            kind: "truefalse",
            q: "Vascular bundles of a monocot stem are open because they have cambium.",
            answer: false,
            explain: "Monocot stem bundles are closed: they lack cambium, so there is no secondary growth.",
          },
          {
            kind: "numeric",
            q: "A tetrarch root has how many xylem bundles?",
            answer: 4,
            explain: "Tetra = four. Dicot roots are diarch to tetrarch (2 to 4).",
          },
          {
            kind: "fill",
            q: "In a dorsiventral leaf the ___ parenchyma lies just below the upper epidermis.",
            answer: ["palisade"],
            explain: "Elongated palisade cells sit adaxially; loose spongy cells lie beneath them.",
          },
          {
            kind: "mcq",
            q: "Which is NOT a feature of a monocot stem?",
            options: ["Scattered vascular bundles", "Sclerenchymatous hypodermis", "Collenchymatous hypodermis", "Water-containing cavities"],
            answer: 2,
            explain: "Collenchymatous hypodermis is a dicot stem feature; monocot stems have sclerenchymatous hypodermis.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Conjoint, collateral and open vascular bundles occur in:",
            options: ["Maize stem", "Sunflower stem", "Maize root", "Sunflower root"],
            answer: 1,
            explain: "Dicot stems like sunflower have open bundles with cambium. Roots have radial bundles.",
          },
        ],
      },
      {
        slug: "secondary-growth",
        title: "Secondary Growth",
        summary: "Vascular cambium, annual rings, heartwood and sapwood, cork cambium, bark and lenticels.",
        minutes: 17,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🪵", caption: "A felled deodar log from Himachal: count the rings to read its age." },
          {
            type: "text",
            md: "Growth in length by apical meristems is **primary growth**. Dicots and gymnosperms also grow in **girth** through two lateral meristems, the **vascular cambium** and the **cork cambium**. This is **secondary growth**. Most monocots lack it.",
          },
          { type: "heading", text: "Vascular cambium in a dicot stem" },
          {
            type: "list",
            ordered: true,
            items: [
              "Cambium inside each bundle is **intrafascicular** cambium (a primary meristem patch).",
              "Medullary ray cells beside it dedifferentiate into **interfascicular** cambium.",
              "Both join into a continuous **cambial ring**.",
              "The ring cuts **secondary xylem** towards the pith and **secondary phloem** towards the periphery.",
              "Cambium is more active on the inner side, so far more xylem than phloem forms. Primary and secondary phloem get crushed outward; primary xylem stays near the centre.",
              "Cambium also makes narrow bands of parenchyma through both tissues: **secondary medullary rays**.",
            ],
          },
          {
            type: "table",
            headers: ["Feature", "Spring (early) wood", "Autumn (late) wood"],
            rows: [
              ["Cambial activity", "High", "Low"],
              ["Vessels", "Many, with wide cavities", "Fewer, narrow"],
              ["Colour and density", "Lighter, lower density", "Darker, higher density"],
            ],
          },
          {
            type: "text",
            md: "One band of spring wood plus one band of autumn wood together make an **annual ring**. Counting rings estimates a tree's age (**dendrochronology**). Rings are sharp in temperate climates with marked seasons and less clear in places with uniform weather.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "text",
            md: "**Problem.** A teak trunk shows 48 alternating light and dark concentric bands. How old is the tree?\n\n**Solution.** Each year adds one light (spring) and one dark (autumn) band, so one annual ring = 2 bands. Age = 48 ÷ 2 = **24 years**.",
          },
          {
            type: "table",
            headers: ["Feature", "Heartwood (duramen)", "Sapwood (alburnum)"],
            rows: [
              ["Position", "Central, older", "Peripheral, younger"],
              ["Colour", "Dark (tannins, resins, oils, gums, aromatic substances)", "Light"],
              ["Living cells", "Dead, lignified", "Has living parenchyma"],
              ["Function", "Mechanical support; resists microbes and insects", "Conducts water and minerals"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which part of the wood conducts water in an old tree?",
                options: ["Heartwood", "Sapwood", "Pith", "Cork"],
                answer: 1,
                explain: "Sapwood, the peripheral secondary xylem, conducts water. Heartwood is plugged with deposits.",
              },
            ],
          },
          { type: "heading", text: "Cork cambium and bark" },
          {
            type: "text",
            md: "As girth increases, the epidermis and cortex break. The **cork cambium (phellogen)** develops, usually in the cortex. It cuts **phellem (cork)** on the outside and **phelloderm (secondary cortex)** on the inside. Phellogen + phellem + phelloderm = **periderm**. Cork cells are dead and suberised, so they are impermeable to water.\n\n**Bark** is a non-technical term for all tissues outside the vascular cambium, including secondary phloem. Bark formed early in the season is early (soft) bark; late in the season, late (hard) bark. **Lenticels** are lens-shaped openings where phellogen makes loose complementary cells instead of cork; they allow gas exchange in woody trees.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common NEET errors",
            md: "Bark is **not** just cork: it includes periderm and secondary phloem. The cambium produces **more xylem than phloem**. In dicot **roots** the vascular cambium comes from tissue below the phloem bundles plus pericycle above the protoxylem, first forming a **wavy** ring that later becomes circular.",
          },
          {
            type: "keypoints",
            items: [
              "Intrafascicular + interfascicular cambium form the cambial ring.",
              "Secondary xylem inward, secondary phloem outward; xylem far exceeds phloem.",
              "Annual ring = spring wood + autumn wood; age = number of rings.",
              "Heartwood dark, dead, supportive; sapwood light, conducting.",
              "Periderm = phellem + phellogen + phelloderm; bark includes secondary phloem; lenticels allow gas exchange.",
            ],
          },
        ],
        flashcards: [
          { front: "Interfascicular cambium", back: "Cambium formed from medullary ray cells between vascular bundles." },
          { front: "Annual ring", back: "One band of spring (early) wood plus one band of autumn (late) wood." },
          { front: "Duramen", back: "Heartwood: central, dark, non-conducting, highly lignified." },
          { front: "Periderm", back: "Phellem (cork) + phellogen (cork cambium) + phelloderm (secondary cortex)." },
          { front: "Lenticels", back: "Lens-shaped openings in the bark for gas exchange." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Cork cambium cuts phelloderm towards the:",
            options: ["Outside", "Inside", "Both sides equally", "Pith only"],
            answer: 1,
            explain: "Phellogen produces phellem (cork) outwards and phelloderm inwards.",
          },
          {
            kind: "numeric",
            q: "A tree trunk shows 70 alternating light and dark bands. Estimate its age in years.",
            answer: 35,
            unit: "years",
            explain: "One annual ring = one light + one dark band, so 70 ÷ 2 = 35 years.",
          },
          {
            kind: "truefalse",
            q: "Autumn wood has more vessels with wider cavities than spring wood.",
            answer: false,
            explain: "Spring wood has many wide vessels; autumn wood has fewer, narrower vessels and is denser.",
          },
          {
            kind: "fill",
            q: "Dark central wood packed with tannins and resins is called ___.",
            answer: ["heartwood", "duramen"],
            explain: "Heartwood (duramen) gives support but no longer conducts water.",
          },
          {
            kind: "order",
            q: "Arrange the layers from the outside of an old dicot stem inwards.",
            items: ["Phellem (cork)", "Phellogen", "Phelloderm", "Secondary phloem", "Vascular cambium", "Secondary xylem"],
            explain: "Periderm lies outermost; inside it the secondary phloem, then cambium, then secondary xylem.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "The term 'bark' includes:",
            options: ["Only cork", "Only periderm", "All tissues outside the vascular cambium", "Secondary xylem"],
            answer: 2,
            explain: "Bark refers to all tissues exterior to the vascular cambium, including secondary phloem.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Biomolecules                                                  */
  /* ------------------------------------------------------------ */
  {
    slug: "biomolecules-senior",
    title: "Biomolecules",
    icon: "🧪",
    description: "Small biomolecules and metabolites, proteins, polysaccharides and nucleic acids, and how enzymes work.",
    lessons: [
      {
        slug: "chemical-composition-of-cells",
        title: "Chemical Composition and Small Biomolecules",
        summary: "Acid-soluble and insoluble fractions, amino acids, lipids, nitrogen bases and secondary metabolites.",
        minutes: 17,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "⚗️", caption: "Grind a leaf with trichloroacetic acid, filter it, and life splits into two piles of molecules." },
          {
            type: "text",
            md: "To find what living tissue is made of, grind it in **trichloroacetic acid** (Cl₃CCOOH) and strain it. The **filtrate** is the **acid-soluble pool** (small molecules, molecular weight 18 to about 800 Da). The **retentate** is the **acid-insoluble fraction**, mostly **macromolecules** above 1000 Da: proteins, nucleic acids and polysaccharides. Lipids also turn up here although they are small, because in the cell they assemble into membranes that form insoluble vesicles when tissue is ground.",
          },
          {
            type: "table",
            headers: ["Component", "% of total cellular mass"],
            rows: [["Water", "70 to 90"], ["Proteins", "10 to 15"], ["Carbohydrates", "3"], ["Lipids", "2"], ["Nucleic acids", "5 to 7"], ["Ions", "1"]],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Living matter is carbon-rich",
            md: "Carbon is only about 0.03% of the Earth's crust but about 18.5% of the human body. Silicon, 27.7% of the crust, is negligible in us.",
          },
          { type: "heading", text: "Amino acids" },
          {
            type: "text",
            md: "Amino acids are **substituted methanes**: the α-carbon carries an amino group, a carboxyl group, a hydrogen and a variable **R group**. R = H in **glycine**, CH₃ in **alanine**, CH₂OH (hydroxymethyl) in **serine**. By R group they are **acidic** (glutamic acid), **basic** (lysine) or **neutral** (valine); **aromatic** ones are tyrosine, phenylalanine and tryptophan. Because both the amino and carboxyl groups ionise, the structure depends on pH; at a particular pH an amino acid exists as a **zwitterion**.",
          },
          {
            type: "formula",
            tex: t`\mathrm{H_3N^{+}\!-\!CHR\!-\!COOH}\ \rightleftharpoons\ \mathrm{H_3N^{+}\!-\!CHR\!-\!COO^{-}}\ \rightleftharpoons\ \mathrm{H_2N\!-\!CHR\!-\!COO^{-}}`,
            caption: "Low pH, zwitterion, high pH.",
          },
          { type: "heading", text: "Lipids and nitrogen bases" },
          {
            type: "text",
            md: "A **fatty acid** is a carboxyl group attached to an R group. **Palmitic acid** has 16 carbons (counting the carboxyl carbon) and **arachidonic acid** 20. Fatty acids are **saturated** (no C=C) or **unsaturated** (one or more C=C). **Glycerol** is trihydroxy propane; fatty acids esterified with it give mono-, di- and **triglycerides** (fats and oils). Oils such as gingelly (til) oil have lower melting points and stay liquid in winter. **Phospholipids** like **lecithin** carry a phosphorylated group and build membranes.\n\nHeterocyclic nitrogen bases: **purines** adenine and guanine; **pyrimidines** cytosine, uracil and thymine. Base + sugar = **nucleoside** (adenosine, uridine). Nucleoside + phosphate = **nucleotide** (adenylic acid, uridylic acid).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Adenylic acid is a:",
                options: ["Nitrogen base", "Nucleoside", "Nucleotide", "Amino acid"],
                answer: 2,
                explain: "Adenine + sugar = adenosine (nucleoside); adding a phosphate gives adenylic acid, a nucleotide.",
              },
            ],
          },
          { type: "heading", text: "Primary and secondary metabolites" },
          {
            type: "table",
            headers: ["Class", "Examples"],
            rows: [
              ["Pigments", "Carotenoids, anthocyanins"],
              ["Alkaloids", "Morphine, codeine"],
              ["Terpenoids", "Monoterpenes, diterpenes"],
              ["Essential oils", "Lemon grass oil"],
              ["Toxins", "Abrin, ricin"],
              ["Lectins", "Concanavalin A"],
              ["Drugs", "Vinblastine, curcumin"],
              ["Polymeric substances", "Rubber, gums, cellulose"],
            ],
          },
          {
            type: "text",
            md: "**Primary metabolites** (amino acids, sugars, fatty acids) have identifiable roles in normal physiology. **Secondary metabolites**, the table above, are found mainly in plants, fungi and microbes; many are valuable to humans, like the **curcumin** of Indian turmeric.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Classic NEET trap",
            md: "Lipids are **not** macromolecules (molecular weight rarely above 800 Da) yet they appear in the **acid-insoluble** fraction. Also, palmitic acid has **16** carbons **including** the carboxyl carbon, and ricin and abrin are **toxins**, not lectins.",
          },
          {
            type: "keypoints",
            items: [
              "Acid-soluble pool: small molecules; acid-insoluble: proteins, nucleic acids, polysaccharides, plus lipids.",
              "Water is 70 to 90% of cell mass; proteins 10 to 15%.",
              "Glycine R = H, alanine CH₃, serine CH₂OH; amino acids form zwitterions.",
              "Purines A, G; pyrimidines C, U, T; nucleoside = base + sugar; nucleotide adds phosphate.",
              "Secondary metabolites: alkaloids, pigments, toxins, lectins, drugs, rubber.",
            ],
          },
        ],
        flashcards: [
          { front: "Acid-insoluble fraction", back: "Retentate after TCA treatment: proteins, nucleic acids, polysaccharides and lipids." },
          { front: "Zwitterion", back: "An amino acid form carrying both a positive (NH₃⁺) and negative (COO⁻) charge." },
          { front: "Palmitic acid", back: "Saturated fatty acid with 16 carbons including the carboxyl carbon." },
          { front: "Lecithin", back: "A phospholipid found in cell membranes." },
          { front: "Concanavalin A", back: "A lectin, a secondary metabolite." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which amino acid has a hydroxymethyl R group?",
            options: ["Glycine", "Alanine", "Serine", "Valine"],
            answer: 2,
            explain: "Serine has R = CH₂OH. Glycine R = H, alanine R = CH₃.",
          },
          {
            kind: "mcq",
            q: "Which of these is a pyrimidine?",
            options: ["Adenine", "Guanine", "Thymine", "Adenosine"],
            answer: 2,
            explain: "Pyrimidines are cytosine, uracil and thymine. Adenosine is a nucleoside.",
          },
          {
            kind: "numeric",
            q: "How many carbon atoms (including the carboxyl carbon) does arachidonic acid have?",
            answer: 20,
            explain: "Arachidonic acid is a 20-carbon fatty acid; palmitic acid has 16.",
          },
          {
            kind: "truefalse",
            q: "Lipids are found in the acid-insoluble fraction because they are macromolecules.",
            answer: false,
            explain: "Lipids are small (below 800 Da). They appear there because membrane fragments form water-insoluble vesicles.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Morphine and codeine are examples of secondary metabolites called ___.",
            answer: ["alkaloids", "alkaloid"],
            explain: "Morphine and codeine are alkaloids.",
          },
          {
            kind: "mcq",
            q: "Abrin and ricin are:",
            options: ["Lectins", "Toxins", "Drugs", "Pigments"],
            answer: 1,
            explain: "Abrin (from Abrus) and ricin (from castor) are toxins.",
          },
        ],
      },
      {
        slug: "proteins-polysaccharides-nucleic-acids",
        title: "Proteins, Polysaccharides and Nucleic Acids",
        summary: "Peptide, glycosidic and phosphodiester bonds; four levels of protein structure; the B-DNA helix.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🧬", caption: "If you stretched out the DNA of one of your cells, it would be about 2 metres long." },
          {
            type: "text",
            md: "The macromolecules of life are polymers of a few kinds of building block, joined by bonds that form by removing water (**dehydration**). Proteins are linked by **peptide bonds**, polysaccharides by **glycosidic bonds**, and nucleic acids by **phosphodiester bonds**.",
          },
          { type: "heading", text: "Proteins" },
          {
            type: "text",
            md: "Proteins are **heteropolymers** of the 20 types of amino acid. **Essential** amino acids must come from our diet; **non-essential** ones we can make. **RuBisCO** is the most abundant protein in the whole biosphere; **collagen** is the most abundant in the animal world.",
          },
          {
            type: "table",
            headers: ["Protein", "Function"],
            rows: [
              ["Collagen", "Intercellular ground substance"],
              ["Trypsin", "Enzyme"],
              ["Insulin", "Hormone"],
              ["Antibody", "Fights infectious agents"],
              ["Receptor", "Sensory reception (smell, taste, hormones)"],
              ["GLUT-4", "Enables glucose transport into cells"],
            ],
          },
          {
            type: "list",
            items: [
              "**Primary**: the sequence of amino acids. The first is the **N-terminal**, the last the **C-terminal** amino acid.",
              "**Secondary**: the chain folds into a helix (only **right-handed** helices occur in proteins) or other shapes.",
              "**Tertiary**: the helix folds on itself like a hollow woollen ball, giving the 3-D shape needed for activity.",
              "**Quaternary**: several subunits together. Adult human **haemoglobin** has 4 subunits: 2 α and 2 β.",
            ],
          },
          { type: "heading", text: "Polysaccharides" },
          {
            type: "text",
            md: "**Cellulose** is a homopolymer of glucose; it is the main component of plant cell walls, cotton fibre and paper. **Starch** stores energy in plants and **glycogen** in animals. **Inulin** is a polymer of fructose. In a polysaccharide chain the right end is **reducing** and the left end **non-reducing**. Starch forms helical secondary structures that can hold **I₂**, giving a **blue** colour; cellulose has no such helices, so it does not. **Chitin**, the exoskeleton of arthropods, is a complex polysaccharide with amino-sugars.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "Cellulose gives a blue colour with iodine.",
                answer: false,
                explain: "Only starch, with its helical secondary structure, can trap iodine and turn blue.",
              },
            ],
          },
          { type: "heading", text: "Nucleic acids and B-DNA" },
          {
            type: "text",
            md: "Nucleic acids are polynucleotides. The sugar is **ribose** in RNA and **2′-deoxyribose** in DNA. Phosphate links the 3′ carbon of one sugar to the 5′ carbon of the next by ester bonds on both sides: a **phosphodiester** bond. In the Watson–Crick **B-DNA** model, two antiparallel strands coil as a right-handed double helix; A pairs with T by 2 hydrogen bonds and G with C by 3.",
          },
          {
            type: "table",
            headers: ["B-DNA parameter", "Value"],
            rows: [["Base pairs per turn", "10"], ["Pitch (one turn)", "3.4 nm"], ["Rise per base pair", "0.34 nm"], ["Rotation per base pair", "36°"]],
          },
          {
            type: "text",
            md: "**Worked example.** A double-stranded DNA sample has 20% adenine. (a) What are the percentages of T, G and C? (b) A human diploid cell has about 6.6 × 10⁹ bp. How long is its DNA?\n\n**Solution.** (a) By base pairing A = T = 20%, so A + T = 40%. G + C = 60%, and G = C = **30%** each.\n\n(b) Length = number of bp × distance per bp:",
          },
          {
            type: "formula",
            tex: t`L = 6.6\times10^{9}\times0.34\times10^{-9}\ \text{m} \approx 2.2\ \text{m}`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Traps",
            md: "RuBisCO is the most abundant protein **on Earth**; collagen is the most abundant **in animals**. In H-bond questions, count 2 per A–T pair and 3 per G–C pair. And a 3.4 nm turn holds **10** base pairs, not 10 nucleotides.",
          },
          {
            type: "keypoints",
            items: [
              "Peptide, glycosidic and phosphodiester bonds all form by dehydration.",
              "Protein structure: primary sequence, secondary right-handed helix, tertiary fold, quaternary subunits.",
              "Cellulose, starch, glycogen are glucose polymers; inulin is fructose; chitin is the arthropod exoskeleton.",
              "B-DNA: 10 bp per turn, pitch 3.4 nm, 0.34 nm per bp, 36° per bp.",
              "A = T (2 H-bonds), G ≡ C (3 H-bonds).",
            ],
          },
        ],
        flashcards: [
          { front: "Most abundant protein in the biosphere", back: "RuBisCO." },
          { front: "Most abundant protein in animals", back: "Collagen." },
          { front: "Quaternary structure of haemoglobin", back: "Four subunits: two α and two β chains." },
          { front: "Inulin", back: "A polymer of fructose." },
          { front: "Pitch of B-DNA", back: "3.4 nm per turn, 10 bp per turn." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A DNA molecule has 30% guanine. What percentage is adenine?",
            answer: 20,
            unit: "%",
            explain: "G = C = 30%, so G + C = 60%. A + T = 40%, so A = 20%.",
          },
          {
            kind: "numeric",
            q: "How many hydrogen bonds hold together a DNA segment of 10 A–T pairs and 5 G–C pairs?",
            answer: 35,
            explain: "10 × 2 + 5 × 3 = 20 + 15 = 35.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which bond links amino acids in a protein?",
            options: ["Glycosidic", "Peptide", "Phosphodiester", "Hydrogen"],
            answer: 1,
            explain: "The carboxyl of one amino acid and the amino group of the next join with loss of water: a peptide bond.",
          },
          {
            kind: "fill",
            q: "The exoskeleton of arthropods is made of the polysaccharide ___.",
            answer: ["chitin"],
            explain: "Chitin is a complex polysaccharide.",
          },
          {
            kind: "truefalse",
            q: "In proteins, both left-handed and right-handed helices are commonly observed.",
            answer: false,
            explain: "Only right-handed helices are observed in proteins.",
          },
          {
            kind: "numeric",
            q: "How many complete turns are there in a B-DNA segment of 150 base pairs?",
            answer: 15,
            explain: "10 bp per turn, so 150 ÷ 10 = 15 turns.",
          },
        ],
      },
      {
        slug: "metabolism-and-enzymes",
        title: "Metabolism and Enzymes",
        summary: "The living state, enzyme action, factors affecting activity, inhibition, classes and cofactors.",
        minutes: 19,
        xp: 50,
        blocks: [
          { type: "illustration", emoji: "⚙️", caption: "Enzymes from bacteria in the hot springs of Manikaran, Himachal, keep working near boiling point." },
          {
            type: "text",
            md: "All biomolecules have a turnover: they are constantly made and broken down by chemical reactions together called **metabolism**. **Anabolic** pathways build (acetic acid to cholesterol) and use energy; **catabolic** pathways break down (glucose to lactic acid in 10 steps in skeletal muscle) and release energy, which is trapped as **ATP**. Living organisms exist in a **non-equilibrium steady state**: metabolism is the living state, and reaching equilibrium means death.",
          },
          { type: "heading", text: "How enzymes speed reactions" },
          {
            type: "text",
            md: "Almost all enzymes are **proteins**; some nucleic acids called **ribozymes** also catalyse. An enzyme's tertiary structure creates a pocket, the **active site**, into which the substrate fits. The enzyme lowers the **activation energy** of the reaction.",
          },
          {
            type: "formula",
            tex: t`E + S \rightleftharpoons ES \longrightarrow EP \longrightarrow E + P`,
            caption: "The enzyme is released unchanged and can be reused.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Carbonic anhydrase",
            md: "Without the enzyme, about 200 molecules of H₂CO₃ form from CO₂ and water in an **hour**. With carbonic anhydrase, about 600,000 form every **second**, roughly a 10-million-fold speed-up.",
          },
          { type: "heading", text: "Factors affecting enzyme activity" },
          {
            type: "list",
            items: [
              "**Temperature and pH**: each enzyme has an optimum; activity falls on either side. Low temperature keeps it temporarily inactive; high temperature denatures it.",
              "**Substrate concentration**: velocity rises with [S] then levels off at **Vmax**, when all active sites are occupied.",
              "**Inhibitors**: a **competitive inhibitor** resembles the substrate and competes for the active site. Malonate inhibits **succinic dehydrogenase** because it looks like succinate. Such inhibitors are used to control bacterial pathogens.",
            ],
          },
          {
            type: "formula",
            tex: t`V = \frac{V_{max}[S]}{K_m + [S]}`,
            caption: "Michaelis–Menten equation. Km is the [S] at which V = Vmax / 2; a low Km means high affinity.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "text",
            md: "**Problem.** An enzyme has Vmax = 100 μmol/min and Km = 2 mM. Find V at [S] = 6 mM.\n\n**Solution.** V = 100 × 6 / (2 + 6) = 600 / 8 = **75 μmol/min**. Notice that tripling [S] from Km (where V = 50) does not triple the rate; the enzyme is approaching saturation.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "For an enzyme with Vmax = 80 units, what is V when [S] equals Km?",
                answer: 40,
                unit: "units",
                explain: "When [S] = Km, V = Vmax × Km / 2Km = Vmax / 2 = 40.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Class", "What it does"],
            rows: [
              ["1. Oxidoreductases / dehydrogenases", "Oxidation–reduction between two substrates"],
              ["2. Transferases", "Transfer a group (other than H) between substrates"],
              ["3. Hydrolases", "Hydrolyse ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds"],
              ["4. Lyases", "Remove groups by non-hydrolytic means, leaving double bonds"],
              ["5. Isomerases", "Interconvert optical, geometric or positional isomers"],
              ["6. Ligases", "Join two compounds, e.g. forming C–O, C–S, C–N, P–O bonds"],
            ],
          },
          {
            type: "text",
            md: "**Cofactors** are non-protein parts needed for activity; the protein part alone is the **apoenzyme**. They are of three kinds: **prosthetic groups**, tightly bound (haem in peroxidase and catalase, which break down H₂O₂); **coenzymes**, transiently bound and often vitamin-derived (NAD and NADP contain niacin); and **metal ions** (zinc for carboxypeptidase). Remove the cofactor and catalytic activity is lost.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Traps",
            md: "The order of the six classes (Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases) is asked as numbers: hydrolases are class **3**, ligases **6**. Haem is a **prosthetic group**, not a coenzyme. A competitive inhibitor does **not** lower Vmax; it raises the apparent Km.",
          },
          {
            type: "keypoints",
            items: [
              "Metabolism: anabolic builds, catabolic breaks; life is a non-equilibrium steady state.",
              "Enzymes lower activation energy; the substrate binds the active site to form ES.",
              "Temperature, pH and [S] affect rate; V reaches Vmax; Km is [S] at Vmax/2.",
              "Malonate competitively inhibits succinic dehydrogenase.",
              "Six classes; cofactors are prosthetic groups (haem), coenzymes (NAD), metal ions (Zn²⁺).",
            ],
          },
        ],
        flashcards: [
          { front: "Ribozyme", back: "A nucleic acid (RNA) that acts as an enzyme." },
          { front: "Apoenzyme", back: "The protein part of an enzyme that needs a cofactor." },
          { front: "Km", back: "Substrate concentration at which the reaction rate is half of Vmax." },
          { front: "Malonate", back: "Competitive inhibitor of succinic dehydrogenase." },
          { front: "Prosthetic group of catalase", back: "Haem." },
          { front: "Zinc", back: "Metal ion cofactor of carboxypeptidase." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Enzymes that join two compounds belong to class:",
            options: ["Lyases", "Isomerases", "Ligases", "Hydrolases"],
            answer: 2,
            explain: "Ligases (class 6) catalyse the linking of two compounds.",
          },
          {
            kind: "numeric",
            q: "An enzyme has Vmax = 120 units and Km = 4 mM. What is V at [S] = 12 mM?",
            answer: 90,
            unit: "units",
            explain: "V = 120 × 12 / (4 + 12) = 1440 / 16 = 90.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The coenzymes NAD and NADP contain the vitamin ___.",
            answer: ["niacin"],
            explain: "Niacin (nicotinic acid, vitamin B3) is part of NAD and NADP.",
          },
          {
            kind: "truefalse",
            q: "Malonate inhibits succinic dehydrogenase because it resembles succinate.",
            answer: true,
            explain: "It competes for the active site: competitive inhibition.",
          },
          {
            kind: "order",
            q: "Arrange the enzyme classes in their official numbered order.",
            items: ["Oxidoreductases", "Transferases", "Hydrolases", "Lyases", "Isomerases", "Ligases"],
            explain: "Classes 1 to 6 in IUB order.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Haem in peroxidase is best described as a:",
            options: ["Coenzyme", "Metal ion", "Prosthetic group", "Apoenzyme"],
            answer: 2,
            explain: "Haem is tightly bound to the apoenzyme, so it is a prosthetic group.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Plant Growth and Development                                  */
  /* ------------------------------------------------------------ */
  {
    slug: "plant-growth-and-development",
    title: "Plant Growth and Development",
    icon: "🌱",
    description: "Growth phases and rates, differentiation and plasticity, and the five plant growth regulators.",
    lessons: [
      {
        slug: "growth-and-differentiation",
        title: "Growth, Growth Rates and Differentiation",
        summary: "Phases of growth, arithmetic and geometric growth, sigmoid curves, differentiation and plasticity.",
        minutes: 17,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🌽", caption: "One maize root apical meristem can make more than 17,500 new cells every hour." },
          {
            type: "text",
            md: "**Growth** is an irreversible, permanent increase in the size of an organ, its parts or a single cell. In plants it is **open**: meristems keep adding cells throughout life. Growth can be measured as increase in fresh weight, dry weight, length, area, volume or cell number: a pollen tube by length, a leaf by surface area. A watermelon cell may increase in size up to 3,50,000 times.",
          },
          {
            type: "list",
            items: [
              "**Meristematic phase**: cells at root and shoot apices divide constantly; large nuclei, thin cellulose walls, abundant plasmodesmata.",
              "**Elongation phase**: cells just behind the meristem enlarge, with increased vacuolation and new wall deposition.",
              "**Maturation phase**: cells reach their final size, thicken their walls and change their protoplasm.",
            ],
          },
          { type: "heading", text: "Growth rates" },
          {
            type: "formula",
            tex: t`L_t = L_0 + rt`,
            caption: "Arithmetic growth: only one daughter cell keeps dividing (e.g. a root elongating at a constant rate). The curve is linear.",
          },
          {
            type: "formula",
            tex: t`W_1 = W_0\,e^{rt}`,
            caption: "Geometric (exponential) growth: both daughter cells keep dividing. r is the relative growth rate (efficiency index).",
          },
          {
            type: "text",
            md: "In nature geometric growth does not last. With limited nutrients the curve passes through a slow **lag phase**, a rapid **log (exponential) phase** and a **stationary phase**, giving the S-shaped **sigmoid curve** typical of cells, tissues and organs.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "text",
            md: "**Problem 1.** A root 5 cm long grows arithmetically at 2 cm per day. Find its length after 4 days.\n\n**Solution.** $L_t$ = 5 + 2 × 4 = **13 cm**.\n\n**Problem 2.** A culture weighing 2 g grows geometrically with r = 0.1 per day. Find its mass after 10 days.\n\n**Solution.** $W_1$ = 2 × e^(0.1 × 10) = 2 × e ≈ 2 × 2.718 ≈ **5.44 g**.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Absolute vs relative growth rate",
            md: "Leaf A grows from 5 cm² to 10 cm²; leaf B from 50 cm² to 55 cm² in the same time. Both have the same **absolute** growth (5 cm²), but A's **relative** growth rate is 5/5 = 100% while B's is 5/50 = 10%. NEET likes to ask which leaf has the higher relative rate: the smaller one.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A leaf grows from 20 cm² to 25 cm². What is its relative growth (in %) over that period?",
                answer: 25,
                unit: "%",
                explain: "Relative growth = increase ÷ initial size = 5 ÷ 20 = 0.25 = 25%.",
              },
            ],
          },
          { type: "heading", text: "Differentiation and plasticity" },
          {
            type: "text",
            md: "Cells from meristems mature for specific jobs: **differentiation**. A tracheary element, for instance, loses its protoplasm and builds a strong lignified wall. Living differentiated cells can regain the power to divide: **dedifferentiation**, as when parenchyma forms interfascicular cambium or cork cambium. Their products lose it again and mature: **redifferentiation**.\n\nPlants follow different pathways depending on environment and life phase: **plasticity**. **Heterophylly** shows it: juvenile and mature leaves differ in cotton, coriander and larkspur, and buttercup leaves differ in air and under water.",
          },
          {
            type: "keypoints",
            items: [
              "Growth is irreversible and open in plants; three phases: meristematic, elongation, maturation.",
              "Arithmetic: Lt = L0 + rt (linear). Geometric: W1 = W0 e^(rt).",
              "Sigmoid curve: lag, log, stationary phases.",
              "Relative growth rate = growth per unit initial size; smaller organs can have higher RGR.",
              "Differentiation, dedifferentiation, redifferentiation; heterophylly shows plasticity.",
            ],
          },
        ],
        flashcards: [
          { front: "Open growth", back: "Plants keep adding new cells from meristems throughout life." },
          { front: "Arithmetic growth equation", back: "Lt = L0 + rt" },
          { front: "Efficiency index", back: "r, the relative growth rate in W1 = W0 e^(rt)." },
          { front: "Dedifferentiation", back: "A differentiated living cell regains the ability to divide, e.g. forming cork cambium." },
          { front: "Heterophylly", back: "Different leaf shapes on one plant, e.g. larkspur, coriander, buttercup." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A shoot 12 cm tall grows arithmetically at 1.5 cm per day. How tall is it after 6 days?",
            answer: 21,
            unit: "cm",
            explain: "Lt = 12 + 1.5 × 6 = 12 + 9 = 21 cm.",
          },
          {
            kind: "mcq",
            q: "The S-shaped growth curve is called:",
            options: ["Linear", "Sigmoid", "Parabolic", "Hyperbolic"],
            answer: 1,
            explain: "Lag, log and stationary phases give a sigmoid curve.",
          },
          {
            kind: "truefalse",
            q: "Formation of interfascicular cambium is an example of dedifferentiation.",
            answer: true,
            explain: "Differentiated medullary ray parenchyma regains the ability to divide.",
          },
          {
            kind: "fill",
            q: "In the equation W1 = W0 e^(rt), r is the relative growth rate, also called the ___ index.",
            answer: ["efficiency"],
            explain: "r measures how efficiently the plant produces new material.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange the phases of a sigmoid growth curve in order.",
            items: ["Lag phase", "Log (exponential) phase", "Stationary phase"],
            explain: "Slow start, rapid growth, then a plateau as resources run short.",
          },
          {
            kind: "mcq",
            q: "Heterophylly due to the environment is seen in:",
            options: ["Cotton", "Buttercup", "Coriander", "Larkspur"],
            answer: 1,
            explain: "Buttercup leaves differ in air and in water. Cotton, coriander and larkspur show developmental (juvenile vs adult) heterophylly.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "auxins-gibberellins-cytokinins",
        title: "Growth Promoters: Auxins, Gibberellins, Cytokinins",
        summary: "Discovery of PGRs and the physiological effects and farm uses of the three promoters.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🍇", caption: "Grape growers near Nashik spray gibberellins to lengthen bunch stalks and get bigger berries." },
          {
            type: "text",
            md: "**Plant growth regulators (PGRs)** are small, simple molecules. Chemically they are indole compounds (IAA), adenine derivatives (kinetin), carotenoid derivatives (ABA), terpenes (GA₃) or gases (ethylene). Broadly, **auxins, gibberellins and cytokinins** are growth **promoters**; **ABA** is an inhibitor; **ethylene** can do either but is largely an inhibitor.",
          },
          { type: "heading", text: "How they were discovered" },
          {
            type: "table",
            headers: ["PGR", "Discovery"],
            rows: [
              ["Auxin", "Charles and Francis Darwin saw canary grass coleoptiles bend to unilateral light (phototropism); F.W. Went isolated auxin from Avena (oat) coleoptile tips."],
              ["Gibberellin", "E. Kurosawa: bakanae (foolish seedling) disease of rice caused by the fungus Gibberella fujikuroi; the active substance was gibberellic acid."],
              ["Cytokinin", "F. Skoog and co-workers: tobacco callus divided only with auxin plus extracts like coconut milk or DNA; Skoog and Miller crystallised kinetin."],
              ["ABA", "1960s: inhibitor-B, abscission II and dormin, found to be one compound."],
              ["Ethylene", "Cousins: ripe oranges released a volatile substance that hastened ripening of stored bananas."],
            ],
          },
          { type: "heading", text: "Auxins" },
          {
            type: "text",
            md: "Natural: **IAA** and **IBA**. Synthetic: **NAA** and **2,4-D**. Produced at growing stem and root tips.\n\n- Initiate **rooting in stem cuttings**, widely used in nurseries.\n- Promote flowering, e.g. in pineapple.\n- Prevent early fruit and leaf drop but promote abscission of older leaves and fruits.\n- **Apical dominance**: the growing apical bud suppresses lateral buds. Removing it (decapitation) makes plants bushy, used in **tea plantations** and hedge-making.\n- Induce **parthenocarpy** (tomato).\n- **2,4-D** kills dicot weeds without affecting mature monocots, so it is used on lawns and wheat fields.\n- Control xylem differentiation and help cell division.",
          },
          { type: "heading", text: "Gibberellins" },
          {
            type: "text",
            md: "More than 100 are known (GA₁, GA₂, GA₃...); **GA₃** was the first and is the most studied. All are acidic.\n\n- Increase axis length: used to **lengthen grape stalks**.\n- Make apples elongate and improve shape.\n- **Delay senescence**, so fruit can stay on the tree longer and the market period lengthens.\n- Speed up **malting** in the brewing industry.\n- Spraying **sugarcane** lengthens the stem and raises yield by as much as **20 tonnes per acre**.\n- Hasten maturity of juvenile conifers, giving early seed.\n- Cause **bolting** (internode elongation just before flowering) in beet, cabbage and other rosette plants.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A tea estate in Assam regularly plucks shoot tips so bushes grow dense. This works because removing the apex:",
                options: ["Adds gibberellin", "Removes apical dominance due to auxin", "Stops ethylene", "Adds ABA"],
                answer: 1,
                explain: "Auxin from the apical bud suppresses lateral buds; decapitation releases them.",
              },
            ],
          },
          { type: "heading", text: "Cytokinins" },
          {
            type: "text",
            md: "**Kinetin**, a modified adenine (a purine), was isolated from autoclaved **herring sperm DNA**; it does not occur naturally in plants. **Zeatin** is a natural cytokinin from **corn kernels** and **coconut milk**. Natural cytokinins are made where cells divide rapidly: root apices, developing shoot buds, young fruits.\n\n- Promote cell division (cytokinesis).\n- Help form new leaves, chloroplasts, lateral shoots and adventitious shoots.\n- **Overcome apical dominance**.\n- Promote nutrient mobilisation, which **delays leaf senescence**.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET favourites",
            md: "Bolting = **gibberellin**. Overcoming apical dominance = **cytokinin**, while causing it = **auxin**. Kinetin came from **herring sperm DNA**, zeatin from **corn and coconut milk**. Bakanae is a disease of **rice** caused by a **fungus**, not a bacterium.",
          },
          {
            type: "keypoints",
            items: [
              "Promoters: auxins, gibberellins, cytokinins. Inhibitor: ABA. Ethylene: mostly inhibitor.",
              "Auxins (IAA, IBA, NAA, 2,4-D): rooting, apical dominance, parthenocarpy, weedicide.",
              "GA₃: grape stalks, malting, sugarcane yield, bolting, delays senescence.",
              "Cytokinins (kinetin, zeatin): cell division, lateral shoots, delay leaf senescence.",
              "Went: auxin; Kurosawa: GA; Skoog and Miller: kinetin.",
            ],
          },
        ],
        flashcards: [
          { front: "2,4-D", back: "Synthetic auxin used as a herbicide against dicot weeds." },
          { front: "Bakanae disease", back: "Foolish seedling disease of rice caused by Gibberella fujikuroi; led to gibberellin's discovery." },
          { front: "Bolting", back: "Internode elongation just before flowering in rosette plants; caused by gibberellins." },
          { front: "Zeatin", back: "Natural cytokinin isolated from corn kernels and coconut milk." },
          { front: "Apical dominance", back: "Suppression of lateral buds by the apical bud; caused by auxin." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which PGR is used to speed up malting in breweries?",
            options: ["Auxin", "Gibberellin", "Cytokinin", "ABA"],
            answer: 1,
            explain: "GA₃ speeds up malting.",
          },
          {
            kind: "mcq",
            q: "Kinetin was first isolated from:",
            options: ["Coconut milk", "Corn kernels", "Autoclaved herring sperm DNA", "Rice seedlings"],
            answer: 2,
            explain: "Kinetin came from autoclaved herring sperm DNA; zeatin from corn and coconut milk.",
          },
          {
            kind: "truefalse",
            q: "2,4-D removes broad-leaved weeds from a wheat field without harming the mature wheat.",
            answer: true,
            explain: "2,4-D kills dicots but does not affect mature monocots like wheat.",
          },
          {
            kind: "fill",
            q: "F.W. Went isolated auxin from coleoptile tips of ___ seedlings.",
            answer: ["oat", "avena"],
            explain: "Went used Avena (oat) coleoptiles.",
          },
          {
            kind: "numeric",
            q: "By up to how many tonnes per acre can gibberellin spraying raise sugarcane yield, according to NCERT?",
            answer: 20,
            unit: "tonnes",
            explain: "GA lengthens sugarcane stems, increasing yield by as much as 20 tonnes per acre.",
          },
          {
            kind: "mcq",
            q: "Which pair has opposite effects on apical dominance?",
            options: ["Auxin and gibberellin", "Auxin and cytokinin", "Gibberellin and ABA", "Ethylene and ABA"],
            answer: 1,
            explain: "Auxin causes apical dominance; cytokinin overcomes it.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "ethylene-aba-and-flowering",
        title: "Ethylene, ABA, Photoperiodism and Vernalisation",
        summary: "The two inhibitors and their uses, and how day length and cold control flowering.",
        minutes: 17,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🍌", caption: "Banana ripening chambers in Mumbai's APMC market use ethylene gas, the approved alternative to banned calcium carbide." },
          { type: "heading", text: "Ethylene" },
          {
            type: "text",
            md: "Ethylene is a simple **gaseous** PGR, made in large amounts by tissues undergoing senescence and by ripening fruits.\n\n- In dicot seedlings: horizontal growth, swelling of the axis and **apical hook** formation.\n- Promotes **senescence and abscission** of leaves and flowers.\n- Highly effective in **fruit ripening**; it raises the respiration rate during ripening, the **respiratory climacteric**.\n- Breaks seed and bud dormancy, starts germination in peanut seeds and sprouting of potato tubers.\n- Rapid internode and petiole elongation in **deep-water rice**, keeping leaves above water.\n- Promotes root growth and root hair formation.\n- Initiates flowering and synchronises fruit set in **pineapple**; induces flowering in **mango**.\n\n**Ethephon**, the most used source, releases ethylene slowly. It hastens ripening of tomatoes and apples, thins flowers and fruit (cotton, cherry, walnut) and promotes **female flowers in cucumber**, raising yield.",
          },
          { type: "heading", text: "Abscisic acid (ABA)" },
          {
            type: "list",
            items: [
              "General **inhibitor** of plant growth and metabolism; inhibits seed germination.",
              "Stimulates **closure of stomata** during drought.",
              "Increases tolerance to stresses, so it is called the **stress hormone**.",
              "Promotes seed development, maturation and **dormancy**, letting seeds survive desiccation.",
              "In most situations acts as an **antagonist of gibberellins**.",
            ],
          },
          {
            type: "table",
            headers: ["Effect", "PGR responsible"],
            rows: [
              ["Stomatal closure in drought", "ABA"],
              ["Respiratory climacteric in ripening fruit", "Ethylene"],
              ["Female flowers in cucumber", "Ethylene (ethephon)"],
              ["Seed dormancy", "ABA"],
              ["Deep-water rice elongation", "Ethylene"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A farmer in Kerala wants pineapple plants across a field to flower together. Which PGR helps?",
                options: ["ABA", "Ethylene", "Cytokinin", "Gibberellin"],
                answer: 1,
                explain: "Ethylene (and auxin) initiates flowering and synchronises fruit set in pineapple.",
              },
            ],
          },
          { type: "heading", text: "Photoperiodism" },
          {
            type: "text",
            md: "Some plants flower only when exposed to light for a certain period each day. **Long day plants** flower when days exceed a **critical duration**; **short day plants** flower when days are shorter than it; **day-neutral plants** show no correlation. Strictly, it is the length of the **dark period** that matters. The stimulus is perceived by the **leaves**, and a hormonal signal (florigen) moves to the shoot apex, which becomes floral.",
          },
          { type: "heading", text: "Vernalisation" },
          {
            type: "text",
            md: "Some plants need a period of **low temperature** to flower: **vernalisation**. It prevents precocious reproduction late in the growing season. **Spring wheat** is sown in spring and flowers that season; **winter wheat** is sown in autumn, survives winter as a seedling and flowers next summer. Without cold it will not flower. **Biennials** such as sugar beet, cabbage and carrot grow in the first season and flower after winter cold.",
          },
          {
            type: "callout",
            tone: "warning",
            title: "Syllabus note",
            md: "The rationalised NCERT text (2023 onward) dropped photoperiodism, vernalisation and seed dormancy. Older NEET papers, ISC and some state boards still use them, so revise them if your syllabus lists them.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Classic trap",
            md: "Ethylene promotes **ripening and abscission**; ABA promotes **dormancy and stomatal closure**. Do not swap them. Also, photoperiod is perceived by **leaves**, not the shoot apex, even though the apex is what turns floral.",
          },
          {
            type: "keypoints",
            items: [
              "Ethylene: gas; ripening, climacteric, abscission, apical hook, deep-water rice, pineapple flowering.",
              "Ethephon: ripening tomatoes and apples, fruit thinning, female flowers in cucumber.",
              "ABA: stress hormone; stomatal closure, seed dormancy; antagonises GA.",
              "Photoperiodism: long day, short day, day-neutral; perceived by leaves.",
              "Vernalisation: cold needed to flower; winter wheat, sugar beet, cabbage, carrot.",
            ],
          },
        ],
        flashcards: [
          { front: "Respiratory climacteric", back: "Rise in respiration rate during fruit ripening, triggered by ethylene." },
          { front: "Ethephon", back: "Compound that releases ethylene; used for ripening and female flowers in cucumber." },
          { front: "Stress hormone", back: "Abscisic acid (ABA)." },
          { front: "Site of photoperiod perception", back: "Leaves." },
          { front: "Vernalisation", back: "Promotion of flowering by a period of low temperature." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which PGR is a gas?",
            options: ["ABA", "Ethylene", "Zeatin", "IAA"],
            answer: 1,
            explain: "Ethylene (C₂H₄) is a gaseous hormone.",
          },
          {
            kind: "truefalse",
            q: "ABA promotes seed germination.",
            answer: false,
            explain: "ABA inhibits germination and promotes dormancy; it antagonises gibberellins.",
          },
          {
            kind: "fill",
            q: "Abscisic acid is often called the ___ hormone.",
            answer: ["stress"],
            explain: "ABA increases tolerance to drought and other stresses.",
          },
          {
            kind: "mcq",
            q: "Deep-water rice keeps its leaves above flood water by rapid internode elongation caused by:",
            options: ["ABA", "Cytokinin", "Ethylene", "Auxin"],
            answer: 2,
            explain: "Ethylene promotes rapid internode and petiole elongation in deep-water rice.",
          },
          {
            kind: "mcq",
            q: "Winter wheat sown in spring fails to flower because it:",
            options: ["Gets too much light", "Has not been exposed to low temperature", "Lacks cytokinin", "Is a short day plant"],
            answer: 1,
            explain: "Winter wheat needs vernalisation, a cold period, before it flowers.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Morphology of Flowering Plants": "morphology-of-flowering-plants",
  "Structural Organisation in Animals and Plants": "morphology-of-flowering-plants",
  "Anatomy of Flowering Plants": "anatomy-of-flowering-plants",
  Biomolecules: "biomolecules-senior",
  "Plant Growth and Development": "plant-growth-and-development",
};
