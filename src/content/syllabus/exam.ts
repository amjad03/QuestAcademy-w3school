/**
 * NEET (UG) and JEE (Main) — units as listed in the NTA syllabus.
 * Weightage figures are rough shares of questions per subject, averaged from
 * recent papers; they shift every year and are only used to order revision.
 * Mapping based on known syllabi — check against the current official NTA
 * information bulletin before relying on it.
 */
import { subject, type Row } from "./build";
import type { SyllabusBoard } from "./types";

const PHYSICS_NEET: Row[] = [
  ["Units and Measurements", "phy.units", 2],
  ["Kinematics", "phy.kinematics", 5],
  ["Laws of Motion", "phy.laws", 5],
  ["Work, Energy and Power", "phy.wep", 5],
  ["Rotational Motion", "phy.rotation", 5],
  ["Gravitation", "phy.gravitation", 4],
  ["Properties of Solids and Liquids", "phy.bulk", 5],
  ["Thermodynamics", "phy.thermo", 5],
  ["Kinetic Theory of Gases", "phy.thermo", 3],
  ["Oscillations and Waves", "phy.waves", 6],
  ["Electrostatics", "phy.electrostatics", 8],
  ["Current Electricity", "phy.current", 8],
  ["Magnetic Effects of Current and Magnetism", "phy.magnetism", 8],
  ["Electromagnetic Induction and Alternating Currents", "phy.emi", 5],
  ["Electromagnetic Waves", "phy.em-waves", 2],
  ["Optics", "phy.ray-optics", 9],
  ["Dual Nature of Matter and Radiation", "phy.modern", 3],
  ["Atoms and Nuclei", "phy.modern", 4],
  ["Electronic Devices", "phy.electronics", 6],
  ["Experimental Skills", "phy.none", 2],
];
// JEE Main physics: modern physics and mechanics carry a little more, electronics less.
const PHYSICS_JEE: Row[] = PHYSICS_NEET.map(([t, k, w]) => [t, k, t === "Electronic Devices" ? 4 : t === "Rotational Motion" ? 7 : w] as const);

const CHEMISTRY: Row[] = [
  ["Some Basic Concepts in Chemistry", "che.mole", 3],
  ["Atomic Structure", "che.atom", 4],
  ["Chemical Bonding and Molecular Structure", "che.bonding", 7],
  ["Chemical Thermodynamics", "che.thermo", 5],
  ["Solutions", "che.none", 4],
  ["Equilibrium", "che.equilibrium", 6],
  ["Redox Reactions and Electrochemistry", "che.electrochem", 5],
  ["Chemical Kinetics", "che.kinetics", 4],
  ["Classification of Elements and Periodicity in Properties", "che.periodic", 3],
  ["p-Block Elements", "che.none", 6],
  ["d- and f-Block Elements", "che.none", 4],
  ["Co-ordination Compounds", "che.coordination", 6],
  ["Purification and Characterisation of Organic Compounds", "che.organic", 2],
  ["Some Basic Principles of Organic Chemistry", "che.organic", 6],
  ["Hydrocarbons", "che.hydrocarbons", 5],
  ["Organic Compounds Containing Halogens", "che.organic-func", 4],
  ["Organic Compounds Containing Oxygen", "che.organic-func", 8],
  ["Organic Compounds Containing Nitrogen", "che.organic-func", 4],
  ["Biomolecules", "bio.biomolecules", 3],
  ["Principles Related to Practical Chemistry", "che.none", 2],
];

const BIOLOGY_NEET: Row[] = [
  ["Diversity in Living World", "bio.diversity", 14],
  ["Structural Organisation in Animals and Plants", "bio.plant-structure", 6],
  ["Cell Structure and Function", "bio.cell", 9],
  ["Plant Physiology", "bio.plant-phys", 7],
  ["Human Physiology", "bio.physiology", 18],
  ["Reproduction", "bio.reproduction", 10],
  ["Genetics and Evolution", "bio.genetics", 16],
  ["Biology and Human Welfare", "bio.none", 4],
  ["Biotechnology and its Applications", "bio.biotech", 6],
  ["Ecology and Environment", "bio.ecology", 10],
];

const MATHS_JEE: Row[] = [
  ["Sets, Relations and Functions", "mat.sets", 4],
  ["Complex Numbers and Quadratic Equations", "mat.quadratic", 7],
  ["Matrices and Determinants", "mat.matrices", 7],
  ["Permutations and Combinations", "mat.none", 4],
  ["Binomial Theorem", "mat.none", 3],
  ["Sequence and Series", "mat.sequences", 6],
  ["Limit, Continuity and Differentiability", "mat.continuity", 10],
  ["Integral Calculus", "mat.integration", 10],
  ["Differential Equations", "mat.diff-eq", 4],
  ["Co-ordinate Geometry", "mat.coord", 15],
  ["Three Dimensional Geometry", "mat.vectors", 7],
  ["Vector Algebra", "mat.vectors", 5],
  ["Statistics and Probability", "mat.probability", 8],
  ["Trigonometry", "mat.trig", 4],
];

export const EXAM: SyllabusBoard = {
  id: "exam",
  name: "NEET / JEE",
  note: "NTA syllabus units · weightage is approximate and only used to order revision.",
  grades: [
    {
      id: "NEET",
      name: "NEET (UG)",
      exam: { name: "NEET (UG)", examId: "NEET" },
      subjects: [subject("exam:NEET", "physics", "Physics", PHYSICS_NEET), subject("exam:NEET", "chemistry", "Chemistry", CHEMISTRY), subject("exam:NEET", "biology", "Biology", BIOLOGY_NEET)],
    },
    {
      id: "JEE",
      name: "JEE (Main)",
      exam: { name: "JEE (Main)", examId: "JEE" },
      subjects: [subject("exam:JEE", "physics", "Physics", PHYSICS_JEE), subject("exam:JEE", "chemistry", "Chemistry", CHEMISTRY), subject("exam:JEE", "maths", "Mathematics", MATHS_JEE)],
    },
  ],
};
