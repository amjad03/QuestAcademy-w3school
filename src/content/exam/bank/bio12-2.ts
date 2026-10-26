import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 12 Biology bank (NEET / KCET): Molecular Basis of Inheritance, Evolution,
 * Human Health and Disease, Microbes in Human Welfare. Original NCERT-line questions.
 * All items are single-correct MCQs; `a` is the 0-based index of the correct option.
 */

const t = String.raw;

type Row = {
  d: 1 | 2 | 3;
  t: number;
  q: string;
  o: string[];
  a: number;
  e: string;
  h?: string;
  x?: ExamId[];
};

const mk = (chapter: string, no: string, rows: Row[]): ExamQuestion[] =>
  rows.map(
    (r, i): ExamQuestion => ({
      id: `bio12-2-${no}-${String(i + 1).padStart(3, "0")}`,
      subject: "biology",
      chapter,
      grade: "12",
      exams: r.x ?? (r.d === 3 ? ["NEET"] : ["NEET", "KCET"]),
      kind: "mcq",
      difficulty: r.d,
      idealTime: r.t,
      q: r.q,
      options: r.o,
      answer: r.a,
      explain: r.e,
      hint: r.h,
    }),
  );

/** Statement-I / Statement-II options (NEET style). */
const SI = [
  "Both Statement I and Statement II are correct",
  "Both Statement I and Statement II are incorrect",
  "Statement I is correct but Statement II is incorrect",
  "Statement I is incorrect but Statement II is correct",
];

/** Assertion–Reason options (NEET style). */
const AR = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is NOT the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];

/* ================================================================== */
/* Chapter 5 — Molecular Basis of Inheritance                          */
/* ================================================================== */

const MOL = "Molecular Basis of Inheritance";

const ch5: Row[] = [
  // --- DNA structure ---
  {
    d: 1, t: 45,
    q: "Adenosine, formed when adenine is linked to ribose, is best described as a:",
    o: ["Nucleotide", "Nucleoside", "Nitrogenous base", "Polynucleotide"],
    a: 1,
    e: "A nitrogenous base joined to a pentose sugar through an N-glycosidic bond is a nucleoside (adenosine, guanosine, cytidine, uridine). Adding a phosphate group to the 5′-OH of the sugar through a phosphoester bond makes a nucleotide (e.g. adenylic acid). Adenine alone is the base; many nucleotides joined by phosphodiester bonds form a polynucleotide.",
  },
  {
    d: 1, t: 45,
    q: "Two nucleotides in a polynucleotide chain are joined by a:",
    o: ["3′–5′ phosphodiester bond", "N-glycosidic bond", "Hydrogen bond", "Peptide bond"],
    a: 0,
    e: "Successive nucleotides are linked through a 3′–5′ phosphodiester bond to form a dinucleotide and then a polynucleotide. The N-glycosidic bond joins a base to its sugar within one nucleotide; hydrogen bonds hold the two complementary strands together; peptide bonds join amino acids.",
  },
  {
    d: 1, t: 45,
    q: "In the Watson–Crick model of B-DNA, the pitch of the helix and the number of base pairs per turn are respectively:",
    o: ["0.34 nm and 10", "3.4 nm and 10", "3.4 nm and 20", "34 nm and 10"],
    a: 1,
    e: "The pitch of the B-DNA helix is 3.4 nm and there are about 10 bp in each turn, so the distance between adjacent base pairs is 3.4/10 = 0.34 nm. Choosing 0.34 nm confuses the pitch with the rise per base pair.",
  },
  {
    d: 1, t: 50,
    q: "A double-stranded DNA sample contains 20% adenine. What is its percentage of cytosine?",
    o: ["20%", "30%", "40%", "60%"],
    a: 1,
    e: "Chargaff's rule: A = T and G = C in dsDNA. A = 20% so T = 20%; A + T = 40%, leaving G + C = 60%. Since G = C, cytosine = 30%. 60% is G + C together, and 20% wrongly sets C equal to A.",
  },
  {
    d: 3, t: 90,
    q: "A double-stranded DNA segment of 1000 bp contains 20% adenine (of its total nucleotides). The total number of hydrogen bonds holding its two strands together is:",
    o: ["2600", "2800", "2400", "2500"],
    a: 0,
    h: "Count A–T and G–C pairs first. A–T pairs share 2 H-bonds, G–C pairs share 3.",
    e: "1000 bp = 2000 nucleotides. A = 20% of 2000 = 400, and T = 400, so there are 400 A–T pairs. G + C = 2000 − 800 = 1200, i.e. 600 G and 600 C → 600 G–C pairs (check: 400 + 600 = 1000 bp). H-bonds = 400 × 2 + 600 × 3 = 800 + 1800 = 2600. Taking 20% of 1000 bp as the number of A–T pairs (200) gives 2800; swapping 2 and 3 H-bonds gives 2400; 2500 is a blind 2.5-per-pair guess.",
  },
  {
    d: 2, t: 70,
    q: "Statement I: The two polynucleotide chains of DNA have antiparallel polarity — if one runs 5′→3′, the other runs 3′→5′.\nStatement II: In DNA, a purine always pairs with a purine, which keeps the distance between the two strands constant.",
    o: SI,
    a: 2,
    h: "Which size of base pairs with which, to give a uniform helix diameter?",
    e: "Statement I is correct: the strands are antiparallel. Statement II is wrong: a purine always pairs with a pyrimidine (A with T, G with C). It is precisely this purine–pyrimidine pairing that keeps the distance between the two strands (helix diameter) almost uniform; purine–purine pairs would bulge the helix.",
  },
  {
    d: 2, t: 75,
    q: "If the distance between two consecutive base pairs is 0.34 nm and the total length of DNA in a typical mammalian diploid cell is about 2.2 m, the approximate number of base pairs in the cell is:",
    o: ["6.6 × 10⁹", "3.3 × 10⁹", "6.6 × 10⁶", "4.6 × 10⁶"],
    a: 0,
    h: "Number of bp = total length ÷ length per bp. Convert nm to m.",
    e: "Number of bp = 2.2 m ÷ (0.34 × 10⁻⁹ m) ≈ 6.5 × 10⁹, i.e. about 6.6 × 10⁹ bp — the NCERT figure for a diploid human cell. 3.3 × 10⁹ is the haploid content; 4.6 × 10⁶ bp is the E. coli genome; 6.6 × 10⁶ comes from a power-of-ten slip.",
  },
  // --- Packaging ---
  {
    d: 1, t: 45,
    q: "Histone proteins can bind tightly to DNA because they are:",
    o: [
      "Negatively charged, being rich in aspartate and glutamate",
      "Positively charged, being rich in lysine and arginine",
      "Neutral, being rich in glycine and alanine",
      "Positively charged, being rich in histidine and proline",
    ],
    a: 1,
    e: "Histones are rich in the basic amino acid residues lysine and arginine, which carry positive charges in their side chains. This lets them hold the negatively charged (phosphate-rich) DNA. Acidic residues (aspartate, glutamate) would repel DNA.",
  },
  {
    d: 1, t: 45,
    q: "A typical nucleosome contains:",
    o: [
      "About 200 bp of DNA wrapped around a histone octamer",
      "About 200 bp of DNA wrapped around a histone tetramer",
      "About 20 bp of DNA wrapped around a histone octamer",
      "About 2000 bp of DNA wrapped around H1 histone only",
    ],
    a: 0,
    e: "Eight histone molecules form a histone octamer; the negatively charged DNA is wrapped around this positively charged octamer to form a nucleosome, which typically contains about 200 bp of DNA helix. H1 is the linker histone, not the core.",
  },
  {
    d: 2, t: 75,
    q: "A eukaryotic cell contains 6.6 × 10⁹ bp of DNA. If every nucleosome holds about 200 bp, the approximate number of nucleosomes in the cell is:",
    o: ["3.3 × 10⁷", "6.6 × 10⁷", "3.3 × 10⁹", "1.32 × 10⁸"],
    a: 0,
    h: "Divide the total bp by bp per nucleosome.",
    e: "Number of nucleosomes = 6.6 × 10⁹ ÷ 200 = 3.3 × 10⁷. Dividing by 100 gives 6.6 × 10⁷; dividing by 2 (a slip) gives 3.3 × 10⁹; multiplying by 200/10⁴ style errors give 1.32 × 10⁸.",
  },
  {
    d: 2, t: 80,
    q: "Match Column I with Column II.\nColumn I: (A) Nucleosome (B) Euchromatin (C) Heterochromatin (D) Non-histone chromosomal (NHC) proteins\nColumn II: (i) Densely packed, stains dark, transcriptionally inactive (ii) Required for higher-level packaging of chromatin (iii) 'Beads-on-string' unit seen under the electron microscope (iv) Loosely packed, stains light, transcriptionally active",
    o: [
      "A-iii, B-iv, C-i, D-ii",
      "A-iii, B-i, C-iv, D-ii",
      "A-ii, B-iv, C-i, D-iii",
      "A-iv, B-iii, C-ii, D-i",
    ],
    a: 0,
    h: "Light-staining chromatin is the active, loosely packed one.",
    e: "Nucleosomes are the repeating unit of chromatin, seen as beads-on-string (A-iii). Euchromatin is loosely packed, stains light and is transcriptionally active (B-iv); heterochromatin is densely packed, stains dark and is inactive (C-i). Packaging of chromatin at a higher level requires NHC proteins (D-ii). Option B swaps eu- and heterochromatin.",
  },
  // --- Search for genetic material ---
  {
    d: 1, t: 50,
    q: "In Griffith's experiment with Streptococcus pneumoniae, which injection killed the mice?",
    o: [
      "Live R strain only",
      "Heat-killed S strain only",
      "Heat-killed S strain mixed with live R strain",
      "Heat-killed R strain mixed with heat-killed S strain",
    ],
    a: 2,
    e: "Live S (smooth, capsulated) bacteria kill mice; live R (rough, non-capsulated) and heat-killed S do not. A mixture of heat-killed S and live R killed the mice and live S bacteria were recovered — the R strain had been 'transformed' by a 'transforming principle' from the dead S cells. Without a living R strain nothing can be transformed, so option D does not kill.",
  },
  {
    d: 2, t: 60,
    q: "Avery, MacLeod and McCarty purified biochemicals from heat-killed S cells. Transformation of R cells was prevented ONLY when the extract was treated with:",
    o: ["Protease", "RNase", "DNase", "Lipase"],
    a: 2,
    h: "Destroying the true genetic material should stop transformation.",
    e: "Proteases and RNases did not affect transformation, so the transforming substance was neither protein nor RNA. Digestion with DNase inhibited transformation, showing that DNA caused the transformation of R cells. (They did not all agree DNA was the genetic material until Hershey–Chase.)",
  },
  {
    d: 2, t: 75,
    q: "In the Hershey–Chase experiment, bacteria were infected with phages grown in radioactive phosphorus (³²P) or radioactive sulphur (³⁵S), then blended and centrifuged. Which observation is correct?",
    o: [
      "³⁵S was found mainly inside the bacterial cells in the pellet",
      "³²P was found mainly inside the bacterial cells in the pellet",
      "³²P was found mainly in the supernatant with the viral coats",
      "Both ³²P and ³⁵S were found equally in the pellet",
    ],
    a: 1,
    h: "Which element is in DNA but not protein, and which is in protein but not DNA?",
    e: "³²P labels DNA (phosphate backbone); ³⁵S labels protein (cysteine/methionine). Bacteria infected with ³²P-phages were radioactive (pellet) while bacteria infected with ³⁵S-phages were not — the ³⁵S stayed with the protein coats removed by blending and remained in the supernatant. So DNA, not protein, entered the bacteria and is the genetic material.",
  },
  {
    d: 2, t: 70,
    q: "How many of the following are criteria that a molecule must fulfil to act as genetic material?\n(a) It should be able to generate its replica\n(b) It should be chemically and structurally stable\n(c) It should provide scope for slow changes (mutation) required for evolution\n(d) It should be able to express itself in the form of 'Mendelian characters'\n(e) It should be highly reactive so that it can catalyse reactions\n(f) It should always be single stranded",
    o: ["Three", "Four", "Five", "Six"],
    a: 1,
    h: "Reactivity is a disadvantage for storing information.",
    e: "The four NCERT criteria are (a) replication, (b) chemical and structural stability, (c) scope for slow mutation and (d) expression as Mendelian characters. (e) is wrong — high reactivity makes a molecule unstable (a disadvantage of RNA), and (f) is wrong — double-strandedness with complementary bases helps DNA's stability and repair.",
  },
  {
    d: 2, t: 70,
    q: "Assertion (A): DNA is chemically less reactive and structurally more stable than RNA.\nReason (R): The 2′-OH group present in every nucleotide of DNA makes it labile and easily degradable.",
    o: AR,
    a: 2,
    h: "Which sugar has the 2′-OH — ribose or deoxyribose?",
    e: "A is true: DNA is more stable, so it is preferred for storing genetic information. R is false: the reactive 2′-OH group is present in every nucleotide of RNA (ribose), not DNA (deoxyribose). It is this 2′-OH that makes RNA labile. Thymine (5-methyl uracil) in place of uracil adds further stability to DNA.",
  },
  {
    d: 3, t: 80,
    q: "Assertion (A): Viruses having RNA as genetic material show a shorter life span and mutate and evolve faster.\nReason (R): RNA is unstable and mutates at a faster rate than DNA.",
    o: AR,
    a: 0,
    h: "Link the property of the molecule to the behaviour of the virus.",
    e: "Both are true and R explains A. NCERT states that RNA, being unstable, mutates at a faster rate; consequently viruses having RNA genomes and a shorter life span mutate and evolve faster. The 2′-OH makes RNA reactive and less stable.",
  },
  {
    d: 2, t: 60,
    q: "RNA is considered the first genetic material because:",
    o: [
      "It is more stable than DNA and contains thymine",
      "It can act both as genetic material and as a catalyst, and essential life processes evolved around it",
      "It is always double stranded and self-repairing",
      "It is the only molecule that can code for proteins directly without translation",
    ],
    a: 1,
    h: "Think about ribozymes and the 'RNA world'.",
    e: "RNA can store information and also catalyse reactions (ribozymes), so essential life processes such as metabolism, translation and splicing evolved around RNA. DNA evolved later from RNA with chemical modifications (deoxyribose, thymine, double helix) that made it more stable. RNA is less stable than DNA, usually single stranded, and still needs translation to make proteins.",
  },
  // --- Replication ---
  {
    d: 1, t: 45,
    q: "Meselson and Stahl proved semiconservative replication by growing E. coli in a medium whose only nitrogen source was:",
    o: ["¹⁴NH₄Cl", "¹⁵NH₄Cl", "³²P-labelled phosphate", "³H-thymidine"],
    a: 1,
    e: "E. coli was grown for many generations in ¹⁵NH₄Cl so that ¹⁵N (heavy isotope) was incorporated into DNA, then transferred to ¹⁴NH₄Cl. Heavy and light DNA were separated by caesium chloride (CsCl) density-gradient centrifugation. ³H-thymidine was used by Taylor on Vicia faba.",
  },
  {
    d: 3, t: 100,
    q: "E. coli fully labelled with ¹⁵N is shifted to a ¹⁴N medium. It divides every 20 minutes. After 80 minutes, what fraction of the DNA molecules will be of hybrid (¹⁵N/¹⁴N) density?",
    o: ["1/4", "1/8", "1/16", "1/2"],
    a: 1,
    h: "80 minutes = how many generations? The two original heavy strands are never lost.",
    e: "80 ÷ 20 = 4 generations → 2⁴ = 16 DNA molecules. Under semiconservative replication the two original ¹⁵N strands persist, each in one hybrid molecule, so there are always exactly 2 hybrid molecules after the first generation. Fraction = 2/16 = 1/8; the other 14 are light. 1/4 is the answer after 3 generations (2/8), 1/16 counts only one hybrid, and 1/2 is the answer after 2 generations.",
  },
  {
    d: 2, t: 60,
    q: "E. coli has about 4.6 × 10⁶ bp and completes replication in about 38 minutes. The average rate of polymerisation is approximately:",
    o: ["200 bp per second", "2000 bp per second", "20,000 bp per second", "1,20,000 bp per second"],
    a: 1,
    h: "Convert minutes to seconds.",
    e: "38 min = 2280 s. Rate = 4.6 × 10⁶ ÷ 2280 ≈ 2.0 × 10³ bp/s, i.e. about 2000 bp per second (the NCERT figure). Dividing by 38 (forgetting to convert to seconds) gives ~1.2 × 10⁵ — the 1,20,000 trap.",
  },
  {
    d: 2, t: 70,
    q: "DNA-dependent DNA polymerase catalyses polymerisation only in the 5′→3′ direction. Consequently, during replication:",
    o: [
      "Replication is continuous on the template with 5′→3′ polarity and discontinuous on the template with 3′→5′ polarity",
      "Replication is continuous on the template with 3′→5′ polarity and discontinuous on the template with 5′→3′ polarity",
      "Both strands are synthesised discontinuously",
      "Both strands are synthesised continuously, beginning at different origins",
    ],
    a: 1,
    h: "The new strand must grow 5′→3′, so it must be antiparallel to its template.",
    e: "A new strand grows 5′→3′, antiparallel to its template. On the template with 3′→5′ polarity the new strand grows continuously in the direction of fork movement; on the template with 5′→3′ polarity it is made discontinuously as short Okazaki fragments, later joined by DNA ligase. Option A reverses the polarities.",
  },
  // --- Transcription ---
  {
    d: 2, t: 70,
    q: "The coding strand of a gene segment reads 5′-ATGCAT-3′. The mRNA transcribed from it will read:",
    o: ["5′-AUGCAU-3′", "5′-UACGUA-3′", "3′-AUGCAU-5′", "5′-ATGCAT-3′"],
    a: 0,
    h: "The coding strand has the same sequence and polarity as the RNA, with U in place of T.",
    e: "The template strand is 3′-TACGTA-5′; RNA is complementary to it and is made 5′→3′, giving 5′-AUGCAU-3′ — identical to the coding strand except T → U. 5′-UACGUA-3′ is complementary to the coding strand (wrong strand), 3′-AUGCAU-5′ has reversed polarity, and 5′-ATGCAT-3′ contains thymine, which RNA lacks.",
  },
  {
    d: 1, t: 45,
    q: "In a transcription unit, the promoter is located:",
    o: [
      "Towards the 3′ end (downstream) of the structural gene, with reference to the coding strand",
      "Towards the 5′ end (upstream) of the structural gene, with reference to the coding strand",
      "Within the intron of the structural gene",
      "On the template strand at the 3′ end of the terminator",
    ],
    a: 1,
    e: "A transcription unit has a promoter, the structural gene and a terminator. By convention (defined with respect to the coding strand), the promoter lies towards the 5′ end (upstream) of the structural gene and the terminator towards the 3′ end (downstream). The promoter provides the binding site for RNA polymerase.",
  },
  {
    d: 2, t: 60,
    q: "In bacterial transcription, the RNA polymerase associates transiently with which factors for initiation and termination respectively?",
    o: [
      "ρ (rho) factor and σ (sigma) factor",
      "σ (sigma) factor and ρ (rho) factor",
      "σ factor and DNA ligase",
      "Helicase and ρ factor",
    ],
    a: 1,
    h: "Sigma 'starts'; rho 'stops'.",
    e: "The bacterial RNA polymerase binds the promoter and initiates transcription after associating with the initiation factor σ (sigma). At the terminator it associates with the termination factor ρ (rho), and the RNA polymerase and RNA fall off. Option A reverses them.",
  },
  {
    d: 2, t: 60,
    q: "In eukaryotic nuclei, RNA polymerase III is responsible for transcription of:",
    o: [
      "hnRNA (precursor of mRNA)",
      "28S, 18S and 5.8S rRNAs",
      "tRNA, 5S rRNA and snRNAs",
      "Only mitochondrial RNAs",
    ],
    a: 2,
    h: "Pol I — big rRNAs; Pol II — mRNA precursor; Pol III — small RNAs.",
    e: "Eukaryotes have three nuclear RNA polymerases: RNA pol I transcribes rRNAs (28S, 18S, 5.8S); RNA pol II transcribes the precursor of mRNA, hnRNA; RNA pol III transcribes tRNA, 5S rRNA and snRNAs. Note that 5S rRNA is a pol III product even though other rRNAs are made by pol I.",
  },
  {
    d: 3, t: 75,
    q: "Which one of the following statements about processing of hnRNA in eukaryotes is INCORRECT?",
    o: [
      "In splicing, introns are removed and exons are joined in a defined order",
      "In capping, an unusual nucleotide (methyl guanosine triphosphate) is added to the 5′ end",
      "In tailing, 200–300 adenylate residues are added at the 3′ end in a template-dependent manner",
      "The fully processed hnRNA, called mRNA, is transported out of the nucleus for translation",
    ],
    a: 2,
    h: "Is there any poly-T stretch in the gene that codes for the poly-A tail?",
    e: "Tailing (polyadenylation) adds 200–300 adenylate residues at the 3′ end in a template-INDEPENDENT manner — there is no matching stretch in the DNA. The other statements are correct: splicing removes introns, capping adds methyl guanosine triphosphate at the 5′ end, and processed mRNA moves to the cytoplasm.",
  },
  // --- Genetic code ---
  {
    d: 3, t: 75,
    q: "Match the scientist with the contribution towards deciphering the genetic code.\nColumn I: (A) George Gamow (B) Har Gobind Khorana (C) Marshall Nirenberg (D) Severo Ochoa\nColumn II: (i) Cell-free system for protein synthesis that helped decode codons (ii) Enzyme polynucleotide phosphorylase that polymerises RNA with defined sequences in a template-independent manner (iii) Argued that the code should be a triplet, since 4³ = 64 combinations exceed 20 amino acids (iv) Chemical method for synthesising RNA molecules with defined combinations of bases",
    o: [
      "A-iii, B-iv, C-i, D-ii",
      "A-iii, B-ii, C-i, D-iv",
      "A-i, B-iv, C-iii, D-ii",
      "A-iv, B-iii, C-ii, D-i",
    ],
    a: 0,
    h: "Gamow was a physicist reasoning on numbers.",
    e: "Gamow (a physicist) argued that 20 amino acids need a code of three bases, since 4² = 16 is too few and 4³ = 64 is enough (A-iii). Khorana developed the chemical method for synthesising RNA with defined combinations of bases (B-iv). Nirenberg's cell-free system helped decode codons (C-i). Ochoa's polynucleotide phosphorylase polymerised RNA template-independently (D-ii).",
  },
  {
    d: 1, t: 45,
    q: "Of the 64 codons of the genetic code, how many code for amino acids?",
    o: ["64", "61", "60", "20"],
    a: 1,
    e: "There are 64 codons; 61 code for amino acids and 3 (UAA, UAG, UGA) are stop codons that do not code for any amino acid. Because 61 codons specify only 20 amino acids, the code is degenerate.",
  },
  {
    d: 3, t: 75,
    q: "How many of the following statements about the genetic code are correct?\n(a) The code is degenerate — some amino acids are coded by more than one codon\n(b) The codon is read in mRNA in a contiguous fashion; there are no punctuations\n(c) One codon codes for only one amino acid, so the code is unambiguous and specific\n(d) The code is overlapping\n(e) AUG has dual functions: it codes for methionine and acts as the initiator codon\n(f) Every amino acid is coded by at least two codons",
    o: ["Three", "Four", "Five", "Six"],
    a: 1,
    h: "Think of tryptophan and methionine.",
    e: "Correct: (a) degenerate, (b) comma-less (read contiguously), (c) unambiguous and specific, (e) AUG codes for Met and is the initiator codon — four statements. (d) is wrong: the code is non-overlapping. (f) is wrong: methionine (AUG) and tryptophan (UGG) are each coded by a single codon.",
  },
  {
    d: 2, t: 70,
    q: "Insertion of three bases (or one codon) into the coding region of a gene, without creating a stop codon, will most likely result in:",
    o: [
      "A frame-shift that alters all amino acids after the insertion",
      "Insertion of one extra amino acid with the rest of the reading frame unaltered",
      "Deletion of one amino acid",
      "Premature termination of translation in every case",
    ],
    a: 1,
    h: "Does a 3-base insertion change the reading frame?",
    e: "Insertion or deletion of one or two bases changes the reading frame from that point onwards (frame-shift). Insertion or deletion of three bases (one codon) adds or removes one amino acid while the reading frame beyond remains unaltered. This experiment supported a triplet, contiguously read code.",
  },
  {
    d: 3, t: 100,
    q: "The template strand of a short gene reads 3′-TAC GGA TTC ACT-5′. The polypeptide produced from the mRNA transcribed from it will be:",
    o: ["Met–Pro–Lys", "Met–Pro–Lys–Trp", "Tyr–Gly–Phe–Thr", "Met–Gly–Lys"],
    a: 0,
    h: "Write the mRNA complementary to the template (5′→3′), then read codons from AUG until a stop codon.",
    e: "mRNA is complementary to the template: 5′-AUG CCU AAG UGA-3′. AUG = Met, CCU = Pro, AAG = Lys, UGA = stop (no amino acid), so the product is Met–Pro–Lys. Reading UGA as Trp gives option B (UGG is Trp; UGA is a stop codon in the universal code). Reading the template itself as if it were mRNA (UAC GGA UUC ACU) gives Tyr–Gly–Phe–Thr.",
  },
  {
    d: 2, t: 70,
    q: "The coding region of an mRNA, from the start codon AUG to the stop codon UAA inclusive, is 450 nucleotides long. The number of amino acids in the polypeptide formed will be:",
    o: ["150", "149", "148", "450"],
    a: 1,
    h: "How many codons, and does the stop codon add an amino acid?",
    e: "450 ÷ 3 = 150 codons, including the stop codon. The stop codon is not read by any tRNA and adds no amino acid, so 150 − 1 = 149 amino acids (the first being methionine from AUG). 150 forgets the stop codon; 148 wrongly drops the start codon as well.",
  },
  // --- tRNA and translation ---
  {
    d: 1, t: 45,
    q: "The secondary (two-dimensional) structure of tRNA is depicted as a clover-leaf, but in actual three-dimensional structure it looks like:",
    o: ["A double helix", "An inverted L", "A ring", "A beads-on-string fibre"],
    a: 1,
    e: "tRNA (the adapter molecule) has an anticodon loop with bases complementary to the codon and an amino acid acceptor end. Its secondary structure is clover-leaf shaped, while the actual 3D structure is a compact inverted L. tRNAs are specific for each amino acid; specific tRNAs exist for initiation, but none for stop codons.",
  },
  {
    d: 2, t: 70,
    q: "In bacteria, the enzyme that catalyses formation of peptide bonds during translation is:",
    o: [
      "Aminoacyl-tRNA synthetase, a protein",
      "23S rRNA, which acts as a ribozyme",
      "16S rRNA of the smaller subunit",
      "Peptidyl transferase, a protein of the 30S subunit",
    ],
    a: 1,
    h: "Ribozyme — an RNA enzyme — in the larger subunit.",
    e: "In bacteria, 23S rRNA of the larger subunit acts as the enzyme (ribozyme) for peptide bond formation. Aminoacyl-tRNA synthetase charges tRNA (aminoacylation, needing ATP); it does not form peptide bonds. The larger subunit has two sites for amino acids to be close enough to form a peptide bond.",
  },
  {
    d: 2, t: 60,
    q: "Statement I: Charging (aminoacylation) of tRNA requires energy from ATP.\nStatement II: For initiation, the ribosome binds to mRNA at the start codon AUG, which is recognised only by the initiator tRNA.",
    o: SI,
    a: 0,
    h: "Both are NCERT lines on translation.",
    e: "Both are correct. Amino acids are activated in the presence of ATP and linked to their cognate tRNA — charging/aminoacylation of tRNA. Translation begins when the ribosome binds the mRNA at the start codon AUG, which is recognised only by the initiator tRNA. Elongation then continues codon by codon until a stop codon, where a release factor binds.",
  },
  // --- Regulation: lac operon ---
  {
    d: 1, t: 45,
    q: "In the lac operon of E. coli, the 'y' gene codes for:",
    o: ["β-galactosidase", "Permease", "Transacetylase", "Repressor"],
    a: 1,
    e: "lac z codes for β-galactosidase (hydrolyses lactose into galactose and glucose); lac y codes for permease (increases permeability of the cell to β-galactosides); lac a codes for transacetylase. The repressor is coded by the i gene (i = inhibitor).",
  },
  {
    d: 2, t: 70,
    q: "Which statement about the lac operon is correct?",
    o: [
      "The repressor is synthesised only when lactose is present",
      "In the absence of an inducer, the repressor binds the operator and prevents RNA polymerase from transcribing the operon",
      "Glucose acts as the inducer of the lac operon",
      "Lactose binds the operator directly and switches the operon on",
    ],
    a: 1,
    h: "The i gene is constitutive.",
    e: "The i gene is expressed constitutively, so the repressor is always made. In the absence of an inducer, the repressor binds the operator and blocks RNA polymerase. Lactose (strictly allolactose) is the inducer: it binds the repressor and inactivates it, so it cannot bind the operator. Lactose binds the repressor, not the operator; glucose is not the inducer.",
  },
  {
    d: 2, t: 65,
    q: "Assertion (A): The lac z, y and a genes are transcribed as a single mRNA.\nReason (R): In the lac operon, a single promoter and operator regulate all three structural genes, i.e. the operon is polycistronic.",
    o: AR,
    a: 0,
    h: "What does an operon share between its genes?",
    e: "Both are true and R explains A. In an operon, a polycistronic structural gene is regulated by a common promoter and regulatory genes; hence z, y and a are transcribed together as one polycistronic mRNA.",
  },
  {
    d: 3, t: 85,
    q: "Assertion (A): A mutation in the i gene that produces a repressor unable to bind the operator makes the lac operon express its structural genes even without lactose.\nReason (R): The repressor of the lac operon is synthesised only in the presence of lactose.",
    o: AR,
    a: 2,
    h: "Is i gene expression regulated or constitutive?",
    e: "A is true: if the repressor cannot bind the operator, nothing blocks RNA polymerase, so transcription happens with or without lactose (constitutive expression). R is false: the i gene is expressed constitutively, so the repressor is synthesised all the time; lactose merely inactivates it. Regulation by the repressor is an example of negative regulation.",
  },
  // --- Human Genome Project ---
  {
    d: 1, t: 45,
    q: "The Human Genome Project (HGP) was launched in ____ and completed in ____.",
    o: ["1990; 2003", "1985; 2000", "1990; 2006", "2000; 2003"],
    a: 0,
    e: "The HGP was a 13-year project launched in 1990 and completed in 2003, coordinated by the US Department of Energy and NIH, with partners including the Wellcome Trust (UK), Japan, France, Germany, China and others. The sequence of chromosome 1 was completed only in May 2006.",
  },
  {
    d: 3, t: 100,
    q: "How many of the following salient features of the human genome are correctly stated?\n(a) The human genome contains about 3164.7 million bp\n(b) The average gene consists of 3000 bases, the largest known human gene being dystrophin at 2.4 million bases\n(c) The total number of genes is estimated at about 30,000\n(d) Almost 99.9% of nucleotide bases are exactly the same in all people\n(e) Chromosome Y has the most genes (2968) and chromosome 1 the fewest (231)\n(f) More than 2% of the genome codes for proteins",
    o: ["Three", "Four", "Five", "Six"],
    a: 1,
    h: "Two of these swap or exaggerate numbers.",
    e: "Correct: (a), (b), (c), (d) — four. (e) is reversed: chromosome 1 has the most genes (2968) and Y the fewest (231). (f) is wrong: LESS than 2% of the genome codes for proteins; repeated sequences make up a very large portion. Scientists also identified about 1.4 million single nucleotide polymorphisms (SNPs).",
  },
  {
    d: 2, t: 70,
    q: "In the HGP, one approach focused on identifying all the genes expressed as RNA, while another blindly sequenced the whole set of the genome and later assigned functions to different regions. These are respectively called:",
    o: [
      "Sequence annotation and Expressed Sequence Tags (ESTs)",
      "Expressed Sequence Tags (ESTs) and sequence annotation",
      "DNA fingerprinting and ESTs",
      "Southern blotting and sequence annotation",
    ],
    a: 1,
    h: "'Expressed' sequences are those made into RNA.",
    e: "Expressed Sequence Tags (ESTs): identifying all genes that are expressed as RNA. Sequence annotation: sequencing the whole genome (coding and non-coding) and later assigning functions. Option A reverses them.",
  },
  // --- DNA fingerprinting ---
  {
    d: 1, t: 45,
    q: "The technique of DNA fingerprinting was initially developed by ____ using ____ as probe.",
    o: [
      "Alec Jeffreys; a satellite DNA (VNTR) sequence",
      "Frederick Sanger; a cDNA sequence",
      "Kary Mullis; an rRNA sequence",
      "Watson and Crick; a mitochondrial DNA sequence",
    ],
    a: 0,
    e: "Alec Jeffreys developed DNA fingerprinting using a satellite DNA as a probe that shows a very high degree of polymorphism — the Variable Number of Tandem Repeats (VNTR). Sanger developed DNA sequencing; Mullis developed PCR.",
  },
  {
    d: 2, t: 70,
    q: "Which of the following statements about satellite DNA is INCORRECT?",
    o: [
      "It appears as small (minor) peaks in density-gradient centrifugation, separate from the major peak of bulk DNA",
      "It is classified into micro-satellites, mini-satellites, etc., depending on base composition, length of segment and number of repetitive units",
      "It normally codes for structural proteins of the chromosome",
      "It shows a high degree of polymorphism and forms the basis of DNA fingerprinting",
    ],
    a: 2,
    h: "Repetitive DNA is mostly non-coding.",
    e: "Satellite DNA sequences normally do NOT code for any proteins; they form a large portion of the human genome. The other statements are correct: they separate as minor peaks from bulk DNA, are classed as micro- or mini-satellites, and their high polymorphism underlies DNA fingerprinting.",
  },
  {
    d: 3, t: 80,
    q: "Arrange the steps of DNA fingerprinting in the correct order:\n(i) Hybridisation using a labelled VNTR probe\n(ii) Digestion of DNA by restriction endonucleases\n(iii) Detection of hybridised fragments by autoradiography\n(iv) Isolation of DNA\n(v) Separation of fragments by electrophoresis\n(vi) Transfer (blotting) of separated fragments to nitrocellulose or nylon membrane",
    o: [
      "iv → ii → v → vi → i → iii",
      "iv → v → ii → vi → i → iii",
      "ii → iv → v → vi → iii → i",
      "iv → ii → vi → v → i → iii",
    ],
    a: 0,
    h: "You cannot separate fragments before cutting, or probe them before blotting.",
    e: "The steps (Southern blot hybridisation) are: isolation of DNA → digestion by restriction endonucleases → separation of fragments by electrophoresis → blotting to a synthetic membrane → hybridisation with labelled VNTR probe → detection by autoradiography. Blotting must follow electrophoresis, and electrophoresis must follow digestion.",
  },
  {
    d: 3, t: 85,
    q: "Statement I: An inheritable mutation observed in a population at high frequency (more than 0.01) is referred to as DNA polymorphism.\nStatement II: Polymorphism is more frequent in coding DNA than in non-coding DNA, because mutations in coding sequences have no immediate effect on reproductive ability.",
    o: SI,
    a: 2,
    h: "Where can mutations accumulate silently, generation after generation?",
    e: "Statement I is correct (NCERT definition of polymorphism). Statement II is wrong: polymorphism is higher in NON-coding DNA, because mutations there may not have any immediate effect on an individual's reproductive ability, so they persist and accumulate over generations. Mutations in coding DNA are more often harmful and removed by selection.",
  },
  {
    d: 3, t: 80,
    q: "In DNA fingerprinting, the size of VNTRs and the reason a child's DNA bands can be used for paternity testing are best described as:",
    o: [
      "VNTR size varies from 0.1 to 20 kb; the band pattern is inherited, half from each parent",
      "VNTR size is fixed at 200 bp; every band of the child comes from the mother",
      "VNTR size varies from 1 to 2 Mb; the pattern changes in each tissue of the body",
      "VNTR size varies from 0.1 to 20 kb; the pattern differs between tissues of the same individual",
    ],
    a: 0,
    h: "Is DNA the same in blood, hair and semen of a person?",
    e: "The VNTR belongs to the mini-satellite class; its size varies from 0.1 to 20 kb, so after hybridisation and autoradiography bands of different sizes appear, characteristic of an individual (except identical twins). The pattern is inherited from both parents, which allows paternity testing, and every tissue of a person (blood, hair follicle, skin, saliva, sperm) shows the same pattern.",
  },
];

/* ================================================================== */
/* Exports                                                             */
/* ================================================================== */

export const questions: ExamQuestion[] = [...mk(MOL, "05", ch5)];

export const formulas: FormulaSheet[] = [];
