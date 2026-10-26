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
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Organisms and Populations": "c12-organisms-populations",
};
