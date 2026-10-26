import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;
void t;

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

/* ------------------------------------------------------------------ */
/* ISC only: Digestion and Absorption (dropped from rationalised NCERT) */
/* ------------------------------------------------------------------ */
const digestion: Topic = {
  slug: "c11-bio-digestion-absorption",
  title: "Digestion and Absorption",
  icon: "🍽️",
  description:
    "The human alimentary canal and digestive glands, how carbohydrates, proteins, fats and nucleic acids are digested, how the products are absorbed, and common digestive disorders.",
  lessons: [
    {
      slug: "c11-bio-alimentary-canal-glands",
      title: "Alimentary Canal and Digestive Glands",
      summary:
        "Mouth, teeth and dental formula, the parts of the gut from pharynx to anus, the four layers of the gut wall, and the salivary glands, liver and pancreas.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "callout",
          tone: "note",
          title: "Board note",
          md: "This chapter was removed from the rationalised NCERT book, so CBSE and Karnataka I PUC do not examine it. **ISC Class 11** still teaches it under *Human Physiology*, and older NEET and KCET papers asked it often. If you are an ISC student, study all of it; if you are CBSE or PUC, it is useful background for physiology questions.",
        },
        {
          type: "text",
          md: "Most of what we eat (a plate of rice, dal and curd) is made of large molecules: **carbohydrates**, **proteins**, **fats** and **nucleic acids**. Cells cannot take these in directly. **Digestion** is the process of breaking these complex, insoluble food molecules into simple, soluble ones that can be absorbed. It has a **mechanical** part (chewing, churning) and a **chemical** part (enzymes).\n\nThe human digestive system has two parts: the **alimentary canal** (the food tube) and the **associated digestive glands**.",
        },
        { type: "heading", text: "Mouth and teeth" },
        {
          type: "text",
          md: "The mouth opens into the **buccal cavity** (oral cavity). Human teeth are:\n\n- **thecodont**: each tooth sits in a socket of the jaw bone;\n- **diphyodont**: two sets in a lifetime, milk (deciduous) teeth and permanent teeth;\n- **heterodont**: four kinds of teeth, **incisors (I)**, **canines (C)**, **premolars (PM)** and **molars (M)**.\n\nThe hard chewing surface is covered by **enamel**, the hardest substance in the body. The **tongue** is a freely movable muscular organ attached to the floor of the mouth by a fold called the **frenulum**; its upper surface has small projections called **papillae**, some of which bear taste buds.",
        },
        {
          type: "formula",
          tex: t`\text{Dental formula (adult)} = \frac{I\,2\;C\,1\;PM\,2\;M\,3}{I\,2\;C\,1\;PM\,2\;M\,3} \quad\Rightarrow\quad (8+8) = 16 \text{ per side, } 32 \text{ in all}`,
          caption: "The formula lists teeth in one half of the upper jaw over one half of the lower jaw. Multiply the total by 2 for both sides.",
        },
        { type: "heading", text: "From pharynx to anus" },
        {
          type: "table",
          headers: ["Part", "Key features"],
          rows: [
            ["Pharynx", "Common passage for food and air; food goes into the oesophagus, air into the larynx. The **epiglottis** closes the glottis during swallowing."],
            ["Oesophagus", "Long thin tube through the neck, thorax and diaphragm; opens into the stomach through the **gastro-oesophageal sphincter**."],
            ["Stomach", "J-shaped bag in the upper left abdomen; parts: **cardiac**, **fundic**, **body** and **pyloric**. The **pyloric sphincter** opens into the duodenum."],
            ["Small intestine", "**Duodenum** (C-shaped), **jejunum** (long, coiled) and **ileum** (highly coiled). Longest part of the canal."],
            ["Large intestine", "**Caecum** (blind sac with symbiotic microbes; the **vermiform appendix** arises from it), **colon** (ascending, transverse, descending, sigmoid) and **rectum**, which opens out through the **anus**."],
          ],
        },
        {
          type: "table",
          headers: ["Layer of the gut wall (outside → inside)", "What it is"],
          rows: [
            ["Serosa", "Thin mesothelium (epithelium) with some connective tissue"],
            ["Muscularis", "Smooth muscle: inner circular, outer longitudinal (an extra oblique layer in the stomach)"],
            ["Sub-mucosa", "Loose connective tissue with nerves, blood and lymph vessels; glands in the duodenum (Brunner's glands)"],
            ["Mucosa", "Lining epithelium; folds called **rugae** in the stomach and finger-like **villi** in the small intestine. Villus cells carry **microvilli** (brush border). Each villus has capillaries and a lymph vessel, the **lacteal**. Mucosa forms gastric glands and the **crypts of Lieberkühn**; goblet cells secrete mucus."],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which description of human teeth is correct?",
              options: [
                "Thecodont, diphyodont, heterodont",
                "Acrodont, monophyodont, homodont",
                "Thecodont, polyphyodont, homodont",
                "Pleurodont, diphyodont, heterodont",
              ],
              answer: 0,
              explain: "Human teeth sit in sockets (thecodont), come in two sets (diphyodont) and are of four kinds (heterodont).",
            },
          ],
        },
        { type: "heading", text: "Digestive glands" },
        {
          type: "text",
          md: "**Salivary glands**: three pairs. The **parotids** (in front of the ear, in the cheek), the **sub-maxillary / sub-mandibular** (lower jaw) and the **sub-linguals** (below the tongue) pour saliva into the buccal cavity.\n\n**Liver**: the largest gland of the body (about 1.2–1.5 kg in an adult), with two lobes. Its structural units are **hepatic lobules**, each covered by a thin connective tissue sheath, **Glisson's capsule**. Liver cells secrete **bile**, which is stored and concentrated in the **gall bladder**. The cystic duct from the gall bladder joins the hepatic duct to form the **common bile duct**.\n\n**Pancreas**: a compound gland lying between the limbs of the C-shaped duodenum. Its **exocrine** part secretes alkaline **pancreatic juice** with enzymes; its **endocrine** part (islets) secretes the hormones **insulin** and **glucagon**. The bile duct and the pancreatic duct open together into the duodenum as the **hepato-pancreatic duct**, guarded by the **sphincter of Oddi**.",
        },
        {
          type: "example",
          title: "Counting teeth from a dental formula",
          problem: "A child of 5 has only milk teeth. The milk-teeth formula is I 2, C 1, PM 0, M 2 in each half of each jaw. How many milk teeth does the child have, and which kind of tooth is missing compared with an adult?",
          steps: [
            "Teeth in one half of the upper jaw = 2 + 1 + 0 + 2 = 5.",
            "The lower half-jaw has the same, so one side of the mouth has 5 + 5 = 10.",
            "Both sides: 10 × 2 = 20 milk teeth.",
            "Adults have 2 premolars per half-jaw; milk teeth have none. Premolars (and the third molars) come only in the permanent set.",
          ],
          answer: "20 milk teeth; premolars are absent in the milk set (adults have 32 teeth).",
        },
        {
          type: "mistake",
          wrong: "The liver makes digestive enzymes and stores them in the gall bladder.",
          right: "Bile, made by the liver and stored in the gall bladder, has **no digestive enzymes**. It contains bile salts, bile pigments (bilirubin, biliverdin), cholesterol and phospholipids.",
          why: "Bile helps fat digestion so much that it feels like an enzyme juice. It works physically, by emulsifying fats into tiny droplets, and by activating lipases; the enzymes themselves come from the pancreas and intestine.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the parts of the alimentary canal in the order food passes.",
            items: ["Buccal cavity", "Pharynx", "Oesophagus", "Stomach", "Small intestine (duodenum → jejunum → ileum)", "Large intestine (caecum → colon → rectum)"],
            explain: "Food moves mouth → pharynx → oesophagus → stomach → small intestine → large intestine → anus. The caecum is the first part of the large intestine, where the ileum opens.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC exam tip",
          md: "Labelled diagrams of the alimentary canal, a villus, and the duct system of liver and pancreas are often asked. Label the **sphincter of Oddi**, **common bile duct** and **lacteal** clearly. A short-answer mark is often given for naming the three types of salivary gland with their position.",
        },
        {
          type: "keypoints",
          items: [
            "Human teeth: thecodont, diphyodont, heterodont; adult formula 2123/2123 gives 32 teeth.",
            "Gut: buccal cavity → pharynx → oesophagus → stomach → duodenum, jejunum, ileum → caecum, colon, rectum → anus.",
            "Gut wall: serosa, muscularis, sub-mucosa, mucosa (villi, microvilli, lacteals in the small intestine).",
            "Glands: 3 pairs of salivary glands, liver (largest gland, bile), pancreas (exocrine juice + insulin, glucagon).",
            "Hepato-pancreatic duct opens into the duodenum, guarded by the sphincter of Oddi.",
          ],
        },
      ],
      flashcards: [
        { front: "Thecodont, diphyodont, heterodont", back: "Teeth in sockets; two sets in life; four different kinds (I, C, PM, M)." },
        { front: "Adult human dental formula", back: "2123/2123 per half-jaw: 32 teeth in all." },
        { front: "Three pairs of salivary glands", back: "Parotid (cheek), sub-maxillary / sub-mandibular (lower jaw), sub-lingual (below tongue)." },
        { front: "Glisson's capsule", back: "Thin connective tissue sheath around each hepatic lobule of the liver." },
        { front: "Sphincter of Oddi", back: "Guards the opening of the hepato-pancreatic duct into the duodenum." },
        { front: "Lacteal", back: "Lymph vessel inside each villus; absorbs fats (as chylomicrons)." },
        { front: "Crypts of Lieberkühn", back: "Tubular glands of the intestinal mucosa between the bases of villi." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The vermiform appendix arises from the:",
          options: ["Caecum", "Ileum", "Duodenum", "Rectum"],
          answer: 0,
          explain: "The appendix is a narrow finger-like tube from the caecum, the blind sac at the start of the large intestine.",
        },
        {
          kind: "mcq",
          q: "Which layer of the gut wall forms villi in the small intestine?",
          options: ["Serosa", "Muscularis", "Sub-mucosa", "Mucosa"],
          answer: 3,
          explain: "Villi and the rugae of the stomach are folds of the innermost layer, the mucosa.",
        },
        {
          kind: "numeric",
          q: "How many premolars does an adult human have in total?",
          answer: 8,
          explain: "2 premolars per half-jaw × 4 half-jaws = 8.",
        },
        {
          kind: "truefalse",
          q: "Bile contains lipase that digests fats.",
          answer: false,
          explain: "Bile has no enzymes. Bile salts emulsify fats and activate lipases from the pancreas and intestine.",
        },
        {
          kind: "fill",
          q: "The fold of tissue that attaches the tongue to the floor of the mouth is the ___.",
          answer: ["frenulum"],
          explain: "The frenulum anchors the tongue to the floor of the buccal cavity.",
        },
        {
          kind: "multi",
          q: "Which of these are parts of the small intestine?",
          options: ["Duodenum", "Jejunum", "Caecum", "Ileum", "Colon"],
          answers: [0, 1, 3],
          explain: "Small intestine = duodenum, jejunum, ileum. Caecum and colon belong to the large intestine.",
        },
        {
          kind: "mcq",
          q: "The pancreas lies:",
          options: [
            "Between the limbs of the C-shaped duodenum",
            "Inside the right lobe of the liver",
            "Behind the urinary bladder",
            "Along the descending colon",
          ],
          answer: 0,
          explain: "The pancreas lies in the loop of the duodenum, into which its duct opens.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-bio-digestion-of-food",
      title: "Digestion of Food: Mouth to Small Intestine",
      summary:
        "What saliva, gastric juice, bile, pancreatic juice and intestinal juice do, the enzymes and their products, and how the gut is controlled by nerves and hormones.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Chemical digestion happens step by step as food moves along the canal. Each region adds a juice with its own enzymes and its own pH, and each enzyme acts on one kind of food and stops at a definite product.",
        },
        { type: "heading", text: "In the buccal cavity" },
        {
          type: "text",
          md: "Teeth chew and the tongue mixes food with **saliva**. Saliva contains water, electrolytes (Na⁺, K⁺, Cl⁻, HCO₃⁻), mucus, the enzyme **salivary amylase** (ptyalin) and the antibacterial enzyme **lysozyme**. Salivary amylase works best at **pH 6.8** and breaks about **30% of starch** into the disaccharide **maltose**. Mucus lubricates the food into a **bolus**, which is swallowed (**deglutition**) and pushed down the oesophagus by waves of muscle contraction, **peristalsis**.",
        },
        { type: "heading", text: "In the stomach" },
        {
          type: "table",
          headers: ["Cell of gastric gland", "Secretes"],
          rows: [
            ["Mucus neck cells", "Mucus"],
            ["Peptic or chief cells", "**Pepsinogen** (inactive proenzyme)"],
            ["Parietal or oxyntic cells", "**HCl** and **Castle's intrinsic factor** (needed to absorb vitamin B12)"],
          ],
        },
        {
          type: "text",
          md: "Food stays 4–5 hours in the stomach and is churned into an acidic paste called **chyme**. HCl gives a pH of about **1.8** and converts pepsinogen into active **pepsin**. Pepsin breaks proteins into **proteoses and peptones** (shorter peptides). In infants, gastric juice also has **rennin**, which helps digest milk proteins. Small amounts of lipase are present. The mucus and bicarbonate protect the stomach lining from the acid.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which cells of the gastric glands secrete HCl?",
              options: ["Chief cells", "Oxyntic cells", "Goblet cells", "Mucus neck cells"],
              answer: 1,
              explain: "Oxyntic (parietal) cells make HCl and intrinsic factor. Chief (peptic) cells make pepsinogen.",
            },
          ],
        },
        { type: "heading", text: "In the small intestine" },
        {
          type: "text",
          md: "Three juices meet the chyme in the duodenum: **bile**, **pancreatic juice** and **intestinal juice** (*succus entericus*, from the brush-border cells and goblet cells). Together with bicarbonate they make the medium alkaline (about **pH 7.8**).\n\nPancreatic juice carries the inactive enzymes **trypsinogen**, **chymotrypsinogen** and **procarboxypeptidases**, plus **amylase**, **lipases** and **nucleases**. **Enterokinase**, secreted by the intestinal mucosa, turns trypsinogen into **trypsin**, and trypsin then activates the other proenzymes.\n\nBile salts **emulsify** fats (break them into small droplets, giving a large surface) and activate lipases.",
        },
        {
          type: "table",
          headers: ["Food", "Enzyme (source)", "Product"],
          rows: [
            ["Proteins, proteoses, peptones", "Trypsin, chymotrypsin, carboxypeptidase (pancreas)", "Dipeptides"],
            ["Polysaccharides (starch)", "Pancreatic amylase", "Disaccharides (maltose)"],
            ["Fats", "Lipases (pancreas), with bile", "Diglycerides → monoglycerides"],
            ["Nucleic acids", "Nucleases (pancreas)", "Nucleotides"],
            ["Dipeptides", "Dipeptidases (intestinal juice)", "Amino acids"],
            ["Maltose / lactose / sucrose", "Maltase / lactase / sucrase", "Glucose + glucose / glucose + galactose / glucose + fructose"],
            ["Nucleotides → nucleosides", "Nucleotidases, then nucleosidases", "Sugars + bases"],
            ["Di- and monoglycerides", "Lipases (intestinal juice)", "Fatty acids + glycerol"],
          ],
        },
        {
          type: "example",
          title: "Tracing one food",
          problem: "A student eats a boiled egg (mostly protein). Name, in order, every enzyme that acts on the egg protein until amino acids are formed, and say where each one is made.",
          steps: [
            "Saliva has no protein-digesting enzyme, so nothing happens chemically in the mouth.",
            "Stomach: pepsin (from pepsinogen of chief cells, activated by HCl) breaks proteins into proteoses and peptones.",
            "Duodenum: trypsin, chymotrypsin and carboxypeptidase from the pancreas break these into dipeptides. Trypsin is activated by enterokinase.",
            "Intestinal juice: dipeptidases split dipeptides into amino acids.",
          ],
          answer: "Pepsin (stomach) → trypsin, chymotrypsin, carboxypeptidase (pancreas) → dipeptidases (intestine) → amino acids.",
        },
        {
          type: "mistake",
          wrong: "Trypsin is secreted in its active form by the pancreas.",
          right: "The pancreas secretes inactive **trypsinogen**; **enterokinase** from the intestinal mucosa activates it to trypsin in the duodenum.",
          why: "Secreting active protein-digesting enzymes would digest the pancreas itself. Making them as proenzymes (pepsinogen, trypsinogen) and activating them only in the gut lumen protects the gland.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each enzyme with its product.",
            pairs: [
              ["Salivary amylase", "Maltose"],
              ["Pepsin", "Proteoses and peptones"],
              ["Lactase", "Glucose and galactose"],
              ["Nucleases", "Nucleotides"],
              ["Dipeptidase", "Amino acids"],
            ],
            explain: "Each enzyme stops at a definite product: amylase at maltose, pepsin at proteoses and peptones, nucleases at nucleotides. The final simple sugars and amino acids are made by intestinal enzymes.",
          },
        },
        {
          type: "text",
          md: "**Control of digestion.** The sight, smell or presence of food can start secretion of saliva and gastric juice through nerves (the autonomic nervous system). Local hormones from the gut lining also act: **gastrin** stimulates gastric juice; **secretin** stimulates the pancreas to release water and bicarbonate; **cholecystokinin (CCK)** makes the gall bladder contract and the pancreas release enzymes; **GIP** (gastric inhibitory peptide) slows gastric secretion and movement.",
        },
        {
          type: "keypoints",
          items: [
            "Mouth: salivary amylase (pH 6.8) digests about 30% of starch to maltose; lysozyme kills bacteria.",
            "Stomach: HCl (pH 1.8) activates pepsinogen to pepsin → proteoses and peptones; rennin in infants.",
            "Duodenum: bile emulsifies fat; pancreatic trypsin (activated by enterokinase), amylase, lipase, nucleases.",
            "Intestinal juice finishes digestion: dipeptidases, disaccharidases, lipases, nucleotidases, nucleosidases.",
            "Hormones: gastrin, secretin, CCK, GIP.",
          ],
        },
      ],
      flashcards: [
        { front: "Optimum pH of salivary amylase", back: "About 6.8; it converts starch to maltose." },
        { front: "Function of HCl in the stomach", back: "Gives pH about 1.8, activates pepsinogen to pepsin, kills many microbes." },
        { front: "Rennin", back: "Proteolytic enzyme in the gastric juice of infants; helps digest milk proteins." },
        { front: "Enterokinase", back: "Enzyme from the intestinal mucosa that converts trypsinogen to trypsin." },
        { front: "Succus entericus", back: "Intestinal juice: secretions of brush-border cells and goblet cells." },
        { front: "Products of sucrase", back: "Glucose and fructose." },
        { front: "CCK (cholecystokinin)", back: "Gut hormone; contracts the gall bladder and stimulates pancreatic enzyme secretion." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Pepsin digests proteins into:",
          options: ["Amino acids", "Dipeptides", "Proteoses and peptones", "Nucleotides"],
          answer: 2,
          explain: "Pepsin only shortens proteins to proteoses and peptones; pancreatic and intestinal enzymes finish the job.",
        },
        {
          kind: "mcq",
          q: "Which juice contains no digestive enzyme?",
          options: ["Saliva", "Bile", "Pancreatic juice", "Intestinal juice"],
          answer: 1,
          explain: "Bile acts by emulsification and lipase activation; it has no enzymes.",
        },
        {
          kind: "truefalse",
          q: "Castle's intrinsic factor is secreted by the oxyntic cells and is needed for vitamin B12 absorption.",
          answer: true,
          explain: "Parietal (oxyntic) cells secrete both HCl and intrinsic factor.",
        },
        {
          kind: "multi",
          q: "Which enzymes are present in pancreatic juice (as active enzyme or proenzyme)?",
          options: ["Trypsinogen", "Amylase", "Pepsinogen", "Nucleases", "Lipase"],
          answers: [0, 1, 3, 4],
          explain: "Pepsinogen is made by the gastric chief cells, not the pancreas.",
        },
        {
          kind: "fill",
          q: "The hormone that makes the pancreas release water and bicarbonate is ___.",
          answer: ["secretin"],
          explain: "Secretin from the duodenum acts on the pancreas to release bicarbonate-rich juice.",
        },
        {
          kind: "mcq",
          q: "Lactose is digested into:",
          options: ["Glucose + glucose", "Glucose + fructose", "Glucose + galactose", "Galactose + fructose"],
          answer: 2,
          explain: "Lactase splits milk sugar into glucose and galactose.",
        },
        {
          kind: "order",
          q: "Arrange the steps of fat digestion in order.",
          items: ["Bile salts emulsify fat into droplets", "Lipase breaks triglycerides into diglycerides", "Diglycerides become monoglycerides", "Monoglycerides split into fatty acids and glycerol"],
          explain: "Emulsification first, then lipases remove fatty acids one at a time until fatty acids and glycerol remain.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-bio-absorption-disorders",
      title: "Absorption, Assimilation and Digestive Disorders",
      summary:
        "How digested food is absorbed in different parts of the gut, the route of fats via micelles and chylomicrons, egestion, calorific values and disorders such as jaundice, diarrhoea and PEM.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "**Absorption** is the movement of digested end products from the gut lumen into blood or lymph. Most absorption happens in the **jejunum and ileum**, whose villi and microvilli give an enormous surface. **Assimilation** is the use of absorbed substances by cells for energy, growth and repair. **Egestion** (defaecation) is the voluntary removal of undigested waste as faeces.",
        },
        {
          type: "table",
          headers: ["Mechanism", "What is absorbed this way"],
          rows: [
            ["Simple diffusion (down the gradient)", "Small amounts of glucose, amino acids and chloride ions"],
            ["Facilitated (carrier-mediated) transport", "Fructose and some amino acids"],
            ["Active transport (against the gradient, uses energy)", "Amino acids, glucose and other monosaccharides, Na⁺ and other electrolytes"],
            ["Osmosis", "Water"],
          ],
        },
        {
          type: "heading",
          text: "The route of fats",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Fatty acids and glycerol are insoluble in water, so they cannot move straight into the blood.",
            "With bile salts they form tiny droplets called **micelles**, which carry them to the intestinal mucosa.",
            "Inside the mucosal cells they are re-formed into very small, protein-coated fat globules called **chylomicrons**.",
            "Chylomicrons pass into the **lacteals** (lymph vessels) of the villi.",
            "Lymph finally drains into the blood stream.",
          ],
        },
        {
          type: "table",
          headers: ["Part of gut", "Absorbed here"],
          rows: [
            ["Mouth", "Certain drugs through the mucosa of the mouth and the lower side of the tongue"],
            ["Stomach", "Water, simple sugars, alcohol"],
            ["Small intestine", "Principal organ: glucose, fructose, amino acids, fatty acids, glycerol, vitamins, minerals, water"],
            ["Large intestine", "Water, some minerals and drugs"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Chylomicrons are:",
              options: [
                "Protein-coated fat globules carried in lacteals",
                "Enzyme granules in pancreatic cells",
                "Micelles of bile salts in the lumen",
                "Undigested starch particles in faeces",
              ],
              answer: 0,
              explain: "Fats re-formed in mucosal cells are packed as chylomicrons and enter the lacteals.",
            },
          ],
        },
        {
          type: "text",
          md: "**The large intestine** does no significant digestion. It absorbs water, some minerals and some drugs, and its mucus binds waste and lubricates it. Bacteria in the caecum and colon act on some undigested matter. Faeces are stored in the rectum until defaecation, a voluntary act.\n\n**Energy value of food.** Older NCERT gives **gross calorific values** (from a bomb calorimeter) of 4.1 kcal/g for carbohydrates, 5.65 kcal/g for proteins and 9.45 kcal/g for fats; the **physiological values** (energy the body actually gets) are about 4, 4 and 9 kcal/g.",
        },
        {
          type: "example",
          title: "Energy from a meal",
          problem: "A snack contains 40 g carbohydrate, 10 g protein and 10 g fat. Using the physiological values 4, 4 and 9 kcal/g, find the energy the body gets.",
          steps: [
            "Carbohydrate: 40 × 4 = 160 kcal.",
            "Protein: 10 × 4 = 40 kcal.",
            "Fat: 10 × 9 = 90 kcal.",
            "Total = 160 + 40 + 90 = 290 kcal.",
          ],
          answer: "About 290 kcal. Fat gives more than twice the energy of the same mass of carbohydrate.",
        },
        {
          type: "heading",
          text: "Disorders of the digestive system",
        },
        {
          type: "table",
          headers: ["Disorder", "What happens"],
          rows: [
            ["Jaundice", "The liver is affected; bile pigments build up and the skin and eyes turn yellow."],
            ["Vomiting", "Stomach contents are thrown out through the mouth; a reflex controlled by the vomit centre in the medulla."],
            ["Diarrhoea", "Frequent watery stools; food absorption falls and the body loses water and salts (treated with ORS)."],
            ["Constipation", "Faeces stay in the colon and bowel movements are irregular."],
            ["Indigestion", "Food is not properly digested; causes a feeling of fullness (enzyme shortage, anxiety, food poisoning, overeating, spicy food)."],
            ["PEM: kwashiorkor / marasmus", "Kwashiorkor: protein deficiency with enough calories (oedema, wasting); marasmus: deficiency of both protein and calories, usually in infants under a year."],
          ],
        },
        {
          type: "mistake",
          wrong: "Fats are absorbed straight into the blood capillaries of the villi, like glucose.",
          right: "Fats travel as **chylomicrons** into the **lacteals** (lymph), and reach blood only when lymph drains into the veins.",
          why: "Glucose and amino acids are water-soluble and enter capillaries. Fat products are insoluble, so they are first carried by micelles and then packed as chylomicrons, which are too large for capillaries but enter lacteals easily.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Where is each substance mainly absorbed?",
            groups: ["Stomach", "Small intestine", "Large intestine"],
            items: [
              { text: "Alcohol", group: 0, hint: "It is absorbed early, even before the intestine." },
              { text: "Amino acids", group: 1, hint: "End product of protein digestion in the duodenum." },
              { text: "Fatty acids and glycerol", group: 1, hint: "Taken into villi and lacteals." },
              { text: "Water left after the ileum", group: 2, hint: "The colon dries the waste into faeces." },
              { text: "Glucose", group: 1, hint: "Active transport across villus cells." },
              { text: "Some minerals and drugs at the end of the gut", group: 2, hint: "The last absorbing region before the rectum." },
            ],
            explain: "The small intestine is the main absorbing organ. The stomach takes in a little water, simple sugars and alcohol; the large intestine mostly recovers water, some minerals and drugs.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Absorption: diffusion, facilitated transport, active transport and osmosis; mainly in jejunum and ileum.",
            "Fats: micelles → re-formed in mucosa → chylomicrons → lacteals → lymph → blood.",
            "Large intestine: absorbs water, some minerals and drugs; no significant digestion.",
            "Physiological energy values: about 4 (carbohydrate), 4 (protein), 9 (fat) kcal/g.",
            "Disorders: jaundice, vomiting, diarrhoea, constipation, indigestion; PEM as kwashiorkor and marasmus.",
          ],
        },
      ],
      flashcards: [
        { front: "Absorption vs assimilation", back: "Absorption: products move from gut into blood or lymph. Assimilation: cells use them for energy, growth and repair." },
        { front: "Micelles", back: "Tiny droplets formed with bile salts that carry fatty acids and glycerol to the intestinal mucosa." },
        { front: "Chylomicrons", back: "Small protein-coated fat globules made in intestinal cells; they enter lacteals." },
        { front: "What does the stomach absorb?", back: "Water, simple sugars and alcohol." },
        { front: "How is fructose absorbed?", back: "By facilitated (carrier-mediated) transport." },
        { front: "Jaundice", back: "Liver disorder; bile pigments deposit and skin and eyes turn yellow." },
        { front: "Kwashiorkor vs marasmus", back: "Kwashiorkor: protein lacking, calories adequate. Marasmus: both protein and calories lacking, infants under 1 year." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Glucose and amino acids are absorbed against a concentration gradient by:",
          options: ["Simple diffusion", "Osmosis", "Active transport", "Pinocytosis only"],
          answer: 2,
          explain: "Active transport uses energy to move glucose, amino acids and Na⁺ against the gradient.",
        },
        {
          kind: "truefalse",
          q: "The large intestine is the main site of digestion of proteins.",
          answer: false,
          explain: "No significant digestion takes place in the large intestine; proteins are digested in the stomach and small intestine.",
        },
        {
          kind: "numeric",
          q: "Using physiological values (carbohydrate 4, protein 4, fat 9 kcal/g), how many kcal does 20 g of fat give?",
          answer: 180,
          unit: "kcal",
          explain: "20 × 9 = 180 kcal.",
        },
        {
          kind: "mcq",
          q: "The vomit centre is located in the:",
          options: ["Cerebrum", "Medulla", "Hypothalamus", "Cerebellum"],
          answer: 1,
          explain: "Vomiting is a reflex controlled by a centre in the medulla oblongata.",
        },
        {
          kind: "fill",
          q: "Fats enter lymph through the ___ of the villi.",
          answer: ["lacteals", "lacteal"],
          explain: "Lacteals are the lymph vessels in the villi.",
        },
        {
          kind: "mcq",
          q: "A one-year-old child shows severe wasting with no oedema; the diet lacks both protein and calories. The condition is most likely:",
          options: ["Kwashiorkor", "Marasmus", "Jaundice", "Constipation"],
          answer: 1,
          explain: "Marasmus is a combined protein and calorie deficiency in infants; kwashiorkor (protein lacking, calories adequate) typically shows oedema.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about fat absorption are correct?",
          options: [
            "Micelles carry fatty acids to the mucosa",
            "Chylomicrons are formed inside intestinal cells",
            "Chylomicrons enter blood capillaries of villi directly",
            "Fats reach blood when lymph drains into veins",
          ],
          answers: [0, 1, 3],
          explain: "Chylomicrons enter lacteals, not capillaries; they reach the blood via lymph.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-bio-digestion-exam-edge",
      title: "Exam edge: Digestion and Absorption",
      summary:
        "The digestion facts NEET and KCET asked when this chapter was in the syllabus, enzyme–product tables to memorise, statement and assertion–reason practice, and classic traps.",
      minutes: 22,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "callout",
          tone: "exam",
          title: "Who needs this",
          md: "The chapter left the current NEET syllabus with the rationalised NCERT, but older NEET (AIPMT) and KCET papers asked 2–4 questions from it each year, and ISC asks it in board exams. Its ideas (proenzymes, active transport, gut hormones, liver) still turn up inside other chapters, such as *Chemical Coordination* and *Biomolecules*.",
        },
        {
          type: "text",
          md: "Questions repeat around a few themes: **which cell secretes what**, **which enzyme gives which product**, **activation of proenzymes**, **pH of each juice**, **dental formula**, **absorption mechanisms** and **gut hormones**. Learn the tables as pairs, and practise reading statements for one wrong word.",
        },
        {
          type: "table",
          headers: ["Must-know pair", "Answer"],
          rows: [
            ["Salivary amylase pH / product", "6.8 / maltose (about 30% of starch in the mouth)"],
            ["Gastric pH", "About 1.8 (HCl from oxyntic cells)"],
            ["Intestinal pH", "About 7.8"],
            ["Pepsinogen activator", "HCl (and pepsin itself)"],
            ["Trypsinogen activator", "Enterokinase"],
            ["Milk-protein enzyme in infants", "Rennin"],
            ["Bile enzymes", "None"],
            ["Fat absorption route", "Micelles → chylomicrons → lacteals"],
          ],
        },
        {
          type: "example",
          title: "NEET-style: odd one out",
          problem: "Which enzyme is NOT present in pancreatic juice? (a) carboxypeptidase (b) nuclease (c) enterokinase (d) chymotrypsin",
          steps: [
            "Pancreatic juice: trypsinogen, chymotrypsinogen, procarboxypeptidases, amylase, lipases, nucleases.",
            "Enterokinase is secreted by the intestinal mucosa and activates trypsinogen.",
          ],
          answer: "(c) enterokinase.",
        },
        {
          type: "example",
          title: "Assertion and reason",
          problem: "Assertion (A): Pepsin is secreted as pepsinogen. Reason (R): An active protease in the gland cells would digest the cells themselves. Choose: (1) A and R true, R explains A; (2) both true, R does not explain A; (3) A true, R false; (4) A false.",
          steps: [
            "A is true: chief cells secrete inactive pepsinogen, which HCl activates in the lumen.",
            "R is true and is the very reason proteases are made as proenzymes.",
          ],
          answer: "(1): both true, and R correctly explains A.",
        },
        {
          type: "example",
          title: "KCET-style: dental formula",
          problem: "An adult has lost all four third molars (wisdom teeth). Write how many teeth remain and how many molars are left in each half-jaw.",
          steps: [
            "Adult total = 32 with 3 molars per half-jaw (12 molars).",
            "Losing one third molar from each of the four half-jaws removes 4 teeth.",
            "Teeth left = 32 − 4 = 28; molars per half-jaw = 3 − 1 = 2.",
          ],
          answer: "28 teeth; 2 molars in each half-jaw.",
        },
        {
          type: "example",
          title: "Harder: statement analysis",
          problem: "How many of these are correct? (i) Fructose is absorbed by simple diffusion only. (ii) Secretin stimulates release of bicarbonate from the pancreas. (iii) Brunner's glands lie in the sub-mucosa of the duodenum. (iv) Chylomicrons enter the hepatic portal vein directly.",
          steps: [
            "(i) Wrong: fructose uses carrier-mediated (facilitated) transport.",
            "(ii) Correct.",
            "(iii) Correct: duodenal sub-mucosal glands are Brunner's glands.",
            "(iv) Wrong: chylomicrons enter lacteals (lymph), not the portal vein.",
          ],
          answer: "Two statements, (ii) and (iii).",
        },
        {
          type: "mistake",
          wrong: "Oxyntic cells secrete pepsinogen and chief cells secrete HCl.",
          right: "**Oxyntic (parietal)** cells secrete HCl and intrinsic factor; **chief (peptic)** cells secrete pepsinogen.",
          why: "The two names are often swapped under exam pressure. Link *oxyntic* with *acid* (oxy- = sharp/acid) to remember.",
        },
        {
          type: "mistake",
          wrong: "Salivary amylase digests starch all the way to glucose.",
          right: "It stops at **maltose**; maltase in intestinal juice makes glucose.",
          why: "Amylases of saliva and pancreas cut starch into disaccharides only. Disaccharidases on the brush border give monosaccharides.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which enzyme would still work in a person with no gall bladder?",
            options: ["Pancreatic lipase, but less effectively", "No fat digestion at all", "Only salivary lipase"],
            answer: 0,
            trap: 1,
            explain: "Bile only emulsifies fat and activates lipase. Without stored bile, lipase still works on unemulsified fat, just more slowly, so fatty meals are digested poorly.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The hormone that inhibits gastric secretion and motility is:",
              options: ["Gastrin", "Secretin", "GIP", "CCK"],
              answer: 2,
              explain: "GIP (gastric inhibitory peptide) slows gastric secretion and emptying.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Pairs to know: oxyntic → HCl + intrinsic factor; chief → pepsinogen; enterokinase → trypsin.",
            "pH: saliva 6.8, stomach about 1.8, intestine about 7.8.",
            "Amylases stop at maltose; bile has no enzymes.",
            "Fructose: facilitated; glucose, amino acids, Na⁺: active; water: osmosis.",
            "Read every statement for one wrong word: cell name, product or route.",
          ],
        },
      ],
      flashcards: [
        { front: "Activator of trypsinogen", back: "Enterokinase from the intestinal mucosa." },
        { front: "Activator of pepsinogen", back: "HCl (and active pepsin itself)." },
        { front: "pH of chyme in the stomach", back: "About 1.8." },
        { front: "pH in small intestine", back: "About 7.8 (alkaline)." },
        { front: "Gut hormone that inhibits the stomach", back: "GIP, gastric inhibitory peptide." },
        { front: "Brunner's glands", back: "Sub-mucosal glands of the duodenum." },
        { front: "Starch fraction digested in mouth", back: "About 30%, to maltose." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which pair is correctly matched?",
          options: ["Chief cells – HCl", "Oxyntic cells – intrinsic factor", "Goblet cells – trypsinogen", "Liver – lipase"],
          answer: 1,
          explain: "Oxyntic cells secrete HCl and intrinsic factor. Chief cells secrete pepsinogen; goblet cells mucus; liver bile (no enzymes).",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which are secreted as inactive proenzymes?",
          options: ["Pepsinogen", "Trypsinogen", "Salivary amylase", "Chymotrypsinogen", "Lysozyme"],
          answers: [0, 1, 3],
          explain: "Proteases are secreted inactive. Amylase and lysozyme are secreted active.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Assertion: Bile helps fat digestion. Reason: Bile contains lipase. Choose the right option.",
          options: [
            "Both true; R explains A",
            "Both true; R does not explain A",
            "A true, R false",
            "A false, R true",
          ],
          answer: 2,
          explain: "Bile helps by emulsifying fats and activating lipase; it contains no lipase.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many teeth in an adult human are replaced from the milk set (i.e. have a milk predecessor)?",
          answer: 20,
          explain: "Milk set = 20 teeth (2102/2102 × 2). Those 20 are replaced; the 12 permanent molars have no milk predecessors.",
          difficulty: 3,
          hint: "The permanent molars erupt behind the milk teeth.",
        },
        {
          kind: "mcq",
          q: "A person who cannot produce enterokinase would most directly fail to digest:",
          options: ["Starch", "Proteins in the duodenum", "Fats in the stomach", "Lactose"],
          answer: 1,
          explain: "Without enterokinase trypsinogen is not activated, and trypsin is needed to activate chymotrypsinogen and procarboxypeptidase, so protein digestion in the small intestine fails.",
          difficulty: 3,
          hint: "Think of the activation cascade.",
        },
        {
          kind: "mcq",
          q: "The products of nucleosidase action are:",
          options: ["Nucleotides", "Nucleosides", "Sugars and bases", "Amino acids"],
          answer: 2,
          explain: "Nucleotidases turn nucleotides into nucleosides; nucleosidases split nucleosides into sugars and bases.",
        },
        {
          kind: "mcq",
          q: "Which hormone causes contraction of the gall bladder?",
          options: ["Secretin", "Gastrin", "Cholecystokinin", "GIP"],
          answer: 2,
          explain: "CCK contracts the gall bladder and stimulates pancreatic enzyme secretion.",
        },
        {
          kind: "multi",
          q: "Which are absorbed in the stomach?",
          options: ["Alcohol", "Water", "Fatty acids", "Simple sugars", "Chylomicrons"],
          answers: [0, 1, 3],
          explain: "The stomach absorbs water, simple sugars and alcohol. Fats are absorbed in the small intestine.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* NCERT Class 11: Breathing and Exchange of Gases                      */
/* ------------------------------------------------------------------ */
const breathing: Topic = {
  slug: "c11-bio-breathing-exchange-gases",
  title: "Breathing and Exchange of Gases",
  icon: "🫁",
  description:
    "Respiratory organs in animals, the human respiratory system, the mechanism of breathing, lung volumes, exchange and transport of O₂ and CO₂, regulation of breathing and respiratory disorders.",
  lessons: [
    {
      slug: "c11-bio-respiratory-organs",
      title: "Respiratory Organs and the Human Respiratory System",
      summary:
        "Breathing versus cellular respiration, respiratory organs across the animal kingdom, and the human airways, lungs, pleura and thoracic chamber.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Run up three flights of stairs and you breathe faster without deciding to. Cells use O₂ to break down glucose and fatty acids for energy and release CO₂, which is harmful in excess. So O₂ must be brought in continuously and CO₂ removed. This exchange of O₂ from the atmosphere with CO₂ produced by cells is called **breathing**, commonly known as respiration.\n\nDo not confuse it with **cellular respiration**, the chemical breakdown of food inside cells (studied in *Respiration in Plants*).",
        },
        { type: "heading", text: "Respiratory organs in animals" },
        {
          type: "table",
          headers: ["Animals", "How they exchange gases"],
          rows: [
            ["Sponges, coelenterates, flatworms", "Simple diffusion over the whole body surface"],
            ["Earthworms", "Moist cuticle (skin)"],
            ["Insects", "Network of tubes, the **tracheal tubes**"],
            ["Most aquatic arthropods and molluscs", "Special vascular structures called **gills** (branchial respiration)"],
            ["Fishes", "Gills"],
            ["Terrestrial animals", "Vascular bags called **lungs** (pulmonary respiration)"],
            ["Amphibians (frogs)", "Lungs, and also through moist skin (cutaneous respiration)"],
            ["Reptiles, birds, mammals", "Lungs"],
          ],
        },
        {
          type: "text",
          md: "The choice of mechanism depends mainly on the **habitat** and the **level of organisation** of the animal.",
        },
        { type: "heading", text: "The human respiratory system" },
        {
          type: "list",
          ordered: true,
          items: [
            "A pair of **external nostrils** opens out above the upper lip and leads through the **nasal passage** into the **nasal chamber**.",
            "The nasal chamber opens into the **pharynx**, a common passage for food and air.",
            "The pharynx opens through the larynx into the trachea. The **larynx** is a cartilaginous box that helps in sound production (the sound box). During swallowing, the glottis is covered by the **epiglottis**, a thin elastic cartilaginous flap, so food does not enter the larynx.",
            "The **trachea** is a straight tube running down to the mid-thoracic cavity, where it divides at the level of the **5th thoracic vertebra** into the right and left **primary bronchi**.",
            "Each bronchus divides into secondary and tertiary bronchi and then into bronchioles, ending in very thin **terminal bronchioles**.",
            "Terminal bronchioles give rise to many very thin, irregular-walled, vascularised bag-like structures, the **alveoli**.",
          ],
        },
        {
          type: "text",
          md: "The trachea, primary, secondary and tertiary bronchi and the initial bronchioles are supported by **incomplete cartilaginous rings**, which keep them from collapsing. The branching network of bronchi, bronchioles and alveoli makes up the **lungs**.\n\nThe lungs are covered by a double-layered **pleura** with **pleural fluid** between the layers, which reduces friction on the lung surface. The outer pleural membrane is in close contact with the thoracic lining; the inner one touches the lung surface.",
        },
        {
          type: "table",
          headers: ["Part", "Extent", "Job"],
          rows: [
            ["Conducting part", "External nostrils up to the terminal bronchioles", "Carries air to the alveoli, clears it of foreign particles, humidifies it and brings it to body temperature"],
            ["Respiratory or exchange part", "Alveoli and their ducts", "Actual site of diffusion of O₂ and CO₂ between blood and air"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The trachea divides into the primary bronchi at the level of the:",
              options: ["3rd cervical vertebra", "5th thoracic vertebra", "1st lumbar vertebra", "12th thoracic vertebra"],
              answer: 1,
              explain: "The trachea divides into right and left primary bronchi at about the 5th thoracic vertebra.",
            },
          ],
        },
        {
          type: "text",
          md: "The lungs lie in the **thoracic chamber**, an air-tight chamber formed dorsally by the **vertebral column**, ventrally by the **sternum**, laterally by the **ribs** and on the lower side by the dome-shaped **diaphragm**. Because it is air-tight, any change in the volume of the thoracic cavity is reflected in the lung (pulmonary) cavity. This is what makes breathing possible.",
        },
        {
          type: "example",
          title: "Steps of respiration",
          problem: "List the steps by which an O₂ molecule from the air reaches a muscle cell and a CO₂ molecule leaves it.",
          steps: [
            "Breathing or pulmonary ventilation: atmospheric air is drawn in and CO₂-rich alveolar air is released out.",
            "Diffusion of gases (O₂ and CO₂) across the alveolar membrane.",
            "Transport of gases by the blood.",
            "Diffusion of O₂ and CO₂ between blood and tissues.",
            "Utilisation of O₂ by cells for catabolic reactions and the release of CO₂ (cellular respiration).",
          ],
          answer: "Ventilation → alveolar diffusion → transport in blood → tissue diffusion → cellular respiration.",
        },
        {
          type: "mistake",
          wrong: "Gas exchange happens all along the airways, in the trachea and bronchi too.",
          right: "Exchange happens only in the **respiratory part** (alveoli and their ducts). The conducting part only carries, cleans, warms and moistens the air.",
          why: "Air touches the whole airway, so it seems gases could cross anywhere. But only the alveoli have walls thin enough and are wrapped in dense capillary networks; the cartilage-supported tubes are too thick.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each animal with its respiratory organ.",
            pairs: [
              ["Cockroach", "Tracheal tubes"],
              ["Earthworm", "Moist cuticle"],
              ["Prawn", "Gills"],
              ["Hydra", "Whole body surface"],
              ["Pigeon", "Lungs"],
            ],
            explain: "Simple animals use the body surface; earthworms their moist skin; insects tracheae; aquatic arthropods gills; birds and other land vertebrates lungs.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Breathing exchanges O₂ and CO₂ with the environment; cellular respiration uses O₂ inside cells.",
            "Organs: body surface, moist cuticle, tracheae, gills, lungs, skin (frogs).",
            "Airway: nostrils → nasal chamber → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.",
            "Trachea divides at T5; cartilaginous rings up to the initial bronchioles; lungs wrapped in double pleura.",
            "Conducting part: nostrils to terminal bronchioles; exchange part: alveoli and ducts.",
          ],
        },
      ],
      flashcards: [
        { front: "Epiglottis", back: "Thin elastic cartilaginous flap that covers the glottis during swallowing." },
        { front: "Larynx", back: "Cartilaginous box (sound box) that helps in sound production." },
        { front: "Where does the trachea divide?", back: "At the level of the 5th thoracic vertebra, into right and left primary bronchi." },
        { front: "Pleural fluid", back: "Fluid between the two pleural layers; reduces friction on the lung surface." },
        { front: "Conducting part of the respiratory system", back: "External nostrils up to terminal bronchioles: transports, cleans, humidifies and warms air." },
        { front: "Cutaneous respiration", back: "Gas exchange through moist skin, as in frogs." },
        { front: "Walls of the thoracic chamber", back: "Vertebral column (dorsal), sternum (ventral), ribs (lateral), diaphragm (below)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Respiratory organs of insects are:",
          options: ["Gills", "Tracheal tubes", "Book lungs only", "Moist skin"],
          answer: 1,
          explain: "Insects breathe through a network of tracheal tubes.",
        },
        {
          kind: "mcq",
          q: "Which of these is part of the exchange (respiratory) region?",
          options: ["Trachea", "Tertiary bronchi", "Alveolar ducts", "Pharynx"],
          answer: 2,
          explain: "The alveoli and their ducts form the exchange part; the rest conducts air.",
        },
        {
          kind: "truefalse",
          q: "The thoracic chamber is anatomically air-tight.",
          answer: true,
          explain: "Because it is air-tight, a change in thoracic volume changes lung volume and pressure.",
        },
        {
          kind: "fill",
          q: "The lungs are covered by a double-layered membrane called the ___.",
          answer: ["pleura"],
          explain: "The pleura with pleural fluid between its layers protects the lungs and reduces friction.",
        },
        {
          kind: "multi",
          q: "Which structures are supported by incomplete cartilaginous rings?",
          options: ["Trachea", "Primary bronchi", "Tertiary bronchi", "Alveoli", "Initial bronchioles"],
          answers: [0, 1, 2, 4],
          explain: "Rings support the trachea, all bronchi and the initial bronchioles; alveoli have very thin walls without cartilage.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange the path of inhaled air.",
          items: ["External nostrils", "Nasal chamber", "Pharynx", "Larynx", "Trachea", "Bronchi"],
          explain: "Nostrils → nasal chamber → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.",
        },
        {
          kind: "mcq",
          q: "The mechanism of breathing in an animal depends mainly on:",
          options: ["Its size alone", "Its habitat and level of organisation", "Its diet", "Its colour"],
          answer: 1,
          explain: "Habitat (water or land) and body organisation decide the breathing mechanism.",
        },
      ],
    },
    {
      slug: "c11-bio-mechanism-of-breathing",
      title: "Mechanism of Breathing and Respiratory Volumes",
      summary:
        "How the diaphragm and intercostal muscles create pressure gradients for inspiration and expiration, breathing rate, the spirometer, and lung volumes and capacities.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Air moves only from higher to lower pressure. Breathing works by changing the volume of the thoracic chamber, which changes the pressure inside the lungs (**intra-pulmonary pressure**) compared with the **atmospheric pressure**.\n\nBreathing has two stages: **inspiration** (air drawn in) and **expiration** (alveolar air released out).",
        },
        {
          type: "table",
          headers: ["", "Inspiration", "Expiration"],
          rows: [
            ["Diaphragm", "Contracts and flattens; thoracic volume rises along the antero-posterior axis", "Relaxes and returns to its dome shape"],
            ["External intercostal muscles", "Contract and lift the ribs and sternum; volume rises along the dorso-ventral axis", "Relax; ribs and sternum come back"],
            ["Thoracic and pulmonary volume", "Increases", "Decreases"],
            ["Intra-pulmonary pressure", "Falls below atmospheric pressure", "Rises slightly above atmospheric pressure"],
            ["Air flow", "Into the lungs", "Out of the lungs"],
          ],
        },
        {
          type: "text",
          md: "Quiet expiration is mostly **passive**: the muscles simply relax. We can increase the strength of inspiration and expiration with the help of **additional muscles in the abdomen** (and internal intercostals) during exercise or forceful breathing.\n\nA healthy adult breathes **12–16 times per minute**. The volume of air involved can be measured with a **spirometer**, which helps in the clinical assessment of lung function.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "During inspiration the intra-pulmonary pressure is:",
              options: ["Higher than atmospheric", "Equal to atmospheric", "Lower than atmospheric", "Zero"],
              answer: 2,
              explain: "Lung volume increases, so pressure falls below atmospheric and air rushes in.",
            },
          ],
        },
        { type: "heading", text: "Respiratory volumes and capacities" },
        {
          type: "table",
          headers: ["Volume", "Meaning", "Healthy adult value"],
          rows: [
            ["Tidal volume (TV)", "Air inspired or expired during a normal breath", "About 500 mL (6000–8000 mL per minute)"],
            ["Inspiratory reserve volume (IRV)", "Extra air that can be inspired by forcible inspiration", "2500–3000 mL"],
            ["Expiratory reserve volume (ERV)", "Extra air that can be expired by forcible expiration", "1000–1100 mL"],
            ["Residual volume (RV)", "Air that stays in the lungs even after forcible expiration", "1100–1200 mL"],
          ],
        },
        {
          type: "formula",
          tex: t`\begin{aligned} \text{IC} &= \text{TV} + \text{IRV} & \text{EC} &= \text{TV} + \text{ERV} \\ \text{FRC} &= \text{ERV} + \text{RV} & \text{VC} &= \text{ERV} + \text{TV} + \text{IRV} \\ \text{TLC} &= \text{VC} + \text{RV} & & \end{aligned}`,
          caption: "Capacities are sums of volumes. IC inspiratory capacity, EC expiratory capacity, FRC functional residual capacity, VC vital capacity, TLC total lung capacity.",
        },
        {
          type: "text",
          md: "**Vital capacity** is the maximum volume of air a person can breathe in after a forced expiration (or breathe out after a forced inspiration). **Total lung capacity** is all the air in the lungs at the end of a forced inspiration. **Functional residual capacity** is the air left in the lungs after a normal expiration.",
        },
        {
          type: "example",
          title: "Working out capacities",
          problem: "A spirometer test on an athlete gives TV = 500 mL, IRV = 3000 mL, ERV = 1100 mL and RV = 1200 mL. Find IC, FRC, VC and TLC. If she breathes 14 times a minute at rest, what volume does she move per minute?",
          steps: [
            "IC = TV + IRV = 500 + 3000 = 3500 mL.",
            "FRC = ERV + RV = 1100 + 1200 = 2300 mL.",
            "VC = ERV + TV + IRV = 1100 + 500 + 3000 = 4600 mL.",
            "TLC = VC + RV = 4600 + 1200 = 5800 mL.",
            "Volume per minute = TV × rate = 500 × 14 = 7000 mL.",
          ],
          answer: "IC 3500 mL, FRC 2300 mL, VC 4600 mL, TLC 5800 mL; 7000 mL (7 L) per minute.",
        },
        {
          type: "mistake",
          wrong: "Vital capacity is all the air the lungs can hold.",
          right: "That is **total lung capacity**. Vital capacity leaves out the **residual volume**, which can never be breathed out: TLC = VC + RV.",
          why: "*Vital* sounds like *everything*. But some air always stays in the alveoli and airways, keeping them open, and a spirometer cannot record it.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the events of inspiration.",
            items: [
              "Diaphragm and external intercostal muscles contract",
              "Thoracic chamber volume increases",
              "Pulmonary volume increases",
              "Intra-pulmonary pressure falls below atmospheric",
              "Air moves into the lungs",
            ],
            explain: "Muscle contraction comes first; volume change causes the pressure change, and the pressure gradient moves the air.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In a 3-mark answer on the mechanism of breathing, name both muscles, say which axis each enlarges (diaphragm: antero-posterior; external intercostals: dorso-ventral) and state the pressure change. Write the capacity relations as equations; marks are often given for the correct sums.",
        },
        {
          type: "keypoints",
          items: [
            "Breathing depends on pressure gradients created by changing thoracic volume.",
            "Inspiration: diaphragm and external intercostals contract; expiration at rest is passive.",
            "Rate 12–16 per minute; measured with a spirometer.",
            "TV 500, IRV 2500–3000, ERV 1000–1100, RV 1100–1200 mL.",
            "VC = TV + IRV + ERV; TLC = VC + RV; FRC = ERV + RV.",
          ],
        },
      ],
      flashcards: [
        { front: "Muscles of quiet inspiration", back: "Diaphragm and external intercostal muscles." },
        { front: "Is normal expiration active or passive?", back: "Passive: the muscles relax and the lungs recoil." },
        { front: "Tidal volume", back: "About 500 mL: air moved in a normal breath." },
        { front: "Residual volume", back: "1100–1200 mL: air left after forcible expiration." },
        { front: "Vital capacity", back: "ERV + TV + IRV: maximum air breathed out after a forced inspiration." },
        { front: "Functional residual capacity", back: "ERV + RV: air left after a normal expiration." },
        { front: "Normal breathing rate", back: "12–16 breaths per minute." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "TV = 500 mL, IRV = 2500 mL, ERV = 1000 mL. What is the vital capacity in mL?",
          answer: 4000,
          unit: "mL",
          explain: "VC = 500 + 2500 + 1000 = 4000 mL.",
        },
        {
          kind: "mcq",
          q: "Which volume cannot be measured directly by a spirometer?",
          options: ["Tidal volume", "Residual volume", "Inspiratory reserve volume", "Expiratory reserve volume"],
          answer: 1,
          explain: "Residual volume never leaves the lungs, so it cannot be breathed into a spirometer; nor can TLC or FRC that include it.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Contraction of the diaphragm increases the volume of the thoracic chamber in the antero-posterior axis.",
          answer: true,
          explain: "The diaphragm flattens and lengthens the chest from front to back (antero-posterior axis).",
        },
        {
          kind: "fill",
          q: "Expiratory capacity = tidal volume + ___.",
          answer: ["ERV", "expiratory reserve volume"],
          explain: "EC = TV + ERV.",
        },
        {
          kind: "numeric",
          q: "A person has a tidal volume of 500 mL and breathes 16 times a minute. How many mL of air does she breathe per minute?",
          answer: 8000,
          unit: "mL",
          explain: "500 × 16 = 8000 mL.",
        },
        {
          kind: "mcq",
          q: "Inspiratory capacity includes:",
          options: ["TV + ERV", "TV + IRV", "ERV + RV", "VC + RV"],
          answer: 1,
          explain: "IC = TV + IRV, all the air you can breathe in after a normal expiration.",
        },
        {
          kind: "numeric",
          q: "VC = 4500 mL and RV = 1200 mL. What is the total lung capacity in mL?",
          answer: 5700,
          unit: "mL",
          explain: "TLC = VC + RV = 4500 + 1200 = 5700 mL.",
        },
      ],
    },
    {
      slug: "c11-bio-gas-exchange-transport",
      title: "Exchange and Transport of Gases, Regulation and Disorders",
      summary:
        "Partial pressures, the diffusion membrane, how haemoglobin and plasma carry O₂ and CO₂, the oxygen dissociation curve, control of breathing and respiratory disorders.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Alveoli are the primary sites of gas exchange; exchange also happens between blood and tissues. Gases cross by **simple diffusion**, driven by differences in **partial pressure** (the pressure each gas in a mixture contributes, written pO₂ and pCO₂). Diffusion also depends on how soluble the gas is and how thick the membrane is.",
        },
        {
          type: "table",
          headers: ["Site", "pO₂ (mm Hg)", "pCO₂ (mm Hg)"],
          rows: [
            ["Atmospheric air", "159", "0.3"],
            ["Alveoli", "104", "40"],
            ["Deoxygenated blood", "40", "45"],
            ["Oxygenated blood", "95", "40"],
            ["Tissues", "40", "45"],
          ],
        },
        {
          type: "text",
          md: "O₂ moves from alveoli (104) to deoxygenated blood (40) and from oxygenated blood (95) to tissues (40). CO₂ moves the other way: tissues (45) → blood, and blood (45) → alveoli (40). The CO₂ gradient is small, but CO₂ is **20–25 times more soluble** than O₂, so much more CO₂ diffuses per unit difference.\n\nThe **diffusion membrane** has three layers: the thin squamous epithelium of the alveoli, the endothelium of the alveolar capillaries and the basement substance between them. Its total thickness is much less than a millimetre, which favours diffusion.",
        },
        { type: "heading", text: "Transport of oxygen" },
        {
          type: "text",
          md: "About **97%** of O₂ is carried by RBCs and **3%** dissolved in plasma. **Haemoglobin** is a red, iron-containing pigment in RBCs; each haemoglobin molecule can carry up to **four O₂** molecules, binding reversibly to form **oxyhaemoglobin**. Binding depends mainly on pO₂; pCO₂, H⁺ concentration and temperature also affect it.\n\nPlotting percentage saturation of haemoglobin against pO₂ gives a **sigmoid** curve, the **oxygen dissociation curve**. In the alveoli (high pO₂, low pCO₂, fewer H⁺, lower temperature) oxyhaemoglobin forms; in the tissues (low pO₂, high pCO₂, more H⁺, higher temperature) O₂ is released. Under normal conditions, every **100 mL of oxygenated blood delivers about 5 mL of O₂** to the tissues.",
        },
        {
          type: "formula",
          tex: t`\mathrm{CO_2 + H_2O \;\underset{\text{carbonic anhydrase}}{\rightleftharpoons}\; H_2CO_3 \;\rightleftharpoons\; HCO_3^- + H^+}`,
          caption: "In the tissues the reaction runs to the right (bicarbonate formed); in the alveoli it runs to the left and CO₂ is released.",
        },
        { type: "heading", text: "Transport of carbon dioxide" },
        {
          type: "text",
          md: "CO₂ is carried: about **20–25%** by haemoglobin as **carbamino-haemoglobin**, about **70%** as **bicarbonate**, and about **7%** dissolved in plasma. Carbamino binding depends on pCO₂, and pO₂ also matters: high pCO₂ and low pO₂ in tissues favour binding; low pCO₂ and high pO₂ in the alveoli release CO₂. The enzyme **carbonic anhydrase**, very concentrated in RBCs (minute amounts in plasma), speeds up the reaction above. Every **100 mL of deoxygenated blood delivers about 4 mL of CO₂** to the alveoli.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Most CO₂ is carried in blood as:",
              options: ["Carbamino-haemoglobin", "Dissolved CO₂", "Bicarbonate", "Carbonic acid"],
              answer: 2,
              explain: "About 70% of CO₂ travels as bicarbonate; 20–25% as carbamino-haemoglobin and about 7% dissolved.",
            },
          ],
        },
        {
          type: "text",
          md: "**Regulation of respiration.** A **respiratory rhythm centre** in the **medulla** sets the rhythm. A **pneumotaxic centre** in the **pons** can moderate it: its signal reduces the duration of inspiration and so alters the breathing rate. A **chemosensitive area** next to the rhythm centre is highly sensitive to **CO₂ and H⁺**; when they rise, it signals the rhythm centre to remove them faster. Receptors in the **aortic arch** and **carotid artery** also detect changes in CO₂ and H⁺. The role of O₂ in regulating breathing is quite insignificant.",
        },
        {
          type: "table",
          headers: ["Disorder", "Cause and effect"],
          rows: [
            ["Asthma", "Difficulty in breathing with wheezing, due to inflammation of bronchi and bronchioles"],
            ["Emphysema", "Chronic disorder; alveolar walls are damaged, so the respiratory surface decreases. A major cause is cigarette smoking."],
            ["Occupational respiratory disorders", "Long exposure to dust (stone-grinding, mining) causes inflammation and fibrosis (proliferation of fibrous tissue) and serious lung damage; e.g. silicosis, asbestosis. Workers should wear protective masks."],
          ],
        },
        {
          type: "example",
          title: "Oxygen delivered per minute",
          problem: "At rest the heart pumps about 5 L of blood per minute. Using NCERT's figure that 100 mL of oxygenated blood delivers about 5 mL of O₂ to tissues, how much O₂ do the tissues receive each minute?",
          steps: [
            "5 L = 5000 mL of blood per minute.",
            "Number of 100 mL portions = 5000 ÷ 100 = 50.",
            "O₂ delivered = 50 × 5 mL = 250 mL per minute.",
          ],
          answer: "About 250 mL of O₂ per minute (more during exercise, when tissue pO₂ falls further).",
        },
        {
          type: "mistake",
          wrong: "Low O₂ in the blood is the main trigger that makes us breathe faster.",
          right: "The main triggers are a rise in **CO₂ and H⁺**, sensed by the chemosensitive area of the medulla and by receptors in the aortic arch and carotid artery. O₂ plays an insignificant role.",
          why: "We breathe to get O₂, so it seems O₂ should drive breathing. But at normal altitudes blood O₂ hardly changes, while CO₂ builds up quickly whenever breathing lags.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Where do these conditions favour what? Sort them.",
            groups: ["Favour forming oxyhaemoglobin (alveoli)", "Favour releasing O₂ (tissues)"],
            items: [
              { text: "High pO₂", group: 0, hint: "O₂ is plentiful in fresh alveolar air." },
              { text: "Low pCO₂", group: 0, hint: "Alveolar CO₂ is only about 40 mm Hg." },
              { text: "High H⁺ concentration", group: 1, hint: "Active tissues are more acidic." },
              { text: "Higher temperature", group: 1, hint: "Working muscles are warm." },
              { text: "Lower temperature", group: 0, hint: "Lung capillaries are cooler than working muscle." },
              { text: "High pCO₂", group: 1, hint: "Tissues produce CO₂." },
            ],
            explain: "Alveolar conditions load O₂ onto haemoglobin; tissue conditions (low pO₂, high pCO₂, high H⁺, warmth) unload it, shifting the curve to the right.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Exchange by diffusion down partial pressure gradients; alveolar pO₂ 104, pCO₂ 40 mm Hg.",
            "CO₂ is 20–25 times more soluble than O₂; the diffusion membrane has three thin layers.",
            "O₂: 97% as oxyhaemoglobin, 3% in plasma; 100 mL blood gives about 5 mL O₂ to tissues.",
            "CO₂: about 70% as bicarbonate, 20–25% carbamino-haemoglobin, 7% in plasma; carbonic anhydrase in RBCs.",
            "Control: rhythm centre (medulla), pneumotaxic centre (pons), chemosensitive area for CO₂ and H⁺.",
          ],
        },
      ],
      flashcards: [
        { front: "pO₂ and pCO₂ of alveolar air", back: "104 and 40 mm Hg." },
        { front: "pO₂ and pCO₂ of deoxygenated blood", back: "40 and 45 mm Hg." },
        { front: "Three layers of the diffusion membrane", back: "Alveolar squamous epithelium, capillary endothelium, basement substance between them." },
        { front: "Shape of the oxygen dissociation curve", back: "Sigmoid (S-shaped)." },
        { front: "Carbonic anhydrase", back: "Enzyme, mainly in RBCs, that speeds CO₂ + H₂O ⇌ H₂CO₃." },
        { front: "Pneumotaxic centre", back: "In the pons; shortens inspiration and changes breathing rate." },
        { front: "Emphysema", back: "Alveolar walls damaged, respiratory surface reduced; mainly due to smoking." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "pO₂ in oxygenated blood is about:",
          options: ["159 mm Hg", "104 mm Hg", "95 mm Hg", "40 mm Hg"],
          answer: 2,
          explain: "Oxygenated blood has pO₂ about 95 mm Hg; alveoli 104, atmosphere 159, tissues 40.",
        },
        {
          kind: "numeric",
          q: "About what percentage of O₂ is carried dissolved in plasma?",
          answer: 3,
          unit: "%",
          explain: "97% is carried by haemoglobin in RBCs, 3% in plasma.",
        },
        {
          kind: "truefalse",
          q: "The chemosensitive area near the respiratory rhythm centre responds mainly to changes in CO₂ and H⁺.",
          answer: true,
          explain: "It is highly sensitive to CO₂ and H⁺, and signals the rhythm centre.",
        },
        {
          kind: "mcq",
          q: "Wheezing due to inflammation of the bronchi and bronchioles is seen in:",
          options: ["Emphysema", "Asthma", "Silicosis", "Pneumonia only"],
          answer: 1,
          explain: "Asthma is difficulty in breathing with wheezing due to inflamed bronchi and bronchioles.",
        },
        {
          kind: "fill",
          q: "CO₂ bound to haemoglobin is called ___.",
          answer: ["carbamino-haemoglobin", "carbaminohaemoglobin", "carbamino haemoglobin", "carbaminohemoglobin"],
          explain: "CO₂ binds to the amino groups of haemoglobin as carbamino-haemoglobin.",
        },
        {
          kind: "numeric",
          q: "A person's cardiac output is 6 L per minute. Using 4 mL of CO₂ released per 100 mL of deoxygenated blood, how many mL of CO₂ reach the alveoli per minute?",
          answer: 240,
          unit: "mL",
          explain: "6000 ÷ 100 = 60 portions; 60 × 4 = 240 mL per minute.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which factors favour release of O₂ from oxyhaemoglobin in tissues?",
          options: ["Low pO₂", "High pCO₂", "Low H⁺", "High temperature", "Low temperature"],
          answers: [0, 1, 3],
          explain: "Low pO₂, high pCO₂, high H⁺ and high temperature favour dissociation.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-bio-breathing-exam-edge",
      title: "Exam edge: Breathing and Exchange of Gases",
      summary:
        "What NEET and KCET ask from this chapter: partial pressures, lung volume arithmetic, CO₂ transport percentages, oxygen dissociation curve shifts, regulation centres, and the traps behind them.",
      minutes: 24,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "callout",
          tone: "exam",
          title: "Why this chapter matters",
          md: "Human physiology carries heavy weight in NEET Biology, and this chapter gives about 1–2 NEET questions and 1–2 KCET questions most years. Favourites: **partial pressure table**, **volumes and capacities sums**, **CO₂ transport percentages**, **factors shifting the oxygen dissociation curve**, **pneumotaxic centre** and **disorders**.",
        },
        {
          type: "table",
          headers: ["Result worth memorising", "Value / rule"],
          rows: [
            ["Capacities", "IC = TV + IRV; EC = TV + ERV; FRC = ERV + RV; VC = TV + IRV + ERV; TLC = VC + RV"],
            ["Not measurable by spirometer", "RV, FRC, TLC (all contain RV)"],
            ["Solubility", "CO₂ is 20–25 times more soluble than O₂"],
            ["O₂ transport", "97% Hb, 3% plasma; about 5 mL per 100 mL blood to tissues"],
            ["CO₂ transport", "70% bicarbonate, 20–25% carbamino-Hb, 7% plasma; about 4 mL per 100 mL to alveoli"],
            ["Right shift of dissociation curve", "High pCO₂, high H⁺ (low pH), high temperature: Hb gives up O₂ more easily (the Bohr effect, a name used beyond NCERT)"],
          ],
        },
        {
          type: "text",
          md: "**NCERT lines NEET likes to test**: the trachea divides at the 5th thoracic vertebra; the role of oxygen in regulation is quite insignificant; the pneumotaxic centre reduces the duration of inspiration; the diffusion membrane is much less than a millimetre thick; a healthy human breathes 12–16 times a minute.",
        },
        {
          type: "example",
          title: "NEET-style: volume arithmetic",
          problem: "Which gives the functional residual capacity? (a) TV + ERV (b) ERV + RV (c) IRV + TV + ERV (d) TV + IRV",
          steps: [
            "FRC = air left after a normal (tidal) expiration.",
            "After a normal expiration you could still push out the ERV, and the RV would stay behind.",
            "So FRC = ERV + RV.",
          ],
          answer: "(b) ERV + RV.",
        },
        {
          type: "example",
          title: "Assertion and reason",
          problem: "Assertion (A): Although the pCO₂ gradient between blood and alveoli is only about 5 mm Hg, CO₂ exchange is efficient. Reason (R): CO₂ is 20–25 times more soluble than O₂. Choose: (1) both true, R explains A; (2) both true, R does not explain A; (3) A true, R false; (4) A false, R true.",
          steps: [
            "Gradient: deoxygenated blood 45 → alveoli 40, so only 5 mm Hg. A is true.",
            "Rate of diffusion depends on solubility as well as gradient, so the higher solubility of CO₂ makes up for the small gradient. R is true and explains A.",
          ],
          answer: "(1).",
        },
        {
          type: "example",
          title: "KCET-style: reading the curve",
          problem: "During heavy exercise a muscle's temperature rises and lactic acid lowers its pH. How does the oxygen dissociation curve shift, and what does it mean for the muscle?",
          steps: [
            "Higher temperature and higher H⁺ lower haemoglobin's affinity for O₂.",
            "Lower affinity means less saturation at the same pO₂: the curve shifts to the right.",
            "So more O₂ is unloaded in the working muscle, exactly where it is needed.",
          ],
          answer: "Right shift; haemoglobin releases more O₂ to the exercising muscle.",
        },
        {
          type: "example",
          title: "Harder: combining numbers",
          problem: "A climber has TV = 450 mL, IRV = 2800 mL, ERV = 1050 mL, RV = 1150 mL. After acclimatisation her breathing rate becomes 20 per minute with the same TV. Find her VC, TLC and the air moved per minute. Which of these values cannot be found with a simple spirometer?",
          steps: [
            "VC = 450 + 2800 + 1050 = 4300 mL.",
            "TLC = VC + RV = 4300 + 1150 = 5450 mL.",
            "Air per minute = 450 × 20 = 9000 mL = 9 L.",
            "TLC contains RV, which a spirometer cannot record, so TLC (like RV) cannot be found directly.",
          ],
          answer: "VC 4300 mL, TLC 5450 mL, 9 L per minute; TLC (and RV) need other methods.",
        },
        {
          type: "mistake",
          wrong: "Most CO₂ is carried by haemoglobin as carbamino-haemoglobin.",
          right: "About **70%** travels as **bicarbonate**; only 20–25% as carbamino-haemoglobin.",
          why: "Since haemoglobin carries most O₂ (97%), students assume it carries most CO₂ too. CO₂ is mainly converted to HCO₃⁻ by carbonic anhydrase.",
        },
        {
          type: "mistake",
          wrong: "The pneumotaxic centre is in the medulla and increases inspiration.",
          right: "The pneumotaxic centre is in the **pons**; it **reduces the duration of inspiration**. The rhythm centre and chemosensitive area are in the medulla.",
          why: "All breathing centres get lumped together as *medulla*. Questions swap the location or the action to make a wrong option.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which site has the lowest pO₂?",
            options: ["Alveoli", "Oxygenated blood", "Tissues", "Atmospheric air"],
            answer: 2,
            trap: 1,
            explain: "Tissues (and deoxygenated blood) have pO₂ about 40 mm Hg, the lowest. Oxygenated blood is 95, alveoli 104, air 159.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Silicosis and asbestosis are examples of:",
              options: ["Emphysema", "Occupational respiratory disorders", "Asthma", "Infectious diseases"],
              answer: 1,
              explain: "Long exposure to dust causes fibrosis of the lungs; these are occupational disorders.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn the partial pressure table and capacity sums; most NEET questions come straight from them.",
            "RV, FRC and TLC cannot be measured with a spirometer.",
            "O₂: 97% Hb; CO₂: 70% HCO₃⁻.",
            "Right shift: high pCO₂, H⁺ and temperature, as in exercising tissues.",
            "Pons = pneumotaxic (shortens inspiration); medulla = rhythm centre + chemosensitive area.",
          ],
        },
      ],
      flashcards: [
        { front: "Which volumes cannot be measured by a spirometer?", back: "RV and any capacity that includes it: FRC, TLC." },
        { front: "pCO₂ gradient blood → alveoli", back: "45 → 40 mm Hg, only 5 mm Hg." },
        { front: "Right shift of the O₂ dissociation curve", back: "Caused by high pCO₂, high H⁺, high temperature; O₂ unloads more easily." },
        { front: "O₂ given to tissues per 100 mL blood", back: "About 5 mL." },
        { front: "CO₂ given to alveoli per 100 mL blood", back: "About 4 mL." },
        { front: "Receptors outside the brain sensing CO₂ and H⁺", back: "In the aortic arch and carotid artery." },
        { front: "Where is the respiratory rhythm centre?", back: "Medulla oblongata." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is NOT correct about the human diffusion membrane?",
          options: [
            "It includes the alveolar squamous epithelium",
            "It includes the capillary endothelium",
            "Its total thickness is several millimetres",
            "It includes a basement substance",
          ],
          answer: 2,
          explain: "The membrane is much less than a millimetre thick, which allows fast diffusion.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "IRV = 2600 mL, TV = 500 mL, ERV = 1000 mL, RV = 1200 mL. What is the total lung capacity in mL?",
          answer: 5300,
          unit: "mL",
          explain: "VC = 2600 + 500 + 1000 = 4100; TLC = 4100 + 1200 = 5300 mL.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Assertion: Expiration during quiet breathing is passive. Reason: Expiration occurs when the diaphragm and external intercostal muscles relax. Choose:",
          options: ["Both true; R explains A", "Both true; R does not explain A", "A true, R false", "A false, R true"],
          answer: 0,
          explain: "Quiet expiration needs no muscle contraction: relaxation of the diaphragm and external intercostals lets the chest recoil.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements are correct?",
          options: [
            "About 7% of CO₂ is carried dissolved in plasma",
            "Carbonic anhydrase is present in high concentration in RBCs",
            "Each haemoglobin molecule carries up to two O₂ molecules",
            "The oxygen dissociation curve is sigmoid",
          ],
          answers: [0, 1, 3],
          explain: "Each haemoglobin can carry up to four O₂ molecules.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "If a person's pons were damaged so that the pneumotaxic centre could not act, the most likely effect is:",
          options: [
            "Breathing stops completely",
            "Inspirations become longer and deeper (prolonged inspiration)",
            "The chemosensitive area stops responding to CO₂",
            "Expiration becomes active at rest",
          ],
          answer: 1,
          explain: "The pneumotaxic centre normally shortens inspiration; without it, inspiration is prolonged. The rhythm centre in the medulla still keeps breathing going.",
          difficulty: 3,
          hint: "What does the pneumotaxic signal normally do to inspiration?",
        },
        {
          kind: "numeric",
          q: "During exercise cardiac output rises to 20 L per minute and each 100 mL of blood delivers 15 mL O₂. How many litres of O₂ do tissues receive per minute?",
          answer: 3,
          unit: "L",
          explain: "20000 ÷ 100 = 200 portions; 200 × 15 mL = 3000 mL = 3 L.",
          difficulty: 3,
          hint: "Convert litres of blood to 100 mL portions first.",
        },
        {
          kind: "mcq",
          q: "Arrange atmospheric air (A), alveoli (B), oxygenated blood (C) and tissues (D) in decreasing pO₂.",
          options: ["A > B > C > D", "B > A > C > D", "A > C > B > D", "C > B > A > D"],
          answer: 0,
          explain: "159 > 104 > 95 > 40 mm Hg.",
        },
        {
          kind: "mcq",
          q: "In emphysema, the main reason breathing becomes difficult is:",
          options: [
            "Narrowing of the trachea",
            "Damage to alveolar walls reducing the respiratory surface",
            "Excess pleural fluid",
            "Paralysis of the diaphragm",
          ],
          answer: 1,
          explain: "Emphysema damages alveolar walls, so the surface for gas exchange shrinks.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [digestion, breathing];

export const links: Record<string, string | string[]> = {
  "11:Breathing and Exchange of Gases": "c11-bio-breathing-exchange-gases",
  "11:Human Physiology": ["c11-bio-digestion-absorption", "c11-bio-breathing-exchange-gases"],
};
