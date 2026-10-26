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
/* Exports                                                             */
/* ================================================================== */

/** Original exam-style questions (JEE Main / Advanced, NEET, KCET, COMEDK) for the chapters below. */
export const questions: ExamQuestion[] = [...build(CH7, "07", ch7)];

/** One formula / quick-revision sheet per chapter. */
export const formulas: FormulaSheet[] = [];
