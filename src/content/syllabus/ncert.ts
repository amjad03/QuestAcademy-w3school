/**
 * NCERT textbook chapter lists (rationalised editions, 2023-24 onward), used by
 * CBSE and by Karnataka PUC (which follows NCERT textbooks for science).
 *
 * Mapping based on known syllabi — check against the current official NCERT /
 * board editions before relying on it; chapters are occasionally dropped or merged.
 */
import type { Row } from "./build";

/* ---------------- Class 9 ---------------- */
export const SCIENCE_9: Row[] = [
  ["Matter in Our Surroundings", "che.matter"],
  ["Is Matter Around Us Pure?", "che.mixtures"],
  ["Atoms and Molecules", "che.atoms-molecules"],
  ["Structure of the Atom", "che.atom-basic"],
  ["The Fundamental Unit of Life", "bio.cell-basic"],
  ["Tissues", "bio.tissues"],
  ["Motion", "phy.motion-basic"],
  ["Force and Laws of Motion", "phy.force-basic"],
  ["Gravitation", "phy.gravitation-basic"],
  ["Work and Energy", "phy.work-basic"],
  ["Sound", "phy.sound-basic"],
  ["Improvement in Food Resources", "bio.none"],
];

export const MATHS_9: Row[] = [
  ["Number Systems", "mat.numbers"],
  ["Polynomials", "mat.polynomials"],
  ["Coordinate Geometry", "mat.coord-basic"],
  ["Linear Equations in Two Variables", "mat.linear"],
  ["Introduction to Euclid's Geometry", "mat.none"],
  ["Lines and Angles", "mat.geometry-basic"],
  ["Triangles", "mat.geometry-basic"],
  ["Quadrilaterals", "mat.none"],
  ["Circles", "mat.none"],
  ["Heron's Formula", "mat.area"],
  ["Surface Areas and Volumes", "mat.none"],
  ["Statistics", "mat.statistics"],
];

/* ---------------- Class 10 ---------------- */
export const SCIENCE_10: Row[] = [
  ["Chemical Reactions and Equations", "che.reactions-basic"],
  ["Acids, Bases and Salts", "che.acids-basic"],
  ["Metals and Non-metals", "che.none"],
  ["Carbon and its Compounds", "che.carbon-basic"],
  ["Life Processes", "bio.life-processes"],
  ["Control and Coordination", "bio.none"],
  ["How do Organisms Reproduce?", "bio.none"],
  ["Heredity", "bio.heredity-basic"],
  ["Light – Reflection and Refraction", "phy.light-basic"],
  ["The Human Eye and the Colourful World", "phy.none"],
  ["Electricity", "phy.electricity-basic"],
  ["Magnetic Effects of Electric Current", "phy.magnetism-basic"],
  ["Our Environment", "bio.environment-basic"],
];

export const MATHS_10: Row[] = [
  ["Real Numbers", "mat.numbers"],
  ["Polynomials", "mat.polynomials"],
  ["Pair of Linear Equations in Two Variables", "mat.linear"],
  ["Quadratic Equations", "mat.quadratic-basic"],
  ["Arithmetic Progressions", "mat.ap-basic"],
  ["Triangles", "mat.geometry-basic"],
  ["Coordinate Geometry", "mat.coord-basic"],
  ["Introduction to Trigonometry", "mat.trig-basic"],
  ["Some Applications of Trigonometry", "mat.trig-apps"],
  ["Circles", "mat.none"],
  ["Areas Related to Circles", "mat.none"],
  ["Surface Areas and Volumes", "mat.none"],
  ["Statistics", "mat.statistics"],
  ["Probability", "mat.probability-basic"],
];

/* ---------------- Class 11 ---------------- */
export const PHYSICS_11: Row[] = [
  ["Units and Measurements", "phy.units"],
  ["Motion in a Straight Line", "phy.straight-line"],
  ["Motion in a Plane", "phy.plane"],
  ["Laws of Motion", "phy.laws"],
  ["Work, Energy and Power", "phy.wep"],
  ["System of Particles and Rotational Motion", "phy.rotation"],
  ["Gravitation", "phy.gravitation"],
  ["Mechanical Properties of Solids", "phy.bulk"],
  ["Mechanical Properties of Fluids", "phy.bulk"],
  ["Thermal Properties of Matter", "phy.thermal"],
  ["Thermodynamics", "phy.thermo"],
  ["Kinetic Theory", "phy.thermo"],
  ["Oscillations", "phy.oscillations"],
  ["Waves", "phy.waves"],
];

export const CHEMISTRY_11: Row[] = [
  ["Some Basic Concepts of Chemistry", "che.mole"],
  ["Structure of Atom", "che.atom"],
  ["Classification of Elements and Periodicity in Properties", "che.periodic"],
  ["Chemical Bonding and Molecular Structure", "che.bonding"],
  ["Thermodynamics", "che.thermo"],
  ["Equilibrium", "che.equilibrium"],
  ["Redox Reactions", "che.redox"],
  ["Organic Chemistry – Some Basic Principles and Techniques", "che.organic"],
  ["Hydrocarbons", "che.hydrocarbons"],
];

export const BIOLOGY_11: Row[] = [
  ["The Living World", "bio.diversity"],
  ["Biological Classification", "bio.diversity"],
  ["Plant Kingdom", "bio.diversity"],
  ["Animal Kingdom", "bio.diversity"],
  ["Morphology of Flowering Plants", "bio.plant-structure"],
  ["Anatomy of Flowering Plants", "bio.plant-structure"],
  ["Structural Organisation in Animals", "bio.tissues"],
  ["Cell: The Unit of Life", "bio.cell"],
  ["Biomolecules", "bio.biomolecules"],
  ["Cell Cycle and Cell Division", "bio.cell-division"],
  ["Photosynthesis in Higher Plants", "bio.photosynthesis"],
  ["Respiration in Plants", "bio.plant-resp"],
  ["Plant Growth and Development", "bio.none"],
  ["Breathing and Exchange of Gases", "bio.breathing"],
  ["Body Fluids and Circulation", "bio.circulation"],
  ["Excretory Products and their Elimination", "bio.physiology-other"],
  ["Locomotion and Movement", "bio.physiology-other"],
  ["Neural Control and Coordination", "bio.physiology-other"],
  ["Chemical Coordination and Integration", "bio.physiology-other"],
];

export const MATHS_11: Row[] = [
  ["Sets", "mat.sets"],
  ["Relations and Functions", "mat.sets"],
  ["Trigonometric Functions", "mat.trig"],
  ["Complex Numbers and Quadratic Equations", "mat.quadratic"],
  ["Linear Inequalities", "mat.none"],
  ["Permutations and Combinations", "mat.none"],
  ["Binomial Theorem", "mat.none"],
  ["Sequences and Series", "mat.sequences"],
  ["Straight Lines", "mat.coord"],
  ["Conic Sections", "mat.conics"],
  ["Introduction to Three Dimensional Geometry", "mat.vectors"],
  ["Limits and Derivatives", "mat.limits"],
  ["Statistics", "mat.statistics"],
  ["Probability", "mat.probability"],
];

/* ---------------- Class 12 ---------------- */
export const PHYSICS_12: Row[] = [
  ["Electric Charges and Fields", "phy.electrostatics"],
  ["Electrostatic Potential and Capacitance", "phy.capacitance"],
  ["Current Electricity", "phy.current"],
  ["Moving Charges and Magnetism", "phy.magnetism"],
  ["Magnetism and Matter", "phy.magnetism"],
  ["Electromagnetic Induction", "phy.emi"],
  ["Alternating Current", "phy.emi"],
  ["Electromagnetic Waves", "phy.em-waves"],
  ["Ray Optics and Optical Instruments", "phy.ray-optics"],
  ["Wave Optics", "phy.wave-optics"],
  ["Dual Nature of Radiation and Matter", "phy.modern"],
  ["Atoms", "phy.modern"],
  ["Nuclei", "phy.modern"],
  ["Semiconductor Electronics: Materials, Devices and Simple Circuits", "phy.electronics"],
];

export const CHEMISTRY_12: Row[] = [
  ["Solutions", "che.none"],
  ["Electrochemistry", "che.electrochem"],
  ["Chemical Kinetics", "che.kinetics"],
  ["The d- and f-Block Elements", "che.none"],
  ["Coordination Compounds", "che.coordination"],
  ["Haloalkanes and Haloarenes", "che.organic-func"],
  ["Alcohols, Phenols and Ethers", "che.organic-func"],
  ["Aldehydes, Ketones and Carboxylic Acids", "che.organic-func"],
  ["Amines", "che.organic-func"],
  ["Biomolecules", "bio.biomolecules"],
];

export const BIOLOGY_12: Row[] = [
  ["Sexual Reproduction in Flowering Plants", "bio.reproduction"],
  ["Human Reproduction", "bio.reproduction"],
  ["Reproductive Health", "bio.reproduction"],
  ["Principles of Inheritance and Variation", "bio.genetics"],
  ["Molecular Basis of Inheritance", "bio.molecular"],
  ["Evolution", "bio.evolution"],
  ["Human Health and Disease", "bio.none"],
  ["Microbes in Human Welfare", "bio.none"],
  ["Biotechnology: Principles and Processes", "bio.biotech"],
  ["Biotechnology and its Applications", "bio.biotech"],
  ["Organisms and Populations", "bio.ecology"],
  ["Ecosystem", "bio.ecology"],
  ["Biodiversity and Conservation", "bio.ecology"],
];

export const MATHS_12: Row[] = [
  ["Relations and Functions", "mat.sets"],
  ["Inverse Trigonometric Functions", "mat.trig"],
  ["Matrices", "mat.matrices"],
  ["Determinants", "mat.matrices"],
  ["Continuity and Differentiability", "mat.continuity"],
  ["Application of Derivatives", "mat.derivatives-app"],
  ["Integrals", "mat.integration"],
  ["Application of Integrals", "mat.integration"],
  ["Differential Equations", "mat.diff-eq"],
  ["Vector Algebra", "mat.vectors"],
  ["Three Dimensional Geometry", "mat.vectors"],
  ["Linear Programming", "mat.none"],
  ["Probability", "mat.probability"],
];
