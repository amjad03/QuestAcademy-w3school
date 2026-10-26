import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Haloalkanes and Haloarenes (NCERT = ISC)                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-haloalkanes-haloarenes",
    title: "Haloalkanes and Haloarenes",
    icon: "🧪",
    description: "The C–X bond, preparation of alkyl and aryl halides, SN1 and SN2 with stereochemistry, elimination, organometallics, reactions of haloarenes and polyhalogen compounds.",
    lessons: [
      /* ---------------- Board lesson 1 ---------------- */
      {
        slug: "c12-halo-bond-preparation",
        title: "Classification, the C–X Bond and Preparation",
        summary: "How alkyl and aryl halides are classified and named, why the C–X bond is polar, the main ways to make them, and their physical properties.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "💊",
            caption: "The thyroid hormone thyroxine carries four iodine atoms, and the antibiotic chloramphenicol carries chlorine. Carbon–halogen bonds are everywhere: in medicines, solvents and old refrigerator gases.",
          },
          {
            type: "text",
            md: "Replace a hydrogen of an alkane by a halogen and you get a **haloalkane** (alkyl halide, R–X). Replace a hydrogen of an aromatic ring and you get a **haloarene** (aryl halide, Ar–X).\n\nBy the number of halogen atoms they are **mono-, di-, tri-** or **polyhalogen** compounds. More useful is the hybridisation of the carbon that carries X: an **sp³ C–X** bond behaves very differently from an **sp² C–X** bond.",
          },
          {
            type: "table",
            headers: ["Class", "Carbon carrying X", "Example"],
            rows: [
              ["Alkyl halide: 1°, 2°, 3°", "sp³ carbon bonded to 1, 2 or 3 other carbons", "CH₃CH₂Br (1°), (CH₃)₂CHCl (2°), (CH₃)₃CBr (3°)"],
              ["Allylic halide", "sp³ carbon next to a C=C", "CH₂=CH–CH₂Cl (3-chloroprop-1-ene)"],
              ["Benzylic halide", "sp³ carbon next to a benzene ring", "C₆H₅CH₂Cl (chlorophenylmethane, benzyl chloride)"],
              ["Vinylic halide", "sp² carbon of a C=C", "CH₂=CHCl (chloroethene, vinyl chloride)"],
              ["Aryl halide", "sp² carbon of a benzene ring", "C₆H₅Cl (chlorobenzene)"],
            ],
          },
          {
            type: "text",
            md: "**Naming.** In IUPAC names the halogen is a prefix: (CH₃)₂CHBr is 2-bromopropane; (CH₃)₃CCl is 2-chloro-2-methylpropane. Two halogens on the **same** carbon form a **geminal dihalide** (CH₃CHCl₂, 1,1-dichloroethane, common name ethylidene chloride). Two halogens on **adjacent** carbons form a **vicinal dihalide** (ClCH₂CH₂Cl, 1,2-dichloroethane, ethylene dichloride). For dihalobenzenes, the prefixes o-, m-, p- match the locants 1,2-, 1,3- and 1,4-.\n\n**The C–X bond.** Halogens are more electronegative than carbon, so the bond is polar: C carries a partial positive charge (δ+) and X a partial negative charge (δ−). Down the group the halogen gets bigger, so the bond gets **longer and weaker**.",
          },
          {
            type: "table",
            headers: ["Bond (in CH₃–X)", "Bond length / pm", "Bond enthalpy / kJ mol⁻¹", "Dipole moment of CH₃X / D"],
            rows: [
              ["C–F", "139", "452", "1.847"],
              ["C–Cl", "178", "351", "1.860"],
              ["C–Br", "193", "293", "1.830"],
              ["C–I", "214", "234", "1.636"],
            ],
          },
          {
            type: "mistake",
            wrong: "Fluorine is the most electronegative halogen, so CH₃F must have the largest dipole moment of the four methyl halides.",
            right: "CH₃Cl (1.860 D) has a slightly larger dipole moment than CH₃F (1.847 D).",
            why: "A dipole moment is charge × distance. The C–F bond does have the larger partial charges, but it is much shorter (139 pm against 178 pm), and the shorter distance outweighs the extra charge.",
          },
          {
            type: "heading",
            text: "Preparation from alcohols",
          },
          {
            type: "table",
            headers: ["Reagent", "Equation", "Remarks"],
            rows: [
              ["HCl with anhydrous ZnCl₂", "R–OH + HCl → R–Cl + H₂O", "ZnCl₂ is needed for 1° and 2° alcohols; 3° alcohols react with concentrated HCl alone at room temperature. Reactivity 3° > 2° > 1°."],
              ["HBr (from NaBr + conc. H₂SO₄)", "R–OH + HBr → R–Br + H₂O", "Same order of alcohol reactivity."],
              ["PCl₃, or PBr₃ / PI₃ made in situ from red P + Br₂ / I₂", "3R–OH + PX₃ → 3R–X + H₃PO₃", "Good for 1° and 2° bromides and iodides."],
              ["PCl₅", "R–OH + PCl₅ → R–Cl + POCl₃ + HCl", "POCl₃ (liquid) must be separated."],
              ["SOCl₂ (thionyl chloride)", "R–OH + SOCl₂ → R–Cl + SO₂↑ + HCl↑", "Preferred: both by-products are gases and escape, leaving fairly pure R–Cl."],
            ],
          },
          {
            type: "text",
            md: "These methods do **not** work for phenol: the C–O bond of phenol has partial double-bond character and does not break this way, so chlorobenzene cannot be made from phenol and HCl.\n\n**From hydrocarbons.** (i) Free radical halogenation of alkanes (Cl₂ or Br₂ with light or heat) gives a mixture of isomers, e.g. butane gives 1-chlorobutane and 2-chlorobutane. (ii) Electrophilic substitution of arenes: benzene + Cl₂ with Fe or anhydrous FeCl₃, in the dark, gives chlorobenzene; toluene gives a mixture of o- and p-chlorotoluene. Iodination is reversible and needs an oxidising agent (HNO₃ or HIO₄) to remove the HI formed. Fluorine is too reactive for this method. (iii) **Sandmeyer reaction**: an arenediazonium salt (from ArNH₂, NaNO₂ and HX at 273–278 K) treated with CuCl/HCl or CuBr/HBr gives ArCl or ArBr and N₂; shaking with KI gives ArI (no copper needed). (iv) **Addition to alkenes**: HX adds by **Markovnikov's rule** (propene + HI → 2-iodopropane); with HBr **in the presence of a peroxide** the addition is anti-Markovnikov (peroxide or Kharasch effect, only for HBr). Br₂ in CCl₄ adds to give a vicinal dibromide; the loss of the reddish-brown colour is a test for C=C.",
          },
          {
            type: "formula",
            tex: t`\underbrace{\mathrm{R{-}X + NaI \xrightarrow{\text{dry acetone}} R{-}I + NaX\downarrow}}_{\text{Finkelstein (X = Cl, Br)}} \qquad \underbrace{\mathrm{CH_3Br + AgF \longrightarrow CH_3F + AgBr}}_{\text{Swarts}}`,
            caption: "Halogen exchange. In Finkelstein, NaCl or NaBr is insoluble in dry acetone and precipitates, which pulls the equilibrium forward (Le Chatelier). Swarts uses metallic fluorides such as AgF, Hg₂F₂, CoF₂ or SbF₃ to make alkyl fluorides.",
          },
          {
            type: "example",
            title: "Three halides from one alkene",
            problem: "Starting from propene, how would you prepare (a) 2-bromopropane, (b) 1-bromopropane and (c) 1-iodopropane? Name the rule or reaction used each time.",
            steps: [
              "(a) Add HBr without peroxide. H⁺ adds to C1 to give the more stable secondary carbocation CH₃C⁺HCH₃, and Br⁻ attaches to C2: Markovnikov addition gives CH₃CHBrCH₃.",
              "(b) Add HBr in the presence of benzoyl peroxide. The reaction now runs by a free radical chain: Br• adds to C1 to give the more stable secondary radical, so Br ends up on C1 (anti-Markovnikov, peroxide effect): CH₃CH₂CH₂Br.",
              "(c) Heat the 1-bromopropane from (b) with NaI in dry acetone (Finkelstein). NaBr precipitates and CH₃CH₂CH₂I remains.",
            ],
            answer: "(a) HBr; (b) HBr + peroxide; (c) product of (b) + NaI in dry acetone.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which reagent is the best choice for converting ethanol into pure chloroethane?",
                options: ["SOCl₂", "PCl₅", "Concentrated HCl without ZnCl₂", "Cl₂ in sunlight"],
                answer: 0,
                explain: "With SOCl₂ the by-products SO₂ and HCl are gases that escape, so chloroethane is left fairly pure. PCl₅ leaves liquid POCl₃ to separate, and a 1° alcohol barely reacts with HCl unless ZnCl₂ is added.",
              },
              {
                kind: "mcq",
                q: "Which of these is a benzylic halide?",
                options: ["C₆H₅Cl", "C₆H₅CH₂Br", "CH₂=CHBr", "CH₂=CH–CH₂Br"],
                answer: 1,
                explain: "In C₆H₅CH₂Br the halogen is on an sp³ carbon attached directly to the ring. C₆H₅Cl is an aryl halide, CH₂=CHBr is vinylic and CH₂=CH–CH₂Br is allylic.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each reagent with the reaction it belongs to.",
              pairs: [
                ["NaI in dry acetone", "Finkelstein reaction"],
                ["AgF, Hg₂F₂ or SbF₃", "Swarts reaction"],
                ["CuCl/HCl on a diazonium salt", "Sandmeyer reaction"],
                ["HBr with benzoyl peroxide", "Anti-Markovnikov (peroxide effect)"],
                ["Red phosphorus with I₂", "PI₃ made in situ"],
              ],
              explain: "Finkelstein and Swarts both swap one halogen for another; Sandmeyer swaps the diazo group (–N₂⁺) for a halogen; the peroxide effect works only with HBr.",
            },
          },
          {
            type: "text",
            md: "**Physical properties.** CH₃Cl, CH₃Br, C₂H₅Cl and some chlorofluorocarbons are gases at room temperature; higher members are liquids or solids. Haloalkanes have higher boiling points than alkanes of similar size because of dipole–dipole and stronger van der Waals forces. For the same alkyl group, boiling point rises as **RF < RCl < RBr < RI** (larger, more polarisable halogen). For isomers, branching lowers the boiling point: 1-bromobutane (375 K) > 2-bromobutane (364 K) > 2-bromo-2-methylpropane (346 K).\n\nAmong the dichlorobenzenes the boiling points are close, but **1,4-dichlorobenzene melts far higher** (323 K, against 256 K for the 1,2- and 249 K for the 1,3-isomer) because its symmetrical molecules pack better in the crystal. Bromo-, iodo- and polychloro- compounds are denser than water. Haloalkanes are only very slightly soluble in water: the energy released by new haloalkane–water attractions is less than the energy needed to break the hydrogen bonds of water.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Two-mark 'give reasons' favourites: why SOCl₂ is preferred; why the peroxide effect works only with HBr; why p-dichlorobenzene melts higher than its isomers; why haloalkanes are insoluble in water but soluble in organic solvents. Write the equation **and** a one-line reason. When asked to classify, state both the class (allylic, benzylic, vinylic, aryl) and the degree (1°, 2°, 3°) for sp³ halides.",
          },
          {
            type: "keypoints",
            items: [
              "Classify by the carbon carrying X: sp³ (alkyl 1°/2°/3°, allylic, benzylic) or sp² (vinylic, aryl).",
              "C–X bond length rises and bond enthalpy falls from F to I; CH₃Cl has the largest dipole moment.",
              "Alcohol → halide: HX/ZnCl₂, PX₃, PCl₅ or SOCl₂ (best, gaseous by-products). Does not work for phenol.",
              "Alkenes + HX follow Markovnikov; HBr with peroxide gives anti-Markovnikov. Finkelstein makes iodides, Swarts makes fluorides, Sandmeyer makes aryl halides.",
              "Boiling point: RI > RBr > RCl > RF and falls with branching; p-dichlorobenzene has the highest melting point of its isomers.",
            ],
          },
        ],
        flashcards: [
          { front: "Allylic vs vinylic halide", back: "Allylic: X on the sp³ carbon next to a C=C (CH₂=CH–CH₂Cl). Vinylic: X on an sp² carbon of the C=C (CH₂=CHCl)." },
          { front: "Geminal vs vicinal dihalide", back: "Geminal: both X on the same carbon (CH₃CHCl₂). Vicinal: X on adjacent carbons (ClCH₂CH₂Cl)." },
          { front: "Why is SOCl₂ preferred for R–OH → R–Cl?", back: "Its by-products SO₂ and HCl are gases and escape, so the alkyl chloride is left nearly pure." },
          { front: "Finkelstein reaction", back: "R–Cl or R–Br + NaI in dry acetone → R–I. NaCl/NaBr precipitates, driving the reaction forward." },
          { front: "Swarts reaction", back: "R–Cl or R–Br heated with a metallic fluoride (AgF, Hg₂F₂, CoF₂, SbF₃) → R–F." },
          { front: "Peroxide (Kharasch) effect", back: "HBr adds to an unsymmetrical alkene against Markovnikov's rule when a peroxide is present; it works by a free radical chain and only for HBr." },
          { front: "Why does iodination of benzene need HNO₃ or HIO₄?", back: "The reaction is reversible; the oxidising agent destroys the HI formed so it cannot reduce the iodobenzene back." },
          { front: "Methyl halide with the largest dipole moment", back: "CH₃Cl (1.860 D), slightly more than CH₃F (1.847 D), because C–F is much shorter." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which acid adds to propene against Markovnikov's rule when benzoyl peroxide is present?",
            options: ["HCl", "HBr", "HI", "All three"],
            answer: 1,
            explain: "Only HBr. For HCl the H–Cl bond is too strong to give Cl• easily, and for HI the I• radical is too unreactive to add to the alkene, so the radical chain fails for both.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange from highest to lowest boiling point.",
            items: ["1-Bromobutane", "2-Bromobutane", "2-Bromo-2-methylpropane"],
            explain: "All three are C₄H₉Br. More branching makes the molecule more compact, lowering the surface area for van der Waals attraction: 375 K > 364 K > 346 K.",
          },
          {
            kind: "mcq",
            q: "The best method for preparing fluoroethane from bromoethane is:",
            options: ["Heating with NaF in dry acetone", "Heating with AgF (Swarts reaction)", "Treating with F₂ in sunlight", "Treating with HF and ZnCl₂"],
            answer: 1,
            explain: "Swarts reaction uses a metallic fluoride such as AgF, Hg₂F₂, CoF₂ or SbF₃. Direct fluorination with F₂ is violent and uncontrollable.",
          },
          {
            kind: "truefalse",
            q: "Chlorobenzene can be prepared by heating phenol with concentrated HCl and ZnCl₂.",
            answer: false,
            explain: "The C–O bond of phenol has partial double-bond character (resonance with the ring) and does not break with HCl. Chlorobenzene is made from benzene (Cl₂/FeCl₃) or from a diazonium salt (Sandmeyer).",
          },
          {
            kind: "fill",
            q: "Heating an alkyl bromide with sodium iodide in dry acetone to give an alkyl iodide is called the ___ reaction.",
            answer: ["Finkelstein", "Finkelstein reaction"],
            explain: "Finkelstein reaction; NaBr is insoluble in dry acetone and precipitates.",
          },
          {
            kind: "multi",
            q: "Which statements about the C–X bond in methyl halides are correct?",
            options: ["Bond length increases from C–F to C–I", "Bond enthalpy increases from C–F to C–I", "CH₃I has the smallest dipole moment of the four", "Carbon carries the partial positive charge"],
            answers: [0, 2, 3],
            explain: "Bond length rises from 139 pm to 214 pm while bond enthalpy falls from 452 to 234 kJ mol⁻¹. CH₃I has the smallest dipole (1.636 D). Carbon is less electronegative, so it is δ+.",
          },
          {
            kind: "mcq",
            q: "Why does 1,4-dichlorobenzene have a much higher melting point than 1,2- and 1,3-dichlorobenzene?",
            options: ["It has the largest dipole moment", "It forms hydrogen bonds", "Its symmetrical molecules pack better in the crystal lattice", "It has a higher molar mass"],
            answer: 2,
            explain: "All three have the same molar mass. The para isomer is the most symmetrical, so it fits closely in the crystal and more energy is needed to melt it. (Its dipole moment is in fact zero.)",
            difficulty: 2,
          },
        ],
      },

      /* ---------------- Board lesson 2 ---------------- */
      {
        slug: "c12-halo-sn1-sn2",
        title: "Nucleophilic Substitution: SN2, SN1 and Stereochemistry",
        summary: "How nucleophiles replace halogens, the SN2 and SN1 mechanisms, their kinetics and substrate order, ambident nucleophiles, and what happens to an optically active carbon.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "In a haloalkane the carbon attached to X is δ+. An electron-rich species, a **nucleophile** (Nu⁻ or a neutral molecule with a lone pair), attacks that carbon and the halogen leaves as X⁻, the **leaving group**:\n\nNu⁻ + R–X → R–Nu + X⁻\n\nThis is **nucleophilic substitution**, the most important reaction of sp³ haloalkanes. For the same alkyl group the ease of reaction is **R–I > R–Br > R–Cl > R–F**, because the C–I bond is the weakest and I⁻ is the most stable leaving group.",
          },
          {
            type: "table",
            headers: ["Reagent", "Nucleophile", "Product from R–X"],
            rows: [
              ["NaOH or KOH (aq)", "HO⁻", "alcohol R–OH"],
              ["NaOR′", "R′O⁻", "ether R–O–R′"],
              ["NH₃ (excess)", "NH₃", "primary amine R–NH₂"],
              ["KCN", "⁻C≡N (attacks through C)", "nitrile (alkyl cyanide) R–CN"],
              ["AgCN", "Ag–C≡N: (attacks through N)", "isonitrile (isocyanide) R–NC"],
              ["KNO₂", "⁻O–N=O (attacks through O)", "alkyl nitrite R–O–N=O"],
              ["AgNO₂", "attacks through N", "nitroalkane R–NO₂"],
              ["R′COOAg", "R′COO⁻", "ester R′COOR"],
              ["LiAlH₄", "H⁻", "hydrocarbon R–H"],
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Ambident nucleophiles",
            md: "A nucleophile that can attack through **two different atoms** is **ambident**. Cyanide can use C or N; nitrite can use O or N. KCN and KNO₂ are ionic, so the free ion attacks with its more nucleophilic end (C in cyanide, O in nitrite). AgCN and AgNO₂ are mainly covalent: in AgCN the carbon is tied to silver, so only the nitrogen lone pair is free to attack, giving the **isocyanide**; AgNO₂ gives the **nitroalkane**.",
          },
          {
            type: "heading",
            text: "SN2: substitution, nucleophilic, bimolecular",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Take CH₃Cl + OH⁻. The hydroxide ion approaches carbon from the side **directly opposite** the chlorine (backside attack, 180° to the C–Cl bond).",
              "In the **transition state** carbon is partly bonded to both OH and Cl; the three hydrogens lie in one plane. It is not an intermediate and cannot be isolated.",
              "The C–O bond forms as the C–Cl bond breaks, in **one step**. The three H atoms flip over like an umbrella turned inside out by wind, so the product has the **inverted configuration**.",
              "Rate = k[CH₃Cl][OH⁻]: second order, because both species take part in the single step.",
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{HO^- + H_3C{-}Cl \longrightarrow \left[\,HO\cdots CH_3\cdots Cl\,\right]^{\ddagger\,-} \longrightarrow HO{-}CH_3 + Cl^-}\qquad \text{rate} = k[\mathrm{RX}][\mathrm{OH^-}]`,
            caption: "SN2 reactivity: CH₃X > 1° > 2° > 3°. Bulky groups around the carbon block the backside approach, so tertiary halides hardly react by SN2 (Hughes and Ingold, 1937).",
          },
          {
            type: "heading",
            text: "SN1: substitution, nucleophilic, unimolecular",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Take 2-bromo-2-methylpropane, (CH₃)₃CBr, in water or aqueous alcohol (a polar protic solvent).",
              "**Step 1 (slow):** the C–Br bond ionises to give the planar tert-butyl carbocation (CH₃)₃C⁺ and Br⁻. The polar protic solvent solvates both ions and helps this step.",
              "**Step 2 (fast):** the nucleophile (H₂O or OH⁻) attacks the flat carbocation from either face, giving (CH₃)₃COH.",
              "Rate = k[(CH₃)₃CBr]: first order, because only the haloalkane takes part in the slow step.",
            ],
          },
          {
            type: "table",
            headers: ["Feature", "SN2", "SN1"],
            rows: [
              ["Steps", "one step, through a transition state", "two steps, through a carbocation"],
              ["Rate law", "k[RX][Nu⁻], second order", "k[RX], first order"],
              ["Substrate order", "CH₃X > 1° > 2° > 3°", "3° > 2° > 1° > CH₃X; allylic and benzylic also fast"],
              ["Favoured by", "strong nucleophile, polar aprotic solvent", "stable carbocation, weak nucleophile, polar protic solvent"],
              ["Stereochemistry at a chiral carbon", "complete inversion", "racemisation (often with slight excess of inversion)"],
              ["Rearrangement", "never", "possible, if a more stable carbocation can form"],
            ],
          },
          {
            type: "text",
            md: "**Optical activity.** Ordinary light passed through a Nicol prism becomes **plane-polarised**. Some compounds rotate this plane; they are **optically active**. Clockwise rotation is **dextrorotatory** (d or +), anticlockwise is **laevorotatory** (l or −); the angle is measured with a **polarimeter**.\n\nA carbon with four different groups is an **asymmetric carbon** (stereocentre); a molecule that cannot be superimposed on its mirror image is **chiral**. The two mirror-image forms are **enantiomers**: same physical properties, equal and opposite rotation. An equal mixture of the two is a **racemic mixture** (±), with zero rotation because the two rotations cancel. Turning one enantiomer into a racemic mixture is **racemisation**.\n\nIf a reaction keeps the spatial arrangement of bonds at the stereocentre it shows **retention**; if the new group ends up on the opposite side to the old one it shows **inversion**.",
          },
          {
            type: "example",
            title: "Following a stereocentre through SN2 and SN1",
            problem: "Predict the stereochemistry of the product in each case: (a) (R)-2-bromooctane heated with aqueous NaOH under SN2 conditions; (b) (S)-3-bromo-3-methylhexane warmed with water.",
            steps: [
              "(a) Backside attack puts OH where there was no group before, opposite the old C–Br bond, so the arrangement is inverted.",
              "Priorities in the product (OH > C₆H₁₃ > CH₃ > H) follow the same order as in the reactant (Br > C₆H₁₃ > CH₃ > H), so the inverted product is labelled (S): (S)-octan-2-ol, optically active.",
              "(b) This is a 3° bromide in water, so SN1 runs. The planar carbocation (CH₃)(C₂H₅)(C₃H₇)C⁺ is attacked from both faces almost equally.",
              "The product 3-methylhexan-3-ol still has four different groups on C3, but both enantiomers form in nearly equal amounts.",
            ],
            answer: "(a) (S)-octan-2-ol with inversion; (b) (±)-3-methylhexan-3-ol, a (nearly) racemic mixture.",
          },
          {
            type: "mistake",
            wrong: "Inversion of configuration means a (+) compound always gives a (−) product, and R always turns into S.",
            right: "Inversion is a change in the spatial arrangement. Whether the R/S label changes depends on the priorities of the new and old groups, and the sign of rotation cannot be predicted from configuration at all.",
            why: "R/S is a naming rule based on priorities, and (+)/(−) is a measured property. In 2-bromooctane → octan-2-ol the label flips only because OH takes the top priority, just as Br did.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In an SN2 reaction both [R–X] and [Nu⁻] are doubled. By what factor does the initial rate increase?",
                answer: 4,
                explain: "Rate = k[RX][Nu⁻], so the rate rises by 2 × 2 = 4.",
              },
              {
                kind: "mcq",
                q: "For the hydrolysis of (CH₃)₃CBr, doubling [OH⁻] will:",
                options: ["Double the rate", "Halve the rate", "Leave the rate almost unchanged", "Quadruple the rate"],
                answer: 2,
                explain: "This is SN1: rate = k[(CH₃)₃CBr]. OH⁻ is not involved in the slow ionisation step.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Bromoethane is heated with AgCN. Predict the main product.",
              emoji: "⚗️",
              options: ["Propanenitrile, CH₃CH₂CN", "Ethyl isocyanide, CH₃CH₂NC", "Ethanol, CH₃CH₂OH"],
              answer: 1,
              trap: 0,
              explain: "AgCN is mainly covalent: carbon is bonded to silver, so the nitrogen lone pair attacks and the isocyanide forms. KCN, an ionic salt, would give the nitrile.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Mechanism questions carry 2–3 marks. For SN2, draw the backside attack, the transition state in square brackets with dotted partial bonds, and the inverted product. For SN1, show two steps and label the first as slow (rate-determining). State the rate law each time. Allylic and benzylic halides are very reactive in SN1 because their carbocations are resonance stabilised; say so in one line.",
          },
          {
            type: "keypoints",
            items: [
              "Nucleophilic substitution: Nu⁻ + R–X → R–Nu + X⁻; reactivity R–I > R–Br > R–Cl > R–F.",
              "SN2: one step, backside attack, rate = k[RX][Nu⁻], CH₃X > 1° > 2° > 3°, complete inversion.",
              "SN1: carbocation intermediate, rate = k[RX], 3° > 2° > 1°, racemisation; polar protic solvents help.",
              "KCN → nitrile, AgCN → isocyanide; KNO₂ → alkyl nitrite, AgNO₂ → nitroalkane.",
              "Chiral = non-superimposable on its mirror image; a racemic mixture has zero optical rotation.",
            ],
          },
        ],
        flashcards: [
          { front: "SN2 rate law and order of reactivity", back: "Rate = k[RX][Nu⁻]; CH₃X > 1° > 2° > 3° (steric hindrance)." },
          { front: "SN1 rate law and order of reactivity", back: "Rate = k[RX]; 3° > 2° > 1° > CH₃X (carbocation stability)." },
          { front: "Stereochemistry of SN2", back: "Complete inversion of configuration (Walden inversion) from backside attack." },
          { front: "Stereochemistry of SN1", back: "Racemisation: the planar carbocation is attacked from both faces." },
          { front: "Ambident nucleophile", back: "A nucleophile with two attacking atoms, e.g. CN⁻ (C or N) and NO₂⁻ (O or N)." },
          { front: "KNO₂ vs AgNO₂ with R–X", back: "KNO₂ → alkyl nitrite R–O–N=O; AgNO₂ → nitroalkane R–NO₂." },
          { front: "Racemic mixture", back: "Equal amounts of two enantiomers; zero net optical rotation; written (±) or dl." },
          { front: "Why are benzylic and allylic halides fast in SN1?", back: "Their carbocations are stabilised by resonance with the ring or the C=C." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which bromide reacts fastest with NaI in acetone (an SN2 reaction)?",
            options: ["(CH₃)₃CBr", "(CH₃)₂CHBr", "CH₃CH₂Br", "CH₃Br"],
            answer: 3,
            explain: "SN2 needs a clear backside approach; the methyl carbon is the least hindered, so CH₃Br is fastest and (CH₃)₃CBr slowest.",
          },
          {
            kind: "mcq",
            q: "Which bromide is hydrolysed fastest by the SN1 route in aqueous ethanol?",
            options: ["CH₃Br", "CH₃CH₂Br", "(CH₃)₂CHBr", "(CH₃)₃CBr"],
            answer: 3,
            explain: "SN1 speed follows carbocation stability; the tertiary carbocation is the most stable.",
          },
          {
            kind: "mcq",
            q: "1-Bromopropane is heated with ethanolic KNO₂. The main product is:",
            options: ["1-Nitropropane", "Propyl nitrite", "Propan-1-ol", "Propene"],
            answer: 1,
            explain: "Ionic KNO₂ supplies free nitrite ions, which attack through oxygen to give the alkyl nitrite CH₃CH₂CH₂–O–N=O. AgNO₂ would give 1-nitropropane.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are features of the SN1 mechanism?",
            options: ["A carbocation intermediate", "First-order kinetics", "Complete inversion at a chiral carbon", "Favoured by polar protic solvents"],
            answers: [0, 1, 3],
            explain: "SN1 goes through a planar carbocation, its rate depends only on [RX], and polar protic solvents stabilise the ions. It gives racemisation, not complete inversion.",
          },
          {
            kind: "truefalse",
            q: "A racemic mixture of 2-chlorobutane rotates plane-polarised light by zero degrees.",
            answer: true,
            explain: "The rotations of equal amounts of the two enantiomers cancel exactly (external compensation).",
          },
          {
            kind: "mcq",
            q: "Which compound is chiral?",
            options: ["2-Chloropropane", "2-Chlorobutane", "1-Chlorobutane", "2-Chloro-2-methylpropane"],
            answer: 1,
            explain: "In 2-chlorobutane C2 carries H, Cl, CH₃ and C₂H₅: four different groups. Each other option has two identical groups on every carbon.",
          },
          {
            kind: "fill",
            q: "The complete inversion of configuration in an SN2 reaction is often called ___ inversion.",
            answer: ["Walden"],
            explain: "Named after Paul Walden, who first observed such inversions.",
          },
          {
            kind: "mcq",
            q: "In an SN1 reaction the rate-determining step is:",
            options: ["Attack of the nucleophile on the carbocation", "Ionisation of R–X to a carbocation", "Formation of the transition state with both groups attached", "Loss of a proton from the product"],
            answer: 1,
            explain: "The slow step is the heterolysis of the C–X bond; capture of the carbocation by the nucleophile is fast.",
          },
        ],
      },

      /* ---------------- Board lesson 3 ---------------- */
      {
        slug: "c12-halo-elimination-haloarenes",
        title: "Elimination, Metals, Haloarenes and Polyhalogen Compounds",
        summary: "Dehydrohalogenation and Saytzeff's rule, Grignard and Wurtz reactions, why aryl halides resist substitution, their electrophilic substitution, and the uses and hazards of polyhalogen compounds.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Heat a haloalkane that has a hydrogen on the **β-carbon** (the carbon next to the one carrying X) with **alcoholic KOH**, and H and X are removed together to give an alkene. This is **β-elimination** or **dehydrohalogenation**.\n\nWhen there is more than one kind of β-hydrogen, **Saytzeff's (Zaitsev's) rule** applies: the main product is the more substituted alkene, the one with more alkyl groups on the doubly bonded carbons. Such alkenes are more stable.",
          },
          {
            type: "example",
            title: "Applying Saytzeff's rule",
            problem: "2-Bromo-2-methylbutane, (CH₃)₂CBr–CH₂–CH₃, is heated with alcoholic KOH. Name the possible alkenes and the main product.",
            steps: [
              "C2 carries Br. Its β-carbons are C1 (a CH₃ group) and C3 (a CH₂ group).",
              "Losing H from C1 gives CH₂=C(CH₃)–CH₂CH₃, 2-methylbut-1-ene: two alkyl groups on the double bond.",
              "Losing H from C3 gives (CH₃)₂C=CH–CH₃, 2-methylbut-2-ene: three alkyl groups on the double bond.",
              "Saytzeff's rule favours the more substituted alkene.",
            ],
            answer: "Main product: 2-methylbut-2-ene; minor: 2-methylbut-1-ene.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Substitution or elimination?",
            md: "Every nucleophile is also a base, so the two reactions compete. A **1°** halide usually gives SN2. A **2°** halide gives SN2 or elimination depending on how strong the base is. A **3°** halide gives SN1 or elimination depending on the stability of the carbocation or the alkene. A **bulky, strong base** (and alcoholic rather than aqueous KOH, with heat) pushes the reaction towards elimination.",
          },
          {
            type: "formula",
            tex: t`\begin{aligned}&\mathrm{CH_3CH_2Br + Mg \xrightarrow{\text{dry ether}} CH_3CH_2MgBr \xrightarrow{H_2O} CH_3CH_3 + Mg(OH)Br}\\ &\mathrm{2CH_3Br + 2Na \xrightarrow{\text{dry ether}} CH_3CH_3 + 2NaBr}\quad(\text{Wurtz})\\ &\mathrm{C_6H_5Br + CH_3Br + 2Na \xrightarrow{\text{dry ether}} C_6H_5CH_3 + 2NaBr}\quad(\text{Wurtz–Fittig})\\ &\mathrm{2C_6H_5Cl + 2Na \xrightarrow{\text{dry ether}} C_6H_5{-}C_6H_5 + 2NaCl}\quad(\text{Fittig})\end{aligned}`,
            caption: "A Grignard reagent RMgX (Victor Grignard, Nobel Prize 1912) has a highly polar C–Mg bond, so its carbon acts as a carbanion. It reacts with any source of a proton (water, alcohols, amines), so it must be made and kept dry.",
          },
          {
            type: "list",
            items: [
              "**Resonance.** A lone pair on Cl is delocalised into the ring, giving the C–Cl bond partial double-bond character. It is harder to break.",
              "**Hybridisation.** The carbon is sp² (more s-character) and holds the bonding pair more tightly, so the C–Cl bond is shorter: 169 pm in chlorobenzene against 177 pm in a haloalkane.",
              "**Unstable phenyl cation.** C₆H₅⁺ is not stabilised by resonance, so the SN1 path is ruled out.",
              "**Repulsion and blocked approach.** The electron-rich ring repels an incoming nucleophile, and the ring itself blocks a backside approach, so SN2 does not happen either.",
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{C_6H_5Cl \xrightarrow[\text{623 K, 300 atm}]{\text{NaOH}} C_6H_5O^-Na^+ \xrightarrow{H^+} C_6H_5OH}`,
            caption: "Dow's process: chlorobenzene gives phenol only under very harsh conditions, which shows how unreactive aryl halides are towards nucleophiles.",
          },
          {
            type: "table",
            headers: ["Substrate", "Conditions for → phenol (after H⁺)", "Product"],
            rows: [
              ["Chlorobenzene", "NaOH, 623 K, 300 atm", "phenol"],
              ["1-Chloro-4-nitrobenzene", "aqueous NaOH, 443 K", "4-nitrophenol"],
              ["1-Chloro-2,4-dinitrobenzene", "aqueous NaOH, 368 K", "2,4-dinitrophenol"],
              ["2-Chloro-1,3,5-trinitrobenzene", "warm water, 323 K", "2,4,6-trinitrophenol (picric acid)"],
            ],
          },
          {
            type: "mistake",
            wrong: "A nitro group anywhere on the ring makes chlorobenzene easier to hydrolyse.",
            right: "Only nitro groups **ortho or para** to the halogen activate it strongly. A meta nitro group has almost no such effect.",
            why: "When OH⁻ adds to the carbon carrying Cl, a negative charge spreads to the carbons ortho and para to that position. A nitro group sitting there can pull the charge onto its own oxygens and stabilise the intermediate; from the meta position it cannot.",
          },
          {
            type: "text",
            md: "**Electrophilic substitution of haloarenes.** A halogen withdraws electrons by its −I effect, so the ring is **deactivated** and reacts more slowly than benzene. Its lone pairs, however, donate by the +R effect and raise electron density at the **ortho and para** positions, so the incoming group goes there. The para product is usually the major one (less crowded).",
          },
          {
            type: "table",
            headers: ["Reaction on chlorobenzene", "Reagents", "Products (major listed last)"],
            rows: [
              ["Halogenation", "Cl₂, anhydrous FeCl₃", "1,2-dichlorobenzene, **1,4-dichlorobenzene**"],
              ["Nitration", "conc. HNO₃ + conc. H₂SO₄", "1-chloro-2-nitrobenzene, **1-chloro-4-nitrobenzene**"],
              ["Sulphonation", "conc. H₂SO₄, heat", "2-chloro-, **4-chlorobenzenesulphonic acid**"],
              ["Friedel–Crafts alkylation", "CH₃Cl, anhydrous AlCl₃", "1-chloro-2-methylbenzene, **1-chloro-4-methylbenzene**"],
              ["Friedel–Crafts acylation", "CH₃COCl, anhydrous AlCl₃", "2-chloroacetophenone, **4-chloroacetophenone**"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort by how readily each undergoes nucleophilic substitution.",
              groups: ["Reacts readily", "Resists substitution"],
              items: [
                { text: "Benzyl chloride, C₆H₅CH₂Cl", group: 0, hint: "Its carbocation is stabilised by the ring." },
                { text: "Allyl chloride, CH₂=CHCH₂Cl", group: 0, hint: "Cl is on an sp³ carbon; the allyl cation is resonance stabilised." },
                { text: "1-Chlorobutane", group: 0, hint: "A simple 1° halide: good for SN2." },
                { text: "Chlorobenzene", group: 1, hint: "C–Cl has partial double-bond character." },
                { text: "Vinyl chloride, CH₂=CHCl", group: 1, hint: "Cl is on an sp² carbon, like an aryl halide." },
                { text: "2-Chloro-1,3,5-trinitrobenzene", group: 0, hint: "Three nitro groups ortho and para to Cl: warm water is enough." },
                { text: "1-Chloro-3-nitrobenzene", group: 1, hint: "A meta nitro group gives no resonance help." },
              ],
              explain: "sp³ C–X (alkyl, allylic, benzylic) reacts readily. sp² C–X (vinylic, aryl) resists, unless strong electron-withdrawing groups sit ortho or para to the halogen.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Chlorobenzene is nitrated with conc. HNO₃ and conc. H₂SO₄. The major product is:",
                options: ["1-Chloro-3-nitrobenzene", "1-Chloro-4-nitrobenzene", "1-Chloro-2-nitrobenzene", "Nitrobenzene"],
                answer: 1,
                explain: "Cl is ortho/para directing (+R) and para is less crowded, so 1-chloro-4-nitrobenzene is major.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Polyhalogen compound", "Uses", "Effects and cautions"],
            rows: [
              ["Dichloromethane, CH₂Cl₂", "solvent, paint remover, metal cleaning", "can harm the central nervous system; skin and eye burns on contact"],
              ["Chloroform, CHCl₃", "solvent for fats, alkaloids and iodine; once an anaesthetic", "oxidised by air in light to poisonous **phosgene**, COCl₂: so stored in closed, dark bottles filled to the brim"],
              ["Iodoform, CHI₃", "antiseptic (it releases free iodine)", "objectionable smell, now replaced by other antiseptics"],
              ["Carbon tetrachloride, CCl₄", "making refrigerants and propellants; solvent", "liver damage; released to air it depletes the ozone layer"],
              ["Freons, e.g. CCl₂F₂ (freon-12)", "refrigeration, air conditioning, aerosol propellants", "very stable; in the stratosphere they release Cl radicals that destroy ozone"],
              ["DDT", "insecticide, used against malaria mosquitoes", "not biodegradable, builds up in fatty tissue along food chains; banned in many countries"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Expect: 'why is chlorobenzene less reactive than chloroethane?' (give at least two reasons: resonance and sp² carbon); 'why is the halogen deactivating yet o/p directing?' (−I vs +R); 'why is chloroform kept in dark bottles?' with the equation 2CHCl₃ + O₂ → 2COCl₂ + 2HCl (in light). CBSE lists the uses and environmental effects of CH₂Cl₂, CHCl₃, CCl₄, iodoform, freons and DDT.",
          },
          {
            type: "keypoints",
            items: [
              "Alcoholic KOH removes HX (β-elimination); Saytzeff: the more substituted alkene is major.",
              "RMgX is made in dry ether and is destroyed by water; Wurtz joins two alkyl groups with Na, Wurtz–Fittig joins aryl and alkyl, Fittig joins two aryls.",
              "Aryl halides resist nucleophilic substitution: resonance, sp² carbon, unstable phenyl cation, ring repulsion.",
              "o/p-Nitro groups activate aryl halides for nucleophilic substitution; meta-nitro does not.",
              "Halogens on a ring are deactivating but ortho/para directing.",
            ],
          },
        ],
        flashcards: [
          { front: "Saytzeff's rule", back: "In dehydrohalogenation the more substituted (more stable) alkene is the main product." },
          { front: "Dow's process", back: "Chlorobenzene + NaOH at 623 K and 300 atm → sodium phenoxide; acidify → phenol." },
          { front: "Wurtz–Fittig reaction", back: "Aryl halide + alkyl halide + Na in dry ether → alkylbenzene, e.g. bromobenzene + bromomethane → toluene." },
          { front: "Why must Grignard reagents be kept dry?", back: "The carbanion-like carbon takes a proton from water, forming R–H: RMgX + H₂O → RH + Mg(OH)X." },
          { front: "C–Cl bond length: chlorobenzene vs haloalkane", back: "169 pm vs 177 pm: shorter in the aryl halide due to sp² carbon and partial double-bond character." },
          { front: "Halogen on benzene: activating or deactivating?", back: "Deactivating (−I) but ortho/para directing (+R)." },
          { front: "Why is chloroform stored in dark bottles filled to the brim?", back: "In light, air oxidises it to poisonous phosgene: 2CHCl₃ + O₂ → 2COCl₂ + 2HCl." },
          { front: "Freon-12", back: "CCl₂F₂, a refrigerant and propellant that depletes stratospheric ozone." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "2-Bromobutane is heated with alcoholic KOH. The major product is:",
            options: ["But-1-ene", "But-2-ene", "Butan-2-ol", "Butane"],
            answer: 1,
            explain: "Alcoholic KOH favours elimination; by Saytzeff's rule the more substituted but-2-ene is major.",
          },
          {
            kind: "mcq",
            q: "Ethylmagnesium bromide is treated with water. The organic product is:",
            options: ["Ethanol", "Ethane", "Ethene", "Butane"],
            answer: 1,
            explain: "C₂H₅MgBr + H₂O → C₂H₆ + Mg(OH)Br. The ethyl carbanion takes a proton.",
          },
          {
            kind: "mcq",
            q: "Which of these is hydrolysed most easily by aqueous NaOH?",
            options: ["Chlorobenzene", "1-Chloro-3-nitrobenzene", "1-Chloro-4-nitrobenzene", "1-Chloro-2,4-dinitrobenzene"],
            answer: 3,
            explain: "Two nitro groups ortho and para to Cl stabilise the negative intermediate best (368 K is enough). One para nitro needs 443 K; meta nitro helps very little.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which reasons explain why chlorobenzene is less reactive than chloroethane towards nucleophiles?",
            options: ["Partial double-bond character of C–Cl from resonance", "sp² hybridised carbon holds the bond more tightly", "Phenyl cation is very stable", "The electron-rich ring repels the nucleophile"],
            answers: [0, 1, 3],
            explain: "The phenyl cation is **unstable** (not resonance stabilised), which is why SN1 fails. The other three are correct reasons.",
          },
          {
            kind: "fill",
            q: "Bromobenzene, bromomethane and sodium in dry ether give toluene. This is the ___ reaction.",
            answer: ["Wurtz-Fittig", "Wurtz–Fittig", "Wurtz Fittig"],
            explain: "Wurtz–Fittig couples an aryl and an alkyl group.",
          },
          {
            kind: "truefalse",
            q: "Chlorine on a benzene ring makes the ring more reactive than benzene towards electrophiles.",
            answer: false,
            explain: "Its −I effect withdraws electron density from the whole ring, so chlorobenzene reacts more slowly than benzene, although it directs to ortho and para.",
          },
          {
            kind: "mcq",
            q: "The poisonous gas formed when chloroform is exposed to air and light is:",
            options: ["Chlorine", "Phosgene, COCl₂", "Carbon monoxide", "Hydrogen cyanide"],
            answer: 1,
            explain: "2CHCl₃ + O₂ → 2COCl₂ + 2HCl. Chloroform is stored in closed, dark bottles filled to the brim to keep air and light out.",
          },
        ],
      },

      /* ---------------- Exam edge ---------------- */
      {
        slug: "c12-halo-exam-edge",
        title: "Exam edge: SN1, SN2, E1, E2 and Aryl Mechanisms",
        summary: "Choosing between SN1, SN2, E1 and E2, rearrangements, anti-periplanar E2 in rings, enantiomeric excess, addition–elimination and benzyne mechanisms for aryl halides.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "**What the exams ask.** KCET, COMEDK and NEET ask for reactivity orders (SN1, SN2, towards AgNO₃), product of KCN vs AgCN, Saytzeff products, named reactions, and whether a compound is chiral. JEE Main adds free radical product ratios, stereochemistry of SN2/SN1 products and o/p activation of aryl halides. JEE Advanced asks you to pick the mechanism from substrate, reagent and solvent, to follow rearranging carbocations, to apply the anti-periplanar rule of E2 in cyclohexanes, and to predict products of benzyne and addition–elimination (SNAr) reactions.",
          },
          {
            type: "table",
            headers: ["Substrate", "Strong small base / nucleophile (OH⁻, EtO⁻)", "Strong bulky base (t-BuO⁻)", "Good nucleophile, weak base (I⁻, CN⁻, RS⁻)", "Weak nucleophile, protic solvent (H₂O, EtOH)"],
            rows: [
              ["CH₃X", "SN2", "SN2", "SN2", "very slow"],
              ["1° RX", "SN2 (E2 with heat)", "E2", "SN2", "very slow"],
              ["2° RX", "E2 mainly, some SN2", "E2", "SN2", "SN1 / E1, slow"],
              ["3° RX", "E2", "E2", "SN1 / E1 (no SN2)", "SN1 + E1"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: "**SN2:** CH₃ > 1° > 2° >> 3°, but **neopentyl** (CH₃)₃CCH₂X is extremely slow even though it is 1°: the tert-butyl group blocks the back. Polar aprotic solvents (DMSO, DMF, acetone) speed SN2.\n\n**SN1/E1:** follow carbocation stability. Benzylic and allylic cations rank with 3°; (C₆H₅)₂CH⁺ and (C₆H₅)₃C⁺ are more stable still. Always check for a 1,2-H or 1,2-CH₃ shift to a more stable cation.\n\n**Leaving group:** I > Br > Cl > F for SN1, SN2, E1 and E2. The order **reverses** in SNAr (F is best), because there the slow step is addition, not C–X cleavage.\n\n**E2:** needs H and X **anti-periplanar** (in cyclohexanes both axial). A bulky base (t-BuOK) gives mostly the **less substituted** (Hofmann) alkene.",
          },
          {
            type: "example",
            title: "KCET / NEET level: SN2 order with a trap",
            problem: "Arrange in decreasing order of SN2 reactivity with NaI in acetone: (CH₃)₃CCH₂Br, CH₃CH₂Br, (CH₃)₂CHBr, CH₃Br.",
            steps: [
              "SN2 rate falls as crowding at and near the reacting carbon rises.",
              "CH₃Br (no alkyl groups) > CH₃CH₂Br (1°) > (CH₃)₂CHBr (2°).",
              "(CH₃)₃CCH₂Br is 1°, but the bulky tert-butyl group on the next carbon shields the back of the CH₂Br carbon almost completely; it reacts far more slowly than even the 2° bromide.",
            ],
            answer: "CH₃Br > CH₃CH₂Br > (CH₃)₂CHBr > (CH₃)₃CCH₂Br",
          },
          {
            type: "example",
            title: "JEE Main level: product ratio in free radical chlorination",
            problem: "2-Methylbutane is monochlorinated in light. Take the relative reactivity per H as 1° : 2° : 3° = 1 : 3.8 : 5. Find the percentage of each structural isomer and say which are chiral.",
            steps: [
              "Count each kind of H in (CH₃)₂CH–CH₂–CH₃: the two CH₃ on C2 give 6 H (1°); C2 has 1 H (3°); C3 has 2 H (2°); C4 has 3 H (1°).",
              "Relative amounts = number of H × reactivity: 1-chloro-2-methylbutane 6 × 1 = 6; 2-chloro-2-methylbutane 1 × 5 = 5; 2-chloro-3-methylbutane 2 × 3.8 = 7.6; 1-chloro-3-methylbutane 3 × 1 = 3. Total = 21.6.",
              "Percentages: 6/21.6 = 27.8%; 5/21.6 = 23.1%; 7.6/21.6 = 35.2%; 3/21.6 = 13.9%.",
              "1-Chloro-2-methylbutane (C2: H, CH₃, C₂H₅, CH₂Cl) and 2-chloro-3-methylbutane (C2: H, Cl, CH₃, CH(CH₃)₂) are chiral; each forms as a racemic mixture because the planar radical is attacked from both faces.",
            ],
            answer: "27.8% : 23.1% : 35.2% : 13.9%; two of the four isomers are chiral (formed racemic), so 6 stereoisomers in all.",
          },
          {
            type: "example",
            title: "JEE Main / Advanced: E2 in a cyclohexane ring",
            problem: "Predict the major alkene when (a) cis- and (b) trans-1-bromo-2-methylcyclohexane are heated with NaOEt in ethanol.",
            steps: [
              "E2 in a cyclohexane needs Br **axial** with an **axial** H on a neighbouring carbon (trans-diaxial, anti-periplanar).",
              "(a) cis isomer: in the chair with Br axial, the CH₃ on C2 is equatorial, so C2 has an axial H. Elimination towards C2 is possible and gives the more substituted alkene, 1-methylcyclohexene (Saytzeff).",
              "(b) trans isomer: with Br axial, the CH₃ on C2 must also be axial, so the H on C2 is equatorial and cannot be anti to Br. Only C6 has an axial H.",
              "So the trans isomer can only give 3-methylcyclohexene, even though it is the less substituted alkene.",
            ],
            answer: "(a) 1-methylcyclohexene (major); (b) 3-methylcyclohexene.",
          },
          {
            type: "example",
            title: "JEE Advanced: benzyne",
            problem: "4-Chlorotoluene is treated with NaNH₂ in liquid NH₃. Explain why two products form and name them.",
            steps: [
              "No nitro group activates the ring, so addition–elimination is not possible. Instead the very strong base NH₂⁻ removes the H **ortho** to Cl.",
              "The aryl carbanion loses Cl⁻, giving **benzyne**: a ring with a strained extra π bond between the old C–Cl carbon (C4) and its neighbour (C3).",
              "NH₂⁻ adds to either end of the triple bond, then the carbanion takes H⁺ from NH₃.",
              "Attack at C4 puts NH₂ where Cl was (4-methylaniline); attack at C3 puts NH₂ on the neighbouring carbon (3-methylaniline).",
            ],
            answer: "A mixture of 4-methylaniline (p-toluidine) and 3-methylaniline (m-toluidine), via 4-methylbenzyne. A ¹⁴C label on the C–Cl carbon of chlorobenzene likewise ends up split about equally between C1 and C2 of aniline.",
          },
          {
            type: "example",
            title: "JEE Advanced: a rearranging SN1",
            problem: "1-Bromo-2,2-dimethylpropane, (CH₃)₃C–CH₂Br, is warmed with water containing AgNO₃. Predict the main substitution product.",
            steps: [
              "Ag⁺ pulls off Br⁻ and forces an SN1-type path (SN2 is blocked by the neopentyl structure).",
              "A primary cation (CH₃)₃C–CH₂⁺ is very unstable; as it forms, a methyl group moves with its electron pair from the quaternary carbon to the CH₂ carbon (1,2-methyl shift).",
              "This gives the tertiary cation (CH₃)₂C⁺–CH₂CH₃ (2-methylbutan-2-yl).",
              "Water attacks the tertiary carbon, and loss of H⁺ gives the alcohol. (Some 2-methylbut-2-ene also forms by E1.)",
            ],
            answer: "2-Methylbutan-2-ol, (CH₃)₂C(OH)CH₂CH₃, a rearranged product, not 2,2-dimethylpropan-1-ol.",
          },
          {
            type: "formula",
            tex: t`\text{ee}\,(\%) = \frac{\text{observed specific rotation}}{\text{specific rotation of pure enantiomer}}\times 100,\qquad \%\,\text{major enantiomer} = 50 + \frac{\text{ee}}{2}`,
            caption: "Enantiomeric excess (optical purity). A racemic mixture has ee = 0; a single enantiomer has ee = 100%.",
          },
          {
            type: "mistake",
            wrong: "Fluoride is the worst leaving group, so 1-fluoro-2,4-dinitrobenzene reacts slowest with a nucleophile among the 2,4-dinitrohalobenzenes.",
            right: "In SNAr (addition–elimination) the fluoro compound reacts **fastest**: ArF > ArCl ≈ ArBr > ArI.",
            why: "The slow step is the nucleophile adding to the ring to form a negatively charged intermediate (Meisenheimer complex). Highly electronegative F makes that carbon most δ+ and stabilises the charge; C–F breaks later, in a fast step.",
          },
          {
            type: "mistake",
            wrong: "Strong bases always give the Saytzeff alkene.",
            right: "A bulky base such as potassium tert-butoxide removes the most accessible H and gives mostly the **less substituted** (Hofmann) alkene; ring E2 reactions can also be forced to the less substituted alkene by the anti-periplanar rule.",
            why: "Saytzeff's rule assumes the base can reach every β-hydrogen equally. A crowded base cannot easily reach an internal CH₂ or CH, and in rings only axial H anti to X can be removed.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Neopentyl bromide in hot water with Ag⁺: which alcohol forms?",
              emoji: "🔀",
              options: ["2,2-Dimethylpropan-1-ol", "2-Methylbutan-2-ol", "2-Methylbutan-1-ol"],
              answer: 1,
              trap: 0,
              explain: "Under SN1 conditions a 1,2-methyl shift turns the unstable primary cation into a tertiary one, so OH ends up on the tertiary carbon. Writing the unrearranged alcohol is the classic slip.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A sample of a chiral bromide shows a specific rotation of +6.0°. The pure (+) enantiomer has +12.0°. What percentage of the sample is the (+) enantiomer?",
                answer: 75,
                unit: "%",
                explain: "ee = 6.0/12.0 × 100 = 50%. Major enantiomer = 50 + 50/2 = 75%; the rest (25%) is (−).",
                difficulty: 2,
                hint: "Find ee first, then use 50 + ee/2.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Pick the path from substrate, reagent and solvent: 1° → SN2, 3° → SN1/E1 or E2, bulky base → E2 (Hofmann).",
              "Neopentyl halides: SN2 almost nil, SN1 gives rearranged products by a 1,2-methyl shift.",
              "E2 needs anti-periplanar H and X; in cyclohexanes both must be axial.",
              "SNAr needs o/p electron-withdrawing groups and has F as the best leaving group; unactivated ArX with NaNH₂ reacts via benzyne and can give cine (neighbouring-carbon) products.",
              "Free radical product ratio = (number of H) × (relative reactivity); ee = observed/pure × 100.",
            ],
          },
        ],
        flashcards: [
          { front: "Anti-periplanar requirement", back: "In E2, the H and the leaving group must be in one plane on opposite sides (180°); in cyclohexanes both axial." },
          { front: "Hofmann product", back: "The less substituted alkene, favoured by bulky bases such as t-BuOK." },
          { front: "Neopentyl bromide and SN2", back: "Extremely slow: the tert-butyl group next to CH₂Br blocks backside attack." },
          { front: "Leaving group order in SNAr", back: "F > Cl ≈ Br > I: addition of the nucleophile is rate-determining." },
          { front: "Meisenheimer complex", back: "The negatively charged addition intermediate in SNAr, stabilised by o/p nitro groups." },
          { front: "Benzyne", back: "C₆H₄ with a strained extra π bond, formed from ArX + NaNH₂; NH₂⁻ adds at either end." },
          { front: "Enantiomeric excess", back: "ee = |% R − % S| = observed rotation ÷ rotation of pure enantiomer × 100." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "2-Bromo-2-methylbutane is heated with potassium tert-butoxide in tert-butanol. The major product is:",
            options: ["2-Methylbut-2-ene", "2-Methylbut-1-ene", "2-tert-Butoxy-2-methylbutane", "2-Methylbutan-2-ol"],
            answer: 1,
            explain: "The bulky base removes the easily reached H of the CH₃ on C2 rather than the internal CH₂ H, so the less substituted Hofmann alkene is major. A 3° halide does not undergo SN2.",
            difficulty: 2,
            hint: "Think about which β-hydrogens a bulky base can reach.",
          },
          {
            kind: "multi",
            q: "(R)-2-Bromobutane is dissolved in acetone with excess NaI. Which statements are correct?",
            options: ["Rate = k[RBr][I⁻]", "The first-formed 2-iodobutane has the (S) configuration", "A carbocation intermediate is formed", "Over a long time with excess I⁻ the optical activity slowly falls towards zero"],
            answers: [0, 1, 3],
            explain: "SN2 with inversion gives (S)-2-iodobutane (I takes the top priority, as Br did). I⁻ can then displace I⁻ from the product, each time inverting it, so the mixture slowly racemises. No carbocation forms.",
            difficulty: 3,
            hint: "Iodide is both a good nucleophile and a good leaving group.",
          },
          {
            kind: "numeric",
            q: "2-Methylpropane is monochlorinated. With relative reactivity 1° : 3° = 1 : 5 per H, what percentage of the product is 2-chloro-2-methylpropane? (one decimal place)",
            answer: 35.7,
            tolerance: 0.3,
            unit: "%",
            explain: "There are 9 primary H (× 1 = 9) and 1 tertiary H (× 5 = 5). Tertiary fraction = 5/14 = 35.7%.",
            difficulty: 2,
            hint: "Multiply the number of each kind of H by its reactivity.",
          },
          {
            kind: "mcq",
            q: "Which compound reacts fastest with CH₃O⁻ in methanol?",
            options: ["1-Fluoro-2,4-dinitrobenzene", "1-Chloro-2,4-dinitrobenzene", "1-Iodo-2,4-dinitrobenzene", "Chlorobenzene"],
            answer: 0,
            explain: "This is SNAr; addition is rate-determining, and fluorine makes the attacked carbon most δ+ and stabilises the Meisenheimer complex best.",
            difficulty: 3,
            hint: "Which step is slow in addition–elimination?",
          },
          {
            kind: "mcq",
            q: "2-Bromoanisole (1-bromo-2-methoxybenzene) is treated with NaNH₂ in liquid NH₃. The main product is:",
            options: ["2-Methoxyaniline", "3-Methoxyaniline", "4-Methoxyaniline", "Phenol"],
            answer: 1,
            explain: "The only ortho H is removed (the other ortho position carries OCH₃), giving 3-methoxybenzyne. NH₂⁻ adds to the carbon farther from OCH₃ so that the carbanion sits next to the electron-withdrawing (−I) oxygen, which stabilises it. NH₂ therefore ends up meta to OCH₃.",
            difficulty: 3,
            hint: "Where is the carbanion most stable after NH₂⁻ adds?",
          },
          {
            kind: "numeric",
            q: "A sample of (S)-X shows [α] = −9.0°; pure (S)-X has [α] = −15.0°. What is the percentage of (S)-X in the sample?",
            answer: 80,
            unit: "%",
            explain: "ee = 9.0/15.0 × 100 = 60%. % (S) = 50 + 60/2 = 80%.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which chloride is hydrolysed fastest in aqueous ethanol by the SN1 route?",
            options: ["CH₃CH₂CH₂Cl", "C₆H₅CH₂Cl", "(C₆H₅)₂CHCl", "CH₂=CHCl"],
            answer: 2,
            explain: "The diphenylmethyl cation is stabilised by two rings, more than the benzyl cation. A 1° alkyl cation is poor, and vinyl chloride hardly ionises.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "cis-1-Bromo-4-tert-butylcyclohexane reacts with NaOEt by E2 much faster than its trans isomer. Why?",
            options: ["The cis isomer has a weaker C–Br bond", "In the cis isomer Br is axial when the bulky tert-butyl group is equatorial", "The trans isomer forms a carbocation first", "The cis isomer has no β-hydrogens"],
            answer: 1,
            explain: "The tert-butyl group locks itself equatorial. In the cis isomer that leaves Br axial, anti-periplanar to axial H on both neighbours; in the trans isomer Br is locked equatorial and E2 is very slow.",
            difficulty: 3,
            hint: "Which group decides the chair, and where does Br sit then?",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Haloalkanes and Haloarenes": "c12-haloalkanes-haloarenes",
};
