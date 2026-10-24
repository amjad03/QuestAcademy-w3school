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
            type: "heading",
            text: "The French Revolution and the idea of the nation",
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
            type: "heading",
            text: "Liberals, conservatives and revolutionaries",
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
            md: "Long before the modern age, traders, travellers, priests and pilgrims crossed great distances. The **silk routes** were land and sea routes that linked China with South Asia, West Asia, Europe and North Africa. Chinese silk went west; Indian textiles and spices travelled too; gold and silver flowed east. Buddhism, Christianity and Islam also spread along these routes.\n\nAfter **Christopher Columbus** reached the Americas in 1492, many common foods came to the rest of the world: potatoes, soya, groundnuts, maize, tomatoes, chillies and sweet potatoes. In Ireland poor peasants came to depend so much on potatoes that when a disease destroyed the crop in the mid-1840s, hundreds of thousands died of starvation.",
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
            md: "The **printing press first came to Goa** with **Portuguese missionaries** in the mid-16th century. Jesuit priests learnt **Konkani** and printed several tracts. By 1674, about 50 books had been printed in Konkani and Kanara languages. Catholic priests printed the first **Tamil** book in 1579 at Cochin, and the first **Malayalam** book in 1713. By 1710, Dutch Protestant missionaries had printed 32 Tamil texts.\n\nThe English language press grew slowly. From 1780, **James Augustus Hickey** began editing the *Bengal Gazette*, a weekly magazine. The first Indian to publish an Indian newspaper was **Gangadhar Bhattacharya**, who brought out the *Bengal Gazette*.",
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
  /* NEXT */
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "The Rise of Nationalism in Europe": "rise-of-nationalism-in-europe",
};
