import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Assertion–reason options used in NEET-style questions. */
const AR = [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Organisms and Populations (NCERT Class 12, rationalised)           */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-organisms-populations",
    title: "Organisms and Populations",
    icon: "🦌",
    description: "Population attributes, age pyramids, exponential and logistic growth, life history variation and the six population interactions, plus the organism-and-environment topics that ISC still teaches.",
    lessons: [
      /* ---------------- Board lesson 1 ---------------- */
      {
        slug: "c12-op-population-growth",
        title: "Population Attributes and Population Growth",
        summary: "What a population is, birth and death rates, sex ratio, age pyramids, how density is measured, the growth equation, and the exponential and logistic growth models.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🐅",
            caption: "Every few years forest staff across India count tigers. They rarely see most of them: they count pug marks, camera-trap photos and droppings. That count is a population study.",
          },
          {
            type: "text",
            md: "A **population** is a group of individuals of the same species living in a well-defined geographical area, sharing or competing for similar resources, and able to interbreed. Ecology at this level asks how such groups grow, shrink and interact.\n\nAn individual is born and dies, but it has no birth *rate*. A population has attributes that an individual does not: **birth rate (natality)**, **death rate (mortality)**, **sex ratio** and **age distribution**. Birth and death rates are always expressed **per capita**, that is, as a change in numbers relative to the members of the population.",
          },
          {
            type: "table",
            headers: ["Age pyramid shape", "What the base shows", "Population status"],
            rows: [
              ["Triangular (broad base)", "Many pre-reproductive individuals", "**Expanding** (growing)"],
              ["Bell-shaped", "Pre-reproductive about equal to reproductive", "**Stable**"],
              ["Urn-shaped (narrow base)", "Fewer young than reproductive adults", "**Declining**"],
            ],
          },
          {
            type: "text",
            md: "An **age pyramid** plots the pre-reproductive, reproductive and post-reproductive groups as stacked bars; for humans it is usually drawn separately for males and females.\n\nThe size of a population is technically its **population density (N)**. It need not always be a head count. Where one big individual matters more than many small ones (a single banyan tree among hundreds of *Parthenium* plants), **percent cover** or **biomass** is a better measure. When only comparison is needed, a **relative density** such as fish caught per trap is enough. For shy animals, **indirect** evidence is used: tiger censuses rely on pug marks and faecal pellets.",
          },
          {
            type: "example",
            title: "Per-capita birth and death rates",
            problem: "A village tank had 60 lotus plants last year. Reproduction added 15 new plants this year. In a grain store, 20 out of 250 rice weevils died in one week. Find the birth rate of the lotus and the death rate of the weevils.",
            steps: [
              "Birth rate = new individuals ÷ starting population = 15 ÷ 60 = 0.25.",
              "Units: 0.25 offspring per lotus per year.",
              "Death rate = deaths ÷ starting population = 20 ÷ 250 = 0.08.",
              "Units: 0.08 individuals per weevil per week.",
            ],
            answer: "Lotus birth rate 0.25 offspring per plant per year; weevil death rate 0.08 per weevil per week.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "An age pyramid with a very narrow base and a wide middle indicates a population that is:",
                options: ["Expanding", "Stable", "Declining", "At carrying capacity and growing fast"],
                answer: 2,
                explain: "A narrow base means few pre-reproductive individuals compared with reproductive ones, so numbers will fall: an urn-shaped, declining population.",
              },
            ],
          },
          {
            type: "formula",
            tex: t`N_{t+1} = N_t + \left[(B + I) - (D + E)\right]`,
            caption: "Density after one time period: births (B) and immigration (I) add; deaths (D) and emigration (E) remove.",
          },
          {
            type: "text",
            md: "Of the four processes, **natality and immigration** increase density; **mortality and emigration** decrease it. Under normal conditions births and deaths matter most, but immigration can dominate briefly, as when migratory birds arrive at a wetland in winter.\n\n**Exponential growth.** When resources are unlimited, each species can show its full innate potential to grow. If b and d are per-capita birth and death rates, the change in N per unit time is $dN/dt = (b - d)N$. Writing $b - d = r$, the **intrinsic rate of natural increase**, gives $dN/dt = rN$. NCERT quotes r = 0.015 for the Norway rat, 0.12 for the flour beetle, and 0.0205 for the human population of India in 1981. Plotting N against time gives a **J-shaped** curve.",
          },
          {
            type: "formula",
            tex: t`\frac{dN}{dt} = rN \qquad N_t = N_0\, e^{rt}`,
            caption: "Exponential growth: differential and integral forms (e = 2.71828, the base of natural logarithms).",
          },
          {
            type: "text",
            md: "**Logistic growth.** No real habitat has unlimited resources. Individuals compete, the fittest survive and reproduce, and the population settles at the **carrying capacity (K)**, the maximum number the habitat can support. Such a population shows a lag phase, then acceleration, then deceleration, and finally an **asymptote** at K. The curve is **sigmoid (S-shaped)**; this is **Verhulst–Pearl logistic growth**. NCERT calls it the more realistic model.\n\n**Life history variation.** Populations evolve to maximise reproductive fitness (Darwinian fitness, a high r) in their habitat. Some species breed only **once** in a lifetime (Pacific salmon, bamboo); most birds and mammals breed **many times**. Some produce **many small offspring** (oysters, pelagic fishes); others produce **a few large offspring** (birds, mammals).",
          },
          {
            type: "formula",
            tex: t`\frac{dN}{dt} = rN\left(\frac{K - N}{K}\right)`,
            caption: "Logistic growth (Verhulst–Pearl). Growth is fastest at N = K/2 and stops at N = K.",
          },
          {
            type: "mistake",
            wrong: "In the logistic model the population grows fastest when it is largest, because more individuals means more births.",
            right: "Growth (dN/dt) is fastest at **N = K/2**. As N approaches K, the factor (K − N)/K approaches zero, so growth slows and stops at K.",
            why: "The exponential idea that more individuals give more births is true only while resources are plentiful. In the logistic equation the term (K − N)/K represents environmental resistance, which grows as N rises.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the phases of logistic (sigmoid) growth.",
              items: ["Lag phase", "Acceleration", "Deceleration", "Asymptote at carrying capacity"],
              explain: "Growth starts slowly, speeds up while resources are plentiful, slows as competition rises, and levels off when N reaches K.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a 3-mark 'growth models' question, write both equations, name r and K, and sketch both curves on the same axes (J for exponential, S for logistic, with K as a dotted line). Label the axes 'Population density (N)' and 'Time (t)'. Many students lose a mark for not labelling K.",
          },
          {
            type: "keypoints",
            items: [
              "Population attributes: birth rate, death rate (per capita), sex ratio and age distribution.",
              "Age pyramids: triangular = expanding, bell = stable, urn = declining.",
              "N(t+1) = N(t) + [(B + I) − (D + E)].",
              "Exponential: dN/dt = rN, J-shaped; logistic: dN/dt = rN(K − N)/K, sigmoid, more realistic.",
              "Life history: breed once (salmon, bamboo) or many times; many small or few large offspring.",
            ],
          },
        ],
        flashcards: [
          { front: "Population (ecology)", back: "Individuals of one species in a defined area, sharing or competing for resources and able to interbreed." },
          { front: "Four population attributes an individual lacks", back: "Birth rate, death rate, sex ratio and age distribution." },
          { front: "Urn-shaped age pyramid", back: "Fewer pre-reproductive than reproductive individuals: a declining population." },
          { front: "Measures of population density other than head count", back: "Percent cover, biomass, relative density (e.g. fish per trap), and indirect signs such as pug marks and faecal pellets." },
          { front: "Growth equation over one time step", back: "N(t+1) = N(t) + [(B + I) − (D + E)]." },
          { front: "Intrinsic rate of natural increase (r)", back: "r = b − d, per-capita birth rate minus death rate; e.g. 0.0205 for India in 1981." },
          { front: "Carrying capacity (K)", back: "The maximum population a habitat can support, where logistic growth levels off." },
          { front: "Shape of exponential and logistic curves", back: "Exponential: J-shaped. Logistic (Verhulst–Pearl): sigmoid, S-shaped." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A deer population of 500 has 60 births, 20 immigrants, 40 deaths and 15 emigrants in a year. What is the population at the end of the year?",
            answer: 525,
            explain: "N(t+1) = 500 + [(60 + 20) − (40 + 15)] = 500 + 80 − 55 = 525.",
          },
          {
            kind: "mcq",
            q: "In the logistic growth equation, what does K stand for?",
            options: ["Intrinsic rate of natural increase", "Carrying capacity", "Rate of immigration", "Number of individuals at time zero"],
            answer: 1,
            explain: "K is the carrying capacity. r is the intrinsic rate of natural increase and N₀ is the starting population.",
          },
          {
            kind: "numeric",
            q: "For a logistic population with r = 0.2 per year and K = 1000, find dN/dt when N = 250.",
            answer: 37.5,
            unit: "individuals per year",
            explain: "dN/dt = rN(K − N)/K = 0.2 × 250 × (750/1000) = 50 × 0.75 = 37.5.",
            difficulty: 2,
            hint: "Multiply rN by the fraction of K still unused.",
          },
          {
            kind: "truefalse",
            q: "Pacific salmon and bamboo breed only once in their lifetime.",
            answer: true,
            explain: "NCERT gives these as examples of organisms that breed once; most birds and mammals breed many times.",
          },
          {
            kind: "multi",
            q: "Which processes increase population density?",
            options: ["Natality", "Mortality", "Immigration", "Emigration"],
            answers: [0, 2],
            explain: "Births (natality) and immigration add individuals; deaths and emigration remove them.",
          },
          {
            kind: "mcq",
            q: "A habitat with one huge banyan tree and 200 Parthenium plants is best described for ecological purposes by:",
            options: ["A head count of 201 plants", "Percent cover or biomass", "Sex ratio", "Number caught per trap"],
            answer: 1,
            explain: "A head count treats the banyan as equal to one small weed. Percent cover or biomass reflects its real share of the community.",
          },
          {
            kind: "fill",
            q: "A population growing with unlimited resources shows a ___-shaped growth curve.",
            answer: ["J", "J shaped"],
            explain: "Exponential growth, dN/dt = rN, gives a J-shaped curve.",
          },
          {
            kind: "mcq",
            q: "At which population size is logistic growth rate (dN/dt) maximum?",
            options: ["N close to 0", "N = K/2", "N = K", "N greater than K"],
            answer: 1,
            explain: "rN(K − N)/K is a product of N and (K − N); it is largest when N = K/2. At N = K growth is zero.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Board lesson 2 ---------------- */
      {
        slug: "c12-op-interactions",
        title: "Population Interactions",
        summary: "The six interactions between species, with the NCERT examples for predation, competition, parasitism, commensalism and mutualism.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🐄",
            caption: "Walk past grazing cattle in any Indian village and you will see white cattle egrets close to their feet, snapping up the insects the cattle disturb. The egret gains; the cattle neither gain nor lose.",
          },
          {
            type: "text",
            md: "No species lives alone. Even a plant needs soil microbes to break down organic matter, and animals need plants or other animals for food. **Interspecific interactions** happen between populations of two different species. Each interaction can be **beneficial (+)**, **detrimental (−)** or **neutral (0)** for each partner.",
          },
          {
            type: "table",
            headers: ["Interaction", "Species A", "Species B", "Quick example"],
            rows: [
              ["Mutualism", "+", "+", "Lichen (fungus + alga or cyanobacterium)"],
              ["Competition", "−", "−", "Flamingoes and fishes for zooplankton"],
              ["Predation", "+", "−", "Tiger and deer"],
              ["Parasitism", "+", "−", "*Cuscuta* on hedge plants"],
              ["Commensalism", "+", "0", "Orchid on a mango branch"],
              ["Amensalism", "−", "0", "One species harmed, the other unaffected"],
            ],
          },
          {
            type: "text",
            md: "**Predation** is nature's way of moving energy fixed by plants to higher trophic levels. A herbivore eating a plant is, ecologically, not very different from a predator. Predators also keep prey populations under control: the prickly pear cactus spread over millions of hectares of Australian rangeland after it was introduced in the early 1920s, and was brought under control only after a cactus-feeding moth from its native home was introduced. Predators also **maintain species diversity** by reducing competition among prey. When Robert Paine removed the starfish *Pisaster* from a rocky intertidal community on the American Pacific coast, more than 10 invertebrate species became extinct within a year because of competition among the prey.\n\nPrey defend themselves. Some insects and frogs are **cryptically coloured** (camouflaged). The **Monarch butterfly** is distasteful because, as a caterpillar, it feeds on a poisonous weed and stores the chemical. Plants use thorns (*Acacia*, cactus) and chemicals: *Calotropis* makes highly poisonous **cardiac glycosides**, and nicotine, caffeine, quinine, strychnine and opium are produced as defences against grazers.",
          },
          {
            type: "example",
            title: "Naming the interaction",
            problem: "Classify each pair and give the signs: (i) a female koel lays her eggs in a crow's nest; (ii) a clownfish lives among the stinging tentacles of a sea anemone; (iii) a fig species and its partner wasp.",
            steps: [
              "(i) The crow raises the koel's young and loses its own effort: koel +, crow −. This is **brood parasitism**, a kind of parasitism. The koel's eggs resemble the crow's in size and colour, so they are less likely to be detected.",
              "(ii) The clownfish gains protection from predators; the anemone does not appear to gain anything: +, 0, **commensalism**.",
              "(iii) The wasp pollinates the fig while laying eggs in its fruit, and its larvae feed on some developing seeds; the fig gets pollinated: +, +, **mutualism**.",
            ],
            answer: "(i) Brood parasitism (+, −); (ii) commensalism (+, 0); (iii) mutualism (+, +).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which interaction is shown by barnacles growing on the back of a whale?",
                options: ["Mutualism", "Commensalism", "Parasitism", "Amensalism"],
                answer: 1,
                explain: "The barnacles get a surface and transport; the whale is neither helped nor harmed: commensalism (+, 0).",
              },
            ],
          },
          {
            type: "text",
            md: "**Competition** was thought by Darwin to be a strong force in natural selection. It is a process in which the **fitness of one species is lowered by the presence of another**. It can happen between unrelated species (flamingoes and resident fishes compete for zooplankton in some shallow South American lakes) and even when resources are not limiting, by **interference competition**, where one species interferes with the other's feeding. After goats were introduced to the Galapagos Islands, the **Abingdon tortoise** became extinct within a decade because goats grazed more efficiently.\n\n**Competitive release**: a species whose range is limited by a superior competitor expands when that competitor is removed. In Connell's experiments on the rocky coast of Scotland, the larger barnacle *Balanus* dominated the intertidal zone and excluded the smaller *Chthamalus*. **Gause's competitive exclusion principle**: two closely related species competing for the same resources cannot coexist indefinitely; the inferior one is eventually eliminated. Species can avoid this by **resource partitioning**: MacArthur showed that five closely related warbler species living on the same tree avoided competition by foraging in different parts of it.",
          },
          {
            type: "mistake",
            wrong: "Competition happens only between closely related species, and only when food runs short.",
            right: "Unrelated species compete too (flamingoes and fishes), and competition can occur with plenty of resources, through interference.",
            why: "Gause's principle is about closely related species, which is why students over-generalise it. NCERT defines competition by its effect, lowered fitness, not by relatedness or scarcity.",
          },
          {
            type: "text",
            md: "**Parasitism.** Parasites depend on a single host species (they are often host-specific), so host and parasite tend to **coevolve**. Their adaptations include loss of unnecessary sense organs, adhesive organs or suckers to cling to the host, loss of the digestive system, and a high reproductive capacity. Many have complex life cycles: the human liver fluke needs two intermediate hosts, a snail and a fish; the malarial parasite needs a mosquito vector. **Ectoparasites** feed on the external surface (lice on humans, ticks on dogs, copepods on marine fish, and *Cuscuta*, which has no chlorophyll and no leaves). **Endoparasites** live inside the host's body.\n\n**Commensalism**: an orchid growing as an epiphyte on a mango branch; barnacles on a whale; cattle egrets and grazing cattle; clownfish and sea anemone.\n\n**Mutualism**: lichens; **mycorrhizae** (fungi with roots of higher plants: the fungus helps absorb nutrients, the plant supplies carbohydrates); pollination and seed dispersal by animals; the **fig and wasp**, where each fig species is pollinated only by its partner wasp species. The Mediterranean orchid *Ophrys* uses **sexual deceit**: one petal looks like a female bee, the male bee 'pseudocopulates' with it and carries pollen away. If the female bee's colour pattern changes even slightly during evolution, pollination falls unless the orchid coevolves.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each example with its interaction.",
              pairs: [
                ["Lichen", "Mutualism (+, +)"],
                ["Balanus excluding Chthamalus", "Competition (−, −)"],
                ["Starfish eating mussels and snails", "Predation (+, −)"],
                ["Tick on a dog", "Parasitism (+, −), ectoparasite"],
                ["Orchid on a mango branch", "Commensalism (+, 0)"],
              ],
              explain: "Look at who gains and who loses. Predation and parasitism share the signs (+, −); a parasite usually lives on or in a host and does not kill it quickly.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Interaction questions are marked on two things: the correct name and a correct example. Write the signs (+, −, 0) as well; examiners accept them as part of the definition. Use NCERT examples; 'lion and deer' is fine for predation, but for commensalism and mutualism stick to the textbook pairs.",
          },
          {
            type: "keypoints",
            items: [
              "Mutualism +/+, competition −/−, predation and parasitism +/−, commensalism +/0, amensalism −/0.",
              "Predators transfer energy, control prey and maintain diversity (Paine's *Pisaster* experiment).",
              "Gause's competitive exclusion principle; resource partitioning in MacArthur's warblers; competitive release in Connell's barnacles.",
              "Parasite adaptations: lost sense organs and gut, suckers, high fecundity; brood parasitism in the koel.",
              "Mutualism: lichens, mycorrhizae, fig–wasp, *Ophrys* and bee (sexual deceit).",
            ],
          },
        ],
        flashcards: [
          { front: "Interaction with signs (+, 0)", back: "Commensalism, e.g. orchid on a mango branch, cattle egret and cattle." },
          { front: "Interaction with signs (−, 0)", back: "Amensalism: one species is harmed, the other is unaffected." },
          { front: "Gause's competitive exclusion principle", back: "Two closely related species competing for the same resources cannot coexist indefinitely; the inferior one is eliminated." },
          { front: "Robert Paine's experiment", back: "Removing the starfish *Pisaster* from an intertidal community led to the extinction of more than 10 invertebrate species within a year." },
          { front: "Abingdon tortoise", back: "Became extinct in the Galapagos within a decade of goats being introduced, an example of competition." },
          { front: "Brood parasitism", back: "A parasitic bird (koel) lays eggs in a host's nest (crow) and the host raises the young." },
          { front: "Ophrys", back: "Mediterranean orchid; a petal mimics a female bee, so the male bee pseudocopulates and pollinates it (sexual deceit)." },
          { front: "Plant chemicals used against grazers (NCERT)", back: "Cardiac glycosides (*Calotropis*), nicotine, caffeine, quinine, strychnine, opium." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Five closely related warbler species feed on the same tree without excluding one another. This is explained by:",
            options: ["Competitive exclusion", "Resource partitioning", "Competitive release", "Brood parasitism"],
            answer: 1,
            explain: "MacArthur showed the warblers forage in different parts of the tree, dividing the resource and avoiding competition.",
          },
          {
            kind: "mcq",
            q: "The Monarch butterfly is avoided by predators because:",
            options: ["It is cryptically coloured", "It stores a chemical from a poisonous weed eaten as a caterpillar", "It has thorns on its wings", "It mimics a female bee"],
            answer: 1,
            explain: "The caterpillar feeds on a poisonous weed and keeps the chemical, which makes the adult distasteful.",
          },
          {
            kind: "truefalse",
            q: "Cuscuta is an endoparasite because it has no chlorophyll.",
            answer: false,
            explain: "Cuscuta grows on the outside of hedge plants and draws nutrients from them, so NCERT lists it with the ectoparasites.",
          },
          {
            kind: "multi",
            q: "Which are adaptations of parasites listed in NCERT?",
            options: ["Loss of unnecessary sense organs", "Adhesive organs or suckers", "Loss of digestive system", "Low reproductive capacity"],
            answers: [0, 1, 2],
            explain: "Parasites have a high reproductive capacity, not a low one.",
          },
          {
            kind: "mcq",
            q: "The human liver fluke completes its life cycle using which intermediate hosts?",
            options: ["A mosquito only", "A snail and a fish", "A pig and a cow", "A crow and a koel"],
            answer: 1,
            explain: "The trematode liver fluke depends on two intermediate hosts, a snail and a fish.",
          },
          {
            kind: "fill",
            q: "Mutualistic association between fungi and the roots of higher plants is called ___.",
            answer: ["mycorrhiza", "mycorrhizae", "mycorrhizas"],
            explain: "In mycorrhizae the fungus helps the plant absorb nutrients and the plant feeds the fungus carbohydrates.",
          },
          {
            kind: "mcq",
            q: "Removal of a superior barnacle allowed a smaller barnacle to spread over the intertidal zone. This shows:",
            options: ["Competitive release", "Resource partitioning", "Commensalism", "Coevolution"],
            answer: 0,
            explain: "Connell's experiments: when Balanus is removed, Chthamalus expands into the area it was excluded from.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Board lesson 3 (ISC / older NCERT) ---------------- */
      {
        slug: "c12-op-organism-environment",
        title: "Organisms and Their Environment (ISC and older NCERT)",
        summary: "Habitat, niche, the key abiotic factors, the four ways organisms respond to stress, and the adaptations NCERT used to describe. Needed for ISC; deleted from the rationalised NCERT.",
        minutes: 18,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🏔️",
            caption: "Tourists who drive quickly up to Rohtang Pass near Manali often feel sick: nausea, tiredness, a pounding heart. Within days the body adjusts. That is a response to the environment.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The section 'Organism and its environment' was **removed from the rationalised NCERT** (CBSE from 2023–24) and so from the NEET syllabus based on it. **ISC** still lists habitat, niche and ecological adaptations. Karnataka II PUC follows the NCERT book: check the current KSEAB list before skipping it.",
          },
          {
            type: "text",
            md: "A **habitat** is the place where an organism lives, defined by its physical and chemical conditions. The **niche** is the organism's functional role there: the range of conditions it tolerates, the resources it uses, and its place in the food chain. Each species has a distinct niche.\n\nThe key abiotic factors are **temperature, water, light and soil**. Temperature limits distribution: mango trees do not grow in temperate countries like Canada and Germany, and snow leopards are not found in Kerala. Light drives photosynthesis and, through day length, flowering in many plants. Salinity matters in water: about 5 parts per thousand in inland waters, 30–35 in the sea and above 100 in some hypersaline lagoons.",
          },
          {
            type: "table",
            headers: ["Term", "Meaning", "Example"],
            rows: [
              ["Eurythermal", "Tolerates a wide range of temperature", "Animals of temperate regions with hot summers and cold winters"],
              ["Stenothermal", "Restricted to a narrow range of temperature", "Many tropical reef corals"],
              ["Euryhaline", "Tolerates a wide range of salinity", "Fish that move between rivers and the sea"],
              ["Stenohaline", "Restricted to a narrow range of salinity", "Most freshwater fish cannot live in the sea"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Regulate**: keep the internal environment constant (homeostasis) by physiological means, as birds and mammals do for body temperature. Very few animals can do this; nearly all plants cannot.",
              "**Conform**: let body temperature or osmotic concentration follow the surroundings, as most animals and all plants do.",
              "**Migrate**: move away temporarily to a better place; birds from Siberia winter at Keoladeo National Park, Bharatpur.",
              "**Suspend**: reduce activity until conditions improve: spores and seeds, hibernation of bears in winter, aestivation of some snails and fish in summer, and diapause in zooplankton.",
            ],
          },
          {
            type: "example",
            title: "Why there are no shrews at the poles",
            problem: "Shrews and hummingbirds are rarely found in polar regions, although many large mammals live there. Explain using surface area and volume.",
            steps: [
              "Heat is lost through the body surface and produced by the body's mass.",
              "A small animal has a large surface area relative to its volume.",
              "So it loses heat very quickly in the cold and must spend a lot of energy making heat by metabolism.",
              "In polar cold this cost becomes too high, so small endotherms are rarely found there.",
            ],
            answer: "Small animals have a high surface-area-to-volume ratio, lose heat fast and cannot afford the energy needed to stay warm in polar cold.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Bears sleeping through winter are showing which response?",
                options: ["Regulate", "Conform", "Migrate", "Suspend (hibernation)"],
                answer: 3,
                explain: "Hibernation is a way of suspending activity to escape stress in time; aestivation is the summer equivalent.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Organism or situation", "Adaptation"],
            rows: [
              ["Kangaroo rat (North American desert)", "Gets water by internal oxidation of fat; concentrates urine to save water"],
              ["Desert plants", "Thick cuticle, sunken stomata, CAM pathway (stomata closed by day)"],
              ["*Opuntia*", "Leaves reduced to spines; flattened green stem photosynthesises"],
              ["Mammals of cold climates", "Shorter ears and limbs to reduce heat loss (**Allen's rule**)"],
              ["Seals in polar seas", "Thick layer of fat (blubber) under the skin"],
              ["People at high altitude", "More red blood cells, lower binding affinity of haemoglobin, faster breathing"],
              ["Desert lizards", "Behavioural: bask in the sun when cold, move to shade or burrow when hot"],
            ],
          },
          {
            type: "mistake",
            wrong: "Regulating body temperature is the best strategy, so most animals are regulators.",
            right: "Only a small fraction of animals (mainly birds and mammals) regulate; most animals and all plants are **conformers**.",
            why: "We are regulators, so it feels normal. But regulation costs a lot of energy; for small or slow animals, conforming, migrating or suspending is cheaper.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "How is each organism coping with stress?",
              groups: ["Migrate", "Suspend", "Regulate"],
              items: [
                { text: "Siberian cranes wintering in Bharatpur", group: 0, hint: "They travel to a better place." },
                { text: "Zooplankton in diapause", group: 1, hint: "Development is paused until conditions improve." },
                { text: "Snail aestivating in summer", group: 1, hint: "Activity stops during the hot, dry season." },
                { text: "A human sweating on a hot day", group: 2, hint: "Body temperature is kept constant by physiology." },
                { text: "Seeds lying dormant in dry soil", group: 1, hint: "Metabolism slows until water returns." },
                { text: "Dog panting to cool down", group: 2, hint: "A mammal keeping body temperature steady." },
              ],
              explain: "Migrating escapes in space, suspending escapes in time, regulating stays put and pays the energy cost.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC tip",
            md: "ISC often asks for 'one physiological, one morphological and one behavioural adaptation' to a stated habitat. Give three distinct examples (for example, kangaroo rat's concentrated urine; *Opuntia*'s spines; desert lizard's basking) and say what each saves: water, heat or energy.",
          },
          {
            type: "keypoints",
            items: [
              "Habitat is the place; niche is the functional role.",
              "Key abiotic factors: temperature, water, light, soil; eury- and steno- describe tolerance ranges.",
              "Responses: regulate, conform, migrate, suspend (hibernation, aestivation, diapause).",
              "Adaptations: kangaroo rat, CAM plants, *Opuntia*, Allen's rule, blubber, altitude acclimatisation.",
            ],
          },
        ],
        flashcards: [
          { front: "Habitat vs niche", back: "Habitat: where an organism lives. Niche: its functional role, the conditions it tolerates and resources it uses." },
          { front: "Four key abiotic factors (NCERT)", back: "Temperature, water, light and soil." },
          { front: "Four responses to abiotic stress", back: "Regulate, conform, migrate, suspend." },
          { front: "Hibernation, aestivation, diapause", back: "Winter dormancy (bears); summer dormancy (some snails, fish); suspended development (zooplankton)." },
          { front: "Allen's rule", back: "Mammals from colder climates generally have shorter ears and limbs, reducing heat loss." },
          { front: "How the kangaroo rat survives without drinking", back: "It gets water from the internal oxidation of fat and excretes very concentrated urine." },
          { front: "Body's response to high altitude", back: "More red blood cells, lower haemoglobin binding affinity, and a faster breathing rate." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "An organism that can tolerate only a narrow range of salinity is called:",
            options: ["Euryhaline", "Stenohaline", "Eurythermal", "Stenothermal"],
            answer: 1,
            explain: "Steno- means narrow; -haline refers to salinity.",
          },
          {
            kind: "mcq",
            q: "CAM plants of deserts keep their stomata:",
            options: ["Open by day, closed at night", "Closed by day, open at night", "Always closed", "Always open"],
            answer: 1,
            explain: "Opening stomata at night, when it is cooler, saves water; CO₂ is stored and used for photosynthesis by day.",
          },
          {
            kind: "truefalse",
            q: "Most animals and nearly all plants are conformers.",
            answer: true,
            explain: "Regulation is limited mainly to birds and mammals (and a few others); most organisms conform.",
          },
          {
            kind: "multi",
            q: "Which are ways the human body acclimatises to high altitude?",
            options: ["Increased red blood cell production", "Decreased binding affinity of haemoglobin", "Increased breathing rate", "Lower heart rate at rest"],
            answers: [0, 1, 2],
            explain: "These three are the NCERT changes. On arrival the heart races (palpitations); it does not slow down.",
          },
          {
            kind: "fill",
            q: "Seals living in polar seas have a thick layer of fat called ___ below the skin.",
            answer: ["blubber"],
            explain: "Blubber insulates the body and reduces heat loss.",
          },
          {
            kind: "mcq",
            q: "Which pair is correctly matched?",
            options: ["Aestivation: bears in winter", "Diapause: zooplankton", "Migration: seeds in dry soil", "Regulation: most plants"],
            answer: 1,
            explain: "Zooplankton enter diapause. Bears hibernate in winter, seeds suspend activity, and plants conform.",
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c12-op-exam-edge",
        title: "Exam edge: Organisms and Populations for NEET and KCET",
        summary: "What NEET and KCET ask: growth equations and their numericals, age pyramids, the interaction table and its examples, and assertion–reason questions built from NCERT lines.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "callout",
            tone: "exam",
            title: "What gets asked",
            md: "NEET usually sets 2–3 questions here; KCET 1–3. Favourites: the interaction signs (matching type), NCERT examples for each interaction, Gause's principle, Paine's starfish experiment, the logistic equation and what K and r mean, age pyramid shapes, and the growth equation. Since NEET 2024 the syllabus follows the rationalised NCERT, so adaptations (Allen's rule, kangaroo rat) are now lower priority for NEET but still fair for ISC and older KCET papers.",
          },
          {
            type: "list",
            items: [
              "**NCERT line**: r for India in 1981 was 0.0205; Norway rat 0.015; flour beetle 0.12.",
              "**NCERT line**: the prickly pear cactus in Australia was controlled by a cactus-feeding moth.",
              "**NCERT line**: more than 10 invertebrate species went extinct within a year of removing *Pisaster*.",
              "**NCERT line**: flamingoes and resident fishes compete for zooplankton in South American lakes.",
              "**NCERT line**: each fig species is pollinated only by its partner wasp species.",
            ],
          },
          {
            type: "formula",
            tex: t`t_{\text{double}} = \frac{\ln 2}{r} \approx \frac{0.693}{r} \qquad \left(\frac{dN}{dt}\right)_{\max} = \frac{rK}{4}\ \text{at}\ N = \frac{K}{2}`,
            caption: "Two results worth remembering. The first holds only for exponential growth; the second only for the logistic model.",
          },
          {
            type: "example",
            title: "KCET level: one-step growth",
            problem: "A lake had 2000 fish at the start of a year. During the year there were 600 births and 450 deaths; 100 fish swam in through a canal and 50 swam out. Find the population at the end of the year and the per-capita birth rate.",
            steps: [
              "N(t+1) = N(t) + [(B + I) − (D + E)] = 2000 + [(600 + 100) − (450 + 50)].",
              "= 2000 + 700 − 500 = 2200.",
              "Per-capita birth rate = births ÷ starting population = 600 ÷ 2000 = 0.3 per fish per year.",
            ],
            answer: "2200 fish; birth rate 0.3 per fish per year.",
          },
          {
            type: "example",
            title: "NEET level: exponential doubling",
            problem: "A bacterial population grows exponentially with r = 0.0693 per hour. Starting with 1000 cells, how many cells will there be after 30 hours? (Take ln 2 = 0.693.)",
            steps: [
              "Doubling time = ln 2 ÷ r = 0.693 ÷ 0.0693 = 10 hours.",
              "30 hours is 3 doubling times.",
              t`$N = 1000 \times 2^3 = 8000$ cells. (Check: $N_0 e^{rt} = 1000\, e^{2.079} \approx 1000 \times 8$.)`,
            ],
            answer: "About 8000 cells.",
          },
          {
            type: "example",
            title: "NEET level: reading the logistic equation",
            problem: "For a population growing logistically with r = 0.4 per year and K = 600, compare dN/dt at N = 300 and at N = 600.",
            steps: [
              "At N = 300: dN/dt = 0.4 × 300 × (600 − 300)/600 = 120 × 0.5 = 60 per year.",
              "This is the maximum, rK/4 = 0.4 × 600 ÷ 4 = 60, because N = K/2.",
              "At N = 600: (K − N)/K = 0, so dN/dt = 0. The population has reached its asymptote.",
            ],
            answer: "60 individuals per year at N = 300 (the maximum); zero at N = 600.",
          },
          {
            type: "example",
            title: "Assertion–reason",
            problem: "Assertion (A): Removing a predator can reduce the number of prey species in a community. Reason (R): Predators reduce the intensity of competition among competing prey species.",
            steps: [
              "Is A true? Yes: in Paine's experiment, removing *Pisaster* led to more than 10 prey species going extinct.",
              "Is R true? Yes: NCERT says predators help maintain species diversity by reducing competition among prey.",
              "Does R explain A? Yes: with the predator gone, superior competitors take over and the inferior prey species are eliminated.",
            ],
            answer: "Both A and R are true, and R is the correct explanation of A.",
          },
          {
            type: "mistake",
            wrong: "Predation and parasitism both have signs (+, −), so a tick on a dog and a tiger eating a deer are the same interaction.",
            right: "They share signs but differ: a predator kills and eats its prey; a parasite lives on or in a host, usually without killing it quickly, and is often host-specific.",
            why: "Matching questions often place 'parasitism' and 'predation' side by side with the same signs, so read the example, not just the signs.",
          },
          {
            type: "mistake",
            wrong: "Gause's principle says any two species that compete cannot live together.",
            right: "It applies to **closely related** species competing for the **same** limiting resources, and coexistence is possible through resource partitioning.",
            why: "Dropping the qualifiers turns a true statement into a false one, which is exactly how NEET builds wrong options.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In dN/dt = rN(K − N)/K, the term (K − N)/K represents:",
                options: ["Intrinsic rate of increase", "Environmental resistance", "Biotic potential at N = 0", "Immigration rate"],
                answer: 1,
                explain: "As N approaches K, (K − N)/K falls towards zero: this factor captures the limit set by the environment.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A population is at N = K. What is its growth rate?",
              emoji: "📈",
              options: ["Maximum, because N is largest", "Zero", "Negative always", "Equal to r"],
              answer: 1,
              trap: 0,
              explain: "At N = K the factor (K − N)/K is zero, so dN/dt = 0. The fastest growth is at K/2, not at K.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Doubling time = 0.693/r (exponential only); maximum logistic growth = rK/4 at N = K/2.",
              "Same signs, different interactions: predation vs parasitism (+, −).",
              "Keep Gause's qualifiers: closely related species, same resources.",
              "Learn every NCERT example name: *Pisaster*, *Balanus*, *Chthamalus*, Abingdon tortoise, *Ophrys*, fig–wasp.",
            ],
          },
        ],
        flashcards: [
          { front: "Doubling time in exponential growth", back: "ln 2 / r ≈ 0.693 / r." },
          { front: "Maximum growth rate in logistic growth", back: "rK/4, reached at N = K/2." },
          { front: "r values quoted in NCERT", back: "Norway rat 0.015; flour beetle 0.12; India (1981) 0.0205." },
          { front: "Prickly pear cactus in Australia", back: "Controlled by introducing a cactus-feeding moth (predator) from its native home." },
          { front: "Who showed resource partitioning in warblers?", back: "MacArthur: five closely related warbler species on the same tree." },
          { front: "Who did the barnacle experiments in Scotland?", back: "Connell: *Balanus* excludes *Chthamalus*." },
          { front: "Which interaction gives (−, −)?", back: "Competition (interspecific)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Assertion (A): The Abingdon tortoise of the Galapagos became extinct within a decade of goats arriving. Reason (R): Goats were more efficient grazers and outcompeted the tortoise.",
            options: AR,
            answer: 0,
            explain: "NCERT gives this as an example of competition between unrelated species: the goats' greater browsing efficiency caused the tortoise's extinction.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A population grows exponentially with r = 0.0231 per day. What is its doubling time in days? (ln 2 = 0.693)",
            answer: 30,
            unit: "days",
            explain: "Doubling time = 0.693 ÷ 0.0231 = 30 days.",
            difficulty: 2,
            hint: "Doubling time = ln 2 / r.",
          },
          {
            kind: "numeric",
            q: "A logistic population has r = 0.5 per year and K = 2000. What is its maximum possible growth rate (individuals per year)?",
            answer: 250,
            unit: "individuals per year",
            explain: "Maximum dN/dt = rK/4 = 0.5 × 2000 ÷ 4 = 250, reached at N = 1000.",
            difficulty: 3,
            hint: "Put N = K/2 into the logistic equation.",
          },
          {
            kind: "multi",
            q: "Which pairs are correctly matched?",
            options: [
              "Brood parasitism: koel and crow",
              "Commensalism: sea anemone and clownfish",
              "Mutualism: Cuscuta and hedge plant",
              "Sexual deceit: Ophrys and bee",
            ],
            answers: [0, 1, 3],
            explain: "Cuscuta on a hedge plant is parasitism (+, −), not mutualism.",
          },
          {
            kind: "mcq",
            q: "Which statement about the logistic model is NOT correct?",
            options: [
              "It produces a sigmoid curve",
              "Growth stops when N equals K",
              "Growth is fastest when N is close to K",
              "It is considered more realistic than exponential growth",
            ],
            answer: 2,
            explain: "Growth is fastest at N = K/2. Near K it slows down sharply.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Assertion (A): Calotropis is seldom browsed by cattle or goats. Reason (R): Calotropis produces highly poisonous cardiac glycosides.",
            options: AR,
            answer: 0,
            explain: "NCERT gives Calotropis as a plant that defends itself chemically with cardiac glycosides, so herbivores avoid it.",
          },
          {
            kind: "mcq",
            q: "How many of these organisms breed only once in their lifetime? Pacific salmon, bamboo, most birds, most mammals.",
            options: ["One", "Two", "Three", "Four"],
            answer: 1,
            explain: "Pacific salmon and bamboo breed once; most birds and mammals breed many times.",
          },
          {
            kind: "mcq",
            q: "A population with 40% pre-reproductive, 45% reproductive and 15% post-reproductive individuals is most likely:",
            options: ["Expanding", "Stable", "Declining", "Extinct"],
            answer: 1,
            explain: "The pre-reproductive and reproductive groups are about equal, giving a bell-shaped pyramid: a stable population. An expanding population would have a clearly larger base.",
            difficulty: 2,
            hint: "Compare the base with the middle of the pyramid.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Ecosystem (NCERT Class 12, rationalised)                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-ecosystem",
    title: "Ecosystem",
    icon: "🌳",
    description: "Ecosystem structure, primary productivity, decomposition, energy flow, food chains and the three ecological pyramids, plus succession, nutrient cycles and ecosystem services for ISC.",
    lessons: [
      /* ---------------- Board lesson 1 ---------------- */
      {
        slug: "c12-eco-structure-productivity",
        title: "Ecosystem Structure, Productivity and Decomposition",
        summary: "What an ecosystem is, its biotic and abiotic parts using a pond, stratification, gross and net primary productivity, and the five steps of decomposition with the factors that control its rate.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪷",
            caption: "A temple tank in your town looks still, but sunlight is being turned into algae, algae into water fleas, water fleas into fish, and dead leaves at the bottom into nutrients. That tank is an ecosystem.",
          },
          {
            type: "text",
            md: "An **ecosystem** is a functional unit of nature in which living organisms interact among themselves and with their physical environment. Its size ranges from a small pond to a large forest or a sea. Ecologists often treat the whole **biosphere** as one global ecosystem made of many local ones.\n\nEcosystems are **terrestrial** (forest, grassland, desert) or **aquatic** (pond, lake, wetland, river, estuary). Crop fields and an aquarium are **man-made** ecosystems.",
          },
          {
            type: "text",
            md: "**Structure.** The biotic and abiotic components interact to give a physical structure. Two features describe it: **species composition** and **stratification**, the vertical layering of species. In a forest, trees occupy the top layer, shrubs the second, and herbs and grasses the bottom.\n\nA **pond** shows all the parts. Abiotic: water with dissolved inorganic and organic substances, the soil deposit at the bottom, sunlight, and the cycle of temperature and day length. Autotrophs: phytoplankton, some algae and floating, submerged and marginal plants. Consumers: zooplankton and free-swimming and bottom-dwelling animals. Decomposers: fungi, bacteria and flagellates, most abundant at the bottom. The pond carries out the four functions of every ecosystem: **productivity, decomposition, energy flow and nutrient cycling**.",
          },
          {
            type: "table",
            headers: ["Term", "Meaning", "Units"],
            rows: [
              ["Primary production", "Biomass (organic matter) produced per unit area over a period by plants during photosynthesis", "g m⁻² or kcal m⁻²"],
              ["Productivity", "The **rate** of biomass production", "g m⁻² yr⁻¹ or kcal m⁻² yr⁻¹"],
              ["Gross primary productivity (GPP)", "Rate of production of organic matter during photosynthesis", "as above"],
              ["Net primary productivity (NPP)", "GPP minus the respiration losses (R) of the producers; available to heterotrophs", "as above"],
              ["Secondary productivity", "Rate of formation of new organic matter by consumers", "as above"],
            ],
          },
          {
            type: "formula",
            tex: t`\text{NPP} = \text{GPP} - R`,
            caption: "R is the energy (organic matter) used by the producers themselves in respiration.",
          },
          {
            type: "text",
            md: "Primary productivity depends on the plant species in an area, environmental factors, nutrient availability and the photosynthetic capacity of the plants, so it varies between ecosystems. The **annual net primary productivity of the whole biosphere** is about **170 billion tons (dry weight)** of organic matter. Although oceans cover about **70%** of the surface, their productivity is only **55 billion tons**; the rest comes from land.",
          },
          {
            type: "example",
            title: "From GPP to NPP",
            problem: "A grassland has a GPP of 1200 g m⁻² yr⁻¹, and its plants use 450 g m⁻² yr⁻¹ in respiration. (a) Find its NPP. (b) Using NCERT's figures, how much of the biosphere's annual NPP comes from land?",
            steps: [
              "(a) NPP = GPP − R = 1200 − 450 = 750 g m⁻² yr⁻¹.",
              "This 750 g is the organic matter herbivores and decomposers can use.",
              "(b) Land NPP = biosphere NPP − ocean NPP = 170 − 55 = 115 billion tons per year.",
            ],
            answer: "(a) 750 g m⁻² yr⁻¹; (b) about 115 billion tons (dry weight) per year.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Net primary productivity is:",
                options: ["GPP + respiration", "GPP − respiration of producers", "Rate of formation of organic matter by consumers", "Total standing crop at one time"],
                answer: 1,
                explain: "NPP = GPP − R. The rate of formation of new organic matter by consumers is secondary productivity.",
              },
            ],
          },
          {
            type: "text",
            md: "**Decomposition.** Decomposers break down complex organic matter into inorganic substances such as CO₂, water and nutrients. The raw material, **detritus**, is dead plant remains (leaves, bark, flowers) and dead animal remains, including faecal matter. The steps are:\n\n**Fragmentation**: detritivores such as earthworms break detritus into small pieces. **Leaching**: water-soluble inorganic nutrients go down into the soil and settle as unavailable salts. **Catabolism**: bacterial and fungal enzymes degrade detritus into simpler inorganic substances. These three happen at the same time on the detritus. **Humification**: a dark, amorphous, colloidal substance, **humus**, accumulates; it resists microbial action, decomposes very slowly and is a reservoir of nutrients. **Mineralisation**: some microbes degrade humus further and release inorganic nutrients. Humification and mineralisation take place in the soil.",
          },
          {
            type: "mistake",
            wrong: "Detritus rich in lignin and chitin rots fastest because it is the toughest food for microbes, so they attack it first.",
            right: "Decomposition is **slower** when detritus is rich in **lignin and chitin** and **faster** when it is rich in **nitrogen and water-soluble substances** such as sugars.",
            why: "The rate depends on how easily microbes can break the material down. Warm, moist, aerobic conditions speed it up; low temperature and anaerobiosis slow it and let organic matter build up.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of decomposition in order.",
              items: ["Fragmentation", "Leaching", "Catabolism", "Humification", "Mineralisation"],
              explain: "Detritivores first break the detritus up, nutrients leach and enzymes digest it; humus then forms and is slowly mineralised.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A 3-mark question on decomposition wants the steps in order with a line on each, and two factors that control its rate (chemical composition of detritus; temperature and soil moisture). Write 'decomposition is an oxygen-requiring process' for an easy extra point.",
          },
          {
            type: "keypoints",
            items: [
              "Ecosystem: functional unit of nature; structure = species composition + stratification.",
              "Four functions: productivity, decomposition, energy flow, nutrient cycling.",
              "NPP = GPP − R; biosphere NPP ≈ 170 billion tons/yr, oceans only 55 billion tons.",
              "Decomposition: fragmentation → leaching → catabolism → humification → mineralisation.",
              "Fast when warm, moist and rich in nitrogen and sugars; slow when rich in lignin and chitin, cold or anaerobic.",
            ],
          },
        ],
        flashcards: [
          { front: "Ecosystem", back: "A functional unit of nature in which organisms interact among themselves and with the physical environment." },
          { front: "Stratification", back: "Vertical layering of species: trees at the top, shrubs in the middle, herbs and grasses at the bottom." },
          { front: "GPP and NPP", back: "GPP: rate of organic matter production in photosynthesis. NPP = GPP − respiration losses." },
          { front: "Secondary productivity", back: "Rate of formation of new organic matter by consumers." },
          { front: "Annual NPP of the biosphere", back: "About 170 billion tons (dry weight); oceans contribute only about 55 billion tons." },
          { front: "Detritus", back: "Dead plant remains (leaves, bark, flowers) and dead animal remains, including faecal matter." },
          { front: "Humus", back: "Dark, amorphous, colloidal matter, resistant to microbes; decomposes very slowly; a nutrient reservoir." },
          { front: "Two steps of decomposition that happen in the soil", back: "Humification and mineralisation." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which step of decomposition involves water-soluble nutrients going down into the soil and precipitating as unavailable salts?",
            options: ["Fragmentation", "Leaching", "Catabolism", "Mineralisation"],
            answer: 1,
            explain: "Leaching moves soluble inorganic nutrients down the soil profile, where they can precipitate as salts.",
          },
          {
            kind: "numeric",
            q: "A forest has an NPP of 2600 kcal m⁻² yr⁻¹ and producers lose 3400 kcal m⁻² yr⁻¹ in respiration. What is its GPP?",
            answer: 6000,
            unit: "kcal m⁻² yr⁻¹",
            explain: "GPP = NPP + R = 2600 + 3400 = 6000 kcal m⁻² yr⁻¹.",
          },
          {
            kind: "truefalse",
            q: "Oceans cover about 70% of the earth's surface and therefore account for most of the biosphere's primary productivity.",
            answer: false,
            explain: "Oceans produce only about 55 of the 170 billion tons of annual NPP; most comes from land.",
          },
          {
            kind: "multi",
            q: "Which conditions slow down decomposition?",
            options: ["Detritus rich in lignin", "Low temperature", "Anaerobic conditions", "Detritus rich in sugars"],
            answers: [0, 1, 2],
            explain: "Sugars and nitrogen speed decomposition. Lignin, chitin, cold and lack of oxygen slow it.",
          },
          {
            kind: "mcq",
            q: "In a pond, decomposers are most abundant:",
            options: ["At the surface film", "In the open water", "At the bottom", "On floating leaves only"],
            answer: 2,
            explain: "Dead matter sinks, so fungi, bacteria and flagellates are most abundant at the bottom of the pond.",
          },
          {
            kind: "fill",
            q: "The vertical distribution of different species occupying different levels in an ecosystem is called ___.",
            answer: ["stratification"],
            explain: "Stratification, together with species composition, describes ecosystem structure.",
          },
          {
            kind: "mcq",
            q: "Which is the correct unit of primary productivity?",
            options: ["g m⁻²", "kcal m⁻² yr⁻¹", "kcal", "Number of plants per m²"],
            answer: 1,
            explain: "Productivity is a rate, so it needs a time unit: g m⁻² yr⁻¹ or kcal m⁻² yr⁻¹. g m⁻² measures production (standing amount), not a rate.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Board lesson 2 ---------------- */
      {
        slug: "c12-eco-energy-pyramids",
        title: "Energy Flow, Food Chains and Ecological Pyramids",
        summary: "How energy enters and moves one way through an ecosystem, grazing and detritus food chains, trophic levels and standing crop, the 10 per cent law, and the pyramids of number, biomass and energy with their limitations.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "☀️",
            caption: "A paddy field in Punjab takes in sunlight all day. Most of it warms the water and the soil; only a small share ends up as rice grain, and even less as the farmer's meal.",
          },
          {
            type: "text",
            md: "Except for deep-sea **hydrothermal vent** ecosystems, the **sun** is the only source of energy for all ecosystems. Of the incident solar radiation, **less than 50%** is **photosynthetically active radiation (PAR)**. Plants and photosynthetic bacteria (autotrophs) fix this energy into food, but they capture only **2–10% of the PAR**. This small amount sustains the entire living world.\n\nEnergy flows **one way** (unidirectionally): from the sun to producers and then to consumers. It is not recycled. Ecosystems obey the **second law of thermodynamics**: at each transfer, energy is lost as heat, so they need a constant supply of energy to build molecules and to counter the universal tendency towards disorder.",
          },
          {
            type: "text",
            md: "**Producers** are green plants (in the sea, mainly phytoplankton, algae and higher plants). **Consumers** (heterotrophs) depend on them: **primary consumers** are herbivores; **secondary consumers** are primary carnivores; **tertiary consumers** are secondary carnivores.\n\nThe **grazing food chain (GFC)** starts with producers, for example grass → goat → man. The **detritus food chain (DFC)** starts with dead organic matter and is made of decomposers (saprotrophs), mainly fungi and bacteria, which secrete digestive enzymes and absorb the products. In an **aquatic** ecosystem the GFC is the main route of energy flow; in a **terrestrial** ecosystem a much larger fraction of energy flows through the DFC. The two chains are linked: some animals of the DFC are eaten by animals of the GFC. Interconnected food chains form a **food web**.",
          },
          {
            type: "table",
            headers: ["Trophic level", "Occupied by", "Example"],
            rows: [
              ["First", "Producers", "Grass, phytoplankton"],
              ["Second", "Primary consumers (herbivores)", "Goat, grasshopper, zooplankton"],
              ["Third", "Secondary consumers (carnivores)", "Frog, wolf, small fish"],
              ["Fourth", "Tertiary consumers (top carnivores)", "Snake, eagle, large fish, man"],
            ],
          },
          {
            type: "text",
            md: "Each trophic level has a certain mass of living material at a particular time: the **standing crop**, measured as biomass or as number per unit area. Biomass is best measured as **dry weight**. The number of trophic levels in a food chain is limited because energy decreases from one level to the next by the **10 per cent law**: only about 10% of the energy at one trophic level is transferred to the next.",
          },
          {
            type: "formula",
            tex: t`E_n = E_1 \times (0.1)^{\,n-1}`,
            caption: "10 per cent law: energy reaching trophic level n, starting from E₁ at the producers.",
          },
          {
            type: "example",
            title: "The 10 per cent law",
            problem: "Producers in a lake fix 50 000 J of energy. Using the 10 per cent law, how much energy reaches (a) zooplankton (primary consumers), (b) small fish, and (c) a fish-eating bird at the fourth trophic level?",
            steps: [
              "(a) Second level: 10% of 50 000 J = 5000 J.",
              "(b) Third level: 10% of 5000 J = 500 J.",
              "(c) Fourth level: 10% of 500 J = 50 J. Check: 50 000 × (0.1)³ = 50 J.",
            ],
            answer: "5000 J, 500 J and 50 J. Only 0.1% of the producers' energy reaches the fourth level.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Plants capture what fraction of the photosynthetically active radiation that reaches them?",
                options: ["Less than 50%", "2–10%", "About 70%", "About 0.1%"],
                answer: 1,
                explain: "Less than 50% of incident solar radiation is PAR; plants capture only 2–10% of that PAR.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Pyramid", "Usually", "Exceptions and NCERT values"],
            rows: [
              ["Number", "Upright", "Grassland: about 58 lakh producers, 7 lakh primary consumers, 3.5 lakh secondary consumers, 3 tertiary consumers"],
              ["Biomass", "Upright on land (producers 809, top level 1.5 units of dry weight in the NCERT figure)", "**Inverted in the sea**: a small standing crop of phytoplankton supports a larger standing crop of zooplankton (and fish)"],
              ["Energy", "**Always upright**, never inverted", "Ideal pyramid: 10 000 J at producers (1% of 1 000 000 J of sunlight), then 1000, 100, 10 J"],
            ],
          },
          {
            type: "text",
            md: "In an ecological pyramid the base is the producers and the apex is the top consumers; any calculation must include **all** organisms at a trophic level. The pyramid of energy cannot be inverted because some energy is always lost as heat at each step.\n\n**Limitations of ecological pyramids** (NCERT): they do not take into account that the same species can belong to two or more trophic levels; they assume a simple food chain, which almost never exists in nature, and so do not accommodate a food web; and **saprophytes are given no place** in them, even though they play a vital role in the ecosystem.",
          },
          {
            type: "mistake",
            wrong: "In the sea the pyramid of biomass is inverted, so the pyramid of energy there must be inverted too.",
            right: "Biomass is a **standing crop at one moment**; energy is a **flow over time**. Phytoplankton have a small standing biomass but reproduce very fast, so the energy they fix still exceeds that of zooplankton. The energy pyramid is always upright.",
            why: "Both are drawn as pyramids, so students treat them as the same measure. A fast-turning small biomass can carry a large energy flow, just as a small shop with a fast turnover can out-sell a large warehouse.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which pyramid can never be inverted?",
              emoji: "🔺",
              options: ["Pyramid of number", "Pyramid of biomass", "Pyramid of energy", "All can be inverted"],
              answer: 2,
              trap: 1,
              explain: "Energy is lost as heat at every transfer, so each level always has less energy than the one below. Biomass is inverted in many seas.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to 'draw a pyramid of biomass in the sea', label the trophic levels (phytoplankton at the base, zooplankton above) and write 'inverted' clearly. For limitations, three points are enough: one species at two levels, no food webs, no place for saprophytes.",
          },
          {
            type: "keypoints",
            items: [
              "Less than 50% of sunlight is PAR; plants capture 2–10% of PAR. Energy flow is unidirectional.",
              "GFC starts with producers, DFC with detritus; DFC carries more energy on land, GFC in water.",
              "Standing crop: biomass (dry weight) or number per unit area at a given time.",
              "10 per cent law limits the number of trophic levels.",
              "Energy pyramids are always upright; biomass pyramids are inverted in the sea; pyramids ignore food webs and saprophytes.",
            ],
          },
        ],
        flashcards: [
          { front: "Ecosystem that does not depend on solar energy", back: "Deep-sea hydrothermal vent ecosystems." },
          { front: "PAR", back: "Photosynthetically active radiation: less than 50% of incident solar radiation." },
          { front: "Share of PAR captured by plants", back: "2–10%." },
          { front: "Grazing vs detritus food chain", back: "GFC begins with living producers; DFC begins with dead organic matter and decomposers." },
          { front: "Standing crop", back: "The mass of living material (or number) at a trophic level at a particular time, per unit area." },
          { front: "10 per cent law", back: "Only about 10% of energy at one trophic level passes to the next." },
          { front: "Inverted pyramid of biomass", back: "In the sea: a small standing crop of phytoplankton supports a larger standing crop of zooplankton." },
          { front: "Three limitations of ecological pyramids", back: "A species can be at two levels; they assume a simple food chain (no food web); saprophytes have no place." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Producers in a grassland fix 30 000 kJ. Using the 10 per cent law, how much energy (kJ) reaches the tertiary consumers?",
            answer: 30,
            unit: "kJ",
            explain: "Tertiary consumers are at the fourth trophic level: 30 000 × 0.1 × 0.1 × 0.1 = 30 kJ.",
            difficulty: 2,
            hint: "Tertiary consumers are three transfers above the producers.",
          },
          {
            kind: "mcq",
            q: "In terrestrial ecosystems, most energy flows through the:",
            options: ["Grazing food chain", "Detritus food chain", "Parasitic food chain", "Pyramid of numbers"],
            answer: 1,
            explain: "On land a much larger fraction of energy flows through the DFC; in water the GFC is the main conduit.",
          },
          {
            kind: "truefalse",
            q: "Energy in an ecosystem is recycled between producers and decomposers.",
            answer: false,
            explain: "Nutrients are recycled; energy flows one way and is lost as heat at each transfer.",
          },
          {
            kind: "mcq",
            q: "Which pyramid is generally inverted in a sea ecosystem?",
            options: ["Pyramid of energy", "Pyramid of biomass", "Pyramid of numbers in a grassland", "None"],
            answer: 1,
            explain: "The biomass of zooplankton and fish can exceed that of phytoplankton at a given moment. The energy pyramid is never inverted.",
          },
          {
            kind: "multi",
            q: "Which are limitations of ecological pyramids?",
            options: [
              "They ignore that one species can occupy more than one trophic level",
              "They assume a simple food chain",
              "They give no place to saprophytes",
              "They cannot show biomass",
            ],
            answers: [0, 1, 2],
            explain: "Pyramids of biomass exist, so the last option is wrong. The other three are the NCERT limitations.",
          },
          {
            kind: "fill",
            q: "Biomass at a trophic level is measured most accurately as ___ weight.",
            answer: ["dry"],
            explain: "Water content varies a lot between organisms and seasons, so dry weight is the more accurate measure.",
          },
          {
            kind: "mcq",
            q: "In the food chain grass → goat → man, man is a:",
            options: ["Primary consumer", "Secondary consumer", "Tertiary consumer", "Decomposer"],
            answer: 1,
            explain: "Goat is the primary consumer (herbivore); man, eating the goat, is the secondary consumer at the third trophic level.",
          },
          {
            kind: "mcq",
            q: "In NCERT's ideal pyramid of energy, producers convert what percentage of available sunlight into NPP?",
            options: ["1%", "10%", "50%", "2–10%"],
            answer: 0,
            explain: "The figure assumes 1% conversion (10 000 J out of 1 000 000 J), then 10% transfer at each higher level.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Board lesson 3 (ISC / older NCERT) ---------------- */
      {
        slug: "c12-eco-succession-cycles",
        title: "Succession, Nutrient Cycles and Ecosystem Services (ISC and older NCERT)",
        summary: "Ecological succession on rock and in water, the carbon and phosphorus cycles, and the value of ecosystem services. Removed from the rationalised NCERT; still useful for ISC.",
        minutes: 20,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🪨",
            caption: "Look at an old stone wall after the monsoon: grey-green crusts of lichen first, then soft moss in the cracks, and later small plants. A community is building itself, step by step.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "**Ecological succession, nutrient cycling and ecosystem services were removed from the rationalised NCERT** (CBSE and NEET from 2024). ISC still includes ecosystem topics beyond productivity and pyramids; check your ISC year's syllabus. Karnataka II PUC follows the NCERT book: check the current KSEAB list.",
          },
          {
            type: "text",
            md: "**Ecological succession** is the gradual and fairly predictable change in the species composition of an area. The sequence of communities is a **sere**, and each stage is a **seral stage** (seral community). It ends in a **climax community**, which is in near equilibrium with the environment.\n\n**Primary succession** starts where no living organisms ever existed: bare rock, newly cooled lava, a newly created pond or reservoir. It is very slow, because soil must form first. **Secondary succession** starts where a community was lost: abandoned farmland, burned or cut forests, flooded land. Soil is already present, so it is faster.",
          },
          {
            type: "text",
            md: "**Hydrarch** succession takes place in wet areas and **xerarch** succession in dry areas; both move towards **mesic** (medium water) conditions. On bare rock, the **pioneer species** are usually **lichens**, which secrete acids that dissolve rock and start soil formation. Bryophytes (mosses) follow, then herbs, shrubs and finally trees. In water, the pioneers are **phytoplankton**, followed by rooted submerged plants, rooted floating plants and free-floating plants, then a reed swamp, a marsh-meadow, scrub and finally forest.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the stages of succession on bare rock.",
              items: ["Lichens", "Mosses (bryophytes)", "Herbs", "Shrubs", "Forest (climax)"],
              explain: "Each stage changes the habitat, adding soil and moisture, so that the next group can establish. Lichens can start because they need no soil.",
            },
          },
          {
            type: "text",
            md: "**Nutrient cycling** (biogeochemical cycling) is the movement of nutrient elements through the various parts of an ecosystem. The amount of nutrients present in the soil at a given time is the **standing state**. Cycles are **gaseous** (nitrogen, carbon), with the reservoir in the atmosphere, or **sedimentary** (sulphur, phosphorus), with the reservoir in the earth's crust.\n\n**Carbon**: carbon makes up about **49%** of the dry weight of organisms; about **71%** of global carbon is dissolved in the oceans; about **4 × 10¹³ kg** of carbon is fixed by photosynthesis each year. Respiration, decomposition, burning of wood and fossil fuel, forest fires and volcanic activity return CO₂ to the atmosphere. **Phosphorus**: its natural reservoir is phosphate rock; weathering releases phosphate into the soil. Unlike carbon, there is **no respiratory release of phosphorus** into the atmosphere, and gaseous exchange of phosphorus is negligible.",
          },
          {
            type: "example",
            title: "Comparing two cycles",
            problem: "Give three differences between the carbon cycle and the phosphorus cycle.",
            steps: [
              "Type: carbon has a gaseous cycle; phosphorus has a sedimentary cycle.",
              "Reservoir: carbon's reservoirs are the atmosphere and the oceans; phosphorus's is phosphate rock.",
              "Return to air: respiration releases carbon as CO₂; there is no respiratory release of phosphorus.",
              "Input from rain: atmospheric input of phosphorus through rain is much smaller than input of carbon.",
            ],
            answer: "Gaseous vs sedimentary; air and ocean vs rock reservoir; CO₂ is released in respiration, phosphorus is not (and rain adds far less phosphorus).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is a sedimentary nutrient cycle?",
                options: ["Carbon", "Nitrogen", "Phosphorus", "Oxygen"],
                answer: 2,
                explain: "Phosphorus and sulphur have reservoirs in the earth's crust; carbon and nitrogen cycles are gaseous.",
              },
            ],
          },
          {
            type: "text",
            md: "**Ecosystem services** are the products of ecosystem processes: forests purify air and water, reduce droughts and floods, cycle nutrients, form fertile soil, provide wildlife habitat, keep up biodiversity, pollinate flowering plants, store carbon and offer aesthetic and cultural value. Robert Costanza and colleagues put a price on these basic services of about **33 trillion US dollars a year**, nearly twice the global GNP of the time (about 18 trillion US dollars). **Soil formation** made up about 50% of the total; recreation and nutrient cycling were each less than 10%.",
          },
          {
            type: "mistake",
            wrong: "Secondary succession is slower than primary succession because the area has been damaged.",
            right: "Secondary succession is **faster**, because soil (and often seeds and roots) is already present.",
            why: "'Damaged' sounds worse than 'new', but primary succession must first make soil from bare rock or sediment, which can take a very long time.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC tip",
            md: "For a 'describe xerarch succession' answer, name the pioneer (lichens), say how it changes the habitat (acids dissolve rock, start soil), list the seral stages in order, and end with the climax community and 'mesic conditions'. A labelled flow line earns the diagram mark.",
          },
          {
            type: "keypoints",
            items: [
              "Succession: pioneer → seral stages → climax; primary is slow, secondary is faster.",
              "Xerarch on rock starts with lichens; hydrarch in water starts with phytoplankton; both end mesic.",
              "Carbon cycle is gaseous (49% of dry weight; 71% in oceans); phosphorus cycle is sedimentary with no respiratory release.",
              "Ecosystem services were valued at about 33 trillion US dollars a year; soil formation about half of it.",
            ],
          },
        ],
        flashcards: [
          { front: "Sere and climax community", back: "Sere: the whole sequence of communities in succession. Climax: the final community in near equilibrium with the environment." },
          { front: "Pioneer species on bare rock", back: "Lichens; they secrete acids that dissolve rock and begin soil formation." },
          { front: "Pioneer species in water", back: "Phytoplankton." },
          { front: "Primary vs secondary succession", back: "Primary: no soil to begin with (rock, lava), slow. Secondary: soil present (abandoned farmland, burnt forest), faster." },
          { front: "Gaseous and sedimentary cycles", back: "Gaseous: nitrogen, carbon. Sedimentary: sulphur, phosphorus." },
          { front: "Carbon figures", back: "49% of organisms' dry weight; 71% of global carbon in oceans; about 4 × 10¹³ kg fixed per year." },
          { front: "Costanza's estimate", back: "Ecosystem services worth about 33 trillion US dollars a year, nearly twice the global GNP; soil formation about 50%." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Succession that begins in a newly created pond is:",
            options: ["Secondary xerarch", "Primary hydrarch", "Secondary hydrarch", "Primary xerarch"],
            answer: 1,
            explain: "A new pond has never had a community (primary), and it is a wet habitat (hydrarch).",
          },
          {
            kind: "truefalse",
            q: "Both hydrarch and xerarch successions lead to mesic conditions.",
            answer: true,
            explain: "Wet habitats become drier and dry habitats become moister until medium (mesic) conditions are reached.",
          },
          {
            kind: "mcq",
            q: "Which statement about the phosphorus cycle is correct?",
            options: [
              "Its main reservoir is the atmosphere",
              "Organisms release phosphorus in respiration",
              "Its natural reservoir is phosphate rock",
              "Rainfall adds more phosphorus than carbon",
            ],
            answer: 2,
            explain: "Phosphorus comes from weathering of phosphate rock; there is no respiratory release and very little atmospheric input.",
          },
          {
            kind: "fill",
            q: "The amount of nutrients present in the soil at any given time is called the ___ state.",
            answer: ["standing"],
            explain: "The standing state varies with the kind of ecosystem and the season.",
          },
          {
            kind: "multi",
            q: "Which return carbon to the atmosphere as CO₂?",
            options: ["Respiration", "Decomposition", "Burning of fossil fuels", "Photosynthesis"],
            answers: [0, 1, 2],
            explain: "Photosynthesis removes CO₂ from the air; the other three release it (as do forest fires and volcanoes).",
          },
          {
            kind: "mcq",
            q: "In Costanza's estimate, which single ecosystem service accounted for about half the total value?",
            options: ["Recreation", "Nutrient cycling", "Soil formation", "Climate regulation"],
            answer: 2,
            explain: "Soil formation was about 50%; recreation and nutrient cycling were each under 10%.",
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c12-eco-exam-edge",
        title: "Exam edge: Ecosystem for NEET and KCET",
        summary: "What NEET and KCET ask: productivity and 10 per cent law numericals, PAR figures, food chains, pyramid shapes and their NCERT values, decomposition steps, and assertion–reason questions.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "callout",
            tone: "exam",
            title: "What gets asked",
            md: "NEET usually sets 1–3 questions here; KCET 1–2. Favourites: GPP/NPP and secondary productivity definitions, the 170 and 55 billion ton figures, PAR (< 50%) and the 2–10% capture, GFC vs DFC, the inverted biomass pyramid in the sea, why the energy pyramid is always upright, limitations of pyramids, and the order and conditions of decomposition. Succession and nutrient cycles were removed from the rationalised NCERT, so they are unlikely in NEET now.",
          },
          {
            type: "list",
            items: [
              "**NCERT line**: the sun is the only source of energy for all ecosystems except deep-sea hydrothermal vents.",
              "**NCERT line**: decomposition is largely an oxygen-requiring process.",
              "**NCERT line**: humus is highly resistant to microbial action and decomposes extremely slowly; it is colloidal.",
              "**NCERT line**: the pyramid of energy is always upright; it can never be inverted.",
              "**NCERT line**: saprophytes are not given any place in ecological pyramids.",
            ],
          },
          {
            type: "formula",
            tex: t`\text{Transfer efficiency} = \frac{\text{energy at level } n+1}{\text{energy at level } n}\times 100\%`,
            caption: "With the 10 per cent law, the energy at level n is the producer energy times 0.1 raised to (n − 1).",
          },
          {
            type: "example",
            title: "KCET level: ten per cent down the chain",
            problem: "If a snake at the fourth trophic level receives 15 J of energy, how much energy was fixed by the producers, assuming the 10 per cent law?",
            steps: [
              "Going up three levels multiplies energy by 0.1 three times, i.e. by 0.001.",
              "So producers = 15 ÷ 0.001 = 15 000 J.",
            ],
            answer: "15 000 J.",
          },
          {
            type: "example",
            title: "NEET level: efficiency from data",
            problem: "In a pond, phytoplankton have an NPP of 8000 kJ m⁻² yr⁻¹. Zooplankton assimilate 640 kJ m⁻² yr⁻¹ from them, and small fish assimilate 80 kJ m⁻² yr⁻¹ from zooplankton. Find the two transfer efficiencies and say whether the pond fits the 10 per cent law.",
            steps: [
              "Producers → zooplankton: 640 ÷ 8000 × 100 = 8%.",
              "Zooplankton → fish: 80 ÷ 640 × 100 = 12.5%.",
              "Both are close to 10%. The 10 per cent law is an average rule; real values vary around it.",
            ],
            answer: "8% and 12.5%; roughly consistent with the 10 per cent law.",
          },
          {
            type: "example",
            title: "Assertion–reason",
            problem: "Assertion (A): The pyramid of biomass in the sea is generally inverted. Reason (R): The pyramid of energy in the sea is also inverted.",
            steps: [
              "A is true: the standing crop of phytoplankton is smaller than that of the consumers (fishes) at a given time.",
              "R is false: the energy pyramid is always upright, in every ecosystem.",
            ],
            answer: "A is true, but R is false.",
          },
          {
            type: "example",
            title: "NEET level: how many statements are correct?",
            problem: "(i) Leaching and catabolism occur simultaneously with fragmentation. (ii) Humification and mineralisation occur in the soil. (iii) Detritus rich in chitin decomposes quickly. (iv) Warm, moist conditions favour decomposition. How many are correct?",
            steps: [
              "(i) Correct: fragmentation, leaching and catabolism go on together on the detritus.",
              "(ii) Correct: NCERT places both in the soil.",
              "(iii) Wrong: lignin and chitin slow decomposition.",
              "(iv) Correct.",
            ],
            answer: "Three statements (i, ii and iv) are correct.",
          },
          {
            type: "mistake",
            wrong: "Plants capture 2–10% of the total sunlight that falls on them.",
            right: "Plants capture 2–10% of the **PAR**, and PAR is itself less than 50% of incident solar radiation.",
            why: "The two percentages appear in consecutive NCERT sentences, and NEET options often swap 'incident radiation' for 'PAR'.",
          },
          {
            type: "mistake",
            wrong: "Standing crop and productivity mean the same thing: how much plant matter there is.",
            right: "Standing crop is the **amount** of living material at a given time; productivity is the **rate** of production (per unit area per unit time).",
            why: "A field of fast-growing grass can have a small standing crop but high productivity if it is grazed continually, just as phytoplankton do in the sea.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The detritus food chain begins with:",
                options: ["Green plants", "Dead organic matter", "Herbivores", "Top carnivores"],
                answer: 1,
                explain: "The DFC starts with detritus, broken down by saprotrophs such as fungi and bacteria.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the NCERT figure with what it describes.",
              pairs: [
                ["Less than 50%", "Share of incident solar radiation that is PAR"],
                ["2–10%", "Share of PAR captured by plants"],
                ["170 billion tons", "Annual NPP of the biosphere"],
                ["55 billion tons", "Annual NPP of the oceans"],
                ["10%", "Energy passed to the next trophic level"],
              ],
              explain: "These five numbers are the most frequently tested figures in the chapter; learn them as a set.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Energy at level n = producer energy × (0.1)^(n − 1); go backwards by dividing.",
              "2–10% of PAR, not of total sunlight; PAR < 50% of incident radiation.",
              "Biomass pyramid can be inverted (sea); energy pyramid never.",
              "Standing crop is an amount; productivity is a rate.",
            ],
          },
        ],
        flashcards: [
          { front: "Energy at the fourth trophic level from 10 000 J at producers", back: "10 J (10 000 × 0.1³)." },
          { front: "Where is GFC the major conduit of energy?", back: "In aquatic ecosystems." },
          { front: "Is decomposition aerobic?", back: "Yes, it is largely an oxygen-requiring process; anaerobiosis slows it." },
          { front: "Why can the energy pyramid not be inverted?", back: "Energy is lost as heat at every transfer, so each level has less energy than the level below." },
          { front: "Standing crop vs productivity", back: "Standing crop: amount at one time. Productivity: rate of production per unit area per unit time." },
          { front: "NCERT grassland pyramid of numbers: tertiary consumers", back: "Only 3, above about 3.5 lakh secondary consumers." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A hawk at the fifth trophic level receives 2 J of energy. Assuming the 10 per cent law, how much energy (J) did the producers fix?",
            answer: 20000,
            unit: "J",
            explain: "Four transfers separate level 1 from level 5: 2 ÷ 0.1⁴ = 2 ÷ 0.0001 = 20 000 J.",
            difficulty: 2,
            hint: "Count the transfers: level 5 is four steps above level 1.",
          },
          {
            kind: "mcq",
            q: "Assertion (A): In terrestrial ecosystems a larger fraction of energy flows through the detritus food chain. Reason (R): Herbivores eat only a small part of the plant biomass; most of it dies and becomes detritus.",
            options: AR,
            answer: 0,
            explain: "NCERT states A. R explains it: most plant matter is not grazed, so it enters the detritus pathway.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Assertion (A): Humus decomposes very slowly. Reason (R): Humus is highly resistant to microbial action.",
            options: AR,
            answer: 0,
            explain: "NCERT links the two directly: humus resists microbes, so it breaks down extremely slowly and acts as a nutrient reservoir.",
          },
          {
            kind: "numeric",
            q: "GPP of a crop field is 2500 kcal m⁻² yr⁻¹; producers use 40% of it in respiration. What is the NPP (kcal m⁻² yr⁻¹)?",
            answer: 1500,
            unit: "kcal m⁻² yr⁻¹",
            explain: "R = 0.4 × 2500 = 1000; NPP = 2500 − 1000 = 1500.",
          },
          {
            kind: "multi",
            q: "Select the correct statements.",
            options: [
              "Secondary productivity is the rate of formation of new organic matter by consumers",
              "The pyramid of numbers in a grassland is upright",
              "Plants capture 2–10% of the PAR",
              "Decomposers occupy the apex of the pyramid of energy",
            ],
            answers: [0, 1, 2],
            explain: "Saprophytes (decomposers) have no place in ecological pyramids; the apex is the top carnivore.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which factor will most strongly slow the decomposition of leaf litter?",
            options: ["High nitrogen content", "High soil moisture with warmth", "Waterlogged, oxygen-poor soil", "High sugar content"],
            answer: 2,
            explain: "Decomposition is largely aerobic; anaerobic waterlogged soil slows it and organic matter builds up.",
          },
          {
            kind: "mcq",
            q: "How much of the earth's annual net primary productivity comes from land, according to NCERT's figures?",
            options: ["About 55 billion tons", "About 115 billion tons", "About 170 billion tons", "About 225 billion tons"],
            answer: 1,
            explain: "170 (biosphere) − 55 (oceans) = 115 billion tons from land.",
          },
          {
            kind: "mcq",
            q: "In the NCERT ideal energy pyramid, how many joules reach the tertiary consumers from 1 000 000 J of sunlight?",
            options: ["1000 J", "100 J", "10 J", "1 J"],
            answer: 2,
            explain: "1% to producers gives 10 000 J; then 1000 J, 100 J and 10 J at the tertiary consumers.",
            difficulty: 3,
            hint: "First 1%, then 10% at each step.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Organisms and Populations": "c12-organisms-populations",
};
