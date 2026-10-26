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
    q: "Thymine, which is present in DNA in place of uracil, is chemically:",
    o: ["5-methyl cytosine", "5-methyl uracil", "6-amino purine", "2-amino uracil"],
    a: 1,
    e: "Thymine is 5-methyl uracil. Both are pyrimidines; uracil is found in RNA and thymine in DNA. 6-aminopurine is adenine (a purine), and 5-methyl cytosine is a modified cytosine, not thymine.",
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
