import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Organic Chemistry – Some Basic Principles and Techniques (NCERT)   */
  /* = Organic Chemistry: Basic Principles and Techniques (ISC)         */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-che-goc",
    title: "Organic Chemistry: Some Basic Principles and Techniques",
    icon: "🧬",
    description: "Tetravalence and hybridisation of carbon, structural formulae, IUPAC nomenclature, isomerism, bond fission, reactive intermediates, inductive, resonance, electromeric and hyperconjugation effects, types of organic reactions, purification and qualitative and quantitative analysis.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-che-goc-structure-naming",
        title: "Carbon, Structural Formulae and IUPAC Nomenclature",
        summary: "Why carbon forms so many compounds, sp³/sp²/sp hybridisation, complete, condensed and bond-line formulae, classification of organic compounds and the IUPAC rules for naming them.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "💊",
            caption: "Paracetamol in a fever tablet, the dyes in a Kanchipuram silk saree and the polythene of a milk packet are all carbon compounds. Organic chemistry is the chemistry of carbon compounds.",
          },
          {
            type: "text",
            md: t`Early chemists believed in the **vital force theory**: organic compounds could be made only by living things. In 1828 **F. Wöhler** made **urea** (an animal product) by heating **ammonium cyanate**, an inorganic salt. Kolbe (acetic acid, 1845) and Berthelot (methane, 1856) then made organic compounds from inorganic starting materials, and the theory was abandoned.

Carbon is **tetravalent**: it forms four covalent bonds. Its atoms join to each other in long chains, branches and rings (**catenation**), and form single, double and triple bonds. That is why millions of organic compounds exist.`,
          },
          {
            type: "table",
            headers: ["Hybridisation", "Bonds on carbon", "Shape, angle", "s-character", "Example"],
            rows: [
              ["sp³", "four single bonds", "tetrahedral, 109.5°", "25%", "CH₄, C₂H₆"],
              ["sp²", "one double + two single", "trigonal planar, 120°", "33%", "C₂H₄, HCHO, benzene"],
              ["sp", "one triple + one single (or two double)", "linear, 180°", "50%", "C₂H₂, CO₂"],
            ],
          },
          {
            type: "text",
            md: t`More **s-character** keeps electrons closer to the nucleus, so an sp carbon is **more electronegative** than an sp² carbon, which is more electronegative than an sp³ carbon. Bonds also get shorter: C–C 154 pm, C=C 134 pm, C≡C 120 pm. A **π bond** forms by sideways overlap of unhybridised p orbitals; it stops free rotation and is the reactive part of alkenes and alkynes.

**Ways to write a structure.** A **complete (Lewis/dash) formula** shows every bond. A **condensed formula** groups atoms: CH₃CH₂CH₂OH. A **bond-line formula** shows only the carbon skeleton as a zig-zag: each end and corner is a carbon carrying enough H atoms to make four bonds; heteroatoms and the H on them are written. In **3D (wedge–dash)** drawings, a solid wedge points towards you and a dashed wedge points away.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In CH₂=CH–C≡N, the hybridisation of the three carbons from left to right is:",
                options: ["sp², sp², sp", "sp³, sp², sp", "sp², sp, sp", "sp², sp², sp²"],
                answer: 0,
                explain: "C1 and C2 share the double bond (sp² each); C3 is part of the C≡N triple bond (sp).",
              },
            ],
          },
          {
            type: "text",
            md: t`**Classification.** Organic compounds are **acyclic (open chain)**, e.g. propane, or **cyclic**. Cyclic ones are **alicyclic** (rings that behave like open chains, e.g. cyclohexane) or **aromatic**. Aromatic compounds are **benzenoid** (benzene, naphthalene), **non-benzenoid** (e.g. tropolone) or **heterocyclic** (ring contains N, O or S: pyridine, furan, thiophene).

A **functional group** is the atom or group that decides the characteristic reactions (–OH, –CHO, –COOH). A **homologous series** is a family with the same functional group whose successive members differ by **–CH₂–** (14 u), e.g. CH₃OH, C₂H₅OH, C₃H₇OH.`,
          },
          {
            type: "text",
            md: t`**IUPAC name = prefix(es) + word root + primary suffix + secondary suffix.** The **word root** gives the number of carbons in the main chain (meth, eth, prop, but, pent, hex …). The **primary suffix** gives saturation (-ane, -ene, -yne). The **secondary suffix** gives the principal functional group (-ol, -al, -one, -oic acid). Steps:

1. Pick the **longest chain** containing the principal functional group and as many multiple bonds as possible (the chain may bend).
2. Number it so the principal group, then multiple bonds, then substituents get the **lowest locants** (first point of difference).
3. Name substituents as prefixes in **alphabetical order**; di-, tri-, sec-, tert- are ignored while alphabetising, but iso and neo are counted.
4. Write numbers with commas between them and hyphens between numbers and words.`,
          },
          {
            type: "table",
            headers: ["Group (in decreasing priority)", "Suffix", "Prefix"],
            rows: [
              ["–COOH", "-oic acid", "carboxy"],
              ["–SO₃H", "-sulphonic acid", "sulpho"],
              ["–COOR", "-oate (alkyl … -oate)", "alkoxycarbonyl"],
              ["–COCl", "-oyl chloride", "chlorocarbonyl"],
              ["–CONH₂", "-amide", "carbamoyl"],
              ["–CN", "-nitrile", "cyano"],
              ["–CHO", "-al", "formyl / oxo"],
              [">C=O", "-one", "oxo"],
              ["–OH", "-ol", "hydroxy"],
              ["–NH₂", "-amine", "amino"],
              ["–X, –NO₂, –OR, –R", "always prefixes", "halo, nitro, alkoxy, alkyl"],
            ],
          },
          {
            type: "example",
            title: "The longest chain is not always the straight one",
            problem: "Name CH₃–CH(CH₃)–CH₂–CH(CH₂CH₃)–CH₃.",
            steps: [
              "Look for the longest chain. Going from the left CH₃ through C2, C3, C4 and then into the ethyl group gives 6 carbons; going to the right-hand CH₃ on C4 gives only 5. So the parent is hexane.",
              "Number the hexane chain from the end nearer the first branch: the substituents (both methyl) sit on C2 and C4. From the other end they would be on C3 and C5.",
              "Lowest locants win: 2,4. Two methyl groups → dimethyl.",
            ],
            answer: "2,4-Dimethylhexane",
          },
          {
            type: "example",
            title: "Two functional groups: who is the suffix?",
            problem: "Name CH₃–CO–CH₂–CH₂–OH.",
            steps: [
              "The groups are a ketone (>C=O) and an alcohol (–OH). The ketone has higher priority, so it is the suffix (-one) and –OH becomes the prefix hydroxy.",
              "Main chain: 4 carbons, all single C–C bonds → butan-…-one.",
              "Number from the end that gives C=O the lowest locant: C=O on C2, –OH on C4.",
            ],
            answer: "4-Hydroxybutan-2-one",
          },
          {
            type: "mistake",
            wrong: "In 3-chloro-4-methylhexane, the numbering should give methyl the lower number because methyl is the simpler group.",
            right: "When both directions give the same set of locants (here 3 and 4), the substituent that comes first in **alphabetical order** gets the lower number: chloro (c) before methyl (m), so the name is 3-chloro-4-methylhexane.",
            why: "Learners invent a 'simpler group first' rule. IUPAC uses lowest locants first and alphabetical order only to break a tie, never the size of the group.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each common name to its IUPAC name.",
              pairs: [
                ["Isobutane", "2-Methylpropane"],
                ["Neopentane", "2,2-Dimethylpropane"],
                ["Acetone", "Propanone"],
                ["Acetaldehyde", "Ethanal"],
                ["Isopropyl alcohol", "Propan-2-ol"],
                ["Acetylene", "Ethyne"],
              ],
              explain: "Common names hide the chain length; IUPAC names state it (prop = 3 C, eth = 2 C) and give every branch a number.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In naming questions, examiners award the mark only for the complete name: correct root, correct suffix, lowest locants and alphabetical order. Write numbers before the part they describe (but-2-ene, not 2-butene) and drop the 'e' of -ane only before a vowel (propan-2-ol, but propane-1,2-diol keeps it). Draw the bond-line structure first; it prevents counting errors.",
          },
          {
            type: "keypoints",
            items: [
              "Carbon is tetravalent and catenates; sp³ (109.5°), sp² (120°) and sp (180°) carbons have 25%, 33% and 50% s-character.",
              "Structures can be written as complete, condensed, bond-line or wedge–dash formulae.",
              "Organic compounds are acyclic, alicyclic or aromatic (benzenoid, non-benzenoid, heterocyclic); members of a homologous series differ by CH₂.",
              "IUPAC name: prefixes + root + primary suffix + secondary suffix; longest chain, lowest locants, alphabetical order.",
              "Priority: –COOH > –SO₃H > –COOR > –COCl > –CONH₂ > –CN > –CHO > >C=O > –OH > –NH₂; halo, nitro, alkoxy and alkyl are always prefixes.",
            ],
          },
        ],
        flashcards: [
          { front: "Who disproved the vital force theory, and how?", back: "F. Wöhler (1828), by making urea from ammonium cyanate." },
          { front: "s-character of sp³, sp² and sp carbon", back: "25%, 33% and 50%. More s-character means a more electronegative carbon." },
          { front: "C–C, C=C and C≡C bond lengths", back: "154 pm, 134 pm and 120 pm." },
          { front: "Bond-line formula", back: "A zig-zag skeleton: each corner and end is a carbon with enough H atoms to make four bonds; heteroatoms are written." },
          { front: "Homologous series", back: "Compounds with the same functional group whose successive members differ by CH₂ (14 u) and show similar chemical properties." },
          { front: "Three parts of an IUPAC name after the prefix", back: "Word root (chain length), primary suffix (-ane/-ene/-yne), secondary suffix (principal functional group)." },
          { front: "Which ranks higher: –CHO or –OH?", back: "–CHO (aldehyde). In HOCH₂CH₂CHO the name is 3-hydroxypropanal." },
          { front: "Heterocyclic aromatic examples", back: "Pyridine (N), furan (O), thiophene (S)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The IUPAC name of CH₃–CH(CH₃)–CH(CH₃)–CH₂–CH₃ is:",
            options: ["2,3-Dimethylpentane", "3,4-Dimethylpentane", "2-Methyl-3-methylpentane", "2,3-Dimethylhexane"],
            answer: 0,
            explain: "Longest chain = 5 C (pentane). Numbering from the left puts methyls on C2 and C3 (lower than 3,4). Identical groups are combined as dimethyl.",
          },
          {
            kind: "mcq",
            q: "The IUPAC name of HO–CH₂–CH₂–COOH is:",
            options: ["3-Hydroxypropanoic acid", "1-Hydroxypropanoic acid", "3-Carboxypropan-1-ol", "Propan-1-ol-3-oic acid"],
            answer: 0,
            explain: "–COOH outranks –OH, so it is the suffix and its carbon is C1. The –OH is on C3 → 3-hydroxypropanoic acid.",
          },
          {
            kind: "mcq",
            q: "The correct IUPAC name of CH₂=CH–CH₂–C≡CH is:",
            options: ["Pent-1-en-4-yne", "Pent-4-en-1-yne", "Pent-1-yn-4-ene", "Pent-2-en-4-yne"],
            answer: 0,
            explain: "Either end gives the multiple bonds locants {1, 4}. In a tie, the double bond gets the lower number, so it is pent-1-en-4-yne.",
            difficulty: 2,
            hint: "When both directions tie, '-ene' gets priority for the lower number.",
          },
          {
            kind: "numeric",
            q: "How many sp² hybridised carbon atoms are present in benzaldehyde, C₆H₅CHO?",
            answer: 7,
            explain: "All six ring carbons are sp², and the aldehyde carbon (C=O) is also sp²: 6 + 1 = 7.",
          },
          {
            kind: "multi",
            q: "Which of these are heterocyclic aromatic compounds?",
            options: ["Pyridine", "Furan", "Cyclohexane", "Thiophene", "Benzene"],
            answers: [0, 1, 3],
            explain: "Pyridine, furan and thiophene have N, O and S in an aromatic ring. Cyclohexane is alicyclic; benzene is aromatic but has only carbon in the ring.",
          },
          {
            kind: "truefalse",
            q: "Two consecutive members of a homologous series differ in molar mass by 14 g mol⁻¹.",
            answer: true,
            explain: "They differ by one CH₂ unit: 12 + 2 = 14.",
          },
          {
            kind: "fill",
            q: "The secondary suffix used for a ketone group is '___'.",
            answer: ["-one", "one"],
            explain: "Ketones end in -one, e.g. propanone, butan-2-one.",
          },
          {
            kind: "mcq",
            q: "The IUPAC name of (CH₃)₃C–CH₂–CH₃ is:",
            options: ["2,2-Dimethylbutane", "Neohexane only", "2-Ethyl-2-methylpropane", "3,3-Dimethylbutane"],
            answer: 0,
            explain: "Longest chain: 4 C (butane). Numbering from the branched end puts both methyls on C2 → 2,2-dimethylbutane (3,3 is higher).",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-che-goc-isomerism-intermediates",
        title: "Isomerism, Bond Fission and Reactive Intermediates",
        summary: "Structural isomerism (chain, position, functional, metamerism) and stereoisomerism, homolytic and heterolytic fission, curved-arrow notation, nucleophiles and electrophiles, and carbocations, carbanions and free radicals.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🍶",
            caption: "C₂H₆O is ethanol, a liquid used in sanitisers, and also methoxymethane (dimethyl ether), a gas. Same formula, different compounds.",
          },
          {
            type: "text",
            md: "Compounds with the **same molecular formula but different properties** are **isomers**. If they differ in the order in which atoms are joined, they are **structural isomers**. If the atoms are joined in the same order but are arranged differently in space, they are **stereoisomers**.",
          },
          {
            type: "table",
            headers: ["Structural isomerism", "What differs", "Example"],
            rows: [
              ["Chain", "the carbon skeleton (straight or branched)", "pentane, 2-methylbutane, 2,2-dimethylpropane (C₅H₁₂)"],
              ["Position", "position of a substituent, functional group or multiple bond on the same skeleton", "propan-1-ol and propan-2-ol; but-1-ene and but-2-ene"],
              ["Functional group", "the functional group itself", "ethanol and methoxymethane; propanal and propanone"],
              ["Metamerism", "the alkyl groups on either side of a functional group", "ethoxyethane and methoxypropane (C₄H₁₀O)"],
            ],
          },
          {
            type: "example",
            title: "Chain isomers of C₅H₁₂",
            problem: "Draw and name all the chain isomers of C₅H₁₂.",
            steps: [
              "Five carbons in a row: CH₃CH₂CH₂CH₂CH₃ → pentane.",
              "Four in a row with one branch: the branch can only go on C2 (on C3 it is the same compound numbered from the other end): CH₃CH(CH₃)CH₂CH₃ → 2-methylbutane.",
              "Three in a row with two branches: both on C2: C(CH₃)₄ → 2,2-dimethylpropane.",
              "A branch on C1 just lengthens the chain, so there are no more.",
            ],
            answer: "Three isomers: pentane, 2-methylbutane and 2,2-dimethylpropane.",
          },
          {
            type: "text",
            md: "**Stereoisomerism** is of two kinds. **Geometrical (cis–trans) isomerism** appears when rotation is blocked, as about a C=C bond with two different groups on each carbon (cis- and trans-but-2-ene). **Optical isomerism** appears when a molecule and its mirror image cannot be superimposed, usually because a carbon carries four different groups. Geometrical isomers are met again in Hydrocarbons; optical isomerism is studied in detail in Class 12.",
          },
          {
            type: "text",
            md: t`**Breaking a covalent bond.** In **homolytic fission** each atom keeps one electron of the shared pair and **free radicals** form; it needs heat, light or peroxides. It is shown with a half-headed (fish-hook) arrow, which moves one electron. In **heterolytic fission** the more electronegative atom takes both electrons, giving **ions**; a full curved arrow moves an electron pair, from where the electrons are to where they go.

The molecule whose carbon forms the new bond is the **substrate**; the species that attacks is the **reagent**.`,
          },
          {
            type: "formula",
            tex: t`\mathrm{(CH_3)_3C{-}Br \;\longrightarrow\; (CH_3)_3C^{+} + Br^{-}} \qquad\qquad \mathrm{Cl{-}Cl \;\xrightarrow{h\nu}\; 2\,Cl^{\bullet}}`,
            caption: "Heterolysis gives a carbocation and a bromide ion; homolysis of chlorine in light gives two chlorine radicals.",
          },
          {
            type: "text",
            md: "A **nucleophile** (nucleus-loving) brings an electron pair and attacks an electron-poor centre: OH⁻, CN⁻, Cl⁻, R₃C⁻ (carbanion), and neutral molecules with lone pairs such as H₂O, NH₃ and R–OH. An **electrophile** (electron-loving) accepts an electron pair and attacks an electron-rich centre: R₃C⁺ (carbocation), NO₂⁺, Br⁺, and neutral species such as BF₃, AlCl₃ or the carbon of a C=O group.",
          },
          {
            type: "table",
            headers: ["Intermediate", "Carbocation", "Carbanion", "Free radical"],
            rows: [
              ["Charge on carbon", "positive", "negative", "none (one unpaired electron)"],
              ["Electrons around the carbon", "6", "8 (one lone pair)", "7"],
              ["Hybridisation and shape", "sp², trigonal planar, empty p orbital", "sp³, pyramidal", "sp², nearly planar (simple alkyl radicals)"],
              ["Formed by", "heterolysis (leaving group takes the pair)", "heterolysis (carbon keeps the pair)", "homolysis"],
              ["Alkyl stability order", "3° > 2° > 1° > CH₃⁺", "CH₃⁻ > 1° > 2° > 3°", "3° > 2° > 1° > CH₃•"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The carbon atom of the methyl carbocation, CH₃⁺, is:",
                options: ["sp², planar, with 6 electrons around it", "sp³, pyramidal, with 8 electrons", "sp, linear, with 4 electrons", "sp³, tetrahedral, with 7 electrons"],
                answer: 0,
                explain: "CH₃⁺ has three bond pairs only (6 electrons), uses sp² orbitals and keeps an empty p orbital perpendicular to the plane.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A nucleophile must carry a negative charge.",
            right: "A nucleophile needs only an available electron pair. Neutral H₂O, NH₃ and alcohols are common nucleophiles; anions such as OH⁻ are usually stronger ones.",
            why: "The first examples learners see are all anions, so they link 'nucleophile' with 'minus'. The definition is about donating a pair, which lone pairs on neutral atoms can do.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each species: nucleophile or electrophile?",
              groups: ["Nucleophile", "Electrophile"],
              items: [
                { text: "OH⁻", group: 0, hint: "It has lone pairs and a negative charge to donate." },
                { text: "NH₃", group: 0, hint: "Neutral, but the nitrogen has a lone pair." },
                { text: "CN⁻", group: 0, hint: "An anion with a lone pair on carbon." },
                { text: "H₂O", group: 0, hint: "Oxygen has two lone pairs." },
                { text: "NO₂⁺", group: 1, hint: "Positive and electron-poor: it is the attacking species in nitration." },
                { text: "BF₃", group: 1, hint: "Boron has only 6 valence electrons and accepts a pair." },
                { text: "(CH₃)₃C⁺", group: 1, hint: "A carbocation has an empty p orbital." },
              ],
              explain: "Nucleophiles donate an electron pair (charged or neutral); electrophiles accept one (cations or electron-deficient neutral molecules).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to show fission, draw the arrow from the middle of the bond to the atom that receives the electrons, and write the charges or dots on the products. Half-arrows for homolysis and full arrows for heterolysis are checked separately. When asked for isomers, name each one; duplicates drawn from the other end lose marks.",
          },
          {
            type: "keypoints",
            items: [
              "Structural isomers differ in connectivity: chain, position, functional group and metamerism; stereoisomers (geometrical, optical) differ only in arrangement in space.",
              "Homolysis gives free radicals (fish-hook arrows); heterolysis gives ions (full curved arrows).",
              "Nucleophiles donate an electron pair (OH⁻, CN⁻, H₂O, NH₃); electrophiles accept one (R₃C⁺, NO₂⁺, BF₃, C of C=O).",
              "Carbocation: sp², planar, 6 electrons, 3° > 2° > 1° > methyl. Carbanion: sp³, pyramidal, order reversed. Free radical: 7 electrons, 3° > 2° > 1° > methyl.",
            ],
          },
        ],
        flashcards: [
          { front: "Metamerism", back: "Isomerism caused by different alkyl groups on either side of the same functional group, e.g. ethoxyethane and methoxypropane." },
          { front: "Functional isomers of C₃H₆O (open-chain carbonyls)", back: "Propanal (aldehyde) and propanone (ketone)." },
          { front: "Homolytic fission gives …", back: "Free radicals; needs heat, light or peroxide; shown with fish-hook arrows." },
          { front: "Heterolytic fission gives …", back: "Ions (a carbocation or a carbanion plus the other ion); shown with a full curved arrow." },
          { front: "Shape and hybridisation of a carbanion", back: "sp³, pyramidal (one position occupied by the lone pair); 8 electrons around carbon." },
          { front: "Why is BF₃ an electrophile?", back: "Boron has only six valence electrons and an empty orbital, so it accepts an electron pair." },
          { front: "Stability of alkyl carbanions", back: "CH₃⁻ > 1° > 2° > 3°: electron-releasing alkyl groups intensify the negative charge." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Propan-1-ol and propan-2-ol are:",
            options: ["Position isomers", "Chain isomers", "Functional isomers", "Metamers"],
            answer: 0,
            explain: "Same skeleton and same functional group; only the position of –OH changes.",
          },
          {
            kind: "mcq",
            q: "Which pair shows metamerism?",
            options: ["CH₃OC₃H₇ and C₂H₅OC₂H₅", "C₂H₅OH and CH₃OCH₃", "CH₃CH₂CHO and CH₃COCH₃", "n-butane and isobutane"],
            answer: 0,
            explain: "Both are ethers, C₄H₁₀O, differing only in the alkyl groups around –O–. The others are functional (b, c) and chain (d) isomers.",
          },
          {
            kind: "mcq",
            q: "Which of these is NOT a nucleophile?",
            options: ["AlCl₃", "H₂O", "NH₃", "CN⁻"],
            answer: 0,
            explain: "AlCl₃ has an incomplete octet on Al and accepts an electron pair: it is an electrophile (Lewis acid).",
          },
          {
            kind: "mcq",
            q: "Which carbocation is the most stable?",
            options: ["(CH₃)₃C⁺", "(CH₃)₂CH⁺", "CH₃CH₂⁺", "CH₃⁺"],
            answer: 0,
            explain: "The tertiary carbocation has three electron-releasing methyl groups (+I and nine α-H for hyperconjugation).",
          },
          {
            kind: "truefalse",
            q: "Homolytic fission of a C–C bond produces a carbocation and a carbanion.",
            answer: false,
            explain: "Homolysis gives two free radicals. A carbocation–carbanion pair would need heterolysis.",
          },
          {
            kind: "numeric",
            q: "How many electrons are present in the valence shell of the carbon atom of a methyl free radical, •CH₃?",
            answer: 7,
            explain: "Three C–H bond pairs (6 electrons) plus one unpaired electron = 7.",
          },
          {
            kind: "multi",
            q: "Which statements about carbocations are correct?",
            options: [
              "The positive carbon is sp² hybridised",
              "They have an empty p orbital",
              "Tertiary carbocations are more stable than primary ones",
              "They act as nucleophiles",
            ],
            answers: [0, 1, 2],
            explain: "Carbocations are planar sp² species with a vacant p orbital; alkyl groups stabilise them. They are electron-deficient, hence electrophiles.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many structural isomers (chain isomers) does C₆H₁₄ have?",
            answer: 5,
            explain: "Hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane and 2,3-dimethylbutane.",
            difficulty: 2,
            hint: "Try 6, 5 and 4 carbons in the main chain.",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-che-goc-electronic-effects",
        title: "Electronic Effects and Types of Organic Reactions",
        summary: "Inductive, resonance (mesomeric), electromeric and hyperconjugation effects, how they shift electron density, and the four types of organic reactions.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🧲",
            caption: "Like a tug of war, a more electronegative atom pulls the shared electrons of a bond towards itself. That one idea explains acid strength, stability and where reagents attack.",
          },
          {
            type: "text",
            md: t`**Inductive effect.** A polar σ bond such as C–Cl pulls electron density along the chain: C1 gets $\delta+$, C2 a smaller $\delta\delta+$, and so on. This permanent shift of σ electrons is the **inductive effect**. It **fades quickly with distance** and is negligible after about three bonds.

Groups that pull electrons away from carbon show **–I**; groups that push electrons towards it show **+I**.`,
          },
          {
            type: "table",
            headers: ["Effect", "Groups (strongest first)"],
            rows: [
              ["–I (electron-withdrawing)", "–NO₂ > –CN > –COOH > –F > –Cl > –Br > –I > –OH > –OCH₃ > –C₆H₅"],
              ["+I (electron-releasing)", "(CH₃)₃C– > (CH₃)₂CH– > CH₃CH₂– > CH₃–"],
            ],
          },
          {
            type: "example",
            title: "Using the inductive effect",
            problem: "Which is the stronger acid: CH₃COOH or ClCH₂COOH? And which is stronger: 2-chlorobutanoic acid or 4-chlorobutanoic acid?",
            steps: [
              "An acid is stronger when its conjugate base (the carboxylate ion) is more stable.",
              "–Cl is –I: it pulls electron density away from –COO⁻ and spreads the negative charge, so ClCH₂COO⁻ is more stable than CH₃COO⁻.",
              "The inductive effect weakens with distance, so Cl on C2 (next to –COOH) stabilises the anion far more than Cl on C4.",
            ],
            answer: "ClCH₂COOH is the stronger acid; 2-chlorobutanoic acid is stronger than 4-chlorobutanoic acid.",
          },
          {
            type: "text",
            md: t`**Resonance.** Some molecules cannot be shown by one Lewis structure. Benzene, for example, has six equal C–C bonds (139 pm), between C–C and C=C. We draw two or more **resonance (canonical) structures** that differ only in the positions of π electrons and lone pairs; the real molecule is the **resonance hybrid**, more stable than any single structure. The extra stability is the **resonance energy**.

Rules: atoms stay in the same places; the number of unpaired electrons stays the same. Important structures have more covalent bonds, complete octets, less charge separation, and any negative charge on the more electronegative atom.

The **resonance (mesomeric) effect** is the polarity produced by this delocalisation. **+R**: the group gives electrons to the conjugated system (–OH, –OR, –NH₂, –NHR, –NR₂, –NHCOR, halogens). **–R**: the group withdraws them (–NO₂, –CN, –CHO, >C=O, –COOH, –COOR).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which group shows a +R effect when attached to benzene?",
                options: ["–OCH₃", "–NO₂", "–CHO", "–CN"],
                answer: 0,
                explain: "The oxygen of –OCH₃ has lone pairs that it delocalises into the ring (+R). The other three withdraw π electrons (–R).",
              },
            ],
          },
          {
            type: "text",
            md: "**Electromeric effect (E).** A **temporary** effect seen only when a reagent attacks a multiple bond: the π electron pair shifts completely to one atom. In the **+E** effect the π electrons move to the atom to which the reagent attaches (e.g. H⁺ adding to an alkene). In the **–E** effect they move to the atom to which the reagent does not attach (e.g. CN⁻ attacking the carbon of C=O; the electrons go to oxygen). When the inductive and electromeric effects oppose, the electromeric effect wins.",
          },
          {
            type: "text",
            md: "**Hyperconjugation.** The σ electrons of a C–H bond on the carbon next to (α to) an unsaturated or positive carbon delocalise into the adjacent empty p orbital or π orbital. It is a permanent effect, also called **no-bond resonance**. The more α-hydrogens, the more hyperconjugative structures and the greater the stability. It explains why (CH₃)₃C⁺ (9 α-H) is more stable than CH₃CH₂⁺ (3 α-H), and why more substituted alkenes are more stable.",
          },
          {
            type: "example",
            title: "Counting hyperconjugative structures",
            problem: "Compare the stability of (CH₃)₂CH⁺ and CH₃CH₂⁺ using hyperconjugation.",
            steps: [
              "Count C–H bonds on carbons attached directly to C⁺. In (CH₃)₂CH⁺ there are two methyl groups: 2 × 3 = 6 α-H.",
              "In CH₃CH₂⁺ there is one methyl group: 3 α-H.",
              "Each α-H gives one hyperconjugative structure that spreads the positive charge.",
            ],
            answer: "The isopropyl cation (6 structures) is more stable than the ethyl cation (3 structures).",
          },
          {
            type: "mistake",
            wrong: "Resonance structures are real forms of the molecule that keep flipping into each other.",
            right: "No single resonance structure exists. The molecule always has one fixed structure, the resonance hybrid, in which electrons are delocalised; canonical structures are only our way of drawing it.",
            why: "The double-headed arrow looks like an equilibrium arrow, so learners imagine switching. Experiment shows one set of equal bond lengths (as in benzene), not two alternating sets.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each effect to its description.",
              pairs: [
                ["Inductive effect", "Permanent shift of σ electrons; dies out with distance"],
                ["Resonance effect", "Delocalisation of π electrons or lone pairs in a conjugated system"],
                ["Electromeric effect", "Temporary, complete shift of π electrons when a reagent attacks"],
                ["Hyperconjugation", "Delocalisation of σ C–H electrons into an adjacent p or π orbital"],
              ],
              explain: "Only the electromeric effect is temporary. Inductive works through σ bonds; resonance and hyperconjugation work through overlap with p or π orbitals.",
            },
          },
          {
            type: "text",
            md: "**Types of organic reactions.** **Substitution:** one atom or group is replaced by another (CH₃Cl + OH⁻ → CH₃OH + Cl⁻). **Addition:** two molecules join and a multiple bond is used up (CH₂=CH₂ + Br₂ → BrCH₂CH₂Br). **Elimination:** atoms or groups are removed from neighbouring carbons and a multiple bond forms (CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + KBr + H₂O). **Rearrangement:** atoms or groups move within a molecule to give an isomer (n-butane → isobutane with AlCl₃/HCl).",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'explain with an example' questions on each effect, write: definition, one labelled structure with δ+/δ– or curved arrows, and one consequence (acid strength, carbocation stability, alkene stability). Saying whether the effect is permanent or temporary earns a mark.",
          },
          {
            type: "keypoints",
            items: [
              "Inductive effect: permanent σ-electron shift; –I (NO₂, CN, halogens) and +I (alkyl); decreases with distance.",
              "Resonance: real molecule = hybrid of canonical structures; +R (OH, OR, NH₂, halogens) and –R (NO₂, CN, CHO, COOH).",
              "Electromeric effect: temporary, only in presence of a reagent; +E and –E; dominates inductive when they oppose.",
              "Hyperconjugation: σ C–H delocalisation; more α-H → more stable carbocation, radical or alkene.",
              "Reaction types: substitution, addition, elimination, rearrangement.",
            ],
          },
        ],
        flashcards: [
          { front: "Inductive effect", back: "Permanent displacement of σ electrons along a chain due to an electronegative or electropositive group; negligible beyond about three bonds." },
          { front: "Order of +I effect of alkyl groups", back: "(CH₃)₃C– > (CH₃)₂CH– > CH₃CH₂– > CH₃–" },
          { front: "Resonance hybrid", back: "The single real structure of a molecule, an average of its canonical structures, lower in energy than any of them." },
          { front: "Two +R and two –R groups", back: "+R: –OH, –NH₂ (also –OR, halogens). –R: –NO₂, –CHO (also –CN, –COOH)." },
          { front: "Electromeric effect", back: "Temporary complete transfer of a π electron pair to one atom of a multiple bond when a reagent attacks." },
          { front: "Hyperconjugation is also called …", back: "No-bond resonance (σ–π or σ–p conjugation)." },
          { front: "Number of α-H in (CH₃)₃C⁺", back: "9 (three methyl groups × 3 H)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which acid is the strongest?",
            options: ["FCH₂COOH", "ClCH₂COOH", "BrCH₂COOH", "CH₃COOH"],
            answer: 0,
            explain: "F has the strongest –I effect among halogens, so it stabilises the carboxylate ion most.",
          },
          {
            kind: "mcq",
            q: "Which effect operates only in the presence of an attacking reagent?",
            options: ["Electromeric effect", "Inductive effect", "Resonance effect", "Hyperconjugation"],
            answer: 0,
            explain: "The electromeric effect is temporary; the others are permanent properties of the molecule.",
          },
          {
            kind: "numeric",
            q: "How many hyperconjugative structures (involving C–H bonds) can be written for propene, CH₃–CH=CH₂?",
            answer: 3,
            explain: "Only the CH₃ group is attached to the sp² carbon, and it has 3 α-H.",
          },
          {
            kind: "multi",
            q: "Which groups have a –I effect?",
            options: ["–NO₂", "–Cl", "–CH₃", "–COOH", "–C(CH₃)₃"],
            answers: [0, 1, 3],
            explain: "–NO₂, –Cl and –COOH withdraw electrons through σ bonds. Alkyl groups are +I.",
          },
          {
            kind: "mcq",
            q: "CH₂=CH₂ + HBr → CH₃CH₂Br is an example of:",
            options: ["Addition", "Substitution", "Elimination", "Rearrangement"],
            answer: 0,
            explain: "Two molecules combine into one and the C=C double bond is used up.",
          },
          {
            kind: "truefalse",
            q: "In resonance structures, the positions of atoms may change but the electrons must stay fixed.",
            answer: false,
            explain: "It is the opposite: atoms stay in place, and only π electrons and lone pairs are moved.",
          },
          {
            kind: "mcq",
            q: "In CH₂=CH–CHO, which carbon carries a partial positive charge because of resonance?",
            options: ["The CH₂ carbon (C3)", "The middle carbon (C2)", "None; only oxygen is affected", "All three carbons equally"],
            answer: 0,
            explain: "The –CHO group is –R: π electrons shift CH₂=CH–CH=O ↔ ⁺CH₂–CH=CH–O⁻. The positive charge appears on the terminal CH₂ carbon (and on the carbonyl carbon).",
            difficulty: 2,
            hint: "Push the C=C electrons towards C=O and the C=O electrons onto oxygen.",
          },
          {
            kind: "mcq",
            q: "The conversion CH₃CH₂Br + KOH (alcoholic) → CH₂=CH₂ + KBr + H₂O is:",
            options: ["Elimination", "Substitution", "Addition", "Rearrangement"],
            answer: 0,
            explain: "H and Br are removed from neighbouring carbons (β-elimination), creating a C=C bond.",
          },
        ],
      },

      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c11-che-goc-purification-analysis",
        title: "Purification and Qualitative and Quantitative Analysis",
        summary: "Sublimation, crystallisation, the four kinds of distillation, differential extraction and chromatography; Lassaigne's test for N, S, halogens and P; and the estimation of C, H, N, halogens, S, P and O.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🌿",
            caption: "Menthol for a pain balm, curcumin from turmeric and essential oils from lemongrass are separated from plant material using the methods in this lesson.",
          },
          {
            type: "text",
            md: "A pure compound has a sharp **melting point** or **boiling point**; these are used to check purity. **Sublimation** separates a solid that turns directly into vapour (camphor, naphthalene, benzoic acid) from non-volatile impurities. **Crystallisation** uses a solvent in which the compound is sparingly soluble cold but well soluble hot; on cooling, pure crystals separate and impurities stay in the solution. Activated charcoal removes coloured impurities; repeated crystallisation separates compounds of similar solubility.",
          },
          {
            type: "table",
            headers: ["Method", "Use it when", "Example"],
            rows: [
              ["Simple distillation", "liquids differ widely in boiling point, or a volatile liquid has non-volatile impurities", "chloroform (334 K) from aniline (457 K)"],
              ["Fractional distillation", "boiling points are close; a fractionating column gives repeated vaporisation–condensation", "crude oil fractions in a petroleum refinery"],
              ["Distillation under reduced pressure", "the liquid decomposes at or below its normal boiling point; lower pressure lowers the boiling point", "glycerol from spent-lye in soap industry"],
              ["Steam distillation", "the compound is steam volatile and immiscible with water; mixture boils when p(water) + p(compound) = atmospheric pressure, below 373 K", "aniline, essential oils"],
            ],
          },
          {
            type: "text",
            md: t`**Differential extraction**: an organic compound in water is shaken in a separating funnel with a solvent in which it is more soluble and which does not mix with water (e.g. ether); the layers are separated and the solvent evaporated.

**Chromatography** separates a mixture between a **stationary phase** and a **mobile phase**. In **adsorption chromatography** (column chromatography, thin-layer chromatography on silica gel or alumina) components are adsorbed to different extents. In **partition chromatography** (paper chromatography) water held in the paper is the stationary phase and the components divide between it and the moving solvent. Coloured spots are seen directly; colourless ones under UV light, in iodine vapour, or with a spray (ninhydrin for amino acids).`,
          },
          {
            type: "formula",
            tex: t`R_f = \frac{\text{distance moved by the substance from the base line}}{\text{distance moved by the solvent from the base line}}`,
            caption: "The retardation factor is always less than 1; a more strongly adsorbed component has a smaller Rf.",
          },
          {
            type: "text",
            md: "**Qualitative analysis.** Carbon and hydrogen: heat the compound with copper(II) oxide; C → CO₂ (turns lime water milky) and H → H₂O (turns anhydrous copper sulphate blue). For N, S, halogens and P, the compound is fused with sodium metal (**Lassaigne's test**) so that covalent elements become ionic: Na + C + N → NaCN; 2Na + S → Na₂S; Na + X → NaX. The fused mass is boiled with water to give the **sodium fusion extract**.",
          },
          {
            type: "table",
            headers: ["Element", "Test on sodium fusion extract", "Positive result"],
            rows: [
              ["Nitrogen", "boil with FeSO₄, then acidify with conc. H₂SO₄: 3[Fe(CN)₆]⁴⁻ + 4Fe³⁺ → Fe₄[Fe(CN)₆]₃·xH₂O", "Prussian blue colour"],
              ["Sulphur", "(a) acetic acid + lead acetate; (b) sodium nitroprusside", "(a) black PbS; (b) violet colour"],
              ["N and S together", "NaSCN forms; add Fe³⁺", "blood-red colour, [Fe(SCN)]²⁺, no Prussian blue"],
              ["Halogens", "boil with HNO₃, then AgNO₃", "white AgCl (soluble in NH₃); pale yellow AgBr (sparingly soluble); yellow AgI (insoluble)"],
              ["Phosphorus", "oxidise with Na₂O₂ to phosphate; HNO₃ + ammonium molybdate", "yellow ammonium phosphomolybdate"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why is the sodium fusion extract boiled with dilute HNO₃ before adding AgNO₃ in the test for halogens?",
                options: [
                  "To decompose NaCN and Na₂S, which would otherwise give precipitates with Ag⁺",
                  "To convert halide ions into halogens",
                  "To dissolve the silver halide",
                  "To oxidise phosphorus",
                ],
                answer: 0,
                explain: "If N or S is present, CN⁻ and S²⁻ would give AgCN and Ag₂S. Boiling with HNO₃ removes them as HCN and H₂S.",
              },
            ],
          },
          {
            type: "text",
            md: "**Quantitative analysis.** **C and H (Liebig's method):** a known mass is burnt in excess O₂ over CuO; H₂O is absorbed in anhydrous CaCl₂ and CO₂ in concentrated KOH, and the gain in mass of each tube is found. **N (Dumas method):** the compound is heated with CuO in CO₂; N₂ is collected over KOH solution and its volume measured. **N (Kjeldahl's method):** the compound is digested with conc. H₂SO₄ (N → (NH₄)₂SO₄), NH₃ is set free with NaOH and absorbed in a known excess of standard acid; the unused acid is titrated. Kjeldahl's method does **not** work for nitro and azo compounds or for N in a ring (pyridine). **Halogens (Carius method):** heat with fuming HNO₃ and AgNO₃; weigh AgX. **S:** heat with fuming HNO₃ (or Na₂O₂); weigh BaSO₄. **P:** oxidise to H₃PO₄; weigh as ammonium phosphomolybdate or Mg₂P₂O₇. **O** is usually found by difference.",
          },
          {
            type: "table",
            headers: ["Element", "Percentage (m = mass of compound)"],
            rows: [
              ["C", t`$\frac{12}{44} \times \frac{m(\text{CO}_2)}{m} \times 100$`],
              ["H", t`$\frac{2}{18} \times \frac{m(\text{H}_2\text{O})}{m} \times 100$`],
              ["N (Dumas)", t`$\frac{28}{22400} \times \frac{V(\text{N}_2,\ \text{mL at STP})}{m} \times 100$`],
              ["N (Kjeldahl)", t`$\frac{1.4 \times \text{mmol of NH}_3}{m}$`],
              ["Halogen X", t`$\frac{\text{atomic mass of X}}{\text{molar mass of AgX}} \times \frac{m(\text{AgX})}{m} \times 100$`],
              ["S", t`$\frac{32}{233} \times \frac{m(\text{BaSO}_4)}{m} \times 100$`],
              ["P", t`$\frac{62}{222} \times \frac{m(\text{Mg}_2\text{P}_2\text{O}_7)}{m} \times 100$`],
            ],
          },
          {
            type: "example",
            title: "From Liebig data to an empirical formula",
            problem: "0.30 g of an organic compound (C, H, O only) on complete combustion gave 0.44 g of CO₂ and 0.18 g of H₂O. Find the percentage composition and the empirical formula. (C = 12, H = 1, O = 16)",
            steps: [
              "Mass of C = (12/44) × 0.44 = 0.12 g → %C = 0.12/0.30 × 100 = 40.0%.",
              "Mass of H = (2/18) × 0.18 = 0.02 g → %H = 0.02/0.30 × 100 = 6.67%.",
              "%O by difference = 100 − 40.0 − 6.67 = 53.33%.",
              "Moles in 100 g: C 40/12 = 3.33; H 6.67/1 = 6.67; O 53.33/16 = 3.33. Ratio 1 : 2 : 1.",
            ],
            answer: "C 40.0%, H 6.67%, O 53.33%; empirical formula CH₂O.",
          },
          {
            type: "mistake",
            wrong: "Kjeldahl's method can find nitrogen in any organic compound.",
            right: "It fails for nitro (–NO₂) and azo (–N=N–) compounds and for nitrogen in a ring (pyridine), because their nitrogen is not converted to ammonium sulphate. The Dumas method works for all.",
            why: "The method looks general because it is used routinely for foods and fertilisers, whose nitrogen is in amino or amide form. Other nitrogen types resist digestion.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each task to the best method.",
              pairs: [
                ["Camphor mixed with sand", "Sublimation"],
                ["Aniline from a water mixture", "Steam distillation"],
                ["Glycerol from spent-lye", "Distillation under reduced pressure"],
                ["Close-boiling liquids in crude oil", "Fractional distillation"],
                ["Coloured pigments in a leaf extract", "Chromatography"],
              ],
              explain: "Pick the method from one property: sublimes, steam volatile and immiscible, decomposes on boiling, close boiling points, or slightly different adsorption.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Numerical questions on Liebig, Dumas, Kjeldahl and Carius methods are common. Write the formula, substitute with units, and give the answer to two decimal places. In Dumas problems, subtract aqueous tension from the observed pressure and convert the volume to STP first. In Lassaigne's test, write the balanced equation for the colour.",
          },
          {
            type: "keypoints",
            items: [
              "Purification: sublimation, crystallisation, simple/fractional/reduced-pressure/steam distillation, differential extraction, chromatography.",
              "Rf = distance moved by substance ÷ distance moved by solvent (always < 1).",
              "Lassaigne's test: Prussian blue (N), black PbS or violet with nitroprusside (S), blood red (N + S), AgX precipitates (halogens), yellow phosphomolybdate (P).",
              "Estimation: Liebig (C, H), Dumas and Kjeldahl (N), Carius (halogens, S), Mg₂P₂O₇ or phosphomolybdate (P), O by difference.",
              "Kjeldahl's method fails for nitro, azo and ring nitrogen.",
            ],
          },
        ],
        flashcards: [
          { front: "Steam distillation is used for compounds that are …", back: "Steam volatile and immiscible with water, e.g. aniline. The mixture boils below 373 K." },
          { front: "Why distil glycerol under reduced pressure?", back: "It decomposes at its normal boiling point; lowering the pressure lowers the boiling point." },
          { front: "Rf value", back: "Distance moved by the substance ÷ distance moved by the solvent front, both from the base line." },
          { front: "Prussian blue formula", back: "Fe₄[Fe(CN)₆]₃·xH₂O, iron(III) hexacyanidoferrate(II): positive test for N." },
          { front: "Blood-red colour in Lassaigne's test means …", back: "Both N and S present (NaSCN forms and gives [Fe(SCN)]²⁺ with Fe³⁺)." },
          { front: "Absorbents in Liebig's method", back: "Anhydrous CaCl₂ absorbs H₂O; concentrated KOH absorbs CO₂." },
          { front: "Carius method estimates …", back: "Halogens (as AgX) and sulphur (as BaSO₄), after heating with fuming HNO₃ in a sealed tube." },
          { front: "Kjeldahl: what is measured?", back: "NH₃ from the compound neutralises part of a known volume of standard acid; the unused acid is back-titrated with standard alkali." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "On a TLC plate the solvent front moved 9.0 cm and a spot moved 3.6 cm from the base line. What is its Rf value?",
            answer: 0.4,
            tolerance: 0.01,
            explain: "Rf = 3.6/9.0 = 0.40.",
          },
          {
            kind: "mcq",
            q: "A mixture of two liquids with boiling points 353 K and 383 K is best separated by:",
            options: ["Fractional distillation", "Steam distillation", "Sublimation", "Crystallisation"],
            answer: 0,
            explain: "Both are volatile and their boiling points are fairly close, so a fractionating column is needed.",
          },
          {
            kind: "mcq",
            q: "In Lassaigne's test, a blood-red colour with FeCl₃ indicates the presence of:",
            options: ["Both N and S", "Only N", "Only S", "A halogen"],
            answer: 0,
            explain: "With enough N and S but less sodium, NaSCN forms; SCN⁻ gives blood-red [Fe(SCN)]²⁺ with Fe³⁺.",
          },
          {
            kind: "mcq",
            q: "Kjeldahl's method is NOT suitable for estimating nitrogen in:",
            options: ["Nitrobenzene", "Urea", "Acetamide", "Aniline"],
            answer: 0,
            explain: "Nitro nitrogen is not converted to ammonium sulphate on digestion with H₂SO₄.",
          },
          {
            kind: "numeric",
            q: "0.20 g of an organic compound gave 0.287 g of AgCl in the Carius method. Find the percentage of chlorine. (Ag = 108, Cl = 35.5)",
            answer: 35.5,
            tolerance: 0.1,
            unit: "%",
            explain: "Mass of Cl = (35.5/143.5) × 0.287 = 0.0710 g; %Cl = 0.0710/0.20 × 100 = 35.5%.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "0.16 g of an organic compound gave 0.233 g of BaSO₄. Find the percentage of sulphur. (Ba = 137, S = 32, O = 16)",
            answer: 20,
            tolerance: 0.1,
            unit: "%",
            explain: "BaSO₄ = 233 g mol⁻¹. Mass of S = (32/233) × 0.233 = 0.032 g; %S = 0.032/0.16 × 100 = 20%.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which substances can be purified by sublimation?",
            options: ["Camphor", "Naphthalene", "Benzoic acid", "Common salt", "Glycerol"],
            answers: [0, 1, 2],
            explain: "Camphor, naphthalene and benzoic acid sublime on heating. NaCl and glycerol do not.",
          },
          {
            kind: "truefalse",
            q: "In paper chromatography the stationary phase is the water held in the paper.",
            answer: true,
            explain: "Paper chromatography is partition chromatography: water trapped in cellulose fibres is stationary and the solvent is mobile.",
          },
        ],
      },

      /* ---------------- Exam edge 1 ---------------- */
      {
        slug: "c11-che-goc-exam-orders",
        title: "Exam edge: Stability, Acidity and Basicity Orders",
        summary: "The one rule behind every GOC order question, the factors ranked, reference pKa values, and worked orders from KCET and NEET level to JEE Advanced acid–base equilibria.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "GOC is the foundation of all organic chemistry in **JEE Main, JEE Advanced, NEET, KCET and COMEDK**. Questions that ask you to 'arrange in increasing acidity / basicity / stability' appear in almost every paper, and later chapters (haloalkanes, alcohols, carbonyls, amines) reuse the same reasoning. JEE Advanced mixes several effects in one molecule and asks which one wins. Speed here pays back across the whole of Class 12 organic chemistry.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "The master rules",
            md: "**Acid strength** rises with the stability of the **conjugate base** (anion): anything that spreads or holds the negative charge (–I, –R, more s-character, aromaticity, charge on a more electronegative atom) makes the acid stronger. **Base strength** rises with the **availability of the lone pair**: +I groups raise it; delocalisation (–R, aromatic sextet) and more s-character lower it. **Cation stability** rises with electron donation (+I, hyperconjugation, +R); **anion stability** rises with electron withdrawal.",
          },
          {
            type: "table",
            headers: ["Factor", "Effect on stability of the ion that forms", "Typical use"],
            rows: [
              ["Resonance (R)", "usually the strongest effect when it can operate", "phenoxide, carboxylate, benzyl/allyl ions"],
              ["Hyperconjugation", "more α-H → more stable cation, radical, alkene", "3° > 2° > 1° carbocations; substituted alkenes"],
              ["Inductive (I)", "falls off with distance; adds up with number of groups", "haloacetic acids"],
              ["Hybridisation", "s-character sp > sp² > sp³ holds a lone pair tighter", "acidity HC≡CH > CH₂=CH₂ > CH₃CH₃; basicity sp³ N > sp² N > sp N"],
              ["Intramolecular H-bond", "locks the H, makes it harder to remove", "o-nitrophenol less acidic than p-nitrophenol"],
              ["Solvation (water)", "small, H-bonded ions are stabilised", "basicity of 2° > 1° > 3° methylamines in water"],
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{p}K_a = -\log K_a \qquad \text{lower } \mathrm{p}K_a = \text{stronger acid}; \qquad \mathrm{p}K_a + \mathrm{p}K_b = 14 \ \text{(conjugate pair, 298 K)}`,
            caption: "An acid–base reaction goes forward when it forms the weaker acid (higher pKa).",
          },
          {
            type: "table",
            headers: ["Compound", "Approx. pKa", "Compound", "Approx. pKa"],
            rows: [
              ["CCl₃COOH", "0.65", "Phenol", "10.0"],
              ["CHCl₂COOH", "1.3", "Water", "15.7"],
              ["FCH₂COOH", "2.6", "Ethanol", "≈ 16"],
              ["ClCH₂COOH", "2.9", "Ethyne", "≈ 25"],
              ["HCOOH", "3.75", "Ammonia", "≈ 38"],
              ["CH₃COOH", "4.76", "Ethene / ethane", "≈ 44 / ≈ 50"],
            ],
          },
          {
            type: "example",
            title: "KCET level: haloacetic acids",
            problem: "Arrange in decreasing acid strength: CH₃COOH, ClCH₂COOH, Cl₂CHCOOH, FCH₂COOH.",
            steps: [
              "All are carboxylic acids; only the –I groups on the α-carbon differ.",
              "Two Cl atoms together withdraw more than one F, so Cl₂CHCOOH is strongest.",
              "One F (most electronegative) beats one Cl; CH₃ has no –I group and is weakest.",
            ],
            answer: "Cl₂CHCOOH > FCH₂COOH > ClCH₂COOH > CH₃COOH (pKa 1.3, 2.6, 2.9, 4.76).",
          },
          {
            type: "example",
            title: "NEET / JEE Main level: substituted phenols",
            problem: "Arrange in decreasing acidity: phenol, p-nitrophenol, m-nitrophenol, p-cresol (p-methylphenol).",
            steps: [
              "p-NO₂ withdraws by both –R and –I and the negative charge of the phenoxide reaches the NO₂ oxygen: strongest.",
              "m-NO₂ cannot conjugate with the O⁻ (resonance puts charge only on o/p carbons), so only –I acts: weaker than para, stronger than phenol.",
              "–CH₃ is +I and hyperconjugative: it destabilises the phenoxide, so p-cresol is weaker than phenol.",
            ],
            answer: "p-Nitrophenol > m-nitrophenol > phenol > p-cresol (pKa ≈ 7.1, 8.4, 10.0, 10.3).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is the most acidic hydrocarbon?",
                options: ["HC≡CH", "CH₂=CH₂", "CH₃CH₃", "CH₄"],
                answer: 0,
                explain: "The ethynide ion has its lone pair in an sp orbital (50% s-character), held closest to the nucleus.",
              },
            ],
          },
          {
            type: "example",
            title: "NEET level: basicity of nitrogen compounds",
            problem: "Arrange in decreasing basicity: aniline, ethylamine, ammonia, acetamide.",
            steps: [
              "Ethylamine: +I of ethyl pushes electron density onto N → more basic than NH₃.",
              "Aniline: the N lone pair is delocalised into the benzene ring (+R of –NH₂) → less available than in NH₃.",
              "Acetamide: the lone pair is delocalised onto the C=O oxygen (amide resonance) → almost neutral.",
            ],
            answer: "C₂H₅NH₂ > NH₃ > C₆H₅NH₂ > CH₃CONH₂",
          },
          {
            type: "example",
            title: "JEE Main level: substituted benzyl carbocations",
            problem: "Arrange in decreasing stability the p-substituted benzyl cations p-X–C₆H₄–CH₂⁺ with X = OCH₃, CH₃, H, Cl, NO₂.",
            steps: [
              "The positive charge is delocalised onto the ortho and para ring carbons, so a para group interacts directly with it.",
              "–OCH₃ donates strongly by +R → most stable. –CH₃ donates by hyperconjugation and +I → next.",
              "–Cl: –I outweighs its weak +R → slightly less stable than X = H. –NO₂ withdraws by –R and –I → least stable.",
            ],
            answer: "OCH₃ > CH₃ > H > Cl > NO₂",
          },
          {
            type: "mistake",
            wrong: "o-Nitrophenol is the most acidic nitrophenol because the NO₂ group is closest to the –OH.",
            right: "p-Nitrophenol is (slightly) more acidic than o-nitrophenol. In the ortho isomer an intramolecular hydrogen bond between O–H and the nitro oxygen holds the proton, so it is harder to lose.",
            why: "'Closer means stronger' is true for the inductive effect alone, but here the –R effect is similar at o and p, and chelation tips the balance.",
          },
          {
            type: "mistake",
            wrong: "–OCH₃ is attached through electronegative oxygen, so p-methoxyphenol is more acidic than phenol.",
            right: "At the para position the +R effect of –OCH₃ dominates its –I effect, so p-methoxyphenol is slightly less acidic than phenol. At the meta position only –I acts, so m-methoxyphenol is more acidic than phenol.",
            why: "Always ask whether the group can conjugate with the reacting centre (o/p) or only pull through σ bonds (m).",
          },
          {
            type: "example",
            title: "JEE Advanced level: will the reaction go?",
            problem: "Predict which reactions proceed appreciably to the right: (i) HC≡CH + NaOH; (ii) HC≡CH + NaNH₂; (iii) CH₃COOH + NaHCO₃; (iv) C₆H₅OH + NaHCO₃. (pKa: H₂O 15.7, NH₃ ≈ 38, H₂CO₃ 6.4, ethyne ≈ 25, acetic acid 4.76, phenol 10.0)",
            steps: [
              "Rule: the equilibrium lies on the side of the weaker acid (higher pKa).",
              "(i) HC≡CH (25) + OH⁻ → HC≡C⁻ + H₂O (15.7): product acid is stronger → does not go.",
              "(ii) HC≡CH (25) + NH₂⁻ → HC≡C⁻ + NH₃ (38): product acid weaker → goes; this is how sodium acetylide is made.",
              "(iii) CH₃COOH (4.76) + HCO₃⁻ → CH₃COO⁻ + H₂CO₃ (6.4, gives CO₂ + H₂O) → goes (brisk effervescence).",
              "(iv) Phenol (10.0) is weaker than H₂CO₃ (6.4) → does not go; this distinguishes phenols from carboxylic acids.",
            ],
            answer: "(ii) and (iii) go; (i) and (iv) do not.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order from the strongest acid to the weakest.",
              items: ["CH₃COOH", "C₆H₅OH", "H₂O", "C₂H₅OH", "HC≡CH", "NH₃"],
              explain: "pKa rises 4.76 → 10 → 15.7 → ≈16 → ≈25 → ≈38. Resonance-stabilised anions come first; sp-carbon acidity beats N–H of ammonia.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Acidity follows the stability of the conjugate base; basicity follows lone-pair availability.",
              "Resonance usually beats inductive effect; check whether a group can conjugate (o/p) or only act by –I (m).",
              "Carbocations and radicals: 3° > 2° > 1° > CH₃ (more α-H); carbanions: reverse order, and sp > sp² > sp³ carbanion stability.",
              "Methylamines in water: 2° > 1° > 3° > NH₃; ethylamines: 2° > 3° > 1° > NH₃; aniline and amides are weaker bases than NH₃.",
              "Reactions go towards the weaker acid: phenol does not react with NaHCO₃, carboxylic acids do; NaNH₂ (not NaOH) deprotonates ethyne.",
            ],
          },
        ],
        flashcards: [
          { front: "Acidity of acids vs pKa", back: "Lower pKa = stronger acid. Each unit of pKa is a factor of 10 in Ka." },
          { front: "Why is HCOOH stronger than CH₃COOH?", back: "The +I effect of CH₃ destabilises acetate; formate has no such group (pKa 3.75 vs 4.76)." },
          { front: "Basicity of methylamines in water", back: "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (inductive effect + solvation + steric hindrance)." },
          { front: "Basicity of ethylamines in water", back: "(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃" },
          { front: "Why is aniline a weaker base than NH₃?", back: "Its N lone pair is delocalised into the benzene ring, so it is less available for H⁺." },
          { front: "Carbanion stability by hybridisation", back: "HC≡C⁻ > CH₂=CH⁻ > CH₃CH₂⁻ (more s-character holds the charge closer)." },
          { front: "Does phenol give CO₂ with NaHCO₃?", back: "No. Phenol (pKa 10) is weaker than H₂CO₃ (pKa 6.4). Carboxylic acids and picric acid do." },
          { front: "Free radical stability", back: "Triphenylmethyl > benzyl ≈ allyl > 3° > 2° > 1° > CH₃•" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The correct order of basicity of methylamines in aqueous solution is:",
            options: [
              "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃",
              "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃",
              "CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃",
              "NH₃ > CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N",
            ],
            answer: 0,
            explain: "In water, solvation of the protonated amine and steric crowding reduce the basicity of the 3° amine, so 2° > 1° > 3° > NH₃. The +I-only order (option 2) holds in the gas phase.",
            difficulty: 2,
            hint: "Water solvates R₂NH₂⁺ better than R₃NH⁺.",
          },
          {
            kind: "mcq",
            q: "Which carbanion is the most stable?",
            options: ["HC≡C⁻", "CH₂=CH⁻", "CH₃CH₂⁻", "(CH₃)₃C⁻"],
            answer: 0,
            explain: "The lone pair of HC≡C⁻ sits in an sp orbital (50% s-character). Alkyl groups (+I) destabilise carbanions, so (CH₃)₃C⁻ is the least stable.",
          },
          {
            kind: "multi",
            q: "Which compounds liberate CO₂ from aqueous NaHCO₃?",
            options: ["Acetic acid", "Benzoic acid", "Picric acid (2,4,6-trinitrophenol)", "Phenol", "Ethanol"],
            answers: [0, 1, 2],
            explain: "Any acid stronger than H₂CO₃ (pKa 6.4) reacts. Picric acid (pKa ≈ 0.4) is very strong because of three –NO₂ groups; phenol (10) and ethanol (≈16) are too weak.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many α-hydrogens are available for hyperconjugation in the carbocation (CH₃)₂C⁺–CH₂CH₃?",
            answer: 8,
            explain: "Carbons attached to C⁺: two CH₃ (3 + 3 H) and one CH₂ of the ethyl group (2 H): 3 + 3 + 2 = 8. The terminal CH₃ of ethyl is not α.",
            difficulty: 2,
            hint: "Count H only on carbons directly bonded to the positive carbon.",
          },
          {
            kind: "mcq",
            q: "Among these C₆H₁₂ isomers, which has the smallest heat of hydrogenation?",
            options: ["2,3-Dimethylbut-2-ene", "trans-Hex-2-ene", "cis-Hex-2-ene", "Hex-1-ene"],
            answer: 0,
            explain: "The tetrasubstituted alkene has 12 α-H (most hyperconjugation), so it is the most stable and releases the least heat when hydrogenated to an alkane.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which is the strongest acid?",
            options: ["HCOOH", "CH₃COOH", "CH₃CH₂COOH", "(CH₃)₂CHCOOH"],
            answer: 0,
            explain: "Alkyl groups are +I and destabilise the carboxylate; formic acid has none.",
          },
          {
            kind: "mcq",
            q: "The correct order of basicity is:",
            options: [
              "Piperidine > pyridine > pyrrole",
              "Pyridine > piperidine > pyrrole",
              "Pyrrole > pyridine > piperidine",
              "Pyridine > pyrrole > piperidine",
            ],
            answer: 0,
            explain: "Piperidine has an sp³ N lone pair (most available). Pyridine's lone pair is in an sp² orbital (more s-character, held tighter) but not part of the aromatic sextet. Pyrrole's lone pair is part of the aromatic sextet, so it is hardly basic.",
            difficulty: 3,
            hint: "Ask: what hybrid orbital holds the lone pair, and is it needed for aromaticity?",
          },
          {
            kind: "mcq",
            q: "Which free radical is the most stable?",
            options: ["(C₆H₅)₃C•", "(CH₃)₃C•", "CH₃CH₂•", "CH₃•"],
            answer: 0,
            explain: "The unpaired electron of triphenylmethyl is delocalised over three benzene rings by resonance, which outweighs hyperconjugation in tert-butyl.",
          },
          {
            kind: "mcq",
            q: "Which is more acidic, and why: m-methoxyphenol or p-methoxyphenol?",
            options: [
              "m-Methoxyphenol: only the –I effect of OCH₃ acts at meta",
              "p-Methoxyphenol: the –I effect is strongest at para",
              "Both are equal because the substituent is the same",
              "p-Methoxyphenol: +R stabilises the phenoxide",
            ],
            answer: 0,
            explain: "At para, +R of –OCH₃ pushes electrons towards O⁻ and destabilises the phenoxide. At meta, resonance cannot reach the O⁻ carbon, so the –I effect makes the acid stronger.",
            difficulty: 3,
            hint: "+R destabilises an anion; can it reach from the meta position?",
          },
        ],
      },

      /* ---------------- Exam edge 2 ---------------- */
      {
        slug: "c11-che-goc-exam-isomers-analysis",
        title: "Exam edge: Degree of Unsaturation, Isomer Counting and Analysis Numericals",
        summary: "The degree-of-unsaturation shortcut, isomer counts worth remembering, naming traps, and Dumas, Kjeldahl and Carius numericals up to a full JEE Advanced molecular-formula problem.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Besides orders, GOC gives exams three quick question types: **IUPAC names** (JEE Main, KCET, COMEDK almost every year), **number of isomers** (JEE Main numerical-value questions, NEET MCQs) and **quantitative analysis numericals** (Dumas, Kjeldahl, Carius: KCET, JEE Main). JEE Advanced combines analysis data with molar mass to fix a molecular formula and then asks for the structure.",
          },
          {
            type: "formula",
            tex: t`\text{DU} = C - \frac{H}{2} - \frac{X}{2} + \frac{N}{2} + 1`,
            caption: "Degree of unsaturation (double bond equivalents): C, H, X (halogen), N = number of each atom. Oxygen and sulphur are ignored. Each ring or double bond = 1; each triple bond = 2; a benzene ring = 4.",
          },
          {
            type: "example",
            title: "KCET level: what can C₇H₈ be?",
            problem: "Find the degree of unsaturation of C₇H₈ and suggest a structure.",
            steps: [
              "DU = 7 − 8/2 + 1 = 4.",
              "DU = 4 with only 7 carbons strongly suggests a benzene ring (3 C=C + 1 ring) with one extra carbon.",
              "C₆H₅–CH₃ fits: C₇H₈.",
            ],
            answer: "DU = 4; methylbenzene (toluene).",
          },
          {
            type: "table",
            headers: ["Formula", "Structural isomers", "Note"],
            rows: [
              ["C₄H₁₀ / C₅H₁₂ / C₆H₁₄ / C₇H₁₆", "2 / 3 / 5 / 9", "chain isomers of alkanes"],
              ["C₄H₉– (butyl groups)", "4", "n-, sec-, iso-, tert-butyl; so C₄H₉Cl has 4 isomers"],
              ["C₃H₈O", "3", "2 alcohols + 1 ether"],
              ["C₄H₁₀O", "7", "4 alcohols + 3 ethers"],
              ["C₄H₈ (open chain, counting cis/trans)", "4", "but-1-ene, cis- and trans-but-2-ene, 2-methylpropene; +2 rings = 6"],
              ["C₃H₆Cl₂", "4", "1,1-; 1,2-; 1,3-; 2,2-dichloropropane"],
              ["C₈H₁₀ (aromatic)", "4", "ethylbenzene and o-, m-, p-xylene"],
            ],
          },
          {
            type: "example",
            title: "NEET level: the seven isomers of C₄H₁₀O",
            problem: "List the structural isomers of C₄H₁₀O and identify the types of isomerism among them.",
            steps: [
              "DU = 4 − 5 + 1 = 0: no ring, no double bond, so alcohols or ethers.",
              "Alcohols (one for each butyl group): butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol.",
              "Ethers: 1-methoxypropane, 2-methoxypropane, ethoxyethane.",
              "Alcohol vs ether = functional isomers; butan-1-ol vs butan-2-ol = position; butan-1-ol vs 2-methylpropan-1-ol = chain; ethoxyethane vs methoxypropane = metamers.",
            ],
            answer: "7 structural isomers (4 alcohols + 3 ethers).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The IUPAC name of CH₃–CH(C₂H₅)–CH₂–CH₃ is:",
                options: ["3-Methylpentane", "2-Ethylbutane", "Hexane", "3-Ethylbutane"],
                answer: 0,
                explain: "The longest chain runs through the ethyl group: 5 carbons with a methyl on C3. An ethyl on C2 would always mean a longer chain was missed.",
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: Dumas method",
            problem: "0.25 g of an organic compound gave 40 mL of moist N₂ at 300 K and 725 mm Hg. Aqueous tension at 300 K is 25 mm Hg. Find %N. (Take 22400 mL as the molar volume at STP, 273 K and 760 mm.)",
            steps: [
              "Pressure of dry N₂ = 725 − 25 = 700 mm.",
              t`Volume at STP: $V_0 = \frac{700 \times 40 \times 273}{760 \times 300} = 33.53$ mL.`,
              t`Mass of N₂ $= \frac{28 \times 33.53}{22400} = 0.0419$ g.`,
              "%N = 0.0419/0.25 × 100 = 16.76%.",
            ],
            answer: "%N ≈ 16.8%",
          },
          {
            type: "example",
            title: "JEE Main level: Kjeldahl with back titration",
            problem: "The NH₃ from 0.40 g of an organic compound was passed into 25 mL of 0.5 M H₂SO₄. The unused acid needed 30 mL of 0.5 M NaOH. Find %N.",
            steps: [
              "H₂SO₄ taken = 25 × 0.5 = 12.5 mmol.",
              "NaOH used = 30 × 0.5 = 15 mmol, which neutralises 15/2 = 7.5 mmol H₂SO₄ (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O).",
              "H₂SO₄ used by NH₃ = 12.5 − 7.5 = 5 mmol → NH₃ = 2 × 5 = 10 mmol (2NH₃ + H₂SO₄ → (NH₄)₂SO₄).",
              "Mass of N = 10 × 14 = 140 mg = 0.14 g → %N = 0.14/0.40 × 100 = 35%.",
            ],
            answer: "%N = 35%",
          },
          {
            type: "mistake",
            wrong: "In Kjeldahl's method, millimoles of NH₃ = millimoles of H₂SO₄ used.",
            right: "One H₂SO₄ neutralises two NH₃, so mmol NH₃ = 2 × mmol H₂SO₄ used (with HCl it is 1 : 1). Likewise, two NaOH neutralise one H₂SO₄ in the back titration.",
            why: "Learners copy the ratio from HCl problems. Writing the two balanced equations first prevents the factor-of-2 error, which is exactly what the wrong options are built on.",
          },
          {
            type: "mistake",
            wrong: "In a Dumas problem, use the barometric pressure directly in the gas equation.",
            right: "N₂ is collected over water (or KOH solution), so subtract the aqueous tension: p(N₂) = p(observed) − aqueous tension, then convert to STP.",
            why: "The question gives the aqueous tension for a reason; skipping it changes the answer by a few percent, enough to match a wrong option.",
          },
          {
            type: "example",
            title: "JEE Advanced level: analysis to molecular formula",
            problem: "0.218 g of a compound containing C, H and Br gave 0.176 g CO₂ and 0.090 g H₂O. In a Carius estimation, 0.218 g gave 0.376 g AgBr. Its vapour density is 54.5. Find the molecular formula. (C 12, H 1, Br 80, Ag 108)",
            steps: [
              "C = (12/44) × 0.176 = 0.048 g; H = (2/18) × 0.090 = 0.010 g; Br = (80/188) × 0.376 = 0.160 g. Total 0.218 g, so there is no oxygen.",
              "Moles: C 0.048/12 = 0.004; H 0.010/1 = 0.010; Br 0.160/80 = 0.002. Ratio 2 : 5 : 1 → empirical formula C₂H₅Br (109 g mol⁻¹).",
              "Molar mass = 2 × vapour density = 109 g mol⁻¹, so n = 109/109 = 1.",
            ],
            answer: "C₂H₅Br (bromoethane). Percentages: C 22.0%, H 4.6%, Br 73.4%.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each isomer pair by type of isomerism.",
              groups: ["Chain", "Position", "Functional group"],
              items: [
                { text: "Butane / 2-methylpropane", group: 0, hint: "The skeleton is straight in one, branched in the other." },
                { text: "Pentane / 2,2-dimethylpropane", group: 0, hint: "Same family, different skeleton." },
                { text: "Propan-1-ol / propan-2-ol", group: 1, hint: "Same skeleton; only the –OH moves." },
                { text: "But-1-ene / but-2-ene", group: 1, hint: "The double bond changes place." },
                { text: "Ethanol / methoxymethane", group: 2, hint: "Alcohol vs ether." },
                { text: "Propanal / propanone", group: 2, hint: "Aldehyde vs ketone." },
              ],
              explain: "Ask in turn: is the skeleton different (chain)? Is the same group in a different place (position)? Is the group itself different (functional)?",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Speed tips",
            md: "Count isomers systematically: longest chain first, then shorten by one and place branches, and check for duplicates by renumbering from the other end. For analysis numericals, keep three factors ready: C = 12/44 of CO₂, H = 2/18 of H₂O, N (Kjeldahl) = 1.4 × mmol NH₃ / mass in g.",
          },
          {
            type: "keypoints",
            items: [
              "DU = C − H/2 − X/2 + N/2 + 1; ignore O and S; benzene ring = 4.",
              "Remember: C₅H₁₂ 3, C₆H₁₄ 5, C₇H₁₆ 9, C₄H₉X 4, C₄H₁₀O 7, aromatic C₈H₁₀ 4.",
              "Dumas: subtract aqueous tension and convert to STP; %N = 28V₀ / (22400 m) × 100.",
              "Kjeldahl: mmol NH₃ = 2 × mmol H₂SO₄ consumed; %N = 1.4 × mmol NH₃ / m.",
              "Molecular formula = (empirical formula) × n, where n = molar mass (2 × vapour density) ÷ empirical formula mass.",
            ],
          },
        ],
        flashcards: [
          { front: "Degree of unsaturation formula", back: "DU = C − H/2 − X/2 + N/2 + 1 (O and S ignored)." },
          { front: "DU of benzene", back: "4 (three C=C + one ring)." },
          { front: "Number of isomers of C₇H₁₆", back: "9" },
          { front: "Structural isomers of C₄H₁₀O", back: "7: four alcohols and three ethers." },
          { front: "Aromatic isomers of C₈H₁₀", back: "4: ethylbenzene, o-, m- and p-xylene." },
          { front: "Kjeldahl shortcut", back: "%N = 1.4 × (millimoles of NH₃) ÷ (mass of compound in g)." },
          { front: "Molar mass from vapour density", back: "M = 2 × VD." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What is the degree of unsaturation of nitrobenzene, C₆H₅NO₂?",
            answer: 5,
            explain: "DU = 6 − 5/2 + 1/2 + 1 = 5: four for the benzene ring and one for N=O.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many structural isomers are possible for C₄H₉Cl?",
            answer: 4,
            explain: "1-Chlorobutane, 2-chlorobutane, 1-chloro-2-methylpropane and 2-chloro-2-methylpropane (one per butyl group).",
          },
          {
            kind: "numeric",
            q: "How many aromatic isomers have the formula C₈H₁₀?",
            answer: 4,
            explain: "Ethylbenzene and the three xylenes (1,2-, 1,3- and 1,4-dimethylbenzene).",
          },
          {
            kind: "numeric",
            q: "0.30 g of a compound gave 50 mL of N₂ (already corrected to STP) in a Dumas estimation. Find %N. (Molar volume 22400 mL)",
            answer: 20.83,
            tolerance: 0.05,
            unit: "%",
            explain: "Mass of N₂ = 28 × 50/22400 = 0.0625 g. %N = 0.0625/0.30 × 100 = 20.83%.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "The NH₃ evolved from 0.25 g of a compound exactly neutralised 15 mL of 0.1 M H₂SO₄. Find %N.",
            answer: 16.8,
            tolerance: 0.05,
            unit: "%",
            explain: "H₂SO₄ = 1.5 mmol → NH₃ = 3.0 mmol → N = 42 mg. %N = 0.042/0.25 × 100 = 16.8%.",
            difficulty: 2,
            hint: "2NH₃ + H₂SO₄ → (NH₄)₂SO₄",
          },
          {
            kind: "mcq",
            q: "The IUPAC name of CH₃CH₂CH(CH₃)CN is:",
            options: ["2-Methylbutanenitrile", "2-Methylpropanenitrile", "3-Methylbutanenitrile", "1-Cyano-1-methylpropane"],
            answer: 0,
            explain: "The nitrile carbon is C1 of the chain: C1 (CN), C2 (CH with CH₃), C3, C4 → four carbons → butanenitrile with a methyl on C2.",
            difficulty: 2,
            hint: "In nitriles, the carbon of –C≡N is counted in the main chain.",
          },
          {
            kind: "mcq",
            q: "How many structural isomers does C₃H₈O have?",
            options: ["3", "2", "4", "5"],
            answer: 0,
            explain: "Propan-1-ol, propan-2-ol and methoxyethane.",
          },
          {
            kind: "mcq",
            q: "A compound has the empirical formula CH₂O and vapour density 30. Its molecular formula is:",
            options: ["C₂H₄O₂", "CH₂O", "C₃H₆O₃", "C₂H₂O"],
            answer: 0,
            explain: "M = 2 × 30 = 60; empirical formula mass = 30; n = 2 → C₂H₄O₂ (e.g. acetic acid).",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Hydrocarbons (NCERT Class 11; same title in ISC)                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-che-hydrocarbons",
    title: "Hydrocarbons",
    icon: "⛽",
    description: "Classification of hydrocarbons; alkanes, their preparation, reactions and conformations; alkenes and alkynes with Markovnikov and anti-Markovnikov addition and ozonolysis; benzene, aromaticity, electrophilic substitution and directive influence.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-che-hc-alkanes",
        title: "Classification, Alkanes and Conformations",
        summary: "Types of hydrocarbons; alkanes from alkenes, alkyl halides and carboxylic acids (Wurtz, decarboxylation, Kolbe); physical properties; free-radical halogenation and other reactions; and the staggered and eclipsed conformations of ethane.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🔥",
            caption: "The LPG in a kitchen cylinder is mainly butane and propane; the CNG that runs autos and buses in Delhi is mainly methane. Both are alkanes, compounds of only carbon and hydrogen.",
          },
          {
            type: "text",
            md: "**Hydrocarbons** contain only carbon and hydrogen. Their main sources are petroleum, natural gas and coal. They are classified as **saturated** (only C–C single bonds: **alkanes**, open chain, and cycloalkanes), **unsaturated** (C=C in **alkenes**, C≡C in **alkynes**) and **aromatic** (benzene and its relatives).\n\n**Alkanes** have the general formula CₙH₂ₙ₊₂ and were once called **paraffins** (little affinity, i.e. not very reactive). Every carbon is sp³ hybridised and tetrahedral; C–C is 154 pm and C–H is 112 pm.",
          },
          {
            type: "table",
            headers: ["Preparation", "Equation", "Note"],
            rows: [
              ["Hydrogenation of alkenes/alkynes", "CH₂=CH₂ + H₂ → CH₃–CH₃ (Pt, Pd or Ni)", "Pt, Pd work at room temperature; Ni needs higher temperature and pressure"],
              ["Reduction of alkyl halides", "CH₃Cl + H₂ → CH₄ + HCl (Zn, dil. HCl)", "same number of carbons"],
              ["Wurtz reaction", "2CH₃Br + 2Na → CH₃–CH₃ + 2NaBr (dry ether)", "doubles the carbon chain; gives alkanes with an even number of C from one halide"],
              ["Decarboxylation", "CH₃COONa + NaOH → CH₄ + Na₂CO₃ (CaO, heat)", "soda lime; one carbon less than the acid"],
              ["Kolbe's electrolysis", "2CH₃COONa + 2H₂O → CH₃–CH₃ + 2CO₂ + H₂ + 2NaOH", "alkane forms at the anode; even number of C"],
            ],
          },
          {
            type: "example",
            title: "Choosing a method",
            problem: "(a) Which acid salt gives ethane on heating with soda lime? (b) Why can methane not be made by the Wurtz reaction or Kolbe's electrolysis?",
            steps: [
              "Decarboxylation removes one carbon as Na₂CO₃. Ethane has 2 C, so the salt must have 3 C: sodium propanoate, CH₃CH₂COONa + NaOH → CH₃CH₃ + Na₂CO₃.",
              "Wurtz joins two alkyl groups: the smallest product (from CH₃X) is CH₃–CH₃.",
              "Kolbe's electrolysis also joins two alkyl radicals from two carboxylate ions: the smallest product (from acetate) is ethane.",
            ],
            answer: "(a) Sodium propanoate. (b) Both methods make a new C–C bond between two alkyl groups, so the product has at least two carbons.",
          },
          {
            type: "text",
            md: "**Physical properties.** Alkanes are non-polar, held by weak van der Waals forces. C₁–C₄ are gases, C₅–C₁₇ liquids, and higher ones waxy solids at 298 K. They are insoluble in water but dissolve in non-polar solvents ('like dissolves like'). Boiling point rises with molar mass; **branching lowers it** because the molecule becomes more spherical with less surface contact: pentane 309 K, 2-methylbutane 301 K, 2,2-dimethylpropane 282.5 K.",
          },
          {
            type: "text",
            md: "**Chemical properties.** **Halogenation** occurs in light or on heating: CH₄ + Cl₂ → CH₃Cl + HCl, and further to CH₂Cl₂, CHCl₃ and CCl₄. Reactivity: F₂ > Cl₂ > Br₂ > I₂ (fluorination is violent; iodination is reversible and needs an oxidising agent such as HIO₃ to remove HI). Hydrogens are replaced in the order 3° > 2° > 1°.\n\n**Combustion:** CH₄ + 2O₂ → CO₂ + 2H₂O, with much heat; incomplete combustion gives carbon black. **Controlled oxidation:** 2CH₄ + O₂ → 2CH₃OH (Cu, 523 K, 100 atm); CH₄ + O₂ → HCHO + H₂O (Mo₂O₃); (CH₃)₃CH → (CH₃)₃COH (KMnO₄). **Isomerisation:** n-hexane → 2- and 3-methylpentane (anhydrous AlCl₃, HCl). **Aromatisation:** n-hexane → benzene + 4H₂ (Cr₂O₃, V₂O₅ or Mo₂O₃ on alumina, 773 K, 10–20 atm). **Reaction with steam:** CH₄ + H₂O → CO + 3H₂ (Ni, 1273 K). **Pyrolysis (cracking):** heating higher alkanes strongly (about 773–973 K; NCERT's example, dodecane, at 973 K over Pt/Pd/Ni) breaks them into smaller alkanes, alkenes and H₂.",
          },
          {
            type: "formula",
            tex: t`\mathrm{C_nH_{2n+2} + \frac{3n+1}{2}\,O_2 \longrightarrow n\,CO_2 + (n+1)\,H_2O}`,
            caption: "General equation for complete combustion of an alkane; e.g. butane (n = 4) needs 6.5 mol O₂ per mol.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Initiation:** light breaks the weaker Cl–Cl bond homolytically: Cl₂ → 2Cl•.",
              "**Propagation (i):** Cl• takes an H from methane: CH₄ + Cl• → •CH₃ + HCl.",
              "**Propagation (ii):** the methyl radical attacks Cl₂: •CH₃ + Cl₂ → CH₃Cl + Cl•. The new Cl• repeats step (i), so a chain runs.",
              "**Termination:** radicals combine: Cl• + Cl• → Cl₂; •CH₃ + •CH₃ → CH₃–CH₃; •CH₃ + Cl• → CH₃Cl. (Ethane formed here explains traces of ethane and chloroethane in the product.)",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many different monochloro products (structural isomers) are formed when propane is chlorinated?",
                answer: 2,
                explain: "Propane has two kinds of H: six on the CH₃ groups (→ 1-chloropropane) and two on the CH₂ (→ 2-chloropropane).",
              },
            ],
          },
          {
            type: "text",
            md: "**Conformations.** Rotation about a C–C single bond gives different spatial arrangements called **conformations**. In ethane the two extremes are **staggered** (the H atoms on the two carbons are as far apart as possible, dihedral angle 60°) and **eclipsed** (H atoms directly behind each other, dihedral angle 0°); the many in between are **skew** conformations. They are drawn as **Sawhorse projections** (C–C bond drawn slanting and elongated) or **Newman projections** (looking down the C–C bond: front carbon a point, back carbon a circle).\n\nThe repulsion between bond electron clouds in the eclipsed form is **torsional strain**. The staggered form is the most stable; the energy difference is only about **12.5 kJ mol⁻¹**, so rotation is almost free at room temperature and the conformations cannot be separated.",
          },
          {
            type: "mistake",
            wrong: "Staggered and eclipsed ethane are two different isomers that can be separated and bottled.",
            right: "They are conformations of the same molecule. The rotation barrier (about 12.5 kJ mol⁻¹) is so small that they interconvert millions of times a second at room temperature.",
            why: "Drawn side by side they look like different structures. Isomers need a bond to break (or a high barrier) to convert; conformations need only rotation about a σ bond.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of free-radical chlorination of methane in order.",
              items: [
                "Cl₂ → 2Cl• in light",
                "CH₄ + Cl• → •CH₃ + HCl",
                "•CH₃ + Cl₂ → CH₃Cl + Cl•",
                "•CH₃ + Cl• → CH₃Cl (chain ends)",
              ],
              explain: "Initiation makes radicals, two propagation steps form the product and regenerate Cl•, and termination removes radicals.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Mechanism of halogenation (3 steps), Wurtz, Kolbe and decarboxylation equations, and Newman/Sawhorse drawings of ethane are frequent 2–3 mark questions. Label the dihedral angle in your drawings and state which conformation is more stable and why (torsional strain).",
          },
          {
            type: "keypoints",
            items: [
              "Alkanes CₙH₂ₙ₊₂: sp³ carbons, C–C 154 pm; made by hydrogenation, reduction of RX, Wurtz, decarboxylation (one C less) and Kolbe's electrolysis.",
              "Boiling point rises with size and falls with branching.",
              "Halogenation is a free-radical chain reaction: initiation, propagation, termination; F₂ > Cl₂ > Br₂ > I₂; 3° H > 2° H > 1° H.",
              "Other reactions: combustion, controlled oxidation, isomerisation, aromatisation, steam reforming, pyrolysis.",
              "Ethane conformations: staggered (most stable) and eclipsed, differing by about 12.5 kJ mol⁻¹ of torsional strain; drawn as Sawhorse and Newman projections.",
            ],
          },
        ],
        flashcards: [
          { front: "Wurtz reaction", back: "2RX + 2Na → R–R + 2NaX in dry ether; makes higher alkanes with double the carbon number." },
          { front: "Soda lime decarboxylation of CH₃COONa", back: "CH₃COONa + NaOH → CH₄ + Na₂CO₃ (with CaO, heat): one carbon fewer." },
          { front: "Kolbe's electrolysis of sodium acetate gives …", back: "Ethane at the anode (with CO₂), and H₂ and NaOH at the cathode side." },
          { front: "Effect of branching on boiling point", back: "Lowers it (less surface area): pentane 309 K > 2-methylbutane 301 K > 2,2-dimethylpropane 282.5 K." },
          { front: "Why is iodination of methane done with HIO₃?", back: "The reaction is reversible; HIO₃ oxidises the HI formed so the reaction goes forward." },
          { front: "Aromatisation of n-hexane", back: "C₆H₁₄ → C₆H₆ + 4H₂ over Cr₂O₃/V₂O₅/Mo₂O₃ on alumina at 773 K, 10–20 atm." },
          { front: "Torsional strain", back: "Repulsion between electron clouds of bonds on adjacent carbons, greatest in the eclipsed conformation." },
          { front: "Energy difference between staggered and eclipsed ethane", back: "About 12.5 kJ mol⁻¹." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Sodium butanoate is heated with soda lime. The alkane formed is:",
            options: ["Propane", "Butane", "Ethane", "Pentane"],
            answer: 0,
            explain: "Decarboxylation removes the –COONa carbon: CH₃CH₂CH₂COONa + NaOH → CH₃CH₂CH₃ + Na₂CO₃.",
          },
          {
            kind: "mcq",
            q: "Kolbe's electrolysis of sodium propanoate gives mainly:",
            options: ["Butane", "Ethane", "Propane", "Hexane"],
            answer: 0,
            explain: "Two CH₃CH₂• radicals (formed after loss of CO₂ at the anode) combine: CH₃CH₂–CH₂CH₃.",
            difficulty: 2,
            hint: "Each carboxylate loses CO₂; two alkyl groups join.",
          },
          {
            kind: "mcq",
            q: "Which has the lowest boiling point?",
            options: ["2,2-Dimethylpropane", "2-Methylbutane", "Pentane", "Hexane"],
            answer: 0,
            explain: "All C₅H₁₂ isomers have the same mass; the most branched (most spherical) has the least surface contact and lowest boiling point.",
          },
          {
            kind: "mcq",
            q: "In the chlorination of methane, the step CH₄ + Cl• → •CH₃ + HCl is:",
            options: ["Chain propagation", "Chain initiation", "Chain termination", "Rearrangement"],
            answer: 0,
            explain: "It consumes one radical and makes another, keeping the chain going.",
          },
          {
            kind: "truefalse",
            q: "In the Newman projection of staggered ethane, the dihedral angle between C–H bonds on the front and back carbons is 60°.",
            answer: true,
            explain: "In the staggered form each rear C–H lies halfway between two front C–H bonds: 60°. In the eclipsed form it is 0°.",
          },
          {
            kind: "multi",
            q: "Which of these give ethane as a main product?",
            options: ["CH₃Br + Na in dry ether", "CH₃COONa by Kolbe's electrolysis", "CH₂=CH₂ + H₂ (Ni)", "CH₃COONa + NaOH (CaO)"],
            answers: [0, 1, 2],
            explain: "Wurtz, Kolbe (from acetate) and hydrogenation of ethene give ethane. Soda lime decarboxylation of sodium acetate gives methane.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Heating n-hexane at 773 K and 10–20 atm over Cr₂O₃ supported on alumina gives:",
            options: ["Benzene", "Cyclohexane", "Hex-1-ene only", "2-Methylpentane"],
            answer: 0,
            explain: "This is aromatisation (dehydrogenation and cyclisation): C₆H₁₄ → C₆H₆ + 4H₂.",
          },
          {
            kind: "numeric",
            q: "How many moles of O₂ are needed to burn 1 mol of butane (C₄H₁₀) completely?",
            answer: 6.5,
            tolerance: 0.01,
            unit: "mol",
            explain: "C₄H₁₀ + 13/2 O₂ → 4CO₂ + 5H₂O. In general CₙH₂ₙ₊₂ needs (3n + 1)/2 = 13/2 mol O₂.",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-che-hc-alkenes",
        title: "Alkenes: Isomerism, Preparation and Addition Reactions",
        summary: "Structure of the C=C bond, geometrical isomerism, preparation from alkynes, alkyl halides, vicinal dihalides and alcohols, and the reactions: addition of H₂, halogens and HX (Markovnikov and peroxide effect), H₂SO₄, water, oxidation, ozonolysis and polymerisation.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🥭",
            caption: "Ethene, the simplest alkene, is the gas that helps mangoes and bananas ripen. It is also the starting material for polythene.",
          },
          {
            type: "text",
            md: "**Alkenes** (CₙH₂ₙ, also called **olefins**, 'oil-forming', because ethene gives an oily liquid with chlorine) have a C=C double bond made of one strong σ bond and one weaker π bond. The double-bond carbons are sp², planar, with angles of about 120°; C=C is 134 pm. The C=C bond enthalpy (681 kJ mol⁻¹) is less than twice that of C–C (348 kJ mol⁻¹), because the π bond is weaker. The π electron cloud lies above and below the plane and is loosely held, so alkenes attract **electrophiles** and mainly undergo **electrophilic addition**.",
          },
          {
            type: "text",
            md: "**Isomerism.** Alkenes show structural isomerism (chain: but-1-ene vs 2-methylpropene; position: but-1-ene vs but-2-ene) and **geometrical (cis–trans) isomerism**, because the π bond stops rotation. It appears only when **each double-bond carbon carries two different groups**. In **cis**-but-2-ene the two CH₃ groups are on the same side; in **trans**-but-2-ene they are on opposite sides. The cis isomer is polar (dipole moment ≈ 0.33 D) and boils a little higher; the trans isomer has zero dipole moment and, packing better, melts higher. But-1-ene and 2-methylpropene show no geometrical isomerism (one carbon has two H or two CH₃).",
          },
          {
            type: "table",
            headers: ["Preparation", "Reagent and conditions", "Example"],
            rows: [
              ["From alkynes (partial reduction)", "H₂, Lindlar's catalyst (Pd/C deactivated with sulphur compounds or quinoline) → **cis** alkene; Na in liquid NH₃ → **trans** alkene", "CH₃C≡CCH₃ → cis- or trans-but-2-ene"],
              ["From alkyl halides (dehydrohalogenation)", "alcoholic KOH, heat (β-elimination). Ease: RI > RBr > RCl; 3° > 2° > 1°", "CH₃CH₂Cl + KOH → CH₂=CH₂ + KCl + H₂O"],
              ["From vicinal dihalides (dehalogenation)", "Zn dust", "BrCH₂CH₂Br + Zn → CH₂=CH₂ + ZnBr₂"],
              ["From alcohols (acidic dehydration)", "conc. H₂SO₄, heat (ethanol at about 443 K)", "CH₃CH₂OH → CH₂=CH₂ + H₂O"],
            ],
          },
          {
            type: "text",
            md: "**Addition of HX and Markovnikov's rule.** HX adds with reactivity HI > HBr > HCl. To a symmetrical alkene the product is the same either way; to an unsymmetrical alkene **Markovnikov's rule** applies: the negative part of the reagent goes to the double-bond carbon that has **fewer hydrogen atoms**. So propene + HBr gives mainly **2-bromopropane**. The reason is the mechanism:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "HBr gives the electrophile H⁺ (and Br⁻).",
              "H⁺ attacks the π bond. Adding to the terminal CH₂ gives the **secondary** carbocation CH₃–C⁺H–CH₃; adding to the middle carbon would give the less stable **primary** carbocation CH₃CH₂CH₂⁺.",
              "The more stable 2° carbocation forms faster (more hyperconjugation and +I).",
              "Br⁻ attacks it to give CH₃–CHBr–CH₃, 2-bromopropane.",
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{CH_3CH{=}CH_2 + HBr \longrightarrow CH_3CHBrCH_3} \qquad \mathrm{CH_3CH{=}CH_2 + HBr \xrightarrow{(C_6H_5CO)_2O_2} CH_3CH_2CH_2Br}`,
            caption: "Left: Markovnikov addition (ionic, via the 2° carbocation). Right: anti-Markovnikov addition with benzoyl peroxide (free radical).",
          },
          {
            type: "text",
            md: "**Peroxide effect (Kharash effect).** In the presence of a peroxide such as benzoyl peroxide, HBr adds the **opposite** way (**anti-Markovnikov**): propene gives **1-bromopropane**. The peroxide starts a **free-radical** chain: Br• adds to the terminal carbon to give the more stable secondary radical, which then takes H from HBr. This happens **only with HBr**: the H–Cl bond (430.5 kJ mol⁻¹) is too strong to be broken by the radicals, and with HI (298.7 kJ mol⁻¹) the I• atoms combine to form I₂ instead of adding.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Propene reacts with HBr in the presence of benzoyl peroxide. The main product is:",
                options: ["1-Bromopropane", "2-Bromopropane", "1,2-Dibromopropane", "Propane"],
                answer: 0,
                explain: "Peroxide changes the mechanism to free-radical addition, giving the anti-Markovnikov product CH₃CH₂CH₂Br.",
              },
            ],
          },
          {
            type: "text",
            md: "**Other reactions.** **H₂** (Ni/Pt/Pd) → alkane. **Halogens**: CH₂=CH₂ + Br₂ → BrCH₂CH₂Br; the reddish-orange colour of bromine in CCl₄ disappears, a test for unsaturation. **Cold conc. H₂SO₄** (Markovnikov) → alkyl hydrogen sulphate: CH₂=CH₂ + H₂SO₄ → CH₃CH₂OSO₂OH. **Water** (acid-catalysed, Markovnikov): (CH₃)₂C=CH₂ + H₂O → (CH₃)₃COH. **Oxidation**: cold, dilute, aqueous KMnO₄ (**Baeyer's reagent**) gives a vicinal glycol and its pink colour disappears (CH₂=CH₂ → HOCH₂CH₂OH); acidic KMnO₄ or K₂Cr₂O₇ cleaves the C=C to ketones and/or acids, e.g. CH₃CH=CHCH₃ → 2CH₃COOH. **Ozonolysis**: O₃ forms an ozonide, which Zn and water break into aldehydes and/or ketones, cutting exactly at the C=C. **Polymerisation**: n CH₂=CH₂ → (–CH₂–CH₂–)ₙ, polythene, at high temperature and pressure with a catalyst.",
          },
          {
            type: "example",
            title: "Ozonolysis products",
            problem: "Give the products of ozonolysis (O₃, then Zn/H₂O) of (a) pent-2-ene and (b) 2-methylpropene.",
            steps: [
              "Rule: cut the C=C and put =O on each carbon that was in the double bond.",
              "(a) CH₃CH=CHCH₂CH₃ → CH₃CH=O + O=CHCH₂CH₃: ethanal and propanal.",
              "(b) (CH₃)₂C=CH₂ → (CH₃)₂C=O + O=CH₂: propanone and methanal.",
            ],
            answer: "(a) Ethanal + propanal; (b) propanone + methanal.",
          },
          {
            type: "mistake",
            wrong: "Peroxides reverse the direction of addition for all hydrogen halides, so propene + HCl with peroxide gives 1-chloropropane.",
            right: "The peroxide (anti-Markovnikov) effect is seen only with HBr. With HCl and HI the addition stays Markovnikov even if peroxide is present: propene + HCl gives 2-chloropropane.",
            why: "Learners remember 'peroxide flips the product' without the reason. Both radical steps must be energetically possible, which is true only for HBr.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the reagent with the product it gives from propene.",
              pairs: [
                ["HBr", "2-Bromopropane"],
                ["HBr, benzoyl peroxide", "1-Bromopropane"],
                ["Br₂ in CCl₄", "1,2-Dibromopropane"],
                ["Cold dilute KMnO₄", "Propane-1,2-diol"],
                ["O₃, then Zn/H₂O", "Ethanal + methanal"],
                ["H₂O, H⁺", "Propan-2-ol"],
              ],
              explain: "Ionic HX and acid-catalysed water follow Markovnikov's rule; only HBr with peroxide gives the anti-Markovnikov product. Ozonolysis cuts the double bond.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "State Markovnikov's rule in words, then show the two possible carbocations and say which is more stable. For the peroxide effect, name the peroxide and say why HCl and HI do not show it. In ozonolysis questions, draw the alkene, cut the C=C, and name each carbonyl compound.",
          },
          {
            type: "keypoints",
            items: [
              "Alkenes CₙH₂ₙ: sp² carbons, σ + π bond, C=C 134 pm; electrophilic addition is typical.",
              "Geometrical isomerism needs two different groups on each double-bond carbon; cis is polar, trans is not.",
              "Preparation: Lindlar (cis) or Na/liq. NH₃ (trans) from alkynes; alc. KOH on RX; Zn on vicinal dihalides; conc. H₂SO₄ on alcohols.",
              "Markovnikov: H goes to the carbon with more H, via the more stable carbocation; peroxide reverses this only for HBr (free-radical path).",
              "Baeyer's reagent gives glycols; ozonolysis gives carbonyl compounds and locates the double bond; ethene polymerises to polythene.",
            ],
          },
        ],
        flashcards: [
          { front: "Markovnikov's rule", back: "In addition of HX to an unsymmetrical alkene, the negative part goes to the double-bond carbon with fewer hydrogens." },
          { front: "Peroxide (Kharash) effect", back: "HBr adds anti-Markovnikov in the presence of peroxide by a free-radical mechanism; not seen with HCl or HI." },
          { front: "Lindlar's catalyst vs Na/liq. NH₃", back: "Lindlar (partially deactivated Pd/C) gives cis alkenes; Na in liquid NH₃ gives trans alkenes." },
          { front: "Baeyer's reagent", back: "Cold, dilute, aqueous (alkaline) KMnO₄: converts alkenes to vicinal glycols; pink colour disappears." },
          { front: "Test for unsaturation with bromine", back: "Reddish-orange Br₂ in CCl₄ is decolourised by alkenes and alkynes." },
          { front: "Condition for geometrical isomerism in alkenes", back: "Each carbon of the C=C must carry two different atoms or groups." },
          { front: "Ozonolysis", back: "O₃ then Zn/H₂O: cuts the C=C and gives aldehydes/ketones; used to find the position of the double bond." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which alkene shows geometrical isomerism?",
            options: ["Pent-2-ene", "Propene", "2-Methylpropene", "But-1-ene"],
            answer: 0,
            explain: "In CH₃CH=CHCH₂CH₃ each double-bond carbon has H and an alkyl group. The others have one carbon carrying two identical groups.",
          },
          {
            kind: "mcq",
            q: "The major product of HCl addition to 2-methylpropene is:",
            options: ["2-Chloro-2-methylpropane", "1-Chloro-2-methylpropane", "1-Chlorobutane", "2-Chlorobutane"],
            answer: 0,
            explain: "H⁺ adds to CH₂, giving the tertiary carbocation (CH₃)₃C⁺; Cl⁻ then attacks it.",
          },
          {
            kind: "mcq",
            q: "But-2-yne is reduced with Na in liquid ammonia. The product is:",
            options: ["trans-But-2-ene", "cis-But-2-ene", "Butane", "But-1-ene"],
            answer: 0,
            explain: "Dissolving-metal reduction (Na/liq. NH₃) gives the trans alkene; Lindlar's catalyst would give cis.",
          },
          {
            kind: "mcq",
            q: "Ozonolysis of an alkene gives only propanone. The alkene is:",
            options: ["2,3-Dimethylbut-2-ene", "2-Methylbut-2-ene", "Hex-3-ene", "2-Methylpropene"],
            answer: 0,
            explain: "(CH₃)₂C=C(CH₃)₂ is symmetrical; each half becomes (CH₃)₂C=O.",
            difficulty: 2,
            hint: "Join two (CH₃)₂C= halves.",
          },
          {
            kind: "truefalse",
            q: "HI adds to propene in the presence of peroxide to give 1-iodopropane.",
            answer: false,
            explain: "Only HBr shows the peroxide effect. HI gives 2-iodopropane (Markovnikov) whether or not peroxide is present.",
          },
          {
            kind: "multi",
            q: "Which reagents give ethene from a suitable starting compound?",
            options: ["Alcoholic KOH on chloroethane", "Zn dust on 1,2-dibromoethane", "Conc. H₂SO₄ on ethanol at about 443 K", "Aqueous KOH on chloroethane"],
            answers: [0, 1, 2],
            explain: "Alcoholic KOH eliminates HCl, Zn removes two Br, and hot conc. H₂SO₄ dehydrates ethanol. Aqueous KOH mainly substitutes to give ethanol.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which reagent converts ethene into ethane-1,2-diol?",
            options: ["Cold dilute alkaline KMnO₄", "Acidified K₂Cr₂O₇, heat", "O₃ then Zn/H₂O", "Conc. H₂SO₄"],
            answer: 0,
            explain: "Baeyer's reagent adds two –OH groups to the C=C. Hot acidic oxidants and ozonolysis cleave the double bond.",
          },
          {
            kind: "mcq",
            q: "The order of reactivity of hydrogen halides towards alkenes is:",
            options: ["HI > HBr > HCl", "HCl > HBr > HI", "HBr > HI > HCl", "HCl > HI > HBr"],
            answer: 0,
            explain: "The weakest H–X bond (H–I) gives H⁺ most easily.",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-che-hc-alkynes",
        title: "Alkynes: Structure, Acidity and Addition Reactions",
        summary: "The C≡C bond, isomerism and nomenclature, preparation from calcium carbide and vicinal dihalides, acidic character of terminal alkynes, and additions of H₂, halogens, HX and water, and polymerisation.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧑‍🏭",
            caption: "A welder cutting steel with an oxy-acetylene torch uses ethyne (acetylene), the simplest alkyne. Its flame is hot enough to melt iron.",
          },
          {
            type: "text",
            md: "**Alkynes** have the general formula CₙH₂ₙ₋₂. In ethyne each carbon is **sp hybridised**; the molecule is **linear** (H–C–C angle 180°). The triple bond is one σ bond and two π bonds formed from two pairs of p orbitals at right angles; together the π electrons form a cylinder around the C–C axis. C≡C is 120 pm and its bond enthalpy is 823 kJ mol⁻¹.\n\nNaming uses -yne: HC≡CH ethyne, CH₃C≡CH propyne, CH₃CH₂C≡CH but-1-yne, CH₃C≡CCH₃ but-2-yne (position isomers). C₅H₈ has three alkyne isomers: pent-1-yne, pent-2-yne and 3-methylbut-1-yne.",
          },
          {
            type: "table",
            headers: ["Preparation", "Equation"],
            rows: [
              ["From calcium carbide (industrial ethyne)", "CaCO₃ → CaO + CO₂; CaO + 3C → CaC₂ + CO; CaC₂ + 2H₂O → Ca(OH)₂ + HC≡CH"],
              ["From vicinal dihalides", "two dehydrohalogenations: alcoholic KOH removes the first HX, giving a vinylic halide; NaNH₂ removes the second"],
            ],
          },
          {
            type: "example",
            title: "Making propyne",
            problem: "Show how propyne is obtained from 1,2-dibromopropane.",
            steps: [
              "Step 1, alcoholic KOH: CH₃CHBrCH₂Br + KOH → CH₃CBr=CH₂ (or CH₃CH=CHBr) + KBr + H₂O.",
              "The vinylic halide is hard to dehydrohalogenate (C–Br has partial double-bond character), so a stronger base is used.",
              "Step 2, sodamide: CH₃CBr=CH₂ + NaNH₂ → CH₃C≡CH + NaBr + NH₃.",
            ],
            answer: "CH₃CHBrCH₂Br → (alc. KOH) → bromopropene → (NaNH₂) → CH₃C≡CH.",
          },
          {
            type: "text",
            md: "**Acidic character.** A hydrogen on a triple-bond carbon is weakly acidic: the sp carbon (50% s-character) holds the electron pair of the C–H bond close to itself, so the carbanion HC≡C⁻ is fairly stable. With sodium or sodamide, ethyne forms **sodium acetylide**: HC≡CH + Na → HC≡C⁻Na⁺ + ½H₂. Acidity: **HC≡CH > CH₂=CH₂ > CH₃–CH₃**. Only terminal alkynes (≡C–H) show this; but-2-yne does not. Terminal alkynes are still weaker acids than water, so NaOH does not deprotonate them.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which compound reacts with sodamide to give a sodium salt?",
                options: ["But-1-yne", "But-2-yne", "But-2-ene", "Butane"],
                answer: 0,
                explain: "But-1-yne has an acidic ≡C–H. But-2-yne has no H on its triple-bond carbons.",
              },
            ],
          },
          {
            type: "text",
            md: "**Addition reactions** happen twice, because the triple bond has two π bonds. **H₂** (Pt/Pd/Ni): alkyne → alkene → alkane. **Halogens**: HC≡CH + 2Br₂ → CHBr₂–CHBr₂ (1,1,2,2-tetrabromoethane); the reddish-orange colour disappears. **HX** follows Markovnikov's rule both times, so both X atoms end up on the same carbon (a **gem-dihalide**): CH₃C≡CH + HBr → CH₃CBr=CH₂; + HBr → CH₃CBr₂CH₃. **Water** adds with Hg²⁺ and dil. H₂SO₄ at 333 K through an unstable enol that becomes a carbonyl compound. **Polymerisation**: linear polymerisation gives polyacetylene (a conducting polymer); passing ethyne through a red-hot iron tube at 873 K gives **benzene** (cyclic polymerisation, 3HC≡CH → C₆H₆).",
          },
          {
            type: "formula",
            tex: t`\mathrm{HC{\equiv}CH + H_2O \xrightarrow[\;333\,K\;]{Hg^{2+},\ H^{+}} [\,CH_2{=}CH{-}OH\,] \longrightarrow CH_3CHO}`,
            caption: "The enol (vinyl alcohol) rearranges at once to ethanal. Propyne gives propanone the same way: CH₃C≡CH → CH₃COCH₃.",
          },
          {
            type: "example",
            title: "Predicting addition products",
            problem: "Give the products of propyne with (a) excess HBr and (b) H₂O in the presence of Hg²⁺/H₂SO₄.",
            steps: [
              "(a) First HBr: H goes to the terminal CH, Br to the middle carbon (Markovnikov): CH₃CBr=CH₂.",
              "Second HBr: again Br to the carbon that already has Br (it gives the more stable carbocation, helped by the lone pairs of Br): CH₃CBr₂CH₃.",
              "(b) Water adds by Markovnikov's rule: OH on C2 gives the enol CH₃C(OH)=CH₂, which tautomerises to the ketone.",
            ],
            answer: "(a) 2,2-Dibromopropane; (b) propanone.",
          },
          {
            type: "mistake",
            wrong: "Hydration of any alkyne with HgSO₄/H₂SO₄ gives an aldehyde, as ethyne does.",
            right: "Only ethyne gives an aldehyde (ethanal). Every other alkyne gives a ketone, because Markovnikov addition puts the –OH on an inner carbon: propyne → propanone, but-1-yne → butan-2-one.",
            why: "Ethyne is the textbook example, so learners generalise it. In ethyne both carbons are terminal and carry one H, which is why the carbonyl ends on a CH.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Ethyne is passed through a red-hot iron tube at 873 K. What forms?",
              emoji: "🔥",
              options: ["Benzene", "Cyclohexane", "Polyacetylene only", "Ethane"],
              answer: 0,
              trap: 1,
              explain: "Three ethyne molecules join into a ring with three C=C: C₆H₆, benzene. No hydrogen is added, so the ring cannot be cyclohexane (C₆H₁₂).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Explain the acidity of ethyne with hybridisation (50% s-character), and write the sodium acetylide equation. For 'how will you convert' questions, write each step with reagent and condition above the arrow: CaC₂ → ethyne → ethanal is a favourite.",
          },
          {
            type: "keypoints",
            items: [
              "Alkynes CₙH₂ₙ₋₂: sp carbons, linear, one σ + two π, C≡C 120 pm.",
              "Ethyne from CaC₂ + water; alkynes from vicinal dihalides with alc. KOH then NaNH₂.",
              "Terminal alkynes are weakly acidic (sp C–H): they form acetylides with Na or NaNH₂; acidity HC≡CH > CH₂=CH₂ > C₂H₆.",
              "Additions occur twice: Br₂ → tetrabromo compound; HX → gem-dihalide (Markovnikov); H₂O/Hg²⁺ → ethanal from ethyne, ketones from others.",
              "3HC≡CH → C₆H₆ in a red-hot iron tube at 873 K.",
            ],
          },
        ],
        flashcards: [
          { front: "Hybridisation and shape of ethyne", back: "sp; linear (180°), one σ and two π bonds between the carbons." },
          { front: "Calcium carbide + water", back: "CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂" },
          { front: "Why is ethyne acidic?", back: "Its C–H carbon is sp (50% s-character); the acetylide ion's lone pair is held close to the nucleus and is relatively stable." },
          { front: "Ethyne + Na", back: "HC≡CH + Na → HC≡C⁻Na⁺ + ½H₂ (sodium acetylide)." },
          { front: "Hydration of ethyne", back: "H₂O, Hg²⁺/H₂SO₄, 333 K → vinyl alcohol (enol) → ethanal." },
          { front: "Propyne + excess HBr", back: "2,2-Dibromopropane (gem-dihalide) by two Markovnikov additions." },
          { front: "Cyclic polymerisation of ethyne", back: "3HC≡CH → benzene, through a red-hot iron tube at 873 K." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Hydration of but-1-yne (Hg²⁺, H₂SO₄) gives:",
            options: ["Butan-2-one", "Butanal", "Butan-1-ol", "Butan-2-ol"],
            answer: 0,
            explain: "Markovnikov addition puts OH on C2; the enol tautomerises to the ketone CH₃COCH₂CH₃.",
          },
          {
            kind: "mcq",
            q: "The correct order of acidic strength is:",
            options: ["HC≡CH > CH₂=CH₂ > CH₃CH₃", "CH₃CH₃ > CH₂=CH₂ > HC≡CH", "CH₂=CH₂ > HC≡CH > CH₃CH₃", "All are equally acidic"],
            answer: 0,
            explain: "s-character of the C–H carbon: sp (50%) > sp² (33%) > sp³ (25%).",
          },
          {
            kind: "numeric",
            q: "How many moles of Br₂ are added by 1 mol of ethyne to give a saturated product?",
            answer: 2,
            unit: "mol",
            explain: "Two π bonds, each takes one Br₂: HC≡CH + 2Br₂ → CHBr₂CHBr₂.",
          },
          {
            kind: "mcq",
            q: "Which alkyne does NOT react with sodium metal to liberate H₂?",
            options: ["But-2-yne", "Ethyne", "Propyne", "But-1-yne"],
            answer: 0,
            explain: "But-2-yne has no hydrogen on a triple-bond carbon.",
          },
          {
            kind: "truefalse",
            q: "Ethyne reacts with aqueous NaOH to form sodium acetylide.",
            answer: false,
            explain: "Ethyne (pKa ≈ 25) is a weaker acid than water (15.7), so OH⁻ cannot remove its proton; a stronger base such as NaNH₂ is needed.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The C≡C bond length in ethyne is about:",
            options: ["120 pm", "134 pm", "139 pm", "154 pm"],
            answer: 0,
            explain: "C≡C 120 pm < C=C 134 pm < benzene C–C 139 pm < C–C 154 pm.",
          },
          {
            kind: "numeric",
            q: "How many structural isomers that are alkynes have the formula C₅H₈?",
            answer: 3,
            explain: "Pent-1-yne, pent-2-yne and 3-methylbut-1-yne.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Vicinal dibromide → alkyne needs two eliminations. Why is NaNH₂ used for the second step?",
            options: [
              "The vinylic C–Br bond is hard to break, so a stronger base is needed",
              "NaNH₂ adds bromine back",
              "KOH would reduce the alkyne",
              "NaNH₂ is used only to dry the product",
            ],
            answer: 0,
            explain: "In a vinyl halide the C–Br bond has partial double-bond character (resonance), so alcoholic KOH removes HBr only slowly; sodamide is a much stronger base.",
          },
        ],
      },

      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c11-che-hc-aromatic",
        title: "Benzene, Aromaticity and Electrophilic Substitution",
        summary: "Structure and resonance of benzene, Hückel's rule, preparation of benzene, electrophilic substitution (nitration, halogenation, sulphonation, Friedel–Crafts) and its mechanism, addition reactions, directive influence of substituents and carcinogenicity.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "illustration",
            emoji: "🧪",
            caption: "Naphthalene mothballs, the drug paracetamol and the dye in a blue pen all contain benzene rings. These compounds are called aromatic, though most have no pleasant smell.",
          },
          {
            type: "text",
            md: "**Aromatic hydrocarbons (arenes)** contain benzene rings (**benzenoid**) or other aromatic rings (**non-benzenoid**). Benzene, C₆H₆, was isolated by Michael Faraday in 1825. Kekulé (1865) proposed a ring of six carbons with alternating single and double bonds. But benzene prefers **substitution** to addition, and only **one** ortho-disubstituted product exists (a fixed Kekulé structure would allow two). So the two Kekulé structures are **resonance structures**, and benzene is their hybrid.\n\nAll six carbons are sp²; each uses its unhybridised p orbital to form a ring-shaped π electron cloud above and below the plane. All C–C bonds are equal, **139 pm** (between C–C 154 and C=C 134 pm). The delocalisation makes benzene unusually stable.",
          },
          {
            type: "text",
            md: "**Aromaticity (Hückel's rule).** A compound is aromatic if it is **planar**, **cyclic**, has **complete delocalisation** of π electrons in the ring (every ring atom has a p orbital) and contains **(4n + 2) π electrons**, n = 0, 1, 2 …",
          },
          {
            type: "formula",
            tex: t`\text{number of } \pi \text{ electrons} = 4n + 2 \qquad (n = 0, 1, 2, \ldots \;\Rightarrow\; 2, 6, 10, 14, \ldots)`,
            caption: "Hückel's rule, applied only to planar, cyclic, fully conjugated rings.",
          },
          {
            type: "table",
            headers: ["Species", "π electrons", "Aromatic?"],
            rows: [
              ["Benzene", "6 (n = 1)", "yes"],
              ["Naphthalene / anthracene", "10 (n = 2) / 14 (n = 3)", "yes"],
              ["Cyclopentadienyl anion, C₅H₅⁻", "6", "yes (all five C sp²)"],
              ["Tropylium (cycloheptatrienyl) cation, C₇H₇⁺", "6", "yes"],
              ["Cyclopentadiene, C₅H₆", "4", "no (one sp³ CH₂ breaks the ring of p orbitals)"],
              ["Cyclooctatetraene, C₈H₈", "8", "no (tub-shaped, not planar)"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which species is aromatic?",
                options: ["Cyclopentadienyl anion", "Cyclopentadiene", "Cyclooctatetraene", "Cyclohexene"],
                answer: 0,
                explain: "C₅H₅⁻ is planar and cyclic with every carbon sp² and 6 π electrons (4n + 2 with n = 1).",
              },
            ],
          },
          {
            type: "text",
            md: "**Preparation of benzene.** (i) Cyclic polymerisation of ethyne in a red-hot iron tube at 873 K. (ii) **Decarboxylation**: sodium benzoate + NaOH (soda lime, heat) → C₆H₆ + Na₂CO₃. (iii) **Reduction of phenol**: phenol vapour over heated zinc dust → C₆H₆ + ZnO.\n\n**Electrophilic substitution.** The π cloud is electron rich, so benzene attracts electrophiles, but it keeps its aromatic sextet by **substituting** an H rather than adding.",
          },
          {
            type: "table",
            headers: ["Reaction", "Reagents", "Electrophile", "Product"],
            rows: [
              ["Nitration", "conc. HNO₃ + conc. H₂SO₄ (nitrating mixture), about 330 K", "NO₂⁺ (nitronium ion)", "nitrobenzene"],
              ["Halogenation", "Cl₂ (or Br₂) with anhydrous FeCl₃ / AlCl₃ (Lewis acid)", "Cl⁺", "chlorobenzene"],
              ["Sulphonation", "fuming H₂SO₄ (oleum), heat", "SO₃", "benzenesulphonic acid"],
              ["Friedel–Crafts alkylation", "CH₃Cl + anhydrous AlCl₃", "CH₃⁺ (R⁺)", "toluene (methylbenzene)"],
              ["Friedel–Crafts acylation", "CH₃COCl (or (CH₃CO)₂O) + anhydrous AlCl₃", "CH₃C⁺=O (acylium ion)", "acetophenone"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Generation of the electrophile**, e.g. Cl₂ + AlCl₃ → Cl⁺ + [AlCl₄]⁻.",
              "**Formation of the carbocation (arenium ion, σ-complex):** the electrophile bonds to one ring carbon, which becomes sp³; the positive charge is delocalised over the other five carbons and aromaticity is lost for the moment.",
              "**Removal of a proton:** [AlCl₄]⁻ takes H⁺ from the sp³ carbon, aromaticity returns: C₆H₅Cl + HCl + AlCl₃ (catalyst regenerated).",
            ],
          },
          {
            type: "example",
            title: "Where does NO₂⁺ come from?",
            problem: "Write the equation for the formation of the electrophile in nitration of benzene and the overall reaction.",
            steps: [
              "H₂SO₄ is the stronger acid; it protonates HNO₃, which then loses water.",
              "Overall: HNO₃ + 2H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2HSO₄⁻ (atoms: H 5 = 5, N 1, O 11 = 11, S 2; charge 0 = 0).",
              "NO₂⁺ attacks the ring, the arenium ion forms, and HSO₄⁻ removes H⁺.",
            ],
            answer: "C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (conc. H₂SO₄ catalyst, electrophile NO₂⁺).",
          },
          {
            type: "text",
            md: "**Addition and combustion.** Under drastic conditions benzene adds: with H₂ (Ni, high temperature and pressure) → cyclohexane; with Cl₂ in UV light (about 500 K) → **benzene hexachloride (BHC)**, C₆H₆Cl₆. It burns with a sooty flame: 2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O.\n\n**Directive influence.** A group already on the ring decides where the next one goes. **Ortho/para directors** donate electrons to the ring (by +R or hyperconjugation) and raise electron density at o and p: –OH, –NH₂, –NHR, –NHCOCH₃, –OCH₃, –CH₃, –C₂H₅; these also **activate** the ring. **Meta directors** withdraw electrons by –R, lowering density most at o and p, so attack happens at meta: –NO₂, –CN, –CHO, –COR, –COOH, –COOR, –SO₃H; these **deactivate** the ring. **Halogens** are the exception: strong –I **deactivates** the ring, but +R still makes them **o/p directing**.\n\n**Carcinogenicity and toxicity.** Benzene and polynuclear hydrocarbons with more than two fused rings are toxic and some are **carcinogenic**, e.g. 1,2-benzanthracene and 3-methylcholanthrene. They form by incomplete combustion of organic matter such as tobacco, coal and petroleum.",
          },
          {
            type: "mistake",
            wrong: "Chlorine is an ortho/para director, so chlorobenzene reacts faster than benzene with electrophiles.",
            right: "Chlorine directs o/p (+R) but deactivates the ring (–I is stronger than +R), so chlorobenzene reacts more slowly than benzene. Directing and activating are separate questions.",
            why: "For –OH, –NH₂ and –CH₃ the two go together, so learners assume 'o/p director = activator'. Halogens break that pattern because their –I effect is unusually strong.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each substituent on benzene by where it directs.",
              groups: ["Ortho/para directing", "Meta directing"],
              items: [
                { text: "–OH", group: 0, hint: "Oxygen lone pairs donate to the ring (+R)." },
                { text: "–NH₂", group: 0, hint: "Strong +R through the N lone pair." },
                { text: "–CH₃", group: 0, hint: "+I and hyperconjugation." },
                { text: "–Cl", group: 0, hint: "Deactivating, but +R still steers o/p." },
                { text: "–NO₂", group: 1, hint: "Strong –R and –I." },
                { text: "–CHO", group: 1, hint: "The carbonyl withdraws by –R." },
                { text: "–COOH", group: 1, hint: "Carbonyl again: –R." },
                { text: "–CN", group: 1, hint: "C≡N withdraws by –R." },
              ],
              explain: "Groups with a lone pair or alkyl on the ring atom direct o/p; groups whose ring atom is bonded to a more electronegative atom by a multiple bond direct meta.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For the mechanism of electrophilic substitution, write all three steps with the electrophile-forming equation; drawing the resonance structures of the arenium ion earns extra credit. Always mention the catalyst as **anhydrous** AlCl₃: water destroys it. Directive influence answers need the resonance structures of phenol (o/p) or nitrobenzene (charge at o/p, so meta attack).",
          },
          {
            type: "keypoints",
            items: [
              "Benzene: resonance hybrid of two Kekulé structures; six equal C–C bonds of 139 pm; sp² carbons with a delocalised π sextet.",
              "Hückel's rule: planar, cyclic, fully conjugated, (4n + 2) π electrons.",
              "Benzene is made from ethyne (873 K iron tube), sodium benzoate (soda lime) or phenol (Zn dust).",
              "Electrophilic substitution (nitration, halogenation, sulphonation, Friedel–Crafts) goes through electrophile → arenium ion → loss of H⁺.",
              "o/p directors: –OH, –NH₂, –OCH₃, –CH₃, halogens (halogens deactivate); m directors: –NO₂, –CN, –CHO, –COOH, –SO₃H.",
            ],
          },
        ],
        flashcards: [
          { front: "C–C bond length in benzene", back: "139 pm, all six equal (between 154 pm single and 134 pm double)." },
          { front: "Hückel's rule", back: "Planar, cyclic, fully conjugated ring with (4n + 2) π electrons → aromatic." },
          { front: "Nitrating mixture and electrophile", back: "Conc. HNO₃ + conc. H₂SO₄; electrophile NO₂⁺." },
          { front: "Friedel–Crafts acylation of benzene with CH₃COCl", back: "Gives acetophenone (C₆H₅COCH₃) with anhydrous AlCl₃; electrophile CH₃CO⁺." },
          { front: "Benzene + Cl₂ in UV light", back: "Addition: benzene hexachloride (BHC), C₆H₆Cl₆." },
          { front: "Intermediate in electrophilic substitution", back: "Arenium ion (σ-complex), a resonance-stabilised carbocation with one sp³ ring carbon." },
          { front: "Halogens on benzene", back: "Deactivating (–I) but ortho/para directing (+R)." },
          { front: "Two carcinogenic polynuclear hydrocarbons", back: "1,2-Benzanthracene and 3-methylcholanthrene (formed in incomplete combustion of tobacco, coal, petroleum)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The electrophile in the sulphonation of benzene is:",
            options: ["SO₃", "HSO₄⁻", "SO₄²⁻", "H₂SO₃"],
            answer: 0,
            explain: "Fuming sulphuric acid supplies SO₃, which attacks the ring through its electron-poor sulphur.",
          },
          {
            kind: "mcq",
            q: "Which of these reactions prepares benzene?",
            options: ["Sodium benzoate + soda lime, heat", "Benzene + H₂, Ni", "Ethyne + H₂O, Hg²⁺", "Toluene + KMnO₄"],
            answer: 0,
            explain: "Decarboxylation: C₆H₅COONa + NaOH → C₆H₆ + Na₂CO₃ (CaO, heat). The other reactions start from benzene or give other products.",
          },
          {
            kind: "numeric",
            q: "How many π electrons does the tropylium ion, C₇H₇⁺, contain?",
            answer: 6,
            explain: "Three C=C contribute 6 π electrons; the seventh carbon carries the positive charge and an empty p orbital, completing the ring of p orbitals.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which groups are meta directing in electrophilic substitution?",
            options: ["–NO₂", "–COOH", "–SO₃H", "–OCH₃", "–Br"],
            answers: [0, 1, 2],
            explain: "–NO₂, –COOH and –SO₃H withdraw electrons by –R. –OCH₃ (+R) and –Br are ortho/para directing.",
          },
          {
            kind: "mcq",
            q: "Friedel–Crafts alkylation of benzene with CH₃Cl and anhydrous AlCl₃ gives:",
            options: ["Toluene", "Chlorobenzene", "Benzyl chloride", "Acetophenone"],
            answer: 0,
            explain: "AlCl₃ helps form CH₃⁺ (as a polarised complex), which substitutes an H: C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl.",
          },
          {
            kind: "truefalse",
            q: "In the arenium ion formed during electrophilic substitution, all six ring carbons are sp² hybridised.",
            answer: false,
            explain: "The carbon that bonds to the electrophile becomes sp³; the other five carry the delocalised positive charge.",
          },
          {
            kind: "order",
            q: "Put the steps of the chlorination of benzene (Cl₂, anhydrous FeCl₃) in order.",
            items: [
              "Cl₂ + FeCl₃ → Cl⁺ + [FeCl₄]⁻",
              "Cl⁺ attacks the π cloud to form the arenium ion",
              "[FeCl₄]⁻ removes H⁺ from the sp³ carbon",
              "Chlorobenzene, HCl and FeCl₃ are formed",
            ],
            explain: "Electrophile generation, σ-complex formation (slow step), deprotonation that restores aromaticity, and regeneration of the catalyst.",
          },
          {
            kind: "mcq",
            q: "Benzene does not decolourise bromine water easily, but cyclohexene does. The reason is:",
            options: [
              "Addition would destroy benzene's aromatic stability",
              "Benzene has no π electrons",
              "Bromine does not dissolve in benzene",
              "Benzene is saturated",
            ],
            answer: 0,
            explain: "Benzene's delocalised π sextet gives extra stability; it reacts by substitution (with a Lewis acid catalyst) to keep it.",
          },
        ],
      },

      /* ---------------- Exam edge 1 ---------------- */
      {
        slug: "c11-che-hc-exam-aliphatic",
        title: "Exam edge: Alkanes, Alkenes and Alkynes Problems",
        summary: "Wurtz mixtures, counting monochloro products, Markovnikov versus peroxide addition, reverse ozonolysis, carbocation rearrangements and the tests that tell terminal and internal alkynes apart.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Hydrocarbons is where GOC is first used on real reactions. **JEE Main, NEET, KCET and COMEDK** regularly ask for the product of HX addition (with and without peroxide), the alkene that gives a stated set of ozonolysis products, the number of monochloro derivatives, and reagents to distinguish isomers. **JEE Advanced** adds carbocation rearrangements and multi-step 'identify A, B, C' chains. Every one of these is solved with two tools: the stability order of intermediates and careful counting.",
          },
          {
            type: "table",
            headers: ["Reaction", "Where the new group goes", "Intermediate"],
            rows: [
              ["HX (no peroxide), H₂O/H⁺, H₂SO₄", "Markovnikov: H to the carbon with more H", "carbocation (can rearrange)"],
              ["HBr + peroxide", "anti-Markovnikov: Br to the carbon with more H", "free radical"],
              ["Alkyne + 2HX", "both X on the same carbon (gem-dihalide)", "vinylic carbocation"],
              ["Alkyne + H₂O (Hg²⁺/H⁺)", "C=O on the inner carbon: ketone (ethanal only from ethyne)", "enol → keto form"],
              ["Alkyne + H₂ (Lindlar) / Na, liq. NH₃", "cis alkene / trans alkene", "—"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: "**Monochloro products** = number of sets of equivalent H atoms (use symmetry); this counts structural isomers only, so check whether the question wants stereoisomers too. **Reverse ozonolysis**: remove the two =O atoms and join the two carbonyl carbons with a C=C; this is safe for products from one double bond (a dicarbonyl means a ring or two double bonds). **Wurtz with two different halides** gives three alkanes (R–R, R–R′, R′–R′), so it is a poor method for unsymmetrical alkanes. **Rearrangement check**: whenever a carbocation is formed next to a carbon that is more substituted, try a 1,2-H or 1,2-CH₃ shift.",
          },
          {
            type: "formula",
            tex: t`\mathrm{R_2C{=}CR'_2 \;\xrightarrow{\;(i)\ O_3\;\ (ii)\ Zn/H_2O\;}\; R_2C{=}O \;+\; O{=}CR'_2}`,
            caption: "Ozonolysis cuts the C=C; each double-bond carbon becomes a carbonyl carbon (R or R′ may be H).",
          },
          {
            type: "example",
            title: "KCET level: Wurtz with a mixture",
            problem: "A mixture of CH₃Br and C₂H₅Br is treated with sodium in dry ether. Name the alkanes formed.",
            steps: [
              "Any two alkyl groups can join: CH₃ + CH₃, CH₃ + C₂H₅, C₂H₅ + C₂H₅.",
              "CH₃–CH₃ = ethane; CH₃–C₂H₅ = propane; C₂H₅–C₂H₅ = butane.",
            ],
            answer: "Ethane, propane and butane (a mixture that must be separated).",
          },
          {
            type: "example",
            title: "NEET level: with and without peroxide",
            problem: "Give the major product when 2-methylpropene reacts with HBr (a) in the dark, without peroxide, and (b) with benzoyl peroxide.",
            steps: [
              "(a) Ionic: H⁺ adds to the CH₂ carbon to give the tertiary cation (CH₃)₃C⁺; Br⁻ adds: (CH₃)₃CBr.",
              "(b) Free radical: Br• adds to the CH₂ carbon to give the tertiary radical (CH₃)₂C•–CH₂Br, which takes H from HBr: (CH₃)₂CH–CH₂Br.",
              "In both cases the more stable intermediate (3°) decides; what changes is whether H or Br adds first.",
            ],
            answer: "(a) 2-Bromo-2-methylpropane; (b) 1-bromo-2-methylpropane.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many structurally different monochloro products does 2,2-dimethylbutane give on free-radical chlorination?",
                answer: 3,
                explain: "(CH₃)₃C–CH₂–CH₃ has three sets of equivalent H: the nine on the tert-butyl methyls, the two on CH₂ and the three on the terminal CH₃.",
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: reverse ozonolysis",
            problem: "An alkene C₅H₁₀ on ozonolysis gives ethanal and propanone. Identify it.",
            steps: [
              "Ethanal = CH₃CH=O; propanone = (CH₃)₂C=O. Carbons: 2 + 3 = 5, which matches C₅H₁₀.",
              "Remove both O atoms and join the carbonyl carbons: CH₃CH=C(CH₃)₂.",
              "Name: longest chain of 4 C containing C=C; number to give C=C the lowest locant: 2-methylbut-2-ene.",
            ],
            answer: "2-Methylbut-2-ene, CH₃CH=C(CH₃)₂.",
          },
          {
            type: "example",
            title: "JEE Main level: counting monochloro products",
            problem: "How many structural monochloro derivatives does 2-methylbutane give?",
            steps: [
              "Write it: CH₃(a)–CH(b)(CH₃(a))–CH₂(c)–CH₃(d). The two CH₃ groups on C2 are equivalent (a).",
              "Sets of equivalent H: a (6 H), b (1 H), c (2 H), d (3 H) → 4 sets.",
              "Products: 1-chloro-2-methylbutane, 2-chloro-2-methylbutane, 2-chloro-3-methylbutane, 1-chloro-3-methylbutane.",
            ],
            answer: "4 structural isomers (two of them are chiral, so 6 if stereoisomers are counted).",
          },
          {
            type: "mistake",
            wrong: "Wurtz reaction of CH₃Br and C₂H₅Br together gives only propane.",
            right: "Three products form: ethane, propane and butane, because the alkyl groups combine at random. Wurtz is used for symmetrical alkanes from a single halide.",
            why: "The equation is usually written for one halide, so learners extend it as a neat cross-coupling. Exam options include 'only propane' for exactly this reason.",
          },
          {
            type: "mistake",
            wrong: "Ozonolysis always gives two different carbonyl compounds, so an alkene giving only one product must be a ring.",
            right: "A symmetrical alkene gives two molecules of the same carbonyl compound: but-2-ene gives only ethanal, 2,3-dimethylbut-2-ene only propanone. A ring alkene gives one molecule with two carbonyl groups.",
            why: "Learners count products, not molecules. Check the carbon count: two molecules of ethanal (2 C each) account for the 4 C of but-2-ene.",
          },
          {
            type: "example",
            title: "JEE Advanced level: a rearrangement",
            problem: "Predict the major product of HCl with 3-methylbut-1-ene, CH₂=CH–CH(CH₃)₂.",
            steps: [
              "H⁺ adds to the terminal CH₂ (Markovnikov), giving the secondary carbocation CH₃–C⁺H–CH(CH₃)₂.",
              "The neighbouring carbon is tertiary and carries one H. A 1,2-hydride shift moves that H (with its electron pair) to C⁺, giving the tertiary cation CH₃–CH₂–C⁺(CH₃)₂, which is more stable.",
              "Cl⁻ attacks the tertiary cation: CH₃CH₂C(Cl)(CH₃)₂.",
              "Name: chain of 4 C, Cl and CH₃ on C2 → 2-chloro-2-methylbutane (2-chloro-3-methylbutane forms only as the minor product).",
            ],
            answer: "2-Chloro-2-methylbutane (major), via a 1,2-hydride shift.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which reagent tells but-1-yne from but-2-yne?",
              emoji: "🧪",
              options: ["Ammoniacal AgNO₃", "Br₂ in CCl₄", "Baeyer's reagent", "H₂ with Ni"],
              answer: 0,
              trap: 1,
              explain: "Only the terminal alkyne has an acidic ≡C–H and gives a white silver acetylide precipitate (ammoniacal Cu₂Cl₂ gives a red one). Both alkynes decolourise bromine and KMnO₄ and both take up H₂.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Markovnikov via the more stable carbocation; anti-Markovnikov only for HBr + peroxide via the more stable radical.",
              "Look for 1,2-H or 1,2-CH₃ shifts whenever a 2° cation sits next to a more substituted carbon.",
              "Reverse ozonolysis: delete the =O atoms and join the carbonyl carbons by C=C; check the carbon count.",
              "Monochloro products = sets of equivalent H; Wurtz on mixed halides gives three alkanes.",
              "Terminal alkynes: white ppt with ammoniacal AgNO₃, red with ammoniacal Cu₂Cl₂, H₂ with Na; internal alkynes do not react.",
            ],
          },
        ],
        flashcards: [
          { front: "Wurtz on a mixture RX + R′X gives …", back: "R–R, R–R′ and R′–R′: three alkanes." },
          { front: "How to count monochloro products", back: "Count sets of equivalent hydrogen atoms (by symmetry)." },
          { front: "Ozonolysis of but-2-ene", back: "Two molecules of ethanal only." },
          { front: "1,2-hydride shift", back: "An H with its bonding pair moves to an adjacent carbocation centre, turning a less stable cation (e.g. 2°) into a more stable one (3°)." },
          { front: "Test for a terminal alkyne", back: "Ammoniacal AgNO₃ → white precipitate of silver acetylide; ammoniacal Cu₂Cl₂ → red precipitate." },
          { front: "HBr + 2-methylpropene with peroxide", back: "1-Bromo-2-methylpropane (anti-Markovnikov)." },
          { front: "Monochloro derivatives of 2-methylbutane", back: "4 structural isomers." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A mixture of bromoethane and 2-bromopropane is treated with Na in dry ether. Which alkane is NOT formed?",
            options: ["Hexane", "Butane", "2-Methylbutane", "2,3-Dimethylbutane"],
            answer: 0,
            explain: "Products: C₂H₅–C₂H₅ (butane), C₂H₅–CH(CH₃)₂ (2-methylbutane) and (CH₃)₂CH–CH(CH₃)₂ (2,3-dimethylbutane). Straight-chain hexane cannot form.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "An alkene gives a mixture of methanal and butanone on ozonolysis. It is:",
            options: ["2-Methylbut-1-ene", "Pent-1-ene", "2-Methylbut-2-ene", "3-Methylbut-1-ene"],
            answer: 0,
            explain: "Join H₂C= and =C(CH₃)CH₂CH₃: CH₂=C(CH₃)CH₂CH₃, 2-methylbut-1-ene.",
            difficulty: 2,
            hint: "Butanone is CH₃COCH₂CH₃; its carbonyl carbon carries a methyl and an ethyl.",
          },
          {
            kind: "mcq",
            q: "But-1-ene reacts with HBr in the presence of benzoyl peroxide. The main product is:",
            options: ["1-Bromobutane", "2-Bromobutane", "1,2-Dibromobutane", "2-Bromo-2-methylpropane"],
            answer: 0,
            explain: "Br• adds to C1, giving the more stable secondary radical at C2, which then takes H from HBr: CH₃CH₂CH₂CH₂Br.",
          },
          {
            kind: "multi",
            q: "Which reagents can distinguish propyne from propene?",
            options: ["Ammoniacal AgNO₃", "Ammoniacal Cu₂Cl₂", "Sodium metal", "Br₂ in CCl₄", "Cold dilute KMnO₄"],
            answers: [0, 1, 2],
            explain: "Only propyne has an acidic ≡C–H: it gives silver or copper acetylide precipitates and liberates H₂ with Na. Both compounds decolourise Br₂ and KMnO₄.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The major product of HCl addition to 3,3-dimethylbut-1-ene is:",
            options: ["2-Chloro-2,3-dimethylbutane", "3-Chloro-2,2-dimethylbutane", "1-Chloro-3,3-dimethylbutane", "2-Chloro-3,3-dimethylbutane"],
            answer: 0,
            explain: "H⁺ gives the 2° cation CH₃–C⁺H–C(CH₃)₃; a 1,2-methyl shift gives the 3° cation (CH₃)₂C⁺–CH(CH₃)₂; Cl⁻ adds to give (CH₃)₂CCl–CH(CH₃)₂.",
            difficulty: 3,
            hint: "The neighbouring carbon has no H, but it has three methyl groups.",
          },
          {
            kind: "numeric",
            q: "How many moles of H₂ does 1 mol of CH₂=CH–CH₂–C≡C–CH₃ take up on complete hydrogenation (Ni)?",
            answer: 3,
            unit: "mol",
            explain: "One C=C needs 1 mol and one C≡C needs 2 mol: 3 mol H₂, giving hexane.",
          },
          {
            kind: "mcq",
            q: "Hex-3-yne is hydrogenated over Lindlar's catalyst. The product is:",
            options: ["cis-Hex-3-ene", "trans-Hex-3-ene", "Hexane", "Hex-2-ene"],
            answer: 0,
            explain: "Both H atoms add from the same face of the alkyne on the catalyst surface (syn addition), and the poisoned catalyst stops at the alkene.",
          },
          {
            kind: "mcq",
            q: "Which conformation of ethane has the maximum torsional strain?",
            options: ["Eclipsed", "Staggered", "Skew at 30°", "All have equal strain"],
            answer: 0,
            explain: "In the eclipsed form (dihedral angle 0°) the C–H bond clouds on the two carbons are closest, so repulsion is greatest.",
          },
        ],
      },

      /* ---------------- Exam edge 2 ---------------- */
      {
        slug: "c11-che-hc-exam-aromatic",
        title: "Exam edge: Aromaticity, Directive Influence and Synthesis Order",
        summary: "Hückel-rule decisions including antiaromatic cases, ranking rings for electrophilic substitution, predicting products, choosing the order of steps in a synthesis, and the limits of Friedel–Crafts reactions.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Aromatic chemistry carries steady marks: **NEET and KCET** ask 'which is aromatic', 'which group is meta directing' and 'arrange in order of reactivity'; **JEE Main** adds product prediction and Friedel–Crafts limits; **JEE Advanced** asks for the correct sequence of reagents to make a disubstituted benzene and mixes in rearrangements. The same ideas run into Class 12 haloarenes, phenols, aldehydes and amines.",
          },
          {
            type: "table",
            headers: ["Group class", "Examples", "Directs to", "Rate vs benzene"],
            rows: [
              ["Strongly activating", "–NH₂, –NHR, –NR₂, –OH, –O⁻", "o, p", "much faster"],
              ["Moderately activating", "–OCH₃, –NHCOCH₃", "o, p", "faster"],
              ["Weakly activating", "–CH₃, –C₂H₅, –C₆H₅", "o, p", "slightly faster"],
              ["Weakly deactivating", "–F, –Cl, –Br, –I", "o, p", "slower"],
              ["Deactivating", "–CHO, –COR, –COOH, –COOR, –CN, –SO₃H, –NO₂, –NR₃⁺", "m", "much slower"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: "**Synthesis order rule:** put in first the group whose directing effect you need. For a **meta** product, introduce the meta director first; for **o/p**, introduce the o/p director first. **Friedel–Crafts limits:** no reaction on rings with a strong deactivator (–NO₂, –CN, –COR) or with –NH₂/–NHR/–NR₂ (the N lone pair binds AlCl₃ and the ring becomes deactivated); alkylation can **rearrange** the carbocation and can **over-alkylate**; acylation does neither. **Aromaticity check:** count π electrons only after checking that every ring atom has a p orbital and the ring is planar; 4n π electrons in a planar ring = **antiaromatic**.",
          },
          {
            type: "example",
            title: "KCET / NEET level: aromatic, antiaromatic or non-aromatic?",
            problem: "Classify: (a) cyclopropenyl cation C₃H₃⁺, (b) cyclobutadiene C₄H₄, (c) cyclooctatetraene C₈H₈, (d) pyrrole.",
            steps: [
              "(a) Planar, all three C sp², 2 π electrons = 4n + 2 with n = 0 → aromatic.",
              "(b) Planar, cyclic, conjugated, 4 π electrons = 4n (n = 1) → antiaromatic (very unstable).",
              "(c) 8 π electrons, but the ring puckers into a tub so the p orbitals do not overlap all round → non-aromatic.",
              "(d) Four C=C electrons + the N lone pair = 6 π electrons in a planar ring → aromatic.",
            ],
            answer: "(a) aromatic; (b) antiaromatic; (c) non-aromatic; (d) aromatic.",
          },
          {
            type: "example",
            title: "NEET / JEE Main level: ranking reactivity",
            problem: "Arrange in decreasing order of reactivity towards nitration: benzene, toluene, phenol, chlorobenzene, nitrobenzene.",
            steps: [
              "–OH donates strongly by +R → phenol fastest.",
              "–CH₃ donates weakly by +I and hyperconjugation → toluene faster than benzene.",
              "–Cl: –I outweighs +R → slower than benzene. –NO₂: –R and –I → slowest.",
            ],
            answer: "Phenol > toluene > benzene > chlorobenzene > nitrobenzene",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Bromination (Br₂/FeBr₃) of nitrobenzene gives mainly:",
                options: ["m-Bromonitrobenzene", "o-Bromonitrobenzene", "p-Bromonitrobenzene", "No reaction under any conditions"],
                answer: 0,
                explain: "–NO₂ removes electron density from o and p positions (–R), so the electrophile attacks the relatively richer meta position, slowly.",
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: predicting the products",
            problem: "Give the main nitration products of (a) toluene, (b) chlorobenzene, (c) nitrobenzene (with nitrating mixture at a higher temperature).",
            steps: [
              "(a) –CH₃ is o/p directing: a mixture of o-nitrotoluene and p-nitrotoluene.",
              "(b) –Cl is o/p directing (though deactivating): 1-chloro-4-nitrobenzene (major) and 1-chloro-2-nitrobenzene; para is favoured because ortho is crowded.",
              "(c) –NO₂ is meta directing and deactivating, so harsher conditions are needed: 1,3-dinitrobenzene.",
            ],
            answer: "(a) o- + p-nitrotoluene; (b) p- (major) + o-chloronitrobenzene; (c) m-dinitrobenzene.",
          },
          {
            type: "example",
            title: "JEE Main level: order of steps",
            problem: "Starting from benzene, how would you make (a) m-chloronitrobenzene and (b) p-chloronitrobenzene?",
            steps: [
              "(a) Need the groups meta to each other, so the meta director goes first: nitrate (HNO₃/H₂SO₄) to nitrobenzene, then chlorinate (Cl₂/anhydrous FeCl₃); –NO₂ sends Cl to meta.",
              "(b) Need para, so the o/p director goes first: chlorinate to chlorobenzene, then nitrate; separate the para isomer (major) from the ortho isomer.",
            ],
            answer: "(a) Nitration then chlorination; (b) chlorination then nitration.",
          },
          {
            type: "mistake",
            wrong: "–NH₂ is a strong activator, so aniline undergoes Friedel–Crafts alkylation very easily.",
            right: "Aniline does not undergo Friedel–Crafts reactions. Its basic –NH₂ forms a complex with the Lewis acid AlCl₃, putting a positive charge on N, which strongly deactivates the ring.",
            why: "'Activating group = faster reaction' ignores the catalyst. In Friedel–Crafts, the Lewis base on the ring destroys the catalyst first.",
          },
          {
            type: "mistake",
            wrong: "Cyclooctatetraene has 4n π electrons (8), so it is antiaromatic like cyclobutadiene.",
            right: "Cyclooctatetraene is non-aromatic: it avoids antiaromaticity by folding into a tub shape, so its double bonds are not conjugated round the ring and it reacts like an ordinary alkene.",
            why: "Antiaromaticity needs a planar, fully conjugated ring. A large ring can twist out of the plane; small cyclobutadiene cannot.",
          },
          {
            type: "example",
            title: "JEE Advanced level: Friedel–Crafts surprises",
            problem: "(a) What is the main product when benzene reacts with 1-chloropropane and anhydrous AlCl₃? (b) Suggest a route to n-propylbenzene.",
            steps: [
              "(a) AlCl₃ pulls Cl⁻ from CH₃CH₂CH₂Cl. The developing primary cation rearranges by a 1,2-hydride shift to the secondary isopropyl cation (CH₃)₂CH⁺.",
              "The isopropyl cation substitutes the ring: C₆H₅CH(CH₃)₂, isopropylbenzene (cumene), is the main product.",
              "(b) Acylium ions do not rearrange: Friedel–Crafts acylation with CH₃CH₂COCl/AlCl₃ gives C₆H₅COCH₂CH₃ (propiophenone).",
              "Reduce C=O to CH₂ (Clemmensen: Zn–Hg/conc. HCl, met again in Class 12) to get C₆H₅CH₂CH₂CH₃.",
            ],
            answer: "(a) Isopropylbenzene (cumene); (b) acylation with propanoyl chloride, then Clemmensen reduction.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order from most to least reactive towards electrophilic substitution.",
              items: ["Phenol", "Anisole", "Toluene", "Benzene", "Chlorobenzene", "Nitrobenzene"],
              explain: "–OH and –OCH₃ donate by +R (–OH more strongly), –CH₃ weakly by hyperconjugation; –Cl and –NO₂ withdraw, –NO₂ far more.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Aromatic: planar, cyclic, fully conjugated, 4n + 2 π electrons; antiaromatic: same but 4n; non-aromatic: not planar or not fully conjugated.",
              "Activators (o/p): –NH₂, –OH > –OCH₃, –NHCOCH₃ > alkyl; halogens deactivate but direct o/p; –NO₂, –CN, –CHO, –COOH, –SO₃H deactivate and direct m.",
              "For disubstituted benzenes, introduce first the group whose directing effect gives the wanted orientation.",
              "Friedel–Crafts fails on strongly deactivated rings and on anilines; alkylation rearranges cations (n-propyl → isopropyl), acylation does not.",
            ],
          },
        ],
        flashcards: [
          { front: "Antiaromatic", back: "Planar, cyclic, fully conjugated ring with 4n π electrons, e.g. cyclobutadiene; less stable than an open-chain analogue." },
          { front: "Is cyclooctatetraene aromatic?", back: "No; it is non-aromatic (tub-shaped, not planar)." },
          { front: "Why is chlorobenzene nitrated mainly at para?", back: "Cl directs o/p by +R; the ortho position is more crowded, so para is favoured." },
          { front: "Benzene + 1-chloropropane / AlCl₃", back: "Mainly isopropylbenzene (cumene), because the carbocation rearranges." },
          { front: "Why does aniline not undergo Friedel–Crafts?", back: "–NH₂ (Lewis base) complexes with AlCl₃; the positive N deactivates the ring." },
          { front: "To make m-bromonitrobenzene from benzene …", back: "Nitrate first, then brominate (–NO₂ directs meta)." },
          { front: "Pyrrole's π electrons", back: "6: four from the two C=C and two from the N lone pair, so it is aromatic (and a very weak base)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which species is antiaromatic?",
            options: ["Cyclobutadiene", "Cyclopropenyl cation", "Tropylium cation", "Cyclooctatetraene"],
            answer: 0,
            explain: "Cyclobutadiene is planar and fully conjugated with 4 π electrons (4n). The cations have 2 and 6 π electrons (aromatic); cyclooctatetraene is non-planar (non-aromatic).",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many of these are aromatic: benzene, cyclopentadienyl anion, tropylium cation, cyclooctatetraene, cyclopentadiene?",
            answer: 3,
            explain: "Benzene, C₅H₅⁻ and C₇H₇⁺ (6 π each, planar, fully conjugated). Cyclooctatetraene is tub-shaped; cyclopentadiene has an sp³ CH₂.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which compounds do NOT undergo Friedel–Crafts alkylation under normal conditions?",
            options: ["Nitrobenzene", "Aniline", "Toluene", "Anisole"],
            answers: [0, 1],
            explain: "Nitrobenzene is strongly deactivated (it is even used as a solvent for Friedel–Crafts reactions); aniline binds AlCl₃. Toluene and anisole are activated and react.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many π electrons are present in naphthalene?",
            answer: 10,
            explain: "Five C=C in the resonance structures: 10 π electrons, = 4n + 2 with n = 2.",
          },
          {
            kind: "mcq",
            q: "Benzene reacts with 1-chloro-2-methylpropane, (CH₃)₂CHCH₂Cl, and anhydrous AlCl₃. The main product is:",
            options: ["tert-Butylbenzene", "Isobutylbenzene", "sec-Butylbenzene", "n-Butylbenzene"],
            answer: 0,
            explain: "The primary carbocation (CH₃)₂CHCH₂⁺ rearranges by a 1,2-hydride shift to the tertiary (CH₃)₃C⁺, which then substitutes the ring.",
            difficulty: 3,
            hint: "Look for an H on the carbon next to the developing cation.",
          },
          {
            kind: "mcq",
            q: "Which compound is nitrated fastest?",
            options: ["Anisole", "Toluene", "Benzene", "Chlorobenzene"],
            answer: 0,
            explain: "–OCH₃ activates the ring strongly by +R; –CH₃ only weakly; –Cl deactivates.",
          },
          {
            kind: "mcq",
            q: "Which substituent is ortho/para directing but deactivating?",
            options: ["–Br", "–CH₃", "–NO₂", "–OH"],
            answer: 0,
            explain: "Halogens: –I (deactivating) is stronger than +R, but +R still decides orientation (o/p).",
          },
          {
            kind: "mcq",
            q: "The correct sequence to prepare p-nitrotoluene from benzene is:",
            options: [
              "CH₃Cl/AlCl₃, then HNO₃/H₂SO₄ (separate para)",
              "HNO₃/H₂SO₄, then CH₃Cl/AlCl₃",
              "HNO₃/H₂SO₄ only",
              "CH₃Cl/AlCl₃ only",
            ],
            answer: 0,
            explain: "Methyl is o/p directing, so put it in first, then nitrate. Nitrating first would block Friedel–Crafts (nitrobenzene does not react) and would direct meta anyway.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Organic Chemistry – Some Basic Principles and Techniques": "c11-che-goc",
  "11:Organic Chemistry: Basic Principles and Techniques": ["c11-che-goc"],
  "11:Hydrocarbons": "c11-che-hydrocarbons",
};
