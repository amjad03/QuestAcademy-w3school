import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Hydrocarbons                                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "hydrocarbons",
    title: "Hydrocarbons",
    icon: "🛢️",
    description: "Alkanes, alkenes, alkynes and arenes: preparation, conformations, addition and substitution reactions, and aromaticity.",
    lessons: [
      {
        slug: "alkanes",
        title: "Alkanes: Preparation, Conformations and Reactions",
        summary: "Wurtz, Kolbe and decarboxylation routes, boiling-point trends, free-radical halogenation, combustion and the conformations of ethane.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "The LPG cylinder in an Indian kitchen holds mainly butane and propane; CNG autos in Delhi run on methane. Alkanes (CₙH₂ₙ₊₂) are saturated hydrocarbons in which every carbon is sp³ hybridised with bond angles of about 109.5°.",
          },
          { type: "heading", text: "Preparation" },
          {
            type: "table",
            headers: ["Method", "Reaction", "Note"],
            rows: [
              ["Hydrogenation", "Alkene / alkyne + H₂ (Pt, Pd or Ni) → alkane", "Ni needs higher temperature and pressure"],
              ["Wurtz reaction", "2R–X + 2Na → R–R + 2NaX (dry ether)", "Gives alkanes with double the carbons; cannot make methane"],
              ["Decarboxylation", "RCOONa + NaOH (CaO) → R–H + Na₂CO₃", "Product has **one carbon fewer**"],
              ["Kolbe electrolysis", "2RCOONa + 2H₂O → R–R + 2CO₂ + H₂ + 2NaOH", "Alkane forms at the anode"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Wurtz trap",
            md: "Using two **different** alkyl halides gives a mixture. CH₃Br + C₂H₅Br with Na gives ethane, propane **and** butane, which are hard to separate. So Wurtz is used only for symmetrical alkanes.",
          },
          { type: "heading", text: "Physical properties" },
          {
            type: "text",
            md: "Boiling point rises with chain length (stronger dispersion forces) and falls with branching (smaller surface area). Pentane isomers: n-pentane 309 K > isopentane 301 K > neopentane 282.5 K.",
          },
          { type: "heading", text: "Free-radical halogenation" },
          {
            type: "list",
            ordered: true,
            items: [
              "**Initiation:** $\\text{Cl}_2 \\xrightarrow{h\\nu} 2\\text{Cl}^\\bullet$",
              "**Propagation:** $\\text{CH}_4 + \\text{Cl}^\\bullet \\rightarrow \\text{CH}_3^\\bullet + \\text{HCl}$, then $\\text{CH}_3^\\bullet + \\text{Cl}_2 \\rightarrow \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$",
              "**Termination:** radicals combine, e.g. $\\text{CH}_3^\\bullet + \\text{CH}_3^\\bullet \\rightarrow \\text{C}_2\\text{H}_6$ (ethane traces prove the mechanism)",
            ],
          },
          {
            type: "text",
            md: "Reactivity of halogens: F₂ > Cl₂ > Br₂ > I₂; iodination is reversible and needs an oxidant such as HIO₃. Ease of H abstraction: 3° > 2° > 1°. Other reactions: **aromatisation** of n-hexane to benzene over Cr₂O₃/V₂O₅/Mo₂O₃ at 773 K, and **isomerisation** with anhydrous AlCl₃/HCl.",
          },
          {
            type: "formula",
            tex: t`\mathrm{C_4H_{10} + \tfrac{13}{2}O_2 \rightarrow 4CO_2 + 5H_2O}`,
            caption: "Combustion of butane in an LPG burner",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "What mass of CO₂ is released when 5.8 g of butane burns completely?",
              "Molar mass of C₄H₁₀ $= 48 + 10 = 58$ g/mol, so 5.8 g = 0.1 mol.",
              "Each mole gives 4 mol CO₂: 0.4 mol × 44 = **17.6 g CO₂**.",
            ],
          },
          {
            type: "text",
            md: "**Conformations of ethane.** Rotation about the C–C σ bond gives infinitely many conformations. The **staggered** form (H atoms as far apart as possible) is the most stable; the **eclipsed** form is highest in energy. The difference, the torsional strain, is only about 12.5 kJ/mol, so the forms interconvert freely at room temperature and cannot be isolated. They are drawn as sawhorse or Newman projections.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Sodium propanoate heated with soda lime gives:",
                options: ["Propane", "Ethane", "Butane", "Methane"],
                answer: 1,
                explain: "Decarboxylation removes one carbon: C₂H₅COONa → C₂H₆.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Wurtz doubles the chain; decarboxylation removes one carbon; Kolbe gives R–R.",
              "Branching lowers boiling point.",
              "Halogenation is a free-radical chain: initiation, propagation, termination.",
              "Staggered ethane is more stable than eclipsed by about 12.5 kJ/mol.",
            ],
          },
        ],
        flashcards: [
          { front: "Wurtz reaction", back: "2R–X + 2Na → R–R + 2NaX in dry ether" },
          { front: "Product of CH₃COONa + soda lime", back: "Methane (one carbon fewer)" },
          { front: "More stable conformation of ethane", back: "Staggered" },
          { front: "Torsional strain in ethane", back: "≈ 12.5 kJ/mol" },
          { front: "Highest-boiling pentane isomer", back: "n-Pentane (309 K)" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which pentane isomer has the highest boiling point?",
            options: ["Neopentane", "Isopentane", "n-Pentane", "All the same"],
            answer: 2,
            explain: "The unbranched chain has the largest surface area and strongest dispersion forces.",
          },
          {
            kind: "numeric",
            q: "Mass of CO₂ formed when 4.4 g of propane burns completely (in g)?",
            answer: 13.2,
            tolerance: 0.05,
            unit: "g",
            explain: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O; 4.4/44 = 0.1 mol → 0.3 mol CO₂ × 44 = 13.2 g.",
          },
          {
            kind: "truefalse",
            q: "The staggered conformation of ethane is more stable than the eclipsed one.",
            answer: true,
            explain: "Bond pairs are farthest apart, minimising torsional strain.",
          },
          {
            kind: "fill",
            q: "Decarboxylation of a sodium carboxylate with soda lime gives an alkane with one carbon ___ than the acid.",
            answer: ["fewer", "less"],
            explain: "The –COONa carbon leaves as Na₂CO₃.",
          },
          {
            kind: "order",
            q: "Put the steps of free-radical chlorination in order.",
            items: ["Initiation", "Propagation", "Termination"],
            explain: "Radicals are generated, the chain is carried, then radicals combine.",
          },
          {
            kind: "mcq",
            q: "A mixture of CH₃Br and C₂H₅Br treated with Na in dry ether gives:",
            options: ["Propane only", "Ethane and butane only", "Ethane, propane and butane", "Methane and ethane"],
            answer: 2,
            difficulty: 2,
            explain: "CH₃–CH₃, CH₃–C₂H₅ and C₂H₅–C₂H₅ all form.",
          },
        ],
      },
      {
        slug: "alkenes-alkynes",
        title: "Alkenes and Alkynes",
        summary: "Geometrical isomerism, preparation, Markovnikov and anti-Markovnikov addition, ozonolysis, tests for unsaturation and the acidity of terminal alkynes.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Alkenes (C=C, sp²) and alkynes (C≡C, sp) are unsaturated: their π electrons attract electrophiles, so **electrophilic addition** is their signature reaction. Ethene is the starting point of polythene; ethyne (acetylene) is the gas in a welder's torch.",
          },
          { type: "heading", text: "Preparation" },
          {
            type: "list",
            items: [
              "**From alkynes:** H₂ with Lindlar's catalyst (palladium partially deactivated with poisons such as quinoline or sulphur compounds) gives **cis**-alkenes; Na in liquid NH₃ gives **trans**-alkenes.",
              "**Dehydrohalogenation:** alkyl halide + alcoholic KOH → alkene (β-elimination).",
              "**Dehydration:** ethanol + conc. H₂SO₄ at 443 K → ethene.",
              "**Ethyne:** $\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2$.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Carbide-ripened mangoes",
            md: "Calcium carbide releases acetylene with moisture, which speeds ripening. The FSSAI has banned its use for ripening fruit because industrial carbide carries arsenic and phosphorus impurities.",
          },
          { type: "heading", text: "Markovnikov and the peroxide effect" },
          {
            type: "formula",
            tex: t`\mathrm{CH_3CH{=}CH_2 + HBr \rightarrow CH_3CHBrCH_3} \qquad \mathrm{CH_3CH{=}CH_2 + HBr \xrightarrow{(PhCO)_2O_2} CH_3CH_2CH_2Br}`,
            caption: "Left: Markovnikov (via the more stable 2° carbocation). Right: anti-Markovnikov (free radical, Kharasch effect)",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET / JEE trap",
            md: "The peroxide effect works **only with HBr**. With HCl the H–Cl bond is too strong, and with HI the I• radicals combine to I₂ rather than adding. So propene + HCl gives 2-chloropropane with or without peroxide.",
          },
          {
            type: "table",
            headers: ["Reagent", "Product from an alkene", "Use"],
            rows: [
              ["Br₂ in CCl₄ / bromine water", "Vicinal dibromide; red-brown colour vanishes", "Test for unsaturation"],
              ["Cold dilute alkaline KMnO₄ (Baeyer's reagent)", "Vicinal diol; purple colour vanishes", "Test for unsaturation"],
              ["O₃, then Zn/H₂O", "Aldehydes and / or ketones", "Locate the double bond"],
              ["Conc. H₂SO₄, then water", "Alcohol (Markovnikov)", "Industrial alcohols"],
            ],
          },
          { type: "heading", text: "Worked example: ozonolysis" },
          {
            type: "list",
            ordered: true,
            items: [
              "Predict the products of ozonolysis of 2-methylbut-2-ene, (CH₃)₂C=CHCH₃.",
              "Cut the C=C and put an =O on each carbon.",
              "Left fragment: (CH₃)₂C=O, **propanone**. Right fragment: CH₃CHO, **ethanal**.",
              "Working backwards from the carbonyl products is how examiners ask you to identify an unknown alkene.",
            ],
          },
          { type: "heading", text: "Alkynes: acidity and hydration" },
          {
            type: "text",
            md: "An sp carbon has 50% s character, so it holds electrons close and a terminal ≡C–H is weakly acidic: HC≡CH > CH₂=CH₂ > CH₃–CH₃. Terminal alkynes react with Na to give sodium acetylide and H₂, and give a white precipitate with ammoniacal AgNO₃ (Tollens' reagent). Hydration with dilute H₂SO₄ and HgSO₄ at 333 K turns ethyne into **ethanal** and propyne into **propanone**. Passing ethyne through a red-hot iron tube at 873 K trimerises it to **benzene**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Volume of ethyne (L, at STP) produced from 6.4 g of CaC₂ with excess water?",
                answer: 2.24,
                tolerance: 0.02,
                unit: "L",
                explain: "M(CaC₂) = 64 g/mol; 0.1 mol CaC₂ → 0.1 mol C₂H₂ = 2.24 L.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Lindlar → cis-alkene; Na/liquid NH₃ → trans-alkene.",
              "HX adds by Markovnikov's rule; HBr with peroxide adds anti-Markovnikov.",
              "Bromine water and Baeyer's reagent test for unsaturation; ozonolysis locates C=C.",
              "Terminal alkynes are acidic; hydration of alkynes gives carbonyl compounds.",
            ],
          },
        ],
        flashcards: [
          { front: "Lindlar's catalyst gives…", back: "cis-alkenes from alkynes" },
          { front: "Peroxide (Kharasch) effect applies to…", back: "HBr only" },
          { front: "Baeyer's reagent", back: "Cold, dilute alkaline KMnO₄ → vicinal diol" },
          { front: "Hydration of propyne", back: "Propanone (via enol)" },
          { front: "Ozonolysis of 2-methylbut-2-ene", back: "Propanone + ethanal" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Propene + HBr in the presence of benzoyl peroxide gives mainly:",
            options: ["2-Bromopropane", "1-Bromopropane", "1,2-Dibromopropane", "Propan-2-ol"],
            answer: 1,
            explain: "Free-radical addition puts Br on the terminal carbon (anti-Markovnikov).",
          },
          {
            kind: "numeric",
            q: "Volume of C₂H₂ at STP from 3.2 g of CaC₂ (in L)?",
            answer: 1.12,
            tolerance: 0.02,
            unit: "L",
            explain: "3.2/64 = 0.05 mol → 0.05 × 22.4 = 1.12 L.",
          },
          {
            kind: "truefalse",
            q: "Ethene gives a white precipitate with ammoniacal silver nitrate.",
            answer: false,
            explain: "Only terminal alkynes (acidic ≡C–H) do; ethene has no acidic hydrogen.",
          },
          {
            kind: "fill",
            q: "Partial hydrogenation of but-2-yne with Lindlar's catalyst gives ___-but-2-ene.",
            answer: ["cis", "Z"],
            explain: "Syn addition of H₂ on the catalyst surface gives the cis alkene.",
          },
          {
            kind: "mcq",
            q: "Propyne with dilute H₂SO₄ and HgSO₄ gives:",
            options: ["Propanal", "Propanone", "Propan-1-ol", "Propanoic acid"],
            answer: 1,
            difficulty: 2,
            explain: "Markovnikov addition of water gives an enol that tautomerises to propanone.",
          },
          {
            kind: "order",
            q: "Arrange in increasing order of acidity.",
            items: ["Ethane", "Ethene", "Ethyne"],
            explain: "s character of the C–H carbon: sp³ 25% < sp² 33% < sp 50%.",
          },
        ],
      },
      {
        slug: "aromatic-hydrocarbons",
        title: "Benzene and Aromaticity",
        summary: "Structure and resonance of benzene, Hückel's rule, electrophilic substitution mechanism, directive influence of substituents and carcinogenicity.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Benzene, C₆H₆, looks very unsaturated yet resists addition and prefers **substitution**. All six C–C bonds are 139 pm long, between a C–C single bond (154 pm) and a C=C double bond (134 pm), because the six π electrons are delocalised over the ring.",
          },
          { type: "heading", text: "Hückel's rule" },
          {
            type: "formula",
            tex: t`\text{Aromatic: planar, cyclic, fully conjugated, with } (4n+2)\ \pi \text{ electrons},\ n = 0, 1, 2, \ldots`,
          },
          {
            type: "table",
            headers: ["Species", "π electrons", "Verdict"],
            rows: [
              ["Benzene", "6 (n = 1)", "Aromatic"],
              ["Cyclopentadienyl anion", "6", "Aromatic"],
              ["Tropylium (cycloheptatrienyl) cation", "6", "Aromatic"],
              ["Naphthalene", "10 (n = 2)", "Aromatic"],
              ["Cyclobutadiene", "4", "Anti-aromatic"],
              ["Cyclooctatetraene", "8, but tub-shaped", "Non-aromatic"],
            ],
          },
          { type: "heading", text: "Electrophilic substitution" },
          {
            type: "list",
            ordered: true,
            items: [
              "**Generate the electrophile**, e.g. $\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightarrow \\text{NO}_2^+ + \\text{H}_3\\text{O}^+ + 2\\text{HSO}_4^-$.",
              "**Attack:** the π cloud bonds to E⁺, forming a resonance-stabilised arenium ion (σ complex). Aromaticity is lost; this step is slow.",
              "**Lose a proton:** a base removes H⁺ and aromaticity is restored.",
            ],
          },
          {
            type: "table",
            headers: ["Reaction", "Reagents", "Product"],
            rows: [
              ["Nitration", "Conc. HNO₃ + conc. H₂SO₄", "Nitrobenzene"],
              ["Halogenation", "Cl₂ with anhydrous FeCl₃", "Chlorobenzene"],
              ["Sulphonation", "Fuming H₂SO₄ (SO₃)", "Benzenesulphonic acid"],
              ["Friedel–Crafts alkylation", "CH₃Cl, anhydrous AlCl₃", "Toluene"],
              ["Friedel–Crafts acylation", "CH₃COCl, anhydrous AlCl₃", "Acetophenone"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Addition still happens",
            md: "Under forcing conditions benzene does add: with H₂/Ni it gives cyclohexane, and with Cl₂ in UV light it gives hexachlorocyclohexane C₆H₆Cl₆ (BHC, whose γ-isomer is the insecticide lindane / gammaxene).",
          },
          { type: "heading", text: "Directive influence of substituents" },
          {
            type: "table",
            headers: ["Group already present", "Directs to", "Effect on rate"],
            rows: [
              ["–OH, –NH₂, –OCH₃, –CH₃", "ortho and para", "Activating"],
              ["–Cl, –Br, –I", "ortho and para", "Deactivating"],
              ["–NO₂, –CN, –CHO, –COOH, –SO₃H", "meta", "Deactivating"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Classic trap",
            md: "Halogens are **o/p-directing but deactivating**: their −I effect slows the reaction while their +R effect still steers E⁺ to ortho and para. Also, nitrobenzene does not undergo Friedel–Crafts reactions, which is why it can be used as their solvent.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "15.6 g of benzene is nitrated with 80% yield. Find the mass of nitrobenzene.",
              "M(C₆H₆) = 78 g/mol, so 15.6 g = 0.2 mol; 1 mol benzene → 1 mol C₆H₅NO₂ (M = 123).",
              "Theoretical: 0.2 × 123 = 24.6 g. Actual: 0.80 × 24.6 = **19.68 g**.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which species is aromatic?",
                options: ["Cyclobutadiene", "Cyclopentadienyl anion", "Cyclooctatetraene", "Cyclopentadienyl cation"],
                answer: 1,
                explain: "The anion has 6 π electrons in a planar ring (n = 1). The cation has only 4.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Benzene's C–C bonds are equal (139 pm) because of delocalisation.",
              "Hückel's rule: planar, cyclic, conjugated, 4n + 2 π electrons.",
              "Electrophilic substitution: electrophile → arenium ion → loss of H⁺.",
              "Activating groups and halogens direct o/p; –NO₂, –CHO, –COOH direct meta.",
              "Benzene and polynuclear hydrocarbons such as benzopyrene are carcinogenic.",
            ],
          },
        ],
        flashcards: [
          { front: "Electrophile in nitration", back: "Nitronium ion, NO₂⁺" },
          { front: "Hückel's rule", back: "(4n + 2) π electrons in a planar, cyclic, conjugated system" },
          { front: "Product of Friedel–Crafts acylation of benzene with CH₃COCl", back: "Acetophenone" },
          { front: "Effect of –Cl on benzene ring", back: "Deactivating but ortho/para-directing" },
          { front: "C–C bond length in benzene", back: "139 pm" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many π electrons does naphthalene have?",
            answer: 10,
            explain: "Five C=C in the Kekulé structure: 10 π electrons (4n + 2 with n = 2).",
          },
          {
            kind: "truefalse",
            q: "The –NO₂ group is ortho/para-directing.",
            answer: false,
            explain: "–NO₂ withdraws electrons by −I and −R and directs meta.",
          },
          {
            kind: "fill",
            q: "The electrophile in the nitration of benzene is the ___ ion.",
            answer: ["nitronium", "NO2+", "NO₂⁺"],
            explain: "Formed from HNO₃ by protonation and loss of water in conc. H₂SO₄.",
          },
          {
            kind: "order",
            q: "Order the steps of electrophilic aromatic substitution.",
            items: ["Electrophile is generated", "Arenium ion (σ complex) forms", "Proton is lost and aromaticity restored"],
            explain: "The slow step is formation of the arenium ion.",
          },
          {
            kind: "numeric",
            q: "Mass of nitrobenzene (g) from 7.8 g of benzene at 100% yield?",
            answer: 12.3,
            tolerance: 0.05,
            unit: "g",
            explain: "0.1 mol benzene → 0.1 mol C₆H₅NO₂ × 123 = 12.3 g.",
          },
          {
            kind: "mcq",
            q: "Which group activates the benzene ring and directs ortho/para?",
            options: ["–CHO", "–OCH₃", "–COOH", "–CN"],
            answer: 1,
            difficulty: 2,
            explain: "The methoxy group donates electrons by +R.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Biomolecules                                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "biomolecules",
    title: "Biomolecules",
    icon: "🧬",
    description: "Carbohydrates, proteins and enzymes, nucleic acids, vitamins and hormones: structure, reactions and functions.",
    lessons: [
      {
        slug: "carbohydrates",
        title: "Carbohydrates",
        summary: "Classification, structure of glucose and the evidence for it, cyclic forms and mutarotation, fructose, disaccharides and polysaccharides.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Rice, wheat, sugarcane and jaggery are mostly carbohydrates: optically active polyhydroxy aldehydes or ketones, or compounds that give them on hydrolysis.",
          },
          {
            type: "table",
            headers: ["Class", "Examples", "Hydrolysis gives"],
            rows: [
              ["Monosaccharides", "Glucose, fructose, ribose", "Cannot be hydrolysed further"],
              ["Disaccharides", "Sucrose, maltose, lactose", "Two monosaccharide units"],
              ["Polysaccharides", "Starch, cellulose, glycogen", "Many monosaccharide units"],
            ],
          },
          {
            type: "text",
            md: "Sugars that reduce Fehling's or Tollens' reagent are **reducing sugars**: all monosaccharides, maltose and lactose. **Sucrose is non-reducing** because both anomeric carbons are tied up in the glycosidic bond.",
          },
          { type: "heading", text: "Evidence for the open-chain structure of glucose" },
          {
            type: "table",
            headers: ["Reaction", "Product", "Conclusion"],
            rows: [
              ["Prolonged heating with HI", "n-Hexane", "Six carbons in a straight chain"],
              ["Hydroxylamine", "Oxime", "C=O group present"],
              ["Bromine water", "Gluconic acid", "C=O is an aldehyde"],
              ["Acetic anhydride", "Glucose pentaacetate", "Five –OH groups"],
              ["Nitric acid", "Saccharic (glucaric) acid", "One primary –OH (C6)"],
            ],
          },
          { type: "heading", text: "Why a cyclic structure?" },
          {
            type: "text",
            md: "Glucose does not give Schiff's test or form a hydrogensulphite adduct with NaHSO₃, and its pentaacetate does not react with hydroxylamine. So the –CHO is not free: the C5 –OH adds to it to form a six-membered **pyranose** ring (a hemiacetal). C1 becomes a new chiral centre, giving **α-** and **β-D-glucose**, called **anomers**.",
          },
          {
            type: "formula",
            tex: t`\alpha\text{-D-glucose}\ (+112^\circ) \rightleftharpoons \text{open chain} \rightleftharpoons \beta\text{-D-glucose}\ (+19^\circ) \qquad \text{equilibrium} = +52.5^\circ`,
            caption: "Mutarotation: the specific rotation of either pure anomer drifts to +52.5° in water",
          },
          {
            type: "table",
            headers: ["Sugar", "Units", "Linkage"],
            rows: [
              ["Sucrose", "α-D-glucose + β-D-fructose", "C1 (glucose) – C2 (fructose)"],
              ["Maltose", "2 × α-D-glucose", "C1 – C4"],
              ["Lactose (milk)", "β-D-galactose + β-D-glucose", "C1 – C4"],
              ["Amylose (15–20% of starch)", "α-D-glucose, unbranched", "C1 – C4"],
              ["Amylopectin (80–85% of starch)", "α-D-glucose, branched", "C1 – C4 chains, C1 – C6 branches"],
              ["Cellulose", "β-D-glucose", "C1 – C4"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Invert sugar",
            md: "Sucrose is dextrorotatory (+66.5°). On hydrolysis it gives equal amounts of glucose (+52.5°) and fructose (−92.4°), so the mixture turns **laevorotatory**. The sign of rotation inverts, hence 'invert sugar', the main sugar in honey.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "What mass of glucose is obtained by complete hydrolysis of 68.4 g of sucrose?",
              "$\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} + \\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6\\,(\\text{glucose}) + \\text{C}_6\\text{H}_{12}\\text{O}_6\\,(\\text{fructose})$",
              "M(sucrose) = 342 g/mol, so 68.4 g = 0.2 mol, giving 0.2 mol glucose.",
              "Mass of glucose = 0.2 × 180 = **36 g** (plus 36 g fructose).",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Glucose is a reducing sugar, yet it **does not** give Schiff's test: this is evidence for the cyclic structure, not against the aldehyde. And remember that humans cannot digest cellulose because we lack the enzyme for β-1,4 links; cows can, thanks to gut microbes.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which sugar is non-reducing?",
                options: ["Glucose", "Maltose", "Lactose", "Sucrose"],
                answer: 3,
                explain: "Both anomeric carbons of sucrose are used in the glycosidic bond.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Glucose: aldohexose; evidence from HI, NH₂OH, Br₂ water, acetylation and HNO₃.",
              "α- and β-D-glucose are anomers that interconvert (mutarotation).",
              "Sucrose (non-reducing) hydrolyses to laevorotatory invert sugar.",
              "Starch = amylose + amylopectin (α links); cellulose has β-1,4 links.",
            ],
          },
        ],
        flashcards: [
          { front: "Glucose + HI (prolonged heating)", back: "n-Hexane: six carbons in a straight chain" },
          { front: "Anomers", back: "Isomers differing only at C1 (α and β forms)" },
          { front: "Glycosidic link in sucrose", back: "C1 of α-glucose to C2 of β-fructose" },
          { front: "Invert sugar", back: "Equimolar glucose + fructose; laevorotatory" },
          { front: "Linkage in cellulose", back: "β-1,4-glycosidic" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many chiral carbon atoms are present in the open-chain form of glucose?",
            answer: 4,
            explain: "C2, C3, C4 and C5 are chiral.",
          },
          {
            kind: "truefalse",
            q: "Cellulose is made of glucose units joined by α-glycosidic links.",
            answer: false,
            explain: "Cellulose has β-1,4 links; starch has α links.",
          },
          {
            kind: "fill",
            q: "α-D-glucose and β-D-glucose, which differ only at C1, are called ___.",
            answer: ["anomers"],
            explain: "C1 is the anomeric carbon.",
          },
          {
            kind: "numeric",
            q: "Mass of glucose (g) from complete hydrolysis of 171 g of sucrose?",
            answer: 90,
            tolerance: 0.1,
            unit: "g",
            explain: "171/342 = 0.5 mol → 0.5 mol glucose × 180 = 90 g.",
          },
          {
            kind: "order",
            q: "Order the stages in the hydrolysis of starch.",
            items: ["Starch", "Dextrins", "Maltose", "Glucose"],
            explain: "Starch breaks down to smaller dextrins, then maltose, then glucose.",
          },
          {
            kind: "mcq",
            q: "Glucose pentaacetate does not react with hydroxylamine. This shows:",
            options: [
              "Glucose has no carbonyl carbon",
              "The –CHO group is not free (cyclic hemiacetal)",
              "Glucose is a ketose",
              "Glucose has six –OH groups",
            ],
            answer: 1,
            difficulty: 2,
            explain: "Evidence for the cyclic structure.",
          },
        ],
      },
      {
        slug: "proteins-enzymes",
        title: "Proteins and Enzymes",
        summary: "Amino acids and zwitterions, peptide bonds, levels of protein structure, fibrous and globular proteins, denaturation and enzymes.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Dal, paneer, eggs and soybean are protein-rich foods. Proteins are polymers of **α-amino acids**, H₂N–CHR–COOH, joined by peptide bonds. The side chain R decides everything from the curl of hair keratin to the oxygen-carrying shape of haemoglobin.",
          },
          {
            type: "list",
            items: [
              "**Essential amino acids** must come from the diet (e.g. valine, leucine, lysine, phenylalanine, tryptophan); **non-essential** ones are made by the body (e.g. glycine, alanine).",
              "In water an amino acid exists as a **zwitterion**, H₃N⁺–CHR–COO⁻, so amino acids are high-melting, water-soluble solids that behave as both acid and base.",
              "All naturally occurring α-amino acids except **glycine** (R = H) are optically active, mostly with the L configuration.",
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{H_2N{-}CH_2{-}COOH + H_2N{-}CH(CH_3){-}COOH \rightarrow H_2N{-}CH_2{-}CO{-}NH{-}CH(CH_3){-}COOH + H_2O}`,
            caption: "Glycine + alanine → glycylalanine (Gly-Ala); –CO–NH– is the peptide bond",
          },
          { type: "heading", text: "Levels of structure" },
          {
            type: "table",
            headers: ["Level", "Description", "Held by"],
            rows: [
              ["Primary", "Sequence of amino acids", "Peptide (covalent) bonds"],
              ["Secondary", "α-helix or β-pleated sheet", "H bonds between –CO– and –NH–"],
              ["Tertiary", "Overall folding: fibrous or globular", "H bonds, disulphide links, van der Waals, ionic forces"],
              ["Quaternary", "Arrangement of subunits (haemoglobin has 4)", "Same as tertiary"],
            ],
          },
          {
            type: "text",
            md: "**Fibrous proteins** (keratin in hair and nails, myosin in muscle) are long, parallel chains, usually insoluble. **Globular proteins** (insulin, albumin) fold into spheres and are usually water-soluble.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Denaturation trap",
            md: "Heat or a change in pH destroys secondary and tertiary structure: egg white coagulates on boiling, and milk curdles into dahi as lactic acid forms. The **primary structure is unchanged** because peptide bonds are not broken. Biological activity is lost.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "(a) Molar mass of Gly-Ala, (b) peptide bonds in a pentapeptide, (c) tripeptides from Gly, Ala and Val each used once.",
              "(a) Gly 75 + Ala 89 − H₂O 18 = **146 g/mol**.",
              "(b) n amino acids are linked by n − 1 bonds: a pentapeptide has **4** peptide bonds.",
              "(c) Number of sequences = 3! = **6** different tripeptides.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Enzymes",
            md: "Enzymes are mostly globular proteins that act as highly specific biocatalysts. Invertase converts sucrose to glucose and fructose, maltase converts maltose to glucose, and zymase in yeast turns glucose into ethanol and CO₂, the kind of fermentation that makes dough rise.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which naturally occurring α-amino acid is optically inactive?",
                options: ["Alanine", "Glycine", "Valine", "Lysine"],
                answer: 1,
                explain: "In glycine R = H, so the α-carbon carries two H atoms and is not chiral.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Amino acids exist as zwitterions; all except glycine are optically active.",
              "Peptide bond: –CO–NH–; n residues need n − 1 bonds.",
              "Primary (sequence), secondary (α-helix, β-sheet), tertiary (folding), quaternary (subunits).",
              "Denaturation destroys 2° and 3° structure but not 1°.",
            ],
          },
        ],
        flashcards: [
          { front: "Zwitterion", back: "Dipolar form H₃N⁺–CHR–COO⁻ of an amino acid" },
          { front: "Bonds stabilising the α-helix", back: "Intramolecular hydrogen bonds" },
          { front: "Fibrous protein examples", back: "Keratin, myosin" },
          { front: "Globular protein examples", back: "Insulin, albumin" },
          { front: "Structure unaffected by denaturation", back: "Primary structure" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Number of peptide bonds in a decapeptide?",
            answer: 9,
            explain: "Ten amino acids are joined by nine peptide bonds.",
          },
          {
            kind: "truefalse",
            q: "Denaturation of a protein destroys its primary structure.",
            answer: false,
            explain: "Only the higher (2°, 3°) structures are lost.",
          },
          {
            kind: "fill",
            q: "The dipolar ion form of an amino acid is called a ___.",
            answer: ["zwitterion"],
            explain: "It carries both + and − charges.",
          },
          {
            kind: "numeric",
            q: "Molar mass of the dipeptide Gly-Gly (glycine = 75 g/mol), in g/mol?",
            answer: 132,
            tolerance: 0.5,
            unit: "g/mol",
            explain: "75 + 75 − 18 = 132.",
          },
          {
            kind: "order",
            q: "Arrange the levels of protein structure from simplest to most complex.",
            items: ["Primary", "Secondary", "Tertiary", "Quaternary"],
            explain: "Sequence → local folding → overall shape → subunit assembly.",
          },
          {
            kind: "mcq",
            q: "Which bond is mainly responsible for the β-pleated sheet structure?",
            options: ["Disulphide bonds", "Hydrogen bonds", "Ionic bonds", "Peptide bonds only"],
            answer: 1,
            explain: "Hydrogen bonds between –C=O and –N–H of neighbouring chains.",
          },
        ],
      },
      {
        slug: "nucleic-acids-vitamins",
        title: "Nucleic Acids, Vitamins and Hormones",
        summary: "Nucleosides, nucleotides, DNA and RNA structure, base pairing and Chargaff's rule, vitamin classes and deficiency diseases, and hormones.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Nucleic acids store and pass on hereditary information. India's first DNA fingerprinting work was done at CCMB, Hyderabad, and the technique is now routine in forensic and paternity cases.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Nucleoside** = nitrogenous base + pentose sugar.",
              "**Nucleotide** = nucleoside + phosphate group.",
              "**Nucleic acid** = nucleotides joined by 5′→3′ phosphodiester links.",
            ],
          },
          {
            type: "table",
            headers: ["Feature", "DNA", "RNA"],
            rows: [
              ["Sugar", "β-D-2-deoxyribose", "β-D-ribose"],
              ["Bases", "A, G, C, T", "A, G, C, U"],
              ["Structure", "Double helix (Watson and Crick, 1953)", "Usually single strand"],
              ["Function", "Stores genetic information; replicates", "Protein synthesis (mRNA, tRNA, rRNA)"],
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{A = T\ (2\ H\ bonds)} \qquad \mathrm{G \equiv C\ (3\ H\ bonds)} \qquad \%A = \%T,\ \%G = \%C`,
            caption: "Complementary base pairing and Chargaff's rule",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "A double-stranded DNA sample contains 20% adenine. Find the other bases.",
              "%T = %A = 20%, so A + T = 40%.",
              "G + C = 60%, and %G = %C, so each is **30%**.",
            ],
          },
          { type: "heading", text: "Vitamins" },
          {
            type: "table",
            headers: ["Vitamin", "Solubility", "Deficiency disease"],
            rows: [
              ["A", "Fat", "Night blindness, xerophthalmia"],
              ["B₁ (thiamine)", "Water", "Beriberi"],
              ["B₂ (riboflavin)", "Water", "Cheilosis (cracked lips), digestive disorders"],
              ["B₆ (pyridoxine)", "Water", "Convulsions"],
              ["B₁₂", "Water", "Pernicious anaemia"],
              ["C (ascorbic acid)", "Water", "Scurvy (bleeding gums)"],
              ["D", "Fat", "Rickets in children, osteomalacia in adults"],
              ["E", "Fat", "Increased fragility of RBCs, muscular weakness"],
              ["K", "Fat", "Increased blood-clotting time"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Fat-soluble vitamins (A, D, E, K) are stored in the liver and adipose tissue; water-soluble B and C are excreted in urine and must be eaten regularly. **Exception: B₁₂ is water-soluble but stored in the liver.** And uracil occurs only in RNA; thymine only in DNA.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Hormones",
            md: "Hormones are chemical messengers. **Peptides:** insulin and glucagon control blood glucose. **Amino-acid derivatives:** thyroxine (iodine deficiency causes goitre, which is why Indian salt is iodised) and adrenaline. **Steroids:** testosterone, oestradiol, progesterone and cortisol.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A DNA sample contains 35% guanine. What percentage is adenine?",
                answer: 15,
                tolerance: 0.1,
                unit: "%",
                explain: "G = C = 35%, so A + T = 30% and A = 15%.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Base + sugar = nucleoside; + phosphate = nucleotide.",
              "DNA: deoxyribose, thymine, double helix; RNA: ribose, uracil.",
              "A=T (2 H bonds), G≡C (3 H bonds); %A = %T, %G = %C.",
              "Fat-soluble vitamins A, D, E, K; water-soluble B and C (B₁₂ stored).",
              "Hormones: peptide, amino-acid derived and steroid.",
            ],
          },
        ],
        flashcards: [
          { front: "Nucleotide", back: "Base + pentose sugar + phosphate" },
          { front: "Base found only in RNA", back: "Uracil" },
          { front: "H bonds between G and C", back: "Three" },
          { front: "Deficiency of vitamin C", back: "Scurvy" },
          { front: "Fat-soluble vitamins", back: "A, D, E and K" },
          { front: "Deficiency causing goitre", back: "Iodine (low thyroxine)" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Pernicious anaemia is caused by a deficiency of:",
            options: ["Vitamin B₁", "Vitamin B₁₂", "Vitamin C", "Vitamin K"],
            answer: 1,
            explain: "B₁₂ (cobalamin) is needed to form red blood cells.",
          },
          {
            kind: "truefalse",
            q: "Thymine is present in RNA.",
            answer: false,
            explain: "RNA contains uracil instead of thymine.",
          },
          {
            kind: "fill",
            q: "Guanine and cytosine are held together by ___ hydrogen bonds.",
            answer: ["3", "three"],
            explain: "G≡C has three H bonds; A=T has two.",
          },
          {
            kind: "numeric",
            q: "In a DNA sample, thymine is 28%. What percentage is cytosine?",
            answer: 22,
            tolerance: 0.1,
            unit: "%",
            difficulty: 2,
            explain: "A = T = 28% → A + T = 56% → G + C = 44% → C = 22%.",
          },
          {
            kind: "order",
            q: "Arrange from the smallest unit to the largest.",
            items: ["Nitrogenous base", "Nucleoside", "Nucleotide", "Nucleic acid"],
            explain: "Base + sugar → nucleoside; + phosphate → nucleotide; polymer → nucleic acid.",
          },
          {
            kind: "mcq",
            q: "Which vitamin is fat-soluble?",
            options: ["B₆", "C", "K", "B₂"],
            answer: 2,
            explain: "A, D, E and K are fat-soluble.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Environmental Chemistry                                             */
  /* ------------------------------------------------------------------ */
  {
    slug: "environmental-chemistry",
    title: "Environmental Chemistry",
    icon: "🌍",
    description: "Tropospheric pollution, acid rain and smog, greenhouse effect, ozone depletion, water and soil pollution, and green chemistry.",
    lessons: [
      {
        slug: "atmospheric-pollution",
        title: "Atmospheric Pollution",
        summary: "Gaseous and particulate pollutants in the troposphere, the greenhouse effect, acid rain, classical and photochemical smog.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Every November, Delhi's air quality index makes headlines as vehicle exhaust, industrial smoke, dust and crop-stubble smoke mix with cold, still air. **Tropospheric pollution** (the lowest layer, up to about 10 km) is what we breathe; the **stratosphere** (about 10–50 km) holds the protective ozone layer.",
          },
          {
            type: "table",
            headers: ["Pollutant", "Main source", "Effect"],
            rows: [
              ["SO₂", "Burning sulphur-containing coal and oil", "Respiratory illness; forms acid rain"],
              ["NOₓ", "Vehicle engines, power plants", "Lung irritation; photochemical smog; acid rain"],
              ["CO", "Incomplete combustion", "Forms carboxyhaemoglobin, about 300 times more stable than oxyhaemoglobin"],
              ["CO₂, CH₄", "Fossil fuels, paddy fields, cattle", "Global warming"],
              ["PM2.5 / PM10", "Dust, smoke, soot", "Penetrate deep into the lungs"],
            ],
          },
          { type: "heading", text: "Greenhouse effect" },
          {
            type: "text",
            md: "CO₂, CH₄, N₂O, CFCs, ozone and water vapour let visible sunlight through but absorb the infrared radiation emitted by the warm Earth, trapping heat. Without this natural effect the average surface temperature would be about −18 °C instead of about 15 °C. Extra greenhouse gases from human activity cause **global warming**, melting Himalayan glaciers and making monsoons more erratic.",
          },
          { type: "heading", text: "Acid rain" },
          {
            type: "formula",
            tex: t`\mathrm{2SO_2 + O_2 + 2H_2O \rightarrow 2H_2SO_4} \qquad \mathrm{4NO_2 + O_2 + 2H_2O \rightarrow 4HNO_3}`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "pH 5.6, not 7",
            md: "Normal rain is already slightly acidic, **pH ≈ 5.6**, because dissolved CO₂ forms H₂CO₃. Only rain with **pH below 5.6** is called acid rain. Writing 'pH less than 7' loses the mark.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Marble cancer",
            md: "Acid rain attacks the marble of the Taj Mahal: $\\text{CaCO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CaSO}_4 + \\text{H}_2\\text{O} + \\text{CO}_2$. Industries near Agra were ordered to switch to cleaner fuels like CNG and LPG.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Rain in an industrial town has pH 4.6. How many times more acidic is it than normal rain?",
              "Normal rain: $[\\text{H}^+] = 10^{-5.6}$ M. Sample: $[\\text{H}^+] = 10^{-4.6}$ M.",
              "Ratio $= 10^{-4.6} / 10^{-5.6} = 10^{1} =$ **10 times** more acidic.",
            ],
          },
          {
            type: "table",
            headers: ["Feature", "Classical (London) smog", "Photochemical (Los Angeles) smog"],
            rows: [
              ["Ingredients", "Smoke, fog and SO₂", "NOₓ, hydrocarbons and sunlight"],
              ["Climate", "Cool, humid", "Warm, dry, sunny"],
              ["Chemical nature", "**Reducing**", "**Oxidising**"],
              ["Key products", "SO₂, soot, sulphuric acid droplets", "O₃, NO₂, PAN, acrolein, formaldehyde"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which substance is a component of photochemical smog?",
                options: ["SO₂ from coal", "Peroxyacetyl nitrate (PAN)", "CaCO₃ dust", "H₂S"],
                answer: 1,
                explain: "PAN forms from hydrocarbons and NO₂ in sunlight.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Troposphere: up to about 10 km; stratosphere: about 10–50 km.",
              "CO is toxic because carboxyhaemoglobin is about 300 times more stable than oxyhaemoglobin.",
              "Acid rain has pH below 5.6 and contains H₂SO₄ and HNO₃.",
              "Classical smog is reducing; photochemical smog is oxidising (O₃, PAN).",
            ],
          },
        ],
        flashcards: [
          { front: "pH of normal rain", back: "≈ 5.6 (dissolved CO₂)" },
          { front: "PAN", back: "Peroxyacetyl nitrate, an eye irritant in photochemical smog" },
          { front: "Nature of classical smog", back: "Reducing (SO₂, smoke, fog)" },
          { front: "Main greenhouse gases", back: "CO₂, CH₄, N₂O, CFCs, O₃, water vapour" },
          { front: "Marble cancer", back: "Corrosion of CaCO₃ (e.g. the Taj Mahal) by acid rain" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Rain of pH 3.6 is how many times more acidic than normal rain of pH 5.6?",
            answer: 100,
            tolerance: 0.5,
            explain: "Difference of 2 pH units = 10² = 100 times.",
          },
          {
            kind: "truefalse",
            q: "Classical smog is oxidising in nature.",
            answer: false,
            explain: "Classical smog is reducing because of SO₂; photochemical smog is oxidising.",
          },
          {
            kind: "fill",
            q: "Rain is called acid rain when its pH falls below ___.",
            answer: ["5.6"],
            explain: "Normal rain is pH 5.6 due to CO₂.",
          },
          {
            kind: "mcq",
            q: "Photochemical smog is most likely on a:",
            options: ["Cold, foggy winter morning", "Warm, sunny day with heavy traffic", "Rainy night", "Snowy day"],
            answer: 1,
            explain: "Sunlight drives reactions of NOₓ and hydrocarbons.",
          },
          {
            kind: "order",
            q: "Arrange the layers of the atmosphere from the ground upwards.",
            items: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            explain: "Ozone is concentrated in the stratosphere, the second layer.",
          },
        ],
      },
      {
        slug: "ozone-water-pollution",
        title: "Ozone Depletion and Water Pollution",
        summary: "How CFCs destroy stratospheric ozone, the Antarctic ozone hole, BOD and dissolved oxygen, eutrophication and drinking-water standards.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Stratospheric ozone absorbs harmful UV radiation. It forms when UV splits O₂: $\\text{O}_2 \\xrightarrow{UV} 2\\text{O}$, then $\\text{O} + \\text{O}_2 \\rightleftharpoons \\text{O}_3$. Chlorofluorocarbons (CFCs) from old refrigerators and aerosol sprays upset this balance.",
          },
          { type: "heading", text: "How CFCs destroy ozone" },
          {
            type: "list",
            ordered: true,
            items: [
              "UV light breaks a CFC: $\\text{CF}_2\\text{Cl}_2 \\rightarrow \\text{Cl}^\\bullet + {}^\\bullet\\text{CF}_2\\text{Cl}$.",
              "Chlorine radical attacks ozone: $\\text{Cl}^\\bullet + \\text{O}_3 \\rightarrow \\text{ClO}^\\bullet + \\text{O}_2$.",
              "Chlorine is regenerated: $\\text{ClO}^\\bullet + \\text{O} \\rightarrow \\text{Cl}^\\bullet + \\text{O}_2$.",
              "The chain repeats, so a single Cl• can destroy thousands of O₃ molecules.",
            ],
          },
          {
            type: "text",
            md: "**Antarctic ozone hole.** In polar winter, polar stratospheric clouds form. ClO• and Cl• are first locked up as ClONO₂ and HCl; on cloud surfaces these give HOCl and Cl₂ ($\\text{ClONO}_2 + \\text{HCl} \\rightarrow \\text{Cl}_2 + \\text{HNO}_3$). When sunlight returns in spring, HOCl and Cl₂ are photolysed to Cl• radicals, which rapidly destroy ozone. The **Montreal Protocol (1987)** phased out CFCs, and the ozone layer is slowly recovering.",
          },
          {
            type: "callout",
            tone: "warning",
            title: "Effects of UV",
            md: "More UV reaching the ground causes skin cancer, sunburn, cataracts, damage to plankton and crops, and loss of moisture from soil.",
          },
          { type: "heading", text: "Water pollution" },
          {
            type: "text",
            md: "Pathogens from sewage, organic waste, fertilisers, detergents and industrial chemicals all pollute water. Bacteria decomposing organic matter consume dissolved oxygen (DO). The oxygen they need to break down the organic matter in one litre of water is the **Biochemical Oxygen Demand (BOD)**.",
          },
          {
            type: "table",
            headers: ["Indicator", "Value", "Meaning"],
            rows: [
              ["BOD of clean water", "< 5 ppm", "Little organic waste"],
              ["BOD of highly polluted water", "≥ 17 ppm", "Heavy organic load"],
              ["DO in cold water", "Up to about 10 ppm", "Healthy"],
              ["DO below 6 ppm", "—", "Growth of fish is inhibited"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Eutrophication",
            md: "Phosphates from detergents and nitrates from fertiliser run-off feed algal blooms. When the algae die, their decomposition uses up DO and aquatic life suffocates. Lakes such as Bengaluru's Bellandur have frothed and even caught fire from such pollution.",
          },
          {
            type: "table",
            headers: ["Substance", "Limit in drinking water", "Effect of excess"],
            rows: [
              ["Fluoride", "≈ 1 ppm", "> 2 ppm mottles teeth; > 10 ppm harms bones (fluorosis in parts of Rajasthan)"],
              ["Lead", "50 ppb", "Damages kidneys, liver, nervous system"],
              ["Nitrate", "50 ppm", "Methaemoglobinaemia ('blue baby' syndrome)"],
              ["Sulphate", "< 500 ppm", "Laxative effect"],
            ],
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "A 500 mL well-water sample contains 1.5 mg of fluoride. Is it safe?",
              "1 ppm ≈ 1 mg per litre (1 L of water ≈ 1 kg).",
              "Concentration = 1.5 mg ÷ 0.5 L = **3 ppm**, above 2 ppm, so it can cause mottling of teeth and is not safe for regular drinking.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "A **low** BOD means **clean** water. High BOD means a lot of biodegradable pollution. Also, in the ozone cycle the Cl• radical acts as a catalyst: it is regenerated, which is why so little CFC does so much damage.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "In the destruction of ozone by CFCs, the chlorine radical is regenerated.",
                answer: true,
                explain: "ClO• + O → Cl• + O₂ returns Cl• to the cycle.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "UV splits CFCs into Cl•, which catalytically destroys O₃.",
              "Ozone hole forms over Antarctica in spring via polar stratospheric clouds.",
              "BOD < 5 ppm = clean; ≥ 17 ppm = highly polluted; fish suffer below 6 ppm DO.",
              "Excess phosphate and nitrate cause eutrophication.",
              "Fluoride limit ≈ 1 ppm; above 2 ppm mottles teeth.",
            ],
          },
        ],
        flashcards: [
          { front: "Radical that destroys ozone", back: "Cl• from CFCs" },
          { front: "Treaty to phase out CFCs", back: "Montreal Protocol, 1987" },
          { front: "BOD of clean water", back: "Less than 5 ppm" },
          { front: "Eutrophication", back: "Nutrient-driven algal growth that depletes dissolved oxygen" },
          { front: "Effect of > 2 ppm fluoride", back: "Brown mottling of teeth" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "3 mg of nitrate is present in 100 mL of water. Its concentration in ppm?",
            answer: 30,
            tolerance: 0.1,
            unit: "ppm",
            explain: "3 mg in 0.1 L = 30 mg/L ≈ 30 ppm (below the 50 ppm limit).",
          },
          {
            kind: "mcq",
            q: "BOD of clean water is:",
            options: ["Less than 5 ppm", "About 17 ppm", "More than 50 ppm", "Exactly 10 ppm"],
            answer: 0,
            explain: "Clean water has little organic matter to decompose.",
          },
          {
            kind: "fill",
            q: "The 1987 international agreement to phase out CFCs is the ___ Protocol.",
            answer: ["Montreal"],
            explain: "Signed in Montreal, Canada.",
          },
          {
            kind: "order",
            q: "Order the steps by which CFCs destroy ozone.",
            items: [
              "UV light breaks CF₂Cl₂ to give Cl•",
              "Cl• reacts with O₃ to give ClO• and O₂",
              "ClO• reacts with O atom to regenerate Cl•",
              "Regenerated Cl• attacks another O₃",
            ],
            explain: "A catalytic radical chain.",
          },
          {
            kind: "mcq",
            q: "Excess phosphate from detergents in a lake leads to:",
            options: ["Acid rain", "Eutrophication", "Ozone depletion", "Fluorosis"],
            answer: 1,
            explain: "It fertilises algal blooms that deplete dissolved oxygen.",
          },
          {
            kind: "mcq",
            q: "In the Antarctic spring, ozone is rapidly destroyed because sunlight photolyses:",
            options: ["HNO₃ and N₂", "HOCl and Cl₂", "CO₂ and H₂O", "CH₄ and NO"],
            answer: 1,
            difficulty: 3,
            explain: "HOCl and Cl₂ formed on polar stratospheric clouds give Cl• radicals when light returns.",
          },
        ],
      },
      {
        slug: "soil-green-chemistry",
        title: "Soil Pollution and Green Chemistry",
        summary: "Pesticides and biomagnification, industrial and solid waste, and the principles of green chemistry with atom economy calculations.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Pesticides helped India's Green Revolution feed millions, but many of them persist in soil, water and our food. Green chemistry asks a better question: how do we design reactions so that pollution never forms in the first place?",
          },
          { type: "heading", text: "Pesticides" },
          {
            type: "table",
            headers: ["Type", "Examples", "Problem"],
            rows: [
              ["Organochlorine insecticides", "DDT, aldrin, dieldrin", "Non-biodegradable; build up in fatty tissue"],
              ["Organophosphates, carbamates", "Malathion", "Less persistent but toxic nerve poisons"],
              ["Herbicides", "Sodium chlorate (NaClO₃), sodium arsenite (Na₃AsO₃)", "Toxic to mammals; arsenic persists"],
            ],
          },
          {
            type: "text",
            md: "**Biomagnification:** a persistent pesticide like DDT is passed up the food chain and its concentration increases at each step, from plankton to fish to fish-eating birds, whose eggshells become thin. DDT earned Paul Müller the 1948 Nobel Prize, but it is now banned for agriculture in India and allowed only for limited public-health use against mosquitoes.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Industrial and solid waste",
            md: "Fly ash from thermal power stations, steel-plant slag and municipal garbage pollute land. Fly ash can be made into bricks and cement; organic waste can be composted. Segregating wet and dry waste at home, as promoted by the Swachh Bharat Mission, makes recycling possible.",
          },
          { type: "heading", text: "Green chemistry" },
          {
            type: "list",
            items: [
              "Prevent waste rather than treat it afterwards.",
              "Maximise **atom economy**: let as many reactant atoms as possible end up in the product.",
              "Use safer solvents such as water or supercritical CO₂.",
              "Use catalysts rather than stoichiometric reagents, and renewable feedstocks.",
            ],
          },
          {
            type: "formula",
            tex: t`\text{Atom economy (\%)} = \frac{\text{molar mass of desired product}}{\text{sum of molar masses of all reactants}} \times 100`,
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Compare the atom economy of two routes to an organic product.",
              "**Substitution:** $\\text{C}_2\\text{H}_5\\text{Br} + \\text{NaOH} \\rightarrow \\text{C}_2\\text{H}_5\\text{OH} + \\text{NaBr}$. Reactants: 109 + 40 = 149 g; ethanol 46 g. Atom economy = 46/149 × 100 ≈ **30.9%**.",
              "**Addition (green route to ethanal):** $\\text{CH}_2{=}\\text{CH}_2 + \\tfrac12\\text{O}_2 \\rightarrow \\text{CH}_3\\text{CHO}$ (Pd²⁺/Cu²⁺ catalyst in water). Reactants 28 + 16 = 44 g; product 44 g. Atom economy = **100%**, with about 90% yield.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Green chemistry in daily life",
            md: "**Dry cleaning:** liquid CO₂ with a suitable detergent replaces tetrachloroethene (Cl₂C=CCl₂), a suspected carcinogen. **Paper and laundry bleaching:** H₂O₂ with a catalyst replaces chlorine, which formed toxic chlorinated by-products.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam trap",
            md: "Yield and atom economy are different. A substitution reaction can give 100% **yield** and still have poor **atom economy**, because by-products like NaBr are wasted. Addition reactions have 100% atom economy.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Atom economy (%) for making quicklime: CaCO₃ → CaO + CO₂?",
                answer: 56,
                tolerance: 0.5,
                unit: "%",
                explain: "56/100 × 100 = 56%; the CO₂ is a by-product.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "DDT and other organochlorines are persistent and biomagnify.",
              "Herbicides like NaClO₃ and Na₃AsO₃ are toxic to mammals.",
              "Atom economy = desired product mass ÷ total reactant mass × 100.",
              "Addition reactions are 100% atom-economical.",
              "Liquid CO₂ for dry cleaning and H₂O₂ for bleaching are green alternatives.",
            ],
          },
        ],
        flashcards: [
          { front: "Biomagnification", back: "Increase in concentration of a persistent pollutant at each level of a food chain" },
          { front: "Green solvent for dry cleaning", back: "Liquid (supercritical) CO₂" },
          { front: "Green bleaching agent for paper", back: "H₂O₂ with a catalyst" },
          { front: "Atom economy of an addition reaction", back: "100%" },
          { front: "Herbicide examples", back: "Sodium chlorate, sodium arsenite" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Atom economy (%) of C₂H₅Br + NaOH → C₂H₅OH + NaBr (C₂H₅Br = 109, NaOH = 40, C₂H₅OH = 46 g/mol), to one decimal?",
            answer: 30.9,
            tolerance: 0.2,
            unit: "%",
            difficulty: 2,
            explain: "46/149 × 100 = 30.9%.",
          },
          {
            kind: "mcq",
            q: "DDT is a serious environmental problem mainly because it:",
            options: [
              "Is highly volatile",
              "Is non-biodegradable and biomagnifies",
              "Destroys ozone",
              "Causes acid rain",
            ],
            answer: 1,
            explain: "It persists and concentrates in fatty tissue up the food chain.",
          },
          {
            kind: "truefalse",
            q: "The atom economy of an addition reaction is 100%.",
            answer: true,
            explain: "All reactant atoms end up in the single product.",
          },
          {
            kind: "fill",
            q: "In green dry cleaning, liquid ___ replaces tetrachloroethene.",
            answer: ["CO2", "CO₂", "carbon dioxide"],
            explain: "Liquid CO₂ with a suitable detergent is non-toxic and recyclable.",
          },
          {
            kind: "mcq",
            q: "Which reagent is a green substitute for chlorine in bleaching paper?",
            options: ["SO₂", "H₂O₂", "CCl₄", "NaClO₃"],
            answer: 1,
            explain: "H₂O₂ decomposes to water and oxygen.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  Hydrocarbons: "hydrocarbons",
  Biomolecules: "biomolecules",
  "Environmental Chemistry": "environmental-chemistry",
  "Atmospheric Pollution": "environmental-chemistry",
};
