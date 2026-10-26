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
/* Chapter 6 — Evolution                                               */
/* ================================================================== */

const EVO = "Evolution";

const ch6: Row[] = [
  // --- Origin of life ---
  {
    d: 1, t: 45,
    q: "According to NCERT, life appeared on earth approximately:",
    o: [
      "20 billion years ago, immediately after the Big Bang",
      "4.5 billion years ago, at the moment the earth formed",
      "4 billion years ago, about 500 million years after the earth formed",
      "2000 million years ago, along with the first multicellular animals",
    ],
    a: 2,
    e: "The universe is about 20 billion years old (Big Bang) and the earth was supposedly formed about 4.5 billion years ago. Life appeared about 500 million years after the formation of earth, i.e. almost four billion years back. The first cellular forms of life did not originate till about 2000 million years ago (mya); those were single cells.",
  },
  {
    d: 1, t: 45,
    q: "Louis Pasteur's experiments with pre-sterilised and killed yeast in flasks disproved the theory of:",
    o: ["Panspermia", "Spontaneous generation", "Chemical evolution", "Natural selection"],
    a: 1,
    e: "Pasteur showed that in pre-sterilised flasks life did not come from killed yeast, while in another flask open to air new living organisms arose from 'killed yeast'. This dismissed spontaneous generation (life arising from decaying and rotting matter). Panspermia proposes that units of life (spores) were transferred to earth from other planets.",
  },
  {
    d: 1, t: 45,
    q: "In S.L. Miller's experiment (1953), which mixture was subjected to electric discharge at 800°C?",
    o: [
      "CH₄, H₂, NH₃ and water vapour",
      "CO₂, O₂, N₂ and water vapour",
      "CH₄, O₂, NH₃ and CO₂",
      "H₂, O₂, N₂ and HCN",
    ],
    a: 0,
    e: "Miller created electric discharge in a closed flask containing CH₄, H₂, NH₃ and water vapour at 800°C and observed formation of amino acids. This supported Oparin and Haldane's idea of chemical evolution under a reducing early atmosphere. Free oxygen was absent from the primitive atmosphere, so options with O₂ are wrong.",
  },
  {
    d: 2, t: 60,
    q: "Statement I: Oparin of Russia and Haldane of England proposed that the first form of life could have come from pre-existing non-living organic molecules (e.g. RNA, protein), and that formation of life was preceded by chemical evolution.\nStatement II: In similar experiments to Miller's, others observed the formation of sugars, nitrogen bases, pigments and fats.",
    o: SI,
    a: 0,
    h: "Both are lines from the theory of chemical evolution.",
    e: "Both statements are correct. Oparin and Haldane proposed chemical evolution — formation of diverse organic molecules from inorganic constituents under early-earth conditions (high temperature, volcanic storms, reducing atmosphere). Later experiments similar to Miller's produced sugars, nitrogen bases, pigments and fats; analysis of meteorite content also revealed similar compounds.",
  },
  {
    d: 2, t: 60,
    q: "Which condition of the primitive earth is NOT consistent with the Oparin–Haldane hypothesis of chemical evolution?",
    o: [
      "High temperature",
      "Volcanic storms",
      "A reducing atmosphere containing CH₄, NH₃ and water vapour",
      "An atmosphere rich in free oxygen",
    ],
    a: 3,
    h: "Organic molecules would be oxidised in the presence of O₂.",
    e: "The conditions on early earth were high temperature, volcanic storms and a reducing atmosphere containing CH₄, NH₃, etc. There was no free oxygen — it accumulated much later as a result of photosynthesis by early cells. An oxidising atmosphere would have destroyed the newly formed organic molecules.",
  },
  // --- Evidences: fossils, homology, analogy ---
  {
    d: 1, t: 45,
    q: "The age of fossils found in rocks is determined by:",
    o: [
      "Counting the annual rings in rocks",
      "Radioactive dating",
      "Comparing their DNA with modern organisms",
      "Measuring their size",
    ],
    a: 1,
    e: "Fossils are remains of hard parts of life forms found in rocks. Different-aged rock sediments contain fossils of different life forms that probably died during formation of that sediment. Their age is determined by the radioactive dating method. Paleontological evidence shows that life forms have changed over time.",
  },
  {
    d: 1, t: 45,
    q: "The forelimbs of whales, bats, cheetahs and humans share a similar anatomical structure of bones but perform different functions. Such organs are called:",
    o: ["Analogous organs", "Homologous organs", "Vestigial organs", "Convergent organs"],
    a: 1,
    e: "All these forelimbs have humerus, radius, ulna, carpals, metacarpals and phalanges, though they perform different functions. They are homologous organs — same structure, inherited from a common ancestor, developed along different directions due to adaptations to different needs. This is divergent evolution.",
  },
  {
    d: 1, t: 45,
    q: "Which pair is an example of analogous organs?",
    o: [
      "Forelimbs of bat and human",
      "Thorn of Bougainvillea and tendril of Cucurbita",
      "Wings of butterfly and wings of birds",
      "Vertebrate hearts",
    ],
    a: 2,
    e: "Wings of butterflies and birds look alike and perform the same function (flight) but are not anatomically similar structures — they are analogous, the result of convergent evolution. Forelimbs of vertebrates, vertebrate hearts and brains, and the thorn and tendril of Bougainvillea and Cucurbita are homologous.",
  },
  {
    d: 2, t: 70,
    q: "How many of the following pairs represent analogous structures?\n(a) Eye of the Octopus and eye of mammals\n(b) Flippers of penguins and flippers of dolphins\n(c) Sweet potato (root modification) and potato (stem modification)\n(d) Thorn of Bougainvillea and tendril of Cucurbita\n(e) Forelimbs of cheetah and whale",
    o: ["Two", "Three", "Four", "Five"],
    a: 1,
    h: "Analogous = same function, different origin/structure.",
    e: "(a), (b) and (c) are analogous — similar function but different anatomical origin, produced by similar habitat (convergent evolution): three pairs. (d) thorn and tendril, both modified axillary structures, and (e) vertebrate forelimbs are homologous.",
  },
  {
    d: 2, t: 70,
    q: "Assertion (A): Homologous organs are an example of divergent evolution.\nReason (R): Homologous organs have the same structure inherited from a common ancestor but have developed along different directions due to adaptation to different needs.",
    o: AR,
    a: 0,
    h: "Same ancestor, different functions → diverging paths.",
    e: "Both true and R explains A. A common ancestral structure modified for different functions (whale flipper, bat wing, human arm) indicates descent from a common ancestor followed by divergence. Analogous organs, in contrast, indicate convergent evolution.",
  },
  {
    d: 3, t: 85,
    q: "Assertion (A): Analogous structures are a result of convergent evolution.\nReason (R): Analogous structures are anatomically similar structures that perform different functions.",
    o: AR,
    a: 2,
    h: "Re-read the definition in R — is it describing analogy or homology?",
    e: "A is true: different structures evolving for the same function because of similar habitats is convergent evolution. R is false: analogous structures are NOT anatomically similar though they perform SIMILAR functions. 'Anatomically similar but performing different functions' is the definition of homologous structures.",
  },
  {
    d: 2, t: 60,
    q: "Similarities in proteins and genes performing a given function among diverse organisms give clues to common ancestry. This type of evidence is called:",
    o: [
      "Paleontological evidence",
      "Biochemical (molecular) evidence",
      "Embryological evidence",
      "Biogeographical evidence",
    ],
    a: 1,
    h: "Proteins and genes are molecules.",
    e: "NCERT states that similarities in proteins and genes performing a given function among diverse organisms give clues to common ancestry — biochemical similarities point to the same shared ancestry as structural similarities. Paleontological evidence comes from fossils.",
  },
  // --- Natural selection in action ---
  {
    d: 1, t: 50,
    q: "In a collection of moths made in England in 1850 (before industrialisation), compared with a collection made in 1920 from the same area:",
    o: [
      "Dark-winged moths were more in 1850 and white-winged moths were more in 1920",
      "White-winged moths were more in 1850 and dark-winged moths were more in 1920",
      "Both types were equal in number in both collections",
      "Dark-winged moths were completely absent in 1920",
    ],
    a: 1,
    e: "Before industrialisation (1850), there were more white-winged moths on trees than dark-winged (melanised) moths. After industrialisation (1920), there were more dark-winged moths in the same area. Smoke and soot darkened tree trunks and killed lichens, so white moths were picked off by predators while dark moths were camouflaged — industrial melanism. Neither variety was totally wiped out.",
  },
  {
    d: 2, t: 70,
    q: "Why did white-winged moths decline in industrial areas of England?",
    o: [
      "Soot caused a mutation that turned white moths dark",
      "White moths migrated to rural areas in search of lichens",
      "On tree trunks darkened by soot and devoid of lichens, white moths were easily spotted and eaten by predators",
      "Dark moths out-competed white moths for food",
    ],
    a: 2,
    h: "Natural selection acts on existing variation; it does not create it.",
    e: "During industrialisation, tree trunks became dark due to industrial smoke and soot, and lichens could not grow there. White-winged moths did not survive because predators identified them against the dark background; dark-winged moths were camouflaged and survived. Soot did not cause mutations — the dark variety already existed. Lichens can be used as industrial pollution indicators, as they do not grow in polluted areas.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following is an example of evolution by anthropogenic action?",
    o: [
      "Darwin's finches on the Galapagos Islands",
      "Adaptive radiation of Australian marsupials",
      "Development of resistance to antibiotics in microbes and to herbicides and pesticides in weeds and pests",
      "Formation of homologous forelimbs in mammals",
    ],
    a: 2,
    h: "Anthropogenic = caused by human activity.",
    e: "Excess use of herbicides and pesticides has resulted in selection of resistant varieties in a much lesser time scale; similarly microbes resistant to antibiotics or drugs appear on a time scale of months and years, not centuries. These are evolution by anthropogenic action. Finches and marsupials are natural adaptive radiations.",
  },
  // --- Adaptive radiation ---
  {
    d: 1, t: 45,
    q: "During his journey, Darwin observed a variety of small black birds (finches) that had evolved from seed-eating ancestors into many forms with altered beaks. They were found on:",
    o: ["Malay Archipelago", "Galapagos Islands", "Andaman Islands", "Madagascar"],
    a: 1,
    e: "Darwin went to the Galapagos Islands and observed Darwin's finches. From the original seed-eating features, many other forms with altered beaks arose, enabling them to become insectivorous and vegetarian finches. Alfred Wallace worked in the Malay Archipelago.",
  },
  {
    d: 1, t: 45,
    q: "The process of evolution of different species in a given geographical area, starting from a point and radiating to other areas of geography (habitats), is called:",
    o: ["Adaptive radiation", "Saltation", "Genetic drift", "Founder effect"],
    a: 0,
    e: "This is the NCERT definition of adaptive radiation. Darwin's finches and Australian marsupials are examples. Saltation is a single-step large mutation (de Vries); genetic drift is a chance change in allele frequency.",
  },
  {
    d: 2, t: 70,
    q: "When more than one adaptive radiation appears to have occurred in an isolated geographical area (representing different habitats), it can be called convergent evolution. An example is:",
    o: [
      "Placental wolf and Tasmanian wolf (a marsupial)",
      "Forelimbs of whale and bat",
      "Seed-eating and insect-eating finches on one island",
      "Dark and light varieties of Biston betularia",
    ],
    a: 0,
    h: "Look for two unrelated groups producing look-alikes.",
    e: "Placental mammals in Australia also exhibit adaptive radiation into varieties, each similar to a corresponding marsupial — e.g. placental wolf and Tasmanian wolf (marsupial); likewise anteater–numbat, flying squirrel–flying phalanger, mole–marsupial mole. Two unrelated lineages converging on similar forms is convergent evolution. Forelimbs and finches illustrate divergence.",
  },
  {
    d: 3, t: 90,
    q: "Match the placental mammal with the Australian marsupial it resembles.\nColumn I (Placental): (A) Anteater (B) Mouse (C) Flying squirrel (D) Bobcat\nColumn II (Marsupial): (i) Flying phalanger (ii) Numbat (iii) Tasmanian tiger cat (iv) Marsupial mouse",
    o: [
      "A-ii, B-iv, C-i, D-iii",
      "A-i, B-iv, C-ii, D-iii",
      "A-ii, B-iii, C-i, D-iv",
      "A-iv, B-ii, C-iii, D-i",
    ],
    a: 0,
    h: "The numbat is the banded anteater of Australia; the phalanger glides.",
    e: "Convergent pairs (NCERT figure): anteater–numbat (banded anteater) (A-ii), mouse–marsupial mouse (B-iv), flying squirrel–flying phalanger (C-i), bobcat–Tasmanian tiger cat (D-iii). Others include placental wolf–Tasmanian wolf, lemur–spotted cuscus and mole–marsupial mole.",
  },
  // --- Darwin, Lamarck, de Vries ---
  {
    d: 1, t: 45,
    q: "Based on observations made during his sea voyage around the world in the sail ship H.M.S. Beagle, Darwin concluded that:",
    o: [
      "Existing living forms share similarities to varying degrees among themselves and with life forms that existed millions of years ago",
      "All organisms were created as they are today and have never changed",
      "Acquired characters are always inherited",
      "Evolution occurs only by large sudden mutations",
    ],
    a: 0,
    e: "Darwin concluded that existing living forms share similarities to varying degrees not only among themselves but also with life forms that existed millions of years ago; many such forms do not exist any more. Inheritance of acquired characters is Lamarck's idea; large sudden mutations (saltation) is de Vries' idea.",
  },
  {
    d: 2, t: 60,
    q: "In Darwinian terms, 'fitness' ultimately refers to:",
    o: [
      "Physical strength of an individual",
      "Reproductive fitness — the ability to leave more progeny",
      "Longevity of an individual",
      "Ability to use and disuse organs",
    ],
    a: 1,
    h: "Natural selection is measured in offspring.",
    e: "According to Darwin, the fitness of an individual ultimately and only refers to reproductive fitness. Those who are better fit in an environment leave more progeny than others; these survive more and are hence selected by nature. Physical strength or long life matter only insofar as they increase reproductive success.",
  },
  {
    d: 1, t: 45,
    q: "The naturalist who worked in the Malay Archipelago and came to similar conclusions as Darwin around the same time was:",
    o: ["Hugo de Vries", "Alfred Wallace", "Lamarck", "Ernst Haeckel"],
    a: 1,
    e: "Alfred Wallace, a naturalist who worked in the Malay Archipelago, also came to similar conclusions (natural selection) around the same time as Darwin. The two key concepts of Darwinian theory are branching descent and natural selection.",
  },
  {
    d: 2, t: 60,
    q: "Lamarck explained the evolution of the long neck of giraffes by:",
    o: [
      "Natural selection of long-necked variants",
      "Sudden large mutations (saltation)",
      "Use and disuse of organs — attempts to forage leaves on tall trees elongated the neck, and this acquired character was passed on",
      "Genetic drift in a small population",
    ],
    a: 2,
    h: "Lamarck believed in inheritance of acquired characters.",
    e: "Lamarck said evolution of life forms occurred driven by use and disuse of organs. Giraffes, in an attempt to forage leaves on tall trees, adapted by elongation of their necks; as they passed this acquired character to succeeding generations, giraffes slowly came to acquire long necks. Few believe this conjecture today. Natural selection of variants is Darwin's explanation.",
  },
  {
    d: 2, t: 70,
    q: "Hugo de Vries, based on his work on evening primrose (Oenothera lamarckiana), believed that:",
    o: [
      "Evolution occurs through small, directional variations accumulated gradually",
      "Mutations cause evolution; they are random and directionless, and single-step large mutations (saltation) cause speciation",
      "Acquired characters drive evolution",
      "Life arose by spontaneous generation",
    ],
    a: 1,
    h: "Contrast de Vries' mutations with Darwin's variations.",
    e: "De Vries proposed that mutations cause evolution and not the minor heritable variations Darwin talked about. Mutations are random and directionless, while Darwinian variations are small and directional. Darwinian evolution is gradual, whereas de Vries believed mutation caused speciation and called it saltation (single-step large mutation).",
  },
  {
    d: 3, t: 85,
    q: "Statement I: Darwinian variations are small and directional, and evolution according to Darwin is gradual.\nStatement II: Mutations, according to de Vries, are random and directionless, and studies on population genetics later brought out some clarity on this.",
    o: SI,
    a: 0,
    h: "Both compare Darwin and de Vries accurately.",
    e: "Both are correct NCERT comparisons. Darwin's variations are small and directional, giving gradual evolution. De Vries' mutations are random and directionless; saltation causes speciation in a single step. Population genetics studies later brought clarity on the role of mutation and selection.",
  },
  // --- Hardy–Weinberg ---
  {
    d: 1, t: 50,
    q: "In the Hardy–Weinberg equation p² + 2pq + q² = 1, the term 2pq represents the frequency of:",
    o: [
      "Homozygous dominant individuals",
      "Heterozygous individuals",
      "Homozygous recessive individuals",
      "The recessive allele",
    ],
    a: 1,
    e: "p and q are the frequencies of alleles A and a. In a population at equilibrium, AA = p², Aa = 2pq and aa = q². This is the binomial expansion of (p + q)², and p + q = 1. q alone is the frequency of the recessive allele.",
  },
  {
    d: 2, t: 75,
    q: "In a population in Hardy–Weinberg equilibrium, 16% of individuals show a recessive trait (aa). The frequency of heterozygous (Aa) individuals is:",
    o: ["0.24", "0.36", "0.48", "0.84"],
    a: 2,
    h: "q² = 0.16. Find q, then p, then 2pq.",
    e: "q² = 0.16 → q = 0.4, so p = 1 − 0.4 = 0.6. Heterozygotes = 2pq = 2 × 0.6 × 0.4 = 0.48. 0.24 forgets the factor 2 (pq); 0.36 is p² (AA); 0.84 is the frequency of all individuals showing the dominant phenotype (1 − 0.16).",
  },
  {
    d: 3, t: 80,
    q: "In a population of 1000 individuals in Hardy–Weinberg equilibrium, 90 are homozygous recessive (aa). How many individuals are expected to be homozygous dominant (AA)?",
    o: ["490", "420", "700", "810"],
    a: 0,
    h: "q² = 90/1000.",
    e: "q² = 0.09 → q = 0.3, p = 0.7. AA = p² × 1000 = 0.49 × 1000 = 490; Aa = 2pq × 1000 = 0.42 × 1000 = 420 (check: 490 + 420 + 90 = 1000). 700 uses p instead of p²; 810 uses (1 − q²)² style errors; 420 is the heterozygote count.",
  },
  {
    d: 3, t: 100,
    q: "In a large, random-mating population at Hardy–Weinberg equilibrium, the frequency of a recessive allele is 0.2. Among individuals with the dominant phenotype, what fraction are carriers (heterozygous)?",
    o: ["1/3", "1/2", "0.32", "2/3"],
    a: 0,
    h: "Fraction = 2pq ÷ (p² + 2pq).",
    e: "q = 0.2, p = 0.8. AA = p² = 0.64; Aa = 2pq = 0.32; aa = q² = 0.04. Dominant phenotype = 0.64 + 0.32 = 0.96. Carriers among them = 0.32/0.96 = 1/3. 0.32 is the carrier frequency in the whole population, not among dominant-phenotype individuals — the usual trap.",
  },
  {
    d: 2, t: 70,
    q: "Which one of the following is NOT one of the five factors that NCERT lists as affecting Hardy–Weinberg equilibrium?",
    o: [
      "Gene migration or gene flow",
      "Genetic drift",
      "Random mating in a very large population",
      "Genetic recombination",
    ],
    a: 2,
    h: "One option is actually a condition FOR equilibrium.",
    e: "The five factors that disturb Hardy–Weinberg equilibrium are gene migration (gene flow), genetic drift, mutation, genetic recombination and natural selection. Random mating in a very large population is one of the conditions under which allele frequencies stay constant — it maintains, rather than disturbs, equilibrium.",
  },
  {
    d: 3, t: 85,
    q: "Assertion (A): Sometimes a change in allele frequency due to chance is so different in the new sample of population that they become a different species.\nReason (R): In this case, the original drifted population becomes the founders, and the effect is called the founder effect.",
    o: AR,
    a: 0,
    h: "Genetic drift → founders.",
    e: "Both are true and R explains A. When changes in allele frequency occur by chance, it is genetic drift. Sometimes the change is so drastic in the new sample that they become a different species; the original drifted population becomes the founders, and this is the founder effect.",
  },
  {
    d: 3, t: 90,
    q: "Assertion (A): Disruptive selection results in more individuals acquiring peripheral character values at both ends of the distribution curve.\nReason (R): In stabilising selection, more individuals acquire a value other than the mean character value.",
    o: AR,
    a: 2,
    h: "Which type of selection favours the mean?",
    e: "A is true: disruptive selection favours both extremes, so more individuals acquire peripheral character values at both ends. R is false: in stabilisation, more individuals acquire the MEAN character value. 'More individuals acquiring a value other than the mean' describes directional selection.",
  },
  {
    d: 2, t: 70,
    q: "Match the type of natural selection with its effect on the distribution of a character in a population.\nColumn I: (A) Stabilising (B) Directional (C) Disruptive\nColumn II: (i) Peak shifts in one direction (ii) Peaks appear at both ends (iii) Peak becomes higher and narrower at the mean",
    o: [
      "A-iii, B-i, C-ii",
      "A-i, B-iii, C-ii",
      "A-ii, B-i, C-iii",
      "A-iii, B-ii, C-i",
    ],
    a: 0,
    h: "Stabilising favours the average.",
    e: "Stabilising selection favours the mean value so the peak gets taller and narrower (A-iii); directional selection favours one extreme so the peak shifts one way (B-i); disruptive selection favours both extremes, giving two peaks (C-ii).",
  },
  {
    d: 2, t: 70,
    q: "How many of the following can disturb Hardy–Weinberg equilibrium in a population?\n(a) Mutation\n(b) Gene flow\n(c) Genetic drift\n(d) Natural selection\n(e) Genetic recombination during gametogenesis",
    o: ["Two", "Three", "Four", "Five"],
    a: 3,
    h: "Compare with the NCERT list of five factors.",
    e: "All five — mutation, gene flow (gene migration), genetic drift, natural selection and genetic recombination — are the factors that NCERT lists as affecting Hardy–Weinberg equilibrium. Any of them can change allele frequencies; when equilibrium is disturbed, the change in frequency is interpreted as evolution.",
  },
  // --- Brief account of evolution ---
  {
    d: 1, t: 50,
    q: "Which of the following was a fish with stout and strong fins, caught in South Africa in 1938, that was thought to be extinct?",
    o: ["Coelacanth", "Ichthyosaur", "Tyrannosaurus", "Dryopithecus"],
    a: 0,
    e: "The Coelacanth, caught in South Africa in 1938, belongs to the lobefins, which evolved into the first amphibians that lived on both land and water. Ichthyosaurs were fish-like reptiles; Tyrannosaurus rex was a dinosaur; Dryopithecus was a primate.",
  },
  {
    d: 2, t: 70,
    q: "Arrange the following events in the history of life in the correct chronological order (earliest first):\n(i) Jawless fish evolved\n(ii) Invertebrates formed and were active\n(iii) Dinosaurs suddenly disappeared\n(iv) First cellular forms of life appeared",
    o: [
      "iv → ii → i → iii",
      "iv → i → ii → iii",
      "ii → iv → i → iii",
      "iv → ii → iii → i",
    ],
    a: 0,
    h: "~2000 mya, ~500 mya, ~350 mya, ~65 mya.",
    e: "First cellular forms of life: about 2000 mya. Invertebrates were formed and active by about 500 mya. Jawless fish probably evolved around 350 mya. Dinosaurs suddenly disappeared about 65 mya. Hence iv → ii → i → iii.",
  },
  {
    d: 3, t: 70,
    q: "Statement I: About 200 million years ago some land reptiles went back into water to evolve into fish-like reptiles, probably the Ichthyosaurs.\nStatement II: Amphibians evolved into reptiles, which lay thick-shelled eggs that do not dry up in the sun, unlike those of amphibians.",
    o: SI,
    a: 0,
    h: "Both are NCERT lines from the brief account of evolution.",
    e: "Both are correct. Reptiles lay thick-shelled eggs that do not dry up in sun, which freed them from water for breeding; they evolved from amphibians. Around 200 mya some land reptiles went back into water as fish-like reptiles (Ichthyosaurs). The land reptiles were mostly dinosaurs; the biggest, Tyrannosaurus rex, was about 20 feet in height.",
  },
  {
    d: 2, t: 60,
    q: "The dinosaurs suddenly disappeared from the earth about:",
    o: ["650 million years ago", "200 million years ago", "65 million years ago", "6.5 million years ago"],
    a: 2,
    h: "Count the zeros carefully.",
    e: "About 65 mya the dinosaurs suddenly disappeared from the earth. We do not know the true reason; some say climatic changes killed them, others that most of them evolved into birds. 200 mya is when some reptiles returned to water (Ichthyosaurs).",
  },
  // --- Origin and evolution of man ---
  {
    d: 1, t: 45,
    q: "About 15 million years ago, two primates — one more ape-like and the other more man-like — existed. They were respectively:",
    o: [
      "Ramapithecus and Dryopithecus",
      "Dryopithecus and Ramapithecus",
      "Australopithecus and Homo habilis",
      "Homo erectus and Homo sapiens",
    ],
    a: 1,
    e: "About 15 mya, primates called Dryopithecus and Ramapithecus existed. They were hairy and walked like gorillas and chimpanzees. Ramapithecus was more man-like while Dryopithecus was more ape-like. Option A reverses them.",
  },
  {
    d: 1, t: 45,
    q: "The brain capacity of Homo habilis, the first human-like being, was:",
    o: ["650–800 cc", "900 cc", "1400 cc", "350–450 cc"],
    a: 0,
    e: "Homo habilis had brain capacities between 650 and 800 cc and probably did not eat meat. Homo erectus (about 1.5 mya) had a larger brain of around 900 cc; the Neanderthal man had about 1400 cc.",
  },
  {
    d: 3, t: 70,
    q: "Match the hominid with its feature.\nColumn I: (A) Australopithecines (B) Homo erectus (C) Neanderthal man (D) Homo habilis\nColumn II: (i) Brain about 900 cc, probably ate meat (ii) Buried their dead, used hides to protect the body (iii) Lived about 2 mya in East African grasslands, hunted with stone weapons, ate fruit (iv) First human-like being, brain 650–800 cc, probably did not eat meat",
    o: [
      "A-iii, B-i, C-ii, D-iv",
      "A-iv, B-i, C-ii, D-iii",
      "A-iii, B-ii, C-i, D-iv",
      "A-i, B-iii, C-iv, D-ii",
    ],
    a: 0,
    h: "Stone weapons + fruit + East Africa = earliest group listed.",
    e: "Australopithecines lived about 2 mya in East African grasslands, hunted with stone weapons and ate fruit (A-iii). Homo erectus, about 1.5 mya, had a brain of ~900 cc and probably ate meat (B-i). Neanderthal man (1400 cc) used hides and buried their dead (C-ii). Homo habilis was the first human-like being, 650–800 cc, probably non-meat-eating (D-iv).",
  },
  {
    d: 2, t: 60,
    q: "Fossils discovered in Java in 1891 revealed the next stage after Homo habilis. This was:",
    o: ["Homo erectus", "Neanderthal man", "Ramapithecus", "Homo sapiens"],
    a: 0,
    h: "Java man.",
    e: "Fossils discovered in Java in 1891 revealed Homo erectus (about 1.5 mya), with a large brain around 900 cc, who probably ate meat. Neanderthal fossils come from the near east and central Asia.",
  },
  {
    d: 3, t: 85,
    q: "Which of the following statements about human evolution is INCORRECT?",
    o: [
      "The Neanderthal man, with a brain size of 1400 cc, lived in the near east and central Asian countries between 1,00,000 and 40,000 years back",
      "Homo sapiens arose in Africa and moved across continents, developing into distinct races",
      "During the ice age between 75,000 and 10,000 years ago, modern Homo sapiens arose",
      "Agriculture came around 18,000 years back, which is also when the first prehistoric cave art developed",
    ],
    a: 3,
    h: "Two different dates are merged in one option.",
    e: "Prehistoric cave art developed about 18,000 years ago, but agriculture came around 10,000 years back, when human settlements started. The other statements are correct NCERT facts on Neanderthals, the African origin of Homo sapiens and the ice-age origin of modern humans.",
  },
  {
    d: 3, t: 90,
    q: "How many of the following statements are correct?\n(a) Fossils of man-like bones have been discovered in Ethiopia and Tanzania\n(b) Homo erectus had a brain capacity of about 1400 cc\n(c) Ramapithecus and Dryopithecus were hairy and walked like gorillas and chimpanzees\n(d) Neanderthal men used hides to protect their bodies and buried their dead\n(e) Homo habilis probably ate meat",
    o: ["Two", "Three", "Four", "Five"],
    a: 1,
    h: "Check the brain sizes and the diet of each hominid.",
    e: "Correct: (a), (c) and (d) — three statements. (b) is wrong: Homo erectus had ~900 cc; 1400 cc was the Neanderthal brain. (e) is wrong: Homo habilis probably did NOT eat meat; Homo erectus probably did.",
  },
  {
    d: 3, t: 85,
    q: "Statement I: Evolution is a stochastic process based on chance events in nature and chance mutation in organisms.\nStatement II: Natural selection is a process in which heritable variations enabling better survival are enabled to reproduce and leave a greater number of progeny.",
    o: SI,
    a: 0,
    h: "Both describe how NCERT frames the mechanism of evolution.",
    e: "Both are correct. NCERT describes evolution as a stochastic process based on chance events and chance mutation, and natural selection as the process by which heritable variations that enable better survival are enabled to reproduce and leave more progeny. Variation due to mutation or recombination, plus selection over generations, leads to new kinds of organisms.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following is a correct pair of a divergent-evolution example from plants?",
    o: [
      "Sweet potato and potato",
      "Thorn of Bougainvillea and tendril of Cucurbita",
      "Wings of butterfly and bird",
      "Eye of Octopus and mammal",
    ],
    a: 1,
    h: "Divergent evolution produces homologous organs.",
    e: "Thorns of Bougainvillea and tendrils of Cucurbita are homologous — both arise as axillary modifications but serve different functions — and so represent divergent evolution in plants. Sweet potato (root) and potato (stem) are analogous; the other two pairs are animal analogies.",
  },
  {
    d: 2, t: 60,
    q: "Assertion (A): Lichens can be used as indicators of industrial pollution.\nReason (R): Lichens do not grow in areas that are polluted.",
    o: AR,
    a: 0,
    h: "Why were tree trunks in industrial England free of lichens?",
    e: "Both are true and R explains A. Lichens are sensitive to pollutants such as SO₂ and do not grow in polluted areas, so their absence indicates pollution. In industrial England, the loss of lichens and the darkening of tree trunks by soot made white-winged moths conspicuous to predators.",
  },
];

/* ================================================================== */
/* Exports                                                             */
/* ================================================================== */

export const questions: ExamQuestion[] = [...mk(MOL, "05", ch5), ...mk(EVO, "06", ch6)];

export const formulas: FormulaSheet[] = [];
