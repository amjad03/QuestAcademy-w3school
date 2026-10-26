/**
 * Entrance exams — NEET (UG), JEE (Main), JEE (Advanced), KCET and COMEDK UGET.
 *
 * Each exam's subjects list the Class 11 and Class 12 NCERT chapters (the rows
 * from ./ncert, reused), so exam students get the same chapter pages as board
 * students. Weightage figures are rough shares of questions per subject in
 * recent papers; they shift every year and are only used to order revision and
 * weight study plans. Check the current official information bulletin (NTA,
 * KEA, COMEDK) before relying on any of it.
 */
import { subject, type Row } from "./build";
import { BIOLOGY_11, BIOLOGY_12, CHEMISTRY_11, CHEMISTRY_12, MATHS_11, MATHS_12, PHYSICS_11, PHYSICS_12 } from "./ncert";
import type { ExamId } from "@/content/types";
import type { SyllabusBoard, SyllabusChapter, SyllabusGrade, SyllabusSubject } from "./types";

/** Approximate weightage (% of the subject's questions) by chapter title; "11:" / "12:" keys disambiguate repeated titles. */
type Weights = Record<string, number>;

const PHY_NEET: Weights = {
  "Units and Measurements": 2,
  "Motion in a Straight Line": 2,
  "Motion in a Plane": 3,
  "Laws of Motion": 4,
  "Work, Energy and Power": 4,
  "System of Particles and Rotational Motion": 5,
  Gravitation: 4,
  "Mechanical Properties of Solids": 2,
  "Mechanical Properties of Fluids": 3,
  "Thermal Properties of Matter": 3,
  Thermodynamics: 4,
  "Kinetic Theory": 2,
  Oscillations: 3,
  Waves: 3,
  "Electric Charges and Fields": 4,
  "Electrostatic Potential and Capacitance": 5,
  "Current Electricity": 7,
  "Moving Charges and Magnetism": 5,
  "Magnetism and Matter": 2,
  "Electromagnetic Induction": 3,
  "Alternating Current": 3,
  "Electromagnetic Waves": 2,
  "Ray Optics and Optical Instruments": 6,
  "Wave Optics": 3,
  "Dual Nature of Radiation and Matter": 3,
  Atoms: 2,
  Nuclei: 3,
  "Semiconductor Electronics: Materials, Devices and Simple Circuits": 6,
};
const PHY_JEE: Weights = {
  ...PHY_NEET,
  "System of Particles and Rotational Motion": 7,
  "Motion in a Plane": 4,
  "Semiconductor Electronics: Materials, Devices and Simple Circuits": 4,
  "Ray Optics and Optical Instruments": 5,
  "Wave Optics": 4,
  "Dual Nature of Radiation and Matter": 4,
  Atoms: 3,
};
// JEE Advanced leans on mechanics and electromagnetism; modern physics and electronics are lighter.
const PHY_ADV: Weights = {
  ...PHY_JEE,
  "Laws of Motion": 6,
  "System of Particles and Rotational Motion": 9,
  "Work, Energy and Power": 5,
  "Electrostatic Potential and Capacitance": 6,
  "Electromagnetic Induction": 5,
  "Semiconductor Electronics: Materials, Devices and Simple Circuits": 1,
  "Electromagnetic Waves": 1,
};
const PHY_CET: Weights = { ...PHY_NEET, "Current Electricity": 8, "Ray Optics and Optical Instruments": 7, "Moving Charges and Magnetism": 6 };

const CHE_NEET: Weights = {
  "Some Basic Concepts of Chemistry": 4,
  "Structure of Atom": 4,
  "Classification of Elements and Periodicity in Properties": 3,
  "Chemical Bonding and Molecular Structure": 8,
  Thermodynamics: 5,
  Equilibrium: 6,
  "Redox Reactions": 2,
  "Organic Chemistry – Some Basic Principles and Techniques": 7,
  Hydrocarbons: 5,
  Solutions: 4,
  Electrochemistry: 5,
  "Chemical Kinetics": 4,
  "The d- and f-Block Elements": 5,
  "Coordination Compounds": 6,
  "Haloalkanes and Haloarenes": 4,
  "Alcohols, Phenols and Ethers": 5,
  "Aldehydes, Ketones and Carboxylic Acids": 6,
  Amines: 4,
  Biomolecules: 4,
};
const CHE_JEE: Weights = { ...CHE_NEET, "Some Basic Concepts of Chemistry": 3, "Chemical Bonding and Molecular Structure": 7, "Coordination Compounds": 7, Biomolecules: 3 };
const CHE_ADV: Weights = { ...CHE_JEE, Equilibrium: 7, Thermodynamics: 6, "Organic Chemistry – Some Basic Principles and Techniques": 8, Biomolecules: 2, "Redox Reactions": 3 };

const BIO_NEET: Weights = {
  "The Living World": 1,
  "Biological Classification": 3,
  "Plant Kingdom": 3,
  "Animal Kingdom": 5,
  "Morphology of Flowering Plants": 4,
  "Anatomy of Flowering Plants": 3,
  "Structural Organisation in Animals": 2,
  "Cell: The Unit of Life": 4,
  Biomolecules: 3,
  "Cell Cycle and Cell Division": 3,
  "Photosynthesis in Higher Plants": 3,
  "Respiration in Plants": 2,
  "Plant Growth and Development": 2,
  "Breathing and Exchange of Gases": 2,
  "Body Fluids and Circulation": 3,
  "Excretory Products and their Elimination": 2,
  "Locomotion and Movement": 2,
  "Neural Control and Coordination": 2,
  "Chemical Coordination and Integration": 3,
  "Sexual Reproduction in Flowering Plants": 4,
  "Human Reproduction": 4,
  "Reproductive Health": 3,
  "Principles of Inheritance and Variation": 7,
  "Molecular Basis of Inheritance": 7,
  Evolution: 3,
  "Human Health and Disease": 3,
  "Microbes in Human Welfare": 2,
  "Biotechnology: Principles and Processes": 3,
  "Biotechnology and its Applications": 3,
  "Organisms and Populations": 3,
  Ecosystem: 3,
  "Biodiversity and Conservation": 3,
};
const BIO_CET: Weights = { ...BIO_NEET, "Animal Kingdom": 4, "Principles of Inheritance and Variation": 6, "Molecular Basis of Inheritance": 6 };

const MAT_JEE: Weights = {
  Sets: 1,
  "11:Relations and Functions": 3,
  "Trigonometric Functions": 3,
  "Complex Numbers and Quadratic Equations": 7,
  "Linear Inequalities": 1,
  "Permutations and Combinations": 4,
  "Binomial Theorem": 3,
  "Sequences and Series": 6,
  "Straight Lines": 4,
  "Conic Sections": 8,
  "Introduction to Three Dimensional Geometry": 1,
  "Limits and Derivatives": 4,
  Statistics: 3,
  "11:Probability": 2,
  "12:Relations and Functions": 2,
  "Inverse Trigonometric Functions": 2,
  Matrices: 4,
  Determinants: 3,
  "Continuity and Differentiability": 5,
  "Application of Derivatives": 5,
  Integrals: 7,
  "Application of Integrals": 3,
  "Differential Equations": 4,
  "Vector Algebra": 4,
  "Three Dimensional Geometry": 6,
  "Linear Programming": 1,
  "12:Probability": 5,
};
const MAT_ADV: Weights = { ...MAT_JEE, "Application of Derivatives": 7, Integrals: 9, "Conic Sections": 7, "Permutations and Combinations": 5, Statistics: 1, "Linear Programming": 0.5, "12:Probability": 6 };
// KCET / COMEDK follow the state PUC / NCERT syllabus: Class 12 carries a little more.
const MAT_CET: Weights = { ...MAT_JEE, "Linear Programming": 3, Matrices: 5, Determinants: 5, "Conic Sections": 5, "Sequences and Series": 4, "Linear Inequalities": 2 };

type Klass = "11" | "12";
const weigh = (rows: readonly Row[], w: Weights, klass: Klass): Row[] => rows.map(([title, key]) => [title, key, w[`${klass}:${title}`] ?? w[title] ?? 2] as const);

/**
 * A subject of Class 11 + Class 12 chapters. Each half is built with its class
 * as the grade so "11:" / "12:" lesson links resolve to the right chapter, then
 * the chapters get exam-wide ids (`exam:<grade>:<subject>:<n>`).
 */
function examSubject(grade: ExamId, id: string, name: string, r11: readonly Row[], r12: readonly Row[], w: Weights): SyllabusSubject {
  const parts = ([["11", r11], ["12", r12]] as const).map(([klass, rows]) => subject(`exam:${klass}`, id, name, weigh(rows, w, klass)).chapters.map((c): SyllabusChapter => ({ ...c, grade: klass })));
  const chapters = parts.flat().map((c, i) => ({ ...c, id: `exam:${grade}:${id}:${i + 1}` }));
  return { id, name, chapters };
}

const P = (g: ExamId, w: Weights) => examSubject(g, "physics", "Physics", PHYSICS_11, PHYSICS_12, w);
const C = (g: ExamId, w: Weights) => examSubject(g, "chemistry", "Chemistry", CHEMISTRY_11, CHEMISTRY_12, w);
const B = (g: ExamId, w: Weights) => examSubject(g, "biology", "Biology", BIOLOGY_11, BIOLOGY_12, w);
const M = (g: ExamId, w: Weights) => examSubject(g, "maths", "Mathematics", MATHS_11, MATHS_12, w);

const grade = (id: ExamId, name: string, subjects: SyllabusSubject[]): SyllabusGrade => ({ id, name, exam: { name, examId: id }, subjects });

export const EXAM: SyllabusBoard = {
  id: "exam",
  name: "Entrance exams",
  note: "Class 11 + 12 NCERT chapters for each exam · weightage is approximate and only used to order revision.",
  grades: [
    grade("NEET", "NEET (UG)", [P("NEET", PHY_NEET), C("NEET", CHE_NEET), B("NEET", BIO_NEET)]),
    grade("JEE", "JEE (Main)", [P("JEE", PHY_JEE), C("JEE", CHE_JEE), M("JEE", MAT_JEE)]),
    grade("JEE_ADV", "JEE (Advanced)", [P("JEE_ADV", PHY_ADV), C("JEE_ADV", CHE_ADV), M("JEE_ADV", MAT_ADV)]),
    grade("KCET", "KCET", [P("KCET", PHY_CET), C("KCET", CHE_NEET), M("KCET", MAT_CET), B("KCET", BIO_CET)]),
    grade("COMEDK", "COMEDK UGET", [P("COMEDK", PHY_JEE), C("COMEDK", CHE_JEE), M("COMEDK", MAT_CET)]),
  ],
};
