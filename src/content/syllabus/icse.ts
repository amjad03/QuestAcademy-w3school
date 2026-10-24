/**
 * CISCE · ICSE (Class 9–10) and ISC (Class 11–12).
 * Mapping based on known syllabi (CISCE regulations & syllabuses) — check against
 * the current official edition; topic grouping differs between textbook publishers.
 */
import { subject, type Row } from "./build";
import type { SyllabusBoard } from "./types";
import * as X from "./class10";

const PHYSICS_9: Row[] = [
  ["Measurements and Experimentation", "phy.units"],
  ["Motion in One Dimension", "phy.motion-basic"],
  ["Laws of Motion", "phy.force-basic"],
  ["Fluids", "phy.bulk"],
  ["Heat and Energy", "phy.work-basic"],
  ["Light", "phy.light-basic"],
  ["Sound", "phy.sound-basic"],
  ["Electricity and Magnetism", "phy.electricity-basic"],
];
const PHYSICS_10: Row[] = [
  ["Force", "phy.force-basic"],
  ["Work, Energy and Power", "phy.work-basic"],
  ["Machines", "phy.none"],
  ["Refraction of Light at Plane Surfaces", "phy.light-basic"],
  ["Refraction through a Lens", "phy.none"],
  ["Spectrum", "phy.none"],
  ["Sound", "phy.sound-basic"],
  ["Current Electricity", "phy.electricity-basic"],
  ["Household Circuits", "phy.none"],
  ["Electro-magnetism", "phy.magnetism-basic"],
  ["Calorimetry", "phy.none"],
  ["Radioactivity", "phy.none"],
];
const CHEMISTRY_9: Row[] = [
  ["The Language of Chemistry", "che.atoms-molecules"],
  ["Chemical Changes and Reactions", "che.reactions-basic"],
  ["Water", "che.none"],
  ["Atomic Structure and Chemical Bonding", "che.atom-basic"],
  ["The Periodic Table", "che.periodic-basic"],
  ["Study of the First Element – Hydrogen", "che.none"],
  ["Study of Gas Laws", "che.matter"],
  ["Atmospheric Pollution", "che.none"],
];
const CHEMISTRY_10: Row[] = [
  ["Periodic Properties and Variations of Properties", "che.periodic-basic"],
  ["Chemical Bonding", "che.none"],
  ["Acids, Bases and Salts", "che.acids-basic"],
  ["Analytical Chemistry", "che.none"],
  ["Mole Concept and Stoichiometry", "che.mole"],
  ["Electrolysis", "che.none"],
  ["Metallurgy", "che.none"],
  ["Study of Compounds (HCl, Ammonia, Nitric Acid, Sulphuric Acid)", "che.none"],
  ["Organic Chemistry", "che.carbon-basic"],
];
const BIOLOGY_9: Row[] = [
  ["Cell: The Unit of Life", "bio.cell-basic"],
  ["Tissues", "bio.tissues"],
  ["Flowering Plants", "bio.none"],
  ["Plant Physiology", "bio.plant-phys"],
  ["Diversity in Living Organisms", "bio.none"],
  ["Human Anatomy and Physiology", "bio.life-processes"],
  ["Health and Hygiene", "bio.none"],
  ["Waste Generation and Management", "bio.none"],
];
const BIOLOGY_10: Row[] = [
  ["Cell Cycle and Cell Division", "bio.none"],
  ["Genetics", "bio.heredity-basic"],
  ["Absorption by Roots", "bio.none"],
  ["Transpiration", "bio.none"],
  ["Photosynthesis", "bio.photosynthesis"],
  ["Chemical Coordination in Plants", "bio.none"],
  ["Circulatory System", "bio.circulation"],
  ["Excretory System", "bio.none"],
  ["Nervous System and Sense Organs", "bio.none"],
  ["Endocrine System", "bio.none"],
  ["Reproductive System", "bio.none"],
  ["Human Population", "bio.none"],
  ["Pollution", "bio.environment-basic"],
];
const MATHS_9: Row[] = [
  ["Rational and Irrational Numbers", "mat.numbers"],
  ["Compound Interest", "mat.ratio"],
  ["Expansions", "mat.algebra-basic"],
  ["Factorisation", "mat.polynomials"],
  ["Simultaneous Linear Equations", "mat.linear"],
  ["Indices", "mat.none"],
  ["Logarithms", "mat.none"],
  ["Triangles", "mat.geometry-basic"],
  ["Mid-point Theorem", "mat.none"],
  ["Pythagoras Theorem", "mat.none"],
  ["Rectilinear Figures", "mat.none"],
  ["Theorems on Area", "mat.none"],
  ["Circles", "mat.none"],
  ["Statistics", "mat.statistics"],
  ["Mensuration", "mat.area"],
  ["Trigonometry", "mat.trig-basic"],
  ["Co-ordinate Geometry", "mat.coord-basic"],
];
const MATHS_10: Row[] = [
  ["Goods and Services Tax (GST)", "mat.none"],
  ["Banking", "mat.none"],
  ["Shares and Dividends", "mat.none"],
  ["Linear Inequations", "mat.none"],
  ["Quadratic Equations", "mat.quadratic-basic"],
  ["Ratio and Proportion", "mat.ratio"],
  ["Factorisation (Remainder and Factor Theorem)", "mat.polynomials"],
  ["Matrices", "mat.none"],
  ["Arithmetic and Geometric Progression", "mat.ap-basic"],
  ["Reflection", "mat.none"],
  ["Section and Mid-point Formula", "mat.coord-basic"],
  ["Equation of a Line", "mat.linear"],
  ["Similarity", "mat.none"],
  ["Loci", "mat.none"],
  ["Circles", "mat.none"],
  ["Constructions", "mat.none"],
  ["Mensuration", "mat.none"],
  ["Trigonometry", "mat.trig-apps"],
  ["Statistics", "mat.statistics"],
  ["Probability", "mat.probability-basic"],
];

const PHYSICS_11: Row[] = [
  ["Physical World and Measurement", "phy.units"],
  ["Kinematics", "phy.kinematics"],
  ["Laws of Motion", "phy.laws"],
  ["Work, Power and Energy", "phy.wep"],
  ["Motion of System of Particles and Rigid Body", "phy.rotation"],
  ["Gravitation", "phy.gravitation"],
  ["Properties of Bulk Matter", "phy.bulk"],
  ["Heat and Thermodynamics", "phy.thermo"],
  ["Behaviour of Perfect Gases and Kinetic Theory of Gases", "phy.thermo"],
  ["Oscillations and Waves", "phy.waves"],
];
const PHYSICS_12: Row[] = [
  ["Electrostatics", "phy.electrostatics"],
  ["Current Electricity", "phy.current"],
  ["Magnetic Effects of Current and Magnetism", "phy.magnetism"],
  ["Electromagnetic Induction and Alternating Currents", "phy.emi"],
  ["Electromagnetic Waves", "phy.em-waves"],
  ["Optics", "phy.ray-optics"],
  ["Dual Nature of Radiation and Matter", "phy.modern"],
  ["Atoms and Nuclei", "phy.modern"],
  ["Electronic Devices", "phy.electronics"],
];
const CHEMISTRY_11: Row[] = [
  ["Some Basic Concepts of Chemistry", "che.mole"],
  ["Structure of Atom", "che.atom"],
  ["Classification of Elements and Periodicity in Properties", "che.periodic"],
  ["Chemical Bonding and Molecular Structure", "che.bonding"],
  ["States of Matter: Gaseous and Liquid States", "che.matter"],
  ["Chemical Thermodynamics", "che.thermo"],
  ["Equilibrium", "che.equilibrium"],
  ["Redox Reactions", "che.redox"],
  ["s-Block Elements", "che.none"],
  ["p-Block Elements (Groups 13 and 14)", "che.none"],
  ["Organic Chemistry: Basic Principles and Techniques", "che.organic"],
  ["Hydrocarbons", "che.hydrocarbons"],
  ["Environmental Chemistry", "che.none"],
];
const CHEMISTRY_12: Row[] = [
  ["Solutions", "che.none"],
  ["Electrochemistry", "che.electrochem"],
  ["Chemical Kinetics", "che.kinetics"],
  ["d- and f-Block Elements", "che.none"],
  ["Coordination Compounds", "che.coordination"],
  ["Haloalkanes and Haloarenes", "che.organic-func"],
  ["Alcohols, Phenols and Ethers", "che.organic-func"],
  ["Aldehydes, Ketones and Carboxylic Acids", "che.organic-func"],
  ["Organic Compounds containing Nitrogen", "che.organic-func"],
  ["Biomolecules", "bio.biomolecules"],
];
const BIOLOGY_11: Row[] = [
  ["Diversity of Living Organisms", "bio.diversity"],
  ["Structural Organisation in Animals and Plants", "bio.tissues"],
  ["Cell: Structure and Function", "bio.cell"],
  ["Plant Physiology", "bio.plant-phys"],
  ["Human Physiology", "bio.physiology"],
];
const BIOLOGY_12: Row[] = [
  ["Reproduction", "bio.reproduction"],
  ["Genetics and Evolution", "bio.genetics"],
  ["Biology and Human Welfare", "bio.none"],
  ["Biotechnology and its Applications", "bio.biotech"],
  ["Ecology and Environment", "bio.ecology"],
];
const MATHS_11: Row[] = [
  ["Sets", "mat.sets"],
  ["Relations and Functions", "mat.sets"],
  ["Trigonometric Functions", "mat.trig"],
  ["Complex Numbers and Quadratic Equations", "mat.quadratic"],
  ["Permutations and Combinations", "mat.none"],
  ["Binomial Theorem", "mat.none"],
  ["Sequences and Series", "mat.sequences"],
  ["Straight Lines", "mat.coord"],
  ["Circles", "mat.coord"],
  ["Conic Sections", "mat.conics"],
  ["Limits and Derivatives", "mat.limits"],
  ["Statistics", "mat.statistics"],
  ["Probability", "mat.probability"],
];
const MATHS_12: Row[] = [
  ["Relations and Functions", "mat.sets"],
  ["Inverse Trigonometric Functions", "mat.trig"],
  ["Matrices", "mat.matrices"],
  ["Determinants", "mat.matrices"],
  ["Continuity and Differentiability", "mat.continuity"],
  ["Applications of Derivatives", "mat.derivatives-app"],
  ["Integrals", "mat.integration"],
  ["Applications of Integrals", "mat.integration"],
  ["Differential Equations", "mat.diff-eq"],
  ["Probability", "mat.probability"],
  ["Vectors", "mat.vectors"],
  ["Three-dimensional Geometry", "mat.vectors"],
  ["Linear Programming", "mat.none"],
];

const ICSE_EXAM = { name: "ICSE board exams", month: 2, day: 20 };
const ISC_EXAM = { name: "ISC board exams", month: 2, day: 15 };
const ANNUAL = { name: "Annual exams", month: 3, day: 1 };

export const ICSE: SyllabusBoard = {
  id: "icse",
  name: "ICSE / ISC",
  note: "CISCE · ICSE for Class 9–10, ISC for Class 11–12.",
  grades: [
    {
      id: "9",
      name: "ICSE Class 9",
      exam: ANNUAL,
      subjects: [
        subject("icse:9", "physics", "Physics", PHYSICS_9),
        subject("icse:9", "chemistry", "Chemistry", CHEMISTRY_9),
        subject("icse:9", "biology", "Biology", BIOLOGY_9),
        subject("icse:9", "maths", "Mathematics", MATHS_9),
      ],
    },
    {
      id: "10",
      name: "ICSE Class 10",
      exam: ICSE_EXAM,
      subjects: [
        subject("icse:10", "physics", "Physics", PHYSICS_10),
        subject("icse:10", "chemistry", "Chemistry", CHEMISTRY_10),
        subject("icse:10", "biology", "Biology", BIOLOGY_10),
        subject("icse:10", "maths", "Mathematics", MATHS_10),
        subject("icse:10", "history", "History", X.ICSE_HISTORY_10),
        subject("icse:10", "civics", "Civics", X.ICSE_CIVICS_10),
        subject("icse:10", "geography", "Geography", X.ICSE_GEOGRAPHY_10),
        subject("icse:10", "english", "English · Grammar and Writing", X.ICSE_ENGLISH_10),
        subject("icse:10", "hindi", "Hindi · Grammar and Writing", X.ICSE_HINDI_10),
        subject("icse:10", "kannada", "Kannada · Grammar and Writing", X.KANNADA_10),
        subject("icse:10", "computers", "Computer Applications", X.ICSE_COMPUTERS_10),
        subject("icse:10", "gk", "General Knowledge", X.GK_10),
      ],
    },
    {
      id: "11",
      name: "ISC Class 11",
      exam: ANNUAL,
      subjects: [
        subject("icse:11", "physics", "Physics", PHYSICS_11),
        subject("icse:11", "chemistry", "Chemistry", CHEMISTRY_11),
        subject("icse:11", "biology", "Biology", BIOLOGY_11),
        subject("icse:11", "maths", "Mathematics", MATHS_11),
      ],
    },
    {
      id: "12",
      name: "ISC Class 12",
      exam: ISC_EXAM,
      subjects: [
        subject("icse:12", "physics", "Physics", PHYSICS_12),
        subject("icse:12", "chemistry", "Chemistry", CHEMISTRY_12),
        subject("icse:12", "biology", "Biology", BIOLOGY_12),
        subject("icse:12", "maths", "Mathematics", MATHS_12),
      ],
    },
  ],
};
