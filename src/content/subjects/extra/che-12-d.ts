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
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Aldehydes, Ketones and Carboxylic Acids": "c12-aldehydes-ketones-acids",
};
