import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "europeans-in-india",
    title: "The Coming of the Europeans",
    icon: "⛵",
    description: "Sea routes to India, European trading companies, the Carnatic Wars and the British conquest of Bengal.",
    lessons: [
      {
        slug: "sea-route-and-trading-companies",
        title: "Sea Route, Trading Companies and the Carnatic Wars",
        summary: "Why Europeans looked for a sea route to India, how the Portuguese, Dutch, English and French arrived, and how the English beat the French.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🌶️",
            caption: "Pepper from Kerala once sold in Europe for many times its price at Kozhikode. That profit pulled Europeans across the oceans.",
          },
          {
            type: "text",
            md: "For centuries, Indian **spices**, cotton cloth and indigo reached Europe over land and through the Mediterranean. Arab and Italian traders stood in the middle and took big profits.\n\nIn **1453** the Ottoman Turks captured **Constantinople**. The old trade routes came under their control and goods became costlier. So European kingdoms started looking for a **sea route** to India that avoided the Turks.\n\nIn **1498** the Portuguese sailor **Vasco da Gama** sailed round the Cape of Good Hope and reached **Calicut (Kozhikode)**. The local ruler, the **Zamorin**, allowed him to trade. A new sea route between Europe and India was open.",
          },
          {
            type: "table",
            headers: ["Power", "Key facts", "Main centres in India"],
            rows: [
              ["Portuguese", "Vasco da Gama reached Calicut in 1498. **Francisco de Almeida** was the first viceroy; **Afonso de Albuquerque** captured Goa from Bijapur in 1510.", "Goa, Daman, Diu"],
              ["Dutch", "Dutch East India Company formed in 1602. They later moved their main effort to the spice islands of Indonesia.", "Pulicat, Nagapattinam, Cochin"],
              ["English", "**English East India Company** got a royal charter from Queen Elizabeth I in 1600. First factory at Surat.", "Surat, Madras, Bombay, Calcutta"],
              ["French", "French East India Company formed in 1664.", "Pondicherry (main centre), Chandernagore, Mahe"],
            ],
          },
          {
            type: "text",
            md: "A **factory** here does not mean a place with machines. It was a **trading post**: warehouses, offices and homes of the Company's agents, often protected by a fort. Fort St George in Madras and Fort William in Calcutta began this way.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which event made Europeans search for a new sea route to India?",
                options: ["The Battle of Plassey", "The capture of Constantinople by the Ottoman Turks in 1453", "The founding of the English East India Company", "The arrival of Vasco da Gama"],
                answer: 1,
                explain: "After 1453 the Turks controlled the old routes, so goods became costly. Vasco da Gama's voyage was the *result* of this search, not its cause.",
              },
            ],
          },
          {
            type: "heading",
            text: "English vs French: the Carnatic Wars",
          },
          {
            type: "text",
            md: "By the 1740s only two companies were strong rivals: the **English** and the **French**. Both wanted to control trade in South India. They fought three **Carnatic Wars** (the Carnatic is the coastal region of present-day Tamil Nadu and nearby areas). The French governor **Dupleix** tried to make Indian rulers depend on French help. The English copied this idea and did it better.",
          },
          {
            type: "table",
            headers: ["War", "Years", "What happened"],
            rows: [
              ["First Carnatic War", "1746–1748", "Part of the War of Austrian Succession in Europe. Ended by the Treaty of Aix-la-Chapelle (1748); Madras was returned to the English."],
              ["Second Carnatic War", "1749–1754", "Fought over who should rule Hyderabad and the Carnatic. **Robert Clive** captured Arcot (1751). Dupleix was called back to France."],
              ["Third Carnatic War", "1756–1763", "Part of the Seven Years' War. The English under **Eyre Coote** defeated the French at **Wandiwash (1760)**. Treaty of Paris (1763)."],
            ],
          },
          {
            type: "example",
            title: "Reasoning from evidence",
            problem: "Both companies fought in the same region with Indian allies. Give two reasons why the English won the Carnatic Wars.",
            steps: [
              "Look at control of the sea: the English navy was stronger, so it could bring troops and money from Bengal and Britain.",
              "Look at money: the English Company was a private company with rich trade, while the French Company depended on its government.",
              "Look at leaders: Clive and Eyre Coote were skilful, and the French government recalled Dupleix in 1754.",
              "Pick the two clearest points and write each as one full sentence.",
            ],
            answer: "The English had a stronger navy, and they had more money from trade (especially after they gained Bengal). Able leaders like Clive and Eyre Coote also helped.",
          },
          {
            type: "mistake",
            wrong: "The Portuguese came first, so they became the rulers of India.",
            right: "The Portuguese came first, but the **English** became the dominant power. The Portuguese kept only Goa, Daman and Diu.",
            why: "Arriving first sounds like an advantage, but the Portuguese were weakened by religious intolerance, rivalry with the Dutch and English, and a small home country. Power went to the side with more money, ships and allies.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put these events in the correct order.",
              items: [
                "Ottoman Turks capture Constantinople",
                "Vasco da Gama reaches Calicut",
                "Albuquerque captures Goa",
                "English East India Company gets its charter",
                "French East India Company is formed",
                "English defeat the French at Wandiwash",
              ],
              explain: "1453 → 1498 → 1510 → 1600 → 1664 → 1760. The Portuguese came first; the English and French arrived later and fought for control of trade.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "Questions on the Carnatic Wars often ask for **results**. Write: the French were defeated and their posts (like Pondicherry) were returned only as trading centres, not as military bases; the English became the leading European power in India. Do not mix up Wandiwash (1760) with Plassey (1757).",
          },
          {
            type: "keypoints",
            items: [
              "1453: fall of Constantinople pushed Europeans to find a sea route.",
              "1498: Vasco da Gama reached Calicut; 1510: Albuquerque took Goa.",
              "English East India Company: charter in 1600; French company: 1664.",
              "Three Carnatic Wars (1746–1763) ended with English victory at Wandiwash (1760).",
            ],
          },
        ],
        flashcards: [
          { front: "Who reached Calicut by sea in 1498?", back: "Vasco da Gama, a Portuguese sailor. The Zamorin of Calicut allowed him to trade." },
          { front: "Who captured Goa and when?", back: "Afonso de Albuquerque, in 1510, from the Sultan of Bijapur." },
          { front: "When did the English East India Company get its charter?", back: "In 1600, from Queen Elizabeth I." },
          { front: "Main French centre in India", back: "Pondicherry (Puducherry)." },
          { front: "Battle of Wandiwash", back: "1760. Eyre Coote's English army defeated the French. It decided the Third Carnatic War." },
          { front: "What was a 'factory' of a trading company?", back: "A trading post with warehouses and offices, not a place with machines." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who was the first Portuguese viceroy in India?",
            options: ["Vasco da Gama", "Afonso de Albuquerque", "Francisco de Almeida", "Dupleix"],
            answer: 2,
            explain: "Almeida was the first viceroy. Albuquerque came after him and captured Goa. Dupleix was French.",
          },
          {
            kind: "fill",
            q: "The Third Carnatic War was decided by the Battle of ___ in 1760.",
            answer: ["Wandiwash", "Vandavasi"],
            explain: "At Wandiwash, Eyre Coote defeated the French army.",
          },
          {
            kind: "truefalse",
            q: "In the language of the trading companies, a 'factory' was a trading post, not a place with machines.",
            answer: true,
            explain: "Factories were warehouses and offices of company agents, called 'factors'.",
          },
          {
            kind: "order",
            q: "Arrange the arrival of these trading companies by the year they were formed (earliest first).",
            items: ["English East India Company (1600)", "Dutch East India Company (1602)", "French East India Company (1664)"],
            explain: "English 1600, Dutch 1602, French 1664. The Portuguese came even earlier, in 1498, but as a royal venture.",
            difficulty: 2,
            hint: "The French were the last to arrive.",
          },
          {
            kind: "multi",
            q: "Which of these helped the English win against the French? (Choose all that apply.)",
            options: ["A stronger navy", "More money from trade", "The French recalled Dupleix", "The Portuguese helped the English army"],
            answers: [0, 1, 2],
            explain: "Navy, money and leadership helped the English. The Portuguese were rivals, not helpers.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Robert Clive became famous in the Second Carnatic War by capturing:",
            options: ["Goa", "Arcot", "Surat", "Pondicherry"],
            answer: 1,
            explain: "Clive captured Arcot in 1751, which helped the English candidate in the Carnatic.",
          },
          {
            kind: "truefalse",
            q: "The Portuguese became the main ruling power of India because they arrived first.",
            answer: false,
            explain: "They arrived first but were later limited to Goa, Daman and Diu. The English became dominant.",
          },
        ],
      },
      {
        slug: "plassey-buxar-dual-government",
        title: "Plassey, Buxar and the Dual Government",
        summary: "How the English East India Company won Bengal through the Battles of Plassey (1757) and Buxar (1764), and what the Dual Government was.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "⚔️",
            caption: "Plassey was a battle won more by a secret deal than by fighting.",
          },
          {
            type: "text",
            md: "Bengal was the richest province of the Mughal empire. The English Company traded there with a **dastak**, a permit that let its goods move without paying customs duty. Company servants misused these dastaks for their own private trade, so the Nawab lost a lot of revenue.\n\nIn **1756** young **Siraj-ud-Daulah** became the Nawab of Bengal. He was angry that the English were fortifying Calcutta without his permission and were sheltering people who had cheated his government. He captured Calcutta. Robert Clive came from Madras and took it back.",
          },
          {
            type: "text",
            md: "Clive then made a secret deal with **Mir Jafar**, the Nawab's army commander. At the **Battle of Plassey (23 June 1757)** Mir Jafar's large force did not fight. Siraj-ud-Daulah lost, was captured and killed. Mir Jafar became the Nawab, but real power was with the Company.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why did the English win the Battle of Plassey so easily?",
                options: ["They had a much larger army", "Mir Jafar, the Nawab's commander, betrayed Siraj-ud-Daulah", "The Mughal emperor sent troops to help them", "The French fought on their side"],
                answer: 1,
                explain: "Mir Jafar's troops stood aside because of his secret deal with Clive. The English army was actually smaller.",
              },
            ],
          },
          {
            type: "heading",
            text: "From Plassey to Buxar",
          },
          {
            type: "text",
            md: "The Company replaced Mir Jafar with **Mir Qasim** in 1760. Mir Qasim wanted to rule on his own. When the Company kept misusing dastaks, he removed customs duties for *all* traders, so Indian merchants could compete. The English saw this as a challenge, and war began.\n\nMir Qasim joined **Shuja-ud-Daulah** (Nawab of Awadh) and the Mughal emperor **Shah Alam II**. At the **Battle of Buxar (22 October 1764)** the Company's army under **Hector Munro** defeated all three.",
          },
          {
            type: "table",
            headers: ["", "Battle of Plassey", "Battle of Buxar"],
            rows: [
              ["Date", "23 June 1757", "22 October 1764"],
              ["English leader", "Robert Clive", "Hector Munro"],
              ["Opponents", "Siraj-ud-Daulah", "Mir Qasim, Shuja-ud-Daulah and Shah Alam II together"],
              ["Why important", "Won by treachery; Company became kingmaker in Bengal", "A real military victory over three powers; led to the Diwani of Bengal"],
            ],
          },
          {
            type: "text",
            md: "By the **Treaty of Allahabad (1765)**, Shah Alam II gave the Company the **Diwani**, the right to collect land revenue, of Bengal, Bihar and Orissa.\n\nClive then set up the **Dual Government** (1765–1772). The Company collected the revenue (Diwani), but the Nawab kept **Nizamat**, the duty of running the administration, police and justice. The Company had money without responsibility; the Nawab had responsibility without money. The people suffered, and the terrible **Bengal famine of 1770** made it worse. **Warren Hastings** ended the Dual Government in 1772.",
          },
          {
            type: "example",
            title: "Comparing two battles",
            problem: "Historians often say that Buxar was more important than Plassey. Explain why in three points.",
            steps: [
              "Check how each battle was won: Plassey through betrayal, Buxar through actual fighting.",
              "Check who was defeated: at Plassey one Nawab; at Buxar the Nawab of Bengal, the Nawab of Awadh and the Mughal emperor together.",
              "Check the result: Buxar led to the Treaty of Allahabad and the Diwani of three provinces.",
            ],
            answer: "Buxar was a true military victory over three powers at once, including the Mughal emperor, and it gave the Company the legal right (Diwani) to collect revenue from Bengal, Bihar and Orissa.",
          },
          {
            type: "mistake",
            wrong: "After Plassey, the British directly ruled Bengal as a colony.",
            right: "After Plassey, the Company made and unmade Nawabs but did not rule directly. Even after Buxar it took only the Diwani; the Nawab kept the Nizamat until 1772.",
            why: "Because we know the end of the story, it is easy to think British rule began at once. In fact control grew in steps: kingmaker (1757), revenue rights (1765), direct administration (1772 onwards).",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each term or person with its meaning.",
              pairs: [
                ["Dastak", "Duty-free trade permit"],
                ["Diwani", "Right to collect land revenue"],
                ["Nizamat", "Duty of administration and justice"],
                ["Mir Jafar", "Commander who betrayed Siraj-ud-Daulah"],
                ["Hector Munro", "Led the Company's army at Buxar"],
              ],
              explain: "The Dual Government split **Diwani** (Company) from **Nizamat** (Nawab). Misuse of **dastaks** was a major cause of both wars in Bengal.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "For 'Explain the Dual Government' (Karnataka board, 2–3 marks), write who had which power: **Company = Diwani**, **Nawab = Nizamat**, and one effect (power without responsibility, suffering of peasants). Mention that Warren Hastings ended it in 1772.",
          },
          {
            type: "keypoints",
            items: [
              "Misuse of dastaks and fortification of Calcutta angered Siraj-ud-Daulah.",
              "Plassey, 23 June 1757: Clive won because Mir Jafar betrayed the Nawab.",
              "Buxar, 22 October 1764: Company defeated Mir Qasim, Shuja-ud-Daulah and Shah Alam II.",
              "Treaty of Allahabad, 1765: Company got the Diwani of Bengal, Bihar and Orissa.",
              "Dual Government (1765–1772): Company had revenue, Nawab had administration; ended by Warren Hastings.",
            ],
          },
        ],
        flashcards: [
          { front: "Battle of Plassey", back: "23 June 1757. Clive defeated Siraj-ud-Daulah with the help of Mir Jafar's betrayal." },
          { front: "Battle of Buxar", back: "22 October 1764. Hector Munro defeated Mir Qasim, Shuja-ud-Daulah and Shah Alam II." },
          { front: "Treaty of Allahabad (1765)", back: "Shah Alam II gave the Company the Diwani of Bengal, Bihar and Orissa." },
          { front: "Dual Government", back: "1765–1772 in Bengal: Company collected revenue (Diwani); Nawab ran administration (Nizamat)." },
          { front: "Who ended the Dual Government?", back: "Warren Hastings, in 1772." },
          { front: "Dastak", back: "A permit that let Company goods move without paying customs duty." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who was the Nawab of Bengal defeated at Plassey?",
            options: ["Mir Jafar", "Mir Qasim", "Siraj-ud-Daulah", "Shuja-ud-Daulah"],
            answer: 2,
            explain: "Siraj-ud-Daulah lost at Plassey. Mir Jafar was the traitor who replaced him; Mir Qasim fought at Buxar.",
          },
          {
            kind: "fill",
            q: "The Company got the Diwani of Bengal, Bihar and Orissa by the Treaty of ___ in 1765.",
            answer: ["Allahabad"],
            explain: "Shah Alam II granted the Diwani after his defeat at Buxar.",
          },
          {
            kind: "multi",
            q: "Who fought against the English at Buxar? (Choose all.)",
            options: ["Mir Qasim", "Shuja-ud-Daulah", "Shah Alam II", "Siraj-ud-Daulah"],
            answers: [0, 1, 2],
            explain: "These three formed an alliance. Siraj-ud-Daulah had died after Plassey in 1757.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Under the Dual Government, the Company had the power to collect revenue but not the responsibility of administration.",
            answer: true,
            explain: "This is exactly why it is called 'power without responsibility'.",
          },
          {
            kind: "order",
            q: "Put these in the correct order.",
            items: ["Battle of Plassey", "Mir Qasim becomes Nawab", "Battle of Buxar", "Treaty of Allahabad", "Dual Government ended"],
            explain: "1757 → 1760 → 1764 → 1765 → 1772.",
          },
          {
            kind: "mcq",
            q: "Why did Mir Qasim abolish customs duties for all traders?",
            options: ["To please the Mughal emperor", "So Indian merchants could compete with the Company's duty-free trade", "Because the British ordered him to", "To raise more revenue"],
            answer: 1,
            explain: "The Company's misuse of dastaks hurt Indian traders. Removing duties for everyone made trade fair, which angered the English.",
            difficulty: 2,
            hint: "Think about who was hurt by the misuse of dastaks.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "extension-of-british-rule",
    title: "The Extension of British Rule",
    icon: "🗺️",
    description: "The Anglo-Mysore, Anglo-Maratha and Anglo-Sikh Wars, the Subsidiary Alliance and the Doctrine of Lapse.",
    lessons: [
      {
        slug: "mysore-maratha-sikh-wars",
        title: "The Anglo-Mysore, Anglo-Maratha and Anglo-Sikh Wars",
        summary: "How the Company defeated Mysore, the Marathas and the Sikhs, the three strongest Indian powers, between 1767 and 1849.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🏰",
            caption: "Srirangapatna, Tipu Sultan's island fortress on the Kaveri, fell to the British on 4 May 1799.",
          },
          {
            type: "text",
            md: "After Bengal, the Company faced three strong Indian powers: **Mysore** in the south, the **Marathas** in the west and centre, and the **Sikhs** in Punjab. It fought each of them in a series of wars and won them one by one. Indian rulers rarely united against it, and that helped the Company a lot.",
          },
          {
            type: "heading",
            text: "Anglo-Mysore Wars",
          },
          {
            type: "table",
            headers: ["War", "Years", "Mysore ruler", "Result"],
            rows: [
              ["First", "1767–1769", "Hyder Ali", "Hyder Ali reached near Madras; **Treaty of Madras** (1769): both sides returned captured areas."],
              ["Second", "1780–1784", "Hyder Ali, then Tipu Sultan", "Hyder Ali died in 1782 during the war; **Treaty of Mangalore** (1784)."],
              ["Third", "1790–1792", "Tipu Sultan", "Lord Cornwallis won; **Treaty of Srirangapatna** (1792): Tipu lost half his kingdom, paid a huge war indemnity and gave two sons as hostages."],
              ["Fourth", "1799", "Tipu Sultan", "Lord Wellesley's forces took Srirangapatna; Tipu died fighting. The Wodeyars were put back on the throne under British control."],
            ],
          },
          {
            type: "heading",
            text: "Anglo-Maratha Wars",
          },
          {
            type: "list",
            items: [
              "**First (1775–1782):** began when the British supported Raghunath Rao (Raghoba), who wanted to become Peshwa. Ended by the **Treaty of Salbai** (1782).",
              "**Second (1803–1805):** after Peshwa **Baji Rao II** accepted the Subsidiary Alliance by the **Treaty of Bassein** (1802), other Maratha chiefs (Scindia, Bhonsle) fought the British and lost.",
              "**Third (1817–1818):** the Marathas were finally defeated. The post of **Peshwa was abolished**, and Baji Rao II was sent away on a pension to Bithur near Kanpur.",
            ],
          },
          {
            type: "heading",
            text: "Anglo-Sikh Wars",
          },
          {
            type: "text",
            md: "**Maharaja Ranjit Singh** built a strong Sikh kingdom in Punjab and kept good terms with the British. After his death in **1839**, the kingdom became unstable. The British fought the **First Anglo-Sikh War (1845–1846)**, ending in the Treaty of Lahore, and the **Second (1848–1849)**. In **1849 Lord Dalhousie annexed Punjab**. The boy king Duleep Singh was removed.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which treaty made Tipu Sultan give up half of his kingdom?",
                options: ["Treaty of Madras", "Treaty of Mangalore", "Treaty of Srirangapatna", "Treaty of Salbai"],
                answer: 2,
                explain: "The Treaty of Srirangapatna (1792) ended the Third Anglo-Mysore War. Salbai is a Maratha treaty.",
              },
            ],
          },
          {
            type: "example",
            title: "Finding a pattern",
            problem: "Look at all three sets of wars. What common reasons explain the Company's success?",
            steps: [
              "Check whether Indian powers helped each other: the Nizam and the Marathas sided with the British against Tipu in the Third Mysore War.",
              "Check the state of each power at the time: the Maratha chiefs quarrelled among themselves; Punjab was weak after Ranjit Singh died.",
              "Check resources: the Company had trained armies, regular pay, and revenue from Bengal to pay for long wars.",
            ],
            answer: "Indian rulers were divided and often helped the British against each other, the Company had disciplined armies and steady money, and it attacked each power when it was weak.",
          },
          {
            type: "mistake",
            wrong: "Tipu Sultan lost because his army was weak and old-fashioned.",
            right: "Tipu had a modern army, used rockets and tried to get French help. He lost mainly because the British, the Nizam and the Marathas joined against him, and because some of his own officials betrayed him.",
            why: "Defeat makes an army look weak. But Mysore defeated the British in several battles; it was isolation and betrayal, not backwardness, that brought the end.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which set of wars does each belong to?",
              groups: ["Anglo-Mysore", "Anglo-Maratha", "Anglo-Sikh"],
              items: [
                { text: "Treaty of Srirangapatna", group: 0, hint: "Srirangapatna was Tipu's capital." },
                { text: "Treaty of Salbai", group: 1, hint: "This ended the dispute over Raghoba." },
                { text: "Treaty of Bassein", group: 1, hint: "Signed by Peshwa Baji Rao II." },
                { text: "Death of Ranjit Singh", group: 2, hint: "He ruled Punjab." },
                { text: "Treaty of Mangalore", group: 0, hint: "It ended the war in which Hyder Ali died." },
                { text: "Annexation of Punjab", group: 2, hint: "Dalhousie, 1849." },
              ],
              explain: "Link each treaty to the ruler: Mysore (Hyder Ali, Tipu), Marathas (Peshwas), Sikhs (Ranjit Singh's successors).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "Students often swap the Mysore treaties. Remember the order **Madras → Mangalore → Srirangapatna**, then Tipu's death in 1799. In the Karnataka board exam, the terms of the Treaty of Srirangapatna are a common 2-mark question.",
          },
          {
            type: "keypoints",
            items: [
              "Four Anglo-Mysore Wars (1767–1799): Hyder Ali and Tipu Sultan; Tipu died in 1799.",
              "Three Anglo-Maratha Wars (1775–1818): the Peshwa's post was abolished in 1818.",
              "Two Anglo-Sikh Wars (1845–1849): Punjab annexed in 1849.",
              "Divisions among Indian rulers were the Company's biggest advantage.",
            ],
          },
        ],
        flashcards: [
          { front: "Treaty that ended the First Anglo-Mysore War", back: "Treaty of Madras, 1769." },
          { front: "Treaty of Srirangapatna (1792)", back: "Tipu gave up half his kingdom, paid a big war indemnity and gave two sons as hostages." },
          { front: "When and how did Tipu Sultan die?", back: "4 May 1799, fighting to defend Srirangapatna in the Fourth Anglo-Mysore War." },
          { front: "Treaty of Bassein (1802)", back: "Peshwa Baji Rao II accepted the Subsidiary Alliance; it led to the Second Anglo-Maratha War." },
          { front: "Result of the Third Anglo-Maratha War", back: "The Peshwa's post was abolished (1818)." },
          { front: "When was Punjab annexed?", back: "1849, by Lord Dalhousie, after the Second Anglo-Sikh War." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which Governor-General defeated Tipu Sultan in the Fourth Anglo-Mysore War?",
            options: ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Warren Hastings"],
            answer: 1,
            explain: "Wellesley was Governor-General in 1799. Cornwallis fought the Third War (1790–92).",
          },
          {
            kind: "order",
            q: "Arrange the treaties of the Anglo-Mysore Wars in order.",
            items: ["Treaty of Madras", "Treaty of Mangalore", "Treaty of Srirangapatna"],
            explain: "1769, 1784 and 1792.",
          },
          {
            kind: "fill",
            q: "The First Anglo-Maratha War ended with the Treaty of ___ in 1782.",
            answer: ["Salbai"],
            explain: "The Treaty of Salbai ended the war over Raghoba's claim.",
          },
          {
            kind: "truefalse",
            q: "Punjab was annexed while Maharaja Ranjit Singh was still alive.",
            answer: false,
            explain: "Ranjit Singh died in 1839; Punjab was annexed ten years later, in 1849.",
          },
          {
            kind: "multi",
            q: "Which of these helped the British against Tipu Sultan in the Third Anglo-Mysore War? (Choose all.)",
            options: ["The Nizam of Hyderabad", "The Marathas", "The French", "Ranjit Singh"],
            answers: [0, 1],
            explain: "The Nizam and the Marathas joined the British. Tipu himself looked to the French for help.",
            difficulty: 2,
            hint: "Think of Tipu's neighbours in the Deccan.",
          },
          {
            kind: "mcq",
            q: "Who was the last Peshwa?",
            options: ["Baji Rao I", "Raghunath Rao", "Baji Rao II", "Nana Phadnavis"],
            answer: 2,
            explain: "Baji Rao II's post was abolished in 1818. Nana Phadnavis was a minister, not a Peshwa.",
          },
          {
            kind: "mcq",
            q: "Tipu Sultan lost mainly because:",
            options: ["He had no modern weapons", "His neighbours joined the British and some officials betrayed him", "He refused to fight", "The French fought against him"],
            answer: 1,
            explain: "Tipu's army was modern; isolation and betrayal decided the result.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "subsidiary-alliance-doctrine-of-lapse",
        title: "Subsidiary Alliance and Doctrine of Lapse",
        summary: "Two policies that let the Company take over Indian states without always fighting: Wellesley's Subsidiary Alliance and Dalhousie's Doctrine of Lapse.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "📜",
            caption: "Some states were conquered by war. Many more were taken by signing a paper.",
          },
          {
            type: "text",
            md: "War is costly. So the Company also used **policies** to bring Indian states under its control. The two most important ones were the **Subsidiary Alliance** of **Lord Wellesley** (Governor-General 1798–1805) and the **Doctrine of Lapse** of **Lord Dalhousie** (Governor-General 1848–1856).",
          },
          {
            type: "heading",
            text: "The Subsidiary Alliance",
          },
          {
            type: "list",
            items: [
              "The Indian ruler had to keep a **British army** in his state and pay for it, in cash or by giving up some territory.",
              "A British officer called the **Resident** stayed at his court.",
              "He could not employ other Europeans (especially the French) without British permission.",
              "He could not make war or treaties with other rulers without British consent.",
              "In return, the British promised to protect him from outside attack and inside revolt.",
            ],
          },
          {
            type: "text",
            md: "The **Nizam of Hyderabad** was the first to accept it (1798). Mysore (after 1799), Awadh (1801) and the Peshwa (Treaty of Bassein, 1802) followed. The ruler kept his throne and title, but lost his freedom. The Company got an army paid for by Indians, ready to use anywhere.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "Under the Subsidiary Alliance, the British paid for the army they kept in the Indian state.",
                answer: false,
                explain: "The Indian ruler paid for it, often by giving away land. That was one of the cleverest parts of the system.",
              },
            ],
          },
          {
            type: "heading",
            text: "The Doctrine of Lapse",
          },
          {
            type: "text",
            md: "In Indian custom, a ruler without a son could **adopt** one as his heir. Dalhousie said that if the ruler of a dependent state died without a **natural male heir**, the adopted son could not inherit the kingdom. The state would **lapse**, that is, pass to the Company.\n\nStates taken this way included **Satara (1848)**, the first, then Jaitpur and Sambalpur, **Jhansi (1853)** and **Nagpur (1854)**. The rulers' families felt cheated. Rani Lakshmibai of Jhansi, whose adopted son was refused, later became a leader of the Revolt of 1857.",
          },
          {
            type: "example",
            title: "Reading a case",
            problem: "The raja of a small dependent state dies in 1853. He had adopted a son before his death. What happens under Dalhousie's policy, and how will the family feel?",
            steps: [
              "Check the rule: only a natural son can inherit a dependent state.",
              "The heir here is adopted, so the British will not accept him.",
              "The state 'lapses' and is annexed by the Company; the family may get a pension at most.",
              "The family, nobles and soldiers lose their status, so they become bitter against the British.",
            ],
            answer: "The state is annexed under the Doctrine of Lapse, and the ruling family turns hostile, as happened in Jhansi.",
          },
          {
            type: "mistake",
            wrong: "Awadh was annexed under the Doctrine of Lapse.",
            right: "Awadh was annexed in **1856** on the charge of **misgovernment** (bad rule), not under the Doctrine of Lapse. Its Nawab, Wajid Ali Shah, was removed and sent to Calcutta.",
            why: "Both happened under Dalhousie at about the same time, so students mix them up. The Doctrine of Lapse needed a ruler with no natural heir; Awadh had a living Nawab.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which policy does each point belong to?",
              groups: ["Subsidiary Alliance", "Doctrine of Lapse"],
              items: [
                { text: "Lord Wellesley", group: 0, hint: "Governor-General from 1798." },
                { text: "Lord Dalhousie", group: 1, hint: "Governor-General from 1848." },
                { text: "A British Resident at the court", group: 0, hint: "The ruler had to accept a British officer." },
                { text: "Adopted son cannot inherit", group: 1, hint: "This is about heirs." },
                { text: "Nizam of Hyderabad was the first to accept", group: 0, hint: "1798." },
                { text: "Satara was the first state taken", group: 1, hint: "1848." },
              ],
              explain: "Subsidiary Alliance = an army and a Resident in exchange for 'protection' (Wellesley). Doctrine of Lapse = no natural heir, no kingdom (Dalhousie).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "When asked for the 'terms' or 'conditions' of the Subsidiary Alliance, write at least four separate points (army, payment, Resident, no other Europeans, no war without consent). Each point usually carries marks on its own.",
          },
          {
            type: "keypoints",
            items: [
              "Subsidiary Alliance (Wellesley): British army and Resident in the state, paid for by the ruler; Nizam first to accept (1798).",
              "Doctrine of Lapse (Dalhousie): no natural male heir → state lapses to the Company.",
              "Lapsed states: Satara (1848, first), Jhansi (1853), Nagpur (1854) and others.",
              "Awadh (1856) was annexed for 'misgovernment', not by lapse.",
            ],
          },
        ],
        flashcards: [
          { front: "Who introduced the Subsidiary Alliance?", back: "Lord Wellesley (Governor-General 1798–1805)." },
          { front: "First state to accept the Subsidiary Alliance", back: "Hyderabad (the Nizam), in 1798." },
          { front: "Who introduced the Doctrine of Lapse?", back: "Lord Dalhousie (Governor-General 1848–1856)." },
          { front: "First state annexed by the Doctrine of Lapse", back: "Satara, in 1848." },
          { front: "On what grounds was Awadh annexed in 1856?", back: "Alleged misgovernment, not the Doctrine of Lapse." },
          { front: "What was a Resident?", back: "A British officer posted at the court of an Indian ruler to watch and control him." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these was NOT a term of the Subsidiary Alliance?",
            options: ["Keeping a British army in the state", "Accepting a British Resident", "Paying for the British army", "Freedom to employ French officers"],
            answer: 3,
            explain: "Rulers were forbidden to employ other Europeans, especially the French, without British permission.",
          },
          {
            kind: "fill",
            q: "Under the Doctrine of Lapse, a state passed to the Company if its ruler died without a ___ male heir.",
            answer: ["natural"],
            explain: "Adopted sons were not accepted as heirs.",
          },
          {
            kind: "mcq",
            q: "Which state was annexed under the Doctrine of Lapse in 1853?",
            options: ["Awadh", "Jhansi", "Punjab", "Mysore"],
            answer: 1,
            explain: "Jhansi lapsed in 1853. Awadh (1856) was for misgovernment; Punjab (1849) was after a war.",
          },
          {
            kind: "truefalse",
            q: "The Nizam of Hyderabad was the first ruler to accept the Subsidiary Alliance.",
            answer: true,
            explain: "He accepted it in 1798.",
          },
          {
            kind: "order",
            q: "Put these annexations in order.",
            items: ["Satara", "Jhansi", "Nagpur", "Awadh"],
            explain: "Satara 1848, Jhansi 1853, Nagpur 1854, Awadh 1856.",
            difficulty: 2,
            hint: "Awadh was the last, just before 1857.",
          },
          {
            kind: "multi",
            q: "How did the Subsidiary Alliance help the Company? (Choose all.)",
            options: ["It got an army paid for by Indian rulers", "Indian rulers could not ally with the French", "It got territory when rulers could not pay", "It made Indian rulers stronger"],
            answers: [0, 1, 2],
            explain: "The system weakened Indian rulers while giving the Company money, land and soldiers.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "impact-of-british-rule",
    title: "The Impact of British Rule",
    icon: "🏛️",
    description: "How British rule changed administration, law, land revenue, education and the economy of India.",
    lessons: [
      {
        slug: "administration-land-revenue-education",
        title: "Administration, Land Revenue and Education",
        summary: "The civil service, police and courts, the Acts that shaped Company rule, the three land revenue systems, and English education.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "⚖️",
            caption: "Courts, collectors, police stations and schools: many offices we see today were first set up in this period.",
          },
          {
            type: "text",
            md: "To rule a huge country with few Britons, the Company built a **system of administration**. It had three pillars: the **civil service**, the **police** and the **judiciary** (courts).\n\n**Lord Cornwallis** organised the civil service and is called the father of the Indian Civil Service. The higher posts went to the British. **Warren Hastings** set up civil courts (**Diwani Adalat**) and criminal courts (**Faujdari Adalat**) in districts. Cornwallis also organised the police, with stations under a **daroga**.",
          },
          {
            type: "table",
            headers: ["Act", "Year", "Main point"],
            rows: [
              ["Regulating Act", "1773", "Governor of Bengal became Governor-General (Warren Hastings first); a Supreme Court was set up at Calcutta."],
              ["Pitt's India Act", "1784", "A **Board of Control** in Britain to supervise the Company's political affairs."],
              ["Charter Act", "1813", "Ended the Company's monopoly of trade with India (except tea and trade with China)."],
              ["Charter Act", "1833", "Ended the Company's trading role; the Governor-General of Bengal became Governor-General of India."],
              ["Government of India Act", "1858", "After the Revolt of 1857, the British Crown took over; Secretary of State for India; Governor-General also called Viceroy."],
            ],
          },
          {
            type: "heading",
            text: "Three land revenue systems",
          },
          {
            type: "table",
            headers: ["System", "Started by", "Who paid the government", "Where"],
            rows: [
              ["**Permanent Settlement** (1793)", "Lord Cornwallis", "The **zamindar**, a fixed amount for ever", "Bengal, Bihar, Orissa"],
              ["**Ryotwari**", "Alexander Read and Thomas Munro", "The **ryot** (cultivator) directly", "Madras and Bombay regions"],
              ["**Mahalwari**", "Holt Mackenzie", "The **mahal** (village or group of villages) as a unit", "North-western provinces, Punjab"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In which system did the cultivator pay land revenue directly to the government?",
                options: ["Permanent Settlement", "Ryotwari", "Mahalwari", "Dual Government"],
                answer: 1,
                explain: "'Ryot' means cultivator. In the Permanent Settlement the zamindar paid; in Mahalwari the village did.",
              },
            ],
          },
          {
            type: "example",
            title: "Reading a land system",
            problem: "A peasant in Bengal in 1810 complains that he pays more every year, though the government's demand on his land has not changed. How is that possible?",
            steps: [
              "Identify the system: Bengal had the Permanent Settlement (1793).",
              "The government's demand on the **zamindar** was fixed for ever.",
              "But nothing fixed what the zamindar could take from the **peasant**.",
              "So zamindars kept raising rents, and the peasant's burden grew.",
            ],
            answer: "The fixed amount bound only the zamindar's payment to the government; zamindars were free to raise rents on peasants.",
          },
          {
            type: "heading",
            text: "Education and the economy",
          },
          {
            type: "list",
            items: [
              "**Macaulay's Minute (1835)** argued for teaching Western subjects in English. Lord William Bentinck's government accepted it.",
              "**Wood's Despatch (1854)** planned education from primary school to university. Universities at **Calcutta, Bombay and Madras** were set up in **1857**.",
              "Railways (first passenger train Bombay–Thane, 1853), telegraph and post linked the country.",
              "Machine-made British cloth ruined Indian handloom weavers and artisans. Indian leaders like **Dadabhai Naoroji** described the **drain of wealth** from India to Britain.",
            ],
          },
          {
            type: "mistake",
            wrong: "The British built railways and English schools to help Indians develop.",
            right: "These were built mainly to serve British needs: railways moved raw materials to ports and troops to trouble spots; English education produced clerks for the administration. Indians did gain from them, often in ways the British did not plan.",
            why: "The benefits are easy to see today, so it seems they were the purpose. The textbooks ask you to see both the aim and the unplanned effect, for example educated Indians later led the national movement.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each person with what they are linked to.",
              pairs: [
                ["Lord Cornwallis", "Permanent Settlement"],
                ["Thomas Munro", "Ryotwari system"],
                ["Holt Mackenzie", "Mahalwari system"],
                ["Macaulay", "English education (1835 Minute)"],
                ["Dadabhai Naoroji", "Drain of wealth"],
              ],
              explain: "Cornwallis, Munro and Mackenzie each shaped a land revenue system; Macaulay shaped education; Naoroji criticised the economic effects of British rule.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "In a 4-mark answer on land revenue systems, a neat table (system, founder, who pays, region) earns marks quickly. Always add one effect: peasants were burdened and often fell into debt to moneylenders.",
          },
          {
            type: "keypoints",
            items: [
              "Administration rested on the civil service (Cornwallis), police and courts (Warren Hastings, Cornwallis).",
              "Key Acts: Regulating Act 1773, Pitt's India Act 1784, Charter Acts 1813 and 1833, Government of India Act 1858.",
              "Land revenue: Permanent Settlement (zamindar), Ryotwari (ryot), Mahalwari (village).",
              "English education: Macaulay 1835, Wood's Despatch 1854, three universities 1857.",
              "Indian crafts declined; nationalists called it a drain of wealth.",
            ],
          },
        ],
        flashcards: [
          { front: "Regulating Act, 1773", back: "Made the Governor of Bengal the Governor-General and set up a Supreme Court at Calcutta." },
          { front: "Permanent Settlement", back: "1793, Lord Cornwallis. Zamindars paid a fixed land revenue for ever." },
          { front: "Ryotwari system", back: "Revenue paid directly by the cultivator (ryot). Read and Munro, in Madras and Bombay regions." },
          { front: "Mahalwari system", back: "The village (mahal) paid revenue as a unit. Holt Mackenzie; North-western provinces and Punjab." },
          { front: "Wood's Despatch", back: "1854. A plan for education from primary level to university." },
          { front: "Father of the Indian Civil Service", back: "Lord Cornwallis." },
          { front: "Drain of wealth", back: "Idea of Dadabhai Naoroji: Indian wealth flowed to Britain without return." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which Act ended the Company's monopoly of trade with India (except tea and China trade)?",
            options: ["Regulating Act, 1773", "Pitt's India Act, 1784", "Charter Act, 1813", "Government of India Act, 1858"],
            answer: 2,
            explain: "The Charter Act of 1813 opened Indian trade to other British merchants.",
          },
          {
            kind: "fill",
            q: "The Permanent Settlement was introduced by Lord ___ in 1793.",
            answer: ["Cornwallis"],
            explain: "It fixed the zamindars' payment to the government for ever.",
          },
          {
            kind: "truefalse",
            q: "In the Mahalwari system, each cultivator paid revenue individually to the government.",
            answer: false,
            explain: "That is Ryotwari. In Mahalwari the whole village (mahal) was the unit.",
          },
          {
            kind: "order",
            q: "Arrange these in order of time.",
            items: ["Regulating Act", "Pitt's India Act", "Permanent Settlement", "Macaulay's Minute", "Government of India Act"],
            explain: "1773, 1784, 1793, 1835, 1858.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Universities at Calcutta, Bombay and Madras were set up in:",
            options: ["1835", "1854", "1857", "1885"],
            answer: 2,
            explain: "They followed Wood's Despatch (1854) and opened in 1857.",
          },
          {
            kind: "multi",
            q: "Which were effects of British economic policy? (Choose all.)",
            options: ["Decline of Indian handicrafts", "Peasants fell into debt", "India became the world's biggest exporter of machine-made cloth", "Wealth drained to Britain"],
            answers: [0, 1, 3],
            explain: "Britain, not India, exported machine-made cloth. Indian weavers lost their markets.",
            difficulty: 2,
            hint: "Whose factories made the machine-made cloth?",
          },
          {
            kind: "mcq",
            q: "Who set up the Diwani and Faujdari Adalats?",
            options: ["Warren Hastings", "Lord Dalhousie", "Lord Wellesley", "Lord Curzon"],
            answer: 0,
            explain: "Warren Hastings set up district civil (Diwani) and criminal (Faujdari) courts.",
          },
        ],
      },
    ],
  },
  /* @@MORE@@ */
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "The Advent of Europeans to India": "europeans-in-india",
};
