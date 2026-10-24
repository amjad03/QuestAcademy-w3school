import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* CBSE: The Rise of Nationalism in Europe                             */
  /* ------------------------------------------------------------------ */
  {
    slug: "rise-of-nationalism-in-europe",
    title: "The Rise of Nationalism in Europe",
    icon: "🏳️",
    description: "How the French Revolution, liberals and revolutionaries turned Europe's kingdoms into nation-states.",
    lessons: [
      {
        slug: "french-revolution-to-1848",
        title: "From the French Revolution to 1848",
        summary: "The idea of the nation, Napoleon's reforms, liberalism, the Vienna settlement of 1815 and the revolutions of 1830 and 1848.",
        minutes: 17,
        xp: 42,
        blocks: [
          {
            type: "illustration",
            emoji: "🗽",
            caption: "In 1848 the French artist Frédéric Sorrieu made a set of prints. In one, people of Europe and America march in a long line to honour the Statue of Liberty. It was his dream of a world of 'democratic and social republics'.",
          },
          {
            type: "text",
            md: "Think of how you feel when India plays a cricket final. You cheer for people you have never met, because you share one country. That shared feeling is **nationalism**: the belief that people with a common identity should belong to one nation.\n\nIn 1789 most of Europe had no nations in this sense. People were ruled by kings and emperors, spoke many languages and saw themselves as subjects of a ruler. In the 19th century this changed. The **nation-state** appeared: a state in which most citizens share a sense of common identity and history.",
          },
          {
            type: "text",
            md: "The **French Revolution of 1789** was the first clear expression of nationalism. It moved **sovereignty** (the supreme power to rule) from the king to the body of French citizens. The revolutionaries said the people would now shape the country's future.",
          },
          {
            type: "list",
            items: [
              "New ideas of **la patrie** (the fatherland) and **le citoyen** (the citizen) stressed a united community with equal rights.",
              "A new French **tricolour** flag replaced the royal standard.",
              "The Estates General was elected by active citizens and renamed the **National Assembly**.",
              "A centralised administration made uniform laws for everyone.",
              "Internal customs duties were abolished and a uniform system of weights and measures was adopted.",
              "French, as spoken in Paris, was made the common language; regional dialects were discouraged.",
            ],
          },
          {
            type: "table",
            headers: ["Napoleon's reform", "What it changed"],
            rows: [
              ["**Civil Code of 1804** (Napoleonic Code)", "ended privileges based on birth, gave equality before the law and secured the right to property"],
              ["Feudal system abolished (Dutch Republic, Switzerland, Italy, Germany)", "peasants were freed from serfdom and manorial dues"],
              ["Guild restrictions removed in towns", "traders and craftsmen could work more freely"],
              ["Better transport and communication", "goods and capital moved more easily between regions"],
            ],
          },
          {
            type: "mistake",
            wrong: "Napoleon brought democracy to France and to the lands he conquered.",
            right: "Napoleon destroyed democracy in France and ruled as an emperor. What he spread was an efficient, rational system of administration.",
            why: "His Civil Code sounds democratic because it gave equality before the law. But people in conquered areas soon turned against French rule because of higher taxes, censorship and forced conscription into the French army.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which change did the **Civil Code of 1804** bring?",
                options: [
                  "It gave the vote to all adult men and women",
                  "It did away with privileges based on birth and gave equality before the law",
                  "It united the German states into one empire",
                  "It restored the Bourbon kings to power",
                ],
                answer: 1,
                explain: "The Napoleonic Code ended birth-based privileges, made all equal before the law and protected property. It did not give votes to all.",
              },
            ],
          },
          {
            type: "text",
            md: "**Liberalism** comes from the Latin word *liber*, meaning free. For the new middle classes it meant freedom for the individual, equality before the law, government by consent, a constitution and the protection of private property. In economics it meant free movement of goods. In 1834 Prussia set up a customs union called the **Zollverein**. It removed tariff barriers among most German states and cut the number of currencies from over thirty to two.\n\nAfter Napoleon's defeat in 1815, European powers met at the **Congress of Vienna**, hosted by the Austrian Chancellor **Duke Metternich**. The **Treaty of Vienna (1815)** undid many of Napoleon's changes. The Bourbon dynasty was restored in France. This was **conservatism**: the belief that old institutions such as monarchy, church and social hierarchy should be kept. Conservative regimes were autocratic and used censorship to silence critics.\n\nMany liberals went underground. **Giuseppe Mazzini**, born in Genoa in 1807, formed the secret societies **Young Italy** and **Young Europe**. Metternich called him 'the most dangerous enemy of our social order'.",
          },
          {
            type: "table",
            headers: ["Year", "Event"],
            rows: [
              ["1789", "French Revolution begins"],
              ["1804", "Napoleon's Civil Code"],
              ["1815", "Defeat of Napoleon; Treaty of Vienna"],
              ["1830", "July Revolution in France: Bourbon kings overthrown, constitutional monarchy under Louis Philippe; Belgium breaks away from the United Kingdom of the Netherlands"],
              ["1832", "Treaty of Constantinople recognises Greece as an independent nation"],
              ["1834", "Zollverein (customs union) formed under Prussia"],
              ["1848", "Revolutions in France and across Europe; Frankfurt Parliament meets"],
            ],
          },
          {
            type: "example",
            title: "Answering a 3-mark 'how' question",
            problem: "How did the French revolutionaries try to create a sense of collective identity among the French people? (3 marks)",
            steps: [
              "Read the key words: *collective identity* means 'feeling of being one people'. The examiner wants measures, not causes of the revolution.",
              "Pick three different kinds of measure so each earns a mark: an idea (la patrie, le citoyen), a symbol (the tricolour), and a practical step (uniform laws, weights and measures, one language).",
              "Write each as one clear sentence that says what was done and how it united people.",
            ],
            answer: "They spread the ideas of la patrie and le citoyen; they replaced the royal standard with the tricolour and renamed the Estates General the National Assembly; and they made uniform laws, weights and measures and promoted French as the common language.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Who brought in each change?",
              groups: ["French revolutionaries (from 1789)", "Napoleon"],
              items: [
                { text: "Ideas of la patrie and le citoyen", group: 0, hint: "These ideas came with the Revolution itself, before Napoleon took power." },
                { text: "Tricolour replaced the royal standard", group: 0, hint: "A symbol of the Revolution's break from the monarchy." },
                { text: "Estates General renamed National Assembly", group: 0, hint: "This happened in the early days of the Revolution." },
                { text: "Civil Code of 1804", group: 1, hint: "Its other name is the Napoleonic Code." },
                { text: "Peasants freed from serfdom in conquered lands", group: 1, hint: "This happened in areas his armies took over." },
                { text: "Guild restrictions removed in towns", group: 1, hint: "Part of his administrative reforms in conquered territories." },
              ],
              explain: "The revolutionaries built a **sense of nationhood** through ideas and symbols. Napoleon built a **rational administration**, but ruled without democracy.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "CBSE often asks 'Explain the measures of the French revolutionaries' or 'Napoleon's Civil Code'. Write points, not a story. A frequent error is mixing up the two: the tricolour and la patrie belong to the revolutionaries, the Civil Code belongs to Napoleon.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "The Treaty of Vienna (1815) aimed to undo most of the changes made during the Napoleonic wars.",
                answer: true,
                explain: "The conservative powers restored the Bourbons and set up a new order to stop further French expansion.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "The French Revolution (1789) moved sovereignty from the king to the citizens.",
              "Napoleon's Civil Code (1804) gave equality before law and property rights, but he ruled as a dictator.",
              "Liberalism = individual freedom, equality before law, constitution, government by consent.",
              "Treaty of Vienna (1815), led by Metternich, restored conservative monarchies.",
              "Mazzini founded Young Italy and Young Europe; revolutions broke out in 1830 and 1848.",
            ],
          },
        ],
        flashcards: [
          { front: "Nation-state", back: "A state in which most citizens share a sense of common identity and history." },
          { front: "La patrie and le citoyen", back: "French for 'the fatherland' and 'the citizen': ideas of the Revolution that built a united community." },
          { front: "Civil Code of 1804", back: "Napoleon's code: ended privileges based on birth, equality before law, right to property." },
          { front: "Zollverein", back: "Customs union formed in 1834 under Prussia; removed tariff barriers among German states." },
          { front: "Treaty of Vienna", back: "1815 settlement hosted by Metternich that restored conservative monarchies after Napoleon." },
          { front: "Giuseppe Mazzini", back: "Italian revolutionary (born Genoa, 1807) who founded Young Italy and Young Europe." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The word 'liberalism' comes from the Latin root *liber*, which means:",
            options: ["Nation", "Free", "Equal", "People"],
            answer: 1,
            explain: "*Liber* means free. Liberals stood for individual freedom and equality before the law.",
          },
          {
            kind: "mcq",
            q: "Who hosted the Congress of Vienna in 1815?",
            options: ["Napoleon Bonaparte", "Otto von Bismarck", "Duke Metternich", "Giuseppe Mazzini"],
            answer: 2,
            explain: "The Austrian Chancellor Duke Metternich hosted it. Bismarck came much later, in the 1860s.",
          },
          {
            kind: "fill",
            q: "In 1834 a customs union called the ___ was formed at the initiative of Prussia.",
            answer: ["Zollverein"],
            explain: "The Zollverein abolished tariff barriers and reduced the number of currencies from over thirty to two.",
          },
          {
            kind: "truefalse",
            q: "People in the areas conquered by Napoleon welcomed French rule throughout, because of the Civil Code.",
            answer: false,
            explain: "Early enthusiasm turned to hostility because of higher taxes, censorship and forced conscription.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Put these events in the order they happened.",
            items: ["French Revolution begins", "Napoleon's Civil Code", "Treaty of Vienna", "Zollverein formed", "Frankfurt Parliament meets"],
            explain: "1789 → 1804 → 1815 → 1834 → 1848.",
          },
          {
            kind: "multi",
            q: "Which of these were steps taken by the French revolutionaries? (Choose all that apply.)",
            options: [
              "Uniform system of weights and measures",
              "Abolition of internal customs duties",
              "Restoration of the Bourbon dynasty",
              "A new French tricolour flag",
            ],
            answers: [0, 1, 3],
            explain: "The Bourbons were restored by the conservative Treaty of Vienna in 1815, the opposite of the revolutionaries' aims.",
            difficulty: 2,
            hint: "One option is what conservatives did after Napoleon fell.",
          },
          {
            kind: "mcq",
            q: "In 1830, which country broke away from the United Kingdom of the Netherlands?",
            options: ["Greece", "Belgium", "Poland", "Italy"],
            answer: 1,
            explain: "The July Revolution in France sparked an uprising in Brussels, and Belgium broke away. Greece won recognition in 1832 from the Ottoman Empire.",
          },
        ],
      },
      {
        slug: "unification-germany-italy-britain",
        title: "Making Germany, Italy and Britain",
        summary: "Romanticism, the Frankfurt Parliament, unification of Germany and Italy, the British nation, national allegories and the Balkan problem.",
        minutes: 17,
        xp: 42,
        blocks: [
          {
            type: "text",
            md: "Folk songs, festivals and stories in your mother tongue make you feel you belong somewhere. In 19th-century Europe, writers and artists used the same feelings to build nations.",
          },
          {
            type: "text",
            md: "**Romanticism** was a cultural movement that tried to build national feeling through emotions, folk culture and a shared past, not only through reason. The German philosopher **Johann Gottfried Herder** said true German culture lived among the common people, *das volk*. Collecting folk songs and tales became a way of building the nation. In Poland, which had been divided among Russia, Prussia and Austria, people used the Polish language and music to resist Russian rule.",
          },
          {
            type: "heading",
            text: "1848: the revolution of the liberals",
          },
          {
            type: "text",
            md: "In 1848, middle-class Germans voted for an all-German National Assembly. On 18 May 1848, 831 elected representatives took their places in the **Frankfurt Parliament**, in the Church of St Paul. They drafted a constitution for a German nation headed by a monarchy under a parliament. They offered the crown to **Friedrich Wilhelm IV**, King of Prussia. He refused it and joined other monarchs against the assembly. The parliament was dissolved. Women were not given political rights there; they could only watch from the visitors' gallery.",
          },
          {
            type: "heading",
            text: "Unification of Germany and Italy",
          },
          {
            type: "table",
            headers: ["", "Germany", "Italy"],
            rows: [
              ["Leading state", "**Prussia**", "**Sardinia-Piedmont**"],
              ["Main architect", "**Otto von Bismarck**, Prussia's chief minister", "**Count Cavour**, chief minister, with King **Victor Emmanuel II**"],
              ["Method", "Three wars over seven years, with Denmark, Austria and France", "Diplomacy and an alliance with France; Austria defeated in 1859"],
              ["Popular hero", "the Prussian army and bureaucracy (not the people)", "**Giuseppe Garibaldi** and his Red Shirts took South Italy and the Kingdom of the Two Sicilies in 1860"],
              ["Result", "January 1871: King **William I** proclaimed German Emperor at Versailles", "1861: Victor Emmanuel II proclaimed king of united Italy"],
            ],
          },
          {
            type: "mistake",
            wrong: "Germany was united by a mass movement of the German people after 1848.",
            right: "Germany was united 'from above' by the Prussian monarchy, army and Bismarck, after the liberal effort of 1848 failed.",
            why: "Students remember the Frankfurt Parliament and assume the people won. In fact the liberals were defeated, and unification came through Prussian wars and state power, not elections.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Where was William I proclaimed German Emperor in January 1871?",
                options: ["Frankfurt", "Berlin", "Versailles", "Vienna"],
                answer: 2,
                explain: "The ceremony took place in the Hall of Mirrors at Versailles, in France, just after Prussia defeated France.",
              },
            ],
          },
          {
            type: "text",
            md: "**Britain** was formed differently: not by a sudden revolution but by a long process. The **Act of Union (1707)** joined England and Scotland into the 'United Kingdom of Great Britain', with English influence dominating. Ireland was forcibly joined to the United Kingdom in 1801, after a revolt led by **Wolfe Tone** and his United Irishmen (1798) failed. The new British nation was spread through English culture, the British flag (Union Jack) and the national anthem.",
          },
          {
            type: "text",
            md: "Artists showed nations as women. This is an **allegory**: an abstract idea shown through a person or thing. France was **Marianne**, with the red cap and tricolour. Germany was **Germania**, wearing a crown of oak leaves, which stands for heroism.\n\nAfter 1871 the most serious nationalist tension was in the **Balkans**, a region of many ethnic groups (broadly called Slavs) under the weakening **Ottoman Empire**. As Balkan peoples fought for independence and big powers (Russia, Germany, England, Austria-Hungary) competed for control, the region became a powder keg. This rivalry led to the **First World War in 1914**.",
          },
          {
            type: "example",
            title: "Reading an allegory",
            problem: "A picture shows a woman with a crown of oak leaves, holding a sword, with a broken chain at her feet. Which nation does she stand for, and what do the symbols mean?",
            steps: [
              "Spot the clue that names the nation: a crown of oak leaves is the mark of **Germania**.",
              "Decode each symbol: oak leaves = heroism; sword = readiness to fight; broken chain = being freed.",
              "Put them together in one sentence about the message.",
            ],
            answer: "She is Germania, the allegory of Germany. The picture says the German nation is heroic, free and ready to defend itself.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put these steps to unification in order.",
              items: [
                "Frankfurt Parliament meets in the Church of St Paul",
                "Sardinia-Piedmont defeats Austria",
                "Garibaldi's Red Shirts march into South Italy",
                "Victor Emmanuel II proclaimed king of united Italy",
                "William I proclaimed German Emperor at Versailles",
              ],
              explain: "1848 → 1859 → 1860 → 1861 → 1871. Italy was proclaimed united ten years before the German Empire.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In 'Describe the process of German unification' answers, examiners look for: failure of 1848, Bismarck and Prussia, three wars, proclamation at Versailles in **1871**. A common slip is writing 1861 (Italy's year) for Germany.",
          },
          {
            type: "keypoints",
            items: [
              "Romanticism built national feeling through folk culture, language and emotion (Herder's *das volk*).",
              "The Frankfurt Parliament (1848) failed when Friedrich Wilhelm IV refused the crown.",
              "Germany was united by Bismarck and Prussia; William I became German Emperor in January 1871.",
              "Italy was united by Cavour, Garibaldi and Victor Emmanuel II (king of united Italy, 1861).",
              "The Balkans became the main source of tension after 1871 and helped cause the First World War.",
            ],
          },
        ],
        flashcards: [
          { front: "Romanticism", back: "A cultural movement that built national feeling through emotion, folk culture and a shared past." },
          { front: "Frankfurt Parliament", back: "All-German assembly that met on 18 May 1848; failed when the Prussian king refused the crown." },
          { front: "Otto von Bismarck", back: "Chief minister of Prussia; united Germany through three wars, completed in 1871." },
          { front: "Count Cavour", back: "Chief minister of Sardinia-Piedmont who led Italian unification by diplomacy." },
          { front: "Giuseppe Garibaldi", back: "Leader of the Red Shirts; took South Italy and the Kingdom of the Two Sicilies in 1860." },
          { front: "Marianne and Germania", back: "Female allegories of France and Germany. Germania wears a crown of oak leaves (heroism)." },
          { front: "Act of Union (1707)", back: "Joined England and Scotland into the United Kingdom of Great Britain." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who refused the crown offered by the Frankfurt Parliament?",
            options: ["William I", "Friedrich Wilhelm IV", "Victor Emmanuel II", "Louis Philippe"],
            answer: 1,
            explain: "Friedrich Wilhelm IV, King of Prussia, refused it in 1849 and joined other monarchs against the assembly.",
            difficulty: 2,
            hint: "William I became emperor later, in 1871.",
          },
          {
            kind: "fill",
            q: "The crown of oak leaves worn by Germania stands for ___.",
            answer: ["heroism"],
            explain: "Oak leaves were a symbol of heroism.",
          },
          {
            kind: "truefalse",
            q: "Italy became a united kingdom in 1861 under Victor Emmanuel II.",
            answer: true,
            explain: "He was proclaimed king of united Italy in 1861.",
          },
          {
            kind: "mcq",
            q: "Which state led the unification of Italy?",
            options: ["Papal States", "Kingdom of the Two Sicilies", "Sardinia-Piedmont", "Venice"],
            answer: 2,
            explain: "Sardinia-Piedmont was the only Italian state ruled by an Italian princely house, and it led unification.",
          },
          {
            kind: "multi",
            q: "Which countries did Prussia fight in its three wars of German unification?",
            options: ["Denmark", "Austria", "France", "Russia"],
            answers: [0, 1, 2],
            explain: "Prussia fought Denmark, Austria and France over seven years. It did not fight Russia.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange in order: how Britain became one nation-state.",
            items: ["Act of Union joins England and Scotland", "Revolt of the United Irishmen under Wolfe Tone", "Ireland forcibly joined to the United Kingdom"],
            explain: "1707 → 1798 → 1801.",
          },
          {
            kind: "mcq",
            q: "Why were the Balkans called a source of tension after 1871?",
            options: [
              "They were ruled directly by Britain",
              "Balkan peoples sought independence from a weak Ottoman Empire while big powers competed for control",
              "They refused to join the Zollverein",
              "Napoleon's Civil Code was still in force there",
            ],
            answer: 1,
            explain: "Nationalism among Balkan peoples plus great-power rivalry made the region explosive, leading to war in 1914.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* CBSE: The Making of a Global World                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "making-of-a-global-world",
    title: "The Making of a Global World",
    icon: "🌍",
    description: "How trade, migration and money tied the world together, from the silk routes to Bretton Woods.",
    lessons: [
      {
        slug: "global-world-to-1914",
        title: "From Silk Routes to the 19th-Century World Economy",
        summary: "Pre-modern links, foods that travelled, conquest and disease, the three flows of 1815–1914, rinderpest and indentured labour.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Look at a plate of aloo bhaji with green chillies and tomatoes. Potatoes, chillies and tomatoes all came to India from the Americas, only a few centuries ago. Your lunch is a small record of **globalisation**: the way the world's economies and peoples became linked.",
          },
          {
            type: "text",
            md: "Long before the modern age, traders, travellers, priests and pilgrims crossed great distances. The **silk routes** were land and sea routes that linked China with South Asia, West Asia, Europe and North Africa. Chinese silk went west; Indian textiles and spices travelled too; gold and silver flowed east. Buddhism, Christianity and Islam also spread along these routes.\n\nAfter **Christopher Columbus** reached the Americas in 1492, many common foods came to the rest of the world: potatoes, soya, groundnuts, maize, tomatoes, chillies and sweet potatoes. In Ireland poor peasants came to depend so much on potatoes that when a disease destroyed the crop in the mid-1840s, about one million people died of starvation.",
          },
          {
            type: "text",
            md: "The Spanish conquest of the Americas was helped less by guns than by germs. Europeans carried **smallpox**, to which the native Americans had no immunity. It killed and weakened whole communities and made conquest easier.",
          },
          {
            type: "heading",
            text: "The nineteenth century (1815–1914): three flows",
          },
          {
            type: "table",
            headers: ["Flow", "What moved", "Example"],
            rows: [
              ["**Trade**", "goods, mainly food and raw materials", "Britain imported wheat and cotton after it abolished the **Corn Laws**"],
              ["**Labour**", "people migrating for work", "nearly 50 million people left Europe for America and Australia"],
              ["**Capital**", "money invested over long distances", "British investment in railways and mines abroad"],
            ],
          },
          {
            type: "text",
            md: "The **Corn Laws** were British laws that restricted the import of corn (grain). Industrialists and town-dwellers wanted cheaper food, so the laws were abolished. Food imports poured in, British farmers could not compete, and land in Eastern Europe, Russia, America and Australia was cleared to grow food for Britain.\n\nTechnology helped: **railways**, **steamships** and the **telegraph** made trade faster. **Refrigerated ships** let meat travel from America and Australia to Europe.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why did the British government abolish the Corn Laws?",
                options: [
                  "To protect British landowners",
                  "Under pressure from industrialists and town-dwellers who wanted cheaper food",
                  "Because corn could no longer be grown in Africa",
                  "To stop the export of corn to India",
                ],
                answer: 1,
                explain: "The Corn Laws kept food prices high. Industrialists and urban people pushed for their removal.",
              },
            ],
          },
          {
            type: "heading",
            text: "Colonialism, rinderpest and indentured labour",
          },
          {
            type: "text",
            md: "In 1885 European powers met in Berlin and divided Africa among themselves. **Rinderpest**, a fast-spreading cattle disease, arrived in Africa in the late 1880s with infected cattle brought from British Asia to feed Italian soldiers invading Eritrea. It spread from east to west and killed about 90 per cent of cattle. Africans who lived by cattle lost their wealth and were forced to work for wages on European plantations and mines.\n\nFrom India, many workers went abroad as **indentured labourers**: workers bound by a contract to work for an employer for a fixed time (often five years). Most came from eastern Uttar Pradesh, Bihar, central India and the dry districts of Tamil Nadu. They went to the Caribbean (Trinidad, Guyana, Surinam), Mauritius, Fiji, Ceylon and Malaya, and to Assam's tea gardens. Life was hard, but they created new cultures, such as Hosay in Trinidad and 'chutney music'. Indentured labour was abolished in **1921**.",
          },
          {
            type: "example",
            title: "Cause and effect in a 3-mark answer",
            problem: "Explain the effects of rinderpest on African people. (3 marks)",
            steps: [
              "Start with the event in one line: rinderpest reached Africa in the late 1880s and killed about 90% of cattle.",
              "Link it to livelihood: cattle were the main source of wealth and food for many Africans.",
              "Link it to colonialism: with cattle gone, Africans had to work for wages, which gave Europeans the labour they wanted.",
            ],
            answer: "Rinderpest destroyed about 90% of cattle, ruined African livelihoods and forced Africans into the wage-labour market, which helped European colonisers control land and labour.",
          },
          {
            type: "mistake",
            wrong: "Indentured labourers were slaves.",
            right: "Indentured labourers signed a contract to work for a fixed period, usually with a promise of a return passage. Their conditions were harsh, but legally they were not owned as slaves.",
            why: "Their lives were so hard that the system has been called a 'new system of slavery', which causes the confusion. In exams, use the textbook meaning: bonded by contract for a fixed time.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which of the three flows does each example show?",
              groups: ["Trade", "Labour", "Capital"],
              items: [
                { text: "Wheat shipped from America to Britain", group: 0, hint: "Goods are moving." },
                { text: "Indian workers going to Fiji on contract", group: 1, hint: "People are moving for work." },
                { text: "British money invested in overseas railways", group: 2, hint: "Money is moving." },
                { text: "Meat carried in refrigerated ships", group: 0, hint: "Food is a good being traded." },
                { text: "Europeans migrating to Australia", group: 1, hint: "People are moving." },
                { text: "Loans from London banks to build mines abroad", group: 2, hint: "Investment is a flow of money." },
              ],
              explain: "Economists see three flows in the 19th-century world economy: **trade** (goods), **labour** (people) and **capital** (money).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'three types of movements or flows', name all three and give an example of each. Students often write only 'trade and migration' and lose a mark for missing **capital**.",
          },
          {
            type: "keypoints",
            items: [
              "Silk routes linked Asia, Europe and North Africa through trade, culture and religion.",
              "Foods such as potatoes, maize, tomatoes and chillies spread from the Americas after 1492.",
              "1815–1914: three flows of trade, labour and capital; abolition of the Corn Laws opened Britain to food imports.",
              "Rinderpest (late 1880s) killed about 90% of African cattle and pushed Africans into wage labour.",
              "Indian indentured labourers went to the Caribbean, Mauritius, Fiji and elsewhere; the system was abolished in 1921.",
            ],
          },
        ],
        flashcards: [
          { front: "Silk routes", back: "Land and sea routes linking China with Asia, Europe and North Africa for trade and culture." },
          { front: "Corn Laws", back: "British laws restricting the import of corn; abolished under pressure from industrialists and town-dwellers." },
          { front: "Three flows (1815–1914)", back: "Trade (goods), labour (people) and capital (money)." },
          { front: "Rinderpest", back: "Cattle plague that reached Africa in the late 1880s and killed about 90% of cattle." },
          { front: "Indentured labour", back: "Work under a contract binding the worker to an employer for a fixed time, often five years." },
          { front: "Year indentured emigration was abolished", back: "1921" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which disease helped the Spanish conquer the Americas?",
            options: ["Rinderpest", "Smallpox", "Plague", "Cholera"],
            answer: 1,
            explain: "Native Americans had no immunity to smallpox carried by Europeans. Rinderpest was a cattle disease in Africa.",
          },
          {
            kind: "multi",
            q: "Which foods reached the rest of the world from the Americas? (Choose all.)",
            options: ["Potatoes", "Chillies", "Maize", "Silk"],
            answers: [0, 1, 2],
            explain: "Silk is not a food and came from China along the silk routes.",
          },
          {
            kind: "truefalse",
            q: "Most Indian indentured labourers came from eastern Uttar Pradesh, Bihar, central India and dry districts of Tamil Nadu.",
            answer: true,
            explain: "These regions faced falling incomes and rising rents, pushing workers to migrate.",
          },
          {
            kind: "fill",
            q: "In 1885 the big European powers met in ___ to divide Africa among themselves.",
            answer: ["Berlin"],
            explain: "The Berlin conference of 1885 carved up Africa.",
          },
          {
            kind: "mcq",
            q: "What was a major effect of the abolition of the Corn Laws on British farmers?",
            options: [
              "They earned record profits",
              "They could not compete with cheap imported grain, and much land was left uncultivated",
              "They began exporting grain to America",
              "They were given free land in Australia",
            ],
            answer: 1,
            explain: "Cheap imports undercut British farmers; many left farming and moved to cities or emigrated.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange these in chronological order.",
            items: ["Columbus reaches the Americas", "Berlin conference divides Africa", "Rinderpest reaches the Atlantic coast of Africa", "Indentured emigration abolished"],
            explain: "1492 → 1885 → 1892 → 1921.",
            difficulty: 2,
            hint: "Rinderpest entered Africa in the late 1880s, after the Berlin meeting.",
          },
          {
            kind: "mcq",
            q: "Which technology allowed meat to be shipped from Australia to Europe?",
            options: ["The telegraph", "Refrigerated ships", "The spinning jenny", "The printing press"],
            answer: 1,
            explain: "Refrigerated ships kept meat fresh over long voyages, lowering its price in Europe.",
          },
        ],
      },
      {
        slug: "inter-war-economy-and-bretton-woods",
        title: "Wars, the Great Depression and Bretton Woods",
        summary: "The First World War, mass production, the Great Depression and its effect on India, and the post-war Bretton Woods system.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Imagine a farmer in Punjab in 1932. She grows the same wheat as before, but its price has fallen by half, while the land tax stays the same. To pay, she sells her gold bangles. This was the Great Depression reaching an Indian village.",
          },
          {
            type: "text",
            md: "The **First World War (1914–1918)** was fought between the **Allies** (Britain, France and Russia, later joined by the USA) and the **Central Powers** (Germany, Austria-Hungary and Ottoman Turkey). It was the first **modern industrial war**: machine guns, tanks, aircraft and chemical weapons were made on a huge scale. Britain borrowed heavily from US banks. The war turned the USA from an international debtor into an international **creditor**.",
          },
          {
            type: "text",
            md: "After the war, the US economy boomed because of **mass production**. Henry Ford's car plant in Detroit used the **assembly line**, where each worker repeated one task as the car moved past on a conveyor belt. Cars, fridges and radios were bought on loans.",
          },
          {
            type: "heading",
            text: "The Great Depression (1929 to the mid-1930s)",
          },
          {
            type: "text",
            md: "A **depression** is a long period of falling production, employment, incomes and trade. The **Great Depression** began around **1929** and lasted till the mid-1930s. Two causes:\n\n1. **Agricultural overproduction**: farmers grew more to keep incomes up as prices fell, which pushed prices down further. Produce rotted.\n\n2. **Withdrawal of US loans**: when the US economy faltered in 1928–29, US lenders stopped lending abroad. Countries that depended on these loans, especially in Europe, faced crisis. The US stock market crash of 1929 spread the panic.",
          },
          {
            type: "table",
            headers: ["Effect on India", "Detail"],
            rows: [
              ["Trade collapsed", "India's exports and imports nearly halved between 1928 and 1934"],
              ["Prices crashed", "wheat prices in India fell by 50% between 1928 and 1934"],
              ["Peasants hit hardest", "the colonial government refused to reduce revenue demands"],
              ["Gold exports", "peasants sold their savings and jewellery; India became an exporter of gold"],
              ["Unrest", "rural discontent added to the Civil Disobedience Movement from 1930"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "During the Great Depression, Indian peasants benefited because the government cut land revenue.",
                answer: false,
                explain: "The colonial government refused to reduce revenue demands, so peasants were badly hit.",
              },
            ],
          },
          {
            type: "heading",
            text: "Rebuilding after 1945: Bretton Woods",
          },
          {
            type: "text",
            md: "To avoid another depression, a conference was held at **Bretton Woods** in New Hampshire, USA, in **July 1944**. It set up the **International Monetary Fund (IMF)**, to deal with external surpluses and deficits of member nations, and the **International Bank for Reconstruction and Development (World Bank)**, to finance post-war reconstruction. They are called the **Bretton Woods twins** and began financial operations in **1947**. The system used **fixed exchange rates**: national currencies were pegged to the dollar, and the dollar to gold at $35 per ounce. The USA had an effective veto over key decisions in both institutions.\n\nMany newly independent countries felt the system did not help them. They organised as the **Group of 77 (G-77)** and demanded a **New International Economic Order (NIEO)**: real control over their natural resources, fairer prices for raw materials and better access to markets.",
          },
          {
            type: "example",
            title: "Explaining a chain of causes",
            problem: "Explain how the withdrawal of US loans helped cause the Great Depression. (3 marks)",
            steps: [
              "State the background: many countries, especially in Europe, had financed their investments with loans from the USA.",
              "State the trigger: in 1928–29 US lenders, worried by signs of crisis at home, stopped lending and called back loans.",
              "State the effect: borrowing countries faced crisis; banks failed, currencies collapsed, and the US raised import duties, so world trade shrank.",
            ],
            answer: "US loans had kept many economies running. When they were withdrawn after 1928, borrowing countries fell into crisis and world trade collapsed, deepening the Great Depression.",
          },
          {
            type: "mistake",
            wrong: "The IMF and World Bank were set up in 1947.",
            right: "They were set up at the Bretton Woods Conference in July 1944. They began financial operations in 1947.",
            why: "Textbooks mention both dates close together. Keep them apart: 1944 = decision and creation, 1947 = start of operations.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is it a cause or an effect of the Great Depression?",
              groups: ["Cause", "Effect"],
              items: [
                { text: "Agricultural overproduction pushed prices down", group: 0, hint: "This happened before and led to the crisis." },
                { text: "US lenders withdrew loans from other countries", group: 0, hint: "This set off the crisis abroad." },
                { text: "Wheat prices in India fell by 50%", group: 1, hint: "This was a result in India, 1928–34." },
                { text: "India exported gold as peasants sold savings", group: 1, hint: "A result of falling incomes." },
                { text: "Unemployment rose sharply in the USA", group: 1, hint: "A result of factories and banks closing." },
              ],
              explain: "The causes were **overproduction in agriculture** and **withdrawal of US loans**. Price crashes, unemployment and gold exports from India were its effects.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "'Explain the impact of the Great Depression on India' is a regular 3–5 mark question. Mention trade halving (1928–34), wheat prices falling by 50%, no cut in revenue, gold exports, and the link to Civil Disobedience. Writing only about the USA earns nothing here.",
          },
          {
            type: "keypoints",
            items: [
              "WWI (1914–1918): Allies vs Central Powers; first modern industrial war; the USA became a creditor.",
              "Mass production and the assembly line (Henry Ford) drove the US boom of the 1920s.",
              "Great Depression (1929 to mid-1930s): caused by agricultural overproduction and withdrawal of US loans.",
              "In India, trade halved and wheat prices fell 50% (1928–34); peasants suffered.",
              "Bretton Woods (July 1944) created the IMF and World Bank; operations began in 1947.",
            ],
          },
        ],
        flashcards: [
          { front: "Great Depression", back: "World economic crisis from about 1929 to the mid-1930s: falling production, jobs, incomes and trade." },
          { front: "Two causes of the Great Depression", back: "Agricultural overproduction and the withdrawal of US loans." },
          { front: "Assembly line", back: "Mass-production method (Henry Ford) where each worker repeats one task as the product moves past." },
          { front: "Bretton Woods twins", back: "The IMF and the World Bank, set up in July 1944." },
          { front: "Fixed exchange rates under Bretton Woods", back: "Currencies pegged to the dollar; the dollar pegged to gold at $35 per ounce." },
          { front: "G-77 and NIEO", back: "Group of developing countries that demanded a New International Economic Order." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which countries formed the Central Powers in the First World War?",
            options: [
              "Britain, France and Russia",
              "Germany, Austria-Hungary and Ottoman Turkey",
              "Germany, Italy and Japan",
              "USA, Britain and France",
            ],
            answer: 1,
            explain: "Germany, Italy and Japan were the Axis of the Second World War, a common mix-up.",
          },
          {
            kind: "fill",
            q: "The Bretton Woods Conference was held in July ___.",
            answer: ["1944"],
            explain: "It was held in July 1944 in New Hampshire, USA.",
          },
          {
            kind: "truefalse",
            q: "The First World War turned the USA from a debtor into an international creditor.",
            answer: true,
            explain: "Britain and others borrowed heavily from US banks during the war.",
          },
          {
            kind: "multi",
            q: "Which were effects of the Great Depression on India?",
            options: [
              "Exports and imports nearly halved",
              "Wheat prices fell by about 50%",
              "The government cut land revenue",
              "Peasants sold gold and jewellery",
            ],
            answers: [0, 1, 3],
            explain: "The colonial government did not reduce revenue demands, which made the crisis worse for peasants.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What was the main job of the World Bank when it was set up?",
            options: [
              "To finance post-war reconstruction",
              "To print a world currency",
              "To run the United Nations",
              "To fix the price of wheat",
            ],
            answer: 0,
            explain: "Its full name, International Bank for Reconstruction and Development, shows its purpose. The IMF dealt with external surpluses and deficits.",
          },
          {
            kind: "order",
            q: "Put these in chronological order.",
            items: ["First World War begins", "Great Depression begins", "Bretton Woods Conference", "IMF and World Bank start operations"],
            explain: "1914 → 1929 → 1944 → 1947.",
          },
          {
            kind: "mcq",
            q: "What did the G-77 countries demand?",
            options: ["A return to colonial rule", "A New International Economic Order", "The end of the United Nations", "A single world bank"],
            answer: 1,
            explain: "They wanted control over their resources, fairer prices for raw materials and better market access.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* CBSE: The Age of Industrialisation                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "age-of-industrialisation",
    title: "The Age of Industrialisation",
    icon: "🏭",
    description: "Proto-industrialisation, factories in Britain, and how industry grew and changed in colonial India.",
    lessons: [
      {
        slug: "industrialisation-in-britain",
        title: "Before and After the Factory: Britain",
        summary: "Proto-industrialisation, the first factories, the pace of change, and why hand labour stayed important.",
        minutes: 15,
        xp: 38,
        blocks: [
          {
            type: "text",
            md: "In many Indian villages, a trader still gives yarn to families who weave saris at home, then collects the saris and sells them in cities. Europe had a system just like this before factories came.",
          },
          {
            type: "text",
            md: "**Proto-industrialisation** is the phase of industrial production for international markets that happened *before* factories. It was not based on factories. Merchants from towns gave money and raw material to peasants and artisans in the countryside, who produced goods at home for the merchants.\n\nWhy the countryside? In towns, **guilds** (associations of craftsmen and traders) controlled production, fixed prices and kept out newcomers. Merchants avoided them by going to the villages. Poor peasant families were glad of extra income, because their small plots could not support them.",
          },
          {
            type: "heading",
            text: "The coming of the factory",
          },
          {
            type: "text",
            md: "The earliest factories in England came up by the **1730s**. Cotton was the first symbol of the new era. Britain's imports of raw cotton rose from 2.5 million pounds in 1760 to 22 million pounds by 1787.\n\n**Richard Arkwright** created the cotton mill, where costly new machines were set up in one place under one management. In a factory the owner could watch workers, control quality and regulate labour.",
          },
          {
            type: "table",
            headers: ["Year", "Development"],
            rows: [
              ["1730s", "Earliest factories in England"],
              ["1764", "Spinning Jenny devised by James Hargreaves"],
              ["1781", "James Watt patents his improved version of Newcomen's steam engine"],
              ["Up to the 1840s", "Cotton is the leading industrial sector"],
              ["After the 1840s", "Iron and steel lead, as railways expand"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why did merchants in Europe move production to the countryside before factories?",
                options: [
                  "Villages had steam engines",
                  "Urban guilds controlled production and blocked newcomers",
                  "The government banned trade in towns",
                  "Peasants had more land than townspeople",
                ],
                answer: 1,
                explain: "Guilds held monopoly rights in towns, so merchants turned to rural producers.",
              },
            ],
          },
          {
            type: "heading",
            text: "Why hand labour did not disappear",
          },
          {
            type: "text",
            md: "Historians now say change was slow. Even in the mid-19th century, most British workers were in traditional crafts, not in modern factories.\n\n- **Labour was cheap and plentiful.** Poor peasants and vagrants crowded into cities, so employers did not need costly machines.\n- **Machines were expensive** and often broke down. Many industries had **seasonal demand** (gas works and breweries, for example) and preferred hiring hand workers for the season.\n- **The rich wanted hand-made goods**, seen as refined and well finished. Machine goods were for export to the colonies.\n\nWorkers feared machines would take their jobs. When the **Spinning Jenny** came in, women who lived by hand spinning attacked the new machines.",
          },
          {
            type: "example",
            title: "Writing a 'reasons' answer",
            problem: "Why did industrialists in Victorian Britain prefer hand labour over machines? Give three reasons. (3 marks)",
            steps: [
              "Think of cost: labour was abundant, so wages were low; machines needed large capital.",
              "Think of the kind of demand: seasonal industries needed workers only for part of the year.",
              "Think of buyers: the upper classes preferred hand-made goods.",
              "Write each reason as a separate point with one line of support.",
            ],
            answer: "(1) Plenty of cheap labour was available, while machines were costly to buy and repair. (2) Seasonal industries preferred to hire hand workers for the season. (3) The aristocracy and middle class preferred hand-made goods for their quality.",
          },
          {
            type: "mistake",
            wrong: "Once factories came, they quickly replaced all hand production in Britain.",
            right: "Factories spread slowly. Traditional crafts and hand labour remained the main source of work well into the 19th century.",
            why: "The phrase 'Industrial Revolution' suggests a sudden change. The textbook stresses that the new industries were a small share of the economy for a long time.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "In 1840, what share of British workers were in modern factories?",
              emoji: "🧵",
              options: ["Most of them", "A small minority", "Exactly half"],
              answer: 1,
              trap: 0,
              explain: "Even by the mid-19th century, factory workers in the new industries were a **minority**. Most people still worked in traditional, hand-based crafts.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Define **proto-industrialisation** exactly: large-scale production for an international market, in the countryside, *before* factories, organised by merchants. Many students forget 'international market' or say it took place in factories.",
          },
          {
            type: "keypoints",
            items: [
              "Proto-industrialisation: merchants organised rural home production for international markets before factories.",
              "Guilds in towns pushed merchants to the countryside.",
              "First factories in England by the 1730s; cotton led until the 1840s, then iron and steel.",
              "Hand labour survived because labour was cheap, demand was seasonal and the rich liked hand-made goods.",
            ],
          },
        ],
        flashcards: [
          { front: "Proto-industrialisation", back: "Industrial production for international markets, organised by merchants in the countryside, before factories." },
          { front: "Guild", back: "An association of craftsmen or merchants that controlled production and trade in a town." },
          { front: "Richard Arkwright", back: "Created the cotton mill, bringing machines together under one roof and one management." },
          { front: "Spinning Jenny", back: "Spinning machine devised by James Hargreaves in 1764; one worker could turn several spindles." },
          { front: "James Watt", back: "Improved Newcomen's steam engine and patented it in 1781." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who devised the Spinning Jenny?",
            options: ["Richard Arkwright", "James Watt", "James Hargreaves", "Matthew Boulton"],
            answer: 2,
            explain: "James Hargreaves devised it in 1764. Arkwright created the cotton mill; Watt improved the steam engine.",
          },
          {
            kind: "fill",
            q: "The earliest factories in England came up by the ___.",
            answer: ["1730s", "1730"],
            explain: "Factories multiplied in the late 18th century, starting from the 1730s.",
          },
          {
            kind: "truefalse",
            q: "Proto-industrial production took place mainly inside large factories in towns.",
            answer: false,
            explain: "It took place in peasant homes in the countryside, before factories.",
          },
          {
            kind: "multi",
            q: "Why did hand labour remain important in Victorian Britain? (Choose all.)",
            options: [
              "Labour was cheap and plentiful",
              "Many industries had seasonal demand",
              "The upper classes preferred hand-made goods",
              "Machines were banned by law",
            ],
            answers: [0, 1, 2],
            explain: "There was no ban on machines; employers simply found hand labour cheaper and more flexible.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Put these in order.",
            items: ["Earliest factories in England", "Spinning Jenny devised", "Watt patents improved steam engine"],
            explain: "1730s → 1764 → 1781.",
          },
          {
            kind: "mcq",
            q: "Which sector led British industrialisation up to the 1840s?",
            options: ["Iron and steel", "Cotton", "Railways", "Chemicals"],
            answer: 1,
            explain: "Cotton led first; after the 1840s, iron and steel took the lead as railways expanded.",
          },
        ],
      },
      {
        slug: "industrialisation-in-india",
        title: "Industry in Colonial India",
        summary: "India's textile trade, weavers under the East India Company, Manchester imports, the first Indian factories, small-scale industry and advertisements.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Before machine-made cloth, Indian silk and cotton were famous across the world. Fine textiles from India were in demand in Asia and Europe, carried through ports such as **Surat** on the Gujarat coast, **Masulipatam** on the Coromandel coast and **Hoogly** in Bengal.",
          },
          {
            type: "text",
            md: "Once the **East India Company** gained political power in the 1760s–70s, it tried to control the weavers. It removed older traders and brokers and appointed paid servants called **gomasthas** to supervise weavers, collect supplies and check the quality of cloth. Weavers who took loans (advances) from the Company had to sell only to it, at prices it fixed. Clashes between weavers and gomasthas were common; many weavers left their villages or took up farming.",
          },
          {
            type: "text",
            md: "In the 19th century, cheap machine-made cotton from **Manchester** flooded India. Indian cotton piece-goods fell from about 33 per cent of India's exports in 1811–12 to no more than 3 per cent by 1850–51. Weavers also faced a shortage of good raw cotton: when the American Civil War (1860s) cut cotton supplies to Britain, raw cotton exports from India rose and prices shot up for Indian weavers.",
          },
          {
            type: "heading",
            text: "Factories come to India",
          },
          {
            type: "table",
            headers: ["Year", "Factory"],
            rows: [
              ["1854", "First cotton mill in Bombay (production began two years later)"],
              ["1855", "First jute mill in Bengal"],
              ["1860s", "Elgin Mill started in Kanpur"],
              ["1861", "First cotton mill of Ahmedabad"],
              ["1874", "First spinning and weaving mill of Madras"],
            ],
          },
          {
            type: "text",
            md: "Early Indian industrialists included **Dwarkanath Tagore** in Bengal; **Dinshaw Petit** and **Jamsetjee Nusserwanjee Tata** in Bombay; and **Seth Hukumchand**, a Marwari who set up the first Indian jute mill in Calcutta in 1917. Many made their first money in the China trade.\n\nMills found workers through a **jobber**: a trusted old worker who brought people from his village, got them jobs and helped them settle, and in return demanded money and favours.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who were the gomasthas?",
                options: [
                  "Indian mill owners in Bombay",
                  "Paid servants of the East India Company who supervised weavers",
                  "Village headmen who collected land revenue",
                  "Workers who brought labourers to mills",
                ],
                answer: 1,
                explain: "Gomasthas controlled weavers for the Company. The worker who recruited labour for mills was the jobber.",
              },
            ],
          },
          {
            type: "text",
            md: "Indian industry grew faster during the **Swadeshi movement** and the **First World War**, when imports from Britain fell and Indian mills supplied army needs. Handloom production did not die out: it actually expanded in the 20th century. New technology such as the **fly shuttle** (which moves the weft thread with a rope and pulley) raised weavers' output.\n\nTo sell goods, makers used **advertisements**. Manchester cloth carried labels with 'Made in Manchester', and also images of Indian gods and goddesses to look familiar. Indian makers used patriotic messages: 'If you care for the nation, buy Indian goods.' Calendars hung in homes and shops kept the brand in view all year.",
          },
          {
            type: "example",
            title: "Using a source to answer",
            problem: "A cloth label from the 1890s shows Lord Krishna and the words 'Made in Manchester'. What does it tell us about how British manufacturers sold goods in India? (2 marks)",
            steps: [
              "Notice the two parts: an Indian god and a British place name.",
              "The god makes the foreign product feel familiar and approved to Indian buyers.",
              "'Made in Manchester' signals machine-made quality from Britain.",
            ],
            answer: "Manufacturers used Indian religious images to win the trust of Indian buyers, while the 'Made in Manchester' mark advertised the product's British origin and quality.",
          },
          {
            type: "mistake",
            wrong: "Machine-made cloth wiped out handloom weaving in India completely.",
            right: "Handloom weaving declined sharply in the 19th century, but in the 20th century handloom cloth production actually expanded, helped by technology like the fly shuttle.",
            why: "The story of Manchester imports is told so strongly that students think weaving ended. The textbook shows handlooms survived in niches, such as fine and coarse cloth, that mills did not fill.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each person or term to its role.",
              pairs: [
                ["Gomastha", "Company servant who supervised weavers"],
                ["Jobber", "Recruited workers from villages for mills"],
                ["Seth Hukumchand", "Set up the first Indian jute mill in Calcutta (1917)"],
                ["Fly shuttle", "Raised a weaver's output on the handloom"],
              ],
              explain: "The **gomastha** controlled weavers for the Company; the **jobber** controlled mill labour; Indian entrepreneurs such as **Hukumchand** started their own mills.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In 'Why did Indian weavers suffer?' answers, give two problems: (1) the collapse of export markets and flooding of Manchester goods, and (2) the shortage and high price of raw cotton. Many students write only the first.",
          },
          {
            type: "keypoints",
            items: [
              "Indian textiles dominated world trade before machine cloth, through Surat, Masulipatam and Hoogly.",
              "The East India Company used gomasthas to control weavers.",
              "Manchester imports hit Indian weavers; piece-goods fell from 33% to 3% of exports (1811–12 to 1850–51).",
              "First cotton mill in Bombay in 1854; first jute mill in Bengal in 1855.",
              "Handloom production survived and even expanded in the 20th century.",
            ],
          },
        ],
        flashcards: [
          { front: "Gomastha", back: "A paid servant of the East India Company who supervised weavers and checked cloth quality." },
          { front: "Jobber", back: "A trusted worker employed by mills to recruit labour from his village." },
          { front: "First cotton mill in Bombay", back: "1854 (production began two years later)." },
          { front: "First jute mill in Bengal", back: "1855" },
          { front: "Fly shuttle", back: "A device moved by ropes and pulleys that sends the weft across the loom, raising output." },
          { front: "Pre-colonial textile ports", back: "Surat (Gujarat), Masulipatam (Coromandel coast), Hoogly (Bengal)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Where did the first cotton mill in India come up, in 1854?",
            options: ["Ahmedabad", "Kanpur", "Bombay", "Madras"],
            answer: 2,
            explain: "Bombay's first mill came up in 1854. Ahmedabad's first mill came in 1861.",
          },
          {
            kind: "fill",
            q: "The first Indian jute mill in Calcutta was set up in 1917 by Seth ___.",
            answer: ["Hukumchand"],
            explain: "Seth Hukumchand, a Marwari businessman, set it up.",
          },
          {
            kind: "truefalse",
            q: "Indian industry got a boost during the First World War because imports from Britain fell.",
            answer: true,
            explain: "Mills in Britain were busy with war needs, and Indian mills supplied the army.",
          },
          {
            kind: "multi",
            q: "Which were problems faced by Indian weavers in the 19th century?",
            options: [
              "Manchester imports flooded the market",
              "Raw cotton became scarce and costly",
              "Export markets collapsed",
              "Weavers were paid high fixed salaries by the Company",
            ],
            answers: [0, 1, 2],
            explain: "The Company fixed low prices for cloth; weavers were not on high salaries.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Put these mills in the order they were set up.",
            items: ["First cotton mill in Bombay", "First jute mill in Bengal", "First cotton mill in Ahmedabad", "First mill in Madras"],
            explain: "1854 → 1855 → 1861 → 1874.",
            difficulty: 2,
            hint: "Bombay and Bengal came in back-to-back years.",
          },
          {
            kind: "mcq",
            q: "Why did British manufacturers put Indian gods on cloth labels?",
            options: [
              "Indian law required it",
              "To make the product look familiar and approved to Indian buyers",
              "Because the cloth was made in India",
              "To advertise religious festivals",
            ],
            answer: 1,
            explain: "Images of gods gave divine approval to the goods and made them feel familiar.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* CBSE: Print Culture and the Modern World                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "print-culture-and-the-modern-world",
    title: "Print Culture and the Modern World",
    icon: "📰",
    description: "How printing spread from East Asia to Europe and India, and how it changed religion, politics and society.",
    lessons: [
      {
        slug: "print-in-east-asia-and-europe",
        title: "Print in East Asia and Europe",
        summary: "Woodblock printing in China and Japan, Gutenberg's press, the print revolution, the Reformation and the fear of print.",
        minutes: 15,
        xp: 38,
        blocks: [
          {
            type: "text",
            md: "Today a rumour can spread on WhatsApp in minutes, and so can a good idea. About 500 years ago, the printing press did something similar for Europe.",
          },
          {
            type: "text",
            md: "The earliest print technology came from **China, Japan and Korea**. It was **hand printing**. From AD 594, books in China were printed by rubbing paper against the inked surface of carved **woodblocks**. The traditional Chinese book was folded in the 'accordion' style and stitched at the side.\n\nBuddhist missionaries from China brought hand printing to **Japan** around AD 768–770. The oldest Japanese book, printed in AD 868, is the Buddhist **Diamond Sutra**.",
          },
          {
            type: "heading",
            text: "Gutenberg and the printing press",
          },
          {
            type: "text",
            md: "In 1295 the explorer **Marco Polo** returned to Italy from China and brought knowledge of woodblock printing. Soon woodblock prints spread across Europe.\n\n**Johann Gutenberg** of Strasbourg grew up on a farm and knew olive and wine presses. He used this knowledge to build a **printing press** with metal type. By **1448** he had perfected it. The first book he printed was the **Bible**: about 180 copies, taking three years. Between 1450 and 1550, printing presses were set up in most countries of Europe. The shift from hand printing to mechanical printing led to the **print revolution**.",
          },
          {
            type: "table",
            headers: ["Effect of print", "Example"],
            rows: [
              ["Cheaper books, more readers", "a new reading public grew among ordinary people"],
              ["Spread of new ideas", "Martin Luther's ninety-five theses (1517) were printed and widely read"],
              ["Religious split", "the **Protestant Reformation** began"],
              ["Control and censorship", "the Roman Catholic Church kept an **Index of Prohibited Books** from 1558"],
              ["Fear of print", "some worried that rebellious and irreligious ideas would spread"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What was the first book printed by Gutenberg?",
                options: ["The Diamond Sutra", "The Bible", "The ninety-five theses", "A Chinese accordion book"],
                answer: 1,
                explain: "Gutenberg printed the Bible, about 180 copies. The Diamond Sutra is the oldest Japanese printed book.",
              },
            ],
          },
          {
            type: "text",
            md: "In 1517 the religious reformer **Martin Luther** wrote ninety-five theses criticising practices of the Roman Catholic Church. Printed copies spread his ideas widely, leading to a split in the Church and the start of the **Protestant Reformation**. Luther said: 'Printing is the ultimate and greatest gift of God.'\n\nBy the 18th century, many believed print would spread enlightenment and end despotism. Writers such as Voltaire and Rousseau were widely read, and historians argue that print culture helped create the conditions for the **French Revolution** by spreading ideas, encouraging debate and criticising the monarchy.",
          },
          {
            type: "example",
            title: "Weighing an argument",
            problem: "'Print culture created the conditions for the French Revolution.' Give three arguments historians make for this view. (3 marks)",
            steps: [
              "Idea 1 — ideas: print popularised the ideas of Enlightenment thinkers (Voltaire, Rousseau) who attacked tradition and despotism.",
              "Idea 2 — debate: print created a new culture of dialogue; people began to question existing values.",
              "Idea 3 — image of the monarchy: cartoons and writings mocking the royalty spread hostility to the king.",
              "Add a short balance line if the question asks: people did not accept every idea they read; they interpreted it in their own way.",
            ],
            answer: "Print spread Enlightenment ideas, created a culture of public debate, and spread criticism of the monarchy, so it helped prepare the ground for the Revolution.",
          },
          {
            type: "mistake",
            wrong: "Gutenberg invented printing.",
            right: "Printing (by woodblock) began much earlier in China, Japan and Korea. Gutenberg developed the first known **printing press** in Europe, using movable metal type.",
            why: "European history books focus on Gutenberg, so students think printing began there. The NCERT chapter starts in East Asia for exactly this reason.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the story of print in order.",
              items: [
                "Woodblock printing in China",
                "Hand printing reaches Japan",
                "Marco Polo brings the knowledge to Italy",
                "Gutenberg perfects the printing press",
                "Luther's ninety-five theses are printed",
              ],
              explain: "AD 594 → c. 768–770 → 1295 → 1448 → 1517. Print travelled from East Asia to Europe.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "'Why did some people fear the effect of printed books?' Give both sides: the Church and monarchs feared rebellious and irreligious ideas; some writers feared the spread of rumours and wrong ideas. Name the **Index of Prohibited Books (1558)** for an easy mark.",
          },
          {
            type: "keypoints",
            items: [
              "Hand printing with woodblocks began in China (from AD 594); it reached Japan around AD 768–770.",
              "Marco Polo brought woodblock printing to Italy in 1295.",
              "Gutenberg perfected the printing press by 1448; his first book was the Bible.",
              "Print helped Luther's ideas spread (1517) and led to the Protestant Reformation.",
              "Print spread Enlightenment ideas and helped create conditions for the French Revolution.",
            ],
          },
        ],
        flashcards: [
          { front: "Woodblock printing", back: "Hand printing by rubbing paper on inked, carved wooden blocks; in China from AD 594." },
          { front: "Diamond Sutra", back: "The oldest Japanese book, printed in AD 868." },
          { front: "Johann Gutenberg", back: "Developed the printing press in Strasbourg by 1448; first printed the Bible." },
          { front: "Print revolution", back: "The shift from hand printing to mechanical printing, which changed how people got information and knowledge." },
          { front: "Protestant Reformation", back: "16th-century movement to reform the Catholic Church, begun by Martin Luther in 1517." },
          { front: "Index of Prohibited Books", back: "List of banned books kept by the Roman Catholic Church from 1558." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who brought knowledge of woodblock printing from China to Italy?",
            options: ["Gutenberg", "Marco Polo", "Martin Luther", "Voltaire"],
            answer: 1,
            explain: "Marco Polo returned to Italy in 1295 with this knowledge.",
          },
          {
            kind: "fill",
            q: "Martin Luther wrote ___ theses criticising the Roman Catholic Church in 1517.",
            answer: ["ninety-five", "95", "ninety five"],
            explain: "His ninety-five theses were widely printed and read.",
          },
          {
            kind: "truefalse",
            q: "The oldest Japanese printed book is the Diamond Sutra, printed in AD 868.",
            answer: true,
            explain: "It is a Buddhist text printed in AD 868.",
          },
          {
            kind: "mcq",
            q: "From which machines did Gutenberg get the idea for his press?",
            options: ["Steam engines", "Olive and wine presses", "Spinning wheels", "Woodblock carvings"],
            answer: 1,
            explain: "He grew up on a farm and adapted the olive and wine press.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which were effects of the print revolution in Europe?",
            options: [
              "A new reading public emerged",
              "Religious debates spread widely",
              "The Church banned all reading",
              "New ideas reached ordinary people",
            ],
            answers: [0, 1, 3],
            explain: "The Church tried to control print with the Index of Prohibited Books, but it never banned all reading.",
          },
          {
            kind: "order",
            q: "Arrange in chronological order.",
            items: ["Gutenberg perfects the press", "Luther's ninety-five theses", "Index of Prohibited Books begins", "French Revolution"],
            explain: "1448 → 1517 → 1558 → 1789.",
          },
        ],
      },
      {
        slug: "print-in-india",
        title: "Print Culture in India",
        summary: "Missionary presses, early newspapers, print and religious reform, print for women and the poor, and the Vernacular Press Act.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Before print, India had a rich tradition of **handwritten manuscripts** in Sanskrit, Arabic, Persian and many regional languages, written on palm leaves or handmade paper. But manuscripts were costly and fragile, and few people could read them.",
          },
          {
            type: "text",
            md: "The **printing press first came to Goa** with **Portuguese missionaries** in the mid-16th century. Jesuit priests learnt **Konkani** and printed several tracts. By 1674, about 50 books had been printed in Konkani and Kanara languages. Catholic priests printed the first **Tamil** book in 1579 at Cochin, and the first **Malayalam** book in 1713. By 1710, Dutch Protestant missionaries had printed 32 Tamil texts.\n\nThe English language press grew slowly. From 1780, **James Augustus Hickey** began editing the *Bengal Gazette*, a weekly magazine. The first Indian to publish an Indian newspaper was **Gangadhar Bhattacharya**, who brought out a weekly also called the *Bengal Gazette* (a different paper from Hickey's).",
          },
          {
            type: "heading",
            text: "Print, reform and debate",
          },
          {
            type: "text",
            md: "From the early 19th century there were intense debates about religion and social customs. Print let these debates reach wide audiences in local languages.\n\n- **Raja Rammohun Roy** published the *Sambad Kaumudi* from 1821 to argue for reform; Hindu orthodox groups replied in the *Samachar Chandrika*.\n- In 1822 two Persian newspapers began, *Jam-i-Jahan Nama* and *Shamsul Akhbar*; the Gujarati *Bombay Samachar* also began that year.\n- The **Deoband Seminary**, founded in 1867, published thousands of fatwas telling Muslims how to conduct their lives.\n- The first printed version of Tulsidas's *Ramcharitmanas* came out from Calcutta in 1810.",
          },
          {
            type: "table",
            headers: ["Reader group", "How print reached them"],
            rows: [
              ["Women", "Rashsundari Debi wrote her autobiography *Amar Jiban* (1876); Pandita Ramabai and Tarabai Shinde wrote about the lives of upper-caste women"],
              ["Lower castes", "**Jyotiba Phule** wrote *Gulamgiri* (1871) about the injustices of the caste system"],
              ["Workers", "Kashibaba, a Kanpur mill worker, wrote *Chhote Aur Bade Ka Sawal* (1938) linking caste and class"],
              ["The poor", "cheap small books were sold at crossroads; public libraries opened in towns"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who wrote *Gulamgiri* in 1871?",
                options: ["Raja Rammohun Roy", "Jyotiba Phule", "B.R. Ambedkar", "Rashsundari Debi"],
                answer: 1,
                explain: "Jyotiba Phule, the Maratha pioneer of 'low caste' protest movements, wrote *Gulamgiri* about the caste system.",
              },
            ],
          },
          {
            type: "heading",
            text: "Print and censorship",
          },
          {
            type: "text",
            md: "After the revolt of 1857, the British grew worried about nationalist newspapers. In **1878** the **Vernacular Press Act** was passed, modelled on the Irish Press Laws. It gave the government wide powers to censor reports and editorials in the vernacular (Indian language) press. If a report was judged seditious, the newspaper was warned, and if the warning was ignored, the press could be seized.\n\nNationalist papers kept growing anyway. When **Bal Gangadhar Tilak** wrote with sympathy about Punjab revolutionaries in his newspaper *Kesari* in 1907, he was imprisoned in 1908, which sparked widespread protests.",
          },
          {
            type: "example",
            title: "Answering a 'how did print help' question",
            problem: "How did print culture help the growth of nationalism in India? (3 marks)",
            steps: [
              "Idea 1 — reach: newspapers in Indian languages carried news and ideas to people in many regions.",
              "Idea 2 — criticism: they exposed colonial misrule and encouraged nationalist activities.",
              "Idea 3 — repression backfired: attempts at censorship (Vernacular Press Act, Tilak's imprisonment) led to more protest and solidarity.",
            ],
            answer: "Vernacular newspapers spread nationalist ideas widely, reported colonial misrule and connected people across India; government attempts to suppress them only increased protest.",
          },
          {
            type: "mistake",
            wrong: "The British brought the first printing press to India.",
            right: "The first printing press reached Goa with Portuguese missionaries in the mid-16th century.",
            why: "Because print grew most under British rule, students credit the British. The Portuguese, then Dutch missionaries, came first; Hickey's paper only began in 1780.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each publication to its author or founder.",
              pairs: [
                ["*Sambad Kaumudi*", "Raja Rammohun Roy"],
                ["*Gulamgiri*", "Jyotiba Phule"],
                ["*Amar Jiban*", "Rashsundari Debi"],
                ["*Kesari*", "Bal Gangadhar Tilak"],
                ["*Bengal Gazette* (1780)", "James Augustus Hickey"],
              ],
              explain: "Each of these used print for a cause: social reform, caste equality, women's voices or nationalism.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For the **Vernacular Press Act (1878)**, write three things: the year, that it was modelled on the **Irish Press Laws**, and what it allowed (censorship, warnings, seizure of presses). Students often write 1857 by mistake, the year of the revolt.",
          },
          {
            type: "keypoints",
            items: [
              "Print came to Goa with Portuguese missionaries in the mid-16th century.",
              "Hickey's Bengal Gazette began in 1780; Rammohun Roy's Sambad Kaumudi in 1821.",
              "Print carried debates on religion and reform, and gave voice to women, lower castes and workers.",
              "The Vernacular Press Act (1878) censored the Indian-language press.",
              "Nationalist papers like Tilak's Kesari kept spreading anti-colonial ideas.",
            ],
          },
        ],
        flashcards: [
          { front: "Where did the first printing press in India arrive?", back: "Goa, with Portuguese missionaries, in the mid-16th century." },
          { front: "James Augustus Hickey", back: "Edited the Bengal Gazette, a weekly, from 1780." },
          { front: "Sambad Kaumudi", back: "Newspaper published by Raja Rammohun Roy from 1821 for social reform." },
          { front: "Vernacular Press Act", back: "1878 law, modelled on the Irish Press Laws, to censor the Indian-language press." },
          { front: "Gulamgiri", back: "Book by Jyotiba Phule (1871) on the injustices of the caste system." },
          { front: "Amar Jiban", back: "Autobiography of Rashsundari Debi, published in 1876." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In which year was the Vernacular Press Act passed?",
            options: ["1857", "1878", "1905", "1919"],
            answer: 1,
            explain: "It was passed in 1878. 1857 is the year of the revolt, a frequent mix-up.",
          },
          {
            kind: "fill",
            q: "The first Tamil book was printed in 1579 at ___ by Catholic priests.",
            answer: ["Cochin", "Kochi"],
            explain: "Catholic priests printed it at Cochin.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The Deoband Seminary used print to publish fatwas guiding Muslims in their daily lives.",
            answer: true,
            explain: "Founded in 1867, it published thousands of fatwas.",
          },
          {
            kind: "mcq",
            q: "Which newspaper did Hindu orthodox groups publish to oppose Rammohun Roy's views?",
            options: ["Kesari", "Samachar Chandrika", "Bombay Samachar", "Shamsul Akhbar"],
            answer: 1,
            explain: "The *Samachar Chandrika* answered the reformist *Sambad Kaumudi*.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these were written by or about women's lives?",
            options: ["Amar Jiban", "Writings of Pandita Ramabai", "Gulamgiri", "Writings of Tarabai Shinde"],
            answers: [0, 1, 3],
            explain: "*Gulamgiri* is Jyotiba Phule's book on caste.",
          },
          {
            kind: "order",
            q: "Arrange in chronological order.",
            items: ["Hickey's Bengal Gazette begins", "Sambad Kaumudi begins", "Vernacular Press Act", "Tilak imprisoned"],
            explain: "1780 → 1821 → 1878 → 1908.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ICSE: The First World War                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "the-first-world-war",
    title: "The First World War",
    icon: "🪖",
    description: "Causes, main events and results of the First World War (1914–1918) and the Treaty of Versailles.",
    lessons: [
      {
        slug: "first-world-war-causes-and-results",
        title: "WWI: Causes, Course and the Treaty of Versailles",
        summary: "Nationalism, imperialism, militarism and alliances; the Sarajevo assassination; the Treaty of Versailles and the results of the war.",
        minutes: 17,
        xp: 44,
        blocks: [
          {
            type: "text",
            md: "Picture a dry forest after months without rain. Any small spark can set it ablaze. Europe in 1914 was like that forest. The spark came on **28 June 1914** in the town of Sarajevo.",
          },
          {
            type: "text",
            md: "The **First World War** was fought from **1914 to 1918**. It is called a 'world' war because it involved countries from every continent, including colonies such as India; more than a million Indian soldiers served overseas. Two groups fought: the **Allies** (Britain, France, Russia, later Italy, the USA and others) and the **Central Powers** (Germany, Austria-Hungary, Ottoman Turkey and Bulgaria).",
          },
          {
            type: "table",
            headers: ["Cause", "What it means", "Example"],
            rows: [
              ["**Aggressive nationalism**", "loving one's nation so much that others are seen as enemies", "France wanted Alsace-Lorraine back from Germany; Serbs wanted to unite all Slavs"],
              ["**Imperialism**", "rivalry for colonies, markets and raw materials", "Germany, a late-comer, clashed with Britain and France over colonies"],
              ["**Militarism** (armament race)", "building ever larger armies and navies", "naval race between Britain and Germany"],
              ["**System of alliances**", "Europe split into two armed camps", "**Triple Alliance** (1882): Germany, Austria-Hungary, Italy. **Triple Entente** (1907): Britain, France, Russia"],
              ["**Balkan crisis**", "Ottoman decline and rivalry over the Balkans", "Austria-Hungary annexed Bosnia in 1908, angering Serbia"],
            ],
          },
          {
            type: "text",
            md: "**Immediate cause:** On **28 June 1914**, Archduke **Franz Ferdinand**, heir to the Austro-Hungarian throne, and his wife were shot dead at **Sarajevo** in Bosnia by **Gavrilo Princip**, a young Bosnian Serb linked to the Serbian secret society called the **Black Hand**. Austria-Hungary blamed Serbia and declared war on it on **28 July 1914**. Because of the alliances, Russia, Germany, France and Britain were drawn in within days. Britain declared war on Germany on 4 August 1914 after Germany invaded neutral Belgium.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which countries formed the Triple Entente?",
                options: [
                  "Germany, Austria-Hungary, Italy",
                  "Britain, France, Russia",
                  "Britain, USA, Japan",
                  "Germany, Italy, Japan",
                ],
                answer: 1,
                explain: "Germany, Austria-Hungary and Italy made up the Triple Alliance (1882). Italy later changed sides and joined the Allies in 1915.",
              },
            ],
          },
          {
            type: "text",
            md: "**Course of the war (in brief):** Fighting on the Western Front became **trench warfare**, with little movement for years. New weapons such as machine guns, tanks, poison gas, submarines and aircraft caused huge losses. The **USA joined the Allies in April 1917**, angered by German submarine attacks. **Russia** left the war after its revolution, signing the **Treaty of Brest-Litovsk** with Germany in March 1918. Germany signed an **armistice** (ceasefire) on **11 November 1918**.",
          },
          {
            type: "heading",
            text: "The Treaty of Versailles (28 June 1919)",
          },
          {
            type: "list",
            items: [
              "**War guilt clause:** Germany had to accept blame for the war.",
              "**Reparations:** Germany had to pay huge compensation, fixed in 1921 at 6,600 million pounds.",
              "**Territory:** Alsace-Lorraine went back to France; the Saar coal mines went to France for 15 years; Germany lost all its colonies, which became **mandates** under the League of Nations; Danzig became a free city.",
              "**Disarmament:** the German army was limited to 100,000 men; no air force and no submarines; the Rhineland was demilitarised.",
              "**League of Nations:** its Covenant was part of the treaty.",
            ],
          },
          {
            type: "example",
            title: "Explaining why the treaty caused anger",
            problem: "Why did Germans call the Treaty of Versailles a 'dictated peace'? (3 marks)",
            steps: [
              "Process: Germany was not invited to negotiate; it was simply told to sign.",
              "Blame: the war guilt clause made Germany alone responsible.",
              "Burden: heavy reparations, loss of land and colonies, and a tiny army humiliated the nation.",
            ],
            answer: "The treaty was imposed without discussion, blamed Germany alone and burdened it with reparations and losses of land and military power, so Germans saw it as dictated and unjust. This anger later helped Hitler rise.",
          },
          {
            type: "mistake",
            wrong: "The assassination at Sarajevo was the main cause of the First World War.",
            right: "The assassination was only the immediate cause. The real (underlying) causes were nationalism, imperialism, militarism, the alliance system and the Balkan crisis.",
            why: "The murder is a dramatic story, so students give it all the weight. Without the alliances and rivalries, a local crisis between Austria and Serbia would not have become a world war.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Underlying cause or immediate cause?",
              groups: ["Underlying cause", "Immediate cause"],
              items: [
                { text: "Naval race between Britain and Germany", group: 0, hint: "This built up over many years." },
                { text: "Rivalry for colonies in Africa and Asia", group: 0, hint: "Imperialism is a long-term cause." },
                { text: "Two armed camps of alliances", group: 0, hint: "Alliances formed from 1882 to 1907." },
                { text: "Murder of Franz Ferdinand at Sarajevo", group: 1, hint: "This was the spark in June 1914." },
                { text: "French wish to recover Alsace-Lorraine", group: 0, hint: "France lost it in 1871; this is long-term nationalism." },
              ],
              explain: "Long-term **underlying causes** made war likely; the **immediate cause**, the Sarajevo murder, set it off.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "ICSE often asks for 'any three terms of the Treaty of Versailles' or 'any three consequences of the war'. Write precise terms (Alsace-Lorraine to France, army of 100,000, war guilt clause), not vague lines like 'Germany was punished'.",
          },
          {
            type: "text",
            md: "**Results of the war:** four empires fell (German, Austro-Hungarian, Russian and Ottoman); new nations such as Poland, Czechoslovakia and Yugoslavia appeared; the **League of Nations** was set up in 1920 to keep peace; the USA rose as a world power; and German anger at Versailles helped the rise of dictators.",
          },
          {
            type: "keypoints",
            items: [
              "WWI lasted from 1914 to 1918: Allies vs Central Powers.",
              "Underlying causes: nationalism, imperialism, militarism, alliances, Balkan crisis.",
              "Immediate cause: assassination of Archduke Franz Ferdinand at Sarajevo, 28 June 1914.",
              "Armistice on 11 November 1918; Treaty of Versailles signed on 28 June 1919.",
              "Results: fall of four empires, new states, League of Nations, resentment in Germany.",
            ],
          },
        ],
        flashcards: [
          { front: "Triple Alliance (1882)", back: "Germany, Austria-Hungary and Italy." },
          { front: "Triple Entente (1907)", back: "Britain, France and Russia." },
          { front: "Immediate cause of WWI", back: "Assassination of Archduke Franz Ferdinand at Sarajevo on 28 June 1914." },
          { front: "Armistice", back: "A ceasefire agreement; WWI's armistice was signed on 11 November 1918." },
          { front: "War guilt clause", back: "Clause of the Treaty of Versailles making Germany accept responsibility for the war." },
          { front: "Mandate", back: "A former colony of a defeated power, governed by an Allied country under League of Nations supervision." },
          { front: "Treaty of Versailles", back: "Peace treaty with Germany signed on 28 June 1919." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who assassinated Archduke Franz Ferdinand?",
            options: ["Otto von Bismarck", "Gavrilo Princip", "Kaiser William II", "Benito Mussolini"],
            answer: 1,
            explain: "Gavrilo Princip, a Bosnian Serb linked to the Black Hand, shot him at Sarajevo.",
          },
          {
            kind: "fill",
            q: "The armistice ending the fighting of WWI was signed on 11 November ___.",
            answer: ["1918"],
            explain: "The fighting stopped on 11 November 1918.",
          },
          {
            kind: "truefalse",
            q: "Italy fought throughout the war on the side of Germany.",
            answer: false,
            explain: "Italy was in the Triple Alliance but joined the Allies in 1915.",
            difficulty: 2,
            hint: "Think about which side Italy entered the war on.",
          },
          {
            kind: "multi",
            q: "Which were terms of the Treaty of Versailles?",
            options: [
              "Alsace-Lorraine returned to France",
              "German army limited to 100,000 men",
              "Germany allowed to keep its colonies",
              "Germany had to pay reparations",
            ],
            answers: [0, 1, 3],
            explain: "Germany lost all its colonies, which became League mandates.",
          },
          {
            kind: "order",
            q: "Put these events in order.",
            items: [
              "Triple Alliance formed",
              "Triple Entente formed",
              "Assassination at Sarajevo",
              "USA enters the war",
              "Treaty of Versailles signed",
            ],
            explain: "1882 → 1907 → 1914 → 1917 → 1919.",
          },
          {
            kind: "mcq",
            q: "Which treaty took Russia out of the First World War?",
            options: ["Treaty of Versailles", "Treaty of Vienna", "Treaty of Brest-Litovsk", "Treaty of Constantinople"],
            answer: 2,
            explain: "Russia signed the Treaty of Brest-Litovsk with Germany in March 1918.",
          },
          {
            kind: "mcq",
            q: "Why did Britain declare war on Germany on 4 August 1914?",
            options: [
              "Germany invaded neutral Belgium",
              "Germany sank the Lusitania",
              "Germany attacked Pearl Harbor",
              "Germany invaded Poland",
            ],
            answer: 0,
            explain: "The invasion of Belgium brought Britain in. Poland's invasion in 1939 started WWII; Pearl Harbor was a Japanese attack in 1941.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ICSE: Rise of Dictatorships                                         */
  /* ------------------------------------------------------------------ */
  {
    slug: "rise-of-dictatorships",
    title: "Rise of Dictatorships",
    icon: "🗳️",
    description: "Why democracy failed after WWI, and how Mussolini's Fascism and Hitler's Nazism took power.",
    lessons: [
      {
        slug: "fascism-and-nazism",
        title: "Fascism in Italy and Nazism in Germany",
        summary: "Causes of dictatorship, Mussolini's rise and ideas, Hitler's rise and ideas, and how the two compare.",
        minutes: 17,
        xp: 44,
        blocks: [
          {
            type: "text",
            md: "When people are hungry, jobless and humiliated, a leader who promises 'I alone can fix this' can sound attractive. That is what happened in Italy and Germany after the First World War.",
          },
          {
            type: "text",
            md: "A **dictatorship** is a government in which one person or one party holds all power, with no free elections, free press or opposition. In a **totalitarian** state, the government tries to control every part of life: politics, economy, education, culture and even thought.",
          },
          {
            type: "list",
            items: [
              "**Anger at the peace settlement:** Germany felt humiliated by Versailles; Italy, though on the winning side, felt cheated because it did not get the lands it had been promised.",
              "**Economic crisis:** unemployment, inflation and then the **Great Depression (1929)** caused despair.",
              "**Weak democratic governments:** coalition governments kept falling and could not solve problems.",
              "**Fear of communism:** after the Russian Revolution (1917), industrialists and landlords supported anyone who promised to crush communists.",
              "**Aggressive nationalism:** people wanted to restore national glory.",
            ],
          },
          {
            type: "heading",
            text: "Mussolini and Fascism in Italy",
          },
          {
            type: "text",
            md: "**Benito Mussolini** founded the Fascist movement in **1919**. The word **Fascism** comes from *fasces*, a bundle of rods with an axe, a symbol of authority in ancient Rome. His armed followers, the **Blackshirts**, attacked socialists and strikers. In **October 1922** thousands of Fascists took part in the **March on Rome**, and King Victor Emmanuel III invited Mussolini to form the government. He soon banned other parties, controlled the press and called himself **Il Duce** (the leader). In 1935 Italy invaded **Abyssinia** (Ethiopia).",
          },
          {
            type: "heading",
            text: "Hitler and Nazism in Germany",
          },
          {
            type: "text",
            md: "After WWI, Germany became a democratic republic, the **Weimar Republic**. **Adolf Hitler** led the **National Socialist German Workers' Party** (the **Nazi Party**). After a failed attempt to seize power in Munich in **1923**, he wrote **Mein Kampf** ('My Struggle') in prison. During the Great Depression, Nazi support grew fast. On **30 January 1933**, President Hindenburg appointed Hitler **Chancellor**. Within months he ended democracy, banned other parties and used the secret police (**Gestapo**). After Hindenburg died in 1934, Hitler became **Führer** (leader).",
          },
          {
            type: "table",
            headers: ["", "Fascism (Italy)", "Nazism (Germany)"],
            rows: [
              ["Leader", "Benito Mussolini, 'Il Duce'", "Adolf Hitler, 'Führer'"],
              ["Came to power", "October 1922, after the March on Rome", "30 January 1933, appointed Chancellor"],
              ["Armed followers", "Blackshirts", "Brownshirts (SA) and SS"],
              ["Special idea", "glory of the state; revive the Roman Empire", "racial superiority of 'Aryans', hatred of Jews, **Lebensraum** (living space)"],
              ["Shared ideas", "one party, cult of the leader, glorification of war, opposition to democracy and communism", "same"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What event brought Mussolini to power in 1922?",
                options: ["The Munich Putsch", "The March on Rome", "The Reichstag fire", "The Treaty of Versailles"],
                answer: 1,
                explain: "After the March on Rome in October 1922, the king invited Mussolini to form the government. The Munich Putsch (1923) was Hitler's failed attempt.",
              },
            ],
          },
          {
            type: "example",
            title: "Comparing two ideologies",
            problem: "State two similarities and one difference between Fascism and Nazism. (3 marks)",
            steps: [
              "Find a shared feature of government: both had one-party rule under an all-powerful leader.",
              "Find a shared attitude: both opposed democracy and communism and glorified war.",
              "Find a key difference: Nazism made race central (Aryan superiority, anti-Semitism), while Italian Fascism stressed the glory of the state.",
            ],
            answer: "Similarities: one-party dictatorship with a cult of the leader; hostility to democracy and communism, with glorification of war. Difference: Nazism was built on racial ideas and anti-Semitism; Fascism centred on the supremacy of the state.",
          },
          {
            type: "mistake",
            wrong: "Hitler seized power in Germany by an armed revolution.",
            right: "Hitler's armed attempt in 1923 failed. He came to power legally: the Nazis became the largest party in elections, and he was appointed Chancellor in January 1933. He then destroyed democracy from within.",
            why: "Because Hitler became a dictator, students assume he grabbed power by force. The ICSE point is that democratic weakness let a dictator rise through the system itself.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Italy's Fascism or Germany's Nazism?",
              groups: ["Fascism (Italy)", "Nazism (Germany)"],
              items: [
                { text: "March on Rome", group: 0, hint: "Rome is Italy's capital." },
                { text: "Mein Kampf", group: 1, hint: "Written in prison after the 1923 Munich attempt." },
                { text: "Blackshirts", group: 0, hint: "Mussolini's armed squads." },
                { text: "Lebensraum", group: 1, hint: "A German word: 'living space'." },
                { text: "Il Duce", group: 0, hint: "Italian for 'the leader'." },
                { text: "Gestapo", group: 1, hint: "The German secret state police." },
              ],
              explain: "Both were dictatorships with similar ideas, but each had its own leader, symbols and slogans.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "For 'causes of the rise of Fascism / Nazism', give at least three points and tie each to the country: Italy's discontent with the peace settlement, Germany's humiliation at Versailles, economic crisis, fear of communism, weak governments. A frequent error is writing Germany's points for Italy.",
          },
          {
            type: "keypoints",
            items: [
              "Dictatorships rose from anger at the peace treaties, economic crisis, weak democracies and fear of communism.",
              "Mussolini founded Fascism (1919) and came to power after the March on Rome (October 1922).",
              "Hitler led the Nazi Party and became Chancellor on 30 January 1933, then Führer in 1934.",
              "Both systems were one-party, anti-democratic, anti-communist and glorified war; Nazism added racism.",
            ],
          },
        ],
        flashcards: [
          { front: "Dictatorship", back: "Rule by one person or party with no free elections, opposition or free press." },
          { front: "Fasces", back: "A bundle of rods with an axe, Roman symbol of authority; gave Fascism its name." },
          { front: "March on Rome", back: "October 1922 Fascist march after which Mussolini was asked to form the government." },
          { front: "Mein Kampf", back: "Book by Hitler ('My Struggle') setting out his ideas, written in prison." },
          { front: "Lebensraum", back: "'Living space': Nazi idea that Germany must win land in the east." },
          { front: "Hitler becomes Chancellor", back: "30 January 1933" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What was Mussolini's title as leader of Italy?",
            options: ["Führer", "Il Duce", "Kaiser", "Tsar"],
            answer: 1,
            explain: "Il Duce means 'the leader'. Führer was Hitler's title.",
          },
          {
            kind: "fill",
            q: "Hitler was appointed Chancellor of Germany on 30 January ___.",
            answer: ["1933"],
            explain: "President Hindenburg appointed him in 1933.",
          },
          {
            kind: "truefalse",
            q: "Italy felt dissatisfied after WWI even though it was on the winning side.",
            answer: true,
            explain: "Italy did not get all the territory it had been promised, which fed Fascist anger.",
          },
          {
            kind: "multi",
            q: "Which ideas did Fascism and Nazism share?",
            options: [
              "One-party rule",
              "Opposition to communism",
              "Free and fair elections",
              "Glorification of war",
            ],
            answers: [0, 1, 3],
            explain: "Both destroyed free elections.",
          },
          {
            kind: "order",
            q: "Put these in order.",
            items: ["Mussolini founds the Fascist movement", "March on Rome", "Hitler's failed Munich attempt", "Hitler becomes Chancellor", "Italy invades Abyssinia"],
            explain: "1919 → 1922 → 1923 → 1933 → 1935.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which economic event most helped the Nazis win support?",
            options: ["The Corn Laws", "The Great Depression", "The Zollverein", "Bretton Woods"],
            answer: 1,
            explain: "The Depression from 1929 caused mass unemployment in Germany, and Nazi votes rose sharply.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ICSE: The Second World War                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "the-second-world-war",
    title: "The Second World War",
    icon: "✈️",
    description: "Causes, key events and consequences of the Second World War (1939–1945).",
    lessons: [
      {
        slug: "second-world-war-causes-and-consequences",
        title: "WWII: Causes, Course and Consequences",
        summary: "Versailles, the League's failure, appeasement and the Axis; the invasion of Poland; key events to 1945; and the war's results.",
        minutes: 17,
        xp: 44,
        blocks: [
          {
            type: "text",
            md: "Only twenty-one years after the 'war to end all wars', the world was at war again, and this time it was even more destructive. The **Second World War** lasted from **1939 to 1945**.",
          },
          {
            type: "text",
            md: "Two sides fought. The **Axis Powers** were Germany, Italy and Japan. The **Allies** included Britain, France, and later the USSR (from 1941), the USA (from December 1941) and China.",
          },
          {
            type: "heading",
            text: "Causes of the war",
          },
          {
            type: "list",
            items: [
              "**Treaty of Versailles:** Germans wanted revenge for a treaty they saw as unjust.",
              "**Failure of the League of Nations:** it could not stop Japan's invasion of Manchuria (1931) or Italy's invasion of Abyssinia (1935).",
              "**Rise of Fascism and Nazism:** aggressive dictators wanted expansion.",
              "**Policy of appeasement:** Britain and France gave in to Hitler's demands to avoid war, most famously in the **Munich Pact (1938)**, which handed the Sudetenland of Czechoslovakia to Germany.",
              "**Formation of the Axis:** Germany and Italy formed the Rome–Berlin Axis (1936); Japan joined them, making the Rome–Berlin–Tokyo Axis.",
              "**Nazi–Soviet Pact (23 August 1939):** Germany and the USSR agreed not to attack each other, so Hitler felt free to attack Poland.",
            ],
          },
          {
            type: "text",
            md: "**Immediate cause:** Hitler demanded the free city of **Danzig** and a route across the Polish Corridor. When Poland refused, Germany **invaded Poland on 1 September 1939**. Britain and France declared war on Germany on **3 September 1939**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is meant by the policy of appeasement?",
                options: [
                  "Building alliances to attack Germany",
                  "Giving in to an aggressor's demands to avoid war",
                  "Refusing to trade with dictators",
                  "Joining the Axis Powers",
                ],
                answer: 1,
                explain: "Britain and France let Hitler take Austria and the Sudetenland, hoping he would stop. He did not.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Date", "Event"],
            rows: [
              ["1 September 1939", "Germany invades Poland; war begins"],
              ["June 1940", "France falls to Germany"],
              ["22 June 1941", "Germany invades the USSR"],
              ["7 December 1941", "Japan attacks Pearl Harbor; the USA joins the war"],
              ["6 June 1944", "D-Day: Allied landings in Normandy, France"],
              ["8 May 1945", "Germany surrenders (V-E Day)"],
              ["6 and 9 August 1945", "Atomic bombs dropped on Hiroshima and Nagasaki"],
              ["2 September 1945", "Japan formally surrenders; the war ends"],
            ],
          },
          {
            type: "example",
            title: "Linking WWI to WWII",
            problem: "'The seeds of the Second World War were sown at Versailles.' Explain. (3 marks)",
            steps: [
              "Recall what Versailles did: war guilt, reparations, loss of land, a tiny army.",
              "Show the feeling it created: Germans felt humiliated and wanted revenge.",
              "Show how it was used: Hitler promised to tear up the treaty; he rearmed, took the Rhineland, Austria and the Sudetenland, and then attacked Poland over Danzig.",
            ],
            answer: "The harsh Treaty of Versailles left Germany humiliated and resentful. Hitler exploited this anger, broke the treaty step by step and finally invaded Poland over Danzig, which started WWII.",
          },
          {
            type: "mistake",
            wrong: "The USA fought in the Second World War from the very start in 1939.",
            right: "The USA stayed out of the fighting until Japan attacked Pearl Harbor on 7 December 1941.",
            why: "The USA was so important by the end of the war that students assume it fought from the beginning. It helped Britain with supplies earlier, but did not join the fighting until Pearl Harbor.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put these WWII events in order.",
              items: [
                "Munich Pact gives the Sudetenland to Germany",
                "Germany invades Poland",
                "Japan attacks Pearl Harbor",
                "D-Day landings in Normandy",
                "Atomic bomb dropped on Hiroshima",
              ],
              explain: "1938 → 1939 → 1941 → 1944 → 1945. Appeasement came first; the war ended with the atomic bombs and Japan's surrender.",
            },
          },
          {
            type: "heading",
            text: "Consequences of the war",
          },
          {
            type: "list",
            items: [
              "**Huge destruction:** tens of millions of people died, including millions of Jews killed in the Holocaust.",
              "**Defeat of the Axis:** Fascism and Nazism were destroyed; Germany was divided.",
              "**Rise of two superpowers:** the USA and the USSR became the strongest powers, while Britain and France weakened.",
              "**Cold War:** rivalry between the USA and the USSR began.",
              "**End of colonialism:** weakened European powers could not hold their empires; India became independent in 1947.",
              "**United Nations:** set up in 1945 to prevent future wars.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "When asked for the 'immediate cause' of WWII, write the **German invasion of Poland on 1 September 1939** with the reason (Danzig, Polish Corridor). Writing 'Hitler' or 'Versailles' alone is an underlying cause and loses the mark.",
          },
          {
            type: "keypoints",
            items: [
              "WWII lasted from 1939 to 1945: Axis (Germany, Italy, Japan) vs Allies.",
              "Causes: Versailles, League's failure, dictators, appeasement (Munich 1938), Axis, Nazi–Soviet Pact.",
              "Immediate cause: Germany's invasion of Poland on 1 September 1939.",
              "Germany surrendered in May 1945; Japan surrendered on 2 September 1945 after Hiroshima and Nagasaki.",
              "Results: superpowers, Cold War, decolonisation and the United Nations.",
            ],
          },
        ],
        flashcards: [
          { front: "Axis Powers", back: "Germany, Italy and Japan." },
          { front: "Appeasement", back: "Policy of giving in to an aggressor's demands to avoid war; e.g. the Munich Pact of 1938." },
          { front: "Immediate cause of WWII", back: "Germany's invasion of Poland on 1 September 1939." },
          { front: "Pearl Harbor", back: "US naval base attacked by Japan on 7 December 1941; brought the USA into the war." },
          { front: "Nazi–Soviet Pact", back: "Non-aggression pact between Germany and the USSR, 23 August 1939." },
          { front: "Hiroshima and Nagasaki", back: "Japanese cities hit by atomic bombs on 6 and 9 August 1945." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "On which date did Germany invade Poland?",
            options: ["28 June 1914", "1 September 1939", "7 December 1941", "6 June 1944"],
            answer: 1,
            explain: "1 September 1939. 28 June 1914 is the Sarajevo assassination (WWI).",
          },
          {
            kind: "fill",
            q: "The 1938 agreement that gave the Sudetenland to Germany is called the ___ Pact.",
            answer: ["Munich"],
            explain: "The Munich Pact is the best-known example of appeasement.",
          },
          {
            kind: "truefalse",
            q: "The USSR was on Germany's side for the whole of WWII.",
            answer: false,
            explain: "The USSR signed a non-aggression pact in 1939, but Germany invaded it in June 1941, and it fought with the Allies.",
            difficulty: 2,
            hint: "What happened on 22 June 1941?",
          },
          {
            kind: "multi",
            q: "Which were consequences of WWII?",
            options: [
              "Rise of the USA and USSR as superpowers",
              "Formation of the United Nations",
              "Formation of the League of Nations",
              "Speeding up of decolonisation",
            ],
            answers: [0, 1, 3],
            explain: "The League of Nations was formed after WWI, in 1920.",
          },
          {
            kind: "mcq",
            q: "Which event brought the USA into the Second World War?",
            options: ["Invasion of Poland", "Fall of France", "Attack on Pearl Harbor", "D-Day"],
            answer: 2,
            explain: "Japan's attack on Pearl Harbor on 7 December 1941.",
          },
          {
            kind: "order",
            q: "Arrange in chronological order.",
            items: ["Japan invades Manchuria", "Italy invades Abyssinia", "Munich Pact", "Nazi–Soviet Pact", "Japan formally surrenders"],
            explain: "1931 → 1935 → 1938 → August 1939 → September 1945.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ICSE: The United Nations | Karnataka: International Institutions    */
  /* ------------------------------------------------------------------ */
  {
    slug: "the-united-nations",
    title: "The United Nations",
    icon: "🇺🇳",
    description: "How the UN was formed, its aims and principles, and the work of its principal organs.",
    lessons: [
      {
        slug: "un-formation-and-objectives",
        title: "Formation, Aims and the General Assembly",
        summary: "The road to the UN Charter, the UN's objectives and principles, its six principal organs, and the General Assembly.",
        minutes: 16,
        xp: 42,
        blocks: [
          {
            type: "text",
            md: "Every year on **24 October**, schools around the world mark **UN Day**. It is the birthday of an organisation that almost every country on Earth has joined: the **United Nations (UN)**.",
          },
          {
            type: "text",
            md: "The League of Nations, set up after WWI, failed to stop the Second World War. As that war raged, world leaders planned a stronger body. The name 'United Nations' was suggested by US President **Franklin D. Roosevelt**.",
          },
          {
            type: "table",
            headers: ["Date", "Step towards the UN"],
            rows: [
              ["14 August 1941", "**Atlantic Charter**: Roosevelt and Churchill set out goals for a peaceful post-war world"],
              ["1 January 1942", "**Declaration by United Nations** signed by 26 nations fighting the Axis"],
              ["1944", "**Dumbarton Oaks** talks (USA, UK, USSR, China) draft the plan for the UN"],
              ["25 April – 26 June 1945", "**San Francisco Conference**: delegates of 50 nations draw up the Charter"],
              ["26 June 1945", "**UN Charter signed**"],
              ["24 October 1945", "Charter comes **into force**; the UN is born (UN Day)"],
            ],
          },
          {
            type: "text",
            md: "The **UN Charter** is the founding document, like a constitution for the UN. Its preamble begins with the words 'We the peoples of the United Nations'. The UN has its **headquarters in New York**, six official languages (Arabic, Chinese, English, French, Russian and Spanish) and **193 member states** (the number since 2011). **India** was one of the original members; it signed the Charter in 1945, even before independence.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "When did the UN Charter come into force?",
                options: ["26 June 1945", "24 October 1945", "1 January 1942", "14 August 1941"],
                answer: 1,
                explain: "It was signed on 26 June 1945 and came into force on 24 October 1945, which is celebrated as UN Day.",
              },
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "To maintain **international peace and security**.",
              "To develop **friendly relations** among nations, based on equal rights and **self-determination** of peoples.",
              "To achieve international **cooperation** in solving economic, social, cultural and humanitarian problems, and to promote **human rights**.",
              "To be a **centre** for harmonising the actions of nations towards these common goals.",
            ],
          },
          {
            type: "text",
            md: "Its principles include the **sovereign equality** of all members, settling disputes by **peaceful means**, not using force against the territory or independence of any state, and not interfering in matters that are essentially within a country's **domestic jurisdiction**.\n\nThe UN has **six principal organs**: the General Assembly, the Security Council, the Economic and Social Council (ECOSOC), the Trusteeship Council, the International Court of Justice and the Secretariat.",
          },
          {
            type: "heading",
            text: "The General Assembly",
          },
          {
            type: "table",
            headers: ["Feature", "Detail"],
            rows: [
              ["Composition", "all member states; each may send up to 5 representatives but has **one vote**"],
              ["Sessions", "one regular session every year, starting in September; special sessions when needed"],
              ["President", "elected for each session; **Vijaya Lakshmi Pandit** of India was the first woman President (1953)"],
              ["Voting", "**important questions** (peace and security, new members, budget) need a **two-thirds majority** of members present and voting; other questions a simple majority"],
              ["Functions", "discusses any matter within the Charter; elects the 10 non-permanent members of the Security Council and the members of ECOSOC; with the Security Council, elects judges of the ICJ; appoints the Secretary-General and admits new members **on the Security Council's recommendation**; approves the UN budget"],
            ],
          },
          {
            type: "example",
            title: "Writing a 'functions' answer",
            problem: "State any three functions of the General Assembly. (3 marks)",
            steps: [
              "Choose functions of different kinds so each is clearly separate: deliberative, electoral, financial.",
              "Deliberative: it discusses any question relating to peace, security and international cooperation and makes recommendations.",
              "Electoral: it elects the 10 non-permanent members of the Security Council.",
              "Financial: it considers and approves the UN budget and fixes members' contributions.",
            ],
            answer: "(1) Discusses and recommends on any matter within the Charter. (2) Elects the non-permanent members of the Security Council. (3) Approves the UN budget.",
          },
          {
            type: "mistake",
            wrong: "The General Assembly alone appoints the Secretary-General and admits new members.",
            right: "The General Assembly appoints the Secretary-General and admits new members only **on the recommendation of the Security Council**.",
            why: "Because the Assembly holds the final vote, students forget the Security Council's role. Without its recommendation, the Assembly cannot act on these matters.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps towards the UN in order.",
              items: [
                "Atlantic Charter",
                "Declaration by United Nations",
                "Dumbarton Oaks talks",
                "Charter signed at San Francisco",
                "Charter comes into force",
              ],
              explain: "August 1941 → January 1942 → 1944 → 26 June 1945 → 24 October 1945.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "Keep the two 1945 dates apart: **26 June 1945** = Charter signed; **24 October 1945** = Charter in force, UN Day. Swapping them is the most common error in ICSE and Karnataka SSLC papers.",
          },
          {
            type: "keypoints",
            items: [
              "UN Charter signed on 26 June 1945; came into force on 24 October 1945 (UN Day).",
              "Headquarters: New York; 193 member states; India is an original member.",
              "Main aim: maintain international peace and security; also cooperation and human rights.",
              "Six principal organs: GA, SC, ECOSOC, Trusteeship Council, ICJ, Secretariat.",
              "General Assembly: all members, one vote each; two-thirds majority on important questions.",
            ],
          },
        ],
        flashcards: [
          { front: "UN Charter signed", back: "26 June 1945, at San Francisco." },
          { front: "UN Day", back: "24 October: the day in 1945 the Charter came into force." },
          { front: "UN headquarters", back: "New York, USA." },
          { front: "Six principal organs of the UN", back: "General Assembly, Security Council, ECOSOC, Trusteeship Council, International Court of Justice, Secretariat." },
          { front: "Voting in the General Assembly", back: "One member, one vote; two-thirds majority on important questions, simple majority on others." },
          { front: "First woman President of the General Assembly", back: "Vijaya Lakshmi Pandit of India (1953)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Where is the headquarters of the United Nations?",
            options: ["Geneva", "The Hague", "New York", "Paris"],
            answer: 2,
            explain: "Geneva hosts WHO and ILO, The Hague hosts the ICJ, Paris hosts UNESCO.",
          },
          {
            kind: "fill",
            q: "The UN Charter was signed on 26 June ___.",
            answer: ["1945"],
            explain: "It was signed at the San Francisco Conference.",
          },
          {
            kind: "truefalse",
            q: "In the General Assembly, a big country like the USA has more votes than a small country like Nepal.",
            answer: false,
            explain: "Every member state has one vote: this is sovereign equality.",
          },
          {
            kind: "numeric",
            q: "How many principal organs does the United Nations have?",
            answer: 6,
            explain: "GA, SC, ECOSOC, Trusteeship Council, ICJ and Secretariat.",
          },
          {
            kind: "multi",
            q: "Which are objectives of the United Nations?",
            options: [
              "Maintain international peace and security",
              "Promote respect for human rights",
              "Form a single world government",
              "Develop friendly relations among nations",
            ],
            answers: [0, 1, 3],
            explain: "The UN respects the sovereignty of states; it is not a world government.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What majority does the General Assembly need to admit a new member?",
            options: ["Simple majority", "Two-thirds majority of members present and voting", "Unanimous vote", "Three-fourths majority"],
            answer: 1,
            explain: "Admission of new members is an important question, so it needs two-thirds, and also a Security Council recommendation.",
            difficulty: 2,
            hint: "Admission counts as an 'important question'.",
          },
        ],
      },
      {
        slug: "security-council-icj-secretariat",
        title: "Security Council, ICJ and Secretariat",
        summary: "Composition, voting and the veto in the Security Council; the International Court of Justice; the Secretariat and Secretary-General; ECOSOC and the Trusteeship Council.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "If a war breaks out somewhere tomorrow, the world will turn to one small room in New York: the chamber of the **Security Council**. It is the UN's main body for peace and security.",
          },
          {
            type: "heading",
            text: "The Security Council",
          },
          {
            type: "table",
            headers: ["Feature", "Detail"],
            rows: [
              ["Composition", "**15 members**: 5 permanent and 10 non-permanent"],
              ["Permanent members (P5)", "China, France, Russia, the United Kingdom and the United States"],
              ["Non-permanent members", "elected by the General Assembly for **2-year terms**; 5 are replaced each year"],
              ["Procedural matters", "need 9 votes out of 15"],
              ["Substantive (important) matters", "need 9 votes **including the concurring votes of all 5 permanent members**"],
              ["Presidency", "rotates among members every month"],
            ],
          },
          {
            type: "text",
            md: "The **veto** is the power of any one permanent member to block a decision on a substantive matter by voting against it. In practice, if a permanent member only **abstains**, it is not counted as a veto.\n\n**Functions** of the Security Council: to investigate disputes that may threaten peace; to recommend ways of settling them; to impose **sanctions** (such as trade bans) on an aggressor; to take **military action** if needed, including sending peacekeeping forces; to recommend the appointment of the Secretary-General and the admission of new members; and, with the General Assembly, to elect the judges of the ICJ.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which country is NOT a permanent member of the Security Council?",
                options: ["China", "France", "India", "Russia"],
                answer: 2,
                explain: "India has been elected a non-permanent member several times and seeks a permanent seat, but it is not one of the P5.",
              },
            ],
          },
          {
            type: "heading",
            text: "International Court of Justice and the Secretariat",
          },
          {
            type: "table",
            headers: ["", "International Court of Justice (ICJ)", "Secretariat"],
            rows: [
              ["Seat", "The Hague, Netherlands", "New York (UN headquarters)"],
              ["Head / members", "**15 judges**, no two from the same country", "headed by the **Secretary-General**, with international staff"],
              ["How chosen", "elected by the General Assembly and Security Council, voting separately", "Secretary-General appointed by the General Assembly on the Security Council's recommendation"],
              ["Term", "**9 years**; one-third retire every 3 years", "Secretary-General usually serves a 5-year term, which can be renewed"],
              ["Work", "settles legal disputes between states that accept its jurisdiction; gives **advisory opinions** to UN organs", "runs the day-to-day work of the UN; the Secretary-General can bring any threat to peace to the Security Council's attention"],
            ],
          },
          {
            type: "text",
            md: "The **Economic and Social Council (ECOSOC)** has 54 members elected for 3-year terms and coordinates economic and social work, including the specialised agencies. The **Trusteeship Council** looked after trust territories until they became independent; it suspended its work in 1994 after the last one, Palau, became independent.\n\nThe first Secretary-General was **Trygve Lie** of Norway. The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council, for a five-year term that can be renewed.",
          },
          {
            type: "example",
            title: "Applying the voting rule",
            problem: "In a Security Council vote on sanctions, 13 members vote yes; one permanent member votes no and one non-permanent member abstains. Is the resolution passed?",
            steps: [
              "Decide the type of matter: sanctions are a substantive matter.",
              "Check the number of votes: 13 yes is more than the required 9.",
              "Check the permanent members: one permanent member voted **no**, which is a veto.",
            ],
            answer: "No. Even with 13 votes in favour, a 'no' vote by one permanent member vetoes a substantive resolution.",
          },
          {
            type: "mistake",
            wrong: "Any member of the Security Council can use the veto.",
            right: "Only the 5 permanent members have the veto. The 10 non-permanent members vote, but none of them can block a decision alone.",
            why: "Students hear 'Security Council members have a veto' and apply it to all 15. The veto is the special privilege of the P5.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each UN organ to its feature.",
              pairs: [
                ["General Assembly", "All members, one vote each"],
                ["Security Council", "15 members, 5 with the veto"],
                ["International Court of Justice", "15 judges at The Hague"],
                ["Secretariat", "Headed by the Secretary-General"],
                ["ECOSOC", "54 members, economic and social work"],
              ],
              explain: "Each principal organ has a clear job: the Assembly debates, the Council keeps peace, the Court judges, the Secretariat administers and ECOSOC coordinates development work.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "For 'composition of the Security Council', write all three parts: **15 members**, **5 permanent** (name them) and **10 non-permanent elected for 2 years**. For the ICJ, remember **15 judges, 9-year term, The Hague**: many students write 5 or 10 judges.",
          },
          {
            type: "keypoints",
            items: [
              "Security Council: 15 members, P5 = China, France, Russia, UK, USA; 10 elected for 2 years.",
              "Substantive decisions need 9 votes including all 5 permanent members; one 'no' from the P5 is a veto.",
              "ICJ: 15 judges, 9-year terms, at The Hague.",
              "Secretariat: headed by the Secretary-General, appointed by the GA on the SC's recommendation.",
              "ECOSOC has 54 members; the Trusteeship Council suspended work in 1994.",
            ],
          },
        ],
        flashcards: [
          { front: "Permanent members of the Security Council", back: "China, France, Russia, United Kingdom, United States." },
          { front: "Veto", back: "The power of a permanent member to block a substantive Security Council decision by voting against it." },
          { front: "Term of non-permanent Security Council members", back: "2 years, elected by the General Assembly." },
          { front: "ICJ", back: "International Court of Justice at The Hague: 15 judges, 9-year terms." },
          { front: "Secretary-General", back: "Chief administrative officer of the UN, appointed by the GA on the SC's recommendation." },
          { front: "First UN Secretary-General", back: "Trygve Lie of Norway." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many judges sit on the International Court of Justice?",
            answer: 15,
            explain: "15 judges, elected for 9 years.",
          },
          {
            kind: "mcq",
            q: "Where is the International Court of Justice located?",
            options: ["New York", "Geneva", "The Hague", "Rome"],
            answer: 2,
            explain: "It sits in the Peace Palace at The Hague, Netherlands.",
          },
          {
            kind: "truefalse",
            q: "An abstention by a permanent member of the Security Council counts as a veto.",
            answer: false,
            explain: "By long practice, only a negative vote by a permanent member is a veto.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Non-permanent members of the Security Council are elected for a term of ___ years.",
            answer: ["2", "two"],
            explain: "They are elected by the General Assembly; five seats change each year.",
          },
          {
            kind: "multi",
            q: "Which are functions of the Security Council?",
            options: [
              "Impose sanctions on an aggressor",
              "Recommend the appointment of the Secretary-General",
              "Approve the UN budget",
              "Send peacekeeping forces",
            ],
            answers: [0, 1, 3],
            explain: "The budget is approved by the General Assembly.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "How many votes does a substantive Security Council resolution need?",
            options: [
              "Any 8 votes",
              "9 votes including all 5 permanent members",
              "All 15 votes",
              "A simple majority of the General Assembly",
            ],
            answer: 1,
            explain: "9 of 15, with no negative vote from any permanent member.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ICSE: Major Agencies of the United Nations                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "major-agencies-of-the-un",
    title: "Major Agencies of the United Nations",
    icon: "🤝",
    description: "UNICEF, WHO and UNESCO in detail, with a look at the ILO, FAO, IMF and World Bank.",
    lessons: [
      {
        slug: "unicef-who-unesco",
        title: "UNICEF, WHO and UNESCO",
        summary: "When and why each agency was set up, its headquarters and its main functions, with Indian examples.",
        minutes: 16,
        xp: 42,
        blocks: [
          {
            type: "text",
            md: "The two drops of polio vaccine you got as a baby, the World Heritage tag on the ruins of Hampi, and school nutrition campaigns all have one thing in common: UN agencies helped make them possible.\n\nBesides its six principal organs, the UN works through many **specialised agencies**, funds and programmes. Each deals with one area, such as health, children, education or labour, and works with governments across the world.",
          },
          {
            type: "heading",
            text: "UNICEF",
          },
          {
            type: "text",
            md: "The **United Nations International Children's Emergency Fund (UNICEF)** was set up by the General Assembly on **11 December 1946** to help children in countries ruined by WWII. In 1953 it became a permanent part of the UN, renamed the **United Nations Children's Fund**, but kept the short name UNICEF. Its headquarters is in **New York**. It won the **Nobel Peace Prize in 1965**.\n\n**Functions:** child health and immunisation; nutrition for mothers and children; safe drinking water and sanitation; education, especially for girls; emergency relief for children in wars and disasters; and protecting **child rights**.",
          },
          {
            type: "heading",
            text: "WHO",
          },
          {
            type: "text",
            md: "The **World Health Organization (WHO)** was set up when its constitution came into force on **7 April 1948**. That is why 7 April is **World Health Day**. Its headquarters is in **Geneva**, Switzerland.\n\n**Functions:** to help all peoples reach the highest possible level of health; to fight diseases such as malaria, tuberculosis, polio and HIV/AIDS; to run immunisation campaigns; to set international health standards; to support health research; and to coordinate the response to epidemics. WHO led the campaign that **eradicated smallpox**, declared in **1980**. In 2014 WHO certified India and the South-East Asia region **polio-free**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why is 7 April celebrated as World Health Day?",
                options: [
                  "Smallpox was eradicated on that day",
                  "WHO's constitution came into force on 7 April 1948",
                  "UNICEF was founded on that day",
                  "It is the date of the UN Charter",
                ],
                answer: 1,
                explain: "WHO came into being on 7 April 1948.",
              },
            ],
          },
          {
            type: "heading",
            text: "UNESCO",
          },
          {
            type: "text",
            md: "The **United Nations Educational, Scientific and Cultural Organization (UNESCO)** came into force on **4 November 1946** (its constitution was signed in November 1945). Its headquarters is in **Paris**. Its idea is that wars begin in the minds of people, so peace must be built in their minds too.\n\n**Functions:** to spread education and literacy; to promote science and cooperation among scientists; to protect cultural and natural heritage, including **World Heritage Sites** such as the Group of Monuments at **Hampi** in Karnataka; to encourage free flow of ideas and respect for diverse cultures.",
          },
          {
            type: "table",
            headers: ["Agency", "Set up", "Headquarters", "Main focus"],
            rows: [
              ["UNICEF", "11 December 1946", "New York", "children's health, nutrition, education, rights"],
              ["WHO", "7 April 1948", "Geneva", "health for all, disease control"],
              ["UNESCO", "1945–46 (in force 4 November 1946)", "Paris", "education, science, culture, heritage"],
              ["ILO", "1919 (UN agency from 1946)", "Geneva", "workers' rights and labour standards"],
              ["FAO", "16 October 1945", "Rome", "food, farming, fighting hunger"],
              ["IMF and World Bank", "1944 (Bretton Woods)", "Washington, D.C.", "currency stability; loans for development"],
            ],
          },
          {
            type: "example",
            title: "Choosing the right agency",
            problem: "A cyclone hits coastal Odisha. Children need clean water, vaccines and a safe place to study. Which UN agency would lead help for the children, and what would it do? (2 marks)",
            steps: [
              "Identify the group being helped: children.",
              "Recall the agency for children: UNICEF.",
              "List two actions from its functions: safe water and sanitation; immunisation; temporary learning centres.",
            ],
            answer: "UNICEF. It would supply safe drinking water and hygiene kits, support vaccination and set up temporary learning spaces for children.",
          },
          {
            type: "mistake",
            wrong: "WHO is based in New York, like the UN.",
            right: "WHO's headquarters is in Geneva. UNICEF is in New York and UNESCO is in Paris.",
            why: "Students assume every UN body sits at the UN headquarters. Agencies have their own seats, and headquarters questions are common one-mark items.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each agency with its role.",
              pairs: [
                ["UNICEF", "Health, nutrition and rights of children"],
                ["WHO", "Disease control and health standards"],
                ["UNESCO", "Education, science and World Heritage"],
                ["ILO", "Labour standards and workers' rights"],
                ["FAO", "Food security and better farming"],
              ],
              explain: "Each agency covers one field. Learn one keyword each: **children**, **health**, **education and culture**, **labour**, **food**.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "ICSE commonly asks 'State any three functions of WHO / UNICEF / UNESCO'. Write three clearly different functions, each as a full sentence. Mixing them up, such as giving 'literacy' as a WHO function, loses marks. Note that UNICEF is technically a UN **fund**, not a specialised agency, but ICSE groups it with the major agencies.",
          },
          {
            type: "keypoints",
            items: [
              "UNICEF: 11 December 1946, New York; children's health, nutrition, education and rights; Nobel Peace Prize 1965.",
              "WHO: 7 April 1948 (World Health Day), Geneva; smallpox eradicated (1980); India polio-free (2014).",
              "UNESCO: in force 4 November 1946, Paris; education, science, culture and World Heritage.",
              "Other agencies: ILO (labour), FAO (food), IMF and World Bank (finance).",
            ],
          },
        ],
        flashcards: [
          { front: "UNICEF headquarters and founding", back: "New York; set up on 11 December 1946." },
          { front: "WHO headquarters and founding", back: "Geneva; constitution in force on 7 April 1948." },
          { front: "UNESCO headquarters", back: "Paris." },
          { front: "World Health Day", back: "7 April, marking WHO's founding in 1948." },
          { front: "Smallpox eradication", back: "Declared by WHO in 1980." },
          { front: "Three functions of UNESCO", back: "Spread education and literacy; promote science; protect cultural and natural heritage." },
          { front: "FAO", back: "Food and Agriculture Organization, Rome; works to defeat hunger." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which agency's headquarters is in Paris?",
            options: ["WHO", "UNICEF", "UNESCO", "ILO"],
            answer: 2,
            explain: "UNESCO is in Paris; WHO and ILO are in Geneva; UNICEF is in New York.",
          },
          {
            kind: "fill",
            q: "WHO declared smallpox eradicated in the year ___.",
            answer: ["1980"],
            explain: "Smallpox is the first human disease eradicated worldwide.",
          },
          {
            kind: "truefalse",
            q: "UNICEF was originally set up to help children in countries devastated by the Second World War.",
            answer: true,
            explain: "It began in 1946 as an emergency fund; it became permanent in 1953.",
          },
          {
            kind: "multi",
            q: "Which are functions of UNICEF?",
            options: [
              "Immunisation of children",
              "Safe drinking water and sanitation",
              "Fixing currency exchange rates",
              "Education of girls",
            ],
            answers: [0, 1, 3],
            explain: "Exchange rates are the IMF's area.",
          },
          {
            kind: "mcq",
            q: "A UN agency lists Hampi as a World Heritage Site. Which agency?",
            options: ["WHO", "UNESCO", "FAO", "UNICEF"],
            answer: 1,
            explain: "UNESCO protects cultural and natural heritage through the World Heritage list.",
          },
          {
            kind: "order",
            q: "Arrange by founding date, earliest first.",
            items: ["ILO", "FAO", "UNICEF", "WHO"],
            explain: "ILO 1919 → FAO October 1945 → UNICEF December 1946 → WHO April 1948.",
            difficulty: 3,
            hint: "The ILO is older than the UN itself.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ICSE: The Non-Aligned Movement                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "the-non-aligned-movement",
    title: "The Non-Aligned Movement",
    icon: "🕊️",
    description: "Why newly free nations chose not to join either Cold War bloc, and what NAM stood for.",
    lessons: [
      {
        slug: "nam-origins-and-objectives",
        title: "NAM: Meaning, Founders and Aims",
        summary: "The Cold War blocs, the meaning of non-alignment, Panchsheel, Bandung and Belgrade, NAM's objectives and India's role.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Imagine two big gangs in your school, each pushing you to join. You choose to stay friends with both, while judging every quarrel on its merits. That is the basic idea of **non-alignment**.",
          },
          {
            type: "text",
            md: "After WWII the world split into two **power blocs** in the **Cold War**: the **Western bloc**, led by the USA (with the military alliance **NATO**, formed in 1949), and the **Eastern bloc**, led by the USSR (with the **Warsaw Pact**, 1955). Newly independent countries of Asia and Africa did not want to become pawns in this rivalry.\n\n**Non-alignment** means not joining either military bloc and following an **independent foreign policy**, deciding each issue on its merits.",
          },
          {
            type: "mistake",
            wrong: "Non-alignment means neutrality: staying silent and not taking sides on world issues.",
            right: "Non-alignment means not joining military blocs, but actively taking a stand on each issue on its merits, for peace, against colonialism and racism.",
            why: "Both words suggest 'not taking sides', so students mix them up. A neutral country stays out of disputes; a non-aligned country speaks and acts on them, independently of the blocs.",
          },
          {
            type: "heading",
            text: "Founders and key meetings",
          },
          {
            type: "table",
            headers: ["Founder leader", "Country"],
            rows: [
              ["**Jawaharlal Nehru**", "India"],
              ["**Gamal Abdel Nasser**", "Egypt"],
              ["**Josip Broz Tito**", "Yugoslavia"],
              ["**Sukarno**", "Indonesia"],
              ["**Kwame Nkrumah**", "Ghana"],
            ],
          },
          {
            type: "text",
            md: "In 1954 India and China agreed on **Panchsheel**, five principles of peaceful relations: (1) mutual respect for each other's territorial integrity and sovereignty; (2) mutual non-aggression; (3) mutual non-interference in each other's internal affairs; (4) equality and mutual benefit; (5) peaceful coexistence. These ideas shaped NAM.\n\nIn **April 1955** the **Bandung Conference** in Indonesia brought Asian and African nations together. The first **NAM summit** was held at **Belgrade**, Yugoslavia, in **September 1961**, with **25 member countries**. NAM has since grown to about **120 members**, the largest grouping of states after the UN. India hosted the seventh summit in **New Delhi in 1983**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Where and when was the first NAM summit held?",
                options: ["Bandung, 1955", "Belgrade, 1961", "Cairo, 1964", "New Delhi, 1983"],
                answer: 1,
                explain: "Belgrade, September 1961. Bandung (1955) was an Asian-African conference that came before it.",
              },
            ],
          },
          {
            type: "heading",
            text: "Objectives of NAM",
          },
          {
            type: "list",
            items: [
              "Keep away from military alliances and the power blocs.",
              "End **colonialism** and **imperialism**; support freedom struggles.",
              "Oppose **racial discrimination**, such as apartheid in South Africa.",
              "Work for **disarmament**, especially nuclear disarmament, and world peace.",
              "Promote a fair **New International Economic Order** and cooperation among developing countries.",
              "Strengthen the **United Nations**.",
            ],
          },
          {
            type: "example",
            title: "Explaining why India chose non-alignment",
            problem: "Give three reasons why India adopted a policy of non-alignment after independence. (3 marks)",
            steps: [
              "Freedom: India had just won independence and wanted to keep its decisions in its own hands, not a bloc leader's.",
              "Development: staying out of blocs let India get aid and technology from both the USA and the USSR.",
              "Peace: India needed peace to build its economy and believed in peaceful coexistence (Panchsheel).",
            ],
            answer: "To protect its newly won independence in foreign policy, to get economic help from both blocs, and to promote world peace needed for its own development.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A NAM country sees one superpower invade a small nation. What does it do?",
              emoji: "🌐",
              options: ["Stays silent, since it is neutral", "Condemns the invasion on its merits", "Joins the other superpower's alliance"],
              answer: 1,
              trap: 0,
              explain: "Non-alignment is **not** neutrality. A non-aligned country judges each issue on its merits and speaks up, without joining either bloc.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "Name all five founders with their countries for full marks, and give the first summit exactly: **Belgrade, 1961**. Writing 'Bandung 1955' as the first NAM summit is a common error.",
          },
          {
            type: "keypoints",
            items: [
              "Non-alignment: not joining Cold War military blocs; independent foreign policy on merits.",
              "Founders: Nehru (India), Nasser (Egypt), Tito (Yugoslavia), Sukarno (Indonesia), Nkrumah (Ghana).",
              "Panchsheel (1954) and Bandung (1955) prepared the ground; first summit at Belgrade, 1961, with 25 members.",
              "Aims: end colonialism and racism, disarmament, peace, fair world economic order.",
              "Non-alignment is not neutrality.",
            ],
          },
        ],
        flashcards: [
          { front: "Non-alignment", back: "Not joining either Cold War military bloc; following an independent foreign policy on merits." },
          { front: "Five founders of NAM", back: "Nehru, Nasser, Tito, Sukarno and Nkrumah." },
          { front: "First NAM summit", back: "Belgrade, Yugoslavia, September 1961; 25 member countries." },
          { front: "Panchsheel", back: "Five principles of peaceful coexistence agreed by India and China in 1954." },
          { front: "Bandung Conference", back: "April 1955 Asian-African conference in Indonesia that prepared the ground for NAM." },
          { front: "NATO and Warsaw Pact", back: "Military alliances of the Western bloc (1949) and the Eastern bloc (1955)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which leader represented Yugoslavia among NAM's founders?",
            options: ["Nasser", "Tito", "Sukarno", "Nkrumah"],
            answer: 1,
            explain: "Josip Broz Tito of Yugoslavia hosted the first summit at Belgrade.",
          },
          {
            kind: "truefalse",
            q: "Non-alignment and neutrality mean exactly the same thing.",
            answer: false,
            explain: "A non-aligned nation takes active positions on issues; it only refuses to join military blocs.",
          },
          {
            kind: "numeric",
            q: "How many countries attended the first NAM summit at Belgrade in 1961?",
            answer: 25,
            explain: "25 member countries took part.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are objectives of NAM?",
            options: [
              "End colonialism",
              "Oppose racial discrimination",
              "Join NATO for protection",
              "Work for disarmament",
            ],
            answers: [0, 1, 3],
            explain: "Joining NATO would be the opposite of non-alignment.",
          },
          {
            kind: "order",
            q: "Put these in chronological order.",
            items: ["NATO formed", "Panchsheel agreed", "Bandung Conference", "Belgrade summit", "New Delhi summit"],
            explain: "1949 → 1954 → 1955 → 1961 → 1983.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The five principles of peaceful coexistence agreed between India and China in 1954 are called ___.",
            answer: ["Panchsheel", "Panchshila", "Panchsheela", "Panchshil"],
            explain: "Panchsheel means 'five principles'.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Karnataka SSLC: Political Developments of the 20th Century          */
  /* ------------------------------------------------------------------ */
  {
    slug: "political-developments-20th-century",
    title: "Political Developments of the 20th Century",
    icon: "🌐",
    description: "An overview of the world wars, revolutions in Russia and China, the dictators and the Cold War.",
    lessons: [
      {
        slug: "twentieth-century-overview",
        title: "Wars, Revolutions, Dictators and the Cold War",
        summary: "A one-lesson map of the 20th century: WWI, the Russian Revolution, Fascism and Nazism, WWII, the Chinese Revolution and the Cold War.",
        minutes: 17,
        xp: 44,
        blocks: [
          {
            type: "text",
            md: "Your grandparents' parents lived through more change than almost any generation in history: two world wars, revolutions that overthrew emperors, dictators, the atom bomb and a 'cold' war that lasted 45 years. This lesson gives you the big picture.",
          },
          {
            type: "table",
            headers: ["Year", "Event"],
            rows: [
              ["1914–1918", "First World War"],
              ["1917", "Russian Revolution: the Bolsheviks under Lenin take power"],
              ["1922", "Mussolini comes to power in Italy"],
              ["1933", "Hitler becomes Chancellor of Germany"],
              ["1939–1945", "Second World War"],
              ["1945", "United Nations formed"],
              ["1949", "People's Republic of China proclaimed by Mao Zedong; NATO formed"],
              ["1955", "Warsaw Pact formed"],
              ["1961", "Berlin Wall built"],
              ["1989", "Berlin Wall falls"],
              ["1991", "Soviet Union breaks up; the Cold War ends"],
            ],
          },
          {
            type: "heading",
            text: "Revolutions in Russia and China",
          },
          {
            type: "text",
            md: "In **Russia**, the Tsar's harsh rule, poverty and heavy losses in WWI led to revolution in **1917**. Tsar **Nicholas II** gave up the throne, and later that year the **Bolsheviks** led by **Lenin** seized power. Russia became the first **communist** state; in 1922 it became the **USSR** (Soviet Union).\n\nIn **China**, the Communist Party led by **Mao Zedong** won a long civil war. On **1 October 1949** Mao proclaimed the **People's Republic of China**.",
          },
          {
            type: "text",
            md: "Between the wars, **dictatorships** rose. **Mussolini** led **Fascism** in Italy from 1922, and **Hitler** led **Nazism** in Germany from 1933. Both crushed democracy, glorified war and pursued aggressive expansion, which led to the **Second World War (1939–1945)**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who led the Bolsheviks in the Russian Revolution of 1917?",
                options: ["Stalin", "Lenin", "Mao Zedong", "Nicholas II"],
                answer: 1,
                explain: "Lenin led the Bolsheviks. Nicholas II was the Tsar who was overthrown; Mao led China's revolution.",
              },
            ],
          },
          {
            type: "heading",
            text: "The Cold War",
          },
          {
            type: "text",
            md: "The **Cold War** was the long rivalry between the **USA** (capitalist, democratic) and the **USSR** (communist, one-party) after WWII. It is called 'cold' because the two superpowers never fought each other directly. Instead they competed through an **arms race** (including nuclear weapons), military alliances, propaganda, the space race and wars fought by others.\n\nThe West formed **NATO (1949)**; the communist bloc formed the **Warsaw Pact (1955)**. Germany was divided, and the **Berlin Wall (1961)** became its symbol. Newly free nations such as India chose **non-alignment**. The Cold War ended when the Berlin Wall fell in **1989** and the **USSR broke up in 1991**.",
          },
          {
            type: "example",
            title: "Explaining a term with an example",
            problem: "What is meant by the Cold War? Give one example of it. (2 marks)",
            steps: [
              "Define it: a state of tension and rivalry between the USA and the USSR after WWII, without direct war between them.",
              "Say why 'cold': no direct fighting between the two superpowers.",
              "Give one concrete example: rival military alliances (NATO and the Warsaw Pact) or the Berlin Wall.",
            ],
            answer: "The Cold War was the tension and rivalry between the USA and the USSR after 1945, fought through arms races and alliances instead of direct war. Example: the USA's NATO (1949) against the USSR's Warsaw Pact (1955).",
          },
          {
            type: "mistake",
            wrong: "The Cold War was a war fought in cold countries like Russia.",
            right: "'Cold' means the superpowers never fought each other directly. It was a war of tension, arms races and rival alliances.",
            why: "The word sounds like weather. Remember: a 'hot' war has direct fighting; a 'cold' war is hostility without it.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which side of the Cold War does each belong to?",
              groups: ["Western bloc (USA)", "Eastern bloc (USSR)"],
              items: [
                { text: "NATO", group: 0, hint: "North Atlantic Treaty Organization, formed in 1949 by the USA and Western Europe." },
                { text: "Warsaw Pact", group: 1, hint: "Formed in 1955 by the USSR and its allies." },
                { text: "Capitalist economy", group: 0, hint: "Private ownership and markets." },
                { text: "Communist one-party state", group: 1, hint: "The Soviet model." },
                { text: "West Germany", group: 0, hint: "Allied with the USA and NATO." },
                { text: "East Germany", group: 1, hint: "Under Soviet influence; built the Berlin Wall." },
              ],
              explain: "The Cold War divided Europe and much of the world into a **Western bloc** led by the USA and an **Eastern bloc** led by the USSR. India stayed out of both through non-alignment.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Karnataka SSLC often asks short answers such as 'What were the results of the Second World War?' or 'Name the military alliances of the Cold War'. Use exact names and dates (NATO 1949, Warsaw Pact 1955, USSR broke up 1991). For deeper detail on each event, see the topics on the two world wars, dictatorships and NAM.",
          },
          {
            type: "keypoints",
            items: [
              "WWI 1914–1918 and WWII 1939–1945 changed the world map.",
              "Russian Revolution 1917 (Lenin, Bolsheviks); People's Republic of China 1949 (Mao Zedong).",
              "Mussolini (Italy, 1922) and Hitler (Germany, 1933) set up dictatorships.",
              "Cold War: USA vs USSR rivalry without direct war; NATO (1949) vs Warsaw Pact (1955).",
              "The Cold War ended with the fall of the Berlin Wall (1989) and break-up of the USSR (1991).",
            ],
          },
        ],
        flashcards: [
          { front: "Russian Revolution", back: "1917: the Tsar was overthrown and the Bolsheviks under Lenin took power." },
          { front: "People's Republic of China", back: "Proclaimed by Mao Zedong on 1 October 1949." },
          { front: "Cold War", back: "Rivalry between the USA and the USSR after WWII without direct war between them." },
          { front: "NATO", back: "Western military alliance led by the USA, formed in 1949." },
          { front: "Warsaw Pact", back: "Eastern bloc military alliance led by the USSR, formed in 1955." },
          { front: "End of the Cold War", back: "Fall of the Berlin Wall (1989) and break-up of the USSR (1991)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Why is the Cold War called 'cold'?",
            options: [
              "It was fought only in winter",
              "The USA and USSR never fought each other directly",
              "It was fought in the Arctic",
              "No weapons were made during it",
            ],
            answer: 1,
            explain: "It was a war of rivalry and tension; there was a huge arms race, but no direct war between the superpowers.",
          },
          {
            kind: "fill",
            q: "The People's Republic of China was proclaimed by ___ in 1949.",
            answer: ["Mao Zedong", "Mao", "Mao Tse-tung"],
            explain: "Mao proclaimed it on 1 October 1949.",
          },
          {
            kind: "truefalse",
            q: "The USSR broke up in 1991.",
            answer: true,
            explain: "Its break-up in 1991 marked the end of the Cold War.",
          },
          {
            kind: "order",
            q: "Arrange in chronological order.",
            items: ["Russian Revolution", "Hitler becomes Chancellor", "UN formed", "Berlin Wall built", "Berlin Wall falls"],
            explain: "1917 → 1933 → 1945 → 1961 → 1989.",
          },
          {
            kind: "multi",
            q: "Which were part of the Cold War rivalry?",
            options: ["Arms race", "NATO and Warsaw Pact", "Treaty of Vienna", "Division of Germany"],
            answers: [0, 1, 3],
            explain: "The Treaty of Vienna was in 1815, long before the Cold War.",
          },
          {
            kind: "mcq",
            q: "Which country became the first communist state?",
            options: ["China", "Russia (later the USSR)", "Germany", "Yugoslavia"],
            answer: 1,
            explain: "Russia, after the Bolshevik Revolution of 1917. China became communist in 1949.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "The Rise of Nationalism in Europe": "rise-of-nationalism-in-europe",
  "The Making of a Global World": "making-of-a-global-world",
  "The Age of Industrialisation": "age-of-industrialisation",
  "Print Culture and the Modern World": "print-culture-and-the-modern-world",
  "The First World War": "the-first-world-war",
  "Rise of Dictatorships": "rise-of-dictatorships",
  "The Second World War": "the-second-world-war",
  "The United Nations": "the-united-nations",
  "Major Agencies of the United Nations": "major-agencies-of-the-un",
  "The Non-Aligned Movement": "the-non-aligned-movement",
  "Political Developments of the 20th Century": "political-developments-20th-century",
  "International Institutions": "the-united-nations",
};
