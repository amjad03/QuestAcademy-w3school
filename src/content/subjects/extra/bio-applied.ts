import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "biology-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------ */
  /* Evolution                                                     */
  /* ------------------------------------------------------------ */
  {
    slug: "evolution",
    title: "Evolution",
    icon: "🦕",
    description: "How life began, the evidence that species change, the theories of Lamarck, Darwin and de Vries, Hardy–Weinberg equilibrium and the story of human evolution.",
    lessons: [
      {
        slug: "origin-of-life-and-evidence",
        title: "Origin of Life & Evidence for Evolution",
        summary: "From the Big Bang and the Miller experiment to fossils, homologous organs and peppered moths.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🌋", caption: "Early Earth: no free oxygen, lightning in the sky, and a warm 'primordial soup' in the seas." },
          {
            type: "text",
            md: "The universe is about **20 billion years** old according to NCERT (modern estimates say ~13.8 billion), and Earth formed roughly **4.5 billion years ago**. Life appeared about **500 million years** after Earth formed — roughly 4 billion years ago. How could non-living chemicals turn into the first living cells?",
          },
          { type: "heading", text: "Chemical evolution: Oparin–Haldane and Miller" },
          {
            type: "text",
            md: "A. I. **Oparin** (Russia) and J. B. S. **Haldane** (England — who later settled in India and worked in Kolkata and Bhubaneswar) proposed that the first life arose from pre-existing **non-living organic molecules** (e.g. RNA, proteins) — *chemical evolution* preceded biological evolution. The early atmosphere was **reducing**: CH₄, NH₃, H₂ and water vapour, with no free O₂.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**1953 – S. L. Miller** built a closed flask containing CH₄, H₂, NH₃ and water vapour at about **800 °C**.",
              "He passed **electric discharges** through it to imitate lightning.",
              "After a week, **amino acids** had formed in the flask.",
              "Others later made sugars, nitrogen bases, pigments and fats the same way — showing organic molecules could arise abiotically.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Spontaneous generation is dead",
            md: "Louis **Pasteur**'s swan-neck flask experiment showed that life comes only from pre-existing life: killed yeast in a sealed, pre-sterilised flask produced no new life, while an open flask did.",
          },
          { type: "heading", text: "Evidence that evolution happened" },
          {
            type: "table",
            headers: ["Evidence", "What it shows", "Example"],
            rows: [
              ["Palaeontological (fossils)", "Rocks of different ages hold different life forms; many are now extinct", "Dinosaurs; fossils in the Siwalik hills"],
              ["Homologous organs", "Same structure & origin, different function → **divergent evolution**", "Forelimbs of whale, bat, cheetah, human; thorn of *Bougainvillea* and tendril of *Cucurbita*"],
              ["Analogous organs", "Different structure, same function → **convergent evolution**", "Wings of butterfly and bird; eye of octopus and mammal; sweet potato (root) and potato (stem)"],
              ["Biochemical", "Similar proteins and genes point to common ancestry", "Cytochrome c, DNA sequences"],
              ["Natural selection in action", "Populations change under selection pressure", "Industrial melanism in *Biston betularia*; antibiotic- and DDT-resistance"],
            ],
          },
          {
            type: "text",
            md: "**Worked example — classify the pair.**\n\n1. *Forelimb of a bat and flipper of a whale* → same bones (humerus, radius, ulna, carpals) in the same pattern but used for flying vs swimming → **homologous**.\n2. *Flipper of a penguin and flipper of a dolphin* → one is a bird wing, the other a mammal forelimb; both evolved for swimming → **analogous**.\n3. *Thorn of Bougainvillea and tendril of Cucurbita* → both are modified axillary structures of the stem → **homologous**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The eye of an octopus and the eye of a mammal are an example of:",
                options: ["Homologous organs", "Analogous organs", "Vestigial organs", "Divergent evolution"],
                answer: 1,
                explain: "Both eyes see, but they developed independently with different anatomy — analogy, a result of convergent evolution.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap: peppered moths",
            md: "In England before industrialisation (pre-1850) **white-winged** moths were more common; after industrialisation **dark (melanic)** moths dominated because soot killed the white lichens on tree trunks and white moths were picked off by birds. Selection acted on **existing variation** — the moths did not 'turn dark' in response to soot.",
          },
          {
            type: "callout",
            tone: "warning",
            title: "Embryology and Haeckel",
            md: "Ernst Haeckel claimed that all vertebrate embryos pass through adult stages of their ancestors (e.g. gill slits). Karl Ernst **von Baer** disproved this: embryos never pass through the **adult** stages of other animals.",
          },
          {
            type: "keypoints",
            items: [
              "Oparin–Haldane: chemical evolution came before biological evolution.",
              "Miller (1953) made amino acids from CH₄, NH₃, H₂ and water vapour with electric sparks.",
              "Homologous organs → divergent evolution; analogous organs → convergent evolution.",
              "Industrial melanism and antibiotic resistance are natural selection seen in our lifetime.",
            ],
          },
        ],
        flashcards: [
          { front: "Miller's experiment (1953)", back: "CH₄, NH₃, H₂ and water vapour + electric discharge at ~800 °C → amino acids formed." },
          { front: "Homologous organs", back: "Same basic structure and origin, different functions — evidence of divergent evolution." },
          { front: "Analogous organs", back: "Different structure and origin, similar function — evidence of convergent evolution." },
          { front: "Industrial melanism", back: "Rise of dark-coloured *Biston betularia* in industrial England as bird predation removed light moths from sooty bark." },
          { front: "Who disproved spontaneous generation?", back: "Louis Pasteur, using pre-sterilised flasks." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which gas was NOT present in Miller's experimental flask?",
            options: ["Methane", "Ammonia", "Oxygen", "Hydrogen"],
            answer: 2,
            explain: "The primitive atmosphere was reducing; Miller used CH₄, NH₃, H₂ and water vapour — no free O₂.",
          },
          {
            kind: "mcq",
            q: "Sweet potato and potato are an example of:",
            options: ["Homology", "Analogy", "Adaptive radiation", "Vestigial structures"],
            answer: 1,
            explain: "Sweet potato is a modified root and potato a modified stem; both store food — analogous organs.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Homologous organs are evidence of divergent evolution.",
            answer: true,
            explain: "A common ancestral structure diverged to perform different functions in different lineages.",
          },
          {
            kind: "fill",
            q: "The theory that life arose from non-living organic molecules by chemical evolution was proposed by Oparin and ___.",
            answer: ["Haldane", "J B S Haldane", "JBS Haldane"],
            explain: "A. I. Oparin and J. B. S. Haldane proposed it independently.",
          },
          {
            kind: "order",
            q: "Arrange these events in the order they happened.",
            items: ["Formation of Earth", "Formation of simple organic molecules", "First cellular life", "Industrial melanism in England"],
            explain: "Earth (~4.5 bya) → chemical evolution → first cells (~4 bya) → peppered moth change in the 1800s.",
          },
          {
            kind: "mcq",
            q: "Who showed that vertebrate embryos never pass through the adult stages of other animals?",
            options: ["Ernst Haeckel", "Karl Ernst von Baer", "Lamarck", "Hugo de Vries"],
            answer: 1,
            explain: "Von Baer rejected Haeckel's recapitulation idea.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "theories-of-evolution",
        title: "Lamarck, Darwin & de Vries",
        summary: "Compare use-and-disuse, natural selection and mutation theory, and see adaptive radiation and convergent evolution.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🐦", caption: "Darwin's finches of the Galápagos — one ancestor, many beak shapes." },
          {
            type: "text",
            md: "Fossils and comparative anatomy tell us *that* life evolved. The big question is **how**. Three scientists gave three very different answers.",
          },
          { type: "heading", text: "Lamarck: use and disuse" },
          {
            type: "text",
            md: "Jean-Baptiste **Lamarck** proposed that organs used more grow stronger, unused organs shrink, and these **acquired characters are inherited**. His famous example: giraffes stretched their necks to reach leaves and passed longer necks to their young. Weismann's experiments (cutting tails of mice for generations — the young were still born with tails) and modern genetics reject the inheritance of acquired traits.",
          },
          { type: "heading", text: "Darwin: natural selection" },
          {
            type: "list",
            ordered: true,
            items: [
              "Organisms over-produce offspring, but resources are limited → **struggle for existence**.",
              "Individuals show heritable **variation**.",
              "Those with useful variations survive and reproduce more — **survival of the fittest**.",
              "Over many generations useful variations accumulate and new species arise.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Fitness = reproductive fitness",
            md: "In Darwinian terms, 'fittest' does not mean strongest. It means the one that **leaves more offspring** in that environment. Boards often ask: *What is fitness according to Darwin?* — answer: reproductive fitness. Alfred **Wallace**, working in the Malay Archipelago, reached the same conclusion independently.",
          },
          { type: "heading", text: "Hugo de Vries: mutation" },
          {
            type: "text",
            md: "Working on the evening primrose *Oenothera lamarckiana*, **de Vries** proposed that evolution happens through large, sudden heritable changes — **mutations** — which he called **saltation** (single-step large change). Darwin's variations, by contrast, were small, continuous and directional; de Vries's mutations are random and directionless.",
          },
          {
            type: "table",
            headers: ["Feature", "Lamarck", "Darwin", "de Vries"],
            rows: [
              ["Source of change", "Use & disuse of organs", "Small continuous variations", "Large sudden mutations"],
              ["Inheritance", "Acquired traits inherited", "Heritable variations selected", "Mutations inherited"],
              ["Speed", "Gradual", "Gradual", "Sudden (saltation)"],
              ["Key example", "Giraffe neck", "Finches, peppered moth", "Evening primrose"],
            ],
          },
          { type: "heading", text: "Adaptive radiation and convergence" },
          {
            type: "text",
            md: "**Adaptive radiation** is the evolution of different species from one ancestor in a region, radiating into new habitats. *Worked comparison:*\n\n- **Darwin's finches** — one seed-eating ancestor gave rise to insect-eaters, cactus-eaters and seed-eaters with different beaks.\n- **Australian marsupials** — one ancestral stock produced the kangaroo, koala, wombat, sugar glider and Tasmanian wolf.\n- When two separate radiations produce look-alikes in similar habitats — e.g. the **placental wolf** and the **Tasmanian wolf** (marsupial) — it is **convergent evolution**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The large, sudden variations that de Vries believed caused evolution are called:",
                options: ["Acquired characters", "Saltation / mutations", "Genetic drift", "Gene flow"],
                answer: 1,
                explain: "De Vries called single-step large mutation 'saltation'.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Lamarck: inheritance of acquired characters — rejected today.",
              "Darwin: variation + natural selection; fitness means reproductive success.",
              "De Vries: mutations, random and sudden (saltation), from *Oenothera*.",
              "Adaptive radiation: one ancestor → many species; convergent evolution: unrelated groups → similar forms.",
            ],
          },
        ],
        flashcards: [
          { front: "Lamarckism", back: "Use and disuse of organs; acquired characters are inherited (giraffe neck example)." },
          { front: "Darwinian fitness", back: "Reproductive fitness — leaving more offspring in a given environment." },
          { front: "Saltation", back: "De Vries's term for a single-step large mutation that drives speciation." },
          { front: "Adaptive radiation", back: "Many species evolving from one ancestor to fill different niches, e.g. Darwin's finches, Australian marsupials." },
          { front: "Example of convergent evolution in mammals", back: "Placental wolf and Tasmanian wolf (marsupial)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Darwin's finches are a classic example of:",
            options: ["Convergent evolution", "Adaptive radiation", "Industrial melanism", "Saltation"],
            answer: 1,
            explain: "One ancestral finch radiated into many species with beaks suited to different foods.",
          },
          {
            kind: "truefalse",
            q: "According to Lamarck, characters acquired during an organism's lifetime are passed on to offspring.",
            answer: true,
            explain: "This was Lamarck's central claim, now rejected.",
          },
          {
            kind: "mcq",
            q: "De Vries based his mutation theory on studies of:",
            options: ["Drosophila", "Pisum sativum", "Oenothera lamarckiana", "Biston betularia"],
            answer: 2,
            explain: "He worked on the evening primrose, *Oenothera lamarckiana*.",
          },
          {
            kind: "fill",
            q: "The scientist who independently reached the idea of natural selection while working in the Malay Archipelago was Alfred ___.",
            answer: ["Wallace", "Russel Wallace", "Russell Wallace"],
            explain: "Alfred Russel Wallace.",
          },
          {
            kind: "mcq",
            q: "Placental wolf and Tasmanian wolf look alike because of:",
            options: ["Common recent ancestry", "Convergent evolution", "Homology", "Genetic drift"],
            answer: 1,
            explain: "They belong to different lineages (placental vs marsupial) but evolved similar forms in similar habitats.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "hardy-weinberg-and-human-evolution",
        title: "Hardy–Weinberg, Selection & Human Evolution",
        summary: "Calculate allele frequencies, list the forces that upset equilibrium, and trace the path from Dryopithecus to Homo sapiens.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Evolution, in genetic terms, is a **change in allele frequencies** in a population over generations. To spot change we first need a baseline in which nothing changes — the **Hardy–Weinberg equilibrium**.",
          },
          { type: "heading", text: "Hardy–Weinberg principle" },
          {
            type: "text",
            md: "For a gene with two alleles A (frequency $p$) and a (frequency $q$), in a large, randomly mating population with no evolutionary forces acting, allele and genotype frequencies stay constant from generation to generation.",
          },
          { type: "formula", tex: "p + q = 1 \\qquad p^2 + 2pq + q^2 = 1", caption: "p² = AA, 2pq = Aa (carriers), q² = aa" },
          {
            type: "text",
            md: "**Worked example.** In a village population, 16% of people show a recessive trait (aa). Find the allele frequencies and the percentage of carriers.\n\n1. $q^2 = 0.16$, so $q = \\sqrt{0.16} = 0.4$.\n2. $p = 1 - q = 0.6$.\n3. AA: $p^2 = 0.36$ (36%).\n4. Carriers Aa: $2pq = 2 \\times 0.6 \\times 0.4 = 0.48$ (48%).\n5. Check: $0.36 + 0.48 + 0.16 = 1$ ✔",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In a population, the frequency of the recessive genotype aa is 0.09. What is the frequency of the dominant allele A (p)?",
                answer: 0.7,
                tolerance: 0.001,
                explain: "q = √0.09 = 0.3, so p = 1 − 0.3 = 0.7.",
              },
            ],
          },
          { type: "heading", text: "Five factors that disturb the equilibrium" },
          {
            type: "list",
            items: [
              "**Gene migration / gene flow** — movement of alleles when individuals move between populations.",
              "**Genetic drift** — chance changes in allele frequency, strongest in small populations. If a small group founds a new population and differs from the original, it is the **founder effect**.",
              "**Mutation** — new alleles appear.",
              "**Genetic recombination** — new combinations during gametogenesis.",
              "**Natural selection** — heritable variations that increase reproduction become more common.",
            ],
          },
          {
            type: "table",
            headers: ["Type of selection", "Effect on the bell-shaped curve", "Example"],
            rows: [
              ["Stabilising", "Favours the average; curve narrows, peak rises", "Human birth weight"],
              ["Directional", "Favours one extreme; peak shifts", "Dark peppered moths; antibiotic-resistant bacteria"],
              ["Disruptive", "Favours both extremes; two peaks form", "Beak sizes where only very small or very large seeds exist"],
            ],
          },
          { type: "heading", text: "A brief story of human evolution" },
          {
            type: "list",
            ordered: true,
            items: [
              "~15 mya — **Dryopithecus** (more ape-like) and **Ramapithecus** (more man-like); Ramapithecus fossils found in the Siwalik hills of India and Pakistan.",
              "~2 mya — **Australopithecines** in East African grasslands; hunted with stone weapons, ate fruit.",
              "**Homo habilis** — first human-like being; brain 650–800 cc; probably did not eat meat.",
              "~1.5 mya — **Homo erectus**; brain ~900 cc; probably ate meat.",
              "1,00,000–40,000 years ago — **Neanderthal man** (brain ~1400 cc) in East and Central Asia; buried the dead.",
              "**Homo sapiens** arose in Africa and spread; prehistoric cave art ~18,000 years ago; agriculture ~10,000 years ago.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "Hardy–Weinberg questions often give the **percentage showing the dominant phenotype**. Do not take its square root! Always start from **q² (the recessive phenotype)**: if 75% show the dominant trait, then q² = 0.25 and q = 0.5.",
          },
          {
            type: "keypoints",
            items: [
              "p + q = 1 and p² + 2pq + q² = 1 at equilibrium.",
              "Gene flow, drift, mutation, recombination and selection change allele frequencies.",
              "Selection can be stabilising, directional or disruptive.",
              "Brain capacity grew: H. habilis 650–800 cc → H. erectus 900 cc → Neanderthal 1400 cc.",
            ],
          },
        ],
        flashcards: [
          { front: "Hardy–Weinberg equation", back: "p² + 2pq + q² = 1 (with p + q = 1)." },
          { front: "Founder effect", back: "Genetic drift when a few individuals found a new population whose allele frequencies differ from the parent population." },
          { front: "Directional selection", back: "Favours one extreme phenotype; the mean shifts in that direction." },
          { front: "Brain capacity of Homo erectus", back: "About 900 cc." },
          { front: "Fossil hominid from the Siwalik hills", back: "Ramapithecus (~15 million years ago)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "In a population of 1000 people in Hardy–Weinberg equilibrium, 9% are recessive (aa). How many are heterozygous carriers (Aa)?",
            answer: 420,
            tolerance: 0,
            unit: "people",
            explain: "q = 0.3, p = 0.7; 2pq = 2 × 0.7 × 0.3 = 0.42; 0.42 × 1000 = 420.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "Genetic drift has the greatest effect in:",
            options: ["Very large populations", "Small populations", "Populations with high gene flow", "Populations in equilibrium"],
            answer: 1,
            explain: "Random sampling effects are strongest when the population is small.",
          },
          {
            kind: "mcq",
            q: "Selection that favours both extremes and produces two peaks is called:",
            options: ["Stabilising", "Directional", "Disruptive", "Sexual"],
            answer: 2,
            explain: "Disruptive selection splits the population toward both ends.",
          },
          {
            kind: "order",
            q: "Arrange these hominids from earliest to most recent.",
            items: ["Dryopithecus", "Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"],
            explain: "Dryopithecus (~15 mya) → Australopithecines (~2 mya) → H. habilis → H. erectus (~1.5 mya) → H. sapiens.",
          },
          {
            kind: "truefalse",
            q: "Neanderthal man had a brain capacity of about 1400 cc.",
            answer: true,
            explain: "NCERT gives about 1400 cc for Neanderthals.",
          },
          {
            kind: "fill",
            q: "Under Hardy–Weinberg equilibrium, the frequency of heterozygotes is given by ___.",
            answer: ["2pq"],
            explain: "AA = p², Aa = 2pq, aa = q².",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Human Health and Disease                                      */
  /* ------------------------------------------------------------ */
  {
    slug: "human-health-and-disease",
    title: "Human Health and Disease",
    icon: "🩺",
    description: "Pathogens and common diseases, the malaria life cycle, the immune system and vaccines, AIDS, cancer, and drug and alcohol abuse.",
    lessons: [
      {
        slug: "common-diseases-in-humans",
        title: "Common Diseases & Their Pathogens",
        summary: "Bacterial, viral, protozoan, helminth and fungal diseases, with the full life cycle of Plasmodium.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🦟", caption: "Every monsoon, Indian cities fight mosquitoes that carry malaria, dengue and chikungunya." },
          {
            type: "text",
            md: "WHO defines health as a state of complete **physical, mental and social well-being**, not merely the absence of disease. Diseases caused by **pathogens** — bacteria, viruses, fungi, protozoans and helminths — are **infectious**. Let's meet the ones NCERT expects you to know.",
          },
          {
            type: "table",
            headers: ["Disease", "Pathogen", "Spread", "Key symptoms / test"],
            rows: [
              ["Typhoid", "*Salmonella typhi* (bacterium)", "Contaminated food and water", "Sustained high fever (39–40 °C), intestinal perforation in severe cases; **Widal test**"],
              ["Pneumonia", "*Streptococcus pneumoniae*, *Haemophilus influenzae*", "Droplets, sharing utensils", "Alveoli fill with fluid; lips/nails may turn grey to bluish"],
              ["Common cold", "Rhinoviruses", "Droplets, contaminated objects", "Infects nose and respiratory passage, not lungs; lasts 3–7 days"],
              ["Malaria", "*Plasmodium vivax, P. malariae, P. falciparum*", "Bite of female *Anopheles*", "Chill and high fever recurring every 3–4 days"],
              ["Amoebiasis", "*Entamoeba histolytica*", "Houseflies carry cysts to food", "Constipation, cramps, stools with mucus and blood"],
              ["Ascariasis", "*Ascaris* (roundworm)", "Eggs in soil, water, vegetables", "Internal bleeding, muscular pain, anaemia, intestinal blockage"],
              ["Filariasis (elephantiasis)", "*Wuchereria bancrofti, W. malayi*", "Bite of female *Culex*", "Chronic inflammation of lymphatic vessels of lower limbs/genitals"],
              ["Ringworm", "*Microsporum, Trichophyton, Epidermophyton*", "Towels, combs; heat & moisture", "Dry, scaly, itchy lesions on skin, nails, scalp"],
            ],
          },
          { type: "heading", text: "Life cycle of Plasmodium (a labelled process)" },
          {
            type: "list",
            ordered: true,
            items: [
              "An infected **female Anopheles** bites a human and injects **sporozoites** (the infective stage).",
              "Sporozoites reach the **liver**, multiply asexually inside liver cells, and the cells burst.",
              "Parasites enter **RBCs** and multiply there; the RBCs rupture and release the toxin **haemozoin** — causing chills and high fever every 3–4 days.",
              "Some parasites in RBCs become **gametocytes** (male and female).",
              "A female Anopheles bites the infected person and takes up gametocytes.",
              "**Fertilisation** and development happen in the **mosquito's stomach (gut)**.",
              "Sporozoites form and move to the mosquito's **salivary glands**, ready for the next bite.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Plasmodium needs **two hosts**: asexual reproduction in **humans** (liver and RBCs) and sexual reproduction (fertilisation) in the **mosquito**. Since sexual reproduction happens in the mosquito, the mosquito is the **definitive host** and humans are the **intermediate (secondary) host**. Also: *P. falciparum* causes the most serious, malignant malaria.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which stage of Plasmodium is injected into humans by a mosquito bite?",
                options: ["Gametocyte", "Sporozoite", "Merozoite", "Zygote"],
                answer: 1,
                explain: "Sporozoites from the mosquito's salivary glands are the infective stage for humans.",
              },
            ],
          },
          { type: "heading", text: "Prevention" },
          {
            type: "text",
            md: "Personal hygiene, clean drinking water, proper disposal of waste and excreta, and controlling **vectors**. Removing standing water (coolers, old tyres, pots) stops *Aedes* breeding, which carries **dengue** and **chikungunya**. Introducing the fish **Gambusia**, which eats mosquito larvae, into ponds is a biological control measure used across India.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Memory hook",
            md: "**C**ulex → **C**hronic swelling (filariasis). **A**nopheles → m**A**laria. **A**edes → dengue & chikungunya (*Aedes* bites mainly during the day, so nets alone at night are not enough).",
          },
          {
            type: "keypoints",
            items: [
              "Typhoid: *Salmonella typhi*, confirmed by the Widal test.",
              "Common cold affects the nose and respiratory passage, not the lungs.",
              "Haemozoin released from bursting RBCs causes malarial fever.",
              "Fertilisation of Plasmodium happens in the mosquito gut.",
              "Filariasis is spread by *Culex*; malaria by female *Anopheles*.",
            ],
          },
        ],
        flashcards: [
          { front: "Widal test", back: "Confirms typhoid (caused by *Salmonella typhi*)." },
          { front: "Haemozoin", back: "Toxin released when infected RBCs burst; causes chills and recurring high fever in malaria." },
          { front: "Vector of filariasis", back: "Female *Culex* mosquito; pathogen *Wuchereria*." },
          { front: "Fungi causing ringworm", back: "*Microsporum, Trichophyton* and *Epidermophyton*." },
          { front: "Gambusia", back: "Fish that eats mosquito larvae — used for biological control." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Elephantiasis is caused by:",
            options: ["Ascaris", "Wuchereria", "Entamoeba", "Plasmodium"],
            answer: 1,
            explain: "*Wuchereria bancrofti* and *W. malayi* cause filariasis (elephantiasis).",
          },
          {
            kind: "mcq",
            q: "Where does fertilisation of Plasmodium gametes take place?",
            options: ["Human liver", "Human RBCs", "Mosquito stomach", "Mosquito salivary glands"],
            answer: 2,
            explain: "Gametocytes fuse in the mosquito's gut; sporozoites later migrate to the salivary glands.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Rhinoviruses that cause the common cold infect the lungs.",
            answer: false,
            explain: "They infect the nose and respiratory passage, not the lungs.",
          },
          {
            kind: "fill",
            q: "Houseflies act as mechanical carriers of the protozoan ___ histolytica, which causes amoebic dysentery.",
            answer: ["Entamoeba"],
            explain: "*Entamoeba histolytica* causes amoebiasis.",
          },
          {
            kind: "order",
            q: "Arrange the stages of Plasmodium in the human body in order.",
            items: ["Sporozoites injected by mosquito", "Multiplication in liver cells", "Multiplication in RBCs", "Gametocytes formed in RBCs"],
            explain: "Sporozoites → liver → RBCs → gametocytes, which the next mosquito picks up.",
          },
          {
            kind: "mcq",
            q: "Which pair is mismatched?",
            options: ["Typhoid – Salmonella typhi", "Pneumonia – Haemophilus influenzae", "Ringworm – Trichophyton", "Ascariasis – Culex"],
            answer: 3,
            explain: "Ascariasis is caused by the roundworm *Ascaris* and spreads through contaminated soil, water and vegetables — not through mosquitoes.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "immunity-vaccines-and-aids",
        title: "Immunity, Vaccines & AIDS",
        summary: "Innate and acquired immunity, antibody structure, active vs passive immunity, allergy, lymphoid organs and how HIV destroys helper T cells.",
        minutes: 19,
        xp: 50,
        blocks: [
          { type: "illustration", emoji: "🛡️", caption: "Your immune system: barriers, patrolling cells and memory." },
          {
            type: "text",
            md: "**Immunity** is the body's ability to fight disease-causing organisms. It has two arms: **innate** (present from birth, non-specific) and **acquired** (specific, with memory).",
          },
          {
            type: "table",
            headers: ["Innate barrier", "Examples"],
            rows: [
              ["Physical", "Skin; mucus lining of respiratory, gastrointestinal and urogenital tracts"],
              ["Physiological", "Acid in stomach, saliva in mouth, tears from eyes"],
              ["Cellular", "Neutrophils (PMNL), monocytes, natural killer cells, macrophages"],
              ["Cytokine", "**Interferons** secreted by virus-infected cells protect nearby cells"],
            ],
          },
          { type: "heading", text: "Acquired immunity: B cells and T cells" },
          {
            type: "text",
            md: "The first encounter with a pathogen triggers a slow, low-intensity **primary response**; a later encounter triggers a fast, strong **secondary (anamnestic) response** — the body has **memory**.\n\n- **B-lymphocytes** produce **antibodies** into blood → **humoral immunity**.\n- **T-lymphocytes** help B cells and directly attack infected cells → **cell-mediated immunity (CMI)**, which is also responsible for **graft rejection**.\n\nEach antibody has **four peptide chains — two light and two heavy — written H₂L₂**. Types include IgA, IgM, IgE and IgG.",
          },
          {
            type: "table",
            headers: ["", "Active immunity", "Passive immunity"],
            rows: [
              ["How", "Body makes its own antibodies after exposure to antigen", "Ready-made antibodies are given"],
              ["Speed", "Slow to develop", "Immediate"],
              ["Duration", "Long-lasting (memory)", "Short-lived"],
              ["Examples", "Infection; vaccination", "IgA in **colostrum**; IgG across placenta; anti-tetanus or anti-venom injections"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Vaccines from rDNA",
            md: "The **hepatitis B vaccine** is produced in **yeast** using recombinant DNA technology. India's Universal Immunisation Programme and Pulse Polio campaign (India was certified polio-free in 2014) rely on vaccines that generate memory B and T cells.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Antibodies in colostrum that protect a newborn are mainly:",
                options: ["IgG", "IgA", "IgE", "IgM"],
                answer: 1,
                explain: "Colostrum is rich in IgA; this is natural passive immunity.",
              },
            ],
          },
          { type: "heading", text: "Allergy, autoimmunity and lymphoid organs" },
          {
            type: "text",
            md: "**Allergy** is an exaggerated response to harmless allergens (dust mites, pollen). It involves **IgE** antibodies and the release of **histamine and serotonin** from **mast cells**; it is treated with antihistamines, adrenalin and steroids. In **autoimmunity** the body attacks self-cells, e.g. **rheumatoid arthritis**.\n\n**Primary lymphoid organs** (where lymphocytes mature): **bone marrow** and **thymus**. **Secondary lymphoid organs**: spleen, lymph nodes, tonsils, Peyer's patches, appendix. **MALT** (mucosa-associated lymphoid tissue) makes up about **50%** of the body's lymphoid tissue.",
          },
          { type: "heading", text: "AIDS: how HIV takes over" },
          {
            type: "list",
            ordered: true,
            items: [
              "HIV (a **retrovirus** with an RNA genome) enters a **macrophage**.",
              "**Reverse transcriptase** copies its RNA into viral DNA.",
              "Viral DNA is inserted into the host cell's DNA; the macrophage keeps producing viruses — it acts as an **HIV factory**.",
              "New viruses attack **helper T-lymphocytes (TH)**, whose numbers fall steadily.",
              "With low immunity the person suffers **opportunistic infections** (e.g. *Mycobacterium*, *Toxoplasma*, fungi).",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "HIV does **not** spread by touch, sharing food, or mosquito bites. It spreads via unprotected sex with an infected person, transfusion of contaminated blood, sharing infected needles, and from infected mother to child through the placenta. The diagnostic test is **ELISA**. In India, **NACO** (National AIDS Control Organisation) leads awareness work. Anti-retroviral drugs prolong life but do not cure AIDS.",
          },
          {
            type: "keypoints",
            items: [
              "Innate barriers: physical, physiological, cellular, cytokine (interferons).",
              "B cells → antibodies (humoral); T cells → cell-mediated immunity and graft rejection.",
              "Antibody = H₂L₂; IgE drives allergy; IgA in colostrum.",
              "Bone marrow and thymus are primary lymphoid organs.",
              "HIV multiplies in macrophages and destroys helper T cells; tested by ELISA.",
            ],
          },
        ],
        flashcards: [
          { front: "Interferons", back: "Proteins secreted by virus-infected cells that protect non-infected cells — a cytokine barrier." },
          { front: "Structure of an antibody", back: "Four chains: two heavy and two light (H₂L₂)." },
          { front: "Anamnestic response", back: "Secondary immune response — faster and stronger because of memory cells." },
          { front: "Mast cells release…", back: "Histamine and serotonin during allergic reactions." },
          { front: "HIV factory", back: "The macrophage, which keeps producing HIV after viral DNA integrates." },
          { front: "Primary lymphoid organs", back: "Bone marrow and thymus." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Graft rejection is mainly due to:",
            options: ["Humoral immunity", "Cell-mediated immunity", "Interferons", "Passive immunity"],
            answer: 1,
            explain: "T-lymphocytes mediate graft rejection — cell-mediated immunity.",
          },
          {
            kind: "mcq",
            q: "Which cells does HIV primarily destroy, leading to immunodeficiency?",
            options: ["B-lymphocytes", "Helper T-lymphocytes", "Neutrophils", "RBCs"],
            answer: 1,
            explain: "HIV attacks helper T cells, whose numbers decline progressively.",
          },
          {
            kind: "truefalse",
            q: "Injecting anti-venom after a snake bite gives active immunity.",
            answer: false,
            explain: "Ready-made antibodies are given — that is passive immunity.",
          },
          {
            kind: "fill",
            q: "The antibody class associated with allergic reactions is Ig___.",
            answer: ["E"],
            explain: "IgE antibodies trigger mast cells to release histamine.",
          },
          {
            kind: "mcq",
            q: "Which of these is a primary lymphoid organ?",
            options: ["Spleen", "Tonsils", "Thymus", "Peyer's patches"],
            answer: 2,
            explain: "Thymus and bone marrow are primary lymphoid organs where lymphocytes mature.",
          },
          {
            kind: "order",
            q: "Arrange the steps of HIV infection in order.",
            items: ["HIV enters a macrophage", "Reverse transcriptase makes viral DNA", "Viral DNA joins host DNA", "Helper T cells are attacked"],
            explain: "Entry → reverse transcription → integration → release of viruses that attack TH cells.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "cancer-drugs-and-alcohol",
        title: "Cancer, Drugs & Alcohol Abuse",
        summary: "How cells turn cancerous, how cancer is detected and treated, and the effects of opioids, cannabinoids, cocaine, tobacco and alcohol.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Normal cells obey **contact inhibition** — when they touch neighbouring cells, they stop dividing. **Cancer** cells lose this property and keep dividing, forming masses called **tumours**.",
          },
          {
            type: "table",
            headers: ["", "Benign tumour", "Malignant tumour"],
            rows: [
              ["Spread", "Stays in its original location", "Invades and damages surrounding tissue"],
              ["Damage", "Little", "Severe"],
              ["Metastasis", "No", "Yes — cells travel through blood to start new tumours"],
            ],
          },
          { type: "heading", text: "Causes: carcinogens" },
          {
            type: "list",
            items: [
              "**Physical:** ionising radiation (X-rays, gamma rays) and non-ionising UV rays damage DNA.",
              "**Chemical:** tobacco smoke is the major cause of lung cancer.",
              "**Biological:** oncogenic viruses carry **viral oncogenes**. Normal cells contain **proto-oncogenes (c-onc)** that can be activated into oncogenes.",
            ],
          },
          { type: "heading", text: "Detection and treatment" },
          {
            type: "text",
            md: "Detection: **biopsy and histopathology**, blood and bone marrow tests (for leukaemia), **radiography (X-rays), CT scan, MRI**, antibodies against cancer antigens, and molecular tests for genes that raise risk.\n\nTreatment: **surgery, radiation therapy, chemotherapy** and **immunotherapy** — patients are given **α-interferon** to activate the immune system and destroy the tumour.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Indian context",
            md: "Tobacco (smoked and chewed, as gutkha and khaini) is linked to a very large share of oral cancers in India, which is why tobacco packets carry large pictorial warnings.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "Metastasis is a property of benign tumours.",
                answer: false,
                explain: "Only malignant tumours metastasise.",
              },
            ],
          },
          { type: "heading", text: "Drugs and their sources" },
          {
            type: "table",
            headers: ["Drug group", "Source", "Effect"],
            rows: [
              ["Opioids (heroin = smack, diacetylmorphine)", "Latex of poppy *Papaver somniferum*; made by acetylation of morphine", "Depressant; slows body functions; binds opioid receptors in CNS and GI tract"],
              ["Cannabinoids (marijuana, hashish, charas, ganja)", "Inflorescence of *Cannabis sativa*", "Affect the cardiovascular system"],
              ["Coca alkaloid (cocaine, coke, crack)", "*Erythroxylum coca* (South America)", "Interferes with **dopamine** transport; stimulant, euphoria; excess causes hallucinations"],
              ["Hallucinogens", "*Atropa belladonna*, *Datura*", "Hallucinations"],
            ],
          },
          {
            type: "text",
            md: "**Worked comparison — tobacco vs alcohol.**\n\n- **Tobacco:** contains **nicotine**, which stimulates the adrenal gland to release **adrenaline and noradrenaline**, raising blood pressure and heart rate. Smoke raises carbon monoxide in blood, reducing oxygen carried by haemoglobin. Linked to cancers of lung, mouth, throat; bronchitis, emphysema, heart disease.\n- **Alcohol:** chronic use damages the **liver (cirrhosis)** and nervous system; use during pregnancy harms the foetus.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Heroin is a **depressant**, cocaine is a **stimulant**. Morphine itself is a valuable **sedative and painkiller** used after surgery — the misuse is the problem, not the molecule. Adolescence is defined by NCERT as the period from about **12 to 18 years**, when vulnerability to drug abuse is high.",
          },
          {
            type: "keypoints",
            items: [
              "Cancer cells lose contact inhibition; malignant tumours metastasise.",
              "Carcinogens: radiation (X-rays, UV), chemicals (tobacco smoke), oncogenic viruses.",
              "α-interferon is used in cancer immunotherapy.",
              "Heroin from poppy (depressant); cocaine from *Erythroxylum* (stimulant, affects dopamine).",
              "Nicotine raises BP via adrenaline; CO reduces oxygen transport.",
            ],
          },
        ],
        flashcards: [
          { front: "Contact inhibition", back: "Normal cells stop dividing on contact with neighbouring cells; cancer cells lose this." },
          { front: "Metastasis", back: "Spread of malignant tumour cells through blood to new sites." },
          { front: "α-interferon", back: "Biological response modifier used in cancer immunotherapy." },
          { front: "Source of heroin", back: "Acetylation of morphine from the poppy *Papaver somniferum*." },
          { front: "Cocaine acts on…", back: "Transport of the neurotransmitter dopamine." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which drug is obtained from the inflorescence of Cannabis sativa?",
            options: ["Heroin", "Cocaine", "Marijuana", "Morphine"],
            answer: 2,
            explain: "Marijuana, hashish, charas and ganja are cannabinoids from *Cannabis sativa*.",
          },
          {
            kind: "mcq",
            q: "Proto-oncogenes are:",
            options: ["Viral genes that cause cancer", "Normal cellular genes that can become oncogenes", "Genes for interferon", "Genes for antibodies"],
            answer: 1,
            explain: "Proto-oncogenes (c-onc) are normal genes that, when activated, can lead to cancer.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Nicotine stimulates the adrenal gland to release adrenaline and noradrenaline.",
            answer: true,
            explain: "This raises blood pressure and heart rate.",
          },
          {
            kind: "fill",
            q: "Heroin is chemically known as ___ morphine.",
            answer: ["diacetyl", "diacetyl-"],
            explain: "Heroin = diacetylmorphine.",
          },
          {
            kind: "mcq",
            q: "Which technique is used to detect cancer of internal organs using strong magnetic fields?",
            options: ["CT scan", "MRI", "Biopsy", "ELISA"],
            answer: 1,
            explain: "Magnetic resonance imaging uses strong magnetic fields and non-ionising radiation.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Microbes in Human Welfare                                     */
  /* ------------------------------------------------------------ */
  {
    slug: "microbes-in-human-welfare",
    title: "Microbes in Human Welfare",
    icon: "🦠",
    description: "Microbes in curd, idli and bread; industrial antibiotics, acids and enzymes; sewage treatment and biogas; and microbes as biocontrol agents and biofertilisers.",
    lessons: [
      {
        slug: "microbes-in-household-and-industry",
        title: "Microbes at Home & in Industry",
        summary: "Lactobacillus, yeast and moulds in food; penicillin, organic acids, enzymes, statins and cyclosporin from microbes.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🥛", caption: "A spoonful of curd added to warm milk — Lactobacillus gets to work." },
          {
            type: "text",
            md: "Not all microbes cause disease. Your breakfast idli, the dahi with lunch and the bread at dinner all owe their taste to microbes.",
          },
          { type: "heading", text: "Microbes in household products" },
          {
            type: "list",
            items: [
              "**Curd:** *Lactobacillus* and other **lactic acid bacteria (LAB)** convert milk to curd by producing acids that coagulate and partially digest milk proteins. LAB also **increase vitamin B₁₂** and check disease-causing microbes in the stomach.",
              "**Idli & dosa:** the batter is fermented by **bacteria**; the CO₂ produced makes it puffy.",
              "**Bread:** dough is fermented by **baker's yeast**, *Saccharomyces cerevisiae*.",
              "**Toddy:** a traditional drink of southern India made by fermenting palm sap.",
              "**Cheese:** large holes in **Swiss cheese** come from CO₂ made by *Propionibacterium sharmanii*; **Roquefort** cheese is ripened by specific fungi.",
            ],
          },
          { type: "heading", text: "Microbes in industry" },
          {
            type: "table",
            headers: ["Product", "Microbe", "Use"],
            rows: [
              ["Wine, beer (no distillation); whisky, brandy, rum (distilled)", "*Saccharomyces cerevisiae* (brewer's yeast)", "Alcoholic beverages; ethanol"],
              ["Penicillin", "*Penicillium notatum*", "Antibiotic"],
              ["Citric acid", "*Aspergillus niger* (fungus)", "Food preservative, flavouring"],
              ["Acetic acid", "*Acetobacter aceti* (bacterium)", "Vinegar"],
              ["Butyric acid", "*Clostridium butylicum* (bacterium)", "Industrial chemical"],
              ["Lactic acid", "*Lactobacillus* (bacterium)", "Food industry"],
              ["Streptokinase", "*Streptococcus* (modified by genetic engineering)", "'Clot buster' for patients with myocardial infarction"],
              ["Cyclosporin A", "*Trichoderma polysporum* (fungus)", "Immunosuppressant in organ transplants"],
              ["Statins", "*Monascus purpureus* (yeast)", "Lower blood cholesterol by competitively inhibiting its synthesis"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "The story of penicillin",
            md: "**Alexander Fleming** noticed that a mould, *Penicillium notatum*, stopped *Staphylococcus* from growing on his culture plate. **Ernst Chain and Howard Florey** later established its full potential as an antibiotic. All three shared the **1945 Nobel Prize**; penicillin saved countless soldiers in World War II.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The large holes in Swiss cheese are due to CO₂ produced by:",
                options: ["Saccharomyces cerevisiae", "Propionibacterium sharmanii", "Lactobacillus", "Aspergillus niger"],
                answer: 1,
                explain: "*Propionibacterium sharmanii* produces lots of CO₂ during ripening.",
              },
            ],
          },
          {
            type: "text",
            md: "**Enzymes from microbes:** **lipases** are added to laundry detergents to remove oily stains; **pectinases and proteases** make bottled fruit juices clearer.\n\n**Worked comparison — distilled vs non-distilled drinks.** Wine and beer are produced by fermentation alone, so their alcohol content stays low. Whisky, brandy and rum are made by **distilling** the fermented broth, which concentrates the alcohol.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Match-the-column trap",
            md: "Students often swap *Aspergillus niger* (citric acid) and *Acetobacter aceti* (acetic acid) — remember **A**cetobacter → **A**cetic. Also, statins come from a **yeast**, *Monascus purpureus*, while cyclosporin A comes from a **fungus**, *Trichoderma polysporum*.",
          },
          {
            type: "keypoints",
            items: [
              "LAB turn milk into curd and add vitamin B₁₂.",
              "Saccharomyces cerevisiae: baker's and brewer's yeast.",
              "Penicillin: Fleming, Chain and Florey; Nobel 1945.",
              "Streptokinase dissolves clots; cyclosporin A suppresses immunity; statins lower cholesterol.",
            ],
          },
        ],
        flashcards: [
          { front: "LAB", back: "Lactic acid bacteria (e.g. *Lactobacillus*) — milk to curd, raise vitamin B₁₂." },
          { front: "Citric acid producer", back: "*Aspergillus niger* (fungus)." },
          { front: "Streptokinase", back: "Enzyme from *Streptococcus*; clot buster for heart attack patients." },
          { front: "Cyclosporin A", back: "Immunosuppressant from *Trichoderma polysporum*, used in organ transplants." },
          { front: "Statins", back: "From *Monascus purpureus*; lower blood cholesterol." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which microbe is used to produce acetic acid (vinegar)?",
            options: ["Aspergillus niger", "Acetobacter aceti", "Clostridium butylicum", "Lactobacillus"],
            answer: 1,
            explain: "*Acetobacter aceti* oxidises ethanol to acetic acid.",
          },
          {
            kind: "mcq",
            q: "Which of these alcoholic drinks is produced WITHOUT distillation?",
            options: ["Whisky", "Brandy", "Rum", "Beer"],
            answer: 3,
            explain: "Wine and beer are not distilled; whisky, brandy and rum are.",
          },
          {
            kind: "truefalse",
            q: "Lipases are added to detergents to remove oily stains.",
            answer: true,
            explain: "Lipases break down fats.",
          },
          {
            kind: "fill",
            q: "Penicillin was discovered by Alexander ___.",
            answer: ["Fleming"],
            explain: "Fleming observed *Penicillium notatum* inhibiting *Staphylococcus*.",
          },
          {
            kind: "mcq",
            q: "Statins lower blood cholesterol by:",
            options: ["Dissolving cholesterol in blood", "Competitively inhibiting the enzyme for cholesterol synthesis", "Increasing bile secretion", "Destroying LDL receptors"],
            answer: 1,
            explain: "Statins are competitive inhibitors of the enzyme responsible for synthesising cholesterol.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "sewage-treatment-and-biogas",
        title: "Sewage Treatment & Biogas",
        summary: "Primary and secondary treatment, BOD, activated sludge, and how methanogens make biogas from gobar.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🏭", caption: "A sewage treatment plant — where microbes clean our wastewater." },
          {
            type: "text",
            md: "Cities generate huge volumes of **sewage** — wastewater rich in organic matter and microbes. Before it is released into rivers like the Ganga or Yamuna, it is treated in **sewage treatment plants (STPs)** in two stages.",
          },
          { type: "heading", text: "Primary treatment (physical)" },
          {
            type: "text",
            md: "Floating debris is removed by sequential **filtration**; grit (soil, small pebbles) is removed by **sedimentation**. Settled solids form the **primary sludge**; the liquid on top is the **effluent**, which goes on to secondary treatment.",
          },
          { type: "heading", text: "Secondary treatment (biological)" },
          {
            type: "list",
            ordered: true,
            items: [
              "Primary effluent enters large **aeration tanks** and is constantly agitated with air.",
              "Aerobic microbes grow into **flocs** — masses of bacteria bound with fungal filaments in a mesh-like structure.",
              "Microbes consume organic matter, sharply reducing the **BOD** of the effluent.",
              "When BOD has fallen enough, the effluent goes to a **settling tank** where flocs sediment as **activated sludge**.",
              "A small part of activated sludge is pumped back into the aeration tank as **inoculum**.",
              "The rest is sent to **anaerobic sludge digesters**, where anaerobic bacteria digest it and produce **biogas** (methane, hydrogen sulphide, CO₂).",
              "The treated effluent is released into rivers and streams.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "What does BOD measure?",
            md: "**Biochemical Oxygen Demand** is the amount of oxygen that would be consumed if all the organic matter in **one litre of water** were oxidised by bacteria. A **higher BOD means more polluted water**. Students often write the reverse — be careful.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Flocs formed in aeration tanks are:",
                options: ["Masses of algae", "Bacteria associated with fungal filaments", "Settled grit", "Protozoan cysts"],
                answer: 1,
                explain: "Flocs are bacteria bound by fungal filaments into a mesh.",
              },
            ],
          },
          { type: "heading", text: "Biogas" },
          {
            type: "text",
            md: "**Methanogens** such as *Methanobacterium* grow anaerobically on cellulose and produce large amounts of **methane** along with CO₂ and H₂. They live in anaerobic sludge and in the **rumen** of cattle, where they help digest cellulose — so cattle dung (**gobar**) is rich in methanogens.\n\n**Worked example — a gobar gas plant.**\n1. A concrete tank **10–15 feet deep** is filled with a slurry of dung and water.\n2. A floating cover rises as microbes produce gas.\n3. Gas is piped to homes for **cooking and lighting**.\n4. The spent slurry is removed through another outlet and used as **fertiliser**.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Made in India",
            md: "Biogas technology in India was developed mainly through the efforts of the **Indian Agricultural Research Institute (IARI)** and the **Khadi and Village Industries Commission (KVIC)**. The Ministry of Environment and Forests launched the **Ganga Action Plan** and **Yamuna Action Plan** to build STPs so that only treated sewage enters these rivers.",
          },
          {
            type: "keypoints",
            items: [
              "Primary treatment = filtration + sedimentation (physical).",
              "Secondary treatment = aerobic microbes in flocs reduce BOD.",
              "High BOD = high organic pollution.",
              "Methanogens in sludge digesters and cattle rumen produce methane-rich biogas.",
              "IARI and KVIC developed India's biogas technology.",
            ],
          },
        ],
        flashcards: [
          { front: "Primary sludge", back: "Solids that settle during primary (physical) treatment of sewage." },
          { front: "BOD", back: "Oxygen needed by bacteria to oxidise all organic matter in 1 litre of water; high BOD = high pollution." },
          { front: "Activated sludge", back: "Sedimented flocs after aeration; part is recycled as inoculum." },
          { front: "Methanogen example", back: "*Methanobacterium*." },
          { front: "Biogas components", back: "Mainly methane, with CO₂ and H₂ (and H₂S in sludge digesters)." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the steps of sewage treatment in order.",
            items: ["Filtration and sedimentation", "Aeration with flocs", "Settling to form activated sludge", "Anaerobic sludge digestion"],
            explain: "Primary treatment → aeration → settling tank → anaerobic digesters.",
          },
          {
            kind: "truefalse",
            q: "A sample with high BOD is less polluted than a sample with low BOD.",
            answer: false,
            explain: "High BOD means more organic matter — more polluted.",
          },
          {
            kind: "mcq",
            q: "Methanogens are found in:",
            options: ["Aerobic tanks of STPs", "Rumen of cattle", "Root nodules of legumes", "Human skin"],
            answer: 1,
            explain: "They live in anaerobic places like the cattle rumen and sludge digesters.",
          },
          {
            kind: "fill",
            q: "Biogas technology in India was developed mainly by IARI and ___.",
            answer: ["KVIC", "Khadi and Village Industries Commission"],
            explain: "KVIC = Khadi and Village Industries Commission.",
          },
          {
            kind: "mcq",
            q: "The main gas in biogas is:",
            options: ["Hydrogen", "Carbon dioxide", "Methane", "Nitrogen"],
            answer: 2,
            explain: "Biogas is predominantly methane, which burns cleanly.",
          },
        ],
      },
      {
        slug: "biocontrol-and-biofertilisers",
        title: "Biocontrol Agents & Biofertilisers",
        summary: "Use ladybirds, Bt, Trichoderma and baculoviruses to fight pests, and Rhizobium, cyanobacteria and mycorrhiza to feed crops.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "illustration", emoji: "🐞", caption: "One ladybird can eat hundreds of aphids — free, natural pest control." },
          {
            type: "text",
            md: "Chemical pesticides and fertilisers pollute soil and water, kill useful organisms and enter our food. **Organic farming** replaces them with living organisms: **biocontrol agents** against pests and **biofertilisers** for nutrients.",
          },
          { type: "heading", text: "Biocontrol agents" },
          {
            type: "table",
            headers: ["Agent", "Type", "Target"],
            rows: [
              ["Ladybird beetle", "Insect predator", "Aphids"],
              ["Dragonflies", "Insect predator", "Mosquitoes"],
              ["*Bacillus thuringiensis* (Bt)", "Bacterium (spores sprayed)", "Butterfly caterpillars — toxin released in larval gut kills them"],
              ["*Trichoderma*", "Free-living fungus in roots", "Plant pathogens"],
              ["Baculoviruses (genus *Nucleopolyhedrovirus*)", "Virus", "Insects and other arthropods"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Why baculoviruses are ideal",
            md: "They are **species-specific and narrow-spectrum**: they kill the target pest but do not harm plants, mammals, birds, fish or even non-target insects. This makes them perfect for **Integrated Pest Management (IPM)** and ecologically sensitive areas.",
          },
          {
            type: "text",
            md: "**Worked comparison — biocontrol vs broad-spectrum pesticide.** A chemical spray on a cotton field in Maharashtra kills the bollworm *and* the ladybirds, bees and spiders that keep other pests in check — so pests rebound. Bt spores kill only caterpillars, leaving predators alive to keep aphid numbers low.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which biocontrol agent is a fungus?",
                options: ["Bacillus thuringiensis", "Trichoderma", "Nucleopolyhedrovirus", "Ladybird"],
                answer: 1,
                explain: "*Trichoderma* is a free-living fungus common in root ecosystems.",
              },
            ],
          },
          { type: "heading", text: "Biofertilisers" },
          {
            type: "list",
            items: [
              "**Symbiotic bacteria:** *Rhizobium* forms **root nodules** on legumes (pulses like gram, moong) and fixes atmospheric N₂.",
              "**Free-living bacteria in soil:** *Azotobacter* and *Azospirillum* fix nitrogen, enriching soil.",
              "**Mycorrhiza:** fungi of genus *Glomus* form symbiotic associations with roots; they absorb **phosphorus** from soil and pass it to the plant. Plants also gain resistance to root pathogens, tolerance to salinity and drought, and better growth.",
              "**Cyanobacteria (blue-green algae):** autotrophic microbes like *Anabaena*, *Nostoc* and *Oscillatoria* fix nitrogen in **paddy fields** and add organic matter to soil.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Mycorrhizal fungi mainly help in **phosphorus** absorption, not nitrogen fixation. Cyanobacteria are important biofertilisers specifically in **paddy (rice) fields**. In India, many biofertilisers are available commercially and farmers use them regularly.",
          },
          {
            type: "keypoints",
            items: [
              "Ladybird → aphids; dragonfly → mosquitoes; Bt → caterpillars.",
              "Trichoderma (fungus) controls plant pathogens.",
              "Baculoviruses are narrow-spectrum — ideal for IPM.",
              "Rhizobium (nodules), Azotobacter, Azospirillum fix nitrogen.",
              "Glomus (mycorrhiza) absorbs phosphorus; cyanobacteria enrich paddy fields.",
            ],
          },
        ],
        flashcards: [
          { front: "Bt", back: "*Bacillus thuringiensis* — bacterium whose toxin kills butterfly caterpillars." },
          { front: "Baculoviruses", back: "Narrow-spectrum insect pathogens (genus *Nucleopolyhedrovirus*), used in IPM." },
          { front: "Glomus", back: "Mycorrhizal fungus that absorbs phosphorus for plants." },
          { front: "Cyanobacteria as biofertilisers", back: "*Anabaena, Nostoc, Oscillatoria* — fix N₂ in paddy fields." },
          { front: "Free-living N₂-fixing soil bacteria", back: "*Azotobacter* and *Azospirillum*." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which organism is used to control aphids?",
            options: ["Dragonfly", "Ladybird beetle", "Trichoderma", "Rhizobium"],
            answer: 1,
            explain: "Ladybirds are predators of aphids.",
          },
          {
            kind: "truefalse",
            q: "Baculoviruses harm birds and mammals along with insect pests.",
            answer: false,
            explain: "They are species-specific and have no negative effect on non-targets.",
          },
          {
            kind: "mcq",
            q: "Mycorrhizal association mainly helps plants absorb:",
            options: ["Nitrogen", "Phosphorus", "Carbon dioxide", "Iron"],
            answer: 1,
            explain: "Glomus fungi absorb phosphorus from soil.",
          },
          {
            kind: "fill",
            q: "The symbiotic bacterium that forms root nodules on leguminous plants is ___.",
            answer: ["Rhizobium"],
            explain: "*Rhizobium* fixes atmospheric nitrogen in nodules.",
          },
          {
            kind: "mcq",
            q: "Which of these is a cyanobacterial biofertiliser?",
            options: ["Azotobacter", "Anabaena", "Glomus", "Trichoderma"],
            answer: 1,
            explain: "*Anabaena* is a blue-green alga (cyanobacterium).",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Biotechnology: Principles and Processes                       */
  /* ------------------------------------------------------------ */
  {
    slug: "biotechnology-principles-and-processes",
    title: "Biotechnology: Principles and Processes",
    icon: "🧪",
    description: "Restriction enzymes, gel electrophoresis, cloning vectors, competent hosts, PCR and bioreactors — the toolkit of recombinant DNA technology.",
    lessons: [
      {
        slug: "restriction-enzymes-and-gel-electrophoresis",
        title: "Molecular Scissors & Gel Electrophoresis",
        summary: "How restriction enzymes recognise palindromes and make sticky ends, and how DNA fragments are separated and seen.",
        minutes: 17,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "✂️", caption: "Restriction enzymes cut DNA at exact addresses — molecular scissors." },
          {
            type: "text",
            md: "The European Federation of Biotechnology defines biotechnology as the integration of natural science and organisms, cells, parts thereof and molecular analogues for products and services. Modern biotechnology rests on two core techniques: **genetic engineering** (changing the genetic material) and **bioprocess engineering** (maintaining sterile conditions to grow only the desired microbe in large quantities).",
          },
          {
            type: "callout",
            tone: "fact",
            title: "The first recombinant DNA",
            md: "In **1972**, **Stanley Cohen and Herbert Boyer** linked a gene for antibiotic resistance into a native plasmid of *Salmonella typhimurium* and transferred it into *E. coli*. The three basic steps of genetic engineering are: identify DNA with desirable genes → introduce it into the host → maintain it in the host and transfer it to progeny.",
          },
          { type: "heading", text: "Restriction enzymes" },
          {
            type: "text",
            md: "Restriction enzymes are **endonucleases** that cut DNA at specific sites (exonucleases remove nucleotides from the ends instead). The first such enzyme whose action depended on a specific sequence was **Hind II**, which always cuts at a particular point in a six base-pair sequence. Over **900** restriction enzymes have been isolated from more than 230 bacterial strains.",
          },
          {
            type: "table",
            headers: ["Letter(s) in EcoRI", "Meaning"],
            rows: [
              ["E", "Genus — *Escherichia*"],
              ["co", "Species — *coli*"],
              ["R", "Strain — RY 13"],
              ["I", "Order of isolation from that strain (first)"],
            ],
          },
          {
            type: "text",
            md: "Each enzyme recognises a **palindromic** sequence — one that reads the same on both strands when read in the same direction (5′→3′):\n\n`5′ — G A A T T C — 3′`\n`3′ — C T T A A G — 5′`\n\n**Worked example.** EcoRI cuts **between G and A** on both strands. Because the cut points are offset, each fragment is left with a single-stranded overhang `AATT` — a **sticky end**. Sticky ends form hydrogen bonds with complementary overhangs cut by the same enzyme, and **DNA ligase** seals the backbone.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A linear DNA molecule has 3 EcoRI recognition sites. How many fragments are produced after complete digestion?",
                answer: 4,
                tolerance: 0,
                unit: "fragments",
                explain: "A linear molecule cut at n sites gives n + 1 fragments: 3 + 1 = 4. (A circular plasmid would give n = 3.)",
              },
            ],
          },
          { type: "heading", text: "Gel electrophoresis" },
          {
            type: "list",
            ordered: true,
            items: [
              "DNA fragments are loaded into wells of an **agarose gel** (agarose is a natural polymer from seaweed).",
              "An electric field is applied; DNA is **negatively charged** and moves towards the **anode (+)**.",
              "The gel acts as a sieve: **smaller fragments move farther**.",
              "DNA is stained with **ethidium bromide** and viewed under **UV light** — bright orange bands appear.",
              "Bands are cut out and the DNA is extracted (**elution**) for use in constructing recombinant DNA.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "DNA moves to the **anode (positive electrode)**, not the cathode. And the smallest fragments are found **farthest from the wells**. You cannot see pure DNA without staining.",
          },
          {
            type: "keypoints",
            items: [
              "Genetic engineering + bioprocess engineering are the twin pillars of biotechnology.",
              "Cohen and Boyer made the first rDNA in 1972.",
              "Restriction endonucleases cut at palindromes; EcoRI leaves AATT sticky ends.",
              "DNA ligase joins fragments.",
              "Agarose gel separates DNA by size; ethidium bromide + UV shows orange bands.",
            ],
          },
        ],
        flashcards: [
          { front: "Palindromic sequence", back: "Base sequence that reads the same on the two strands when both are read 5′→3′, e.g. GAATTC." },
          { front: "Sticky ends", back: "Single-stranded overhangs left by staggered cuts; pair with complementary ends." },
          { front: "EcoRI naming", back: "E = Escherichia, co = coli, R = strain RY13, I = first enzyme isolated." },
          { front: "Ethidium bromide", back: "Stain for DNA; fluoresces orange under UV light." },
          { front: "Elution", back: "Extracting separated DNA bands from the agarose gel." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In gel electrophoresis, DNA fragments move towards the:",
            options: ["Cathode, because DNA is positive", "Anode, because DNA is negative", "Cathode, because DNA is negative", "They do not move"],
            answer: 1,
            explain: "Phosphate groups make DNA negatively charged, so it migrates to the anode.",
          },
          {
            kind: "mcq",
            q: "The enzyme that joins DNA fragments is:",
            options: ["Restriction endonuclease", "DNA ligase", "DNA polymerase", "Exonuclease"],
            answer: 1,
            explain: "Ligase seals the sugar–phosphate backbone.",
          },
          {
            kind: "numeric",
            q: "A circular plasmid has 2 BamHI sites. How many fragments are formed when it is completely digested with BamHI?",
            answer: 2,
            tolerance: 0,
            unit: "fragments",
            explain: "Circular DNA cut at n sites gives n fragments.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Agarose, used to make gels for electrophoresis, is obtained from ___.",
            answer: ["seaweed", "seaweeds", "sea weed"],
            explain: "Agarose is a natural polymer extracted from seaweeds.",
          },
          {
            kind: "truefalse",
            q: "In gel electrophoresis, the largest DNA fragments travel the farthest.",
            answer: false,
            explain: "Smaller fragments move farther through the sieving gel.",
          },
          {
            kind: "mcq",
            q: "In 'EcoRI', the letter 'R' stands for:",
            options: ["Restriction", "Strain RY13", "Recombinant", "Ribonuclease"],
            answer: 1,
            explain: "R denotes the strain of the bacterium, RY13.",
          },
        ],
      },
      {
        slug: "cloning-vectors-and-competent-hosts",
        title: "Cloning Vectors & Competent Hosts",
        summary: "Ori, selectable markers, cloning sites, insertional inactivation, pBR322, Ti plasmid, and ways to get DNA into host cells.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A gene on its own cannot multiply inside a host. It must be carried by a **vector** — usually a **plasmid** (small circular extra-chromosomal DNA in bacteria) or a **bacteriophage** — that can replicate inside the host.",
          },
          { type: "heading", text: "Features of a cloning vector" },
          {
            type: "table",
            headers: ["Feature", "Why it is needed"],
            rows: [
              ["**Origin of replication (ori)**", "Where replication starts; also controls the copy number of linked DNA"],
              ["**Selectable marker**", "Identifies transformants; e.g. genes for resistance to ampicillin, chloramphenicol, tetracycline or kanamycin"],
              ["**Cloning (recognition) sites**", "Preferably a single site for each restriction enzyme, so the vector is cut only once"],
              ["**Small size**", "Easier to handle and introduce into host"],
            ],
          },
          {
            type: "illustration",
            emoji: "⭕",
            caption: "pBR322: ori, rop, and two resistance genes — ampᴿ and tetᴿ — with sites like BamHI, PstI, EcoRI, HindIII.",
          },
          {
            type: "text",
            md: "**Worked example — selecting recombinants in pBR322.**\n\n1. Foreign DNA is ligated into the **BamHI site**, which lies within the **tetracycline-resistance gene**.\n2. The tetᴿ gene is broken, so recombinants **lose tetracycline resistance** but keep ampicillin resistance.\n3. Plate all cells on **ampicillin** → only cells that took up a plasmid (recombinant or not) survive.\n4. Replica-plate onto **tetracycline** → colonies that **die** here are the recombinants.\n\nThis is **insertional inactivation** of a marker.",
          },
          {
            type: "text",
            md: "Because replica plating on two antibiotics is tedious, a better method uses the **β-galactosidase** gene. Inserting DNA into it inactivates the enzyme. On a plate with a chromogenic substrate, colonies **without** an insert make **blue** colour; colonies **with** an insert are **colourless (white)**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "On a chromogenic plate, which colonies contain recombinant plasmids?",
                options: ["Blue colonies", "Colourless colonies", "Both", "Neither"],
                answer: 1,
                explain: "The insert inactivates β-galactosidase, so no blue colour forms.",
              },
            ],
          },
          { type: "heading", text: "Vectors for plants and animals" },
          {
            type: "text",
            md: "*Agrobacterium tumefaciens*, a pathogen of many dicots, delivers a piece of DNA called **T-DNA** into plant cells, turning them into tumour cells. Its **Ti plasmid** has been modified into a **disarmed** cloning vector that is no longer pathogenic but still delivers genes. Similarly, **retroviruses** that turn animal cells cancerous have been disarmed to carry genes into animal cells.",
          },
          { type: "heading", text: "Making hosts competent" },
          {
            type: "list",
            items: [
              "**Chemical + heat shock:** treat bacteria with a divalent cation such as **calcium**; incubate with rDNA **on ice**, give a brief **heat shock at 42 °C**, then place back on ice.",
              "**Micro-injection:** rDNA injected directly into the nucleus of an animal cell.",
              "**Biolistics (gene gun):** cells bombarded with high-velocity micro-particles of **gold or tungsten** coated with DNA — used in plants.",
              "**Disarmed pathogen vectors:** allowed to infect the cell and transfer the rDNA.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "If the vector has **two** recognition sites for the same enzyme, it will be cut into pieces — so cloning vectors need a **single** site for each chosen enzyme. And remember: in pBR322, inserting at **BamHI** knocks out **tetracycline** resistance, while inserting at **PstI** knocks out **ampicillin** resistance.",
          },
          {
            type: "keypoints",
            items: [
              "Vector essentials: ori, selectable marker, single cloning sites.",
              "Insertional inactivation identifies recombinants (antibiotic or blue–white).",
              "Ti plasmid of *Agrobacterium* is a disarmed vector for plants.",
              "Ca²⁺ + ice + 42 °C heat shock makes bacteria competent.",
              "Gene gun (gold/tungsten) for plants; micro-injection for animal cells.",
            ],
          },
        ],
        flashcards: [
          { front: "Ori", back: "Origin of replication; controls copy number of linked DNA." },
          { front: "Insertional inactivation", back: "Insertion of foreign DNA inside a marker gene inactivates it, allowing recombinants to be identified." },
          { front: "Blue–white selection", back: "Recombinants (insert in β-galactosidase gene) give colourless colonies; non-recombinants give blue." },
          { front: "Ti plasmid", back: "Tumour-inducing plasmid of *Agrobacterium tumefaciens*; disarmed version used as a plant vector." },
          { front: "Biolistics", back: "Gene gun: DNA-coated gold or tungsten particles shot into plant cells." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In pBR322, foreign DNA inserted at the BamHI site makes recombinant cells:",
            options: ["Lose ampicillin resistance", "Lose tetracycline resistance", "Lose both resistances", "Gain kanamycin resistance"],
            answer: 1,
            explain: "BamHI lies in the tetᴿ gene, so tetracycline resistance is lost.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Bacterial cells are made competent by treating them with a divalent cation such as calcium.",
            answer: true,
            explain: "Ca²⁺ increases the efficiency of DNA entry through pores in the cell wall.",
          },
          {
            kind: "fill",
            q: "In the gene gun method, DNA is coated on micro-particles of gold or ___.",
            answer: ["tungsten"],
            explain: "Biolistics uses gold or tungsten particles.",
          },
          {
            kind: "order",
            q: "Arrange the steps of the heat-shock method in order.",
            items: ["Treat cells with calcium ions", "Incubate cells with rDNA on ice", "Heat shock at 42 °C", "Return cells to ice"],
            explain: "Ca²⁺ treatment → ice with rDNA → 42 °C pulse → back on ice.",
          },
          {
            kind: "mcq",
            q: "Why should a cloning vector have only one recognition site for a given restriction enzyme?",
            options: ["To increase copy number", "So the vector is cut only once and not fragmented", "To act as a selectable marker", "To prevent transformation"],
            answer: 1,
            explain: "Multiple sites would cut the vector into several pieces, complicating cloning.",
          },
        ],
      },
      {
        slug: "rdna-process-pcr-and-bioreactors",
        title: "rDNA Process, PCR & Bioreactors",
        summary: "Isolating DNA, amplifying genes by PCR, and scaling up product formation in bioreactors with downstream processing.",
        minutes: 16,
        xp: 45,
        blocks: [
          { type: "illustration", emoji: "🧬", caption: "From a single gene to kilograms of protein — the rDNA pipeline." },
          {
            type: "text",
            md: "With the tools ready, here is the whole recombinant DNA process, step by step.",
          },
          { type: "heading", text: "1. Isolating DNA" },
          {
            type: "text",
            md: "DNA is enclosed by membranes and walls, so cells are broken open with enzymes: **lysozyme** (bacteria), **cellulase** (plant cells), **chitinase** (fungi). DNA is wrapped with histones and mixed with RNA, so **ribonuclease** removes RNA and **protease** removes proteins. Adding **chilled ethanol** precipitates purified DNA as fine threads, which can be **spooled** out.",
          },
          { type: "heading", text: "2. Cutting, 3. Amplifying with PCR" },
          {
            type: "text",
            md: "Purified DNA is cut with restriction enzymes and checked on agarose gel. The gene of interest is then amplified by the **Polymerase Chain Reaction (PCR)**, which uses two sets of **primers** (small chemically synthesised oligonucleotides complementary to the ends of the target region) and a **thermostable DNA polymerase** — **Taq polymerase** from the bacterium *Thermus aquaticus*.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Denaturation** — high temperature separates the two DNA strands.",
              "**Annealing** — primers bind to complementary sequences on each strand.",
              "**Extension** — Taq polymerase extends the primers using dNTPs.",
            ],
          },
          { type: "formula", tex: "N = N_0 \\times 2^{n}", caption: "Copies after n cycles, starting with N₀ copies (ideal doubling)" },
          {
            type: "text",
            md: "**Worked example.** Start with 1 DNA molecule; after 10 cycles: $N = 1 \\times 2^{10} = 1024$ copies. After 30 cycles: $2^{30} \\approx 1.07 \\times 10^9$ — about a **billion** copies, which matches NCERT's statement that PCR can amplify DNA roughly a billion times.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "If PCR starts with 5 copies of a DNA segment, how many copies are present after 4 cycles (assuming perfect doubling)?",
                answer: 80,
                tolerance: 0,
                unit: "copies",
                explain: "5 × 2⁴ = 5 × 16 = 80.",
              },
            ],
          },
          { type: "heading", text: "4. Ligation & transformation, 5. Scale-up" },
          {
            type: "text",
            md: "The amplified gene is ligated into a vector and introduced into a competent host. If the host expresses the foreign gene, it makes a **recombinant protein**. Cells are first grown in small cultures, then in **bioreactors** (100–1000 litres) that provide optimum temperature, pH, substrate, salts, vitamins and oxygen. The most common is the **stirred-tank bioreactor**, with an agitator, oxygen delivery, foam control, temperature and pH control, and a sampling port. A **continuous culture** removes used medium and adds fresh medium so cells stay in the **log (exponential) phase**.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Downstream processing",
            md: "After biosynthesis, the product goes through **separation and purification** (together, downstream processing), then **formulation** with preservatives. Medicines must undergo **clinical trials** and strict quality control before reaching patients.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "Taq polymerase is used because it is **thermostable** — it survives the high denaturation temperature. Questions also ask which enzyme removes RNA during DNA isolation: it is **ribonuclease**, not protease. And the DNA is precipitated by **chilled ethanol**, not by heating.",
          },
          {
            type: "keypoints",
            items: [
              "Lysozyme / cellulase / chitinase break cells; RNase and protease purify DNA; chilled ethanol precipitates it.",
              "PCR: denaturation → annealing → extension, using primers and Taq polymerase.",
              "Copies after n cycles = N₀ × 2ⁿ.",
              "Stirred-tank bioreactors scale up production; continuous culture keeps cells in log phase.",
              "Downstream processing = separation + purification, then formulation and trials.",
            ],
          },
        ],
        flashcards: [
          { front: "Taq polymerase", back: "Thermostable DNA polymerase from *Thermus aquaticus*, used in PCR." },
          { front: "Three steps of PCR", back: "Denaturation, annealing (primers), extension." },
          { front: "Enzymes to break open cells", back: "Lysozyme (bacteria), cellulase (plants), chitinase (fungi)." },
          { front: "Downstream processing", back: "Separation and purification of the product after biosynthesis." },
          { front: "Continuous culture", back: "Used medium drained and fresh medium added to keep cells in the log phase." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the steps of a PCR cycle in order.",
            items: ["Denaturation", "Annealing", "Extension"],
            explain: "Separate strands → primers bind → polymerase extends.",
          },
          {
            kind: "numeric",
            q: "Starting from a single DNA molecule, how many copies are obtained after 8 PCR cycles?",
            answer: 256,
            tolerance: 0,
            unit: "copies",
            explain: "2⁸ = 256.",
          },
          {
            kind: "mcq",
            q: "Which enzyme is used to break the cell wall of fungi during DNA isolation?",
            options: ["Lysozyme", "Cellulase", "Chitinase", "Protease"],
            answer: 2,
            explain: "Fungal walls contain chitin, digested by chitinase.",
          },
          {
            kind: "truefalse",
            q: "Purified DNA is precipitated by adding chilled ethanol.",
            answer: true,
            explain: "DNA comes out as fine threads that can be spooled.",
          },
          {
            kind: "fill",
            q: "Separation and purification of a product after biosynthesis are together called ___ processing.",
            answer: ["downstream"],
            explain: "Downstream processing follows the bioreactor stage.",
          },
          {
            kind: "mcq",
            q: "Why is Taq polymerase used in PCR?",
            options: ["It cuts DNA at palindromes", "It remains active at high temperatures", "It joins DNA fragments", "It removes RNA"],
            answer: 1,
            explain: "It is thermostable, surviving the high-temperature denaturation step.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Biotechnology and its Applications                            */
  /* ------------------------------------------------------------ */
  {
    slug: "biotechnology-and-its-applications",
    title: "Biotechnology and its Applications",
    icon: "🌾",
    description: "GM crops such as Bt cotton and RNAi plants, genetically engineered insulin, gene therapy, molecular diagnosis, transgenic animals, and ethical issues like biopiracy.",
    lessons: [
      {
        slug: "biotech-in-agriculture",
        title: "Biotechnology in Agriculture",
        summary: "GM crops, how Bt toxin kills insects, and how RNA interference protects tobacco roots from nematodes.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🌱", caption: "Bt cotton, approved in India in 2002, now covers most of the country's cotton fields." },
          {
            type: "text",
            md: "There are three options to increase food production: agrochemical-based agriculture, organic agriculture, and **genetically engineered crop-based agriculture**. Plants, bacteria, fungi and animals whose genes have been altered are called **Genetically Modified Organisms (GMOs)**.",
          },
          {
            type: "list",
            items: [
              "More **tolerant to abiotic stresses** (cold, drought, salt, heat).",
              "**Reduced reliance on chemical pesticides** (pest-resistant crops).",
              "Reduced **post-harvest losses**.",
              "Increased **efficiency of mineral usage** by plants (prevents early soil exhaustion).",
              "Enhanced **nutritional value**, e.g. vitamin A-enriched (Golden) rice.",
            ],
          },
          { type: "heading", text: "Bt cotton — a labelled process" },
          {
            type: "list",
            ordered: true,
            items: [
              "*Bacillus thuringiensis* makes **Cry proteins** (coded by *cry* genes) that kill certain insects.",
              "Inside the bacterium, the toxin exists as an inactive **protoxin**, so it does not kill the bacterium itself.",
              "When an insect eats the plant, the **alkaline pH** of its gut solubilises the crystals and converts protoxin into **active toxin**.",
              "Active toxin binds to the surface of **midgut epithelial cells** and creates **pores**.",
              "Cells swell and **lyse**, and the insect dies.",
            ],
          },
          {
            type: "table",
            headers: ["Gene", "Pest controlled"],
            rows: [
              ["*cryIAc* and *cryIIAb*", "Cotton bollworms"],
              ["*cryIAb*", "Corn borer"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why doesn't the Bt toxin kill the Bacillus that makes it?",
                options: ["The bacterium has no gut", "It is stored as an inactive protoxin", "It is secreted immediately", "The bacterium is resistant to all toxins"],
                answer: 1,
                explain: "The protoxin becomes active only in the alkaline insect gut.",
              },
            ],
          },
          { type: "heading", text: "RNA interference (RNAi) against nematodes" },
          {
            type: "text",
            md: "The nematode *Meloidogyne incognita* infects tobacco roots and reduces yield. **RNAi** is a method of cellular defence in all eukaryotes that silences a specific mRNA using a complementary double-stranded RNA (dsRNA).\n\n**Worked process:**\n1. Using *Agrobacterium* vectors, nematode-specific genes are introduced into the tobacco plant.\n2. The plant produces both **sense and anti-sense RNA** for the nematode gene.\n3. These two complementary RNAs pair to form **dsRNA**.\n4. When the nematode feeds, dsRNA silences its specific mRNA (translation is blocked).\n5. The parasite cannot survive in the transgenic host — the plant is protected.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Bt toxin is activated by the **alkaline** pH of the insect gut — not acidic. The *cry* genes are named in lower-case italics, while the proteins are written **Cry**. And note: in RNAi, the plant expresses **both** sense and anti-sense RNA of a nematode gene, not a plant gene.",
          },
          {
            type: "keypoints",
            items: [
              "GMOs: stress tolerance, fewer pesticides, less post-harvest loss, better nutrition.",
              "Bt protoxin is activated in the alkaline insect gut; it makes pores in midgut cells.",
              "cryIAc and cryIIAb → cotton bollworm; cryIAb → corn borer.",
              "RNAi silences nematode mRNA using dsRNA made in transgenic tobacco.",
            ],
          },
        ],
        flashcards: [
          { front: "GMO", back: "An organism whose genes have been altered by manipulation." },
          { front: "Bt protoxin", back: "Inactive form of Cry protein; activated by alkaline pH in the insect gut." },
          { front: "cryIAc and cryIIAb", back: "Genes in Bt cotton that control cotton bollworms." },
          { front: "RNAi", back: "Silencing of a specific mRNA by complementary dsRNA; used against *Meloidogyne incognita*." },
          { front: "Golden rice", back: "Rice genetically enriched with provitamin A (β-carotene)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The Bt toxin gene cryIAb controls:",
            options: ["Cotton bollworm", "Corn borer", "Nematodes", "Aphids"],
            answer: 1,
            explain: "cryIAb controls the corn borer.",
          },
          {
            kind: "order",
            q: "Arrange the steps by which Bt toxin kills an insect.",
            items: ["Insect eats protoxin crystals", "Alkaline gut pH activates toxin", "Toxin binds midgut epithelial cells and makes pores", "Cells swell and lyse; insect dies"],
            explain: "Ingestion → activation → pore formation → lysis.",
          },
          {
            kind: "truefalse",
            q: "In RNAi-based pest resistance, the transgenic plant produces both sense and anti-sense RNA of the nematode gene.",
            answer: true,
            explain: "The complementary RNAs form dsRNA that silences nematode mRNA.",
          },
          {
            kind: "fill",
            q: "The nematode that infects the roots of tobacco plants is Meloidogyne ___.",
            answer: ["incognita"],
            explain: "*Meloidogyne incognita*.",
          },
          {
            kind: "mcq",
            q: "Which vector was used to introduce nematode-specific genes into tobacco?",
            options: ["Retrovirus", "Agrobacterium", "Bacteriophage lambda", "Yeast plasmid"],
            answer: 1,
            explain: "*Agrobacterium* vectors are used for plant transformation.",
          },
        ],
      },
      {
        slug: "biotech-in-medicine",
        title: "Biotechnology in Medicine",
        summary: "Genetically engineered insulin, gene therapy for ADA deficiency, and the advantages of recombinant medicines.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "💉", caption: "Human insulin made by bacteria — safer than insulin from cattle and pigs." },
          {
            type: "text",
            md: "Recombinant DNA technology lets us make safe, effective medicines in large quantities. Recombinant therapeutics do not trigger unwanted immune responses the way products from non-human sources can. Around **30 recombinant therapeutics** were approved for human use worldwide at the time NCERT was written, with **12** marketed in India.",
          },
          { type: "heading", text: "Genetically engineered insulin" },
          {
            type: "text",
            md: "Insulin consists of two short polypeptide chains — **chain A and chain B** — linked by **disulphide bridges**. In mammals it is made as a **pro-hormone (pro-insulin)** with an extra stretch called the **C peptide**, which is removed during maturation. Earlier, insulin was extracted from the pancreas of slaughtered cattle and pigs; some patients developed allergies to it.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "In **1983**, **Eli Lilly**, an American company, prepared two DNA sequences corresponding to chains **A and B** of human insulin.",
              "Each was introduced into plasmids of ***E. coli***.",
              "The bacteria produced chains A and B **separately**.",
              "The chains were extracted and combined by creating **disulphide bonds** to form human insulin.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "The main challenge was that insulin is made as **pro-insulin with a C peptide**. Eli Lilly side-stepped this by making chains A and B **separately** — so the C peptide is not part of the recombinant product. Also remember the **disulphide** (not hydrogen) bridges.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which part of pro-insulin is absent in mature insulin?",
                options: ["A chain", "B chain", "C peptide", "Disulphide bonds"],
                answer: 2,
                explain: "The C peptide is removed during maturation.",
              },
            ],
          },
          { type: "heading", text: "Gene therapy" },
          {
            type: "text",
            md: "**Gene therapy** corrects a gene defect diagnosed in a child or embryo by delivering a normal gene into the person's cells to compensate for the non-functional gene.\n\n**Worked example — ADA deficiency.** The first clinical gene therapy was given in **1990** to a **4-year-old girl** with **adenosine deaminase (ADA) deficiency**, an enzyme crucial for the immune system.\n1. Lymphocytes are taken from the patient's blood and grown in culture.\n2. A functional ADA cDNA is introduced into them using a **retroviral vector**.\n3. The lymphocytes are returned to the patient.\n4. Because lymphocytes are not immortal, the patient needs **periodic infusions**.\n5. A **permanent cure** may be possible if the ADA gene is introduced into cells at an **early embryonic stage** (e.g. bone marrow stem cells).",
          },
          {
            type: "table",
            headers: ["Treatment for ADA deficiency", "Limitation"],
            rows: [
              ["Bone marrow transplantation", "Needs a matching donor"],
              ["Enzyme replacement therapy (injecting functional ADA)", "Not a cure; repeated doses"],
              ["Gene therapy with genetically engineered lymphocytes", "Periodic infusions needed"],
              ["Gene introduced into early embryonic / stem cells", "Could be permanent"],
            ],
          },
          {
            type: "keypoints",
            items: [
              "Insulin = chains A and B linked by disulphide bridges; pro-insulin has an extra C peptide.",
              "Eli Lilly (1983) made chains A and B separately in E. coli.",
              "First gene therapy: 1990, 4-year-old girl with ADA deficiency.",
              "Engineered lymphocytes are not immortal, so infusions are periodic.",
            ],
          },
        ],
        flashcards: [
          { front: "Structure of insulin", back: "Chains A and B linked by disulphide bridges." },
          { front: "C peptide", back: "Extra stretch in pro-insulin, removed during maturation into insulin." },
          { front: "Eli Lilly, 1983", back: "Produced human insulin chains A and B separately in E. coli." },
          { front: "ADA deficiency", back: "Lack of adenosine deaminase; treated in the first gene therapy (1990)." },
          { front: "Vector used in ADA gene therapy", back: "Retroviral vector carrying functional ADA cDNA into lymphocytes." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The first clinical gene therapy (1990) treated:",
            options: ["Haemophilia", "ADA deficiency", "Cystic fibrosis", "Diabetes"],
            answer: 1,
            explain: "A 4-year-old girl with adenosine deaminase deficiency.",
          },
          {
            kind: "truefalse",
            q: "In recombinant insulin production by Eli Lilly, chains A and B were produced together as pro-insulin.",
            answer: false,
            explain: "They were produced separately and then joined by disulphide bonds.",
          },
          {
            kind: "fill",
            q: "Chains A and B of insulin are linked by ___ bridges.",
            answer: ["disulphide", "disulfide"],
            explain: "Disulphide (S–S) bonds join the chains.",
          },
          {
            kind: "mcq",
            q: "Why do patients treated with gene-engineered lymphocytes need periodic infusions?",
            options: ["The vector is destroyed", "Lymphocytes are not immortal", "The ADA gene mutates", "Antibodies destroy ADA"],
            answer: 1,
            explain: "Lymphocytes have a limited life span, so new engineered cells must be given.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange the steps of ADA gene therapy.",
            items: ["Collect lymphocytes from patient's blood", "Grow them in culture", "Introduce functional ADA cDNA by retroviral vector", "Return lymphocytes to the patient"],
            explain: "Collect → culture → transfect → reinfuse.",
          },
        ],
      },
      {
        slug: "diagnosis-transgenic-animals-and-ethics",
        title: "Molecular Diagnosis, Transgenic Animals & Ethics",
        summary: "PCR, ELISA and probes for early diagnosis; uses of transgenic animals; GEAC, patents and biopiracy of basmati, neem and turmeric.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Conventional diagnosis (serum and urine analysis) often detects a disease only after symptoms appear, when pathogen numbers are already high. **Molecular diagnosis** can catch it much earlier.",
          },
          { type: "heading", text: "Molecular diagnosis" },
          {
            type: "table",
            headers: ["Technique", "Principle", "Example use"],
            rows: [
              ["**PCR**", "Amplifies very small amounts of a pathogen's nucleic acid", "Detecting HIV in suspected AIDS patients; detecting mutations in suspected cancer patients"],
              ["**Probe + autoradiography**", "A radioactively labelled single-stranded DNA/RNA probe hybridises to its complement; mutated genes do not bind and don't show on film", "Detecting mutated genes"],
              ["**ELISA**", "Antigen–antibody interaction; detects either the pathogen's antigens or antibodies made against it", "Testing for HIV infection"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "ELISA is based on the principle of:",
                options: ["DNA amplification", "Antigen–antibody interaction", "DNA hybridisation", "Gel electrophoresis"],
                answer: 1,
                explain: "ELISA = Enzyme Linked Immuno-Sorbent Assay.",
              },
            ],
          },
          { type: "heading", text: "Transgenic animals" },
          {
            type: "text",
            md: "Animals whose DNA has been manipulated to carry and express an extra (foreign) gene are **transgenic**. Rats, rabbits, pigs, sheep, cows and fish have been made, but **over 95% are mice**.",
          },
          {
            type: "list",
            items: [
              "**Normal physiology and development** — study how genes regulate body functions, e.g. insulin-like growth factor.",
              "**Study of disease** — models for cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer's.",
              "**Biological products** — e.g. human protein **α-1-antitrypsin**, used to treat **emphysema**.",
              "**Vaccine safety** — transgenic mice test the safety of **polio vaccine** before human use.",
              "**Chemical safety (toxicity) testing** — results in less time, as animals are more sensitive to toxins.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Rosie the cow",
            md: "In **1997**, the first transgenic cow, **Rosie**, produced human-protein-enriched milk containing **2.4 grams per litre**. The milk contained the human **alpha-lactalbumin** and was nutritionally more balanced for human babies than natural cow milk.",
          },
          { type: "heading", text: "Ethical issues and biopiracy" },
          {
            type: "text",
            md: "The Indian Government set up the **GEAC (Genetic Engineering Appraisal Committee)** to decide on the validity of GM research and the safety of introducing GM organisms for public services.\n\n**Biopiracy** is the use of bio-resources by multinational companies without proper authorisation from the countries and people concerned and without compensatory payment.\n\n**Worked case — Basmati rice.** India has about **27 documented varieties** of Basmati. In **1997**, an American company got patent rights on Basmati rice through the US Patent and Trademark Office, for a 'new' variety actually derived from Indian farmers' varieties crossed with semi-dwarf varieties. Similar attempts targeted **turmeric** and **neem**. The Indian Parliament has since cleared the second amendment of the Indian Patents Bill to address patent terms, emergency provisions and research and development.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "α-1-antitrypsin treats **emphysema**, while transgenic mice are used to test **polio** vaccine safety. Rosie produced **alpha-lactalbumin**, not insulin. And GEAC is the **Indian** regulatory body — expand it correctly as **Genetic Engineering Appraisal Committee**.",
          },
          {
            type: "keypoints",
            items: [
              "PCR, probes with autoradiography and ELISA allow early diagnosis.",
              "Over 95% of transgenic animals are mice.",
              "α-1-antitrypsin (emphysema); Rosie (1997) made α-lactalbumin-rich milk.",
              "GEAC regulates GM research and release in India.",
              "Biopiracy: Basmati (1997 US patent), turmeric, neem.",
            ],
          },
        ],
        flashcards: [
          { front: "ELISA", back: "Enzyme Linked Immuno-Sorbent Assay — detects antigens or antibodies; used for HIV testing." },
          { front: "α-1-antitrypsin", back: "Human protein produced in transgenic animals to treat emphysema." },
          { front: "Rosie", back: "First transgenic cow (1997); milk with 2.4 g/L human alpha-lactalbumin." },
          { front: "GEAC", back: "Genetic Engineering Appraisal Committee — Indian body regulating GM research and release." },
          { front: "Biopiracy", back: "Exploiting bio-resources without authorisation or compensation, e.g. Basmati patent." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Transgenic mice are used to test the safety of which vaccine before human use?",
            options: ["BCG", "Polio", "Hepatitis B", "Rabies"],
            answer: 1,
            explain: "NCERT cites transgenic mice for testing polio vaccine safety.",
          },
          {
            kind: "numeric",
            q: "Rosie, the first transgenic cow, produced milk containing how many grams of human protein per litre?",
            answer: 2.4,
            tolerance: 0.01,
            unit: "g/L",
            explain: "Her milk contained 2.4 g of human protein per litre.",
          },
          {
            kind: "truefalse",
            q: "More than 95% of all existing transgenic animals are mice.",
            answer: true,
            explain: "Mice are by far the most common transgenic animals.",
          },
          {
            kind: "fill",
            q: "The Indian body that decides on the validity of GM research and release is the ___.",
            answer: ["GEAC", "Genetic Engineering Appraisal Committee"],
            explain: "GEAC = Genetic Engineering Appraisal Committee.",
          },
          {
            kind: "mcq",
            q: "How many documented varieties of Basmati rice are grown in India?",
            options: ["7", "17", "27", "270"],
            answer: 2,
            explain: "NCERT states about 27 documented varieties.",
          },
          {
            kind: "mcq",
            q: "Which technique uses a radioactively labelled single-stranded nucleic acid to detect a mutated gene?",
            options: ["ELISA", "Probe hybridisation with autoradiography", "Gel electrophoresis", "Biolistics"],
            answer: 1,
            explain: "A labelled probe hybridises to its complement; the mutated gene fails to bind and does not appear on the photographic film.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Evolution": "evolution",
  "Human Health and Disease": "human-health-and-disease",
  "Microbes in Human Welfare": "microbes-in-human-welfare",
  "Biology and Human Welfare": "microbes-in-human-welfare",
  "Biotechnology: Principles and Processes": "biotechnology-principles-and-processes",
  "Biotechnology and its Applications": "biotechnology-and-its-applications",
};
