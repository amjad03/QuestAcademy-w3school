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

export const topics: Topic[] = [photosynthesis, respiration];

export const links: Record<string, string | string[]> = {
  "11:Photosynthesis in Higher Plants": "c11-bio-photosynthesis",
  "11:Respiration in Plants": "c11-bio-respiration-in-plants",
};
