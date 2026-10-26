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

export const topics: Topic[] = [photosynthesis];

export const links: Record<string, string | string[]> = {
  "11:Photosynthesis in Higher Plants": "c11-bio-photosynthesis",
};
