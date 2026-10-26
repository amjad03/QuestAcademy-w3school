import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 11 Biology bank, part 3 (NEET / KCET): Breathing and Exchange of Gases,
 * Body Fluids and Circulation, Excretory Products and their Elimination,
 * Locomotion and Movement, Neural Control and Coordination,
 * Chemical Coordination and Integration.
 * All questions are original MCQs written close to NCERT lines. `a` is the 0-based answer index.
 */

const t = String.raw;

type Q = {
  d: 1 | 2 | 3;
  t: number;
  q: string;
  o: string[];
  a: number;
  e: string;
  h?: string;
  x?: ExamId[];
};

/** Standard NEET statement-I / statement-II options. */
const ST = [
  "Both Statement I and Statement II are correct",
  "Both Statement I and Statement II are incorrect",
  "Statement I is correct but Statement II is incorrect",
  "Statement I is incorrect but Statement II is correct",
];

/** Standard assertion–reason options. */
const AR = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];

function build(chapter: string, no: number, list: Q[]): ExamQuestion[] {
  return list.map(
    (it, i): ExamQuestion => ({
      id: `bio11-3-${no}-${String(i + 1).padStart(3, "0")}`,
      subject: "biology",
      chapter,
      grade: "11",
      exams: it.x ?? ["NEET", "KCET"],
      kind: "mcq",
      difficulty: it.d,
      idealTime: it.t,
      q: it.q,
      options: it.o,
      answer: it.a,
      explain: it.e,
      ...(it.h ? { hint: it.h } : {}),
    }),
  );
}

/* ================================================================== */
/* Chapter 14: Breathing and Exchange of Gases                         */
/* ================================================================== */

const CH14 = "Breathing and Exchange of Gases";

const ch14: Q[] = [
  {
    d: 1, t: 45,
    q: "In which of the following animals does exchange of gases take place by simple diffusion over the entire body surface?",
    o: ["Earthworm", "Cockroach", "Planaria (flatworm)", "Prawn"],
    a: 2,
    e: "Lower invertebrates such as sponges, coelenterates and flatworms exchange O₂ and CO₂ by simple diffusion over the whole body surface. Earthworms use their moist cuticle, insects (cockroach) use a network of tracheal tubes, and aquatic arthropods like prawn use gills.",
  },
  {
    d: 1, t: 45,
    q: "Which group of vertebrates can respire through both lungs and moist skin?",
    o: ["Reptiles", "Amphibians", "Birds", "Bony fishes"],
    a: 1,
    e: "Amphibians such as frogs respire through lungs and also through their moist skin (cutaneous respiration). Fishes use gills, while reptiles, birds and mammals respire only through lungs.",
  },
  {
    d: 1, t: 45,
    q: "The trachea divides into the right and left primary bronchi at the level of the:",
    o: ["5th thoracic vertebra", "7th cervical vertebra", "1st lumbar vertebra", "2nd thoracic vertebra"],
    a: 0,
    e: "The trachea is a straight tube extending up to the mid-thoracic cavity, where it divides at the level of the 5th thoracic vertebra into right and left primary bronchi.",
  },
  {
    d: 1, t: 45,
    q: "During swallowing, the glottis is covered by a thin elastic cartilaginous flap called the:",
    o: ["Larynx", "Epiglottis", "Uvula", "Pleura"],
    a: 1,
    e: "The epiglottis is a thin elastic cartilaginous flap that covers the glottis during swallowing and prevents food from entering the larynx. The larynx itself is the sound box; the pleura covers the lungs.",
  },
  {
    d: 1, t: 45,
    q: "The lungs are covered by a double-layered pleura. The fluid between the two layers:",
    o: [
      "Carries oxygen to the lung tissue",
      "Reduces friction on the lung surface",
      "Secretes surfactant into the alveoli",
      "Stores residual air",
    ],
    a: 1,
    e: "Pleural fluid lies between the two pleural membranes and reduces friction on the lung surface. The outer pleural membrane is in close contact with the thoracic lining and the inner one with the lung surface.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following parts forms the exchange (respiratory) part of the human respiratory system rather than the conducting part?",
    o: ["Trachea", "Primary bronchi", "Terminal bronchioles", "Alveoli and their ducts"],
    a: 3,
    e: "The conducting part runs from the external nostrils up to the terminal bronchioles; it transports, filters, warms and humidifies air. The alveoli and their ducts form the respiratory or exchange part, the site of actual diffusion of O₂ and CO₂.",
    h: "Exchange needs a very thin wall in contact with capillaries.",
  },
  {
    d: 2, t: 60,
    q: "The trachea, primary, secondary and tertiary bronchi and initial bronchioles are supported by:",
    o: [
      "Complete bony rings",
      "Incomplete cartilaginous rings",
      "Complete cartilaginous rings",
      "Smooth muscle bands only",
    ],
    a: 1,
    e: "These airways are supported by incomplete (C-shaped) cartilaginous rings, which keep them from collapsing while still allowing some flexibility. There are no bony rings in the airways.",
    h: "NCERT uses the word 'incomplete'.",
  },
  {
    d: 1, t: 45,
    q: "The volume of air inspired or expired during a normal respiration (tidal volume) in a healthy man is approximately:",
    o: ["1000 mL", "1200 mL", "500 mL", "2500 mL"],
    a: 2,
    e: "Tidal volume is about 500 mL, so a healthy man inspires or expires roughly 6000–8000 mL of air per minute. 1000–1100 mL is ERV, 1100–1200 mL is RV and 2500–3000 mL is IRV.",
  },
  {
    d: 2, t: 60,
    q: "Inspiration in humans is initiated by the contraction of the diaphragm, which increases the volume of the thoracic chamber in the:",
    o: ["Dorso-ventral axis", "Antero-posterior axis", "Lateral axis only", "Volume does not change"],
    a: 1,
    e: "Contraction of the dome-shaped diaphragm flattens it and increases thoracic volume in the antero-posterior axis. Contraction of the external intercostal muscles lifts the ribs and sternum, increasing volume in the dorso-ventral axis.",
    h: "Diaphragm and intercostals change different axes.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following is NOT a step of respiration as listed in NCERT?",
    o: [
      "Diffusion of gases across the alveolar membrane",
      "Transport of gases by the blood",
      "Utilisation of O₂ by cells for catabolic reactions",
      "Production of surfactant by alveolar cells",
    ],
    a: 3,
    e: "NCERT lists five steps: breathing (pulmonary ventilation), diffusion across the alveolar membrane, transport of gases by blood, diffusion of O₂ and CO₂ between blood and tissues, and use of O₂ by cells for catabolic reactions with release of CO₂. Surfactant production is not one of these steps.",
    h: "Recall the five steps, from breathing to cellular respiration.",
  },
  {
    d: 2, t: 75,
    q: t`Given TV = 500 mL, IRV = 2500 mL, ERV = 1000 mL and RV = 1200 mL, the vital capacity (VC) is:`,
    o: ["4000 mL", "5200 mL", "3000 mL", "2200 mL"],
    a: 0,
    e: t`$VC = ERV + TV + IRV = 1000 + 500 + 2500 = 4000$ mL. 5200 mL is the total lung capacity (VC + RV), 3000 mL is the inspiratory capacity (TV + IRV) and 2200 mL is the functional residual capacity (ERV + RV).`,
    h: "VC = the most air you can breathe out after the deepest breath in.",
  },
  {
    d: 2, t: 75,
    q: "Functional residual capacity (FRC) is the sum of:",
    o: ["TV + ERV", "ERV + RV", "TV + IRV", "IRV + ERV + TV"],
    a: 1,
    e: "FRC is the volume of air left in the lungs after a normal expiration, so FRC = ERV + RV. TV + ERV is expiratory capacity, TV + IRV is inspiratory capacity and IRV + ERV + TV is vital capacity.",
    h: "After a normal breath out, what air is still inside?",
  },
  {
    d: 2, t: 60,
    q: "Which of the following lung volumes CANNOT be measured directly with a simple spirometer?",
    o: ["Tidal volume", "Inspiratory reserve volume", "Residual volume", "Expiratory reserve volume"],
    a: 2,
    e: "Residual volume stays in the lungs even after a forceful expiration, so it never enters the spirometer. For the same reason, capacities that include RV (FRC, TLC) cannot be measured directly either. TV, IRV and ERV are all breathed in or out and can be recorded.",
    h: "Which air never leaves the lungs?",
  },
  {
    d: 1, t: 45,
    q: "The partial pressure of oxygen (pO₂) in the alveoli is about:",
    o: ["159 mm Hg", "104 mm Hg", "95 mm Hg", "40 mm Hg"],
    a: 1,
    e: "Alveolar pO₂ is about 104 mm Hg. 159 mm Hg is atmospheric pO₂, 95 mm Hg is oxygenated blood and 40 mm Hg is deoxygenated blood and tissues.",
  },
  {
    d: 2, t: 60,
    q: "The pCO₂ values (in mm Hg) of deoxygenated blood and of alveolar air respectively are:",
    o: ["45 and 40", "40 and 45", "40 and 0.3", "95 and 40"],
    a: 0,
    e: "Deoxygenated blood has pCO₂ = 45 mm Hg and alveolar air has pCO₂ = 40 mm Hg, so CO₂ diffuses from blood into the alveoli. Atmospheric pCO₂ is only about 0.3 mm Hg.",
    h: "CO₂ must flow from blood to alveoli.",
  },
  {
    d: 2, t: 60,
    q: "Although the pCO₂ gradient between blood and alveoli (45 → 40 mm Hg) is much smaller than the pO₂ gradient, enough CO₂ diffuses out because:",
    o: [
      "CO₂ is actively pumped out by alveolar cells",
      "The solubility of CO₂ is 20–25 times higher than that of O₂",
      "CO₂ is a smaller molecule than O₂",
      "The diffusion membrane is thinner for CO₂",
    ],
    a: 1,
    e: "Solubility affects the rate of diffusion. CO₂ is 20–25 times more soluble than O₂, so the amount of CO₂ that can diffuse per unit difference in partial pressure is much higher. Gas exchange is passive diffusion; there is no pump, and the membrane is the same for both gases.",
    h: "Diffusion depends on the pressure gradient, the solubility and the membrane thickness.",
  },
  {
    d: 2, t: 60,
    q: "The diffusion membrane in the alveoli is made of three major layers. Which of the following is NOT one of them?",
    o: [
      "Thin squamous epithelium of the alveoli",
      "Endothelium of the alveolar capillaries",
      "Basement substance between them",
      "Ciliated columnar epithelium",
    ],
    a: 3,
    e: "The diffusion membrane is made of the thin squamous alveolar epithelium, the endothelium of alveolar capillaries and the basement substance between them. Its total thickness is much less than a millimetre. Ciliated epithelium lines the conducting airways, not the alveoli.",
    h: "A diffusion surface must be as thin as possible.",
  },
  {
    d: 1, t: 45,
    q: "About what percentage of O₂ is transported by RBCs in the blood?",
    o: ["3 per cent", "70 per cent", "97 per cent", "20–25 per cent"],
    a: 2,
    e: "About 97% of O₂ is carried by RBCs (as oxyhaemoglobin) and the remaining 3% is carried dissolved in plasma.",
  },
  {
    d: 1, t: 45,
    q: "The maximum number of O₂ molecules that one haemoglobin molecule can carry is:",
    o: ["One", "Two", "Four", "Eight"],
    a: 2,
    e: "Haemoglobin has four haem groups (four subunits), so each haemoglobin molecule can carry a maximum of four molecules of O₂.",
  },
  {
    d: 2, t: 75,
    q: "Which set of conditions in the alveoli favours the formation of oxyhaemoglobin?",
    o: [
      "High pO₂, high pCO₂, high H⁺, high temperature",
      "High pO₂, low pCO₂, low H⁺, low temperature",
      "Low pO₂, high pCO₂, high H⁺, high temperature",
      "Low pO₂, low pCO₂, low H⁺, low temperature",
    ],
    a: 1,
    e: "In the alveoli, high pO₂, low pCO₂, lower H⁺ concentration and lower temperature favour the binding of O₂ to haemoglobin. The opposite conditions found in the tissues (low pO₂, high pCO₂, high H⁺, higher temperature) favour dissociation of O₂.",
    h: "Think of what the lungs are like compared with active muscle.",
  },
  {
    d: 2, t: 60,
    q: "The oxygen dissociation curve of haemoglobin, obtained by plotting % saturation of Hb against pO₂, is:",
    o: ["Linear", "Hyperbolic", "Sigmoid", "Parabolic, falling at high pO₂"],
    a: 2,
    e: "The curve is sigmoid (S-shaped). It is very useful for studying the effect of factors such as pCO₂ and H⁺ concentration on the binding of O₂ with haemoglobin.",
    h: "Its shape resembles the letter S.",
  },
  {
    d: 2, t: 60,
    q: "Under normal physiological conditions, every 100 mL of oxygenated blood delivers about ____ of O₂ to the tissues.",
    o: ["4 mL", "5 mL", "20 mL", "50 mL"],
    a: 1,
    e: "Every 100 mL of oxygenated blood delivers around 5 mL of O₂ to the tissues. In contrast, every 100 mL of deoxygenated blood delivers about 4 mL of CO₂ to the alveoli; 4 mL is the tempting mix-up.",
    h: "O₂ delivered is 5 mL; CO₂ delivered is 4 mL.",
  },
  {
    d: 2, t: 60,
    q: "About 70 per cent of CO₂ is transported in the blood as:",
    o: ["Carbamino-haemoglobin", "Dissolved CO₂ in plasma", "Bicarbonate", "Carbonic acid in RBCs only"],
    a: 2,
    e: "About 70% of CO₂ is carried as bicarbonate, 20–25% as carbamino-haemoglobin in RBCs and about 7% dissolved in plasma.",
    h: "The largest share is the product of carbonic anhydrase action.",
  },
  {
    d: 2, t: 75,
    q: "The enzyme carbonic anhydrase is found in high concentration in:",
    o: ["Plasma", "RBCs", "Alveolar epithelium", "WBCs"],
    a: 1,
    e: "Carbonic anhydrase is present in very high concentration in RBCs and in minute quantities in plasma. It catalyses CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺ in both directions: towards bicarbonate in the tissues and back to CO₂ in the alveoli.",
    h: "Most bicarbonate is formed inside a blood cell.",
  },
  {
    d: 3, t: 90,
    q: "In the tissues pCO₂ is high and pO₂ is low. Which of the following correctly describes what happens to CO₂ binding to haemoglobin there and in the alveoli?",
    o: [
      "More CO₂ binds in tissues; in alveoli low pCO₂ and high pO₂ cause CO₂ to dissociate from carbamino-haemoglobin",
      "Less CO₂ binds in tissues; in alveoli high pO₂ promotes more CO₂ binding",
      "CO₂ binding is independent of pO₂ and pCO₂",
      "CO₂ binds the haem iron, competing directly with O₂ in both places",
    ],
    a: 0,
    e: "Carbamino-haemoglobin formation depends on the partial pressure of CO₂; pO₂ also affects it. In tissues, high pCO₂ and low pO₂ favour more CO₂ binding. In the alveoli, low pCO₂ and high pO₂ cause CO₂ to dissociate, so it is released. CO₂ binds the protein (amino groups), not the haem iron, so option D is wrong.",
    h: "Conditions in the tissues are the opposite of those in the alveoli, for both gases.",
  },
  {
    d: 1, t: 45,
    q: "The respiratory rhythm centre is located in the:",
    o: ["Pons", "Medulla oblongata", "Hypothalamus", "Cerebellum"],
    a: 1,
    e: "The respiratory rhythm centre is present in the medulla region of the brain and is primarily responsible for the regulation of breathing. The pneumotaxic centre in the pons moderates it.",
  },
  {
    d: 2, t: 60,
    q: "A neural signal from the pneumotaxic centre can:",
    o: [
      "Increase the duration of inspiration",
      "Reduce the duration of inspiration and thereby alter the respiratory rate",
      "Stop breathing completely",
      "Directly sense the blood O₂ level",
    ],
    a: 1,
    e: "The pneumotaxic centre in the pons moderates the rhythm centre. Its neural signal reduces the duration of inspiration and thereby alters the respiratory rate. It does not sense O₂; chemoreceptors do the sensing.",
    h: "It shortens something.",
  },
  {
    d: 2, t: 60,
    q: "The chemosensitive area adjacent to the rhythm centre is highly sensitive to:",
    o: ["O₂ and CO₂", "CO₂ and hydrogen ions", "O₂ only", "Na⁺ and K⁺"],
    a: 1,
    e: "The chemosensitive area is highly sensitive to CO₂ and hydrogen ions. An increase in these activates the centre, which signals the rhythm centre to make adjustments so these substances can be eliminated. NCERT notes that the role of O₂ in regulating respiratory rhythm is quite insignificant.",
    h: "The role of O₂ is described as insignificant.",
  },
  {
    d: 3, t: 90,
    q: t`**Assertion (A):** A person holding the breath for a long time is finally forced to breathe, mainly because blood O₂ falls.
**Reason (R):** Receptors in the aortic arch and carotid artery recognise changes in CO₂ and H⁺ concentration.`,
    o: AR,
    a: 3,
    e: "A is false: the urge to breathe is driven mainly by rising CO₂ and H⁺, which the chemosensitive area and the aortic and carotid receptors detect; NCERT calls the role of O₂ quite insignificant. R is true: receptors associated with the aortic arch and carotid artery can recognise changes in CO₂ and H⁺ and send signals to the rhythm centre.",
    h: "Which gas does the brain monitor most closely?",
  },
  {
    d: 1, t: 45,
    q: "Asthma is a difficulty in breathing that causes wheezing due to:",
    o: [
      "Damage to alveolar walls",
      "Inflammation of bronchi and bronchioles",
      "Fibrosis of lung tissue due to silica",
      "Accumulation of fluid in the pleura",
    ],
    a: 1,
    e: "Asthma is a difficulty in breathing that causes wheezing due to inflammation of the bronchi and bronchioles. Damage to alveolar walls is emphysema, and fibrosis from silica or asbestos dust is an occupational disorder.",
  },
  {
    d: 2, t: 60,
    q: "Emphysema is a chronic disorder in which:",
    o: [
      "Bronchioles are inflamed",
      "Alveolar walls are damaged, so the respiratory surface decreases",
      "The diaphragm is paralysed",
      "Haemoglobin cannot bind O₂",
    ],
    a: 1,
    e: "In emphysema the alveolar walls are damaged and the respiratory surface decreases. Cigarette smoking is one of its major causes.",
    h: "Fewer, larger air spaces mean less surface.",
  },
  {
    d: 2, t: 60,
    q: "Workers in stone-grinding or stone-breaking industries may suffer serious lung damage. This occupational disorder results mainly in:",
    o: [
      "Inflammation that leads to fibrosis (proliferation of fibrous tissue) of the upper part of the lung",
      "Increase in the number of alveoli",
      "Excess surfactant production",
      "Collapse of the trachea",
    ],
    a: 0,
    e: "Long exposure to dust such as silica or asbestos gives rise to inflammation leading to fibrosis (proliferation of fibrous tissues), which causes serious lung damage. Workers in such industries should wear protective masks.",
    h: "Dust is the irritant; scar tissue is the result.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** In mammals, expiration takes place when the intra-pulmonary pressure becomes higher than the atmospheric pressure.
**Statement II:** Additional muscles in the abdomen can increase the strength of inspiration and expiration.`,
    o: ST,
    a: 0,
    e: "Both are correct. Relaxation of the diaphragm and intercostal muscles reduces the thoracic and pulmonary volume, raising intra-pulmonary pressure slightly above atmospheric pressure, so air is expelled (expiration). NCERT also states that additional muscles in the abdomen can increase the strength of inspiration and expiration.",
    h: "Air always moves from higher to lower pressure.",
  },
  {
    d: 3, t: 90,
    q: t`Match the respiratory volumes or capacities (Column I) with their values in a healthy adult (Column II):
(a) Inspiratory reserve volume — (i) 1100–1200 mL
(b) Expiratory reserve volume — (ii) 2500–3000 mL
(c) Residual volume — (iii) 500 mL
(d) Tidal volume — (iv) 1000–1100 mL`,
    o: [
      "a-ii, b-iv, c-i, d-iii",
      "a-ii, b-i, c-iv, d-iii",
      "a-iv, b-ii, c-i, d-iii",
      "a-iii, b-iv, c-i, d-ii",
    ],
    a: 0,
    e: "IRV = 2500–3000 mL, ERV = 1000–1100 mL, RV = 1100–1200 mL and TV = 500 mL. A common slip is to swap ERV and RV, which have close values; the RV is slightly larger.",
    h: "RV is slightly larger than ERV.",
  },
  {
    d: 3, t: 120,
    q: t`A person has TV = 500 mL, IRV = 3000 mL, ERV = 1100 mL and RV = 1200 mL, and breathes 14 times a minute. Which of the following is correct?`,
    o: [
      "Total lung capacity = 5800 mL; pulmonary ventilation = 7000 mL/min",
      "Total lung capacity = 4600 mL; pulmonary ventilation = 7000 mL/min",
      "Total lung capacity = 5800 mL; pulmonary ventilation = 6000 mL/min",
      "Inspiratory capacity = 4100 mL; expiratory capacity = 1600 mL",
    ],
    a: 0,
    e: t`$TLC = RV + ERV + TV + IRV = 1200 + 1100 + 500 + 3000 = 5800$ mL. Minute ventilation $= TV \times \text{rate} = 500 \times 14 = 7000$ mL/min. 4600 mL is the vital capacity (TLC without RV). Inspiratory capacity is $TV + IRV = 3500$ mL (not 4100), while expiratory capacity is $TV + ERV = 1600$ mL, so option D is wrong in its first part.`,
    h: "TLC includes RV; IC = TV + IRV.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** In the alveoli, pO₂ (104 mm Hg) is higher than in deoxygenated blood (40 mm Hg), so O₂ diffuses into the blood.
**Statement II:** In the tissues, pCO₂ (45 mm Hg) is lower than in oxygenated blood (40 mm Hg), so CO₂ diffuses from blood into the tissues.`,
    o: ST,
    a: 2,
    e: "Statement I is correct. Statement II is wrong: tissue pCO₂ (45 mm Hg) is higher than that of oxygenated blood (40 mm Hg), so CO₂ diffuses from the tissues into the blood, not the other way. (45 is not lower than 40.)",
    h: "Compare the numbers given in Statement II.",
  },
  {
    d: 3, t: 90,
    q: t`**Assertion (A):** A healthy human breathes 12–16 times a minute even during sleep, without conscious effort.
**Reason (R):** Human beings can moderate respiratory rhythm to suit tissue demands through the respiratory centres in the medulla and pons.`,
    o: AR,
    a: 0,
    e: "Both are true, and R explains A. Rhythmic breathing continues without conscious effort because the respiratory rhythm centre in the medulla, moderated by the pneumotaxic centre in the pons, automatically keeps up and adjusts breathing to match the body's needs.",
    h: "Who sets the rhythm when you are asleep?",
  },
];

/* ================================================================== */
/* Chapter 15: Body Fluids and Circulation                             */
/* ================================================================== */

const CH15 = "Body Fluids and Circulation";

const ch15: Q[] = [
  {
    d: 1, t: 45,
    q: "Plasma forms about what percentage of the blood?",
    o: ["45 per cent", "55 per cent", "90 per cent", "25 per cent"],
    a: 1,
    e: "Plasma is a straw-coloured, viscous fluid making up nearly 55% of the blood. Formed elements (RBCs, WBCs, platelets) make up the remaining 45%. Water forms 90–92% of the plasma itself.",
  },
  {
    d: 1, t: 45,
    q: "Which plasma protein is mainly responsible for maintaining osmotic balance?",
    o: ["Fibrinogen", "Globulin", "Albumin", "Thrombin"],
    a: 2,
    e: "Albumins help in osmotic balance. Fibrinogen is needed for clotting and globulins are involved mainly in the defence mechanisms of the body. Thrombin is an enzyme formed during clotting, not a regular plasma protein.",
  },
  {
    d: 1, t: 45,
    q: "Plasma without the clotting factors is called:",
    o: ["Lymph", "Serum", "Tissue fluid", "Haemolymph"],
    a: 1,
    e: "Plasma from which the clotting factors have been removed is called serum.",
  },
  {
    d: 1, t: 45,
    q: "A healthy adult man has, on average, how many RBCs per cubic millimetre of blood?",
    o: ["5 to 5.5 million", "6000 to 8000", "1.5 to 3.5 lakh", "50 to 55 thousand"],
    a: 0,
    e: "RBCs number 5–5.5 million per mm³. WBCs are 6000–8000 per mm³ and platelets 1,50,000–3,50,000 per mm³.",
  },
  {
    d: 2, t: 60,
    q: "In adults, RBCs are formed in the ______ and have an average life span of ______; they are destroyed in the ______.",
    o: [
      "Liver; 120 days; kidney",
      "Red bone marrow; 120 days; spleen",
      "Spleen; 90 days; liver",
      "Red bone marrow; 30 days; lymph nodes",
    ],
    a: 1,
    e: "RBCs are formed in the red bone marrow in adults, live about 120 days and are destroyed in the spleen, which is therefore called the graveyard of RBCs.",
    h: "The spleen is the 'graveyard' of RBCs.",
  },
  {
    d: 1, t: 45,
    q: "A healthy individual has how much haemoglobin per 100 mL of blood?",
    o: ["5–8 g", "12–16 g", "20–25 g", "1–2 g"],
    a: 1,
    e: "Haemoglobin, a red iron-containing complex protein, is present at 12–16 g per 100 mL of blood in a healthy individual.",
  },
  {
    d: 2, t: 60,
    q: "Which is the most abundant and which the least abundant type of WBC respectively?",
    o: [
      "Lymphocytes and eosinophils",
      "Neutrophils and basophils",
      "Neutrophils and monocytes",
      "Monocytes and basophils",
    ],
    a: 1,
    e: "Neutrophils are the most abundant WBCs (60–65%) and basophils the least (0.5–1%). Lymphocytes are 20–25%, monocytes 6–8% and eosinophils 2–3%.",
    h: "The least abundant one secretes histamine.",
  },
  {
    d: 2, t: 60,
    q: "Which WBCs secrete histamine, serotonin and heparin and are involved in inflammatory reactions?",
    o: ["Eosinophils", "Neutrophils", "Basophils", "Lymphocytes"],
    a: 2,
    e: "Basophils secrete histamine, serotonin and heparin and are involved in inflammatory reactions. Eosinophils resist infections and are associated with allergic reactions; neutrophils and monocytes are phagocytic.",
    h: "These are the rarest WBCs.",
  },
  {
    d: 2, t: 60,
    q: "Which two types of WBCs are phagocytic cells that destroy foreign organisms entering the body?",
    o: [
      "Neutrophils and monocytes",
      "Basophils and eosinophils",
      "B- and T-lymphocytes",
      "Eosinophils and lymphocytes",
    ],
    a: 0,
    e: "Neutrophils and monocytes are phagocytic cells. Lymphocytes (B and T) are responsible for immune responses, basophils for inflammation, and eosinophils for resisting infections and allergic reactions.",
    h: "Phagocytes engulf; lymphocytes make immune responses.",
  },
  {
    d: 1, t: 45,
    q: "Blood platelets are cell fragments produced from:",
    o: ["Megakaryocytes", "Lymphoblasts", "Erythroblasts", "Mast cells"],
    a: 0,
    e: "Platelets (thrombocytes) are cell fragments produced from megakaryocytes, special cells in the bone marrow. A reduction in their number can lead to clotting disorders and excessive loss of blood.",
  },
  {
    d: 2, t: 60,
    q: "A person of blood group B has:",
    o: [
      "Antigen B on RBCs and anti-A antibodies in plasma",
      "Antigen A on RBCs and anti-B antibodies in plasma",
      "Antigen B on RBCs and anti-B antibodies in plasma",
      "No antigens on RBCs and both antibodies in plasma",
    ],
    a: 0,
    e: "Group B has antigen B on the RBC surface and anti-A antibodies in the plasma. Having anti-B with antigen B would make the person's own blood clump. No antigens with both antibodies is group O.",
    h: "A person never carries antibodies against their own antigen.",
  },
  {
    d: 2, t: 60,
    q: "Persons with blood group AB are called 'universal recipients' because:",
    o: [
      "Their RBCs lack both A and B antigens",
      "Their plasma has no anti-A or anti-B antibodies",
      "Their plasma has both anti-A and anti-B antibodies",
      "They are always Rh negative",
    ],
    a: 1,
    e: "Group AB plasma has no antibodies against A or B, so it does not agglutinate donated RBCs of any ABO group. Group O RBCs lack both antigens, which makes group O the universal donor.",
    h: "The recipient's plasma reacts with the donor's cells.",
  },
  {
    d: 1, t: 45,
    q: "Nearly what percentage of humans are Rh positive?",
    o: ["20 per cent", "50 per cent", "80 per cent", "99 per cent"],
    a: 2,
    e: "Nearly 80% of humans have the Rh antigen (similar to that of Rhesus monkeys) on their RBCs and are Rh positive; the rest are Rh negative.",
  },
  {
    d: 3, t: 90,
    q: t`**Assertion (A):** Erythroblastosis foetalis usually does not affect the first Rh⁺ child of an Rh⁻ mother.
**Reason (R):** In the first pregnancy the Rh antigens of the foetus are not exposed to the mother's blood, because the two bloods are separated by the placenta.`,
    o: AR,
    a: 0,
    e: "Both are true and R explains A. The placenta keeps the two bloods apart during the first pregnancy. During delivery a small amount of foetal Rh⁺ blood can mix with the mother's blood and she starts making anti-Rh antibodies. In later pregnancies these antibodies can leak into the Rh⁺ foetus and destroy its RBCs, causing severe anaemia and jaundice. Giving anti-Rh antibodies to the mother right after the first delivery prevents this.",
    h: "When is the mother first exposed to foetal blood?",
  },
  {
    d: 2, t: 75,
    q: "During blood coagulation, the thrombokinase complex converts:",
    o: [
      "Fibrinogen into fibrin",
      "Prothrombin into thrombin",
      "Thrombin into fibrin",
      "Fibrin into fibrinogen",
    ],
    a: 1,
    e: "Thrombokinase converts inactive prothrombin into active thrombin. Thrombin then converts soluble fibrinogen into insoluble fibrin threads that trap formed elements to form a clot. Calcium ions play a very important role in clotting.",
    h: "Thrombokinase acts one step before fibrin formation.",
  },
  {
    d: 2, t: 60,
    q: "Which ion plays a very important role in blood clotting?",
    o: ["Na⁺", "K⁺", "Ca²⁺", "Mg²⁺"],
    a: 2,
    e: "Calcium ions play a very important role in clotting. That is why calcium-binding agents such as citrate or oxalate are used to keep stored blood from clotting.",
    h: "Blood banks remove it to stop clotting.",
  },
  {
    d: 2, t: 60,
    q: "Fats absorbed in the small intestine are transported through the lymph in the:",
    o: ["Blood capillaries of villi", "Lacteals in the intestinal villi", "Hepatic portal vein", "Pulmonary vein"],
    a: 1,
    e: "Lacteals, the lymph vessels in the intestinal villi, absorb and transport fats. Lymph is an important carrier of nutrients and hormones. Products such as glucose and amino acids go through the blood capillaries to the hepatic portal vein.",
    h: "Lymph vessels inside villi have a special name.",
  },
  {
    d: 1, t: 45,
    q: "An open circulatory system is found in:",
    o: ["Annelids and chordates", "Arthropods and molluscs", "Birds and mammals", "Fishes and amphibians"],
    a: 1,
    e: "Arthropods and molluscs have an open circulatory system, in which blood pumped by the heart flows through large vessels into open spaces or cavities called sinuses. Annelids and chordates have a closed circulatory system.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following animals has a four-chambered heart?",
    o: ["Frog", "Lizard", "Crocodile", "Shark"],
    a: 2,
    e: "Crocodiles, birds and mammals have a four-chambered heart. Amphibians and reptiles other than crocodiles have three chambers (two atria, one ventricle); fishes have two.",
    h: "Remember the reptile exception.",
  },
  {
    d: 2, t: 60,
    q: "Incomplete double circulation is seen in:",
    o: ["Fishes", "Birds", "Amphibians and most reptiles", "Mammals"],
    a: 2,
    e: "In amphibians and reptiles (other than crocodiles), the left atrium receives oxygenated blood and the right atrium deoxygenated blood, but both empty into a single ventricle where they mix, so circulation is incomplete double. Fishes have single circulation, and birds and mammals have complete double circulation.",
    h: "Where does the single ventricle mix the blood?",
  },
  {
    d: 1, t: 45,
    q: "The valve between the right atrium and the right ventricle is the:",
    o: ["Bicuspid valve", "Tricuspid valve", "Mitral valve", "Semilunar valve"],
    a: 1,
    e: "The opening between the right atrium and right ventricle is guarded by the tricuspid valve, made of three muscular flaps or cusps. The left atrio-ventricular valve is the bicuspid (mitral) valve. Semilunar valves guard the openings of the pulmonary artery and the aorta.",
  },
  {
    d: 2, t: 60,
    q: "The SA node of the human heart is located in the:",
    o: [
      "Lower left corner of the right atrium",
      "Right upper corner of the right atrium",
      "Upper part of the interventricular septum",
      "Wall of the left atrium",
    ],
    a: 1,
    e: "The sino-atrial node (SAN) is a patch of nodal tissue in the right upper corner of the right atrium. The atrio-ventricular node (AVN) lies in the lower left corner of the right atrium, close to the atrio-ventricular septum.",
    h: "SAN is up, AVN is down, both in the right atrium.",
  },
  {
    d: 2, t: 60,
    q: "The SA node is called the pacemaker of the heart because it:",
    o: [
      "Is located in the left ventricle",
      "Generates the maximum number of action potentials, 70–75 per minute",
      "Is the only tissue that can contract",
      "Receives nerve signals directly from the cerebrum",
    ],
    a: 1,
    e: "The SAN generates the maximum number of action potentials (70–75 per minute), initiating and maintaining the rhythmic contractions of the heart, so it sets the pace. Nodal tissue is autoexcitable; the heart is myogenic and does not depend on the cerebrum.",
    h: "The fastest generator sets the rhythm.",
  },
  {
    d: 2, t: 75,
    q: "Choose the correct sequence of the conducting pathway in the heart:",
    o: [
      "SAN → AVN → bundle of His → bundle branches → Purkinje fibres",
      "AVN → SAN → bundle of His → Purkinje fibres → bundle branches",
      "SAN → bundle of His → AVN → Purkinje fibres → bundle branches",
      "Purkinje fibres → bundle of His → AVN → SAN",
    ],
    a: 0,
    e: "The impulse starts at the SAN, spreads over the atria to the AVN, then passes along the AV bundle (bundle of His), which divides into right and left bundle branches. These give rise to minute Purkinje fibres throughout the ventricular musculature.",
    h: "Purkinje fibres are the last, finest branches.",
  },
  {
    d: 1, t: 45,
    q: "The duration of one cardiac cycle in a normal person (72 beats per minute) is:",
    o: ["0.8 s", "0.08 s", "1.2 s", "0.5 s"],
    a: 0,
    e: "With 72 cycles per minute, one cardiac cycle lasts 60/72 ≈ 0.8 s.",
  },
  {
    d: 2, t: 75,
    q: "During joint diastole the ventricles fill with blood. About what fraction of ventricular filling is due to atrial systole?",
    o: ["About 70 per cent", "About 30 per cent", "About 5 per cent", "About 100 per cent"],
    a: 1,
    e: "Most ventricular filling (about 70%) happens passively during joint diastole, when the tricuspid and bicuspid valves are open. Atrial systole then increases the flow into the ventricles by about 30%.",
    h: "Most filling is passive.",
  },
  {
    d: 2, t: 75,
    q: "If the stroke volume is 70 mL and the heart rate is 72 per minute, the cardiac output is about:",
    o: ["5040 mL per minute", "142 mL per minute", "720 mL per minute", "70 mL per minute"],
    a: 0,
    e: "Cardiac output = stroke volume × heart rate = 70 × 72 = 5040 mL per minute ≈ 5 L/min, which NCERT gives as about 5000 mL in a healthy individual.",
    h: "Multiply the two numbers.",
  },
  {
    d: 2, t: 60,
    q: "The first heart sound 'lub' is produced by:",
    o: [
      "Closure of the semilunar valves",
      "Closure of the tricuspid and bicuspid valves",
      "Opening of the semilunar valves",
      "Contraction of the atria",
    ],
    a: 1,
    e: "'Lub' is associated with the closure of the tricuspid and bicuspid (AV) valves at the start of ventricular systole. 'Dub' is associated with the closure of the semilunar valves at the start of ventricular diastole.",
    h: "First sound = first valves to shut as the ventricles start to contract.",
  },
  {
    d: 2, t: 60,
    q: "In a standard ECG, the QRS complex represents:",
    o: [
      "Depolarisation of the atria",
      "Repolarisation of the ventricles",
      "Depolarisation of the ventricles",
      "Repolarisation of the atria",
    ],
    a: 2,
    e: "The P-wave is the electrical excitation (depolarisation) of the atria; the QRS complex is depolarisation of the ventricles, which starts ventricular contraction; the T-wave is the return of the ventricles from the excited to the normal state (repolarisation).",
    h: "QRS comes just before ventricular systole.",
  },
  {
    d: 2, t: 60,
    q: "The end of the T-wave in an ECG marks:",
    o: [
      "The beginning of atrial systole",
      "The end of ventricular systole",
      "The start of ventricular contraction",
      "The opening of AV valves due to atrial contraction",
    ],
    a: 1,
    e: "The T-wave is ventricular repolarisation, and NCERT states that the end of the T-wave marks the end of systole. Counting the QRS complexes in a given time gives the heart rate.",
    h: "Repolarisation leads to relaxation.",
  },
  {
    d: 1, t: 45,
    q: "The vessel that carries blood from the intestine to the liver before it reaches the systemic circulation is the:",
    o: ["Hepatic artery", "Hepatic vein", "Hepatic portal vein", "Coronary artery"],
    a: 2,
    e: "The hepatic portal vein carries blood from the intestine to the liver; this is the hepatic portal system. The hepatic vein drains the liver into the vena cava, and the coronary system supplies the heart muscle itself.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** The normal activities of the heart are regulated intrinsically, so the human heart is called myogenic.
**Statement II:** Neural signals through the sympathetic nerves decrease the rate of heart beat and the cardiac output.`,
    o: ST,
    a: 2,
    e: "Statement I is correct: the heart is auto-regulated by specialised muscles (nodal tissue). Statement II is wrong: sympathetic signals increase the rate of heart beat, the strength of ventricular contraction and the cardiac output. Parasympathetic signals decrease them. Adrenal medullary hormones also increase cardiac output.",
    h: "Sympathetic = fight or flight.",
  },
  {
    d: 2, t: 60,
    q: "Blood pressure is said to be high (hypertension) when it repeatedly measures:",
    o: ["120/80 mm Hg", "140/90 mm Hg or higher", "100/60 mm Hg", "110/70 mm Hg"],
    a: 1,
    e: "Normal blood pressure is 120/80 mm Hg (systolic/diastolic). Repeated readings of 140/90 mm Hg or higher indicate hypertension, which can lead to heart diseases and also affects vital organs such as the brain and kidneys.",
    h: "Hypertension is above the normal 120/80.",
  },
  {
    d: 3, t: 90,
    q: t`Match the disorders (Column I) with their descriptions (Column II):
(a) Coronary artery disease — (i) Acute chest pain due to insufficient O₂ reaching heart muscle
(b) Angina pectoris — (ii) Heart not pumping blood effectively; congestion of lungs
(c) Heart failure — (iii) Heart muscle suddenly damaged by inadequate blood supply
(d) Heart attack — (iv) Deposits of calcium, fat and cholesterol narrow the vessels supplying the heart`,
    o: [
      "a-iv, b-i, c-ii, d-iii",
      "a-i, b-iv, c-ii, d-iii",
      "a-iv, b-i, c-iii, d-ii",
      "a-ii, b-i, c-iv, d-iii",
    ],
    a: 0,
    e: "CAD (atherosclerosis) is narrowing of the coronary vessels by deposits of calcium, fat, cholesterol and fibrous tissue. Angina is acute chest pain when not enough O₂ reaches the heart muscle. Heart failure is the heart not pumping effectively, often with lung congestion (congestive heart failure). A heart attack is sudden damage to heart muscle from inadequate blood supply. Neither heart failure nor heart attack is the same as cardiac arrest, in which the heart stops beating.",
    h: "Congestion of the lungs is the main symptom of heart failure.",
  },
  {
    d: 3, t: 90,
    q: t`**Assertion (A):** Mixing of oxygenated and deoxygenated blood does not occur in the human heart.
**Reason (R):** The interventricular septum and the interatrial septum completely separate the left and right sides of the heart.`,
    o: AR,
    a: 0,
    e: "Both are true and R explains A. In humans the atria are separated by the thin muscular interatrial septum and the ventricles by the thick-walled interventricular septum, so the oxygenated (left) and deoxygenated (right) blood never mix. This gives complete double circulation.",
    h: "What separates the two sides of a four-chambered heart?",
  },
  {
    d: 3, t: 90,
    q: "A person with blood group O⁻ needs a transfusion. A friend with blood group A⁺ offers to donate. The transfusion is unsafe because:",
    o: [
      "The recipient's plasma has anti-A antibodies, and the Rh⁺ antigen can sensitise the Rh⁻ recipient",
      "The donor's plasma has anti-O antibodies",
      "Group O people cannot receive blood of any group, even group O",
      "Rh factor has no role in transfusion, but A antigen does",
    ],
    a: 0,
    e: "Group O plasma has both anti-A and anti-B antibodies, so the A antigen on the donor's RBCs would cause agglutination. In addition, an Rh⁻ person exposed to Rh⁺ blood forms antibodies against the Rh antigen, so Rh grouping must also be matched. There is no 'O antigen', and group O people can safely receive group O blood.",
    h: "Check both the ABO and the Rh compatibility.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** The ventricular systole forces the semilunar valves to open, releasing blood into the pulmonary artery and the aorta.
**Statement II:** As the ventricular pressure falls during ventricular diastole, the semilunar valves close and back-flow of blood into the ventricles is prevented.`,
    o: ST,
    a: 0,
    e: "Both are correct. Rising ventricular pressure during systole first closes the AV valves and then forces open the semilunar valves. When the ventricles relax, their pressure falls, the semilunar valves close (the 'dub' sound) and back-flow is prevented.",
    h: "Valves open and close in response to pressure differences.",
  },
  {
    d: 3, t: 90,
    q: "An ECG shows 15 QRS complexes in 12 seconds. The person's heart rate is:",
    o: ["60 per minute", "75 per minute", "90 per minute", "72 per minute"],
    a: 1,
    e: "Each QRS complex is one ventricular contraction. 15 beats in 12 s means 15 × (60/12) = 15 × 5 = 75 beats per minute. 72 is the textbook average, not this person's rate.",
    h: "Scale 12 s up to 60 s.",
  },
];

/* ================================================================== */
/* Chapter 16: Excretory Products and their Elimination                */
/* ================================================================== */

const CH16 = "Excretory Products and their Elimination";

const ch16: Q[] = [
  {
    d: 1, t: 45,
    q: "Which of the following nitrogenous wastes needs the largest amount of water for its elimination?",
    o: ["Uric acid", "Urea", "Ammonia", "Guanine"],
    a: 2,
    e: "Ammonia is the most toxic nitrogenous waste and needs a large amount of water for its elimination. Urea is less toxic and needs less water; uric acid is the least toxic and can be removed as pellets or paste with minimal water loss.",
  },
  {
    d: 1, t: 45,
    q: "Ammonotelism is seen in:",
    o: ["Birds", "Bony fishes, aquatic amphibians and aquatic insects", "Mammals", "Land snails"],
    a: 1,
    e: "Many bony fishes, aquatic amphibians and aquatic insects are ammonotelic; ammonia, being readily soluble, is excreted by diffusion across the body surface or gill surfaces as ammonium ions. Mammals are ureotelic; birds and land snails are uricotelic.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following groups is uricotelic?",
    o: [
      "Reptiles, birds, land snails and insects",
      "Mammals, marine fishes and terrestrial amphibians",
      "Bony fishes and aquatic insects",
      "Cartilaginous fishes and frogs",
    ],
    a: 0,
    e: "Reptiles, birds, land snails and insects excrete nitrogenous wastes as uric acid (uricotelic). Mammals, many terrestrial amphibians and marine fishes are ureotelic. Bony fishes and aquatic insects are ammonotelic.",
    h: "These animals save water by excreting a near-solid waste.",
  },
  {
    d: 2, t: 60,
    q: "Protonephridia or flame cells, found in Platyhelminthes like Planaria, are concerned mainly with:",
    o: ["Respiration", "Ionic and fluid volume regulation (osmoregulation)", "Digestion", "Locomotion"],
    a: 1,
    e: "Protonephridia (flame cells) are the excretory structures of Platyhelminthes (e.g., Planaria), rotifers, some annelids and the cephalochordate Amphioxus. They are primarily concerned with ionic and fluid volume regulation, i.e. osmoregulation.",
    h: "NCERT says their main role is not removing nitrogenous waste.",
  },
  {
    d: 2, t: 60,
    q: "Match the animal with its excretory structure: prawn, cockroach, earthworm.",
    o: [
      "Antennal glands; Malpighian tubules; nephridia",
      "Malpighian tubules; antennal glands; nephridia",
      "Nephridia; Malpighian tubules; flame cells",
      "Green glands; nephridia; Malpighian tubules",
    ],
    a: 0,
    e: "Crustaceans like prawns have antennal glands (green glands); insects including cockroaches have Malpighian tubules; earthworms and other annelids have tubular nephridia.",
    h: "Prawns are crustaceans, cockroaches are insects.",
  },
  {
    d: 1, t: 45,
    q: "Human kidneys are situated between the levels of:",
    o: [
      "Last thoracic and third lumbar vertebra",
      "First and fifth lumbar vertebra",
      "Seventh cervical and fifth thoracic vertebra",
      "Sacrum and coccyx",
    ],
    a: 0,
    e: "The kidneys are reddish-brown, bean-shaped organs situated between the levels of the last thoracic and third lumbar vertebra, close to the dorsal inner wall of the abdominal cavity.",
  },
  {
    d: 1, t: 45,
    q: "An adult human kidney weighs on average:",
    o: ["50–70 g", "120–170 g", "300–400 g", "1–1.5 kg"],
    a: 1,
    e: "Each adult human kidney is 10–12 cm long, 5–7 cm wide and 2–3 cm thick, with an average weight of 120–170 g.",
  },
  {
    d: 2, t: 60,
    q: "The cortex of the kidney extends in between the medullary pyramids as renal columns. These are called:",
    o: ["Calyces", "Columns of Bertini", "Renal pelvis", "Vasa recta"],
    a: 1,
    e: "The cortex extends between the medullary pyramids as renal columns, called Columns of Bertini. The pyramids project into the calyces, which open into the funnel-shaped renal pelvis. Vasa recta are blood capillaries.",
    h: "Named after a person.",
  },
  {
    d: 1, t: 45,
    q: "Each human kidney has nearly how many nephrons?",
    o: ["One thousand", "One lakh", "One million", "One billion"],
    a: 2,
    e: "Each kidney has nearly one million complex tubular structures called nephrons, the functional units of the kidney.",
  },
  {
    d: 2, t: 60,
    q: "The Malpighian body (renal corpuscle) consists of:",
    o: [
      "Glomerulus and Bowman's capsule",
      "Bowman's capsule and PCT",
      "Henle's loop and vasa recta",
      "DCT and collecting duct",
    ],
    a: 0,
    e: "The glomerulus (a tuft of capillaries formed by the afferent arteriole) together with Bowman's capsule, the double-walled cup around it, forms the Malpighian body or renal corpuscle.",
    h: "The corpuscle is the filtering unit.",
  },
  {
    d: 2, t: 60,
    q: "In which nephrons is the vasa recta absent or highly reduced?",
    o: ["Juxta medullary nephrons", "Cortical nephrons", "All nephrons", "Nephrons with a long loop of Henle"],
    a: 1,
    e: "Cortical nephrons, the majority, have a short loop of Henle that dips only a little into the medulla, and their vasa recta is absent or highly reduced. Juxta medullary nephrons have very long loops running deep into the medulla, with a well-developed U-shaped vasa recta parallel to the loop.",
    h: "The vasa recta runs alongside long loops.",
  },
  {
    d: 2, t: 60,
    q: "Which parts of the nephron lie in the cortical region of the kidney?",
    o: [
      "Malpighian corpuscle, PCT and DCT",
      "Henle's loop only",
      "Collecting duct only",
      "Malpighian corpuscle and Henle's loop",
    ],
    a: 0,
    e: "The Malpighian corpuscle, PCT and DCT are situated in the cortex, while the loop of Henle dips into the medulla. The collecting ducts converge and run through the medullary pyramids.",
    h: "Only one part of the nephron dips deep.",
  },
  {
    d: 1, t: 45,
    q: "The glomerular filtration rate (GFR) in a healthy individual is about:",
    o: ["125 mL per minute", "1.5 L per minute", "500 mL per minute", "25 mL per minute"],
    a: 0,
    e: "GFR is about 125 mL per minute, i.e. about 180 litres per day. Since only about 1.5 litres of urine is released per day, nearly 99% of the filtrate is reabsorbed.",
  },
  {
    d: 2, t: 60,
    q: "Blood is filtered through three layers in the glomerulus. Which of these is NOT one of them?",
    o: [
      "Endothelium of glomerular blood vessels",
      "Epithelium of Bowman's capsule",
      "Basement membrane between them",
      "Brush border epithelium of the PCT",
    ],
    a: 3,
    e: "Filtration occurs through the endothelium of the glomerular vessels, the epithelium of Bowman's capsule (podocytes, with filtration slits between them) and a basement membrane between these two. The PCT brush border is the site of reabsorption, not filtration.",
    h: "Filtration happens in the corpuscle, not in the tubule.",
  },
  {
    d: 2, t: 60,
    q: "Almost all the constituents of plasma pass into the lumen of Bowman's capsule EXCEPT:",
    o: ["Glucose", "Amino acids", "Proteins", "Urea"],
    a: 2,
    e: "Glomerular filtration is so fine that almost all plasma constituents pass into Bowman's capsule except the proteins, which are too large. Glucose and amino acids are filtered and later reabsorbed in the PCT.",
    h: "Which plasma component is too big for the filtration slits?",
  },
  {
    d: 2, t: 75,
    q: "A fall in GFR activates the juxta glomerular (JG) cells to release:",
    o: ["Aldosterone", "Renin", "ADH", "ANF"],
    a: 1,
    e: "The JGA is a specialised region formed by cellular modifications in the DCT and the afferent arteriole where they touch. A fall in GFR activates JG cells to release renin, which stimulates glomerular blood flow and brings GFR back to normal.",
    h: "This enzyme starts the RAAS cascade.",
  },
  {
    d: 2, t: 60,
    q: "Nearly all essential nutrients and 70–80 per cent of electrolytes and water are reabsorbed by the:",
    o: ["Collecting duct", "PCT", "DCT", "Ascending limb of Henle's loop"],
    a: 1,
    e: "The PCT, lined by simple cuboidal brush border epithelium that greatly increases the surface area, reabsorbs nearly all essential nutrients and 70–80% of electrolytes and water. It also maintains pH and ionic balance by selectively secreting H⁺, ammonia and K⁺ and absorbing HCO₃⁻.",
    h: "The brush border gives a huge surface for reabsorption.",
  },
  {
    d: 2, t: 60,
    q: "The descending limb of the loop of Henle is:",
    o: [
      "Impermeable to water but allows transport of electrolytes",
      "Permeable to water but almost impermeable to electrolytes",
      "Impermeable to both water and electrolytes",
      "The main site of glucose reabsorption",
    ],
    a: 1,
    e: "The descending limb is permeable to water but almost impermeable to electrolytes, which concentrates the filtrate as it moves down. The ascending limb is impermeable to water but allows electrolyte transport, so the filtrate gets diluted as it moves up.",
    h: "The filtrate becomes more concentrated going down.",
  },
  {
    d: 2, t: 60,
    q: "Conditional reabsorption of Na⁺ and water takes place in the:",
    o: ["PCT", "DCT", "Descending limb of Henle's loop", "Bowman's capsule"],
    a: 1,
    e: "The DCT performs conditional reabsorption of Na⁺ and water (under hormonal control). It can also reabsorb HCO₃⁻ and selectively secrete H⁺, K⁺ and NH₃ to maintain pH and Na–K balance in the blood.",
    h: "'Conditional' means it depends on hormones.",
  },
  {
    d: 2, t: 75,
    q: "The collecting duct helps maintain the osmolarity of the medullary interstitium by:",
    o: [
      "Secreting NaCl into the interstitium",
      "Allowing the passage of small amounts of urea into the medullary interstitium",
      "Reabsorbing glucose",
      "Secreting proteins",
    ],
    a: 1,
    e: "The collecting duct reabsorbs large amounts of water to produce concentrated urine and allows small amounts of urea to pass into the medullary interstitium, keeping its osmolarity high. It also secretes H⁺ and K⁺ to maintain pH and ionic balance.",
    h: "Which waste is recycled to keep the medulla hypertonic?",
  },
  {
    d: 2, t: 60,
    q: "The osmolarity of the interstitial fluid in the kidney increases from the cortex to the inner medulla from about:",
    o: [
      "300 to 1200 mOsmol L⁻¹",
      "1200 to 300 mOsmol L⁻¹",
      "100 to 300 mOsmol L⁻¹",
      "300 to 3000 mOsmol L⁻¹",
    ],
    a: 0,
    e: "The countercurrent mechanism maintains an increasing osmolarity towards the inner medulla, from about 300 mOsmol L⁻¹ in the cortex to about 1200 mOsmol L⁻¹ in the inner medulla. The gradient is caused mainly by NaCl and urea.",
    h: "It increases going deeper.",
  },
  {
    d: 2, t: 60,
    q: "The gradient of osmolarity in the medullary interstitium is caused mainly by:",
    o: ["NaCl and urea", "Glucose and amino acids", "K⁺ and H⁺", "Proteins and uric acid"],
    a: 0,
    e: "NaCl and urea are mainly responsible. NaCl is transported by the ascending limb of Henle's loop and exchanged with the descending limb of the vasa recta, and NaCl is returned to the interstitium by the ascending portion of the vasa recta. Small amounts of urea enter the thin segment of the ascending limb and are carried back to the interstitium by the collecting tubule.",
    h: "A salt and a nitrogenous waste.",
  },
  {
    d: 2, t: 60,
    q: "The human kidney can produce urine nearly how many times more concentrated than the initial filtrate?",
    o: ["Two times", "Four times", "Ten times", "Hundred times"],
    a: 1,
    e: "Thanks to the countercurrent mechanism (300 → 1200 mOsmol L⁻¹), human kidneys can produce urine nearly four times more concentrated than the initial filtrate.",
    h: "Divide 1200 by 300.",
  },
  {
    d: 2, t: 60,
    q: "ADH (vasopressin) is released from the neurohypophysis when:",
    o: [
      "There is excess water in the body",
      "Body fluid volume falls, activating hypothalamic osmoreceptors",
      "Blood glucose rises",
      "Atrial walls are stretched by high blood volume",
    ],
    a: 1,
    e: "An excessive loss of fluid from the body activates osmoreceptors, which stimulate the hypothalamus to release ADH from the neurohypophysis. ADH promotes water reabsorption from the latter parts of the tubule, preventing diuresis. Excess fluid switches ADH release off; stretched atria release ANF instead.",
    h: "ADH conserves water.",
  },
  {
    d: 2, t: 75,
    q: "Angiotensin II increases GFR because it:",
    o: [
      "Is a powerful vasodilator",
      "Is a powerful vasoconstrictor that increases glomerular blood pressure",
      "Inhibits aldosterone release",
      "Increases urea secretion",
    ],
    a: 1,
    e: "Renin converts angiotensinogen in the blood to angiotensin I and then to angiotensin II. Angiotensin II is a powerful vasoconstrictor that raises glomerular blood pressure and thereby GFR. It also activates the adrenal cortex to release aldosterone, which causes reabsorption of Na⁺ and water in the distal tubule.",
    h: "Narrowing vessels raises pressure.",
  },
  {
    d: 2, t: 60,
    q: "Atrial natriuretic factor (ANF) acts as a check on the renin–angiotensin mechanism because it:",
    o: [
      "Causes vasoconstriction",
      "Causes vasodilation and so decreases blood pressure",
      "Stimulates aldosterone secretion",
      "Increases the release of ADH",
    ],
    a: 1,
    e: "An increase in blood flow to the atria causes the release of ANF. ANF causes vasodilation (dilation of blood vessels) and thereby lowers blood pressure, the opposite of angiotensin II's action.",
    h: "It does the opposite of angiotensin II.",
  },
  {
    d: 1, t: 45,
    q: "An adult human excretes on average how much urea per day?",
    o: ["25–30 g", "1–1.5 g", "200–300 g", "5 g"],
    a: 0,
    e: "An adult human excretes on average 1–1.5 litres of urine per day containing about 25–30 g of urea. Urine is light yellow, slightly acidic (pH 6.0) and characteristically odoured.",
  },
  {
    d: 1, t: 45,
    q: "The presence of glucose (glycosuria) and ketone bodies (ketonuria) in urine is indicative of:",
    o: ["Uremia", "Diabetes mellitus", "Renal calculi", "Glomerulonephritis"],
    a: 1,
    e: "Glycosuria and ketonuria are indicative of diabetes mellitus. Uremia is accumulation of urea in the blood; renal calculi are kidney stones; glomerulonephritis is inflammation of the glomeruli.",
  },
  {
    d: 2, t: 60,
    q: "The micturition reflex involves:",
    o: [
      "Relaxation of the bladder smooth muscles and contraction of the urethral sphincter",
      "Contraction of the bladder smooth muscles and relaxation of the urethral sphincter",
      "Contraction of both the bladder and the sphincter",
      "Only voluntary contraction of abdominal muscles",
    ],
    a: 1,
    e: "When the bladder fills and stretches, stretch receptors send signals to the CNS. The CNS sends motor messages that cause contraction of the bladder's smooth muscles and simultaneous relaxation of the urethral sphincter, releasing urine. This neural mechanism is the micturition reflex.",
    h: "To empty, squeeze the bag and open the outlet.",
  },
  {
    d: 1, t: 45,
    q: "The liver helps in excretion by secreting bile, which contains:",
    o: [
      "Bilirubin, biliverdin, cholesterol and degraded steroid hormones",
      "Urea and uric acid only",
      "Sebum and waxes",
      "Lactic acid and NaCl",
    ],
    a: 0,
    e: "The liver secretes bile containing bilirubin, biliverdin, cholesterol, degraded steroid hormones, vitamins and drugs, which mostly pass out with digestive wastes. Sebum (sterols, hydrocarbons, waxes) comes from sebaceous glands, and sweat contains NaCl, small amounts of urea and lactic acid.",
  },
  {
    d: 2, t: 60,
    q: "In haemodialysis, the dialysing fluid has the same composition as plasma EXCEPT that it lacks:",
    o: ["Water", "Nitrogenous wastes", "Glucose", "Na⁺ ions"],
    a: 1,
    e: "The dialysing fluid has the same composition as plasma except for the nitrogenous wastes. Because of this concentration gradient, nitrogenous wastes move out of the blood across the porous cellophane membrane. Blood from an artery is mixed with heparin (anticoagulant) before dialysis and anti-heparin is added before it is returned through a vein.",
    h: "Diffusion needs a gradient for the waste only.",
  },
  {
    d: 3, t: 90,
    q: t`**Assertion (A):** The filtrate becomes hypotonic as it moves up the ascending limb of the loop of Henle.
**Reason (R):** The ascending limb is impermeable to water but allows the transport of electrolytes, actively or passively.`,
    o: AR,
    a: 0,
    e: "Both are true and R explains A. Electrolytes leave the ascending limb, but water cannot follow because the limb is impermeable to water, so the filtrate is diluted as it moves upward.",
    h: "Solute leaves; water stays.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** Renal calculi are inflammations of the glomeruli of the kidney.
**Statement II:** In uremia, urea accumulates in the blood, which can be removed by haemodialysis.`,
    o: ST,
    a: 3,
    e: "Statement I is wrong: renal calculi are stones or insoluble masses of crystallised salts (oxalates, etc.) formed within the kidney; inflammation of the glomeruli is glomerulonephritis. Statement II is correct: in uremia, urea accumulates in the blood and can be removed by haemodialysis.",
    h: "A 'calculus' is a stone.",
  },
  {
    d: 3, t: 90,
    q: t`Match Column I with Column II:
(a) PCT — (i) Large amount of water reabsorbed; small amount of urea passes into the interstitium
(b) Descending limb of Henle's loop — (ii) Conditional reabsorption of Na⁺ and water
(c) DCT — (iii) Reabsorbs nearly all essential nutrients and 70–80% of electrolytes and water
(d) Collecting duct — (iv) Permeable to water, almost impermeable to electrolytes`,
    o: [
      "a-iii, b-iv, c-ii, d-i",
      "a-iii, b-ii, c-iv, d-i",
      "a-i, b-iv, c-ii, d-iii",
      "a-iv, b-iii, c-ii, d-i",
    ],
    a: 0,
    e: "PCT: bulk reabsorption of nutrients, electrolytes and water (iii). Descending limb: permeable to water only (iv). DCT: conditional reabsorption of Na⁺ and water (ii). Collecting duct: major water reabsorption and passage of small amounts of urea into the medullary interstitium (i).",
    h: "Start with the PCT, the bulk reabsorber.",
  },
  {
    d: 3, t: 120,
    q: "If a person's GFR is 125 mL/min and urine output is 1.5 L/day, approximately what percentage of the glomerular filtrate is reabsorbed?",
    o: ["About 50 per cent", "About 80 per cent", "About 99 per cent", "About 90 per cent"],
    a: 2,
    e: "Filtrate per day = 125 mL/min × 1440 min = 180,000 mL = 180 L. Urine = 1.5 L, so reabsorbed = 178.5 L, i.e. 178.5/180 ≈ 99.2% ≈ 99%. Forgetting to convert minutes to a full day gives badly wrong figures.",
    h: "First convert GFR into litres per day.",
  },
  {
    d: 3, t: 90,
    q: "A person who has lost a lot of blood (fall in blood volume and pressure) would show which combination of responses?",
    o: [
      "Release of renin and ADH increases; ANF release decreases",
      "Release of ANF increases; renin decreases",
      "ADH release stops; aldosterone decreases",
      "Renin decreases; GFR rises immediately to above normal",
    ],
    a: 0,
    e: "A fall in blood pressure and GFR activates the JG cells to release renin (leading to angiotensin II and aldosterone), and reduced fluid volume triggers ADH release, which conserves water. ANF is released when atrial blood flow increases, so its release falls when volume drops.",
    h: "Every response should work to restore volume and pressure.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** In the countercurrent mechanism, NaCl transported out of the ascending limb of Henle's loop is exchanged with the descending limb of the vasa recta.
**Statement II:** The flow of filtrate in the two limbs of Henle's loop is in the same direction.`,
    o: ST,
    a: 2,
    e: "Statement I is correct (NCERT). Statement II is wrong: the filtrate flows in opposite directions in the two limbs of Henle's loop, and blood flows in opposite directions in the two limbs of the vasa recta. This is what gives the countercurrent its name.",
    h: "What does 'counter' mean?",
  },
];
