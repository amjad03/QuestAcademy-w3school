import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Aldehydes, Ketones and Carboxylic Acids                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-aldehydes-ketones-acids",
    title: "Aldehydes, Ketones and Carboxylic Acids",
    icon: "🍋",
    description: "The carbonyl group: naming, preparation, nucleophilic addition, α-hydrogen reactions (aldol, Cannizzaro), and the acidity and reactions of carboxylic acids.",
    lessons: [
      {
        slug: "c12-carbonyl-structure-preparation",
        title: "Aldehydes and Ketones: Structure, Naming and Preparation",
        summary: "What the carbonyl group looks like, how to name aldehydes and ketones, their physical properties, and the NCERT methods of preparing them.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🍦",
            caption: "Vanilla ice cream owes its flavour to vanillin, cinnamon to cinnamaldehyde and nail-polish remover is mostly acetone. All three contain the C=O group.",
          },
          {
            type: "text",
            md: t`Compounds with the **carbonyl group** (>C=O) are called carbonyl compounds. In an **aldehyde** the carbonyl carbon is bonded to at least one hydrogen (–CHO). In a **ketone** it is bonded to two carbon groups (R–CO–R'). Methanal, HCHO, is the only aldehyde with two hydrogens on the carbonyl carbon.

The carbonyl carbon is **sp² hybridised**. It forms three σ bonds lying in one plane at about 120°, so the group is **trigonal planar**. Its unhybridised p orbital overlaps with a p orbital of oxygen to form the π bond.

Oxygen is more electronegative than carbon, so the C=O bond is **polar**: carbon carries a partial positive charge ($\delta+$) and oxygen a partial negative charge ($\delta-$). The resonance form $>\text{C}^+–\text{O}^-$ explains this. The electrophilic carbon is the site where nucleophiles attack, and the polarity gives carbonyl compounds high dipole moments.`,
          },
          {
            type: "table",
            headers: ["Formula", "Common name", "IUPAC name"],
            rows: [
              ["HCHO", "Formaldehyde", "Methanal"],
              ["CH₃CHO", "Acetaldehyde", "Ethanal"],
              ["(CH₃)₂CHCHO", "Isobutyraldehyde", "2-Methylpropanal"],
              ["CH₃CH=CHCHO", "Crotonaldehyde", "But-2-enal"],
              ["CH₃COCH₃", "Acetone (dimethyl ketone)", "Propanone"],
              ["CH₃COCH₂CH₃", "Ethyl methyl ketone", "Butan-2-one"],
              ["C₆H₅CHO", "Benzaldehyde", "Benzenecarbaldehyde (benzaldehyde accepted)"],
              ["C₆H₅COCH₃", "Acetophenone", "1-Phenylethan-1-one"],
              ["C₆H₅COC₆H₅", "Benzophenone", "Diphenylmethanone"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Naming rules to remember",
            md: t`In **common names**, the carbons next to the carbonyl group are labelled α, β, γ… (α is the carbon next to C=O). In **IUPAC names**, replace the final *-e* of the alkane with **-al** (aldehyde) or **-one** (ketone). The CHO carbon is always C-1, so no number is needed for it. When –CHO is attached to a ring, use the suffix **carbaldehyde**: C₆H₁₁CHO is cyclohexanecarbaldehyde.`,
          },
          {
            type: "text",
            md: t`**Physical properties.** Methanal is a gas at room temperature, ethanal is a volatile liquid, and other aldehydes and ketones are liquids or solids. Their boiling points are **higher** than those of hydrocarbons and ethers of similar mass, because of dipole–dipole attraction between C=O groups. They are **lower** than those of alcohols of similar mass, because aldehydes and ketones cannot hydrogen bond with each other (they have no O–H).

Methanal, ethanal and propanone mix with water in all proportions because their C=O oxygen accepts hydrogen bonds from water. Solubility falls quickly as the alkyl chain grows.`,
          },
          {
            type: "table",
            headers: ["Compound (molar mass 58–60)", "Boiling point / K", "Main attraction"],
            rows: [
              ["n-Butane", "273", "Weak van der Waals forces"],
              ["Methoxyethane", "281", "Weak dipole–dipole"],
              ["Propanal", "322", "Dipole–dipole (C=O)"],
              ["Propanone", "329", "Dipole–dipole (C=O)"],
              ["Propan-1-ol", "370", "Hydrogen bonding"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is the hybridisation of the carbonyl carbon and the approximate bond angle around it?",
                options: ["sp³, 109.5°", "sp², 120°", "sp, 180°", "sp², 90°"],
                answer: 1,
                explain: "The carbonyl carbon forms three σ bonds in one plane (trigonal planar, about 120°) and uses its remaining p orbital for the π bond to oxygen.",
              },
              {
                kind: "fill",
                q: "The IUPAC name of CH₃CH(CH₃)CH₂COCH₃ is ___.",
                answer: ["4-methylpentan-2-one", "4-methyl pentan-2-one", "4-methyl-2-pentanone"],
                explain: "The longest chain containing C=O has 5 carbons. Number from the end nearer the C=O: the ketone is at C-2 and the methyl group at C-4.",
              },
            ],
          },
          {
            type: "heading",
            text: "Preparation of aldehydes and ketones",
          },
          {
            type: "table",
            headers: ["Method", "Reagent and conditions", "Product"],
            rows: [
              ["Oxidation of alcohols", "1° alcohol with PCC (pyridinium chlorochromate); 2° alcohol with K₂Cr₂O₇/H⁺ or CrO₃", "1° → aldehyde; 2° → ketone"],
              ["Dehydrogenation of alcohols", "Vapour passed over heated Cu at 573 K", "1° → aldehyde; 2° → ketone"],
              ["Ozonolysis of alkenes", "O₃, then Zn dust and water", "Aldehydes and/or ketones, depending on the alkene"],
              ["Hydration of alkynes", "Dil. H₂SO₄ with HgSO₄", "Ethyne → ethanal; other alkynes → ketones"],
              ["Rosenmund reduction", "Acyl chloride + H₂ over Pd on BaSO₄", "Aldehyde"],
              ["Stephen reaction", "Nitrile + SnCl₂/HCl, then H₃O⁺", "Aldehyde"],
              ["DIBAL-H reduction", "Nitrile or ester with DIBAL-H, then H₂O", "Aldehyde"],
            ],
          },
          {
            type: "formula",
            tex: t`\text{R–COCl} + \text{H}_2 \xrightarrow{\text{Pd–BaSO}_4} \text{R–CHO} + \text{HCl} \qquad \text{RCN} + \text{SnCl}_2 + \text{HCl} \rightarrow \text{RCH=NH} \xrightarrow{\text{H}_3\text{O}^+} \text{RCHO}`,
            caption: "Rosenmund reduction (left): BaSO₄ poisons the catalyst so the aldehyde is not reduced further to an alcohol. Stephen reaction (right): the imine is hydrolysed to the aldehyde.",
          },
          {
            type: "text",
            md: t`**Aromatic aldehydes.** Toluene can be turned into benzaldehyde in three ways. (1) **Etard reaction**: chromyl chloride (CrO₂Cl₂) oxidises the methyl group to a chromium complex, which is hydrolysed to benzaldehyde. (2) **Chromic oxide** (CrO₃) in acetic anhydride gives benzylidene diacetate, which is hydrolysed by aqueous acid. (3) **Side-chain chlorination** of toluene gives benzal chloride (C₆H₅CHCl₂), which is hydrolysed at 373 K. In the **Gattermann–Koch reaction**, benzene is treated with CO and HCl in the presence of anhydrous AlCl₃ or CuCl.

**Ketones.** (1) An acyl chloride reacts with a **dialkylcadmium** (made from a Grignard reagent and CdCl₂): $2\text{R'MgX} + \text{CdCl}_2 \rightarrow \text{R'}_2\text{Cd} + 2\text{MgXCl}$, then $2\text{RCOCl} + \text{R'}_2\text{Cd} \rightarrow 2\text{RCOR'} + \text{CdCl}_2$. (2) A **nitrile** with a Grignard reagent, followed by hydrolysis, gives a ketone. (3) **Friedel–Crafts acylation**: benzene with an acyl chloride and anhydrous AlCl₃ gives an aryl ketone.`,
          },
          {
            type: "example",
            title: "Choosing reagents for a conversion",
            problem: "Give the reagents for: (a) ethanenitrile → ethanal, (b) ethanenitrile → propanone, (c) benzene → acetophenone.",
            steps: [
              "(a) Reduce the nitrile only as far as the imine and hydrolyse it: Stephen reaction (SnCl₂ + HCl, then H₃O⁺), or DIBAL-H followed by water. CH₃CN → CH₃CH=NH → CH₃CHO.",
              "(b) Propanone has one more carbon than ethanenitrile, so add a CH₃ group with a Grignard reagent: CH₃CN + CH₃MgBr gives the imine salt (CH₃)₂C=NMgBr.",
              "Hydrolysis with H₃O⁺ turns the imine salt into (CH₃)₂C=O, propanone.",
              "(c) Acylate the ring: C₆H₆ + CH₃COCl with anhydrous AlCl₃ gives C₆H₅COCH₃ + HCl (Friedel–Crafts acylation).",
            ],
            answer: "(a) SnCl₂/HCl then H₃O⁺ (or DIBAL-H, H₂O); (b) CH₃MgBr in dry ether, then H₃O⁺; (c) CH₃COCl, anhydrous AlCl₃.",
          },
          {
            type: "mistake",
            wrong: "Every alkyne gives an aldehyde when it is hydrated with HgSO₄ and dilute H₂SO₄.",
            right: "Only ethyne gives an aldehyde (ethanal). Propyne and all other alkynes give ketones; for example propyne gives propanone.",
            why: "Water adds by Markovnikov's rule, so the OH goes to the more substituted triple-bond carbon. The enol then changes into the keto form. Only in ethyne are both carbons the same CH, so the carbonyl ends up on a carbon that keeps a hydrogen.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each named reaction to its starting material.",
              pairs: [
                ["Rosenmund reduction", "Acyl chloride"],
                ["Stephen reaction", "Alkyl cyanide (nitrile)"],
                ["Etard reaction", "Toluene"],
                ["Gattermann–Koch reaction", "Benzene"],
                ["Ozonolysis", "Alkene"],
              ],
              explain: "Each name tells you the substrate: acyl chloride → aldehyde (Rosenmund), nitrile → aldehyde (Stephen), toluene → benzaldehyde (Etard), benzene → benzaldehyde (Gattermann–Koch), alkene → carbonyl compounds (ozonolysis).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "Name reactions are asked as 2-mark questions: one mark for the balanced equation (with reagent and condition written over the arrow) and one mark for naming the product. Always write the catalyst: Pd–BaSO₄ for Rosenmund, anhydrous AlCl₃ for Friedel–Crafts, CrO₂Cl₂ in CS₂ for Etard. A missing condition usually costs half a mark.",
          },
          {
            type: "keypoints",
            items: [
              "The carbonyl carbon is sp², trigonal planar and electrophilic; the C=O bond is polar.",
              "Boiling points: hydrocarbons and ethers < aldehydes and ketones < alcohols of similar mass.",
              "Aldehydes: PCC oxidation, Rosenmund (RCOCl), Stephen and DIBAL-H (RCN), Etard and Gattermann–Koch (aromatic).",
              "Ketones: oxidation of 2° alcohols, dialkylcadmium + acyl chloride, nitrile + Grignard, Friedel–Crafts acylation.",
              "Only ethyne gives an aldehyde on hydration; other alkynes give ketones.",
            ],
          },
        ],
        flashcards: [
          { front: "Rosenmund reduction", back: "RCOCl + H₂ over Pd–BaSO₄ → RCHO + HCl. BaSO₄ poisons Pd so the aldehyde is not reduced further." },
          { front: "Stephen reaction", back: "RCN + SnCl₂/HCl → RCH=NH (imine) → H₃O⁺ → RCHO." },
          { front: "DIBAL-H", back: "Diisobutylaluminium hydride. Reduces nitriles and esters to aldehydes (followed by hydrolysis)." },
          { front: "Etard reaction", back: "Toluene + CrO₂Cl₂ (in CS₂) → chromium complex → H₃O⁺ → benzaldehyde." },
          { front: "Gattermann–Koch reaction", back: "Benzene + CO + HCl with anhydrous AlCl₃ or CuCl → benzaldehyde." },
          { front: "Ketone from an acyl chloride", back: "2RCOCl + R'₂Cd → 2RCOR' + CdCl₂ (dialkylcadmium made from R'MgX and CdCl₂)." },
          { front: "Why do aldehydes boil lower than alcohols of similar mass?", back: "They have no O–H, so they cannot hydrogen bond with each other; only dipole–dipole forces act." },
          { front: "Carbaldehyde", back: "IUPAC suffix used when –CHO is attached to a ring, e.g. cyclohexanecarbaldehyde." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which reagent converts propan-1-ol into propanal without further oxidation to propanoic acid?",
            options: ["Acidified KMnO₄", "PCC (pyridinium chlorochromate)", "Acidified K₂Cr₂O₇ heated under reflux", "Alkaline KMnO₄"],
            answer: 1,
            explain: "PCC is a mild oxidant that stops at the aldehyde. Strong oxidants such as KMnO₄ and refluxing dichromate carry on to the carboxylic acid.",
          },
          {
            kind: "mcq",
            q: "In the Rosenmund reduction the palladium catalyst is supported on BaSO₄. Why?",
            options: ["To speed up the reaction", "To poison the catalyst so the aldehyde is not reduced to an alcohol", "To absorb the HCl formed", "To make the reaction take place in water"],
            answer: 1,
            explain: "BaSO₄ (sometimes with a little sulphur or quinoline) partly poisons Pd. Its activity is then enough to reduce RCOCl, but too low to reduce RCHO further.",
          },
          {
            kind: "mcq",
            q: "Which of these has the highest boiling point?",
            options: ["Propanal", "Propanone", "Propan-1-ol", "Methoxyethane"],
            answer: 2,
            explain: "Propan-1-ol molecules hydrogen bond with each other (370 K). Propanone (329 K) and propanal (322 K) have only dipole–dipole forces; methoxyethane (281 K) has weaker ones.",
          },
          {
            kind: "mcq",
            q: "Hydration of propyne with dilute H₂SO₄ and HgSO₄ gives:",
            options: ["Propanal", "Propanone", "Propan-1-ol", "Propanoic acid"],
            answer: 1,
            explain: "Markovnikov addition gives the enol CH₃C(OH)=CH₂, which changes into the keto form CH₃COCH₃.",
          },
          {
            kind: "multi",
            q: "Which reactions give benzaldehyde? Select all that apply.",
            options: ["Toluene + CrO₂Cl₂, then hydrolysis", "Benzene + CO + HCl, anhydrous AlCl₃", "Benzal chloride + water at 373 K", "Benzene + CH₃COCl, anhydrous AlCl₃"],
            answers: [0, 1, 2],
            explain: "Etard, Gattermann–Koch and hydrolysis of benzal chloride all give benzaldehyde. Friedel–Crafts acylation with CH₃COCl gives acetophenone, a ketone.",
          },
          {
            kind: "mcq",
            q: "Which pair of reagents prepares butan-2-one, CH₃COCH₂CH₃?",
            options: ["CH₃COCl and (C₂H₅)₂Cd", "CH₃CHO and C₂H₅MgBr, then H₃O⁺", "CH₃CN and SnCl₂/HCl, then H₃O⁺", "C₂H₅COCl and H₂ over Pd–BaSO₄"],
            answer: 0,
            explain: "2CH₃COCl + (C₂H₅)₂Cd → 2CH₃COC₂H₅ + CdCl₂. Option B gives butan-2-ol (an alcohol), C gives ethanal and D gives propanal.",
            difficulty: 2,
            hint: "Which reagent joins an acyl group to an alkyl group directly?",
          },
          {
            kind: "truefalse",
            q: "Methanal, ethanal and propanone are miscible with water in all proportions.",
            answer: true,
            explain: "The C=O oxygen accepts hydrogen bonds from water. With longer carbon chains solubility drops quickly.",
          },
          {
            kind: "fill",
            q: "When –CHO is attached directly to a benzene ring, the compound C₆H₅CHO is called benzaldehyde; the IUPAC suffix used for –CHO on a ring is ___.",
            answer: ["carbaldehyde", "-carbaldehyde"],
            explain: "Ring + –CHO uses the suffix carbaldehyde, e.g. cyclohexanecarbaldehyde, benzenecarbaldehyde.",
          },
        ],
      },
      {
        slug: "c12-carbonyl-reactions",
        title: "Reactions of Aldehydes and Ketones",
        summary: "Nucleophilic addition and its mechanism, reduction, oxidation and the tests that tell aldehydes from ketones, and the reactions caused by α-hydrogen: aldol and Cannizzaro.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🪞",
            caption: "Warm an aldehyde with Tollens' reagent in a clean test tube and the inside turns into a mirror. This is how silver mirrors were once made.",
          },
          {
            type: "text",
            md: t`**Nucleophilic addition.** A nucleophile attacks the electrophilic carbonyl carbon from a direction roughly perpendicular to the plane of the group. The π bond breaks and its electrons move onto oxygen. The carbon changes from **sp²** (planar) to **sp³** (tetrahedral), giving a **tetrahedral alkoxide intermediate**. This then takes a proton from the medium to give the neutral addition product.

**Aldehydes are more reactive than ketones** for two reasons. *Steric*: two bulky R groups in a ketone crowd the carbon and block the nucleophile. *Electronic*: two electron-releasing alkyl groups lower the positive charge on the carbon more than one does. So the order is HCHO > CH₃CHO > CH₃COCH₃. Benzaldehyde is less reactive than propanal, because the ring's resonance makes the carbonyl carbon less electrophilic.`,
          },
          {
            type: "table",
            headers: ["Reagent", "Product", "Note"],
            rows: [
              ["HCN (with a trace of base)", "Cyanohydrin, >C(OH)CN", "Base makes the stronger nucleophile CN⁻"],
              ["NaHSO₃", "Hydrogensulphite (bisulphite) addition compound", "Crystalline; dilute acid or alkali gives back the carbonyl compound, so it is used to separate them"],
              ["R'MgX, then H₃O⁺", "Alcohol", "HCHO → 1°, other aldehydes → 2°, ketones → 3°"],
              ["Alcohol, dry HCl", "Hemiacetal, then acetal", "Ketones with ethylene glycol give cyclic ketals; aqueous acid reverses it"],
              ["NH₂–Z (pH about 3.5)", ">C=N–Z", "Addition followed by loss of water"],
            ],
          },
          {
            type: "table",
            headers: ["Z–NH₂ (ammonia derivative)", "Product with >C=O"],
            rows: [
              ["Hydroxylamine, NH₂OH", "Oxime, >C=N–OH"],
              ["Hydrazine, NH₂NH₂", "Hydrazone, >C=N–NH₂"],
              ["Phenylhydrazine, C₆H₅NHNH₂", "Phenylhydrazone, >C=N–NHC₆H₅"],
              ["2,4-Dinitrophenylhydrazine (2,4-DNP)", "2,4-DNP derivative (yellow, orange or red solid)"],
              ["Semicarbazide, NH₂NHCONH₂", "Semicarbazone, >C=N–NHCONH₂"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Arrange in decreasing reactivity towards HCN: ethanal (P), propanone (Q), methanal (R), benzaldehyde (S).",
                options: ["R > P > S > Q", "R > P > Q > S", "P > R > S > Q", "Q > P > R > S"],
                answer: 0,
                explain: "Fewest and smallest groups react fastest: HCHO > CH₃CHO. Benzaldehyde is an aldehyde but resonance lowers its reactivity; acetone has two alkyl groups and is least reactive of the four.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Reduction.** NaBH₄ or LiAlH₄ (or H₂ with Ni, Pt or Pd) reduces aldehydes to 1° alcohols and ketones to 2° alcohols. Two methods remove the oxygen completely to give >CH₂: the **Clemmensen reduction** (zinc amalgam and concentrated HCl) and the **Wolff–Kishner reduction** (hydrazine, then heating with KOH or sodium ethoxide in ethylene glycol).

**Oxidation.** Aldehydes are oxidised easily, even by mild oxidants, to carboxylic acids with the same number of carbons. Ketones are oxidised only by strong oxidants at high temperature, and their carbon chain breaks to give a mixture of acids with fewer carbons.

- **Tollens' test**: ammoniacal silver nitrate, [Ag(NH₃)₂]⁺, is reduced to metallic silver (silver mirror) by aldehydes.
- **Fehling's test**: Fehling's solution A (aqueous CuSO₄) + B (alkaline sodium potassium tartrate) gives a **reddish-brown precipitate of Cu₂O** with aliphatic aldehydes. **Aromatic aldehydes do not respond.**
- **Haloform reaction**: compounds with a **CH₃CO–** group (methyl ketones and ethanal) are oxidised by sodium hypohalite. The methyl group becomes a haloform (CHX₃); with NaOI the yellow precipitate of iodoform appears (**iodoform test**). The C=C bond, if present, is not attacked.`,
          },
          {
            type: "formula",
            tex: t`\text{RCHO} + 2[\text{Ag(NH}_3)_2]^+ + 3\text{OH}^- \rightarrow \text{RCOO}^- + 2\text{Ag}\downarrow + 2\text{H}_2\text{O} + 4\text{NH}_3`,
            caption: "Tollens' test. Fehling's test: RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O↓ + 3H₂O.",
          },
          {
            type: "text",
            md: t`**Reactions due to α-hydrogen.** A hydrogen on the carbon next to C=O (the α-carbon) is **acidic**. When a base removes it, the resulting carbanion (enolate) is stabilised by resonance, because its negative charge spreads onto oxygen.

**Aldol reaction.** Aldehydes and ketones with at least one α-hydrogen react in **dilute alkali** to give a β-hydroxy aldehyde (**aldol**) or β-hydroxy ketone (**ketol**). On heating, these lose water to give an α,β-unsaturated carbonyl compound (**aldol condensation**). With two different carbonyl compounds that both have α-hydrogens, a **cross aldol** reaction gives a mixture of four products. When one partner is an aromatic aldehyde without α-H, the reaction is called the **Claisen–Schmidt** reaction (benzaldehyde + acetophenone → C₆H₅CH=CHCOC₆H₅).

**Cannizzaro reaction.** Aldehydes with **no α-hydrogen** (HCHO, C₆H₅CHO, (CH₃)₃CCHO) undergo self oxidation–reduction (disproportionation) with **concentrated alkali**: one molecule is reduced to an alcohol and the other is oxidised to the salt of a carboxylic acid.`,
          },
          {
            type: "formula",
            tex: t`2\,\text{CH}_3\text{CHO} \xrightarrow{\text{dil. NaOH}} \text{CH}_3\text{CH(OH)CH}_2\text{CHO} \xrightarrow{\Delta,\ -\text{H}_2\text{O}} \text{CH}_3\text{CH=CHCHO}`,
            caption: "Aldol condensation of ethanal: 3-hydroxybutanal (the aldol), then but-2-enal.",
          },
          {
            type: "formula",
            tex: t`2\,\text{HCHO} + \text{conc. KOH} \rightarrow \text{CH}_3\text{OH} + \text{HCOOK} \qquad 2\,\text{C}_6\text{H}_5\text{CHO} + \text{conc. NaOH} \rightarrow \text{C}_6\text{H}_5\text{CH}_2\text{OH} + \text{C}_6\text{H}_5\text{COONa}`,
            caption: "Cannizzaro reaction: half the aldehyde becomes alcohol, half becomes carboxylate.",
          },
          {
            type: "example",
            title: "Predicting aldol or Cannizzaro",
            problem: "Write the product when each is treated with the given alkali: (a) propanone with Ba(OH)₂, then heat; (b) 2,2-dimethylpropanal with concentrated NaOH.",
            steps: [
              "(a) Propanone has six α-hydrogens, so it gives an aldol-type reaction. One molecule's enolate (CH₂⁻COCH₃) attacks the C=O of another.",
              "The ketol is (CH₃)₂C(OH)CH₂COCH₃, 4-hydroxy-4-methylpentan-2-one.",
              "Heating removes water between the OH and an α-H: (CH₃)₂C=CHCOCH₃, 4-methylpent-3-en-2-one.",
              "(b) (CH₃)₃C–CHO has no hydrogen on the α-carbon (it carries three CH₃ groups), so aldol is impossible. Concentrated alkali gives the Cannizzaro reaction.",
              "One molecule becomes (CH₃)₃CCH₂OH (2,2-dimethylpropan-1-ol) and the other becomes (CH₃)₃CCOONa (sodium 2,2-dimethylpropanoate).",
            ],
            answer: "(a) 4-Hydroxy-4-methylpentan-2-one, which on heating gives 4-methylpent-3-en-2-one. (b) 2,2-Dimethylpropan-1-ol + sodium 2,2-dimethylpropanoate.",
          },
          {
            type: "mistake",
            wrong: "Benzaldehyde is an aldehyde, so it gives a red precipitate with Fehling's solution just like ethanal.",
            right: "Benzaldehyde gives Tollens' test (silver mirror) but does not give Fehling's test. Fehling's test separates aliphatic from aromatic aldehydes.",
            why: "Learners treat \"aldehyde\" as one family that passes every aldehyde test. Fehling's solution is a weaker oxidant than Tollens' reagent under its conditions, and aromatic aldehydes are not oxidised by it.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which reaction does each aldehyde or ketone undergo with alkali?",
              groups: ["Aldol (has α-H)", "Cannizzaro (no α-H)"],
              items: [
                { text: "Ethanal, CH₃CHO", group: 0, hint: "The CH₃ next to CHO has three α-hydrogens." },
                { text: "Methanal, HCHO", group: 1, hint: "There is no carbon next to the CHO at all." },
                { text: "Benzaldehyde, C₆H₅CHO", group: 1, hint: "The ring carbon attached to CHO carries no hydrogen." },
                { text: "Propanone, CH₃COCH₃", group: 0, hint: "Both CH₃ groups are α-carbons with hydrogens." },
                { text: "2,2-Dimethylpropanal, (CH₃)₃CCHO", group: 1, hint: "The α-carbon is quaternary: no H on it." },
                { text: "2-Methylpropanal, (CH₃)₂CHCHO", group: 0, hint: "The α-carbon still carries one hydrogen." },
              ],
              explain: "Look only at the carbon attached to C=O. If it carries at least one H, the compound gives aldol (dilute alkali). If it has none, concentrated alkali gives the Cannizzaro reaction.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "\"Distinguish between\" questions carry 1 mark each. State the reagent, which compound responds, and what you see: for example \"Ethanal gives a yellow precipitate of iodoform with NaOH and I₂; propanal does not.\" Also note: the aromatic ring in benzaldehyde is deactivated and meta-directing, so nitration gives m-nitrobenzaldehyde.",
          },
          {
            type: "keypoints",
            items: [
              "Nucleophilic addition: sp² → sp³, through a tetrahedral alkoxide intermediate; aldehydes react faster than ketones.",
              "Clemmensen (Zn-Hg/HCl) and Wolff–Kishner (NH₂NH₂, KOH/glycol) reduce C=O to CH₂.",
              "Tollens' (silver mirror): all aldehydes. Fehling's (red Cu₂O): aliphatic aldehydes only. Iodoform: CH₃CO– compounds.",
              "α-H present + dilute alkali → aldol; no α-H + concentrated alkali → Cannizzaro.",
              "–CHO and >C=O groups deactivate the ring and direct to the meta position.",
            ],
          },
        ],
        flashcards: [
          { front: "Why are aldehydes more reactive than ketones in nucleophilic addition?", back: "Less steric crowding (one R group) and less electron release to the carbonyl carbon, so it is more positive." },
          { front: "Cyanohydrin", back: "Product of HCN addition to C=O: >C(OH)CN. A trace of base generates CN⁻, the real nucleophile." },
          { front: "Clemmensen vs Wolff–Kishner", back: "Both convert >C=O to >CH₂. Clemmensen: Zn-Hg + conc. HCl (acidic). Wolff–Kishner: NH₂NH₂, then KOH in ethylene glycol, heat (basic)." },
          { front: "Tollens' reagent", back: "Ammoniacal silver nitrate, [Ag(NH₃)₂]⁺. Aldehydes reduce it to a silver mirror." },
          { front: "Fehling's test", back: "Aliphatic aldehydes give a reddish-brown Cu₂O precipitate. Aromatic aldehydes and ketones do not." },
          { front: "Iodoform test", back: "NaOH + I₂ (NaOI) gives yellow CHI₃ with CH₃CO– compounds (methyl ketones, ethanal)." },
          { front: "Aldol reaction", back: "Carbonyl compounds with α-H in dilute alkali → β-hydroxy aldehyde/ketone → heat → α,β-unsaturated carbonyl." },
          { front: "Cannizzaro reaction", back: "Aldehydes without α-H + concentrated alkali → alcohol + carboxylate salt (disproportionation)." },
          { front: "Optimum pH for reaction with ammonia derivatives", back: "About 3.5: enough acid to activate C=O, not so much that the nucleophile NH₂–Z is protonated." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which reagent converts acetophenone into ethylbenzene?",
            options: ["NaBH₄", "Zn-Hg / conc. HCl", "LiAlH₄", "H₂ over Pd–BaSO₄"],
            answer: 1,
            explain: "Clemmensen reduction removes the carbonyl oxygen: C₆H₅COCH₃ → C₆H₅CH₂CH₃. NaBH₄ and LiAlH₄ stop at the alcohol.",
          },
          {
            kind: "mcq",
            q: "Which compound gives both Tollens' test and Fehling's test?",
            options: ["Benzaldehyde", "Propanone", "Propanal", "Acetophenone"],
            answer: 2,
            explain: "Propanal is an aliphatic aldehyde. Benzaldehyde gives only Tollens'; the two ketones give neither.",
          },
          {
            kind: "mcq",
            q: "Which of these does NOT give the iodoform test?",
            options: ["Ethanal", "Propanone", "Pentan-3-one", "Butan-2-one"],
            answer: 2,
            explain: "Pentan-3-one, CH₃CH₂COCH₂CH₃, has no CH₃CO– group. The others all contain CH₃CO–.",
          },
          {
            kind: "mcq",
            q: "The aldol formed from two molecules of ethanal is:",
            options: ["But-2-enal", "3-Hydroxybutanal", "2-Hydroxybutanal", "Butane-1,3-diol"],
            answer: 1,
            explain: "The enolate CH₂⁻CHO adds to the C=O of a second ethanal, giving CH₃CH(OH)CH₂CHO, 3-hydroxybutanal. But-2-enal is formed only after heating (dehydration).",
          },
          {
            kind: "mcq",
            q: "Benzaldehyde with concentrated NaOH gives:",
            options: ["Benzyl alcohol and sodium benzoate", "Benzoin", "An aldol", "Benzene and sodium formate"],
            answer: 0,
            explain: "Benzaldehyde has no α-H, so it undergoes the Cannizzaro reaction.",
          },
          {
            kind: "multi",
            q: "Which statements about the hydrogensulphite (NaHSO₃) addition reaction are correct?",
            options: ["The adduct is a crystalline solid", "Dilute acid or alkali gives back the carbonyl compound", "It is used to separate and purify aldehydes", "Ketones react faster than aldehydes"],
            answers: [0, 1, 2],
            explain: "The adduct is crystalline and its formation is reversible, so it is used for purification. Like all nucleophilic additions it is faster for aldehydes than ketones.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A ketone reacts with ethylene glycol in the presence of dry HCl. The product is:",
            options: ["A hemiacetal", "A cyclic ketal (ethylene glycol ketal)", "A cyanohydrin", "An oxime"],
            answer: 1,
            explain: "Both OH groups of the glycol join the same carbon, forming a five-membered cyclic ketal. Aqueous mineral acid hydrolyses it back, so it protects the C=O group.",
          },
          {
            kind: "truefalse",
            q: "Nitration of benzaldehyde gives mainly p-nitrobenzaldehyde.",
            answer: false,
            explain: "The –CHO group withdraws electrons and directs incoming groups to the meta position, so the main product is m-nitrobenzaldehyde.",
          },
        ],
      },
      {
        slug: "c12-carboxylic-acids",
        title: "Carboxylic Acids: Preparation, Acidity and Reactions",
        summary: "Naming carboxylic acids, the NCERT methods of preparing them, why they are acidic and what changes their strength, and their reactions at the O–H, the –COOH group, the α-carbon and the ring.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🫙",
            caption: "Vinegar is 6–8% acetic acid. Ant stings contain formic acid, and the sharp taste of tamarind and imli chutney comes partly from tartaric acid.",
          },
          {
            type: "text",
            md: t`**Carboxylic acids** contain the **carboxyl group**, –COOH (carbonyl + hydroxyl). In IUPAC names, replace the *-e* of the alkane with **-oic acid**; the carboxyl carbon is C-1. When –COOH is attached to a ring, use **carboxylic acid** (benzenecarboxylic acid is benzoic acid).

The carboxyl carbon is less electrophilic than a carbonyl carbon in an aldehyde or ketone. The lone pair on the OH oxygen is delocalised onto the C=O by resonance, which reduces the positive charge on carbon. That is why carboxylic acids do not give the typical nucleophilic addition reactions of aldehydes and ketones (no oxime, no cyanohydrin).`,
          },
          {
            type: "table",
            headers: ["Formula", "Common name", "IUPAC name"],
            rows: [
              ["HCOOH", "Formic acid", "Methanoic acid"],
              ["CH₃COOH", "Acetic acid", "Ethanoic acid"],
              ["CH₃CH₂COOH", "Propionic acid", "Propanoic acid"],
              ["CH₃CH₂CH₂COOH", "Butyric acid", "Butanoic acid"],
              ["HOOC–COOH", "Oxalic acid", "Ethanedioic acid"],
              ["HOOC–CH₂–COOH", "Malonic acid", "Propanedioic acid"],
              ["C₆H₅COOH", "Benzoic acid", "Benzenecarboxylic acid"],
              ["C₆H₄(COOH)₂ (1,2-)", "Phthalic acid", "Benzene-1,2-dicarboxylic acid"],
            ],
          },
          {
            type: "list",
            items: [
              "**From 1° alcohols and aldehydes**: oxidation with KMnO₄ (neutral, acidic or alkaline), K₂Cr₂O₇ or CrO₃ in acid.",
              "**From alkylbenzenes**: vigorous oxidation with alkaline KMnO₄ (or chromic acid) turns the whole side chain into –COOH, whatever its length, as long as the carbon next to the ring carries a hydrogen. Acidify to get benzoic acid.",
              "**From nitriles and amides**: hydrolysis with H⁺ or OH⁻ gives the amide and then the acid: RCN → RCONH₂ → RCOOH.",
              "**From Grignard reagents**: RMgX + CO₂ (dry ice) gives RCOOMgX, which is hydrolysed by acid to RCOOH (one carbon more than RX).",
              "**From acyl halides, anhydrides and esters**: hydrolysis with water or alkali (then acid).",
            ],
          },
          {
            type: "text",
            md: t`**Physical properties.** Carboxylic acids boil higher than aldehydes, ketones and even alcohols of similar mass. They form strong intermolecular hydrogen bonds, and many exist as **cyclic dimers** joined by two hydrogen bonds, even in the vapour phase and in aprotic solvents. Acids up to four carbons mix with water; solubility drops as the chain grows. Benzoic acid is almost insoluble in cold water.

**Acidity.** In water: $\text{RCOOH} + \text{H}_2\text{O} \rightleftharpoons \text{RCOO}^- + \text{H}_3\text{O}^+$. The carboxylate ion is stabilised by two **equivalent** resonance structures, with the negative charge shared by two electronegative oxygen atoms. In the phenoxide ion, the charge spreads partly onto less electronegative ring carbons, so phenoxide is less stable. So carboxylic acids are **stronger than phenols**, and only they release CO₂ from NaHCO₃.`,
          },
          {
            type: "formula",
            tex: t`K_a = \frac{[\text{RCOO}^-][\text{H}_3\text{O}^+]}{[\text{RCOOH}]} \qquad \text{p}K_a = -\log K_a`,
            caption: "Smaller pKa = stronger acid. Most carboxylic acids have pKa about 4–5; HCl has about −7, phenol 10 and ethanol 16.",
          },
          {
            type: "table",
            headers: ["Acid", "pKa", "Reason"],
            rows: [
              ["CF₃COOH", "0.23", "Three strongly −I fluorines"],
              ["CCl₃COOH", "0.65", "Three −I chlorines"],
              ["CHCl₂COOH", "1.29", "Two −I chlorines"],
              ["ClCH₂COOH", "2.86", "One −I chlorine"],
              ["HCOOH", "3.75", "No alkyl group releasing electrons"],
              ["C₆H₅COOH", "4.19", "sp² ring carbon is electron-withdrawing"],
              ["CH₃COOH", "4.76", "+I CH₃ destabilises the anion"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is the strongest acid?",
                options: ["CH₃COOH", "ClCH₂COOH", "Cl₂CHCOOH", "FCH₂COOH"],
                answer: 2,
                explain: "Two chlorines withdraw more electron density than one fluorine or one chlorine, so dichloroacetic acid (pKa 1.29) is the strongest here.",
              },
              {
                kind: "truefalse",
                q: "Both phenol and benzoic acid release CO₂ gas from aqueous NaHCO₃.",
                answer: false,
                explain: "Only carboxylic acids are strong enough to decompose hydrogencarbonate. Phenol (pKa 10) is weaker than carbonic acid and does not.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Electron-withdrawing groups** (–NO₂, –CN, –X, –CF₃) stabilise the carboxylate and **increase** acidity; **electron-donating groups** (–CH₃, –OCH₃, –NH₂) **decrease** it. The closer the group to –COOH, the bigger the effect. For example, 4-nitrobenzoic acid (pKa 3.41) is stronger than benzoic acid (4.19), and 4-methoxybenzoic acid (4.46) is weaker.

**Reactions involving the O–H and C–OH bonds.**
- With metals (Na) and alkalis (NaOH) and with NaHCO₃: salts form; NaHCO₃ gives effervescence of CO₂.
- **Anhydride**: heating with P₂O₅ or with H₂SO₄ removes water from two molecules: 2CH₃COOH → (CH₃CO)₂O + H₂O.
- **Esterification**: with an alcohol and a little conc. H₂SO₄ or dry HCl (reversible): RCOOH + R'OH ⇌ RCOOR' + H₂O.
- **Acyl chlorides**: with PCl₅, PCl₃ or SOCl₂. SOCl₂ is preferred, because the side products SO₂ and HCl are gases and escape, leaving pure RCOCl.
- **Amides**: with NH₃ the ammonium salt forms, which on strong heating loses water: CH₃COONH₄ → CH₃CONH₂ + H₂O.`,
          },
          {
            type: "formula",
            tex: t`\text{RCOOH} + \text{SOCl}_2 \rightarrow \text{RCOCl} + \text{SO}_2\uparrow + \text{HCl}\uparrow \qquad 3\,\text{RCOOH} + \text{PCl}_3 \rightarrow 3\,\text{RCOCl} + \text{H}_3\text{PO}_3`,
            caption: "With PCl₅: RCOOH + PCl₅ → RCOCl + POCl₃ + HCl.",
          },
          {
            type: "text",
            md: t`**Reactions of the –COOH group.** *Reduction*: LiAlH₄ or diborane (B₂H₆) reduces acids to 1° alcohols. NaBH₄ does not reduce –COOH, and diborane does not reduce esters, nitro groups or halo groups. *Decarboxylation*: heating the sodium salt with **soda-lime** (NaOH + CaO, 3 : 1) gives an alkane with **one carbon fewer**: RCOONa + NaOH → RH + Na₂CO₃. *Kolbe electrolysis*: electrolysis of an aqueous sodium or potassium carboxylate gives an alkane with **twice** the number of carbons of R (R–R) at the anode.

**At the α-carbon: Hell–Volhard–Zelinsky (HVZ) reaction.** Acids with an α-hydrogen react with Cl₂ or Br₂ in the presence of a little **red phosphorus** to give **α-halo acids**: RCH₂COOH → RCH(X)COOH.

**On the ring.** –COOH is deactivating and meta-directing: benzoic acid with conc. HNO₃ + conc. H₂SO₄ gives 3-nitrobenzoic acid. Benzoic acid does **not** undergo Friedel–Crafts reactions, because the ring is deactivated and the AlCl₃ catalyst binds to the carboxyl group.`,
          },
          {
            type: "example",
            title: "A three-step board conversion",
            problem: "Convert bromobenzene into benzoic acid, then benzoic acid into benzoyl chloride and benzene.",
            steps: [
              "Make the Grignard reagent: C₆H₅Br + Mg in dry ether → C₆H₅MgBr.",
              "Add dry ice and hydrolyse: C₆H₅MgBr + CO₂ → C₆H₅COOMgBr; then H₃O⁺ → C₆H₅COOH.",
              "Benzoyl chloride: C₆H₅COOH + SOCl₂ → C₆H₅COCl + SO₂ + HCl.",
              "Benzene: neutralise to sodium benzoate, then heat with soda-lime: C₆H₅COONa + NaOH → C₆H₆ + Na₂CO₃ (one carbon lost as carbonate).",
            ],
            answer: "Mg/dry ether; CO₂ then H₃O⁺ → benzoic acid. SOCl₂ → benzoyl chloride. NaOH, then soda-lime and heat → benzene.",
          },
          {
            type: "mistake",
            wrong: "Carboxylic acids have a C=O group, so like aldehydes they react with hydroxylamine and give oximes.",
            right: "Carboxylic acids do not give the nucleophilic addition reactions of aldehydes and ketones. Their C=O carbon is made less electrophilic by resonance with the –OH group.",
            why: "Seeing C=O in the formula suggests carbonyl chemistry. But in –COOH the lone pair of the OH oxygen is delocalised onto the carbonyl, so it behaves as a different functional group.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Arrange from strongest to weakest acid.",
              items: ["CF₃COOH", "ClCH₂COOH", "HCOOH", "C₆H₅COOH", "CH₃COOH", "C₆H₅OH"],
              explain: "pKa rises (acid strength falls) from 0.23 to 2.86, 3.75, 4.19, 4.76 and 10. Electron-withdrawing groups make the acid stronger; the +I CH₃ group makes it weaker; phenol is far weaker than any carboxylic acid.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "When asked \"Why is SOCl₂ preferred?\" mention both by-products (SO₂ and HCl) are gases. For acidity questions, write the order AND the reason (−I effect, resonance stabilisation of carboxylate). For decarboxylation and Kolbe electrolysis, say how the number of carbons changes: n − 1 and 2(n − 1) respectively for an acid with n carbons.",
          },
          {
            type: "keypoints",
            items: [
              "Prepare acids by oxidation, by hydrolysis of nitriles/amides/esters, or from RMgX + CO₂ (adds one carbon).",
              "Carboxylate ion has two equivalent resonance forms, so acids are stronger than phenols and release CO₂ from NaHCO₃.",
              "−I groups near –COOH raise acidity; +I groups lower it. CF₃COOH > CCl₃COOH > CHCl₂COOH > ClCH₂COOH > HCOOH > C₆H₅COOH > CH₃COOH.",
              "SOCl₂, PCl₃, PCl₅ → acyl chlorides; LiAlH₄ or B₂H₆ → 1° alcohols; soda-lime → alkane (one C fewer); Kolbe → R–R.",
              "HVZ: Cl₂ or Br₂ + red P gives α-halo acids. –COOH is meta-directing and stops Friedel–Crafts.",
            ],
          },
        ],
        flashcards: [
          { front: "Why are carboxylic acids stronger than phenols?", back: "The carboxylate ion has two equivalent resonance forms with the charge on two O atoms; in phenoxide the charge also goes onto less electronegative carbons." },
          { front: "Test that tells a carboxylic acid from a phenol", back: "NaHCO₃: the acid gives brisk effervescence of CO₂; phenol does not." },
          { front: "Why are acid boiling points so high?", back: "Strong intermolecular hydrogen bonds; many acids exist as cyclic dimers even in the vapour phase." },
          { front: "Decarboxylation", back: "RCOONa + NaOH (with CaO, heat) → RH + Na₂CO₃. Product has one carbon fewer." },
          { front: "Kolbe electrolysis", back: "Electrolysis of aqueous RCOONa: R–R forms at the anode along with CO₂; H₂ at the cathode." },
          { front: "HVZ reaction", back: "RCH₂COOH + X₂ (Cl₂ or Br₂) with red phosphorus → RCH(X)COOH (α-halo acid)." },
          { front: "Reducing agents for –COOH", back: "LiAlH₄ or B₂H₆ give 1° alcohols. NaBH₄ does not reduce –COOH." },
          { front: "Why no Friedel–Crafts on benzoic acid?", back: "The –COOH group deactivates the ring and the AlCl₃ catalyst bonds to the carboxyl group." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which reaction increases the carbon chain by one carbon?",
            options: ["RMgX + CO₂, then H₃O⁺", "Decarboxylation with soda-lime", "Kolbe electrolysis", "Oxidation of RCH₂OH with KMnO₄"],
            answer: 0,
            explain: "CO₂ supplies one new carbon: RX → RCOOH. Soda-lime removes one carbon, Kolbe doubles R, and oxidation keeps the number the same.",
          },
          {
            kind: "mcq",
            q: "Vigorous oxidation of propylbenzene with alkaline KMnO₄, followed by acidification, gives:",
            options: ["3-Phenylpropanoic acid", "Benzoic acid", "Phenylethanoic acid", "No reaction"],
            answer: 1,
            explain: "The whole side chain is oxidised to –COOH regardless of its length, so propylbenzene gives benzoic acid.",
          },
          {
            kind: "mcq",
            q: "Which reagent is preferred for making pure acyl chlorides from acids?",
            options: ["PCl₃", "PCl₅", "SOCl₂", "Cl₂ with red P"],
            answer: 2,
            explain: "The by-products SO₂ and HCl escape as gases. Cl₂ with red P is the HVZ reagent and halogenates the α-carbon instead.",
          },
          {
            kind: "numeric",
            q: "Sodium butanoate is heated with soda-lime. How many carbon atoms are in the alkane formed?",
            answer: 3,
            explain: "CH₃CH₂CH₂COONa + NaOH → CH₃CH₂CH₃ + Na₂CO₃. Butanoate has 4 carbons; one leaves as carbonate, giving propane (3 carbons).",
          },
          {
            kind: "numeric",
            q: "Aqueous sodium propanoate is electrolysed (Kolbe). How many carbon atoms are in the hydrocarbon formed at the anode?",
            answer: 4,
            explain: "2CH₃CH₂COO⁻ → CH₃CH₂–CH₂CH₃ + 2CO₂ + 2e⁻. Two ethyl radicals join to give butane, 4 carbons.",
            difficulty: 2,
            hint: "R in propanoate is C₂H₅; Kolbe gives R–R.",
          },
          {
            kind: "mcq",
            q: "Arrange in increasing acid strength: benzoic acid (P), 4-nitrobenzoic acid (Q), 4-methoxybenzoic acid (R).",
            options: ["R < P < Q", "P < R < Q", "Q < P < R", "R < Q < P"],
            answer: 0,
            explain: "–OCH₃ donates electrons (weaker, pKa 4.46); –NO₂ withdraws (stronger, pKa 3.41); benzoic acid lies between (4.19).",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these reduce propanoic acid to propan-1-ol? Select all that apply.",
            options: ["LiAlH₄, then H₃O⁺", "B₂H₆, then H₃O⁺", "NaBH₄", "Zn-Hg / conc. HCl"],
            answers: [0, 1],
            explain: "LiAlH₄ and diborane reduce –COOH to –CH₂OH. NaBH₄ is too mild, and Clemmensen conditions are for aldehydes and ketones.",
          },
          {
            kind: "mcq",
            q: "Ethanoic acid treated with Br₂ and a little red phosphorus gives:",
            options: ["Bromoethane", "2-Bromoethanoic acid", "Ethanoyl bromide only", "Bromomethane"],
            answer: 1,
            explain: "This is the HVZ reaction: an α-hydrogen is replaced by bromine, giving BrCH₂COOH.",
          },
        ],
      },
      {
        slug: "c12-carbonyl-exam-edge",
        title: "Exam edge: Carbonyl Compounds and Carboxylic Acids",
        summary: "How JEE, NEET, KCET and COMEDK test this chapter: reactivity orders, test-based identification, aldol and Cannizzaro products, acidity trends and multi-step puzzles.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "**What the exams ask.** This is one of the highest-weight chapters in organic chemistry. **KCET and COMEDK** ask direct NCERT facts: name reactions, reagents, IUPAC names and simple tests. **NEET** asks reagent–product matching, reactivity and acidity orders, and which compound gives which test. **JEE Main** adds product chains (A → B → C), cross aldol counts and Cannizzaro variations. **JEE Advanced** gives a molecular formula plus test results and asks you to deduce the structure, or asks for intramolecular aldol and crossed Cannizzaro products.",
          },
          {
            type: "table",
            headers: ["Test", "Positive for", "Common trap"],
            rows: [
              ["Tollens' (silver mirror)", "All aldehydes, HCOOH, α-hydroxy ketones (glucose, fructose)", "Formic acid gives it because it contains an H–C=O unit"],
              ["Fehling's (red Cu₂O)", "Aliphatic aldehydes, α-hydroxy ketones", "Benzaldehyde does not respond"],
              ["Iodoform (NaOH + I₂)", "CH₃CO– and CH₃CH(OH)– compounds, including ethanol and ethanal", "Methanol, propanal, pentan-3-one and CH₃COOH do not"],
              ["2,4-DNP", "All aldehydes and ketones", "Carboxylic acids and esters do not"],
              ["NaHCO₃ (effervescence)", "Carboxylic acids (and sulphonic acids)", "Phenols do not; picric acid does"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts worth remembering",
            md: "1. **Crossed Cannizzaro with HCHO**: methanal is always the one oxidised (to formate); the other aldehyde is reduced to its alcohol. Safe whenever HCHO is one partner and both lack α-H.\n\n2. **Cross aldol count**: two different carbonyl compounds, both with α-H, give 4 aldols. If one partner has no α-H, only 2 (and if the other's self-reaction is slow, mainly 1).\n\n3. **Intramolecular aldol** closes the ring that has 5 or 6 atoms, because these rings are least strained.\n\n4. **Acid strength** with a halogen: count halogens and their distance. α > β > γ, and F > Cl > Br > I.",
          },
          {
            type: "example",
            title: "KCET level: iodoform count",
            problem: "How many of these give the iodoform test: ethanol, methanol, propan-2-ol, propanal, butan-2-one, acetophenone, pentan-3-one?",
            steps: [
              "Look for CH₃CO– or CH₃CH(OH)–. NaOI first oxidises CH₃CH(OH)– to CH₃CO–.",
              "Ethanol CH₃CH₂OH: has CH₃CH(OH)– with H as the other group. Yes.",
              "Propan-2-ol (CH₃)₂CHOH: yes. Butan-2-one CH₃COC₂H₅: yes. Acetophenone C₆H₅COCH₃: yes.",
              "Methanol, propanal (CH₃CH₂CHO: the CH₃ is not next to C=O) and pentan-3-one: no.",
            ],
            answer: "4 compounds: ethanol, propan-2-ol, butan-2-one and acetophenone.",
          },
          {
            type: "example",
            title: "JEE Main level: iodoform yield",
            problem: "2.90 g of propanone is treated with excess I₂ and NaOH. What mass of iodoform forms? (C = 12, H = 1, O = 16, I = 127)",
            steps: [
              "Equation: CH₃COCH₃ + 3I₂ + 4NaOH → CHI₃ + CH₃COONa + 3NaI + 3H₂O. 1 mol propanone gives 1 mol CHI₃.",
              "Molar mass of propanone = 3(12) + 6(1) + 16 = 58 g/mol, so moles = 2.90 ÷ 58 = 0.0500 mol.",
              "Molar mass of CHI₃ = 12 + 1 + 3(127) = 394 g/mol.",
              "Mass = 0.0500 × 394 = 19.7 g.",
            ],
            answer: "19.7 g of iodoform (3 mol I₂ are used per mole of propanone).",
          },
          {
            type: "example",
            title: "JEE Main level: crossed Cannizzaro",
            problem: "Benzaldehyde and methanal (formaldehyde) are warmed with concentrated NaOH. Give the products.",
            steps: [
              "Neither aldehyde has an α-hydrogen, so this is a crossed Cannizzaro reaction.",
              "OH⁻ adds fastest to HCHO (least hindered, most electrophilic). That adduct transfers a hydride to benzaldehyde.",
              "So HCHO is oxidised to HCOO⁻ and C₆H₅CHO is reduced to C₆H₅CH₂OH.",
            ],
            answer: "Benzyl alcohol and sodium formate: C₆H₅CHO + HCHO + NaOH → C₆H₅CH₂OH + HCOONa.",
          },
          {
            type: "example",
            title: "JEE Advanced level: deduce the structure",
            problem: "Compound A, C₈H₈O, forms an orange precipitate with 2,4-DNP and a yellow precipitate with NaOH/I₂. It does not reduce Tollens' reagent. Vigorous oxidation of A gives benzoic acid. A with Zn-Hg/HCl gives B. Identify A and B, and the aldehyde isomer of A that gives Tollens' test but not iodoform.",
            steps: [
              "Degree of unsaturation of C₈H₈O = (2×8 + 2 − 8) ÷ 2 = 5: a benzene ring (4) plus one C=O (1).",
              "2,4-DNP positive and Tollens' negative: a ketone. Iodoform positive: a CH₃CO– group.",
              "Benzoic acid on oxidation: a monosubstituted ring. C₆H₅– + CH₃CO– = C₈H₈O. So A is acetophenone, C₆H₅COCH₃.",
              "Clemmensen reduction converts C=O to CH₂: B is ethylbenzene, C₆H₅CH₂CH₃.",
              "An aldehyde isomer with a monosubstituted ring is phenylethanal, C₆H₅CH₂CHO: it gives Tollens' but has no CH₃CO–, so no iodoform. (The tolualdehydes, CH₃C₆H₄CHO, also fit Tollens' but are disubstituted.)",
            ],
            answer: "A = acetophenone (1-phenylethan-1-one); B = ethylbenzene; the aldehyde isomer is phenylethanal, C₆H₅CH₂CHO.",
          },
          {
            type: "mistake",
            wrong: "In a Cannizzaro reaction the alkali should be dilute, as in the aldol reaction.",
            right: "Aldol needs dilute alkali and an α-hydrogen. Cannizzaro needs concentrated alkali and no α-hydrogen.",
            why: "Both reactions use NaOH with aldehydes, so the conditions get mixed up. Exam options often swap \"dilute\" and \"concentrated\" to test exactly this.",
          },
          {
            type: "mistake",
            wrong: "Formic acid is a carboxylic acid, so it cannot reduce Tollens' reagent.",
            right: "HCOOH reduces Tollens' reagent (and is oxidised to CO₂ and water), because its structure H–CO–OH contains an aldehyde-like H–C=O unit.",
            why: "Acids are usually the end products of oxidation, so it seems they cannot be oxidised further. Formic acid is the exception, which is why exams love it.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which is more acidic: 2-chlorobutanoic or 4-chlorobutanoic acid?",
              emoji: "⚖️",
              options: ["2-Chlorobutanoic acid", "4-Chlorobutanoic acid", "Both are equal: same atoms"],
              answer: 0,
              trap: 2,
              explain: "The −I effect weakens quickly with distance. Chlorine on the α-carbon (C-2) stabilises the carboxylate far more than chlorine three carbons away, so 2-chlorobutanoic acid is clearly stronger.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "How many aldol products (ignoring stereoisomers) are possible when a mixture of ethanal and propanal is treated with dilute NaOH?",
                options: ["1", "2", "3", "4"],
                answer: 3,
                explain: "Both have α-H, so each enolate can attack either carbonyl: 2 × 2 = 4 products.",
              },
            ],
          },
          {
            type: "formula",
            tex: t`\text{Degree of unsaturation} = \frac{2C + 2 + N - H - X}{2}`,
            caption: "Use it first in every structure-deduction problem. A benzene ring counts 4; C=O counts 1.",
          },
          {
            type: "keypoints",
            items: [
              "Match tests to groups: Tollens' (any CHO, HCOOH), Fehling's (aliphatic CHO), iodoform (CH₃CO– / CH₃CH(OH)–), NaHCO₃ (COOH).",
              "Dilute alkali + α-H → aldol; concentrated alkali + no α-H → Cannizzaro; in crossed Cannizzaro HCHO becomes formate.",
              "Cross aldol of two enolisable compounds gives 4 products.",
              "Acidity rises with number, electronegativity and nearness of −I groups.",
              "In structure puzzles: degree of unsaturation first, then tests, then oxidation products.",
            ],
          },
        ],
        flashcards: [
          { front: "Crossed Cannizzaro with HCHO", back: "HCHO is oxidised to formate; the other aldehyde (no α-H) is reduced to its alcohol." },
          { front: "Compounds giving iodoform test", back: "Those with CH₃CO– or CH₃CH(OH)–: ethanol, ethanal, propan-2-ol, methyl ketones. Not methanol, not CH₃COOH." },
          { front: "Formic acid and Tollens'", back: "HCOOH gives a silver mirror; it has an H–C=O unit and is oxidised to CO₂." },
          { front: "Cross aldol count", back: "Two different enolisable carbonyl compounds → 4 aldol products." },
          { front: "Claisen–Schmidt reaction", back: "Aromatic aldehyde (no α-H) + aliphatic aldehyde/ketone in dilute alkali → α,β-unsaturated carbonyl, e.g. benzaldehyde + acetophenone → chalcone." },
          { front: "Moles of I₂ per mole of methyl ketone in iodoform reaction", back: "3 mol I₂ (and 4 mol NaOH): RCOCH₃ + 3I₂ + 4NaOH → CHI₃ + RCOONa + 3NaI + 3H₂O." },
          { front: "Intramolecular aldol ring size", back: "The 5- or 6-membered ring forms, as these are least strained." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A compound C₃H₆O gives a silver mirror with Tollens' reagent but no yellow precipitate with NaOH/I₂. It is:",
            options: ["Propanone", "Propanal", "Prop-2-en-1-ol", "Methoxyethene"],
            answer: 1,
            explain: "Tollens' positive means an aldehyde: CH₃CH₂CHO. It has no CH₃CO– group, so no iodoform. Propanone gives iodoform and not Tollens'.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which carbonyl compound is most reactive towards nucleophilic addition?",
            options: ["CH₃COCH₃", "C₆H₅CHO", "CH₃CHO", "C₆H₅COCH₃"],
            answer: 2,
            explain: "Among these, ethanal has the least steric hindrance and least electron donation into the C=O. Aromatic carbonyls are deactivated by resonance; ketones by two groups.",
          },
          {
            kind: "numeric",
            q: "How many moles of I₂ are consumed when 0.20 mol of butan-2-one undergoes the complete iodoform reaction?",
            answer: 0.6,
            tolerance: 0.01,
            unit: "mol",
            explain: "Each methyl ketone needs 3 I₂: 0.20 × 3 = 0.60 mol.",
            difficulty: 2,
            hint: "All three hydrogens of the CH₃ group are replaced by iodine.",
          },
          {
            kind: "multi",
            q: "Which compounds undergo the Cannizzaro reaction with concentrated NaOH? Select all that apply.",
            options: ["HCHO", "(CH₃)₃CCHO", "C₆H₅CHO", "CH₃CH₂CHO"],
            answers: [0, 1, 2],
            explain: "The first three have no α-H. Propanal has two α-hydrogens and undergoes aldol instead.",
          },
          {
            kind: "mcq",
            q: "Hexane-2,5-dione is warmed with dilute NaOH. An intramolecular aldol condensation occurs. The ring formed has how many carbons?",
            options: ["3", "4", "5", "6"],
            answer: 2,
            explain: "The enolate at C-1 (the CH₃ next to C-2 C=O) attacks C-5, closing a ring C1–C2–C3–C4–C5: five carbons. After dehydration this gives 3-methylcyclopent-2-en-1-one. A C-3 enolate attacking C-5 would give a strained 3-membered ring.",
            difficulty: 3,
            hint: "Count the ring atoms for each possible enolate attacking the other C=O; the least strained ring wins.",
          },
          {
            kind: "mcq",
            q: "Arrange in decreasing acidity: (P) CH₃CH₂COOH, (Q) ClCH₂CH₂COOH, (R) CH₃CHClCOOH, (S) CH₃CCl₂COOH.",
            options: ["S > R > Q > P", "R > S > Q > P", "S > Q > R > P", "P > Q > R > S"],
            answer: 0,
            explain: "Two α-chlorines (S) beat one α-chlorine (R), which beats one β-chlorine (Q). Propanoic acid with no −I group is weakest.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A monocarboxylic acid, 0.300 g, is neutralised by 50.0 mL of 0.100 M NaOH. What is the molar mass of the acid in g/mol?",
            answer: 60,
            tolerance: 0.5,
            unit: "g/mol",
            explain: "Moles NaOH = 0.0500 L × 0.100 = 0.00500 mol = moles of acid (monobasic). M = 0.300 ÷ 0.00500 = 60 g/mol (ethanoic acid).",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A compound X (C₇H₆O) gives Tollens' test but not Fehling's test. With concentrated KOH it gives Y and Z; Z on acidification gives a white solid that releases CO₂ from NaHCO₃. Y is:",
            options: ["Benzoic acid", "Benzyl alcohol", "Toluene", "Phenol"],
            answer: 1,
            explain: "X is benzaldehyde (aromatic: Tollens' yes, Fehling's no). Cannizzaro gives benzyl alcohol (Y) and potassium benzoate (Z); Z with acid gives benzoic acid.",
            difficulty: 3,
            hint: "Which aldehyde fails Fehling's test? What does it do with concentrated alkali?",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Amines (NCERT) = Organic Compounds containing Nitrogen (ISC)       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-amines",
    title: "Amines",
    icon: "🐟",
    description: "Structure, naming and preparation of amines, their basic strength, chemical reactions and tests, and the synthetic power of arenediazonium salts.",
    lessons: [
      {
        slug: "c12-amines-structure-preparation",
        title: "Amines: Structure, Naming, Preparation and Physical Properties",
        summary: "Amines as derivatives of ammonia: classification, pyramidal structure, IUPAC names, the six NCERT methods of preparation and how hydrogen bonding sets their boiling points.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🐟",
            caption: "The smell of fish that is not fresh comes partly from trimethylamine. Amines are also found in dyes, many medicines and in the neurotransmitters of our own body.",
          },
          {
            type: "text",
            md: t`**Amines** are derivatives of ammonia in which one, two or three hydrogens are replaced by alkyl or aryl groups. Replacing one H gives a **primary (1°)** amine, RNH₂; two gives a **secondary (2°)** amine, R₂NH; three gives a **tertiary (3°)** amine, R₃N. When the R groups are the same the amine is *simple*; when they differ it is *mixed*. If N is bonded directly to a benzene ring (C₆H₅NH₂, aniline) it is an **arylamine**; in benzylamine, C₆H₅CH₂NH₂, the N is on a side-chain carbon, so it behaves as an aliphatic amine.

**Structure.** Like ammonia, the nitrogen in amines is **sp³ hybridised**. Three sp³ orbitals bond to H or C, and the fourth holds the **lone pair**. So amines are **pyramidal**. The lone pair repels the bond pairs more strongly, so the angle is less than 109.5°; in trimethylamine the C–N–C angle is about **108°**.`,
          },
          {
            type: "table",
            headers: ["Formula", "Common name", "IUPAC name", "Type"],
            rows: [
              ["CH₃NH₂", "Methylamine", "Methanamine", "1°"],
              ["CH₃CH₂CH₂NH₂", "n-Propylamine", "Propan-1-amine", "1°"],
              ["(CH₃)₂CHNH₂", "Isopropylamine", "Propan-2-amine", "1°"],
              ["CH₃NHC₂H₅", "Ethylmethylamine", "N-Methylethanamine", "2°"],
              ["(CH₃)₃N", "Trimethylamine", "N,N-Dimethylmethanamine", "3°"],
              ["H₂N(CH₂)₆NH₂", "Hexamethylenediamine", "Hexane-1,6-diamine", "1°"],
              ["C₆H₅NH₂", "Aniline", "Benzenamine (aniline accepted)", "1° aryl"],
              ["C₆H₅N(CH₃)₂", "N,N-Dimethylaniline", "N,N-Dimethylbenzenamine", "3° aryl"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Naming in one line",
            md: "IUPAC: replace the *-e* of the alkane with **-amine**. For 2° and 3° amines, the largest group gives the parent name and the other groups are prefixed with **N-** to show they sit on nitrogen. With two NH₂ groups keep the *-e*: ethane-1,2-diamine.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Classify (CH₃)₃C–NH₂ (tert-butylamine).",
                options: ["Primary amine", "Secondary amine", "Tertiary amine", "Quaternary salt"],
                answer: 0,
                explain: "The class of an amine depends on how many carbons are attached to nitrogen, not on the carbon type. Here N carries one carbon group and two H, so it is primary, even though that carbon is tertiary.",
              },
            ],
          },
          {
            type: "heading",
            text: "Preparation of amines",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Reduction of nitro compounds**: H₂ over Ni, Pt or Pd, or a metal in acid (Sn + HCl, or Fe scrap + HCl). Fe + HCl is preferred: the FeCl₂ formed is hydrolysed and releases HCl, so only a small amount of acid is needed. C₆H₅NO₂ → C₆H₅NH₂.",
              "**Ammonolysis of alkyl halides**: an ethanolic solution of NH₃ heated with RX in a sealed tube (373 K). The 1° amine formed reacts further, so a mixture of 1°, 2°, 3° amines and the quaternary ammonium salt results. Excess NH₃ favours the 1° amine. Reactivity of halides: RI > RBr > RCl.",
              "**Reduction of nitriles**: LiAlH₄, H₂/Ni or sodium amalgam in ethanol: RC≡N → RCH₂NH₂. The amine has **one carbon more** than the alkyl halide used to make the nitrile (ascent of series).",
              "**Reduction of amides**: LiAlH₄, then water: RCONH₂ → RCH₂NH₂ (same number of carbons).",
              "**Gabriel phthalimide synthesis**: phthalimide + ethanolic KOH → potassium phthalimide; heating with RX gives N-alkylphthalimide; alkaline hydrolysis releases RNH₂. It gives **pure 1° aliphatic amines** only.",
              "**Hoffmann bromamide degradation**: a 1° amide with Br₂ and aqueous (or ethanolic) NaOH gives a 1° amine with **one carbon fewer**, as the C=O carbon leaves as carbonate.",
            ],
          },
          {
            type: "formula",
            tex: t`\text{RCONH}_2 + \text{Br}_2 + 4\,\text{NaOH} \rightarrow \text{RNH}_2 + \text{Na}_2\text{CO}_3 + 2\,\text{NaBr} + 2\,\text{H}_2\text{O}`,
            caption: "Hoffmann bromamide degradation. The alkyl or aryl group moves from the carbonyl carbon to nitrogen.",
          },
          {
            type: "example",
            title: "Choosing a method by counting carbons",
            problem: "Starting from a three-carbon compound in each case, prepare: (a) ethanamine, (b) butan-1-amine, (c) propan-1-amine.",
            steps: [
              "(a) Ethanamine has 2 carbons, one fewer than the start: use Hoffmann degradation. CH₃CH₂CONH₂ (propanamide) + Br₂ + 4NaOH → CH₃CH₂NH₂ + Na₂CO₃ + 2NaBr + 2H₂O.",
              "(b) Butan-1-amine has 4 carbons, one more: make a nitrile. CH₃CH₂CH₂Br + KCN → CH₃CH₂CH₂CN (butanenitrile).",
              "Reduce it: CH₃CH₂CH₂CN + LiAlH₄, then H₂O → CH₃CH₂CH₂CH₂NH₂.",
              "(c) Same carbon count and a pure 1° amine wanted: Gabriel synthesis with 1-bromopropane, or reduce propanamide with LiAlH₄.",
            ],
            answer: "(a) Hoffmann bromamide on propanamide; (b) 1-bromopropane → KCN → LiAlH₄; (c) Gabriel synthesis with 1-bromopropane (or LiAlH₄ on propanamide).",
          },
          {
            type: "mistake",
            wrong: "Gabriel phthalimide synthesis can be used to make aniline from chlorobenzene.",
            right: "Gabriel synthesis cannot make aromatic primary amines. Aryl halides do not undergo nucleophilic substitution with the phthalimide anion.",
            why: "The method looks general (\"halide in, 1° amine out\"). But its key step is SN2 attack on the carbon of R–X, and the C–Cl bond of chlorobenzene has partial double-bond character and sits on an sp² carbon, so it does not react.",
          },
          {
            type: "text",
            md: t`**Physical properties.** The lower aliphatic amines are gases with a fishy smell; 1° amines with three or more carbons are liquids, and higher ones are solids. Aniline and other arylamines are usually colourless when pure but **darken on storage** because air oxidises them.

Lower aliphatic amines dissolve in water because they form hydrogen bonds with it; solubility falls as the hydrophobic alkyl part grows. Amines are less soluble than alcohols of similar mass, because N is less electronegative than O, so N–H···N hydrogen bonds are weaker than O–H···O.

Among isomeric amines, boiling points fall in the order **1° > 2° > 3°**. A 1° amine has two N–H hydrogens for hydrogen bonding, a 2° amine one, and a 3° amine none. For example, butan-1-amine boils at about 351 K, N-ethylethanamine at about 329 K and N,N-dimethylethanamine at about 310 K.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each method to how it changes the carbon count.",
              pairs: [
                ["Hoffmann bromamide degradation", "One carbon fewer"],
                ["Reduction of a nitrile made from RX + KCN", "One carbon more than RX"],
                ["Reduction of an amide with LiAlH₄", "Same number as the amide"],
                ["Gabriel synthesis", "Same number as RX; pure 1° amine"],
              ],
              explain: "Count carbons first in any conversion question: it tells you whether you need Hoffmann (−1 C), the cyanide route (+1 C) or a same-carbon method.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: ISC",
            md: "The ISC chapter *Organic Compounds containing Nitrogen* also expects alkyl cyanides and isocyanides. RX + KCN gives mainly the nitrile RCN; RX + AgCN gives mainly the isocyanide RNC. Hydrolysis: RCN → RCOOH (via RCONH₂), but RNC → RNH₂ + HCOOH. Reduction: RCN → RCH₂NH₂ (1° amine), but RNC → RNHCH₃ (2° amine).",
          },
          {
            type: "keypoints",
            items: [
              "1°, 2°, 3° amines have one, two, three groups on N; N is sp³ and the molecule is pyramidal (about 108° in (CH₃)₃N).",
              "Reduce nitro compounds (Fe/HCl preferred), nitriles (+1 C) or amides (same C) to make amines.",
              "Ammonolysis gives a mixture; Gabriel gives pure 1° aliphatic amines only; Hoffmann gives one carbon fewer.",
              "Isomeric amines boil in the order 1° > 2° > 3°; amines boil lower than alcohols of similar mass.",
            ],
          },
        ],
        flashcards: [
          { front: "Primary, secondary, tertiary amine", back: "Number of alkyl/aryl groups on nitrogen: one (RNH₂), two (R₂NH), three (R₃N)." },
          { front: "Shape of amines", back: "Pyramidal; N is sp³ with one lone pair. C–N–C angle in trimethylamine about 108°." },
          { front: "Why Fe/HCl for reducing nitrobenzene?", back: "FeCl₂ formed is hydrolysed, releasing HCl, so only a small amount of acid is needed." },
          { front: "Gabriel phthalimide synthesis", back: "Potassium phthalimide + RX → N-alkylphthalimide → alkaline hydrolysis → pure 1° aliphatic amine. Not for arylamines." },
          { front: "Hoffmann bromamide degradation", back: "RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O. One carbon fewer." },
          { front: "Ammonolysis of alkyl halides: drawback", back: "Gives a mixture of 1°, 2°, 3° amines and quaternary salt. Excess NH₃ favours the 1° amine." },
          { front: "Boiling points of isomeric amines", back: "1° > 2° > 3°, because the number of N–H hydrogens for hydrogen bonding falls." },
          { front: "Why does aniline darken on standing?", back: "Atmospheric oxidation gives coloured products." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The C–N–C bond angle in trimethylamine is about:",
            options: ["120°", "109.5°", "108°", "90°"],
            answer: 2,
            explain: "N is sp³ with a lone pair. Lone pair–bond pair repulsion squeezes the angle slightly below 109.5°, to about 108°.",
          },
          {
            kind: "mcq",
            q: "Which method gives an amine with one carbon fewer than the starting compound?",
            options: ["Reduction of an amide with LiAlH₄", "Hoffmann bromamide degradation", "Gabriel phthalimide synthesis", "Reduction of a nitrile"],
            answer: 1,
            explain: "In the Hoffmann reaction the carbonyl carbon leaves as Na₂CO₃.",
          },
          {
            kind: "mcq",
            q: "The IUPAC name of CH₃CH₂N(CH₃)₂ is:",
            options: ["N,N-Dimethylethanamine", "Ethyldimethylamine", "N-Ethyl-N-methylmethanamine", "Butan-2-amine"],
            answer: 0,
            explain: "The ethyl group is the largest, so the parent is ethanamine; the two methyl groups are on N.",
          },
          {
            kind: "truefalse",
            q: "Aniline can be prepared by Gabriel phthalimide synthesis using chlorobenzene.",
            answer: false,
            explain: "Aryl halides do not undergo nucleophilic substitution with the phthalimide anion, so arylamines cannot be made this way.",
          },
          {
            kind: "mcq",
            q: "Which has the highest boiling point?",
            options: ["Butan-1-amine", "N-Ethylethanamine", "N,N-Dimethylethanamine", "All are equal (same molar mass)"],
            answer: 0,
            explain: "All are C₄H₁₁N, but the 1° amine has two N–H hydrogens for hydrogen bonding, the 2° one, and the 3° none.",
          },
          {
            kind: "numeric",
            q: "How many grams of methanamine (CH₃NH₂, 31 g/mol) can be obtained at most from 11.8 g of ethanamide (CH₃CONH₂, 59 g/mol) by the Hoffmann bromamide reaction?",
            answer: 6.2,
            tolerance: 0.05,
            unit: "g",
            explain: "Moles of amide = 11.8 ÷ 59 = 0.200 mol, giving 0.200 mol CH₃NH₂ = 0.200 × 31 = 6.2 g.",
            difficulty: 2,
            hint: "One mole of amide gives one mole of amine.",
          },
          {
            kind: "multi",
            q: "Which conversions give propan-1-amine? Select all that apply.",
            options: ["CH₃CH₂CN + LiAlH₄, then H₂O", "CH₃CH₂CH₂CONH₂ + Br₂ + NaOH", "CH₃CH₂CONH₂ + LiAlH₄, then H₂O", "CH₃CH₂CONH₂ + Br₂ + NaOH"],
            answers: [0, 1, 2],
            explain: "Propanenitrile and propanamide both reduce to CH₃CH₂CH₂NH₂. Butanamide loses a carbon in Hoffmann degradation, giving propan-1-amine. Propanamide by Hoffmann gives ethanamine.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-amines-basicity-reactions",
        title: "Basic Character and Reactions of Amines",
        summary: "Why amines are bases, what makes some stronger than others in water and in the gas phase, and their reactions: acylation, carbylamine, nitrous acid, Hinsberg's test and ring substitution in aniline.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`The lone pair on nitrogen makes amines **Lewis bases** and Brønsted bases. They turn red litmus blue and form salts with acids: $\text{RNH}_2 + \text{HCl} \rightarrow \text{RNH}_3^+\text{Cl}^-$. The salts are water-soluble and insoluble in ether; a strong base such as NaOH gives back the free amine. This is used to separate amines from neutral organic compounds.

In water: $\text{RNH}_2 + \text{H}_2\text{O} \rightleftharpoons \text{RNH}_3^+ + \text{OH}^-$. The larger the **base constant** $K_b$, or the smaller $\text{p}K_b$, the stronger the base.`,
          },
          {
            type: "formula",
            tex: t`K_b = \frac{[\text{RNH}_3^+][\text{OH}^-]}{[\text{RNH}_2]} \qquad \text{p}K_b = -\log K_b`,
            caption: "Smaller pKb means a stronger base.",
          },
          {
            type: "table",
            headers: ["Base", "pKb (in water)"],
            rows: [
              ["Diethylamine, (C₂H₅)₂NH", "3.00"],
              ["Triethylamine, (C₂H₅)₃N", "3.25"],
              ["Dimethylamine, (CH₃)₂NH", "3.27"],
              ["Ethylamine, C₂H₅NH₂", "3.29"],
              ["Methylamine, CH₃NH₂", "3.38"],
              ["Trimethylamine, (CH₃)₃N", "4.22"],
              ["Benzylamine, C₆H₅CH₂NH₂", "4.70"],
              ["Ammonia, NH₃", "4.75"],
              ["Aniline, C₆H₅NH₂", "9.38"],
            ],
          },
          {
            type: "text",
            md: t`**Aliphatic amines are stronger bases than ammonia.** Alkyl groups release electrons (+I effect), increasing electron density on N and stabilising the ammonium ion. In the **gas phase**, where only this effect acts, the order is 3° > 2° > 1° > NH₃.

**In water the order changes**, because the substituted ammonium ion is also stabilised by **hydrogen bonding (solvation)** with water. The more N–H hydrogens the ion has, the better it is solvated: RNH₃⁺ > R₂NH₂⁺ > R₃NH⁺. **Steric hindrance** to solvation also matters for bulky groups. The result of +I effect, solvation and steric factors is:

- methyl series: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃
- ethyl series: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃

**Arylamines are much weaker bases than ammonia.** In aniline the lone pair on N is delocalised into the ring by resonance (five resonance structures), so it is less available for a proton. The anilinium ion has only two (Kekulé) structures, so protonation costs aniline its extra resonance stability. Electron-releasing groups on the ring (–CH₃, –OCH₃) raise basicity; electron-withdrawing groups (–NO₂, –Cl) lower it. For example, p-toluidine (pKb 8.92) > aniline (9.38) > p-nitroaniline (about 13).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is the strongest base in aqueous solution?",
                options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "C₆H₅NH₂"],
                answer: 1,
                explain: "Dimethylamine (pKb 3.27) has the best balance of +I effect and solvation of its ammonium ion. Trimethylamine's ion has only one N–H for hydrogen bonding; aniline is a weak base.",
              },
            ],
          },
          {
            type: "list",
            items: [
              "**Alkylation**: amines react with alkyl halides to give 2° and 3° amines and finally quaternary ammonium salts.",
              "**Acylation**: 1° and 2° amines react with acid chlorides, anhydrides or esters by nucleophilic substitution, giving **amides**: C₂H₅NH₂ + CH₃COCl → C₂H₅NHCOCH₃ + HCl. A base stronger than the amine, such as pyridine, removes the HCl and shifts the equilibrium. 3° amines have no N–H, so they are not acylated.",
              "**Benzoylation**: with benzoyl chloride: CH₃NH₂ + C₆H₅COCl → C₆H₅CONHCH₃ + HCl (N-methylbenzamide).",
              "**Carbylamine reaction**: only **1° amines** (aliphatic and aromatic), warmed with chloroform and ethanolic KOH, give **isocyanides** with a very unpleasant smell: RNH₂ + CHCl₃ + 3KOH → RNC + 3KCl + 3H₂O. It is a test for 1° amines.",
              "**Nitrous acid** (made in the flask from NaNO₂ + HCl): 1° aliphatic amines give unstable aliphatic diazonium salts, which at once give alcohols and **nitrogen gas** quantitatively (used to estimate amino acids and proteins). 1° aromatic amines at 273–278 K give stable **arenediazonium salts**.",
            ],
          },
          {
            type: "table",
            headers: ["Amine", "With benzenesulphonyl chloride (Hinsberg's reagent)", "Product in alkali"],
            rows: [
              ["1° (RNH₂)", "N-Alkylbenzenesulphonamide, C₆H₅SO₂NHR", "**Soluble**: the N–H next to the strongly withdrawing SO₂ group is acidic"],
              ["2° (R₂NH)", "N,N-Dialkylbenzenesulphonamide, C₆H₅SO₂NR₂", "**Insoluble**: no H on N"],
              ["3° (R₃N)", "No reaction", "—"],
            ],
          },
          {
            type: "text",
            md: t`**Electrophilic substitution in aniline.** The –NH₂ group is a powerful **activating, ortho- and para-directing** group.

- **Bromination**: aniline with bromine water at room temperature gives a **white precipitate of 2,4,6-tribromoaniline** at once. To get only one bromine, first **protect** –NH₂ by acetylation (acetic anhydride) to acetanilide. The –NHCOCH₃ group activates less, because the nitrogen lone pair is also delocalised onto the acetyl oxygen. Bromination then gives mainly p-bromoacetanilide, and hydrolysis gives p-bromoaniline.
- **Nitration**: direct nitration gives tarry oxidation products as well as nitroanilines. In the strongly acidic mixture much of the aniline is protonated to the anilinium ion, which is **meta-directing**, so a large amount of m-nitroaniline forms (roughly 51% para, 47% meta, 2% ortho). Acetylation first, then nitration and hydrolysis, gives mainly p-nitroaniline.
- **Sulphonation**: aniline + conc. H₂SO₄ gives anilinium hydrogensulphate, which on heating at 453–473 K gives **sulphanilic acid** (p-aminobenzenesulphonic acid), mainly as a zwitterion.
- Aniline does **not** undergo Friedel–Crafts reactions: it forms a salt with the Lewis acid AlCl₃, and the positive nitrogen then deactivates the ring.`,
          },
          {
            type: "example",
            title: "Hinsberg's test in action",
            problem: "Three bottles contain C₄H₁₁N isomers: butan-1-amine, N-ethylethanamine and N,N-dimethylethanamine. Each is shaken with benzenesulphonyl chloride and then with excess aqueous KOH. Predict what you see.",
            steps: [
              "Butan-1-amine (1°): forms C₆H₅SO₂NHC₄H₉. Its N–H is acidic, so it dissolves in KOH as a salt. Acidifying the solution brings back the precipitate.",
              "N-Ethylethanamine (2°): forms C₆H₅SO₂N(C₂H₅)₂, which has no N–H. It stays as an insoluble solid in KOH.",
              "N,N-Dimethylethanamine (3°): has no N–H, so it does not react; the amine stays (it dissolves when acid is added).",
              "Confirm the 1° amine with the carbylamine test: only butan-1-amine gives the offensive isocyanide smell.",
            ],
            answer: "1°: clear solution in alkali; 2°: insoluble solid; 3°: no sulphonamide formed.",
          },
          {
            type: "mistake",
            wrong: "Aniline is an amine, so like ethylamine it is a stronger base than ammonia.",
            right: "Aniline (pKb 9.38) is a much weaker base than ammonia (4.75). Only aliphatic amines are stronger than ammonia.",
            why: "\"Alkyl groups increase basicity\" gets stretched to every amine. In aniline the lone pair is delocalised into the ring and is less available to accept a proton.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which amines give the carbylamine (isocyanide) test?",
              groups: ["Positive", "Negative"],
              items: [
                { text: "Aniline", group: 0, hint: "Aromatic, but primary: it has NH₂." },
                { text: "Ethanamine", group: 0, hint: "Primary aliphatic amine." },
                { text: "N-Methylaniline", group: 1, hint: "Secondary: only one H on N." },
                { text: "Triethylamine", group: 1, hint: "Tertiary: no H on N." },
                { text: "Benzylamine", group: 0, hint: "C₆H₅CH₂NH₂ is a primary amine." },
                { text: "N,N-Dimethylaniline", group: 1, hint: "Tertiary." },
              ],
              explain: "The carbylamine test needs two hydrogens on nitrogen, so every primary amine (aliphatic or aromatic) passes and every 2° or 3° amine fails.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "For \"arrange in increasing basic strength\" questions, say whether the order is in water or in the gas phase, and give the three reasons (+I effect, solvation, steric hindrance). For \"why is –NH₂ protected before nitration?\" mention both points: it prevents oxidation and stops anilinium ion (meta product) formation.",
          },
          {
            type: "keypoints",
            items: [
              "Aqueous basicity: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ and (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃; aniline is far weaker.",
              "Acylation and benzoylation work for 1° and 2° amines; carbylamine is a test only for 1° amines.",
              "Hinsberg: 1° sulphonamide dissolves in alkali, 2° does not, 3° does not react.",
              "HNO₂: 1° aliphatic → alcohol + N₂; 1° aromatic at 273–278 K → diazonium salt.",
              "Aniline: bromine water → 2,4,6-tribromoaniline; protect by acetylation for mono-substitution and para-nitration; no Friedel–Crafts.",
            ],
          },
        ],
        flashcards: [
          { front: "Gas-phase basicity order", back: "3° > 2° > 1° > NH₃ (only the +I effect acts)." },
          { front: "Aqueous basicity: ethylamines", back: "(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃." },
          { front: "Aqueous basicity: methylamines", back: "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃." },
          { front: "Why is aniline a weak base?", back: "Its N lone pair is delocalised into the ring; anilinium ion has fewer resonance structures than aniline." },
          { front: "Carbylamine reaction", back: "1° amine + CHCl₃ + 3KOH (alc.) → RNC (foul-smelling isocyanide) + 3KCl + 3H₂O." },
          { front: "Hinsberg's reagent", back: "Benzenesulphonyl chloride, C₆H₅SO₂Cl. 1° → alkali-soluble sulphonamide; 2° → insoluble; 3° → no reaction." },
          { front: "Why acetylate aniline before nitration?", back: "To prevent oxidation and anilinium ion formation, and to reduce activation, so p-nitro product forms mainly." },
          { front: "Sulphanilic acid", back: "p-Aminobenzenesulphonic acid, from heating anilinium hydrogensulphate at 453–473 K; exists as a zwitterion." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Arrange in increasing basic strength in water: C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N, NH₃.",
            options: ["NH₃ < C₂H₅NH₂ < (C₂H₅)₃N < (C₂H₅)₂NH", "NH₃ < (C₂H₅)₃N < C₂H₅NH₂ < (C₂H₅)₂NH", "(C₂H₅)₃N < (C₂H₅)₂NH < C₂H₅NH₂ < NH₃", "NH₃ < C₂H₅NH₂ < (C₂H₅)₂NH < (C₂H₅)₃N"],
            answer: 0,
            explain: "pKb: NH₃ 4.75, C₂H₅NH₂ 3.29, (C₂H₅)₃N 3.25, (C₂H₅)₂NH 3.00. The last option is the gas-phase order.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which amine does NOT react with benzenesulphonyl chloride?",
            options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "C₆H₅NH₂"],
            answer: 2,
            explain: "A tertiary amine has no hydrogen on nitrogen to be replaced by the sulphonyl group.",
          },
          {
            kind: "mcq",
            q: "Aniline reacts with bromine water at room temperature to give:",
            options: ["p-Bromoaniline", "o-Bromoaniline", "2,4,6-Tribromoaniline", "m-Bromoaniline"],
            answer: 2,
            explain: "–NH₂ activates the ring so strongly that all three ortho and para positions are brominated at once (white precipitate).",
          },
          {
            kind: "mcq",
            q: "Direct nitration of aniline gives a large amount of m-nitroaniline because:",
            options: ["–NH₂ is meta-directing", "Aniline is protonated to the anilinium ion, which is meta-directing", "Steric hindrance blocks ortho and para positions", "Nitric acid oxidises the para position"],
            answer: 1,
            explain: "In strong acid –NH₂ becomes –NH₃⁺, an electron-withdrawing, meta-directing group.",
          },
          {
            kind: "multi",
            q: "Which compounds give a foul-smelling product on warming with CHCl₃ and alcoholic KOH? Select all that apply.",
            options: ["Aniline", "N-Methylaniline", "Propan-2-amine", "Trimethylamine"],
            answers: [0, 2],
            explain: "The carbylamine reaction is given by primary amines only: aniline and propan-2-amine.",
          },
          {
            kind: "mcq",
            q: "0.59 g of a 1° aliphatic amine RNH₂ reacts completely with nitrous acid and releases 224 mL of N₂ (measured at 273 K, 1 atm). The amine is:",
            options: ["Ethanamine", "Propan-1-amine", "Butan-1-amine", "Methanamine"],
            answer: 1,
            explain: "224 mL = 0.0100 mol N₂ = 0.0100 mol amine (1 : 1). Molar mass = 0.59 ÷ 0.0100 = 59 g/mol, which is C₃H₇NH₂ (propan-1-amine or propan-2-amine; only propan-1-amine is offered).",
            difficulty: 2,
            hint: "At 273 K and 1 atm, 1 mol of gas occupies 22.4 L.",
          },
          {
            kind: "truefalse",
            q: "Aniline undergoes Friedel–Crafts alkylation easily because –NH₂ activates the ring.",
            answer: false,
            explain: "Aniline forms a salt with AlCl₃. The positive nitrogen then deactivates the ring, so Friedel–Crafts reactions do not occur.",
          },
          {
            kind: "mcq",
            q: "Which is the weakest base?",
            options: ["Aniline", "p-Toluidine", "p-Nitroaniline", "Benzylamine"],
            answer: 2,
            explain: "–NO₂ withdraws electrons by −R and −I effects, pulling the lone pair away from N (pKb about 13). Benzylamine (4.70) is the strongest here.",
          },
        ],
      },
      {
        slug: "c12-diazonium-salts",
        title: "Diazonium Salts",
        summary: "How arenediazonium salts are made, why they are more stable than aliphatic ones, and how replacing or keeping the N₂ group lets chemists make halo-, cyano-, hydroxy- and azo compounds.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎨",
            caption: "The bright orange and yellow colours in many fabric dyes and in the indicator methyl orange come from azo compounds, made by coupling diazonium salts.",
          },
          {
            type: "text",
            md: t`**Diazonium salts** have the general formula $\text{RN}_2^+\text{X}^-$, where R is an aryl group and X⁻ is Cl⁻, Br⁻, HSO₄⁻ or BF₄⁻. The –N₂⁺ group is the **diazonium group**. C₆H₅N₂⁺Cl⁻ is **benzenediazonium chloride**.

Aliphatic diazonium salts are very unstable and decompose at once (that is why 1° aliphatic amines give alcohols with nitrous acid). **Arenediazonium salts** are stable for a short time in cold solution, because the positive charge is dispersed over the benzene ring by **resonance**. They are colourless crystalline solids, readily soluble in water. In the dry state many are explosive, so they are used in solution straight after making them. Benzenediazonium fluoroborate is an exception: it is insoluble in water and stable at room temperature.`,
          },
          {
            type: "formula",
            tex: t`\text{C}_6\text{H}_5\text{NH}_2 + \text{NaNO}_2 + 2\,\text{HCl} \xrightarrow{273\text{–}278\ \text{K}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{NaCl} + 2\,\text{H}_2\text{O}`,
            caption: "Diazotisation. Nitrous acid is made in the mixture from NaNO₂ and HCl; ice keeps the salt from decomposing.",
          },
          {
            type: "heading",
            text: "Reactions in which N₂ is lost",
          },
          {
            type: "table",
            headers: ["Reagent", "Product", "Name"],
            rows: [
              ["CuCl / HCl", "C₆H₅Cl", "Sandmeyer reaction"],
              ["CuBr / HBr", "C₆H₅Br", "Sandmeyer reaction"],
              ["CuCN / KCN", "C₆H₅CN", "Sandmeyer reaction"],
              ["Cu powder + HCl (or HBr)", "C₆H₅Cl (or C₆H₅Br)", "Gattermann reaction"],
              ["KI (warm)", "C₆H₅I", "—"],
              ["HBF₄, then heat the dry fluoroborate", "C₆H₅F + BF₃ + N₂", "Balz–Schiemann reaction"],
              ["H₃PO₂ + H₂O, or CH₃CH₂OH", "C₆H₆", "Reduction (removes the –NH₂ via –N₂⁺)"],
              ["Warm water (283 K or above)", "C₆H₅OH", "Hydrolysis"],
              ["HBF₄, then NaNO₂ with Cu, heat", "C₆H₅NO₂", "—"],
            ],
          },
          {
            type: "formula",
            tex: t`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{H}_3\text{PO}_2 + \text{H}_2\text{O} \rightarrow \text{C}_6\text{H}_6 + \text{N}_2 + \text{H}_3\text{PO}_3 + \text{HCl}`,
            caption: "With ethanol: C₆H₅N₂⁺Cl⁻ + CH₃CH₂OH → C₆H₆ + N₂ + CH₃CHO + HCl.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which reaction uses copper powder rather than a copper(I) salt?",
                options: ["Sandmeyer", "Gattermann", "Balz–Schiemann", "Coupling"],
                answer: 1,
                explain: "Gattermann uses Cu powder with HCl or HBr; Sandmeyer uses CuCl, CuBr or CuCN. The Gattermann yield is usually lower.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Reactions in which the diazo nitrogen is kept: coupling.** The diazonium ion is a weak electrophile. It attacks only strongly activated rings, at the **para** position, giving brightly coloured **azo compounds** (–N=N–) joined by an extended conjugated system.

- With **phenol** in alkaline solution: **p-hydroxyazobenzene**, an orange dye.
- With **aniline** in a mildly acidic medium: **p-aminoazobenzene**, a yellow dye.

**Why diazonium salts matter in synthesis.** They let us put F, Cl, Br, I, CN, OH and NO₂ on a ring in positions that direct substitution cannot reach. Fluorine and iodine cannot be introduced well by direct halogenation, and cyanobenzene cannot be made from chlorobenzene by nucleophilic substitution, but the diazonium route gives them easily. Because –NH₂ can also be removed (H₃PO₂), it can be used as a temporary directing group.`,
          },
          {
            type: "example",
            title: "Using –NH₂ as a temporary director",
            problem: "Prepare 1,3,5-tribromobenzene from aniline.",
            steps: [
              "Direct bromination of benzene cannot give the 1,3,5-pattern, because Br is ortho/para-directing. But in aniline, the ortho and para positions to –NH₂ are 2, 4 and 6, which are meta to one another.",
              "Aniline + bromine water → 2,4,6-tribromoaniline (white precipitate).",
              "Diazotise: NaNO₂ + HCl at 273–278 K → 2,4,6-tribromobenzenediazonium chloride.",
              "Treat with H₃PO₂ (or ethanol): the –N₂⁺ group is replaced by H, giving 1,3,5-tribromobenzene + N₂.",
            ],
            answer: "Aniline → Br₂(aq) → 2,4,6-tribromoaniline → NaNO₂/HCl, 273–278 K → H₃PO₂ → 1,3,5-tribromobenzene.",
          },
          {
            type: "mistake",
            wrong: "Diazotisation of aniline can be done at room temperature, like most organic reactions.",
            right: "Diazotisation must be carried out at 273–278 K (in ice). Above this the diazonium salt reacts with water and gives phenol and N₂.",
            why: "The arenediazonium salt is only moderately stable. Learners remember the reagents (NaNO₂ + HCl) but forget the temperature, which examiners always check.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the reagent with the product from benzenediazonium chloride.",
              pairs: [
                ["CuCN / KCN", "Benzonitrile"],
                ["KI", "Iodobenzene"],
                ["HBF₄, then heat", "Fluorobenzene"],
                ["H₃PO₂", "Benzene"],
                ["Phenol in NaOH", "p-Hydroxyazobenzene"],
                ["Warm water", "Phenol"],
              ],
              explain: "In five of these, N₂ is lost and a new group takes its place. Only coupling with phenol keeps both nitrogens, forming an –N=N– azo link.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "Conversion questions (3 marks) often need a diazonium step: write each step with reagent and temperature. Typical chains: nitrobenzene → Sn/HCl → aniline → NaNO₂/HCl, 273–278 K → CuCN/KCN → benzonitrile → H₃O⁺ → benzoic acid. Name the dye and its colour for coupling: p-hydroxyazobenzene (orange), p-aminoazobenzene (yellow).",
          },
          {
            type: "keypoints",
            items: [
              "Diazotisation: ArNH₂ + NaNO₂ + 2HCl at 273–278 K → ArN₂⁺Cl⁻; arenediazonium ions are resonance-stabilised.",
              "Sandmeyer (CuX or CuCN), Gattermann (Cu + HX), KI, Balz–Schiemann (HBF₄), H₃PO₂/ethanol, water: N₂ is lost.",
              "Coupling keeps N₂: with phenol (alkaline) → orange p-hydroxyazobenzene; with aniline (mild acid) → yellow p-aminoazobenzene.",
              "Diazonium salts introduce F, I, CN, OH and NO₂ where direct substitution fails, and let –NH₂ act as a removable director.",
            ],
          },
        ],
        flashcards: [
          { front: "Diazotisation conditions", back: "1° aromatic amine + NaNO₂ + HCl at 273–278 K." },
          { front: "Why are arenediazonium salts more stable than alkyl ones?", back: "The positive charge is dispersed over the benzene ring by resonance." },
          { front: "Sandmeyer reaction", back: "ArN₂⁺ + CuCl/HCl, CuBr/HBr or CuCN/KCN → ArCl, ArBr or ArCN + N₂." },
          { front: "Gattermann reaction (diazonium)", back: "ArN₂⁺ + Cu powder with HCl or HBr → ArCl or ArBr + N₂." },
          { front: "Balz–Schiemann reaction", back: "ArN₂⁺Cl⁻ + HBF₄ → ArN₂⁺BF₄⁻ → heat → ArF + BF₃ + N₂." },
          { front: "Replacing –N₂⁺ by H", back: "H₃PO₂ and water, or ethanol (which is oxidised to ethanal)." },
          { front: "Coupling with phenol", back: "Alkaline medium, para position → p-hydroxyazobenzene, orange dye." },
          { front: "Coupling with aniline", back: "Mildly acidic medium → p-aminoazobenzene, yellow dye." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Benzenediazonium chloride is warmed with water. The organic product is:",
            options: ["Benzene", "Phenol", "Chlorobenzene", "Aniline"],
            answer: 1,
            explain: "C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂ + HCl.",
          },
          {
            kind: "mcq",
            q: "Fluorobenzene is best prepared from benzenediazonium chloride by:",
            options: ["Treating with KF", "Treating with HBF₄ and then heating", "Sandmeyer reaction with CuF", "Direct fluorination of benzene"],
            answer: 1,
            explain: "The Balz–Schiemann route forms the stable fluoroborate, which decomposes on heating to ArF + BF₃ + N₂.",
          },
          {
            kind: "mcq",
            q: "Which product is obtained when benzenediazonium chloride couples with phenol in alkaline solution?",
            options: ["p-Aminoazobenzene (yellow)", "p-Hydroxyazobenzene (orange)", "Diphenyl ether", "Phenyl chloride"],
            answer: 1,
            explain: "The diazonium ion attacks the para position of the phenoxide ion, keeping the –N=N– link.",
          },
          {
            kind: "order",
            q: "Put the steps in order to make benzoic acid from nitrobenzene.",
            items: ["Sn + HCl (reduce to aniline)", "NaNO₂ + HCl at 273–278 K", "CuCN / KCN", "Hydrolysis with H₃O⁺"],
            explain: "Nitrobenzene → aniline → benzenediazonium chloride → benzonitrile → benzoic acid.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "In which reactions of benzenediazonium chloride is nitrogen gas released? Select all that apply.",
            options: ["Reaction with KI", "Coupling with aniline", "Reaction with H₃PO₂", "Reaction with CuBr/HBr"],
            answers: [0, 2, 3],
            explain: "Replacement reactions release N₂. Coupling keeps both nitrogen atoms in the azo product.",
          },
          {
            kind: "mcq",
            q: "Why must diazotisation be carried out at 273–278 K?",
            options: ["Nitrous acid is unstable at higher temperatures and the diazonium salt decomposes to phenol", "NaNO₂ does not dissolve above 278 K", "Aniline freezes above 278 K", "Higher temperature gives the azo dye directly"],
            answer: 0,
            explain: "Both nitrous acid and the diazonium salt decompose when warm; the salt reacts with water to give phenol and N₂.",
          },
          {
            kind: "numeric",
            q: "How many moles of nitrogen gas are released when 0.25 mol of benzenediazonium chloride is completely converted into iodobenzene?",
            answer: 0.25,
            tolerance: 0.001,
            unit: "mol",
            explain: "C₆H₅N₂⁺Cl⁻ + KI → C₆H₅I + KCl + N₂: 1 mol N₂ per mole of salt.",
          },
        ],
      },
      {
        slug: "c12-amines-exam-edge",
        title: "Exam edge: Amines and Diazonium Salts",
        summary: "Basicity orders with every twist, isomer counting, test-based identification and multi-step diazonium sequences at JEE Main, NEET and JEE Advanced level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "**What the exams ask.** **NEET and KCET/COMEDK** test basicity orders, the carbylamine and Hinsberg tests, Hoffmann and Gabriel facts, and named diazonium reactions. **JEE Main** asks reagent chains (nitrobenzene → … → product), basicity of substituted anilines and counting isomers or products. **JEE Advanced** combines these: identify a C₇H₉N or C₈H₁₁N amine from tests, explain anomalies such as the ortho effect, and design syntheses using –NH₂ as a removable directing group.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: "1. **Carbon count**: Hoffmann −1 C, nitrile route +1 C, everything else 0. Safe for every \"how many carbons\" question.\n\n2. **Basicity in water**: memorise the two NCERT series rather than \"working it out\"; reasoning from +I alone gives the gas-phase order, which is a common wrong option.\n\n3. **Substituted anilines**: an EDG at para raises basicity, an EWG lowers it. Any ortho substituent (even CH₃) lowers basicity below aniline (ortho effect: steric hindrance to protonation and solvation).\n\n4. **Benzylamine is aliphatic**: it is a stronger base than aniline and gives an alcohol, not a stable diazonium salt, with HNO₂.",
          },
          {
            type: "table",
            headers: ["Test", "1° amine", "2° amine", "3° amine"],
            rows: [
              ["Carbylamine (CHCl₃ + alc. KOH)", "Isocyanide (foul smell)", "No reaction", "No reaction"],
              ["Hinsberg (C₆H₅SO₂Cl, then KOH)", "Sulphonamide, soluble in alkali", "Sulphonamide, insoluble in alkali", "No reaction"],
              ["HNO₂ (NaNO₂ + HCl, cold)", "Aliphatic: alcohol + N₂. Aromatic: diazonium salt", "N-Nitrosoamine (yellow oil)", "Aliphatic: soluble nitrite salt; aromatic: p-nitroso compound"],
              ["Acylation (CH₃COCl)", "Amide forms", "Amide forms", "No reaction"],
            ],
          },
          {
            type: "example",
            title: "KCET / NEET level: isomer count",
            problem: "How many structural isomers of C₃H₉N are amines, and how many of them are primary?",
            steps: [
              "Primary (one C group on N): CH₃CH₂CH₂NH₂ (propan-1-amine) and (CH₃)₂CHNH₂ (propan-2-amine): 2.",
              "Secondary (two C groups on N): CH₃NHCH₂CH₃ (N-methylethanamine): 1.",
              "Tertiary (three C groups on N): (CH₃)₃N (N,N-dimethylmethanamine): 1.",
            ],
            answer: "4 amines: 2 primary, 1 secondary, 1 tertiary. (For C₄H₁₁N the count is 8: 4 primary, 3 secondary, 1 tertiary.)",
          },
          {
            type: "example",
            title: "JEE Main level: basicity of substituted anilines",
            problem: "Arrange in increasing basic strength: aniline (P), p-nitroaniline (Q), p-toluidine (R), benzylamine (S).",
            steps: [
              "Benzylamine: N is on a CH₂, not on the ring, so its lone pair is not delocalised. It is an aliphatic amine (pKb 4.70): strongest.",
              "p-Toluidine: CH₃ at para releases electrons (+I, hyperconjugation) into the ring, so the N lone pair is a little more available than in aniline (8.92 vs 9.38).",
              "p-Nitroaniline: –NO₂ at para withdraws electrons by −R and −I, pulling the lone pair further into the ring (pKb about 13): weakest.",
            ],
            answer: "Q < P < R < S, that is, p-nitroaniline < aniline < p-toluidine < benzylamine.",
          },
          {
            type: "example",
            title: "JEE Main level: a diazonium sequence",
            problem: "Benzene → (conc. HNO₃, conc. H₂SO₄) A → (Sn/HCl) B → (NaNO₂/HCl, 273 K) C → (CuCN/KCN) D → (H₂, Ni) E. Identify E and say how it differs from B in basicity.",
            steps: [
              "A = nitrobenzene; B = aniline; C = benzenediazonium chloride.",
              "Sandmeyer with CuCN gives D = benzonitrile, C₆H₅CN.",
              "Reduction of the nitrile: C₆H₅C≡N + 4[H] → C₆H₅CH₂NH₂, E = benzylamine.",
              "E has its N on a CH₂ group, so its lone pair is not delocalised: E (pKb 4.70) is a far stronger base than B (pKb 9.38).",
            ],
            answer: "E is benzylamine (phenylmethanamine), a much stronger base than aniline.",
          },
          {
            type: "example",
            title: "JEE Advanced level: identify the amines",
            problem: "Five isomeric amines have the formula C₇H₉N and contain a benzene ring. (a) How many give the carbylamine test? (b) Which gives an alcohol with N₂ (and no stable diazonium salt) with NaNO₂/HCl at 273 K? (c) How many give a sulphonamide that is insoluble in alkali?",
            steps: [
              "C₇H₉N with a ring: benzylamine C₆H₅CH₂NH₂; o-, m-, p-toluidine CH₃C₆H₄NH₂; N-methylaniline C₆H₅NHCH₃. That is five.",
              "(a) Carbylamine needs a 1° amine: benzylamine and the three toluidines: 4.",
              "(b) Benzylamine's NH₂ is on an aliphatic carbon; its diazonium ion is unstable and gives benzyl alcohol + N₂. The toluidines give arenediazonium salts.",
              "(c) Only the 2° amine N-methylaniline gives an N,N-disubstituted sulphonamide with no N–H, insoluble in alkali: 1.",
            ],
            answer: "(a) 4; (b) benzylamine; (c) 1 (N-methylaniline).",
          },
          {
            type: "mistake",
            wrong: "Basicity in water follows the +I effect: 3° > 2° > 1° > NH₃.",
            right: "That is the gas-phase order. In water, solvation of the ammonium ion and steric effects change it to (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃, and (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃.",
            why: "The +I argument is simple and partly right, so learners stop there. Tertiary ammonium ions have only one N–H, so they are poorly stabilised by hydrogen bonding with water.",
          },
          {
            type: "mistake",
            wrong: "Since –NH₂ is ortho/para-directing, nitrating aniline directly gives only o- and p-nitroaniline.",
            right: "Direct nitration gives about 47% m-nitroaniline (plus oxidation tar), because the anilinium ion –NH₃⁺ formed in acid is meta-directing. Acetylate first for the para product.",
            why: "Directing rules are learnt for the neutral group; the reaction medium is forgotten. In the nitrating mixture most aniline is protonated.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which is the stronger base: aniline or o-toluidine?",
              emoji: "🧪",
              options: ["Aniline", "o-Toluidine, since CH₃ releases electrons", "They are equal"],
              answer: 0,
              trap: 1,
              explain: "Ortho effect: a group at the ortho position hinders protonation and solvation of the anilinium ion, so o-toluidine (pKb about 9.6) is weaker than aniline (9.38), even though CH₃ is electron-releasing. p-Toluidine is stronger.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which reagent removes an NH₂ group from an aromatic ring in two steps?",
                options: ["NaNO₂/HCl, then H₃PO₂", "Zn-Hg/HCl", "LiAlH₄", "Br₂/NaOH"],
                answer: 0,
                explain: "Diazotisation followed by H₃PO₂ (or ethanol) replaces –N₂⁺ by H, so the –NH₂ is removed.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Water: 2° is the strongest aliphatic base in both series; gas phase: 3° > 2° > 1°.",
              "Ortho-substituted anilines are weaker than aniline (ortho effect); para EDG stronger, para EWG weaker.",
              "Benzylamine behaves as an aliphatic amine: strong base, alcohol with HNO₂.",
              "Carbylamine → 1°; Hinsberg distinguishes 1°, 2°, 3°; coupling needs a 1° arylamine first diazotised.",
              "Use –NH₂ as a temporary director (brominate, diazotise, H₃PO₂) to reach meta patterns.",
            ],
          },
        ],
        flashcards: [
          { front: "Ortho effect in anilines", back: "Any ortho substituent makes the aniline a weaker base than aniline itself (steric hindrance to protonation/solvation)." },
          { front: "C₄H₁₁N amine isomers", back: "8 in all: 4 primary, 3 secondary, 1 tertiary." },
          { front: "C₇H₉N aromatic amines", back: "Benzylamine, o-, m-, p-toluidine (1°) and N-methylaniline (2°)." },
          { front: "Benzylamine + HNO₂", back: "Benzyl alcohol + N₂: it is an aliphatic 1° amine, no stable diazonium salt." },
          { front: "Nitration of aniline (direct)", back: "About 51% para, 47% meta, 2% ortho, with oxidation products: anilinium ion is meta-directing." },
          { front: "Volume of N₂ from 1 mol 1° aliphatic amine + HNO₂", back: "1 mol N₂: 22.4 L at 273 K and 1 atm (the basis of the Van Slyke method for amino acids)." },
          { front: "Gas phase vs water basicity", back: "Gas: 3° > 2° > 1° > NH₃. Water: solvation and sterics make 2° strongest." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Arrange in decreasing basic strength in water: (P) CH₃NH₂, (Q) (CH₃)₂NH, (R) (CH₃)₃N, (S) C₆H₅NH₂.",
            options: ["Q > P > R > S", "R > Q > P > S", "Q > R > P > S", "P > Q > R > S"],
            answer: 0,
            explain: "pKb: (CH₃)₂NH 3.27, CH₃NH₂ 3.38, (CH₃)₃N 4.22, C₆H₅NH₂ 9.38.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "An amide CₓH₂ₓ₊₁CONH₂ on Hoffmann degradation gives an amine with molar mass 59 g/mol. The amide is:",
            options: ["Propanamide", "Butanamide", "Ethanamide", "Pentanamide"],
            answer: 1,
            explain: "M = 59 for CₙH₂ₙ₊₁NH₂ means 14n + 17 = 59, n = 3 (C₃H₇NH₂). The amide has one more carbon: C₃H₇CONH₂, butanamide.",
            difficulty: 2,
            hint: "Hoffmann degradation loses one carbon.",
          },
          {
            kind: "numeric",
            q: "How many structural isomers of C₄H₁₁N are secondary amines?",
            answer: 3,
            explain: "CH₃NHCH₂CH₂CH₃, CH₃NHCH(CH₃)₂ and CH₃CH₂NHCH₂CH₃.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which is the strongest base?",
            options: ["Aniline", "o-Toluidine", "p-Toluidine", "p-Chloroaniline"],
            answer: 2,
            explain: "Para CH₃ releases electrons, raising basicity above aniline. o-Toluidine is weaker than aniline (ortho effect); p-chloroaniline is weaker because Cl withdraws by −I.",
            difficulty: 3,
            hint: "Think about the ortho effect and the −I effect of chlorine.",
          },
          {
            kind: "multi",
            q: "Aniline is converted to p-bromoaniline. Which sequence(s) work? Select all that apply.",
            options: ["(CH₃CO)₂O; Br₂ in CH₃COOH; then hydrolysis (H⁺ or OH⁻)", "Br₂ water at room temperature", "NaNO₂/HCl at 273 K; then CuBr/HBr", "C₆H₅COCl/pyridine; Br₂; then hydrolysis"],
            answers: [0, 3],
            explain: "Acylating (acetyl or benzoyl) tones down –NH₂ so that monobromination occurs mainly para; hydrolysis then frees the amine. Bromine water gives the tribromo compound, and the diazonium route replaces –NH₂ by Br (bromobenzene).",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "Compound X (C₇H₉N) dissolves in dilute HCl, gives the carbylamine test, and with NaNO₂/HCl at 273 K followed by β-naphthol (or phenol) in alkali gives a coloured dye. X could be:",
            options: ["Benzylamine", "N-Methylaniline", "p-Toluidine", "N,N-Dimethylaniline"],
            answer: 2,
            explain: "A dye needs a stable arenediazonium salt, so X must be a 1° arylamine: p-toluidine. Benzylamine gives benzyl alcohol; N-methylaniline fails the carbylamine test.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "Which conversion CANNOT be done by the reagent shown?",
            options: ["C₆H₅N₂⁺Cl⁻ → C₆H₅I using KI", "C₆H₅N₂⁺Cl⁻ → C₆H₅F using KF", "C₆H₅N₂⁺Cl⁻ → C₆H₅CN using CuCN/KCN", "C₆H₅N₂⁺Cl⁻ → C₆H₆ using CH₃CH₂OH"],
            answer: 1,
            explain: "Fluorobenzene is made by the Balz–Schiemann route (HBF₄, then heat), not with KF.",
          },
          {
            kind: "numeric",
            q: "0.45 g of a primary aliphatic amine RNH₂ releases 0.010 mol of N₂ with excess nitrous acid. What is its molar mass in g/mol?",
            answer: 45,
            tolerance: 0.5,
            unit: "g/mol",
            explain: "1 mol N₂ per mole of amine, so moles of amine = 0.010; M = 0.45 ÷ 0.010 = 45 g/mol (C₂H₅NH₂, ethanamine).",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Aldehydes, Ketones and Carboxylic Acids": "c12-aldehydes-ketones-acids",
  "12:Amines": "c12-amines",
  "12:Organic Compounds containing Nitrogen": ["c12-amines"],
};
