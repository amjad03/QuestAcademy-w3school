import type { Subject } from "@/content/types";

export const humanAnatomy: Subject = {
  slug: "human-anatomy",
  title: "Human Anatomy & Physiology",
  world: "campus",
  icon: "🫀",
  colors: ["#e11d48", "#0ea5e9"],
  tagline: "How the body is built — and how it keeps itself running.",
  description:
    "A foundation course in human anatomy and physiology for students of medicine, nursing, allied health, biomedical engineering and the simply curious. Explore cells and tissues, then the cardiovascular, respiratory, nervous, musculoskeletal and endocrine systems, linking structure to function with clinical and industry case studies. For education only — not medical advice.",
  levels: ["UG Year 1", "Pre-med", "Allied health"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Medicine & Health",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "cells-tissues",
      title: "Cells & Tissues",
      icon: "🔬",
      description: "The building blocks of the body and how they organise into tissues.",
      lessons: [
        {
          slug: "the-human-cell",
          title: "The Human Cell",
          summary: "Organelles and their jobs, from the nucleus to the mitochondria.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "callout",
              tone: "warning",
              title: "Educational content only",
              md: "This course is for learning about how the body works. It is **not medical advice** and cannot diagnose or treat any condition. If you have a health concern, please speak to a qualified doctor or healthcare professional.",
            },
            {
              type: "text",
              md: "You began as a single cell. Today you're made of roughly **30 to 37 trillion** of them, by recent estimates — and each one is a miniature factory with its own power plants, shipping department and recycling centre.",
            },
            {
              type: "widget",
              widget: "cell-explorer",
              props: { kind: "animal" },
              caption: "Tap each organelle to see what it does.",
            },
            {
              type: "table",
              headers: ["Organelle", "Main function", "Factory analogy"],
              rows: [
                ["Cell (plasma) membrane", "Phospholipid bilayer controlling what enters and leaves", "Security gate"],
                ["Nucleus", "Stores DNA; controls gene expression", "Head office"],
                ["Mitochondria", "Aerobic respiration — produce most of the cell's ATP", "Power station"],
                ["Ribosomes", "Build proteins from mRNA instructions", "Assembly line"],
                ["Rough ER", "Folds and processes proteins (studded with ribosomes)", "Production floor"],
                ["Smooth ER", "Makes lipids, detoxifies, stores calcium", "Chemical plant"],
                ["Golgi apparatus", "Modifies, sorts and packages proteins", "Shipping department"],
                ["Lysosomes", "Digest waste and worn-out parts with enzymes", "Recycling centre"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Heart muscle cells work non-stop. Which organelle would you expect them to have in unusually large numbers?",
                  options: ["Lysosomes", "Mitochondria", "Golgi apparatus", "Nucleoli"],
                  answer: 1,
                  explain: "Constant contraction demands constant ATP, so cardiac muscle cells are packed with mitochondria.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "Mature **red blood cells** have no nucleus and no mitochondria — leaving more room for haemoglobin. They are by far the most numerous cells in your body and live about 120 days.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "The mRNA COVID-19 vaccines delivered genetic instructions that the body's own **ribosomes** read to make the spike protein, training the immune system without using live virus. Decades of basic cell biology made that rapid development possible.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"All human cells contain the same organelles in the same amounts.\" Structure follows function: neurons have long axons, red blood cells lose their nucleus, and liver cells are rich in smooth ER for detoxification.",
            },
            {
              type: "keypoints",
              items: [
                "The cell is the basic unit of life; humans have tens of trillions.",
                "Mitochondria make ATP; ribosomes make proteins; the nucleus stores DNA.",
                "A cell's organelle mix reflects its specialised job.",
              ],
            },
          ],
          flashcards: [
            { front: "Mitochondria", back: "Site of aerobic respiration; produce most of the cell's ATP." },
            { front: "Golgi apparatus", back: "Modifies, sorts and packages proteins for transport." },
            { front: "Cell membrane structure", back: "A phospholipid bilayer with embedded proteins." },
            { front: "Lifespan of a red blood cell", back: "About 120 days." },
            { front: "Ribosome", back: "Molecular machine that translates mRNA into protein." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which organelle digests worn-out cell components?",
              options: ["Ribosome", "Lysosome", "Nucleus", "Smooth ER"],
              answer: 1,
              explain: "Lysosomes contain digestive enzymes that break down waste.",
            },
            {
              kind: "truefalse",
              q: "Mature human red blood cells contain a nucleus.",
              answer: false,
              explain: "They lose it during maturation to make room for haemoglobin.",
            },
            {
              kind: "order",
              q: "Order the path of a protein destined to be secreted from the cell.",
              items: ["Ribosome on rough ER", "Rough ER folding", "Golgi apparatus", "Vesicle to the cell membrane"],
              explain: "Synthesised on the rough ER, processed by the Golgi, then shipped in vesicles.",
            },
            {
              kind: "fill",
              q: "The energy currency produced by mitochondria is called ___.",
              answer: ["ATP", "adenosine triphosphate"],
              explain: "ATP powers most cellular work.",
            },
          ],
        },
        {
          slug: "tissue-types",
          title: "The Four Tissue Types",
          summary: "Epithelial, connective, muscle and nervous tissue — and how they build organs.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Look at the back of your hand. Skin on top, blood vessels underneath, tendons that move your fingers, nerves that feel a mosquito land. In one square centimetre you're seeing **all four** basic tissue types working together.",
            },
            {
              type: "table",
              headers: ["Tissue", "Key features", "Examples"],
              rows: [
                ["Epithelial", "Tightly packed sheets; cover and line surfaces; no blood vessels", "Skin surface, gut lining, glands"],
                ["Connective", "Cells scattered in an extracellular matrix; support and connect", "Bone, cartilage, blood, fat, tendons"],
                ["Muscle", "Contractile cells that generate force", "Skeletal, cardiac, smooth muscle"],
                ["Nervous", "Neurons and glial cells that transmit signals", "Brain, spinal cord, nerves"],
              ],
            },
            {
              type: "illustration",
              emoji: "🧱",
              caption: "Levels of organisation: cell → tissue → organ → organ system → organism.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Blood is classified as which tissue type?",
                  options: ["Epithelial", "Connective", "Muscle", "Nervous"],
                  answer: 1,
                  explain: "Blood is a fluid connective tissue — cells suspended in an extracellular matrix (plasma).",
                },
              ],
            },
            {
              type: "text",
              md: "Epithelia are named by **cell shape** (squamous = flat, cuboidal, columnar) and **layers** (simple = one, stratified = many). Thin simple squamous epithelium lines the alveoli for fast gas diffusion; tough stratified squamous epithelium protects your skin and mouth.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Pathologists diagnose many cancers by looking at tissue under the microscope (histology). Around 80–90% of cancers are **carcinomas** — cancers of epithelial tissue — partly because epithelial cells divide often and face the environment.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Bone is dead, dry material.\" Living bone is a connective tissue with blood vessels, nerves and cells (osteoblasts and osteoclasts) that constantly remodel it.",
            },
            {
              type: "keypoints",
              items: [
                "Four tissue types: epithelial, connective, muscle, nervous.",
                "Connective tissue includes blood, bone, cartilage and fat.",
                "Epithelia are classified by cell shape and number of layers.",
              ],
            },
          ],
          flashcards: [
            { front: "The four tissue types", back: "Epithelial, connective, muscle, nervous." },
            { front: "Simple squamous epithelium", back: "A single layer of flat cells — ideal for diffusion (e.g. alveoli)." },
            { front: "Carcinoma", back: "Cancer arising from epithelial tissue." },
            { front: "Extracellular matrix", back: "Material between cells in connective tissue (fibres + ground substance)." },
          ],
          quiz: [
            {
              kind: "multi",
              q: "Which are connective tissues? (Select all.)",
              options: ["Blood", "Bone", "Skin epidermis", "Adipose (fat)"],
              answers: [0, 1, 3],
              explain: "The epidermis is stratified squamous epithelium.",
            },
            {
              kind: "truefalse",
              q: "Epithelial tissue contains its own blood vessels.",
              answer: false,
              explain: "Epithelia are avascular; they get nutrients by diffusion from underlying connective tissue.",
            },
            {
              kind: "order",
              q: "Order the levels of organisation from smallest to largest.",
              items: ["Cell", "Tissue", "Organ", "Organ system", "Organism"],
              explain: "Cells form tissues, tissues form organs, and so on.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "cardiovascular",
      title: "Cardiovascular System",
      icon: "❤️",
      description: "The heart, blood vessels and the blood they carry.",
      lessons: [
        {
          slug: "the-heart",
          title: "The Heart: Chambers, Valves & Rhythm",
          summary: "Follow blood through the four chambers and see how the heartbeat is timed.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Your heart will beat about **100,000 times today** without you giving it a single thought. Over a lifetime that's billions of beats from a muscular pump roughly the size of your fist.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Deoxygenated blood returns via the **venae cavae** into the **right atrium**.",
                "Through the **tricuspid valve** into the **right ventricle**.",
                "Through the **pulmonary valve** into the **pulmonary artery** → lungs.",
                "Oxygenated blood returns via the **pulmonary veins** to the **left atrium**.",
                "Through the **mitral (bicuspid) valve** into the **left ventricle**.",
                "Through the **aortic valve** into the **aorta** → the whole body.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which chamber has the thickest muscular wall?",
                  options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
                  answer: 3,
                  explain: "The left ventricle pumps blood around the entire body at high pressure.",
                },
              ],
            },
            { type: "heading", text: "The electrical conduction system" },
            {
              type: "text",
              md: "The **sinoatrial (SA) node** in the right atrium is the natural pacemaker. Its signal spreads across the atria, pauses briefly at the **atrioventricular (AV) node** (letting the ventricles fill), then races down the bundle of His and Purkinje fibres so the ventricles contract from the bottom up.",
            },
            {
              type: "formula",
              tex: "\\text{Cardiac output} = \\text{Heart rate} \\times \\text{Stroke volume}",
              caption: "At rest: about 70 beats/min × 70 mL ≈ 4.9 L/min.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "An **ECG** records the heart's electrical activity: the P wave (atrial depolarisation), QRS complex (ventricular depolarisation) and T wave (ventricular repolarisation). Smartwatches now include single-lead ECG features, and implantable pacemakers take over when the SA node or conduction system fails.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Arteries always carry oxygenated blood.\" Arteries carry blood *away* from the heart. The pulmonary artery carries **deoxygenated** blood to the lungs; the pulmonary veins bring oxygenated blood back.",
            },
            {
              type: "keypoints",
              items: [
                "Right heart → lungs (pulmonary circuit); left heart → body (systemic circuit).",
                "Valves keep flow one-way; the 'lub-dub' is valves closing.",
                "SA node sets the pace; AV node delays the signal so ventricles can fill.",
              ],
            },
          ],
          flashcards: [
            { front: "Natural pacemaker of the heart", back: "The sinoatrial (SA) node." },
            { front: "Valve between left atrium and left ventricle", back: "Mitral (bicuspid) valve." },
            { front: "Cardiac output formula", back: "Heart rate × stroke volume." },
            { front: "QRS complex", back: "ECG wave showing ventricular depolarisation." },
            { front: "Pulmonary artery carries…", back: "Deoxygenated blood from the right ventricle to the lungs." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the structures blood passes through starting from the right atrium.",
              items: ["Right atrium", "Tricuspid valve", "Right ventricle", "Pulmonary valve", "Pulmonary artery"],
              explain: "Right atrium → tricuspid → right ventricle → pulmonary valve → pulmonary artery.",
            },
            {
              kind: "numeric",
              q: "During exercise, heart rate is 150 beats/min and stroke volume is 100 mL. What is cardiac output in litres per minute?",
              answer: 15,
              unit: "L/min",
              explain: "$150 \\times 0.1$ L = 15 L/min.",
            },
            {
              kind: "truefalse",
              q: "The AV node delays the electrical impulse so the ventricles can fill before contracting.",
              answer: true,
              explain: "This short delay coordinates atrial and ventricular contraction.",
            },
            {
              kind: "mcq",
              q: "Which vessel carries oxygenated blood from the lungs to the heart?",
              options: ["Pulmonary artery", "Pulmonary vein", "Superior vena cava", "Aorta"],
              answer: 1,
              explain: "Pulmonary veins return oxygen-rich blood to the left atrium.",
            },
          ],
        },
        {
          slug: "blood-and-vessels",
          title: "Blood Vessels, Blood Pressure & Blood",
          summary: "Arteries, capillaries and veins; what a blood pressure reading means; and what blood is made of.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Laid end to end, your blood vessels would stretch for tens of thousands of kilometres — commonly quoted at around 100,000 km. Most of that length is **capillaries**, vessels so narrow that red blood cells pass in single file.",
            },
            {
              type: "table",
              headers: ["Vessel", "Wall", "Pressure", "Special feature"],
              rows: [
                ["Artery", "Thick, muscular, elastic", "High, pulsatile", "Stretches and recoils with each beat"],
                ["Capillary", "One cell thick", "Low", "Site of exchange with tissues"],
                ["Vein", "Thinner, less muscle", "Lowest", "Valves stop backflow; skeletal muscles squeeze blood upward"],
              ],
            },
            { type: "heading", text: "Blood pressure" },
            {
              type: "text",
              md: "A reading like **120/80 mmHg** gives **systolic** pressure (ventricles contracting) over **diastolic** pressure (ventricles relaxing). Persistently high blood pressure (hypertension) strains the heart and vessels, often without symptoms — hence its nickname, the \"silent killer\".",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In a reading of 118/76 mmHg, what does 76 represent?",
                  options: ["Heart rate", "Systolic pressure", "Diastolic pressure", "Oxygen saturation"],
                  answer: 2,
                  explain: "The lower number is diastolic pressure, when the ventricles relax.",
                },
              ],
            },
            {
              type: "table",
              headers: ["Component", "Approx. share", "Role"],
              rows: [
                ["Plasma", "~55%", "Water carrying proteins, nutrients, hormones, waste"],
                ["Red blood cells", "~45%", "Carry O₂ on haemoglobin"],
                ["White blood cells & platelets", "<1%", "Immunity; clotting"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Blood banks separate donated blood into components — red cells, plasma and platelets — so one donation can help several patients. Matching ABO and Rh types prevents dangerous transfusion reactions; O negative red cells are the emergency \"universal donor\" choice.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Deoxygenated blood is blue.\" Blood is always red — darker when low in oxygen, brighter when oxygen-rich. Veins look blue because of how skin scatters and absorbs light.",
            },
            {
              type: "keypoints",
              items: [
                "Arteries: high pressure, thick walls. Veins: valves. Capillaries: exchange.",
                "Blood pressure = systolic/diastolic in mmHg.",
                "Blood is about 55% plasma and 45% red cells by volume.",
              ],
            },
          ],
          flashcards: [
            { front: "Systolic pressure", back: "Arterial pressure when the ventricles contract (top number)." },
            { front: "Why veins have valves", back: "To prevent backflow under low pressure." },
            { front: "Capillary wall thickness", back: "One endothelial cell — allowing exchange." },
            { front: "Universal donor red cells", back: "O negative." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Gas and nutrient exchange with tissues happens mainly across capillary walls.",
              answer: true,
              explain: "Capillaries are thin enough for diffusion.",
            },
            {
              kind: "mcq",
              q: "Which blood component makes up the largest share of blood volume?",
              options: ["Red blood cells", "Plasma", "White blood cells", "Platelets"],
              answer: 1,
              explain: "Plasma is roughly 55% of blood volume.",
            },
            {
              kind: "fill",
              q: "Persistently high blood pressure is called ___.",
              answer: ["hypertension"],
              explain: "It raises the risk of heart attack, stroke and kidney disease.",
            },
            {
              kind: "multi",
              q: "Which features describe veins? (Select all.)",
              options: ["Contain valves", "Thickest muscular walls", "Carry blood towards the heart", "Lowest pressure"],
              answers: [0, 2, 3],
              explain: "Arteries have the thickest muscular walls.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "respiratory",
      title: "Respiratory System",
      icon: "🫁",
      description: "Airways, lungs, breathing mechanics and gas exchange.",
      lessons: [
        {
          slug: "airways-and-breathing",
          title: "Airways & the Mechanics of Breathing",
          summary: "From nose to alveoli, and how the diaphragm changes pressure to move air.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "At rest you take a breath every 3–5 seconds — over 20,000 a day. Each one is a feat of physics: your lungs have no muscles of their own, so how does air get in?",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Nose / mouth** — warm, humidify and filter air.",
                "**Pharynx** (throat) and **larynx** (voice box; the epiglottis guards it during swallowing).",
                "**Trachea** — held open by C-shaped cartilage rings.",
                "**Bronchi** → **bronchioles** — branching about 23 times.",
                "**Alveoli** — hundreds of millions of tiny air sacs where gas exchange happens.",
              ],
            },
            { type: "heading", text: "Breathing is a pressure game" },
            {
              type: "text",
              md: "On inhalation the **diaphragm contracts** and flattens, and the external intercostal muscles lift the ribs. Chest volume rises, so pressure inside the lungs falls below atmospheric pressure (Boyle's law: $PV = $ constant) and air flows in. Quiet exhalation is mostly passive: muscles relax and elastic lungs recoil.",
            },
            {
              type: "formula",
              tex: "\\text{Minute ventilation} = \\text{Tidal volume} \\times \\text{Breathing rate}",
              caption: "At rest: about 500 mL × 12 breaths/min = 6 L/min.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "When the diaphragm contracts, pressure inside the lungs…",
                  options: ["Rises, pushing air out", "Falls, drawing air in", "Stays the same", "Becomes zero"],
                  answer: 1,
                  explain: "Larger volume → lower pressure → air flows in from the atmosphere.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Mechanical ventilators, essential in intensive care, push air *in* under positive pressure — the reverse of natural breathing. Biomedical engineers tune volumes and pressures carefully to avoid over-stretching delicate alveoli.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"The lungs suck air in by themselves.\" Lungs are passive. Breathing is driven by the diaphragm and chest-wall muscles changing the volume of the thoracic cavity.",
            },
            {
              type: "keypoints",
              items: [
                "Airway: nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.",
                "Inhalation: diaphragm contracts, volume up, pressure down, air in.",
                "Minute ventilation ≈ tidal volume × breathing rate.",
              ],
            },
          ],
          flashcards: [
            { front: "Main muscle of breathing", back: "The diaphragm." },
            { front: "Epiglottis", back: "Flap that covers the larynx during swallowing." },
            { front: "Tidal volume at rest", back: "About 500 mL per breath." },
            { front: "Why trachea has cartilage rings", back: "To keep the airway open." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the path of inhaled air.",
              items: ["Nasal cavity", "Pharynx", "Larynx", "Trachea", "Bronchi", "Alveoli"],
              explain: "Air passes down progressively smaller airways to the alveoli.",
            },
            {
              kind: "numeric",
              q: "Tidal volume is 600 mL and breathing rate is 15 per minute. What is minute ventilation in litres per minute?",
              answer: 9,
              unit: "L/min",
              explain: "$0.6 \\times 15 = 9$ L/min.",
            },
            {
              kind: "truefalse",
              q: "Quiet exhalation at rest is largely passive.",
              answer: true,
              explain: "Elastic recoil of the lungs and chest wall pushes air out as muscles relax.",
            },
          ],
        },
        {
          slug: "gas-exchange",
          title: "Gas Exchange & Control of Breathing",
          summary: "Diffusion across the alveoli, oxygen transport and the CO₂ sensor in your brainstem.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Hold your breath. The urge to breathe that builds up is mostly *not* a lack of oxygen — it's rising **carbon dioxide**. Your brainstem is a remarkably sensitive CO₂ detector.",
            },
            {
              type: "list",
              items: [
                "**Huge surface area** — tens of square metres, often compared to half a tennis court.",
                "**Very thin barrier** — alveolar and capillary walls together are less than a micrometre thick.",
                "**Steep gradients** — breathing and blood flow keep O₂ high in alveoli and CO₂ high in blood.",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              md: "These three factors appear in **Fick's law of diffusion**: rate ∝ (surface area × concentration difference) / thickness.",
            },
            {
              type: "text",
              md: "Oxygen diffuses into the blood and binds **haemoglobin** in red cells — each haemoglobin molecule can carry up to four O₂. Carbon dioxide travels back mainly as bicarbonate ions dissolved in plasma.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which change would *slow* gas exchange?",
                  options: ["Larger alveolar surface area", "Thickened alveolar walls (e.g. fibrosis)", "Faster breathing", "Steeper concentration gradient"],
                  answer: 1,
                  explain: "A thicker barrier increases diffusion distance and slows exchange.",
                },
              ],
            },
            { type: "heading", text: "Who's in charge?" },
            {
              type: "text",
              md: "Respiratory centres in the **medulla oblongata** and pons set the rhythm. Central chemoreceptors respond to CO₂ (via pH changes in cerebrospinal fluid), while peripheral chemoreceptors in the carotid and aortic bodies also sense falling O₂.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "A **pulse oximeter** clipped to a finger shines red and infrared light through tissue to estimate oxygen saturation (SpO₂) — a staple of clinics and home monitoring. Studies have shown some devices can overestimate saturation in patients with darker skin, prompting regulators to review standards.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"We breathe in oxygen and breathe out only carbon dioxide.\" Exhaled air is still mostly nitrogen and contains roughly 16% oxygen — which is why rescue breaths can help someone who isn't breathing.",
            },
            {
              type: "keypoints",
              items: [
                "Gas exchange is passive diffusion across a thin, vast alveolar surface.",
                "O₂ travels on haemoglobin; CO₂ travels mostly as bicarbonate.",
                "Rising CO₂ is the main stimulus to breathe, sensed in the medulla.",
              ],
            },
          ],
          flashcards: [
            { front: "Fick's law factors", back: "Surface area, concentration difference, membrane thickness." },
            { front: "Main stimulus to breathe", back: "Rising CO₂ (falling pH) detected by chemoreceptors." },
            { front: "O₂ molecules per haemoglobin", back: "Up to four." },
            { front: "Breathing control centre", back: "Medulla oblongata (with the pons)." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Gas exchange in the alveoli requires ATP to pump oxygen into the blood.",
              answer: false,
              explain: "It's passive diffusion down concentration gradients.",
            },
            {
              kind: "mcq",
              q: "Most CO₂ is carried in the blood as…",
              options: ["Dissolved gas only", "Bicarbonate ions", "Bound to platelets", "Carbon monoxide"],
              answer: 1,
              explain: "Around 70% is converted to bicarbonate ions in plasma.",
            },
            {
              kind: "fill",
              q: "The protein in red blood cells that binds oxygen is ___.",
              answer: ["haemoglobin", "hemoglobin"],
              explain: "Each haemoglobin carries up to four O₂ molecules.",
            },
            {
              kind: "multi",
              q: "Which features make alveoli efficient for gas exchange? (Select all.)",
              options: ["Large total surface area", "Thin walls", "Rich capillary network", "Thick cartilage rings"],
              answers: [0, 1, 2],
              explain: "Cartilage rings support the trachea and bronchi, not the alveoli.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "nervous",
      title: "Nervous System",
      icon: "🧠",
      description: "Neurons, nerve impulses, the brain and the autonomic system.",
      lessons: [
        {
          slug: "neurons-and-impulses",
          title: "Neurons & the Action Potential",
          summary: "How a nerve cell fires an all-or-nothing electrical signal and passes it on.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Touch a hot pan and your hand jerks back before you consciously feel pain. That signal raced along nerve fibres at speeds up to about **120 m/s** — over 400 km/h.",
            },
            {
              type: "table",
              headers: ["Part", "Job"],
              rows: [
                ["Dendrites", "Receive signals from other neurons"],
                ["Cell body (soma)", "Contains the nucleus; integrates inputs"],
                ["Axon", "Carries the impulse away from the cell body"],
                ["Myelin sheath", "Fatty insulation that speeds conduction"],
                ["Axon terminals / synapse", "Release neurotransmitters to the next cell"],
              ],
            },
            { type: "heading", text: "The action potential" },
            {
              type: "list",
              ordered: true,
              items: [
                "**Resting potential:** about −70 mV inside, maintained by the Na⁺/K⁺ pump (3 Na⁺ out, 2 K⁺ in per ATP).",
                "**Depolarisation:** a stimulus reaches threshold (around −55 mV); voltage-gated Na⁺ channels open and Na⁺ rushes in.",
                "**Repolarisation:** Na⁺ channels close, K⁺ channels open and K⁺ flows out.",
                "**Hyperpolarisation and recovery:** a brief overshoot below rest, then back to −70 mV.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which ion rushes *into* the neuron during depolarisation?",
                  options: ["K⁺", "Na⁺", "Cl⁻", "Ca²⁺ only"],
                  answer: 1,
                  explain: "Opening of voltage-gated sodium channels lets Na⁺ flood in.",
                },
              ],
            },
            {
              type: "text",
              md: "Action potentials are **all-or-none**: a stronger stimulus doesn't make a bigger spike, it makes spikes *more frequent*. In myelinated axons, the impulse jumps between gaps called nodes of Ranvier (**saltatory conduction**), which is much faster.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Local anaesthetics such as lidocaine block voltage-gated sodium channels, so pain signals simply can't fire. Brain–computer interface companies record action potentials with implanted electrode arrays to let paralysed patients control cursors.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Nerve signals are electricity flowing down a wire.\" They're waves of ion channels opening in sequence along the membrane — an electrochemical process far slower than current in a copper wire.",
            },
            {
              type: "keypoints",
              items: [
                "Resting potential ≈ −70 mV; threshold ≈ −55 mV.",
                "Na⁺ in = depolarisation; K⁺ out = repolarisation.",
                "All-or-none spikes; myelin enables fast saltatory conduction.",
              ],
            },
          ],
          flashcards: [
            { front: "Resting membrane potential", back: "About −70 mV." },
            { front: "Sodium–potassium pump", back: "Moves 3 Na⁺ out and 2 K⁺ in per ATP." },
            { front: "All-or-none principle", back: "A neuron either fires a full action potential or none at all." },
            { front: "Saltatory conduction", back: "Impulse jumps between nodes of Ranvier in myelinated axons." },
            { front: "Synapse", back: "Junction where a neuron passes its signal via neurotransmitters." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the phases of an action potential.",
              items: ["Resting potential", "Depolarisation (Na⁺ in)", "Repolarisation (K⁺ out)", "Hyperpolarisation", "Return to rest"],
              explain: "Rest, Na⁺ influx, K⁺ efflux, brief overshoot, recovery.",
            },
            {
              kind: "truefalse",
              q: "A stronger stimulus produces a taller action potential.",
              answer: false,
              explain: "Spikes are all-or-none; intensity is coded by firing frequency.",
            },
            {
              kind: "mcq",
              q: "Multiple sclerosis damages myelin. What happens to nerve conduction?",
              options: ["It speeds up", "It slows or fails", "It is unaffected", "It reverses direction"],
              answer: 1,
              explain: "Without myelin, saltatory conduction breaks down and signals slow or are lost.",
            },
            {
              kind: "numeric",
              q: "How many sodium ions does one cycle of the Na⁺/K⁺ pump move out of the cell?",
              answer: 3,
              explain: "3 Na⁺ out and 2 K⁺ in per ATP.",
            },
          ],
        },
        {
          slug: "brain-and-divisions",
          title: "Brain, Spinal Cord & Autonomic Nervous System",
          summary: "Map the CNS and PNS, the brain's major regions, and fight-or-flight versus rest-and-digest.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Your brain is about 2% of your body weight yet uses roughly 20% of your resting energy. It houses around **86 billion neurons** — and it's never truly \"off\", even in sleep.",
            },
            {
              type: "table",
              headers: ["Division", "Includes", "Role"],
              rows: [
                ["Central nervous system (CNS)", "Brain + spinal cord", "Integration and decision-making"],
                ["Peripheral nervous system (PNS)", "Cranial and spinal nerves", "Carries signals to and from the CNS"],
                ["Somatic (PNS)", "Motor nerves to skeletal muscle", "Voluntary movement"],
                ["Autonomic (PNS)", "Sympathetic + parasympathetic", "Involuntary control of organs"],
              ],
            },
            {
              type: "table",
              headers: ["Brain region", "Key functions"],
              rows: [
                ["Frontal lobe", "Planning, decision-making, voluntary movement (motor cortex), speech production"],
                ["Parietal lobe", "Touch and body position (somatosensory cortex)"],
                ["Temporal lobe", "Hearing, memory (hippocampus nearby), language comprehension"],
                ["Occipital lobe", "Vision"],
                ["Cerebellum", "Balance, coordination, motor learning"],
                ["Brainstem (medulla, pons, midbrain)", "Breathing, heart rate, reflexes, consciousness"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A patient has trouble with balance and coordinated movement after a stroke. Which region is most likely affected?",
                  options: ["Occipital lobe", "Cerebellum", "Temporal lobe", "Parietal lobe"],
                  answer: 1,
                  explain: "The cerebellum fine-tunes coordination and balance.",
                },
              ],
            },
            {
              type: "table",
              headers: ["Effect on…", "Sympathetic (fight or flight)", "Parasympathetic (rest and digest)"],
              rows: [
                ["Heart rate", "Increases", "Decreases"],
                ["Pupils", "Dilate", "Constrict"],
                ["Airways", "Dilate", "Constrict"],
                ["Digestion", "Slows", "Stimulates"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "MRI and functional MRI (fMRI) let clinicians and researchers see brain structure and activity without surgery. Stroke teams talk about \"time is brain\": rapid imaging decides whether clot-busting drugs or mechanical clot removal can be used.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"We only use 10% of our brains.\" Imaging shows activity across virtually all regions over a day, and damage to almost any area produces noticeable effects.",
            },
            {
              type: "keypoints",
              items: [
                "CNS = brain + spinal cord; PNS = everything else.",
                "Four cerebral lobes plus cerebellum and brainstem.",
                "Sympathetic = fight or flight; parasympathetic = rest and digest.",
              ],
            },
          ],
          flashcards: [
            { front: "CNS", back: "Brain and spinal cord." },
            { front: "Cerebellum", back: "Balance, coordination and motor learning." },
            { front: "Medulla oblongata", back: "Controls breathing rhythm, heart rate and blood pressure." },
            { front: "Sympathetic effects", back: "Faster heart, dilated pupils and airways, slower digestion." },
            { front: "Occipital lobe", back: "Visual processing." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which division slows the heart and stimulates digestion after a meal?",
              options: ["Sympathetic", "Parasympathetic", "Somatic", "Central"],
              answer: 1,
              explain: "Rest and digest is parasympathetic, largely via the vagus nerve.",
            },
            {
              kind: "truefalse",
              q: "The spinal cord is part of the peripheral nervous system.",
              answer: false,
              explain: "The spinal cord belongs to the CNS.",
            },
            {
              kind: "multi",
              q: "Which are sympathetic responses? (Select all.)",
              options: ["Pupils dilate", "Heart rate increases", "Saliva and digestion increase", "Airways widen"],
              answers: [0, 1, 3],
              explain: "Increased digestion is a parasympathetic effect.",
            },
            {
              kind: "fill",
              q: "Visual information is processed mainly in the ___ lobe.",
              answer: ["occipital"],
              explain: "At the back of the brain.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "musculoskeletal",
      title: "Musculoskeletal System",
      icon: "🦴",
      description: "Bones, joints and the muscles that move them.",
      lessons: [
        {
          slug: "bones-and-joints",
          title: "Bones & Joints",
          summary: "The skeleton's jobs, bone remodelling and the main joint types.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A newborn has around 270–300 bony elements; an adult has **206 bones**. You didn't lose any — many fused together as you grew, like the plates of the skull and the bones of the pelvis.",
            },
            {
              type: "list",
              items: [
                "**Support** and shape for the body.",
                "**Protection** — skull for the brain, ribs for heart and lungs.",
                "**Movement** — levers for muscles to pull on.",
                "**Mineral storage** — about 99% of the body's calcium.",
                "**Blood cell production** — in red bone marrow.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "The **femur** (thigh bone) is the longest and strongest bone; the **stapes** in the middle ear is the smallest, about 3 mm long.",
            },
            {
              type: "table",
              headers: ["Synovial joint", "Movement", "Example"],
              rows: [
                ["Hinge", "One plane, like a door", "Elbow, knee"],
                ["Ball-and-socket", "All directions + rotation", "Shoulder, hip"],
                ["Pivot", "Rotation", "Top of the neck (atlas–axis)"],
                ["Gliding (plane)", "Sliding", "Between wrist bones"],
                ["Saddle", "Two planes", "Base of the thumb"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which joint type allows the widest range of movement?",
                  options: ["Hinge", "Pivot", "Ball-and-socket", "Fibrous"],
                  answer: 2,
                  explain: "Ball-and-socket joints (hip, shoulder) move in all directions and rotate.",
                },
              ],
            },
            {
              type: "text",
              md: "Bone constantly remodels: **osteoblasts** build new bone and **osteoclasts** break it down. Weight-bearing exercise tips the balance towards building; ageing and reduced oestrogen after menopause can tip it the other way, leading to **osteoporosis**.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Orthopaedic engineers design hip and knee replacements from titanium alloys, cobalt-chrome and ultra-high-molecular-weight polyethylene. Many modern implants last 15–20 years or more, and patient-specific 3D-printed guides help surgeons position them precisely.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Ligaments and tendons are the same thing.\" **Tendons** attach muscle to bone; **ligaments** attach bone to bone and stabilise joints.",
            },
            {
              type: "keypoints",
              items: [
                "Adults have 206 bones; the skeleton supports, protects, moves, stores and makes blood.",
                "Osteoblasts build, osteoclasts resorb — bone is living tissue.",
                "Synovial joints: hinge, ball-and-socket, pivot, gliding, saddle (and condyloid).",
              ],
            },
          ],
          flashcards: [
            { front: "Number of bones in an adult", back: "206" },
            { front: "Osteoblast vs osteoclast", back: "Osteoblasts build bone; osteoclasts break it down." },
            { front: "Tendon vs ligament", back: "Tendon: muscle → bone. Ligament: bone → bone." },
            { front: "Longest bone", back: "The femur." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many bones are in the typical adult human skeleton?",
              answer: 206,
              explain: "Many infant bones fuse during development to reach 206.",
            },
            {
              kind: "mcq",
              q: "The knee is mainly a…",
              options: ["Ball-and-socket joint", "Hinge joint", "Pivot joint", "Fibrous joint"],
              answer: 1,
              explain: "It mostly flexes and extends in one plane (with a little rotation).",
            },
            {
              kind: "truefalse",
              q: "Red bone marrow produces blood cells.",
              answer: true,
              explain: "Haematopoiesis occurs in red marrow, e.g. in the pelvis, sternum and vertebrae.",
            },
            {
              kind: "fill",
              q: "A tough band connecting bone to bone is called a ___.",
              answer: ["ligament"],
              explain: "Tendons connect muscle to bone.",
            },
          ],
        },
        {
          slug: "muscles-and-movement",
          title: "Muscles & Movement",
          summary: "Three muscle types, the sliding filament model and antagonistic pairs.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Even sitting still, muscles are busy — holding your head up, pumping your blood, moving food through your gut. You have over 600 skeletal muscles, plus muscle that you never consciously control.",
            },
            {
              type: "table",
              headers: ["Type", "Appearance", "Control", "Location"],
              rows: [
                ["Skeletal", "Striated, multinucleated fibres", "Voluntary", "Attached to bones"],
                ["Cardiac", "Striated, branched, intercalated discs", "Involuntary", "Heart only"],
                ["Smooth", "Non-striated, spindle-shaped", "Involuntary", "Gut, blood vessels, bladder, airways"],
              ],
            },
            { type: "heading", text: "The sliding filament model" },
            {
              type: "list",
              ordered: true,
              items: [
                "A nerve impulse triggers release of **Ca²⁺** inside the muscle fibre.",
                "Calcium exposes binding sites on the thin **actin** filaments.",
                "**Myosin** heads bind actin, forming cross-bridges, and pull (the power stroke).",
                "**ATP** binds myosin, releasing it to re-cock and pull again.",
                "Filaments slide past each other; the sarcomere shortens — they don't shrink themselves.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "After death, ATP runs out. Why do muscles become stiff (rigor mortis)?",
                  options: ["Calcium disappears", "Myosin can't detach from actin without ATP", "Bones fuse", "Nerves keep firing"],
                  answer: 1,
                  explain: "ATP is needed to release myosin heads; without it, cross-bridges stay locked.",
                },
              ],
            },
            {
              type: "text",
              md: "Muscles can only **pull**, never push, so they work in **antagonistic pairs**. To bend your elbow the biceps contracts while the triceps relaxes; to straighten it, the roles swap.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Sports scientists and physiotherapists use EMG (electromyography) and motion capture to analyse muscle activation, prevent injury and design rehab. Exoskeleton makers use the same signals to assist workers lifting heavy loads.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Muscle soreness the day after exercise is caused by lactic acid build-up.\" Lactate clears within about an hour. Delayed-onset muscle soreness (DOMS) is linked to micro-damage and inflammation, especially after unfamiliar or eccentric exercise.",
            },
            {
              type: "keypoints",
              items: [
                "Skeletal (voluntary, striated), cardiac (involuntary, striated), smooth (involuntary, non-striated).",
                "Contraction: Ca²⁺ exposes actin, myosin pulls, ATP releases.",
                "Muscles only pull, so they act in antagonistic pairs.",
              ],
            },
          ],
          flashcards: [
            { front: "Sliding filament model", back: "Myosin heads pull actin filaments, shortening the sarcomere." },
            { front: "Role of ATP in contraction", back: "Releases myosin from actin and powers the next stroke." },
            { front: "Role of Ca²⁺ in contraction", back: "Exposes myosin-binding sites on actin." },
            { front: "Antagonistic pair example", back: "Biceps and triceps." },
            { front: "Intercalated discs", back: "Junctions linking cardiac muscle cells so they contract together." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which muscle type lines the walls of blood vessels?",
              options: ["Skeletal", "Cardiac", "Smooth", "Striated voluntary"],
              answer: 2,
              explain: "Smooth muscle adjusts vessel diameter involuntarily.",
            },
            {
              kind: "truefalse",
              q: "During contraction, actin and myosin filaments themselves get shorter.",
              answer: false,
              explain: "They slide past each other; the sarcomere shortens, not the filaments.",
            },
            {
              kind: "order",
              q: "Order the steps of a muscle contraction.",
              items: ["Nerve impulse arrives", "Ca²⁺ released in the fibre", "Myosin binds actin", "Power stroke pulls actin", "ATP releases myosin"],
              explain: "Signal → calcium → binding → pulling → release (and repeat).",
            },
            {
              kind: "multi",
              q: "Which muscle types are striated? (Select all.)",
              options: ["Skeletal", "Cardiac", "Smooth"],
              answers: [0, 1],
              explain: "Smooth muscle lacks the regular sarcomere banding.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "endocrine",
      title: "Endocrine System",
      icon: "🧪",
      description: "Hormones, glands and the feedback loops that keep the body in balance.",
      lessons: [
        {
          slug: "glands-and-hormones",
          title: "Glands & Hormones",
          summary: "The major endocrine glands, what they secrete, and how hormones reach their targets.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A near-miss on the road: within seconds your heart pounds and your hands shake. Nerves fired first, but **adrenaline** released into your blood keeps you on high alert for minutes afterwards. That's the endocrine system — slower than nerves, but longer-lasting and body-wide.",
            },
            {
              type: "table",
              headers: ["Gland", "Key hormone(s)", "Main effect"],
              rows: [
                ["Hypothalamus", "Releasing hormones", "Links the nervous system to the pituitary"],
                ["Pituitary", "Growth hormone, TSH, ACTH, FSH, LH, ADH, oxytocin", "\"Master gland\" directing other glands"],
                ["Thyroid", "Thyroxine (T₄), T₃", "Sets metabolic rate"],
                ["Parathyroids", "Parathyroid hormone (PTH)", "Raises blood calcium"],
                ["Adrenals", "Adrenaline, cortisol, aldosterone", "Stress response; salt and water balance"],
                ["Pancreas (islets)", "Insulin, glucagon", "Control blood glucose"],
                ["Ovaries / testes", "Oestrogen, progesterone / testosterone", "Reproduction, secondary sex characteristics"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which gland's hormones mainly set the body's metabolic rate?",
                  options: ["Adrenal", "Thyroid", "Pancreas", "Parathyroid"],
                  answer: 1,
                  explain: "Thyroid hormones T₃ and T₄ regulate metabolic rate.",
                },
              ],
            },
            {
              type: "table",
              headers: ["", "Nervous system", "Endocrine system"],
              rows: [
                ["Signal", "Electrical impulses + neurotransmitters", "Hormones in the blood"],
                ["Speed", "Milliseconds", "Seconds to days"],
                ["Duration", "Short", "Often long-lasting"],
                ["Target", "Specific cells", "Any cell with the right receptor"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "**Steroid hormones** (cortisol, oestrogen, testosterone) are lipid-soluble and can cross the cell membrane to act on receptors inside. **Peptide hormones** (insulin, growth hormone) can't, so they bind receptors on the cell surface and trigger second messengers.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Since the 1980s, human insulin and growth hormone have been produced by genetically engineered microbes — among the first products of the biotech industry. Before that, insulin was extracted from animal pancreases.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Hormones act on every cell they reach.\" A hormone only affects cells with the matching **receptor**. That's how one bloodstream can carry dozens of different messages without confusion.",
            },
            {
              type: "keypoints",
              items: [
                "Endocrine glands release hormones into the blood.",
                "The hypothalamus–pituitary axis coordinates many other glands.",
                "Target cells need specific receptors; steroids act inside cells, peptides at the surface.",
              ],
            },
          ],
          flashcards: [
            { front: "Why the pituitary is called the master gland", back: "Its hormones control many other endocrine glands." },
            { front: "Hormone raising blood calcium", back: "Parathyroid hormone (PTH)." },
            { front: "Steroid vs peptide hormones", back: "Steroids enter cells; peptides bind surface receptors." },
            { front: "Adrenal medulla hormone", back: "Adrenaline (epinephrine)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which hormone is released by the adrenal glands during acute stress?",
              options: ["Insulin", "Adrenaline", "Thyroxine", "Oxytocin"],
              answer: 1,
              explain: "Adrenaline prepares the body for fight or flight.",
            },
            {
              kind: "truefalse",
              q: "Hormonal responses are generally faster than nervous responses.",
              answer: false,
              explain: "Nerve signals act in milliseconds; hormones take seconds to days.",
            },
            {
              kind: "multi",
              q: "Which are steroid hormones? (Select all.)",
              options: ["Cortisol", "Insulin", "Testosterone", "Oestrogen"],
              answers: [0, 2, 3],
              explain: "Insulin is a peptide hormone.",
            },
            {
              kind: "fill",
              q: "The brain region that links the nervous system to the pituitary is the ___.",
              answer: ["hypothalamus"],
              explain: "It releases hormones that control pituitary secretion.",
            },
          ],
        },
        {
          slug: "feedback-and-glucose",
          title: "Feedback Loops & Blood Glucose",
          summary: "Negative feedback, insulin and glucagon, and what goes wrong in diabetes.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "You eat a plate of rice and your blood sugar rises. Skip lunch and it should fall. Yet in a healthy person, fasting blood glucose stays remarkably steady — roughly **70–99 mg/dL** (about 3.9–5.5 mmol/L). The secret is **negative feedback**.",
            },
            {
              type: "illustration",
              emoji: "🌡️",
              caption: "Like a thermostat: sense a change, respond in the opposite direction, return to the set point.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Glucose rises** after a meal → pancreatic **beta cells** release **insulin**.",
                "Insulin helps muscle, fat and liver cells take up glucose; the liver stores it as **glycogen**.",
                "**Glucose falls** → **alpha cells** release **glucagon**.",
                "Glucagon signals the liver to break glycogen back into glucose.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Two hours after a large meal, which hormone is most elevated?",
                  options: ["Glucagon", "Insulin", "Adrenaline", "Growth hormone"],
                  answer: 1,
                  explain: "High glucose stimulates insulin release from beta cells.",
                },
              ],
            },
            {
              type: "table",
              headers: ["", "Type 1 diabetes", "Type 2 diabetes"],
              rows: [
                ["Cause", "Autoimmune destruction of beta cells", "Insulin resistance plus declining insulin output"],
                ["Typical onset", "Often childhood or young adulthood", "Usually adulthood (increasingly younger)"],
                ["Treatment basis", "Insulin is essential", "Lifestyle, oral or injectable medicines, sometimes insulin"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "**Positive feedback** amplifies a change instead — e.g. oxytocin during childbirth intensifies contractions until delivery. It's rarer, because unchecked amplification is usually dangerous.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Continuous glucose monitors (CGMs) read glucose every few minutes from a tiny sensor under the skin. Paired with an insulin pump and a control algorithm, they form **hybrid closed-loop** systems — an engineered negative-feedback loop standing in for the pancreas.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Diabetes is caused simply by eating sugar.\" Type 1 is autoimmune and unrelated to diet. Type 2 risk involves genetics, body weight, activity and overall diet — not sugar alone. (As always, individual questions belong with a doctor.)",
            },
            {
              type: "keypoints",
              items: [
                "Negative feedback restores a set point; positive feedback amplifies.",
                "Insulin lowers blood glucose; glucagon raises it.",
                "Type 1: no insulin production. Type 2: insulin resistance.",
              ],
            },
          ],
          flashcards: [
            { front: "Negative feedback", back: "A response that counteracts a change, returning to the set point." },
            { front: "Insulin", back: "From pancreatic beta cells; lowers blood glucose." },
            { front: "Glucagon", back: "From pancreatic alpha cells; raises blood glucose." },
            { front: "Glycogen", back: "Stored form of glucose in liver and muscle." },
            { front: "Positive feedback example", back: "Oxytocin and uterine contractions during childbirth." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which cells in the pancreas produce insulin?",
              options: ["Alpha cells", "Beta cells", "Acinar cells", "Delta cells"],
              answer: 1,
              explain: "Beta cells in the islets of Langerhans secrete insulin.",
            },
            {
              kind: "truefalse",
              q: "Body temperature control by sweating and shivering is an example of negative feedback.",
              answer: true,
              explain: "Each response pushes temperature back towards the set point.",
            },
            {
              kind: "order",
              q: "Order the response to low blood glucose.",
              items: ["Blood glucose falls", "Alpha cells release glucagon", "Liver breaks down glycogen", "Blood glucose rises to normal"],
              explain: "Sense the drop, release glucagon, mobilise stores, restore balance.",
            },
            {
              kind: "fill",
              q: "Type ___ diabetes results from autoimmune destruction of beta cells.",
              answer: ["1", "one"],
              explain: "The immune system attacks insulin-producing cells.",
            },
          ],
        },
      ],
    },
  ],
};
