import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/*
 * Class 12 Chemistry — Alcohols, Phenols and Ethers; Aldehydes, Ketones and Carboxylic Acids;
 * Amines; Biomolecules. Original exam-style questions (JEE Main / Advanced, NEET, KCET, COMEDK).
 * `answer` is the 0-based option index (mcq) or the value (numeric); `answers` for multi-correct.
 */

const t = String.raw;

type DistOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type Item = DistOmit<ExamQuestion, "id" | "subject" | "chapter" | "grade">;

/** Board / KCET / COMEDK level (also fine for NEET & JEE Main warm-up). */
const B: ExamId[] = ["NEET", "JEE", "KCET", "COMEDK"];
/** JEE Main / NEET level. */
const M: ExamId[] = ["NEET", "JEE", "COMEDK"];
/** JEE Main numerical. */
const N: ExamId[] = ["JEE"];
/** JEE Main + Advanced. */
const AJ: ExamId[] = ["JEE", "JEE_ADV"];
/** JEE Advanced only (multi-correct). */
const A: ExamId[] = ["JEE_ADV"];

function build(chapter: string, no: string, items: Item[]): ExamQuestion[] {
  return items.map(
    (it, i) =>
      ({
        ...it,
        id: `che12-3-${no}-${String(i + 1).padStart(3, "0")}`,
        subject: "chemistry",
        chapter,
        grade: "12",
      }) as ExamQuestion,
  );
}

/* ================================================================== */
/* Chapter 7 — Alcohols, Phenols and Ethers                            */
/* ================================================================== */

const CH7 = "Alcohols, Phenols and Ethers";

const ch7: Item[] = [
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 45,
    q: "The IUPAC name of (CH₃)₂CH–CH₂–CH(OH)–CH₃ is:",
    options: ["2-Methylpentan-4-ol", "4-Methylpentan-2-ol", "1,3-Dimethylbutan-1-ol", "Isohexan-2-ol"],
    answer: 1,
    explain: "The longest chain containing the C bearing –OH has 5 carbons. Number from the end nearer to –OH: OH on C-2, methyl on C-4 → 4-methylpentan-2-ol. '2-Methylpentan-4-ol' numbers from the wrong end (the OH must get the lowest locant), and '1,3-dimethylbutan-1-ol' does not choose the longest chain.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Which of the following is a secondary (2°) alcohol?",
    options: ["(CH₃)₃C–OH", "C₆H₅CH₂OH", "CH₃CH₂CH₂OH", "CH₃CH(OH)CH₂CH₃"],
    answer: 3,
    explain: "In butan-2-ol the carbinol carbon (C–OH) is attached to two other carbons → 2°. tert-Butyl alcohol is 3°; benzyl alcohol and propan-1-ol are 1° (benzyl alcohol is a 1° benzylic alcohol).",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "In the cumene process, cumene hydroperoxide is treated with dilute acid. Besides phenol, the other product is:",
    options: ["Acetaldehyde", "Benzaldehyde", "Acetone", "Propan-2-ol"],
    answer: 2,
    explain: "Cumene (isopropylbenzene) + O₂ → cumene hydroperoxide, C₆H₅C(CH₃)₂–O–OH. Acid-catalysed rearrangement gives phenol + acetone (CH₃COCH₃). The process is valued precisely because acetone is a useful co-product.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Propene reacts with water in the presence of dilute H₂SO₄. The major product is:",
    options: ["Propan-1-ol", "Propanal", "Propan-2-ol", "Propane-1,2-diol"],
    answer: 2,
    explain: "Acid-catalysed hydration follows Markovnikov's rule: H⁺ adds to the CH₂ end to give the more stable 2° carbocation CH₃C⁺HCH₃, which is captured by water → propan-2-ol. Propan-1-ol is the hydroboration–oxidation (anti-Markovnikov) product.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Propene is treated with B₂H₆ followed by H₂O₂ / NaOH. The product is:",
    options: ["Propan-1-ol", "Propan-2-ol", "Propanone", "Propanoic acid"],
    answer: 0,
    explain: "Hydroboration–oxidation adds the boron to the less substituted carbon; oxidation replaces B by OH with retention. Net result: anti-Markovnikov addition of water → CH₃CH₂CH₂OH. No carbocation forms, so no rearrangement.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Which alcohol gives turbidity immediately with Lucas reagent (conc. HCl + anhydrous ZnCl₂) at room temperature?",
    options: ["Butan-1-ol", "Butan-2-ol", "2-Methylpropan-1-ol", "2-Methylpropan-2-ol"],
    answer: 3,
    explain: "The Lucas test forms the alkyl chloride (insoluble → turbidity) via a carbocation. 3° alcohols (2-methylpropan-2-ol) react at once, 2° in about 5 minutes, and 1° alcohols do not react appreciably at room temperature.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Industrially, methanol ('wood spirit') is now made by:",
    options: [
      "Fermentation of molasses with yeast",
      "Catalytic hydrogenation of CO (CO + 2H₂) over ZnO–Cr₂O₃ at high pressure",
      "Hydration of ethene with dilute H₂SO₄",
      "Destructive distillation of coal tar",
    ],
    answer: 1,
    explain: "CO + 2H₂ → CH₃OH over ZnO–Cr₂O₃ at 573–673 K and 200–300 atm. 'Wood spirit' refers to its old source, the destructive distillation of wood (not coal tar). Fermentation of molasses gives ethanol.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Phenol is shaken with excess bromine water. The white precipitate formed is:",
    options: ["2-Bromophenol", "4-Bromophenol", "2,4-Dibromophenol", "2,4,6-Tribromophenol"],
    answer: 3,
    explain: "In water phenol partly ionises to the strongly activating phenoxide ion, and the polar solvent helps polarise Br₂, so all ortho/para positions are brominated → 2,4,6-tribromophenol (white ppt). Mono-bromination needs a non-polar solvent (CS₂/CHCl₃) at low temperature.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Sodium phenoxide is heated with CO₂ at about 400 K under 4–7 atm and the product is acidified. This is Kolbe's reaction and the product is:",
    options: ["Benzoic acid", "Salicylic acid (2-hydroxybenzoic acid)", "4-Hydroxybenzoic acid", "Salicylaldehyde"],
    answer: 1,
    explain: "Phenoxide is a strong enough nucleophile to attack the weak electrophile CO₂, mainly at the ortho position → sodium salicylate → salicylic acid on acidification. Salicylaldehyde comes from the Reimer–Tiemann reaction (CHCl₃/NaOH).",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Phenol on treatment with CHCl₃ and aqueous NaOH, followed by acidification, gives mainly:",
    options: ["Salicylaldehyde", "Salicylic acid", "Benzaldehyde", "Chlorobenzene"],
    answer: 0,
    explain: "Reimer–Tiemann reaction: a –CHCl₂ group is introduced ortho to –O⁻ and hydrolysed by alkali to –CHO → 2-hydroxybenzaldehyde (salicylaldehyde). With CCl₄ instead of CHCl₃ the product is salicylic acid.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Ethanol (b.p. 351 K) boils far above its isomer methoxymethane (b.p. 248 K) because:",
    options: [
      "Ethanol has a higher molar mass",
      "Ethanol molecules are associated by intermolecular hydrogen bonding",
      "Methoxymethane has a larger dipole moment",
      "Methoxymethane forms intramolecular hydrogen bonds",
    ],
    answer: 1,
    explain: "Both are C₂H₆O (same molar mass). Ethanol has an O–H bond and forms intermolecular H-bonds; extra energy is needed to break them. Ethers have no O–H so their molecules cannot H-bond to each other.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 35,
    q: "Phenol is heated with zinc dust. The organic product is:",
    options: ["Cyclohexanol", "Benzene", "Diphenyl ether", "Zinc phenoxide only"],
    answer: 1,
    explain: "Zinc dust removes the oxygen: C₆H₅OH + Zn → C₆H₆ + ZnO. Cyclohexanol would need catalytic hydrogenation (H₂/Ni) of the ring.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Propan-1-ol is oxidised with pyridinium chlorochromate (PCC) in CH₂Cl₂. The product is:",
    options: ["Propanoic acid", "Propanone", "Propanal", "Propene"],
    answer: 2,
    explain: "PCC is a mild, anhydrous oxidant that stops at the aldehyde stage for 1° alcohols → CH₃CH₂CHO. Acidified K₂Cr₂O₇ or KMnO₄ would go on to propanoic acid. Propanone would need a 2° alcohol (propan-2-ol).",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Anisole (methoxybenzene) is heated with HI. The products are:",
    options: ["Iodobenzene and methanol", "Phenol and iodomethane", "Benzene and CH₃OI", "4-Iodoanisole and water"],
    answer: 1,
    explain: "Protonated anisole is attacked by I⁻ at the methyl carbon (SN2). The aryl C–O bond has partial double-bond character (resonance) and an sp² carbon cannot undergo SN2, so phenol and CH₃I form. Iodobenzene never forms this way.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Ethanol is heated with conc. H₂SO₄. At 443 K the main product is X; at 413 K (with excess ethanol) it is Y. X and Y are:",
    options: [
      "X = ethene, Y = ethoxyethane",
      "X = ethoxyethane, Y = ethene",
      "X = ethanal, Y = ethene",
      "X = ethyl hydrogen sulphate, Y = ethanal",
    ],
    answer: 0,
    explain: "Higher temperature favours elimination (intramolecular dehydration) → CH₂=CH₂ at 443 K. At 413 K a second ethanol molecule attacks the protonated alcohol (SN2) → C₂H₅OC₂H₅. Remember: 'higher T, alkene; lower T, ether'.",
  },
  {
    kind: "numeric", exams: N, difficulty: 1, idealTime: 60,
    q: "4.6 g of ethanol reacts with excess sodium metal. The volume of hydrogen gas evolved at STP (in litres, molar volume 22.4 L) is ____.",
    answer: 1.12, tolerance: 0.02, unit: "L",
    explain: "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂. Moles of ethanol = 4.6/46 = 0.1 mol → H₂ = 0.05 mol → 0.05 × 22.4 = 1.12 L. A common slip is taking 1 mol H₂ per mol alcohol (2.24 L).",
  },
  /* ---------------- difficulty 2 ---------------- */
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 60,
    q: "Arrange in decreasing order of acidic strength: (I) ethanol (II) phenol (III) 4-nitrophenol (IV) 4-methylphenol (p-cresol).",
    options: ["III > II > IV > I", "II > III > IV > I", "III > IV > II > I", "I > IV > II > III"],
    answer: 0,
    hint: "Ask which substituent stabilises the phenoxide ion and which destabilises it.",
    explain: "Phenoxide is resonance-stabilised, so phenols ≫ ethanol. –NO₂ (–R, –I) at para delocalises the negative charge further → 4-nitrophenol (pKa ≈ 7.1) is strongest. –CH₃ (+I, hyperconjugation) destabilises the phenoxide → p-cresol (pKa ≈ 10.2) is slightly weaker than phenol (10.0). Ethanol (pKa ≈ 15.9) is weakest.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 75,
    q: "3,3-Dimethylbutan-2-ol, (CH₃)₃C–CH(OH)–CH₃, is heated with conc. H₂SO₄. The major alkene formed is:",
    options: ["3,3-Dimethylbut-1-ene", "2,3-Dimethylbut-1-ene", "2,3-Dimethylbut-2-ene", "2-Methylpent-2-ene"],
    answer: 2,
    hint: "The first carbocation is secondary. Can a neighbouring group shift to make it tertiary?",
    explain: "Loss of water gives the 2° cation (CH₃)₃C–C⁺H–CH₃. A 1,2-methyl shift gives the 3° cation (CH₃)₂C⁺–CH(CH₃)₂. Loss of H⁺ to form the most substituted (Saytzeff) alkene gives the tetrasubstituted (CH₃)₂C=C(CH₃)₂, 2,3-dimethylbut-2-ene. 3,3-Dimethylbut-1-ene is the product if no rearrangement occurred; 2,3-dimethylbut-1-ene is the minor Hofmann-type alkene.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 60,
    q: "The best Williamson-synthesis route to 2-methoxy-2-methylpropane (tert-butyl methyl ether) is:",
    options: [
      "(CH₃)₃C–Br + CH₃ONa",
      "(CH₃)₃C–ONa + CH₃–Br",
      "(CH₃)₃C–OH + CH₃OH, conc. H₂SO₄ at 413 K",
      "(CH₃)₃C–Cl + CH₃OH in water",
    ],
    answer: 1,
    hint: "Williamson synthesis is SN2. Which carbon should the alkoxide attack?",
    explain: "The alkyl halide must be methyl or 1° because the alkoxide attacks by SN2. With a 3° halide the strongly basic CH₃O⁻ causes E2 elimination → 2-methylpropene. Acid dehydration of a 3° alcohol also gives mainly the alkene, not the ether.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 60,
    q: "2-Methoxy-2-methylpropane is heated with one equivalent of HI. The products are:",
    options: [
      "CH₃I and (CH₃)₃C–OH",
      "(CH₃)₃C–I and CH₃OH",
      "CH₃I and (CH₃)₃C–I only",
      "(CH₃)₂C=CH₂ and CH₃I",
    ],
    answer: 1,
    hint: "Which C–O bond can break to give a stable carbocation?",
    explain: "After protonation, the C–O bond to the tertiary carbon breaks to give the stable (CH₃)₃C⁺ (SN1); I⁻ captures it → (CH₃)₃C–I + CH₃OH. With primary/methyl groups only (e.g. CH₃OC₂H₅) cleavage is SN2 and I⁻ attacks the smaller methyl group, giving CH₃I — that is the trap in option A.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 60,
    q: "Statement I: In the nitration of phenol with dilute HNO₃ at 298 K, o-nitrophenol can be separated from p-nitrophenol by steam distillation.\nStatement II: o-Nitrophenol is steam volatile because of intramolecular hydrogen bonding, while p-nitrophenol is associated by intermolecular hydrogen bonding.",
    options: [
      "Both statements are true and II is the correct explanation of I",
      "Both statements are true but II is not the correct explanation of I",
      "Statement I is true, Statement II is false",
      "Statement I is false, Statement II is true",
    ],
    answer: 0,
    hint: "Think of which isomer's H-bond is 'internal'.",
    explain: "In o-nitrophenol the –OH H-bonds to the adjacent –NO₂ oxygen (chelation), so molecules are not associated with each other or with water → lower b.p., steam volatile. p-Nitrophenol forms intermolecular H-bonds → higher b.p., not steam volatile. Statement II directly explains Statement I.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Assertion (A): Alcohols react with sodium metal to liberate hydrogen.\nReason (R): Alcohols are stronger acids than water.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 2,
    explain: "A is true: 2ROH + 2Na → 2RONa + H₂ (alcohols are Brønsted acids). R is false: alkyl groups (+I) destabilise the alkoxide, so alcohols are slightly weaker acids than water — alkoxides are stronger bases than OH⁻ (RO⁻ + H₂O → ROH + OH⁻).",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 70,
    q: "Match the reaction (List I) with its reagent (List II).\nList I: (P) Kolbe's reaction (Q) Reimer–Tiemann reaction (R) Williamson synthesis (S) Lucas test\nList II: (1) CHCl₃ + aq. NaOH (2) R–X + R′–ONa (3) conc. HCl + anhydrous ZnCl₂ (4) NaOH, CO₂ at 400 K, 4–7 atm",
    options: [
      "P-4, Q-1, R-2, S-3",
      "P-1, Q-4, R-2, S-3",
      "P-4, Q-1, R-3, S-2",
      "P-2, Q-1, R-4, S-3",
    ],
    answer: 0,
    explain: "Kolbe: phenoxide + CO₂ (4). Reimer–Tiemann: CHCl₃/NaOH → dichlorocarbene (1). Williamson: alkyl halide + alkoxide (2). Lucas test: conc. HCl / ZnCl₂ (3). Swapping Kolbe and Reimer–Tiemann (option B) is the usual confusion.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 75,
    q: "Which combination will NOT give 2-methylbutan-2-ol, (CH₃)₂C(OH)CH₂CH₃, after acidic work-up?",
    options: [
      "CH₃COCH₃ + CH₃CH₂MgBr",
      "CH₃COCH₂CH₃ + CH₃MgBr",
      "CH₃CH₂COOC₂H₅ + excess CH₃MgBr",
      "CH₃CH₂CH₂CHO + CH₃MgBr",
    ],
    answer: 3,
    hint: "Count the groups on the carbinol carbon: two CH₃ and one C₂H₅.",
    explain: "The target is a 3° alcohol with groups CH₃, CH₃, C₂H₅. Acetone + EtMgBr and butanone + MeMgBr both supply these. An ester reacts with 2 equivalents of RMgX: ethyl propanoate + 2CH₃MgBr → C₂H₅C(OH)(CH₃)₂ (same product). Butanal + CH₃MgBr gives a 2° alcohol, pentan-2-ol.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Cinnamaldehyde, C₆H₅CH=CH–CHO, is to be converted into C₆H₅CH=CH–CH₂OH. The most suitable reagent is:",
    options: ["H₂ / Pd", "NaBH₄", "Zn-Hg / conc. HCl", "Alkaline KMnO₄"],
    answer: 1,
    explain: "NaBH₄ delivers hydride to the polar C=O but leaves the non-polar C=C alone → cinnamyl alcohol. H₂/Pd also reduces the C=C. Clemmensen (Zn-Hg/HCl) reduces C=O to CH₂. KMnO₄ is an oxidant.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 60,
    q: "Ethanoic acid is esterified with ethanol labelled with ¹⁸O (C₂H₅–¹⁸OH) in the presence of conc. H₂SO₄. The ¹⁸O is found in:",
    options: ["Water only", "The ester only", "Both the ester and water equally", "Unreacted acid only"],
    answer: 1,
    hint: "In acid-catalysed esterification, which bond of the acid breaks?",
    explain: "The alcohol oxygen attacks the protonated carbonyl carbon of the acid; the –OH lost as water comes from the acid (acyl–oxygen cleavage). So the label stays in CH₃CO–¹⁸O–C₂H₅ and the water contains ordinary oxygen.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Vapours of 2-methylpropan-2-ol are passed over heated copper at 573 K. The product is:",
    options: ["2-Methylpropanal", "Butan-2-one", "2-Methylpropene", "No reaction"],
    answer: 2,
    explain: "Cu at 573 K dehydrogenates 1° alcohols to aldehydes and 2° alcohols to ketones. A 3° alcohol has no H on the carbinol carbon, so it undergoes dehydration instead → (CH₃)₂C=CH₂. This is a classic test to distinguish 1°, 2° and 3° alcohols.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 55,
    q: "Which ether cannot be made in good yield by any Williamson synthesis?",
    options: ["CH₃–O–C₂H₅", "C₆H₅–O–CH₃", "(CH₃)₃C–O–C(CH₃)₃", "C₆H₅CH₂–O–CH₃"],
    answer: 2,
    explain: "Williamson needs at least one alkyl halide that is methyl/1° (or benzyl). For di-tert-butyl ether both partners would be 3°: (CH₃)₃C–Br + (CH₃)₃CO⁻ gives only elimination (2-methylpropene). Anisole is made from C₆H₅ONa + CH₃I; benzyl methyl ether from C₆H₅CH₂Cl + CH₃ONa.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Anisole undergoes Friedel–Crafts acetylation (CH₃COCl / anhydrous AlCl₃). The major product is:",
    options: ["3-Methoxyacetophenone", "4-Methoxyacetophenone", "Phenyl acetate", "Acetophenone + CH₃Cl"],
    answer: 1,
    explain: "–OCH₃ activates the ring (+R) and directs ortho/para; the para product dominates for steric reasons → 4-methoxyacetophenone (with some 2-isomer). The meta product is not favoured; phenyl acetate is an O-acylation product of phenol, not anisole.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 55,
    q: "Picric acid is best prepared from phenol by:",
    options: [
      "Direct treatment with conc. HNO₃",
      "Treatment with dilute HNO₃ at 298 K",
      "Sulphonation with conc. H₂SO₄ followed by treatment with conc. HNO₃",
      "Reaction with NaNO₂ / HCl at 273 K",
    ],
    answer: 2,
    explain: "Phenol is so activated that conc. HNO₃ oxidises much of it to tarry products. Converting it first to the sulphonic acid (deactivating –SO₃H groups) and then nitrating replaces the –SO₃H groups by –NO₂ → 2,4,6-trinitrophenol in good yield. Dilute HNO₃ gives only o/p-nitrophenol.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "The correct order of acidic strength of the following in the liquid / solution phase is:",
    options: [
      "CH₃OH > 1° alcohol > 2° alcohol > 3° alcohol",
      "3° alcohol > 2° alcohol > 1° alcohol > CH₃OH",
      "2° alcohol > 1° alcohol > 3° alcohol > CH₃OH",
      "All alcohols have equal acidity",
    ],
    answer: 0,
    explain: "Each alkyl group (+I) pushes electron density onto O, destabilising the alkoxide; bulkier alkoxides are also less well solvated. So acidity falls from CH₃OH to 3° alcohols. (In the gas phase the order reverses because of polarisability — not asked at NCERT level.)",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 45,
    q: "In the Reimer–Tiemann reaction the electrophile that attacks the phenoxide ring is:",
    options: ["CHCl₂⁺", "Cl⁺", ":CCl₂ (dichlorocarbene)", "CCl₃⁻"],
    answer: 2,
    explain: "OH⁻ removes H⁺ from CHCl₃ to give CCl₃⁻, which loses Cl⁻ to form the neutral, electron-deficient dichlorocarbene :CCl₂. This attacks the ortho position of phenoxide; the –CHCl₂ group is then hydrolysed to –CHO. CCl₃⁻ is an intermediate, not the electrophile.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 55,
    q: "Phenol → (i) NaOH (ii) CO₂, 400 K, 4–7 atm (iii) H⁺ → X; X + (CH₃CO)₂O / H⁺ → Y. Y is:",
    options: ["Methyl salicylate (oil of wintergreen)", "Phenyl acetate", "Acetylsalicylic acid (aspirin)", "4-Acetylphenol"],
    answer: 2,
    explain: "Kolbe's reaction gives salicylic acid (X). Acetic anhydride acetylates the phenolic –OH → 2-acetoxybenzoic acid, aspirin (Y). Methyl salicylate would need methanol/H⁺ (esterifying the –COOH instead).",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 45,
    q: "Phenol reacts with bromine in CS₂ at 273 K. The major product is:",
    options: ["2,4,6-Tribromophenol", "3-Bromophenol", "4-Bromophenol", "Bromobenzene"],
    answer: 2,
    explain: "In a non-polar solvent at low temperature phenol is not ionised and Br₂ is not strongly polarised, so only monobromination occurs at the o/p positions; the para isomer is major for steric reasons. Bromine water would give the tribromo compound.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 55,
    q: "Which alcohol is dehydrated most readily by conc. H₂SO₄?",
    options: ["Ethanol", "Propan-2-ol", "2-Methylpropan-2-ol", "2-Phenylpropan-2-ol"],
    answer: 3,
    hint: "Ease of dehydration follows the stability of the carbocation formed.",
    explain: "Acid dehydration of 2°/3° alcohols goes through a carbocation (E1). 2-Phenylpropan-2-ol gives a carbocation that is both tertiary and benzylic (resonance with the ring) and the alkene formed is conjugated with the ring → fastest. Order: 3° benzylic > 3° > 2° > 1°.",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 75,
    q: "The total number of structural isomers (alcohols and ethers together) with molecular formula C₄H₁₀O is ____.",
    answer: 7,
    hint: "Alcohols: put –OH on each distinct carbon of the two C₄ skeletons. Ethers: split C₄ across the oxygen.",
    explain: "Alcohols (4): butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol. Ethers (3): 1-methoxypropane, 2-methoxypropane, ethoxyethane. Total = 7 (stereoisomers not counted).",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 75,
    q: "How many of the following give a positive iodoform test (I₂ / NaOH)?\nethanol, methanol, propan-2-ol, propan-1-ol, butan-2-ol, 2-methylpropan-2-ol, 1-phenylethanol, pentan-3-ol",
    answer: 4,
    hint: "Look for the CH₃–CH(OH)– unit.",
    explain: "The iodoform test needs CH₃CH(OH)– (oxidised by I₂/NaOH to CH₃CO–). Positive: ethanol, propan-2-ol, butan-2-ol, 1-phenylethanol = 4. Methanol and propan-1-ol lack it; tert-butanol cannot be oxidised; pentan-3-ol has ethyl groups on the carbinol carbon.",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 75,
    q: "9.4 g of phenol is treated with excess bromine water. The mass (in g) of 2,4,6-tribromophenol formed, assuming complete conversion, is ____. (C = 12, H = 1, O = 16, Br = 80)",
    answer: 33.1, tolerance: 0.2, unit: "g",
    explain: "C₆H₅OH (M = 94) → C₆H₂Br₃OH. M(tribromophenol) = 6(12) + 3(1) + 16 + 3(80) = 331 g/mol. Moles of phenol = 9.4/94 = 0.1 → product 0.1 × 331 = 33.1 g (consuming 0.3 mol Br₂).",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 80,
    q: "0.37 g of a saturated monohydric alcohol reacts with excess CH₃MgI to liberate 112 mL of methane at STP. The molar mass of the alcohol (in g mol⁻¹) is ____.",
    answer: 74,
    explain: "ROH + CH₃MgI → CH₄ + ROMgI, 1 mol CH₄ per –OH (Zerewitinoff method). Moles CH₄ = 112/22400 = 0.005 mol = moles of alcohol. M = 0.37/0.005 = 74 g/mol → C₄H₉OH (a butanol).",
  },
  /* ---------------- difficulty 3 ---------------- */
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 120,
    q: "An alcohol A (C₅H₁₂O) gives turbidity with Lucas reagent in about 5 minutes and a yellow precipitate with I₂/NaOH. On heating with conc. H₂SO₄ it gives an alkene whose ozonolysis yields acetone and acetaldehyde. A is:",
    options: ["Pentan-2-ol", "3-Methylbutan-2-ol", "2-Methylbutan-2-ol", "3-Methylbutan-1-ol"],
    answer: 1,
    hint: "Work back from the ozonolysis products to the alkene, then find a 2° alcohol with CH₃CH(OH)– that gives it.",
    explain: "Acetone + acetaldehyde come from (CH₃)₂C=CHCH₃ (2-methylbut-2-ene). '5 minutes' → 2° alcohol; iodoform → CH₃CH(OH)–. 3-Methylbutan-2-ol, (CH₃)₂CH–CH(OH)–CH₃, fits: Saytzeff dehydration (also via hydride shift to the 3° cation) gives 2-methylbut-2-ene. Pentan-2-ol gives pent-2-ene → acetaldehyde + propanal. 2-Methylbutan-2-ol is 3° (immediate turbidity, no iodoform); 3-methylbutan-1-ol is 1°.",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 100,
    q: "2,2-Dimethylpropan-1-ol (neopentyl alcohol) is heated with conc. H₂SO₄. The major product is:",
    options: ["2,2-Dimethylpropene", "2-Methylbut-1-ene", "2-Methylbut-2-ene", "3-Methylbut-1-ene"],
    answer: 2,
    hint: "The carbinol carbon's neighbour has no hydrogen. What must happen before an alkene can form?",
    explain: "(CH₃)₃C–CH₂OH has no β-hydrogen on the quaternary carbon, so simple elimination is impossible ('2,2-dimethylpropene' cannot exist). Loss of water is assisted by a 1,2-methyl shift giving the 3° cation (CH₃)₂C⁺–CH₂CH₃, which loses H⁺ to give the more substituted 2-methylbut-2-ene (major) and some 2-methylbut-1-ene (minor).",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 100,
    q: "1-Methylcyclohexene is treated with BH₃·THF, then H₂O₂ / NaOH. The product is:",
    options: ["1-Methylcyclohexan-1-ol", "cis-2-Methylcyclohexan-1-ol", "trans-2-Methylcyclohexan-1-ol", "Cyclohexylmethanol"],
    answer: 2,
    hint: "Hydroboration is anti-Markovnikov and a syn addition.",
    explain: "B adds to the less substituted ring carbon (C-2) and H to C-1, both from the same face (syn). Oxidation replaces B by OH with retention. So the new H on C-1 and the OH on C-2 are cis, which makes the CH₃ (on C-1) and OH trans → trans-2-methylcyclohexanol (racemic). 1-Methylcyclohexanol is the Markovnikov (acid-hydration) product.",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 90,
    q: "4-Methylphenol (p-cresol) is subjected to the Reimer–Tiemann reaction (CHCl₃, aq. NaOH, then H⁺). The major product is:",
    options: [
      "4-Hydroxy-3-methylbenzaldehyde",
      "2-Hydroxy-5-methylbenzaldehyde",
      "4-Hydroxybenzaldehyde",
      "2-Hydroxy-4-methylbenzoic acid",
    ],
    answer: 1,
    explain: "The para position is blocked by CH₃, so the –CHO enters ortho to –O⁻. Numbering the aldehyde as C-1: OH at C-2 and CH₃ at C-5 → 2-hydroxy-5-methylbenzaldehyde. Option A puts the CHO para to OH (impossible, CH₃ is there); option D is a carboxylic acid (CCl₄ variant).",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 90,
    q: "Arrange in decreasing order of acidity: (I) phenol (II) 2-nitrophenol (III) 3-nitrophenol (IV) 4-nitrophenol.",
    options: ["IV > II > III > I", "II > IV > III > I", "III > IV > II > I", "IV > III > II > I"],
    answer: 0,
    hint: "–NO₂ withdraws by resonance only from ortho/para positions; intramolecular H-bonding matters for the ortho isomer.",
    explain: "o- and p-NO₂ stabilise phenoxide by both –R and –I; m-NO₂ only by –I. So o, p > m > phenol. The ortho isomer is slightly weaker than para because intramolecular H-bonding holds the proton. pKa: 4-nitro 7.1 < 2-nitro 7.2 < 3-nitro 8.3 < phenol 10.0.",
  },
  {
    kind: "numeric", exams: AJ, difficulty: 3, idealTime: 90,
    q: "Counting stereoisomers separately, the number of alcohols with molecular formula C₄H₁₀O is ____.",
    answer: 5,
    explain: "Structural alcohols: butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol (4). Only butan-2-ol has a stereocentre (C-2 bears H, OH, CH₃, C₂H₅) → R and S. Total = 4 + 1 = 5.",
  },
  {
    kind: "numeric", exams: AJ, difficulty: 3, idealTime: 90,
    q: "Periodic acid cleaves the C–C bond between adjacent carbons bearing –OH groups (one HIO₄ per C–C bond cleaved). The number of moles of HIO₄ consumed by one mole of glycerol (propane-1,2,3-triol) is ____.",
    answer: 2,
    explain: "Glycerol HOCH₂–CH(OH)–CH₂OH has two C–C bonds, each between carbons carrying OH. Both are cleaved: 2 HIO₄ → 2 HCHO + 1 HCOOH (the middle carbon ends up as formic acid).",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 100,
    q: "Which of the following give phenol as one of the products?",
    options: [
      "Cumene hydroperoxide + dilute H₂SO₄",
      "Anisole + excess HI, heat",
      "Benzenediazonium chloride warmed with water",
      "Chlorobenzene + aqueous NaOH at 298 K",
    ],
    answers: [0, 1, 2],
    explain: "A: acid rearrangement → phenol + acetone. B: SN2 at CH₃ → phenol + CH₃I (phenol is not converted further, because the aryl C–O bond resists substitution). C: ArN₂⁺ + H₂O → ArOH + N₂ + H⁺. D: aryl halides are inert to aqueous NaOH at room temperature — the Dow process needs NaOH at 623 K and 300 atm.",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 100,
    q: "Which statements about ethers are correct?",
    options: [
      "Diethyl ether slowly forms explosive peroxides when stored in air and light",
      "Anisole reacts with HI to give iodobenzene and methanol",
      "The miscibility of ethers with water resembles that of alcohols of similar molar mass",
      "Ethers boil higher than isomeric alcohols because of their dipole moment",
    ],
    answers: [0, 2],
    explain: "A true: autoxidation gives hydroperoxides — never distil ether to dryness. B false: the products are phenol and CH₃I. C true: the ether O accepts H-bonds from water (ethoxyethane and butan-1-ol have similar solubility, ~7–8 g per 100 mL). D false: ethers cannot H-bond with each other, so they boil much lower than isomeric alcohols.",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 90,
    q: "Which of the following are more acidic than phenol?",
    options: ["4-Nitrophenol", "4-Methylphenol", "4-Chlorophenol", "4-Methoxyphenol"],
    answers: [0, 2],
    explain: "Electron-withdrawing groups stabilise phenoxide. 4-NO₂ (pKa 7.1) and 4-Cl (–I outweighs weak +R; pKa ≈ 9.4) are stronger acids than phenol (10.0). 4-CH₃ (+I) and 4-OCH₃ (+R dominates; pKa ≈ 10.2) are weaker.",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 100,
    q: "Which of the following give a tertiary alcohol (after aqueous acidic work-up where needed)?",
    options: [
      "Acetone + CH₃MgBr",
      "Ethyl acetate + excess CH₃MgBr",
      "Acetaldehyde + CH₃MgBr",
      "2-Methylpropene + H₂O / dilute H₂SO₄",
    ],
    answers: [0, 1, 3],
    explain: "A: ketone + RMgX → 3° alcohol, (CH₃)₃COH. B: ester + 2RMgX → ketone intermediate → 3° alcohol, (CH₃)₃COH. C: aldehyde (other than HCHO) + RMgX → 2° alcohol (propan-2-ol). D: Markovnikov hydration through the 3° cation → (CH₃)₃COH.",
  },
];

/* ================================================================== */
/* Chapter 8 — Aldehydes, Ketones and Carboxylic Acids                 */
/* ================================================================== */

const CH8 = "Aldehydes, Ketones and Carboxylic Acids";

const ch8: Item[] = [
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "An acyl chloride is converted into an aldehyde by hydrogen over palladium supported on barium sulphate (poisoned with sulphur / quinoline). This reaction is called:",
    options: ["Stephen reaction", "Rosenmund reduction", "Etard reaction", "Clemmensen reduction"],
    answer: 1,
    explain: "Rosenmund reduction: RCOCl + H₂ → RCHO + HCl over Pd–BaSO₄. The catalyst is poisoned so the aldehyde is not reduced further to the alcohol. Stephen reaction starts from a nitrile.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Ethanenitrile is reduced with SnCl₂ / HCl and the product is hydrolysed. The final product is:",
    options: ["Ethanamine", "Ethanal", "Ethanoic acid", "Ethanol"],
    answer: 1,
    explain: "Stephen reaction: RC≡N + SnCl₂/HCl → imine hydrochloride RCH=NH·HCl → H₃O⁺ → RCHO. So CH₃CN gives CH₃CHO. Complete reduction (LiAlH₄, Na/C₂H₅OH) would give ethanamine; hydrolysis without reduction gives ethanoic acid.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Toluene is treated with chromyl chloride (CrO₂Cl₂) in CS₂ and the complex is hydrolysed. The product is:",
    options: ["Benzoic acid", "Benzyl alcohol", "Benzaldehyde", "Benzyl chloride"],
    answer: 2,
    explain: "Etard reaction: CrO₂Cl₂ oxidises the methyl group to a chromium complex that hydrolyses to C₆H₅CHO. Strong oxidants (KMnO₄) would take toluene all the way to benzoic acid.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 35,
    q: "Which reagent distinguishes propanal from propanone?",
    options: ["2,4-Dinitrophenylhydrazine", "Tollens' reagent", "NaHSO₃ (saturated)", "Hydroxylamine"],
    answer: 1,
    explain: "Aldehydes are easily oxidised: propanal reduces ammoniacal AgNO₃ to a silver mirror; propanone does not. Both carbonyls react with 2,4-DNP, NH₂OH and NaHSO₃, so those cannot distinguish them.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Which of the following does NOT give a red precipitate with Fehling's solution?",
    options: ["Ethanal", "Methanal", "Propanal", "Benzaldehyde"],
    answer: 3,
    explain: "Fehling's test (Cu²⁺ → Cu₂O, red) is given by aliphatic aldehydes. Aromatic aldehydes such as benzaldehyde do not respond (though they do give Tollens' test).",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 35,
    q: "Acetophenone is heated with zinc amalgam and concentrated HCl. The product is:",
    options: ["1-Phenylethanol", "Ethylbenzene", "Styrene", "Benzoic acid"],
    answer: 1,
    explain: "Clemmensen reduction converts >C=O into >CH₂: C₆H₅COCH₃ → C₆H₅CH₂CH₃. Reduction to the alcohol (1-phenylethanol) needs NaBH₄ or LiAlH₄.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "The IUPAC name of CH₃CH₂–CO–CH(CH₃)₂ is:",
    options: ["2-Methylpentan-3-one", "4-Methylpentan-3-one", "Ethyl isopropyl ketone-3-one", "2-Methylbutan-3-one"],
    answer: 0,
    explain: "Main chain: 5 C (CH₃CH₂–CO–CH–CH₃ with a CH₃ branch). Numbering from the branched end gives the C=O locant 3 and the methyl locant 2 (lower than 4) → 2-methylpentan-3-one. 'Ethyl isopropyl ketone' is the common name.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Carboxylic acids boil higher than alcohols of comparable molar mass mainly because:",
    options: [
      "They are ionised in the liquid state",
      "They exist as hydrogen-bonded dimers, even in the vapour phase",
      "They have higher molar masses",
      "They form intramolecular hydrogen bonds",
    ],
    answer: 1,
    explain: "Two –COOH groups pair through two O–H···O=C hydrogen bonds (cyclic dimer). These bonds are stronger and more extensive than in alcohols and persist even in the vapour, so more energy is needed to vaporise the acid.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 35,
    q: "Sodium ethanoate is heated with soda lime (NaOH + CaO). The gas evolved is:",
    options: ["Ethane", "Methane", "Ethene", "Carbon monoxide"],
    answer: 1,
    explain: "Decarboxylation: RCOONa + NaOH → R–H + Na₂CO₃. The product has one carbon fewer: CH₃COONa → CH₄. Ethane would come from Kolbe electrolysis of sodium ethanoate.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Ethanoic acid is treated with Cl₂ in the presence of a small amount of red phosphorus. This Hell–Volhard–Zelinsky reaction gives:",
    options: ["Chloroethane", "Ethanoyl chloride", "Chloroethanoic acid", "Chloromethane"],
    answer: 2,
    explain: "HVZ reaction halogenates the α-carbon of an acid having α-hydrogens: CH₃COOH → ClCH₂COOH (further Cl₂ gives di- and tri-chloroacetic acids). Ethanoyl chloride is made with PCl₅ or SOCl₂.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Benzene is treated with CO and HCl in the presence of anhydrous AlCl₃ / CuCl. The product is:",
    options: ["Benzoic acid", "Benzoyl chloride", "Benzaldehyde", "Chlorobenzene"],
    answer: 2,
    explain: "Gattermann–Koch reaction: CO + HCl generate a formyl-cation equivalent (HCO⁺) that attacks the ring → C₆H₅CHO.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Which reagent reduces ethanoic acid to ethanol?",
    options: ["NaBH₄", "LiAlH₄ followed by H₂O", "H₂ / Pd–BaSO₄", "Zn-Hg / HCl"],
    answer: 1,
    explain: "Carboxylic acids are reduced to 1° alcohols by LiAlH₄ (or B₂H₆). NaBH₄ is too mild to reduce the –COOH group. Rosenmund's catalyst acts on acyl chlorides; Clemmensen acts on aldehydes/ketones.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 35,
    q: "Which test is given by both aldehydes and ketones?",
    options: ["Tollens' test", "Fehling's test", "Orange-red precipitate with 2,4-dinitrophenylhydrazine", "Schiff's reagent (pink colour)"],
    answer: 2,
    explain: "2,4-DNP condenses with any >C=O to give a coloured 2,4-dinitrophenylhydrazone. Tollens', Fehling's and Schiff's tests depend on the easy oxidation (or specific reaction) of aldehydes and are negative for ketones.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 40,
    q: "Bromoethane is converted into propanoic acid by the sequence:",
    options: [
      "KCN, then H₂ / Ni",
      "Mg in dry ether, then CO₂, then H₃O⁺",
      "Aqueous KOH, then KMnO₄",
      "Mg in dry ether, then HCHO, then H₃O⁺",
    ],
    answer: 1,
    explain: "C₂H₅MgBr adds to CO₂ to give C₂H₅COOMgBr, which is hydrolysed to C₂H₅COOH — one carbon more than the halide. Aq. KOH then KMnO₄ gives ethanoic acid (no extra carbon); HCHO gives propan-1-ol; KCN then H₂/Ni gives propan-1-amine.",
  },
  {
    kind: "mcq", exams: B, difficulty: 1, idealTime: 35,
    q: "Benzoic acid and phenol can be distinguished by:",
    options: ["Aqueous NaOH", "Aqueous NaHCO₃", "Sodium metal", "Neutral water"],
    answer: 1,
    explain: "Carboxylic acids (pKa ≈ 4.2) are stronger than H₂CO₃ and liberate CO₂ (effervescence) with NaHCO₃; phenol (pKa ≈ 10) does not. Both dissolve in NaOH and both release H₂ with Na.",
  },
  {
    kind: "numeric", exams: N, difficulty: 1, idealTime: 60,
    q: "2.2 g of ethanal is warmed with excess Tollens' reagent. The mass of silver deposited (in g) is ____. (Ag = 108, C = 12, H = 1, O = 16)",
    answer: 10.8, tolerance: 0.1, unit: "g",
    explain: "RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → RCOO⁻ + 2Ag + 2H₂O + 4NH₃. Moles CH₃CHO = 2.2/44 = 0.05 → Ag = 0.10 mol → 10.8 g.",
  },
  /* ---------------- difficulty 2 ---------------- */
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 55,
    q: "The correct order of reactivity towards nucleophilic addition (e.g. HCN) is:",
    options: [
      "HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅COCH₃",
      "CH₃COCH₃ > CH₃CHO > HCHO > C₆H₅COCH₃",
      "C₆H₅COCH₃ > CH₃COCH₃ > CH₃CHO > HCHO",
      "CH₃CHO > HCHO > C₆H₅COCH₃ > CH₃COCH₃",
    ],
    answer: 0,
    hint: "Two factors: electron release to the carbonyl carbon, and crowding around it.",
    explain: "Alkyl groups (+I) reduce the positive character of the carbonyl carbon and add steric hindrance, so HCHO (no alkyl) > CH₃CHO (one) > CH₃COCH₃ (two). In acetophenone the phenyl ring also conjugates with C=O (+R), lowering electrophilicity further → least reactive.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Assertion (A): Benzaldehyde is less reactive than propanal towards nucleophilic addition.\nReason (R): The polarity of the carbonyl group in benzaldehyde is reduced by resonance with the benzene ring.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 0,
    explain: "The ring donates electron density into the C=O by conjugation (C₆H₅–CH=O ↔ ⁺C₆H₅=CH–O⁻), so the carbonyl carbon is less electrophilic than in propanal. R correctly explains A.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 45,
    q: "Which compound will NOT undergo aldol condensation with dilute NaOH?",
    options: ["Ethanal", "Propanone", "Benzaldehyde", "Propanal"],
    answer: 2,
    hint: "Aldol needs an enolate.",
    explain: "Aldol condensation requires at least one α-hydrogen to form the enolate. Benzaldehyde (C₆H₅CHO) has none; with conc. NaOH it undergoes Cannizzaro reaction instead. The other three all have α-H.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 45,
    q: "Benzaldehyde is heated with concentrated NaOH. The products are:",
    options: [
      "Benzyl alcohol and sodium benzoate",
      "Benzoin",
      "Benzoic acid and benzene",
      "Cinnamaldehyde",
    ],
    answer: 0,
    explain: "Cannizzaro reaction (no α-H): one molecule is oxidised and one reduced by hydride transfer: 2C₆H₅CHO + NaOH → C₆H₅CH₂OH + C₆H₅COONa. Benzoin needs CN⁻ catalysis; cinnamaldehyde needs an aldehyde with α-H.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 55,
    q: "An equimolar mixture of methanal and benzaldehyde is heated with concentrated NaOH. The main products are:",
    options: [
      "Sodium benzoate and methanol",
      "Sodium methanoate (formate) and benzyl alcohol",
      "Sodium benzoate and benzyl alcohol only",
      "Sodium methanoate and methanol only",
    ],
    answer: 1,
    hint: "In a crossed Cannizzaro reaction, which aldehyde is attacked by OH⁻ fastest?",
    explain: "HCHO is the more reactive carbonyl, so OH⁻ adds to it and it becomes the hydride donor (is oxidised) → HCOO⁻Na⁺; benzaldehyde accepts the hydride (is reduced) → C₆H₅CH₂OH. This is why HCHO is used as a sacrificial reducing agent.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Benzaldehyde and acetophenone are warmed with dilute NaOH. The product of this Claisen–Schmidt condensation is:",
    options: [
      "C₆H₅CH(OH)–COC₆H₅",
      "C₆H₅CH=CH–COC₆H₅",
      "C₆H₅CH₂OH + C₆H₅COONa",
      "C₆H₅CH=CH–CHO",
    ],
    answer: 1,
    explain: "Only acetophenone has α-H; its enolate attacks benzaldehyde, and the β-hydroxyketone dehydrates readily (the C=C is conjugated with both rings) → benzalacetophenone (chalcone), 1,3-diphenylprop-2-en-1-one. Option A is benzoin; D (cinnamaldehyde) would need ethanal.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 45,
    q: "The correct order of acidic strength is:",
    options: [
      "CH₃COOH > BrCH₂COOH > ClCH₂COOH > FCH₂COOH",
      "FCH₂COOH > ClCH₂COOH > BrCH₂COOH > CH₃COOH",
      "ClCH₂COOH > FCH₂COOH > BrCH₂COOH > CH₃COOH",
      "BrCH₂COOH > ClCH₂COOH > FCH₂COOH > CH₃COOH",
    ],
    answer: 1,
    explain: "Electron-withdrawing halogens (–I) stabilise the carboxylate; the effect follows electronegativity F > Cl > Br. pKa: FCH₂COOH 2.66, ClCH₂COOH 2.86, BrCH₂COOH 2.90, CH₃COOH 4.76.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Arrange in decreasing order of acidity: methanoic acid, ethanoic acid, benzoic acid.",
    options: [
      "Ethanoic > benzoic > methanoic",
      "Benzoic > methanoic > ethanoic",
      "Methanoic > benzoic > ethanoic",
      "Methanoic > ethanoic > benzoic",
    ],
    answer: 2,
    explain: "pKa: HCOOH 3.75, C₆H₅COOH 4.19, CH₃COOH 4.76. HCOOH has no electron-releasing group; the sp² phenyl carbon is mildly electron-withdrawing; CH₃ (+I) destabilises the acetate ion most.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "A ketone also contains an acid-sensitive acetal group. To convert its C=O into CH₂ without destroying the acetal, the best method is:",
    options: [
      "Clemmensen reduction (Zn-Hg / conc. HCl)",
      "Wolff–Kishner reduction (NH₂NH₂, then KOH in ethylene glycol, heat)",
      "NaBH₄ in methanol",
      "H₂ / Pd–BaSO₄",
    ],
    answer: 1,
    explain: "Wolff–Kishner works in strongly basic conditions (hydrazone → alkane + N₂), so acid-labile groups survive. Clemmensen needs hot conc. HCl, which would hydrolyse the acetal. NaBH₄ only gives the alcohol.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 55,
    q: "Statement I: Reactions of aldehydes and ketones with ammonia derivatives (H₂N–Z) are carried out in weakly acidic medium (pH ≈ 3.5).\nStatement II: In strongly acidic medium the nitrogen of H₂N–Z is protonated and loses its nucleophilicity, while in neutral medium the carbonyl is not activated.",
    options: [
      "Both statements are true and II is the correct explanation of I",
      "Both statements are true but II is not the correct explanation of I",
      "Statement I is true, Statement II is false",
      "Statement I is false, Statement II is true",
    ],
    answer: 0,
    explain: "Mild acid protonates the carbonyl oxygen (making carbon more electrophilic) yet leaves enough free H₂N–Z to attack. Too much acid converts the nucleophile into H₃N⁺–Z. Statement II is exactly the reason for Statement I.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "Assertion (A): Benzoic acid does not undergo Friedel–Crafts alkylation or acylation.\nReason (R): The –COOH group deactivates the ring and the AlCl₃ catalyst gets bonded to the carboxyl group.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 0,
    explain: "–COOH is an electron-withdrawing, meta-directing deactivator, and the Lewis acid AlCl₃ complexes with its oxygen atoms, deactivating the ring further. Both are true and R explains A. (Benzoic acid can still be nitrated, giving m-nitrobenzoic acid.)",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 70,
    q: "Match the named reaction (List I) with the reagent used (List II).\nList I: (P) Rosenmund reduction (Q) Stephen reaction (R) Etard reaction (S) Gattermann–Koch reaction\nList II: (1) CrO₂Cl₂, then H₃O⁺ (2) CO + HCl, anhyd. AlCl₃ / CuCl (3) H₂, Pd–BaSO₄ (4) SnCl₂ + HCl, then H₃O⁺",
    options: ["P-3, Q-4, R-1, S-2", "P-4, Q-3, R-1, S-2", "P-3, Q-4, R-2, S-1", "P-3, Q-1, R-4, S-2"],
    answer: 0,
    explain: "Rosenmund: acyl chloride + H₂/Pd–BaSO₄ (3). Stephen: nitrile + SnCl₂/HCl (4). Etard: methylarene + chromyl chloride (1). Gattermann–Koch: arene + CO/HCl (2).",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "An ester, CH₃CH₂COOC₂H₅, is to be converted into propanal in one step. The suitable reagent is:",
    options: ["LiAlH₄ (excess), then H₂O", "DIBAL-H at low temperature, then H₂O", "NaBH₄", "SnCl₂ / HCl"],
    answer: 1,
    explain: "Diisobutylaluminium hydride, (i-Bu)₂AlH, delivers one hydride and stops at the aldehyde stage when used cold, reducing esters (and nitriles) to aldehydes. LiAlH₄ goes on to propan-1-ol. NaBH₄ does not reduce esters readily; SnCl₂/HCl is for nitriles.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "An aqueous solution of sodium propanoate is electrolysed (Kolbe's electrolysis). The hydrocarbon formed at the anode is:",
    options: ["Ethane", "Propane", "Butane", "Hexane"],
    answer: 2,
    explain: "At the anode RCOO⁻ → RCOO· → R· + CO₂, and two R· radicals couple: 2C₂H₅· → C₄H₁₀ (butane). H₂ is evolved at the cathode. Ethane would come from sodium ethanoate.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 50,
    q: "The order of reactivity of carboxylic acid derivatives towards nucleophilic acyl substitution is:",
    options: [
      "Amide > ester > anhydride > acyl chloride",
      "Acyl chloride > anhydride > ester > amide",
      "Ester > acyl chloride > amide > anhydride",
      "Anhydride > acyl chloride > amide > ester",
    ],
    answer: 1,
    hint: "Better leaving group and weaker resonance donation to C=O → more reactive.",
    explain: "Leaving-group ability Cl⁻ > RCOO⁻ > RO⁻ > NH₂⁻, and resonance donation of the substituent into C=O increases Cl < OCOR < OR < NH₂. So RCOCl > (RCO)₂O > RCOOR′ > RCONH₂.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 60,
    q: "Propanoic acid is treated with Br₂ / red phosphorus and the product is then heated with excess ammonia. The final product is:",
    options: ["Propanamide", "3-Aminopropanoic acid", "2-Aminopropanoic acid (alanine)", "Ethanamine"],
    answer: 2,
    explain: "HVZ brominates the α-carbon: CH₃CH₂COOH → CH₃CHBrCOOH. Ammonia displaces bromide (SN2) → CH₃CH(NH₂)COOH, alanine. Propanamide would need the acid chloride + NH₃; 3-amino would need substitution at the β-carbon, which HVZ does not do.",
  },
  {
    kind: "mcq", exams: M, difficulty: 2, idealTime: 70,
    q: "A compound C₈H₈O forms an orange precipitate with 2,4-DNP, gives a yellow precipitate with I₂/NaOH, does not reduce Tollens' reagent, and on vigorous oxidation gives benzoic acid. The compound is:",
    options: ["Phenylethanal", "4-Methylbenzaldehyde", "Acetophenone", "2-Methylbenzaldehyde"],
    answer: 2,
    explain: "2,4-DNP positive + Tollens negative → ketone. Iodoform → CH₃CO– group. Oxidation to benzoic acid → monosubstituted benzene ring. C₆H₅COCH₃ (C₈H₈O) fits. The other three are aldehydes (Tollens positive) and the methylbenzaldehydes would oxidise to phthalic/terephthalic acids.",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 75,
    q: "How many of the following give a positive iodoform test?\nCH₃CHO, CH₃COCH₃, C₆H₅COCH₃, CH₃CH₂COCH₂CH₃, HCHO, CH₃CH₂CHO, CH₃COCH₂CH₃, CH₃CH₂OH, CH₃COOH",
    answer: 5,
    hint: "Need CH₃CO– attached to H or C, or CH₃CH(OH)–. A CH₃CO– in an acid does not count.",
    explain: "Positive: CH₃CHO, CH₃COCH₃, C₆H₅COCH₃, CH₃COCH₂CH₃ (butanone), CH₃CH₂OH (oxidised to CH₃CHO) = 5. Negative: pentan-3-one, HCHO, propanal (no CH₃CO–), and ethanoic acid (its CH₃CO– is part of a resonance-stabilised –COOH, which is not halogenated under these conditions).",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 70,
    q: "How many of the following reduce Tollens' reagent?\nHCHO, CH₃CHO, C₆H₅CHO, HCOOH, CH₃COCH₃, CH₃COOH, C₆H₅COCH₃",
    answer: 4,
    explain: "All aldehydes — aliphatic and aromatic — give the silver mirror: HCHO, CH₃CHO, C₆H₅CHO. Methanoic acid (H–COOH) also contains an aldehyde-like H–C=O and is oxidised to CO₂. Ketones and ethanoic acid do not. Total = 4.",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 70,
    q: "0.30 g of a monobasic carboxylic acid needs 25.0 mL of 0.20 M NaOH for complete neutralisation. The molar mass of the acid (in g mol⁻¹) is ____.",
    answer: 60,
    explain: "Moles NaOH = 0.025 × 0.20 = 0.005 mol = moles of monobasic acid. M = 0.30/0.005 = 60 g/mol → ethanoic acid, CH₃COOH.",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 75,
    q: "A mixture of ethanal and propanal is treated with dilute NaOH. Ignoring stereoisomers and dehydration, the number of different β-hydroxy aldehydes (aldol products) possible is ____.",
    answer: 4,
    hint: "Each aldehyde can act as the enolate donor and as the acceptor.",
    explain: "Both have α-H, so each can be donor or acceptor: ethanal + ethanal, propanal + propanal, ethanal enolate + propanal, propanal enolate + ethanal → 2 self + 2 crossed = 4 aldols.",
  },
  {
    kind: "numeric", exams: N, difficulty: 2, idealTime: 80,
    q: "The total number of structurally isomeric aldehydes and ketones with molecular formula C₅H₁₀O is ____.",
    answer: 7,
    explain: "Aldehydes (C₄H₉–CHO, four butyl groups): pentanal, 2-methylbutanal, 3-methylbutanal, 2,2-dimethylpropanal = 4. Ketones: pentan-2-one, pentan-3-one, 3-methylbutan-2-one = 3. Total = 7.",
  },
  /* ---------------- difficulty 3 ---------------- */
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 100,
    q: "Hexane-2,5-dione is heated with aqueous NaOH. The major product is:",
    options: ["3-Methylcyclopent-2-en-1-one", "2-Methylcyclopent-2-en-1-one", "Cyclohex-2-en-1-one", "2,5-Dimethylfuran"],
    answer: 0,
    hint: "Find the enolate that closes a five- or six-membered ring.",
    explain: "Intramolecular aldol: the enolate at C-1 (terminal CH₃) attacks the C-5 carbonyl, forming a five-membered ring (C1–C5). Dehydration gives the conjugated enone; the ring carbon from C-5 carries the methyl and the C=C, so the product is 3-methylcyclopent-2-en-1-one. Attack from C-3 would form a strained three-membered ring. 2,5-Dimethylfuran forms only under acid (Paal–Knorr), not with NaOH.",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 90,
    q: "Arrange in decreasing order of acidity: (I) benzoic acid (II) 4-nitrobenzoic acid (III) 4-methylbenzoic acid (IV) 4-methoxybenzoic acid.",
    options: ["II > I > III > IV", "II > I > IV > III", "I > II > III > IV", "IV > III > I > II"],
    answer: 0,
    hint: "At the para position –OCH₃ donates by resonance more strongly than –CH₃ does by hyperconjugation.",
    explain: "–NO₂ (–R, –I) stabilises the benzoate → strongest (pKa 3.41). Benzoic acid 4.19. –CH₃ (+I/hyperconjugation) 4.36. –OCH₃ at para is a strong +R donor → weakest (4.47). So II > I > III > IV.",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 80,
    q: "Assertion (A): 2-Methylbenzoic acid is a stronger acid than benzoic acid, although –CH₃ is electron-releasing.\nReason (R): The ortho substituent twists the –COOH out of the plane of the ring, reducing resonance between ring and carboxyl (the 'ortho effect').",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 0,
    explain: "pKa: o-toluic acid 3.91 vs benzoic acid 4.19. Almost every ortho substituent raises benzoic acid's acidity. Steric inhibition of resonance stops the ring from donating electrons into the carboxyl group, and that stabilises the carboxylate relative to the acid. R explains A.",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 80,
    q: "Glyoxal (OHC–CHO) is heated with concentrated NaOH and then acidified. The product is:",
    options: ["Oxalic acid", "Ethane-1,2-diol", "Glycolic acid (HOCH₂–COOH)", "A 1 : 1 mixture of oxalic acid and ethane-1,2-diol"],
    answer: 2,
    explain: "Glyoxal has no α-H, so it undergoes an intramolecular Cannizzaro reaction: OH⁻ adds to one CHO, which transfers a hydride to the other CHO in the same molecule. One end is oxidised to –COO⁻ and the other reduced to –CH₂OH → HOCH₂COO⁻ → glycolic acid on acidification.",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 75,
    q: "Semicarbazide (H₂N–NH–CO–NH₂) reacts with a ketone through only one of its NH₂ groups. The semicarbazone formed is:",
    options: ["R₂C=N–NH–CO–NH₂", "R₂C=N–CO–NH–NH₂", "R₂C(OH)–NH–CO–NH–NH₂", "R₂C=N–N=C=O"],
    answer: 0,
    hint: "Which NH₂ lone pair is delocalised into the C=O?",
    explain: "The –NH₂ attached directly to C=O is an amide nitrogen; its lone pair is delocalised onto oxygen, so it is weakly nucleophilic. The terminal –NH₂ of the hydrazine part (–NH–NH₂) is free and attacks → R₂C=N–NH–CO–NH₂.",
  },
  {
    kind: "mcq", exams: AJ, difficulty: 3, idealTime: 110,
    q: "Benzene is acylated with succinic anhydride / AlCl₃ to give X. X is reduced with Zn-Hg / HCl to Y, and Y is heated with conc. H₂SO₄ (or H₃PO₄) to give Z. Z is:",
    options: [
      "4-Phenylbutanoic acid",
      "4-Oxo-4-phenylbutanoic acid",
      "3,4-Dihydronaphthalen-1(2H)-one (α-tetralone)",
      "Naphthalene",
    ],
    answer: 2,
    explain: "X = C₆H₅CO–CH₂CH₂–COOH (Friedel–Crafts acylation). Clemmensen reduces only the ketone: Y = C₆H₅CH₂CH₂CH₂COOH. Strong acid then makes the –COOH attack the ring ortho to the chain (intramolecular acylation), closing a six-membered ring → α-tetralone (Haworth synthesis; further reduction / dehydrogenation leads to naphthalene). Options A and B are Y and X.",
  },
  {
    kind: "numeric", exams: AJ, difficulty: 3, idealTime: 90,
    q: "On ignition, 0.458 g of the silver salt of a monobasic organic acid leaves 0.216 g of metallic silver. The molar mass of the acid (in g mol⁻¹) is ____. (Ag = 108)",
    answer: 122,
    explain: "Moles Ag = 0.216/108 = 0.002 = moles of RCOOAg. M(salt) = 0.458/0.002 = 229. The acid RCOOH has H in place of Ag: 229 − 108 + 1 = 122 → benzoic acid. A common slip is reporting 229 or forgetting to add back the H (121).",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 80,
    q: "Which reagents convert cyclohexanone directly into cyclohexane?",
    options: ["Zn-Hg / conc. HCl", "NH₂NH₂, then KOH in ethylene glycol at 453 K", "NaBH₄ in ethanol", "LiAlH₄, then H₂O"],
    answers: [0, 1],
    explain: "Clemmensen (acidic) and Wolff–Kishner (basic) both reduce >C=O to >CH₂. NaBH₄ and LiAlH₄ stop at the alcohol (cyclohexanol).",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 90,
    q: "Which of the following give a positive test with BOTH Tollens' reagent and Fehling's solution?",
    options: ["Ethanal", "Benzaldehyde", "Methanoic acid", "Propanone"],
    answers: [0, 2],
    explain: "Aliphatic aldehydes give both tests. Methanoic acid (H–COOH) is a reducing agent and reduces both Tollens' and Fehling's reagents (oxidised to CO₂). Benzaldehyde gives Tollens' but not Fehling's. Propanone gives neither.",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 80,
    q: "Which aldehydes undergo the Cannizzaro reaction with concentrated NaOH?",
    options: ["Methanal", "2,2-Dimethylpropanal", "Benzaldehyde", "Propanal"],
    answers: [0, 1, 2],
    explain: "Cannizzaro needs an aldehyde without α-hydrogen. HCHO, (CH₃)₃C–CHO and C₆H₅CHO qualify. Propanal has α-H and undergoes aldol condensation instead.",
  },
  {
    kind: "multi", exams: A, difficulty: 3, idealTime: 90,
    q: "Which statements about carboxylic acids are correct?",
    options: [
      "They do not form oximes or 2,4-DNP derivatives, because resonance in –COOH lowers the electrophilicity of the carbonyl carbon",
      "LiAlH₄ reduces RCOOH to RCH₂OH",
      "NaBH₄ reduces RCOOH to RCH₂OH in methanol",
      "They are weaker acids than phenol",
    ],
    answers: [0, 1],
    explain: "A true: the –OH lone pair is delocalised into C=O, so typical carbonyl addition reactions do not occur. B true. C false: NaBH₄ does not reduce acids. D false: carboxylic acids (pKa ≈ 4–5) are much stronger than phenol (pKa ≈ 10) because the carboxylate charge is shared equally by two oxygens.",
  },
];

/* ================================================================== */
/* Exports                                                             */
/* ================================================================== */

/** Original exam-style questions (JEE Main / Advanced, NEET, KCET, COMEDK) for the chapters below. */
export const questions: ExamQuestion[] = [...build(CH7, "07", ch7), ...build(CH8, "08", ch8)];

/** One formula / quick-revision sheet per chapter. */
export const formulas: FormulaSheet[] = [];
