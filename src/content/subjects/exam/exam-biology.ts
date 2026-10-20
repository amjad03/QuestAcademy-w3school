import type { Subject } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

export const examBiology: Subject = {
  slug: "exam-biology",
  title: "Biology for NEET",
  world: "exam",
  icon: "🧬",
  colors: ["#16a34a", "#f59e0b"],
  tagline: "Half the NEET paper. NCERT-tight facts, ratios and numbers that examiners love.",
  description:
    "High-yield NEET biology. Every chapter gives a concept crash of the facts most often tested, followed by problem patterns — genetics ratios, cell-cycle DNA counting, physiology numbers and ecology calculations — with NEET-style MCQs.",
  levels: ["NEET"],
  stages: ["aspirant"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "cell-biology",
      title: "Cell Biology",
      icon: "🔬",
      description: "Cell structure, organelles, cell cycle and division.",
      lessons: [
        {
          slug: "cell-biology-concept-crash",
          title: "Concept crash: Cell Biology",
          summary: "Prokaryote vs eukaryote, organelles and the membrane model.",
          minutes: 14,
          xp: 30,
          blocks: [
            { type: "text", md: "Every NEET paper asks 'which organelle does what?' at least twice. This crash puts the most-tested facts side by side." },
            {
              type: "table",
              headers: ["Feature", "Prokaryote", "Eukaryote"],
              rows: [
                ["Nucleus", "Nucleoid, no membrane", "True, double membrane"],
                ["Ribosomes", "70S (50S + 30S)", "80S (60S + 40S) in cytoplasm"],
                ["Membrane organelles", "Absent (mesosomes present)", "Present"],
                ["DNA", "Circular, naked", "Linear, with histones"],
              ],
            },
            { type: "widget", widget: "cell-explorer", props: { kind: "animal" }, caption: "Tap each organelle to recall its job." },
            {
              type: "list",
              items: [
                "**Mitochondria & chloroplasts:** double membrane, own circular DNA and 70S ribosomes → *semi-autonomous*.",
                "**Lysosomes:** single membrane, acid hydrolases — 'suicide bags'.",
                "**Fluid mosaic model:** Singer & Nicolson (1972).",
                "**Centrioles:** 9 + 0 triplet arrangement; cilia/flagella axoneme is 9 + 2.",
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "Ribosomes are **non-membranous**. So are centrioles and the nucleolus. Questions love to slip them into 'membrane-bound' lists.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "mcq", q: "The 80S ribosome is made of:", options: ["50S + 30S", "60S + 40S", "60S + 20S", "40S + 40S"], answer: 1, explain: "S values aren't additive; 60S + 40S = 80S." }],
            },
          ],
          flashcards: [
            { front: "Prokaryotic ribosome", back: "70S = 50S + 30S" },
            { front: "Semi-autonomous organelles", back: "Mitochondria and chloroplasts" },
            { front: "Fluid mosaic model", back: "Singer & Nicolson, 1972" },
            { front: "Axoneme arrangement", back: "9 + 2 microtubules" },
          ],
          quiz: [
            { kind: "mcq", q: "Subunits of a 70S ribosome:", options: ["60S + 40S", "50S + 30S", "50S + 20S", "40S + 30S"], answer: 1, explain: "Found in prokaryotes, mitochondria and chloroplasts." },
            { kind: "truefalse", q: "Mitochondria and chloroplasts contain their own DNA.", answer: true, explain: "Circular DNA — evidence for endosymbiosis." },
            { kind: "mcq", q: "Fluid mosaic model of the plasma membrane was proposed by:", options: ["Robertson", "Singer and Nicolson", "Danielli and Davson", "Schleiden and Schwann"], answer: 1, explain: "1972." },
            {
              kind: "multi",
              q: "Which organelles are bounded by a double membrane?",
              options: ["Nucleus", "Mitochondrion", "Lysosome", "Chloroplast"],
              answers: [0, 1, 3],
              explain: "Lysosomes have a single membrane.",
            },
          ],
        },
        {
          slug: "cell-biology-problem-patterns",
          title: "Problem-solving patterns: Cell Biology",
          summary: "Track chromosome number and DNA content through mitosis and meiosis.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "The classic NEET twist: 'A cell has X chromosomes in G1 — how many chromatids/DNA in anaphase I?' Use this table and you'll never get it wrong." },
            {
              type: "table",
              headers: ["Stage", "Chromosome no.", "DNA content"],
              rows: [
                ["G1", "2n", "2C"],
                ["S → G2", "2n", "4C"],
                ["Mitotic metaphase", "2n", "4C"],
                ["Mitotic anaphase", "4n (per cell)", "4C"],
                ["After meiosis I", "n", "2C"],
                ["After meiosis II", "n", "1C"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Mnemonic — Prophase I",
              md: "**L**azy **Z**ebras **P**ass **D**irty **D**iapers → Leptotene, Zygotene (synapsis), Pachytene (crossing over), Diplotene (chiasmata), Diakinesis (terminalisation).",
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Enzyme for crossing over = **recombinase**, at pachytene. Synaptonemal complex forms at zygotene and dissolves at diplotene.",
            },
            {
              type: "checkpoint",
              questions: [
                { kind: "numeric", q: "Onion root tip cell has 2n = 16. Chromosomes per cell at mitotic anaphase?", answer: 32, explain: "Sister chromatids separate, each counted as a chromosome." },
              ],
            },
          ],
          flashcards: [
            { front: "DNA doubles in which phase?", back: "S phase (2C → 4C)" },
            { front: "Crossing over occurs in", back: "Pachytene" },
            { front: "Chiasmata become visible in", back: "Diplotene" },
          ],
          quiz: [
            { kind: "numeric", q: "A cell has 2C DNA in G1. DNA content (in C) in G2?", answer: 4, unit: "C", explain: "DNA replicated in S phase." },
            { kind: "order", q: "Arrange the sub-stages of prophase I in order.", items: ["Leptotene", "Zygotene", "Pachytene", "Diplotene", "Diakinesis"], explain: "Lazy Zebras Pass Dirty Diapers." },
            { kind: "mcq", q: "Crossing over takes place during:", options: ["Leptotene", "Zygotene", "Pachytene", "Diakinesis"], answer: 2, explain: "Between non-sister chromatids of homologues." },
            { kind: "truefalse", q: "Meiosis II is an equational division similar to mitosis.", answer: true, explain: "Sister chromatids separate; number stays n." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "genetics",
      title: "Genetics",
      icon: "🫛",
      description: "Mendel's laws, deviations, sex-linked inheritance and chromosomal disorders.",
      lessons: [
        {
          slug: "genetics-concept-crash",
          title: "Concept crash: Genetics",
          summary: "All the ratios and their exceptions on one page.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "text", md: "Mendel worked with garden peas and a lot of patience. You just need his ratios — and the exceptions NEET loves." },
            {
              type: "table",
              headers: ["Cross / pattern", "Phenotypic ratio", "Genotypic ratio"],
              rows: [
                ["Monohybrid F2", "3 : 1", "1 : 2 : 1"],
                ["Dihybrid F2", "9 : 3 : 3 : 1", "—"],
                ["Monohybrid test cross", "1 : 1", "1 : 1"],
                ["Dihybrid test cross", "1 : 1 : 1 : 1", "1 : 1 : 1 : 1"],
                ["Incomplete dominance (snapdragon)", "1 : 2 : 1", "1 : 2 : 1"],
              ],
            },
            {
              type: "list",
              items: [
                "**Codominance:** ABO blood group — Iᴬ and Iᴮ both expressed.",
                "**Pleiotropy:** one gene, many effects — phenylketonuria.",
                "**Polygenic:** many genes, one trait — human skin colour.",
                "**Linkage:** Morgan, *Drosophila*; tight linkage → low recombination.",
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "Incomplete dominance → phenotype ratio = genotype ratio (1:2:1). Codominance → both alleles show *fully* (AB blood). Don't mix them up.",
            },
            {
              type: "checkpoint",
              questions: [
                { kind: "mcq", q: "A dihybrid test cross gives:", options: ["9:3:3:1", "1:1:1:1", "3:1", "1:2:1"], answer: 1, explain: "AaBb × aabb → four gamete types equally." },
              ],
            },
          ],
          flashcards: [
            { front: "Monohybrid F2 phenotypic ratio", back: "3 : 1" },
            { front: "Dihybrid F2 ratio", back: "9 : 3 : 3 : 1" },
            { front: "Example of codominance", back: "ABO blood groups (Iᴬ Iᴮ)" },
            { front: "Example of pleiotropy", back: "Phenylketonuria" },
          ],
          quiz: [
            { kind: "numeric", q: "In a dihybrid F2 (16 combinations), how many show both recessive traits?", answer: 1, explain: "Only aabb: 1/16." },
            { kind: "truefalse", q: "Flower colour in snapdragon shows codominance.", answer: false, explain: "It shows incomplete dominance (pink heterozygote)." },
            {
              kind: "mcq",
              q: "Parents with genotypes Iᴬi and Iᴮi can have children with blood groups:",
              options: ["A and B only", "AB only", "A, B and AB only", "A, B, AB and O"],
              answer: 3,
              explain: "Iᴬi × Iᴮi → IᴬIᴮ, Iᴬi, Iᴮi, ii.",
            },
            { kind: "mcq", q: "Human skin colour is an example of:", options: ["Pleiotropy", "Polygenic inheritance", "Codominance", "Multiple allelism"], answer: 1, explain: "Controlled by several genes with additive effect." },
          ],
        },
        {
          slug: "genetics-problem-patterns",
          title: "Problem-solving patterns: Genetics",
          summary: "2ⁿ/3ⁿ counting, X-linked crosses and karyotypes.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "Most genetics numericals are counting problems. Use formulas instead of drawing a giant Punnett square." },
            {
              type: "table",
              headers: ["For n heterozygous gene pairs", "Formula"],
              rows: [
                ["Gamete types", t`$2^n$`],
                ["F2 genotypes", t`$3^n$`],
                ["F2 phenotypes (complete dominance)", t`$2^n$`],
                ["F2 combinations (boxes)", t`$4^n$`],
              ],
            },
            { type: "heading", text: "X-linked recessive (colour blindness, haemophilia)" },
            { type: "text", md: "Carrier mother (XᶜX) × normal father (XY): **50% of sons affected**, 0% daughters affected, 50% daughters carriers." },
            {
              type: "table",
              headers: ["Disorder", "Karyotype"],
              rows: [
                ["Down syndrome", "47, trisomy 21"],
                ["Klinefelter syndrome", "47, XXY"],
                ["Turner syndrome", "45, XO"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Recombination frequency = map distance: 1% recombination = 1 map unit (centimorgan).",
            },
          ],
          flashcards: [
            { front: "Gametes from AaBbCc", back: "2³ = 8" },
            { front: "Klinefelter karyotype", back: "47, XXY" },
            { front: "Turner karyotype", back: "45, XO" },
          ],
          quiz: [
            { kind: "numeric", q: "Number of gamete types produced by AaBbCc?", answer: 8, explain: "$2^3$." },
            { kind: "numeric", q: "Number of genotypes in the F2 of a trihybrid cross?", answer: 27, explain: "$3^3$." },
            {
              kind: "mcq",
              q: "A carrier colour-blind woman marries a normal man. Expected result:",
              options: ["All sons colour blind", "50% sons colour blind, no daughters colour blind", "50% daughters colour blind", "All children normal"],
              answer: 1,
              explain: "Sons get X from mother (½ chance of Xᶜ); daughters get a normal X from father.",
            },
            { kind: "mcq", q: "Karyotype of Klinefelter syndrome:", options: ["45, XO", "47, XXY", "47, XYY", "47, +21"], answer: 1, explain: "Extra X in a male." },
            { kind: "numeric", q: "Number of phenotypes in the F2 of a trihybrid cross (complete dominance)?", answer: 8, explain: "$2^3$." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "molecular-biology",
      title: "Molecular Biology",
      icon: "🧵",
      description: "DNA structure, replication, transcription, genetic code and the lac operon.",
      lessons: [
        {
          slug: "molecular-biology-concept-crash",
          title: "Concept crash: Molecular Biology",
          summary: "The central dogma with every NCERT number you need.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "text", md: "DNA → RNA → protein. Simple slogan, but NEET tests the small print: numbers, scientists and exceptions." },
            {
              type: "table",
              headers: ["B-DNA fact", "Value"],
              rows: [
                ["Base pairs per turn", "10"],
                ["Pitch (one turn)", "3.4 nm"],
                ["Rise per base pair", "0.34 nm"],
                ["Diameter", "2 nm"],
                ["Chargaff's rule", "A = T, G = C; (A + G) = (T + C)"],
              ],
            },
            {
              type: "list",
              items: [
                "**Semi-conservative replication:** Meselson & Stahl, using ¹⁵N in *E. coli*.",
                "**Genetic code:** 64 codons, 61 sense; AUG = start (Met); UAA, UAG, UGA = stop.",
                "**Code is** triplet, degenerate, unambiguous, nearly universal, non-overlapping.",
                "**lac operon:** Jacob & Monod; inducer = allolactose (lactose); repressor from *i* gene.",
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "The mRNA sequence matches the **coding strand** (with U for T), not the template strand.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "A DNA sample has 20% adenine. Percentage of guanine?", answer: 30, unit: "%", explain: "A = T = 20%, so G + C = 60%, G = 30%." }],
            },
          ],
          flashcards: [
            { front: "Base pairs per B-DNA turn", back: "10 (pitch 3.4 nm)" },
            { front: "Proof of semi-conservative replication", back: "Meselson & Stahl (¹⁵N)" },
            { front: "Stop codons", back: "UAA, UAG, UGA" },
            { front: "Inducer of lac operon", back: "Allolactose (from lactose)" },
          ],
          quiz: [
            { kind: "mcq", q: "Semi-conservative DNA replication was proved by:", options: ["Hershey & Chase", "Meselson & Stahl", "Watson & Crick", "Griffith"], answer: 1, explain: "Density-gradient centrifugation with ¹⁵N." },
            { kind: "truefalse", q: "AUG codes for methionine and also acts as the initiation codon.", answer: true, explain: "It is the universal start codon." },
            { kind: "mcq", q: "Number of stop (nonsense) codons:", options: ["1", "2", "3", "4"], answer: 2, explain: "UAA, UAG, UGA." },
            { kind: "numeric", q: "If a DNA molecule has 35% guanine, what percentage is thymine?", answer: 15, unit: "%", explain: "G = C = 35% → A + T = 30% → T = 15%." },
          ],
        },
        {
          slug: "molecular-biology-problem-patterns",
          title: "Problem-solving patterns: Molecular Biology",
          summary: "DNA length, turns and strand-to-mRNA conversions.",
          minutes: 14,
          xp: 40,
          blocks: [
            { type: "text", md: "Quick conversions turn wordy molecular biology questions into one-line answers." },
            { type: "formula", tex: t`\text{Length} = \text{bp}\times0.34\ \text{nm}, \qquad \text{Turns} = \frac{\text{bp}}{10}` },
            { type: "text", md: t`**Worked:** Human diploid DNA ≈ $6.6\times10^9$ bp → $6.6\times10^9\times0.34\times10^{-9}$ m ≈ **2.2 m**.` },
            { type: "heading", text: "Template → mRNA" },
            {
              type: "list",
              ordered: true,
              items: ["Write the complement of the template (A→U, T→A, G→C, C→G).", "Reverse polarity: template 3'→5' gives mRNA 5'→3'.", "Read codons from the 5' end."],
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "*E. coli* genome: $4.6\\times10^6$ bp. Human genome (haploid): ~$3.1\\times10^9$ bp, ~20,000–25,000 genes (HGP).",
            },
          ],
          flashcards: [
            { front: "Length of 1 bp", back: "0.34 nm" },
            { front: "Length of human DNA (diploid)", back: "≈ 2.2 m" },
            { front: "E. coli genome size", back: t`$4.6\times10^6$ bp` },
          ],
          quiz: [
            { kind: "numeric", q: "Length of a 1000 bp B-DNA molecule (nm)?", answer: 340, unit: "nm", explain: "1000 × 0.34." },
            {
              kind: "mcq",
              q: "Template strand: 3'-TAC GGA-5'. The mRNA formed is:",
              options: ["5'-AUG CCU-3'", "5'-UAC GGA-3'", "3'-AUG CCU-5'", "5'-ATG CCT-3'"],
              answer: 0,
              explain: "Complement with U, antiparallel.",
            },
            { kind: "mcq", q: "The true inducer of the lac operon is:", options: ["Glucose", "Galactose", "Allolactose", "cAMP"], answer: 2, explain: "Lactose is converted to allolactose, which binds the repressor." },
            { kind: "numeric", q: "Number of helical turns in 200 bp of B-DNA?", answer: 20, explain: "10 bp per turn." },
            { kind: "truefalse", q: "In the lac operon, the repressor protein is coded by the i gene.", answer: true, explain: "i = inhibitor; it is constitutively expressed." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "human-physiology",
      title: "Human Physiology",
      icon: "❤️",
      description: "Circulation, respiration, excretion and the numbers NEET quotes.",
      lessons: [
        {
          slug: "human-physiology-concept-crash",
          title: "Concept crash: Human Physiology",
          summary: "Normal values for heart, blood, lungs and kidneys.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "text", md: "Physiology questions often hinge on a single number: GFR, cardiac output, tidal volume. Lock these in." },
            { type: "formula", tex: t`\text{Cardiac output} = \text{Stroke volume}\times\text{Heart rate} \approx 70\ \text{mL}\times72 \approx 5\ \text{L/min}` },
            {
              type: "table",
              headers: ["Parameter", "Normal value"],
              rows: [
                ["RBC count", "5–5.5 million/mm³"],
                ["WBC count", "6000–8000/mm³"],
                ["Platelets", "1.5–3.5 lakh/mm³"],
                ["Haemoglobin", "12–16 g/100 mL"],
                ["Tidal volume", "≈ 500 mL"],
                ["GFR", "≈ 125 mL/min (≈ 180 L/day)"],
                ["Urine output", "≈ 1–1.5 L/day"],
              ],
            },
            {
              type: "list",
              items: ["**ECG:** P = atrial depolarisation; QRS = ventricular depolarisation; T = ventricular repolarisation.", "**Pacemaker:** SA node.", "**Resting membrane potential:** ≈ −70 mV."],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "≈99% of filtrate is reabsorbed — 180 L filtered but only ~1.5 L excreted. Questions often ask the reabsorption percentage.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "Stroke volume 70 mL, heart rate 72/min. Cardiac output (mL/min)?", answer: 5040, unit: "mL/min", explain: "70 × 72 = 5040." }],
            },
          ],
          flashcards: [
            { front: "Normal GFR", back: "≈ 125 mL/min" },
            { front: "QRS complex", back: "Ventricular depolarisation" },
            { front: "Tidal volume", back: "≈ 500 mL" },
            { front: "Pacemaker of heart", back: "SA node" },
          ],
          quiz: [
            { kind: "mcq", q: "GFR in a healthy adult is about:", options: ["25 mL/min", "125 mL/min", "180 mL/min", "1.5 L/min"], answer: 1, explain: "≈ 180 L/day." },
            { kind: "truefalse", q: "The QRS complex represents ventricular depolarisation.", answer: true, explain: "It precedes ventricular contraction." },
            { kind: "mcq", q: "Vital capacity equals:", options: ["TV + IRV", "TV + ERV + RV", "TV + IRV + ERV", "IRV + ERV + RV"], answer: 2, explain: "Maximum air breathed out after a maximum inspiration." },
            { kind: "truefalse", q: "The AV node is the pacemaker of the human heart.", answer: false, explain: "The SA node is the pacemaker." },
          ],
        },
        {
          slug: "human-physiology-problem-patterns",
          title: "Problem-solving patterns: Human Physiology",
          summary: "Lung-volume arithmetic, gas transport and hormone pairs.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "Lung capacities are just sums of volumes. Learn which volumes go into which capacity." },
            {
              type: "table",
              headers: ["Capacity", "Sum"],
              rows: [
                ["Inspiratory capacity (IC)", "TV + IRV"],
                ["Expiratory capacity (EC)", "TV + ERV"],
                ["Functional residual (FRC)", "ERV + RV"],
                ["Vital capacity (VC)", "TV + IRV + ERV"],
                ["Total lung capacity (TLC)", "VC + RV"],
              ],
            },
            { type: "text", md: "**Worked:** TV 500, IRV 2500, ERV 1000, RV 1200 mL → VC = 4000 mL, TLC = 5200 mL." },
            {
              type: "table",
              headers: ["CO₂ transport", "Share"],
              rows: [
                ["As bicarbonate", "≈ 70%"],
                ["As carbamino-haemoglobin", "≈ 20–25%"],
                ["Dissolved in plasma", "≈ 7%"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Every 100 mL of oxygenated blood delivers ≈ 5 mL O₂ to tissues under normal conditions.",
            },
          ],
          flashcards: [
            { front: "Total lung capacity", back: "VC + RV" },
            { front: "Main form of CO₂ transport", back: "Bicarbonate (~70%)" },
            { front: "Posterior pituitary hormones", back: "Oxytocin and vasopressin (ADH)" },
          ],
          quiz: [
            { kind: "numeric", q: "TV = 500 mL, IRV = 2500 mL, ERV = 1000 mL. Vital capacity (mL)?", answer: 4000, unit: "mL", explain: "500 + 2500 + 1000." },
            { kind: "numeric", q: "With the above and RV = 1200 mL, total lung capacity (mL)?", answer: 5200, unit: "mL", explain: "4000 + 1200." },
            { kind: "mcq", q: "Most CO₂ is transported in blood as:", options: ["Dissolved CO₂", "Carbamino-haemoglobin", "Bicarbonate ions", "Carbonic acid"], answer: 2, explain: "Carbonic anhydrase in RBCs makes HCO₃⁻." },
            {
              kind: "multi",
              q: "Hormones released from the posterior pituitary:",
              options: ["Oxytocin", "Prolactin", "Vasopressin (ADH)", "TSH"],
              answers: [0, 2],
              explain: "Made in the hypothalamus, released by the neurohypophysis.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "ecology",
      title: "Ecology",
      icon: "🌿",
      description: "Population growth, energy flow, pyramids, interactions and biodiversity.",
      lessons: [
        {
          slug: "ecology-concept-crash",
          title: "Concept crash: Ecology",
          summary: "Growth models, 10% law, pyramids and species interactions.",
          minutes: 14,
          xp: 30,
          blocks: [
            { type: "text", md: "Ecology is NEET's most direct, NCERT-line chapter. A few equations plus a few tables cover most of it." },
            { type: "formula", tex: t`\frac{dN}{dt} = rN \qquad \frac{dN}{dt} = rN\left(\frac{K - N}{K}\right)`, caption: "Exponential (J-curve) vs logistic (S-curve)" },
            { type: "callout", tone: "fact", title: "Lindeman's 10% law", md: "Only ~10% of energy passes to the next trophic level. 10,000 J in producers → 1,000 → 100 → 10 J." },
            {
              type: "table",
              headers: ["Interaction", "Species A", "Species B"],
              rows: [
                ["Mutualism", "+", "+"],
                ["Commensalism", "+", "0"],
                ["Amensalism", "−", "0"],
                ["Predation / Parasitism", "+", "−"],
                ["Competition", "−", "−"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "Pyramid of **energy** is always upright. Biomass can be inverted (sea); numbers can be inverted (tree with insects).",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "Producers fix 10,000 J. Energy reaching tertiary consumers (10% law)?", answer: 10, unit: "J", explain: "10,000 → 1,000 → 100 → 10." }],
            },
          ],
          flashcards: [
            { front: "Logistic growth equation", back: t`$dN/dt = rN(K-N)/K$` },
            { front: "Pyramid that is always upright", back: "Energy" },
            { front: "Commensalism sign", back: "+ / 0" },
          ],
          quiz: [
            { kind: "mcq", q: "Which ecological pyramid is always upright?", options: ["Numbers", "Biomass", "Energy", "All of these"], answer: 2, explain: "Energy is lost at every transfer." },
            { kind: "truefalse", q: "Commensalism benefits one species while the other is unaffected.", answer: true, explain: "+/0, e.g. orchid on a mango branch." },
            { kind: "mcq", q: "In logistic growth, when N = K, the growth rate is:", options: ["Maximum", "Zero", "Negative infinity", "Equal to r"], answer: 1, explain: "(K − N)/K = 0." },
            { kind: "mcq", q: "Mycorrhiza (fungus + plant root) is an example of:", options: ["Parasitism", "Commensalism", "Mutualism", "Amensalism"], answer: 2, explain: "Fungus gets food; plant gets minerals." },
          ],
        },
        {
          slug: "ecology-problem-patterns",
          title: "Problem-solving patterns: Ecology",
          summary: "Birth/death rates, productivity and species–area numbers.",
          minutes: 14,
          xp: 40,
          blocks: [
            { type: "text", md: "NCERT-style ecology numericals are simple ratios. The trick is reading which number is the base." },
            { type: "formula", tex: t`N_{t+1} = N_t + \big[(B + I) - (D + E)\big]` },
            { type: "text", md: "**Worked:** A pond had 20 lotus plants; 8 new ones this year → birth rate = 8/20 = **0.4 per lotus per year**." },
            { type: "formula", tex: t`\text{NPP} = \text{GPP} - R` },
            { type: "formula", tex: t`\log S = \log C + Z\log A`, caption: "Species–area relationship (Humboldt)" },
            {
              type: "table",
              headers: ["Z value", "Applies to"],
              rows: [
                ["0.1 – 0.2", "Small regions within a continent"],
                ["0.6 – 1.2", "Very large areas (whole continents)"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Annual NPP of the biosphere ≈ 170 billion tonnes (dry weight); oceans contribute only ≈ 55 billion tonnes despite covering ~70% of the surface.",
            },
          ],
          flashcards: [
            { front: "NPP", back: "GPP − respiration loss" },
            { front: "Z for continents", back: "0.6 – 1.2" },
            { front: "Biosphere NPP", back: "≈ 170 billion tonnes/year" },
          ],
          quiz: [
            { kind: "numeric", q: "A population of 40 fruit flies loses 4 in a week. Death rate per fly per week?", answer: 0.1, tolerance: 0.001, explain: "4/40 = 0.1." },
            { kind: "mcq", q: "Z value in the species–area relationship for very large areas like continents:", options: ["0.1–0.2", "0.2–0.4", "0.6–1.2", "1.5–2.0"], answer: 2, explain: "Steeper slope for whole continents." },
            { kind: "numeric", q: "GPP = 100 units, respiration loss = 40 units. NPP?", answer: 60, explain: "100 − 40." },
            { kind: "truefalse", q: "The pyramid of biomass in an ocean can be inverted.", answer: true, explain: "Fast-reproducing phytoplankton have low standing biomass." },
          ],
        },
      ],
    },
  ],
};
