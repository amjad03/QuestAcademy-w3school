import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

/* ------------------------------------------------------------------ */
/* The Cholas (ICSE)                                                   */
/* ------------------------------------------------------------------ */

const cholas: Topic = {
  slug: "c9-cholas",
  title: "The Cholas",
  icon: "🛕",
  description: "The Chola empire of the far south: great rulers, village self-government and the Brihadeeswara temple.",
  lessons: [
    {
      slug: "chola-empire-and-administration",
      title: "The Chola Empire: Rulers, Villages and Temples",
      summary: "How the Cholas built an empire, ran their villages through elected committees and built the Brihadeeswara temple.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🛕",
          caption: "In Thanjavur, Tamil Nadu, a temple tower about 66 m tall has stood for more than 1,000 years. A Chola king built it.",
        },
        {
          type: "text",
          md: "The **Cholas** ruled the Kaveri delta in present-day Tamil Nadu. An early Chola family is known from the Sangam age, but the great Chola empire began in the middle of the 9th century CE, when **Vijayalaya** captured **Thanjavur** and made it his capital.\n\nHistorians call these later rulers the **Imperial Cholas**. For about 400 years they ruled much of south India, and at their height their navy sailed as far as Sri Lanka and Southeast Asia.",
        },
        {
          type: "table",
          headers: ["Ruler", "Reign (CE)", "Main achievements"],
          rows: [
            ["Vijayalaya", "mid-9th century", "captured Thanjavur; founded the Imperial Chola line"],
            ["Rajaraja I", "985–1014", "conquered the Pandyas, Cheras and northern Sri Lanka; built the **Brihadeeswara temple** at Thanjavur (completed about 1010)"],
            ["Rajendra I", "1014–1044", "completed the conquest of Sri Lanka; marched to the Ganga and took the title **Gangaikonda Chola**; built the new capital **Gangaikonda Cholapuram**; sent a naval expedition against **Srivijaya** in Southeast Asia"],
          ],
        },
        {
          type: "heading",
          text: "How the empire was run",
        },
        {
          type: "text",
          md: "The king was at the top, helped by ministers and officers. The empire was divided into provinces called **mandalams**. Each mandalam had smaller units called **valanadus** and **nadus**, and each nadu was a group of villages.\n\nThe Cholas are famous for **local self-government**: villages managed their own affairs through assemblies. The **ur** was the assembly of an ordinary village of landowners. The **sabha** (or mahasabha) was the assembly of a *brahmadeya*, a village given to Brahmins. The **nagaram** was the assembly of merchants in trading towns.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which Chola assembly looked after the affairs of merchants in a trading town?",
              options: ["Ur", "Sabha", "Nagaram", "Mandalam"],
              answer: 2,
              explain: "The **nagaram** was the merchants' assembly. The ur was for ordinary villages, the sabha for Brahmin villages, and a mandalam was a province, not an assembly.",
            },
          ],
        },
        {
          type: "text",
          md: "Our best source for village government is the **Uttaramerur inscriptions** (near Kanchipuram), carved in the reign of **Parantaka I** in the early 10th century. They give the rules for choosing members of the sabha's committees, called **variyams**, such as the garden committee and the tank committee.\n\nMembers were chosen by the **kudavolai** (pot-ticket) system. The names of eligible men were written on palm-leaf tickets and put in a pot. A young boy then drew out the tickets one by one.",
        },
        {
          type: "example",
          title: "Reading a source",
          problem: "The Uttaramerur rules said a candidate must own tax-paying land and a house, be between 35 and 70 years old and know the Vedas. A man who had served on a committee in the last three years, or had not given his accounts, could not stand. What does this tell us about Chola village government?",
          steps: [
            "Look at **who could stand**: only men with land, a house and learning. So women, the landless and the poor were left out.",
            "Look at the **three-year rule**: the same people could not hold power again and again. Power was rotated.",
            "Look at the **accounts rule**: members had to show how they spent public money. This is accountability.",
            "Put it together: the system was organised and fair in some ways, but it was not open to everyone.",
          ],
          answer: "Chola villages had a well-organised, rotating and accountable system of self-government, but only for a small group of qualified men. It was not democracy in the modern sense.",
        },
        {
          type: "mistake",
          wrong: "The Cholas had elections like ours, where every villager voted.",
          right: "Only qualified men (with land, a house and learning) could be candidates, and committee members were picked by lot from a pot, not by everyone voting.",
          why: "Words like *assembly* and *committee* sound modern, so it is easy to imagine a modern election. The kudavolai system was a draw of lots among a small, privileged group.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each Chola term to its meaning.",
            pairs: [
              ["Mandalam", "A province of the empire"],
              ["Ur", "Assembly of an ordinary village"],
              ["Sabha", "Assembly of a Brahmin village"],
              ["Variyam", "A committee of the sabha"],
              ["Kudavolai", "Choosing members by drawing palm-leaf tickets from a pot"],
            ],
            explain: "Mandalam is a unit of territory; ur, sabha and nagaram are assemblies; variyams are their committees; kudavolai is the way members were picked.",
          },
        },
        {
          type: "heading",
          text: "Chola art and architecture",
        },
        {
          type: "text",
          md: "Chola temples are built in the **Dravida style**. The tower over the main shrine is called the **vimana**, and the gateway tower is the **gopuram**. The **Brihadeeswara (Rajarajeshwara) temple** at Thanjavur, built by Rajaraja I, has a granite vimana about 66 m high. Rajendra I built a similar temple at Gangaikonda Cholapuram. These are part of the UNESCO World Heritage site *Great Living Chola Temples*.\n\nThe Cholas were also masters of **bronze images**, made by the **lost-wax method**. The most famous is **Nataraja**, Shiva as the lord of dance. Temples were also centres of village life: they owned land, gave work to many people and held schools and festivals.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "When asked about Chola local self-government, write the **name of the source (Uttaramerur inscriptions)**, the **kudavolai method** and at least two **qualifications or disqualifications**. Many students write only 'villages had assemblies' and lose marks for missing detail.",
        },
        {
          type: "keypoints",
          items: [
            "Vijayalaya founded the Imperial Chola line with Thanjavur as capital (mid-9th century).",
            "Rajaraja I (985–1014) built the Brihadeeswara temple; Rajendra I (1014–1044) took the title Gangaikonda Chola and sent a navy to Srivijaya.",
            "Empire: mandalam → valanadu → nadu → village. Assemblies: ur, sabha, nagaram.",
            "The Uttaramerur inscriptions describe committees (variyams) chosen by the kudavolai system.",
            "Chola art: Dravida temples (vimana, gopuram) and bronze images such as Nataraja.",
          ],
        },
      ],
      flashcards: [
        { front: "Who founded the Imperial Chola line?", back: "Vijayalaya, who captured Thanjavur in the mid-9th century CE." },
        { front: "Brihadeeswara temple", back: "Built at Thanjavur by Rajaraja I, completed about 1010 CE; its vimana is about 66 m tall." },
        { front: "Gangaikonda Chola", back: "Title of Rajendra I after his army reached the Ganga. He built Gangaikonda Cholapuram." },
        { front: "Uttaramerur inscriptions", back: "Early 10th-century inscriptions (reign of Parantaka I) giving the rules for village committees." },
        { front: "Kudavolai", back: "Pot-ticket system: names on palm leaves put in a pot, drawn out by a young boy." },
        { front: "Ur, sabha, nagaram", back: "Assemblies of an ordinary village, a Brahmin village and merchants respectively." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who built the Brihadeeswara temple at Thanjavur?",
          options: ["Vijayalaya", "Rajaraja I", "Rajendra I", "Parantaka I"],
          answer: 1,
          explain: "Rajaraja I built it, completing it around 1010 CE. Rajendra I, his son, built the temple at Gangaikonda Cholapuram.",
        },
        {
          kind: "fill",
          q: "Committees of the Chola village sabha were called ___.",
          answer: ["variyams", "variyam", "variyars"],
          explain: "The variyams looked after things such as gardens, tanks and justice.",
        },
        {
          kind: "truefalse",
          q: "Under the kudavolai system every adult villager, man or woman, cast a vote.",
          answer: false,
          explain: "Only qualified men were eligible, and members were chosen by drawing lots from a pot.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange the Chola units from the largest to the smallest.",
          items: ["Empire", "Mandalam", "Valanadu", "Nadu", "Village"],
          explain: "The empire was split into mandalams, then valanadus and nadus, and nadus were groups of villages.",
        },
        {
          kind: "multi",
          q: "Which were achievements of Rajendra I? Choose all that apply.",
          options: ["Naval expedition against Srivijaya", "Built Gangaikonda Cholapuram", "Captured Thanjavur from the Muttaraiyars", "Took the title Gangaikonda Chola"],
          answers: [0, 1, 3],
          explain: "Capturing Thanjavur was the work of Vijayalaya, the founder, about 150 years earlier.",
          difficulty: 2,
          hint: "One option belongs to the founder of the dynasty.",
        },
        {
          kind: "mcq",
          q: "A candidate for a committee at Uttaramerur had to be aged:",
          options: ["18 to 60", "21 to 50", "35 to 70", "Any age, if he owned land"],
          answer: 2,
          explain: "The inscription sets the age at 35 to 70, along with owning land and a house and knowing the Vedas.",
        },
        {
          kind: "mcq",
          q: "The tall tower over the main shrine of a Dravida temple is called the:",
          options: ["Gopuram", "Vimana", "Shikhara", "Mandapa"],
          answer: 1,
          explain: "In the Dravida style the tower over the shrine is the **vimana**. The gopuram is the gateway tower; shikhara is the term used for north Indian (Nagara) temples.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* The Rajputs (Karnataka)                                             */
/* ------------------------------------------------------------------ */

const rajputs: Topic = {
  slug: "c9-rajputs",
  title: "The Rajputs",
  icon: "🏰",
  description: "The Rajput kingdoms of north India: their origin, main dynasties, battles and contributions.",
  lessons: [
    {
      slug: "rajput-kingdoms",
      title: "The Rajput Kingdoms",
      summary: "Who the Rajputs were, the main Rajput dynasties, the battles of Tarain and the forts and temples they left behind.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🏰",
          caption: "Chittorgarh, Kumbhalgarh and Ranthambore: the huge hill forts of Rajasthan were built by Rajput rulers.",
        },
        {
          type: "text",
          md: "After the death of Harsha in the 7th century, north India broke into many small kingdoms. From about the 8th to the 12th century, many of these were ruled by clans called **Rajputs** (from *rajaputra*, 'son of a king'). This period is often called the **Rajput period**.",
        },
        {
          type: "heading",
          text: "Where did the Rajputs come from?",
        },
        {
          type: "list",
          items: [
            "**Agnikula legend**: a story in the poem *Prithviraj Raso* says four clans (Pratihara, Chauhan, Paramara and Chalukya/Solanki) were born from a sacred fire at Mount Abu. It is a legend, not history.",
            "**Foreign-origin view**: some historians thought the Rajputs came from groups such as the Hunas who entered India and mixed with local people.",
            "**Indian-origin view**: others hold that they came from older Kshatriya and local ruling families of India.",
          ],
        },
        {
          type: "text",
          md: "Historians still debate this. Most agree that the Rajputs were a mix of different groups who came to be accepted as Kshatriyas over time.",
        },
        {
          type: "table",
          headers: ["Dynasty", "Region", "Remembered for"],
          rows: [
            ["Gurjara-Pratiharas", "Kanauj, western India", "the **tripartite struggle** for Kanauj with the Palas of Bengal and the **Rashtrakutas** of the Deccan; stopping Arab advances"],
            ["Chauhans (Chahamanas)", "Ajmer and Delhi", "**Prithviraj Chauhan**, who fought Muhammad Ghori at Tarain"],
            ["Paramaras", "Malwa (capital Dhar)", "**Raja Bhoja**, a scholar-king who supported learning"],
            ["Chandelas", "Bundelkhand", "the **Khajuraho temples**"],
            ["Solankis (Chalukyas of Gujarat)", "Gujarat", "the marble **Dilwara temples** at Mount Abu, built by their ministers"],
          ],
        },
        {
          type: "callout",
          tone: "fact",
          title: "A Karnataka link",
          md: "The **Rashtrakutas**, who ruled from Manyakheta (Malkhed, in today's Kalaburagi district), were one of the three powers in the tripartite struggle for Kanauj.",
        },
        {
          type: "heading",
          text: "The battles of Tarain",
        },
        {
          type: "text",
          md: "**Muhammad Ghori**, a ruler from Afghanistan, attacked north India. In the **First Battle of Tarain (1191)**, Prithviraj Chauhan defeated him. Ghori came back the next year. In the **Second Battle of Tarain (1192)**, Prithviraj was defeated. This opened the way for Turkish rule in Delhi, which led to the Delhi Sultanate in 1206.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who won the First Battle of Tarain in 1191?",
              options: ["Muhammad Ghori", "Prithviraj Chauhan", "Qutbuddin Aibak", "Jaichand"],
              answer: 1,
              explain: "Prithviraj Chauhan won in 1191. Ghori won the second battle in 1192.",
            },
          ],
        },
        {
          type: "example",
          title: "Why did the Rajputs lose?",
          problem: "The Rajputs were brave and had strong forts. Give reasons why they could not stop the Turkish armies.",
          steps: [
            "**Disunity**: Rajput kingdoms often fought each other and did not join together against an invader.",
            "**Military methods**: Turkish armies used fast mounted archers; Rajput armies relied more on elephants and foot soldiers.",
            "**Feudal armies**: Rajput armies were made of troops sent by different chiefs, each loyal to his own chief, not to one central command.",
            "Write each reason as a point and add one example (for instance, the defeat at Tarain in 1192).",
          ],
          answer: "Disunity among Rajput kingdoms, older fighting methods and armies of feudal chiefs weakened them against the united, mobile Turkish cavalry.",
        },
        {
          type: "mistake",
          wrong: "Prithviraj Chauhan was defeated in both battles of Tarain.",
          right: "Prithviraj won the first battle (1191) and lost the second (1192).",
          why: "Because the story ends with Ghori's victory, students remember only the defeat. Exams often ask about the first battle to test this.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each Rajput dynasty with its famous work or ruler.",
            pairs: [
              ["Chandelas", "Khajuraho temples"],
              ["Paramaras", "Raja Bhoja"],
              ["Chauhans", "Prithviraj Chauhan"],
              ["Solankis", "Dilwara temples at Mount Abu"],
            ],
            explain: "Linking each dynasty to one monument or ruler is the easiest way to remember them.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Exam tip",
          md: "For 'contributions of the Rajputs', group your points under **forts**, **temples** and **literature** (for example, *Prithviraj Raso* by Chand Bardai). Grouped answers are easier to mark and score higher than a single long paragraph.",
        },
        {
          type: "keypoints",
          items: [
            "Rajput clans ruled much of north India from about the 8th to the 12th century.",
            "Their origin is debated: Agnikula legend, foreign-origin and Indian-origin views.",
            "Main dynasties: Pratiharas, Chauhans, Paramaras, Chandelas, Solankis.",
            "Tarain: Prithviraj won in 1191, lost in 1192 to Muhammad Ghori.",
            "Disunity and older war methods weakened the Rajputs.",
          ],
        },
      ],
      flashcards: [
        { front: "Meaning of 'Rajput'", back: "From rajaputra, 'son of a king'." },
        { front: "Agnikula legend", back: "Story that four Rajput clans were born from a sacred fire at Mount Abu." },
        { front: "Tripartite struggle", back: "Fight for Kanauj between the Pratiharas, the Palas and the Rashtrakutas." },
        { front: "First and Second Battles of Tarain", back: "1191: Prithviraj Chauhan won. 1192: Muhammad Ghori won." },
        { front: "Khajuraho temples", back: "Built by the Chandela rulers of Bundelkhand." },
        { front: "Raja Bhoja", back: "Paramara ruler of Malwa, famous as a patron of learning." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which three powers took part in the tripartite struggle for Kanauj?",
          options: ["Cholas, Pandyas, Cheras", "Pratiharas, Palas, Rashtrakutas", "Chauhans, Paramaras, Chandelas", "Mughals, Rajputs, Marathas"],
          answer: 1,
          explain: "The Gurjara-Pratiharas, the Palas of Bengal and the Rashtrakutas of the Deccan fought for Kanauj.",
        },
        {
          kind: "fill",
          q: "The poem *Prithviraj Raso* was written by ___.",
          answer: ["Chand Bardai", "Chand Bardoi"],
          explain: "Chand Bardai was a court poet linked with Prithviraj Chauhan.",
        },
        {
          kind: "truefalse",
          q: "The Second Battle of Tarain (1192) helped Turkish rule to begin in Delhi.",
          answer: true,
          explain: "After Ghori's victory, his general Qutbuddin Aibak ruled Delhi and founded the Sultanate in 1206.",
        },
        {
          kind: "order",
          q: "Put these events in order.",
          items: ["Rise of Rajput kingdoms after Harsha", "First Battle of Tarain", "Second Battle of Tarain", "Founding of the Delhi Sultanate"],
          explain: "Rajput kingdoms rose from the 8th century; Tarain I was in 1191, Tarain II in 1192, and the Sultanate began in 1206.",
        },
        {
          kind: "multi",
          q: "Which were reasons for the defeat of the Rajputs? Choose all that apply.",
          options: ["Disunity among Rajput kingdoms", "Lack of forts", "Reliance on elephants against fast cavalry", "Armies loyal to separate chiefs"],
          answers: [0, 2, 3],
          explain: "The Rajputs had many strong forts. Their weaknesses were disunity, older methods and feudal armies.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "The Dilwara temples at Mount Abu are linked with which dynasty?",
          options: ["Chandelas", "Paramaras", "Solankis", "Pratiharas"],
          answer: 2,
          explain: "They were built by ministers of the Solanki (Chalukya) rulers of Gujarat. Khajuraho is the Chandela temple group.",
          difficulty: 2,
          hint: "These rulers governed Gujarat.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* The Delhi Sultanate (ICSE + Karnataka)                              */
/* ------------------------------------------------------------------ */

const delhiSultanate: Topic = {
  slug: "c9-delhi-sultanate",
  title: "The Delhi Sultanate",
  icon: "🕌",
  description: "Five dynasties that ruled from Delhi (1206–1526): their rulers, reforms, sources and buildings.",
  lessons: [
    {
      slug: "sultanate-dynasties",
      title: "Five Dynasties of the Delhi Sultanate",
      summary: "The Slave, Khalji, Tughlaq, Sayyid and Lodi dynasties and their main rulers, from 1206 to 1526.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🗼",
          caption: "The Qutub Minar in Delhi, about 73 m tall, was begun by the first Sultan, Qutbuddin Aibak, and finished by Iltutmish.",
        },
        {
          type: "text",
          md: "A **Sultan** is a Muslim ruler. From **1206 to 1526**, five dynasties of Sultans ruled from Delhi one after another. Together they are called the **Delhi Sultanate**.\n\nIt began when **Qutbuddin Aibak**, a slave-general of Muhammad Ghori, became ruler of Delhi after Ghori's death. It ended when **Babur** defeated Ibrahim Lodi at **Panipat** in 1526.",
        },
        {
          type: "table",
          headers: ["Dynasty", "Years", "Important rulers"],
          rows: [
            ["Slave (Mamluk)", "1206–1290", "Qutbuddin Aibak, Iltutmish, Razia, Balban"],
            ["Khalji", "1290–1320", "Jalaluddin, **Alauddin Khalji**"],
            ["Tughlaq", "1320–1414", "Ghiyasuddin, **Muhammad bin Tughlaq**, Firuz Shah"],
            ["Sayyid", "1414–1451", "Khizr Khan"],
            ["Lodi", "1451–1526", "Bahlul, Sikandar, Ibrahim Lodi"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Memory trick",
          md: "**S**ome **K**ings **T**ake **S**weet **L**addoos: **S**lave, **K**halji, **T**ughlaq, **S**ayyid, **L**odi.",
        },
        {
          type: "heading",
          text: "The Slave dynasty",
        },
        {
          type: "list",
          items: [
            "**Qutbuddin Aibak** (1206–1210) began the Qutub Minar and the Quwwat-ul-Islam mosque.",
            "**Iltutmish** (1211–1236) is often called the real founder of the Sultanate. He completed the Qutub Minar, introduced the silver **tanka** and copper **jital** coins and organised the **iqta** system.",
            "**Razia Sultan** (1236–1240), Iltutmish's daughter, was the only woman to rule the Delhi Sultanate. The nobles opposed her and she was overthrown.",
            "**Balban** (1266–1287) crushed the powerful group of nobles called 'the Forty' and made the Sultan's power absolute. He said the king was the 'shadow of God on earth'.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The only woman to rule the Delhi Sultanate was ___.",
              answer: ["Razia", "Razia Sultan", "Raziya", "Razia Sultana"],
              explain: "Razia, daughter of Iltutmish, ruled from 1236 to 1240.",
            },
          ],
        },
        {
          type: "heading",
          text: "Khaljis and Tughlaqs",
        },
        {
          type: "text",
          md: "**Alauddin Khalji** (1296–1316) kept a large standing army to beat back **Mongol** attacks. His general **Malik Kafur** led raids into the south and defeated the Yadavas of Devagiri, the Kakatiyas of Warangal, the **Hoysalas of Dwarasamudra** (Halebidu, in Karnataka) and the Pandyas of Madurai.\n\n**Muhammad bin Tughlaq** (1325–1351) was clever but his plans failed. He moved his capital from Delhi to **Daulatabad** (Devagiri) and later moved it back, and he issued **token coins** of copper that people easily forged. **Firuz Shah Tughlaq** (1351–1388) built canals and new towns. In 1398 **Timur** of Central Asia raided Delhi, and the Sultanate grew weak.",
        },
        {
          type: "example",
          title: "Cause and effect",
          problem: "Explain why the Delhi Sultanate became weak in the 15th century.",
          steps: [
            "Start with the **long-term cause**: Muhammad bin Tughlaq's failed plans emptied the treasury and angered people.",
            "Add the **provinces**: governors in Bengal and the Deccan broke away. The **Bahmani kingdom** (1347) and the **Vijayanagara empire** (1336) rose in the south.",
            "Add the **shock**: Timur's raid in 1398 looted Delhi.",
            "End with the **result**: the Sayyids and Lodis ruled a much smaller area, and Babur defeated Ibrahim Lodi in 1526.",
          ],
          answer: "Failed policies, breakaway provinces and Timur's invasion weakened the Sultanate until Babur ended it at Panipat in 1526.",
        },
        {
          type: "mistake",
          wrong: "The 'Slave dynasty' means its Sultans were slaves while they ruled.",
          right: "Aibak, Iltutmish and Balban had been *mamluks* (military slaves) earlier in life, but they were freed and ruled as full kings.",
          why: "The name is a later label. Historians prefer **Mamluk** or **Early Turkish Sultans**, because the rulers were not slaves on the throne, and not all of them had been slaves.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the dynasties in the order they ruled.",
            items: ["Slave (Mamluk)", "Khalji", "Tughlaq", "Sayyid", "Lodi"],
            explain: "Slave 1206, Khalji 1290, Tughlaq 1320, Sayyid 1414, Lodi 1451. The Lodis fell to Babur in 1526.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Exam tip",
          md: "Do not mix up the two famous experiments: **transfer of capital** and **token currency** are Muhammad bin Tughlaq's; **market control** is Alauddin Khalji's. This swap is one of the most common errors in answer papers.",
        },
        {
          type: "keypoints",
          items: [
            "The Delhi Sultanate lasted from 1206 to 1526 under five dynasties.",
            "Iltutmish completed the Qutub Minar and organised iqtas; Razia was the only woman Sultan; Balban made royal power absolute.",
            "Alauddin Khalji fought the Mongols; Malik Kafur raided the south, including Dwarasamudra.",
            "Muhammad bin Tughlaq shifted the capital to Daulatabad and issued token coins.",
            "Timur's raid (1398) and breakaway provinces weakened the Sultanate; Babur ended it in 1526.",
          ],
        },
      ],
      flashcards: [
        { front: "Years of the Delhi Sultanate", back: "1206 to 1526." },
        { front: "Five dynasties in order", back: "Slave (Mamluk), Khalji, Tughlaq, Sayyid, Lodi." },
        { front: "Iltutmish", back: "Completed the Qutub Minar, issued tanka and jital coins, organised the iqta system." },
        { front: "Malik Kafur", back: "Alauddin Khalji's general who raided the south, including the Hoysala capital Dwarasamudra." },
        { front: "Muhammad bin Tughlaq's experiments", back: "Shifted the capital to Daulatabad; issued copper token coins." },
        { front: "How did the Sultanate end?", back: "Babur defeated Ibrahim Lodi at the First Battle of Panipat, 1526." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who founded the Delhi Sultanate in 1206?",
          options: ["Muhammad Ghori", "Qutbuddin Aibak", "Iltutmish", "Balban"],
          answer: 1,
          explain: "Aibak, Ghori's general, became ruler after Ghori's death. Ghori himself never ruled from Delhi as Sultan.",
        },
        {
          kind: "mcq",
          q: "Which Sultan moved his capital from Delhi to Daulatabad?",
          options: ["Alauddin Khalji", "Firuz Shah Tughlaq", "Muhammad bin Tughlaq", "Sikandar Lodi"],
          answer: 2,
          explain: "Muhammad bin Tughlaq moved the capital to Daulatabad and later back to Delhi.",
        },
        {
          kind: "truefalse",
          q: "Balban believed the Sultan was the 'shadow of God on earth'.",
          answer: true,
          explain: "Balban used this idea to raise the Sultan above the nobles.",
        },
        {
          kind: "order",
          q: "Arrange these rulers in time order.",
          items: ["Iltutmish", "Balban", "Alauddin Khalji", "Muhammad bin Tughlaq", "Ibrahim Lodi"],
          explain: "Iltutmish (1211), Balban (1266), Alauddin (1296), Muhammad bin Tughlaq (1325), Ibrahim Lodi (fell 1526).",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Alauddin Khalji's general ___ led his armies into south India.",
          answer: ["Malik Kafur", "Kafur"],
          explain: "Malik Kafur defeated the Yadavas, Kakatiyas, Hoysalas and Pandyas.",
        },
        {
          kind: "multi",
          q: "Which of these helped to weaken the Delhi Sultanate? Choose all that apply.",
          options: ["Timur's raid in 1398", "Rise of the Bahmani and Vijayanagara kingdoms", "Arrival of the British", "Failed experiments of Muhammad bin Tughlaq"],
          answers: [0, 1, 3],
          explain: "The British came to India much later, in the 17th century, as traders.",
          difficulty: 2,
          hint: "One option is from a much later century.",
        },
        {
          kind: "mcq",
          q: "Which Hoysala capital in present-day Karnataka was attacked by Malik Kafur?",
          options: ["Hampi", "Dwarasamudra", "Bidar", "Manyakheta"],
          answer: 1,
          explain: "Dwarasamudra (Halebidu) was the Hoysala capital. Hampi rose later as the Vijayanagara capital.",
        },
      ],
    },
    {
      slug: "sultanate-administration-and-reforms",
      title: "Sultanate Rule: Iqtas, Reforms, Sources and Buildings",
      summary: "How the Sultans governed, Alauddin Khalji's market control, Muhammad bin Tughlaq's experiments, sources such as Ibn Battuta, and Sultanate architecture.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Imagine ruling a huge land with no telephones or trains. The Sultans needed a way to collect taxes, pay soldiers and keep governors loyal. Their main tool was the **iqta**.",
        },
        {
          type: "text",
          md: "An **iqta** was a piece of land whose revenue was given to an officer instead of a cash salary. The officer was called an **iqtadar** or **muqti**. He collected taxes, kept soldiers ready for the Sultan and kept law and order. Iqtas were **transferable**: the Sultan could move an iqtadar to another place, so that no officer became too powerful.\n\nAt the centre, the **wazir** looked after finance, and the **diwan-i-arz** looked after the army.",
        },
        {
          type: "heading",
          text: "Alauddin Khalji's reforms",
        },
        {
          type: "list",
          items: [
            "**Market control**: fixed low prices for grain, cloth, horses and other goods in Delhi, so that soldiers could live on their pay. Market officers (**shahna-i-mandi**) checked traders, and cheating was punished.",
            "**Standing army**: a large army paid in cash, kept ready to fight the Mongols.",
            "**Dagh and huliya**: horses were branded (**dagh**) and a descriptive roll (**huliya**) was kept of each soldier, to stop cheating at inspections.",
            "**Land revenue**: land was measured and tax was fixed at half the produce in the area around Delhi.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Why did Alauddin Khalji fix low prices in the markets of Delhi?",
              options: ["To help foreign traders", "So his large army could live on modest pay", "To punish the nobles", "To pay for the Qutub Minar"],
              answer: 1,
              explain: "Cheap goods let him keep a big standing army against the Mongols without raising salaries.",
            },
          ],
        },
        {
          type: "heading",
          text: "Muhammad bin Tughlaq's experiments",
        },
        {
          type: "table",
          headers: ["Experiment", "Aim", "Why it failed"],
          rows: [
            ["Transfer of capital to Daulatabad (1327)", "a central capital to control the south and be safer from Mongols", "the long march (over 1,000 km) caused great hardship; the north could not be ruled well from there, so the capital was moved back"],
            ["Token currency", "copper coins with the value of silver coins, because silver was short", "people made fake coins at home; the treasury had to exchange them and suffered heavy loss"],
            ["Higher taxes in the Doab", "more revenue", "came during a famine; farmers fled and revolted"],
          ],
        },
        {
          type: "example",
          title: "Using a source",
          problem: "Ibn Battuta, a traveller from Morocco, reached Delhi in 1333 and served Muhammad bin Tughlaq as a judge (qazi). How should a student use his account?",
          steps: [
            "**Who wrote it?** A foreign visitor who lived at the court for several years, so he saw events first-hand.",
            "**What does it tell?** Life in Delhi, the postal system, markets and the Sultan's habits. His book is the **Rihla** (travels).",
            "**Any bias?** He depended on the Sultan, and he was writing for readers far away, so some stories may be exaggerated.",
            "**Check it**: compare with Indian writers such as **Ziauddin Barani** (*Tarikh-i-Firoz Shahi*).",
          ],
          answer: "Ibn Battuta's Rihla is a valuable eyewitness source, but it should be compared with other sources such as Barani before we accept it fully.",
        },
        {
          type: "mistake",
          wrong: "Muhammad bin Tughlaq's token coins failed because copper was worthless.",
          right: "They failed because the government could not stop forgery: anyone could make copper coins at home, and the state had no way to tell its coins from fakes.",
          why: "Today's coins and notes are also tokens and they work, because the state controls their making. The idea was sound; the control was missing.",
        },
        {
          type: "heading",
          text: "Sultanate buildings",
        },
        {
          type: "text",
          md: "The Sultans brought the **true arch** and **dome** to India, held up by mortar. Buildings were decorated with Arabic **calligraphy** and geometric patterns, because human figures were avoided.\n\n- **Qutub Minar**: begun by Aibak, completed by Iltutmish.\n- **Quwwat-ul-Islam mosque**: next to the Qutub Minar, the first mosque in Delhi.\n- **Alai Darwaza** (1311): a gateway built by Alauddin Khalji, an early example of a true dome and arch in India.\n- **Tughlaqabad fort**: a huge fort city built by Ghiyasuddin Tughlaq.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Whose reform or experiment was it?",
            groups: ["Alauddin Khalji", "Muhammad bin Tughlaq"],
            items: [
              { text: "Market control with fixed prices", group: 0, hint: "Cheap goods for a large army." },
              { text: "Token currency of copper", group: 1, hint: "Silver was short in his reign." },
              { text: "Branding of horses (dagh)", group: 0, hint: "Part of army reforms against the Mongols." },
              { text: "Transfer of capital to Daulatabad", group: 1, hint: "He wanted a capital nearer the Deccan." },
              { text: "Building the Alai Darwaza", group: 0, hint: "It carries his name." },
              { text: "Higher taxes in the Doab during a famine", group: 1, hint: "Farmers fled and revolted." },
            ],
            explain: "Alauddin's reforms were about the **army and markets**. Muhammad bin Tughlaq's were bold **experiments** with the capital, coins and taxes that failed.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Questions on Muhammad bin Tughlaq usually carry marks for **both the aim and the reason for failure**. Write two short sentences for each experiment: what he wanted, and why it went wrong.",
        },
        {
          type: "keypoints",
          items: [
            "Iqta: land revenue given to an officer (iqtadar or muqti) instead of a salary; iqtas were transferable.",
            "Alauddin Khalji: market control, standing army, dagh and huliya, measured land revenue.",
            "Muhammad bin Tughlaq: transfer of capital, token currency, Doab taxes; all failed.",
            "Sources: Ibn Battuta's Rihla, Barani's Tarikh-i-Firoz Shahi.",
            "Buildings: Qutub Minar, Quwwat-ul-Islam mosque, Alai Darwaza, Tughlaqabad.",
          ],
        },
      ],
      flashcards: [
        { front: "Iqta", back: "Land whose revenue was assigned to an officer instead of a salary; the officer kept troops for the Sultan." },
        { front: "Dagh and huliya", back: "Branding of horses and a descriptive roll of soldiers, introduced by Alauddin Khalji." },
        { front: "Shahna-i-mandi", back: "Officer in charge of markets under Alauddin Khalji." },
        { front: "Ibn Battuta", back: "Moroccan traveller who came to Delhi in 1333 and wrote the Rihla." },
        { front: "Alai Darwaza", back: "Gateway built by Alauddin Khalji in 1311; an early true arch and dome in India." },
        { front: "Why did token currency fail?", back: "People forged copper coins at home and the state could not stop it." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "An officer who held an iqta was called a:",
          options: ["Wazir", "Muqti or iqtadar", "Qazi", "Shahna-i-mandi"],
          answer: 1,
          explain: "The muqti (iqtadar) held the iqta. The wazir ran finance, the qazi was a judge and the shahna-i-mandi controlled markets.",
        },
        {
          kind: "truefalse",
          q: "Iqtas were usually hereditary, passing from father to son.",
          answer: false,
          explain: "Iqtas were transferable at the Sultan's will, which stopped officers from building local power. They became hereditary only in a later period.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Ibn Battuta's account of his travels is called the ___.",
          answer: ["Rihla", "Rehla"],
          explain: "The Rihla describes life in Delhi under Muhammad bin Tughlaq.",
        },
        {
          kind: "multi",
          q: "Which were part of Alauddin Khalji's reforms? Choose all that apply.",
          options: ["Fixed prices in Delhi's markets", "Branding of horses", "Token currency", "A large standing army"],
          answers: [0, 1, 3],
          explain: "Token currency was Muhammad bin Tughlaq's experiment.",
        },
        {
          kind: "mcq",
          q: "The main reason the transfer of capital to Daulatabad failed was:",
          options: ["Daulatabad had no water", "The long march caused great hardship and the north could not be controlled from there", "The Mongols captured Daulatabad", "The Bahmanis refused to allow it"],
          answer: 1,
          explain: "The journey of over 1,000 km caused suffering, and ruling the north from Daulatabad proved hard. The Bahmani kingdom began only after this, in 1347.",
          difficulty: 2,
          hint: "Think about distance and control.",
        },
        {
          kind: "mcq",
          q: "Which feature did Sultanate builders bring into Indian architecture?",
          options: ["Stupas", "The true arch and dome", "Rock-cut caves", "Wooden temples"],
          answer: 1,
          explain: "The true arch and dome, held up with mortar, came with the Sultanate. Stupas and rock-cut caves are much older Indian forms.",
        },
        {
          kind: "order",
          q: "Arrange the steps of the iqta system in order.",
          items: ["Sultan assigns an iqta to an officer", "Officer collects revenue from the land", "Officer keeps soldiers from that revenue", "Officer sends troops when the Sultan calls", "Sultan transfers the officer to a new iqta"],
          explain: "The Sultan assigned the land, the officer collected tax, kept troops and served the Sultan, and could be transferred.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Vijayanagara and Bahmani (Karnataka)                                */
/* ------------------------------------------------------------------ */

const vijayanagaraBahmani: Topic = {
  slug: "c9-vijayanagara-bahmani",
  title: "The Vijayanagara and Bahmani Kingdoms",
  icon: "🐘",
  description: "Two great kingdoms of the Deccan and south: Vijayanagara at Hampi and the Bahmanis at Kalaburagi and Bidar.",
  lessons: [
    {
      slug: "vijayanagara-empire",
      title: "The Vijayanagara Empire",
      summary: "The founding of Vijayanagara, its four dynasties, Krishnadevaraya, the Battle of Talikota, administration and the monuments of Hampi.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🪨",
          caption: "Giant boulders, a stone chariot and miles of ruined bazaars: Hampi, on the Tungabhadra in Vijayanagara district, was once one of the largest cities in the world.",
        },
        {
          type: "text",
          md: "In **1336**, two brothers, **Harihara I** and **Bukka I**, founded a kingdom on the banks of the **Tungabhadra**. Tradition says they were guided by the scholar **Vidyaranya**. Their capital was **Vijayanagara**, 'city of victory', which we now know as **Hampi**.\n\nThe brothers were sons of **Sangama**, so the first ruling family is called the Sangama dynasty. Over about 300 years, **four dynasties** ruled Vijayanagara.",
        },
        {
          type: "table",
          headers: ["Dynasty", "Famous ruler", "Note"],
          rows: [
            ["Sangama", "Harihara I, Bukka I, **Deva Raya II**", "founders; the Persian envoy Abdur Razzak visited during Deva Raya II's reign"],
            ["Saluva", "Saluva Narasimha", "a short rule"],
            ["Tuluva", "**Krishnadevaraya** (1509–1529)", "the empire was at its greatest"],
            ["Aravidu", "Tirumala, Venkata II", "ruled from Penukonda and Chandragiri after Talikota"],
          ],
        },
        {
          type: "heading",
          text: "Krishnadevaraya",
        },
        {
          type: "list",
          items: [
            "He defeated the Sultan of Bijapur and took **Raichur** (1520), and fought the Gajapati rulers of Odisha.",
            "He was a poet. He wrote **Amuktamalyada** in Telugu.",
            "His court had eight great Telugu poets called the **Ashtadiggajas**.",
            "He added to temples such as the **Vitthala** and **Virupaksha** temples at Hampi.",
            "The Portuguese visitor **Domingo Paes** described his court and city.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "To which dynasty did Krishnadevaraya belong?",
              options: ["Sangama", "Saluva", "Tuluva", "Aravidu"],
              answer: 2,
              explain: "Krishnadevaraya (1509–1529) was the greatest ruler of the Tuluva dynasty.",
            },
          ],
        },
        {
          type: "heading",
          text: "The Battle of Talikota (1565)",
        },
        {
          type: "text",
          md: "Vijayanagara and the Deccan Sultans fought for a long time over the fertile **Raichur Doab**, the land between the Krishna and the Tungabhadra. In **1565**, several Deccan Sultanates joined together and defeated the Vijayanagara army led by **Aliya Rama Raya** at the **Battle of Talikota** (also called **Rakkasa-Tangadi**). Rama Raya was killed and Hampi was looted and destroyed. The Aravidu rulers carried on from further south, but the empire never regained its power.",
        },
        {
          type: "heading",
          text: "How Vijayanagara was governed",
        },
        {
          type: "list",
          items: [
            "The **king** had full power and was helped by a council of ministers.",
            "The empire was divided into provinces (**rajyas** or **mandalas**), then **nadus**, **sthalas** and villages (**gramas**).",
            "**Nayankara system**: military chiefs called **nayakas** were given land (**amaram**) and had to keep soldiers and horses for the king.",
            "**Ayagar system**: each village had a group of village servants (**ayagars**) who were paid with tax-free land.",
            "Land revenue was the main income. Trade with the Portuguese and Arabs in horses, spices and cloth was important.",
          ],
        },
        {
          type: "example",
          title: "Reading a traveller's account",
          problem: "A foreign visitor wrote that the markets of Vijayanagara were full of diamonds, rubies, pearls and fine cloth. What can we learn from this, and what should we be careful about?",
          steps: [
            "**What it shows**: Vijayanagara was rich, with busy trade in precious goods.",
            "**Who wrote it**: foreign visitors such as **Nicolo de Conti** (Italian), **Abdur Razzak** (Persian), **Domingo Paes** and **Fernao Nuniz** (Portuguese).",
            "**Be careful**: visitors saw mainly the capital and the court, and may have been amazed and exaggerated. Ordinary village life was harder.",
            "**Check**: compare with inscriptions and the ruins of Hampi itself.",
          ],
          answer: "The accounts show that Vijayanagara was a wealthy trading empire, but they describe mostly the capital and must be checked against inscriptions and remains.",
        },
        {
          type: "mistake",
          wrong: "Vijayanagara ended with the Battle of Talikota in 1565.",
          right: "Talikota destroyed the capital Hampi, but the Aravidu dynasty ruled on from Penukonda and Chandragiri for several more decades.",
          why: "Talikota is the famous turning point, so it is easy to think the empire stopped there. It was the end of Vijayanagara's greatness, not its last day.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the dynasties of Vijayanagara in order.",
            items: ["Sangama", "Saluva", "Tuluva", "Aravidu"],
            explain: "Sangama (from 1336), Saluva, Tuluva (Krishnadevaraya) and Aravidu (after Talikota).",
          },
        },
        {
          type: "text",
          md: "**Art and architecture**: Vijayanagara temples have tall **rayagopurams** (gateway towers), halls with carved pillars, and **kalyana mandapas** (wedding halls). The **stone chariot** at the Vitthala temple and the musical pillars are famous. The monuments of Hampi are a **UNESCO World Heritage Site**.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka exam tip",
          md: "Questions often ask for the **founders and year (Harihara and Bukka, 1336)**, the **achievements of Krishnadevaraya**, and the **causes and results of Talikota**. For results, write at least two: the death of Rama Raya and the destruction of Hampi.",
        },
        {
          type: "keypoints",
          items: [
            "Founded in 1336 by Harihara I and Bukka I, with Vijayanagara (Hampi) as capital.",
            "Four dynasties: Sangama, Saluva, Tuluva, Aravidu.",
            "Krishnadevaraya (1509–1529) wrote Amuktamalyada and had the Ashtadiggajas at his court.",
            "Battle of Talikota (Rakkasa-Tangadi), 1565: Rama Raya killed, Hampi destroyed.",
            "Nayankara and ayagar systems; travellers Abdur Razzak, Paes and Nuniz describe the empire.",
          ],
        },
      ],
      flashcards: [
        { front: "Founders of Vijayanagara", back: "Harihara I and Bukka I, sons of Sangama, in 1336." },
        { front: "Four dynasties of Vijayanagara", back: "Sangama, Saluva, Tuluva, Aravidu." },
        { front: "Amuktamalyada", back: "Telugu work written by Krishnadevaraya." },
        { front: "Battle of Talikota", back: "1565, also called Rakkasa-Tangadi; the Deccan Sultanates defeated Aliya Rama Raya." },
        { front: "Nayankara system", back: "Nayakas got land (amaram) and kept troops for the king." },
        { front: "Ayagar system", back: "Village servants paid with tax-free land." },
        { front: "Raichur Doab", back: "Fertile land between the Krishna and Tungabhadra, fought over by Vijayanagara and the Sultans." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In which year was the Vijayanagara kingdom founded?",
          options: ["1336", "1347", "1509", "1565"],
          answer: 0,
          explain: "1336. The Bahmani kingdom was founded in 1347, Krishnadevaraya came to the throne in 1509 and Talikota was fought in 1565.",
        },
        {
          kind: "fill",
          q: "The eight great poets at Krishnadevaraya's court were called the ___.",
          answer: ["Ashtadiggajas", "Ashta Diggajas", "Ashtadiggaja"],
          explain: "Ashtadiggajas means 'eight elephants holding up the directions'.",
        },
        {
          kind: "truefalse",
          q: "The Battle of Talikota is also known as the Battle of Rakkasa-Tangadi.",
          answer: true,
          explain: "The names come from villages near the battlefield.",
        },
        {
          kind: "mcq",
          q: "Who led the Vijayanagara army at Talikota?",
          options: ["Krishnadevaraya", "Aliya Rama Raya", "Deva Raya II", "Harihara I"],
          answer: 1,
          explain: "Krishnadevaraya had died in 1529. Rama Raya, the regent, led the army in 1565 and was killed.",
          difficulty: 2,
          hint: "Krishnadevaraya died more than 30 years before the battle.",
        },
        {
          kind: "multi",
          q: "Which foreign visitors wrote about Vijayanagara? Choose all that apply.",
          options: ["Abdur Razzak", "Domingo Paes", "Ibn Battuta", "Fernao Nuniz"],
          answers: [0, 1, 3],
          explain: "Ibn Battuta visited Delhi in 1333, before Vijayanagara was founded.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Under the nayankara system, a nayaka had to:",
          options: ["Serve as a village accountant", "Keep soldiers and horses for the king in return for land", "Write the king's poems", "Collect customs duty at ports only"],
          answer: 1,
          explain: "Nayakas held amaram land and maintained troops. Village servants such as accountants were ayagars.",
        },
        {
          kind: "order",
          q: "Arrange these events in order.",
          items: ["Founding of Vijayanagara", "Abdur Razzak's visit under Deva Raya II", "Krishnadevaraya captures Raichur", "Battle of Talikota"],
          explain: "1336, then 1443, then 1520, then 1565.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "bahmani-kingdom",
      title: "The Bahmani Kingdom and the Deccan Sultanates",
      summary: "The Bahmani kingdom at Kalaburagi and Bidar, Mahmud Gawan, the five Deccan Sultanates and monuments such as the Gol Gumbaz.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🕌",
          caption: "Whisper under the dome of the Gol Gumbaz in Vijayapura and the sound echoes again and again around the gallery.",
        },
        {
          type: "text",
          md: "Muhammad bin Tughlaq's officers in the Deccan revolted against him. In **1347**, one of them, **Alauddin Hasan Bahman Shah** (also called **Hasan Gangu**), founded the **Bahmani kingdom**. Its first capital was **Gulbarga (Kalaburagi)**. Later, under **Ahmad Shah**, the capital was moved to **Bidar**.\n\nThe Bahmanis and Vijayanagara were neighbours and rivals. They fought many wars over the **Raichur Doab**.",
        },
        {
          type: "heading",
          text: "Mahmud Gawan",
        },
        {
          type: "text",
          md: "**Mahmud Gawan** came from Persia as a merchant and became **prime minister** of the Bahmani kingdom. He:\n\n- divided the four large provinces (**tarafs**) into eight, so governors could not grow too powerful;\n- measured land and fixed revenue fairly;\n- built a great **madrasa** (college) at **Bidar**, whose ruins still stand;\n- won wars that took the kingdom to the west coast, including Goa.\n\nNobles who were jealous of him spread false charges, and he was executed in **1481**. After his death the kingdom weakened quickly.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The Bahmani prime minister who built a famous madrasa at Bidar was ___.",
              answer: ["Mahmud Gawan", "Mahmud Gavan", "Gawan"],
              explain: "Mahmud Gawan's madrasa at Bidar was a centre of learning.",
            },
          ],
        },
        {
          type: "heading",
          text: "Five Deccan Sultanates",
        },
        {
          type: "table",
          headers: ["Sultanate", "Ruling family", "Today in"],
          rows: [
            ["Bijapur (Vijayapura)", "Adil Shahi", "Karnataka"],
            ["Golconda", "Qutb Shahi", "Telangana"],
            ["Ahmadnagar", "Nizam Shahi", "Maharashtra"],
            ["Bidar", "Barid Shahi", "Karnataka"],
            ["Berar", "Imad Shahi", "Maharashtra"],
          ],
        },
        {
          type: "text",
          md: "By the early 16th century the Bahmani kingdom had broken up into these five **Deccan Sultanates**. An alliance of Deccan Sultanates later defeated Vijayanagara at **Talikota** in 1565.",
        },
        {
          type: "example",
          title: "Explaining a decline",
          problem: "Give three reasons why the Bahmani kingdom broke up.",
          steps: [
            "**Rivalry among nobles**: old nobles from the Deccan (*Dakhnis*) and newcomers from Persia and Central Asia (*Afaqis*) quarrelled.",
            "**Loss of a strong minister**: after Mahmud Gawan was executed in 1481, no one could hold the kingdom together.",
            "**Powerful governors**: provincial governors became independent and founded their own Sultanates.",
            "**Constant wars** with Vijayanagara drained men and money.",
          ],
          answer: "Quarrels among nobles, the execution of Mahmud Gawan, ambitious governors and long wars broke the kingdom into five Sultanates.",
        },
        {
          type: "mistake",
          wrong: "The Gol Gumbaz was built by the Bahmani Sultans.",
          right: "The Gol Gumbaz at Vijayapura is the tomb of **Muhammad Adil Shah** of the **Adil Shahi** dynasty of Bijapur, one of the five Sultanates that came after the Bahmanis.",
          why: "Bijapur was once part of the Bahmani kingdom, so students link everything in north Karnataka to the Bahmanis. The Gol Gumbaz was completed in the 17th century, long after the Bahmani kingdom had ended.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each Deccan Sultanate to its ruling family.",
            pairs: [
              ["Bijapur", "Adil Shahi"],
              ["Golconda", "Qutb Shahi"],
              ["Ahmadnagar", "Nizam Shahi"],
              ["Bidar", "Barid Shahi"],
              ["Berar", "Imad Shahi"],
            ],
            explain: "Each family name comes from the title of its founder, such as Yusuf **Adil** Khan of Bijapur.",
          },
        },
        {
          type: "text",
          md: "**Monuments**: the **Jama Masjid** in the Gulbarga fort; the **madrasa of Mahmud Gawan** at Bidar; the **Gol Gumbaz** and **Ibrahim Rauza** at Vijayapura; and the **Charminar** at Hyderabad, built by the Qutb Shahis. The Deccan rulers also used **Dakhni**, an early form of Urdu, in their courts.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka exam tip",
          md: "Learn the **five Sultanates with their dynasties** as a table. A 'match the following' or 'name the dynasty' question on this appears often, and students lose marks by mixing up Adil Shahi and Qutb Shahi.",
        },
        {
          type: "keypoints",
          items: [
            "The Bahmani kingdom was founded in 1347 by Alauddin Hasan Bahman Shah; capitals Gulbarga, then Bidar.",
            "Mahmud Gawan: eight tarafs, land revenue reform, madrasa at Bidar; executed in 1481.",
            "It split into five Deccan Sultanates: Bijapur, Golconda, Ahmadnagar, Bidar, Berar.",
            "Gol Gumbaz (Adil Shahi, Vijayapura) and Charminar (Qutb Shahi, Hyderabad) are later monuments.",
          ],
        },
      ],
      flashcards: [
        { front: "Founder of the Bahmani kingdom", back: "Alauddin Hasan Bahman Shah (Hasan Gangu), in 1347." },
        { front: "Bahmani capitals", back: "First Gulbarga (Kalaburagi), later Bidar." },
        { front: "Mahmud Gawan", back: "Bahmani prime minister; divided tarafs, reformed revenue, built the Bidar madrasa; executed 1481." },
        { front: "Five Deccan Sultanates", back: "Bijapur, Golconda, Ahmadnagar, Bidar, Berar." },
        { front: "Gol Gumbaz", back: "Tomb of Muhammad Adil Shah at Vijayapura, famous for its whispering gallery." },
        { front: "Taraf", back: "A province of the Bahmani kingdom." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Where was the first capital of the Bahmani kingdom?",
          options: ["Bidar", "Gulbarga (Kalaburagi)", "Bijapur", "Golconda"],
          answer: 1,
          explain: "Gulbarga was the first capital; it moved to Bidar later. Bijapur and Golconda were capitals of later Sultanates.",
        },
        {
          kind: "truefalse",
          q: "Mahmud Gawan divided the Bahmani provinces into smaller units so that governors would not become too powerful.",
          answer: true,
          explain: "He split the four tarafs into eight.",
        },
        {
          kind: "mcq",
          q: "The Qutb Shahi dynasty ruled from:",
          options: ["Bijapur", "Ahmadnagar", "Golconda", "Berar"],
          answer: 2,
          explain: "Qutb Shahis ruled Golconda (and built Hyderabad's Charminar). Bijapur was Adil Shahi.",
        },
        {
          kind: "multi",
          q: "Which of these were among the five Deccan Sultanates? Choose all that apply.",
          options: ["Bidar", "Berar", "Madurai", "Ahmadnagar"],
          answers: [0, 1, 3],
          explain: "Madurai is in Tamil Nadu and was never one of the five Deccan Sultanates.",
        },
        {
          kind: "fill",
          q: "The Gol Gumbaz is the tomb of ___ Adil Shah.",
          answer: ["Muhammad", "Mohammed", "Mohammad"],
          explain: "Muhammad Adil Shah of Bijapur.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange in order of time.",
          items: ["Founding of the Bahmani kingdom", "Execution of Mahmud Gawan", "Break-up into five Sultanates", "Battle of Talikota"],
          explain: "1347, then 1481, then the early 16th century, then 1565.",
          difficulty: 2,
          hint: "The Sultanates that fought together at Talikota must already have existed.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Bhakti and Sufi (Karnataka + ICSE Composite Culture)                */
/* ------------------------------------------------------------------ */

const bhaktiSufi: Topic = {
  slug: "c9-bhakti-sufi",
  title: "The Bhakti and Sufi Movements",
  icon: "🪔",
  description: "Saints who taught love of God, equality and simple devotion: Bhakti saints of India and Karnataka, and the Sufis.",
  lessons: [
    {
      slug: "bhakti-movement",
      title: "The Bhakti Movement",
      summary: "What bhakti means, the Alvars and Nayanars, the acharyas, Basavanna and the Haridasas of Karnataka, and Kabir, Guru Nanak and Mirabai.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🎶",
          caption: "Many Carnatic music students begin with simple songs composed by Purandaradasa, a Bhakti saint of Karnataka.",
        },
        {
          type: "text",
          md: "**Bhakti** means loving devotion to God. The **Bhakti movement** taught that anyone can reach God through love and prayer, without costly rituals or a priest's help.\n\nIt began in the Tamil country between the 6th and 9th centuries with two groups of poet-saints: the **Alvars**, devotees of Vishnu, and the **Nayanars**, devotees of Shiva. From there it spread across India over the next centuries.",
        },
        {
          type: "heading",
          text: "Main features",
        },
        {
          type: "list",
          items: [
            "Devotion to one personal God.",
            "All people are equal before God; caste and rituals were questioned.",
            "Saints taught in the **people's languages** (Tamil, Kannada, Marathi, Hindi, Punjabi and others), not only in Sanskrit.",
            "Importance of the **guru** (teacher) and of singing God's name.",
          ],
        },
        {
          type: "heading",
          text: "The great acharyas",
        },
        {
          type: "table",
          headers: ["Teacher", "Philosophy", "Karnataka link"],
          rows: [
            ["**Shankaracharya** (8th century, from Kalady in Kerala)", "**Advaita**: the soul and God (Brahman) are one", "founded the matha at **Sringeri**"],
            ["**Ramanujacharya** (11th–12th century)", "**Vishishtadvaita**: qualified oneness; the soul is part of God but not the same", "lived at **Melukote** under Hoysala protection"],
            ["**Madhvacharya** (13th century, born near Udupi)", "**Dvaita**: God and the soul are always separate", "founded the **Krishna matha** at **Udupi**"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which acharya taught Dvaita and is linked with Udupi?",
              options: ["Shankaracharya", "Ramanujacharya", "Madhvacharya", "Basavanna"],
              answer: 2,
              explain: "Madhvacharya taught Dvaita (dualism). Shankaracharya taught Advaita; Ramanujacharya taught Vishishtadvaita.",
            },
          ],
        },
        {
          type: "heading",
          text: "Bhakti in Karnataka",
        },
        {
          type: "text",
          md: "**Basavanna** (12th century) was a minister of the Kalachuri king **Bijjala** at **Kalyana** (Basavakalyan). He led the **Virashaiva** (Lingayat) movement. He set up the **Anubhava Mantapa**, a hall where people of all castes, and women such as **Akka Mahadevi**, discussed spiritual ideas. He wrote short Kannada poems called **vachanas**. He taught **kayakave kailasa**: honest work is worship.\n\nThe **Haridasas** sang in Kannada in praise of Vishnu. **Purandaradasa** is called the *father of Carnatic music*, and **Kanakadasa**, who came from a shepherd community, attacked caste pride in his songs.",
        },
        {
          type: "heading",
          text: "Bhakti saints of north and west India",
        },
        {
          type: "table",
          headers: ["Saint", "Region and language", "Teaching"],
          rows: [
            ["**Kabir** (15th century)", "Varanasi; Hindi dohas", "a weaver who criticised idol worship and caste, and taught that Ram and Rahim are one"],
            ["**Guru Nanak** (1469–1539)", "Punjab; Punjabi", "one God, honest work, sharing (**langar**); founder of **Sikhism**"],
            ["**Mirabai**", "Rajasthan; Rajasthani and Braj", "a Rajput princess devoted to Krishna"],
            ["**Tulsidas**", "Awadhi", "wrote the **Ramcharitmanas**"],
            ["**Chaitanya**", "Bengal", "spread Krishna bhakti through group singing (kirtan)"],
            ["**Jnaneshwar, Namdev, Tukaram**", "Maharashtra; Marathi", "the **Varkari** tradition of Vitthala at Pandharpur"],
          ],
        },
        {
          type: "example",
          title: "Comparing two saints",
          problem: "Compare Basavanna and Kabir in three points.",
          steps: [
            "**Time and place**: Basavanna, 12th century, Kalyana in Karnataka; Kabir, 15th century, Varanasi.",
            "**Language**: Basavanna wrote vachanas in Kannada; Kabir wrote dohas in Hindi.",
            "**Common message**: both rejected caste and empty ritual and taught devotion with honest living.",
            "**One difference**: Basavanna was devoted to Shiva; Kabir worshipped a God without form and drew on Hindu and Sufi ideas.",
          ],
          answer: "Both were social reformers who used the people's language to attack caste and ritual; they differed in time, place, language and their idea of God.",
        },
        {
          type: "mistake",
          wrong: "The Bhakti movement was started by Kabir in north India.",
          right: "It began in south India with the Alvars and Nayanars between the 6th and 9th centuries. Kabir came much later, in the 15th century.",
          why: "Kabir is the best-known Bhakti saint in Hindi books, so students think he started it. The movement had already lived in the south for centuries before reaching the north.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match the saint to the work or idea linked with them.",
            pairs: [
              ["Basavanna", "Anubhava Mantapa"],
              ["Purandaradasa", "Father of Carnatic music"],
              ["Guru Nanak", "Langar"],
              ["Tulsidas", "Ramcharitmanas"],
              ["Madhvacharya", "Dvaita"],
            ],
            explain: "Linking each saint to one key word helps you answer both 'match' and short-answer questions.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Exam tip",
          md: "For 'features of the Bhakti movement', write at least four separate points: **devotion to one God, equality, local languages, and the role of the guru**. Then give one saint as an example for a point. Marks are given per point.",
        },
        {
          type: "keypoints",
          items: [
            "Bhakti is loving devotion to God; it began with the Alvars and Nayanars in Tamil land.",
            "Acharyas: Shankara (Advaita, Sringeri), Ramanuja (Vishishtadvaita, Melukote), Madhva (Dvaita, Udupi).",
            "Basavanna: Anubhava Mantapa, vachanas, kayakave kailasa.",
            "Haridasas: Purandaradasa and Kanakadasa sang in Kannada.",
            "Kabir, Guru Nanak, Mirabai, Tulsidas and Chaitanya spread bhakti in the north and east.",
          ],
        },
      ],
      flashcards: [
        { front: "Alvars and Nayanars", back: "Tamil poet-saints: Alvars worshipped Vishnu, Nayanars worshipped Shiva." },
        { front: "Advaita", back: "Shankaracharya's teaching that the soul and Brahman are one." },
        { front: "Dvaita", back: "Madhvacharya's teaching that God and the soul are separate." },
        { front: "Anubhava Mantapa", back: "Basavanna's hall at Kalyana where people of all castes discussed spiritual questions." },
        { front: "Kayakave kailasa", back: "Basavanna's teaching: work is worship." },
        { front: "Purandaradasa", back: "Haridasa saint called the father of Carnatic music." },
        { front: "Guru Nanak", back: "Founder of Sikhism (1469–1539); taught one God, honest work and sharing." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Where did the Bhakti movement begin?",
          options: ["Punjab", "Tamil country in south India", "Bengal", "Kashmir"],
          answer: 1,
          explain: "It began with the Alvars and Nayanars in the Tamil country.",
        },
        {
          kind: "fill",
          q: "Basavanna's short Kannada poems are called ___.",
          answer: ["vachanas", "vachana"],
          explain: "Vachanas are simple prose-poems in Kannada.",
        },
        {
          kind: "mcq",
          q: "Basavanna was a minister of which king?",
          options: ["Krishnadevaraya", "Bijjala", "Vishnuvardhana", "Pulakeshin II"],
          answer: 1,
          explain: "He served the Kalachuri king Bijjala at Kalyana. Vishnuvardhana was the Hoysala king linked with Ramanuja.",
          difficulty: 2,
          hint: "A Kalachuri ruler at Kalyana.",
        },
        {
          kind: "truefalse",
          q: "Bhakti saints usually taught in the languages of ordinary people.",
          answer: true,
          explain: "They used Tamil, Kannada, Marathi, Hindi, Punjabi and others so everyone could understand.",
        },
        {
          kind: "multi",
          q: "Which were features of the Bhakti movement? Choose all that apply.",
          options: ["Devotion to a personal God", "Strict caste rules", "Use of local languages", "Equality of all before God"],
          answers: [0, 2, 3],
          explain: "The saints questioned caste rules; they did not support them.",
        },
        {
          kind: "order",
          q: "Arrange these saints in order of time.",
          items: ["Shankaracharya", "Ramanujacharya", "Basavanna", "Madhvacharya", "Kabir"],
          explain: "Shankara (8th c.), Ramanuja (11th–12th c.), Basavanna (12th c.), Madhva (13th c.), Kabir (15th c.).",
          difficulty: 3,
          hint: "Ramanuja and Basavanna are close; Ramanuja was born first.",
        },
        {
          kind: "mcq",
          q: "Who founded Sikhism?",
          options: ["Kabir", "Guru Nanak", "Chaitanya", "Namdev"],
          answer: 1,
          explain: "Guru Nanak founded Sikhism. Kabir's verses are included in the Guru Granth Sahib, but he did not found it.",
        },
      ],
    },
    {
      slug: "sufi-movement",
      title: "The Sufi Movement",
      summary: "Who the Sufis were, silsilas such as the Chishtis, Sufi practices, and Sufi saints in Karnataka such as Khwaja Bande Nawaz.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🕯️",
          caption: "Every year, people of all faiths gather at dargahs in Ajmer, Delhi and Kalaburagi for the urs of a Sufi saint.",
        },
        {
          type: "text",
          md: "**Sufis** were Muslim mystics. They believed that a person can come close to God through love, prayer and a simple life, not through wealth or power. The word *Sufi* is often said to come from *suf*, the plain woollen cloth they wore.\n\nSufism reached India around the 11th–12th centuries and grew strong during the Delhi Sultanate.",
        },
        {
          type: "heading",
          text: "Sufi words to know",
        },
        {
          type: "table",
          headers: ["Term", "Meaning"],
          rows: [
            ["**Pir** / **Shaikh**", "the Sufi teacher"],
            ["**Murid**", "a disciple"],
            ["**Silsila**", "an order: a chain of teachers and disciples"],
            ["**Khanqah**", "the house where a Sufi lived, taught and fed visitors"],
            ["**Dargah**", "the tomb of a Sufi saint, visited by pilgrims"],
            ["**Sama**", "gatherings with music and song to feel God's presence"],
            ["**Urs**", "the yearly festival at a saint's dargah"],
          ],
        },
        {
          type: "heading",
          text: "The main silsilas in India",
        },
        {
          type: "list",
          items: [
            "**Chishti**: brought to India by **Khwaja Moinuddin Chishti**, whose dargah is at **Ajmer**. Later Chishti saints include **Nizamuddin Auliya** of Delhi. The Chishtis lived simply and kept away from kings and courts.",
            "**Suhrawardi**: strong in Multan and Punjab; unlike the Chishtis, they accepted help from rulers.",
            "Other orders, such as the **Qadiri** and **Naqshbandi**, also spread in India.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The dargah of Khwaja Moinuddin Chishti is at:",
              options: ["Delhi", "Ajmer", "Kalaburagi", "Multan"],
              answer: 1,
              explain: "Ajmer, in Rajasthan. Nizamuddin Auliya's dargah is in Delhi, and Khwaja Bande Nawaz's is at Kalaburagi.",
            },
          ],
        },
        {
          type: "text",
          md: "**Sufis in Karnataka**: the Chishti saint **Khwaja Bande Nawaz** (Syed Muhammad Gesu Daraz) settled at **Gulbarga (Kalaburagi)** in the time of the Bahmani kingdom. His dargah there draws pilgrims of every faith. Bijapur also had many Sufi teachers who wrote in **Dakhni**.\n\n**Amir Khusrau**, a disciple of Nizamuddin Auliya, was a poet and musician who wrote in Persian and **Hindavi**, and is linked with the **qawwali** style of Sufi singing.",
        },
        {
          type: "example",
          title: "Finding common ground",
          problem: "Show three ways in which the Bhakti and Sufi movements were alike.",
          steps: [
            "**Love of God**: both said love and devotion matter more than ritual.",
            "**Equality**: both welcomed people of all castes and classes.",
            "**Language and music**: both used local languages, songs and music (bhajans and kirtans; sama and qawwali).",
            "**Teacher**: both gave great importance to the guru or pir.",
          ],
          answer: "Both stressed love of God over ritual, equality of all people, the use of local languages and music, and the guidance of a teacher.",
        },
        {
          type: "mistake",
          wrong: "Sufis were a separate religion that broke away from Islam.",
          right: "Sufis were Muslims. Sufism is a mystical path within Islam, though Sufis also respected and learnt from other faiths.",
          why: "Because Sufi practices like music and visiting tombs look different from the mosque, students think Sufism is a new religion. It is a way of practising Islam with a focus on inner love of God.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is this a Sufi term or a Bhakti term?",
            groups: ["Sufi", "Bhakti"],
            items: [
              { text: "Khanqah", group: 0, hint: "Where a pir lived and taught." },
              { text: "Vachana", group: 1, hint: "Basavanna's Kannada poems." },
              { text: "Silsila", group: 0, hint: "A chain of teachers and disciples." },
              { text: "Anubhava Mantapa", group: 1, hint: "Basavanna's hall at Kalyana." },
              { text: "Sama", group: 0, hint: "Musical gatherings." },
              { text: "Alvar", group: 1, hint: "Tamil devotees of Vishnu." },
            ],
            explain: "Both movements had their own words for teachers, gatherings and writings, but the message of love and equality was similar.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Exam tip",
          md: "When a question asks about the **impact** of the Bhakti and Sufi movements, write about **social harmony between Hindus and Muslims**, the growth of **regional languages and literature**, and **criticism of caste**. Listing only saints' names does not answer an 'impact' question.",
        },
        {
          type: "keypoints",
          items: [
            "Sufis were Muslim mystics who sought God through love and simple living.",
            "Key terms: pir, murid, silsila, khanqah, dargah, sama, urs.",
            "Chishti order: Moinuddin Chishti (Ajmer), Nizamuddin Auliya (Delhi); they kept away from courts.",
            "Khwaja Bande Nawaz's dargah is at Kalaburagi.",
            "Bhakti and Sufi movements together encouraged harmony and regional languages.",
          ],
        },
      ],
      flashcards: [
        { front: "Sufi", back: "A Muslim mystic who seeks God through love and a simple life." },
        { front: "Silsila", back: "A Sufi order, a chain of teachers and disciples." },
        { front: "Khanqah", back: "A Sufi's hospice where he lived, taught and fed visitors." },
        { front: "Chishti order in India", back: "Brought by Khwaja Moinuddin Chishti of Ajmer." },
        { front: "Khwaja Bande Nawaz", back: "Chishti saint whose dargah is at Gulbarga (Kalaburagi)." },
        { front: "Amir Khusrau", back: "Poet and musician, disciple of Nizamuddin Auliya; linked with qawwali." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A Sufi disciple is called a:",
          options: ["Pir", "Murid", "Qazi", "Sultan"],
          answer: 1,
          explain: "A murid is a disciple. The pir is the teacher.",
        },
        {
          kind: "fill",
          q: "The yearly festival held at a Sufi saint's dargah is called the ___.",
          answer: ["urs", "urus"],
          explain: "The urs marks the saint's death anniversary, seen as union with God.",
        },
        {
          kind: "truefalse",
          q: "Chishti Sufis generally kept away from kings and royal courts.",
          answer: true,
          explain: "They preferred a simple life. The Suhrawardis, by contrast, accepted royal help.",
        },
        {
          kind: "mcq",
          q: "Which Sufi saint's dargah is in Kalaburagi?",
          options: ["Nizamuddin Auliya", "Khwaja Moinuddin Chishti", "Khwaja Bande Nawaz", "Baba Farid"],
          answer: 2,
          explain: "Khwaja Bande Nawaz (Gesu Daraz) settled at Gulbarga under the Bahmanis.",
        },
        {
          kind: "multi",
          q: "Which of these did Bhakti and Sufi saints share? Choose all that apply.",
          options: ["Love of God above ritual", "Belief in the equality of people", "Use of music and song", "Support for strict caste rules"],
          answers: [0, 1, 2],
          explain: "Both movements opposed rigid caste rules.",
        },
        {
          kind: "order",
          q: "Arrange the Sufi chain from teacher to institution.",
          items: ["A pir teaches in his khanqah", "Murids learn from the pir", "A murid becomes the next pir, continuing the silsila", "The pir's tomb becomes a dargah"],
          explain: "A silsila passes from teacher to disciple; after a saint dies, his tomb becomes a dargah visited by pilgrims.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Composite culture (ICSE)                                            */
/* ------------------------------------------------------------------ */

const compositeCulture: Topic = {
  slug: "c9-composite-culture",
  title: "The Composite Culture of Medieval India",
  icon: "🎨",
  description: "How Indian and Islamic traditions blended in buildings, language, music and painting.",
  lessons: [
    {
      slug: "indo-islamic-culture",
      title: "Architecture, Language, Music and Painting",
      summary: "Indo-Islamic architecture from the Qutub Minar to the Taj Mahal, the growth of Urdu and Persian translations, music and Mughal painting.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🕌",
          caption: "Look closely at the Taj Mahal: a Persian-style dome, but topped with a lotus and a kalash, two old Indian symbols.",
        },
        {
          type: "text",
          md: "A **composite culture** is one made by mixing different traditions until something new is formed. In medieval India, Turkish, Persian and Central Asian ideas met older Indian ones. The meeting changed buildings, languages, music, painting and religious ideas.\n\nThe **Bhakti and Sufi movements** were one part of this story. This lesson looks at the others.",
        },
        {
          type: "heading",
          text: "Indo-Islamic architecture",
        },
        {
          type: "table",
          headers: ["From Islamic traditions", "From Indian traditions"],
          rows: [
            ["true **arch** and **dome**", "carved brackets and pillars"],
            ["tall **minarets**", "**chhatris** (small domed pavilions)"],
            ["Arabic **calligraphy** and geometric patterns", "lotus, bell and **kalash** designs"],
            ["**charbagh** (four-part garden)", "skilled local stone-carvers and masons"],
          ],
        },
        {
          type: "list",
          items: [
            "**Qutub Minar** and **Alai Darwaza** (Delhi Sultanate).",
            "**Humayun's tomb**, Delhi: an early garden-tomb in red sandstone and white marble, set in a charbagh.",
            "**Fatehpur Sikri**: Akbar's capital near Agra, with the **Buland Darwaza**, Panch Mahal and Diwan-i-Khas; it mixes Indian and Persian styles.",
            "**Taj Mahal**, Agra: built by **Shah Jahan** in memory of his wife **Mumtaz Mahal**, in white marble with **pietra dura** (inlay of coloured stones).",
            "**Red Fort** and **Jama Masjid**, Delhi: built by Shah Jahan in his new city, Shahjahanabad.",
            "**Gol Gumbaz**, Vijayapura: Deccan style, with one of the largest domes in the world.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which ruler built Fatehpur Sikri?",
              options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
              answer: 1,
              explain: "Akbar built Fatehpur Sikri in the 1570s. Shah Jahan built the Taj Mahal and the Red Fort.",
            },
          ],
        },
        {
          type: "heading",
          text: "Language and literature",
        },
        {
          type: "text",
          md: "**Persian** was the court language of the Sultans and Mughals. As soldiers, traders and ordinary people mixed, Persian, Arabic and Turkish words joined the local Hindavi speech. This gave rise to **Urdu**. In the Deccan, an early form called **Dakhni** was used at the Bahmani, Bijapur and Golconda courts.\n\nIndian books were translated into Persian. Under Akbar the **Mahabharata** became the **Razmnama**, and the Ramayana was also translated. Akbar's minister **Abul Fazl** wrote the **Akbarnama** and the **Ain-i-Akbari**. Prince **Dara Shikoh**, son of Shah Jahan, translated the **Upanishads** into Persian.",
        },
        {
          type: "heading",
          text: "Music and painting",
        },
        {
          type: "list",
          items: [
            "**Amir Khusrau** blended Persian and Indian music and is linked with the **qawwali**.",
            "**Tansen**, a great singer, was at Akbar's court.",
            "**Ibrahim Adil Shah II** of Bijapur wrote songs in Dakhni in his book *Kitab-i-Nauras*, praising Saraswati and Ganesha as well as the Prophet.",
            "**Mughal painting**: painters from Persia came with Humayun and trained Indian artists. Under Akbar and Jahangir they made **miniature paintings** of court life, animals, birds and books such as the *Hamzanama*.",
          ],
        },
        {
          type: "example",
          title: "Describing a monument as 'composite'",
          problem: "Show that the Taj Mahal is an example of composite culture.",
          steps: [
            "Name **Islamic/Persian features**: the large central dome, minarets, calligraphy of Quranic verses and the charbagh garden.",
            "Name **Indian features**: the chhatris, the lotus design on the dome and the kalash finial at the top.",
            "Name **Indian skill**: marble from Makrana in Rajasthan and the pietra dura inlay work done by Indian craftsmen.",
            "Conclude: the building is neither purely Persian nor purely Indian; it is a new style made from both.",
          ],
          answer: "The Taj Mahal combines Persian features (dome, minarets, calligraphy, charbagh) with Indian ones (chhatris, lotus, kalash, local marble and craftsmen), so it is a fine example of composite culture.",
        },
        {
          type: "mistake",
          wrong: "Mughal buildings were copied directly from Persia, so they are not really Indian.",
          right: "Mughal buildings used Persian ideas but were designed and built in India with Indian materials, Indian motifs and Indian craftsmen, creating a new Indo-Islamic style.",
          why: "The domes and gardens look Persian at first glance, so the Indian parts are easy to miss. Looking for chhatris, brackets and lotus designs shows the mix.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Did this feature come mainly from Islamic or Indian tradition?",
            groups: ["Islamic tradition", "Indian tradition"],
            items: [
              { text: "True arch", group: 0, hint: "Brought by the Sultanate builders." },
              { text: "Chhatri", group: 1, hint: "A small pavilion seen in Rajput buildings too." },
              { text: "Calligraphy of verses", group: 0, hint: "Arabic writing used as decoration." },
              { text: "Lotus motif", group: 1, hint: "A flower seen in Indian art for centuries." },
              { text: "Charbagh garden", group: 0, hint: "A four-part garden from Persia." },
              { text: "Kalash finial", group: 1, hint: "The pot shape on top of temples." },
            ],
            explain: "Indo-Islamic buildings mix both lists. That mix is what we call composite culture.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "In a 'composite culture' answer, do not just list monuments. For each one, write **one Islamic and one Indian feature**. Examiners give marks for showing the blend, not for the name alone.",
        },
        {
          type: "keypoints",
          items: [
            "Composite culture: Indian and Islamic traditions blended into something new.",
            "Architecture: arch, dome, minaret and charbagh mixed with chhatris, brackets, lotus and kalash.",
            "Key monuments: Qutub Minar, Humayun's tomb, Fatehpur Sikri, Taj Mahal, Red Fort, Gol Gumbaz.",
            "Urdu (and Dakhni) grew from the mixing of Persian, Arabic and Turkish with Hindavi; Indian epics were translated into Persian.",
            "Music (Amir Khusrau, Tansen) and Mughal miniature painting also show the blend.",
          ],
        },
      ],
      flashcards: [
        { front: "Composite culture", back: "A culture formed by blending different traditions into something new." },
        { front: "Charbagh", back: "A Persian-style garden divided into four parts by water channels." },
        { front: "Pietra dura", back: "Inlay of coloured stones in marble, used in the Taj Mahal." },
        { front: "Razmnama", back: "Persian translation of the Mahabharata made under Akbar." },
        { front: "Origin of Urdu", back: "Mixing of Persian, Arabic and Turkish words with local Hindavi speech." },
        { front: "Buland Darwaza", back: "Huge gateway at Fatehpur Sikri, built by Akbar." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The Taj Mahal was built by:",
          options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
          answer: 2,
          explain: "Shah Jahan built it in memory of Mumtaz Mahal.",
        },
        {
          kind: "fill",
          q: "The Persian translation of the Mahabharata made under Akbar is called the ___.",
          answer: ["Razmnama", "Razm Nama", "Razmnamah"],
          explain: "Razmnama means 'book of war'.",
        },
        {
          kind: "truefalse",
          q: "Urdu developed from the mixing of Persian, Arabic and Turkish words with local Indian speech.",
          answer: true,
          explain: "It grew among soldiers, traders and townspeople; Dakhni was its early Deccan form.",
        },
        {
          kind: "multi",
          q: "Which of these are Indian features found in Indo-Islamic buildings? Choose all that apply.",
          options: ["Chhatris", "Lotus motifs", "Minarets", "Carved brackets"],
          answers: [0, 1, 3],
          explain: "Minarets came from Islamic tradition.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Who translated the Upanishads into Persian?",
          options: ["Abul Fazl", "Dara Shikoh", "Amir Khusrau", "Tansen"],
          answer: 1,
          explain: "Dara Shikoh, Shah Jahan's eldest son. Abul Fazl wrote the Akbarnama.",
          difficulty: 2,
          hint: "He was a son of Shah Jahan.",
        },
        {
          kind: "order",
          q: "Arrange these buildings in the order they were built.",
          items: ["Qutub Minar", "Alai Darwaza", "Humayun's tomb", "Fatehpur Sikri", "Taj Mahal"],
          explain: "Qutub Minar (begun about 1200), Alai Darwaza (1311), Humayun's tomb (1560s), Fatehpur Sikri (1570s), Taj Mahal (Shah Jahan, 17th century).",
          difficulty: 3,
          hint: "Two are Sultanate; three are Mughal, in the order Humayun, Akbar, Shah Jahan.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* The Mughal Empire (ICSE + Karnataka)                                */
/* ------------------------------------------------------------------ */

const mughals: Topic = {
  slug: "c9-mughal-empire",
  title: "The Mughal Empire",
  icon: "👑",
  description: "The Mughal rulers from Babur to Aurangzeb, and Akbar's administration and religious policy.",
  lessons: [
    {
      slug: "mughal-rulers",
      title: "From Babur to Aurangzeb",
      summary: "How Babur founded the Mughal empire, Humayun and Sher Shah, Akbar's conquests, and the reigns of Jahangir, Shah Jahan and Aurangzeb.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "💥",
          caption: "Panipat, 1526: Babur's cannons and quick cavalry beat a much larger army with war elephants.",
        },
        {
          type: "text",
          md: "**Babur** came from Central Asia. On his father's side he was descended from Timur, and on his mother's side from Genghis Khan. In **1526**, at the **First Battle of Panipat**, he defeated **Ibrahim Lodi** and founded the **Mughal empire**. He used **artillery** (cannons) and a clever cavalry tactic called **tulughma**, attacking from the sides.\n\nIn **1527** he defeated the Rajput ruler **Rana Sanga** of Mewar at **Khanwa**. Babur wrote his memoirs, the **Baburnama**, in Turkish.",
        },
        {
          type: "heading",
          text: "Humayun and Sher Shah",
        },
        {
          type: "text",
          md: "Babur's son **Humayun** lost his kingdom to the Afghan leader **Sher Shah Suri** at **Chausa (1539)** and **Kannauj (1540)**. Sher Shah ruled only five years (1540–1545) but was a great administrator: he issued the silver **rupiya**, improved the great road from Bengal to the north-west (later called the **Grand Trunk Road**) and built **sarais** (rest houses) along it. Humayun won back Delhi in **1555** but died the next year.",
        },
        {
          type: "table",
          headers: ["Ruler", "Reign", "Remembered for"],
          rows: [
            ["Babur", "1526–1530", "Panipat, Khanwa, Baburnama"],
            ["Humayun", "1530–1540, 1555–1556", "lost to Sher Shah; returned in 1555"],
            ["**Akbar**", "1556–1605", "Second Panipat, Rajput policy, mansabdari, sulh-i-kul"],
            ["Jahangir", "1605–1627", "chain of justice; Mughal painting; the English envoy Sir Thomas Roe came to his court"],
            ["Shah Jahan", "1628–1658", "Taj Mahal, Red Fort, Jama Masjid"],
            ["Aurangzeb", "1658–1707", "largest empire; long Deccan wars; reimposed jizya"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Whom did Babur defeat at the First Battle of Panipat?",
              options: ["Rana Sanga", "Ibrahim Lodi", "Sher Shah Suri", "Hemu"],
              answer: 1,
              explain: "Ibrahim Lodi, in 1526. Rana Sanga was defeated at Khanwa (1527); Hemu at the Second Battle of Panipat (1556).",
            },
          ],
        },
        {
          type: "heading",
          text: "Akbar and the later Mughals",
        },
        {
          type: "text",
          md: "**Akbar** became king at 13. In the **Second Battle of Panipat (1556)**, his guardian **Bairam Khan** defeated **Hemu**. Akbar then conquered much of north India, Gujarat, Bengal and parts of the Deccan. He made friends with many Rajput rulers through marriage and high posts, but **Maharana Pratap** of Mewar resisted him and fought the Mughal army at **Haldighati (1576)**.\n\n**Aurangzeb** spent his last 25 years in the Deccan. He conquered **Bijapur (1686)** and **Golconda (1687)**, but could not crush the **Marathas**. After his death in 1707, the empire grew weak.",
        },
        {
          type: "example",
          title: "Why did Babur win at Panipat?",
          problem: "Ibrahim Lodi's army was much larger. Explain how Babur still won in 1526.",
          steps: [
            "**Artillery**: Babur's cannons frightened Ibrahim's war elephants, which turned and trampled their own soldiers.",
            "**Tactics**: the **tulughma** method let Babur's cavalry attack the enemy from the sides and rear.",
            "**Defence**: Babur tied carts together to make a barrier, with guns placed between them.",
            "**Weak enemy**: many of Ibrahim Lodi's nobles were unhappy with him and did not fight hard.",
          ],
          answer: "Better weapons (artillery), clever tactics (tulughma and carts) and a divided enemy gave Babur victory over a larger army.",
        },
        {
          type: "mistake",
          wrong: "Akbar won the Second Battle of Panipat by leading his army himself.",
          right: "Akbar was only 13. His guardian **Bairam Khan** led the Mughal forces that defeated Hemu in 1556.",
          why: "Because the victory is listed under Akbar's reign, students picture him commanding. Bairam Khan was his regent until 1560.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put these Mughal events in order.",
            items: ["First Battle of Panipat", "Battle of Khanwa", "Humayun defeated at Kannauj", "Second Battle of Panipat", "Battle of Haldighati", "Death of Aurangzeb"],
            explain: "1526, 1527, 1540, 1556, 1576, 1707.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Exam tip",
          md: "Keep the **three Panipat battles** apart: **1526** Babur vs Ibrahim Lodi; **1556** Akbar's forces vs Hemu; **1761** the Marathas vs Ahmad Shah Abdali. A one-mark question on these appears often.",
        },
        {
          type: "keypoints",
          items: [
            "Babur founded the Mughal empire at Panipat (1526) and beat Rana Sanga at Khanwa (1527).",
            "Sher Shah Suri (1540–1545) issued the rupiya and improved the Grand Trunk Road.",
            "Akbar (1556–1605): Second Panipat (1556), wide conquests, Rajput alliances, Haldighati (1576).",
            "Shah Jahan was the great builder; Aurangzeb took Bijapur and Golconda but could not defeat the Marathas.",
          ],
        },
      ],
      flashcards: [
        { front: "First Battle of Panipat", back: "1526: Babur defeated Ibrahim Lodi and founded the Mughal empire." },
        { front: "Battle of Khanwa", back: "1527: Babur defeated Rana Sanga of Mewar." },
        { front: "Sher Shah Suri", back: "Afghan ruler (1540–1545); silver rupiya, Grand Trunk Road, sarais." },
        { front: "Second Battle of Panipat", back: "1556: Bairam Khan, for young Akbar, defeated Hemu." },
        { front: "Battle of Haldighati", back: "1576: Maharana Pratap fought the Mughal army." },
        { front: "Aurangzeb in the Deccan", back: "Conquered Bijapur (1686) and Golconda (1687); died in 1707." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Babur's memoirs are called the:",
          options: ["Akbarnama", "Baburnama", "Ain-i-Akbari", "Rihla"],
          answer: 1,
          explain: "Babur wrote the Baburnama in Turkish. The Akbarnama and Ain-i-Akbari are by Abul Fazl; the Rihla is Ibn Battuta's.",
        },
        {
          kind: "fill",
          q: "Sher Shah Suri issued a silver coin called the ___.",
          answer: ["rupiya", "rupee", "rupaya"],
          explain: "The rupiya is the ancestor of today's rupee.",
        },
        {
          kind: "truefalse",
          q: "Humayun ruled the Mughal empire without a break from 1530 to 1556.",
          answer: false,
          explain: "He lost his kingdom to Sher Shah in 1540 and won it back only in 1555.",
        },
        {
          kind: "mcq",
          q: "Which ruler fought the Mughal army at Haldighati in 1576?",
          options: ["Rana Sanga", "Maharana Pratap", "Hemu", "Shivaji"],
          answer: 1,
          explain: "Maharana Pratap of Mewar. Rana Sanga, his grandfather, fought Babur at Khanwa in 1527.",
          difficulty: 2,
          hint: "Rana Sanga fought Babur, about 50 years earlier.",
        },
        {
          kind: "order",
          q: "Arrange the Mughal rulers in order.",
          items: ["Babur", "Humayun", "Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
          explain: "Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb: six great Mughals from 1526 to 1707.",
        },
        {
          kind: "multi",
          q: "Which helped Babur win at Panipat? Choose all that apply.",
          options: ["Artillery", "Tulughma tactic", "A larger army", "Discontent among Ibrahim Lodi's nobles"],
          answers: [0, 1, 3],
          explain: "Babur's army was smaller; his weapons, tactics and the enemy's weakness made the difference.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which Deccan kingdoms did Aurangzeb conquer in 1686 and 1687?",
          options: ["Vijayanagara and Bidar", "Bijapur and Golconda", "Ahmadnagar and Berar", "Mysore and Keladi"],
          answer: 1,
          explain: "Bijapur fell in 1686 and Golconda in 1687.",
        },
      ],
    },
    {
      slug: "akbar-administration-religious-policy",
      title: "Akbar's Administration and Religious Policy",
      summary: "The mansabdari system, subas, Todar Mal's land revenue system, Rajput policy, sulh-i-kul, the Ibadat Khana and Din-i-Ilahi.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Akbar ruled a huge empire of people with many faiths and languages. To hold it together, he needed loyal officers, a fair tax system and a policy that made all his subjects feel safe. Each of these became a famous part of his rule.",
        },
        {
          type: "heading",
          text: "The mansabdari system",
        },
        {
          type: "text",
          md: "Every important officer of the empire was given a **mansab**, a rank. The officer was called a **mansabdar**. Each mansab had two numbers:\n\n- **zat**: the officer's personal rank and salary;\n- **sawar**: the number of cavalrymen (horsemen) he had to keep.\n\nMansabdars could be moved from place to place and from job to job. Many were paid by a **jagir**, an assignment of land revenue, rather than in cash. A jagir gave the right to collect revenue, **not ownership** of the land.",
        },
        {
          type: "example",
          title: "Reading a mansab",
          problem: "An officer holds a rank of 2,000 zat and 1,500 sawar. What does this mean?",
          steps: [
            "**2,000 zat**: his personal rank is 2,000, which fixes his place at court and his salary.",
            "**1,500 sawar**: he must keep 1,500 horsemen ready for the emperor.",
            "He is paid through a **jagir**, from which he also pays his horsemen.",
            "The emperor can raise, lower or transfer the rank at any time.",
          ],
          answer: "He is a mid-ranking mansabdar with personal rank 2,000 who must maintain 1,500 cavalrymen for the emperor.",
        },
        {
          type: "heading",
          text: "Provinces and land revenue",
        },
        {
          type: "list",
          items: [
            "The empire was divided into provinces called **subas**, each under a **subadar** (governor). Subas were divided into **sarkars** and then **parganas**.",
            "Akbar's finance minister **Raja Todar Mal** measured the land and classified it by how fertile it was.",
            "Under the **zabt** system, tax was fixed in cash on each crop, based on the **average produce and prices of the previous ten years**. This is called the **dahsala** system.",
            "In bad years, farmers could be given relief from tax.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In Akbar's mansabdari system, 'sawar' meant:",
              options: ["The officer's personal salary", "The number of horsemen he had to keep", "The land he owned", "The tax he collected"],
              answer: 1,
              explain: "Sawar is the cavalry he maintained. Zat is the personal rank and salary.",
            },
          ],
        },
        {
          type: "heading",
          text: "Rajput and religious policy",
        },
        {
          type: "list",
          items: [
            "**Rajput policy**: Akbar married into Rajput royal families (such as Amber) and gave Rajputs high posts. **Raja Man Singh** became one of his top generals.",
            "He **abolished the pilgrim tax** (1563) and the **jizya** (1564), a tax on non-Muslims.",
            "In **1575** he built the **Ibadat Khana** (house of worship) at Fatehpur Sikri, where scholars of many faiths (Islam, Hinduism, Jainism, Zoroastrianism, Christianity) debated.",
            "He followed **sulh-i-kul**, 'peace with all': the state treats every religion fairly.",
            "In **1582** he started the **Din-i-Ilahi** (Tauhid-i-Ilahi), a path of loyalty and good conduct for a small circle of followers. It was not forced on anyone and ended with him.",
          ],
        },
        {
          type: "mistake",
          wrong: "Din-i-Ilahi was a new religion that Akbar forced all his subjects to follow.",
          right: "Din-i-Ilahi had only a small number of followers, mostly courtiers. Joining was voluntary, and it faded after Akbar's death.",
          why: "Because it has a grand name, students imagine a state religion. Akbar's real policy for all subjects was **sulh-i-kul**, tolerance of every faith.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What did a jagir give a mansabdar?",
            emoji: "📜",
            options: ["Ownership of the land, passed to his sons", "The right to collect the land revenue as his pay", "A palace in the capital", "Command of the emperor's own army"],
            answer: 1,
            trap: 0,
            explain: "A jagir was a **revenue assignment**, not land ownership. Jagirs were transferred from time to time, so a mansabdar could not treat the land as his own.",
          },
        },
        {
          type: "text",
          md: "**Sources**: much of what we know comes from **Abul Fazl**, Akbar's friend and minister, who wrote the **Akbarnama** (history of Akbar's reign) and the **Ain-i-Akbari** (details of administration, revenue and the people). Aurangzeb later moved away from Akbar's policy and **reimposed the jizya in 1679**.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Questions on Akbar's religious policy reward **specific measures with dates**: abolition of jizya (1564), Ibadat Khana (1575), Din-i-Ilahi (1582), and the idea of **sulh-i-kul**. Write each as a separate point.",
        },
        {
          type: "keypoints",
          items: [
            "Mansabdari: every officer had a rank with zat (personal) and sawar (cavalry); paid by jagirs or cash.",
            "Empire → suba (subadar) → sarkar → pargana.",
            "Todar Mal's zabt and dahsala system fixed tax on ten-year averages.",
            "Religious policy: jizya abolished (1564), Ibadat Khana (1575), sulh-i-kul, Din-i-Ilahi (1582).",
            "Abul Fazl's Akbarnama and Ain-i-Akbari are the main sources.",
          ],
        },
      ],
      flashcards: [
        { front: "Mansab", back: "A rank given to an officer in the Mughal service." },
        { front: "Zat and sawar", back: "Zat: personal rank and salary. Sawar: number of cavalrymen to be kept." },
        { front: "Jagir", back: "An assignment of land revenue in place of salary; not ownership of land." },
        { front: "Dahsala system", back: "Tax fixed on the average produce and prices of the past ten years (Todar Mal)." },
        { front: "Sulh-i-kul", back: "Akbar's policy of 'peace with all' religions." },
        { front: "Ibadat Khana", back: "House of worship at Fatehpur Sikri (1575) for religious debates." },
        { front: "Ain-i-Akbari", back: "Abul Fazl's record of Akbar's administration and empire." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who was Akbar's finance minister who reformed land revenue?",
          options: ["Abul Fazl", "Raja Todar Mal", "Birbal", "Bairam Khan"],
          answer: 1,
          explain: "Raja Todar Mal measured land and fixed revenue. Abul Fazl was the historian; Bairam Khan was the regent.",
        },
        {
          kind: "fill",
          q: "A Mughal province was called a ___.",
          answer: ["suba", "subah", "soobah"],
          explain: "Each suba was governed by a subadar.",
        },
        {
          kind: "truefalse",
          q: "Akbar abolished the jizya in 1564.",
          answer: true,
          explain: "Aurangzeb reimposed it in 1679.",
        },
        {
          kind: "mcq",
          q: "An officer had to keep 500 horsemen. Which part of his mansab tells us this?",
          options: ["Zat", "Sawar", "Jagir", "Suba"],
          answer: 1,
          explain: "Sawar gives the number of cavalry. Zat is the personal rank.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange Akbar's religious measures in order.",
          items: ["Abolition of the pilgrim tax", "Abolition of the jizya", "Building of the Ibadat Khana", "Start of the Din-i-Ilahi"],
          explain: "1563, 1564, 1575, 1582.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about Din-i-Ilahi are correct? Choose all that apply.",
          options: ["It had only a few followers", "Joining was voluntary", "All subjects had to join", "It ended after Akbar's death"],
          answers: [0, 1, 3],
          explain: "It was never forced on the people; sulh-i-kul was the policy for everyone.",
          difficulty: 2,
          hint: "Think about whether Akbar's policy was tolerance or force.",
        },
        {
          kind: "mcq",
          q: "Which book by Abul Fazl describes the administration of Akbar's empire?",
          options: ["Baburnama", "Ain-i-Akbari", "Tarikh-i-Firoz Shahi", "Razmnama"],
          answer: 1,
          explain: "The Ain-i-Akbari, part of the Akbarnama. Tarikh-i-Firoz Shahi is Barani's Sultanate history.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* The Marathas (Karnataka)                                            */
/* ------------------------------------------------------------------ */

const marathas: Topic = {
  slug: "c9-marathas",
  title: "The Marathas",
  icon: "⚔️",
  description: "Shivaji and the rise of Maratha power: his wars, administration, and the Peshwas.",
  lessons: [
    {
      slug: "shivaji-and-the-marathas",
      title: "Shivaji and the Maratha State",
      summary: "Shivaji's life and wars against Bijapur and the Mughals, his Ashta Pradhan and revenue system, and the rise of the Peshwas.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "⛰️",
          caption: "The hill forts of the Sahyadris, such as Raigad and Sinhagad, were the strongholds of the Marathas.",
        },
        {
          type: "text",
          md: "**Shivaji** was born in **1630** at the fort of **Shivneri**, near Pune. His mother **Jijabai** taught him stories of heroes. His father **Shahaji Bhonsle** was a general of the **Bijapur** Sultan and held lands around Pune and **Bengaluru**, so Shivaji's story has a Karnataka link too.\n\nThe Marathas lived in the hilly **Sahyadri** (Western Ghats) region. Shivaji built a strong state there, using the hills, the forts and fast-moving soldiers.",
        },
        {
          type: "heading",
          text: "Shivaji's rise",
        },
        {
          type: "table",
          headers: ["Year", "Event"],
          rows: [
            ["1646", "as a teenager, captured the fort of Torna"],
            ["1659", "killed the Bijapur general **Afzal Khan** at **Pratapgad**"],
            ["1663", "made a surprise night attack on the Mughal governor **Shaista Khan** at Pune"],
            ["1665", "**Treaty of Purandar** with the Mughal general **Raja Jai Singh**: gave up many forts"],
            ["1666", "visited Aurangzeb at Agra, was kept under guard, and escaped"],
            ["1674", "**crowned at Raigad**; took the title **Chhatrapati**"],
            ["1680", "died at Raigad"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Where was Shivaji crowned in 1674?",
              options: ["Shivneri", "Raigad", "Pune", "Agra"],
              answer: 1,
              explain: "He was crowned at Raigad and took the title Chhatrapati. Shivneri was his birthplace.",
            },
          ],
        },
        {
          type: "heading",
          text: "Shivaji's administration",
        },
        {
          type: "text",
          md: "Shivaji was helped by a council of eight ministers, the **Ashta Pradhan**. The **Peshwa** was the prime minister; others looked after finance, records, foreign affairs, the army (**Senapati**), justice (**Nyayadhish**) and religion.\n\nHe paid many soldiers in cash rather than with land, so they stayed loyal to him. He kept a chain of **forts** and built a **navy** on the west coast.\n\nFrom lands outside his kingdom he collected two taxes:\n\n- **chauth**: one-fourth (25%) of the land revenue, in return for not raiding the area;\n- **sardeshmukhi**: an extra one-tenth (10%), claimed as the head *deshmukh* of the region.",
        },
        {
          type: "example",
          title: "Working out chauth and sardeshmukhi",
          problem: "A district outside Shivaji's kingdom pays ₹1,00,000 a year in land revenue to its own ruler. How much would the Marathas claim as chauth and sardeshmukhi?",
          steps: [
            "Chauth is one-fourth: $\\tfrac{1}{4} \\times 1{,}00{,}000 = 25{,}000$.",
            "Sardeshmukhi is one-tenth: $\\tfrac{1}{10} \\times 1{,}00{,}000 = 10{,}000$.",
            "Total claimed $= 25{,}000 + 10{,}000 = 35{,}000$.",
          ],
          answer: "₹25,000 as chauth and ₹10,000 as sardeshmukhi: ₹35,000 in all, or 35% of the revenue.",
        },
        {
          type: "mistake",
          wrong: "Chauth was a tax Shivaji collected from the people of his own kingdom.",
          right: "Chauth was collected from areas **outside** Shivaji's kingdom, as a price for not raiding them.",
          why: "It sounds like an ordinary land tax. But inside his kingdom Shivaji collected regular land revenue; chauth and sardeshmukhi were claims on neighbours' lands.",
        },
        {
          type: "heading",
          text: "After Shivaji: the Peshwas",
        },
        {
          type: "text",
          md: "After Shivaji, the Mughals under Aurangzeb attacked the Marathas. His son **Sambhaji** was captured and executed in 1689. His younger son **Rajaram** escaped south to **Jinji**, sheltered on the way by **Rani Chennamma of Keladi**.\n\nIn the 18th century the **Peshwas** became the real leaders. **Balaji Vishwanath** and his son **Baji Rao I** spread Maratha power far into north India. But in the **Third Battle of Panipat (1761)**, the Marathas were defeated by **Ahmad Shah Abdali** of Afghanistan.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put these events in order.",
            items: ["Shivaji kills Afzal Khan", "Treaty of Purandar", "Shivaji's coronation at Raigad", "Rajaram escapes to Jinji", "Third Battle of Panipat"],
            explain: "1659, 1665, 1674, 1689, 1761.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Exam tip",
          md: "When writing about Shivaji's administration, use the exact terms **Ashta Pradhan**, **Peshwa**, **chauth** and **sardeshmukhi**, and explain each in a line. Writing 'he had ministers and taxes' without the terms gets few marks.",
        },
        {
          type: "keypoints",
          items: [
            "Shivaji (1630–1680), born at Shivneri; father Shahaji served Bijapur and held lands around Bengaluru.",
            "Afzal Khan (1659), Shaista Khan (1663), Treaty of Purandar (1665), escape from Agra (1666), coronation at Raigad (1674).",
            "Ashta Pradhan: council of eight ministers led by the Peshwa.",
            "Chauth (1/4) and sardeshmukhi (1/10) were collected from lands outside his kingdom.",
            "The Peshwas led the Marathas in the 18th century; they lost the Third Battle of Panipat (1761).",
          ],
        },
      ],
      flashcards: [
        { front: "Shivaji's birthplace and year", back: "Shivneri fort, 1630." },
        { front: "Treaty of Purandar", back: "1665, between Shivaji and the Mughal general Raja Jai Singh." },
        { front: "Chhatrapati", back: "Title Shivaji took at his coronation at Raigad in 1674." },
        { front: "Ashta Pradhan", back: "Shivaji's council of eight ministers, headed by the Peshwa." },
        { front: "Chauth", back: "One-fourth of the land revenue, taken from lands outside the Maratha kingdom." },
        { front: "Sardeshmukhi", back: "An extra one-tenth of the revenue, claimed as head deshmukh." },
        { front: "Third Battle of Panipat", back: "1761: Ahmad Shah Abdali defeated the Marathas." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who was the head of Shivaji's Ashta Pradhan?",
          options: ["Senapati", "Peshwa", "Nyayadhish", "Amatya"],
          answer: 1,
          explain: "The Peshwa was the prime minister. The Senapati led the army and the Nyayadhish handled justice.",
        },
        {
          kind: "numeric",
          q: "A region pays ₹40,000 in land revenue. How much is the chauth on it (in ₹)?",
          answer: 10000,
          unit: "₹",
          explain: "Chauth is one-fourth: 40,000 ÷ 4 = 10,000.",
          difficulty: 2,
          hint: "Chauth means one-fourth.",
        },
        {
          kind: "truefalse",
          q: "Shivaji's father Shahaji was a general of the Bijapur Sultan.",
          answer: true,
          explain: "Shahaji served Bijapur and held jagirs around Pune and Bengaluru.",
        },
        {
          kind: "mcq",
          q: "Which Bijapur general did Shivaji kill at Pratapgad in 1659?",
          options: ["Shaista Khan", "Afzal Khan", "Jai Singh", "Bairam Khan"],
          answer: 1,
          explain: "Afzal Khan. Shaista Khan was the Mughal governor he attacked at Pune; Jai Singh signed the Treaty of Purandar.",
        },
        {
          kind: "fill",
          q: "Shivaji's younger son Rajaram was given shelter on his way to Jinji by Rani Chennamma of ___.",
          answer: ["Keladi", "Bidanur", "Keladi (Bidanur)"],
          explain: "Keladi Chennamma sheltered Rajaram and faced a Mughal attack for it.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these were part of Shivaji's rule? Choose all that apply.",
          options: ["Ashta Pradhan", "A navy on the west coast", "Mansabdari system", "Chain of hill forts"],
          answers: [0, 1, 3],
          explain: "Mansabdari was the Mughal system of ranks.",
        },
        {
          kind: "order",
          q: "Arrange these events in Shivaji's life in order.",
          items: ["Birth at Shivneri", "Capture of Torna", "Attack on Shaista Khan", "Escape from Agra", "Coronation at Raigad"],
          explain: "1630, 1646, 1663, 1666, 1674.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Wodeyars of Mysore and Nayakas of Keladi (Karnataka)                */
/* ------------------------------------------------------------------ */

const mysoreKeladi: Topic = {
  slug: "c9-mysore-wodeyars-keladi",
  title: "The Wodeyars of Mysore and the Nayakas of Keladi",
  icon: "🏯",
  description: "Two Karnataka kingdoms that rose after Vijayanagara: the Wodeyars of Mysuru and the Nayakas of Keladi.",
  lessons: [
    {
      slug: "wodeyars-of-mysore",
      title: "The Wodeyars of Mysore",
      summary: "The rise of the Wodeyars, Raja Wodeyar, Kanteerava Narasaraja and Chikkadevaraja, and the modern Mysore of Krishnaraja Wodeyar IV.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🐘",
          caption: "Every Dasara, the golden howdah is carried through Mysuru on an elephant. The Wodeyars made this festival the pride of their kingdom.",
        },
        {
          type: "text",
          md: "The **Wodeyars** (Odeyars) began as small chiefs around Mysuru under the Vijayanagara empire. Tradition says the family was founded in **1399** by **Yaduraya**. When Vijayanagara grew weak after Talikota, the Wodeyars became independent.",
        },
        {
          type: "table",
          headers: ["Ruler", "Years", "Main work"],
          rows: [
            ["**Raja Wodeyar**", "1578–1617", "captured **Srirangapatna** from the Vijayanagara governor in **1610** and made it his capital; began the **Dasara** celebrations there"],
            ["**Kanteerava Narasaraja Wodeyar**", "1638–1659", "defended Srirangapatna against Bijapur; set up a mint and issued coins called **Kanteerayi hana**"],
            ["**Chikkadevaraja Wodeyar**", "1673–1704", "organised the government into **18 departments** (*Attara Kacheri*); bought **Bengaluru** from the Mughals (1689); supported Kannada writers"],
          ],
        },
        {
          type: "text",
          md: "After Chikkadevaraja, real power passed to ministers called **dalavayis**, and then, from **1761**, to **Hyder Ali** and his son **Tipu Sultan**. After Tipu died at Srirangapatna in **1799**, the British gave the throne back to the young **Krishnaraja Wodeyar III**, with **Purnaiah** as dewan, and Mysuru became the capital again.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which Wodeyar ruler captured Srirangapatna in 1610?",
              options: ["Yaduraya", "Raja Wodeyar", "Chikkadevaraja Wodeyar", "Krishnaraja Wodeyar III"],
              answer: 1,
              explain: "Raja Wodeyar took Srirangapatna in 1610 and began the Dasara there.",
            },
          ],
        },
        {
          type: "heading",
          text: "British rule and the rendition",
        },
        {
          type: "text",
          md: "After a peasant revolt in the **Nagar** region, the British took over the administration of Mysore in **1831** and ran it through commissioners such as **Mark Cubbon**. In **1881** they handed the state back to the Wodeyars. This handing back is called the **rendition**. **Chamarajendra Wodeyar X** became ruler, and a **Representative Assembly** was set up the same year.",
        },
        {
          type: "heading",
          text: "Krishnaraja Wodeyar IV and modern Mysore",
        },
        {
          type: "list",
          items: [
            "**Krishnaraja Wodeyar IV** (ruled with full powers 1902–1940) made Mysore one of the best-run princely states. He is remembered as **Rajarshi**, a saintly king.",
            "His dewan **Sir M. Visvesvaraya** (1912–1918) started many projects: the **Krishnaraja Sagar (KRS) dam**, the **University of Mysore** (1916) and the **Bank of Mysore** (1913).",
            "The **Sivasamudram** power station (1902) supplied electricity to the Kolar Gold Fields, and later to Bengaluru and Mysuru.",
            "The **Bhadravati Iron Works** was started to use local iron ore.",
            "The last ruler, **Jayachamarajendra Wodeyar**, joined the Indian Union in 1947.",
          ],
        },
        {
          type: "example",
          title: "Explaining a 'model state'",
          problem: "Why is Mysore under Krishnaraja Wodeyar IV called a model state? Give three points.",
          steps: [
            "**Irrigation and power**: the KRS dam watered farms in Mandya and Mysuru; Sivasamudram gave electricity.",
            "**Industry**: Bhadravati Iron Works and other factories created jobs.",
            "**Education**: the University of Mysore (1916) was founded, and schools spread.",
            "**People's voice**: the Representative Assembly (from 1881) let the people's representatives speak to the government.",
          ],
          answer: "Mysore had modern irrigation and power, new industries, good education and a Representative Assembly, so it was seen as a model princely state.",
        },
        {
          type: "mistake",
          wrong: "Sir M. Visvesvaraya was a king of Mysore.",
          right: "Sir M. Visvesvaraya was the **dewan** (chief minister) of Mysore from 1912 to 1918, under King Krishnaraja Wodeyar IV.",
          why: "His name is on so many dams, colleges and projects that students think he ruled. The dewan carried out the plans; the Wodeyar was the ruler.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each Wodeyar ruler to his work.",
            pairs: [
              ["Raja Wodeyar", "Captured Srirangapatna and began Dasara (1610)"],
              ["Kanteerava Narasaraja Wodeyar", "Issued Kanteerayi hana coins"],
              ["Chikkadevaraja Wodeyar", "Eighteen departments (Attara Kacheri)"],
              ["Chamarajendra Wodeyar X", "Received the state back at the rendition (1881)"],
              ["Krishnaraja Wodeyar IV", "KRS dam and University of Mysore"],
            ],
            explain: "Each ruler is linked to one big step: capital and festival, coins, government departments, rendition, and modern development.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka exam tip",
          md: "For 'contributions of Krishnaraja Wodeyar IV', name the **project and the dewan** together (for example, KRS dam and Sir M. Visvesvaraya). Answers that list projects with no names or dates score less.",
        },
        {
          type: "keypoints",
          items: [
            "The Wodeyars rose under Vijayanagara; tradition dates the family to 1399 (Yaduraya).",
            "Raja Wodeyar took Srirangapatna (1610) and began the Dasara.",
            "Chikkadevaraja Wodeyar created 18 departments and bought Bengaluru (1689).",
            "British administration from 1831; rendition in 1881.",
            "Krishnaraja Wodeyar IV and dewan Visvesvaraya made Mysore a model state (KRS dam, University of Mysore).",
          ],
        },
      ],
      flashcards: [
        { front: "Raja Wodeyar", back: "Captured Srirangapatna in 1610, made it the capital and started the Dasara there." },
        { front: "Kanteerayi hana", back: "Coins issued by Kanteerava Narasaraja Wodeyar." },
        { front: "Attara Kacheri", back: "The 18 departments of government set up by Chikkadevaraja Wodeyar." },
        { front: "Rendition (1881)", back: "The British handed Mysore back to the Wodeyars (Chamarajendra Wodeyar X)." },
        { front: "Sir M. Visvesvaraya", back: "Dewan of Mysore, 1912–1918; KRS dam, University of Mysore, Bank of Mysore." },
        { front: "Krishnaraja Wodeyar IV", back: "Ruler under whom Mysore became a model state; called Rajarshi." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which Wodeyar ruler organised the government into 18 departments?",
          options: ["Raja Wodeyar", "Kanteerava Narasaraja Wodeyar", "Chikkadevaraja Wodeyar", "Krishnaraja Wodeyar IV"],
          answer: 2,
          explain: "Chikkadevaraja Wodeyar (1673–1704) created the Attara Kacheri.",
        },
        {
          kind: "fill",
          q: "The return of Mysore to the Wodeyars by the British in 1881 is called the ___.",
          answer: ["rendition", "Rendition"],
          explain: "After 50 years of British administration (1831–1881), the state was handed back.",
        },
        {
          kind: "truefalse",
          q: "Sir M. Visvesvaraya was a ruler of the Wodeyar dynasty.",
          answer: false,
          explain: "He was the dewan (chief minister), not a king.",
        },
        {
          kind: "order",
          q: "Arrange these events in Mysore's history in order.",
          items: ["Raja Wodeyar captures Srirangapatna", "Chikkadevaraja buys Bengaluru", "Death of Tipu Sultan", "British take over the administration", "Rendition"],
          explain: "1610, 1689, 1799, 1831, 1881.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which were developed in Mysore under Krishnaraja Wodeyar IV? Choose all that apply.",
          options: ["Krishnaraja Sagar dam", "University of Mysore", "Gol Gumbaz", "Bank of Mysore"],
          answers: [0, 1, 3],
          explain: "The Gol Gumbaz is a 17th-century Adil Shahi tomb at Vijayapura.",
        },
        {
          kind: "mcq",
          q: "Who took control of the Mysore kingdom from 1761 before the Wodeyars were restored in 1799?",
          options: ["The Marathas", "Hyder Ali and Tipu Sultan", "The Keladi Nayakas", "The Mughals"],
          answer: 1,
          explain: "Hyder Ali and then Tipu Sultan ruled until Tipu's death in 1799.",
        },
      ],
    },
    {
      slug: "nayakas-of-keladi",
      title: "The Nayakas of Keladi",
      summary: "The Keladi Nayakas of the Malnad: their capitals, Shivappa Nayaka's shist, Rani Chennamma, and their temples and learning.",
      minutes: 13,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🌧️",
          caption: "In the rainy Malnad hills of Shivamogga district, a small village called Keladi gave its name to a kingdom.",
        },
        {
          type: "text",
          md: "The **Nayakas of Keladi** began as chiefs under Vijayanagara. Around **1500**, **Chowdappa Nayaka** founded the line at **Keladi** in present-day Shivamogga district. After the fall of Vijayanagara they became independent and ruled the Malnad and the coast of Karnataka for about 260 years.\n\nThey moved their capital three times: **Keladi → Ikkeri → Bidanur (Nagara)**.",
        },
        {
          type: "table",
          headers: ["Ruler", "Main work"],
          rows: [
            ["Chowdappa Nayaka", "founded the dynasty at Keladi"],
            ["Sadashiva Nayaka", "served Vijayanagara bravely; moved the capital to **Ikkeri**"],
            ["Venkatappa Nayaka I", "ruled independently; fought Bijapur; the Italian traveller **Pietro Della Valle** visited his court"],
            ["**Shivappa Nayaka**", "1645–1660: the **shist** revenue system; drove the Portuguese from coastal forts"],
            ["**Rani Chennamma**", "1672–1697: sheltered Rajaram and stood up to the Mughals"],
          ],
        },
        {
          type: "text",
          md: "**Shivappa Nayaka** is the most famous Keladi ruler. He had land surveyed and divided by **soil quality and crop**, and fixed the tax for each type. This system, known as **Shivappana Shist** (*shist* means a fixed tax), was fair to farmers and was later continued by Hyder Ali and the British. He also encouraged trade in pepper and areca nut from the coast.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Shivappa Nayaka is best remembered for:",
              options: ["Building the Gol Gumbaz", "The shist land revenue system", "Starting the Mysore Dasara", "Founding Hampi"],
              answer: 1,
              explain: "Shivappa Nayaka's shist fixed land tax by soil and crop. The Gol Gumbaz is Adil Shahi; the Dasara was started at Srirangapatna by Raja Wodeyar.",
            },
          ],
        },
        {
          type: "text",
          md: "**Rani Chennamma** (Keladi Chennamma) ruled after her husband's death. When **Rajaram**, son of Shivaji, fled from Aurangzeb's armies, she gave him shelter and helped him reach **Jinji**. The Mughal army attacked Keladi, but she defended her kingdom and made an honourable peace.\n\nThe Keladi rulers built the **Aghoreshwara temple at Ikkeri**, which mixes several temple styles. **Basavappa Nayaka** wrote the Sanskrit encyclopedia **Shivatattva Ratnakara**. In **1763**, **Hyder Ali** captured Bidanur, and the Keladi kingdom came to an end.",
        },
        {
          type: "example",
          title: "Two queens called Chennamma",
          problem: "A student writes: 'Rani Chennamma fought the British in 1824.' Is this about the Keladi queen? How can you tell?",
          steps: [
            "**Check the date**: Keladi Chennamma ruled from 1672 to 1697. The British were not fighting kings in Karnataka then.",
            "**Check the enemy**: Keladi Chennamma faced the **Mughals** under Aurangzeb.",
            "**Find the other queen**: **Kittur Chennamma** of Kittur (Belagavi district) fought the British in **1824**.",
          ],
          answer: "No. The 1824 fight against the British was by Kittur Chennamma. Keladi Chennamma ruled in the 17th century and resisted the Mughals.",
        },
        {
          type: "mistake",
          wrong: "Keladi Chennamma and Kittur Chennamma are the same queen.",
          right: "They are two different queens: Keladi Chennamma (17th century, resisted the Mughals) and Kittur Chennamma (19th century, fought the British).",
          why: "Both are brave Karnataka queens with the same name, so they are often mixed up. The century and the enemy tell them apart.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the Keladi capitals in the order they were used.",
            items: ["Keladi", "Ikkeri", "Bidanur (Nagara)"],
            explain: "The capital moved from Keladi to Ikkeri, then to Bidanur, which Hyder Ali captured in 1763.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka exam tip",
          md: "A short answer on the Keladi Nayakas should name **Shivappa Nayaka and the shist**, **Rani Chennamma and Rajaram**, and the **end in 1763 by Hyder Ali**. These three points cover most marks.",
        },
        {
          type: "keypoints",
          items: [
            "Founded around 1500 by Chowdappa Nayaka at Keladi (Shivamogga district).",
            "Capitals: Keladi → Ikkeri → Bidanur (Nagara).",
            "Shivappa Nayaka (1645–1660): shist revenue system; fought the Portuguese.",
            "Rani Chennamma (1672–1697) sheltered Rajaram and resisted the Mughals.",
            "Aghoreshwara temple at Ikkeri; the kingdom ended when Hyder Ali took Bidanur in 1763.",
          ],
        },
      ],
      flashcards: [
        { front: "Founder of the Keladi Nayakas", back: "Chowdappa Nayaka, around 1500, at Keladi." },
        { front: "Keladi capitals in order", back: "Keladi, Ikkeri, Bidanur (Nagara)." },
        { front: "Shivappana Shist", back: "Shivappa Nayaka's land revenue fixed by soil quality and crop." },
        { front: "Keladi Chennamma", back: "Queen (1672–1697) who sheltered Shivaji's son Rajaram and resisted the Mughals." },
        { front: "Aghoreshwara temple", back: "Temple at Ikkeri built by the Keladi Nayakas." },
        { front: "End of the Keladi kingdom", back: "Hyder Ali captured Bidanur in 1763." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Keladi is in which present-day district of Karnataka?",
          options: ["Mysuru", "Shivamogga", "Kalaburagi", "Belagavi"],
          answer: 1,
          explain: "Keladi and Ikkeri are near Sagara in Shivamogga district. Kittur, of the other Chennamma, is in Belagavi.",
        },
        {
          kind: "fill",
          q: "Shivappa Nayaka's land revenue system is known as the ___.",
          answer: ["shist", "Shivappana Shist", "Shivappa Nayakana Shist"],
          explain: "Shist means a fixed assessment of tax.",
        },
        {
          kind: "truefalse",
          q: "Keladi Chennamma fought against the British East India Company in 1824.",
          answer: false,
          explain: "That was Kittur Chennamma. Keladi Chennamma ruled in the 17th century and faced the Mughals.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange these Keladi events in order.",
          items: ["Chowdappa Nayaka founds the line", "Capital moved to Ikkeri", "Shivappa Nayaka introduces the shist", "Chennamma shelters Rajaram", "Hyder Ali captures Bidanur"],
          explain: "About 1500, then the move to Ikkeri, Shivappa's rule (1645–1660), Chennamma's help to Rajaram (1689–90) and Hyder Ali's conquest (1763).",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Who ended the Keladi kingdom in 1763?",
          options: ["Aurangzeb", "Hyder Ali", "The Portuguese", "Krishnadevaraya"],
          answer: 1,
          explain: "Hyder Ali captured Bidanur. Aurangzeb's army attacked Keladi earlier but made peace with Chennamma.",
        },
        {
          kind: "multi",
          q: "Which are linked with the Keladi Nayakas? Choose all that apply.",
          options: ["Aghoreshwara temple, Ikkeri", "Shivatattva Ratnakara", "Gol Gumbaz", "Shivappana Shist"],
          answers: [0, 1, 3],
          explain: "The Gol Gumbaz belongs to the Adil Shahis of Bijapur.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [cholas, rajputs, delhiSultanate, vijayanagaraBahmani, bhaktiSufi, compositeCulture, mughals, marathas, mysoreKeladi];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Medieval India: The Cholas and the Delhi Sultanate": ["c9-cholas", "c9-delhi-sultanate"],
  "9:The Mughal Empire": "c9-mughal-empire",
  "9:The Composite Culture": ["c9-bhakti-sufi", "c9-composite-culture"],
  "9:The Rajputs and the Delhi Sultans": ["c9-rajputs", "c9-delhi-sultanate"],
  "9:The Vijayanagara and Bahmani Kingdoms": "c9-vijayanagara-bahmani",
  "9:The Bhakti and Sufi Movements": "c9-bhakti-sufi",
  "9:The Mughals and the Marathas": ["c9-mughal-empire", "c9-marathas"],
  "9:The Wodeyars of Mysore and the Nayakas of Keladi": "c9-mysore-wodeyars-keladi",
};
