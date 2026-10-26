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
          type: "heading",
          text: "Mitochondria",
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
      track_note: undefined,
      blocks: [],
    },
  ],
};

export const topics: Topic[] = [cellUnit];

export const links: Record<string, string | string[]> = {
  "11:Cell: The Unit of Life": "c11-bio-cell-unit-of-life",
};
