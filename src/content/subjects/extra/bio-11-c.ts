import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

/** Standard assertion–reason options used in NEET-style questions. */
const AR = [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];

/* ------------------------------------------------------------------ */
/* Cell: The Unit of Life                                              */
/* ------------------------------------------------------------------ */
const cellUnit: Topic = {
  slug: "c11-bio-cell-unit-of-life",
  title: "Cell: The Unit of Life",
  icon: "🔬",
  description:
    "Cell theory, prokaryotic and eukaryotic cells, the cell membrane and wall, the endomembrane system, mitochondria, plastids, ribosomes, cytoskeleton, cilia, centrioles, the nucleus and chromosomes.",
  lessons: [
    /* ---------------- Lesson 1: cell theory and prokaryotic cells ---------------- */
    {
      slug: "c11-bio-cell-theory-prokaryotes",
      title: "Cell Theory and the Prokaryotic Cell",
      summary:
        "Why the cell is the basic unit of life, how cell theory was built and corrected, the sizes and shapes of cells, and the parts of a bacterial cell from envelope to inclusion bodies.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Put a drop of curd under a school microscope and you see tiny rods: *Lactobacillus*. Each rod is a complete living thing. It takes in food, releases energy, grows and divides. A single cell can live on its own; a mitochondrion or a nucleus taken out of a cell cannot. This is why the **cell** is called the **structural and functional unit of life**.\n\nOrganisms made of one cell are **unicellular** (bacteria, *Amoeba*, yeast). Organisms made of many cells are **multicellular** (mango tree, human).",
        },
        {
          type: "table",
          headers: ["Scientist (year)", "Contribution"],
          rows: [
            ["Robert Hooke (1665)", "Saw the box-like walls of dead cork cells and used the word 'cell'. (Named in ISC books; NCERT starts with Leeuwenhoek.)"],
            ["Anton van Leeuwenhoek", "First saw and described a **live** cell."],
            ["Robert Brown (1831)", "Discovered the **nucleus**."],
            ["Matthias Schleiden (1838)", "Botanist: all plants are made of different kinds of cells that form plant tissues."],
            ["Theodore Schwann (1839)", "Zoologist: animal cells have a thin outer layer (the plasma membrane); the **cell wall is unique to plant cells**; bodies of animals and plants are made of cells and their products."],
            ["Rudolf Virchow (1855)", "Cells divide and new cells come from pre-existing cells: *Omnis cellula-e cellula*."],
          ],
        },
        {
          type: "text",
          md: "Schleiden and Schwann together proposed the **cell theory**, but they could not explain how new cells form. Virchow completed it. The cell theory as understood today says:\n\n1. All living organisms are made of cells and products of cells.\n2. All cells arise from pre-existing cells.",
        },
        {
          type: "text",
          md: "**An overview.** Every cell has a membrane-bound **cytoplasm**, a semi-fluid matrix where most chemical reactions happen. A **eukaryotic** cell has a true nucleus bounded by a nuclear envelope and other membrane-bound organelles (ER, Golgi complex, lysosomes, mitochondria, microbodies, vacuoles). A **prokaryotic** cell has no membrane-bound nucleus and no membrane-bound organelles. **Ribosomes** are non-membrane-bound and are found in all cells. Animal cells have **centrioles**, which most plant cells lack.",
        },
        {
          type: "table",
          headers: ["Cell", "Size or shape fact"],
          rows: [
            ["*Mycoplasma*", "Smallest cells, only about 0.3 μm long"],
            ["Bacteria", "About 3–5 μm"],
            ["Human red blood cell", "About 7.0 μm in diameter"],
            ["Ostrich egg", "Largest isolated single cell"],
            ["Nerve cells", "Among the longest cells"],
            ["Shapes", "Disc-like, polygonal, columnar, cuboid, thread-like or irregular; shape suits function"],
          ],
        },
        {
          type: "heading",
          text: "The prokaryotic cell",
        },
        {
          type: "text",
          md: "Prokaryotes are **bacteria**, **blue-green algae (cyanobacteria)**, **mycoplasma** and **PPLO** (pleuro-pneumonia-like organisms). They are usually smaller and multiply faster than eukaryotic cells. Bacteria have four basic shapes: **bacillus** (rod), **coccus** (sphere), **vibrio** (comma) and **spirillum** (spiral).\n\nThe genetic material is a single circular DNA lying naked in the cytoplasm (the **nucleoid**), with no nuclear envelope. Many bacteria also carry small circular DNA outside the genome called **plasmids**. Plasmids give special traits such as **resistance to antibiotics**, and are used to carry foreign DNA in genetic engineering.",
        },
        {
          type: "table",
          headers: ["Part", "What it is and does"],
          rows: [
            ["Cell envelope", "Three tightly bound layers: outer **glycocalyx**, middle **cell wall**, inner **plasma membrane**. It works as one protective unit."],
            ["Glycocalyx", "A loose sheath = **slime layer**; a thick, tough layer = **capsule**."],
            ["Cell wall", "Gives shape and strong support; stops the cell from bursting or collapsing."],
            ["Mesosome", "Infoldings of the plasma membrane (vesicles, tubules, lamellae). Helps in cell-wall formation, DNA replication and its distribution to daughter cells, respiration and secretion; increases membrane surface area and enzyme content."],
            ["Chromatophores", "Membranous extensions in cyanobacteria that hold the photosynthetic pigments."],
            ["Flagellum", "Thin filamentous outgrowth for motility; has three parts: **filament** (longest), **hook** and **basal body**."],
            ["Pili", "Elongated tubular structures made of a special protein."],
            ["Fimbriae", "Small bristle-like fibres that help bacteria attach to rocks in streams or to host tissue."],
          ],
        },
        {
          type: "text",
          md: "Bacteria are grouped by **Gram staining**: those that take up the stain are **Gram positive**; those that do not are **Gram negative**. The difference lies in the cell envelope.\n\n**Ribosomes** in prokaryotes are attached to the plasma membrane. They are about 15–20 nm in size, **70S**, made of a **50S** and a **30S** subunit. Several ribosomes may attach to one mRNA in a chain called a **polysome** (polyribosome); each translates the same mRNA into protein.\n\n**Inclusion bodies** store reserve material in the cytoplasm. They are not bounded by a membrane: phosphate granules, cyanophycean granules and glycogen granules. **Gas vacuoles** occur in blue-green, purple and green photosynthetic bacteria.",
        },
        {
          type: "example",
          title: "Reading a bacterial cell",
          problem: "A bacterium is rod-shaped, has a thick tough layer outside its wall, survives a course of ampicillin, and sticks firmly to the lining of the gut. Name the shape and the structure responsible for each of the other three features.",
          steps: [
            "Rod-shaped bacterium = **bacillus**.",
            "A thick, tough outer layer of the glycocalyx is a **capsule** (a loose one would be a slime layer).",
            "Antibiotic resistance is usually carried on **plasmids**, small circular DNA outside the main genome.",
            "Attachment to host tissue is the job of **fimbriae**; flagella give movement, not attachment.",
          ],
          answer: "Bacillus; capsule; plasmid; fimbriae.",
        },
        {
          type: "mistake",
          wrong: "Prokaryotes have no ribosomes because they have no organelles.",
          right: "Prokaryotes lack **membrane-bound** organelles, but they do have ribosomes (70S). Ribosomes are non-membrane-bound and occur in every cell.",
          why: "Students read 'no organelles' and drop ribosomes too. A cell without ribosomes could not make proteins and could not live. The only membrane-like infolding in bacteria is the mesosome, which is part of the plasma membrane.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each feature into the cell type it belongs to.",
            groups: ["Prokaryotic only", "Eukaryotic only", "Both"],
            items: [
              { text: "Mesosome", group: 0, hint: "An infolding of the bacterial plasma membrane." },
              { text: "Nucleoid with naked circular DNA", group: 0, hint: "No nuclear envelope surrounds it." },
              { text: "Golgi complex", group: 1, hint: "A membrane-bound organelle." },
              { text: "Nuclear envelope", group: 1, hint: "Only true nuclei have it." },
              { text: "Ribosomes", group: 2, hint: "Non-membrane-bound; every cell needs them." },
              { text: "Plasma membrane", group: 2, hint: "Every cell is bounded by one." },
              { text: "Mitochondria", group: 1, hint: "Prokaryotes respire on their plasma membrane and mesosomes." },
            ],
            explain: "Prokaryotes lack all membrane-bound organelles, yet both cell types share a plasma membrane, cytoplasm and ribosomes.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which statement was added to the cell theory by Rudolf Virchow?",
              options: [
                "All plants are made of cells",
                "The cell wall is unique to plant cells",
                "All cells arise from pre-existing cells",
                "The nucleus is present in all cells",
              ],
              answer: 2,
              explain: "Virchow (1855) explained that cells divide and new cells form from pre-existing cells (*Omnis cellula-e cellula*).",
            },
            {
              kind: "mcq",
              q: "The three parts of a bacterial flagellum are:",
              options: ["Filament, hook, basal body", "Axoneme, basal body, centriole", "Filament, pilus, hook", "Capsule, hook, filament"],
              answer: 0,
              explain: "Bacterial flagella have a filament (the longest part), a hook and a basal body. The 9+2 axoneme belongs to eukaryotic flagella.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "'State the cell theory' carries 2 marks only when you give both points and say Virchow modified the theory of Schleiden and Schwann. In a 'functions of mesosome' answer, list at least four: cell-wall formation, DNA replication and distribution, respiration, secretion, more surface area and enzymes.",
        },
        {
          type: "keypoints",
          items: [
            "Cell theory: Schleiden (plants) and Schwann (animals), completed by Virchow (cells from pre-existing cells).",
            "*Mycoplasma* (0.3 μm) is the smallest cell; the ostrich egg is the largest single cell.",
            "Bacterial envelope = glycocalyx + cell wall + plasma membrane; glycocalyx is a slime layer or a capsule.",
            "Mesosomes, plasmids, 70S ribosomes, polysomes and non-membranous inclusion bodies are prokaryotic features.",
            "Flagellum (filament, hook, basal body) moves the cell; fimbriae help it attach.",
          ],
        },
      ],
      flashcards: [
        { front: "*Omnis cellula-e cellula*", back: "All cells arise from pre-existing cells; Rudolf Virchow, 1855." },
        { front: "Who discovered the nucleus?", back: "Robert Brown, 1831." },
        { front: "Smallest cell", back: "*Mycoplasma*, about 0.3 μm." },
        { front: "Layers of a bacterial cell envelope", back: "Glycocalyx (outer), cell wall (middle), plasma membrane (inner)." },
        { front: "Slime layer versus capsule", back: "Slime layer: loose glycocalyx. Capsule: thick, tough glycocalyx." },
        { front: "Mesosome", back: "Infolding of the bacterial plasma membrane; helps wall formation, DNA replication and distribution, respiration, secretion." },
        { front: "Polysome", back: "Several ribosomes attached to one mRNA, each translating it." },
        { front: "Three prokaryotic inclusion bodies", back: "Phosphate granules, cyanophycean granules, glycogen granules (not membrane-bound)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which scientist concluded that the presence of a cell wall is a unique character of plant cells?",
          options: ["Schleiden", "Schwann", "Virchow", "Leeuwenhoek"],
          answer: 1,
          explain: "Theodore Schwann studied animal cells, found a thin outer layer (plasma membrane) and concluded that the cell wall is unique to plant cells.",
        },
        {
          kind: "multi",
          q: "Which of these are prokaryotes?",
          options: ["Cyanobacteria", "*Mycoplasma*", "Yeast", "PPLO", "*Amoeba*"],
          answers: [0, 1, 3],
          explain: "Bacteria, cyanobacteria, mycoplasma and PPLO are prokaryotes. Yeast (a fungus) and *Amoeba* (a protist) are eukaryotes.",
        },
        {
          kind: "fill",
          q: "Comma-shaped bacteria are called ___.",
          answer: ["vibrio", "vibrium", "vibrios"],
          explain: "Bacillus is rod-shaped, coccus spherical, vibrio comma-shaped and spirillum spiral.",
        },
        {
          kind: "truefalse",
          q: "Inclusion bodies in prokaryotes are bounded by a single membrane.",
          answer: false,
          explain: "Prokaryotic inclusion bodies (phosphate, cyanophycean and glycogen granules) lie free in the cytoplasm without any membrane.",
        },
        {
          kind: "mcq",
          q: "In cyanobacteria, the photosynthetic pigments are present in:",
          options: ["Chloroplasts", "Chromatophores", "Mesosomes only", "Plasmids"],
          answer: 1,
          explain: "Cyanobacteria have membranous extensions called chromatophores that contain pigments. They have no chloroplasts.",
        },
        {
          kind: "mcq",
          q: "The prokaryotic ribosome is made of:",
          options: ["60S + 40S", "50S + 30S", "50S + 20S", "40S + 30S"],
          answer: 1,
          explain: "70S prokaryotic ribosomes have a 50S and a 30S subunit. S values do not add up simply because sedimentation depends on shape as well as mass.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A bacterium loses its fimbriae but keeps its flagella. What is most likely affected?",
          options: ["Swimming", "Attachment to host tissue", "Protein synthesis", "DNA replication"],
          answer: 1,
          explain: "Fimbriae help bacteria attach to surfaces such as rocks or host tissues. Flagella, still present, give motility.",
          difficulty: 2,
          hint: "Which structure is for moving and which for holding on?",
        },
      ],
    },
    /* ---------------- Lesson 2: membrane, wall, endomembrane system ---------------- */
    {
      slug: "c11-bio-membrane-endomembrane",
      title: "Cell Membrane, Cell Wall and the Endomembrane System",
      summary:
        "The fluid mosaic model and transport across membranes, the layers of the plant cell wall, and the organelles that work together as the endomembrane system: ER, Golgi, lysosomes and vacuoles.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "A eukaryotic cell is like a busy factory in Peenya, Bengaluru. It has a boundary wall with guarded gates (the **cell membrane**), assembly lines (the **endoplasmic reticulum**), a packing and dispatch unit (the **Golgi complex**), waste-recycling bins (**lysosomes**) and storage tanks (**vacuoles**). Eukaryotic cells are found in all **protists, plants, animals and fungi**.",
        },
        {
          type: "heading",
          text: "The cell membrane",
        },
        {
          type: "text",
          md: "The detailed structure of the membrane was worked out after the electron microscope came into use in the 1950s. Chemical studies, especially on human red blood cells, showed that the membrane is mainly **lipid and protein**. In human RBC membranes, about **52% is protein and 40% is lipid**.\n\nThe main lipids are **phospholipids** arranged in a **bilayer**: the polar (hydrophilic) heads face outwards and the non-polar hydrocarbon tails face inwards, away from water. The membrane also contains **cholesterol**. Proteins are **integral** (partly or wholly buried in the membrane) or **peripheral** (on the surface). Membranes also carry carbohydrates.",
        },
        {
          type: "text",
          md: "The accepted model is the **fluid mosaic model** of **Singer and Nicolson (1972)**. The quasi-fluid nature of the lipid lets proteins move sideways within the bilayer. This fluidity is needed for **cell growth, formation of intercellular junctions, secretion, endocytosis and cell division**.\n\nThe membrane is **selectively permeable**. Some molecules cross without energy along a concentration gradient (**passive transport**); neutral solutes do this by simple diffusion. Water moves by **osmosis**. Polar molecules need **carrier proteins**. Moving ions or molecules **against** a gradient uses ATP (**active transport**), as in the **Na⁺/K⁺ pump**.",
        },
        {
          type: "table",
          headers: ["Cell wall feature", "Details"],
          rows: [
            ["Algae", "Cellulose, galactans, mannans and minerals such as calcium carbonate"],
            ["Higher plants", "Cellulose, hemicellulose, pectins and proteins"],
            ["Primary wall", "Thin, laid down in a young cell, able to grow; gradually decreases as the cell matures"],
            ["Secondary wall", "Formed on the **inner** side of the primary wall (towards the membrane)"],
            ["Middle lamella", "Mainly **calcium pectate**; holds neighbouring cells together"],
            ["Plasmodesmata", "Cytoplasmic strands that pass through the wall and middle lamella, connecting neighbouring cells"],
          ],
        },
        {
          type: "heading",
          text: "The endomembrane system",
        },
        {
          type: "text",
          md: "The **ER, Golgi complex, lysosomes and vacuoles** are treated as one **endomembrane system** because their functions are coordinated. **Mitochondria, chloroplasts and peroxisomes are not included**, as their functions are not coordinated with these.\n\n**Endoplasmic reticulum (ER)** is a network of tiny tubules spread through the cytoplasm, dividing it into a luminal (inside ER) and an extra-luminal compartment. **Rough ER (RER)** carries ribosomes, is common in cells making and **secreting proteins**, and is continuous with the outer nuclear membrane. **Smooth ER (SER)** has no ribosomes and is the main site of **lipid synthesis**; in animal cells it makes lipid-like **steroidal hormones**.",
        },
        {
          type: "text",
          md: "**Golgi apparatus**, first seen by **Camillo Golgi (1898)** as densely stained reticular structures near the nucleus, is a stack of flat, disc-shaped sacs called **cisternae** (0.5–1.0 μm across). The stack has a convex **cis (forming) face** and a concave **trans (maturing) face**; the two are different but connected. Vesicles from the ER fuse with the cis face and travel to the trans face. Its main job is **packaging** materials for intracellular use or for secretion. Many proteins made on the RER are modified in the Golgi, and it is the main site for forming **glycoproteins and glycolipids**.\n\n**Lysosomes** are membrane-bound vesicles formed by packaging in the Golgi. They are rich in hydrolytic enzymes (lipases, proteases, carbohydrases) that work best at **acidic pH** and can digest carbohydrates, proteins, lipids and nucleic acids.\n\n**Vacuoles** are membrane-bound spaces holding water, sap, excretory products and unwanted materials. The membrane is the **tonoplast**. In plants the vacuole can fill up to **90%** of the cell. The tonoplast moves ions and other materials **against** concentration gradients into the vacuole, so their concentration there is much higher than in the cytoplasm. In *Amoeba* the **contractile vacuole** helps in osmoregulation and excretion; many protists form **food vacuoles** by engulfing food.",
        },
        {
          type: "example",
          title: "Tracing a secretory protein",
          problem: "A pancreatic cell makes a digestive enzyme that is released outside the cell. Trace the path of the enzyme and say which organelles add something to it.",
          steps: [
            "The protein is made on ribosomes attached to the **RER** and enters the ER lumen.",
            "Transport vesicles bud off the ER and fuse with the **cis face** of the Golgi.",
            "Inside the Golgi cisternae the protein may be modified, for example by adding sugars to form glycoproteins.",
            "Packed in secretory vesicles at the **trans face**, it moves to the plasma membrane and is released by exocytosis.",
          ],
          answer: "RER → vesicle → Golgi (cis to trans) → secretory vesicle → plasma membrane → outside. RER makes it; Golgi modifies and packs it.",
        },
        {
          type: "mistake",
          wrong: "Mitochondria and chloroplasts are part of the endomembrane system because they are bounded by membranes.",
          right: "Only ER, Golgi complex, lysosomes and vacuoles form the endomembrane system. Mitochondria, chloroplasts and peroxisomes are excluded.",
          why: "Having a membrane is not the test; coordinated function is. The four members pass material to one another by vesicles, while mitochondria and plastids work on their own and even have their own DNA.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each structure with its main job.",
            pairs: [
              ["Smooth ER", "Lipid and steroid hormone synthesis"],
              ["Rough ER", "Synthesis of proteins for secretion"],
              ["Golgi complex", "Packaging; forming glycoproteins and glycolipids"],
              ["Lysosome", "Digestion by acid hydrolases"],
              ["Tonoplast", "Membrane of the vacuole"],
              ["Middle lamella", "Calcium pectate layer gluing plant cells"],
            ],
            explain: "Each member of the endomembrane system has its own job, but they are linked: RER products go to the Golgi, and the Golgi forms lysosomes.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The fluid mosaic model of the plasma membrane was proposed by:",
              options: ["Robertson", "Singer and Nicolson", "Danielli and Davson", "Camillo Golgi"],
              answer: 1,
              explain: "Singer and Nicolson proposed the fluid mosaic model in 1972; the lipid is quasi-fluid and proteins move laterally.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In a labelled diagram of the fluid mosaic model, label the phospholipid bilayer, integral protein, peripheral protein, cholesterol and sugar chains. For 'name the endomembrane organelles', write all four and mention the three that are excluded; examiners often give the extra half mark for that.",
        },
        {
          type: "keypoints",
          items: [
            "Membrane: phospholipid bilayer with cholesterol and proteins (RBC: 52% protein, 40% lipid); fluid mosaic model, Singer and Nicolson, 1972.",
            "Passive transport needs no energy; active transport (Na⁺/K⁺ pump) uses ATP against a gradient.",
            "Plant wall: cellulose, hemicellulose, pectins, proteins; middle lamella is calcium pectate; plasmodesmata link cells.",
            "Endomembrane system = ER + Golgi + lysosomes + vacuoles.",
            "Golgi: cis face receives, trans face ships; lysosome enzymes work at acidic pH; plant vacuole can fill 90% of the cell.",
          ],
        },
      ],
      flashcards: [
        { front: "Composition of human RBC membrane", back: "About 52% protein and 40% lipid." },
        { front: "Fluid mosaic model", back: "Singer and Nicolson, 1972: quasi-fluid lipid bilayer in which proteins move laterally." },
        { front: "Example of active transport", back: "Na⁺/K⁺ pump, which uses ATP." },
        { front: "Main component of the middle lamella", back: "Calcium pectate." },
        { front: "Members of the endomembrane system", back: "ER, Golgi complex, lysosomes, vacuoles." },
        { front: "Function of SER in animal cells", back: "Synthesis of lipids and steroidal hormones." },
        { front: "cis and trans faces of the Golgi", back: "cis = forming face (convex, receives ER vesicles); trans = maturing face (concave, releases vesicles)." },
        { front: "Tonoplast", back: "Membrane of the vacuole; actively moves ions into the vacuole against gradients." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which organelle is NOT part of the endomembrane system?",
          options: ["Lysosome", "Golgi complex", "Peroxisome", "Vacuole"],
          answer: 2,
          explain: "Peroxisomes, mitochondria and chloroplasts are excluded because their functions are not coordinated with ER, Golgi, lysosomes and vacuoles.",
        },
        {
          kind: "mcq",
          q: "Water moves across a membrane from a dilute to a more concentrated solution by:",
          options: ["Active transport", "Osmosis", "Endocytosis", "Na⁺/K⁺ pump"],
          answer: 1,
          explain: "Osmosis is the passive movement of water across a membrane; it needs no ATP.",
        },
        {
          kind: "fill",
          q: "The main site for the formation of glycoproteins and glycolipids is the ___.",
          answer: ["Golgi apparatus", "Golgi complex", "Golgi body", "Golgi"],
          explain: "Proteins from the RER are modified in the Golgi cisternae, which is the main site of glycoprotein and glycolipid formation.",
        },
        {
          kind: "truefalse",
          q: "The secondary cell wall is laid down outside the primary wall, next to the middle lamella.",
          answer: false,
          explain: "The secondary wall forms on the inner side of the primary wall, towards the plasma membrane. The middle lamella lies outermost, between cells.",
        },
        {
          kind: "multi",
          q: "Which processes depend on the fluidity of the plasma membrane?",
          options: ["Cell growth", "Endocytosis", "Secretion", "Cell division", "Replication of DNA in the nucleus"],
          answers: [0, 1, 2, 3],
          explain: "Membrane fluidity is needed for growth, intercellular junctions, secretion, endocytosis and division. DNA replication happens inside the nucleus and does not depend on plasma membrane fluidity.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Lysosomal enzymes would be least active if the lysosome lumen became:",
          options: ["Slightly acidic", "Strongly acidic, pH 4.5", "Neutral to alkaline", "Rich in protein"],
          answer: 2,
          explain: "Lysosomal hydrolases are optimally active at acidic pH. A neutral or alkaline lumen would slow them down.",
          difficulty: 2,
          hint: "Recall the pH at which these hydrolases work best.",
        },
        {
          kind: "mcq",
          q: "A cell that secretes large amounts of steroid hormone (for example in the adrenal cortex) will have a well-developed:",
          options: ["Rough ER", "Smooth ER", "Contractile vacuole", "Mesosome"],
          answer: 1,
          explain: "SER is the main site of lipid synthesis and, in animal cells, of steroidal hormones.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Lesson 3: semi-autonomous organelles, cytoskeleton, nucleus ---------------- */
    {
      slug: "c11-bio-organelles-nucleus",
      title: "Mitochondria, Plastids, Ribosomes, Cytoskeleton and the Nucleus",
      summary:
        "Double-membraned mitochondria and plastids, 70S and 80S ribosomes, the cytoskeleton, cilia and flagella, centrioles, microbodies, and the nucleus with its chromatin and chromosome types.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "A sprinter at the Khelo India games needs ATP fast; a ripe tomato is red; a potato tuber is packed with starch. Each of these is explained by a different organelle: mitochondria, chromoplasts and amyloplasts.",
        },
        {
          type: "text",
          md: "Mitochondria are hard to see without special staining. Their number per cell depends on the cell's activity. They are usually sausage-shaped or cylindrical, **0.2–1.0 μm** in diameter (average 0.5 μm) and **1.0–4.1 μm** long.\n\nEach mitochondrion has **two membranes**. The **outer membrane** is the continuous limiting boundary. The **inner membrane** forms infoldings called **cristae** towards the matrix, which increase the surface area. The two membranes enclose two compartments: the outer compartment and the inner compartment filled with a dense, homogeneous **matrix**. Each membrane has its own specific enzymes.\n\nMitochondria are the sites of **aerobic respiration** and make energy as ATP: they are the 'powerhouses' of the cell. The matrix has a single **circular DNA**, a few RNA molecules, **70S ribosomes** and components for protein synthesis. Mitochondria divide by **fission**.",
        },
        {
          type: "table",
          headers: ["Plastid", "Pigment or store", "Example"],
          rows: [
            ["Chloroplast", "Chlorophyll and carotenoids; traps light for photosynthesis", "Mesophyll cells of leaves"],
            ["Chromoplast", "Fat-soluble carotenoids (carotene, xanthophyll) give yellow, orange or red colour", "Ripe tomato, carrot, petals"],
            ["Leucoplast (colourless)", "Stores food", "—"],
            ["Amyloplast", "Starch", "Potato"],
            ["Elaioplast", "Oils and fats", "Oil-storing seeds"],
            ["Aleuroplast", "Proteins", "Seeds such as cereal grains"],
          ],
        },
        {
          type: "text",
          md: "**Chloroplasts** are lens-shaped, oval, spherical, discoid or ribbon-like, **5–10 μm long and 2–4 μm wide**. *Chlamydomonas*, a green alga, has a single chloroplast per cell; a leaf mesophyll cell has **20–40**. Like mitochondria they are **double-membraned**, and the inner membrane is relatively less permeable.\n\nThe space inside is the **stroma**. Flat sacs called **thylakoids** are stacked like coins into **grana** (singular granum), and **stroma lamellae** connect thylakoids of different grana. Chlorophyll pigments sit in the thylakoids. The stroma holds enzymes for synthesis of **carbohydrates and proteins**, plus small, double-stranded **circular DNA** and **70S ribosomes**.",
        },
        {
          type: "text",
          md: "**Ribosomes** are granular structures first seen by **George Palade (1953)**. They are made of **RNA and proteins** and have no membrane. Eukaryotic ribosomes are **80S** (60S + 40S); prokaryotic ones are 70S (50S + 30S). 'S' is the **Svedberg unit**, a measure of the sedimentation coefficient, which depends on both size and density.\n\nThe **cytoskeleton** is a network of filamentous proteins (**microtubules, microfilaments, intermediate filaments**) in the cytoplasm. It gives mechanical support, helps in motility and maintains cell shape.",
        },
        {
          type: "text",
          md: "**Cilia** (small, work like oars) and **flagella** (longer, help in movement) are hair-like outgrowths of the membrane. Eukaryotic flagella are structurally different from bacterial ones. Each is covered by the plasma membrane. Its core, the **axoneme**, has **nine pairs of doublet microtubules** around the edge and **a pair of central microtubules**: the **9+2 array**. The central tubules are joined by bridges and enclosed by a central sheath; **radial spokes** connect the sheath to each peripheral doublet, and **linkers** join the peripheral doublets to each other. Cilia and flagella arise from centriole-like **basal bodies**.\n\nThe **centrosome** has two cylindrical **centrioles** lying **perpendicular** to each other, surrounded by amorphous pericentriolar material. Each centriole has a **cartwheel** organisation: **nine evenly spaced peripheral triplets** of tubulin, a central proteinaceous **hub** and radial spokes linking the hub to the triplets. Centrioles form the basal bodies of cilia and flagella and the **spindle apparatus** during animal cell division.",
        },
        {
          type: "heading",
          text: "The nucleus and chromosomes",
        },
        {
          type: "text",
          md: "Robert Brown described the nucleus in 1831; the material stained by basic dyes was later named **chromatin** by **Flemming**. The interphase nucleus has loose, indistinct chromatin, a nuclear matrix and one or more **nucleoli**. The **nuclear envelope** has two parallel membranes with a **perinuclear space of 10–50 nm**; the outer membrane is continuous with the ER and bears ribosomes. **Nuclear pores** allow RNA and protein to move both ways. The **nucleolus** is not membrane-bound and is the site of active **rRNA synthesis**; cells actively making proteins have larger and more nucleoli.\n\nChromatin contains DNA, basic proteins (**histones**), some non-histone proteins and RNA. A single human cell has about **2 m** of DNA in 46 chromosomes (23 pairs). Cells with no nucleus at maturity: **mammalian erythrocytes** and **sieve tube cells** of vascular plants.",
        },
        {
          type: "table",
          headers: ["Chromosome type", "Position of centromere", "Arms"],
          rows: [
            ["Metacentric", "Middle", "Two equal arms"],
            ["Sub-metacentric", "Slightly away from the middle", "One shorter, one longer arm"],
            ["Acrocentric", "Very close to one end", "One extremely short, one very long arm"],
            ["Telocentric", "At the tip (terminal)", "Effectively one arm"],
          ],
        },
        {
          type: "text",
          md: "Every chromosome has a **primary constriction**, the **centromere**, with disc-shaped **kinetochores** on its sides. A few chromosomes have a non-staining **secondary constriction** that cuts off a small fragment called the **satellite**.\n\n**Microbodies** are minute membrane-bound vesicles containing various enzymes, found in both plant and animal cells (peroxisomes and glyoxysomes are examples).",
        },
        {
          type: "example",
          title: "Semi-autonomous organelles",
          problem: "Give three features shared by mitochondria and chloroplasts that are not shared by the Golgi complex.",
          steps: [
            "Both are bounded by **two** membranes; the Golgi cisternae have one.",
            "Both contain their own **circular, double-stranded DNA**.",
            "Both have **70S ribosomes** and can make some of their own proteins.",
            "(Also accepted: both divide by fission; both convert energy.)",
          ],
          answer: "Double membrane, own circular DNA, own 70S ribosomes. These make them semi-autonomous.",
        },
        {
          type: "mistake",
          wrong: "Centrioles have a 9+2 arrangement, the same as cilia.",
          right: "Centrioles (and basal bodies) have **nine peripheral triplets** and no central tubules (9+0). Cilia and flagella have **nine doublets plus a central pair** (9+2).",
          why: "Both are made of tubulin and the basal body gives rise to the cilium, so students merge the two. Count the tubules: triplets in the centriole, doublets in the axoneme.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which of these cells has no nucleus when mature?",
            emoji: "🩸",
            options: ["Human white blood cell", "Sieve tube cell of phloem", "Companion cell of phloem", "Yeast cell"],
            answer: 1,
            trap: 0,
            explain: "Mature mammalian red blood cells and sieve tube cells lose their nuclei. White blood cells, companion cells and yeast all keep a nucleus.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A chromosome with the centromere very close to one end, giving one very short and one very long arm, is:",
              options: ["Metacentric", "Sub-metacentric", "Acrocentric", "Telocentric"],
              answer: 2,
              explain: "Acrocentric: centromere close to the end. Telocentric: centromere at the very tip.",
            },
            {
              kind: "mcq",
              q: "The site of active rRNA synthesis is the:",
              options: ["Nuclear pore", "Nucleolus", "Rough ER", "Golgi complex"],
              answer: 1,
              explain: "Nucleoli are sites of active ribosomal RNA synthesis and are larger in cells making a lot of protein.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Diagrams that carry 3–5 marks: the T.S. of a mitochondrion (outer and inner membrane, cristae, matrix, inter-membrane space), a chloroplast (grana, thylakoids, stroma lamellae, stroma, ribosomes, DNA), and the cross-section of a cilium showing 9+2. ISC also asks for a labelled plant cell and animal cell side by side.",
        },
        {
          type: "keypoints",
          items: [
            "Mitochondria: double membrane, cristae, matrix with circular DNA and 70S ribosomes; aerobic respiration; divide by fission.",
            "Plastids: chloroplasts (thylakoids, grana, stroma), chromoplasts (carotenoids), leucoplasts (amylo-, elaio-, aleuroplasts).",
            "Eukaryotic ribosome 80S (60S + 40S), seen first by Palade; S = Svedberg unit.",
            "Axoneme 9+2 (doublets); centriole cartwheel of 9 triplets; centrioles lie perpendicular and form spindle and basal bodies.",
            "Nucleolus makes rRNA; chromosomes are metacentric, sub-metacentric, acrocentric or telocentric.",
          ],
        },
      ],
      flashcards: [
        { front: "Infoldings of the inner mitochondrial membrane", back: "Cristae; they increase surface area." },
        { front: "Plastid storing oil", back: "Elaioplast." },
        { front: "Plastid storing protein", back: "Aleuroplast." },
        { front: "Chloroplasts per mesophyll cell", back: "About 20–40." },
        { front: "Who first saw ribosomes?", back: "George Palade, 1953." },
        { front: "Eukaryotic ribosome subunits", back: "60S and 40S (together 80S)." },
        { front: "Arrangement in the axoneme", back: "9 peripheral doublet microtubules + 2 central microtubules (9+2)." },
        { front: "Perinuclear space", back: "Space between the two nuclear membranes, 10–50 nm." },
        { front: "Satellite", back: "Small chromosome fragment beyond a secondary constriction." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which plastid gives a ripe tomato its red colour?",
          options: ["Chloroplast", "Chromoplast", "Amyloplast", "Aleuroplast"],
          answer: 1,
          explain: "Chromoplasts contain fat-soluble carotenoid pigments that give yellow, orange or red colours.",
        },
        {
          kind: "fill",
          q: "Stacks of thylakoids in a chloroplast are called ___.",
          answer: ["grana", "granum"],
          explain: "Thylakoids stack like coins into grana; stroma lamellae connect thylakoids of different grana.",
        },
        {
          kind: "multi",
          q: "Which are present inside the mitochondrial matrix?",
          options: ["Circular DNA", "70S ribosomes", "A few RNA molecules", "80S ribosomes", "Thylakoids"],
          answers: [0, 1, 2],
          explain: "The matrix has a single circular DNA, a few RNA molecules and 70S ribosomes. Thylakoids are found in chloroplasts.",
        },
        {
          kind: "truefalse",
          q: "The two centrioles of a centrosome lie parallel to each other.",
          answer: false,
          explain: "They lie perpendicular to each other, each with a cartwheel organisation.",
        },
        {
          kind: "mcq",
          q: "Peripheral fibrils of a centriole are arranged as:",
          options: ["9 doublets", "9 triplets", "9 doublets + 2 singlets", "9 singlets"],
          answer: 1,
          explain: "Each centriole has nine evenly spaced peripheral triplets of tubulin around a central hub.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many microtubules in total are present in the cross-section of one ciliary axoneme?",
          answer: 20,
          explain: "Nine doublets give 9 × 2 = 18 peripheral microtubules, plus 2 central ones = 20.",
          difficulty: 2,
          hint: "Count both tubules of each doublet.",
        },
        {
          kind: "mcq",
          q: "The outer membrane of the nuclear envelope is continuous with the:",
          options: ["Golgi complex", "Endoplasmic reticulum", "Plasma membrane", "Tonoplast"],
          answer: 1,
          explain: "The outer nuclear membrane is continuous with the ER and also bears ribosomes.",
        },
        {
          kind: "mcq",
          q: "A cell is found to have abundant, large nucleoli. It is most likely:",
          options: ["Resting and inactive", "Actively making proteins", "Dying", "A mature red blood cell"],
          answer: 1,
          explain: "Nucleoli make rRNA for ribosomes. Cells active in protein synthesis have larger and more numerous nucleoli.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-cell-exam-edge",
      title: "Exam edge: Cell: The Unit of Life",
      summary:
        "How NEET and KCET test the cell chapter: sizes and numbers, prokaryotic structures, endomembrane membership, semi-autonomous organelles, 9+2 versus 9+0 and chromosome types, with statement and assertion–reason practice.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually takes 2–4 questions from this chapter, and it is the base for Biomolecules, Cell Cycle, Photosynthesis and Respiration, which together carry many more. Questions are almost always NCERT lines: sizes, discoverers, which organelle has what, and statement-counting. **KCET** asks the same facts as direct one-liners and matching sets.",
        },
        {
          type: "list",
          items: [
            "NCERT line: *Mycoplasma* is the smallest cell (0.3 μm); bacteria are 3–5 μm; human RBC is about 7.0 μm.",
            "NCERT line: the human RBC membrane has about **52% protein and 40% lipid**.",
            "NCERT line: mitochondria, chloroplasts and peroxisomes are **not** part of the endomembrane system.",
            "NCERT line: ribosomes occur in the cytoplasm, on RER, and also in the **stroma of chloroplasts** and the **matrix of mitochondria**.",
            "NCERT line: in plant cells, the vacuole can occupy up to **90%** of the cell volume.",
            "NCERT line: gas vacuoles are found in blue-green, purple and green photosynthetic bacteria.",
            "NCERT line: the nucleolus is the site of active ribosomal RNA synthesis.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{Axoneme: } 9(2) + 2 = 20 \text{ microtubules} \qquad \text{Centriole: } 9(3) + 0 = 27 \text{ microtubules}`,
          caption: "Quick counts for numeric questions. Basal bodies are built like centrioles.",
        },
        {
          type: "example",
          title: "NEET level: statement counting on prokaryotes",
          problem: "How many statements are correct? (i) Prokaryotic genomic DNA is enclosed by a single membrane. (ii) Plasmids can make bacteria resistant to antibiotics. (iii) Pili are made of a special protein. (iv) Inclusion bodies are bounded by a membrane. (v) Ribosomes of prokaryotes are attached to the plasma membrane.",
          steps: [
            "(i) Wrong: the DNA is naked, with no nuclear envelope.",
            "(ii) Correct: plasmids carry traits such as antibiotic resistance.",
            "(iii) Correct: pili are elongated tubular structures of a special protein.",
            "(iv) Wrong: inclusion bodies lie free in the cytoplasm.",
            "(v) Correct: NCERT says prokaryotic ribosomes are associated with the plasma membrane.",
          ],
          answer: "Three statements, (ii), (iii) and (v), are correct.",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: Mitochondria and chloroplasts are called semi-autonomous organelles. R: They contain their own DNA and ribosomes and divide by fission.",
          steps: [
            "A is true: they can make some of their own proteins but still depend on genes in the nucleus.",
            "R is true: both contain circular DNA and 70S ribosomes; NCERT states mitochondria divide by fission.",
            "R explains why they are partly independent of the nucleus.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "KCET style: matching organelles and features",
          problem: "Match: (p) Cristae (q) Cisternae (r) Thylakoids (s) Tonoplast with (1) Golgi complex (2) Vacuole (3) Mitochondrion (4) Chloroplast.",
          steps: [
            "Cristae are infoldings of the inner mitochondrial membrane: p–3.",
            "Cisternae are the flat discs of the Golgi stack: q–1.",
            "Thylakoids are flattened sacs in the chloroplast: r–4.",
            "The tonoplast is the vacuolar membrane: s–2.",
          ],
          answer: "p–3, q–1, r–4, s–2.",
        },
        {
          type: "example",
          title: "Harder: identifying an unknown cell",
          problem: "A cell has 70S ribosomes only, a cell wall, no nuclear envelope, membrane extensions carrying chlorophyll a, and gas vacuoles. Which group does it belong to, and which two structures in this list would rule out a eukaryotic alga?",
          steps: [
            "Only 70S ribosomes and no nuclear envelope point to a prokaryote.",
            "Chlorophyll on membranous extensions (chromatophores) and gas vacuoles fit cyanobacteria (blue-green algae).",
            "A eukaryotic alga would have a nuclear envelope and 80S cytoplasmic ribosomes. Absence of the envelope and the presence of only 70S ribosomes rule it out.",
          ],
          answer: "A cyanobacterium; the lack of a nuclear envelope and having only 70S ribosomes rule out a eukaryotic alga.",
        },
        {
          type: "mistake",
          wrong: "Since 50S + 30S makes 70S, the eukaryotic 60S + 40S ribosome must be 100S.",
          right: "The eukaryotic ribosome is 80S. Neither pair simply adds up.",
          why: "S (Svedberg) values measure sedimentation rate, which depends on both mass and shape. When subunits combine, the rate does not add. Learn the four numbers as facts: 70S = 50S + 30S, 80S = 60S + 40S.",
        },
        {
          type: "mistake",
          wrong: "The plasma membrane is mostly lipid, so lipid is the larger fraction in the RBC membrane.",
          right: "In the human RBC membrane NCERT gives about 52% protein and 40% lipid; protein is the larger fraction.",
          why: "Diagrams show a sea of lipid with a few proteins, so students guess lipid. NEET uses exactly this number.",
        },
        {
          type: "mistake",
          wrong: "Acrocentric and telocentric chromosomes are the same thing.",
          right: "Acrocentric: centromere close to one end, with a tiny second arm. Telocentric: centromere at the very tip.",
          why: "Both look like a 'V' or a rod in anaphase. The words help: *acro* = near the top, *telo* = at the end.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does the organelle contain its own DNA?",
            groups: ["Contains DNA", "Has no DNA"],
            items: [
              { text: "Mitochondrion", group: 0, hint: "A single circular DNA lies in its matrix." },
              { text: "Chloroplast", group: 0, hint: "Small circular DNA in the stroma." },
              { text: "Nucleus", group: 0, hint: "Most of the cell's DNA is here." },
              { text: "Golgi complex", group: 1, hint: "A packaging organelle with no genome." },
              { text: "Lysosome", group: 1, hint: "A bag of hydrolases." },
              { text: "Ribosome", group: 1, hint: "Made of RNA and protein, not DNA." },
            ],
            explain: "Only the nucleus, mitochondria and plastids carry DNA. Ribosomes contain RNA, which is a common trap.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: The Golgi apparatus is the main site for the formation of glycoproteins. R: Proteins made by ribosomes on the ER are modified in the Golgi cisternae before release from its trans face.",
              options: AR,
              answer: 0,
              explain: "Both lines are in NCERT, and the modification of ER proteins in the cisternae is exactly how glycoproteins form there.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn the numbers: 0.3 μm, 3–5 μm, 7.0 μm, 52%/40%, 90% vacuole, 20–40 chloroplasts, 10–50 nm perinuclear space.",
            "Endomembrane = ER, Golgi, lysosome, vacuole; excluded = mitochondria, chloroplasts, peroxisomes.",
            "DNA in nucleus, mitochondria, plastids; 70S ribosomes in prokaryotes, mitochondria and chloroplasts; 80S in eukaryotic cytoplasm.",
            "9+2 (axoneme, doublets) versus 9+0 (centriole and basal body, triplets).",
            "Centromere position names the chromosome: middle, off-middle, near end, at tip.",
          ],
        },
      ],
      flashcards: [
        { front: "Microtubules in a centriole cross-section", back: "27 (nine triplets, no central tubules)." },
        { front: "Organelles excluded from the endomembrane system", back: "Mitochondria, chloroplasts, peroxisomes." },
        { front: "Where are 70S ribosomes found in a plant cell?", back: "Chloroplast stroma and mitochondrial matrix." },
        { front: "Two mature cells lacking a nucleus", back: "Mammalian erythrocytes and sieve tube cells." },
        { front: "Basal body structure", back: "Centriole-like: nine peripheral triplets." },
        { front: "Bacteria with gas vacuoles", back: "Blue-green, purple and green photosynthetic bacteria." },
        { front: "Contractile vacuole in *Amoeba*", back: "Excretion and osmoregulation." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which pair of organelles both contain 70S ribosomes and circular DNA?",
          options: ["Golgi and ER", "Mitochondria and chloroplasts", "Lysosomes and peroxisomes", "Nucleus and nucleolus"],
          answer: 1,
          explain: "Mitochondria and chloroplasts are semi-autonomous: they have their own circular DNA and 70S ribosomes.",
        },
        {
          kind: "multi",
          q: "Select the correct statements about the plant vacuole.",
          options: [
            "It is bounded by the tonoplast",
            "It can occupy up to 90% of the cell volume",
            "Ions are transported into it against a concentration gradient",
            "It is excluded from the endomembrane system",
          ],
          answers: [0, 1, 2],
          explain: "The vacuole is bounded by the tonoplast, can fill 90% of the cell, and accumulates ions actively. It is a member of the endomembrane system.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many of these lack a membrane? Ribosome, lysosome, nucleolus, centriole, mesosome, vacuole.",
          answer: 3,
          explain: "Ribosome, nucleolus and centriole are non-membranous. Lysosome and vacuole are membrane-bound, and a mesosome is an infolding of the plasma membrane, so it is membranous.",
          difficulty: 3,
          hint: "A mesosome is made of membrane even though it is not a separate organelle.",
        },
        {
          kind: "mcq",
          q: "A: Prokaryotes lack mitochondria yet can respire aerobically. R: Mesosomes help in respiration.",
          options: AR,
          answer: 0,
          explain: "Many bacteria respire aerobically; NCERT lists respiration among the functions of mesosomes (the membrane carries the respiratory enzymes).",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Middle lamella is mainly made of:",
          options: ["Cellulose", "Calcium pectate", "Hemicellulose", "Lignin"],
          answer: 1,
          explain: "The middle lamella, which holds neighbouring plant cells together, is mainly calcium pectate.",
        },
        {
          kind: "mcq",
          q: "Which statement is wrong?",
          options: [
            "Chlamydomonas has a single chloroplast per cell",
            "The cis face of the Golgi is the maturing face",
            "Lysosomes are formed by packaging in the Golgi",
            "SER synthesises steroidal hormones in animal cells",
          ],
          answer: 1,
          explain: "The cis face is the forming face; the trans face is the maturing face.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "An animal cell in G2 has two centrosomes, each with two centrioles. How many microtubules are present in the cross-sections of all its centrioles together?",
          answer: 108,
          explain: "Each centriole has 9 triplets = 27 microtubules. Two centrosomes × two centrioles = 4 centrioles; 4 × 27 = 108.",
          difficulty: 2,
          hint: "Centrioles have triplets, not doublets, and no central pair.",
        },
        {
          kind: "multi",
          q: "Which structures are made of tubulin?",
          options: ["Centriole", "Axoneme of cilia", "Spindle fibres", "Bacterial flagellum filament", "Microfilaments"],
          answers: [0, 1, 2],
          explain: "Centrioles, the 9+2 axoneme and spindle fibres are microtubules (tubulin). Bacterial flagella are built of a different protein (flagellin), and microfilaments are actin.",
          difficulty: 3,
          hint: "Bacterial flagella are structurally different from eukaryotic flagella.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Biomolecules                                                        */
/* ------------------------------------------------------------------ */
const biomolecules: Topic = {
  slug: "c11-bio-biomolecules",
  title: "Biomolecules",
  icon: "🧪",
  description:
    "Chemical analysis of living tissue, primary and secondary metabolites, amino acids, lipids, sugars and nucleotides, proteins and their structure, polysaccharides, nucleic acids, and enzymes: action, factors, inhibition, classes and co-factors.",
  lessons: [
    /* ---------------- Lesson 1: analysis and micromolecules ---------------- */
    {
      slug: "c11-bio-analysis-micromolecules",
      title: "Chemical Analysis and Small Biomolecules",
      summary:
        "How living tissue is analysed into an acid-soluble pool and an acid-insoluble fraction, the elements of life, amino acids, fatty acids and lipids, nucleotides, and primary versus secondary metabolites.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "A handful of soil and a slice of liver can both be burnt to ash and tested for elements. Both contain carbon, oxygen, calcium and more. Yet the liver is alive and the soil is not. The difference lies in **how** these elements are arranged into **biomolecules**: all the carbon compounds found in living tissue.",
        },
        {
          type: "heading",
          text: "How to analyse chemical composition",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Grind living tissue (a vegetable or a piece of liver) in **trichloroacetic acid** (Cl₃CCOOH) with a mortar and pestle to get a thick slurry.",
            "Strain it through cheesecloth or cotton. Two fractions form.",
            "The **filtrate** (what passes through) is the **acid-soluble pool**: it holds small molecules (micromolecules) with molecular weights of about 18 to 800 daltons.",
            "The **retentate** (what stays on the cloth) is the **acid-insoluble fraction**: proteins, nucleic acids, polysaccharides and lipids.",
            "Separate compounds by analytical techniques, then find their molecular formula and probable structure.",
            "For inorganic content, burn a weighed sample of tissue: all carbon compounds are oxidised to gas (CO₂, water vapour) and removed; the **ash** holds inorganic elements (Ca, Mg) and compounds such as sulphate and phosphate.",
          ],
        },
        {
          type: "table",
          headers: ["Element", "% weight in Earth's crust", "% weight in human body"],
          rows: [
            ["Oxygen", "46.6", "65.0"],
            ["Carbon", "0.03", "18.5"],
            ["Hydrogen", "0.14", "0.5"],
            ["Nitrogen", "very little", "3.3"],
            ["Silicon", "27.7", "negligible"],
            ["Calcium", "3.6", "1.5"],
          ],
        },
        {
          type: "text",
          md: "Notice that carbon and hydrogen are far richer in living matter than in the crust: life is built on carbon compounds.\n\n**Amino acids** are organic compounds with an **amino group** and an **acidic (carboxyl) group** on the same carbon, the **α-carbon**. They are therefore **α-amino acids**. They are substituted methanes: the α-carbon carries four groups: **hydrogen, carboxyl, amino and a variable R group**. The R group decides the amino acid: in **glycine** R is hydrogen, in **alanine** a methyl group, in **serine** a hydroxymethyl group.\n\nBy the number of amino and carboxyl groups, amino acids are **acidic** (glutamic acid), **basic** (lysine) or **neutral** (valine). **Tyrosine, phenylalanine and tryptophan** are aromatic. The –NH₂ and –COOH groups ionise, so the structure changes with pH; the form carrying both a positive and a negative charge is the **zwitterion**.",
        },
        {
          type: "text",
          md: "**Lipids** are generally water-insoluble. They may be simple **fatty acids**, which have a carboxyl group attached to an R group (methyl, ethyl or a long chain of –CH₂ groups). **Palmitic acid** has 16 carbons and **arachidonic acid** 20 carbons, counting the carboxyl carbon. Fatty acids are **saturated** (no double bond) or **unsaturated** (one or more C=C).\n\n**Glycerol** is trihydroxy propane. Fatty acids esterified with glycerol form **monoglycerides, diglycerides and triglycerides** (fats and oils, by melting point). **Oils** have lower melting points and stay liquid in winter, like gingelly (sesame) oil. Some lipids carry phosphorus and a phosphorylated organic compound: these are **phospholipids**, found in cell membranes, for example **lecithin**. Neural tissues have lipids with more complex structures.",
        },
        {
          type: "text",
          md: "Living organisms have many **heterocyclic** carbon compounds: the **nitrogen bases** adenine, guanine, cytosine, uracil and thymine. A base joined to a sugar is a **nucleoside** (adenosine, guanosine, thymidine, uridine, cytidine). When a phosphate is also esterified to the sugar, it is a **nucleotide** (adenylic acid, thymidylic acid, guanylic acid, uridylic acid, cytidylic acid). Nucleic acids such as DNA and RNA are made of nucleotides.",
        },
        {
          type: "formula",
          tex: t`\text{Nucleoside} = \text{N-base} + \text{sugar} \qquad \text{Nucleotide} = \text{N-base} + \text{sugar} + \text{phosphate}`,
          caption: "Adenosine is a nucleoside; adenylic acid is a nucleotide.",
        },
        {
          type: "table",
          headers: ["Secondary metabolite class", "Examples"],
          rows: [
            ["Pigments", "Carotenoids, anthocyanins"],
            ["Alkaloids", "Morphine, codeine"],
            ["Terpenoids", "Monoterpenes, diterpenes"],
            ["Essential oils", "Lemon grass oil"],
            ["Toxins", "Abrin, ricin"],
            ["Lectins", "Concanavalin A"],
            ["Drugs", "Vinblastin, curcumin"],
            ["Polymeric substances", "Rubber, gums, cellulose"],
          ],
        },
        {
          type: "text",
          md: "Compounds with identifiable functions in normal physiology (amino acids, sugars, nucleotides) are **primary metabolites**, found in animal tissues too. Plants, fungi and microbes also make thousands of **secondary metabolites** whose role in the host is not fully understood, though many are useful to humans: rubber, drugs, spices, scents and pigments. Some are ecologically important.",
        },
        {
          type: "example",
          title: "Which fraction?",
          problem: "A sample of liver is ground in trichloroacetic acid and filtered. Say where each would be found: glucose, haemoglobin, alanine, DNA, phospholipid.",
          steps: [
            "Glucose (180 Da) and alanine (89 Da) are small, so they stay dissolved in the **filtrate (acid-soluble pool)**.",
            "Haemoglobin (a protein) and DNA are macromolecules, so they are in the **retentate (acid-insoluble fraction)**.",
            "Phospholipid has a molecular weight below 800 Da, yet it appears in the **acid-insoluble** fraction: when the tissue is ground, membranes break into water-insoluble vesicles that are held back.",
          ],
          answer: "Filtrate: glucose, alanine. Retentate: haemoglobin, DNA, phospholipid.",
        },
        {
          type: "mistake",
          wrong: "Lipids are found in the acid-insoluble fraction because they are macromolecules.",
          right: "Lipids are not strictly macromolecules (molecular weight does not exceed about 800 Da). They come into the acid-insoluble fraction because membranes break into insoluble vesicles on grinding.",
          why: "All the other acid-insoluble compounds are polymers, so students assume lipids are too. NCERT treats this exception directly and NEET tests it.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Primary or secondary metabolite?",
            groups: ["Primary metabolite", "Secondary metabolite"],
            items: [
              { text: "Glucose", group: 0, hint: "Used in normal respiration." },
              { text: "Glycine", group: 0, hint: "An amino acid in all proteins." },
              { text: "Uridylic acid", group: 0, hint: "A nucleotide of RNA." },
              { text: "Morphine", group: 1, hint: "An alkaloid." },
              { text: "Concanavalin A", group: 1, hint: "A lectin." },
              { text: "Ricin", group: 1, hint: "A toxin from castor seeds." },
              { text: "Curcumin", group: 1, hint: "A drug from turmeric." },
            ],
            explain: "Primary metabolites have known roles in normal physiology in all organisms; secondary metabolites are special products, mostly of plants, fungi and microbes.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In serine, the R group is:",
              options: ["Hydrogen", "Methyl", "Hydroxymethyl", "Phenyl"],
              answer: 2,
              explain: "Glycine: H; alanine: methyl; serine: hydroxymethyl (–CH₂OH).",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For 'describe how the acid-soluble pool is obtained', write the steps in order and name trichloroacetic acid; the filtrate–retentate distinction carries a mark of its own. Always give two examples when asked for 'secondary metabolites'.",
        },
        {
          type: "keypoints",
          items: [
            "Grinding in Cl₃CCOOH: filtrate = acid-soluble pool (18–800 Da), retentate = acid-insoluble fraction (macromolecules + lipids).",
            "Amino acid: α-carbon with H, –COOH, –NH₂ and R; glycine (H), alanine (methyl), serine (hydroxymethyl).",
            "Palmitic acid 16 C, arachidonic acid 20 C; lecithin is a phospholipid.",
            "Nucleoside = base + sugar; nucleotide = base + sugar + phosphate.",
            "Secondary metabolites: alkaloids, toxins, lectins, terpenoids, essential oils, pigments, drugs, polymers.",
          ],
        },
      ],
      flashcards: [
        { front: "Acid used to grind tissue for analysis", back: "Trichloroacetic acid (Cl₃CCOOH)." },
        { front: "Acid-soluble pool", back: "The filtrate: micromolecules of molecular weight about 18–800 Da." },
        { front: "Why are lipids in the acid-insoluble fraction?", back: "Membranes break into insoluble vesicles on grinding, though lipids are small molecules." },
        { front: "Zwitterion", back: "Form of an amino acid carrying both + (–NH₃⁺) and – (–COO⁻) charges, depending on pH." },
        { front: "Number of carbons in palmitic acid", back: "16, including the carboxyl carbon." },
        { front: "Example of a phospholipid", back: "Lecithin." },
        { front: "Adenosine versus adenylic acid", back: "Adenosine is a nucleoside; adenylic acid is a nucleotide." },
        { front: "Concanavalin A is a ___", back: "Lectin (a secondary metabolite)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is an acidic amino acid?",
          options: ["Lysine", "Valine", "Glutamic acid", "Glycine"],
          answer: 2,
          explain: "Glutamic acid has an extra carboxyl group. Lysine is basic; valine and glycine are neutral.",
        },
        {
          kind: "multi",
          q: "Which amino acids are aromatic?",
          options: ["Tyrosine", "Phenylalanine", "Tryptophan", "Alanine", "Serine"],
          answers: [0, 1, 2],
          explain: "Tyrosine, phenylalanine and tryptophan have aromatic rings.",
        },
        {
          kind: "fill",
          q: "Glycerol is chemically known as trihydroxy ___.",
          answer: ["propane"],
          explain: "Glycerol has three –OH groups on a three-carbon propane chain.",
        },
        {
          kind: "truefalse",
          q: "Arachidonic acid has 20 carbon atoms including the carboxyl carbon.",
          answer: true,
          explain: "NCERT gives palmitic acid 16 and arachidonic acid 20 carbons, both counting the carboxyl carbon.",
        },
        {
          kind: "mcq",
          q: "Abrin and ricin are examples of:",
          options: ["Alkaloids", "Lectins", "Toxins", "Pigments"],
          answer: 2,
          explain: "Abrin and ricin are toxins. Morphine and codeine are alkaloids; concanavalin A is a lectin.",
        },
        {
          kind: "mcq",
          q: "Thymidine is formed by joining thymine with:",
          options: ["Ribose and phosphate", "Deoxyribose", "Phosphate only", "Ribose"],
          answer: 1,
          explain: "A nucleoside is a base + sugar. Thymine occurs in DNA, so the sugar is deoxyribose; there is no phosphate in a nucleoside.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which element is about 18.5% of the human body by weight but only 0.03% of the Earth's crust?",
          options: ["Oxygen", "Carbon", "Silicon", "Nitrogen"],
          answer: 1,
          explain: "Carbon is concentrated in living matter because biomolecules are carbon compounds.",
          difficulty: 2,
          hint: "Biomolecules are compounds of which element?",
        },
      ],
    },
    /* ---------------- Lesson 2: macromolecules ---------------- */
    {
      slug: "c11-bio-macromolecules",
      title: "Proteins, Polysaccharides and Nucleic Acids",
      summary:
        "The average composition of a cell, proteins and their functions, primary to quaternary structure, polysaccharides such as starch, cellulose, glycogen, inulin and chitin, nucleic acids, and the bonds that link monomers.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Dal, rice and a cotton shirt look nothing alike. Yet the protein in dal, the starch in rice and the cellulose in cotton are all long chains of small repeating units. Biomolecules with molecular weights of **more than 1000 daltons** (proteins, nucleic acids, polysaccharides) are **macromolecules** or **biomacromolecules**. They are polymers: built by joining many monomers.",
        },
        {
          type: "table",
          headers: ["Component", "% of total cellular mass"],
          rows: [
            ["Water", "70–90"],
            ["Proteins", "10–15"],
            ["Carbohydrates", "3"],
            ["Lipids", "2"],
            ["Nucleic acids", "5–7"],
            ["Ions", "1"],
          ],
        },
        {
          type: "heading",
          text: "Proteins",
        },
        {
          type: "text",
          md: "Proteins are **polypeptides**: linear chains of amino acids joined by **peptide bonds**. With 20 types of amino acids, a protein is a **heteropolymer**. Amino acids that our body cannot make and must get from food are **essential**; those it can make are **non-essential**.\n\nProteins transport nutrients across membranes, fight infection, act as hormones and enzymes, and more. **Collagen** is the most abundant protein in the **animal world**; **RuBisCO** (ribulose bisphosphate carboxylase-oxygenase) is the most abundant protein in the **whole biosphere**.",
        },
        {
          type: "table",
          headers: ["Protein", "Function"],
          rows: [
            ["Collagen", "Intercellular ground substance"],
            ["Trypsin", "Enzyme"],
            ["Insulin", "Hormone"],
            ["Antibody", "Fights infectious agents"],
            ["Receptor", "Sensory reception (smell, taste, hormone)"],
            ["GLUT-4", "Enables glucose transport into cells"],
          ],
        },
        {
          type: "text",
          md: "**Levels of protein structure.**\n\n- **Primary**: the sequence of amino acids. The first amino acid is the **N-terminal** amino acid; the last is the **C-terminal** amino acid. It tells which amino acid is first, second, and so on.\n- **Secondary**: the chain is not fully extended; parts fold into a helix. In proteins, **only right-handed helices** are observed. Other regions fold in other forms.\n- **Tertiary**: the long chain folds on itself like a hollow woollen ball, giving a 3-dimensional view. This is essential for many biological activities.\n- **Quaternary**: an assembly of more than one polypeptide (subunit). Adult human **haemoglobin** has **four subunits: two α and two β**.",
        },
        {
          type: "heading",
          text: "Polysaccharides and nucleic acids",
        },
        {
          type: "text",
          md: "**Polysaccharides** are long chains of sugars. **Cellulose** is a **homopolymer** of glucose; **starch** is a store of energy in plant tissues; **glycogen** is its animal counterpart; **inulin** is a polymer of **fructose**. In a chain such as glycogen, the right end is the **reducing end** and the left end the **non-reducing end**. Glycogen and starch are branched.\n\nStarch forms **helical secondary structures** and can hold **I₂** inside the helix, giving a **blue** colour. Cellulose lacks such helices and **cannot hold I₂**. Plant cell walls are made of cellulose; paper and cotton fibre are cellulose. **Chitin**, the exoskeleton of arthropods, is a complex polysaccharide containing amino-sugars and chemically modified sugars (glucosamine, N-acetyl galactosamine).\n\n**Nucleic acids** (DNA and RNA) are **polynucleotides**. Each nucleotide has a heterocyclic nitrogen base, a monosaccharide and a phosphate (phosphoric acid). The bases are **purines** (adenine, guanine) and **pyrimidines** (cytosine, uracil, thymine). The sugar is **ribose** in RNA and **2′-deoxyribose** in DNA.",
        },
        {
          type: "table",
          headers: ["Bond (board note)", "Links", "How it forms"],
          rows: [
            ["Peptide bond", "Amino acids in a protein", "Carboxyl (–COOH) of one amino acid reacts with amino (–NH₂) of the next; water is removed (dehydration)"],
            ["Glycosidic bond", "Monosaccharides in a polysaccharide", "Between two carbon atoms of adjacent sugars by dehydration"],
            ["Phosphodiester bond", "Nucleotides in a nucleic acid", "A phosphate links the 3′-carbon of one sugar to the 5′-carbon of the next sugar"],
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Who needs the bonds section",
          md: "The rationalised NCERT book dropped the separate section on bonds linking monomers and on metabolism. ISC still teaches peptide, glycosidic and phosphodiester bonds, and NEET and KCET questions on them remain common, so learn the table. The B-DNA details (about 10 base pairs per turn, rise 0.34 nm per base pair, pitch 3.4 nm; A=T two hydrogen bonds, G≡C three) are taught again in Class 12, Molecular Basis of Inheritance.",
        },
        {
          type: "example",
          title: "Water removed in forming a polymer",
          problem: "A polypeptide is made of 51 amino acids in a single chain. How many peptide bonds does it have, and how many water molecules were removed in making it?",
          steps: [
            "In a linear chain, each bond joins two neighbours, so bonds = residues − 1.",
            "51 − 1 = 50 peptide bonds.",
            "Each peptide bond forms by removing one water molecule, so 50 water molecules are released.",
          ],
          answer: "50 peptide bonds; 50 water molecules removed.",
        },
        {
          type: "mistake",
          wrong: "Cellulose turns blue with iodine just like starch, because both are polymers of glucose.",
          right: "Only starch gives a blue colour. Starch has helical regions that hold I₂; cellulose does not form such helices and cannot hold iodine.",
          why: "Same monomer makes students expect the same test. The colour depends on the 3-dimensional shape of the chain, not just its monomer.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each macromolecule with a correct fact.",
            pairs: [
              ["Inulin", "Polymer of fructose"],
              ["Chitin", "Contains amino-sugars; arthropod exoskeleton"],
              ["RuBisCO", "Most abundant protein in the biosphere"],
              ["Collagen", "Most abundant protein in animals"],
              ["Haemoglobin", "Quaternary structure: 2 α + 2 β"],
              ["GLUT-4", "Glucose transport into cells"],
            ],
            explain: "NEET loves these one-to-one facts: inulin is the odd polysaccharide (fructose), and the two 'most abundant' proteins differ by scope.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The sequence of amino acids in a protein is its:",
              options: ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"],
              answer: 0,
              explain: "Primary structure is the order of amino acids from the N-terminal to the C-terminal end.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Macromolecules (over 1000 Da): proteins, polysaccharides, nucleic acids. A cell is 70–90% water and 10–15% protein.",
            "Proteins are heteropolymers of 20 amino acids linked by peptide bonds; collagen tops animals, RuBisCO tops the biosphere.",
            "Primary (sequence), secondary (right-handed helix), tertiary (folded ball), quaternary (subunits, e.g. haemoglobin 2α2β).",
            "Cellulose homopolymer of glucose; inulin of fructose; starch–iodine blue, cellulose no colour; chitin has amino-sugars.",
            "Peptide, glycosidic and phosphodiester bonds all form by dehydration.",
          ],
        },
      ],
      flashcards: [
        { front: "Molecular weight of a biomacromolecule", back: "More than 1000 daltons." },
        { front: "Most abundant protein in the biosphere", back: "RuBisCO." },
        { front: "Most abundant protein in the animal world", back: "Collagen." },
        { front: "Function of GLUT-4", back: "Enables glucose transport into cells." },
        { front: "Quaternary structure of adult human haemoglobin", back: "Four subunits: two α and two β." },
        { front: "Inulin", back: "A polymer of fructose." },
        { front: "Why does starch give blue with iodine?", back: "Its helical secondary structure holds I₂; cellulose cannot." },
        { front: "Purines and pyrimidines", back: "Purines: adenine, guanine. Pyrimidines: cytosine, uracil, thymine." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which component forms the largest share of cellular mass after water?",
          options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
          answer: 2,
          explain: "Proteins are 10–15% of cell mass; nucleic acids 5–7%, carbohydrates 3%, lipids 2%.",
        },
        {
          kind: "mcq",
          q: "Which polysaccharide is a homopolymer of fructose?",
          options: ["Glycogen", "Cellulose", "Inulin", "Chitin"],
          answer: 2,
          explain: "Inulin is a fructose polymer. Glycogen, cellulose and starch are glucose polymers; chitin contains amino-sugars.",
        },
        {
          kind: "truefalse",
          q: "Both right-handed and left-handed helices are commonly seen in the secondary structure of proteins.",
          answer: false,
          explain: "NCERT states that only right-handed helices are observed in proteins.",
        },
        {
          kind: "fill",
          q: "The first amino acid of a polypeptide chain is called the ___-terminal amino acid.",
          answer: ["N", "amino", "N-terminal"],
          explain: "The first amino acid has a free amino group (N-terminal); the last has a free carboxyl group (C-terminal).",
        },
        {
          kind: "multi",
          q: "Which bonds are formed by removal of water (dehydration)?",
          options: ["Peptide bond", "Glycosidic bond", "Phosphodiester bond", "Hydrogen bond between bases"],
          answers: [0, 1, 2],
          explain: "Peptide, glycosidic and ester (phosphodiester) bonds form by dehydration. Hydrogen bonds are weak attractions, not dehydration products.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A protein has two polypeptide chains of 21 and 30 amino acids (like insulin). How many peptide bonds does it have in total?",
          answer: 49,
          explain: "Chain A: 21 − 1 = 20; chain B: 30 − 1 = 29; total 49. Each chain is counted separately.",
          difficulty: 2,
          hint: "Bonds = residues − 1, for each chain.",
        },
        {
          kind: "mcq",
          q: "In a glycogen chain, the right end is called the:",
          options: ["Non-reducing end", "Reducing end", "N-terminal end", "3′ end"],
          answer: 1,
          explain: "NCERT: in a polysaccharide chain such as glycogen, the right end is the reducing end and the left end is the non-reducing end.",
        },
      ],
    },
    /* ---------------- Lesson 3: enzymes ---------------- */
    {
      slug: "c11-bio-enzymes",
      title: "Enzymes",
      summary:
        "What enzymes are, how they lower activation energy, the catalytic cycle, the effect of temperature, pH and substrate concentration, competitive inhibition, the six classes and co-factors.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "Chew a piece of plain rice for a minute and it starts to taste sweet. Salivary amylase is breaking starch into sugar in your mouth. Without the enzyme, the same breakdown would take a very long time at body temperature.\n\nAlmost all enzymes are **proteins**. Some **nucleic acids** also act like enzymes; these are **ribozymes**. An enzyme has a primary to tertiary structure like any protein. In the tertiary structure, the backbone folds to make crevices or pockets: one such pocket is the **active site**, into which the substrate fits.",
        },
        {
          type: "text",
          md: "Enzymes differ from inorganic catalysts. Inorganic catalysts work well at high temperature and pressure; enzymes are damaged at high temperatures (say above 40 °C). Enzymes from organisms living in hot vents and sulphur springs are **thermostable** and keep working even at **80–90 °C**.\n\n**Physical versus chemical change.** Melting ice is a physical change (shape changes, bonds are not broken). Hydrolysis of starch into glucose is a chemical reaction (bonds broken and formed). Rate = amount of product formed per unit time. For many reactions the rate **doubles or halves for every 10 °C** rise or fall. A catalysed reaction proceeds much faster.",
        },
        {
          type: "formula",
          tex: t`\mathrm{CO_2 + H_2O \xrightarrow{\text{carbonic anhydrase}} H_2CO_3}`,
          caption: "Without enzyme: about 200 molecules of H₂CO₃ per hour. With carbonic anhydrase: about 600 000 per second, roughly 10 million times faster.",
        },
        {
          type: "text",
          md: "**How enzymes speed up reactions.** The substrate S must bind the enzyme E at the active site to form a short-lived **enzyme–substrate complex (ES)**. During binding, a new structure of the substrate, the **transition state**, forms. Energy must be supplied to reach this high-energy state; this barrier is the **activation energy**. An enzyme **lowers the activation energy**, so more molecules cross the barrier in a given time. It does not change the energy difference between S and P, and the reaction can go even when P is at lower energy than S (exothermic).",
        },
        {
          type: "formula",
          tex: t`\mathrm{E + S \;\rightleftharpoons\; ES \;\longrightarrow\; EP \;\longrightarrow\; E + P}`,
          caption: "The enzyme comes out unchanged and is ready to bind another substrate.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the steps of the catalytic cycle in order.",
            items: [
              "Substrate binds to the active site of the enzyme",
              "Binding makes the enzyme change shape and fit more tightly around the substrate",
              "The active site breaks the chemical bonds of the substrate, forming the enzyme–product complex",
              "The enzyme releases the products and is free to bind another substrate",
            ],
            explain: "The change of shape on binding is the idea behind the induced-fit model; the enzyme is not used up.",
          },
        },
        {
          type: "table",
          headers: ["Factor", "Effect on enzyme activity"],
          rows: [
            ["Temperature", "Activity rises to a maximum at the **optimum temperature** and falls on either side. Low temperature keeps the enzyme temporarily inactive; high temperature **denatures** it (destroys its protein structure)."],
            ["pH", "Each enzyme has an **optimum pH**; activity falls above and below it."],
            ["Substrate concentration", "Velocity rises with substrate concentration and then levels off at a maximum, **Vmax**, because all enzyme molecules are busy (there are no free enzyme molecules left)."],
            ["Inhibitors", "Chemicals that bind the enzyme and stop its activity."],
          ],
        },
        {
          type: "text",
          md: "A **competitive inhibitor** closely resembles the substrate in molecular structure. It competes for the active site, so the substrate cannot bind and activity falls. Example: **malonate** inhibits **succinic dehydrogenase** because it resembles the substrate, succinate. Such inhibitors are often used to control bacterial pathogens.\n\n**ISC note:** ISC also teaches the **lock-and-key model** (Emil Fischer: the active site is a rigid shape that only the right substrate fits) and the **induced-fit model** (Koshland: the active site changes shape to fit the substrate), and **non-competitive inhibition** (the inhibitor binds elsewhere on the enzyme and changes its shape, so raising substrate concentration does not overcome it).",
        },
        {
          type: "table",
          headers: ["Class", "What it catalyses"],
          rows: [
            ["1. Oxidoreductases / dehydrogenases", "Oxidation-reduction between two substrates S and S′"],
            ["2. Transferases", "Transfer of a group G (other than hydrogen) from one substrate to another"],
            ["3. Hydrolases", "Hydrolysis of ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds"],
            ["4. Lyases", "Removal of groups from substrates by mechanisms **other than hydrolysis**, leaving double bonds"],
            ["5. Isomerases", "Inter-conversion of optical, geometric or positional isomers"],
            ["6. Ligases", "Linking together of two compounds, e.g. forming C–O, C–S, C–N, P–O bonds"],
          ],
        },
        {
          type: "text",
          md: "**Co-factors.** Many enzymes need a non-protein **co-factor** to work. The protein part is then the **apoenzyme**; catalytic activity is lost if the co-factor is removed.\n\n- **Prosthetic groups** are organic and **tightly bound** to the apoenzyme. Example: **haem** in **peroxidase** and **catalase**, which break hydrogen peroxide into water and oxygen.\n- **Co-enzymes** are organic but bind only **transiently**, during catalysis, and serve many different enzymes. Many contain vitamins: **NAD** and **NADP** contain **niacin**.\n- **Metal ions** form coordination bonds with side chains at the active site and with the substrate. Example: **zinc** for **carboxypeptidase**.",
        },
        {
          type: "example",
          title: "Reading an enzyme experiment",
          problem: "Succinic dehydrogenase is tested with a fixed amount of succinate. Adding malonate lowers the rate. When much more succinate is added, the rate rises again. Explain both observations.",
          steps: [
            "Malonate resembles succinate, so it binds the active site and blocks it: this is **competitive inhibition**.",
            "Inhibitor and substrate compete for the same site. With more substrate, the chance that a substrate rather than malonate occupies the site rises.",
            "So a high substrate concentration overcomes competitive inhibition, and the rate recovers.",
          ],
          answer: "Malonate is a competitive inhibitor of succinic dehydrogenase; extra substrate out-competes it.",
        },
        {
          type: "mistake",
          wrong: "An enzyme speeds up a reaction by supplying the energy the reaction needs.",
          right: "An enzyme lowers the activation energy barrier. It gives no energy and does not change the energy difference between substrate and product.",
          why: "Faster feels like 'more energy'. In fact, a lower hill lets more substrate molecules reach the transition state at the same temperature.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The enzyme that removes groups from substrates by a mechanism other than hydrolysis, leaving a double bond, belongs to class:",
              options: ["Hydrolases", "Lyases", "Ligases", "Isomerases"],
              answer: 1,
              explain: "Lyases remove groups without water and leave double bonds. Ligases join two molecules.",
            },
            {
              kind: "mcq",
              q: "Haem in catalase is an example of a:",
              options: ["Co-enzyme", "Prosthetic group", "Metal ion activator", "Apoenzyme"],
              answer: 1,
              explain: "Haem is tightly bound to the apoenzyme of peroxidase and catalase, so it is a prosthetic group.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Enzymes are mostly proteins (ribozymes are RNA); the substrate binds at the active site to form ES.",
            "Enzymes lower activation energy; carbonic anhydrase makes CO₂ hydration about 10 million times faster.",
            "Optimum temperature and pH; high temperature denatures; Vmax reached when all enzyme is saturated.",
            "Competitive inhibitor resembles the substrate: malonate inhibits succinic dehydrogenase.",
            "Six classes: oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases. Co-factors: prosthetic groups (haem), co-enzymes (NAD, NADP with niacin), metal ions (Zn²⁺ for carboxypeptidase).",
          ],
        },
      ],
      flashcards: [
        { front: "Ribozyme", back: "A nucleic acid (RNA) that acts as an enzyme." },
        { front: "Temperature range of thermostable enzymes", back: "Work even at 80–90 °C (from organisms of hot vents and sulphur springs)." },
        { front: "Effect of an enzyme on activation energy", back: "Lowers it." },
        { front: "Vmax", back: "Maximum velocity reached when all enzyme molecules are saturated with substrate." },
        { front: "Competitive inhibitor of succinic dehydrogenase", back: "Malonate." },
        { front: "Apoenzyme", back: "The protein part of an enzyme that needs a co-factor." },
        { front: "Vitamin in NAD and NADP", back: "Niacin." },
        { front: "Metal co-factor of carboxypeptidase", back: "Zinc." },
        { front: "Six enzyme classes in order", back: "Oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Low temperature affects enzymes by:",
          options: ["Denaturing them permanently", "Keeping them temporarily inactive", "Increasing their activity", "Changing their primary structure"],
          answer: 1,
          explain: "Low temperature preserves the enzyme in a temporarily inactive state; high temperature destroys activity by denaturation.",
        },
        {
          kind: "mcq",
          q: "Joining of two molecules with formation of a C–N bond is catalysed by:",
          options: ["Lyases", "Transferases", "Ligases", "Hydrolases"],
          answer: 2,
          explain: "Ligases link two compounds by forming bonds such as C–O, C–S, C–N and P–O.",
        },
        {
          kind: "truefalse",
          q: "Co-enzymes bind tightly and permanently to the apoenzyme.",
          answer: false,
          explain: "Co-enzymes bind only transiently, during catalysis. Prosthetic groups are the tightly bound co-factors.",
        },
        {
          kind: "numeric",
          q: "Without enzyme, 200 molecules of H₂CO₃ form per hour. With carbonic anhydrase, 600 000 form per second. By what factor, in millions, is the reaction faster? (Round to the nearest whole number.)",
          answer: 11,
          tolerance: 1,
          explain: "Per hour with enzyme: 600 000 × 3600 = 2.16 × 10⁹. Divide by 200: 1.08 × 10⁷ ≈ 11 million, which NCERT rounds to 'about 10 million times'.",
          difficulty: 2,
          hint: "Change both rates to the same time unit first.",
        },
        {
          kind: "order",
          q: "Arrange the six enzyme classes in their official numbered order.",
          items: ["Oxidoreductases", "Transferases", "Hydrolases", "Lyases", "Isomerases", "Ligases"],
          explain: "The EC order: 1 oxidoreductases, 2 transferases, 3 hydrolases, 4 lyases, 5 isomerases, 6 ligases.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about competitive inhibition are correct?",
          options: [
            "The inhibitor resembles the substrate in structure",
            "The inhibitor competes for the active site",
            "High substrate concentration can overcome it",
            "The inhibitor always binds at a site away from the active site",
          ],
          answers: [0, 1, 2],
          explain: "A competitive inhibitor looks like the substrate and binds the active site, so more substrate can out-compete it. Binding elsewhere describes non-competitive inhibition.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "An enzyme–substrate curve flattens at high substrate concentration because:",
          options: [
            "The substrate is used up",
            "The enzyme is denatured",
            "All enzyme molecules are occupied, so no free enzyme remains",
            "Products inhibit the enzyme competitively",
          ],
          answer: 2,
          explain: "At saturation every active site is busy, so adding substrate cannot raise the rate beyond Vmax.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-biomolecules-exam-edge",
      title: "Exam edge: Biomolecules",
      summary:
        "How NEET and KCET test Biomolecules: NCERT tables of metabolites and proteins, acid-soluble versus insoluble fractions, protein structure, enzyme kinetics and inhibition, enzyme classes and co-factors.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** asks 2–3 questions from Biomolecules nearly every year, mostly from the NCERT tables (secondary metabolites, protein functions, cell composition) and the enzymes section. **KCET** asks the same facts plus enzyme classes and co-factors as one-liners. Questions on the bonds and on B-DNA still appear, so learn them even though the rationalised book cut that section.",
        },
        {
          type: "list",
          items: [
            "NCERT line: the acid-soluble pool has compounds of molecular weight **18 to around 800 Da**.",
            "NCERT line: lipids are not strictly macromolecules, but appear in the acid-insoluble fraction.",
            "NCERT line: in proteins, **only right-handed helices** are observed.",
            "NCERT line: adult human haemoglobin consists of **4 subunits**, two α and two β.",
            "NCERT line: collagen is the most abundant protein in the animal world; RuBisCO in the whole biosphere.",
            "NCERT line: enzymes from thermophiles retain catalytic power up to **80–90 °C**.",
            "NCERT line: competitive inhibitors are often used in the control of bacterial pathogens.",
          ],
        },
        {
          type: "formula",
          tex: t`K_m = [S] \text{ at which } v = \tfrac{1}{2}V_{max}`,
          caption: "Km (Michaelis constant) appears on the NCERT graph. Competitive inhibitor: Km rises, Vmax unchanged. Non-competitive: Vmax falls, Km unchanged.",
        },
        {
          type: "example",
          title: "NEET level: odd one out in the metabolite table",
          problem: "Which pair is wrongly matched? (a) Alkaloids – codeine (b) Lectins – concanavalin A (c) Terpenoids – vinblastin (d) Toxins – abrin",
          steps: [
            "Codeine is an alkaloid: correct.",
            "Concanavalin A is a lectin: correct.",
            "Vinblastin is listed under **drugs**; terpenoids are monoterpenes and diterpenes. So (c) is wrong.",
            "Abrin is a toxin: correct.",
          ],
          answer: "(c) Terpenoids – vinblastin is wrongly matched.",
        },
        {
          type: "example",
          title: "Assertion–reason on enzymes",
          problem: "A: The rate of an enzyme-catalysed reaction does not rise beyond Vmax even when substrate is added. R: At Vmax, the enzyme molecules are denatured.",
          steps: [
            "A is true: the curve plateaus at Vmax.",
            "R is false: the plateau is due to saturation (no free active sites), not denaturation. Denaturation would lower the rate.",
          ],
          answer: "A is true, but R is false.",
        },
        {
          type: "example",
          title: "Statement analysis on co-factors",
          problem: "How many are correct? (i) Zinc is a co-factor for carboxypeptidase. (ii) Haem is a co-enzyme of catalase. (iii) NAD contains niacin. (iv) Removal of the co-factor leaves the apoenzyme fully active.",
          steps: [
            "(i) Correct.",
            "(ii) Wrong: haem is a prosthetic group (tightly bound), not a co-enzyme.",
            "(iii) Correct: NAD and NADP contain niacin.",
            "(iv) Wrong: catalytic activity is lost when the co-factor is removed.",
          ],
          answer: "Two statements, (i) and (iii), are correct.",
        },
        {
          type: "example",
          title: "Harder: interpreting kinetics data",
          problem: "For an enzyme, Vmax = 40 units and Km = 2 mM. Adding substance X gives Vmax = 40 units and Km = 6 mM. Adding substance Y gives Vmax = 20 units and Km = 2 mM. Classify X and Y and find the rate with X when [S] = 6 mM.",
          steps: [
            "X raises Km but leaves Vmax unchanged: a **competitive** inhibitor (more substrate overcomes it).",
            "Y halves Vmax but leaves Km unchanged: a **non-competitive** inhibitor.",
            "With X, at [S] = Km = 6 mM, the rate is half of Vmax by the definition of Km.",
            "Rate = 40 ÷ 2 = 20 units.",
          ],
          answer: "X competitive, Y non-competitive; rate with X at 6 mM = 20 units.",
        },
        {
          type: "mistake",
          wrong: "Lyases and ligases both join molecules together.",
          right: "Lyases **remove** groups (leaving double bonds) without hydrolysis; ligases **join** two compounds.",
          why: "The names sound alike. Remember: lig- as in 'ligament', which ties things together.",
        },
        {
          type: "mistake",
          wrong: "Nucleotides of DNA contain ribose; thymidine is a nucleotide.",
          right: "DNA contains 2′-deoxyribose. Thymidine is a nucleoside; thymidylic acid is the nucleotide.",
          why: "The '-idine/-osine' names are nucleosides; the '-ylic acid' names are nucleotides. NEET swaps them in options.",
        },
        {
          type: "mistake",
          wrong: "Higher temperature always means faster enzyme action.",
          right: "Activity rises only up to the optimum temperature; beyond it the protein denatures and activity drops sharply.",
          why: "The 'doubles every 10 °C' rule is for reactions in general; enzymes are proteins and lose their shape when heated.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which is a heteropolymer?",
            emoji: "🧬",
            options: ["Cellulose", "Inulin", "Protein", "Glycogen"],
            answer: 2,
            trap: 1,
            explain: "Proteins are made of up to 20 different amino acids, so they are heteropolymers. Cellulose, glycogen (glucose) and inulin (fructose) each have one kind of monomer.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Starch gives a blue colour with iodine but cellulose does not. R: Cellulose is a heteropolymer.",
              options: AR,
              answer: 2,
              explain: "A is true. R is false: cellulose is a homopolymer of glucose. The real reason is that starch forms helices that hold I₂ and cellulose does not.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn NCERT tables word for word: secondary metabolites, protein functions, composition of cells.",
            "Nucleoside vs nucleotide naming; purines A, G; pyrimidines C, T, U.",
            "Vmax by saturation; Km = [S] at half Vmax; competitive raises Km, non-competitive lowers Vmax.",
            "Prosthetic group (haem) tight; co-enzyme (NAD, NADP) transient; metal ion (Zn²⁺) for carboxypeptidase.",
          ],
        },
      ],
      flashcards: [
        { front: "Km", back: "Substrate concentration at which the reaction velocity is half of Vmax." },
        { front: "Effect of a competitive inhibitor on Km and Vmax", back: "Km increases; Vmax unchanged." },
        { front: "Effect of a non-competitive inhibitor", back: "Vmax decreases; Km unchanged." },
        { front: "Vinblastin belongs to", back: "Drugs (secondary metabolites)." },
        { front: "Monoterpenes and diterpenes", back: "Terpenoids." },
        { front: "Sugar in DNA", back: "2′-deoxyribose." },
        { front: "Hydrogen bonds between A–T and G–C", back: "A=T two; G≡C three." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is NOT found in the acid-insoluble fraction?",
          options: ["Proteins", "Lipids", "Amino acids", "Nucleic acids"],
          answer: 2,
          explain: "Amino acids are micromolecules in the acid-soluble pool. Lipids appear in the acid-insoluble fraction as membrane vesicles.",
        },
        {
          kind: "multi",
          q: "Select the correctly matched pairs.",
          options: ["Trypsin – enzyme", "Receptor – sensory reception", "Collagen – hormone", "Antibody – fights infectious agents"],
          answers: [0, 1, 3],
          explain: "Collagen is intercellular ground substance; insulin is the hormone in the NCERT table.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A: Enzymes from organisms in hot sulphur springs work at 80–90 °C. R: These enzymes are thermostable.",
          options: AR,
          answer: 0,
          explain: "NCERT: enzymes from thermophiles are stable and retain catalytic power at high temperatures; stability explains activity.",
        },
        {
          kind: "numeric",
          q: "An enzyme has Vmax = 50 μmol/min and Km = 4 mM. What is the reaction velocity (μmol/min) when [S] = 4 mM?",
          answer: 25,
          explain: "By definition, at [S] = Km the velocity is half of Vmax: 50 ÷ 2 = 25 μmol/min.",
          difficulty: 2,
          hint: "Use the definition of Km.",
        },
        {
          kind: "numeric",
          q: "Using the Michaelis–Menten equation v = Vmax[S]/(Km + [S]), find v (μmol/min) for Vmax = 50 μmol/min, Km = 4 mM and [S] = 12 mM.",
          answer: 37.5,
          tolerance: 0.1,
          explain: "v = 50 × 12 / (4 + 12) = 600 / 16 = 37.5 μmol/min. (The equation is beyond NCERT, but the result shows how v approaches Vmax.)",
          difficulty: 3,
          hint: "Substitute directly; units of Km and [S] cancel.",
        },
        {
          kind: "mcq",
          q: "Conversion of glucose-6-phosphate into fructose-6-phosphate is catalysed by an enzyme of class:",
          options: ["Transferases", "Isomerases", "Lyases", "Oxidoreductases"],
          answer: 1,
          explain: "Glucose-6-phosphate and fructose-6-phosphate are isomers (same formula); inter-conversion of isomers is done by isomerases.",
          difficulty: 3,
          hint: "Compare the molecular formulae of the two sugars.",
        },
        {
          kind: "mcq",
          q: "Which statement about protein structure is correct?",
          options: [
            "Primary structure is the 3-D folding of the chain",
            "Only left-handed helices occur in proteins",
            "Haemoglobin shows quaternary structure",
            "Tertiary structure is not needed for biological activity",
          ],
          answer: 2,
          explain: "Haemoglobin has four subunits, so it has quaternary structure. Primary is the sequence; helices are right-handed; tertiary structure is needed for many activities.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these contain nitrogen?",
          options: ["Chitin", "Cellulose", "Lecithin", "Adenylic acid", "Palmitic acid"],
          answers: [0, 2, 3],
          explain: "Chitin has amino-sugars, lecithin has choline (a nitrogen compound), adenylic acid has adenine. Cellulose and palmitic acid contain only C, H and O.",
          difficulty: 3,
          hint: "Look for amino-sugars, nitrogen bases or choline.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Cell Cycle and Cell Division                                        */
/* ------------------------------------------------------------------ */
const cellCycle: Topic = {
  slug: "c11-bio-cell-cycle",
  title: "Cell Cycle and Cell Division",
  icon: "🧫",
  description:
    "Phases of the cell cycle and G0, the four stages of mitosis, cytokinesis in plant and animal cells, significance of mitosis, meiosis I with the five substages of prophase I, meiosis II, and the significance of meiosis.",
  lessons: [
    /* ---------------- Lesson 1: cell cycle and mitosis ---------------- */
    {
      slug: "c11-bio-cell-cycle-mitosis",
      title: "The Cell Cycle and Mitosis",
      summary:
        "Interphase (G1, S, G2) and M phase, the quiescent G0 stage, how DNA content and chromosome number change, the stages of mitosis, cytokinesis, and why mitosis matters.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "A cut on your knee heals in a week. Skin cells next to the wound copy their DNA, grow and divide again and again until the gap is filled. Each new cell has exactly the same chromosomes as the old one. The sequence of events by which a cell **duplicates its genome, synthesises other cell parts and divides into two daughter cells** is the **cell cycle**.\n\nDNA synthesis happens in only one stage of the cycle, but cell growth (increase in cytoplasm) goes on continuously. The duplicated chromosomes are then shared out to the daughter nuclei through a series of events under genetic control.",
        },
        {
          type: "table",
          headers: ["Phase", "What happens"],
          rows: [
            ["**G1** (Gap 1)", "Interval between mitosis and the start of DNA replication. The cell is metabolically active and grows, but does not replicate its DNA."],
            ["**S** (Synthesis)", "DNA is replicated. DNA per cell **doubles (2C → 4C)**, but the **chromosome number stays the same (2n)**. In animal cells the **centriole duplicates** in the cytoplasm."],
            ["**G2** (Gap 2)", "Proteins are made in preparation for mitosis while cell growth continues."],
            ["**M phase**", "Karyokinesis (division of the nucleus) followed by cytokinesis (division of the cytoplasm)."],
            ["**G0** (quiescent)", "Cells that leave G1 and stop dividing. They stay metabolically active but do not proliferate unless needed. Heart cells in adult animals hardly divide at all."],
          ],
        },
        {
          type: "text",
          md: "**Interphase** = G1 + S + G2. It is the resting phase only in name: the cell is busy preparing for division. A typical human cell in culture divides about **once in 24 hours**; the M phase lasts only **about an hour**, so interphase takes **more than 95%** of the cycle. Yeast completes a cycle in about **90 minutes**.\n\nIn animals, mitosis is seen only in **diploid somatic cells**. Plants can show mitosis in both **haploid and diploid** cells. In some lower plants and some social insects (such as male honeybees), haploid cells also divide by mitosis.",
        },
        {
          type: "heading",
          text: "The four stages of mitosis",
        },
        {
          type: "table",
          headers: ["Stage", "Key events"],
          rows: [
            ["**Prophase**", "Chromatin condenses into compact chromosomes, each with two chromatids joined at the centromere. The centrosome (duplicated in S) moves to opposite poles; each radiates microtubules called **asters**; asters and spindle fibres form the **mitotic apparatus**. By the end, **Golgi, ER, nucleolus and nuclear envelope are no longer seen**."],
            ["**Metaphase**", "Starts with **complete disintegration of the nuclear envelope**. Condensation is complete; chromosome morphology is **easiest to study** now. Spindle fibres attach to **kinetochores** (discs on the centromere). Chromosomes line up at the equator on the **metaphase plate**; sister chromatids face opposite poles."],
            ["**Anaphase**", "Centromeres **split**; sister chromatids (now daughter chromosomes) separate and move to opposite poles, **centromere leading and arms trailing**."],
            ["**Telophase**", "Chromosomes reach the poles, decondense and lose their individuality. The **nuclear envelope** re-forms around each cluster; **nucleolus, Golgi and ER reappear**."],
          ],
        },
        {
          type: "text",
          md: "**Cytokinesis.** In **animal cells** a **furrow** appears in the plasma membrane and deepens until the cell is pinched into two. In **plant cells**, the rigid wall prevents furrowing; a **cell plate** forms in the **centre** and grows **outwards** to meet the side walls. The cell plate is the precursor of the **middle lamella**. Organelles such as mitochondria and plastids are shared between the daughter cells.\n\nSometimes karyokinesis is **not followed by cytokinesis**, giving a multinucleate cell called a **syncytium**, for example the **liquid endosperm of coconut**.",
        },
        {
          type: "list",
          items: [
            "**Significance of mitosis:** produces daughter cells with an **identical genetic complement**.",
            "**Growth** of multicellular organisms.",
            "Restores the **nucleo-cytoplasmic ratio**, which is disturbed as a cell grows.",
            "**Repair and replacement**: cells of the upper epidermis, the gut lining and blood cells are constantly replaced.",
            "In plants, mitosis in **apical and lateral (cambium) meristems** gives continuous growth throughout life.",
          ],
        },
        {
          type: "example",
          title: "Tracking chromosomes and DNA",
          problem: "Onion root-tip cells have 2n = 16. Let the DNA content of a G1 nucleus be 2C. Give the chromosome number and DNA content of one cell at G1, G2, anaphase of mitosis, and each daughter cell after cytokinesis.",
          steps: [
            "G1: 16 chromosomes, 2C.",
            "S doubles DNA but not chromosome number, so G2: 16 chromosomes (each with 2 chromatids, 32 chromatids), 4C.",
            "Anaphase: centromeres split, so each chromatid counts as a chromosome. The cell has 32 chromosomes, still 4C.",
            "After cytokinesis each daughter gets 16 chromosomes and 2C, the same as the parent in G1.",
          ],
          answer: "G1: 16, 2C. G2: 16, 4C. Anaphase: 32, 4C. Daughter: 16, 2C.",
        },
        {
          type: "mistake",
          wrong: "The S phase doubles the chromosome number from 2n to 4n.",
          right: "S phase doubles the **DNA content** (2C → 4C). The **chromosome number stays 2n**, because each chromosome now has two chromatids joined at one centromere.",
          why: "Students count DNA and chromosomes as the same thing. Chromosomes are counted by centromeres, and no new centromeres separate until anaphase.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange these mitotic events in the order they happen.",
            items: [
              "Chromatin condenses and centrosomes move to opposite poles",
              "Nuclear envelope fully disintegrates and chromosomes align on the metaphase plate",
              "Centromeres split and chromatids move to opposite poles",
              "Nuclear envelope and nucleolus re-form around each cluster",
              "A furrow or cell plate divides the cytoplasm",
            ],
            explain: "Prophase, metaphase, anaphase, telophase, then cytokinesis. The nuclear envelope's breakdown marks the start of metaphase and its reformation marks telophase.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The best stage to count and study the shape of chromosomes is:",
              options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
              answer: 1,
              explain: "Condensation is complete in metaphase and the chromosomes lie in one plane, so their morphology is easiest to study.",
            },
            {
              kind: "mcq",
              q: "In which phase does the centriole duplicate in animal cells?",
              options: ["G1", "S", "G2", "Prophase"],
              answer: 1,
              explain: "While DNA replicates in the nucleus during S phase, the centriole duplicates in the cytoplasm.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A 5-mark mitosis answer needs labelled diagrams of all four stages plus one line each on what marks the start and end of each stage. For 'cytokinesis in plants and animals', the key contrast is furrow (outside in) versus cell plate (centre outwards).",
        },
        {
          type: "keypoints",
          items: [
            "Cell cycle = interphase (G1, S, G2) + M phase; human cell ~24 h with M ~1 h; yeast ~90 min.",
            "S phase: DNA 2C → 4C, chromosome number unchanged; centriole duplicates.",
            "G0: quiescent, metabolically active, not dividing.",
            "Prophase (condense, asters), metaphase (plate, kinetochores), anaphase (centromeres split), telophase (envelope re-forms).",
            "Animal cytokinesis by furrow; plant by cell plate from centre outwards; syncytium in coconut endosperm.",
          ],
        },
      ],
      flashcards: [
        { front: "Duration of a human cell cycle in culture", back: "About 24 hours, with M phase about 1 hour." },
        { front: "Duration of the yeast cell cycle", back: "About 90 minutes." },
        { front: "DNA content change in S phase", back: "2C → 4C; chromosome number stays 2n." },
        { front: "G0 stage", back: "Quiescent: cells are metabolically active but no longer divide unless needed." },
        { front: "Marks the start of metaphase", back: "Complete disintegration of the nuclear envelope." },
        { front: "Kinetochore", back: "Disc-shaped structure on the centromere where spindle fibres attach." },
        { front: "Cell plate", back: "Forms in the centre of a dividing plant cell, grows outwards; precursor of the middle lamella." },
        { front: "Syncytium example", back: "Liquid endosperm of coconut (karyokinesis without cytokinesis)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Golgi complex, ER, nucleolus and nuclear envelope are no longer seen at the end of:",
          options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
          answer: 0,
          explain: "By the end of prophase these structures are no longer visible; they reappear in telophase.",
        },
        {
          kind: "truefalse",
          q: "Interphase is called the resting phase because the cell is metabolically inactive.",
          answer: false,
          explain: "During interphase the cell grows, replicates DNA and makes proteins in an orderly way; it is preparing for division, not resting.",
        },
        {
          kind: "fill",
          q: "During anaphase, chromosomes move with the ___ towards the pole and the arms trailing behind.",
          answer: ["centromere", "centromeres", "kinetochore"],
          explain: "Spindle fibres pull on the kinetochores at the centromere, so it leads and the arms trail.",
        },
        {
          kind: "multi",
          q: "Which are roles of mitosis?",
          options: [
            "Restoring the nucleo-cytoplasmic ratio",
            "Replacing cells of the gut lining",
            "Growth of plants from meristems",
            "Halving the chromosome number for gametes",
          ],
          answers: [0, 1, 2],
          explain: "Mitosis keeps chromosome number constant; halving the number is the role of meiosis.",
        },
        {
          kind: "numeric",
          q: "A cell cycle lasts 24 hours and M phase lasts 1 hour. What percentage of the cycle is interphase? (one decimal place)",
          answer: 95.8,
          tolerance: 0.1,
          explain: "Interphase = 23 h; 23 ÷ 24 × 100 = 95.8%. This is why NCERT says interphase lasts more than 95% of the cycle.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "If the DNA content of a cell in G2 is 8 pg, the DNA content of the same cell in G1 is:",
          options: ["16 pg", "8 pg", "4 pg", "2 pg"],
          answer: 2,
          explain: "G2 comes after DNA doubling in S. So G1 has half of the G2 content: 4 pg.",
          difficulty: 2,
          hint: "Which phase lies between G1 and G2?",
        },
        {
          kind: "mcq",
          q: "Cell plate formation in plants starts:",
          options: ["At the periphery and moves inward", "In the centre and grows outward", "At one pole and moves to the other", "Only after nuclear envelope breakdown"],
          answer: 1,
          explain: "The cell plate begins in the centre of the cell and grows outward to join the existing side walls.",
        },
        {
          kind: "mcq",
          q: "Which cells are most likely to be in G0?",
          options: ["Cells of root apical meristem", "Cardiac muscle cells of an adult", "Cells of a growing embryo", "Cells of the basal epidermis"],
          answer: 1,
          explain: "Adult heart cells rarely divide and remain in a quiescent G0 state. Meristem, embryo and basal epidermal cells divide actively.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Lesson 2: meiosis ---------------- */
    {
      slug: "c11-bio-meiosis",
      title: "Meiosis",
      summary:
        "Why gametes need meiosis, the five substages of prophase I with synapsis and crossing over, metaphase to telophase I, interkinesis, meiosis II, comparison with mitosis, and the significance of meiosis.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "Human body cells have 46 chromosomes. If sperm and egg also had 46, the zygote would have 92, and the number would double every generation. Sexual reproduction works because gametes are made by **meiosis**, the division that **halves the chromosome number** and gives **haploid** daughter cells.\n\nMeiosis has **two sequential cycles of nuclear and cell division** (meiosis I and II) but **only one cycle of DNA replication**. It starts after the chromosomes have replicated in S phase. Homologous chromosomes pair and recombine, and **four haploid cells** form at the end of meiosis II.",
        },
        {
          type: "heading",
          text: "Prophase I: five substages",
        },
        {
          type: "table",
          headers: ["Substage", "Key events"],
          rows: [
            ["**Leptotene**", "Chromosomes become gradually visible under the light microscope; compaction continues."],
            ["**Zygotene**", "Homologous chromosomes start pairing: **synapsis**. A **synaptonemal complex** forms. The pair of synapsed homologues is a **bivalent** or **tetrad**."],
            ["**Pachytene**", "The four chromatids of each bivalent become distinct (tetrads). **Recombination nodules** appear, the sites of **crossing over** between **non-sister chromatids** of homologues. Crossing over is enzyme-mediated (**recombinase**). Pachytene lasts longer than leptotene and zygotene."],
            ["**Diplotene**", "The synaptonemal complex **dissolves**; homologues of each bivalent try to separate except at crossover points, which look like X-shaped **chiasmata**. In oocytes of some vertebrates, diplotene can last **months or years**."],
            ["**Diakinesis**", "**Terminalisation of chiasmata**; chromosomes fully condensed; the meiotic spindle assembles. By the end, the nucleolus disappears and the nuclear envelope breaks down."],
          ],
        },
        {
          type: "text",
          md: "**Metaphase I.** Bivalents line up on the equatorial plate. Microtubules from opposite poles attach to the **kinetochores of homologous chromosomes**.\n\n**Anaphase I.** **Homologous chromosomes separate**, while **sister chromatids stay joined** at their centromeres.\n\n**Telophase I.** The nuclear membrane and nucleolus reappear and cytokinesis follows, giving a **dyad of cells**. Chromosomes often do not reach the fully extended state of interphase.\n\n**Interkinesis** is the short stage between the two divisions. There is **no DNA replication** in it.",
        },
        {
          type: "text",
          md: "**Meiosis II** resembles a normal mitosis.\n\n- **Prophase II** begins right after cytokinesis, usually before chromosomes have fully elongated. The nuclear membrane disappears by its end and chromosomes compact again.\n- **Metaphase II**: chromosomes align at the equator; microtubules attach to the kinetochores of **sister chromatids**.\n- **Anaphase II**: the **centromere of each chromosome splits**, and sister chromatids move to opposite poles.\n- **Telophase II**: nuclear envelopes form around the four groups of chromosomes; cytokinesis gives a **tetrad of four haploid cells**.",
        },
        {
          type: "formula",
          tex: t`\underset{\text{after S}}{2n,\ 4C} \;\xrightarrow{\text{Meiosis I}}\; 2 \times (n,\ 2C) \;\xrightarrow{\text{Meiosis II}}\; 4 \times (n,\ 1C)`,
          caption: "Chromosome number halves in meiosis I (reductional); DNA halves again in meiosis II (equational).",
        },
        {
          type: "table",
          headers: ["Feature", "Mitosis", "Meiosis"],
          rows: [
            ["Divisions", "One", "Two (I and II), with one DNA replication"],
            ["Daughter cells", "Two, diploid, identical", "Four, haploid, genetically different"],
            ["Pairing of homologues", "Absent", "Synapsis in zygotene"],
            ["Crossing over", "Absent", "In pachytene"],
            ["What separates in anaphase", "Sister chromatids", "Homologues in anaphase I; sister chromatids in anaphase II"],
            ["Where", "Somatic cells", "Meiocytes (germ cells) forming gametes or spores"],
          ],
        },
        {
          type: "list",
          items: [
            "**Significance of meiosis:** it **conserves the chromosome number** of a species across generations in sexually reproducing organisms, even though it halves the number in each gamete.",
            "It **increases genetic variability** from one generation to the next (crossing over and independent assortment of homologues). Variation is important for evolution.",
          ],
        },
        {
          type: "example",
          title: "Counting in meiosis",
          problem: "A plant has 2n = 20. For one meiocyte, give: the number of bivalents in pachytene, chromatids in pachytene, chromosomes in each cell after telophase I, and chromosomes in each cell after telophase II.",
          steps: [
            "Bivalents = number of homologous pairs = n = 10.",
            "Each bivalent has 4 chromatids, so 10 × 4 = 40 chromatids.",
            "Anaphase I separates homologues, so each cell after telophase I has n = 10 chromosomes (each still with 2 chromatids).",
            "Anaphase II separates sister chromatids, so each of the four cells has 10 chromosomes (each with 1 chromatid).",
          ],
          answer: "10 bivalents; 40 chromatids; 10 chromosomes; 10 chromosomes.",
        },
        {
          type: "mistake",
          wrong: "Crossing over happens in diplotene because that is where chiasmata are seen.",
          right: "Crossing over happens in **pachytene** (at recombination nodules). Chiasmata seen in diplotene are the **visible result** of crossing over that has already happened.",
          why: "We see the X-shapes only in diplotene, so students place the event there. NEET repeatedly asks 'crossing over occurs in' with diplotene as the trap option.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the substages of prophase I in order.",
            items: ["Leptotene", "Zygotene", "Pachytene", "Diplotene", "Diakinesis"],
            explain: "A memory line: 'Lazy Zebras Prefer Dry Dates' for leptotene, zygotene, pachytene, diplotene, diakinesis.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The synaptonemal complex is formed during:",
              options: ["Leptotene", "Zygotene", "Diplotene", "Diakinesis"],
              answer: 1,
              explain: "It forms in zygotene, along with synapsis of homologues, and dissolves in diplotene.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For 'describe prophase I', write the five substages in order with one defining event each (visible, synapsis, crossing over, chiasmata, terminalisation). For differences between mitosis and meiosis, give at least four points in a table; ISC and PUC papers often ask for 'any three'.",
        },
        {
          type: "keypoints",
          items: [
            "Meiosis: two divisions, one DNA replication, four haploid cells.",
            "Leptotene (visible), zygotene (synapsis, synaptonemal complex), pachytene (crossing over, recombinase), diplotene (chiasmata), diakinesis (terminalisation).",
            "Anaphase I separates homologues; anaphase II splits centromeres and separates sister chromatids.",
            "Interkinesis has no DNA replication.",
            "Meiosis conserves chromosome number across generations and increases genetic variability.",
          ],
        },
      ],
      flashcards: [
        { front: "Synapsis", back: "Pairing of homologous chromosomes in zygotene." },
        { front: "Bivalent (tetrad)", back: "A pair of synapsed homologous chromosomes, with four chromatids." },
        { front: "Enzyme of crossing over", back: "Recombinase." },
        { front: "Recombination nodules appear in", back: "Pachytene." },
        { front: "Chiasmata", back: "X-shaped sites where homologues stay joined after crossing over; seen in diplotene." },
        { front: "Diakinesis", back: "Terminalisation of chiasmata; spindle assembles; nucleolus and nuclear envelope disappear." },
        { front: "Interkinesis", back: "Short stage between meiosis I and II; no DNA replication." },
        { front: "Long diplotene", back: "In oocytes of some vertebrates, it can last months or years." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Homologous chromosomes separate during:",
          options: ["Anaphase of mitosis", "Anaphase I", "Anaphase II", "Telophase II"],
          answer: 1,
          explain: "Anaphase I separates homologues; sister chromatids remain joined until anaphase II.",
        },
        {
          kind: "mcq",
          q: "Terminalisation of chiasmata is a feature of:",
          options: ["Zygotene", "Pachytene", "Diplotene", "Diakinesis"],
          answer: 3,
          explain: "In diakinesis the chiasmata move towards the ends of chromosomes (terminalise).",
        },
        {
          kind: "truefalse",
          q: "DNA replicates during interkinesis to prepare for meiosis II.",
          answer: false,
          explain: "Interkinesis is short and has no DNA replication; that is why meiosis II reduces DNA from 2C to 1C.",
        },
        {
          kind: "fill",
          q: "At the end of meiosis I, the two cells formed are called a ___ of cells.",
          answer: ["dyad"],
          explain: "Telophase I gives a dyad; telophase II gives a tetrad of cells.",
        },
        {
          kind: "numeric",
          q: "A species has 2n = 46. How many bivalents form in zygotene of one meiocyte?",
          answer: 23,
          explain: "Bivalents = homologous pairs = n = 46 ÷ 2 = 23.",
        },
        {
          kind: "multi",
          q: "Which events happen in meiosis but not in mitosis?",
          options: ["Synapsis", "Crossing over", "Splitting of centromeres", "Formation of chiasmata", "Formation of spindle"],
          answers: [0, 1, 3],
          explain: "Synapsis, crossing over and chiasmata are unique to meiosis. Centromeres split and spindles form in both.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "If a meiocyte at G1 has 2C DNA, a cell at the end of telophase I has:",
          options: ["4C", "2C", "1C", "C/2"],
          answer: 1,
          explain: "After S: 4C. Meiosis I halves it to 2C per cell (n chromosomes, each with two chromatids). Meiosis II then gives 1C.",
          difficulty: 2,
          hint: "Start from the DNA content after S phase.",
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-cell-cycle-exam-edge",
      title: "Exam edge: Cell Cycle and Cell Division",
      summary:
        "What NEET and KCET ask: phase-wise DNA and chromosome counts, the event-to-stage questions on mitosis and prophase I, number of divisions to make a given number of cells, and assertion–reason items.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** takes 1–3 questions from this chapter every year. The favourites are 'which event in which stage', DNA content (C) versus chromosome number (n) through the cycle, and the substages of prophase I. **KCET** asks the same one-liners and simple counting. The chapter is also the base for gametogenesis and genetics in Class 12.",
        },
        {
          type: "list",
          items: [
            "NCERT line: in the 24-hour human cell cycle, cell division proper lasts **only about an hour**.",
            "NCERT line: interphase lasts **more than 95%** of the cycle.",
            "NCERT line: complete disintegration of the nuclear envelope marks the **start of metaphase**.",
            "NCERT line: crossing over is an enzyme-mediated process; the enzyme is **recombinase**.",
            "NCERT line: in oocytes of some vertebrates, **diplotene** can last for months or years.",
            "NCERT line: cells in G0 remain metabolically active but no longer proliferate unless called on to do so.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{cells after } k \text{ generations} = 2^{k} \qquad \text{divisions needed for } N \text{ cells} = N - 1`,
          caption: "Safe for mitosis from a single cell when every cell divides each generation.",
        },
        {
          type: "example",
          title: "NEET level: event to stage",
          problem: "Match: (p) chromosomes align on the plate (q) centromeres split in meiosis (r) chiasmata first visible (s) synaptonemal complex forms — with (1) zygotene (2) diplotene (3) anaphase II (4) metaphase.",
          steps: [
            "Alignment on the equatorial plate is metaphase: p–4.",
            "In meiosis, centromeres split only in anaphase II: q–3.",
            "Chiasmata become visible in diplotene: r–2.",
            "The synaptonemal complex forms in zygotene: s–1.",
          ],
          answer: "p–4, q–3, r–2, s–1.",
        },
        {
          type: "example",
          title: "Counting divisions",
          problem: "How many mitotic divisions are needed to produce 128 cells from one cell, and in how many generations?",
          steps: [
            "Generations: 2^k = 128, so k = 7.",
            "Total divisions: each division adds one cell, so 128 − 1 = 127 divisions (1 + 2 + 4 + 8 + 16 + 32 + 64 = 127).",
          ],
          answer: "7 generations; 127 divisions.",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: Meiosis II is called an equational division. R: In meiosis II the chromosome number of each cell stays the same, as the sister chromatids separate.",
          steps: [
            "A is true: meiosis II resembles mitosis and does not change chromosome number.",
            "R is true: each cell enters with n chromosomes (of two chromatids) and its daughters also have n.",
            "R explains A, since 'equational' means the number is kept equal.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Harder: C and n through meiosis",
          problem: "A meiocyte has 2n = 12 and 6 pg DNA in G1. Give chromosome number and DNA per cell in (a) G2, (b) metaphase I, (c) after telophase I, (d) metaphase II, (e) after telophase II.",
          steps: [
            "S doubles DNA, not chromosomes: (a) G2 = 12 chromosomes, 12 pg.",
            "(b) Metaphase I: still one cell before any separation = 12 chromosomes (6 bivalents), 12 pg.",
            "(c) Homologues separate: each cell 6 chromosomes, 6 pg.",
            "(d) Metaphase II: same as (c), 6 chromosomes, 6 pg.",
            "(e) Sister chromatids separate: each cell 6 chromosomes, 3 pg.",
          ],
          answer: "(a) 12, 12 pg (b) 12, 12 pg (c) 6, 6 pg (d) 6, 6 pg (e) 6, 3 pg.",
        },
        {
          type: "mistake",
          wrong: "To make 64 cells from one cell you need 64 divisions, or 32.",
          right: "64 cells need 6 generations but 63 divisions in total.",
          why: "Students confuse rounds (generations) with individual divisions. Each division turns one cell into two, adding exactly one cell.",
        },
        {
          type: "mistake",
          wrong: "Chromosome number doubles in anaphase of meiosis I.",
          right: "In anaphase I, whole homologues move apart and centromeres do not split, so no 'doubling' happens. Chromosome number in the cell doubles transiently only in mitotic anaphase and anaphase II, when centromeres split.",
          why: "Students carry over the mitotic anaphase count. The test is always: did centromeres split?",
        },
        {
          type: "mistake",
          wrong: "Meiosis happens only in animals to make gametes.",
          right: "Meiosis occurs in meiocytes of all sexually reproducing organisms. In flowering plants it forms spores (microspores and megaspores), and gametes come later by mitosis.",
          why: "Human biology dominates the examples. In plants, meiosis forms spores, and haploid gametophytes then divide by mitosis.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does the event happen in mitosis, meiosis, or both?",
            groups: ["Mitosis only", "Meiosis only", "Both"],
            items: [
              { text: "Synaptonemal complex forms", group: 1, hint: "It holds homologues together in zygotene." },
              { text: "Homologues separate", group: 1, hint: "Anaphase I." },
              { text: "Daughter cells genetically identical to parent", group: 0, hint: "No crossing over or assortment." },
              { text: "Centromeres split", group: 2, hint: "Mitotic anaphase and anaphase II." },
              { text: "Nuclear envelope breaks down", group: 2, hint: "Needed for spindle attachment in every division." },
              { text: "Terminalisation of chiasmata", group: 1, hint: "Diakinesis." },
            ],
            explain: "Pairing, crossing over and separation of homologues belong only to meiosis I; splitting of centromeres is shared by mitosis and meiosis II.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: The DNA content doubles in S phase but the chromosome number stays the same. R: The two chromatids made in S phase remain attached at one centromere.",
              options: AR,
              answer: 0,
              explain: "Chromosomes are counted by centromeres; replicated chromatids share one centromere until anaphase, which explains A.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "DNA content changes in S (doubles), meiosis I and II (halves each); chromosome number changes only in meiosis I (halves).",
            "Count chromosomes by centromeres; chromatids double the count only after S.",
            "Bivalents = n; chromatids in a bivalent = 4.",
            "N cells from one: N − 1 divisions; 2^k after k generations.",
            "Crossing over in pachytene, chiasmata seen in diplotene, terminalisation in diakinesis.",
          ],
        },
      ],
      flashcards: [
        { front: "Divisions needed for 256 cells from one", back: "255 (in 8 generations)." },
        { front: "Stage where crossing over occurs", back: "Pachytene." },
        { front: "Stage where chromosome number is halved", back: "Anaphase I / meiosis I (reductional division)." },
        { front: "Stage where centromeres split in meiosis", back: "Anaphase II." },
        { front: "Number of chromatids in a bivalent", back: "Four." },
        { front: "Phase where cells exit the cycle", back: "G0, entered from G1." },
        { front: "DNA content of a gamete if G1 meiocyte is 2C", back: "1C." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In a cell with 2n = 8, how many chromatids are present at metaphase of mitosis?",
          options: ["4", "8", "16", "32"],
          answer: 2,
          explain: "Each of the 8 chromosomes has two chromatids after S phase: 8 × 2 = 16.",
        },
        {
          kind: "numeric",
          q: "How many mitotic divisions are needed to produce 1024 cells from a single cell?",
          answer: 1023,
          explain: "Each division adds one cell, so N − 1 = 1023 divisions (over 10 generations).",
          difficulty: 2,
          hint: "Generations and divisions are not the same.",
        },
        {
          kind: "multi",
          q: "Select the events of prophase of mitosis.",
          options: [
            "Condensation of chromatin",
            "Movement of centrosomes to opposite poles",
            "Complete breakdown of nuclear envelope",
            "Formation of asters",
            "Splitting of centromeres",
          ],
          answers: [0, 1, 3],
          explain: "Complete breakdown of the nuclear envelope marks the start of metaphase; centromeres split in anaphase.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A: Diplotene can last for years in oocytes of some vertebrates. R: The synaptonemal complex forms in diplotene.",
          options: AR,
          answer: 2,
          explain: "A is an NCERT line. R is false: the synaptonemal complex forms in zygotene and dissolves in diplotene.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A meiocyte has 2n = 24 and 10 pg DNA in G1. What is the DNA content (pg) of one cell at metaphase II?",
          answer: 10,
          explain: "G1 10 pg → after S 20 pg → after meiosis I each cell 10 pg. Metaphase II is before chromatids separate, so 10 pg.",
          difficulty: 3,
          hint: "Meiosis I halves the doubled amount; meiosis II has not yet happened.",
        },
        {
          kind: "mcq",
          q: "Which statement is correct?",
          options: [
            "In animals, mitosis occurs in haploid and diploid somatic cells alike",
            "Plants can show mitosis in both haploid and diploid cells",
            "Interkinesis includes an S phase",
            "Cytokinesis always follows karyokinesis",
          ],
          answer: 1,
          explain: "In animals mitosis is seen only in diploid somatic cells, while plants divide by mitosis in both haploid and diploid cells. Interkinesis has no S phase, and coconut endosperm shows karyokinesis without cytokinesis.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which pair is correctly matched?",
          options: ["Leptotene – synapsis", "Zygotene – chiasmata", "Pachytene – recombination nodules", "Diakinesis – synaptonemal complex forms"],
          answer: 2,
          explain: "Recombination nodules are seen in pachytene. Synapsis is in zygotene; chiasmata in diplotene; the synaptonemal complex forms in zygotene.",
        },
        {
          kind: "numeric",
          q: "An onion root tip (2n = 16) has a cell in anaphase. How many chromosomes are in that cell?",
          answer: 32,
          explain: "Centromeres split in anaphase, so each of the 16 chromosomes gives two daughter chromosomes: 32 in the cell, 16 moving to each pole.",
          difficulty: 2,
        },
      ],
    },
  ],
};

export const topics: Topic[] = [cellUnit, biomolecules, cellCycle];

export const links: Record<string, string | string[]> = {
  "11:Cell: The Unit of Life": "c11-bio-cell-unit-of-life",
  "11:Biomolecules": "c11-bio-biomolecules",
  "11:Cell Cycle and Cell Division": "c11-bio-cell-cycle",
  "11:Cell: Structure and Function": ["c11-bio-cell-unit-of-life", "c11-bio-biomolecules", "c11-bio-cell-cycle"],
};
