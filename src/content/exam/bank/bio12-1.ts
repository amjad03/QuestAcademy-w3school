import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 12 Biology bank, part 1 (NEET / KCET): Sexual Reproduction in Flowering Plants,
 * Human Reproduction, Reproductive Health, Principles of Inheritance and Variation.
 * All questions are original MCQs written close to NCERT lines. `a` is the 0-based answer index.
 */

const t = String.raw;

type Q = {
  d: 1 | 2 | 3;
  t: number;
  q: string;
  o: string[];
  a: number;
  e: string;
  h?: string;
  x?: ExamId[];
};

/** Standard NEET statement-I / statement-II options. */
const ST = [
  "Both Statement I and Statement II are correct",
  "Both Statement I and Statement II are incorrect",
  "Statement I is correct but Statement II is incorrect",
  "Statement I is incorrect but Statement II is correct",
];

/** Standard assertion–reason options. */
const AR = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];

function build(chapter: string, no: number, list: Q[]): ExamQuestion[] {
  return list.map(
    (it, i): ExamQuestion => ({
      id: `bio12-1-${String(no).padStart(2, "0")}-${String(i + 1).padStart(3, "0")}`,
      subject: "biology",
      chapter,
      grade: "12",
      exams: it.x ?? ["NEET", "KCET"],
      kind: "mcq",
      difficulty: it.d,
      idealTime: it.t,
      q: it.q,
      options: it.o,
      answer: it.a,
      explain: it.e,
      ...(it.h ? { hint: it.h } : {}),
    }),
  );
}

/* ================================================================== */
/* Chapter 1: Sexual Reproduction in Flowering Plants                  */
/* ================================================================== */

const CH1 = "Sexual Reproduction in Flowering Plants";

const ch1: Q[] = [
  {
    d: 1, t: 45,
    q: "Which wall layer of the microsporangium nourishes the developing pollen grains?",
    o: ["Endothecium", "Middle layers", "Tapetum", "Epidermis"],
    a: 2,
    e: "The microsporangium wall has four layers: epidermis, endothecium, middle layers and tapetum. The innermost layer, the **tapetum**, has cells with dense cytoplasm (often more than one nucleus) and nourishes the developing pollen grains. The outer three layers protect the sporangium and help in dehiscence of the anther to release pollen.",
  },
  {
    d: 1, t: 45,
    q: "A typical angiosperm anther is:",
    o: [
      "Monothecous with two microsporangia",
      "Dithecous with four microsporangia",
      "Dithecous with two microsporangia",
      "Tetrathecous with eight microsporangia",
    ],
    a: 1,
    e: "A typical anther is **bilobed**, each lobe has two theca, so it is **dithecous**. The anther is a tetragonal structure with **four microsporangia**, two in each lobe, located at its corners. 'Dithecous with two microsporangia' confuses theca with lobes.",
  },
  {
    d: 1, t: 45,
    q: "The exine of the pollen grain is made of:",
    o: ["Cellulose", "Pectin", "Sporopollenin", "Lignin"],
    a: 2,
    e: "The hard outer layer, the exine, is made of **sporopollenin**, one of the most resistant organic materials known: it withstands high temperatures and strong acids and alkali, and no enzyme is known to degrade it. Cellulose and pectin make the inner wall (intine).",
  },
  {
    d: 2, t: 60,
    q: "**Statement I:** Germ pores are apertures on the pollen exine where sporopollenin is absent.\n\n**Statement II:** The intine is a thin, continuous layer made up of cellulose and pectin.",
    o: ST,
    a: 0,
    e: "Both statements are NCERT facts. The exine has prominent apertures called germ pores where sporopollenin is absent; the pollen tube emerges through them. The intine is thin and continuous, made of cellulose and pectin. Since both are true, option 1 is correct.",
    h: "The intine has no apertures; only the exine is interrupted.",
  },
  {
    d: 2, t: 50,
    q: "In over 60 per cent of angiosperms, pollen grains are shed at the:",
    o: ["3-celled stage", "2-celled stage", "Single-celled microspore stage", "4-celled stage"],
    a: 1,
    e: "In over 60% of angiosperms pollen is shed at the **2-celled stage** (vegetative cell + generative cell). In the remaining species the generative cell divides mitotically before shedding to give two male gametes, i.e. the 3-celled stage.",
    h: "Think of which cell has not yet divided at the time of shedding in most species.",
  },
  {
    d: 2, t: 60,
    q: "Which statement correctly describes the two cells of a mature 2-celled pollen grain?",
    o: [
      "The generative cell is larger and stores abundant food reserves",
      "The vegetative cell is small and spindle-shaped",
      "The generative cell is small, spindle-shaped and floats in the cytoplasm of the vegetative cell",
      "Both cells are of equal size and are separated by a cellulose wall",
    ],
    a: 2,
    e: "The **vegetative cell** is bigger, has abundant food reserve and a large irregularly shaped nucleus. The **generative cell** is small, spindle-shaped with dense cytoplasm and a nucleus, and floats in the cytoplasm of the vegetative cell. Options 1 and 2 swap the two cells.",
    h: "One cell later forms the pollen tube and needs food; the other forms gametes.",
  },
  {
    d: 1, t: 40,
    q: "Pollen grains of many species can be stored for years in pollen banks in liquid nitrogen at:",
    o: ["−196 °C", "−96 °C", "−20 °C", "−273 °C"],
    a: 0,
    e: "Liquid nitrogen boils at **−196 °C**; pollen cryopreserved at this temperature stays viable for years and is used in crop-breeding programmes. −273 °C is absolute zero, not a storage temperature.",
  },
  {
    d: 2, t: 50,
    q: "In which of the following do pollen grains lose viability within about 30 minutes of release?",
    o: ["Rice and wheat", "Members of Rosaceae", "Members of Solanaceae", "Members of Leguminosae"],
    a: 0,
    e: "Pollen viability varies with temperature and humidity. In **rice and wheat** pollen loses viability within about 30 minutes of release, whereas in some members of Rosaceae, Leguminosae and Solanaceae it stays viable for months.",
    h: "Two cereal crops have very short-lived pollen.",
  },
  {
    d: 2, t: 45,
    q: "Which weed, believed to have entered India as a contaminant with imported wheat, is a major cause of pollen allergy?",
    o: ["Eichhornia", "Lantana", "Parthenium", "Prosopis"],
    a: 2,
    e: "**Parthenium** (carrot grass) came into India as a contaminant with imported wheat. It has become ubiquitous and its pollen causes allergy and chronic respiratory disorders such as asthma and bronchitis. Eichhornia (water hyacinth) is an aquatic weed, not an allergen of this kind.",
    h: "It is also called carrot grass.",
  },
  {
    d: 3, t: 90,
    q: "What is the minimum number of meiotic divisions needed to produce 60 pollen grains and 60 female gametophytes (embryo sacs)?",
    o: ["120", "30", "75", "90"],
    a: 2,
    e: "One microspore mother cell gives a tetrad of **4** microspores (pollen) by one meiosis, so 60 pollen need 60/4 = **15** meioses. One megaspore mother cell gives 4 megaspores but only **one** is functional and forms an embryo sac, so 60 embryo sacs need **60** meioses. Total = 15 + 60 = **75**. 120 counts one meiosis per pollen; 30 wrongly treats female meiosis like male.",
    h: "Three of the four megaspores degenerate.",
    x: ["NEET"],
  },
  {
    d: 3, t: 90,
    q: "Match the structure with its ploidy:\n\nA. Nucellus  \nB. Primary endosperm nucleus  \nC. Antipodal cell  \nD. Zygote\n\nI. n  \nII. 2n  \nIII. 3n",
    o: [
      "A-I, B-III, C-II, D-II",
      "A-II, B-II, C-I, D-III",
      "A-III, B-II, C-I, D-II",
      "A-II, B-III, C-I, D-II",
    ],
    a: 3,
    e: "The nucellus is sporophytic tissue of the ovule (**2n**). The PEN forms by fusion of a male gamete (n) with two polar nuclei (n + n), so it is **3n**. Antipodals are cells of the haploid embryo sac (**n**). The zygote is male gamete + egg (**2n**). So A-II, B-III, C-I, D-II.",
    h: "Ask whether each structure belongs to the sporophyte, the gametophyte, or the triple-fusion product.",
  },
  {
    d: 1, t: 40,
    q: "The typical mature embryo sac of flowering plants is:",
    o: ["7-nucleate and 8-celled", "8-nucleate and 7-celled", "8-nucleate and 8-celled", "4-nucleate and 4-celled"],
    a: 1,
    e: "The mature embryo sac has **8 nuclei** but **7 cells**: 3 antipodals, 2 synergids, 1 egg cell and one large central cell holding the 2 polar nuclei. The central cell is binucleate, which is why there is one cell fewer than nuclei.",
  },
  {
    d: 1, t: 40,
    q: "The filiform apparatus, which guides the pollen tube, is present in the:",
    o: ["Antipodal cells", "Egg cell", "Synergids", "Central cell"],
    a: 2,
    e: "The **synergids** have special cellular thickenings at the micropylar tip called the filiform apparatus, which plays an important role in guiding the pollen tube into the synergid.",
  },
  {
    d: 2, t: 50,
    q: "Formation of the embryo sac from a single functional megaspore is called:",
    o: ["Bisporic development", "Tetrasporic development", "Monosporic development", "Polyembryony"],
    a: 2,
    e: "In most flowering plants only one of the four megaspores is functional, while the other three degenerate. Embryo sac formation from a single megaspore is termed **monosporic development**. Polyembryony is the presence of more than one embryo in a seed.",
    h: "Count how many megaspores contribute to the embryo sac.",
  },
  {
    d: 3, t: 60,
    q: "The nucleus of the functional megaspore forms the 8-nucleate embryo sac by:",
    o: [
      "Two mitotic divisions, each followed by wall formation",
      "Three mitotic divisions, all free-nuclear",
      "Three mitotic divisions, each followed by wall formation",
      "Four free-nuclear mitotic divisions",
    ],
    a: 1,
    e: "The functional megaspore nucleus divides mitotically to form 2 nuclei, which move to opposite poles; two more sequential divisions give 4 + 4 nuclei. That is 2³ = 8 nuclei from **three** divisions, and these are **free-nuclear** (nuclear division not followed immediately by cell wall formation). Walls form only after the 8-nucleate stage. Four divisions would give 16 nuclei.",
    h: "2ⁿ = 8.",
    x: ["NEET"],
  },
  {
    d: 1, t: 40,
    q: "The region where the body of the ovule fuses with the funicle is the:",
    o: ["Hilum", "Chalaza", "Micropyle", "Nucellus"],
    a: 0,
    e: "The **hilum** is the junction between the ovule and the funicle (stalk). The chalaza is the basal part opposite the micropylar end; the micropyle is the small opening at the tip of the integuments; the nucellus is the mass of cells enclosed by the integuments.",
  },
  {
    d: 2, t: 45,
    q: "Which of the following has an ovary with a large number of ovules?",
    o: ["Wheat", "Paddy", "Mango", "Papaya"],
    a: 3,
    e: "The number of ovules per ovary may be one (wheat, paddy, mango) or many (**papaya**, watermelon, orchids). The other three options are NCERT examples of single-ovuled ovaries.",
    h: "Think of a fruit full of small black seeds.",
  },
  {
    d: 2, t: 55,
    q: "Which pairing of plant and pistil type is correct?",
    o: [
      "Papaver — multicarpellary, apocarpous",
      "Michelia — multicarpellary, apocarpous",
      "Hibiscus — monocarpellary",
      "Michelia — multicarpellary, syncarpous",
    ],
    a: 1,
    e: "*Michelia* has a **multicarpellary, apocarpous** gynoecium (many free carpels). *Papaver* (poppy) and *Hibiscus* have multicarpellary **syncarpous** (fused) pistils. So only option 2 is right.",
    h: "Apocarpous = free carpels; syncarpous = fused carpels.",
  },
  {
    d: 1, t: 45,
    q: "Which plant produces both chasmogamous and cleistogamous flowers?",
    o: ["Commelina", "Vallisneria", "Zostera", "Yucca"],
    a: 0,
    e: "*Viola* (common pansy), *Oxalis* and ***Commelina*** produce two types of flowers: chasmogamous (open, exposed anthers and stigma) and cleistogamous (never open). Vallisneria and Zostera are water-pollinated; Yucca is moth-pollinated.",
  },
  {
    d: 2, t: 60,
    q: "**Assertion (A):** Cleistogamous flowers produce assured seed set even in the absence of pollinators.\n\n**Reason (R):** In cleistogamous flowers the anthers and stigma lie close to each other and the anthers dehisce inside the closed flower.",
    o: AR,
    a: 0,
    e: "Cleistogamous flowers do not open at all. Their anthers dehisce in the closed flower and, lying close to the stigma, effect pollination. These flowers are invariably **autogamous**, which is exactly why seed set is assured without pollinators. R explains A.",
    h: "Ask what makes these flowers independent of pollinators.",
  },
  {
    d: 2, t: 55,
    q: "Geitonogamy is best described as pollination that is:",
    o: [
      "Genetically cross-pollination but functionally self-pollination",
      "Functionally cross-pollination but genetically similar to autogamy",
      "Between flowers of two different plants of the same species",
      "Always restricted to cleistogamous flowers",
    ],
    a: 1,
    e: "In geitonogamy pollen goes from the anther to the stigma of **another flower of the same plant**. It needs a pollinating agent, so it is functionally cross-pollination, but the pollen comes from the same plant, so it is **genetically similar to autogamy**. Option 3 describes xenogamy; option 1 reverses the description.",
    h: "Same plant, different flower.",
  },
  {
    d: 1, t: 40,
    q: "Transfer of pollen grains from the anther to the stigma of a different plant is called:",
    o: ["Autogamy", "Geitonogamy", "Cleistogamy", "Xenogamy"],
    a: 3,
    e: "**Xenogamy** is transfer of pollen to the stigma of a different plant; it is the only type of pollination that brings genetically different pollen to the stigma. Autogamy is within the same flower; geitonogamy between flowers of the same plant.",
  },
  {
    d: 3, t: 75,
    q: "How many of the following are features of wind-pollinated flowers?\n\n(i) Light, non-sticky pollen grains  \n(ii) Well-exposed stamens  \n(iii) Large, often feathery stigma  \n(iv) A single ovule in each ovary  \n(v) Nectar and strong fragrance  \n(vi) Brightly coloured petals",
    o: ["Three", "Four", "Five", "Six"],
    a: 1,
    e: "Wind-pollinated flowers have light, non-sticky pollen (i), well-exposed stamens for easy dispersal (ii), large often-feathery stigmas to trap pollen (iii), and often a single ovule per ovary with numerous flowers packed into an inflorescence (iv). Nectar, fragrance (v) and bright colours (vi) attract animals and are not needed for wind pollination. So **four** features.",
    h: "Rewards and advertisements are only for animal pollinators.",
  },
  {
    d: 1, t: 40,
    q: "The 'tassels' seen on a corn cob are:",
    o: ["Anthers", "Stigma and style", "Bracts", "Filaments"],
    a: 1,
    e: "The tassels of the corn cob are the **stigma and style**, which wave in the wind to trap pollen grains, an adaptation for wind pollination.",
  },
  {
    d: 2, t: 50,
    q: "In which pair are both plants pollinated by water?",
    o: [
      "Vallisneria and Zostera",
      "Water hyacinth and water lily",
      "Vallisneria and water lily",
      "Hydrilla and water hyacinth",
    ],
    a: 0,
    e: "Water pollination is found in about 30 genera, mostly monocots: *Vallisneria* and *Hydrilla* in fresh water and marine sea-grasses such as ***Zostera***. Water hyacinth and water lily are aquatic, but their flowers emerge above the water and are pollinated by insects or wind.",
    h: "Not every aquatic plant is water-pollinated.",
  },
  {
    d: 2, t: 60,
    q: "**Assertion (A):** Not all aquatic plants use water as the agent of pollination.\n\n**Reason (R):** In water hyacinth and water lily the flowers emerge above the level of water and are pollinated by insects or wind.",
    o: AR,
    a: 0,
    e: "In most aquatic plants such as water hyacinth and water lily, the flowers emerge above water and are pollinated by insects or wind, as in land plants. That is why not all aquatic plants are water-pollinated. A is true and R explains it.",
    h: "R gives the example that makes A true.",
  },
  {
    d: 3, t: 90,
    q: "How many of the following statements about water pollination are correct?\n\n(i) In Vallisneria, female flowers reach the water surface on long stalks.  \n(ii) In Vallisneria, male flowers or pollen grains are released onto the surface of water.  \n(iii) In sea-grasses, female flowers stay submerged and pollen grains released into the water are long and ribbon-like.  \n(iv) Pollen grains of most water-pollinated species are protected from wetting by a mucilaginous covering.  \n(v) Water pollination is common in dicotyledons.",
    o: ["Two", "Three", "Four", "Five"],
    a: 2,
    e: "Statements (i)–(iv) are NCERT lines: Vallisneria female flowers reach the surface on long stalks; male flowers/pollen float on the surface and are carried passively by currents; in sea-grasses the pollen is long and ribbon-like and carried inside the water; a mucilaginous covering protects pollen from wetting. (v) is wrong: water pollination is limited to about 30 genera, **mostly monocotyledons**. So **four** are correct.",
    h: "Check which plant group the 30 water-pollinated genera mostly belong to.",
    x: ["NEET"],
  },
  {
    d: 1, t: 40,
    q: "The dominant biotic pollinating agents among animals are:",
    o: ["Birds", "Bats", "Bees", "Lizards"],
    a: 2,
    e: "Among animals, insects, and particularly **bees**, are the dominant biotic pollinating agents. Birds (sunbirds, hummingbirds), bats, some primates and reptiles also pollinate but much less commonly.",
  },
  {
    d: 2, t: 45,
    q: "The tallest flower, about 6 feet in height, is borne by:",
    o: ["Rafflesia", "Amorphophallus", "Yucca", "Victoria"],
    a: 1,
    e: "NCERT cites ***Amorphophallus***, whose flower is about 6 feet tall, as an example of a flower that provides a safe place for insects to lay eggs. Rafflesia has the largest single flower by diameter, a different record.",
    h: "Tallest, not widest.",
  },
  {
    d: 3, t: 80,
    q: "**Statement I:** In Yucca, the plant and a species of moth cannot complete their life cycles without each other.\n\n**Statement II:** The moth deposits its eggs in the locule of the ovary, and the flower in turn gets pollinated by the moth.",
    o: ST,
    a: 0,
    e: "This is the NCERT example of mutualism in pollination. The moth deposits eggs in the locule of the ovary and pollinates the flower; the larvae come out of the eggs as the seeds start developing. Neither partner completes its life cycle without the other. Both statements are correct.",
    h: "This is an obligate plant–pollinator relationship.",
    x: ["NEET"],
  },
  {
    d: 2, t: 50,
    q: "Unisexuality in which plant prevents both autogamy and geitonogamy?",
    o: ["Maize", "Papaya", "Castor", "Cucumber"],
    a: 1,
    e: "**Papaya** is dioecious: male and female flowers are on different plants, so both autogamy and geitonogamy are impossible. Castor, maize and cucumber are monoecious: they bear both male and female flowers on the same plant, which prevents autogamy but not geitonogamy.",
    h: "Monoecious vs dioecious.",
  },
  {
    d: 3, t: 90,
    q: "How many of the following discourage autogamy (self-pollination within the same flower)?\n\n(i) Self-incompatibility  \n(ii) Pollen release and stigma receptivity not synchronised  \n(iii) Anther and stigma placed at different positions  \n(iv) Monoecy (as in castor and maize)  \n(v) Dioecy (as in papaya)  \n(vi) Cleistogamy",
    o: ["Three", "Four", "Five", "Six"],
    a: 2,
    e: "(i)–(iii) are the outbreeding devices NCERT lists for bisexual flowers. Unisexual flowers make autogamy impossible whether they are on the same plant (iv, monoecy, which still allows geitonogamy) or on different plants (v, dioecy). Cleistogamy (vi) *ensures* autogamy. So **five** discourage autogamy. Students often drop (iv), but monoecy prevents autogamy and fails only against geitonogamy.",
    h: "Monoecy fails against geitonogamy, not against autogamy.",
    x: ["NEET"],
  },
  {
    d: 2, t: 55,
    q: "Self-incompatibility in flowering plants is:",
    o: [
      "A genetic mechanism that prevents self-pollen from fertilising ovules by inhibiting pollen germination or pollen-tube growth in the pistil",
      "The physical separation of anther and stigma in the same flower",
      "Production of male and female flowers on separate plants",
      "Failure of pollen grains to form due to a defective tapetum",
    ],
    a: 0,
    e: "Self-incompatibility is a **genetic** mechanism: the pistil recognises pollen from the same flower or plant and blocks it by inhibiting pollen germination or pollen-tube growth. Option 2 is herkogamy-type spatial separation and option 3 is dioecy. These are separate outbreeding devices.",
    h: "The answer is about recognition by the pistil, not floral structure.",
  },
  {
    d: 2, t: 60,
    q: "In an artificial hybridisation programme, emasculation is NOT needed when:",
    o: [
      "The female parent bears bisexual flowers",
      "The female parent bears unisexual flowers",
      "The male parent bears unisexual flowers",
      "The pollen is to be stored before use",
    ],
    a: 1,
    e: "Emasculation is removal of anthers from a bisexual flower bud before dehiscence, so the flower cannot self-pollinate. If the **female parent bears unisexual (female) flowers**, there are no anthers to remove; the buds are simply bagged, and when the stigma becomes receptive they are dusted with the desired pollen and rebagged.",
    h: "Emasculation removes anthers. When are there none?",
  },
  {
    d: 1, t: 40,
    q: "After entering the embryo sac, the pollen tube releases the two male gametes into the:",
    o: ["Egg cell", "Central cell", "Cytoplasm of a synergid", "Antipodal cell"],
    a: 2,
    e: "The pollen tube enters one of the **synergids** through the filiform apparatus and releases the two male gametes into the cytoplasm of that synergid. One gamete then fuses with the egg (syngamy), and the other with the two polar nuclei in the central cell (triple fusion).",
  },
  {
    d: 1, t: 40,
    q: "Triple fusion in angiosperms results in the formation of the:",
    o: ["Zygote", "Primary endosperm nucleus", "Perisperm", "Secondary nucleus only"],
    a: 1,
    e: "Triple fusion is the fusion of one male gamete with the two polar nuclei in the central cell, forming the triploid **primary endosperm nucleus (PEN)**. The central cell becomes the primary endosperm cell (PEC) and develops into the endosperm. The zygote comes from syngamy.",
  },
  {
    d: 3, t: 60,
    q: "How many nuclei in total take part in fusion during double fertilisation in a typical angiosperm?",
    o: ["Two", "Three", "Four", "Five"],
    a: 3,
    e: "Syngamy involves **2** nuclei (male gamete + egg). Triple fusion involves **3** nuclei (male gamete + 2 polar nuclei). Total = 2 + 3 = **5**. Three counts only the triple fusion; four counts the two male gametes plus egg and only one polar nucleus.",
    h: "Add up the nuclei in syngamy and in triple fusion.",
    x: ["NEET"],
  },
  {
    d: 2, t: 60,
    q: "**Assertion (A):** In angiosperms, endosperm development precedes embryo development.\n\n**Reason (R):** Endosperm cells are filled with reserve food materials used to nourish the developing embryo.",
    o: AR,
    a: 0,
    e: "NCERT: 'Endosperm development precedes embryo development. Why?' The PEC divides repeatedly to form triploid endosperm tissue full of reserve food, which is used for the nutrition of the developing embryo. The embryo can develop only once this food tissue is available, so R explains A.",
    h: "The embryo needs a food supply before it grows.",
  },
  {
    d: 2, t: 50,
    q: "Tender coconut water and the surrounding white kernel represent, respectively:",
    o: [
      "Cellular endosperm and free-nuclear endosperm",
      "Free-nuclear endosperm and cellular endosperm",
      "Perisperm and endosperm",
      "Endosperm and cotyledon",
    ],
    a: 1,
    e: "The coconut water is **free-nuclear endosperm**, made of thousands of nuclei. The surrounding white kernel is the **cellular endosperm**. Coconut is NCERT's standard example of the free-nuclear-to-cellular sequence; options 1 and 3 reverse or mislabel it.",
    h: "The liquid part has nuclei without cell walls.",
  },
  {
    d: 2, t: 50,
    q: "In which seed is the endosperm completely consumed by the developing embryo before seed maturation?",
    o: ["Castor", "Coconut", "Groundnut", "Wheat"],
    a: 2,
    e: "In pea, **groundnut** and beans the endosperm is fully used up during embryo development (non-albuminous seeds). In castor and coconut the endosperm persists in the mature seed (albuminous); wheat, maize and barley also retain endosperm.",
    h: "Non-albuminous seeds store food in the cotyledons.",
  },
  {
    d: 3, t: 70,
    q: "In seeds of black pepper and beet, the residual persistent nucellus is called perisperm. Its ploidy is:",
    o: ["n", "2n", "3n", "4n"],
    a: 1,
    e: "Generally the nucellus is used up, but in a few seeds such as black pepper and beet, remnants of it persist as **perisperm**. The nucellus is sporophytic tissue of the ovule, so perisperm is **2n**. Endosperm, the usual food tissue, is 3n; students often mix the two up.",
    h: "Perisperm is not formed by fertilisation; it is leftover ovule tissue.",
    x: ["NEET"],
  },
  {
    d: 2, t: 50,
    q: "The correct sequence of stages in the development of a dicot embryo is:",
    o: [
      "Proembryo → heart-shaped → globular → mature embryo",
      "Globular → proembryo → heart-shaped → mature embryo",
      "Proembryo → globular → heart-shaped → mature embryo",
      "Heart-shaped → globular → proembryo → mature embryo",
    ],
    a: 2,
    e: "The zygote, at the micropylar end of the embryo sac, gives rise to the **proembryo** and then to the **globular**, **heart-shaped** and mature embryo. The heart shape appears when the two cotyledon primordia start to grow, which comes after the globular stage.",
    h: "The two lobes of the 'heart' are cotyledons beginning to form.",
  },
  {
    d: 2, t: 50,
    q: "In a grass embryo, the coleoptile is:",
    o: [
      "The single shield-shaped cotyledon",
      "A hollow foliar structure enclosing the shoot apex and a few leaf primordia",
      "An undifferentiated sheath enclosing the radicle and root cap",
      "The portion of the embryonal axis below the cotyledon",
    ],
    a: 1,
    e: "In the grass family the cotyledon is called the **scutellum** and is placed laterally. The epicotyl has a shoot apex and a few leaf primordia enclosed in a hollow foliar structure, the **coleoptile**. The radicle and root cap are enclosed by the **coleorhiza**. Option 1 is the scutellum, option 3 the coleorhiza.",
    h: "'Ptile' goes with plumule (shoot); 'rhiza' with root.",
  },
  {
    d: 3, t: 90,
    q: "Match column I with column II:\n\nA. Scutellum  \nB. Coleorhiza  \nC. Epicotyl  \nD. Hypocotyl\n\nI. Portion of the embryonal axis below the level of the cotyledons  \nII. Undifferentiated sheath enclosing the radicle and root cap  \nIII. Single cotyledon of the grass embryo  \nIV. Portion of the embryonal axis above the level of the cotyledons",
    o: [
      "A-III, B-II, C-IV, D-I",
      "A-III, B-II, C-I, D-IV",
      "A-II, B-III, C-IV, D-I",
      "A-IV, B-II, C-III, D-I",
    ],
    a: 0,
    e: "Scutellum = cotyledon of grasses (III). Coleorhiza = sheath around radicle and root cap (II). Epicotyl = part of the axis **above** the cotyledons, ending in the plumule (IV). Hypocotyl = part **below** the cotyledons, ending in the radicle (I). Option 2 swaps epicotyl and hypocotyl, the usual slip.",
    h: "Epi = above, hypo = below.",
    x: ["NEET"],
  },
  {
    d: 1, t: 45,
    q: "Which of the following post-fertilisation changes is correctly matched?",
    o: ["Ovary wall → seed coat", "Integuments → pericarp", "Ovule → seed", "Zygote → endosperm"],
    a: 2,
    e: "After fertilisation the **ovule develops into the seed** and the ovary into the fruit. The integuments form the seed coat (testa and tegmen), the ovary wall forms the pericarp, the zygote forms the embryo and the PEN forms the endosperm. Options 1 and 2 swap pericarp and seed coat.",
  },
  {
    d: 2, t: 60,
    q: "Which statement about seeds is INCORRECT?",
    o: [
      "A mature seed generally has only 10–15 per cent moisture by mass",
      "Seeds of Lupinus arcticus from the Arctic Tundra germinated after an estimated 10,000 years of dormancy",
      "A 2000-year-old viable seed of the date palm was recovered from King Herod's palace near the Dead Sea",
      "Seeds of Orobanche and Striga are large and few in number per fruit",
    ],
    a: 3,
    e: "Options 1–3 are NCERT facts: seeds dry to 10–15% moisture and become dormant; the lupine record (~10,000 years) and the 2000-year-old *Phoenix dactylifera* seed show how long seeds can stay viable. Option 4 is wrong: parasitic plants such as *Orobanche* and *Striga* produce **thousands of tiny seeds** per fruit, as do some orchids.",
    h: "Parasites produce huge numbers of very small seeds.",
  },
  {
    d: 3, t: 80,
    q: "**Statement I:** In apple, strawberry and cashew, the thalamus also contributes to fruit formation, so these are called false fruits.\n\n**Statement II:** Parthenocarpic fruits such as banana develop without fertilisation and can be induced by applying growth hormones.",
    o: ST,
    a: 0,
    e: "Both are NCERT facts. In most plants the fruit develops only from the ovary (true fruit), but in apple, strawberry and cashew the **thalamus** also contributes, so they are false fruits. Parthenocarpic fruits develop without fertilisation and are seedless; banana is the example, and parthenocarpy can be induced with growth hormones.",
    h: "Both statements are textbook lines; check each for a swapped word.",
    x: ["NEET"],
  },
  {
    d: 1, t: 40,
    q: "Banana is an example of a fruit that develops without fertilisation. Such fruits are called:",
    o: ["False fruits", "Parthenocarpic fruits", "Apomictic fruits", "Aggregate fruits"],
    a: 1,
    e: "Fruits that develop without fertilisation are **parthenocarpic**; they are seedless, and banana is the classic example. Apomixis forms *seeds* without fertilisation, which is a different process. False fruits involve the thalamus.",
  },
  {
    d: 3, t: 90,
    q: "How many of the following statements about apomixis are correct?\n\n(i) Apomixis is the production of seeds without fertilisation.  \n(ii) It is a form of asexual reproduction that mimics sexual reproduction.  \n(iii) It is found in some species of Asteraceae and grasses.  \n(iv) Nucellar cells protruding into the embryo sac can form embryos, as in many Citrus and mango varieties.  \n(v) Apomictic hybrid seeds show segregation of characters in the progeny, so they must be bought every year.",
    o: ["Two", "Three", "Four", "Five"],
    a: 2,
    e: "(i)–(iv) are correct NCERT lines. In some species the diploid egg cell forms without reduction division and develops into an embryo without fertilisation; in others (Citrus, mango) nucellar cells grow into the embryo sac and form embryos, giving polyembryony. (v) is wrong: ordinary hybrid seeds segregate, so farmers must buy them every year. **Apomictic** hybrid seed shows **no** segregation, so farmers could keep using it. That is why breeders want apomixis genes in hybrids. Four correct.",
    h: "Why do breeders want to introduce apomixis into hybrid varieties?",
    x: ["NEET"],
  },
];
