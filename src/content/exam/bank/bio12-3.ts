import type { ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 12 Biology bank (NEET / KCET): Biotechnology (both chapters), Organisms and Populations,
 * Ecosystem, Biodiversity and Conservation. Original questions written close to NCERT lines.
 * Every item is a single-correct MCQ; `answer` is the 0-based index of the correct option.
 */

type Opts = [string, string, string, string];
/** [difficulty, question, options, answer index, explanation, hint?] */
type Item = [1 | 2 | 3, string, Opts, 0 | 1 | 2 | 3, string, string?];

const LONG = /Statement I|Assertion|Match|List I|How many/;

function build(chNo: string, chapter: string, items: Item[]): ExamQuestion[] {
  return items.map(([difficulty, q, options, answer, explain, hint], i) => ({
    id: `bio12-3-${chNo}-${String(i + 1).padStart(3, "0")}`,
    subject: "biology",
    chapter,
    grade: "12",
    exams: difficulty === 3 ? ["NEET"] : ["NEET", "KCET"],
    kind: "mcq",
    difficulty,
    idealTime: (difficulty === 1 ? 45 : difficulty === 2 ? 65 : 90) + (LONG.test(q) ? 30 : 0),
    q,
    options,
    answer,
    explain,
    ...(hint ? { hint } : {}),
  }));
}

/** Standard NEET option sets. */
const AR: Opts = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is NOT the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];
const S12: Opts = [
  "Both Statement I and Statement II are correct",
  "Both Statement I and Statement II are incorrect",
  "Statement I is correct but Statement II is incorrect",
  "Statement I is incorrect but Statement II is correct",
];

/* ------------------------------------------------------------------ */
/* Chapter 9 — Biotechnology: Principles and Processes                 */
/* ------------------------------------------------------------------ */

const CH9: Item[] = [
  [1, "The two core techniques that enabled the birth of modern biotechnology are:",
    ["Plant tissue culture and somatic hybridisation", "Fermentation and distillation", "Genetic engineering and bioprocess engineering", "Polymerase chain reaction and ELISA"], 2,
    "NCERT names genetic engineering (altering the chemistry of DNA/RNA and introducing it into host organisms) and bioprocess engineering (maintaining a sterile, contamination-free environment to grow only the desired microbe or eukaryotic cell in large quantities) as the two core techniques. Tissue culture, fermentation, PCR and ELISA are tools or applications, not the two founding principles."],
  [1, "The first recombinant DNA was made by linking a gene encoding antibiotic resistance with a native plasmid of:",
    ["Salmonella typhimurium", "Escherichia coli", "Agrobacterium tumefaciens", "Thermus aquaticus"], 0,
    "In 1972 Stanley Cohen and Herbert Boyer cut out a piece of DNA carrying an antibiotic-resistance gene and linked it to a native plasmid of Salmonella typhimurium. E. coli was then used as the host into which this recombinant plasmid was transferred — a common confusion. Agrobacterium gives the Ti plasmid and Thermus aquaticus gives Taq polymerase."],
  [1, "Which enzymes are popularly called 'molecular scissors'?",
    ["DNA ligases", "Restriction endonucleases", "DNA polymerases", "Alkaline phosphatases"], 1,
    "Restriction endonucleases recognise specific base sequences and cut DNA at specific points, so they are called molecular scissors. Ligases join DNA ends ('molecular glue'); polymerases synthesise DNA."],
  [1, "In the name of the restriction enzyme EcoRI, the letter 'R' stands for:",
    ["Restriction", "Resistance to the enzyme", "The strain of the bacterium (RY 13)", "The order in which the enzyme was isolated"], 2,
    "Naming convention: the first capital letter is the genus (E — Escherichia), the next two letters the species (co — coli), the next letter the strain (R — RY 13), and the Roman numeral (I) the order in which enzymes were isolated from that strain."],
  [1, "Agarose, used as the matrix in gel electrophoresis of DNA, is a natural polymer obtained from:",
    ["Bacterial capsules", "Cotton fibres", "Fungal cell walls", "Sea weeds"], 3,
    "Agarose is a natural linear polymer extracted from sea weeds. The gel acts as a sieve so DNA fragments separate according to size."],
  [1, "After agarose gel electrophoresis, DNA fragments stained with ethidium bromide and exposed to UV light are seen as:",
    ["Bright orange coloured bands", "Dark blue bands", "Green fluorescent spots", "White precipitate threads"], 0,
    "DNA cannot be seen in visible light without staining. Ethidium bromide intercalates with DNA and, under UV radiation, the fragments appear as bright orange bands. Fine white threads are what precipitated DNA looks like in chilled ethanol, not in a gel."],
  [1, "To release DNA from a fungal cell, the cell wall is broken with the enzyme:",
    ["Lysozyme", "Cellulase", "Chitinase", "Ribonuclease"], 2,
    "Fungal cell walls contain chitin, so chitinase is used. Lysozyme is used for bacteria and cellulase for plant cells. Ribonuclease removes RNA after the cell is opened; it does not break the wall."],
  [1, "The thermostable DNA polymerase used in PCR is isolated from the bacterium:",
    ["Thermus aquaticus", "Bacillus thuringiensis", "Escherichia coli", "Haemophilus influenzae"], 0,
    "Taq polymerase comes from Thermus aquaticus, a hot-spring bacterium. Being thermostable it survives the high temperature used to denature DNA in each PCR cycle. Haemophilus influenzae is the source of the restriction enzyme Hind II."],
  [1, "Which of the following is NOT one of the three repeated steps of a PCR cycle?",
    ["Denaturation", "Annealing", "Extension", "Ligation"], 3,
    "Each PCR cycle has denaturation (strand separation at high temperature), annealing (primers bind) and extension (Taq polymerase extends the primers). Ligation (joining with DNA ligase) is part of making recombinant DNA, not of PCR."],
  [1, "In the cloning vector pBR322, the gene 'rop' codes for:",
    ["Resistance to ampicillin", "Proteins involved in the replication of the plasmid", "The restriction enzyme BamHI", "β-galactosidase"], 1,
    "NCERT: rop codes for the proteins involved in the replication of the plasmid. Ampicillin resistance is coded by ampR; BamHI is an enzyme from Bacillus amyloliquefaciens and only its recognition site lies on the plasmid."],
  [1, "Bioreactors used for large-scale production of recombinant products typically have a volume of:",
    ["1–10 mL", "1–10 litres", "100–1000 litres", "1,00,000–10,00,000 litres"], 2,
    "Small-volume laboratory cultures cannot give appreciable quantities of product, so bioreactors in which large volumes (100–1000 litres) of culture can be processed are used."],
  [1, "The most commonly used bioreactors are of the:",
    ["Stirring type", "Packed-bed type", "Fluidised-bed type", "Photobioreactor type"], 0,
    "NCERT: the most commonly used bioreactors are of the stirring type — the simple stirred-tank and the sparged stirred-tank bioreactors. A stirrer mixes contents evenly and keeps oxygen available throughout."],

  [2, "Statement I: Exonucleases remove nucleotides from the ends of a DNA molecule.\nStatement II: Endonucleases make cuts at specific positions within the DNA.", S12, 0,
    "Both are the textbook definitions of the two kinds of nucleases. Restriction enzymes belong to the endonuclease group — they inspect the length of a DNA sequence, bind at the recognition sequence and cut both strands at specific points within it.",
    "Think 'exo' = outside (ends), 'endo' = inside."],
  [2, "Which of the following double-stranded DNA sequences (top strand written 5′→3′) is a palindrome in the molecular-biology sense?",
    ["5′-GAATCC-3′", "5′-GTATCA-3′", "5′-GAATTC-3′", "5′-AGCTTA-3′"], 2,
    "A DNA palindrome reads the same on both strands when each is read in the same 5′→3′ direction, i.e. the sequence equals its reverse complement. GAATTC: complement CTTAAG, read 5′→3′ = GAATTC — palindrome (the EcoRI site). GAATCC → reverse complement GGATTC; GTATCA → TGATAC; AGCTTA → TAAGCT — none match.",
    "Write the complementary strand and read it backwards (5′→3′)."],
  [2, "EcoRI cuts its recognition site 5′-GAATTC-3′ between G and A on both strands. The single-stranded overhang left on each fragment is:",
    ["5′-AATT-3′", "5′-TTAA-3′", "5′-GAAT-3′", "5′-CTTAA-3′"], 0,
    "Cutting G^AATTC on the top strand and the same on the bottom (also read 5′→3′ as G^AATTC) leaves the four bases AATT unpaired on each 5′ end — the sticky end. TTAA is the same bases read the wrong way; GAAT and CTTAA mis-place the cut.",
    "Cut after the G on both strands and see which bases are left unpaired."],
  [2, "Restriction enzymes that cut a little away from the centre of the palindrome leave 'sticky ends'. They are called sticky because:",
    ["They carry covalently bound ligase", "They form hydrogen bonds with their complementary cut counterparts", "They are rich in sticky hydrophobic bases", "They bind tightly to the agarose gel"], 1,
    "The overhanging single strands of two fragments cut by the same enzyme are complementary and pair by hydrogen bonds. This stickiness of the ends brings the fragments together and facilitates the action of DNA ligase, which then seals the phosphodiester backbone.",
    "What attracts two complementary single strands?"],
  [2, "A mixture of DNA fragments of 500 bp and 2000 bp is run on an agarose gel. Which observation is correct?",
    ["Both move towards the cathode, the 2000 bp fragment farther", "Both move towards the anode, the 500 bp fragment farther", "Both move towards the anode, the 2000 bp fragment farther", "The 500 bp fragment moves to the anode and the 2000 bp fragment to the cathode"], 1,
    "DNA is negatively charged (phosphate backbone), so all fragments move towards the anode. The agarose matrix acts as a sieve, so smaller fragments move farther. Hence the 500 bp fragment travels farther than the 2000 bp fragment.",
    "Charge decides the direction; size decides the distance."],
  [2, "How many of the following are commonly used as selectable markers for E. coli?\nampicillin resistance gene, tetracycline resistance gene, kanamycin resistance gene, chloramphenicol resistance gene, ori, rop, cry gene",
    ["Three", "Four", "Five", "Six"], 1,
    "Genes encoding resistance to ampicillin, chloramphenicol, tetracycline or kanamycin are the usual selectable markers for E. coli — four. ori is the origin of replication, rop codes replication proteins and cry codes the Bt toxin; none of these lets you select transformants.",
    "A selectable marker lets only transformants survive on a selective medium."],
  [2, "Foreign DNA is ligated at the BamHI site of pBR322 (inside the tetracycline-resistance gene) and E. coli is transformed. Recombinant transformants will:",
    ["Grow on both ampicillin and tetracycline", "Grow on tetracycline but not on ampicillin", "Grow on ampicillin but not on tetracycline", "Grow on neither antibiotic"], 2,
    "The insert inactivates tetR (insertional inactivation) while ampR stays intact. So recombinants grow on ampicillin but not on tetracycline. Non-recombinant plasmids give growth on both; untransformed cells grow on neither.",
    "Which gene is broken by the insert, and which is still working?"],
  [2, "In the blue–white selection method, recombinant colonies are colourless in the presence of a chromogenic substrate because:",
    ["The inserted DNA inactivates the gene for β-galactosidase", "The inserted DNA produces a blue-quenching pigment", "Recombinant cells cannot take up the substrate", "Ampicillin destroys the blue pigment"], 0,
    "The recombinant DNA is inserted within the coding sequence of β-galactosidase (lacZ). The insert inactivates the enzyme, so the chromogenic substrate is not cleaved and the colony stays colourless (white). Plasmids without an insert make the enzyme and give blue colonies.",
    "Blue colour needs a working enzyme."],
  [2, "To make bacterial cells competent for transformation, the cells are treated with a divalent cation and then given a heat shock. The correct sequence after adding the recombinant DNA is:",
    ["42 °C → ice → 42 °C", "Ice → 42 °C → ice", "Room temperature → 100 °C → ice", "Ice → 94 °C → 55 °C"], 1,
    "Cells treated with Ca²⁺ are incubated with the recombinant DNA on ice, given a brief heat shock at 42 °C, and then put back on ice. This enables the bacteria to take up the DNA. 94 °C / 55 °C are PCR temperatures, not transformation.",
    "The heat shock is brief and sandwiched between two cold incubations."],
  [2, "In the biolistic (gene gun) method, plant cells are bombarded with high-velocity micro-particles coated with DNA. These particles are made of:",
    ["Silver or copper", "Gold or tungsten", "Silica or glass", "Iron or zinc"], 1,
    "NCERT: cells are bombarded with high-velocity micro-particles of gold or tungsten coated with DNA. The method is suitable for plants. Microinjection, by contrast, injects DNA directly into the nucleus of an animal cell.",
    "Dense, chemically inert heavy metals."],
  [2, "Match List I (enzyme) with List II (use during DNA isolation).\nList I: (P) Lysozyme (Q) Cellulase (R) Chitinase (S) Protease\nList II: (1) Breaks plant cell wall (2) Breaks bacterial cell wall (3) Removes proteins such as histones (4) Breaks fungal cell wall",
    ["P-2, Q-1, R-4, S-3", "P-1, Q-2, R-4, S-3", "P-2, Q-4, R-1, S-3", "P-3, Q-1, R-4, S-2"], 0,
    "Lysozyme — bacteria; cellulase — plant cells (cellulose wall); chitinase — fungi (chitin wall). DNA in the cell is wrapped with histones, which are removed with protease; RNA is removed with ribonuclease.",
    "Match each enzyme to the polymer it digests."],
  [2, "During isolation of DNA, the purified DNA finally precipitates out as a collection of fine threads in suspension after adding:",
    ["Chilled ethanol", "Ethidium bromide", "Hot saline", "Calcium chloride"], 0,
    "After removing RNA and protein, chilled ethanol is added; purified DNA precipitates as fine threads that can be removed by spooling. Ethidium bromide stains DNA in a gel; CaCl₂ is used to make bacteria competent.",
    "The step is called spooling."],
  [2, "The Ti plasmid used to transfer genes into dicot plants comes from:",
    ["Agrobacterium tumefaciens, a pathogen of several dicot plants", "Bacillus thuringiensis, a soil bacterium toxic to insects", "Thermus aquaticus, a hot-spring bacterium", "Salmonella typhimurium, an intestinal pathogen"], 0,
    "Agrobacterium tumefaciens delivers a piece of DNA called T-DNA that transforms normal plant cells into tumour cells. Its tumour-inducing (Ti) plasmid has been modified into a cloning vector that is no longer pathogenic but can still deliver genes of interest into plants.",
    "Ti = tumour inducing."],
  [2, "Assertion (A): A cloning vector should preferably have a single recognition site for the restriction enzyme used.\nReason (R): Several recognition sites within the vector would generate many fragments and complicate gene cloning.", AR, 0,
    "Both are NCERT statements. Ligation of alien DNA is carried out at a restriction site; if the vector is cut at many places it falls apart into several fragments, which complicates cloning. Hence a single site is preferred — R explains A.",
    "What happens to a plasmid cut at three places?"],
  [2, "Which of the following is NOT a part of downstream processing?",
    ["Separation of the product", "Purification of the product", "Formulation with suitable preservatives", "Sparging sterile air through the culture"], 3,
    "Downstream processing begins after biosynthesis is complete: separation, purification, formulation with preservatives, clinical trials (for drugs) and quality control. Sparging air belongs to the bioreactor stage (upstream production), not downstream processing.",
    "Downstream = after the product has been made."],
  [2, "In a continuous culture system, the used medium is drained out from one side while fresh medium is added from the other. The main advantage is that:",
    ["Cells stay in the lag phase and produce no toxins", "Cells are maintained in their physiologically most active log/exponential phase, giving more biomass", "No oxygen is required by the cells", "Downstream processing becomes unnecessary"], 1,
    "Removing used medium and adding fresh medium keeps the cells in the exponential (log) phase where they are most active. This produces a larger biomass and higher yields of the desired protein.",
    "Which growth phase is the most productive?"],
  [2, "Starting from a single double-stranded DNA molecule, the number of copies obtained after 10 ideal PCR cycles is:",
    ["20", "100", "512", "1024"], 3,
    "The amount of DNA doubles each cycle, so after n cycles one molecule gives 2ⁿ copies: 2¹⁰ = 1024. 20 assumes linear addition; 512 = 2⁹ is an off-by-one error.",
    "Each cycle doubles the number of molecules."],
  [2, "In PCR, the annealing step involves:",
    ["Separation of the two DNA strands by heat", "Binding of the primers to complementary regions of the single-stranded template", "Extension of the primers by Taq polymerase", "Joining of DNA fragments by ligase"], 1,
    "Annealing: the temperature is lowered so that two sets of primers (small, chemically synthesised oligonucleotides complementary to regions of DNA) bind to the template. Strand separation is denaturation and primer extension is extension.",
    "Annealing literally means joining/pairing."],
  [2, "In isolating a gene of interest, the band of DNA containing the gene is cut out of the agarose gel and extracted from the gel piece. This step is called:",
    ["Spooling", "Elution", "Annealing", "Transformation"], 1,
    "Separated bands are cut out from agarose gel and the DNA is extracted — this is elution. The purified fragments are then used to construct recombinant DNA by joining them with cloning vectors. Spooling removes precipitated DNA threads from ethanol.",
    "The DNA is washed out of the gel piece."],
  [2, "Which feature of a cloning vector is also responsible for controlling the copy number of the linked DNA?",
    ["Selectable marker", "Cloning site", "Origin of replication (ori)", "rop gene"], 2,
    "ori is the sequence from where replication starts; any piece of DNA linked to it can replicate within the host cells. This sequence is also responsible for controlling the copy number of the linked DNA. So to get many copies of the target DNA, it is cloned in a vector whose ori supports high copy number.",
    "Where does replication start?"],
  [2, "A sparged stirred-tank bioreactor differs from a simple stirred-tank bioreactor in that:",
    ["Sterile air is bubbled through the culture, increasing the area for oxygen transfer", "It has no agitator", "It works only for anaerobic cultures", "It does not need temperature control"], 0,
    "In the sparged type, sterile air bubbles are sparged through the reactor, greatly increasing the surface area for oxygen transfer. Both types have an agitator, temperature and pH control.",
    "Sparge = to bubble gas through a liquid."],
  [2, "How many of the following are components of a typical stirred-tank bioreactor?\nagitator system, oxygen delivery system, foam control system, temperature control system, pH control system, sampling ports",
    ["Three", "Four", "Five", "Six"], 3,
    "NCERT lists all six: an agitator system, an oxygen delivery system, a foam control system, a temperature control system, a pH control system and sampling ports (so that small volumes of the culture can be withdrawn periodically).",
    "Recall the labelled bioreactor diagram."],
  [2, "A gene cut with EcoRI is mixed with a plasmid cut with BamHI. Ligation is very inefficient because:",
    ["EcoRI and BamHI cut only RNA", "The sticky ends produced by the two enzymes are not complementary", "DNA ligase works only on blunt ends", "BamHI does not cut circular DNA"], 1,
    "To join the source DNA and the vector, both must be cut with the same restriction enzyme so that they have complementary sticky ends (EcoRI leaves AATT; BamHI leaves GATC). Non-complementary ends cannot base pair, so ligase has nothing to seal.",
    "Do AATT and GATC overhangs pair?"],

  [3, "Foreign DNA is inserted at the PstI site (inside the ampicillin-resistance gene) of pBR322 and E. coli is transformed. A colony grows on tetracycline medium but fails to grow on ampicillin medium. This colony carries:",
    ["The non-recombinant plasmid", "No plasmid at all", "A recombinant plasmid with the insert in ampR", "A recombinant plasmid with the insert in tetR"], 2,
    "PstI (and PvuI) sites lie within ampR. An insert there inactivates ampicillin resistance while tetR still works — growth on tetracycline, no growth on ampicillin. A non-recombinant plasmid gives growth on both; untransformed cells grow on neither; an insert in tetR would show the reverse pattern.",
    "Locate PstI on the pBR322 map first."],
  [3, "A circular plasmid has two recognition sites for EcoRI and one for BamHI, all at different positions. Complete digestion with both enzymes together yields how many fragments?",
    ["2", "3", "4", "5"], 1,
    "Cutting a circular molecule at n points gives n fragments (cutting a linear molecule at n points gives n + 1). Here there are 2 + 1 = 3 cut points, so 3 fragments. 4 is the answer for a linear molecule.",
    "Circular: fragments = cuts. Linear: fragments = cuts + 1."],
  [3, "A PCR reaction starts with 3 molecules of double-stranded template DNA. Assuming 100% efficiency, the number of double-stranded copies after 5 cycles is:",
    ["15", "30", "48", "96"], 3,
    "Copies = N₀ × 2ⁿ = 3 × 2⁵ = 3 × 32 = 96. 15 (3 × 5) treats PCR as linear; 48 (3 × 2⁴) is off by one cycle; 30 (3 × 10) is an arbitrary doubling error.",
    "Multiply the starting number by 2 raised to the number of cycles."],
  [3, "Statement I: The restriction endonuclease Hind II always cuts DNA molecules at a particular point by recognising a specific sequence of six base pairs.\nStatement II: Today more than 900 restriction enzymes have been isolated from over 230 strains of bacteria.", S12, 0,
    "Both are NCERT facts. Hind II, the first restriction endonuclease whose function depended on a specific DNA sequence, recognises a six-base-pair recognition sequence. More than 900 restriction enzymes have been isolated from over 230 bacterial strains, each recognising different sequences.",
    "Both lines come straight from the section on restriction enzymes."],
  [3, "Assertion (A): An alien piece of DNA can multiply in the host only after it is linked to a vector.\nReason (R): The alien DNA by itself lacks an origin of replication that works in the host; linkage with the vector's ori allows it to replicate.", AR, 0,
    "NCERT: an alien piece of DNA is not able to multiply itself in the progeny cells; but when it gets integrated into the genome of the recipient (or is linked to an ori), it may multiply and be inherited. Linking to a vector provides the ori, so R correctly explains A.",
    "What does ori do for any DNA linked to it?"],
  [3, "Assertion (A): Bacterial cells are made 'competent' before transformation with recombinant DNA.\nReason (R): DNA, being a hydrophilic molecule, cannot pass through cell membranes on its own.", AR, 0,
    "NCERT: since DNA is a hydrophilic molecule, it cannot pass through cell membranes. Hence bacterial cells are first made competent — e.g. by treating with a specific concentration of a divalent cation such as calcium — which increases the efficiency with which DNA enters through pores in the cell wall. R is the reason for A.",
    "Why can't DNA just diffuse in?"],
  [3, "Match List I (feature of pBR322) with List II (its role).\nList I: (P) ori (Q) rop (R) ampR (S) BamHI site\nList II: (1) Proteins needed for plasmid replication (2) Controls copy number of linked DNA (3) Lies in tetR; used for insertional inactivation (4) Selectable marker",
    ["P-1, Q-2, R-4, S-3", "P-2, Q-1, R-3, S-4", "P-2, Q-1, R-4, S-3", "P-4, Q-1, R-2, S-3"], 2,
    "ori starts replication and controls copy number (P-2); rop codes proteins for plasmid replication (Q-1); ampR is an antibiotic-resistance selectable marker (R-4); the BamHI site lies in tetR, so an insert there inactivates tetracycline resistance (S-3).",
    "ori and rop are both about replication — distinguish 'copy number' from 'proteins'."],
  [3, "Which sequence correctly orders the steps of recombinant DNA technology?\n(a) Ligation of the DNA fragment into a vector (b) Isolation of DNA (c) Culturing host cells and extraction of the product (d) Fragmentation of DNA by restriction endonucleases (e) Transfer of recombinant DNA into the host (f) Isolation of the desired DNA fragment",
    ["b → d → f → a → e → c", "b → f → d → a → e → c", "d → b → f → a → c → e", "b → d → a → f → e → c"], 0,
    "NCERT order: isolation of DNA → fragmentation by restriction endonucleases → isolation of the desired DNA fragment → ligation into a vector → transfer of rDNA into the host → culturing the host cells in a medium at large scale and extraction of the desired product.",
    "You must cut before you can pick out the fragment, and pick it out before ligating."],
  [3, "Statement I: In the β-galactosidase system, colonies with plasmids that do NOT carry an insert give blue colour in the presence of a chromogenic substrate.\nStatement II: Selection of recombinants by insertional inactivation of an antibiotic-resistance gene is simple because it needs plating on only one antibiotic plate.", S12, 2,
    "Statement I is correct — without an insert lacZ is intact, β-galactosidase cleaves the chromogenic substrate and colonies turn blue. Statement II is wrong: NCERT calls selection via antibiotic-resistance inactivation a cumbersome procedure because it requires simultaneous plating on two plates having different antibiotics. That is why the colour-based alternative was developed.",
    "Why was blue–white screening developed at all?"],
  [3, "In gene transfer into plants, which pairing of vector/method with its feature is INCORRECT?",
    ["Disarmed Ti plasmid — no longer pathogenic but still delivers genes", "Biolistics — gold or tungsten particles coated with DNA", "Microinjection — recombinant DNA injected directly into the nucleus of an animal cell", "Disarmed retrovirus — used mainly to deliver genes into dicot plants"], 3,
    "Retroviruses transform normal animal cells into cancerous cells; disarmed retroviruses are used to deliver desirable genes into animal cells, not plants. The other three pairings are NCERT-correct.",
    "Retroviruses infect which kingdom?"],
];

/* ------------------------------------------------------------------ */
/* Chapter 10 — Biotechnology and its Applications                     */
/* ------------------------------------------------------------------ */

const CH10: Item[] = [];

/* ------------------------------------------------------------------ */
/* Chapter 11 — Organisms and Populations                              */
/* ------------------------------------------------------------------ */

const CH11: Item[] = [];

/* ------------------------------------------------------------------ */
/* Chapter 12 — Ecosystem                                              */
/* ------------------------------------------------------------------ */

const CH12: Item[] = [];

/* ------------------------------------------------------------------ */
/* Chapter 13 — Biodiversity and Conservation                          */
/* ------------------------------------------------------------------ */

const CH13: Item[] = [];

/** Original exam-style questions (NEET, KCET) for the chapters below. */
export const questions: ExamQuestion[] = [
  ...build("09", "Biotechnology: Principles and Processes", CH9),
  ...build("10", "Biotechnology and its Applications", CH10),
  ...build("11", "Organisms and Populations", CH11),
  ...build("12", "Ecosystem", CH12),
  ...build("13", "Biodiversity and Conservation", CH13),
];

/** One formula / quick-revision sheet per chapter. */
export const formulas: FormulaSheet[] = [
  /* FORMULAS */
];
