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

export const topics: Topic[] = [digestion];

export const links: Record<string, string | string[]> = {
  "11:Human Physiology": ["c11-bio-digestion-absorption"],
};
