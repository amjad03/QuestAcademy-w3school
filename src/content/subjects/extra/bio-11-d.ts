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
/* Photosynthesis in Higher Plants                                     */
/* ------------------------------------------------------------------ */
const photosynthesis: Topic = {
  slug: "c11-bio-photosynthesis",
  title: "Photosynthesis in Higher Plants",
  icon: "🌿",
  description:
    "Early experiments, the chloroplast and its pigments, the light reaction and Z scheme, photophosphorylation and chemiosmosis, the Calvin cycle, photorespiration, the C4 pathway and the factors that limit photosynthesis.",
  lessons: [
    /* ---------------- Lesson 1: experiments, chloroplast, pigments ---------------- */
    {
      slug: "c11-bio-ps-experiments-pigments",
      title: "Early Experiments, the Chloroplast and Pigments",
      summary:
        "What we already know about photosynthesis, the experiments of Priestley, Ingenhousz, Sachs, Engelmann and van Niel, where photosynthesis happens in the chloroplast, and how pigments are separated and compared by absorption and action spectra.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Every grain of rice in a Punjab field and every mango in a Ratnagiri orchard was built from carbon dioxide taken out of the air. **Photosynthesis** is the physico-chemical process by which green plants use light energy to make organic compounds from CO₂ and water. It is the base of almost every food chain on Earth and the source of the oxygen in our atmosphere.\n\nFrom earlier classes you already know three things: chlorophyll, light and CO₂ are needed. The **variegated leaf** test (only green patches give the starch test) shows chlorophyll is needed. A **half-leaf** experiment, where one half of a leaf is enclosed with KOH that absorbs CO₂, shows that only the half with CO₂ makes starch.",
        },
        {
          type: "heading",
          text: "Early experiments",
        },
        {
          type: "table",
          headers: ["Scientist", "What was done", "What it showed"],
          rows: [
            ["Joseph Priestley (1770)", "A candle or a mouse in a closed bell jar soon stopped burning or died; with a mint plant inside, both survived", "Plants restore to the air what burning candles and breathing animals remove. He discovered oxygen in 1774."],
            ["Jan Ingenhousz (1730–1799)", "Repeated the set-up in sunlight and in darkness; watched small bubbles on green parts of an aquatic plant", "Sunlight is essential, and only the **green parts** release oxygen."],
            ["Julius von Sachs (1854)", "Studied green parts of plants as they grew", "Plants make **glucose**, usually stored as **starch**; chlorophyll is located in special bodies, later called chloroplasts."],
            ["T. W. Engelmann (1843–1909)", "Split light with a prism and shone the spectrum on the green alga *Cladophora* placed in a suspension of aerobic bacteria", "Bacteria gathered in the **blue and red** regions, where most O₂ was released. This was the first **action spectrum**."],
            ["Cornelius van Niel (1897–1985)", "Studied purple and green sulphur bacteria, which use H₂S and release sulphur, not O₂", "Photosynthesis is a light-dependent reaction where hydrogen from a donor reduces CO₂; in green plants the donor is water, so the **O₂ comes from H₂O**."],
          ],
        },
        {
          type: "formula",
          tex: t`2\,\text{H}_2\text{A} + \text{CO}_2 \xrightarrow{\text{light}} 2\,\text{A} + \text{CH}_2\text{O} + \text{H}_2\text{O} \qquad 6\,\text{CO}_2 + 12\,\text{H}_2\text{O} \xrightarrow[\text{chlorophyll}]{\text{light}} \text{C}_6\text{H}_{12}\text{O}_6 + 6\,\text{H}_2\text{O} + 6\,\text{O}_2`,
          caption: "Left: van Niel's general equation (A = O in plants, S in sulphur bacteria). Right: the overall equation; 12 H₂O on the left makes it clear that all 6 O₂ come from water.",
        },
        {
          type: "heading",
          text: "Where photosynthesis takes place",
        },
        {
          type: "text",
          md: "Photosynthesis happens in green leaves and other green parts, mainly in the **mesophyll** cells, which hold many **chloroplasts**. Chloroplasts usually line up along the cell walls so they get the best light; in strong light they turn edge-on, and in weak light they turn flat-face to the light.\n\nInside, a membrane system of stacked **grana** and unstacked **stroma lamellae** lies in a fluid **stroma**. There is a clear division of labour: the **membranes** trap light and make **ATP and NADPH**; the **stroma** holds the enzymes that reduce CO₂ to sugar. The stroma reactions do not use light directly, but they are not truly 'dark' reactions either, because they depend on the ATP and NADPH made in light.",
        },
        {
          type: "table",
          headers: ["Pigment", "Colour on the chromatogram", "Role"],
          rows: [
            ["Chlorophyll a", "Bright or blue-green", "Chief pigment; forms the reaction centre"],
            ["Chlorophyll b", "Yellow-green", "Accessory pigment"],
            ["Xanthophylls", "Yellow", "Accessory pigment"],
            ["Carotenoids", "Yellow to yellow-orange", "Accessory pigment; protects chlorophyll a from photo-oxidation"],
          ],
        },
        {
          type: "text",
          md: "An **absorption spectrum** shows how much light of each wavelength a pigment absorbs. An **action spectrum** shows the rate of photosynthesis at each wavelength. Chlorophyll a absorbs most strongly in the **blue and red** parts of the spectrum, and the action spectrum has peaks in the same regions, so chlorophyll a is the main pigment driving photosynthesis. The two graphs do not overlap completely: accessory pigments absorb other wavelengths and pass the energy on to chlorophyll a, which widens the range of light used. Only about 400–700 nm light, called **photosynthetically active radiation (PAR)**, is used.",
        },
        {
          type: "example",
          title: "Reading Engelmann's set-up",
          problem: "In an experiment like Engelmann's, aerobic bacteria cluster heavily along the parts of a filament of *Cladophora* lit by blue (about 430 nm) and red (about 670 nm) light, and hardly at all in the green region (about 530 nm). What can you conclude?",
          steps: [
            "Aerobic bacteria move towards oxygen, so the bacterial density marks where the alga releases the most O₂.",
            "Most O₂ release means the fastest photosynthesis, so the graph of bacterial number against wavelength is an action spectrum.",
            "The peaks match the absorption peaks of chlorophyll a in blue and red; green light is mostly reflected, so little photosynthesis happens there.",
          ],
          answer: "Photosynthesis is fastest in blue and red light, which chlorophyll absorbs best; green light is least effective.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which observation showed that the oxygen released in photosynthesis comes from water?",
              options: [
                "Priestley's mint plant in a bell jar",
                "Ingenhousz's bubbles on green parts",
                "van Niel's work on purple and green sulphur bacteria",
                "Sachs's starch test",
              ],
              answer: 2,
              explain: "van Niel saw that sulphur bacteria release sulphur from H₂S instead of O₂, and inferred that green plants use water as the hydrogen donor and release its oxygen.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The oxygen given out by plants comes from the CO₂ they take in.",
          right: "The O₂ comes from splitting water. Carbon dioxide's oxygen ends up in sugar and water.",
          why: "Writing 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ makes it look as if the oxygen could come from either. Writing 12 H₂O on the left and 6 H₂O on the right (and van Niel's work, later confirmed with isotopes) shows that all the released O₂ came from water.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each scientist with the finding.",
            pairs: [
              ["Priestley", "Plants restore air spoiled by a burning candle"],
              ["Ingenhousz", "Only green parts release O₂, and only in sunlight"],
              ["Sachs", "Glucose is made and stored as starch"],
              ["Engelmann", "First action spectrum using *Cladophora*"],
              ["van Niel", "Hydrogen donor is oxidised; O₂ comes from water"],
            ],
            explain: "The experiments build on each other: air is restored (Priestley), light and green parts are needed (Ingenhousz), the product is glucose (Sachs), blue and red light work best (Engelmann), and water is the source of O₂ (van Niel).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For 'describe Engelmann's experiment' (3 marks), write the set-up (prism, *Cladophora*, aerobic bacteria), the observation (bacteria in blue and red) and the conclusion (first action spectrum). Name the chromatogram colours exactly: chlorophyll a is bright or blue-green, chlorophyll b is yellow-green.",
        },
        {
          type: "keypoints",
          items: [
            "Priestley: plants restore air; Ingenhousz: light and green parts needed; Sachs: glucose and starch; Engelmann: action spectrum; van Niel: O₂ comes from H₂O.",
            "Grana and stroma lamellae trap light and make ATP and NADPH; the stroma fixes CO₂.",
            "Pigments: chlorophyll a (chief), chlorophyll b, xanthophylls, carotenoids.",
            "Action spectrum peaks in blue and red match chlorophyll a's absorption; accessory pigments widen the range and protect chlorophyll a.",
          ],
        },
      ],
      flashcards: [
        { front: "Who first showed that only green parts release oxygen, and only in light?", back: "Jan Ingenhousz." },
        { front: "What did Engelmann use as his indicator of O₂ release?", back: "Aerobic bacteria clustering around a filament of *Cladophora*." },
        { front: "Absorption spectrum vs action spectrum", back: "Absorption: light absorbed by a pigment at each wavelength. Action: rate of photosynthesis at each wavelength." },
        { front: "Colour of chlorophyll b on a chromatogram", back: "Yellow-green." },
        { front: "Why are carotenoids useful besides absorbing light?", back: "They protect chlorophyll a from photo-oxidation." },
        { front: "Where are ATP and NADPH made in the chloroplast?", back: "In the membrane system (grana and stroma lamellae)." },
        { front: "Range of photosynthetically active radiation (PAR)", back: "About 400–700 nm." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who discovered oxygen in 1774?",
          options: ["Jan Ingenhousz", "Joseph Priestley", "Julius von Sachs", "T. W. Engelmann"],
          answer: 1,
          explain: "Priestley did the bell-jar experiments in 1770 and discovered oxygen in 1774.",
        },
        {
          kind: "mcq",
          q: "Which pigment forms the reaction centre of both photosystems?",
          options: ["Chlorophyll b", "Carotene", "Chlorophyll a", "Xanthophyll"],
          answer: 2,
          explain: "Only chlorophyll a forms the reaction centre; the others are accessory pigments.",
        },
        {
          kind: "truefalse",
          q: "The enzymes that reduce CO₂ to sugar are located in the grana.",
          answer: false,
          explain: "Those enzymes are in the stroma. The grana and stroma lamellae carry out the light reactions.",
        },
        {
          kind: "fill",
          q: "Julius von Sachs showed that glucose made in photosynthesis is usually stored as ___.",
          answer: ["starch"],
          explain: "Sachs (1854) showed that green parts make glucose, usually stored as starch.",
        },
        {
          kind: "mcq",
          q: "In which regions of the spectrum does chlorophyll a absorb most strongly?",
          options: ["Green and yellow", "Blue and red", "Violet and green", "Orange and green"],
          answer: 1,
          explain: "Chlorophyll a absorbs most in blue and red; green is largely reflected.",
        },
        {
          kind: "multi",
          q: "Which statements are correct?",
          options: [
            "The action spectrum and the absorption spectrum of chlorophyll a overlap closely",
            "Chloroplasts turn edge-on in very strong light",
            "Purple sulphur bacteria release oxygen in photosynthesis",
            "Photosynthesis mainly happens in mesophyll cells",
          ],
          answers: [0, 1, 3],
          explain: "Purple and green sulphur bacteria use H₂S as the hydrogen donor and release sulphur, not O₂.",
          difficulty: 2,
          hint: "Think about the hydrogen donor used by sulphur bacteria.",
        },
        {
          kind: "mcq",
          q: "A half-leaf experiment encloses one half of a leaf with KOH. Which factor is being tested?",
          options: ["Light", "Chlorophyll", "Water", "Carbon dioxide"],
          answer: 3,
          explain: "KOH absorbs CO₂, so the enclosed half lacks CO₂ and does not make starch.",
        },
      ],
    },
    /* ---------------- Lesson 2: light reaction ---------------- */
    {
      slug: "c11-bio-ps-light-reaction",
      title: "The Light Reaction, Z Scheme and Chemiosmosis",
      summary:
        "Light-harvesting complexes and the two photosystems, the Z scheme of electron transport, splitting of water, cyclic and non-cyclic photophosphorylation, and how a proton gradient drives ATP synthase.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "The **light reactions** (photochemical phase) include light absorption, **water splitting**, **oxygen release** and the formation of high-energy chemical intermediates, **ATP and NADPH**. All of this happens in the thylakoid membranes.\n\nPigments are organised into two **photosystems**, PS I and PS II. Each has a **light-harvesting complex (LHC)**, also called an antenna, made of hundreds of pigment molecules bound to proteins. The antenna passes absorbed energy to one chlorophyll a molecule at the **reaction centre**. Antennae make photosynthesis efficient by absorbing many wavelengths.",
        },
        {
          type: "table",
          headers: ["Feature", "Photosystem I", "Photosystem II"],
          rows: [
            ["Reaction centre", "P700 (absorption peak at 700 nm)", "P680 (absorption peak at 680 nm)"],
            ["Linked to water splitting", "No", "Yes, on the inner (lumen) side of the membrane"],
            ["Present in stroma lamellae", "Yes", "No"],
            ["Electron goes to", "NADP⁺ (via an acceptor and NADP reductase)", "Electron transport chain, then PS I"],
          ],
        },
        {
          type: "text",
          md: "The names PS I and PS II follow the **order of discovery**, not the order in which they work. In the non-cyclic flow, PS II acts first.",
        },
        {
          type: "heading",
          text: "The Z scheme",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "PS II absorbs red light of 680 nm; electrons of its reaction centre are excited to a higher energy level and taken up by a **primary electron acceptor**.",
            "The electrons pass downhill along an **electron transport chain** of cytochromes (the cytochrome b₆f complex).",
            "They reach PS I. Meanwhile PS I has absorbed 700 nm light and its own excited electrons have gone to another acceptor.",
            "The electrons from PS I travel downhill again and finally reduce **NADP⁺ to NADPH + H⁺**.",
            "PS II has lost electrons, so it takes replacement electrons from **water**, which splits into H⁺, O₂ and electrons.",
          ],
        },
        {
          type: "formula",
          tex: t`2\,\text{H}_2\text{O} \longrightarrow 4\,\text{H}^+ + \text{O}_2 + 4\,e^-`,
          caption: "Water splitting, linked to PS II. Plotted on a redox scale, the electron path rises at PS II, falls, rises at PS I and falls again: the shape of a Z.",
        },
        {
          type: "heading",
          text: "Photophosphorylation",
        },
        {
          type: "table",
          headers: ["Feature", "Non-cyclic", "Cyclic"],
          rows: [
            ["Photosystems", "PS II and PS I in series", "Only PS I"],
            ["Electron path", "From water to NADP⁺ (one way)", "Electron returns to PS I through the ETS"],
            ["Products", "ATP, NADPH and O₂", "Only ATP"],
            ["Where", "Grana (appressed thylakoids)", "Stroma lamellae, which lack PS II and NADP reductase"],
            ["When favoured", "Normal light", "Also when only light beyond 680 nm is available"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Why can stroma lamellae make ATP but not NADPH?",
              options: [
                "They lack PS I",
                "They lack PS II and NADP reductase",
                "They lack ATP synthase",
                "They lack chlorophyll a",
              ],
              answer: 1,
              explain: "Without PS II there is no water splitting and without NADP reductase no NADPH, so only cyclic flow around PS I occurs, giving ATP alone.",
            },
          ],
        },
        {
          type: "heading",
          text: "Chemiosmotic hypothesis: how ATP is made",
        },
        {
          type: "list",
          items: [
            "**Water splitting** happens on the lumen side, so its H⁺ collect in the lumen.",
            "As electrons move through the photosystems, the primary acceptor (on the stroma side) passes electrons to an **H carrier**, which picks up a proton from the stroma and releases it into the lumen.",
            "**NADP reductase** sits on the stroma side; reducing NADP⁺ uses H⁺ from the stroma.",
            "Result: H⁺ are high in the lumen and low in the stroma. This proton gradient breaks down as H⁺ flow back through the **CF₀** channel of **ATP synthase**; the **CF₁** part, which sticks out into the stroma, changes shape and makes ATP.",
          ],
        },
        {
          type: "example",
          title: "Counting what the light reaction must supply",
          problem: "To release 6 molecules of O₂, how many water molecules are split and how many NADPH can the electrons make?",
          steps: [
            "Each 2 H₂O gives 1 O₂ and 4 electrons.",
            "6 O₂ need 12 H₂O, which release 6 × 4 = 24 electrons.",
            "Each NADP⁺ needs 2 electrons (and an H⁺) to become NADPH, so 24 ÷ 2 = 12 NADPH.",
          ],
          answer: "12 H₂O are split, giving 24 electrons and enough for 12 NADPH, which is exactly what fixing 6 CO₂ in the Calvin cycle needs.",
        },
        {
          type: "mistake",
          wrong: "PS I works first and PS II second, because of their numbers.",
          right: "In non-cyclic electron flow, PS II acts first and passes electrons to PS I.",
          why: "The numbers reflect only which photosystem was discovered first. Water splitting is linked to PS II, so the chain must start there.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the non-cyclic electron path in order.",
            items: ["Water", "PS II (P680)", "Cytochrome b₆f complex", "PS I (P700)", "NADP⁺"],
            explain: "Electrons come from water, are lifted by PS II, flow down through cytochromes, are lifted again by PS I and finally reduce NADP⁺ to NADPH.",
          },
        },
        {
          type: "keypoints",
          items: [
            "PS I (P700) and PS II (P680) each have an antenna and a chlorophyll a reaction centre.",
            "Z scheme: H₂O → PS II → cytochromes → PS I → NADP⁺; water splitting is linked to PS II.",
            "Non-cyclic gives ATP, NADPH and O₂; cyclic (stroma lamellae, PS I only) gives only ATP.",
            "ATP synthase (CF₀ channel, CF₁ head in the stroma) uses the H⁺ gradient from lumen to stroma.",
          ],
        },
      ],
      flashcards: [
        { front: "Reaction centre of PS II", back: "P680, a chlorophyll a molecule with an absorption peak at 680 nm." },
        { front: "Which photosystem is linked to water splitting?", back: "PS II, on the inner (lumen) side of the thylakoid membrane." },
        { front: "Products of cyclic photophosphorylation", back: "Only ATP (no NADPH, no O₂)." },
        { front: "Why are protons concentrated in the lumen?", back: "Water splitting releases H⁺ inside, an H carrier moves H⁺ in from the stroma, and NADP reductase uses up H⁺ in the stroma." },
        { front: "Which part of ATP synthase makes ATP?", back: "CF₁, the part that protrudes into the stroma." },
        { front: "Final electron acceptor in non-cyclic flow", back: "NADP⁺, reduced to NADPH + H⁺." },
        { front: "What is an LHC?", back: "Light-harvesting complex: hundreds of pigment molecules bound to proteins that funnel energy to the reaction centre." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The electron lost by PS II is replaced by electrons from:",
          options: ["NADPH", "PS I", "Water", "ATP"],
          answer: 2,
          explain: "PS II takes electrons from water, which splits into H⁺, O₂ and electrons.",
        },
        {
          kind: "mcq",
          q: "Where does the H⁺ concentration become highest during the light reaction?",
          options: ["Stroma", "Thylakoid lumen", "Cytoplasm", "Intermembrane space of the chloroplast"],
          answer: 1,
          explain: "H⁺ accumulate in the lumen and flow out to the stroma through ATP synthase.",
        },
        {
          kind: "truefalse",
          q: "Cyclic photophosphorylation releases oxygen.",
          answer: false,
          explain: "Cyclic flow uses only PS I; no water is split, so no O₂ is released.",
        },
        {
          kind: "numeric",
          q: "How many molecules of water must be split to supply electrons for 6 NADPH?",
          answer: 6,
          explain: "6 NADPH need 12 electrons; 2 H₂O give 4 electrons, so 12 electrons come from 6 H₂O.",
          difficulty: 2,
          hint: "2 H₂O → 4 e⁻; each NADPH needs 2 e⁻.",
        },
        {
          kind: "mcq",
          q: "Cyclic photophosphorylation is favoured when:",
          options: [
            "Only light of wavelength beyond 680 nm is available",
            "Light below 400 nm is given",
            "CO₂ is very high",
            "PS II is fully active",
          ],
          answer: 0,
          explain: "Light beyond 680 nm excites PS I but not PS II well, so only cyclic flow can run.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange the events in the chemiosmotic synthesis of ATP.",
          items: [
            "Electrons move through the photosystems and carriers",
            "H⁺ accumulate in the lumen",
            "H⁺ flow through the CF₀ channel to the stroma",
            "CF₁ changes shape and makes ATP",
          ],
          explain: "Electron flow builds the gradient; its breakdown through CF₀ drives ATP synthesis at CF₁.",
        },
        {
          kind: "multi",
          q: "Which are products of non-cyclic photophosphorylation?",
          options: ["ATP", "NADPH", "O₂", "Glucose"],
          answers: [0, 1, 2],
          explain: "Glucose is made later in the stroma using ATP and NADPH.",
        },
      ],
    },
    /* ---------------- Lesson 3: Calvin cycle and photorespiration ---------------- */
    {
      slug: "c11-bio-ps-calvin-photorespiration",
      title: "The Calvin Cycle and Photorespiration",
      summary:
        "How ATP and NADPH are used in the stroma: the C3 pathway discovered by Calvin, its three stages, the ATP and NADPH cost of a glucose molecule, and the wasteful oxygenation by RuBisCO called photorespiration.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "ATP and NADPH from the light reaction are used in the **biosynthetic phase** to make sugar. If you keep a plant in the dark just after bright light, CO₂ is still fixed for a short while, until the stored ATP and NADPH run out. This shows that the stroma reactions do not need light directly.\n\n**Melvin Calvin** used radioactive ¹⁴C with the alga *Chlorella* and found that the first stable product of CO₂ fixation is a 3-carbon acid, **3-phosphoglyceric acid (PGA)**. Plants with this pathway are **C3 plants**. Later another group was found whose first product is a 4-carbon acid, **oxaloacetic acid (OAA)**: the **C4 plants**.",
        },
        {
          type: "heading",
          text: "The three stages of the Calvin cycle",
        },
        {
          type: "table",
          headers: ["Stage", "What happens", "Cost per CO₂"],
          rows: [
            ["1. Carboxylation", "CO₂ combines with the 5-carbon **ribulose bisphosphate (RuBP)** to form two molecules of 3-PGA. Enzyme: **RuBP carboxylase-oxygenase (RuBisCO)**.", "None"],
            ["2. Reduction", "3-PGA is reduced to triose phosphate (and on to glucose).", "2 ATP + 2 NADPH"],
            ["3. Regeneration", "RuBP, the CO₂ acceptor, is remade so the cycle continues.", "1 ATP"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{Per CO}_2:\ 3\,\text{ATP} + 2\,\text{NADPH} \qquad \text{Per glucose (6 turns)}:\ 18\,\text{ATP} + 12\,\text{NADPH}`,
          caption: "Six turns of the cycle fix 6 CO₂, enough carbon for one glucose. The extra ATP need explains why cyclic photophosphorylation is also useful.",
        },
        {
          type: "example",
          title: "Cost of a sucrose molecule",
          problem: "Sucrose (C₁₂H₂₂O₁₁) is made from glucose and fructose. Ignoring the energy needed to join them, how much ATP and NADPH does the Calvin cycle use to fix the carbon for one sucrose?",
          steps: [
            "Sucrose has 12 carbon atoms, so 12 CO₂ must be fixed: 12 turns of the cycle.",
            "ATP: 12 × 3 = 36.",
            "NADPH: 12 × 2 = 24.",
          ],
          answer: "36 ATP and 24 NADPH.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many turns of the Calvin cycle are needed to make one glucose molecule?",
              answer: 6,
              explain: "Each turn fixes one CO₂; glucose has six carbon atoms.",
            },
          ],
        },
        {
          type: "heading",
          text: "Photorespiration",
        },
        {
          type: "text",
          md: "RuBisCO is the **most abundant enzyme in the world**. Its active site can bind both CO₂ and O₂, which is why it is called carboxylase-**oxygenase**. It has a much greater affinity for CO₂, so the outcome depends on the relative concentrations of O₂ and CO₂.\n\nIn C3 plants some O₂ binds RuBisCO. Then RuBP + O₂ gives **one molecule of PGA and one of phosphoglycolate (2C)**. This pathway is **photorespiration**. It makes no sugar, no ATP and no NADPH; instead ATP is used and CO₂ is released. It is wasteful.",
        },
        {
          type: "table",
          headers: ["Feature", "Calvin cycle (carboxylation)", "Photorespiration (oxygenation)"],
          rows: [
            ["Substrate bound by RuBisCO", "CO₂", "O₂"],
            ["Products from one RuBP", "2 × 3-PGA", "1 × PGA + 1 × phosphoglycolate"],
            ["Sugar made", "Yes", "No"],
            ["ATP and NADPH", "Used to make sugar", "ATP used, none made"],
            ["CO₂", "Fixed", "Released"],
          ],
        },
        {
          type: "mistake",
          wrong: "Photorespiration is just respiration that happens in light, so it gives the plant ATP.",
          right: "Photorespiration produces no ATP or NADPH; it uses ATP and releases fixed CO₂.",
          why: "The name suggests ordinary respiration. It is called 'respiration' only because O₂ is taken in and CO₂ given out, but it yields no usable energy and lowers net photosynthesis.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "A C3 crop is in hot bright weather with stomata half-closed. What happens?",
            emoji: "☀️",
            options: [
              "Photorespiration falls because light is strong",
              "Photorespiration rises because O₂ builds up and CO₂ falls inside the leaf",
              "RuBisCO stops working completely",
            ],
            answer: 1,
            trap: 0,
            explain: "With stomata partly closed, CO₂ inside the leaf drops while O₂ from the light reaction builds up. The O₂:CO₂ ratio rises, so RuBisCO oxygenates more RuBP.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Draw the Calvin cycle as a circle with three labelled stages: carboxylation (RuBisCO), reduction (ATP, NADPH used), regeneration (ATP used). Marks go for naming RuBP as the acceptor and 3-PGA as the first product. Write RuBisCO's full name once.",
        },
        {
          type: "keypoints",
          items: [
            "Calvin used ¹⁴C and *Chlorella*; the first stable product in C3 plants is 3-PGA.",
            "Stages: carboxylation of RuBP by RuBisCO, reduction, regeneration of RuBP.",
            "Per CO₂: 3 ATP + 2 NADPH; per glucose: 18 ATP + 12 NADPH (6 turns).",
            "Photorespiration: RuBP + O₂ → PGA + phosphoglycolate; no ATP or sugar, CO₂ lost.",
          ],
        },
      ],
      flashcards: [
        { front: "First stable product of the C3 cycle", back: "3-phosphoglyceric acid (3-PGA), a 3-carbon acid." },
        { front: "Primary CO₂ acceptor in the Calvin cycle", back: "Ribulose-1,5-bisphosphate (RuBP), a 5-carbon ketose sugar." },
        { front: "Full name of RuBisCO", back: "RuBP carboxylase-oxygenase." },
        { front: "ATP and NADPH used per CO₂ fixed", back: "3 ATP and 2 NADPH." },
        { front: "Which stage of the Calvin cycle regenerates the acceptor?", back: "Regeneration, which uses 1 ATP per CO₂." },
        { front: "Products of RuBisCO acting on O₂", back: "One PGA and one phosphoglycolate." },
        { front: "Which organism did Calvin use?", back: "The green alga *Chlorella*." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which step of the Calvin cycle uses NADPH?",
          options: ["Carboxylation", "Reduction", "Regeneration", "Photolysis"],
          answer: 1,
          explain: "Reduction uses 2 ATP and 2 NADPH per CO₂.",
        },
        {
          kind: "numeric",
          q: "How many ATP molecules are needed by the Calvin cycle to fix 3 CO₂?",
          answer: 9,
          explain: "3 ATP per CO₂ × 3 = 9 ATP.",
        },
        {
          kind: "numeric",
          q: "How many NADPH molecules are needed to make 2 glucose molecules by the Calvin cycle?",
          answer: 24,
          explain: "12 NADPH per glucose × 2 = 24.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "RuBisCO has a greater affinity for O₂ than for CO₂.",
          answer: false,
          explain: "RuBisCO prefers CO₂; oxygenation happens when O₂ is relatively high compared with CO₂.",
        },
        {
          kind: "mcq",
          q: "Photorespiration does NOT produce:",
          options: ["Phosphoglycolate", "PGA", "ATP", "CO₂ (released)"],
          answer: 2,
          explain: "Photorespiration uses ATP; it makes none.",
        },
        {
          kind: "fill",
          q: "The most abundant enzyme in the world is ___.",
          answer: ["RuBisCO", "rubisco", "RuBP carboxylase-oxygenase"],
          explain: "RuBisCO, which fixes CO₂ in the Calvin cycle.",
        },
        {
          kind: "order",
          q: "Arrange the stages of the Calvin cycle.",
          items: ["Carboxylation", "Reduction", "Regeneration"],
          explain: "CO₂ is fixed, the product is reduced, and the acceptor RuBP is remade.",
        },
        {
          kind: "mcq",
          q: "Why can the plant fix CO₂ for a short time after the light is switched off?",
          options: [
            "RuBisCO needs no ATP",
            "ATP and NADPH made in light are still available",
            "Photorespiration supplies ATP",
            "Chlorophyll stores sugar",
          ],
          answer: 1,
          explain: "The stroma reactions continue until the ATP and NADPH from the light reaction are used up.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Lesson 4: C4 pathway and factors ---------------- */
    {
      slug: "c11-bio-ps-c4-factors",
      title: "The C4 Pathway and Factors Affecting Photosynthesis",
      summary:
        "Kranz anatomy and the Hatch and Slack pathway, why C4 plants avoid photorespiration, and how light, CO₂, temperature and water limit photosynthesis under Blackman's law of limiting factors.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Maize, sorghum and sugarcane grow fast in the hot, bright plains of India. They are **C4 plants**, adapted to dry tropical regions. They still use the Calvin cycle, but first fix CO₂ into a 4-carbon acid. Their benefits: they tolerate **higher temperatures**, respond to **high light intensities**, lack photorespiration and so give **greater biomass**.",
        },
        {
          type: "text",
          md: "**Kranz anatomy** ('kranz' = wreath): around each vascular bundle is a ring of large **bundle sheath cells**. These cells have many chloroplasts, thick walls impervious to gas exchange, and no intercellular spaces. A C4 leaf has two kinds of photosynthetic cells: mesophyll and bundle sheath.",
        },
        {
          type: "heading",
          text: "The Hatch and Slack pathway",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "In **mesophyll** cells, the 3-carbon **phosphoenol pyruvate (PEP)** accepts CO₂. The enzyme is **PEP carboxylase (PEPcase)**. The product is the 4-carbon **oxaloacetic acid (OAA)**. Mesophyll cells lack RuBisCO.",
            "OAA becomes another 4-carbon acid, such as **malic acid or aspartic acid**, which moves to the bundle sheath cells.",
            "In the **bundle sheath**, the C4 acid is broken down, releasing **CO₂** and a 3-carbon molecule.",
            "The released CO₂ enters the **Calvin cycle**, using RuBisCO, which is present in bundle sheath cells.",
            "The 3-carbon molecule returns to the mesophyll and is converted back to **PEP**, completing the cycle.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{PEP (3C)} + \text{CO}_2 \xrightarrow{\text{PEPcase}} \text{OAA (4C)} \qquad \text{C}_4\ \text{acid} \longrightarrow \text{CO}_2 + \text{C}_3\ \text{acid}`,
          caption: "Left: fixation in mesophyll cells. Right: decarboxylation in bundle sheath cells, which feeds the Calvin cycle.",
        },
        {
          type: "text",
          md: "This system concentrates CO₂ in the bundle sheath, where RuBisCO is. With a high CO₂:O₂ ratio there, RuBisCO works as a carboxylase, so **photorespiration does not occur** in C4 plants. The cost is extra ATP to regenerate PEP.",
        },
        {
          type: "heading",
          text: "Factors affecting photosynthesis",
        },
        {
          type: "callout",
          tone: "fact",
          title: "Blackman's law of limiting factors (1905)",
          md: "If a chemical process is affected by more than one factor, its rate is determined by the factor nearest to its minimal value: the one which, if changed, directly changes the rate.",
        },
        {
          type: "table",
          headers: ["Factor", "What NCERT points out"],
          rows: [
            ["Light", "Rate rises linearly with light at low intensities; saturation occurs at about **10% of full sunlight**. Light is rarely limiting in nature except under shade or dense canopies. Very high light can damage chlorophyll."],
            ["CO₂", "The **major limiting factor**; air has only about 0.03–0.04% CO₂. Raising it up to about 0.05% raises the rate. C3 plants respond to higher CO₂ and saturate only beyond about 450 μL L⁻¹; C4 plants saturate at about 360 μL L⁻¹. Glasshouse tomatoes and bell peppers grown in CO₂-enriched air give higher yields."],
            ["Temperature", "The enzymatic dark reactions are temperature-controlled. C4 plants have a higher temperature optimum than C3 plants; tropical plants have higher optima than temperate ones."],
            ["Water", "Acts more through the whole plant than directly: water stress closes stomata (less CO₂) and wilting reduces leaf surface area and metabolic activity."],
          ],
        },
        {
          type: "example",
          title: "Finding the limiting factor",
          problem: "A wheat leaf in bright light shows no rise in photosynthesis when the light is doubled. When CO₂ around it is raised from 0.03% to 0.05%, the rate goes up. Explain using Blackman's law.",
          steps: [
            "Doubling light gave no change, so light was not the factor nearest its minimum.",
            "Raising CO₂ raised the rate, so CO₂ was the limiting factor.",
            "Wheat is a C3 plant, which keeps responding to CO₂ above the normal 0.03–0.04%.",
          ],
          answer: "CO₂ was limiting; light had already reached saturation.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In C4 plants, the primary CO₂ acceptor in mesophyll cells is:",
              options: ["RuBP", "PEP", "OAA", "Pyruvate"],
              answer: 1,
              explain: "PEP (3C) accepts CO₂ via PEPcase, forming OAA (4C).",
            },
            {
              kind: "truefalse",
              q: "Mesophyll cells of C4 plants are rich in RuBisCO.",
              answer: false,
              explain: "Mesophyll cells of C4 plants lack RuBisCO; it is in the bundle sheath cells.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "C4 plants do not have the Calvin cycle; they use the C4 pathway instead.",
          right: "C4 plants run both: the C4 pathway in mesophyll cells and the Calvin cycle in bundle sheath cells.",
          why: "The name 'C4' sounds like a separate replacement. The C4 acid is only a CO₂ carrier; sugar is still made by the Calvin cycle.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Mesophyll cell or bundle sheath cell of a C4 leaf?",
            groups: ["Mesophyll cell", "Bundle sheath cell"],
            items: [
              { text: "PEP carboxylase fixes CO₂", group: 0, hint: "The first fixation happens in the outer cells." },
              { text: "RuBisCO and the Calvin cycle", group: 1, hint: "Mesophyll cells of C4 plants lack RuBisCO." },
              { text: "OAA is formed", group: 0, hint: "OAA is the direct product of PEPcase." },
              { text: "C4 acid is decarboxylated", group: 1, hint: "CO₂ is released where RuBisCO is." },
              { text: "PEP is regenerated", group: 0, hint: "The 3C molecule returns outward." },
              { text: "Thick walls, no intercellular spaces", group: 1, hint: "These keep CO₂ in around RuBisCO." },
            ],
            explain: "Mesophyll cells capture CO₂ with PEPcase; bundle sheath cells release it close to RuBisCO, which keeps the CO₂ level high and stops photorespiration.",
          },
        },
        {
          type: "keypoints",
          items: [
            "C4 plants (maize, sorghum) have Kranz anatomy: large bundle sheath cells with many chloroplasts and thick walls.",
            "Mesophyll: PEP + CO₂ → OAA (PEPcase). Bundle sheath: C4 acid releases CO₂ to the Calvin cycle.",
            "C4 plants lack photorespiration, tolerate heat and high light, and give more biomass.",
            "Blackman: the factor nearest its minimum sets the rate. CO₂ is the major limiting factor; light saturates at about 10% of full sunlight.",
          ],
        },
      ],
      flashcards: [
        { front: "What is Kranz anatomy?", back: "A wreath of large bundle sheath cells around each vascular bundle, with many chloroplasts, thick gas-tight walls and no intercellular spaces." },
        { front: "Enzyme of primary CO₂ fixation in C4 plants", back: "PEP carboxylase (PEPcase)." },
        { front: "First stable product in C4 plants", back: "Oxaloacetic acid (OAA), a 4-carbon acid." },
        { front: "Why is there no photorespiration in C4 plants?", back: "CO₂ is concentrated in bundle sheath cells, so RuBisCO acts as a carboxylase and not an oxygenase." },
        { front: "State Blackman's law of limiting factors.", back: "When a process depends on several factors, its rate is set by the factor nearest its minimal value." },
        { front: "At what fraction of full sunlight does light saturation occur?", back: "About 10%." },
        { front: "CO₂ saturation points of C3 and C4 plants", back: "C3: beyond about 450 μL L⁻¹. C4: about 360 μL L⁻¹." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is a C4 plant?",
          options: ["Wheat", "Rice", "Maize", "Mustard"],
          answer: 2,
          explain: "Maize (and sorghum) are standard C4 examples; wheat, rice and mustard are C3.",
        },
        {
          kind: "mcq",
          q: "In C4 plants, the C4 acid is decarboxylated in:",
          options: ["Mesophyll cells", "Bundle sheath cells", "Guard cells", "Epidermal cells"],
          answer: 1,
          explain: "Malic or aspartic acid moves to bundle sheath cells and releases CO₂ there.",
        },
        {
          kind: "truefalse",
          q: "C4 plants have a higher temperature optimum than C3 plants.",
          answer: true,
          explain: "C4 plants are adapted to hot tropical conditions.",
        },
        {
          kind: "mcq",
          q: "Which is the major limiting factor for photosynthesis in nature?",
          options: ["Light", "Water", "CO₂", "Temperature"],
          answer: 2,
          explain: "CO₂ is present at only about 0.03–0.04% and is the major limiting factor.",
        },
        {
          kind: "multi",
          q: "Which are features of bundle sheath cells in C4 plants?",
          options: [
            "Large number of chloroplasts",
            "Thick walls impervious to gas exchange",
            "Many intercellular spaces",
            "Presence of RuBisCO",
          ],
          answers: [0, 1, 3],
          explain: "Bundle sheath cells have no intercellular spaces.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Water stress reduces photosynthesis mainly because:",
          options: [
            "Water is the only source of carbon",
            "Stomata close and less CO₂ enters",
            "Chlorophyll dissolves",
            "Light reactions stop releasing O₂ only",
          ],
          answer: 1,
          explain: "Water stress closes stomata (less CO₂) and wilting reduces leaf area and metabolic activity.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The 3-carbon molecule returned to mesophyll cells is converted back to ___.",
          answer: ["PEP", "phosphoenol pyruvate", "phosphoenolpyruvate"],
          explain: "Regenerating PEP keeps the C4 cycle going.",
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-ps-exam-edge",
      title: "Exam edge: Photosynthesis in Higher Plants",
      summary:
        "How NEET and KCET test photosynthesis: experiments and scientists, PS I versus PS II, Z scheme and chemiosmosis, ATP and NADPH counting, C3 versus C4 and photorespiration, with statement, assertion–reason and calculation practice.",
      minutes: 24,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually takes 2–3 questions from this chapter, and together with Respiration it forms the plant-physiology core of Class 11. Questions are mostly NCERT lines turned into statements, assertion–reason pairs and short counts (ATP, NADPH, turns, carbons). **KCET** asks direct one-liners and match-the-column on scientists, sites and products.",
        },
        {
          type: "list",
          items: [
            "NCERT line: the first action spectrum was described by **Engelmann** using *Cladophora*.",
            "NCERT line: PS II is linked to water splitting on the **inner side** of the thylakoid membrane.",
            "NCERT line: stroma lamellae **lack PS II and NADP reductase**, so only cyclic flow occurs there.",
            "NCERT line: CF₁ protrudes on the **outer surface** of the thylakoid facing the stroma.",
            "NCERT line: RuBisCO is the **most abundant enzyme** in the world.",
            "NCERT line: light saturation at about **10% of full sunlight**; C3 saturate beyond **450 μL L⁻¹** CO₂, C4 at about **360 μL L⁻¹**.",
            "NCERT line: tomatoes and bell pepper are grown in CO₂-enriched greenhouses.",
          ],
        },
        {
          type: "table",
          headers: ["Shortcut", "Safe to use when"],
          rows: [
            ["Calvin cycle: 3 ATP + 2 NADPH per CO₂; multiply by number of carbons", "Counting for any sugar made only by the Calvin cycle (glucose 18 + 12; sucrose 36 + 24)"],
            ["C4 plants: 5 ATP + 2 NADPH per CO₂ (30 ATP + 12 NADPH per glucose)", "The question is about C4 plants; the extra 2 ATP per CO₂ are spent regenerating PEP. NCERT itself does not print this figure, so use it only when a question clearly expects it."],
            ["2 H₂O → 1 O₂ + 4 e⁻; 2 e⁻ per NADPH", "Linking O₂ released to NADPH formed in non-cyclic flow"],
          ],
        },
        {
          type: "formula",
          tex: t`n\ \text{CO}_2 \text{ fixed (C3)}: \ 3n\ \text{ATP} + 2n\ \text{NADPH} \qquad n\ \text{O}_2 \text{ released} \Rightarrow 4n\ e^- \Rightarrow 2n\ \text{NADPH}`,
          caption: "The two counting rules behind most numeric questions in this chapter.",
        },
        {
          type: "example",
          title: "NEET level: statement counting",
          problem: "How many are correct? (i) Chlorophyll b is the chief pigment. (ii) PS I has P700 as its reaction centre. (iii) In cyclic photophosphorylation, O₂ is not released. (iv) The first stable product of the C4 pathway is a 3-carbon acid. (v) RuBisCO acts as both carboxylase and oxygenase.",
          steps: [
            "(i) Wrong: chlorophyll a is the chief pigment.",
            "(ii) Correct.",
            "(iii) Correct: no water is split in cyclic flow.",
            "(iv) Wrong: OAA is a 4-carbon acid.",
            "(v) Correct: hence 'carboxylase-oxygenase'.",
          ],
          answer: "Three: (ii), (iii) and (v).",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: C4 plants show greater productivity than C3 plants in hot, bright habitats. R: In C4 plants, CO₂ is concentrated in bundle sheath cells, so photorespiration is avoided.",
          steps: [
            "A is true: C4 plants tolerate high temperatures and high light and give more biomass.",
            "R is true: the C4 shuttle raises CO₂ at RuBisCO and stops oxygenation.",
            "R explains A: avoiding photorespiration is a main reason for higher productivity.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "KCET style: counting carbons and energy",
          problem: "A plant makes 3 molecules of glucose through the C3 pathway. How many CO₂, ATP and NADPH are used, and how many O₂ are released by the light reaction that supplied the NADPH?",
          steps: [
            "3 glucose × 6 C = 18 CO₂ fixed (18 turns).",
            "ATP = 18 × 3 = 54; NADPH = 18 × 2 = 36.",
            "36 NADPH need 72 electrons; 4 electrons come with each O₂ released, so O₂ = 72 ÷ 4 = 18.",
          ],
          answer: "18 CO₂, 54 ATP, 36 NADPH; 18 O₂ released (one O₂ per CO₂ fixed, matching the overall equation).",
        },
        {
          type: "example",
          title: "Harder: reading a light–CO₂ graph",
          problem: "Two curves of photosynthesis rate against light intensity are drawn: curve P at 0.03% CO₂ and curve Q at 0.10% CO₂, both at 25 °C. Both rise steeply, then level off; Q levels off at a higher rate. What limits the rate on the flat part of P, and on the flat part of Q if temperature is the next factor?",
          steps: [
            "On the steep part of each curve, raising light raises the rate, so light is limiting.",
            "On the flat part of P, more light gives no rise, but raising CO₂ (curve Q) gives a higher plateau. So CO₂ limited P's plateau.",
            "On Q's plateau, neither more light nor (we are told) more CO₂ helps; the next factor, temperature (enzyme speed in the stroma), limits it.",
          ],
          answer: "P's plateau is CO₂-limited; Q's plateau is limited by a third factor such as temperature, as Blackman's law predicts.",
        },
        {
          type: "mistake",
          wrong: "Since PS I is 'one', non-cyclic electron flow starts at PS I.",
          right: "Non-cyclic flow starts at water and PS II (P680), then passes to PS I (P700).",
          why: "NEET often lists 'PS I → PS II' as a distractor. The numbering is historical only.",
        },
        {
          type: "mistake",
          wrong: "The first stable product of C3 photosynthesis is glucose (or RuBP).",
          right: "It is 3-PGA. RuBP is the acceptor; glucose comes much later.",
          why: "Students confuse 'acceptor', 'first product' and 'final product'. Learn the trio: acceptor RuBP (C3) or PEP (C4); first product 3-PGA (C3) or OAA (C4).",
        },
        {
          type: "mistake",
          wrong: "Light reactions happen in the stroma lamellae only, and dark reactions only at night.",
          right: "Light reactions occur in grana and stroma lamellae (cyclic only in lamellae); the stroma reactions run in daylight using fresh ATP and NADPH.",
          why: "'Dark reaction' is a misleading old name. The stroma reactions are light-independent but light-dependent for their supply of ATP and NADPH.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match the term to the correct feature.",
            pairs: [
              ["RuBP", "CO₂ acceptor in C3 plants"],
              ["PEP", "CO₂ acceptor in C4 mesophyll"],
              ["3-PGA", "First stable product of C3"],
              ["OAA", "First stable product of C4"],
              ["Phosphoglycolate", "Product of oxygenation"],
            ],
            explain: "NEET often swaps these in one option. Remember the acceptor–product pairs separately for C3 and C4.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which combination is correct for the C4 pathway?",
              options: [
                "Acceptor RuBP, enzyme RuBisCO, product 3-PGA",
                "Acceptor PEP, enzyme PEPcase, product OAA",
                "Acceptor OAA, enzyme PEPcase, product PEP",
                "Acceptor PEP, enzyme RuBisCO, product malate",
              ],
              answer: 1,
              explain: "In mesophyll cells PEP accepts CO₂ via PEPcase to form OAA.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Know the five scientists and what each proved; Engelmann = action spectrum.",
            "PS II (P680) splits water and acts first; PS I (P700) reduces NADP⁺; stroma lamellae run cyclic flow only.",
            "Count: 3 ATP + 2 NADPH per CO₂ (C3); one O₂ released per CO₂ fixed overall.",
            "C4: PEP + CO₂ → OAA in mesophyll; CO₂ released to RuBisCO in bundle sheath; no photorespiration.",
          ],
        },
      ],
      flashcards: [
        { front: "Acceptor and first product in C3 plants", back: "Acceptor RuBP (5C); first product 3-PGA (3C)." },
        { front: "Acceptor and first product in C4 plants", back: "Acceptor PEP (3C); first product OAA (4C)." },
        { front: "ATP and NADPH for 18 CO₂ fixed by the Calvin cycle", back: "54 ATP and 36 NADPH." },
        { front: "Where does cyclic photophosphorylation occur?", back: "In stroma lamellae, which lack PS II and NADP reductase." },
        { front: "Which side of the thylakoid does CF₁ face?", back: "The stroma side (outer surface of the thylakoid)." },
        { front: "Two crops NCERT names for CO₂-enriched greenhouses", back: "Tomatoes and bell pepper." },
        { front: "Why does ATP need exceed NADPH need in the Calvin cycle?", back: "Ratio 3 ATP : 2 NADPH; non-cyclic flow alone does not meet it, and cyclic flow makes extra ATP." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Assertion (A): The stroma lamellae can carry out only cyclic photophosphorylation. Reason (R): Stroma lamellae lack PS II and NADP reductase.",
          options: AR,
          answer: 0,
          explain: "Without PS II and NADP reductase, electrons can only cycle around PS I, making ATP but no NADPH.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many turns of the Calvin cycle are needed to make 4 molecules of glucose?",
          answer: 24,
          explain: "6 turns per glucose × 4 = 24.",
        },
        {
          kind: "numeric",
          q: "A C3 plant fixes 30 molecules of CO₂. How many ATP does the Calvin cycle use?",
          answer: 90,
          explain: "3 ATP per CO₂ × 30 = 90.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which statement about photorespiration is correct?",
          options: [
            "It occurs in C4 plants more than in C3 plants",
            "It produces ATP and NADPH",
            "RuBP combines with O₂ to give PGA and phosphoglycolate",
            "It is catalysed by PEP carboxylase",
          ],
          answer: 2,
          explain: "Oxygenation of RuBP by RuBisCO yields one PGA and one phosphoglycolate; it uses ATP and is absent in C4 plants.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which are correct about the chemiosmotic hypothesis in chloroplasts?",
          options: [
            "Protons accumulate in the lumen",
            "NADP reductase is on the stroma side",
            "Water is split on the stroma side",
            "ATP is made as H⁺ move from lumen to stroma through CF₀",
          ],
          answers: [0, 1, 3],
          explain: "Water splitting happens on the inner (lumen) side of the membrane.",
          difficulty: 2,
          hint: "Where would water splitting need to be to add H⁺ to the lumen?",
        },
        {
          kind: "mcq",
          q: "Engelmann's experiment is best described as:",
          options: [
            "An absorption spectrum of chlorophyll a",
            "The first action spectrum of photosynthesis",
            "Proof that O₂ comes from water",
            "Proof that starch is formed",
          ],
          answer: 1,
          explain: "The bacterial clustering mapped the rate of O₂ release against wavelength: an action spectrum.",
        },
        {
          kind: "numeric",
          q: "If 8 O₂ molecules are released in non-cyclic photophosphorylation, how many NADPH can form?",
          answer: 16,
          explain: "8 O₂ come from 16 H₂O, giving 32 electrons; 32 ÷ 2 = 16 NADPH.",
          difficulty: 3,
          hint: "Each O₂ releases 4 electrons; each NADPH needs 2.",
        },
        {
          kind: "mcq",
          q: "A plant has a CO₂ saturation point near 360 μL L⁻¹, Kranz anatomy, and almost no photorespiration. It is most likely:",
          options: ["Wheat", "Sorghum", "Pea", "Sunflower"],
          answer: 1,
          explain: "These are C4 features; sorghum is a C4 plant named in NCERT.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Respiration in Plants                                               */
/* ------------------------------------------------------------------ */
const respiration: Topic = {
  slug: "c11-bio-respiration-in-plants",
  title: "Respiration in Plants",
  icon: "🍃",
  description:
    "Gas exchange in plants, glycolysis, alcoholic and lactic acid fermentation, the link reaction, the Krebs cycle, the electron transport system and oxidative phosphorylation, the respiratory balance sheet, the amphibolic pathway and the respiratory quotient.",
  lessons: [
    /* ---------------- Lesson 1: glycolysis and fermentation ---------------- */
    {
      slug: "c11-bio-resp-glycolysis-fermentation",
      title: "Gas Exchange, Glycolysis and Fermentation",
      summary:
        "Why plants need no special breathing organs, how glucose is split to pyruvic acid in glycolysis with its ATP and NADH count, and what happens to pyruvic acid when oxygen is absent.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "A sack of potatoes stored in a warm godown slowly gets warmer and loses weight. The tubers are alive and **respiring**: breaking down food to release energy. **Cellular respiration** is the breakdown of food molecules such as glucose inside cells to release energy, much of which is trapped as **ATP**. The compounds oxidised are called **respiratory substrates**; carbohydrates are the usual ones, but fats and proteins can also be used.\n\nEnergy is not released in one burst. It comes out in a series of small, enzyme-controlled steps, so that part of it can be stored in ATP instead of being lost as heat.",
        },
        {
          type: "formula",
          tex: t`\text{C}_6\text{H}_{12}\text{O}_6 + 6\,\text{O}_2 \longrightarrow 6\,\text{CO}_2 + 6\,\text{H}_2\text{O} + \text{energy}`,
          caption: "Overall equation for complete aerobic oxidation of glucose.",
        },
        {
          type: "text",
          md: "**Do plants breathe?** Plants have no lungs or gills. They exchange gases through **stomata** and **lenticels**, and manage without special organs because:\n\n1. Each plant part takes care of its own gas exchange; there is very little transport of gases from one part to another.\n2. Plants do not need to exchange gases fast; except during photosynthesis, roots, stems and leaves respire at much lower rates than animals.\n3. Distances are short: in large plants most living cells lie close to the surface, and in stems the living cells are thin layers just under the bark, while the inside is mostly dead and gives only mechanical support. Loose packing of parenchyma gives air spaces.\n4. In green parts, O₂ released in photosynthesis is available inside the cells.",
        },
        {
          type: "heading",
          text: "Glycolysis",
        },
        {
          type: "text",
          md: "**Glycolysis** (glycos = sugar, lysis = splitting) is the partial oxidation of glucose to **two molecules of pyruvic acid**. It is also called the **EMP pathway** after Embden, Meyerhof and Parnas. It happens in the **cytoplasm** of all living cells and is the only process of respiration in anaerobic organisms. In plants the glucose comes from sucrose, which the enzyme **invertase** splits into glucose and fructose, or from stored starch.",
        },
        {
          type: "table",
          headers: ["Step", "Change", "ATP / NADH (per glucose)"],
          rows: [
            ["1", "Glucose → glucose-6-phosphate (enzyme **hexokinase**)", "1 ATP used"],
            ["2", "Glucose-6-phosphate → fructose-6-phosphate (isomerisation)", "—"],
            ["3", "Fructose-6-phosphate → fructose-1,6-bisphosphate", "1 ATP used"],
            ["4", "Fructose-1,6-bisphosphate splits into dihydroxyacetone phosphate (DHAP) and 3-phosphoglyceraldehyde (PGAL); both become PGAL", "—"],
            ["5", "PGAL → 1,3-bisphosphoglyceric acid (BPGA), using inorganic phosphate", "2 NADH formed"],
            ["6", "BPGA → 3-phosphoglyceric acid (3-PGA)", "2 ATP formed"],
            ["7", "3-PGA → 2-PGA → phosphoenolpyruvate (PEP), water removed", "—"],
            ["8", "PEP → pyruvic acid", "2 ATP formed"],
          ],
        },
        {
          type: "example",
          title: "ATP accounting in glycolysis",
          problem: "Work out the net ATP and NADH made in glycolysis of one glucose molecule.",
          steps: [
            "ATP used: 1 at step 1 + 1 at step 3 = 2.",
            "After the split there are two 3-carbon molecules, so steps 5–8 happen twice.",
            "ATP formed: 2 at step 6 + 2 at step 8 = 4. Net ATP = 4 − 2 = 2.",
            "NADH formed: 1 per PGAL × 2 = 2.",
          ],
          answer: "Net gain of 2 ATP and 2 NADH per glucose; the products are 2 pyruvic acid.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In glycolysis, NADH is formed when:",
              options: [
                "Glucose is phosphorylated",
                "PGAL is converted to BPGA",
                "PEP is converted to pyruvic acid",
                "Fructose-1,6-bisphosphate is split",
              ],
              answer: 1,
              explain: "Oxidation of PGAL to BPGA reduces NAD⁺ to NADH.",
            },
          ],
        },
        {
          type: "heading",
          text: "What happens to pyruvic acid",
        },
        {
          type: "table",
          headers: ["Fate", "Where / who", "Change", "Enzymes"],
          rows: [
            ["Alcoholic fermentation", "Yeast; anaerobic conditions", "Pyruvic acid → CO₂ + ethanol", "Pyruvic acid decarboxylase, alcohol dehydrogenase"],
            ["Lactic acid fermentation", "Some bacteria; animal muscle when O₂ is short", "Pyruvic acid → lactic acid", "Lactate dehydrogenase"],
            ["Aerobic respiration", "Mitochondria, with O₂", "Pyruvic acid → CO₂ + H₂O (complete oxidation)", "Krebs cycle and ETS enzymes"],
          ],
        },
        {
          type: "text",
          md: "In both fermentations the **reducing agent is NADH + H⁺**, which is reoxidised to NAD⁺. This NAD⁺ lets glycolysis continue. Fermentation is wasteful: **less than 7% of the energy in glucose is released**, and not all of it is trapped as ATP. The products are hazardous: acid or alcohol builds up, and yeasts poison themselves to death when the alcohol concentration reaches about **13%**.",
        },
        {
          type: "mistake",
          wrong: "Fermentation makes extra ATP when pyruvic acid is turned into ethanol or lactic acid.",
          right: "The fermentation step makes no ATP. All the ATP (net 2) comes from glycolysis; the fermentation step only regenerates NAD⁺.",
          why: "Because the whole process is called 'fermentation', students credit it with ATP. Without NAD⁺ being remade, glycolysis would stop at the PGAL step, so the last step is needed even though it yields no energy.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put these glycolysis intermediates in order.",
            items: ["Glucose-6-phosphate", "Fructose-1,6-bisphosphate", "3-phosphoglyceraldehyde", "1,3-bisphosphoglyceric acid", "Phosphoenolpyruvate", "Pyruvic acid"],
            explain: "Phosphorylate twice, split into PGAL, oxidise to BPGA (NADH), then pull out ATP twice on the way to pyruvic acid.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Plants exchange gases through stomata and lenticels; each part handles its own gas exchange.",
            "Glycolysis (EMP pathway) in the cytoplasm: glucose → 2 pyruvic acid; ATP used at 2 steps, made at 2 steps; net 2 ATP + 2 NADH.",
            "Yeast: pyruvic acid → CO₂ + ethanol; muscle and some bacteria: pyruvic acid → lactic acid; NADH reoxidised in both.",
            "Fermentation releases less than 7% of glucose's energy; yeast dies at about 13% alcohol.",
          ],
        },
      ],
      flashcards: [
        { front: "Another name for glycolysis", back: "EMP pathway (Embden, Meyerhof, Parnas)." },
        { front: "Where does glycolysis occur?", back: "In the cytoplasm of all living cells." },
        { front: "Enzyme that splits sucrose into glucose and fructose", back: "Invertase." },
        { front: "Two steps of glycolysis that use ATP", back: "Glucose → glucose-6-phosphate, and fructose-6-phosphate → fructose-1,6-bisphosphate." },
        { front: "Net yield of glycolysis per glucose", back: "2 ATP, 2 NADH and 2 pyruvic acid." },
        { front: "Enzymes of alcoholic fermentation", back: "Pyruvic acid decarboxylase and alcohol dehydrogenase." },
        { front: "At what alcohol level do yeasts poison themselves?", back: "About 13%." },
        { front: "Why do plants not need special respiratory organs?", back: "Each part exchanges its own gases, demand is low, living cells are near the surface, and green parts get O₂ from photosynthesis." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The enzyme that phosphorylates glucose in the first step of glycolysis is:",
          options: ["Invertase", "Hexokinase", "Lactate dehydrogenase", "Alcohol dehydrogenase"],
          answer: 1,
          explain: "Hexokinase converts glucose to glucose-6-phosphate, using ATP.",
        },
        {
          kind: "numeric",
          q: "How many ATP molecules are made (gross, before subtracting those used) in glycolysis of one glucose?",
          answer: 4,
          explain: "2 at BPGA → 3-PGA and 2 at PEP → pyruvic acid; 4 gross, 2 net.",
        },
        {
          kind: "truefalse",
          q: "Glycolysis requires oxygen.",
          answer: false,
          explain: "Glycolysis runs without O₂ and is the only respiratory process in anaerobes.",
        },
        {
          kind: "mcq",
          q: "In lactic acid fermentation, the reducing agent is:",
          options: ["FADH₂", "NADPH", "NADH + H⁺", "ATP"],
          answer: 2,
          explain: "NADH + H⁺ from glycolysis reduces pyruvic acid to lactic acid and becomes NAD⁺.",
        },
        {
          kind: "fill",
          q: "Fermentation releases less than ___ % of the energy in glucose.",
          answer: ["7", "seven"],
          explain: "Most energy stays locked in ethanol or lactic acid.",
        },
        {
          kind: "multi",
          q: "Which are products of alcoholic fermentation by yeast?",
          options: ["Ethanol", "CO₂", "Lactic acid", "NAD⁺"],
          answers: [0, 1, 3],
          explain: "Yeast makes ethanol and CO₂; NAD⁺ is regenerated. Lactic acid is made by some bacteria and muscle.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "The splitting of fructose-1,6-bisphosphate gives:",
          options: ["Two pyruvic acids", "DHAP and PGAL", "Two molecules of PEP", "Glucose and fructose"],
          answer: 1,
          explain: "It splits into dihydroxyacetone phosphate and 3-phosphoglyceraldehyde, which are interconvertible.",
        },
      ],
    },
    /* ---------------- Lesson 2: aerobic respiration ---------------- */
    {
      slug: "c11-bio-resp-krebs-ets",
      title: "Aerobic Respiration: Krebs Cycle and Electron Transport",
      summary:
        "Oxidative decarboxylation of pyruvic acid to acetyl CoA, the steps and yield of the tricarboxylic acid cycle, the complexes of the electron transport system and how ATP synthase makes ATP by oxidative phosphorylation.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "In the presence of O₂, pyruvic acid enters the **mitochondrion** and is oxidised completely. Two crucial events happen there:\n\n1. Complete oxidation of pyruvate by stepwise removal of hydrogen atoms, leaving three molecules of CO₂: in the **matrix**.\n2. Passing those electrons to O₂ with simultaneous synthesis of ATP: on the **inner membrane**.",
        },
        {
          type: "formula",
          tex: t`\text{Pyruvic acid} + \text{CoA} + \text{NAD}^+ \xrightarrow[\text{pyruvic dehydrogenase}]{\text{Mg}^{2+}} \text{Acetyl CoA} + \text{CO}_2 + \text{NADH} + \text{H}^+`,
          caption: "The link reaction (oxidative decarboxylation). Two NADH form per glucose because two pyruvic acids are made.",
        },
        {
          type: "heading",
          text: "The tricarboxylic acid (Krebs) cycle",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The acetyl group of acetyl CoA condenses with **oxaloacetic acid (OAA, 4C)** and water to form **citric acid (6C)**; enzyme **citrate synthase**; CoA is released. The cycle was worked out by **Hans Krebs**.",
            "Citrate is isomerised to **isocitrate**.",
            "Two successive **decarboxylations** follow, forming **α-ketoglutaric acid (5C)** and then **succinyl CoA (4C)**; NAD⁺ is reduced at each.",
            "Succinyl CoA → **succinic acid**, with synthesis of one **GTP** (substrate-level phosphorylation). In a coupled reaction GTP gives its phosphate to ADP, forming ATP.",
            "Succinic acid → fumaric acid (FAD reduced to FADH₂) → malic acid → **OAA** (NAD⁺ reduced). OAA is ready for the next turn.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{Pyruvic acid} + 4\,\text{NAD}^+ + \text{FAD}^+ + 2\,\text{H}_2\text{O} + \text{ADP} + \text{P}_i \xrightarrow{\text{mitochondrial matrix}} 3\,\text{CO}_2 + 4\,\text{NADH} + 4\,\text{H}^+ + \text{FADH}_2 + \text{ATP}`,
          caption: "Link reaction plus one turn of the Krebs cycle, per pyruvic acid. The Krebs cycle alone gives 2 CO₂, 3 NADH, 1 FADH₂ and 1 GTP (ATP) per acetyl CoA.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many molecules of CO₂ are released from one glucose by the link reaction and Krebs cycle together?",
              answer: 6,
              explain: "Each pyruvic acid gives 3 CO₂ (1 in the link reaction + 2 in the cycle); two pyruvic acids give 6.",
            },
          ],
        },
        {
          type: "heading",
          text: "Electron transport system and oxidative phosphorylation",
        },
        {
          type: "table",
          headers: ["Component", "Name", "Job"],
          rows: [
            ["Complex I", "NADH dehydrogenase", "Oxidises NADH from the matrix; passes electrons to **ubiquinone**"],
            ["Complex II", "Succinate dehydrogenase", "Passes electrons of FADH₂ to ubiquinone"],
            ["Complex III", "Cytochrome bc₁ complex", "Oxidises reduced ubiquinone (ubiquinol); passes electrons to cytochrome c"],
            ["Cytochrome c", "Small mobile protein", "Attached to the outer surface of the inner membrane; carries electrons from III to IV"],
            ["Complex IV", "Cytochrome c oxidase (cytochromes a, a₃ and two copper centres)", "Passes electrons to **O₂**, the final acceptor, forming water"],
            ["Complex V", "ATP synthase (F₀ + F₁)", "Makes ATP using the proton gradient"],
          ],
        },
        {
          type: "text",
          md: "Oxidation of one **NADH gives 3 ATP** and one **FADH₂ gives 2 ATP**. Oxygen acts only at the very end, as the final hydrogen acceptor, but it drives the whole process by removing electrons and hydrogen from the chain.\n\nThis is **oxidative phosphorylation**: the energy of oxidation–reduction is used to build a proton gradient. (In photophosphorylation, light energy builds the gradient.) **F₁** is a peripheral head piece where ATP is made from ADP and Pi; **F₀** is an integral membrane protein forming the channel. For each ATP produced, **2 H⁺** pass through F₀ from the intermembrane space to the matrix.",
        },
        {
          type: "example",
          title: "Energy from one acetyl CoA",
          problem: "Using NCERT values, how much ATP comes from one acetyl CoA oxidised through the Krebs cycle and ETS?",
          steps: [
            "One turn gives 3 NADH, 1 FADH₂ and 1 GTP (= 1 ATP).",
            "3 NADH × 3 = 9 ATP.",
            "1 FADH₂ × 2 = 2 ATP.",
            "Total = 9 + 2 + 1 = 12 ATP.",
          ],
          answer: "12 ATP per acetyl CoA, so 24 ATP for the two acetyl CoA from one glucose.",
        },
        {
          type: "mistake",
          wrong: "Oxygen is used directly in the Krebs cycle.",
          right: "The Krebs cycle uses no O₂ directly. O₂ is used only at complex IV as the final electron acceptor.",
          why: "The Krebs cycle stops without O₂, so students assume it uses O₂. It stops because NAD⁺ and FAD are not regenerated when the ETS cannot pass electrons to O₂.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match the ETS component to its name.",
            pairs: [
              ["Complex I", "NADH dehydrogenase"],
              ["Complex II", "Succinate dehydrogenase"],
              ["Complex III", "Cytochrome bc₁ complex"],
              ["Complex IV", "Cytochrome c oxidase"],
              ["Complex V", "ATP synthase"],
            ],
            explain: "Electrons flow I (or II) → ubiquinone → III → cytochrome c → IV → O₂; complex V uses the resulting H⁺ gradient.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When drawing the Krebs cycle, mark the carbon number of each acid (citric 6C, α-ketoglutaric 5C, succinyl CoA 4C, OAA 4C) and the points where NADH, FADH₂, GTP and CO₂ form. Examiners give marks for the two decarboxylation steps and for naming citrate synthase.",
        },
        {
          type: "keypoints",
          items: [
            "Link reaction: pyruvic acid → acetyl CoA + CO₂ + NADH (pyruvic dehydrogenase, Mg²⁺).",
            "Krebs cycle per acetyl CoA: 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP; OAA is regenerated.",
            "ETS on the inner membrane: complexes I–IV, ubiquinone and cytochrome c; O₂ is the final acceptor.",
            "1 NADH → 3 ATP, 1 FADH₂ → 2 ATP; 2 H⁺ through F₀ per ATP made at F₁.",
          ],
        },
      ],
      flashcards: [
        { front: "Enzyme of the link reaction", back: "Pyruvic dehydrogenase (needs Mg²⁺)." },
        { front: "First product of the Krebs cycle", back: "Citric acid (6C), formed from acetyl CoA + OAA + H₂O by citrate synthase." },
        { front: "Where is substrate-level phosphorylation in the Krebs cycle?", back: "Succinyl CoA → succinic acid, making GTP (then ATP)." },
        { front: "Step that reduces FAD in the Krebs cycle", back: "Succinic acid → fumaric acid." },
        { front: "Final electron acceptor of aerobic respiration", back: "Oxygen, which forms water." },
        { front: "Components of complex IV", back: "Cytochromes a and a₃ and two copper centres." },
        { front: "ATP per NADH and per FADH₂ (NCERT)", back: "3 and 2." },
        { front: "Which part of ATP synthase is the proton channel?", back: "F₀, an integral membrane protein." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Where does the Krebs cycle take place?",
          options: ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Intermembrane space"],
          answer: 1,
          explain: "Krebs cycle enzymes are in the matrix; the ETS is on the inner membrane.",
        },
        {
          kind: "mcq",
          q: "Which carrier moves electrons from complex III to complex IV?",
          options: ["Ubiquinone", "Cytochrome c", "FADH₂", "NADH"],
          answer: 1,
          explain: "Cytochrome c, a small protein on the outer surface of the inner membrane, is the mobile carrier.",
        },
        {
          kind: "numeric",
          q: "How many NADH are produced per glucose by the link reaction and Krebs cycle together?",
          answer: 8,
          explain: "Per pyruvic acid 4 NADH (1 link + 3 Krebs); × 2 = 8.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "For each ATP made, 2 H⁺ pass through F₀ from the matrix to the intermembrane space.",
          answer: false,
          explain: "The flow is from the intermembrane space into the matrix.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange the Krebs cycle acids in order, starting after acetyl CoA joins OAA.",
          items: ["Citric acid", "Isocitric acid", "α-ketoglutaric acid", "Succinyl CoA", "Succinic acid", "Fumaric acid", "Malic acid"],
          explain: "Malic acid is then oxidised to OAA, which accepts the next acetyl group.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Oxidative phosphorylation differs from photophosphorylation in that:",
          options: [
            "It does not use a proton gradient",
            "The gradient is built using energy from oxidation–reduction, not light",
            "It happens in the stroma",
            "It makes NADPH",
          ],
          answer: 1,
          explain: "Both use a proton gradient and ATP synthase; the energy source differs.",
        },
        {
          kind: "multi",
          q: "At which steps is NAD⁺ reduced in the Krebs cycle?",
          options: [
            "Isocitrate → α-ketoglutaric acid",
            "α-ketoglutaric acid → succinyl CoA",
            "Succinic acid → fumaric acid",
            "Malic acid → OAA",
          ],
          answers: [0, 1, 3],
          explain: "Succinate → fumarate reduces FAD, not NAD⁺.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Lesson 3: balance sheet, amphibolic, RQ ---------------- */
    {
      slug: "c11-bio-resp-balance-rq",
      title: "Respiratory Balance Sheet, Amphibolic Pathway and RQ",
      summary:
        "The assumptions behind the 38 ATP count, how fermentation and aerobic respiration compare, why respiration is an amphibolic pathway, and how to calculate the respiratory quotient for carbohydrates, fats and proteins.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "A **respiratory balance sheet** adds up the ATP from one glucose. It is a theoretical exercise based on these assumptions:\n\n1. There is a sequential, orderly pathway: glycolysis, then the TCA cycle, then the ETS.\n2. The NADH made in glycolysis is transferred into the mitochondrion and undergoes oxidative phosphorylation.\n3. None of the intermediates is used to make any other compound.\n4. Only glucose is being respired; no other substrates enter at any stage.\n\nIn a real cell these are not all true: pathways run together, and intermediates are withdrawn as needed. The count is still useful for comparing efficiencies.",
        },
        {
          type: "table",
          headers: ["Stage (per glucose)", "Direct ATP", "Reduced carriers", "ATP from carriers"],
          rows: [
            ["Glycolysis", "2 (net)", "2 NADH", "6"],
            ["Link reaction", "0", "2 NADH", "6"],
            ["Krebs cycle (2 turns)", "2 (from GTP)", "6 NADH + 2 FADH₂", "18 + 4 = 22"],
            ["**Total**", "**4**", "**10 NADH + 2 FADH₂**", "**34**"],
          ],
        },
        {
          type: "formula",
          tex: t`4 + (10 \times 3) + (2 \times 2) = 38\ \text{ATP per glucose}`,
          caption: "Net gain in aerobic respiration under NCERT's assumptions.",
        },
        {
          type: "table",
          headers: ["Fermentation", "Aerobic respiration"],
          rows: [
            ["Partial breakdown of glucose", "Complete breakdown to CO₂ and H₂O"],
            ["Net 2 ATP per glucose", "Many more ATP (38 by the balance sheet)"],
            ["NADH oxidised to NAD⁺ rather slowly", "NADH oxidised vigorously by the ETS"],
          ],
        },
        {
          type: "heading",
          text: "The amphibolic pathway",
        },
        {
          type: "text",
          md: "Glucose is the favoured substrate, but other molecules enter the respiratory pathway too, at different points:\n\n- **Fats** are broken into **glycerol**, which becomes PGAL, and **fatty acids**, which become **acetyl CoA**.\n- **Proteins** are broken into **amino acids**, which after deamination enter as pyruvic acid, acetyl CoA or Krebs cycle intermediates.\n\nThe same intermediates are also **withdrawn** to build molecules: for example, when a cell needs fatty acids, acetyl CoA is taken out of the pathway. So respiration takes part in both breakdown (catabolism) and synthesis (anabolism). That is why it is better called an **amphibolic pathway** than a purely catabolic one.",
        },
        {
          type: "heading",
          text: "Respiratory quotient",
        },
        {
          type: "formula",
          tex: t`\text{RQ} = \frac{\text{volume of CO}_2 \text{ evolved}}{\text{volume of O}_2 \text{ consumed}}`,
          caption: "RQ depends on the respiratory substrate.",
        },
        {
          type: "table",
          headers: ["Substrate", "RQ", "Why"],
          rows: [
            ["Carbohydrates", "1", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O: equal moles of CO₂ out and O₂ in"],
            ["Fats", "Less than 1 (about 0.7 for tripalmitin)", "Little oxygen in the molecule, so more O₂ is needed"],
            ["Proteins", "About 0.9", "Intermediate"],
          ],
        },
        {
          type: "example",
          title: "RQ of tripalmitin",
          problem: "Tripalmitin is oxidised as: 2(C₅₁H₉₈O₆) + 145 O₂ → 102 CO₂ + 98 H₂O + energy. Find the RQ.",
          steps: [
            "At the same temperature and pressure, volumes of gases are in the ratio of their moles.",
            "RQ = 102 CO₂ ÷ 145 O₂.",
            "102 ÷ 145 = 0.703…",
          ],
          answer: "RQ ≈ 0.7, less than 1, as expected for a fat.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "A seed releases 18 mL of CO₂ while taking in 20 mL of O₂. What is its RQ?",
              answer: 0.9,
              tolerance: 0.01,
              explain: "RQ = 18 ÷ 20 = 0.9, typical of protein as substrate.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Every cell gets exactly 38 ATP from each glucose it respires.",
          right: "38 ATP is a theoretical figure that holds only under the balance-sheet assumptions.",
          why: "In a living cell, intermediates are withdrawn for synthesis, other substrates enter, and moving glycolytic NADH into mitochondria costs energy. (Modern measured values are lower, but NEET and board answers use NCERT's 38.)",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is the RQ equal to 1 or less than 1?",
            groups: ["RQ = 1", "RQ less than 1"],
            items: [
              { text: "Glucose", group: 0, hint: "6 CO₂ out for 6 O₂ in." },
              { text: "Starch in a germinating cereal grain", group: 0, hint: "Starch is a carbohydrate." },
              { text: "Tripalmitin", group: 1, hint: "102 CO₂ for 145 O₂." },
              { text: "Sucrose", group: 0, hint: "A carbohydrate." },
              { text: "Oil in a germinating groundnut seed", group: 1, hint: "Oils are fats." },
              { text: "Protein", group: 1, hint: "About 0.9." },
            ],
            explain: "Carbohydrates have RQ 1. Fats and proteins contain less oxygen relative to carbon and hydrogen, so they need more O₂ and have RQ below 1.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Balance sheet: 4 direct ATP + 10 NADH × 3 + 2 FADH₂ × 2 = 38 ATP, under four assumptions.",
            "Fermentation: partial breakdown, net 2 ATP; aerobic: complete breakdown, 38 ATP.",
            "Respiration is amphibolic: fats and proteins enter it, and intermediates are withdrawn for synthesis.",
            "RQ = CO₂ evolved ÷ O₂ consumed: 1 for carbohydrates, about 0.7 for fats, about 0.9 for proteins.",
          ],
        },
      ],
      flashcards: [
        { front: "Net ATP from one glucose in aerobic respiration (NCERT)", back: "38 ATP." },
        { front: "Net ATP from one glucose in fermentation", back: "2 ATP." },
        { front: "Why is respiration called amphibolic?", back: "It is used for both breakdown (catabolism) and synthesis (anabolism)." },
        { front: "Where do fatty acids enter the respiratory pathway?", back: "As acetyl CoA." },
        { front: "Where does glycerol enter?", back: "As PGAL (3-phosphoglyceraldehyde)." },
        { front: "Define RQ.", back: "Ratio of the volume of CO₂ evolved to the volume of O₂ consumed in respiration." },
        { front: "RQ of tripalmitin", back: "102/145 ≈ 0.7." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The RQ of carbohydrates is:",
          options: ["0.7", "0.9", "1", "Greater than 1"],
          answer: 2,
          explain: "Equal moles of CO₂ are released and O₂ used.",
        },
        {
          kind: "numeric",
          q: "How many ATP are made from the NADH produced in glycolysis of one glucose (NCERT values)?",
          answer: 6,
          explain: "2 NADH × 3 ATP = 6.",
        },
        {
          kind: "mcq",
          q: "Which is NOT an assumption of the respiratory balance sheet?",
          options: [
            "Only glucose is respired",
            "No intermediate is used for synthesis",
            "Glycolytic NADH is oxidised in mitochondria",
            "Fatty acids enter as acetyl CoA",
          ],
          answer: 3,
          explain: "The balance sheet assumes no other substrate enters; fatty acids entering is part of the amphibolic pathway.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Acetyl CoA can be withdrawn from the respiratory pathway to make fatty acids.",
          answer: true,
          explain: "This withdrawal is why respiration is called amphibolic.",
        },
        {
          kind: "numeric",
          q: "A tissue gives out 7 mL of CO₂ while using 10 mL of O₂. What is its RQ?",
          answer: 0.7,
          tolerance: 0.01,
          explain: "7 ÷ 10 = 0.7, suggesting fat is being respired.",
        },
        {
          kind: "numeric",
          q: "How many ATP come from the FADH₂ produced by the complete oxidation of one glucose?",
          answer: 4,
          explain: "2 FADH₂ (one per Krebs turn) × 2 ATP = 4.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Amino acids enter respiration:",
          options: [
            "Only as glucose",
            "After deamination, as pyruvic acid, acetyl CoA or Krebs cycle intermediates",
            "Only as glycerol",
            "Directly into the ETS",
          ],
          answer: 1,
          explain: "Proteins are broken to amino acids, which are deaminated and enter at several points.",
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-resp-exam-edge",
      title: "Exam edge: Respiration in Plants",
      summary:
        "How NEET and KCET test respiration: glycolysis steps and enzymes, Krebs cycle carbon and carrier counts, ETS complexes, the 38-ATP sheet, amphibolic entry points and RQ, with statement, assertion–reason and counting practice.",
      minutes: 24,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually asks 1–3 questions from this chapter; it also feeds questions in Photosynthesis (ATP synthase, chemiosmosis) and Biomolecules (enzymes). The favourites are: where each step happens, which step makes ATP, NADH or FADH₂, counts per glucose, complex names, and RQ. **KCET** asks direct one-liners and simple counts.",
        },
        {
          type: "list",
          items: [
            "NCERT line: in glycolysis, ATP is used at **two** steps (glucose → G6P; F6P → F1,6BP).",
            "NCERT line: BPGA → 3-PGA and PEP → pyruvic acid are the two ATP-forming steps.",
            "NCERT line: fermentation releases **less than 7%** of glucose energy; yeast dies at about **13%** alcohol.",
            "NCERT line: pyruvic dehydrogenase needs **Mg²⁺** and NAD⁺ and CoA.",
            "NCERT line: cytochrome c is a small protein attached to the **outer surface of the inner membrane**.",
            "NCERT line: complex IV has cytochromes **a, a₃ and two copper centres**.",
            "NCERT line: tripalmitin RQ = **0.7**; proteins about **0.9**.",
          ],
        },
        {
          type: "table",
          headers: ["Per glucose (aerobic)", "Count", "Where it comes from"],
          rows: [
            ["CO₂", "6", "2 in link reaction + 4 in Krebs cycle"],
            ["NADH", "10", "2 glycolysis + 2 link + 6 Krebs"],
            ["FADH₂", "2", "Succinate → fumarate, once per turn"],
            ["Substrate-level ATP", "4 (net)", "2 glycolysis (net) + 2 from GTP"],
            ["Oxidative phosphorylation ATP", "34", "30 from NADH + 4 from FADH₂"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{ATP} = 3\,(\text{NADH}) + 2\,(\text{FADH}_2) + \text{substrate-level ATP}`,
          caption: "Apply to any stage. Per acetyl CoA: 3(3) + 2(1) + 1 = 12. Per pyruvic acid: 3(4) + 2(1) + 1 = 15.",
        },
        {
          type: "example",
          title: "NEET level: statement counting",
          problem: "How many are correct? (i) Glycolysis occurs in the mitochondrial matrix. (ii) Citrate synthase joins acetyl CoA with OAA. (iii) FADH₂ is formed when succinic acid becomes fumaric acid. (iv) Complex II is cytochrome c oxidase. (v) Oxygen is the final hydrogen acceptor.",
          steps: [
            "(i) Wrong: glycolysis occurs in the cytoplasm.",
            "(ii) Correct.",
            "(iii) Correct.",
            "(iv) Wrong: complex II is succinate dehydrogenase; complex IV is cytochrome c oxidase.",
            "(v) Correct.",
          ],
          answer: "Three: (ii), (iii) and (v).",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: Fermentation gives a net gain of only 2 ATP per glucose. R: In fermentation, the NADH from glycolysis is used to reduce pyruvic acid (or acetaldehyde) instead of being oxidised through the ETS.",
          steps: [
            "A is true: only glycolysis yields ATP.",
            "R is true: NADH is reoxidised by the fermentation step, so its energy is not captured as ATP.",
            "R explains A: the energy held in NADH (6 ATP worth in aerobic cells) is not harvested.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "KCET style: ATP from pyruvic acid",
          problem: "How many ATP are produced (NCERT values) when 2 molecules of pyruvic acid are completely oxidised in mitochondria?",
          steps: [
            "Per pyruvic acid: 4 NADH, 1 FADH₂, 1 ATP (GTP).",
            "ATP = 4 × 3 + 1 × 2 + 1 = 15.",
            "For 2 pyruvic acids: 15 × 2 = 30.",
          ],
          answer: "30 ATP (add glycolysis's 2 ATP + 6 from its 2 NADH to reach 38).",
        },
        {
          type: "example",
          title: "Harder: a blocked ETS",
          problem: "A poison blocks complex IV in a plant cell supplied with plenty of glucose and O₂. Predict what happens to (a) O₂ uptake, (b) the Krebs cycle, (c) ATP supply, and (d) ethanol production in the cell.",
          steps: [
            "(a) Electrons cannot reach O₂, so O₂ uptake stops even though O₂ is present.",
            "(b) NADH and FADH₂ cannot be reoxidised, NAD⁺ and FAD run out, and the Krebs cycle and link reaction stop.",
            "(c) Oxidative phosphorylation stops; only glycolysis gives ATP (net 2 per glucose).",
            "(d) To keep glycolysis going, the cell must regenerate NAD⁺ by fermentation, so ethanol (and CO₂) production rises, just as under anaerobic conditions.",
          ],
          answer: "O₂ use stops, the Krebs cycle stops, ATP falls to the glycolytic 2 per glucose, and fermentation products rise.",
        },
        {
          type: "mistake",
          wrong: "Since the Krebs cycle gives only 2 ATP per glucose, it is a minor energy source.",
          right: "The Krebs cycle directly makes only 2 ATP, but its 6 NADH and 2 FADH₂ yield 22 ATP in the ETS.",
          why: "Counting only direct ATP hides where the energy is stored. Most of the 38 ATP come from carriers made in the matrix.",
        },
        {
          type: "mistake",
          wrong: "The link reaction happens in the cytoplasm because pyruvic acid is made there.",
          right: "Pyruvic acid is transported into the mitochondrial matrix, where pyruvic dehydrogenase converts it to acetyl CoA.",
          why: "Students place the link reaction with glycolysis since it follows directly. NEET often tests this site in a match-the-column question.",
        },
        {
          type: "mistake",
          wrong: "Fats have RQ greater than 1 because they release so much energy.",
          right: "Fats have RQ less than 1 (about 0.7): they need more O₂ than the CO₂ they release.",
          why: "High energy content is confused with high CO₂ output. Fats are poor in oxygen, so extra O₂ is needed to oxidise their carbon and hydrogen.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Where does each event happen?",
            groups: ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane"],
            items: [
              { text: "Glycolysis", group: 0, hint: "Occurs in all cells, even anaerobes." },
              { text: "Alcoholic fermentation", group: 0, hint: "No mitochondria needed." },
              { text: "Link reaction", group: 1, hint: "Pyruvic acid enters the mitochondrion first." },
              { text: "Citric acid formation", group: 1, hint: "First step of the TCA cycle." },
              { text: "Cytochrome c oxidase passes electrons to O₂", group: 2, hint: "Part of the ETS." },
              { text: "ATP synthase works", group: 2, hint: "Complex V, with F₀ in the membrane." },
            ],
            explain: "Glycolysis and fermentation: cytoplasm. Link reaction and Krebs cycle: matrix. ETS and ATP synthase: inner membrane.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many ATP are formed by oxidative phosphorylation (not substrate-level) from one glucose, using NCERT values?",
              answer: 34,
              explain: "10 NADH × 3 = 30 and 2 FADH₂ × 2 = 4; total 34. The other 4 ATP are substrate-level.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Per glucose: 6 CO₂, 10 NADH, 2 FADH₂, 4 substrate-level ATP, 34 by oxidative phosphorylation, 38 total.",
            "Per acetyl CoA 12 ATP; per pyruvic acid 15 ATP.",
            "Sites: glycolysis and fermentation in cytoplasm; link and Krebs in matrix; ETS on inner membrane.",
            "RQ: carbohydrate 1, protein about 0.9, fat about 0.7.",
          ],
        },
      ],
      flashcards: [
        { front: "NADH per glucose in aerobic respiration", back: "10 (2 glycolysis + 2 link + 6 Krebs)." },
        { front: "ATP from one acetyl CoA", back: "12 (3 NADH × 3 + 1 FADH₂ × 2 + 1 GTP)." },
        { front: "ATP from one pyruvic acid", back: "15." },
        { front: "Substrate-level ATP per glucose", back: "4 (2 net in glycolysis + 2 from GTP in Krebs)." },
        { front: "What happens to the Krebs cycle if the ETS is blocked?", back: "It stops, because NAD⁺ and FAD are not regenerated." },
        { front: "Name of complex II", back: "Succinate dehydrogenase." },
        { front: "CO₂ per glucose from the Krebs cycle alone", back: "4 (2 per turn)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Assertion (A): The Krebs cycle stops in the absence of oxygen. Reason (R): Oxygen is a substrate of citrate synthase.",
          options: AR,
          answer: 2,
          explain: "A is true, but R is false: the cycle stops because NAD⁺ and FAD are not regenerated when the ETS cannot pass electrons to O₂.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many ATP are formed (NCERT values) from complete aerobic oxidation of 3 glucose molecules?",
          answer: 114,
          explain: "38 × 3 = 114.",
        },
        {
          kind: "numeric",
          q: "How many FADH₂ are formed from 5 acetyl CoA in the Krebs cycle?",
          answer: 5,
          explain: "One FADH₂ per turn; 5 acetyl CoA give 5.",
        },
        {
          kind: "mcq",
          q: "Which enzyme catalyses the conversion of glucose to glucose-6-phosphate?",
          options: ["Phosphofructokinase", "Hexokinase", "Pyruvate kinase", "Aldolase"],
          answer: 1,
          explain: "NCERT names hexokinase for this first, ATP-using step.",
        },
        {
          kind: "multi",
          q: "Which are correct about the mitochondrial ETS?",
          options: [
            "Ubiquinone receives electrons from complexes I and II",
            "Cytochrome c is an integral protein of the outer membrane",
            "Complex IV contains two copper centres",
            "One FADH₂ yields 2 ATP",
          ],
          answers: [0, 2, 3],
          explain: "Cytochrome c is a small protein attached to the outer surface of the inner membrane.",
          difficulty: 2,
          hint: "Check the location given for cytochrome c.",
        },
        {
          kind: "mcq",
          q: "A germinating seed has an RQ of about 0.7. It is most likely:",
          options: ["Wheat", "Rice", "Castor (an oil seed)", "Pea (protein-rich)"],
          answer: 2,
          explain: "RQ near 0.7 indicates fat as substrate, found in oil seeds such as castor.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "Using NCERT values, how many ATP are obtained from 4 NADH and 3 FADH₂ through the ETS?",
          answer: 18,
          explain: "4 × 3 + 3 × 2 = 12 + 6 = 18.",
        },
        {
          kind: "mcq",
          q: "In yeast cells under anaerobic conditions, the number of CO₂ molecules released per glucose is:",
          options: ["0", "2", "4", "6"],
          answer: 1,
          explain: "Each pyruvic acid loses one CO₂ to form acetaldehyde, then ethanol; 2 per glucose.",
          difficulty: 3,
          hint: "Count the decarboxylation of each pyruvic acid.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Plant Growth and Development                                        */
/* ------------------------------------------------------------------ */
const plantGrowth: Topic = {
  slug: "c11-bio-plant-growth-development",
  title: "Plant Growth and Development",
  icon: "🌱",
  description:
    "Growth and how it is measured, phases and rates of growth, differentiation, dedifferentiation and redifferentiation, development and plasticity, the discovery and effects of auxins, gibberellins, cytokinins, ethylene and abscisic acid, plus photoperiodism, vernalisation and seed dormancy for ISC.",
  lessons: [
    /* ---------------- Lesson 1: growth ---------------- */
    {
      slug: "c11-bio-pgd-growth-rates",
      title: "Growth: Measurement, Phases and Rates",
      summary:
        "What growth means in plants, why it is indeterminate, how it is measured, the three phases of growth, arithmetic and geometric growth with the sigmoid curve, absolute and relative growth rates, and the conditions growth needs.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "A banyan tree in a village square keeps adding new branches and roots for centuries. **Growth** is an **irreversible, permanent increase in size** of an organ, its parts or even a single cell. It is accompanied by metabolic processes, both building up and breaking down, and it uses energy. A leaf swelling with water overnight and shrinking by noon is not growth, because the change is reversible.",
        },
        {
          type: "text",
          md: "Plants keep growing throughout life because they have **meristems**, tissues whose cells can divide and renew themselves. New cells are always added to the plant body by the meristems. This is the **open form of growth**, and plant growth is generally **indeterminate**.",
        },
        {
          type: "table",
          headers: ["Meristem", "Where", "Growth produced"],
          rows: [
            ["Root apical meristem", "Root tip", "**Primary growth**: elongation of the root"],
            ["Shoot apical meristem", "Shoot tip", "**Primary growth**: elongation of the stem"],
            ["Lateral meristems: vascular cambium and cork cambium", "Along the sides of dicot and gymnosperm stems and roots", "**Secondary growth**: increase in girth"],
          ],
        },
        {
          type: "text",
          md: "**Measuring growth.** Growth at the cell level is an increase in protoplasm, which is hard to measure directly. So we measure something roughly proportional to it: fresh weight, dry weight, length, area, volume or cell number. A single maize root apical meristem can make **more than 17,500 new cells per hour**, while cells in a watermelon may increase in size by up to **3,50,000 times**. Growth of a pollen tube is measured as length; growth of a dorsiventral leaf as surface area.",
        },
        {
          type: "table",
          headers: ["Phase", "Where in a root tip", "Features of the cells"],
          rows: [
            ["Meristematic", "At the very apex", "Constantly dividing; rich in protoplasm; large conspicuous nuclei; thin, primary cellulose walls with abundant plasmodesmata"],
            ["Elongation", "Just behind the meristem", "Increased vacuolation, cell enlargement and new cell wall deposition"],
            ["Maturation", "Further back", "Cells reach their maximum size in wall thickening and protoplasmic modifications"],
          ],
        },
        {
          type: "heading",
          text: "Growth rates",
        },
        {
          type: "formula",
          tex: t`\text{Arithmetic: } L_t = L_0 + rt \qquad \text{Geometric: } W_1 = W_0\, e^{rt}`,
          caption: "L and W are size (length, weight) at the start (0) and after time t; r is the growth rate. In the geometric equation r is the relative growth rate, a measure of the plant's efficiency in producing new material; e is the base of natural logarithms (about 2.718).",
        },
        {
          type: "text",
          md: "In **arithmetic growth**, after mitosis only one daughter cell keeps dividing while the other differentiates and matures. A root elongating at a constant rate is an example; length against time gives a **straight line**.\n\nIn **geometric growth**, both daughter cells keep dividing. Growth is slow at first (**lag phase**), then fast and exponential (**log or exponential phase**), then it slows when nutrients become limited and levels off (**stationary phase**). Size against time gives an S-shaped **sigmoid curve**, typical of living organisms in a natural environment and of cells, tissues and organs.\n\nThe **absolute growth rate** is growth per unit time. The **relative growth rate** is growth per unit time divided by the initial size.",
        },
        {
          type: "example",
          title: "Absolute versus relative growth",
          problem: "In one day, leaf A grows from 5 cm² to 10 cm² and leaf B grows from 50 cm² to 55 cm². Compare their absolute and relative growth rates.",
          steps: [
            "Absolute growth: A gains 10 − 5 = 5 cm²; B gains 55 − 50 = 5 cm². They are equal.",
            "Relative growth of A = 5 ÷ 5 = 1, that is 100% per day.",
            "Relative growth of B = 5 ÷ 50 = 0.1, that is 10% per day.",
          ],
          answer: "Same absolute growth rate (5 cm² per day), but A's relative growth rate is 10 times that of B.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The lag, log and stationary phases are seen in:",
              options: ["Arithmetic growth", "Geometric growth", "Reversible growth", "Secondary growth only"],
              answer: 1,
              explain: "Geometric growth gives the S-shaped sigmoid curve with these three phases.",
            },
          ],
        },
        {
          type: "text",
          md: "**Conditions for growth.** Water (for cell enlargement and as the medium for enzymes), oxygen (to release metabolic energy), nutrients (macro- and micronutrients for protoplasm and energy), and a suitable temperature range. Light and gravity also affect certain phases and stages of growth.",
        },
        {
          type: "mistake",
          wrong: "If two leaves gain the same area in a day, they are growing equally fast in every sense.",
          right: "Their absolute growth rates are equal, but the smaller leaf has a much higher relative growth rate.",
          why: "Absolute growth ignores starting size. Relative growth asks how much new material each unit of existing material produces, which is a better measure of efficiency.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which phase of growth shows this feature?",
            groups: ["Meristematic", "Elongation", "Maturation"],
            items: [
              { text: "Large, conspicuous nuclei", group: 0, hint: "Dividing cells have big nuclei." },
              { text: "Thin primary walls with many plasmodesmata", group: 0, hint: "Walls are still thin in dividing cells." },
              { text: "Increased vacuolation", group: 1, hint: "Cells take in water and enlarge." },
              { text: "New cell wall deposition as cells enlarge", group: 1, hint: "Walls must grow as cells grow." },
              { text: "Maximum wall thickening", group: 2, hint: "This is the final state." },
              { text: "Protoplasmic modifications complete", group: 2, hint: "The cell is now specialised." },
            ],
            explain: "Cells divide at the apex, enlarge by vacuolation behind it, and reach their final structure further back.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Growth is an irreversible permanent increase in size; plant growth is open and indeterminate because of meristems.",
            "Apical meristems give primary growth; lateral meristems (vascular and cork cambium) give secondary growth.",
            "Phases: meristematic, elongation, maturation.",
            "Arithmetic: Lt = L0 + rt (straight line). Geometric: W1 = W0 e^(rt) (sigmoid: lag, log, stationary).",
          ],
        },
      ],
      flashcards: [
        { front: "Define growth.", back: "An irreversible, permanent increase in size of an organ, its parts or a cell." },
        { front: "Why is plant growth called 'open'?", back: "Meristems keep adding new cells throughout the plant's life." },
        { front: "Rate of cell production by a maize root apical meristem", back: "More than 17,500 new cells per hour." },
        { front: "How much can watermelon cells enlarge?", back: "Up to 3,50,000 times." },
        { front: "Equation of arithmetic growth", back: "Lt = L0 + rt." },
        { front: "Equation of geometric growth", back: "W1 = W0 e^(rt), where r is the relative growth rate." },
        { front: "Three phases of the sigmoid curve", back: "Lag, log (exponential), stationary." },
        { front: "Relative growth rate", back: "Growth per unit time divided by the initial size." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Secondary growth in dicot stems is due to:",
          options: ["Root apical meristem", "Shoot apical meristem", "Vascular cambium and cork cambium", "Intercalary meristem only"],
          answer: 2,
          explain: "Lateral meristems produce secondary growth, an increase in girth.",
        },
        {
          kind: "numeric",
          q: "A root 3 cm long grows arithmetically at 0.5 cm per day. What is its length (cm) after 8 days?",
          answer: 7,
          unit: "cm",
          explain: "Lt = L0 + rt = 3 + 0.5 × 8 = 7 cm.",
        },
        {
          kind: "truefalse",
          q: "Growth of a pollen tube is best measured as an increase in surface area.",
          answer: false,
          explain: "A pollen tube is measured by its increase in length; a dorsiventral leaf by surface area.",
        },
        {
          kind: "mcq",
          q: "In arithmetic growth, after mitotic division:",
          options: [
            "Both daughter cells continue to divide",
            "Only one daughter cell continues to divide",
            "Neither daughter cell divides",
            "Daughter cells fuse",
          ],
          answer: 1,
          explain: "The other daughter cell differentiates and matures, giving a constant rate.",
        },
        {
          kind: "numeric",
          q: "A seedling grows from 20 g to 25 g in a week. What is its relative growth rate for the week (as a decimal)?",
          answer: 0.25,
          tolerance: 0.01,
          explain: "Relative growth = (25 − 20) ÷ 20 = 0.25, that is 25% per week.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange the phases of the sigmoid growth curve.",
          items: ["Lag phase", "Log (exponential) phase", "Stationary phase"],
          explain: "Slow start, rapid growth, then levelling off as resources limit growth.",
        },
        {
          kind: "multi",
          q: "Which are features of cells in the meristematic phase?",
          options: ["Rich protoplasm", "Large conspicuous nuclei", "Large central vacuole", "Thin primary cellulose walls"],
          answers: [0, 1, 3],
          explain: "Increased vacuolation begins in the elongation phase.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Lesson 2: differentiation, development, discovery of PGRs ---------------- */
    {
      slug: "c11-bio-pgd-differentiation-pgr-discovery",
      title: "Differentiation, Development and the Discovery of PGRs",
      summary:
        "Differentiation, dedifferentiation and redifferentiation, open differentiation, development and plasticity with heterophylly, the chemical nature of plant growth regulators, and the experiments that discovered each one.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Cells made by the root and shoot apical meristems and the cambium mature to carry out specific jobs. This maturing is **differentiation**. Cells change a great deal in their walls and protoplasm. To become a **tracheary element** (a xylem vessel or tracheid), a cell loses its protoplasm and develops a strong, elastic, **lignocellulosic secondary wall**, able to carry water over long distances even under extreme tension.",
        },
        {
          type: "table",
          headers: ["Term", "Meaning", "Example"],
          rows: [
            ["Differentiation", "Cells from meristems mature to perform specific functions", "Meristem cells becoming xylem vessels"],
            ["Dedifferentiation", "Living differentiated cells that had lost the power to divide regain it", "Fully differentiated parenchyma cells forming **interfascicular cambium** and **cork cambium**"],
            ["Redifferentiation", "Cells made by a dedifferentiated meristem lose the power to divide again and mature for specific functions", "Secondary xylem, secondary phloem and cork formed from these cambia"],
          ],
        },
        {
          type: "text",
          md: "Differentiation in plants is **open**: cells from the same meristem can end up with different structures. The final structure depends on the cell's **location**. For example, cells pushed away from the root apical meristem towards the tip become root-cap cells, while those pushed to the periphery mature as epidermis.\n\n**Development** is the sum of all changes an organism goes through in its life cycle, from seed germination to senescence. It is controlled by both **intrinsic** factors (genetic factors and PGRs) and **extrinsic** factors (light, temperature, water, oxygen, nutrition).",
        },
        {
          type: "text",
          md: "**Plasticity**: plants follow different pathways in response to the environment or phases of life, forming different structures. A clear case is **heterophylly**. In cotton, coriander and larkspur, leaves of the juvenile plant differ in shape from those of the mature plant (a developmental change). In buttercup, leaves formed in air differ from those formed in water (an environmental change).",
        },
        {
          type: "heading",
          text: "Plant growth regulators",
        },
        {
          type: "text",
          md: "**Plant growth regulators (PGRs)** are small, simple molecules of diverse chemical nature. They fall into two broad groups: **promoters** (auxins, gibberellins, cytokinins), involved in cell division, enlargement, pattern formation, tropic growth, flowering, fruiting and seed formation; and **inhibitors** such as **abscisic acid**, involved in responses to wounds and stresses and in dormancy and abscission. **Ethylene** can fit either group, but it is largely an inhibitor.",
        },
        {
          type: "table",
          headers: ["PGR", "How it was found"],
          rows: [
            ["Auxin", "Charles and Francis Darwin saw coleoptiles of **canary grass** bend towards one-sided light (phototropism) and found that the **tip** was the site of a transmittable influence. **F. W. Went** later isolated auxin from the tips of **oat** coleoptiles."],
            ["Gibberellin", "In the **'bakane' (foolish seedling)** disease of rice, caused by the fungus *Gibberella fujikuroi*, **E. Kurosawa** found the symptoms appeared when healthy seedlings were treated with sterile filtrates of the fungus. The active substance was identified as gibberellic acid."],
            ["Cytokinin", "**F. Skoog** and co-workers found that callus from tobacco stem internodes grew only if, besides auxin, the medium had vascular tissue extract, yeast extract, coconut milk or DNA. **Skoog and Miller** later crystallised the active substance: **kinetin**."],
            ["Abscisic acid", "In the mid-1960s three independent groups described **inhibitor-B**, **abscission II** and **dormin**; all proved chemically identical and were named abscisic acid."],
            ["Ethylene", "**Cousins (1910)** confirmed that ripe oranges released a volatile substance that hastened ripening of stored unripe bananas; it was later identified as ethylene."],
          ],
        },
        {
          type: "example",
          title: "Reasoning like the Darwins",
          problem: "Three canary grass coleoptiles are lit from one side: (1) intact, (2) tip covered with an opaque cap, (3) tip cut off. Only (1) bends towards light. What do you conclude?",
          steps: [
            "(2) has its tip present but shaded and does not bend, so the tip must sense the light.",
            "(3) has no tip and does not bend, so something from the tip is needed for the bending.",
            "The bending happens below the tip in (1), so the influence travels from the tip downwards.",
          ],
          answer: "The tip perceives light and sends a transmittable influence (later shown to be auxin) down to the growing region, which bends.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Formation of cork cambium from fully differentiated parenchyma cells is an example of:",
              options: ["Differentiation", "Dedifferentiation", "Redifferentiation", "Senescence"],
              answer: 1,
              explain: "Differentiated cells regain the power to divide: dedifferentiation.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Dedifferentiation and redifferentiation mean the same thing: cells changing their type.",
          right: "Dedifferentiation is regaining the ability to divide; redifferentiation is the products of that new meristem losing it again and maturing.",
          why: "Both words describe change, so they blur. Use the cambium as the anchor: parenchyma → cambium is *de*-differentiation; cambium → secondary xylem and cork is *re*-differentiation.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each PGR to its chemical nature.",
            pairs: [
              ["IAA (auxin)", "Indole compound"],
              ["Kinetin", "Adenine (purine) derivative"],
              ["Abscisic acid", "Carotenoid derivative"],
              ["Gibberellic acid (GA₃)", "Terpene"],
              ["Ethylene", "Gas"],
            ],
            explain: "PGRs are chemically very diverse: indoles, adenine derivatives, carotenoid derivatives, terpenes and even a gas.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When asked to distinguish differentiation, dedifferentiation and redifferentiation, give one example for each from the same story (parenchyma → cambium → secondary tissues). For discovery questions, name the plant or fungus: canary grass, oat, *Gibberella fujikuroi*, tobacco, oranges and bananas.",
        },
        {
          type: "keypoints",
          items: [
            "Differentiation: maturing for a function; dedifferentiation: regaining division; redifferentiation: maturing again.",
            "Plant differentiation is open; a cell's fate depends on its location.",
            "Plasticity: heterophylly in cotton, coriander, larkspur (developmental) and buttercup (environmental).",
            "Discovery: auxin (Darwins, Went), GA (Kurosawa, bakane), cytokinin (Skoog and Miller, kinetin), ABA (three inhibitors), ethylene (Cousins).",
          ],
        },
      ],
      flashcards: [
        { front: "What is dedifferentiation?", back: "Living differentiated cells regaining the ability to divide, e.g. parenchyma forming interfascicular or cork cambium." },
        { front: "What is redifferentiation?", back: "Cells formed by a dedifferentiated meristem losing the ability to divide again and maturing for specific functions." },
        { front: "Two examples of developmental heterophylly", back: "Cotton, coriander or larkspur (juvenile vs mature leaves)." },
        { front: "Example of environmental heterophylly", back: "Buttercup: leaves in air differ from those in water." },
        { front: "Who isolated auxin and from which plant?", back: "F. W. Went, from tips of oat coleoptiles." },
        { front: "Fungus causing bakane disease of rice", back: "*Gibberella fujikuroi*." },
        { front: "Three names that turned out to be ABA", back: "Inhibitor-B, abscission II and dormin." },
        { front: "Which PGR is a terpene?", back: "Gibberellic acid (GA₃)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The 'foolish seedling' disease of rice led to the discovery of:",
          options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
          answer: 1,
          explain: "Kurosawa's work on bakane disease (*Gibberella fujikuroi*) led to gibberellic acid.",
        },
        {
          kind: "mcq",
          q: "Kinetin is chemically a derivative of:",
          options: ["Indole", "Adenine", "Carotenoid", "Terpene"],
          answer: 1,
          explain: "Kinetin is a modified form of adenine, a purine.",
        },
        {
          kind: "truefalse",
          q: "Differentiation in plants is open, so cells from one meristem can mature into different structures.",
          answer: true,
          explain: "The final structure depends on the cell's location in the plant.",
        },
        {
          kind: "fill",
          q: "Cousins (1910) found that a volatile substance from ripe ___ hastened ripening of stored bananas.",
          answer: ["oranges", "orange"],
          explain: "The substance was later identified as ethylene.",
        },
        {
          kind: "mcq",
          q: "Which is a growth inhibitor?",
          options: ["IAA", "GA₃", "Zeatin", "Abscisic acid"],
          answer: 3,
          explain: "ABA is the main inhibitor; the others are promoters.",
        },
        {
          kind: "multi",
          q: "Skoog's tobacco callus grew with auxin only if one of these was added. Which?",
          options: ["Coconut milk", "Yeast extract", "Vascular tissue extract", "DNA", "Ethylene"],
          answers: [0, 1, 2, 3],
          explain: "Each of these supplied cytokinin-like activity; ethylene was not part of the experiment.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Development in plants is controlled by:",
          options: [
            "Only genes",
            "Only light and temperature",
            "Both intrinsic (genetic, PGRs) and extrinsic (light, temperature, water, oxygen, nutrition) factors",
            "Only PGRs",
          ],
          answer: 2,
          explain: "Development is the result of both internal and external factors.",
        },
      ],
    },
    /* ---------------- Lesson 3: effects of PGRs ---------------- */
    {
      slug: "c11-bio-pgd-pgr-effects",
      title: "Physiological Effects of Plant Growth Regulators",
      summary:
        "What auxins, gibberellins, cytokinins, ethylene and abscisic acid do in plants and how farmers and industries use them, and how PGRs act together in apical dominance and dormancy.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Tea gardens in Assam are plucked and hedges are trimmed so that they become bushy. Pineapple growers in Kerala spray their fields so that all the plants flower together. Both depend on plant growth regulators.",
        },
        {
          type: "table",
          headers: ["Auxins", "Gibberellins"],
          rows: [
            ["Natural: **IAA**, **IBA**. Synthetic: **NAA**, **2,4-D**.", "More than 100 known (GA₁, GA₂, GA₃ …); **GA₃** was first discovered and is the most studied; all are acidic."],
            ["Initiate **rooting in stem cuttings**, used in plant propagation", "Increase length of the axis: used to lengthen **grape stalks**"],
            ["Promote **flowering in pineapples**", "Make fruits like **apple** elongate and improve shape"],
            ["Prevent early fruit and leaf drop, but promote **abscission** of older mature leaves and fruits", "**Delay senescence**, so fruits stay on the tree longer and the market period extends"],
            ["Cause **apical dominance**", "GA₃ **speeds up malting** in the brewing industry"],
            ["Induce **parthenocarpy** (e.g. tomato)", "Sprayed on **sugarcane**, lengthen the stem and raise yield by as much as **20 tonnes per acre**"],
            ["**2,4-D** kills dicot weeds and does not affect mature monocots: used for weed-free lawns", "Sprayed on juvenile **conifers**, hasten maturity and early seed production"],
            ["Control **xylem differentiation** and help cell division", "Promote **bolting** (internode elongation before flowering) in beet, cabbage and other rosette plants"],
          ],
        },
        {
          type: "list",
          items: [
            "**Cytokinins** act on cytokinesis. **Kinetin** (from autoclaved herring sperm DNA) does not occur naturally in plants; **zeatin** was found in corn kernels and coconut milk. Natural cytokinins are made where cells divide rapidly: root apices, developing shoot buds, young fruits.",
            "Cytokinins help produce **new leaves, chloroplasts in leaves**, lateral shoot growth and adventitious shoots; they help **overcome apical dominance**; they promote **nutrient mobilisation**, which **delays leaf senescence**.",
          ],
        },
        {
          type: "table",
          headers: ["Ethylene", "Abscisic acid (ABA)"],
          rows: [
            ["A simple **gas**, made in large amounts by tissues undergoing **senescence** and by **ripening fruits**", "A general **growth inhibitor** and inhibitor of plant metabolism"],
            ["Horizontal growth of seedlings, swelling of the axis and **apical hook** formation in dicot seedlings", "**Inhibits seed germination**"],
            ["Promotes **senescence and abscission**, especially of leaves and flowers", "Stimulates **closure of stomata**"],
            ["Highly effective in **fruit ripening**; raises the respiration rate during ripening (**respiratory climacteric**)", "Increases tolerance to stresses: the **stress hormone**"],
            ["Breaks seed and bud dormancy: germination of **peanut** seeds, sprouting of **potato** tubers", "Plays a role in **seed development, maturation and dormancy**, helping seeds withstand desiccation"],
            ["Rapid internode or petiole elongation in **deep-water rice**; promotes root growth and **root hair** formation", "In most situations acts as an **antagonist to GAs**"],
            ["Initiates flowering and synchronises fruit-set in **pineapple**; induces flowering in **mango**", "—"],
          ],
        },
        {
          type: "text",
          md: "**Ethephon**, the most widely used source of ethylene in agriculture, is an aqueous solution that is readily absorbed, moves within the plant and releases ethylene slowly. It **hastens fruit ripening** in tomatoes and apples, **accelerates abscission** of flowers and fruits (thinning of cotton, cherry and walnut), and **promotes female flowers in cucumbers**, increasing yield.",
        },
        {
          type: "text",
          md: "**PGRs rarely act alone.** Most events in a plant's life are controlled by two or more PGRs acting together, in synergy or against each other: apical dominance (auxin against cytokinin), seed dormancy and germination (ABA against GA), abscission, senescence and so on. Extrinsic factors such as temperature and light act through PGRs too.",
        },
        {
          type: "example",
          title: "Why plucking makes a tea bush bushy",
          problem: "Explain, in terms of PGRs, why removing the shoot tips of tea plants and hedge plants makes them branch more.",
          steps: [
            "The shoot apex makes auxin, which moves down the stem and keeps lateral buds dormant: apical dominance.",
            "Removing the tip (decapitation) removes this auxin source.",
            "Cytokinins, which promote lateral shoot growth and overcome apical dominance, now dominate, so lateral buds grow into branches.",
          ],
          answer: "Decapitation removes auxin-driven apical dominance; lateral buds sprout, making the plant bushy.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which PGR is called the stress hormone?",
              options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
              answer: 3,
              explain: "ABA increases tolerance to stresses and closes stomata during water stress.",
            },
            {
              kind: "mcq",
              q: "Ethephon promotes which kind of flowers in cucumber?",
              options: ["Male", "Female", "Bisexual", "Sterile"],
              answer: 1,
              explain: "More female flowers mean more fruits and a higher yield.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "2,4-D kills grasses and cereal weeds, so it can be sprayed on a wheat field to clear grassy weeds.",
          right: "2,4-D kills broad-leaved (dicot) weeds and does not affect mature monocots, so it clears dicot weeds from cereal fields and lawns.",
          why: "Students remember 'herbicide' but not which group it spares. Lawns are grasses (monocots); 2,4-D keeps them weed-free by killing the dicots growing in them.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each use to the PGR behind it.",
            pairs: [
              ["Killing dicot weeds in a lawn", "2,4-D (synthetic auxin)"],
              ["Speeding up malting in brewing", "Gibberellin"],
              ["Overcoming apical dominance", "Cytokinin"],
              ["Ripening stored tomatoes", "Ethylene (ethephon)"],
              ["Closing stomata under drought", "Abscisic acid"],
            ],
            explain: "Each PGR has signature uses: auxins for rooting and weeds, GAs for length and malting, cytokinins for lateral growth and delaying senescence, ethylene for ripening and abscission, ABA for stress and dormancy.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Questions often ask for 'two physiological effects' of a named PGR. Choose the textbook examples with the plant named (pineapple, grape stalks, sugarcane, deep-water rice, cucumber). Vague answers like 'helps growth' get no marks.",
        },
        {
          type: "keypoints",
          items: [
            "Auxins: rooting of cuttings, apical dominance, parthenocarpy, 2,4-D for dicot weeds, xylem differentiation.",
            "Gibberellins: length of axis (grapes, sugarcane), apple shape, malting, bolting, delay senescence.",
            "Cytokinins: cell division, new leaves and chloroplasts, overcome apical dominance, delay leaf senescence.",
            "Ethylene: ripening, abscission, apical hook, breaks dormancy, deep-water rice; ABA: stomatal closure, dormancy, stress hormone, antagonist of GA.",
          ],
        },
      ],
      flashcards: [
        { front: "Two natural auxins", back: "IAA (indole-3-acetic acid) and IBA (indole butyric acid)." },
        { front: "Two synthetic auxins", back: "NAA (naphthalene acetic acid) and 2,4-D." },
        { front: "What is bolting?", back: "Rapid internode elongation just before flowering, promoted by gibberellins in rosette plants such as beet and cabbage." },
        { front: "Where are natural cytokinins made?", back: "In regions of rapid cell division: root apices, developing shoot buds, young fruits." },
        { front: "What is the respiratory climacteric?", back: "The rise in respiration rate during fruit ripening, enhanced by ethylene." },
        { front: "Three uses of ethephon", back: "Hastens ripening (tomato, apple), thins flowers and fruits (cotton, cherry, walnut), promotes female flowers in cucumber." },
        { front: "Which PGR antagonises gibberellins in most situations?", back: "Abscisic acid." },
        { front: "Two PGRs that both promote flowering in pineapple", back: "Auxin and ethylene." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Spraying sugarcane with gibberellins increases yield because they:",
          options: [
            "Increase stem length, where sugar is stored",
            "Close stomata",
            "Promote female flowers",
            "Induce parthenocarpy",
          ],
          answer: 0,
          explain: "Sugarcane stores sugar in its stem; a longer stem stores more, raising yield by up to 20 tonnes per acre.",
        },
        {
          kind: "mcq",
          q: "Which PGR promotes rapid internode elongation in deep-water rice?",
          options: ["ABA", "Ethylene", "Cytokinin", "2,4-D"],
          answer: 1,
          explain: "Ethylene helps the upper shoot stay above flood water.",
        },
        {
          kind: "truefalse",
          q: "Kinetin is a naturally occurring cytokinin in plants.",
          answer: false,
          explain: "Kinetin does not occur naturally in plants; zeatin is a natural cytokinin.",
        },
        {
          kind: "multi",
          q: "Which effects are caused by ethylene?",
          options: ["Apical hook in dicot seedlings", "Sprouting of potato tubers", "Inhibition of fruit ripening", "Root hair formation"],
          answers: [0, 1, 3],
          explain: "Ethylene promotes fruit ripening; it does not inhibit it.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Parthenocarpy in tomato can be induced by:",
          options: ["Auxins", "ABA", "Ethylene", "Cytokinins"],
          answer: 0,
          explain: "Auxins induce parthenocarpy (fruit without fertilisation).",
        },
        {
          kind: "fill",
          q: "The PGR that stimulates closure of stomata is ___.",
          answer: ["abscisic acid", "ABA"],
          explain: "ABA closes stomata, especially during water stress.",
        },
        {
          kind: "mcq",
          q: "Delay of leaf senescence by cytokinins is due to:",
          options: ["Stomatal closure", "Promotion of nutrient mobilisation", "Increased abscission", "Bolting"],
          answer: 1,
          explain: "Cytokinins draw nutrients to the treated leaf, keeping it green longer.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which pair of PGRs acts antagonistically in seed dormancy?",
          options: ["Auxin and ethylene", "GA and ABA", "Cytokinin and GA", "Auxin and GA"],
          answer: 1,
          explain: "ABA promotes dormancy; GA promotes germination.",
        },
      ],
    },
    /* ---------------- Lesson 4: ISC photoperiodism, vernalisation, dormancy ---------------- */
    {
      slug: "c11-bio-pgd-photoperiod-vernalisation",
      title: "Photoperiodism, Vernalisation and Seed Dormancy",
      summary:
        "For ISC and older papers: long-day, short-day and day-neutral plants, the role of the dark period and the leaf, phytochrome, vernalisation in winter cereals and biennials, and the causes and breaking of seed dormancy.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "callout",
          tone: "note",
          title: "Board note",
          md: "These sections were **removed from the rationalised NCERT book**, so CBSE and Karnataka I PUC do not examine them. **ISC Class 11** includes photoperiodism, vernalisation and seed dormancy under Plant Physiology. Older NEET and KCET papers asked these ideas often, so check your exam's current syllabus before skipping them.",
        },
        {
          type: "text",
          md: "Chrysanthemums in Pune flower in the shortening days of late autumn, while wheat in Punjab flowers as days lengthen in spring. Some plants need a periodic exposure to light to flower. The response of plants to the relative lengths of day and night is **photoperiodism**. Plants are grouped by the **critical day length**, a duration of light that differs from species to species.",
        },
        {
          type: "table",
          headers: ["Group", "Flowers when", "Examples"],
          rows: [
            ["Long-day plants (LDP)", "Light period is **longer** than a critical duration", "Wheat, spinach, radish"],
            ["Short-day plants (SDP)", "Light period is **shorter** than a critical duration", "Chrysanthemum, soybean, *Xanthium*"],
            ["Day-neutral plants", "No correlation between light duration and flowering", "Tomato, cucumber"],
          ],
        },
        {
          type: "text",
          md: "Two key findings:\n\n1. Not only the length of the light period but also the **length of the dark period** is important. In short-day plants an uninterrupted long night is the real need.\n2. The **leaves** perceive the photoperiod, while the shoot apex changes into a floral meristem. A hormonal substance, named **florigen** (still hypothetical), is thought to move from leaves to the shoot apex to induce flowering only when the plant gets the necessary inductive photoperiod.\n\nThe light is detected by **phytochrome**, a pigment that exists in two interconvertible forms: **Pr** absorbs red light (about 660 nm) and becomes **Pfr**; Pfr absorbs far-red light (about 730 nm) and returns to Pr. Pfr is the active form.",
        },
        {
          type: "formula",
          tex: t`\text{P}_\text{r} \ \underset{\text{far-red (730 nm)}}{\overset{\text{red (660 nm)}}{\rightleftharpoons}} \ \text{P}_\text{fr}`,
          caption: "Phytochrome photoreversibility (ISC). The last flash given decides the effect.",
        },
        {
          type: "example",
          title: "Night-break experiment",
          problem: "A short-day plant with a critical day length of 15.5 hours is given 14 hours of light and 10 hours of darkness, but the dark period is interrupted in the middle by a brief flash of red light. It does not flower. Explain.",
          steps: [
            "14 hours of light is shorter than the critical 15.5 hours, so by day length alone it should flower.",
            "The flash splits the night into two short dark periods of about 5 hours each.",
            "Short-day plants really measure an unbroken dark period; the flash converts Pr to Pfr, which prevents flowering in SDP.",
          ],
          answer: "The night was broken, so the plant never received the long uninterrupted dark period it needs; a far-red flash after the red one would reverse the effect.",
        },
        {
          type: "heading",
          text: "Vernalisation",
        },
        {
          type: "text",
          md: "In some plants flowering depends, qualitatively or quantitatively, on exposure to **low temperature**. This is **vernalisation**. It prevents early reproductive development late in the growing season and lets the plant reach maturity first.\n\n- **Wheat, barley, rye** have spring and winter varieties. Spring varieties are sown in spring and flower and set grain before the season ends. **Winter varieties** are sown in autumn, overwinter as small seedlings, resume growth in spring and are harvested around mid-summer. Sown in spring, winter varieties usually fail to flower or set mature grain within the season.\n- **Biennials** such as **sugar beet, cabbage and carrot** are monocarpic: they flower and die in the second season. A cold treatment stimulates a later photoperiodic flowering response.\n\nIn ISC books the stimulus is perceived by the **shoot apex** (meristematic cells), unlike photoperiod, which is perceived by leaves.",
        },
        {
          type: "heading",
          text: "Seed dormancy",
        },
        {
          type: "text",
          md: "Some seeds fail to germinate even when external conditions are favourable. Such seeds are **dormant**, and the cause lies within the seed (endogenous control). This differs from **quiescence**, where a seed simply waits for water, oxygen and a suitable temperature.\n\n**Causes**: an impermeable, hard seed coat; chemical inhibitors such as abscisic acid, phenolic acids and para-ascorbic acid; and immature embryos.\n\n**Breaking dormancy**: the seed coat can be broken by mechanical abrasion with knives or sandpaper, or by shaking with abrasives (in nature by microbes and by passage through an animal's gut). Inhibitors are removed by **chilling** or by applying **GA₃ and nitrates**. Changes in light and temperature also break dormancy.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which part of the plant perceives the photoperiodic stimulus?",
              options: ["Root tip", "Shoot apex", "Leaves", "Flower buds"],
              answer: 2,
              explain: "Leaves perceive the photoperiod; a signal then travels to the shoot apex.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Short-day plants flower only when days are less than 12 hours, and long-day plants only when days are more than 12 hours.",
          right: "Each species has its own critical day length. An SDP flowers when the day is shorter than its critical length, which may be more than 12 hours.",
          why: "'Short' and 'long' sound like 'shorter or longer than half a day'. A short-day plant with a critical length of 15 hours flowers in 14-hour days, the same day length that might make a long-day plant with a 13-hour critical length flower.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Long-day, short-day or day-neutral plant?",
            groups: ["Long-day", "Short-day", "Day-neutral"],
            items: [
              { text: "Wheat", group: 0, hint: "Flowers as days lengthen in spring." },
              { text: "Spinach", group: 0, hint: "Bolts in long summer days." },
              { text: "Chrysanthemum", group: 1, hint: "Flowers in autumn." },
              { text: "Soybean", group: 1, hint: "A classic short-day crop." },
              { text: "Tomato", group: 2, hint: "Flowers whatever the day length." },
              { text: "Cucumber", group: 2, hint: "Flowering not tied to day length." },
            ],
            explain: "Photoperiodic groups are fixed by how flowering responds to day length compared with the species' critical length.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Photoperiodism: flowering response to day and night length; LDP, SDP and day-neutral plants.",
            "The dark period matters; leaves perceive the stimulus; florigen is hypothesised to carry it to the apex; phytochrome Pr ⇌ Pfr senses red and far-red light.",
            "Vernalisation: low temperature promotes flowering in winter wheat, barley, rye and biennials like sugar beet, cabbage, carrot.",
            "Seed dormancy: hard coat, inhibitors (ABA, phenolics), immature embryo; broken by abrasion, chilling, GA₃ and nitrates.",
          ],
        },
      ],
      flashcards: [
        { front: "What is photoperiodism?", back: "The response of plants to the relative lengths of day and night, especially in flowering." },
        { front: "Which organ perceives the photoperiod?", back: "The leaf." },
        { front: "Name of the hypothetical flowering hormone", back: "Florigen." },
        { front: "Two forms of phytochrome", back: "Pr (absorbs red, about 660 nm) and Pfr (absorbs far-red, about 730 nm); Pfr is active." },
        { front: "What is vernalisation?", back: "Promotion of flowering by exposure to low temperature." },
        { front: "Three biennials that need cold to flower", back: "Sugar beet, cabbage, carrot." },
        { front: "Dormancy vs quiescence", back: "Dormancy: internal block to germination. Quiescence: seed waits only for favourable external conditions." },
        { front: "Two chemicals that break seed dormancy", back: "GA₃ and nitrates." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Winter varieties of wheat sown in spring usually:",
          options: [
            "Flower earlier than spring varieties",
            "Fail to flower or produce mature grain in that season",
            "Become day-neutral",
            "Germinate only after chilling of the seed",
          ],
          answer: 1,
          explain: "They need the cold of winter (vernalisation) to flower on time.",
        },
        {
          kind: "truefalse",
          q: "In short-day plants, interrupting the long night with a flash of red light prevents flowering.",
          answer: true,
          explain: "SDP need an uninterrupted dark period; the red flash breaks it.",
        },
        {
          kind: "mcq",
          q: "Which is NOT a cause of seed dormancy?",
          options: ["Hard, impermeable seed coat", "Abscisic acid in the seed", "Immature embryo", "High gibberellin content"],
          answer: 3,
          explain: "Gibberellins promote germination and are used to break dormancy.",
        },
        {
          kind: "mcq",
          q: "Phytochrome Pr is converted to Pfr by:",
          options: ["Far-red light", "Red light", "Blue light", "Darkness only"],
          answer: 1,
          explain: "Red light (about 660 nm) converts Pr to Pfr; far-red reverses it.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Flowering promoted by exposure to low temperature is called ___.",
          answer: ["vernalisation", "vernalization"],
          explain: "Seen in winter cereals and biennials.",
        },
        {
          kind: "multi",
          q: "Which methods can break seed dormancy?",
          options: ["Scratching the seed coat with sandpaper", "Chilling", "Applying GA₃", "Applying abscisic acid"],
          answers: [0, 1, 2],
          explain: "ABA is itself an inhibitor that causes dormancy.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A plant flowers in 14-hour days and in 10-hour days equally well. It is a:",
          options: ["Long-day plant", "Short-day plant", "Day-neutral plant", "Vernalised plant"],
          answer: 2,
          explain: "Flowering not linked to day length means day-neutral.",
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-pgd-exam-edge",
      title: "Exam edge: Plant Growth and Development",
      summary:
        "How NEET and KCET test this chapter: PGR discovery and effects, pairs of PGRs that act together or against each other, growth equations and curves, differentiation terms and heterophylly, with statement, assertion–reason and calculation practice.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually takes 1–2 questions from this chapter, almost all on PGRs: who discovered what, which PGR does which job, and which PGR is used for a named crop. **KCET** adds direct questions on growth phases, the growth equations and differentiation terms. Most questions are NCERT lines, so the named plants matter.",
        },
        {
          type: "list",
          items: [
            "NCERT line: a maize root apical meristem gives **more than 17,500 new cells per hour**; watermelon cells grow up to **3,50,000 times**.",
            "NCERT line: GAs raise sugarcane yield by as much as **20 tonnes per acre**.",
            "NCERT line: the most widely used compound as a source of ethylene is **ethephon**.",
            "NCERT line: **zeatin** was isolated from **corn kernels and coconut milk**.",
            "NCERT line: **2,4-D** kills dicot weeds and spares mature monocots.",
            "NCERT line: heterophylly in **cotton, coriander, larkspur** (development) and **buttercup** (environment).",
            "NCERT line: ABA is the **stress hormone** and antagonises GAs.",
          ],
        },
        {
          type: "table",
          headers: ["Job", "PGRs involved (watch for 'two correct' options)"],
          rows: [
            ["Flowering in pineapple", "Auxin and ethylene"],
            ["Delaying senescence", "Cytokinin (leaves); gibberellin (fruits)"],
            ["Breaking dormancy", "Gibberellin and ethylene (ABA induces dormancy)"],
            ["Abscission", "Ethylene promotes; auxin promotes it in older organs but prevents early drop; ABA is named after it"],
            ["Apical dominance", "Auxin causes it; cytokinin overcomes it"],
          ],
        },
        {
          type: "formula",
          tex: t`L_t = L_0 + rt \qquad W_1 = W_0\,e^{rt} \qquad \text{RGR} = \frac{\Delta W / \Delta t}{W_0}`,
          caption: "Use the arithmetic form for steady elongation, the exponential form for the log phase, and RGR to compare organs of different starting size.",
        },
        {
          type: "example",
          title: "NEET level: statement counting",
          problem: "How many are correct? (i) GA₃ is used to speed up malting. (ii) Cytokinins promote apical dominance. (iii) Ethylene promotes female flowers in cucumber. (iv) ABA inhibits seed germination. (v) IBA is a synthetic auxin.",
          steps: [
            "(i) Correct.",
            "(ii) Wrong: cytokinins help overcome apical dominance; auxins cause it.",
            "(iii) Correct (as ethephon).",
            "(iv) Correct.",
            "(v) Wrong: IBA, like IAA, is a natural auxin; NAA and 2,4-D are synthetic.",
          ],
          answer: "Three: (i), (iii) and (iv).",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: Ethylene helps deep-water rice survive floods. R: Ethylene promotes rapid internode and petiole elongation.",
          steps: [
            "A is true: deep-water rice keeps its leaves above water as floods rise.",
            "R is true: NCERT lists rapid internode/petiole elongation in deep-water rice as an ethylene effect.",
            "R directly explains A.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "KCET style: using the growth equations",
          problem: "(a) A root 4 cm long grows arithmetically at 0.6 cm per day; find its length after 5 days. (b) A culture of 10 mg grows geometrically with r = 0.1 per day; find its mass after 10 days (take e ≈ 2.72).",
          steps: [
            "(a) Lt = 4 + 0.6 × 5 = 4 + 3 = 7 cm.",
            "(b) rt = 0.1 × 10 = 1, so W1 = 10 × e¹.",
            "W1 ≈ 10 × 2.72 = 27.2 mg.",
          ],
          answer: "(a) 7 cm. (b) About 27.2 mg.",
        },
        {
          type: "example",
          title: "Harder: designing an apical dominance test",
          problem: "Pea seedlings are split into three sets: (1) intact, (2) shoot tip removed, (3) tip removed and auxin paste put on the cut stump. Predict lateral bud growth in each and state what (3) proves.",
          steps: [
            "(1) Intact apex supplies auxin: lateral buds stay suppressed.",
            "(2) No apex, no auxin from the tip: lateral buds grow out.",
            "(3) Auxin paste replaces the tip's auxin: lateral buds stay suppressed, as in (1).",
            "Since applied auxin alone mimics the tip, the tip's effect is due to auxin and not to some other property of the apex.",
          ],
          answer: "Buds grow only in set 2. Set 3 proves that auxin from the apex causes apical dominance.",
        },
        {
          type: "mistake",
          wrong: "IAA and IBA are synthetic auxins used in farming, and NAA is natural.",
          right: "IAA and IBA are natural (isolated from plants); NAA and 2,4-D are synthetic.",
          why: "All four are used in horticulture, so students lump them together. NEET often has one option swapping natural and synthetic.",
        },
        {
          type: "mistake",
          wrong: "Since ethylene promotes ripening and abscission, it always inhibits growth.",
          right: "Ethylene also promotes some growth: internode elongation in deep-water rice, root growth and root hairs, and breaking of seed and bud dormancy.",
          why: "NCERT calls ethylene 'largely an inhibitor', which students read as 'only an inhibitor'. Questions check the promoting effects.",
        },
        {
          type: "mistake",
          wrong: "Kinetin is the main natural cytokinin of plants.",
          right: "Kinetin was found in autoclaved herring sperm DNA and does not occur naturally in plants; zeatin is a natural cytokinin.",
          why: "Kinetin was the first cytokinin named, so it is assumed to be the plant's own.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match the scientist to the PGR they helped discover.",
            pairs: [
              ["F. W. Went", "Auxin from oat coleoptile tips"],
              ["E. Kurosawa", "Gibberellin from bakane disease"],
              ["Skoog and Miller", "Kinetin"],
              ["Cousins", "Ethylene from ripe oranges"],
            ],
            explain: "NEET links each name to one PGR. The Darwins worked with canary grass and only proposed a transmittable influence; Went isolated auxin.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which pair is mismatched?",
              options: [
                "Bolting – gibberellin",
                "Stomatal closure – ABA",
                "Parthenocarpy in tomato – auxin",
                "Apical dominance – cytokinin",
              ],
              answer: 3,
              explain: "Apical dominance is caused by auxin; cytokinin overcomes it.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn each PGR's named-plant uses; NEET options swap them.",
            "Antagonist pairs: auxin–cytokinin (apical dominance), GA–ABA (dormancy and germination).",
            "Natural auxins: IAA, IBA; synthetic: NAA, 2,4-D. Natural cytokinin: zeatin; kinetin is not natural in plants.",
            "Growth: Lt = L0 + rt; W1 = W0 e^(rt); sigmoid curve lag–log–stationary.",
          ],
        },
      ],
      flashcards: [
        { front: "Two PGRs that both promote pineapple flowering", back: "Auxin (NAA) and ethylene." },
        { front: "Which PGR is named for the process it was once thought to control?", back: "Abscisic acid (abscission)." },
        { front: "Which PGR helps deep-water rice?", back: "Ethylene: rapid internode and petiole elongation." },
        { front: "Two crops where GAs improve the product's shape or length", back: "Grape (stalk length) and apple (fruit elongation and shape)." },
        { front: "Natural vs synthetic auxins", back: "Natural: IAA, IBA. Synthetic: NAA, 2,4-D." },
        { front: "Why does auxin paste on a decapitated stump keep lateral buds dormant?", back: "It replaces the auxin from the apex that causes apical dominance." },
        { front: "PGR used to thin cotton, cherry and walnut", back: "Ethylene (as ethephon)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Assertion (A): ABA is called a stress hormone. Reason (R): ABA stimulates stomatal closure and increases tolerance to various stresses.",
          options: AR,
          answer: 0,
          explain: "Both are NCERT lines; R explains A.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which PGR is used to initiate rooting in stem cuttings?",
          options: ["Ethylene", "Auxin", "ABA", "Cytokinin"],
          answer: 1,
          explain: "Auxins (IBA, NAA) are used to root stem cuttings.",
        },
        {
          kind: "numeric",
          q: "A leaf grows from 40 cm² to 50 cm² in 2 days. What is its relative growth rate per day (as a decimal)?",
          answer: 0.125,
          tolerance: 0.005,
          explain: "Growth per day = (50 − 40) ÷ 2 = 5 cm² per day; RGR = 5 ÷ 40 = 0.125 per day.",
          difficulty: 3,
          hint: "Divide the growth per day by the starting area.",
        },
        {
          kind: "multi",
          q: "Which effects are due to gibberellins?",
          options: ["Bolting in cabbage", "Malting in brewing", "Promoting female flowers in cucumber", "Hastening maturity in juvenile conifers"],
          answers: [0, 1, 3],
          explain: "Female flowers in cucumber are promoted by ethylene (ethephon).",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Formation of interfascicular cambium from parenchyma, followed by its producing secondary xylem, shows in order:",
          options: [
            "Differentiation, then dedifferentiation",
            "Dedifferentiation, then redifferentiation",
            "Redifferentiation, then dedifferentiation",
            "Differentiation, then senescence",
          ],
          answer: 1,
          explain: "Parenchyma regains division (dedifferentiation); the cambium's products mature (redifferentiation).",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A root grows arithmetically from 2.5 cm at 0.4 cm per day. After how many days will it be 6.5 cm long?",
          answer: 10,
          explain: "6.5 = 2.5 + 0.4t, so 0.4t = 4 and t = 10 days.",
        },
        {
          kind: "mcq",
          q: "Heterophylly due to the environment is seen in:",
          options: ["Cotton", "Coriander", "Larkspur", "Buttercup"],
          answer: 3,
          explain: "Buttercup forms different leaves in air and water; the others show developmental heterophylly.",
        },
        {
          kind: "mcq",
          q: "The most widely used compound as a source of ethylene is:",
          options: ["Ethephon", "2,4-D", "NAA", "Zeatin"],
          answer: 0,
          explain: "Ethephon, an aqueous solution, is absorbed readily and releases ethylene slowly. 2,4-D and NAA are synthetic auxins; zeatin is a cytokinin.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Transport in Plants (ISC; removed from rationalised NCERT)          */
/* ------------------------------------------------------------------ */
const transport: Topic = {
  slug: "c11-bio-transport-in-plants",
  title: "Transport in Plants",
  icon: "💧",
  description:
    "For ISC (and older NEET and KCET papers): diffusion, facilitated diffusion and active transport, water potential, osmosis, plasmolysis and imbibition, water absorption and the ascent of sap, transpiration and stomata, mineral uptake, and phloem transport by pressure flow.",
  lessons: [
    /* ---------------- Lesson 1: means of transport and water relations ---------------- */
    {
      slug: "c11-bio-tp-diffusion-water-potential",
      title: "Means of Transport and Plant–Water Relations",
      summary:
        "Short and long-distance transport, simple diffusion, facilitated diffusion and active transport compared, water potential and its components, osmosis, plasmolysis and imbibition.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "callout",
          tone: "note",
          title: "Board note",
          md: "This chapter was **removed from the rationalised NCERT book**, so CBSE and Karnataka I PUC do not examine it. **ISC Class 11** includes it under Plant Physiology. Older NEET and KCET papers asked questions from it regularly, and its ideas (water potential, stomata) are used in Photosynthesis.",
        },
        {
          type: "text",
          md: "A coconut palm on the Kerala coast lifts water more than 20 m from its roots to its leaves, and sends sugar from its leaves down to its roots. Over short distances, substances move from cell to cell by **diffusion** and by **cytoplasmic streaming** aided by active transport. Over long distances they move through the vascular system, xylem and phloem; this is **translocation**.\n\nIn flowering plants, water and minerals travel mostly **one way**, upwards in xylem. Organic food and some mineral nutrients move in **many directions** in phloem.",
        },
        {
          type: "table",
          headers: ["Property", "Simple diffusion", "Facilitated transport", "Active transport"],
          rows: [
            ["Needs special membrane proteins", "No", "Yes", "Yes"],
            ["Highly selective", "No", "Yes", "Yes"],
            ["Transport saturates", "No", "Yes", "Yes"],
            ["Uphill transport (against gradient)", "No", "No", "Yes"],
            ["Needs ATP energy", "No", "No", "Yes"],
          ],
        },
        {
          type: "text",
          md: "**Diffusion** is passive and slow; it needs no energy. Molecules move at random from a region of higher concentration to lower. It happens in gases and liquids and is the only means of gas movement within the plant body. Its rate depends on the concentration gradient, the permeability of the membrane, temperature and pressure. Lipid-soluble substances pass through membranes easily.\n\n**Facilitated diffusion**: hydrophilic substances need membrane proteins to cross. The proteins give sites for diffusion but do not set up a gradient, so movement is still downhill and needs no ATP. **Porins** form large pores in the outer membranes of plastids, mitochondria and some bacteria. **Aquaporins** are water channels. In **symport** two molecules cross together in the same direction; in **antiport** they move in opposite directions; in **uniport** one molecule moves on its own.\n\n**Active transport** uses energy (ATP) to pump molecules **against** a concentration gradient. It is carried out by membrane proteins, so it is specific, can saturate and is sensitive to inhibitors.",
        },
        {
          type: "heading",
          text: "Water potential",
        },
        {
          type: "formula",
          tex: t`\Psi_w = \Psi_s + \Psi_p`,
          caption: "Water potential = solute potential + pressure potential. Units: pascals (usually MPa). Water always moves from higher (less negative) to lower (more negative) Ψw.",
        },
        {
          type: "text",
          md: "Water molecules have kinetic energy. The more free water there is in a system, the higher its **water potential (Ψw)**. **Pure water** at standard temperature, not under pressure, has the highest water potential, taken as **zero**.\n\nDissolving solute lowers the free energy of water, so **solute potential (Ψs) is always negative**; more solute means more negative Ψs. Pressure above atmospheric raises water potential. When water enters a plant cell, the protoplast presses on the wall: this **turgor pressure** gives a positive **pressure potential (Ψp)**. Water in the xylem under tension has a negative Ψp.",
        },
        {
          type: "example",
          title: "Which way will water move?",
          problem: "Cell A has Ψs = −0.9 MPa and Ψp = 0.4 MPa. The neighbouring cell B has Ψs = −0.6 MPa and Ψp = 0.3 MPa. Which way does water flow?",
          steps: [
            "Ψw of A = −0.9 + 0.4 = −0.5 MPa.",
            "Ψw of B = −0.6 + 0.3 = −0.3 MPa.",
            "Water moves from higher to lower Ψw: −0.3 is higher than −0.5.",
          ],
          answer: "From B to A, even though A has the higher turgor pressure.",
        },
        {
          type: "text",
          md: "**Osmosis** is the diffusion of water across a selectively permeable membrane, from higher to lower water potential, until equilibrium. **Osmotic pressure** is the positive pressure that must be applied to stop water entering a solution through such a membrane; it is numerically equal to osmotic (solute) potential but opposite in sign. A **potato osmometer** (a hollowed potato with sugar solution, placed in water) shows osmosis in a classroom.\n\n**Imbibition** is a special kind of diffusion where water is absorbed by solids (colloids), causing a large increase in volume: dry seeds and dry wood swell. It needs a water potential gradient between the absorbent and the liquid, and an affinity between them. Imbibing seedlings can push up through soil.",
        },
        {
          type: "table",
          headers: ["External solution", "Water movement", "State of the cell"],
          rows: [
            ["Hypotonic (more dilute than cell sap)", "Water enters", "**Turgid**: protoplast presses on the rigid wall, which stops it from bursting"],
            ["Isotonic", "No net movement", "**Flaccid**"],
            ["Hypertonic (more concentrated)", "Water leaves; protoplast shrinks from the wall", "**Plasmolysed**: the space between wall and protoplast fills with the external solution, because the wall is freely permeable"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "A cell has Ψs = −1.2 MPa and Ψp = 0.5 MPa. What is its water potential (MPa)?",
              answer: -0.7,
              tolerance: 0.01,
              unit: "MPa",
              explain: "Ψw = Ψs + Ψp = −1.2 + 0.5 = −0.7 MPa.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Pure water has a positive water potential, and adding sugar raises it further.",
          right: "Pure water's water potential is zero, the highest possible at atmospheric pressure; adding solute makes it negative.",
          why: "'More concentrated' sounds like 'more potential'. But water potential measures the free energy of water itself, and solute molecules reduce the free water.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "A cell with Ψw = −0.5 MPa is put in a solution of Ψ = −0.8 MPa. Predict.",
            emoji: "🧪",
            options: [
              "Water enters the cell; it becomes turgid",
              "Water leaves the cell; it may plasmolyse",
              "No change, because the cell wall blocks water",
            ],
            answer: 1,
            trap: 0,
            explain: "−0.5 is higher than −0.8, so water flows out of the cell into the solution. If enough leaves, the protoplast pulls away from the wall.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Simple diffusion: no proteins, no ATP, downhill. Facilitated: proteins, no ATP, downhill, selective. Active: proteins and ATP, uphill.",
            "Ψw = Ψs + Ψp; pure water Ψw = 0; Ψs is always negative; Ψp is usually positive (turgor), negative in xylem under tension.",
            "Osmosis: water across a selectively permeable membrane from higher to lower Ψw.",
            "Hypotonic → turgid; isotonic → flaccid; hypertonic → plasmolysis. Imbibition: absorption of water by colloids with swelling.",
          ],
        },
      ],
      flashcards: [
        { front: "Water potential of pure water", back: "Zero (at standard temperature, not under pressure)." },
        { front: "Components of water potential", back: "Ψw = Ψs + Ψp." },
        { front: "Sign of solute potential", back: "Always negative." },
        { front: "What are porins?", back: "Proteins forming large pores in the outer membranes of plastids, mitochondria and some bacteria." },
        { front: "Symport vs antiport", back: "Symport: two molecules cross in the same direction. Antiport: in opposite directions." },
        { front: "What fills the space between wall and protoplast in a plasmolysed cell?", back: "The external solution, since the cell wall is freely permeable." },
        { front: "Define imbibition.", back: "Absorption of water by solid colloids, causing a great increase in volume." },
        { front: "Which form of transport can move substances uphill?", back: "Active transport, using ATP." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which feature is shared by facilitated diffusion and active transport but not simple diffusion?",
          options: ["Needs ATP", "Uphill movement", "Needs membrane proteins", "No selectivity"],
          answer: 2,
          explain: "Both use membrane proteins; only active transport needs ATP and moves uphill.",
        },
        {
          kind: "numeric",
          q: "Cell X has Ψs = −0.8 MPa and Ψp = 0.2 MPa. What is its Ψw (MPa)?",
          answer: -0.6,
          tolerance: 0.01,
          unit: "MPa",
          explain: "−0.8 + 0.2 = −0.6 MPa.",
        },
        {
          kind: "truefalse",
          q: "A plant cell placed in pure water bursts like a red blood cell.",
          answer: false,
          explain: "The rigid cell wall resists expansion; the cell becomes turgid but does not burst.",
        },
        {
          kind: "mcq",
          q: "Swelling of dry seeds when soaked is mainly due to:",
          options: ["Active transport", "Imbibition", "Plasmolysis", "Transpiration"],
          answer: 1,
          explain: "Seed colloids absorb water by imbibition and swell greatly.",
        },
        {
          kind: "mcq",
          q: "Osmotic pressure and osmotic potential are:",
          options: [
            "Equal in magnitude and sign",
            "Equal in magnitude but opposite in sign",
            "Unrelated",
            "Both always positive",
          ],
          answer: 1,
          explain: "Osmotic pressure is the positive pressure that stops osmosis; osmotic potential is the same number with a negative sign.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which affect the rate of simple diffusion?",
          options: ["Concentration gradient", "Membrane permeability", "Temperature", "ATP supply"],
          answers: [0, 1, 2],
          explain: "Diffusion is passive; ATP is not involved. Pressure also affects it.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Cell P (Ψw = −0.4 MPa) touches cell Q (Ψw = −0.7 MPa). Water moves:",
          options: ["From Q to P", "From P to Q", "Equally both ways", "Not at all"],
          answer: 1,
          explain: "From higher (−0.4) to lower (−0.7) water potential.",
        },
      ],
    },
    /* ---------------- Lesson 2: water absorption, ascent of sap, transpiration ---------------- */
    {
      slug: "c11-bio-tp-water-transpiration",
      title: "Water Absorption, Ascent of Sap and Transpiration",
      summary:
        "How roots absorb water through the apoplast and symplast, root pressure and guttation, the cohesion–tension–transpiration pull model, stomatal opening, factors affecting transpiration and its uses to the plant.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "A single maize plant can take up about 3 litres of water in a day. Water enters mainly through **root hairs**, thin extensions of epidermal cells that greatly increase the absorbing surface. It moves mostly by diffusion into the root, then crosses the root cortex by two pathways.",
        },
        {
          type: "table",
          headers: ["Feature", "Apoplast pathway", "Symplast pathway"],
          rows: [
            ["Route", "Through cell walls and intercellular spaces (non-living)", "Through cytoplasm of cells linked by plasmodesmata"],
            ["Crosses membranes?", "No", "Yes, at entry into the first cell"],
            ["Speed", "Fast; moves by mass flow", "Slower; aided by cytoplasmic streaming"],
            ["Blocked at", "Endodermis, by the **Casparian strip**", "Continues into the stele"],
          ],
        },
        {
          type: "text",
          md: "Most water flow in the cortex is apoplastic, because the cortical cells are loosely packed. At the **endodermis**, a band of **suberin** in the cell walls, the **Casparian strip**, is impervious to water. So water must cross the plasma membrane and enter the symplast, which lets the plant control what reaches the xylem. Beyond the endodermis water may move by either path into the xylem.\n\nSome plants get water and minerals with the help of **mycorrhiza**, a symbiosis of a fungus with the root. *Pinus* seeds cannot germinate and establish without mycorrhizae.",
        },
        {
          type: "text",
          md: "**Root pressure.** Ions are actively transported into the root xylem, and water follows by osmosis, raising pressure inside. This positive pressure can push water a modest height. It is seen when a stem is cut close to the soil on a humid day: sap oozes out. At night and early morning, when transpiration is low, excess water collects as droplets around special openings of veins near the tips of grass blades and leaves of many herbaceous plants: **guttation**. Root pressure gives only a small push; it is not the main force in tall trees, but it may help re-establish continuous water columns in the xylem that break under tension.",
        },
        {
          type: "heading",
          text: "The cohesion–tension–transpiration pull model",
        },
        {
          type: "text",
          md: "Less than **1%** of the water reaching the leaves is used in photosynthesis and growth; most is lost through stomata. Water is not pushed up a tree; it is **pulled**. As water evaporates from the thin film over mesophyll cell walls, more water is drawn from the xylem. This pull is transmitted down an unbroken column of water because of:\n\n- **Cohesion**: mutual attraction between water molecules;\n- **Adhesion**: attraction of water to polar surfaces such as tracheary element walls;\n- **Surface tension**: water molecules attract each other more in the liquid than in the gas phase.\n\nThese give water high **tensile strength** and high **capillarity** in the thin tracheids and vessels.",
        },
        {
          type: "formula",
          tex: t`\Psi_{\text{soil}} > \Psi_{\text{root}} > \Psi_{\text{stem xylem}} > \Psi_{\text{leaf}} > \Psi_{\text{air}}`,
          caption: "Water flows down a gradient of water potential from soil to air; the largest drop is from leaf to dry air.",
        },
        {
          type: "text",
          md: "**Transpiration** is the evaporative loss of water by plants, mainly through **stomata**, which also allow exchange of O₂ and CO₂. Stomata open when the **guard cells become turgid**. The outer walls of guard cells (away from the pore) are thin; the inner walls (towards the pore) are thick and elastic. When turgor rises, the outer walls bulge out and pull the inner walls into a crescent shape. **Cellulose microfibrils** in the walls are oriented **radially** rather than longitudinally, which makes opening easier. When guard cells lose water, the elastic inner walls regain their shape and the pore closes. Dorsiventral (dicot) leaves usually have more stomata on the **lower** surface; isobilateral (monocot) leaves have about the same on both.",
        },
        {
          type: "table",
          headers: ["Factors affecting transpiration", "Examples"],
          rows: [
            ["External", "Temperature, light, humidity, wind speed"],
            ["Plant", "Number and distribution of stomata, percentage of stomata open, water status of the plant, canopy structure"],
          ],
        },
        {
          type: "list",
          items: [
            "Creates the **transpiration pull** for absorption and transport of water.",
            "Supplies water for photosynthesis.",
            "Carries minerals from the soil to all parts of the plant.",
            "**Cools leaf surfaces**, sometimes by 10–15 degrees, by evaporative cooling.",
            "Keeps cells turgid, maintaining the shape and structure of the plant.",
          ],
        },
        {
          type: "example",
          title: "Following the gradient",
          problem: "Typical values on a dry afternoon: soil −0.3 MPa, root xylem −0.6 MPa, leaf cells −1.5 MPa, outside air about −95 MPa. Where is the largest drop, and what happens if humidity rises to near 100%?",
          steps: [
            "Each step down is more negative, so water moves soil → root → leaf → air.",
            "Drops: soil to root 0.3 MPa; root to leaf 0.9 MPa; leaf to air about 93.5 MPa. The largest is leaf to air.",
            "Near 100% humidity the air's water potential rises close to zero, the leaf-to-air gradient collapses and transpiration slows sharply.",
          ],
          answer: "The steepest drop is from leaf to air, which drives the pull; humid air reduces transpiration by removing that gradient.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Guard cells open the stomatal pore when they:",
              options: ["Lose water and become flaccid", "Gain water and become turgid", "Lose their chloroplasts", "Become plasmolysed"],
              answer: 1,
              explain: "Turgid guard cells bulge outward and pull the thick inner walls apart.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Root pressure pushes water to the top of tall trees.",
          right: "The main force in tall trees is the transpiration pull; root pressure gives only a modest push.",
          why: "Root pressure is easy to see as oozing sap, so it seems powerful. It is absent or low in many trees and cannot support columns tens of metres tall.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Trace a water molecule from soil to air.",
            items: ["Soil water", "Root hair", "Root cortex", "Endodermis", "Xylem of root and stem", "Leaf mesophyll and stomata"],
            explain: "Water enters root hairs, crosses the cortex mostly by the apoplast, is forced into the symplast at the endodermis, rises in xylem and evaporates from mesophyll through stomata.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Apoplast: walls and spaces, fast, blocked by the Casparian strip; symplast: through cytoplasm and plasmodesmata.",
            "Root pressure: active ion uptake into xylem; seen as exudation and guttation; minor in tall trees.",
            "Cohesion, adhesion and surface tension let transpiration pull water up the xylem.",
            "Stomata open when guard cells are turgid; radial microfibrils help; transpiration cools leaves and carries minerals.",
          ],
        },
      ],
      flashcards: [
        { front: "What blocks the apoplast at the endodermis?", back: "The Casparian strip, a band of suberin in the cell walls." },
        { front: "What is guttation?", back: "Loss of water as droplets through special openings of veins near leaf tips, at night or early morning, due to root pressure." },
        { front: "Three properties of water used in the transpiration pull", back: "Cohesion, adhesion and surface tension." },
        { front: "Share of water reaching leaves used in photosynthesis and growth", back: "Less than 1%." },
        { front: "Orientation of cellulose microfibrils in guard cells", back: "Radial, which makes the stomata easier to open." },
        { front: "Which plant's seeds need mycorrhiza to establish?", back: "*Pinus*." },
        { front: "By how much can transpiration cool leaves?", back: "Sometimes by 10–15 degrees." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which pathway of water movement does not cross any membrane until the endodermis?",
          options: ["Symplast", "Apoplast", "Vacuolar", "Phloem"],
          answer: 1,
          explain: "The apoplast is the non-living continuum of walls and spaces.",
        },
        {
          kind: "mcq",
          q: "Guttation is best explained by:",
          options: ["Transpiration pull", "Root pressure", "Imbibition", "Plasmolysis"],
          answer: 1,
          explain: "Root pressure forces water out of vein endings when transpiration is low.",
        },
        {
          kind: "truefalse",
          q: "Dorsiventral dicot leaves usually have more stomata on the lower surface.",
          answer: true,
          explain: "Isobilateral monocot leaves have roughly equal numbers on both surfaces.",
        },
        {
          kind: "multi",
          q: "Which are functions of transpiration?",
          options: ["Cooling the leaf surface", "Transporting minerals upwards", "Keeping cells turgid", "Loading sucrose into phloem"],
          answers: [0, 1, 2],
          explain: "Sucrose loading is active transport in the phloem, not a function of transpiration.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which factor would REDUCE the rate of transpiration?",
          options: ["Higher temperature", "Higher wind speed", "Higher humidity", "More stomata open"],
          answer: 2,
          explain: "Humid air reduces the water potential gradient between leaf and air.",
        },
        {
          kind: "fill",
          q: "The mutual attraction between water molecules is called ___.",
          answer: ["cohesion"],
          explain: "Attraction to other polar surfaces is adhesion.",
        },
        {
          kind: "mcq",
          q: "In guard cells, the wall facing the pore is:",
          options: ["Thin and inelastic", "Thick and elastic", "Absent", "Made of suberin"],
          answer: 1,
          explain: "The thick, elastic inner wall is pulled into a crescent when the thin outer wall bulges.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Lesson 3: minerals and phloem ---------------- */
    {
      slug: "c11-bio-tp-minerals-phloem",
      title: "Uptake of Minerals and Phloem Transport",
      summary:
        "Why minerals are taken up actively, the endodermis as a control point, translocation and remobilisation of minerals, source and sink, and the pressure flow (mass flow) hypothesis with the girdling experiment.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Unlike water, most minerals cannot enter roots passively. Two reasons: minerals are present in soil as **charged ions** that cannot cross membranes freely, and their concentration in the soil is usually **lower** than in the root. So most minerals enter root cells by **active absorption**, using ATP. Specific proteins in the membranes of root hair cells actively pump ions from the soil into the cytoplasm of epidermal cells.\n\nTransport proteins of the **endodermal** cells are control points: they adjust the quantity and types of solutes that reach the xylem. Because of its suberin layer, the endodermis can actively move ions in **one direction only**.",
        },
        {
          type: "text",
          md: "**Translocation of mineral ions.** Once in the xylem, ions are carried up in the **transpiration stream**. The chief sinks are the growing regions (apical and lateral meristems), young leaves, developing flowers, fruits and seeds, and storage organs. Ions are unloaded at the fine vein endings by diffusion and active uptake.\n\nMinerals are often **remobilised** from older, senescing parts to younger leaves, especially **nitrogen, phosphorus, sulphur and potassium**. Structural elements such as **calcium** are not remobilised. Xylem sap carries some nitrogen as inorganic ions, but much as amino acids and related compounds; small amounts of P and S travel as organic compounds.",
        },
        {
          type: "heading",
          text: "Phloem transport: from source to sink",
        },
        {
          type: "text",
          md: "Food, mainly **sucrose**, is moved by the phloem from a **source** (where it is made or released, usually mature leaves) to a **sink** (where it is used or stored). Source and sink can swap: in early spring, sugar stored in roots is sent to the opening buds, so the root becomes a source. Hence phloem transport is **bidirectional**, unlike the one-way flow in xylem. Phloem sap is mainly water and sucrose, with other sugars, hormones and amino acids.",
        },
        {
          type: "table",
          headers: ["Feature", "Xylem", "Phloem"],
          rows: [
            ["Main contents", "Water and mineral ions", "Sucrose, amino acids, hormones, water"],
            ["Direction", "Upward only", "Up and down (source to sink)"],
            ["Driving force", "Transpiration pull (and root pressure)", "Pressure gradient set up by active loading and unloading"],
            ["Conducting cells", "Dead tracheids and vessels", "Living sieve tube cells with companion cells"],
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            "At the source, glucose made in photosynthesis is converted to **sucrose**.",
            "Sucrose is moved into companion cells and then into sieve tube cells by **active transport** (phloem loading).",
            "The sieve tube becomes hypertonic, so **water enters from the nearby xylem by osmosis**.",
            "Osmotic pressure builds up and the sap moves by **mass flow** towards areas of lower pressure.",
            "At the sink, sucrose is **actively transported out** of the phloem and used or stored (for example as starch or cellulose).",
            "As sugar leaves, the phloem's water potential rises and **water moves out**, lowering pressure at the sink end.",
          ],
        },
        {
          type: "text",
          md: "This is the **pressure flow (mass flow) hypothesis**. Sieve tubes form long columns with holes in their end walls, the **sieve plates**; cytoplasmic strands pass through these holes, forming continuous filaments. Loading and unloading cost energy, but the flow along the tube itself is driven by the pressure difference.",
        },
        {
          type: "example",
          title: "The girdling experiment",
          problem: "A ring of bark down to the wood is carefully removed from a tree trunk. After a few weeks the bark just above the ring swells, while the leaves stay green for a long time. Explain both observations.",
          steps: [
            "Bark includes phloem; the wood (xylem) is left intact.",
            "Food moving down in phloem cannot cross the ring, so it piles up above it and the bark there swells.",
            "Xylem is intact, so water still reaches the leaves and they stay green; the roots below slowly starve and the tree eventually dies.",
          ],
          answer: "Phloem carries food downward; removing it blocks sugar transport, while xylem continues to supply water.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In the pressure flow model, water enters the sieve tube at the source because:",
              options: [
                "Sucrose loading makes the sieve tube hypertonic",
                "Root pressure pushes it in",
                "The sieve tube is dead",
                "Transpiration pulls it in",
              ],
              answer: 0,
              explain: "Active loading of sucrose lowers the sieve tube's water potential; water follows by osmosis.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Phloem always carries food downward from leaves to roots.",
          right: "Phloem carries food from source to sink in either direction, and source and sink can change with season.",
          why: "Textbook diagrams show leaves at the top and roots at the bottom. But young leaves, buds and fruits above a leaf are sinks too, and storage roots become sources in spring.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does this step need energy (active) or not (passive)?",
            groups: ["Active (uses ATP)", "Passive"],
            items: [
              { text: "Loading sucrose into sieve tubes at the source", group: 0, hint: "Sucrose is pumped against its gradient." },
              { text: "Water entering the sieve tube at the source", group: 1, hint: "It follows by osmosis." },
              { text: "Mass flow of sap along the sieve tube", group: 1, hint: "It is driven by a pressure difference." },
              { text: "Unloading sucrose at the sink", group: 0, hint: "Sucrose is actively moved out." },
              { text: "Uptake of most mineral ions by root hairs", group: 0, hint: "Ions are charged and less concentrated in soil." },
              { text: "Water moving up the xylem", group: 1, hint: "Pulled by transpiration." },
            ],
            explain: "Energy is spent where solutes are pumped across membranes; water and bulk sap move passively down pressure or water potential gradients.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Most minerals are absorbed actively; endodermal transport proteins control what enters the xylem.",
            "Ions travel up in the transpiration stream; N, P, S, K are remobilised from old leaves, Ca is not.",
            "Phloem moves sucrose from source to sink in both directions.",
            "Pressure flow: active loading → water enters by osmosis → mass flow → active unloading at the sink; girdling shows phloem carries food.",
          ],
        },
      ],
      flashcards: [
        { front: "Two reasons minerals are absorbed actively", back: "They are charged ions that cannot freely cross membranes, and their concentration in soil is lower than in the root." },
        { front: "Which elements are readily remobilised?", back: "Nitrogen, phosphorus, sulphur and potassium." },
        { front: "Which element is not remobilised and why?", back: "Calcium, because it is a structural component." },
        { front: "Main sugar transported in phloem", back: "Sucrose." },
        { front: "Define source and sink.", back: "Source: where food is made or released. Sink: where food is used or stored." },
        { front: "Other name for the pressure flow hypothesis", back: "Mass flow hypothesis." },
        { front: "What does the girdling experiment show?", back: "Phloem (in the bark) is the tissue that carries food; food piles up above the ring." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Phloem transport is described as bidirectional because:",
          options: [
            "Water moves both ways in xylem",
            "Source and sink can be above or below and can swap",
            "Sieve plates have pores",
            "Companion cells are living",
          ],
          answer: 1,
          explain: "Sap flows from wherever the source is to wherever the sink is.",
        },
        {
          kind: "truefalse",
          q: "The movement of sap along the sieve tube itself needs ATP at every point.",
          answer: false,
          explain: "Loading and unloading need ATP; bulk flow along the tube is driven by pressure.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Deficiency symptoms of calcium appear first in young leaves because calcium is:",
          options: ["Highly mobile", "Not remobilised from older tissues", "Absorbed as an anion", "Stored in vacuoles of young leaves"],
          answer: 1,
          explain: "Calcium is structural and stays where it was laid down, so new growth suffers first.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order the steps of phloem transport by pressure flow.",
          items: [
            "Glucose converted to sucrose at the source",
            "Sucrose actively loaded into sieve tubes",
            "Water enters from xylem by osmosis",
            "Sap moves by mass flow towards the sink",
            "Sucrose actively unloaded at the sink",
          ],
          explain: "Loading creates high pressure at the source; unloading lowers it at the sink, so sap flows between them.",
        },
        {
          kind: "mcq",
          q: "After girdling a tree, the bark swells:",
          options: ["Below the ring", "Above the ring", "Only in the roots", "Nowhere"],
          answer: 1,
          explain: "Food moving down accumulates above the ring.",
        },
        {
          kind: "multi",
          q: "Which are chief sinks for mineral ions?",
          options: ["Apical and lateral meristems", "Young leaves", "Developing fruits and seeds", "Old senescing leaves"],
          answers: [0, 1, 2],
          explain: "Senescing leaves are sources of remobilised minerals, not sinks.",
        },
        {
          kind: "fill",
          q: "The end walls of sieve tube elements with holes are called sieve ___.",
          answer: ["plates", "plate"],
          explain: "Cytoplasmic strands pass through the sieve plates.",
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-tp-exam-edge",
      title: "Exam edge: Transport in Plants",
      summary:
        "For ISC and for anyone using older NEET and KCET papers: water potential calculations, comparing transport types, apoplast and symplast, the cohesion–tension model, stomatal mechanics and pressure flow, with statement, assertion–reason and numeric practice.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**Which exams?** ISC examines this chapter in full. The current NEET and KCET syllabi follow the rationalised NCERT book, which dropped it, but older NEET papers (up to 2023) and KCET papers gave it 1–2 questions a year, so past-paper practice still includes it. Check your own exam's latest syllabus. The questions are mainly water potential numbers, transport-type tables and NCERT-style statements.",
        },
        {
          type: "list",
          items: [
            "Old NCERT line: Ψw of pure water is **zero**; Ψs is always **negative**.",
            "Old NCERT line: porins are in the **outer membranes** of plastids, mitochondria and some bacteria.",
            "Old NCERT line: less than **1%** of water reaching leaves is used in photosynthesis and growth.",
            "Old NCERT line: transpiration can cool leaves by **10–15 degrees**.",
            "Old NCERT line: C4 plants are about **twice as efficient** as C3 in conserving water; they lose about half as much water per CO₂ fixed.",
            "Old NCERT line: *Pinus* seeds cannot germinate and establish without **mycorrhiza**.",
          ],
        },
        {
          type: "table",
          headers: ["Shortcut", "Safe to use when"],
          rows: [
            ["Ψw = Ψs + Ψp, water to the less negative side", "Any two cells or a cell and a solution (ignore gravity in short distances)"],
            ["At incipient plasmolysis Ψp = 0, so Ψw = Ψs", "The protoplast has just started to leave the wall"],
            ["Fully turgid cell in pure water: Ψw = 0, so Ψp = −Ψs", "At equilibrium with pure water"],
            ["Only active transport is uphill and needs ATP", "Comparing the three transport types"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{At equilibrium: } \Psi_w(\text{cell}) = \Psi_w(\text{outside}) \quad\Rightarrow\quad \Psi_p = \Psi_w(\text{outside}) - \Psi_s(\text{cell})`,
          caption: "Use this to find the final turgor pressure after a cell is placed in a solution (assuming Ψs changes little).",
        },
        {
          type: "example",
          title: "NEET style: statement counting",
          problem: "How many are correct? (i) Facilitated diffusion can move a substance against its gradient. (ii) In antiport, two molecules move in opposite directions. (iii) The Casparian strip is made of suberin. (iv) Guttation happens mainly at noon. (v) Phloem loading is an active process.",
          steps: [
            "(i) Wrong: only active transport is uphill.",
            "(ii) Correct.",
            "(iii) Correct.",
            "(iv) Wrong: guttation occurs at night and early morning, when transpiration is low.",
            "(v) Correct.",
          ],
          answer: "Three: (ii), (iii) and (v).",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: Water can rise to the top of tall trees without the plant spending ATP on its movement in xylem. R: Transpiration from leaves creates a tension that is transmitted down a cohesive water column.",
          steps: [
            "A is true: ascent of sap in xylem is passive; the energy comes from the sun driving evaporation.",
            "R is true: cohesion and adhesion keep the column continuous so the pull reaches the roots.",
            "R explains A.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Chain of three cells",
          problem: "Cells P, Q and R are in a row. P: Ψs = −1.0, Ψp = 0.6. Q: Ψs = −0.9, Ψp = 0.2. R: Ψs = −0.5, Ψp = 0.3 (all MPa). Find the direction of water flow.",
          steps: [
            "Ψw(P) = −1.0 + 0.6 = −0.4 MPa.",
            "Ψw(Q) = −0.9 + 0.2 = −0.7 MPa.",
            "Ψw(R) = −0.5 + 0.3 = −0.2 MPa.",
            "Water goes from higher to lower: R (−0.2) and P (−0.4) are both higher than Q (−0.7). Also R is higher than P.",
          ],
          answer: "Water flows into Q from both P and R; Q has the lowest water potential.",
        },
        {
          type: "example",
          title: "Harder: equilibrium turgor",
          problem: "A cell with Ψs = −1.2 MPa and Ψp = 0.4 MPa is placed (a) in pure water, (b) in a sucrose solution of Ψ = −1.2 MPa. Assuming Ψs barely changes, find the final Ψp in each case and describe the cell.",
          steps: [
            "Starting Ψw = −1.2 + 0.4 = −0.8 MPa.",
            "(a) Pure water has Ψw = 0, higher than −0.8, so water enters. At equilibrium Ψw = 0, so Ψp = 0 − (−1.2) = +1.2 MPa: fully turgid.",
            "(b) The solution's Ψ = −1.2 is lower than −0.8, so water leaves. At equilibrium Ψw = −1.2, so Ψp = −1.2 − (−1.2) = 0: the cell is at incipient plasmolysis.",
          ],
          answer: "(a) Ψp = 1.2 MPa, fully turgid. (b) Ψp = 0, incipient plasmolysis.",
        },
        {
          type: "mistake",
          wrong: "A cell with high turgor pressure must have a high water potential, so water always flows out of it.",
          right: "Water potential depends on both Ψs and Ψp. A turgid cell with very negative Ψs can still take water from a less turgid neighbour.",
          why: "Students compare only one component. Always add Ψs and Ψp before deciding the direction.",
        },
        {
          type: "mistake",
          wrong: "Porins are found in the plasma membrane of all plant cells.",
          right: "Porins are in the outer membranes of plastids, mitochondria and some bacteria.",
          why: "'Pores' sound like a general membrane feature. NEET used this exact location as a trap.",
        },
        {
          type: "mistake",
          wrong: "Stomata open because guard cells have thick outer walls that push them apart.",
          right: "The inner walls (facing the pore) are thick and elastic; the thin outer walls bulge as turgor rises, pulling the inner walls apart.",
          why: "It is easy to mix up which wall is thick. Picture the pore edge: thick and elastic, so it bends into a crescent rather than stretching.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each observation to its explanation.",
            pairs: [
              ["Sap oozes from a cut stem near soil on a humid day", "Root pressure"],
              ["Dry seeds crack a hard surface as they swell", "Imbibition"],
              ["Protoplast pulls away from the wall in salt solution", "Plasmolysis"],
              ["Bark above a removed ring swells", "Food blocked in phloem"],
              ["Leaf surface is cooler than the air on a hot day", "Evaporative cooling by transpiration"],
            ],
            explain: "Each classic observation points to one mechanism; exams turn these into match-the-column questions.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "A cell at incipient plasmolysis has Ψs = −0.75 MPa. What is its Ψw (MPa)?",
              answer: -0.75,
              tolerance: 0.01,
              unit: "MPa",
              explain: "At incipient plasmolysis Ψp = 0, so Ψw = Ψs = −0.75 MPa.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Add Ψs and Ψp before deciding flow; water moves to the more negative side.",
            "Incipient plasmolysis: Ψp = 0. Fully turgid in pure water: Ψw = 0, Ψp = −Ψs.",
            "Only active transport is uphill and uses ATP; facilitated diffusion is selective and saturates but is downhill.",
            "Xylem flow is passive (transpiration pull); phloem loading and unloading are active, flow is by pressure.",
          ],
        },
      ],
      flashcards: [
        { front: "Ψp at incipient plasmolysis", back: "Zero, so Ψw = Ψs." },
        { front: "Ψw of a fully turgid cell in pure water", back: "Zero; its Ψp equals −Ψs." },
        { front: "Is ascent of sap in xylem active or passive?", back: "Passive; driven by transpiration pull." },
        { front: "Which transport type shows saturation but needs no ATP?", back: "Facilitated diffusion." },
        { front: "When does guttation occur?", back: "At night and early morning, when transpiration is low and root pressure is high." },
        { front: "Water-use advantage of C4 plants", back: "They lose about half as much water as C3 plants per CO₂ fixed." },
        { front: "Which guard cell wall is thick and elastic?", back: "The inner wall, facing the pore." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Assertion (A): Mineral ions are mostly absorbed actively by roots. Reason (R): Mineral ions are usually more concentrated in the soil than in root cells.",
          options: AR,
          answer: 2,
          explain: "A is true, but R is false: ion concentration in soil is usually lower than in the root, which is why uphill (active) transport is needed.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A cell has Ψs = −0.9 MPa and is in equilibrium with a solution of Ψ = −0.6 MPa. What is its Ψp (MPa)?",
          answer: 0.3,
          tolerance: 0.01,
          unit: "MPa",
          explain: "Ψp = Ψw − Ψs = −0.6 − (−0.9) = 0.3 MPa.",
          difficulty: 3,
          hint: "At equilibrium the cell's Ψw equals the solution's.",
        },
        {
          kind: "mcq",
          q: "Which statement about the symplast pathway is correct?",
          options: [
            "It never crosses a membrane",
            "It passes through plasmodesmata from cell to cell",
            "It is blocked by the Casparian strip",
            "It is faster than the apoplast",
          ],
          answer: 1,
          explain: "Symplastic water moves through cytoplasm linked by plasmodesmata; it is slower and is the route past the endodermis.",
        },
        {
          kind: "multi",
          q: "Which features are true of active transport?",
          options: ["Uses ATP", "Can be uphill", "Shows saturation", "Is non-selective"],
          answers: [0, 1, 2],
          explain: "Active transport is highly selective because it uses specific carrier proteins.",
        },
        {
          kind: "numeric",
          q: "Cells A (Ψs = −0.7, Ψp = 0.1 MPa) and B (Ψs = −0.4, Ψp = 0.0 MPa) are in contact. By how much (MPa) does B's Ψw exceed A's?",
          answer: 0.2,
          tolerance: 0.01,
          unit: "MPa",
          explain: "Ψw(A) = −0.6, Ψw(B) = −0.4; difference 0.2 MPa, so water flows from B to A.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "The cohesion–tension theory needs a continuous water column. What helps re-establish broken columns?",
          options: ["Guttation", "Root pressure", "Phloem loading", "Imbibition by bark"],
          answer: 1,
          explain: "Root pressure may refill and reconnect xylem columns that break under tension.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "If a plant cell is placed in an isotonic solution it will become:",
          options: ["Turgid", "Flaccid", "Plasmolysed", "Burst"],
          answer: 1,
          explain: "No net water movement; the cell is flaccid.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Mineral Nutrition (ISC; removed from rationalised NCERT)            */
/* ------------------------------------------------------------------ */
const mineralNutrition: Topic = {
  slug: "c11-bio-mineral-nutrition",
  title: "Mineral Nutrition",
  icon: "🧂",
  description:
    "For ISC (and older NEET and KCET papers): hydroponics, criteria of essentiality, macro- and micronutrients and their roles, deficiency symptoms and toxicity, mineral absorption, the nitrogen cycle, biological nitrogen fixation, root nodules and the fate of ammonia.",
  lessons: [
    /* ---------------- Lesson 1: essential elements ---------------- */
    {
      slug: "c11-bio-mn-essential-elements",
      title: "Hydroponics and Essential Elements",
      summary:
        "How hydroponics identified the essential elements, the three criteria of essentiality, macronutrients, micronutrients and beneficial elements, and the four functional groups of essential elements.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "callout",
          tone: "note",
          title: "Board note",
          md: "This chapter was **removed from the rationalised NCERT book**, so CBSE and Karnataka I PUC do not examine it. **ISC Class 11** includes it under Plant Physiology. Older NEET and KCET papers asked it often, and its facts (Mg in chlorophyll, Mn and Cl in water splitting, Mo in nitrogenase) appear in other chapters.",
        },
        {
          type: "text",
          md: "Lettuce grown in rooftop farms in Bengaluru and Delhi often never touches soil. Its roots hang in a tank of nutrient solution. Growing plants in a nutrient solution without soil is **hydroponics**. **Julius von Sachs** showed in **1860** that plants could be grown to maturity this way.\n\nHydroponics was the key method for finding which elements plants need. Plants are grown in purified water with known mineral salts; one element is left out or replaced, and the plant is watched for abnormal growth. Today hydroponics is used commercially for **tomato, seedless cucumber and lettuce**. The solution must be **aerated** for best growth.",
        },
        {
          type: "text",
          md: "More than 60 of the 105 or so known elements have been found in plants, some only because they are present near the roots. Only some are **essential**. An element is essential if it meets all three criteria:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "It is **absolutely necessary** for normal growth and reproduction; without it the plant cannot complete its life cycle or set seed.",
            "Its requirement is **specific**: no other element can replace it, and its deficiency is corrected only by supplying that element.",
            "It is **directly involved in metabolism** of the plant.",
          ],
        },
        {
          type: "table",
          headers: ["Group", "Amount in plant tissue", "Elements"],
          rows: [
            ["Macronutrients (9)", "More than 10 mmol per kg of dry matter", "C, H, O, N, P, K, S, Ca, Mg"],
            ["Micronutrients (8)", "Less than 10 mmol per kg of dry matter", "Fe, Mn, Cu, Mo, Zn, B, Cl, Ni"],
            ["Beneficial elements", "Needed by some higher plants", "Na, Si, Co, Se"],
          ],
        },
        {
          type: "text",
          md: "C, H and O come mainly from CO₂ and water; the others are absorbed from the soil as mineral ions. So 17 elements are essential in all.",
        },
        {
          type: "table",
          headers: ["Functional group", "Examples"],
          rows: [
            ["Components of biomolecules, hence structural elements of cells", "C, H, O, N"],
            ["Components of energy-related compounds", "Mg in chlorophyll; P in ATP"],
            ["Activate or inhibit enzymes", "Mg²⁺ activates RuBisCO and PEP carboxylase; Zn²⁺ activates alcohol dehydrogenase; Mo is needed for nitrogenase"],
            ["Alter the osmotic potential of a cell", "K⁺ in the opening and closing of stomata"],
          ],
        },
        {
          type: "example",
          title: "Is it essential?",
          problem: "Pea plants grown hydroponically without element X grow poorly and form no seeds. Adding X restores normal growth; adding a chemically similar element Y does not. X is part of an enzyme. Is X essential?",
          steps: [
            "Without X the plant cannot complete its life cycle (no seeds): criterion 1 met.",
            "Only X, not Y, corrects the deficiency: criterion 2 (specific, irreplaceable) met.",
            "X is part of an enzyme, so it acts directly in metabolism: criterion 3 met.",
          ],
          answer: "Yes. X meets all three criteria of essentiality.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which of these is a micronutrient?",
              options: ["Magnesium", "Sulphur", "Boron", "Calcium"],
              answer: 2,
              explain: "Boron is a micronutrient; Mg, S and Ca are macronutrients.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Micronutrients are less essential than macronutrients because plants need so little of them.",
          right: "Micronutrients are just as essential; 'micro' refers only to the amount needed.",
          why: "Lack of a micronutrient such as Mo or Zn can stop growth or cause large crop losses even though the amount needed is tiny.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Macronutrient or micronutrient?",
            groups: ["Macronutrient", "Micronutrient"],
            items: [
              { text: "Potassium", group: 0, hint: "K⁺ is needed in large amounts for stomata and turgor." },
              { text: "Magnesium", group: 0, hint: "It sits in every chlorophyll molecule." },
              { text: "Sulphur", group: 0, hint: "Part of cysteine and methionine." },
              { text: "Molybdenum", group: 1, hint: "Needed only in traces, for nitrogenase." },
              { text: "Chlorine", group: 1, hint: "A trace element used in water splitting." },
              { text: "Nickel", group: 1, hint: "The eighth micronutrient." },
              { text: "Iron", group: 1, hint: "Needed more than other micronutrients, but still a micronutrient." },
            ],
            explain: "Macronutrients: C, H, O, N, P, K, S, Ca, Mg. Micronutrients: Fe, Mn, Cu, Mo, Zn, B, Cl, Ni.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A handy memory aid for micronutrients: the eight are Fe, Mn, Cu, Mo, Zn, B, Cl, Ni. Write the three criteria of essentiality in full sentences; 'necessary, specific, direct' alone may not earn full marks.",
        },
        {
          type: "keypoints",
          items: [
            "Hydroponics (von Sachs, 1860) identified essential elements; used for tomato, seedless cucumber, lettuce; needs aeration.",
            "Essential = absolutely necessary, specific (irreplaceable), directly involved in metabolism.",
            "9 macronutrients (> 10 mmol kg⁻¹ dry matter) and 8 micronutrients; beneficial: Na, Si, Co, Se.",
            "Functions: structural, energy compounds, enzyme activation, osmotic potential.",
          ],
        },
      ],
      flashcards: [
        { front: "Who first grew plants by hydroponics, and when?", back: "Julius von Sachs, in 1860." },
        { front: "Three crops grown commercially by hydroponics", back: "Tomato, seedless cucumber, lettuce." },
        { front: "Criteria of essentiality", back: "Absolutely necessary for growth and reproduction; requirement specific and irreplaceable; directly involved in metabolism." },
        { front: "The nine macronutrients", back: "C, H, O, N, P, K, S, Ca, Mg." },
        { front: "The eight micronutrients", back: "Fe, Mn, Cu, Mo, Zn, B, Cl, Ni." },
        { front: "Four beneficial elements", back: "Sodium, silicon, cobalt, selenium." },
        { front: "Enzymes activated by Mg²⁺", back: "RuBisCO and PEP carboxylase." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Macronutrients are generally present in plant tissues at:",
          options: ["Less than 10 mmol kg⁻¹ dry matter", "More than 10 mmol kg⁻¹ dry matter", "Exactly 1% of fresh weight", "Trace amounts only"],
          answer: 1,
          explain: "The cut-off is 10 mmol per kg of dry matter.",
        },
        {
          kind: "truefalse",
          q: "Sodium is an essential macronutrient for all plants.",
          answer: false,
          explain: "Sodium is a beneficial element, needed only by some plants.",
        },
        {
          kind: "mcq",
          q: "Which element alters osmotic potential and helps open and close stomata?",
          options: ["Zinc", "Potassium", "Molybdenum", "Iron"],
          answer: 1,
          explain: "K⁺ movement into and out of guard cells changes their turgor.",
        },
        {
          kind: "numeric",
          q: "How many elements are considered essential for plants?",
          answer: 17,
          explain: "9 macronutrients + 8 micronutrients = 17.",
        },
        {
          kind: "multi",
          q: "Which are beneficial elements?",
          options: ["Silicon", "Selenium", "Cobalt", "Copper"],
          answers: [0, 1, 2],
          explain: "Copper is an essential micronutrient.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Zn²⁺ is listed as an activator of:",
          options: ["Nitrogenase", "Alcohol dehydrogenase", "RuBisCO", "Catalase"],
          answer: 1,
          explain: "Zn²⁺ activates alcohol dehydrogenase; Mo is needed for nitrogenase, Mg²⁺ for RuBisCO, Fe for catalase.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Growing plants in a nutrient solution without soil is called ___.",
          answer: ["hydroponics"],
          explain: "From the Greek for 'water work'.",
        },
      ],
    },
    /* ---------------- Lesson 2: roles, deficiency, toxicity ---------------- */
    {
      slug: "c11-bio-mn-roles-deficiency",
      title: "Roles of Elements, Deficiency Symptoms and Toxicity",
      summary:
        "The forms in which each element is absorbed and its main roles, critical concentration, why mobile and immobile elements show symptoms in old or young leaves, the common deficiency symptoms, and manganese toxicity.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Farmers in Punjab who see yellowing on the older leaves of their wheat often suspect nitrogen shortage; growers of citrus in Maharashtra watch for zinc deficiency in young leaves. Reading such symptoms needs knowing what each element does and how mobile it is.",
        },
        {
          type: "table",
          headers: ["Macronutrient", "Absorbed as", "Main roles"],
          rows: [
            ["Nitrogen", "Mainly NO₃⁻; some NO₂⁻ or NH₄⁺", "Needed most by meristems and active cells; part of proteins, nucleic acids, vitamins and hormones"],
            ["Phosphorus", "H₂PO₄⁻ or HPO₄²⁻", "Part of membranes, some proteins, nucleic acids and nucleotides; needed for all phosphorylation reactions"],
            ["Potassium", "K⁺", "Abundant in meristems, buds, leaves, root tips; anion–cation balance, protein synthesis, stomatal opening and closing, enzyme activation, turgidity"],
            ["Calcium", "Ca²⁺", "Cell wall synthesis, especially **calcium pectate in the middle lamella**; mitotic spindle; accumulates in older leaves; membrane function; activates some enzymes"],
            ["Magnesium", "Mg²⁺", "Activates enzymes of respiration and photosynthesis and DNA and RNA synthesis; part of the **ring of chlorophyll**; maintains ribosome structure"],
            ["Sulphur", "SO₄²⁻", "In cysteine and methionine; in coenzymes and vitamins (thiamine, biotin, coenzyme A) and ferredoxin"],
          ],
        },
        {
          type: "table",
          headers: ["Micronutrient", "Absorbed as", "Main roles"],
          rows: [
            ["Iron", "Fe³⁺", "Needed in larger amounts than other micronutrients; in ferredoxin and cytochromes (Fe²⁺ ⇌ Fe³⁺ in electron transfer); activates catalase; needed for chlorophyll formation"],
            ["Manganese", "Mn²⁺", "Activates enzymes of photosynthesis, respiration and nitrogen metabolism; best known for **splitting of water** to release O₂"],
            ["Zinc", "Zn²⁺", "Activates enzymes, especially carboxylases; needed for **auxin synthesis**"],
            ["Copper", "Cu²⁺", "Overall metabolism; in redox enzymes (Cu⁺ ⇌ Cu²⁺)"],
            ["Boron", "BO₃³⁻ or B₄O₇²⁻", "Uptake and use of Ca²⁺, membrane function, **pollen germination**, cell elongation and differentiation, carbohydrate translocation"],
            ["Molybdenum", "Molybdate ions (MoO₂²⁺)", "Part of **nitrogenase** and **nitrate reductase**"],
            ["Chlorine", "Cl⁻", "With Na⁺ and K⁺ sets solute concentration and anion–cation balance; needed for **water splitting** in photosynthesis"],
          ],
        },
        {
          type: "heading",
          text: "Deficiency symptoms",
        },
        {
          type: "text",
          md: "The concentration of an essential element below which growth is retarded is its **critical concentration**; below it, the element is said to be deficient. The visible changes are **deficiency symptoms**, and they vary from element to element.\n\nWhere symptoms appear first depends on **mobility**. Elements that are actively mobilised and moved to young tissues, such as **N, K and Mg**, show symptoms first in **older** leaves. Elements that are structural and not easily released, such as **S and Ca**, show symptoms first in **young** tissues.",
        },
        {
          type: "table",
          headers: ["Symptom", "Caused by deficiency of"],
          rows: [
            ["**Chlorosis** (loss of chlorophyll, yellowing)", "N, K, Mg, S, Fe, Mn, Zn, Mo"],
            ["**Necrosis** (death of tissue, especially leaf tissue)", "Ca, Mg, Cu, K"],
            ["Inhibition of cell division", "Lack or low level of N, K, S, Mo"],
            ["Delayed flowering", "Low levels of N, S, Mo"],
          ],
        },
        {
          type: "text",
          md: "The same deficiency can look different in different plants, and several deficiencies may occur together, so diagnosis needs care. Many crop losses come from micronutrient deficiency, which is why fertilisers carry both macro- and micronutrients.\n\n**Toxicity.** The range of a micronutrient between deficiency and toxicity is narrow. An ion concentration in tissue that reduces dry weight by about **10%** is considered toxic. **Manganese toxicity** shows as **brown spots surrounded by chlorotic veins**. Mn competes with Fe and Mg for uptake and with Mg for binding to enzymes, and it inhibits Ca translocation to the shoot apex. So excess Mn can cause deficiencies of **Fe, Mg and Ca**; what look like Mn toxicity symptoms may really be their deficiency symptoms.",
        },
        {
          type: "example",
          title: "Diagnosing from where symptoms appear",
          problem: "Plant P shows yellowing in its oldest leaves while young leaves stay green. Plant Q shows deformed, dying young leaves and shoot tips while older leaves look normal. Which elements are likely deficient in each?",
          steps: [
            "Old leaves first means the element is mobile: the plant moved it from old to young leaves. Candidates: N, K, Mg.",
            "Yellowing (chlorosis) fits all three; N is the commonest in field crops.",
            "Young tissues first means the element is immobile and structural. Candidates: Ca or S.",
            "Death of young tissue (necrosis) at tips points to Ca, which is needed for the middle lamella and the mitotic spindle.",
          ],
          answer: "P: a mobile element such as N, K or Mg. Q: an immobile element, most likely Ca (or S).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which element's deficiency first shows in young leaves?",
              options: ["Nitrogen", "Potassium", "Magnesium", "Calcium"],
              answer: 3,
              explain: "Calcium is immobile; N, K and Mg are mobile and show symptoms in older leaves.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Deficiency symptoms always appear first on the youngest leaves, since they are growing fastest.",
          right: "It depends on mobility: mobile elements (N, K, Mg) show first in older leaves; immobile ones (S, Ca) in younger tissues.",
          why: "Young leaves do need the most, but when an element is mobile the plant strips it from old leaves to feed them, so the old leaves suffer first.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match the element to its best-known role.",
            pairs: [
              ["Magnesium", "Central atom of chlorophyll"],
              ["Calcium", "Calcium pectate of the middle lamella"],
              ["Manganese", "Splitting of water in photosynthesis"],
              ["Zinc", "Needed for auxin synthesis"],
              ["Boron", "Pollen germination"],
              ["Molybdenum", "Part of nitrogenase and nitrate reductase"],
            ],
            explain: "Each element has one 'signature' role that exams ask about. Learn these first, then the others.",
          },
        },
        {
          type: "keypoints",
          items: [
            "N as NO₃⁻; P as H₂PO₄⁻/HPO₄²⁻; S as SO₄²⁻; Fe as Fe³⁺; B as BO₃³⁻ or B₄O₇²⁻.",
            "Signature roles: Mg chlorophyll, Ca middle lamella, Mn and Cl water splitting, Zn auxin, B pollen germination, Mo nitrogenase.",
            "Mobile N, K, Mg: symptoms in old leaves first; immobile S, Ca: young tissues first.",
            "Toxic level reduces dry weight by about 10%; excess Mn induces Fe, Mg and Ca deficiency.",
          ],
        },
      ],
      flashcards: [
        { front: "Main form in which nitrogen is absorbed", back: "Nitrate, NO₃⁻ (some NO₂⁻ or NH₄⁺)." },
        { front: "Element in the middle lamella", back: "Calcium, as calcium pectate." },
        { front: "Two elements needed for water splitting in photosynthesis", back: "Manganese and chlorine." },
        { front: "Which micronutrient is needed in the largest amount?", back: "Iron." },
        { front: "Define critical concentration.", back: "The concentration of an essential element below which plant growth is retarded." },
        { front: "Symptoms of manganese toxicity", back: "Brown spots surrounded by chlorotic veins." },
        { front: "Elements whose deficiency causes necrosis", back: "Ca, Mg, Cu, K." },
        { front: "Elements whose low level delays flowering", back: "N, S, Mo." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which element is needed for the synthesis of auxin?",
          options: ["Boron", "Zinc", "Copper", "Molybdenum"],
          answer: 1,
          explain: "Zinc is needed for auxin synthesis and activates carboxylases.",
        },
        {
          kind: "mcq",
          q: "Excess manganese in tissue can induce deficiency of:",
          options: ["N, P and K", "Fe, Mg and Ca", "Zn, Cu and B", "S, Cl and Mo"],
          answer: 1,
          explain: "Mn competes with Fe and Mg for uptake and Mg for enzyme binding, and inhibits Ca translocation to the shoot apex.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Sulphur is a component of thiamine, biotin and coenzyme A.",
          answer: true,
          explain: "Sulphur is in these vitamins and coenzymes and in ferredoxin.",
        },
        {
          kind: "multi",
          q: "Deficiency of which elements causes chlorosis?",
          options: ["N", "Mg", "Fe", "Ca"],
          answers: [0, 1, 2],
          explain: "Chlorosis: N, K, Mg, S, Fe, Mn, Zn, Mo. Calcium deficiency causes necrosis.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Boron is absorbed as:",
          options: ["B³⁺", "BO₃³⁻ or B₄O₇²⁻", "BH₄⁻", "B₂O₃"],
          answer: 1,
          explain: "Boron is taken up as borate ions.",
        },
        {
          kind: "fill",
          q: "Death of tissue, especially leaf tissue, is called ___.",
          answer: ["necrosis"],
          explain: "Chlorosis is yellowing; necrosis is tissue death.",
        },
        {
          kind: "mcq",
          q: "Older leaves of a crop turn yellow first. The likely deficient element is:",
          options: ["Calcium", "Sulphur", "Nitrogen", "Boron"],
          answer: 2,
          explain: "Nitrogen is mobile, so it is withdrawn from old leaves to young ones.",
        },
      ],
    },
    /* ---------------- Lesson 3: absorption and nitrogen metabolism ---------------- */
    {
      slug: "c11-bio-mn-nitrogen-metabolism",
      title: "Mineral Absorption and Nitrogen Metabolism",
      summary:
        "The passive and active phases of ion absorption, the nitrogen cycle with nitrification and denitrification, free-living and symbiotic nitrogen fixers, root nodule formation, nitrogenase and leghaemoglobin, and how ammonia becomes amino acids and amides.",
      minutes: 25,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "**Absorption of ions** happens in two phases. First, a **rapid, passive** uptake into the 'free space' or 'outer space' of cells, the **apoplast**. Then a **slow** uptake into the 'inner space', the **symplast**, which needs metabolic energy (active). Movement of ions is called **flux**: inward movement is **influx** and outward movement is **efflux**. Ions then travel in the xylem with the transpiration stream. Soil is the main reservoir of minerals, topped up with fertilisers.",
        },
        {
          type: "heading",
          text: "The nitrogen cycle",
        },
        {
          type: "text",
          md: "Plants need nitrogen in large amounts for proteins, nucleic acids and chlorophyll. Air is about 78% N₂, but the two atoms are joined by a very strong **triple bond (N≡N)**, so most organisms cannot use it. Converting N₂ to ammonia is **nitrogen fixation**.\n\n- **Natural and industrial fixation**: lightning and UV radiation convert N₂ to nitrogen oxides (NO, NO₂, N₂O); industrial combustion, forest fires, vehicle exhausts and power stations also release them.\n- **Ammonification**: decomposition of organic nitrogen of dead plants and animals into ammonia.\n- **Nitrification**: ammonia is oxidised to nitrite by *Nitrosomonas* and/or *Nitrococcus*, and nitrite to nitrate by *Nitrobacter*. These bacteria are **chemoautotrophs**. Plants absorb the nitrate and reduce it to ammonia in leaves.\n- **Denitrification**: nitrate in soil is reduced to N₂ by *Pseudomonas* and *Thiobacillus*.",
        },
        {
          type: "formula",
          tex: t`2\,\text{NH}_3 + 3\,\text{O}_2 \longrightarrow 2\,\text{NO}_2^- + 2\,\text{H}^+ + 2\,\text{H}_2\text{O} \qquad 2\,\text{NO}_2^- + \text{O}_2 \longrightarrow 2\,\text{NO}_3^-`,
          caption: "The two steps of nitrification: by Nitrosomonas/Nitrococcus (left) and Nitrobacter (right).",
        },
        {
          type: "table",
          headers: ["Biological nitrogen fixers", "Examples"],
          rows: [
            ["Free-living, aerobic", "*Azotobacter*, *Beijerinckia*"],
            ["Free-living, anaerobic", "*Rhodospirillum*"],
            ["Free-living cyanobacteria", "*Anabaena*, *Nostoc*"],
            ["Symbiotic with legume roots", "*Rhizobium* (rod-shaped) in alfalfa, sweet clover, sweet pea, lentil, garden pea, broad bean, clover"],
            ["Symbiotic with non-legume roots", "*Frankia* in *Alnus*"],
          ],
        },
        {
          type: "text",
          md: "The enzyme that reduces N₂, **nitrogenase**, occurs **only in prokaryotes**. Both *Rhizobium* and *Frankia* are free-living in soil but fix nitrogen only as symbionts in root nodules.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Rhizobia multiply around the root and attach to epidermal and root hair cells.",
            "The root hairs curl and the bacteria invade them.",
            "An **infection thread** carries the bacteria into the root cortex, where nodule formation begins.",
            "Bacteria are released from the thread into cells, which differentiate into specialised nitrogen-fixing cells.",
            "The nodule forms a **direct vascular connection** with the host for exchange of nutrients.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{N}_2 + 8\,e^- + 8\,\text{H}^+ + 16\,\text{ATP} \xrightarrow{\text{nitrogenase}} 2\,\text{NH}_3 + \text{H}_2 + 16\,\text{ADP} + 16\,\text{P}_i`,
          caption: "Ammonia is the first stable product of nitrogen fixation. The cost is 8 ATP per NH₃, supplied by respiration of the host cells.",
        },
        {
          type: "text",
          md: "**Nitrogenase** is a **Mo–Fe protein** and is highly sensitive to O₂; it needs anaerobic conditions. The nodule contains a pink oxygen scavenger, **leghaemoglobin**, which protects the enzyme. The bacteria live as aerobes when free in soil (where nitrogenase does not work) but are kept effectively anaerobic in the nodule during fixation.\n\n**Fate of ammonia.** At physiological pH ammonia becomes **NH₄⁺**, which is toxic and cannot accumulate. It is used at once:\n\n- **Reductive amination**: α-ketoglutaric acid + NH₄⁺ + NADPH → glutamate + H₂O + NADP, catalysed by glutamate dehydrogenase.\n- **Transamination**: the amino group of one amino acid (mainly glutamic acid) is transferred to the keto group of a keto acid, catalysed by **transaminase**, forming other amino acids.\n- **Amides**: **asparagine** and **glutamine** are formed from aspartic acid and glutamic acid by adding another amino group (the hydroxyl part of the acid is replaced by NH₂). Being richer in nitrogen, amides are transported in xylem. Nodules of some plants such as soybean export fixed nitrogen as **ureides**, which have a high N:C ratio.",
        },
        {
          type: "example",
          title: "Energy cost of fixation",
          problem: "A nodule fixes enough nitrogen to make 10 molecules of NH₃. How many molecules of N₂ are reduced and how much ATP is spent?",
          steps: [
            "Each N₂ gives 2 NH₃, so 10 NH₃ need 5 N₂.",
            "Each N₂ reduction uses 16 ATP: 5 × 16 = 80 ATP.",
            "Check: 8 ATP per NH₃ × 10 = 80 ATP.",
          ],
          answer: "5 N₂ reduced, using 80 ATP from the host's respiration.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Nitrite is oxidised to nitrate by:",
              options: ["Nitrosomonas", "Nitrobacter", "Pseudomonas", "Rhizobium"],
              answer: 1,
              explain: "Nitrosomonas/Nitrococcus make nitrite; Nitrobacter makes nitrate.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Leghaemoglobin supplies oxygen to nitrogenase, just as haemoglobin supplies oxygen to our cells.",
          right: "Leghaemoglobin is an oxygen scavenger: it binds O₂ to keep it away from nitrogenase, which O₂ inactivates.",
          why: "The 'haemoglobin' in the name suggests O₂ delivery. In the nodule its job is to keep free O₂ low around the enzyme.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put root nodule formation in order.",
            items: [
              "Rhizobia attach to root hairs",
              "Root hairs curl and are invaded",
              "Infection thread carries bacteria to the cortex",
              "Bacteria released into cortical cells",
              "Nodule links to the host's vascular tissue",
            ],
            explain: "Attachment, curling, infection thread, release and differentiation, then a vascular connection for nutrient exchange.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Ion absorption: fast passive phase into the apoplast, slow active phase into the symplast; influx and efflux.",
            "Nitrification: Nitrosomonas/Nitrococcus (NH₃ → NO₂⁻), Nitrobacter (NO₂⁻ → NO₃⁻); denitrification: Pseudomonas, Thiobacillus.",
            "Nitrogenase (Mo–Fe protein, prokaryotes only): N₂ + 8e⁻ + 8H⁺ + 16 ATP → 2NH₃ + H₂; leghaemoglobin scavenges O₂.",
            "NH₄⁺ is assimilated by reductive amination and transamination; asparagine and glutamine (and ureides in soybean) carry nitrogen in xylem.",
          ],
        },
      ],
      flashcards: [
        { front: "Two phases of ion absorption", back: "Fast passive uptake into the apoplast, then slow active uptake into the symplast." },
        { front: "Organisms that oxidise ammonia to nitrite", back: "*Nitrosomonas* and/or *Nitrococcus*." },
        { front: "Denitrifying bacteria", back: "*Pseudomonas* and *Thiobacillus*." },
        { front: "Free-living aerobic nitrogen fixers", back: "*Azotobacter* and *Beijerinckia*." },
        { front: "Nitrogen-fixing symbiont of *Alnus*", back: "*Frankia*." },
        { front: "Metals in nitrogenase", back: "Molybdenum and iron (Mo–Fe protein)." },
        { front: "ATP needed per NH₃ fixed", back: "8 ATP." },
        { front: "Two amides that transport nitrogen", back: "Asparagine and glutamine." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The first stable product of biological nitrogen fixation is:",
          options: ["Nitrate", "Nitrite", "Ammonia", "Glutamate"],
          answer: 2,
          explain: "Nitrogenase reduces N₂ to NH₃.",
        },
        {
          kind: "mcq",
          q: "Which is an anaerobic free-living nitrogen fixer?",
          options: ["Azotobacter", "Beijerinckia", "Rhodospirillum", "Frankia"],
          answer: 2,
          explain: "Rhodospirillum is free-living and anaerobic; Frankia is symbiotic.",
        },
        {
          kind: "numeric",
          q: "How many ATP molecules are used to fix 3 molecules of N₂?",
          answer: 48,
          explain: "16 ATP per N₂ × 3 = 48 ATP.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Nitrogenase is found in both prokaryotes and eukaryotes.",
          answer: false,
          explain: "Nitrogenase is present only in prokaryotes.",
        },
        {
          kind: "mcq",
          q: "In reductive amination, ammonium combines with:",
          options: ["Oxaloacetic acid", "α-ketoglutaric acid", "Pyruvic acid", "Aspartic acid"],
          answer: 1,
          explain: "α-ketoglutaric acid + NH₄⁺ + NADPH → glutamate (glutamate dehydrogenase).",
        },
        {
          kind: "multi",
          q: "Which are true of nitrification?",
          options: [
            "It is carried out by chemoautotrophic bacteria",
            "Nitrobacter converts nitrite to nitrate",
            "It converts nitrate to N₂",
            "Nitrosomonas converts ammonia to nitrite",
          ],
          answers: [0, 1, 3],
          explain: "Converting nitrate to N₂ is denitrification.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The pink oxygen scavenger in legume root nodules is ___.",
          answer: ["leghaemoglobin", "leghemoglobin", "leg-haemoglobin"],
          explain: "It protects nitrogenase from O₂.",
        },
        {
          kind: "mcq",
          q: "Why are amides rather than amino acids transported in xylem?",
          options: ["They contain more nitrogen", "They are insoluble", "They contain sulphur", "They are made only in leaves"],
          answer: 0,
          explain: "Amides such as asparagine and glutamine carry more nitrogen per molecule.",
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-mn-exam-edge",
      title: "Exam edge: Mineral Nutrition",
      summary:
        "For ISC and for anyone using older NEET and KCET papers: essential element lists, signature roles, mobility and symptom location, manganese toxicity, nitrogen-cycle organisms, nitrogenase stoichiometry and the fate of ammonia, with statement, assertion–reason and counting practice.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**Which exams?** ISC examines this chapter in full. Current NEET and KCET syllabi follow the rationalised NCERT book, which dropped it, but older NEET papers (up to 2023) and KCET papers gave it 1–2 questions a year. Check your exam's latest syllabus. Its facts also surface elsewhere: Mg in chlorophyll and RuBisCO activation, Mn and Cl in water splitting, nitrogen fixers in Microbes and Biofertilisers.",
        },
        {
          type: "list",
          items: [
            "Old NCERT line: hydroponics by **Julius von Sachs, 1860**.",
            "Old NCERT line: macronutrients are present at **more than 10 mmol kg⁻¹** of dry matter.",
            "Old NCERT line: Mg²⁺ activates **RuBisCO and PEPcase**; Zn²⁺ activates **alcohol dehydrogenase**.",
            "Old NCERT line: Fe is required in **larger amounts than other micronutrients**.",
            "Old NCERT line: a mineral level that reduces dry weight by **about 10%** is toxic.",
            "Old NCERT line: nitrogenase needs **8 ATP per NH₃**; it is a **Mo–Fe** protein.",
            "Old NCERT line: soybean nodules export nitrogen as **ureides**.",
          ],
        },
        {
          type: "table",
          headers: ["Shortcut", "Use it for"],
          rows: [
            ["Symptoms in old leaves first: N, K, Mg. Young tissues first: S, Ca", "Location of symptoms. (The transport chapter lists S among remobilised elements; for symptom questions follow the Mineral Nutrition chapter.)"],
            ["Water splitting needs Mn and Cl", "Any 'which element is needed for O₂ evolution' question"],
            ["Nitrogenase: 16 ATP per N₂ = 8 ATP per NH₃", "ATP counts; check whether the question asks per N₂ or per NH₃"],
            ["Nitrosomonas/Nitrococcus → nitrite; Nitrobacter → nitrate", "Order of nitrification (Nitro*so* before Nitro*bacter*)"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{ATP}_{\text{fixation}} = 16 \times n(\text{N}_2) = 8 \times n(\text{NH}_3)`,
          caption: "Plus 2 H⁺ and 2 e⁻ go into H₂ for every N₂ reduced.",
        },
        {
          type: "example",
          title: "NEET style: statement counting",
          problem: "How many are correct? (i) Ca is a component of the middle lamella. (ii) Mo is a part of nitrate reductase. (iii) Deficiency of Mg first appears in young leaves. (iv) Cl is needed for water splitting. (v) Leghaemoglobin is found in free-living Azotobacter.",
          steps: [
            "(i) Correct: calcium pectate.",
            "(ii) Correct: Mo is in nitrogenase and nitrate reductase.",
            "(iii) Wrong: Mg is mobile, so older leaves show symptoms first.",
            "(iv) Correct.",
            "(v) Wrong: leghaemoglobin is a feature of legume root nodules.",
          ],
          answer: "Three: (i), (ii) and (iv).",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: Root nodules of legumes contain leghaemoglobin. R: Nitrogenase is inactivated by oxygen.",
          steps: [
            "A is true: leghaemoglobin gives nodules their pink colour.",
            "R is true: nitrogenase needs anaerobic conditions.",
            "R explains why the nodule needs an oxygen scavenger.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "KCET style: counting electrons and ATP",
          problem: "For 12 molecules of NH₃ produced by nitrogenase, find the N₂ reduced, electrons used, ATP used and H₂ released.",
          steps: [
            "N₂ = 12 ÷ 2 = 6.",
            "Electrons = 8 per N₂ × 6 = 48.",
            "ATP = 16 × 6 = 96 (= 8 × 12).",
            "H₂ = 1 per N₂ = 6.",
          ],
          answer: "6 N₂, 48 electrons, 96 ATP and 6 H₂.",
        },
        {
          type: "example",
          title: "Harder: separating toxicity from deficiency",
          problem: "A crop on acidic soil shows brown spots surrounded by chlorotic veins, plus poor shoot-tip growth. Leaf analysis shows high Mn and low Fe, Mg and Ca. Explain the symptoms and suggest what is really going wrong.",
          steps: [
            "Brown spots with chlorotic veins are the signature of Mn toxicity.",
            "High Mn competes with Fe and Mg for uptake and with Mg for enzyme binding, so Fe and Mg fall: chlorosis.",
            "Mn also inhibits Ca translocation to the shoot apex: Ca is immobile, so the young tip suffers.",
            "So the visible damage is partly deficiency of Fe, Mg and Ca induced by excess Mn.",
          ],
          answer: "Excess Mn is toxic and induces Fe, Mg and Ca deficiency; correcting Mn levels (rather than simply adding Fe) addresses the cause.",
        },
        {
          type: "mistake",
          wrong: "Nitrosomonas makes nitrate and Nitrobacter makes nitrite.",
          right: "Nitrosomonas (and Nitrococcus) oxidise ammonia to nitrite; Nitrobacter oxidises nitrite to nitrate.",
          why: "Both names start with 'Nitro', so they are swapped. Remember 'so' comes before 'bacter', just as nitrite comes before nitrate.",
        },
        {
          type: "mistake",
          wrong: "Iron is a macronutrient because plants need more of it than any other micronutrient.",
          right: "Iron is still a micronutrient; it is simply the one needed in the largest amount among micronutrients.",
          why: "The phrase 'larger amounts' in NCERT tempts students to call Fe a macronutrient.",
        },
        {
          type: "mistake",
          wrong: "Frankia forms nodules on legume roots.",
          right: "Frankia forms nodules on non-legumes such as Alnus; Rhizobium nodulates legumes.",
          why: "Both are nodule-forming symbionts, and NEET options often swap them.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which role does each organism play in the nitrogen cycle?",
            groups: ["Fixes N₂", "Nitrification", "Denitrification"],
            items: [
              { text: "Rhizobium", group: 0, hint: "Lives in legume root nodules." },
              { text: "Anabaena", group: 0, hint: "A free-living cyanobacterium." },
              { text: "Nitrosomonas", group: 1, hint: "Ammonia to nitrite." },
              { text: "Nitrobacter", group: 1, hint: "Nitrite to nitrate." },
              { text: "Pseudomonas", group: 2, hint: "Returns nitrogen to the air." },
              { text: "Thiobacillus", group: 2, hint: "Reduces nitrate to N₂." },
            ],
            explain: "Fixers put N₂ into ammonia; nitrifiers turn ammonia into nitrate; denitrifiers return nitrate to N₂.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which pair of elements is needed for the splitting of water in photosynthesis?",
              options: ["Fe and Cu", "Mn and Cl", "Mg and Zn", "Mo and B"],
              answer: 1,
              explain: "Manganese and chlorine are both linked to O₂ evolution from water.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "17 essential elements; 9 macro (C H O N P K S Ca Mg), 8 micro (Fe Mn Cu Mo Zn B Cl Ni).",
            "Signature roles and absorbed forms are the most asked facts.",
            "Mobile N, K, Mg → old leaves; immobile Ca, S → young tissues; Mn excess induces Fe, Mg, Ca deficiency.",
            "Nitrogenase: Mo–Fe, O₂-sensitive, 16 ATP per N₂; leghaemoglobin scavenges O₂.",
          ],
        },
      ],
      flashcards: [
        { front: "ATP to make 6 NH₃ by nitrogenase", back: "48 ATP (8 per NH₃)." },
        { front: "Two activators named for Mg²⁺", back: "RuBisCO and PEP carboxylase." },
        { front: "Two enzymes containing Mo", back: "Nitrogenase and nitrate reductase." },
        { front: "Organism forming nodules on *Alnus*", back: "*Frankia*." },
        { front: "Form in which soybean nodules export nitrogen", back: "Ureides." },
        { front: "Toxicity threshold of a mineral", back: "A tissue level that reduces dry weight by about 10%." },
        { front: "Why does nitrogenase need an O₂ scavenger?", back: "It is inactivated by oxygen and needs anaerobic conditions." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Assertion (A): Deficiency symptoms of nitrogen appear first in older leaves. Reason (R): Nitrogen is an immobile element.",
          options: AR,
          answer: 2,
          explain: "A is true, but R is false: nitrogen is mobile and is moved from old leaves to young ones.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many electrons are needed to reduce 4 molecules of N₂ by nitrogenase (including H₂ formation)?",
          answer: 32,
          explain: "8 electrons per N₂ × 4 = 32.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which element is NOT a micronutrient?",
          options: ["Nickel", "Chlorine", "Magnesium", "Boron"],
          answer: 2,
          explain: "Magnesium is a macronutrient.",
        },
        {
          kind: "multi",
          q: "Which statements are correct?",
          options: [
            "Phosphorus is absorbed as H₂PO₄⁻ or HPO₄²⁻",
            "Zinc is needed for auxin synthesis",
            "Calcium is readily remobilised from old leaves",
            "Copper is involved in redox enzymes",
          ],
          answers: [0, 1, 3],
          explain: "Calcium is structural and immobile; it is not remobilised.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A nodule uses 160 ATP for nitrogen fixation. How many NH₃ molecules are formed?",
          answer: 20,
          explain: "8 ATP per NH₃: 160 ÷ 8 = 20.",
          difficulty: 3,
          hint: "Use the per-NH₃ cost, not the per-N₂ cost.",
        },
        {
          kind: "mcq",
          q: "Transamination in plants mainly uses which amino acid as the amino group donor?",
          options: ["Glycine", "Glutamic acid", "Alanine", "Asparagine"],
          answer: 1,
          explain: "Glutamic acid is the main donor; transaminase catalyses the transfer.",
        },
        {
          kind: "mcq",
          q: "Brown spots surrounded by chlorotic veins indicate:",
          options: ["Nitrogen deficiency", "Manganese toxicity", "Calcium deficiency", "Boron toxicity"],
          answer: 1,
          explain: "This is the NCERT description of manganese toxicity.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [transport, mineralNutrition, photosynthesis, respiration, plantGrowth];

export const links: Record<string, string | string[]> = {
  "11:Photosynthesis in Higher Plants": "c11-bio-photosynthesis",
  "11:Respiration in Plants": "c11-bio-respiration-in-plants",
  "11:Plant Growth and Development": "c11-bio-plant-growth-development",
  "11:Plant Physiology": [
    "c11-bio-transport-in-plants",
    "c11-bio-mineral-nutrition",
    "c11-bio-photosynthesis",
    "c11-bio-respiration-in-plants",
    "c11-bio-plant-growth-development",
  ],
};
