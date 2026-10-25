import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

/* ------------------------------------------------------------------ */
/* The French Revolution (CBSE; also Karnataka "The Age of Revolutions") */
/* ------------------------------------------------------------------ */
const frenchRevolution: Topic = {
  slug: "c9-french-revolution",
  title: "The French Revolution",
  icon: "🇫🇷",
  description: "Why France rose up in 1789, how the monarchy fell, and what the Revolution left behind.",
  lessons: [
    {
      slug: "c9-fr-society-and-outbreak",
      title: "French Society and the Outbreak of 1789",
      summary: "The three estates, unfair taxes, the subsistence crisis, new ideas, and the events from the Estates General to the fall of the Bastille.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🍞",
          caption: "Imagine the price of your daily roti doubling while the rich pay no tax at all. That is roughly how ordinary French people felt in 1789.",
        },
        {
          type: "text",
          md: "In 1774 **Louis XVI** became king of France. He took over an empty treasury. Long wars, the costly court at the palace of **Versailles**, and French help to the thirteen American colonies in their war against Britain had put France deep in debt.\n\nTo pay its bills the state had to raise taxes. But who paid those taxes was very unfair.",
        },
        {
          type: "text",
          md: "French society was divided into three groups called **estates**. This system of the old days is called the **Old Regime** (in French, *ancien régime*): society and government in France before 1789.",
        },
        {
          type: "table",
          headers: ["Estate", "Who belonged", "Did they pay taxes to the state?"],
          rows: [
            ["First Estate", "Clergy (church officials)", "No, they were exempt"],
            ["Second Estate", "Nobility", "No, they were exempt, and they collected feudal dues from peasants"],
            ["Third Estate", "Big businessmen, merchants, lawyers, court officials, peasants, artisans, landless labourers, servants", "Yes, they carried the whole burden"],
          ],
        },
        {
          type: "list",
          items: [
            "**Tithe**: a tax paid to the Church, one-tenth of the farm produce.",
            "**Taille**: a direct tax paid to the state, only by the Third Estate.",
            "**Indirect taxes**: taxes on everyday goods such as salt and tobacco.",
            "Peasants were about 90% of the people, but only a few of them owned land. About 60% of the land belonged to nobles, the Church and rich members of the Third Estate.",
          ],
        },
        {
          type: "text",
          md: "**Subsistence crisis**: a situation in which the basic means of living (food) fall short. France's population grew from about 23 million in 1715 to 28 million in 1789. Grain could not keep up, so the price of bread rose fast. Wages did not rise as fast, so the gap between rich and poor grew.\n\nA new **middle class** of traders, lawyers and officials had money and education. They believed a person's place in society should depend on merit, not birth. They read **philosophers** such as **John Locke**, who argued against the divine and absolute right of kings; **Jean-Jacques Rousseau**, who wrote *The Social Contract* about government based on an agreement between people and their representatives; and **Montesquieu**, who wrote *The Spirit of the Laws* and proposed dividing power between the legislature, the executive and the judiciary.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which group paid the **taille**?",
              options: ["The clergy", "The nobility", "The Third Estate", "All three estates equally"],
              answer: 2,
              explain: "The clergy and nobles were exempt. Only the Third Estate paid the taille, which is why it felt so unfair.",
            },
          ],
        },
        {
          type: "heading",
          text: "From the Estates General to the Bastille",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**5 May 1789**: Louis XVI calls the **Estates General**, a political body of all three estates, to approve new taxes. It had last met in 1614.",
            "Each estate had one vote. The Third Estate demanded that each member get one vote. The king refused, and Third Estate members walked out.",
            "**20 June 1789**: in an indoor tennis court at Versailles they declare themselves the **National Assembly** and swear not to leave until France has a constitution (the **Tennis Court Oath**). Leaders: **Mirabeau** and **Abbé Sieyès**.",
            "**14 July 1789**: an angry crowd in Paris storms the **Bastille**, a fortress-prison seen as a symbol of the king's power.",
          ],
        },
        {
          type: "example",
          title: "Reading a cause-and-effect chain",
          problem: "A question asks: \"Why did the Third Estate walk out of the Estates General?\" How do you build a full answer?",
          steps: [
            "Start with the trigger: the king called the Estates General to pass **new taxes**.",
            "Name the rule they objected to: voting was **one vote per estate**, so the two privileged estates could always outvote the Third (2 to 1).",
            "Name their demand: **one vote per member**, since the Third Estate had the most members.",
            "Close with the result: the king refused, they walked out and formed the **National Assembly** on 20 June 1789.",
          ],
          answer: "They walked out because voting by estate let the clergy and nobles outvote them, and the king rejected their demand of one vote per member. This led to the National Assembly and the Tennis Court Oath.",
        },
        {
          type: "mistake",
          wrong: "The French Revolution started because the poor peasants alone rose against the king.",
          right: "Many groups were angry. The educated middle class gave the ideas and leadership; peasants, artisans and the urban poor gave the mass anger.",
          why: "Pictures of hungry crowds make it feel like a revolt of the poor only. But the people who wrote pamphlets, led the National Assembly and drafted the constitution were mostly lawyers and other middle-class members of the Third Estate.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the events of 1789 in the right order.",
            items: [
              "Louis XVI calls the Estates General",
              "Third Estate walks out over voting rules",
              "Tennis Court Oath: National Assembly formed",
              "Storming of the Bastille",
            ],
            explain: "May 1789 → walk-out → 20 June (Tennis Court Oath) → 14 July (Bastille). Each step follows from the one before: the voting quarrel caused the walk-out, and the king's troops near Paris helped spark the attack on the Bastille.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Describe the circumstances leading to the outbreak of revolutionary protest in France\" is a common 5-mark question. Give **five separate points**: empty treasury, unfair taxes and privileges, subsistence crisis, rise of the middle class and new ideas, and the voting dispute at the Estates General. One long paragraph on taxes alone earns only part marks.",
        },
        {
          type: "keypoints",
          items: [
            "The Old Regime split society into three estates; only the Third Estate paid taxes to the state.",
            "Tithe went to the Church; taille went to the state.",
            "A growing population and costly bread caused a subsistence crisis.",
            "Locke, Rousseau and Montesquieu gave the middle class ideas of equality and divided power.",
            "5 May 1789 Estates General → 20 June Tennis Court Oath → 14 July fall of the Bastille.",
          ],
        },
      ],
      flashcards: [
        { front: "Old Regime (ancien régime)", back: "Society and government in France before 1789, with three estates and an absolute king." },
        { front: "Tithe", back: "A tax paid to the Church: one-tenth of the farm produce." },
        { front: "Taille", back: "A direct tax paid to the state, only by the Third Estate." },
        { front: "Subsistence crisis", back: "When the basic means of living, mainly food, fall short; in France, bread became too costly." },
        { front: "Tennis Court Oath (20 June 1789)", back: "The Third Estate, as the National Assembly, swore not to break up until France had a constitution." },
        { front: "Montesquieu's main idea", back: "Divide power between the legislature, the executive and the judiciary (*The Spirit of the Laws*)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Why did Louis XVI call the Estates General in May 1789?",
          options: ["To abolish the monarchy", "To approve proposals for new taxes", "To declare war on Austria", "To free the slaves in the colonies"],
          answer: 1,
          explain: "The treasury was empty, and the king needed the Estates General to pass new taxes.",
        },
        {
          kind: "truefalse",
          q: "The clergy and the nobility were exempt from paying taxes to the state.",
          answer: true,
          explain: "These privileges by birth were a main cause of anger in the Third Estate.",
        },
        {
          kind: "fill",
          q: "The philosopher who wrote *The Social Contract* was ___.",
          answer: ["Rousseau", "Jean-Jacques Rousseau", "Jean Jacques Rousseau"],
          explain: "Rousseau proposed a government based on a social contract between people and their representatives.",
        },
        {
          kind: "order",
          q: "Arrange in the order they happened.",
          items: ["Louis XVI becomes king", "Estates General meets", "Tennis Court Oath", "Fall of the Bastille"],
          explain: "1774 → 5 May 1789 → 20 June 1789 → 14 July 1789.",
        },
        {
          kind: "multi",
          q: "Which of these were causes of the French Revolution? (Choose all that apply.)",
          options: ["Rising bread prices", "Tax privileges of the clergy and nobles", "New ideas of philosophers", "The rule of Napoleon"],
          answers: [0, 1, 2],
          explain: "Napoleon came to power only after 1799, so his rule was a result, not a cause.",
          difficulty: 2,
          hint: "Check the dates: what happened before 1789?",
        },
        {
          kind: "mcq",
          q: "The Third Estate objected to voting at the Estates General because:",
          options: [
            "Women were not allowed to vote",
            "Each estate had one vote, so the two privileged estates could outvote them",
            "The king wanted to vote himself",
            "Voting was in Latin",
          ],
          answer: 1,
          explain: "With one vote per estate, clergy plus nobles always won 2 to 1. The Third Estate wanted one vote per member.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Who led the National Assembly at the start of the Revolution?",
          options: ["Robespierre and Napoleon", "Mirabeau and Abbé Sieyès", "Louis XVI and Marie Antoinette", "Locke and Rousseau"],
          answer: 1,
          explain: "Mirabeau, a noble, and Abbé Sieyès, a priest, led the Assembly. Robespierre became important later, in the Jacobin period.",
        },
      ],
    },
    {
      slug: "c9-fr-monarchy-to-republic",
      title: "From Constitutional Monarchy to Republic",
      summary: "The end of feudal privileges, the Constitution of 1791, the Jacobins, the Reign of Terror, the Directory and the rise of Napoleon.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "After the fall of the Bastille, rumours spread in the villages that nobles had hired gangs to destroy the ripe crops. In fear, peasants attacked manor houses and burned records of their dues. This panic is called the **Great Fear**.\n\nOn the night of **4 August 1789** the Assembly passed a decree ending the **feudal system** of obligations and taxes. The clergy lost their privileges, **tithes** were abolished and Church lands were taken over by the state.",
        },
        {
          type: "heading",
          text: "The Constitution of 1791",
        },
        {
          type: "text",
          md: "In 1791 the Assembly finished a constitution. France became a **constitutional monarchy**: a king still existed, but his powers were limited by a written constitution and shared out among separate bodies.\n\nThe constitution began with the **Declaration of the Rights of Man and Citizen** (adopted in August 1789). It said rights such as life, freedom of speech and opinion, and equality before law belong to every person by birth (these are called **natural and inalienable rights**: they cannot be taken away).",
        },
        {
          type: "table",
          headers: ["Who", "Could they vote?"],
          rows: [
            ["**Active citizens**: men above 25 who paid taxes equal to at least 3 days of a labourer's wage", "Yes, they could vote for electors"],
            ["**Passive citizens**: the remaining men and all women", "No"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "Under the Constitution of 1791, every adult French man and woman could vote.",
              answer: false,
              explain: "Only active citizens (men over 25 who paid a minimum tax) could vote. Women and poorer men were passive citizens.",
            },
          ],
        },
        {
          type: "heading",
          text: "France becomes a republic",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**April 1792**: the Assembly declares war on **Prussia and Austria**. Volunteers from Marseilles sing a song that becomes the French national anthem, the **Marseillaise**.",
            "The **Jacobin club**, led by **Maximilian Robespierre**, wants more rights for the poor. Many members wear long striped trousers and are called **sans-culottes** (\"those without knee breeches\").",
            "**10 August 1792**: Jacobins storm the Palace of the **Tuileries** and hold the king hostage. New elections let all men aged 21 and above vote. The new assembly is called the **Convention**.",
            "**21 September 1792**: the Convention abolishes the monarchy and declares France a **republic**: a form of government where people elect the government, with no hereditary king.",
            "**21 January 1793**: Louis XVI is executed for treason; Queen Marie Antoinette is executed soon after.",
          ],
        },
        {
          type: "text",
          md: "**Reign of Terror (1793–1794)**: Robespierre ruled with severe control. People he saw as enemies of the republic were arrested and, if found guilty, beheaded by the **guillotine**, a device named after Dr Guillotin. Robespierre also fixed maximum wages and prices and rationed bread. In **July 1794** he was himself convicted and guillotined.\n\nNext came the **Directory**, an executive of five members, with two elected councils. Quarrels between them made the government weak. This opened the way for the military general **Napoleon Bonaparte**, who crowned himself **Emperor** in 1804. He was finally defeated at **Waterloo in 1815**.",
        },
        {
          type: "example",
          title: "Comparing two stages",
          problem: "How was the right to vote different in 1791 and in late 1792?",
          steps: [
            "Find 1791: only **active citizens** voted, men over 25 who paid a minimum tax.",
            "Find late 1792: after the Jacobin rising, all men **21 and above** could vote, whatever their wealth.",
            "Note what stayed the same: **women** still could not vote in either stage.",
            "State the trend: voting widened from rich men to all men, but not to women.",
          ],
          answer: "In 1791 voting was limited by age (25+) and tax; in 1792 every man aged 21+ could vote. Women were left out both times.",
        },
        {
          type: "mistake",
          wrong: "France became a republic on 14 July 1789, when the Bastille fell.",
          right: "France became a constitutional monarchy in 1791 and a republic only on 21 September 1792.",
          why: "14 July is France's national day, so it feels like the moment the king fell. In fact Louis XVI stayed king, with limited powers, for three more years.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each term to its meaning.",
            pairs: [
              ["Sans-culottes", "Poorer Jacobin supporters without knee breeches"],
              ["Convention", "Assembly elected in 1792 by all men aged 21+"],
              ["Directory", "Executive of five members after Robespierre"],
              ["Guillotine", "Beheading device used in the Reign of Terror"],
            ],
            explain: "These four terms trace the radical stage: sans-culottes backed the Jacobins, the Convention made France a republic, the Terror used the guillotine, and the Directory came after Robespierre fell.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Students often mix up the **Convention** and the **Directory**. Remember the order: National Assembly (1789) → constitutional monarchy (1791) → Convention and republic (1792) → Directory (after Robespierre) → Napoleon. Questions on the Reign of Terror want both what Robespierre did (arrests, guillotine, price control, rationing) and how it ended (his execution in 1794).",
        },
        {
          type: "keypoints",
          items: [
            "4 August 1789: feudal dues, tithes and clergy privileges were abolished.",
            "1791: constitutional monarchy; only active citizens could vote; the Declaration of Rights of Man came first.",
            "21 September 1792: France became a republic; Louis XVI was executed in January 1793.",
            "1793–94: Reign of Terror under Robespierre, ended by his execution in July 1794.",
            "Directory → Napoleon, Emperor in 1804, defeated at Waterloo in 1815.",
          ],
        },
      ],
      flashcards: [
        { front: "Constitutional monarchy", back: "A system where a king exists but his powers are limited by a written constitution." },
        { front: "Active citizens (1791)", back: "Men above 25 who paid taxes equal to at least 3 days of a labourer's wage; only they could vote." },
        { front: "Jacobins", back: "A political club led by Robespierre, named after the old convent of St Jacob in Paris." },
        { front: "France declared a republic", back: "21 September 1792, by the Convention." },
        { front: "Reign of Terror", back: "1793–1794: Robespierre's rule of severe control, arrests and executions by guillotine." },
        { front: "Napoleon becomes Emperor", back: "1804. Defeated at Waterloo in 1815." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which document did the Constitution of 1791 begin with?",
          options: ["The Social Contract", "The Declaration of the Rights of Man and Citizen", "The Spirit of the Laws", "The Napoleonic Code"],
          answer: 1,
          explain: "The Declaration listed the natural rights of every person. The other two books were written by philosophers before the Revolution.",
        },
        {
          kind: "order",
          q: "Put these in the correct order.",
          items: ["Constitution of 1791", "France declared a republic", "Execution of Louis XVI", "Robespierre guillotined", "Napoleon crowns himself Emperor"],
          explain: "1791 → September 1792 → January 1793 → July 1794 → 1804.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The period of severe control in 1793–94 under Robespierre is called the Reign of ___.",
          answer: ["Terror"],
          explain: "It is called the Reign of Terror because of mass arrests and executions.",
        },
        {
          kind: "truefalse",
          q: "Under the Directory, France was ruled by an executive of five members.",
          answer: true,
          explain: "The Directory had five members and two elected councils. It was unstable, which helped Napoleon rise.",
        },
        {
          kind: "mcq",
          q: "Which countries did France declare war on in April 1792?",
          options: ["Britain and Spain", "Prussia and Austria", "Russia and Italy", "Britain and the USA"],
          answer: 1,
          explain: "The war against Prussia and Austria strained the economy and helped the radical Jacobins gain power.",
        },
        {
          kind: "multi",
          q: "Which measures did Robespierre's government take? (Choose all that apply.)",
          options: ["Fixed maximum wages and prices", "Rationed meat and bread", "Gave women the right to vote", "Executed people seen as enemies of the republic"],
          answers: [0, 1, 3],
          explain: "Robespierre controlled prices and food and used the guillotine. He did not give women the vote; in fact the Jacobins closed women's clubs.",
          difficulty: 2,
          hint: "One option is about women: did the Jacobins support women's political rights?",
        },
        {
          kind: "mcq",
          q: "Who were the sans-culottes?",
          options: ["Rich nobles who left France", "Poorer Jacobin supporters such as shopkeepers and artisans", "Priests loyal to the Pope", "Soldiers of Austria"],
          answer: 1,
          explain: "\"Sans-culottes\" means \"without knee breeches\"; the name marked them off from nobles, who wore knee breeches.",
        },
      ],
    },
    {
      slug: "c9-fr-women-slavery-legacy",
      title: "Women, Slavery and the Legacy of the Revolution",
      summary: "How women fought for rights, how slavery was abolished and brought back, changes in daily life, and the Revolution's influence in Europe and India.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "text",
          md: "Women took an active part in the Revolution from the start. Most women of the Third Estate worked for a living, as seamstresses, washerwomen, or sellers of flowers and vegetables in the market. They hoped the Revolution would make life better for them too.\n\nWomen started their own political clubs and newspapers. The most famous was the **Society of Revolutionary and Republican Women**. Their main demand was that women get the **same political rights** as men: the right to vote, to be elected and to hold office.",
        },
        {
          type: "list",
          items: [
            "Gains: state schools and compulsory schooling for girls, marriage made a free contract registered under civil law, and the right to divorce.",
            "Limits: the Constitution of 1791 made women **passive citizens**.",
            "**Olympe de Gouges**, a well-known activist, wrote a declaration of the rights of woman and protested against the Jacobin government. She was executed in 1793.",
            "In 1793 the Jacobin government closed women's clubs.",
            "Women in France finally won the right to vote in **1946**.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "In which year did women in France finally win the right to vote?",
              answer: 1946,
              explain: "More than 150 years after 1789, women in France won the vote in 1946.",
            },
          ],
        },
        {
          type: "heading",
          text: "The abolition of slavery",
        },
        {
          type: "text",
          md: "French merchants traded in enslaved Africans. Ships carried them across the Atlantic to the Caribbean colonies, where they worked on sugar, coffee and indigo plantations. Port cities such as Bordeaux and Nantes grew rich on this **slave trade**.\n\nThe National Assembly did not end slavery, fearing opposition from businessmen. In **1794** the Convention freed all slaves in the French colonies. But about ten years later **Napoleon brought slavery back**. It was finally abolished in French colonies in **1848**.",
        },
        {
          type: "example",
          title: "Judging a claim with dates",
          problem: "A classmate says: \"The French Revolution ended slavery for good in 1794.\" Is this fully correct?",
          steps: [
            "Check the first part: in 1794 the Convention did free slaves in the French colonies. Correct.",
            "Check \"for good\": Napoleon reintroduced slavery about ten years later. Not correct.",
            "Find the final date: slavery was abolished in French colonies only in 1848.",
          ],
          answer: "Only partly correct. Slavery was abolished in 1794, brought back under Napoleon, and abolished for good in 1848.",
        },
        {
          type: "mistake",
          wrong: "The Revolution gave equal rights to everyone, including women and slaves, from 1789.",
          right: "The rights of 1789 were first given mainly to men with property. Women had to struggle for over 150 years for the vote, and slavery ended for good only in 1848.",
          why: "The Declaration of the Rights of Man speaks of rights for all, so it is easy to assume everyone got them at once. The word **\"Man\"** in its title is the clue: the rights were not extended to women.",
        },
        {
          type: "heading",
          text: "Everyday life and legacy",
        },
        {
          type: "text",
          md: "In 1789 **censorship** (control of what could be printed or performed) was abolished. Newspapers, pamphlets and plays spread revolutionary ideas widely, even to people who could not read, through songs, festivals and pictures.\n\nIdeas of **liberty, equality and democratic rights** were the most important legacy. They spread across Europe in the 19th century, helping end feudal systems. In India, **Tipu Sultan** and **Raja Rammohan Roy** were among those inspired by the ideas of the Revolution.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Did women gain political rights in 1791?",
            emoji: "🗳️",
            options: ["Yes, women got the vote with men", "No, women were passive citizens", "Only noble women could vote"],
            answer: 1,
            trap: 0,
            explain: "The Constitution of 1791 made all women passive citizens. Women's clubs kept demanding the vote, but it came only in 1946.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board note",
          md: "CBSE asks about women's struggles and the abolition of slavery as separate short answers: write dates (1794, 1848, 1946) and a name (Olympe de Gouges). **Karnataka** students meet the French Revolution inside the chapter \"The Age of Revolutions\"; their textbook focuses on the causes, main events and results, so learn the results as a list: end of feudalism, end of absolute monarchy, rights of citizens, spread of liberty and nationalism.",
        },
        {
          type: "keypoints",
          items: [
            "Women formed clubs like the Society of Revolutionary and Republican Women and demanded political rights.",
            "Olympe de Gouges was executed in 1793; women's clubs were closed; French women won the vote in 1946.",
            "Slavery: abolished 1794, reintroduced by Napoleon, abolished for good in 1848.",
            "Censorship was abolished in 1789, and ideas spread through print, songs and festivals.",
            "Liberty, equality and democratic rights were the lasting legacy, inspiring people across Europe and in India.",
          ],
        },
      ],
      flashcards: [
        { front: "Society of Revolutionary and Republican Women", back: "The best-known women's club of the Revolution; it demanded equal political rights for women." },
        { front: "Olympe de Gouges", back: "Activist who demanded women's rights and opposed the Jacobins; executed in 1793." },
        { front: "French women get the vote", back: "1946." },
        { front: "Slavery in French colonies", back: "Abolished 1794 → reintroduced by Napoleon → abolished for good in 1848." },
        { front: "Censorship", back: "Government control over what is printed, written or performed; abolished in France in 1789." },
        { front: "Indians inspired by the Revolution", back: "Tipu Sultan and Raja Rammohan Roy." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who brought back slavery in the French colonies?",
          options: ["Robespierre", "Louis XVI", "Napoleon", "The Directory in 1848"],
          answer: 2,
          explain: "The Convention freed slaves in 1794; Napoleon reintroduced slavery about ten years later.",
        },
        {
          kind: "fill",
          q: "Slavery was finally abolished in French colonies in the year ___.",
          answer: ["1848"],
          explain: "1848 is the final date. 1794 was the first abolition, later reversed.",
        },
        {
          kind: "truefalse",
          q: "The Jacobin government supported women's clubs and gave them the vote.",
          answer: false,
          explain: "In 1793 the Jacobin government closed women's clubs.",
        },
        {
          kind: "multi",
          q: "Which changes improved women's lives during the Revolution? (Choose all that apply.)",
          options: ["Schooling made compulsory for girls", "Right to divorce", "Right to vote in 1791", "Marriage as a free contract under civil law"],
          answers: [0, 1, 3],
          explain: "Women gained schooling, divorce and civil marriage, but not the vote; that came in 1946.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which French port cities grew rich from the slave trade?",
          options: ["Paris and Lyon", "Bordeaux and Nantes", "Marseilles and Versailles", "Calais and Lille"],
          answer: 1,
          explain: "Bordeaux and Nantes on the Atlantic coast were the main slave-trading ports.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange in time order.",
          items: ["Censorship abolished", "Convention frees slaves", "Napoleon reintroduces slavery", "Slavery finally abolished", "French women win the vote"],
          explain: "1789 → 1794 → under Napoleon, about ten years later → 1848 → 1946.",
          difficulty: 3,
          hint: "Slavery was ended, then brought back, then ended again.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Socialism in Europe and the Russian Revolution (CBSE)               */
/* ------------------------------------------------------------------ */
const russianRevolution: Topic = {
  slug: "c9-russian-revolution",
  title: "Socialism in Europe and the Russian Revolution",
  icon: "🚩",
  description: "Liberals, radicals and socialists in Europe, the revolutions of 1905 and 1917 in Russia, and the making of the Soviet Union.",
  lessons: [
    {
      slug: "c9-ru-age-of-social-change",
      title: "The Age of Social Change and Socialism",
      summary: "How liberals, radicals and conservatives differed, how industry changed society, and what socialists like Owen, Blanc and Marx wanted.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "The French Revolution opened up a big question across Europe: how should society be run, and who should have power? In the 19th century people answered in different ways. Three groups stood out: **liberals**, **radicals** and **conservatives**.",
        },
        {
          type: "table",
          headers: ["Group", "What they wanted", "Their limits"],
          rows: [
            ["**Liberals**", "A nation that tolerates all religions; an elected parliament; an independent judiciary; no uncontrolled power for kings", "Did not want every adult to vote; only men with property, and not women"],
            ["**Radicals**", "Government by the majority of the people; votes for women; an end to the privileges of rich landowners and factory owners", "Not against private property, only against too much of it in a few hands"],
            ["**Conservatives**", "Respect for the past; change only slowly", "Opposed both liberals and radicals"],
          ],
        },
        {
          type: "text",
          md: "At the same time, **industrialisation** brought men, women and children into factories. Working hours were long and wages were poor. Many people lost work when demand fell. Cities grew quickly, often with bad housing and sanitation.",
        },
        {
          type: "heading",
          text: "What is socialism?",
        },
        {
          type: "text",
          md: "**Socialism** is the idea that society should control property and the means of production (land, factories, machines), instead of a few private owners. Socialists saw **private property** as the root of social problems: owners cared only about profit, not about the workers who produced it.",
        },
        {
          type: "table",
          headers: ["Thinker", "Country", "Main idea"],
          rows: [
            ["**Robert Owen** (1771–1858)", "England", "Built a cooperative community called **New Harmony** in Indiana, USA"],
            ["**Louis Blanc** (1813–1882)", "France", "Government should encourage **cooperatives** to replace capitalist businesses"],
            ["**Karl Marx** (1818–1883) and **Friedrich Engels** (1820–1895)", "Germany", "Workers must overthrow **capitalism** and build a **communist** society where all property is shared"],
          ],
        },
        {
          type: "text",
          md: "**Cooperatives** are groups of people who produce goods together and share the profit by the work each one does. **Capitalism** is a system where private owners (capitalists) own the factories and keep the profit made by workers. Marx argued that as long as capitalists kept the profit, workers would stay poor.\n\nBy the 1870s socialist ideas had spread across Europe. Socialists formed an international body called the **Second International**. Workers formed associations, and parties such as the **Social Democratic Party (SPD)** in Germany grew. A **Labour Party** in Britain and a **Socialist Party** in France were formed by 1905.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which group wanted votes for women and government by the majority?",
              options: ["Liberals", "Radicals", "Conservatives", "Nobles"],
              answer: 1,
              explain: "Radicals supported women's suffrage. Liberals wanted only property-owning men to vote.",
            },
          ],
        },
        {
          type: "example",
          title: "Placing an opinion in the right group",
          problem: "A 19th-century speaker says: \"We need an elected parliament and courts free of the king. But only men who own property should vote.\" Is this person a liberal, radical or conservative?",
          steps: [
            "Elected parliament and independent courts: both liberals and radicals wanted these. So not a conservative.",
            "Vote only for property-owning men: radicals wanted the majority, including women, to vote. So not a radical.",
            "Match with the table: limited voting with a parliament is the **liberal** view.",
          ],
          answer: "A liberal: in favour of a parliament and rights, but against universal adult franchise.",
        },
        {
          type: "mistake",
          wrong: "Liberals in 19th-century Europe wanted every adult to have the right to vote.",
          right: "Liberals wanted only men with property to vote. It was the radicals who supported votes for the majority, including women.",
          why: "Today the word \"liberal\" sounds like \"giving freedom to everyone\", so students assume it meant votes for all. In the 19th century, liberals defended property and did not trust the poor or women with the vote.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Who held each view: liberals, radicals or conservatives?",
            groups: ["Liberals", "Radicals", "Conservatives"],
            items: [
              { text: "Only men with property should vote", group: 0, hint: "This group wanted a parliament but limited voting." },
              { text: "Women should get the vote", group: 1, hint: "Which group supported the suffragette movements?" },
              { text: "The past must be respected; change slowly", group: 2, hint: "This group feared quick change." },
              { text: "Tolerate all religions and limit kings' power", group: 0, hint: "Think of an elected parliament and religious tolerance." },
              { text: "End the privileges of rich factory owners", group: 1, hint: "This group disliked wealth in a few hands." },
              { text: "Oppose both liberals and radicals", group: 2, hint: "Which group was against change itself?" },
            ],
            explain: "Liberals wanted rights and a parliament but limited voting. Radicals wanted majority rule and votes for women. Conservatives wanted slow change and respect for tradition.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A 3-mark question often asks you to **compare** liberals and radicals. Make a two-column answer: voting rights, women, and attitude to property. Writing about only one group loses marks even if the facts are right.",
        },
        {
          type: "keypoints",
          items: [
            "Liberals: parliament, rights, religious tolerance, but vote only for men with property.",
            "Radicals: majority rule, votes for women, against concentrated wealth.",
            "Conservatives: respect for the past, slow change.",
            "Socialists opposed private property; Owen and Blanc backed cooperatives; Marx and Engels called for workers to overthrow capitalism.",
            "By 1905 there were socialist or labour parties in Germany, Britain and France, linked through the Second International.",
          ],
        },
      ],
      flashcards: [
        { front: "Socialism", back: "The idea that society, not private owners, should control property and the means of production." },
        { front: "Cooperative", back: "A group of people who produce goods together and share the profit by work done." },
        { front: "Robert Owen", back: "English manufacturer (1771–1858) who set up the cooperative community New Harmony in Indiana, USA." },
        { front: "Karl Marx's main argument", back: "Capitalists keep the profit made by workers; workers must overthrow capitalism to build a communist society." },
        { front: "Radicals vs liberals on voting", back: "Radicals: vote for the majority, including women. Liberals: vote only for men with property." },
        { front: "Second International", back: "An international body formed by socialists to spread their ideas across Europe." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Louis Blanc wanted the government to:",
          options: ["Abolish all factories", "Encourage cooperatives to replace capitalist enterprises", "Give all power to the king", "Ban trade unions"],
          answer: 1,
          explain: "Blanc, in France, believed cooperatives backed by the government could replace capitalist businesses.",
        },
        {
          kind: "truefalse",
          q: "Radicals were completely against private property.",
          answer: false,
          explain: "Radicals did not oppose private property itself; they opposed its concentration in the hands of a few.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Robert Owen founded a cooperative community called New ___ in Indiana, USA.",
          answer: ["Harmony"],
          explain: "New Harmony was Owen's experiment in shared work and living.",
        },
        {
          kind: "mcq",
          q: "Who wrote with Karl Marx and shared his ideas?",
          options: ["Louis Blanc", "Robert Owen", "Friedrich Engels", "Rousseau"],
          answer: 2,
          explain: "Friedrich Engels worked closely with Marx.",
        },
        {
          kind: "multi",
          q: "Which problems did industrial society create for workers? (Choose all that apply.)",
          options: ["Long working hours", "Poor wages", "Unemployment when demand fell", "Free housing for all workers"],
          answers: [0, 1, 2],
          explain: "Workers faced long hours, low wages and job loss; housing in fast-growing towns was usually poor, not free.",
        },
        {
          kind: "mcq",
          q: "Which group would most likely say, \"Change must come slowly and the past must be respected\"?",
          options: ["Liberals", "Radicals", "Conservatives", "Socialists"],
          answer: 2,
          explain: "Conservatives accepted some change after the French Revolution, but only slowly and with respect for tradition.",
        },
      ],
    },
    {
      slug: "c9-ru-revolutions-1905-1917",
      title: "Russia in Revolution: 1905 and 1917",
      summary: "The Russian Empire under the Tsar, Bloody Sunday and the 1905 Revolution, the First World War, and the February and October Revolutions of 1917.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "In 1914 **Tsar Nicholas II** ruled a huge empire stretching from present-day Finland, the Baltic lands and parts of Poland across to the Pacific Ocean. The Tsar was an **autocrat**: a ruler with unlimited power, not answerable to any parliament.\n\nAbout **85%** of the people earned their living from farming. Most peasants were poor. They pooled their land in a **commune** (*mir*), which divided it among families. Factory workers in cities like St Petersburg and Moscow worked long hours for low pay.",
        },
        {
          type: "text",
          md: "All political parties were illegal before 1905. Even so, socialists who followed Marx's ideas founded the **Russian Social Democratic Workers Party** in **1898**. It later split into two groups: the **Bolsheviks**, led by **Vladimir Lenin**, who wanted a disciplined party to make a revolution, and the **Mensheviks**, who wanted an open party like those in Germany and France.",
        },
        {
          type: "heading",
          text: "The 1905 Revolution",
        },
        {
          type: "text",
          md: "In 1904 prices rose fast and real wages fell by about 20%. Workers went on strike. In January 1905 a procession of workers led by **Father Gapon** marched to the **Winter Palace** to give a petition to the Tsar. Police and Cossacks fired on them. Over 100 workers were killed. This day is called **Bloody Sunday**.\n\nStrikes spread across the country. The Tsar agreed to an elected advisory parliament called the **Duma**. But he soon dismissed the first Duma and later changed voting laws to fill it with conservatives.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What was the Duma?",
              options: ["The Tsar's secret police", "An elected consultative parliament", "A peasant commune", "The Bolshevik newspaper"],
              answer: 1,
              explain: "The Duma was the parliament the Tsar allowed after 1905, though he kept limiting its powers.",
            },
          ],
        },
        {
          type: "heading",
          text: "War and the two revolutions of 1917",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**1914–1916**: Russia fights Germany and Austria in the First World War and loses badly. By 1917 there are over 7 million casualties. Food and fuel run short; St Petersburg is renamed **Petrograd**.",
            "**February 1917**: in Petrograd, a factory lockout leads to strikes; women lead the way in many factories. Soldiers join the workers and form the **Petrograd Soviet** (council of workers and soldiers).",
            "**2 March 1917**: the Tsar gives up his throne (**abdicates**). Soviet and Duma leaders form a **Provisional Government**.",
            "**April 1917**: Lenin returns from exile and puts forward the **April Theses**: end the war, give land to peasants, and nationalise banks.",
            "**24–25 October 1917**: the Bolsheviks, through a Military Revolutionary Committee led by **Leon Trotskii**, take over Petrograd. The Provisional Government under **Kerenskii** falls.",
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Two calendars",
          md: "Russia used the old **Julian calendar** until 1 February 1918; the rest of Europe used the **Gregorian calendar**, about 13 days ahead. So the \"February\" Revolution happened on 12 March by our calendar, and the \"October\" Revolution on **7 November 1917**.",
        },
        {
          type: "example",
          title: "Explaining why the Tsar fell",
          problem: "Give three reasons why the Tsarist government collapsed in February 1917.",
          steps: [
            "Look at the war: huge defeats and over 7 million casualties turned soldiers and their families against the Tsar.",
            "Look at daily life: shortages of bread and fuel in cities, and a harsh winter, drove workers to strike.",
            "Look at politics: the Tsar kept dismissing the Duma, so even moderate leaders lost faith in him.",
            "Link them: when soldiers refused to fire on strikers and joined them, the Tsar had no support left.",
          ],
          answer: "War losses, food and fuel shortages, and the Tsar's refusal to share power with the Duma; when the army joined the workers, he had to abdicate.",
        },
        {
          type: "mistake",
          wrong: "Lenin and the Bolsheviks overthrew the Tsar in February 1917.",
          right: "The Tsar was overthrown in **February 1917** by striking workers and soldiers in Petrograd. The Bolsheviks seized power later, in **October 1917**, from the Provisional Government.",
          why: "Both events are called \"the Russian Revolution\", so they blur into one. Lenin was actually in exile in February and returned only in April.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange these events from first to last.",
            items: [
              "Bloody Sunday",
              "Russia enters the First World War",
              "The Tsar abdicates",
              "Lenin's April Theses",
              "Bolsheviks seize power in Petrograd",
            ],
            explain: "1905 → 1914 → March 1917 (February Revolution) → April 1917 → October 1917. The Tsar fell first; the Bolsheviks took power eight months later.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When asked to compare the February and October revolutions, give for each: **who** led it (workers and soldiers vs the Bolshevik Party), **against whom** (the Tsar vs the Provisional Government), and **result** (Provisional Government vs Bolshevik rule). The three April Theses demands are also a favourite 3-mark question.",
        },
        {
          type: "keypoints",
          items: [
            "Tsar Nicholas II was an autocrat; about 85% of Russians were farmers.",
            "Bolsheviks (Lenin) and Mensheviks split from the Russian Social Democratic Workers Party, founded in 1898.",
            "Bloody Sunday (1905) led to strikes and the Duma.",
            "February 1917: workers and soldiers forced the Tsar to abdicate; a Provisional Government took over.",
            "October 1917 (7 November by our calendar): the Bolsheviks seized power.",
          ],
        },
      ],
      flashcards: [
        { front: "Autocrat", back: "A ruler with unlimited power who is not answerable to anyone, like the Tsar." },
        { front: "Bloody Sunday", back: "January 1905: police and Cossacks fired on workers marching to the Winter Palace with Father Gapon." },
        { front: "Duma", back: "The elected consultative parliament the Tsar allowed after 1905." },
        { front: "Soviet", back: "A council of workers and soldiers, such as the Petrograd Soviet of 1917." },
        { front: "April Theses (3 demands)", back: "End the war, transfer land to the peasants, nationalise the banks." },
        { front: "Bolsheviks vs Mensheviks", back: "Bolsheviks (Lenin): a small disciplined revolutionary party. Mensheviks: an open party like those in Germany and France." },
        { front: "Date of the October Revolution in our calendar", back: "7 November 1917." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who led the procession of workers on Bloody Sunday?",
          options: ["Lenin", "Father Gapon", "Kerenskii", "Trotskii"],
          answer: 1,
          explain: "Father Gapon led the 1905 procession to the Winter Palace.",
        },
        {
          kind: "multi",
          q: "Which were the demands of Lenin's April Theses? (Choose all that apply.)",
          options: ["End the war", "Transfer land to the peasants", "Nationalise the banks", "Bring back the Tsar"],
          answers: [0, 1, 2],
          explain: "Lenin's three demands were peace, land and nationalised banks.",
        },
        {
          kind: "truefalse",
          q: "The Provisional Government was overthrown in February 1917.",
          answer: false,
          explain: "The Provisional Government was formed after the Tsar abdicated in February; it was overthrown by the Bolsheviks in October.",
          difficulty: 2,
          hint: "The Provisional Government came into being because of the February Revolution.",
        },
        {
          kind: "fill",
          q: "The Military Revolutionary Committee that seized Petrograd in October 1917 was led by Leon ___.",
          answer: ["Trotskii", "Trotsky", "Trotski"],
          explain: "Trotskii headed the committee set up by the Petrograd Soviet.",
        },
        {
          kind: "order",
          q: "Arrange in the correct order.",
          items: ["Russian Social Democratic Workers Party founded", "Bloody Sunday", "Tsar abdicates", "October Revolution"],
          explain: "1898 → 1905 → March 1917 → October 1917.",
        },
        {
          kind: "mcq",
          q: "About what share of Russia's people earned their living from farming in the early 1900s?",
          options: ["About 25%", "About 50%", "About 85%", "Almost 100%"],
          answer: 2,
          explain: "About 85% of the empire's population lived by agriculture, a far higher share than in most of Europe.",
        },
        {
          kind: "mcq",
          q: "Why do we date the October Revolution to 7 November?",
          options: [
            "Lenin changed the date",
            "Russia then used the Julian calendar, about 13 days behind the Gregorian one",
            "The revolution lasted two weeks",
            "Newspapers printed the wrong date",
          ],
          answer: 1,
          explain: "25 October on the old Julian calendar equals 7 November on the Gregorian calendar we use.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c9-ru-soviet-union",
      title: "After October: Building the Soviet Union",
      summary: "What the Bolsheviks changed, the civil war, the USSR, planned economy and collectivisation under Stalin, and the Revolution's global impact.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "text",
          md: "Once in power, the Bolsheviks moved fast. In November 1917 most industry and banks were **nationalised**: taken over from private owners by the government. Land was declared **social property**, and peasants were allowed to seize the land of the nobility. Old titles of the aristocracy were banned.\n\nThe Bolshevik Party was renamed the **Russian Communist Party (Bolshevik)**. When the Bolsheviks failed to win a majority in elections to the **Constituent Assembly**, Lenin dismissed it in January 1918. Russia became a **one-party state**.",
        },
        {
          type: "list",
          items: [
            "**March 1918**: the Bolsheviks made peace with Germany at **Brest Litovsk**.",
            "A secret police, the **Cheka**, punished people who criticised the party.",
            "**Civil war**: the Bolsheviks (\"reds\") fought the Socialist Revolutionaries (\"greens\") and supporters of the Tsar (\"whites\").",
            "**December 1922**: the **USSR** (Union of Soviet Socialist Republics) was created from the old Russian Empire.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In the Russian Civil War, who were the \"whites\"?",
              options: ["The Bolsheviks", "Socialist Revolutionaries", "Supporters of the Tsar", "Foreign workers"],
              answer: 2,
              explain: "Reds = Bolsheviks; greens = Socialist Revolutionaries; whites = pro-Tsarists.",
            },
          ],
        },
        {
          type: "heading",
          text: "Planned economy and collectivisation",
        },
        {
          type: "text",
          md: "The Soviet state used **centralised planning**: officials decided how much the economy should produce and set targets. These plans were called **Five Year Plans**; the first ran from 1927 to 1932. Factories grew fast, but work was hard and living conditions poor.\n\nGrain supplies to the towns fell short. From 1929 **Joseph Stalin**, who led the party after Lenin, forced **collectivisation**: peasants had to give up small farms and work on large state-controlled **collective farms** (*kolkhoz*). Better-off peasants, called **kulaks**, were attacked. Many peasants resisted and were punished or deported. A severe famine followed in the early 1930s.",
        },
        {
          type: "example",
          title: "Weighing results",
          problem: "Was the Russian Revolution a success? Give one gain and one cost.",
          steps: [
            "Gain: industry grew quickly; land, banks and factories were taken from the rich; many people got basic schooling and health care.",
            "Cost: freedoms were lost in a one-party state; the Cheka punished critics; forced collectivisation brought resistance, deportations and famine.",
            "Conclude with balance: examiners reward answers that show both sides with evidence.",
          ],
          answer: "It brought rapid industrial growth and an end to landlord and noble power, but at the cost of political freedom and great suffering under collectivisation.",
        },
        {
          type: "mistake",
          wrong: "After the Revolution every peasant happily owned their own farm.",
          right: "At first peasants seized nobles' land, but from 1929 Stalin forced them into collective farms run under state control.",
          why: "The early promise of \"land to the peasants\" is easy to remember, so students stop there. Collectivisation reversed it, and many peasants resisted.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each term to its meaning.",
            pairs: [
              ["Nationalisation", "Government takes over industries and banks"],
              ["Kulaks", "Well-to-do peasants attacked under Stalin"],
              ["Collectivisation", "Small farms merged into state-controlled collective farms"],
              ["Cheka", "Bolshevik secret police"],
            ],
            explain: "These four terms show how the new state took control: of industry (nationalisation), of farming (collectivisation, attack on kulaks), and of opinion (the Cheka).",
          },
        },
        {
          type: "text",
          md: "The Revolution inspired people around the world. Communist parties were formed in many countries, and an international union of pro-Bolshevik parties, the **Comintern**, was set up. In India, many nationalists admired the Soviet experiment and wrote about it.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"What changes did the Bolsheviks bring immediately after the October Revolution?\" Give at least four: nationalisation of industry and banks, land declared social property, ban on old aristocratic titles, party renamed Communist Party, one-party state after dismissing the Constituent Assembly. Keep Stalin's collectivisation (1929 onward) separate; it was not immediate.",
        },
        {
          type: "keypoints",
          items: [
            "November 1917: industry and banks nationalised; land declared social property.",
            "The Constituent Assembly was dismissed in January 1918; Russia became a one-party state.",
            "Civil war: reds vs greens and whites; the USSR was formed in December 1922.",
            "Five Year Plans built industry; from 1929 Stalin forced collectivisation, and kulaks were attacked.",
            "The Revolution inspired communist parties worldwide through the Comintern.",
          ],
        },
      ],
      flashcards: [
        { front: "Nationalisation", back: "Government takes over ownership of industries, banks or land from private owners." },
        { front: "USSR formed", back: "December 1922, from the old Russian Empire." },
        { front: "Five Year Plans", back: "Centralised plans setting production targets; the first ran from 1927 to 1932." },
        { front: "Collectivisation", back: "From 1929, Stalin forced peasants to work on large state-controlled collective farms (kolkhoz)." },
        { front: "Kulaks", back: "Well-to-do peasants, targeted during collectivisation." },
        { front: "Comintern", back: "The international union of pro-Bolshevik socialist parties." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Why did Lenin dismiss the Constituent Assembly in January 1918?",
          options: [
            "It wanted to bring back the Tsar",
            "The Bolsheviks had not won a majority and the Assembly rejected their measures",
            "It had finished writing the constitution",
            "Germany demanded it",
          ],
          answer: 1,
          explain: "The Bolsheviks lacked a majority; the Assembly rejected their measures, so Lenin dismissed it and Russia became a one-party state.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Collectivisation of farms began immediately in November 1917.",
          answer: false,
          explain: "Collectivisation began under Stalin from 1929. In 1917 peasants were allowed to seize nobles' land.",
        },
        {
          kind: "fill",
          q: "The Bolsheviks made peace with Germany in March 1918 at ___.",
          answer: ["Brest Litovsk", "Brest-Litovsk"],
          explain: "The Treaty of Brest Litovsk took Russia out of the First World War.",
        },
        {
          kind: "order",
          q: "Arrange in time order.",
          items: ["Industry and banks nationalised", "Treaty of Brest Litovsk", "USSR formed", "Collectivisation begins"],
          explain: "November 1917 → March 1918 → December 1922 → 1929.",
        },
        {
          kind: "mcq",
          q: "In the civil war, the \"greens\" were:",
          options: ["Bolsheviks", "Socialist Revolutionaries", "Pro-Tsarists", "Foreign armies"],
          answer: 1,
          explain: "Greens were Socialist Revolutionaries; whites were pro-Tsarists; reds were Bolsheviks.",
        },
        {
          kind: "multi",
          q: "Which were costs of Soviet rule in this period? (Choose all that apply.)",
          options: ["A one-party state", "Punishment of critics by the Cheka", "Famine during collectivisation", "Return of noble titles"],
          answers: [0, 1, 2],
          explain: "Noble titles were banned, not restored. The other three show the price paid for rapid change.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Nazism and the Rise of Hitler (CBSE)                                */
/* ------------------------------------------------------------------ */
const nazism: Topic = {
  slug: "c9-nazism-rise-of-hitler",
  title: "Nazism and the Rise of Hitler",
  icon: "📜",
  description: "How the Weimar Republic failed, how Hitler destroyed democracy, and how the Nazi racial state led to war and the Holocaust.",
  lessons: [
    {
      slug: "c9-nz-weimar-and-hitlers-rise",
      title: "The Weimar Republic and Hitler's Rise to Power",
      summary: "Germany after the First World War, the Treaty of Versailles, economic crises, the weaknesses of the Weimar constitution and how Hitler took power in 1933.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "In the **First World War** (1914–1918), Germany and Austria fought the **Allies**: England, France and Russia (later joined by the USA). Germany was defeated in November 1918, and the emperor gave up the throne.\n\nA national assembly met at **Weimar** and wrote a democratic constitution. The new state was called the **Weimar Republic**. All adults, including women, could vote for the parliament (the **Reichstag**).",
        },
        {
          type: "heading",
          text: "A harsh peace",
        },
        {
          type: "text",
          md: "The **Treaty of Versailles** (1919) punished Germany heavily. Many Germans blamed not the old emperor but the new republic for accepting it.",
        },
        {
          type: "list",
          items: [
            "Germany lost its overseas colonies, a tenth of its people and 13% of its territory.",
            "It lost 75% of its iron and 26% of its coal to France, Poland, Denmark and Lithuania.",
            "Its army was cut down, and the **War Guilt Clause** made it responsible for the war and all damage.",
            "It had to pay compensation of £6 billion, and the Allies occupied the resource-rich **Rhineland** in the 1920s.",
          ],
        },
        {
          type: "text",
          md: "Supporters of the republic, mainly Socialists, Catholics and Democrats, were mocked as the **\"November criminals\"**. In 1923 Germany could not pay, so France occupied the **Ruhr**, its main coal area. The government printed money in huge amounts, and prices shot up. This is **hyperinflation**: a situation where prices rise phenomenally high and money loses almost all its value.\n\nThen in 1929 the **Wall Street Exchange** in the USA crashed, starting the **Great Depression**. By 1932 German industrial production had fallen to 40% of the 1929 level, and about 6 million people were unemployed.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who were called the \"November criminals\"?",
              options: ["Nazi Storm Troopers", "Supporters of the Weimar Republic", "French soldiers in the Ruhr", "Communists in Russia"],
              answer: 1,
              explain: "Socialists, Catholics and Democrats who backed the republic were blamed for accepting defeat and the Treaty of Versailles.",
            },
          ],
        },
        {
          type: "heading",
          text: "Weak constitution, strong leader",
        },
        {
          type: "text",
          md: "The Weimar constitution had two weaknesses. **Proportional representation** gave seats to many small parties, so no party could win a majority, and governments kept falling. **Article 48** let the President declare an emergency, suspend civil rights and rule by decree.\n\n**Adolf Hitler**, born in Austria in 1889, joined a small group called the German Workers' Party and turned it into the **National Socialist German Workers' Party**, the **Nazis**. In 1928 the Nazis won only 2.6% of the votes. During the Depression Hitler promised jobs, a strong nation and an end to the Versailles \"injustice\". By 1932 the Nazis won 37% of the votes and became the largest party.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**30 January 1933**: President **Hindenburg** makes Hitler **Chancellor** (head of the government).",
            "**28 February 1933**: after a fire in the Reichstag building, the **Fire Decree** suspends civil rights such as free speech and the right to assemble.",
            "**March 1933**: the **Enabling Act** lets Hitler ignore parliament and rule by decree. All parties and trade unions except the Nazi Party and its groups are banned.",
          ],
        },
        {
          type: "example",
          title: "Building a causes answer",
          problem: "Why did Nazism become popular in Germany by the early 1930s? Plan a 5-point answer.",
          steps: [
            "Anger over Versailles: Germans felt humiliated by lost land and the War Guilt Clause.",
            "Economic crises: hyperinflation in 1923 and the Great Depression after 1929 left millions jobless.",
            "Weak republic: proportional representation produced unstable governments; Article 48 allowed rule by decree.",
            "Hitler's skills: a powerful speaker, he promised jobs, national pride and security; rallies and propaganda spread his message.",
            "Fear of communists: the rich and middle classes saw the Nazis as protection against a Russian-style revolution.",
          ],
          answer: "Versailles anger, economic crisis, a weak constitution, Hitler's promises and propaganda, and fear of communism together made Nazism popular.",
        },
        {
          type: "mistake",
          wrong: "Hitler seized power in a violent coup in 1933.",
          right: "Hitler was legally appointed Chancellor by President Hindenburg on 30 January 1933. He then used the Fire Decree and the Enabling Act to destroy democracy from inside.",
          why: "Because Hitler became a dictator, students imagine a sudden coup. His failed attempt to seize power was in 1923; in 1933 he came in through the constitution and then used its weaknesses.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange these steps in Hitler's rise in order.",
            items: [
              "Treaty of Versailles",
              "Hyperinflation in Germany",
              "Great Depression begins",
              "Hitler becomes Chancellor",
              "Enabling Act passed",
            ],
            explain: "1919 → 1923 → 1929 → January 1933 → March 1933. Each crisis made more Germans ready to listen to Hitler.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Learn the two constitutional weaknesses by name: **proportional representation** and **Article 48**. Answers that say only \"the constitution was weak\" without naming them lose marks. Also learn the Versailles figures (13% territory, 75% iron, 26% coal) for short-answer questions.",
        },
        {
          type: "keypoints",
          items: [
            "Germany's defeat in 1918 led to the Weimar Republic, blamed for the harsh Treaty of Versailles.",
            "Hyperinflation (1923) and the Great Depression (from 1929) caused mass suffering.",
            "Proportional representation and Article 48 made the republic unstable.",
            "Nazi votes rose from 2.6% (1928) to 37% (1932).",
            "30 January 1933 Chancellor → Fire Decree → Enabling Act: democracy destroyed.",
          ],
        },
      ],
      flashcards: [
        { front: "Weimar Republic", back: "The democratic German state formed after the First World War, named after the town where its constitution was written." },
        { front: "War Guilt Clause", back: "Part of the Treaty of Versailles that held Germany responsible for the war and all damage." },
        { front: "Hyperinflation", back: "Prices rising phenomenally high so money loses almost all value; Germany in 1923." },
        { front: "Article 48", back: "Gave the President power to declare an emergency, suspend civil rights and rule by decree." },
        { front: "Enabling Act (1933)", back: "Let Hitler sideline parliament and rule by decree; all other parties and trade unions were banned." },
        { front: "Nazi share of votes", back: "2.6% in 1928, 37% in 1932." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who appointed Hitler as Chancellor in January 1933?",
          options: ["The Reichstag by vote", "President Hindenburg", "The Allies", "The Kaiser"],
          answer: 1,
          explain: "President Hindenburg offered Hitler the Chancellorship on 30 January 1933.",
        },
        {
          kind: "fill",
          q: "Under the Treaty of Versailles, Germany lost ___% of its territory.",
          answer: ["13"],
          explain: "Germany lost 13% of its territory, a tenth of its population, 75% of its iron and 26% of its coal.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "The Great Depression began with the crash of the Wall Street Exchange in 1929.",
          answer: true,
          explain: "The US crash spread worldwide; in Germany it led to mass unemployment.",
        },
        {
          kind: "multi",
          q: "Which were weaknesses of the Weimar constitution? (Choose all that apply.)",
          options: ["Proportional representation", "Article 48", "Votes for women", "An elected parliament"],
          answers: [0, 1],
          explain: "Votes for women and an elected parliament were democratic features, not weaknesses.",
          difficulty: 2,
          hint: "Which features made governments unstable or allowed rule by decree?",
        },
        {
          kind: "order",
          q: "Arrange in order.",
          items: ["France occupies the Ruhr", "Wall Street crash", "Nazis win 37% of the vote", "Fire Decree"],
          explain: "1923 → 1929 → 1932 → February 1933.",
        },
        {
          kind: "mcq",
          q: "What did the Fire Decree of 28 February 1933 do?",
          options: ["Gave women the vote", "Suspended civil rights like free speech and assembly", "Ended the Treaty of Versailles", "Made Hitler President"],
          answer: 1,
          explain: "The Fire Decree suspended basic civil rights, a first step to dictatorship.",
        },
        {
          kind: "mcq",
          q: "Why did hyperinflation hit Germany in 1923?",
          options: [
            "Germany won too much gold",
            "Germany printed paper money recklessly after it could not pay compensation and France occupied the Ruhr",
            "The Nazis banned money",
            "The Great Depression began",
          ],
          answer: 1,
          explain: "Reckless printing of money to pay its way made the mark almost worthless. The Depression came later, in 1929.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c9-nz-nazi-state-and-war",
      title: "The Nazi State: Ideology, Racial Policy and War",
      summary: "How the Nazis controlled Germany, their racial worldview, the persecution of Jews, Nazi schooling and propaganda, the road to the Second World War and the Holocaust.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Once in power, the Nazis built a **totalitarian state**: one where the government controls every part of life, including work, schools and even thought. Special forces kept people under watch: the **SA** (Storm Troopers), the **Gestapo** (secret state police), the **SS** (protection squads) and the Security Service. People could be sent to **concentration camps** without trial.\n\nHitler gave the economist **Hjalmar Schacht** charge of economic recovery. State spending on projects such as the German superhighways and the **Volkswagen** car created jobs.",
        },
        {
          type: "heading",
          text: "The Nazi worldview",
        },
        {
          type: "list",
          items: [
            "**Racial hierarchy**: the Nazis claimed there was no equality between people. Blond, blue-eyed **Nordic German Aryans** were placed at the top and **Jews** at the bottom.",
            "They twisted Darwin's ideas and Herbert Spencer's phrase \"survival of the fittest\" to argue that only the \"pure and healthy\" race should survive.",
            "**Lebensraum** (living space): Germany must take new land in the east so Germans could settle there.",
          ],
        },
        {
          type: "text",
          md: "To build a \"pure\" racial community, the Nazis targeted people they called \"undesirable\": Jews, Gypsies, Black people, Poles and Russians, and people with mental or physical disabilities.\n\nThe **Nuremberg Laws of Citizenship (1935)** said only people of German or related blood could be German citizens and banned marriages between Jews and Germans. In November 1938 Nazis attacked Jewish homes, shops and synagogues in a violent night called **Kristallnacht** (the Night of Broken Glass).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The Nazi idea that Germany needed new territory in the east for settlement was called ___.",
              answer: ["Lebensraum", "living space"],
              explain: "Lebensraum means living space; it drove Hitler's wars in eastern Europe.",
            },
          ],
        },
        {
          type: "text",
          md: "Schools were \"cleansed\": Jewish teachers were dismissed and children were taught to hate Jews and worship Hitler. Boys of 10 joined the **Jungvolk**; at 14 they joined the **Hitler Youth**. Girls were told that their duty was to be good mothers. Mothers of many \"racially desirable\" children were given **Honour Crosses**: bronze for four children, silver for six and gold for eight or more.\n\n**Propaganda** (information spread to shape people's opinions, often by lies) was run by **Joseph Goebbels**. The Nazis used gentle-sounding words to hide mass killing, such as \"special treatment\" and \"final solution\".",
        },
        {
          type: "heading",
          text: "The road to war",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**1933**: Germany leaves the **League of Nations**.",
            "**1936**: the German army moves back into the **Rhineland**.",
            "**1938**: Austria is joined to Germany; the German-speaking **Sudetenland** is taken from Czechoslovakia, and soon the whole country.",
            "**September 1939**: Germany invades **Poland**; France and England declare war. The **Second World War** begins.",
            "**June 1941**: Germany attacks the **Soviet Union**. After Japan bombs Pearl Harbor in December 1941, the **USA** joins the war.",
            "**May 1945**: Hitler is defeated. In **August 1945** the USA drops an atomic bomb on **Hiroshima** in Japan.",
          ],
        },
        {
          type: "text",
          md: "During the war the Nazis carried out the **Holocaust**: the mass murder of about six million Jews, along with Gypsies, Poles and many others. Victims were killed in gas chambers in camps such as **Auschwitz**. After the war, an **International Military Tribunal at Nuremberg** put Nazi war criminals on trial for crimes against humanity.",
        },
        {
          type: "example",
          title: "Reading a Nazi source",
          problem: "A Nazi poster shows a smiling blond family under the words \"The People's Community\". What is its message, and what does it hide?",
          steps: [
            "Look at who is shown: only a \"pure Aryan\" family, which matches the Nazi racial hierarchy.",
            "Look at the words: \"community\" suggests everyone belongs.",
            "Ask who is missing: Jews, Gypsies and disabled people were shut out of this community and persecuted.",
            "Name the method: this is propaganda, a positive image used to win support while hiding exclusion and violence.",
          ],
          answer: "It praises a racially \"pure\" German family as the ideal, and hides the persecution of everyone the Nazis left out.",
        },
        {
          type: "mistake",
          wrong: "Most ordinary Germans knew nothing and had no part in Nazi policies.",
          right: "Many ordinary Germans supported the Nazis, many others stayed silent out of fear or indifference, and only a few resisted openly.",
          why: "It is comforting to blame only Hitler and a few leaders. But Nazi rule depended on the cooperation or silence of many people, which is why the textbook asks what ordinary people knew and did.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each Nazi term to its meaning.",
            pairs: [
              ["Gestapo", "Secret state police"],
              ["Kristallnacht", "1938 attacks on Jewish homes, shops and synagogues"],
              ["Nuremberg Laws", "1935 laws limiting citizenship to German blood"],
              ["Hitler Youth", "Nazi organisation boys joined at 14"],
            ],
            explain: "Together these show the Nazi system: control by police terror, racial laws, open violence against Jews, and shaping young minds.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For \"Describe the Nazi policy of racial hierarchy\" or \"How did the Nazis treat Jews?\", give specific steps in time order: racial hierarchy idea → Nuremberg Laws (1935) → Kristallnacht (1938) → ghettos and camps → gas chambers (the Holocaust). Dates and names earn marks; vague words like \"they were cruel\" do not.",
        },
        {
          type: "keypoints",
          items: [
            "The Nazis built a totalitarian state with the SA, Gestapo, SS and concentration camps.",
            "Their racial hierarchy put Nordic Aryans at the top and Jews at the bottom; Lebensraum meant conquering land in the east.",
            "Nuremberg Laws (1935) and Kristallnacht (1938) marked rising persecution of Jews.",
            "Germany left the League in 1933, took the Rhineland (1936), Austria and Czechoslovakia (1938), and invaded Poland in September 1939.",
            "About six million Jews were killed in the Holocaust; Nazi leaders were tried at Nuremberg.",
          ],
        },
      ],
      flashcards: [
        { front: "Totalitarian state", back: "A state where the government controls every part of people's lives, allowing no opposition." },
        { front: "Racial hierarchy (Nazi)", back: "The false idea of ranked races, with Nordic German Aryans at the top and Jews at the bottom." },
        { front: "Lebensraum", back: "\"Living space\": Hitler's idea that Germany needed new land in the east for Germans." },
        { front: "Nuremberg Laws (1935)", back: "Only people of German or related blood could be citizens; marriages between Jews and Germans were banned." },
        { front: "Holocaust", back: "The Nazi mass murder of about six million Jews, along with Gypsies, Poles and others." },
        { front: "Start of the Second World War", back: "September 1939, when Germany invaded Poland." },
        { front: "Joseph Goebbels", back: "Nazi minister in charge of propaganda." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which event started the Second World War?",
          options: ["Germany leaves the League of Nations", "Germany invades Poland", "Japan attacks Pearl Harbor", "Germany takes the Rhineland"],
          answer: 1,
          explain: "The invasion of Poland in September 1939 led France and England to declare war on Germany.",
        },
        {
          kind: "order",
          q: "Arrange Hitler's moves in order.",
          items: ["Leaves the League of Nations", "Reoccupies the Rhineland", "Joins Austria to Germany", "Invades Poland", "Attacks the Soviet Union"],
          explain: "1933 → 1936 → 1938 → September 1939 → June 1941.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Under the Nuremberg Laws of 1935, marriages between Jews and Germans were forbidden.",
          answer: true,
          explain: "These laws took away Jewish citizenship and banned such marriages.",
        },
        {
          kind: "mcq",
          q: "Which group did the Nazis place at the TOP of their racial hierarchy?",
          options: ["Jews", "Nordic German Aryans", "Russians", "Gypsies"],
          answer: 1,
          explain: "The Nazis placed Nordic German Aryans at the top and Jews at the bottom.",
        },
        {
          kind: "fill",
          q: "The violent attacks on Jewish property in November 1938 are called Kristallnacht, or the Night of Broken ___.",
          answer: ["Glass"],
          explain: "Smashed windows of Jewish shops and synagogues gave it this name.",
        },
        {
          kind: "multi",
          q: "Which were Nazi forces of control and surveillance? (Choose all that apply.)",
          options: ["Gestapo", "SS", "SA", "Duma"],
          answers: [0, 1, 2],
          explain: "The Duma was the Russian parliament, from a different chapter. The other three were Nazi forces.",
          difficulty: 2,
          hint: "One option belongs to the Russian Revolution chapter.",
        },
        {
          kind: "mcq",
          q: "Why did the USA enter the Second World War?",
          options: ["Germany invaded Poland", "Japan attacked Pearl Harbor", "Germany attacked France", "Hitler left the League of Nations"],
          answer: 1,
          explain: "The USA joined after Japan, Germany's ally, attacked Pearl Harbor in December 1941.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* The Renaissance (ICSE; also Karnataka "Medieval Europe, ...")      */
/* ------------------------------------------------------------------ */
const renaissance: Topic = {
  slug: "c9-renaissance",
  title: "The Renaissance",
  icon: "🎨",
  description: "The rebirth of learning in Europe: why it began, humanism, and its great art, literature and science.",
  lessons: [
    {
      slug: "c9-ren-meaning-and-causes",
      title: "The Renaissance: Meaning and Causes",
      summary: "What the word Renaissance means, why it began in Italy, and the causes from the fall of Constantinople to the printing press and voyages of discovery.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "📚",
          caption: "Think of an old family trunk full of forgotten books. Opening it and reading them again with fresh eyes is a little like what Europe did in the Renaissance.",
        },
        {
          type: "text",
          md: "**Renaissance** is a French word meaning **\"rebirth\"**. It names the great revival of art, literature and learning in Europe from about the **14th to the 16th century**. People went back to the books and art of ancient **Greece and Rome** (called **classical** learning) and used them to think in new ways.\n\nIn the Middle Ages, most learning was controlled by the Church and focused on religion and life after death. The Renaissance turned attention to **human beings and life in this world**. It marks the change from the medieval age to the **modern age** in Europe.",
        },
        {
          type: "heading",
          text: "Why did it begin?",
        },
        {
          type: "table",
          headers: ["Cause", "How it helped"],
          rows: [
            ["**Fall of Constantinople (1453)**", "The Ottoman Turks captured the city. Greek scholars fled to Italy with old manuscripts and spread classical learning."],
            ["**Printing press**", "**Johann Gutenberg** of Germany used movable metal type in the mid-15th century. Books became cheap, and new ideas spread fast."],
            ["**Decline of feudalism**", "As the power of feudal lords weakened, people gained more freedom to think and work for themselves."],
            ["**Growth of trade and towns**", "Contact with the East through trade and the **Crusades** brought new goods and ideas; rich trading cities grew."],
            ["**Patronage**", "Wealthy families and rulers, such as the **Medici** of Florence, paid artists and scholars (a **patron** is someone who supports artists with money)."],
            ["**Geographical discoveries**", "Voyages such as **Columbus** reaching America (1492) and **Vasco da Gama** reaching Calicut in India (1498) widened people's view of the world."],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Why did the fall of Constantinople in 1453 help the Renaissance?",
              options: [
                "It ended all trade with Asia",
                "Greek scholars fled to Italy with classical manuscripts",
                "It made the Pope more powerful",
                "It led to the invention of gunpowder",
              ],
              answer: 1,
              explain: "The scholars who fled brought Greek learning to Italy, where it spread quickly.",
            },
          ],
        },
        {
          type: "heading",
          text: "Why Italy first?",
        },
        {
          type: "list",
          items: [
            "Italy had been the heart of the ancient **Roman Empire**; its ruins and old books were all around.",
            "Italian cities like **Florence, Venice, Genoa and Milan** were rich from trade between Europe and the East.",
            "Rich families and the Popes acted as patrons of art and learning.",
            "Greek scholars from Constantinople settled mostly in Italy.",
          ],
        },
        {
          type: "example",
          title: "Linking a cause to an effect",
          problem: "Explain how the printing press helped the Renaissance spread outside Italy.",
          steps: [
            "Before printing, books were copied by hand, so they were few, costly and mostly owned by the Church.",
            "Gutenberg's movable type made it possible to print many copies quickly and cheaply.",
            "More people could buy books, including works in their own languages, and learn to read.",
            "So new ideas from Italy reached scholars and readers in Germany, France, England and beyond.",
          ],
          answer: "Printing made books cheap and plentiful, so Renaissance ideas spread quickly from Italy across Europe.",
        },
        {
          type: "mistake",
          wrong: "The Renaissance was a single event that happened in 1453.",
          right: "The Renaissance was a long movement, from about the 14th to the 16th century. The fall of Constantinople in 1453 was one cause that sped it up.",
          why: "Exam books list 1453 first among the causes, so students treat it as the start date. But Italian writers like Petrarch were already reviving classical learning in the 1300s.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Where did the Renaissance begin?",
            emoji: "🗺️",
            options: ["England", "Italy", "Germany", "Spain"],
            answer: 1,
            trap: 2,
            explain: "It began in **Italy**, with its Roman heritage, rich cities and patrons. Germany gave the printing press, which helped it spread, but did not start it.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "\"State any three causes of the Renaissance\" is a frequent short question. Write each cause with **one line of explanation**: e.g. \"Fall of Constantinople, 1453: Greek scholars fled to Italy with manuscripts.\" Listing bare names like \"printing press\" without saying how it helped often earns only half the mark.",
        },
        {
          type: "keypoints",
          items: [
            "Renaissance means \"rebirth\": the revival of classical Greek and Roman learning, about the 14th–16th centuries.",
            "It shifted attention from life after death to human beings and this world.",
            "Causes: fall of Constantinople (1453), printing press (Gutenberg), decline of feudalism, trade and towns, patrons, discoveries.",
            "It began in Italy because of its Roman heritage, rich cities and patrons.",
          ],
        },
      ],
      flashcards: [
        { front: "Renaissance", back: "French for \"rebirth\": the revival of art, literature and learning in Europe, about the 14th to 16th centuries." },
        { front: "Classical learning", back: "The knowledge, books and art of ancient Greece and Rome." },
        { front: "Fall of Constantinople", back: "1453, to the Ottoman Turks; Greek scholars fled to Italy with manuscripts." },
        { front: "Johann Gutenberg", back: "German who developed printing with movable metal type in the mid-15th century." },
        { front: "Patron", back: "A rich person or ruler who supports artists and scholars with money, like the Medici of Florence." },
        { front: "Why Italy first?", back: "Roman heritage, rich trading cities, generous patrons and Greek scholars who settled there." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The word \"Renaissance\" means:",
          options: ["Reform", "Rebirth", "Revolution", "Religion"],
          answer: 1,
          explain: "Renaissance is French for rebirth: the rebirth of classical learning.",
        },
        {
          kind: "fill",
          q: "Constantinople was captured by the Ottoman Turks in the year ___.",
          answer: ["1453"],
          explain: "In 1453 the Ottoman Turks took Constantinople, and Greek scholars fled to Italy.",
        },
        {
          kind: "truefalse",
          q: "The Renaissance began in Germany because the printing press was invented there.",
          answer: false,
          explain: "The Renaissance began in Italy. The printing press helped it spread.",
        },
        {
          kind: "multi",
          q: "Which of these were causes of the Renaissance? (Choose all that apply.)",
          options: ["Fall of Constantinople", "Invention of the printing press", "Growth of trade and rich towns", "The Industrial Revolution"],
          answers: [0, 1, 2],
          explain: "The Industrial Revolution came about 200 years later, in the 18th century.",
          difficulty: 2,
          hint: "Check which of these happened before about 1500.",
        },
        {
          kind: "mcq",
          q: "The Medici family of Florence are remembered as:",
          options: ["Explorers", "Patrons of art and learning", "Leaders of the Reformation", "Inventors of printing"],
          answer: 1,
          explain: "The Medici were rich bankers who supported artists and scholars.",
        },
        {
          kind: "order",
          q: "Arrange these events in time order.",
          items: ["Fall of Constantinople", "Columbus reaches America", "Vasco da Gama reaches Calicut"],
          explain: "1453 → 1492 → 1498.",
        },
      ],
    },
    {
      slug: "c9-ren-humanism-art-science",
      title: "Humanism, Art, Literature and Science",
      summary: "The ideas of humanism, the great artists and writers of the Renaissance, the new science, and the lasting impact of the movement.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "The central idea of the Renaissance was **humanism**: a way of thinking that values human beings, their abilities and their life in this world. Humanists studied **classical** texts, poetry, history and philosophy (together called the **humanities**). They believed people should think for themselves and question old beliefs, instead of accepting everything on authority.\n\n**Francesco Petrarch** (1304–1374) of Italy is called the **Father of Humanism**. He collected old Latin manuscripts and urged people to study them.",
        },
        {
          type: "heading",
          text: "Literature",
        },
        {
          type: "table",
          headers: ["Writer", "Country", "Known for"],
          rows: [
            ["**Dante**", "Italy", "*The Divine Comedy*, written in Italian, the language of the people"],
            ["**Erasmus**", "Netherlands", "*In Praise of Folly*, mocking the faults of the clergy"],
            ["**Machiavelli**", "Italy", "*The Prince*, about how rulers gain and keep power"],
            ["**Thomas More**", "England", "*Utopia*, about an ideal society"],
            ["**William Shakespeare**", "England", "Plays such as *Hamlet* and *Romeo and Juliet*"],
            ["**Cervantes**", "Spain", "*Don Quixote*, a novel making fun of knights"],
          ],
        },
        {
          type: "text",
          md: "Many writers began to use **vernacular** languages (the everyday languages of the people, such as Italian, English and Spanish) instead of only Latin. This helped national languages and literature grow.",
        },
        {
          type: "heading",
          text: "Art and architecture",
        },
        {
          type: "text",
          md: "Medieval art was mostly flat and religious. Renaissance artists painted people as they really look. They used **perspective** (showing depth and distance on a flat surface), studied the **human body** closely, and used light and shade.\n\n**Leonardo da Vinci**: painter of the *Mona Lisa* and *The Last Supper*; he also drew designs for machines.\n\n**Michelangelo**: painted the ceiling of the **Sistine Chapel** in Rome and carved the statue of *David*.\n\n**Raphael**: known for his gentle paintings of the Madonna (Mary, mother of Jesus).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who painted the ceiling of the Sistine Chapel?",
              options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Dante"],
              answer: 1,
              explain: "Michelangelo painted the Sistine Chapel ceiling. Leonardo painted the Mona Lisa.",
            },
          ],
        },
        {
          type: "heading",
          text: "Science",
        },
        {
          type: "list",
          items: [
            "**Copernicus** (Poland) said the Sun, not the Earth, is at the centre, and the Earth moves around it (the **heliocentric** theory). This went against the Church's teaching.",
            "**Galileo** (Italy) improved the telescope and observed the heavens; his findings supported Copernicus.",
            "**Kepler** (Germany) showed that planets move around the Sun in elliptical (oval) orbits.",
            "**Vesalius** studied the human body by dissection and wrote on human anatomy.",
            "**William Harvey** (England) explained the circulation of blood.",
          ],
        },
        {
          type: "example",
          title: "Explaining an impact",
          problem: "Explain how the Renaissance spirit of enquiry changed science.",
          steps: [
            "Medieval scholars mostly accepted what the Church and old authorities said.",
            "Humanism encouraged people to question and to trust observation and reason.",
            "Scientists began to observe and test: Galileo looked through a telescope; Vesalius dissected bodies.",
            "Their findings, such as the heliocentric theory, overturned old beliefs.",
          ],
          answer: "By encouraging people to question and observe, the Renaissance replaced belief in authority with observation and experiment, leading to discoveries like the heliocentric theory.",
        },
        {
          type: "mistake",
          wrong: "Humanism means being against God and religion.",
          right: "Humanists were mostly religious people. They added a new focus on human abilities and life in this world, and wanted people to think for themselves.",
          why: "Because humanism is often contrasted with Church control, it sounds anti-religious. In fact Erasmus, a leading humanist, criticised corrupt clergy but stayed a devout Christian.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each Renaissance figure to their work.",
            pairs: [
              ["Leonardo da Vinci", "Mona Lisa"],
              ["Copernicus", "Heliocentric theory"],
              ["Machiavelli", "The Prince"],
              ["Erasmus", "In Praise of Folly"],
              ["Dante", "The Divine Comedy"],
            ],
            explain: "The Renaissance changed art, politics, religion and science at once. Notice that many of these works questioned old authorities.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "For \"Impact of the Renaissance\", divide your answer into **art, literature, science and religion**, giving one name in each. A frequent error is mixing up Leonardo and Michelangelo: Leonardo = *Mona Lisa* and *The Last Supper*; Michelangelo = Sistine Chapel and *David*. The spirit of questioning also prepared the way for the **Reformation**.",
        },
        {
          type: "keypoints",
          items: [
            "Humanism values human beings and life in this world; Petrarch is the Father of Humanism.",
            "Writers used vernacular languages: Dante, Erasmus, Machiavelli, More, Shakespeare, Cervantes.",
            "Art became realistic with perspective and anatomy: Leonardo, Michelangelo, Raphael.",
            "Science: Copernicus (Sun at centre), Galileo (telescope), Kepler (elliptical orbits), Vesalius, Harvey.",
            "The spirit of enquiry led on to the Reformation and modern science.",
          ],
        },
      ],
      flashcards: [
        { front: "Humanism", back: "A way of thinking that values human beings, their abilities and life in this world." },
        { front: "Father of Humanism", back: "Francesco Petrarch of Italy (1304–1374)." },
        { front: "Vernacular", back: "The everyday language of the people, such as Italian or English, instead of Latin." },
        { front: "Perspective (in art)", back: "A way of showing depth and distance on a flat surface." },
        { front: "Heliocentric theory", back: "Copernicus's idea that the Sun is at the centre and the Earth moves around it." },
        { front: "Michelangelo", back: "Painted the Sistine Chapel ceiling; carved the statue of David." },
        { front: "Machiavelli", back: "Italian author of *The Prince*, about how rulers gain and keep power." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who is called the Father of Humanism?",
          options: ["Dante", "Petrarch", "Erasmus", "Galileo"],
          answer: 1,
          explain: "Petrarch revived the study of classical Latin works and is called the Father of Humanism.",
        },
        {
          kind: "mcq",
          q: "Which scientist proposed that the Sun is at the centre and the Earth moves around it?",
          options: ["Kepler", "Harvey", "Copernicus", "Vesalius"],
          answer: 2,
          explain: "Copernicus put forward the heliocentric theory. Kepler later showed orbits are elliptical.",
        },
        {
          kind: "fill",
          q: "Renaissance artists used ___ to show depth and distance on a flat surface.",
          answer: ["perspective"],
          explain: "Perspective made paintings look real and three-dimensional.",
        },
        {
          kind: "truefalse",
          q: "Dante wrote *The Divine Comedy* in Latin.",
          answer: false,
          explain: "Dante wrote in Italian, the vernacular, which helped Italian literature grow.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these were Renaissance painters? (Choose all that apply.)",
          options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Martin Luther"],
          answers: [0, 1, 2],
          explain: "Martin Luther was a religious reformer, not a painter.",
        },
        {
          kind: "mcq",
          q: "William Harvey is remembered for explaining:",
          options: ["Elliptical orbits", "Circulation of blood", "The printing press", "Perspective"],
          answer: 1,
          explain: "Harvey explained how blood circulates through the body.",
        },
        {
          kind: "mcq",
          q: "Which statement best describes humanism?",
          options: [
            "Rejecting all religion",
            "Focusing on human abilities and life in this world, and thinking for oneself",
            "Studying only the Bible",
            "Obeying the Pope in all matters",
          ],
          answer: 1,
          explain: "Humanists valued human abilities and reason; most of them remained religious.",
          difficulty: 2,
          hint: "Erasmus was a humanist and also a devout Christian.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* The Reformation (ICSE; also Karnataka "Medieval Europe, ...")      */
/* ------------------------------------------------------------------ */
const reformation: Topic = {
  slug: "c9-reformation",
  title: "The Reformation",
  icon: "⛪",
  description: "The 16th-century movement to reform the Church: its causes, Martin Luther, the spread of Protestantism and the Counter-Reformation.",
  lessons: [
    {
      slug: "c9-ref-causes-and-luther",
      title: "Causes of the Reformation and Martin Luther",
      summary: "Why people wanted to reform the Roman Catholic Church, the early reformers, and how Martin Luther challenged the Pope.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "In the Middle Ages almost all of western Europe followed the **Roman Catholic Church**, headed by the **Pope** in Rome. The Church was very rich and powerful. It owned large estates and collected taxes such as the **tithe**.\n\nThe **Reformation** was a religious movement of the **16th century** that tried to reform (correct) the Catholic Church. It ended by splitting western Christianity. Those who broke away came to be called **Protestants**.",
        },
        {
          type: "heading",
          text: "Causes",
        },
        {
          type: "list",
          items: [
            "**Corruption in the Church**: many clergy lived in luxury, ignored their duties, and sold Church posts for money.",
            "**Sale of indulgences**: an **indulgence** was a letter of pardon, sold by the Church, said to reduce punishment for sins. Selling forgiveness angered many believers.",
            "**Renaissance spirit**: humanism taught people to question; **Erasmus** mocked corrupt clergy in *In Praise of Folly*.",
            "**Printing press**: Bibles and pamphlets in local languages let people read the scriptures themselves and spread criticism quickly.",
            "**Rise of strong kings**: rulers resented the Pope's interference and the money sent from their lands to Rome.",
          ],
        },
        {
          type: "text",
          md: "There were earlier reformers too. **John Wycliffe** of England (14th century) criticised the Church and had the Bible translated into English; he is called the **\"Morning Star of the Reformation\"**. **John Huss** of Bohemia spread similar ideas and was burnt to death in 1415.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What was an indulgence?",
              options: ["A Church tax on land", "A letter of pardon sold by the Church", "A book of prayers", "A type of monastery"],
              answer: 1,
              explain: "Indulgences were sold as pardons for sins; their sale sparked Luther's protest.",
            },
          ],
        },
        {
          type: "heading",
          text: "Martin Luther",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Martin Luther** (1483–1546) was a German monk and professor at **Wittenberg**.",
            "In 1517 a Church agent named **Tetzel** came near Wittenberg selling indulgences.",
            "**1517**: Luther put up his **95 Theses** (points of argument) on the door of the church at Wittenberg, attacking the sale of indulgences.",
            "**1521**: the Pope **excommunicated** him (expelled him from the Church). At the **Diet of Worms**, a meeting called by Emperor **Charles V**, Luther refused to take back his views and was declared an outlaw.",
            "While in hiding, Luther translated the **Bible into German**. His followers came to be called **Lutherans**.",
            "**1555**: the **Peace of Augsburg** let each German prince choose whether his state would be Catholic or Lutheran.",
          ],
        },
        {
          type: "text",
          md: "Luther taught that a person is saved by **faith in God alone**, not by buying indulgences or doing rituals. He held that the **Bible**, not the Pope, was the final authority, and that every believer could read it.",
        },
        {
          type: "example",
          title: "Explaining a turning point",
          problem: "Why was the sale of indulgences the spark of the Reformation, when there were many other complaints against the Church?",
          steps: [
            "Note the background: people already disliked Church wealth and corrupt clergy, but these complaints had not produced a split.",
            "Note what indulgences did: they put a price on forgiveness, which seemed to turn religion into a business.",
            "Note the reaction: Luther's 95 Theses (1517) attacked this directly, and the printing press spread his words across Germany within weeks.",
            "Conclude: indulgences gave a clear, simple issue that ordinary people understood, so they turned old resentment into a movement.",
          ],
          answer: "Indulgences made the Church's misuse of power plain to everyone, and Luther's printed attack on them turned long-standing anger into a mass movement.",
        },
        {
          type: "mistake",
          wrong: "Martin Luther wanted to start a new religion separate from Christianity.",
          right: "Luther was a Christian monk who wanted to **reform** the Church, removing practices he saw as wrong. The split happened because the Pope rejected his ideas and excommunicated him.",
          why: "Since Protestant churches became separate, it looks as if Luther planned a new religion. His aim was to correct the Church; the break came only after he was expelled.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the events of Luther's life in order.",
            items: [
              "Luther posts the 95 Theses",
              "The Pope excommunicates Luther",
              "Luther refuses to recant at the Diet of Worms",
              "Peace of Augsburg",
            ],
            explain: "1517 → 1521 → 1521 (Diet of Worms, soon after) → 1555. Luther's protest grew from a list of arguments into a new church recognised by law in the German states.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Questions often ask for \"any four causes of the Reformation\". Write **corruption, indulgences, Renaissance spirit, printing press, and rise of national kings**, each with one sentence. The date **1517** (95 Theses) is the starting point of the Reformation; do not confuse it with 1521 (Diet of Worms).",
        },
        {
          type: "keypoints",
          items: [
            "The Reformation was a 16th-century movement to reform the Catholic Church; it split western Christianity.",
            "Causes: corrupt clergy, sale of indulgences, Renaissance questioning, printing, and strong kings resenting the Pope.",
            "Wycliffe (Morning Star of the Reformation) and Huss were early reformers.",
            "1517: Luther's 95 Theses; 1521: excommunication and the Diet of Worms; Bible translated into German.",
            "1555: Peace of Augsburg let German princes choose Catholic or Lutheran faith.",
          ],
        },
      ],
      flashcards: [
        { front: "Reformation", back: "The 16th-century movement to reform the Roman Catholic Church, which led to Protestant churches." },
        { front: "Indulgence", back: "A letter of pardon sold by the Church, said to reduce punishment for sins." },
        { front: "95 Theses (1517)", back: "Luther's points attacking the sale of indulgences, posted at Wittenberg." },
        { front: "Morning Star of the Reformation", back: "John Wycliffe of England, who had the Bible translated into English." },
        { front: "Excommunication", back: "Being expelled from the Church by the Pope." },
        { front: "Peace of Augsburg (1555)", back: "Each German prince could choose Catholic or Lutheran faith for his state." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Where did Luther put up his 95 Theses?",
          options: ["Rome", "Worms", "Wittenberg", "Geneva"],
          answer: 2,
          explain: "Luther posted the 95 Theses at Wittenberg in 1517. Worms was where he faced the Emperor in 1521.",
        },
        {
          kind: "fill",
          q: "Martin Luther posted his 95 Theses in the year ___.",
          answer: ["1517"],
          explain: "1517 is taken as the start of the Reformation.",
        },
        {
          kind: "truefalse",
          q: "Luther taught that people are saved by faith in God alone.",
          answer: true,
          explain: "This idea is called salvation by faith; it rejected the need for indulgences.",
        },
        {
          kind: "multi",
          q: "Which were causes of the Reformation? (Choose all that apply.)",
          options: ["Sale of indulgences", "Printing press", "Corruption among clergy", "The Treaty of Versailles"],
          answers: [0, 1, 2],
          explain: "The Treaty of Versailles belongs to 1919, after the First World War.",
        },
        {
          kind: "mcq",
          q: "Who called the Diet of Worms in 1521?",
          options: ["Pope Leo X", "Emperor Charles V", "Henry VIII", "John Calvin"],
          answer: 1,
          explain: "Emperor Charles V called the Diet, where Luther refused to take back his views.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "John Wycliffe is called the \"Morning Star of the Reformation\" because:",
          options: [
            "He started the Counter-Reformation",
            "He criticised the Church and had the Bible translated into English long before Luther",
            "He invented printing",
            "He was the first Protestant king",
          ],
          answer: 1,
          explain: "Wycliffe's 14th-century criticism came about 150 years before Luther, like a morning star before sunrise.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange in time order.",
          items: ["John Huss burnt", "Luther's 95 Theses", "Diet of Worms", "Peace of Augsburg"],
          explain: "1415 → 1517 → 1521 → 1555.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c9-ref-protestantism-counter-reformation",
      title: "Spread of Protestantism and the Counter-Reformation",
      summary: "Zwingli and Calvin, the English Reformation under Henry VIII, the Catholic Counter-Reformation and the results of the Reformation.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Luther's protest spread beyond Germany. Different reformers set up different Protestant churches. A **sect** is a group with its own beliefs within a larger religion.",
        },
        {
          type: "table",
          headers: ["Reformer / ruler", "Where", "What happened"],
          rows: [
            ["**Ulrich Zwingli**", "Zurich, Switzerland", "Preached reform and opposed indulgences"],
            ["**John Calvin**", "Geneva, Switzerland", "Taught **predestination** (God has already decided who will be saved) and a simple, strict way of life; his followers were called **Calvinists**"],
            ["**Henry VIII**", "England", "Broke with the Pope; the **Act of Supremacy (1534)** made the king head of the **Church of England** (Anglican Church)"],
          ],
        },
        {
          type: "text",
          md: "Calvin's ideas spread widely. His followers were known as **Huguenots** in France, **Presbyterians** in Scotland (led by **John Knox**) and **Puritans** in England.\n\nIn England the break was partly political. Henry VIII wanted to end his marriage to **Catherine of Aragon**, but the Pope refused. Parliament then passed the Act of Supremacy, and the king, not the Pope, became head of the Church in England.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The Act of Supremacy (1534) made whom the head of the Church of England?",
              options: ["The Pope", "The Archbishop of Rome", "The English king", "John Calvin"],
              answer: 2,
              explain: "Henry VIII became Supreme Head of the Church of England, ending the Pope's authority there.",
            },
          ],
        },
        {
          type: "heading",
          text: "The Counter-Reformation",
        },
        {
          type: "text",
          md: "The Catholic Church responded with its own reform movement, called the **Counter-Reformation** (or Catholic Reformation). Its aim was to remove abuses inside the Church and stop the spread of Protestantism.",
        },
        {
          type: "list",
          items: [
            "**Council of Trent (1545–1563)**: stopped the sale of Church posts, set rules to train priests properly, and restated Catholic beliefs.",
            "**Society of Jesus (Jesuits)**: founded by **Ignatius Loyola** (1534), a disciplined order that spread Catholic faith through schools and missionaries. **St Francis Xavier**, a Jesuit, preached in India, including Goa.",
            "**Inquisition**: Church courts that tried and punished people accused of heresy (beliefs against official teaching).",
            "**Index**: a list of books Catholics were forbidden to read.",
          ],
        },
        {
          type: "example",
          title: "Comparing two movements",
          problem: "How were the Reformation and the Counter-Reformation alike and different?",
          steps: [
            "Alike: both wanted to remove abuses such as corrupt clergy and the sale of Church posts.",
            "Different leaders: the Reformation was led by people like Luther and Calvin, who broke away; the Counter-Reformation was led by the Pope and the Catholic Church itself.",
            "Different aims: Protestants rejected the Pope's authority; the Counter-Reformation strengthened it and tried to win people back.",
          ],
          answer: "Both fought corruption, but the Reformation broke away from the Pope, while the Counter-Reformation reformed the Catholic Church from within and defended the Pope's authority.",
        },
        {
          type: "mistake",
          wrong: "The Counter-Reformation was a Protestant movement against the Catholic Church.",
          right: "The Counter-Reformation was a **Catholic** movement. The Catholic Church reformed itself to counter the spread of Protestantism.",
          why: "\"Counter\" makes it sound like another protest against the Church. It was the Church's counter-move against Protestantism.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Protestant Reformation or Catholic Counter-Reformation?",
            groups: ["Protestant Reformation", "Catholic Counter-Reformation"],
            items: [
              { text: "95 Theses", group: 0, hint: "Luther wrote these against indulgences." },
              { text: "Council of Trent", group: 1, hint: "This council was called by the Pope." },
              { text: "Act of Supremacy", group: 0, hint: "It ended the Pope's authority in England." },
              { text: "Society of Jesus", group: 1, hint: "Ignatius Loyola founded it to spread Catholic faith." },
              { text: "Calvin in Geneva", group: 0, hint: "His followers were the Huguenots and Puritans." },
              { text: "Index of forbidden books", group: 1, hint: "A list Catholics were told not to read." },
            ],
            explain: "Protestants broke away from the Pope; the Counter-Reformation was the Catholic Church reforming itself and defending its authority.",
          },
        },
        {
          type: "text",
          md: "**Results of the Reformation**: western Christianity split into Catholic and Protestant churches; kings became more powerful than the Pope in their own lands; the Bible appeared in local languages, helping those languages grow; schools spread; but Europe also suffered long religious wars between Catholics and Protestants.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "When asked about the Counter-Reformation, name **at least three** measures: Council of Trent, Society of Jesus, Inquisition, Index. A common slip is writing that Ignatius Loyola was a Protestant reformer; he founded a **Catholic** order.",
        },
        {
          type: "keypoints",
          items: [
            "Zwingli (Zurich) and Calvin (Geneva) led reform in Switzerland; Calvinists were Huguenots, Presbyterians and Puritans.",
            "The Act of Supremacy (1534) made Henry VIII head of the Church of England.",
            "The Counter-Reformation was the Catholic Church's own reform: Council of Trent, Jesuits, Inquisition, Index.",
            "Results: a split Christian church, stronger kings, growth of local languages and schools, and religious wars.",
          ],
        },
      ],
      flashcards: [
        { front: "Predestination", back: "Calvin's teaching that God has already decided who will be saved." },
        { front: "Act of Supremacy (1534)", back: "Made the English king head of the Church of England." },
        { front: "Counter-Reformation", back: "The Catholic Church's movement to reform itself and stop the spread of Protestantism." },
        { front: "Council of Trent", back: "1545–1563: Catholic council that removed abuses and restated Catholic beliefs." },
        { front: "Ignatius Loyola", back: "Founder of the Society of Jesus (Jesuits) in 1534." },
        { front: "Huguenots", back: "Calvinists in France." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which reformer worked in Geneva?",
          options: ["Martin Luther", "Ulrich Zwingli", "John Calvin", "John Knox"],
          answer: 2,
          explain: "Calvin led the reform in Geneva. Zwingli was in Zurich, Knox in Scotland.",
        },
        {
          kind: "mcq",
          q: "Who founded the Society of Jesus?",
          options: ["Ignatius Loyola", "Francis Xavier", "Henry VIII", "Erasmus"],
          answer: 0,
          explain: "Ignatius Loyola founded the Jesuits; Francis Xavier was a famous Jesuit missionary.",
        },
        {
          kind: "truefalse",
          q: "The Counter-Reformation was led by the Catholic Church.",
          answer: true,
          explain: "It was the Catholic Church's response to Protestantism.",
        },
        {
          kind: "fill",
          q: "In Scotland, followers of Calvin were called ___.",
          answer: ["Presbyterians", "Presbyterian"],
          explain: "Calvinists were Presbyterians in Scotland, Huguenots in France and Puritans in England.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which were measures of the Counter-Reformation? (Choose all that apply.)",
          options: ["Council of Trent", "Inquisition", "Index of forbidden books", "Act of Supremacy"],
          answers: [0, 1, 2],
          explain: "The Act of Supremacy was an English Protestant measure that ended the Pope's authority in England.",
          difficulty: 2,
          hint: "One option took power away from the Pope.",
        },
        {
          kind: "mcq",
          q: "Why did Henry VIII break with the Pope?",
          options: [
            "He agreed with Calvin on predestination",
            "The Pope refused to end his marriage to Catherine of Aragon",
            "The Pope invaded England",
            "Luther asked him to",
          ],
          answer: 1,
          explain: "The English break was largely political, triggered by the Pope's refusal.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* The Industrial Revolution (ICSE; also Karnataka "The Age of Revolutions") */
/* ------------------------------------------------------------------ */
const industrialRevolution: Topic = {
  slug: "c9-industrial-revolution",
  title: "The Industrial Revolution",
  icon: "🏭",
  description: "How machines and factories changed production in England from the 18th century, and what this meant for people and the world.",
  lessons: [
    {
      slug: "c9-ir-meaning-and-why-england",
      title: "What the Industrial Revolution Was and Why England Led",
      summary: "The meaning of the Industrial Revolution and the reasons it began in England in the 18th century.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🧵",
          caption: "A handloom weaver in Varanasi makes one sari over many days. A modern mill machine makes hundreds of metres of cloth in the same time. That change in how things are made is what this chapter is about.",
        },
        {
          type: "text",
          md: "Before the 18th century most goods were made **by hand**, at home or in small workshops. This is called the **domestic system** (or cottage industry). Workers used simple tools, and output was small.\n\nFrom the second half of the 18th century, **machines** driven first by water and then by **steam** began to do this work in large buildings called **factories**. This great change from hand production to machine production is called the **Industrial Revolution**. It began in **England** (Great Britain) and later spread to Europe, the USA, Japan and the rest of the world.",
        },
        {
          type: "callout",
          tone: "fact",
          title: "Why \"revolution\"?",
          md: "It was not sudden like a political revolution. It took decades. It is called a revolution because it changed the way people worked and lived so completely. The English historian **Arnold Toynbee** popularised the term in his lectures.",
        },
        {
          type: "heading",
          text: "Why England first?",
        },
        {
          type: "table",
          headers: ["Factor", "How it helped England"],
          rows: [
            ["**Coal and iron**", "Large deposits lay close together, giving fuel and metal for machines"],
            ["**Capital**", "Profits from trade and colonies gave merchants money to invest in factories; banks such as the Bank of England (1694) lent money"],
            ["**Colonies**", "Supplied raw materials like cotton and offered markets for finished goods"],
            ["**Agricultural Revolution**", "Better farming and the **enclosure** of common fields produced more food and pushed many villagers to towns as workers"],
            ["**Political stability and a strong navy**", "Peace at home and control of the seas protected trade"],
            ["**Geography and transport**", "An island with many ports and rivers; canals made moving coal and goods cheap"],
            ["**Inventors**", "A spirit of invention produced new machines one after another"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "multi",
              q: "Which factors helped England become the first industrial nation? (Choose all that apply.)",
              options: ["Coal and iron close together", "Colonies for raw materials and markets", "Capital from trade", "A ban on new machines"],
              answers: [0, 1, 2],
              explain: "England encouraged inventions; there was no ban. The other three were key advantages.",
            },
          ],
        },
        {
          type: "example",
          title: "Explaining a cause fully",
          problem: "Explain why colonies helped England industrialise first.",
          steps: [
            "Factories need raw materials: England's colonies, including India and those in America, supplied cotton and other materials.",
            "Factories produce more than the home market can buy: colonies were forced to buy British goods.",
            "Trade with colonies earned profits, which merchants invested as capital in factories.",
          ],
          answer: "Colonies gave England cheap raw materials, ready markets and profits for investment, all of which helped factories grow.",
        },
        {
          type: "mistake",
          wrong: "The Industrial Revolution happened suddenly, in one year, when the steam engine was invented.",
          right: "It was a gradual process spread over about a hundred years, from the mid-18th to the mid-19th century, with many inventions building on each other.",
          why: "The word \"revolution\" and the famous steam engine make it sound like a single event. In fact, textile machines came first, and steam spread only slowly.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which change best defines the Industrial Revolution?",
            emoji: "⚙️",
            options: ["Kings losing power", "Hand production replaced by machine production in factories", "Discovery of new sea routes", "Revival of classical learning"],
            answer: 1,
            trap: 0,
            explain: "It was an economic change in **how goods were made**: from hand tools at home to machines in factories. Political change is a different kind of revolution.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "\"Why did the Industrial Revolution first begin in England?\" usually carries 4–5 marks. Give separate points with a reason each: **coal and iron, capital, colonies, Agricultural Revolution, stability and navy, transport**. Just writing \"England was rich\" gets no credit.",
        },
        {
          type: "keypoints",
          items: [
            "The Industrial Revolution was the shift from hand production at home to machine production in factories.",
            "It began in England in the second half of the 18th century and spread worldwide.",
            "England had coal and iron, capital, colonies, an Agricultural Revolution, stability, a navy and good transport.",
            "It was gradual, not sudden; it is a \"revolution\" because of how deeply it changed life.",
          ],
        },
      ],
      flashcards: [
        { front: "Industrial Revolution", back: "The change from hand-made goods at home to machine-made goods in factories, starting in 18th-century England." },
        { front: "Domestic system", back: "Goods made by hand at home or in small workshops, before factories." },
        { front: "Factory", back: "A large building where many workers produce goods with power-driven machines." },
        { front: "Enclosure", back: "Fencing common village land into private farms; it raised output and pushed villagers to towns." },
        { front: "Why England first? (any three)", back: "Coal and iron deposits, capital from trade, colonies for raw materials and markets." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In which country did the Industrial Revolution begin?",
          options: ["France", "Germany", "England", "USA"],
          answer: 2,
          explain: "It began in England in the second half of the 18th century.",
        },
        {
          kind: "truefalse",
          q: "Before the Industrial Revolution, most goods were made by hand at home.",
          answer: true,
          explain: "This was the domestic system, or cottage industry.",
        },
        {
          kind: "fill",
          q: "Fencing of common village land into private farms in England was called ___.",
          answer: ["enclosure", "enclosures", "the enclosure movement"],
          explain: "Enclosure increased farm output and pushed many villagers to look for work in towns.",
        },
        {
          kind: "mcq",
          q: "How did the Agricultural Revolution help industry?",
          options: [
            "It produced more food and freed labour for factories",
            "It invented the steam engine",
            "It ended trade with colonies",
            "It reduced the population",
          ],
          answer: 0,
          explain: "More food fed a growing town population, and villagers who lost common land became factory workers.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "What did England's colonies provide? (Choose all that apply.)",
          options: ["Raw materials such as cotton", "Markets for finished goods", "Profits for investment", "Steam engines"],
          answers: [0, 1, 2],
          explain: "Colonies supplied materials, markets and profits; steam engines were built in England.",
        },
        {
          kind: "mcq",
          q: "Why is it called a \"revolution\" though it took many decades?",
          options: [
            "Because there was fighting in the streets",
            "Because it changed how people worked and lived very deeply",
            "Because the king was overthrown",
            "Because it happened in one year",
          ],
          answer: 1,
          explain: "It is a revolution in its effects, not its speed.",
          difficulty: 2,
          hint: "Think about results, not speed.",
        },
      ],
    },
    {
      slug: "c9-ir-inventions-and-transport",
      title: "Inventions: Textiles, Steam, Iron and Transport",
      summary: "The key inventions in the textile industry, the steam engine, iron and steel, and the transport revolution of canals, railways and steamships.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "The Industrial Revolution began in the **cotton textile** industry. Each new machine solved one problem and created another. Faster weaving needed more yarn; faster spinning then needed faster looms.",
        },
        {
          type: "table",
          headers: ["Year", "Inventor", "Invention", "What it did"],
          rows: [
            ["1733", "**John Kay**", "Flying shuttle", "Made weaving much faster"],
            ["1764", "**James Hargreaves**", "Spinning jenny", "One worker could spin several threads at once"],
            ["1769", "**Richard Arkwright**", "Water frame", "Water-powered spinning of strong thread; led to factories"],
            ["1779", "**Samuel Crompton**", "Spinning mule", "Combined jenny and water frame; fine, strong yarn"],
            ["1785", "**Edmund Cartwright**", "Power loom", "Weaving by machine power"],
            ["1793", "**Eli Whitney** (USA)", "Cotton gin", "Quickly separated cotton fibre from seeds"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who invented the spinning jenny?",
              options: ["John Kay", "James Hargreaves", "Samuel Crompton", "Eli Whitney"],
              answer: 1,
              explain: "James Hargreaves invented the spinning jenny around 1764.",
            },
          ],
        },
        {
          type: "heading",
          text: "Steam power and iron",
        },
        {
          type: "text",
          md: "**Thomas Newcomen** built a steam engine in 1712 to pump water out of mines, but it wasted a lot of fuel. **James Watt** improved it greatly; he patented his engine in **1769**. Watt's engine could drive machines, so factories no longer had to be built beside rivers.\n\nMachines needed iron. **Abraham Darby** (1709) smelted iron using **coke** (made from coal) instead of charcoal, which was running short. Later, **Henry Bessemer** (1856) found a cheap way to make **steel**, which is stronger than iron.",
        },
        {
          type: "heading",
          text: "The transport revolution",
        },
        {
          type: "list",
          items: [
            "**Roads**: **John McAdam** built roads with layers of broken stone, making travel smoother and faster.",
            "**Canals**: the **Bridgewater Canal** (1761) carried coal cheaply to Manchester.",
            "**Railways**: **George Stephenson** built steam locomotives. The **Stockton–Darlington** railway opened in **1825**; his locomotive *Rocket* (1829) worked the **Liverpool–Manchester** line, opened in **1830**.",
            "**Steamships**: **Robert Fulton** of the USA ran the steamboat *Clermont* in **1807**.",
          ],
        },
        {
          type: "example",
          title: "Seeing a chain of inventions",
          problem: "Explain how the flying shuttle led to new spinning machines.",
          steps: [
            "The flying shuttle (1733) let weavers weave much faster.",
            "Weavers now needed more yarn than hand spinners could supply: a **yarn shortage**.",
            "Inventors answered with spinning machines: the spinning jenny, water frame and mule.",
            "Now there was too much yarn for hand looms, so the power loom (1785) followed.",
          ],
          answer: "Each invention created a new bottleneck: faster weaving caused a yarn shortage, which led to spinning machines, which in turn led to the power loom.",
        },
        {
          type: "mistake",
          wrong: "James Watt invented the first steam engine.",
          right: "Thomas Newcomen built an earlier steam engine (1712) for pumping mines. James Watt **improved** it, making it efficient enough to drive factory machines.",
          why: "Watt's name is linked to steam everywhere (even the unit of power, the watt), so students assume he was the first. His achievement was improvement, not the first invention.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each inventor to the invention.",
            pairs: [
              ["John Kay", "Flying shuttle"],
              ["Richard Arkwright", "Water frame"],
              ["Edmund Cartwright", "Power loom"],
              ["George Stephenson", "Rocket locomotive"],
              ["Abraham Darby", "Smelting iron with coke"],
            ],
            explain: "Textiles (Kay, Arkwright, Cartwright), iron (Darby) and transport (Stephenson) developed together; each industry fed the others.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Inventor–invention matching is common. Learn the textile machines **in order**: flying shuttle → spinning jenny → water frame → mule → power loom. A frequent error is giving the power loom to Kay or the cotton gin to an Englishman; Eli Whitney was **American**.",
        },
        {
          type: "keypoints",
          items: [
            "Textile inventions: flying shuttle (Kay, 1733), spinning jenny (Hargreaves), water frame (Arkwright), mule (Crompton), power loom (Cartwright), cotton gin (Whitney).",
            "Newcomen's engine (1712) pumped mines; Watt's improved engine (patented 1769) drove factory machines.",
            "Darby smelted iron with coke (1709); Bessemer made cheap steel (1856).",
            "Transport: McAdam roads, Bridgewater Canal (1761), Stockton–Darlington railway (1825), Liverpool–Manchester (1830), Fulton's steamboat (1807).",
          ],
        },
      ],
      flashcards: [
        { front: "Flying shuttle", back: "John Kay, 1733: made weaving much faster." },
        { front: "Spinning mule", back: "Samuel Crompton, 1779: combined the jenny and water frame for fine, strong yarn." },
        { front: "Power loom", back: "Edmund Cartwright, 1785: weaving by machine power." },
        { front: "James Watt", back: "Improved the steam engine (patent 1769) so it could drive factory machines." },
        { front: "Abraham Darby", back: "In 1709 smelted iron using coke instead of charcoal." },
        { front: "First public steam railway", back: "Stockton–Darlington, 1825 (George Stephenson)." },
        { front: "Cotton gin", back: "Eli Whitney (USA), 1793: separated cotton fibre from seeds." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who invented the power loom?",
          options: ["John Kay", "Edmund Cartwright", "Richard Arkwright", "James Watt"],
          answer: 1,
          explain: "Edmund Cartwright invented the power loom in 1785. Kay invented the flying shuttle.",
        },
        {
          kind: "order",
          q: "Arrange these textile inventions in time order.",
          items: ["Flying shuttle", "Spinning jenny", "Water frame", "Spinning mule", "Power loom"],
          explain: "1733 → 1764 → 1769 → 1779 → 1785.",
          difficulty: 2,
          hint: "Weaving got faster first, then spinning caught up, then weaving was mechanised.",
        },
        {
          kind: "truefalse",
          q: "James Watt built the very first steam engine.",
          answer: false,
          explain: "Newcomen's engine came earlier (1712). Watt improved it.",
        },
        {
          kind: "fill",
          q: "Abraham Darby smelted iron using ___ instead of charcoal.",
          answer: ["coke"],
          explain: "Coke, made from coal, replaced charcoal, which was running short.",
        },
        {
          kind: "mcq",
          q: "Which railway line opened in 1830 and used Stephenson's Rocket?",
          options: ["Stockton–Darlington", "Liverpool–Manchester", "London–Paris", "Bombay–Thane"],
          answer: 1,
          explain: "The Liverpool–Manchester line opened in 1830. Stockton–Darlington opened earlier, in 1825.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Why did Watt's engine matter so much for factories?",
          options: [
            "It made factories depend on rivers",
            "It could drive machines, so factories no longer had to be near water",
            "It ran without any fuel",
            "It was used only to pump water from mines",
          ],
          answer: 1,
          explain: "Earlier factories used water wheels. Steam freed factories to be built near coal, ports and towns.",
        },
        {
          kind: "multi",
          q: "Which of these belong to the transport revolution? (Choose all that apply.)",
          options: ["Bridgewater Canal", "McAdam roads", "Fulton's steamboat", "Spinning jenny"],
          answers: [0, 1, 2],
          explain: "The spinning jenny is a textile machine, not transport.",
        },
      ],
    },
    {
      slug: "c9-ir-impact",
      title: "Effects of the Industrial Revolution",
      summary: "The factory system, the growth of towns, the working class and child labour, capitalism and socialism, and the rise of imperialism.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "The Industrial Revolution produced goods in huge quantities and made some nations very rich. It also changed society in ways that brought great hardship to many workers.",
        },
        {
          type: "heading",
          text: "Economic effects",
        },
        {
          type: "list",
          items: [
            "**Factory system**: production moved from homes to factories, where workers were paid wages and machines set the pace.",
            "**Mass production**: goods became cheaper and more plentiful.",
            "**Capitalism**: an economic system in which private owners (**capitalists**) own factories and machines and run them for profit. Factory owners became a rich and powerful class.",
            "Decline of cottage industries: hand workers could not compete with cheap machine goods.",
          ],
        },
        {
          type: "heading",
          text: "Social effects",
        },
        {
          type: "list",
          items: [
            "**Urbanisation**: people moved from villages to towns for work. Cities like **Manchester** grew fast, with crowded **slums**, dirty water and disease.",
            "**Working class**: a new class of wage workers who owned nothing but their labour. They worked 12–16 hours a day for low pay.",
            "**Child and women labour**: children and women worked in mills and mines for very low wages.",
            "Workers formed **trade unions** to demand better pay and conditions, and governments slowly passed **factory laws**.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is urbanisation?",
              options: ["Growth of villages", "Movement of people to towns and growth of cities", "Building more farms", "Moving factories to villages"],
              answer: 1,
              explain: "Factories were in towns, so people moved there and cities grew rapidly.",
            },
          ],
        },
        {
          type: "heading",
          text: "Political and world effects",
        },
        {
          type: "text",
          md: "The gap between rich owners and poor workers led thinkers to question capitalism. **Socialism** is the idea that the means of production should belong to society as a whole, so that wealth is shared fairly. **Karl Marx** argued that workers should end capitalism.\n\nIndustrial nations needed raw materials and markets, so they competed to capture colonies in Asia and Africa. This is **imperialism**: one country extending its control over other lands. In **India**, cheap British machine-made cloth flooded the market, and the famous handloom industry declined, while India was made a supplier of raw cotton.",
        },
        {
          type: "example",
          title: "Linking England and India",
          problem: "Explain how the Industrial Revolution in England affected weavers in India.",
          steps: [
            "English mills produced cotton cloth by machine, much more cheaply than handlooms.",
            "Britain controlled India and allowed British cloth in with low duties.",
            "Indian weavers could not match the low price, so many lost their livelihood.",
            "India was turned into an exporter of raw cotton for English mills and a market for their cloth.",
          ],
          answer: "Cheap British machine cloth ruined many Indian handloom weavers, and India became a supplier of raw cotton and a market for British goods.",
        },
        {
          type: "mistake",
          wrong: "The Industrial Revolution made everyone richer and happier.",
          right: "It made factory owners and industrial nations rich, but early factory workers, including children, faced long hours, low wages and unhealthy slums.",
          why: "We see the benefits today (cheap goods, trains, machines), so it seems good for all. In its early decades, the gains went mainly to owners, and workers had to struggle through unions and laws for a fair share.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is each one an economic or a social effect?",
            groups: ["Economic effect", "Social effect"],
            items: [
              { text: "Mass production of cheap goods", group: 0, hint: "This is about how much is produced." },
              { text: "Growth of crowded slums", group: 1, hint: "This is about how people lived." },
              { text: "Rise of capitalism", group: 0, hint: "This is about who owns factories and profit." },
              { text: "Child labour in mills", group: 1, hint: "This is about the lives of workers." },
              { text: "Decline of cottage industries", group: 0, hint: "This is about production at home." },
              { text: "Birth of trade unions", group: 1, hint: "Workers joined together for better conditions." },
            ],
            explain: "Economic effects change how goods are made and who owns them; social effects change how people live and relate to each other.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "For \"Effects of the Industrial Revolution\", organise your answer under headings: **economic**, **social** and **political**. Mention both **capitalism** and **socialism**: the ICSE syllabus expects you to explain capitalism as a result and socialism as a reaction to it. Karnataka students study the same effects in \"The Age of Revolutions\".",
        },
        {
          type: "keypoints",
          items: [
            "Economic: factory system, mass production, capitalism, decline of cottage industries.",
            "Social: urbanisation, slums, a new working class, child and women labour, trade unions.",
            "Socialism arose as a reaction to the inequality of capitalism.",
            "Imperialism grew as nations sought raw materials and markets; Indian handlooms declined.",
          ],
        },
      ],
      flashcards: [
        { front: "Capitalism", back: "An economic system in which private owners own the means of production and run them for profit." },
        { front: "Socialism", back: "The idea that the means of production should belong to society so wealth is shared fairly." },
        { front: "Urbanisation", back: "The movement of people to towns and the growth of cities." },
        { front: "Imperialism", back: "One country extending its control over other lands, often for raw materials and markets." },
        { front: "Working class", back: "Wage workers who own nothing but their labour, created by the factory system." },
        { front: "Effect on Indian weavers", back: "Cheap British machine cloth ruined many handloom weavers; India supplied raw cotton." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In capitalism, factories are owned by:",
          options: ["The workers together", "Private owners who run them for profit", "The Church", "The village council"],
          answer: 1,
          explain: "Capitalists own the means of production. Ownership by society is the socialist idea.",
        },
        {
          kind: "truefalse",
          q: "Early factory workers usually worked short hours for high wages.",
          answer: false,
          explain: "They often worked 12–16 hours a day for low wages.",
        },
        {
          kind: "fill",
          q: "One country extending its control over other lands is called ___.",
          answer: ["imperialism", "colonialism"],
          explain: "Industrial nations sought colonies for raw materials and markets.",
        },
        {
          kind: "multi",
          q: "Which were social effects of the Industrial Revolution? (Choose all that apply.)",
          options: ["Growth of slums", "Child labour", "Trade unions", "Invention of the flying shuttle"],
          answers: [0, 1, 2],
          explain: "The flying shuttle was an invention, a cause of change, not a social effect.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "How did the Industrial Revolution affect India's handloom industry?",
          options: ["It grew rapidly", "It declined as cheap British cloth flooded the market", "It was untouched", "It moved to England"],
          answer: 1,
          explain: "Indian weavers could not compete with cheap machine cloth.",
        },
        {
          kind: "mcq",
          q: "Socialism arose mainly as a reaction to:",
          options: ["The Renaissance", "The inequality created by capitalism", "The steam engine's noise", "The Reformation"],
          answer: 1,
          explain: "Socialists objected that profits went to owners while workers stayed poor.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Christianity and Islam (Karnataka)                                  */
/* ------------------------------------------------------------------ */
const christianityIslam: Topic = {
  slug: "c9-christianity-and-islam",
  title: "Christianity and Islam",
  icon: "🕊️",
  description: "The rise of two world religions: the life and teachings of Jesus Christ and of Prophet Muhammad, and how their faiths spread.",
  lessons: [
    {
      slug: "c9-ci-christianity",
      title: "Christianity: Jesus Christ and the Spread of the Faith",
      summary: "The life and teachings of Jesus Christ, the Bible, the apostles, and how Christianity became the religion of the Roman Empire and reached India.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🎄",
          caption: "Christmas is celebrated across India, from churches in Goa and Kerala to homes in Bengaluru and Shillong. It marks the birth of Jesus Christ.",
        },
        {
          type: "text",
          md: "**Christianity** is the religion founded on the life and teachings of **Jesus Christ**. Jesus was born in **Bethlehem** in Judea, a region of **Palestine**, which was then ruled by the **Roman Empire**. His parents were **Joseph**, a carpenter, and **Mary**.\n\nJesus was **baptised** by **John the Baptist**. (**Baptism** is a ceremony with water that marks a person's entry into the faith.) Around the age of thirty he began to preach, travelling from village to village with his followers.",
        },
        {
          type: "heading",
          text: "The teachings of Jesus",
        },
        {
          type: "list",
          items: [
            "God is the loving **father** of all; all people are brothers and sisters.",
            "Love God, and love your neighbour as yourself.",
            "**Forgive** those who wrong you, and love even your enemies.",
            "Show **compassion** to the poor, the sick and the sorrowful.",
            "Repent for your sins; a pure heart matters more than rituals.",
          ],
        },
        {
          type: "text",
          md: "Jesus taught through simple stories called **parables**, and his famous **Sermon on the Mount** sums up many of his teachings. He chose **twelve disciples**, called **apostles**, to spread his message.\n\nThe priests of the time and the Roman rulers saw him as a threat. He was **crucified** (put to death on a cross) in **Jerusalem** on the orders of the Roman governor **Pontius Pilate**. Christians believe that Jesus rose from the dead on the third day; this is celebrated as **Easter**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who baptised Jesus?",
              options: ["Pontius Pilate", "John the Baptist", "St Peter", "Emperor Constantine"],
              answer: 1,
              explain: "Jesus was baptised by John the Baptist before he began preaching.",
            },
          ],
        },
        {
          type: "heading",
          text: "The Bible and the spread of Christianity",
        },
        {
          type: "text",
          md: "The holy book of Christians is the **Bible**. It has two parts: the **Old Testament** and the **New Testament**. The New Testament tells of the life and teachings of Jesus.\n\nAfter Jesus, the apostles spread the faith. **St Peter** preached in Rome, and **St Paul** travelled widely around the Mediterranean. At first Roman emperors persecuted Christians. Then Emperor **Constantine** accepted Christianity and allowed Christians to worship freely (**Edict of Milan, 313 CE**). Later, Emperor **Theodosius** made it the official religion of the empire.\n\nThe head of the Church in Rome came to be called the **Pope**. In India, tradition holds that **St Thomas**, one of the apostles, came to Kerala in the first century CE.",
        },
        {
          type: "example",
          title: "Using a source of belief carefully",
          problem: "A student writes: \"St Thomas definitely came to Kerala in 52 CE.\" How should a history answer phrase this?",
          steps: [
            "Ask what kind of evidence we have: mainly tradition passed down among Christians of Kerala.",
            "Note the difference: tradition is important, but it is not the same as a dated record.",
            "Rewrite with care: \"According to tradition, St Thomas came to Kerala in the first century CE.\"",
          ],
          answer: "Write \"According to tradition, St Thomas the Apostle came to Kerala in the first century CE\", which is accurate and respectful.",
        },
        {
          type: "mistake",
          wrong: "Christianity began in Rome.",
          right: "Christianity began in **Palestine** (Bethlehem and Jerusalem), in western Asia. Rome later became its main centre in Europe.",
          why: "Because the Pope lives in Rome, students assume the religion started there. Jesus lived and preached in Palestine, which the Romans then ruled.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put these events in the order they happened.",
            items: [
              "Birth of Jesus in Bethlehem",
              "Jesus is baptised by John the Baptist",
              "Jesus preaches and chooses twelve apostles",
              "Jesus is crucified in Jerusalem",
              "Constantine allows Christians to worship freely",
            ],
            explain: "Jesus's life comes first; the Roman Empire accepted the faith about three centuries later, after the apostles had spread it.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka board tip",
          md: "KSEAB questions often ask, \"What are the teachings of Jesus Christ?\" Give at least **four** separate teachings (love, forgiveness, compassion, brotherhood under one God, repentance). Also be ready to name the two parts of the Bible.",
        },
        {
          type: "keypoints",
          items: [
            "Jesus Christ was born in Bethlehem in Palestine, under Roman rule, and baptised by John the Baptist.",
            "He taught love, forgiveness, compassion and that God is the father of all.",
            "He was crucified in Jerusalem on the orders of Pontius Pilate.",
            "The Bible has the Old and New Testaments; the apostles Peter and Paul spread the faith.",
            "Constantine allowed Christian worship (313 CE); Theodosius made it the official Roman religion.",
          ],
        },
      ],
      flashcards: [
        { front: "Birthplace of Jesus", back: "Bethlehem, in Judea (Palestine), then under Roman rule." },
        { front: "Baptism", back: "A ceremony with water marking entry into the Christian faith." },
        { front: "Apostles", back: "The twelve disciples chosen by Jesus to spread his message." },
        { front: "Parts of the Bible", back: "The Old Testament and the New Testament." },
        { front: "Edict of Milan (313 CE)", back: "Emperor Constantine's grant of freedom of worship to Christians." },
        { front: "St Thomas", back: "An apostle who, according to tradition, came to Kerala in the first century CE." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Where was Jesus Christ born?",
          options: ["Rome", "Jerusalem", "Bethlehem", "Mecca"],
          answer: 2,
          explain: "Jesus was born in Bethlehem. He was crucified in Jerusalem.",
        },
        {
          kind: "fill",
          q: "Jesus was crucified on the orders of the Roman governor Pontius ___.",
          answer: ["Pilate"],
          explain: "Pontius Pilate was the Roman governor of Judea.",
        },
        {
          kind: "truefalse",
          q: "Emperor Constantine made Christianity illegal in the Roman Empire.",
          answer: false,
          explain: "Constantine allowed Christians to worship freely; it was earlier emperors who persecuted them.",
        },
        {
          kind: "multi",
          q: "Which of these were teachings of Jesus? (Choose all that apply.)",
          options: ["Love your neighbour", "Forgive those who wrong you", "Show compassion to the poor", "Only priests can pray to God"],
          answers: [0, 1, 2],
          explain: "Jesus taught that a pure heart matters more than rituals; prayer was open to all.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which emperor made Christianity the official religion of the Roman Empire?",
          options: ["Constantine", "Theodosius", "Augustus", "Charlemagne"],
          answer: 1,
          explain: "Constantine allowed freedom of worship; Theodosius later made it the official religion.",
          difficulty: 2,
          hint: "One emperor tolerated it; a later one made it official.",
        },
        {
          kind: "mcq",
          q: "The simple stories Jesus used to teach are called:",
          options: ["Parables", "Theses", "Sermons of Trent", "Epics"],
          answer: 0,
          explain: "Parables are short stories with a moral or religious lesson.",
        },
      ],
    },
    {
      slug: "c9-ci-islam",
      title: "Islam: Prophet Muhammad and the Spread of the Faith",
      summary: "The life of Prophet Muhammad, the Hijra, the Quran and the Five Pillars, the Caliphs, and the spread and contributions of the Islamic world.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "**Islam** means **submission** to the will of God (**Allah**). Its followers are called **Muslims**. Islam was preached by **Prophet Muhammad** in **Arabia** in the 7th century CE.\n\nMuhammad was born in **Mecca** in about **570 CE** into the **Quraysh** tribe. He lost his parents as a child and was raised by his grandfather and his uncle. As a young man he worked as a trader and married **Khadija**, a wealthy widow whose trade he managed.",
        },
        {
          type: "text",
          md: "Muhammad often went to pray alone in a cave on **Mount Hira** near Mecca. Muslims believe that there, around **610 CE**, he received his first message from God. He began to preach that there is **only one God** and that all believers are equal.\n\nMany rich people of Mecca opposed him, because his teachings challenged the worship of many idols there. In **622 CE** Muhammad and his followers moved from Mecca to **Medina**. This migration is called the **Hijra**, and the Islamic calendar (**Hijri** era) begins from it. In **630 CE** he returned to Mecca. He died in Medina in **632 CE**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "In which year CE did the Hijra, the start of the Islamic calendar, take place?",
              answer: 622,
              explain: "Muhammad's migration from Mecca to Medina in 622 CE marks the start of the Hijri era.",
            },
          ],
        },
        {
          type: "heading",
          text: "Teachings and the Five Pillars",
        },
        {
          type: "text",
          md: "The holy book of Islam is the **Quran**. Muslims believe it contains the messages God revealed to Muhammad. Islam teaches belief in one God, equality and brotherhood of all believers, honesty, and kindness to the poor, orphans and travellers.",
        },
        {
          type: "table",
          headers: ["Pillar", "Meaning"],
          rows: [
            ["**Shahada**", "Declaring faith in one God and in Muhammad as His prophet"],
            ["**Salat**", "Praying five times a day"],
            ["**Zakat**", "Giving a share of one's wealth in charity"],
            ["**Sawm**", "Fasting from dawn to sunset in the month of **Ramadan**"],
            ["**Hajj**", "Pilgrimage to Mecca at least once in life, if one can afford it"],
          ],
        },
        {
          type: "heading",
          text: "The Caliphs and the spread of Islam",
        },
        {
          type: "text",
          md: "After Muhammad, leaders called **Caliphs** (successors) led the Muslim community. The first four were **Abu Bakr, Umar, Uthman and Ali**. Under them and later dynasties, the **Umayyads** (capital **Damascus**) and the **Abbasids** (capital **Baghdad**), Islam spread to Persia, Central Asia, North Africa and Spain.\n\nIslam reached India peacefully through **Arab traders** on the Kerala coast, and also by conquest when **Muhammad bin Qasim** took **Sindh** in **712 CE**.",
        },
        {
          type: "list",
          items: [
            "Arab scholars translated Greek, Persian and Indian works into Arabic and passed them on to Europe.",
            "Indian numerals, including zero, reached Europe through the Arabs, which is why Europeans called them \"Arabic numerals\".",
            "**Al-Khwarizmi** of Baghdad wrote on **algebra**; the word comes from the title of his book.",
            "**Ibn Sina** (known in Europe as Avicenna) wrote a famous book of medicine.",
          ],
        },
        {
          type: "example",
          title: "Explaining a name",
          problem: "Europeans call 0–9 \"Arabic numerals\". Does that mean the Arabs invented them?",
          steps: [
            "Trace the origin: the decimal place-value system with zero developed in India.",
            "Trace the route: Arab scholars learned it, used it, and wrote about it in Arabic.",
            "Trace the arrival: Europe learned the numerals from Arabic books, so named them after the Arabs.",
          ],
          answer: "No. The numerals came from India; the Arabs carried them to Europe, which is why Europeans called them Arabic numerals.",
        },
        {
          type: "mistake",
          wrong: "The Islamic calendar starts from the birth of Prophet Muhammad.",
          right: "The Islamic (Hijri) calendar starts from the **Hijra**, Muhammad's migration from Mecca to Medina in **622 CE**.",
          why: "The Christian era is counted from the birth of Jesus, so students assume Islam does the same. The Hijri era marks the founding of the first Muslim community in Medina instead.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each pillar of Islam to its meaning.",
            pairs: [
              ["Salat", "Praying five times a day"],
              ["Zakat", "Giving to charity"],
              ["Sawm", "Fasting in Ramadan"],
              ["Hajj", "Pilgrimage to Mecca"],
              ["Shahada", "Declaration of faith"],
            ],
            explain: "The Five Pillars are the basic duties of every Muslim: faith, prayer, charity, fasting and pilgrimage.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka board tip",
          md: "Learn the key dates as a set: **570** (birth), **610** (first revelation), **622** (Hijra), **630** (return to Mecca), **632** (death). A frequent error is writing 570 as the start of the Islamic calendar. Name all **five pillars** when asked about Islamic duties.",
        },
        {
          type: "keypoints",
          items: [
            "Prophet Muhammad was born in Mecca about 570 CE and received his first revelation around 610 CE.",
            "The Hijra to Medina in 622 CE begins the Islamic calendar.",
            "The Quran is the holy book; the Five Pillars are Shahada, Salat, Zakat, Sawm and Hajj.",
            "The Caliphs and the Umayyad and Abbasid dynasties spread Islam from Spain to Central Asia.",
            "Islam reached India through Arab traders in Kerala and the conquest of Sindh (712 CE).",
          ],
        },
      ],
      flashcards: [
        { front: "Meaning of Islam", back: "Submission to the will of God (Allah)." },
        { front: "Hijra", back: "Prophet Muhammad's migration from Mecca to Medina in 622 CE; start of the Islamic calendar." },
        { front: "Quran", back: "The holy book of Islam." },
        { front: "Five Pillars of Islam", back: "Shahada (faith), Salat (prayer), Zakat (charity), Sawm (fasting), Hajj (pilgrimage)." },
        { front: "Caliph", back: "A successor of the Prophet who led the Muslim community." },
        { front: "Al-Khwarizmi", back: "Scholar of Baghdad whose work on algebra gave the subject its name." },
        { front: "Muhammad bin Qasim", back: "Arab general who conquered Sindh in 712 CE." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Where was Prophet Muhammad born?",
          options: ["Medina", "Mecca", "Baghdad", "Jerusalem"],
          answer: 1,
          explain: "He was born in Mecca and later migrated to Medina.",
        },
        {
          kind: "mcq",
          q: "The Islamic calendar begins from:",
          options: ["The birth of Muhammad", "The Hijra in 622 CE", "The death of Muhammad", "The conquest of Sindh"],
          answer: 1,
          explain: "The Hijri era counts from the migration to Medina in 622 CE.",
        },
        {
          kind: "fill",
          q: "Fasting from dawn to sunset during the month of ___ is one of the Five Pillars.",
          answer: ["Ramadan", "Ramzan", "Ramazan"],
          explain: "Sawm, fasting in Ramadan, is one of the Five Pillars.",
        },
        {
          kind: "truefalse",
          q: "Abu Bakr was the first Caliph after Prophet Muhammad.",
          answer: true,
          explain: "The first four Caliphs were Abu Bakr, Umar, Uthman and Ali.",
        },
        {
          kind: "order",
          q: "Arrange the events of the Prophet's life in order.",
          items: ["Birth in Mecca", "First revelation on Mount Hira", "Hijra to Medina", "Return to Mecca", "Death in Medina"],
          explain: "570 → 610 → 622 → 630 → 632 CE.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which was the capital of the Abbasid Caliphs?",
          options: ["Damascus", "Baghdad", "Mecca", "Cairo"],
          answer: 1,
          explain: "The Abbasids ruled from Baghdad; the Umayyads ruled from Damascus.",
          difficulty: 2,
          hint: "Al-Khwarizmi worked in this city.",
        },
        {
          kind: "multi",
          q: "How did Islam reach India? (Choose all that apply.)",
          options: ["Through Arab traders on the Kerala coast", "Through Muhammad bin Qasim's conquest of Sindh", "Through Martin Luther", "Through the Crusades"],
          answers: [0, 1],
          explain: "Arab traders and the conquest of Sindh (712 CE) brought Islam to India. The other two belong to European history.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Medieval Europe (Karnataka; with the Renaissance and Reformation)   */
/* ------------------------------------------------------------------ */
const medievalEurope: Topic = {
  slug: "c9-medieval-europe",
  title: "Medieval Europe",
  icon: "🏰",
  description: "Life in Europe in the Middle Ages: feudalism and the manor, the Church and monasteries, the Crusades and the rise of towns.",
  lessons: [
    {
      slug: "c9-me-feudalism",
      title: "Feudalism and the Manor",
      summary: "What the Middle Ages were, how the feudal system worked from king to serf, life on a manor, and why feudalism declined.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🏰",
          caption: "Picture a stone castle on a hill, with fields and huts all around it. Most people in medieval Europe lived in and around places like this.",
        },
        {
          type: "text",
          md: "The **Middle Ages** (or **medieval period**) in Europe is the long time between the fall of the **Western Roman Empire** in **476 CE** and the start of the modern age in the 15th century (often marked by the fall of Constantinople in 1453).\n\nWith no strong central government, Europe was often attacked by invaders. Kings could not protect everyone themselves. So a system grew in which land was given in return for loyalty and military service. This is called **feudalism** (from *feud* or *fief*, meaning land granted).",
        },
        {
          type: "table",
          headers: ["Level", "Who", "Gave", "Got"],
          rows: [
            ["Top", "**King**", "Large areas of land (fiefs) to nobles", "Loyalty and soldiers"],
            ["Second", "**Nobles / lords** (barons, dukes, counts)", "Military service to the king; smaller fiefs to knights", "Land and power over the people on it"],
            ["Third", "**Knights**", "Service as mounted warriors", "Land to live on"],
            ["Bottom", "**Serfs**", "Labour on the lord's land, dues and part of their crop", "Protection and a small plot to farm"],
          ],
        },
        {
          type: "text",
          md: "A person who received land from a higher lord was his **vassal**. The vassal knelt and swore an **oath of loyalty** (called **homage** and **fealty**).\n\n**Serfs** were peasants tied to the land. They could not leave the manor without the lord's permission, and they had to work on the lord's fields for some days each week.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who was at the bottom of the feudal pyramid?",
              options: ["Knights", "Serfs", "Nobles", "Bishops"],
              answer: 1,
              explain: "Serfs worked the land and owed labour and dues to their lord in return for protection.",
            },
          ],
        },
        {
          type: "heading",
          text: "Life on the manor",
        },
        {
          type: "text",
          md: "The **manor** was the lord's estate: his castle or manor house, the village of serfs, fields, pastures, woods, a mill, an oven and a church. A manor produced almost everything its people needed, so it was largely **self-sufficient**. There was little use of money or trade.",
        },
        {
          type: "example",
          title: "Reading a feudal relationship",
          problem: "A knight receives a village from a baron and promises to fight for him for 40 days a year. Who is the vassal here, and what has each side gained?",
          steps: [
            "The one who receives land is the vassal: here, the **knight**.",
            "The baron gains a trained mounted warrior for his army.",
            "The knight gains land, whose serfs will feed him and his family.",
            "Note the chain: the baron himself is a vassal of the king.",
          ],
          answer: "The knight is the baron's vassal. The baron gets military service; the knight gets land and its produce. The same exchange links the baron to the king.",
        },
        {
          type: "mistake",
          wrong: "Serfs were the same as slaves and could be sold anywhere.",
          right: "Serfs were tied to the **land**, not owned as property. They could not leave without permission, but they had their own plots, homes and families, and could not be sold away from the manor like slaves.",
          why: "Both serfs and slaves lacked freedom, so they sound the same. The difference is that a serf's bond was to the land and the lord's manor, while a slave was owned outright as a person.",
        },
        {
          type: "heading",
          text: "Decline of feudalism",
        },
        {
          type: "list",
          items: [
            "**The Crusades**: many nobles died or sold land to pay for the wars.",
            "**Gunpowder and cannon**: castle walls and armoured knights lost their value.",
            "**The Black Death** (1347–1351): this plague killed a huge share of Europe's people. With few workers left, surviving peasants could demand wages or freedom.",
            "**Growth of towns and trade**: serfs escaped to towns, and money replaced service.",
            "**Strong kings** with paid armies no longer needed feudal lords.",
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange the feudal ranks from top to bottom.",
            items: ["King", "Nobles and lords", "Knights", "Serfs"],
            explain: "Land flowed down the pyramid; service and loyalty flowed up. The serfs at the bottom fed everyone above.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka board tip",
          md: "Questions like \"What were the causes for the decline of feudalism?\" expect at least **four** reasons. Explain each in a line: Crusades, gunpowder, Black Death, growth of towns and trade, strong monarchs. Draw the feudal pyramid if a diagram is allowed; it earns marks quickly.",
        },
        {
          type: "keypoints",
          items: [
            "The Middle Ages ran from the fall of Rome (476 CE) to about the 15th century.",
            "Feudalism: land (fiefs) granted in return for loyalty and military service.",
            "Pyramid: king → nobles → knights → serfs; vassals swore homage and fealty.",
            "The manor was a largely self-sufficient estate run by a lord.",
            "Feudalism declined due to the Crusades, gunpowder, the Black Death, towns and trade, and strong kings.",
          ],
        },
      ],
      flashcards: [
        { front: "Feudalism", back: "A system in which land was granted in return for loyalty and military service." },
        { front: "Fief", back: "Land granted by a lord to a vassal." },
        { front: "Vassal", back: "A person who received land from a lord and swore loyalty to him." },
        { front: "Serf", back: "A peasant tied to the lord's land who owed labour and dues." },
        { front: "Manor", back: "A lord's estate with his house, village, fields, mill and church; largely self-sufficient." },
        { front: "Black Death", back: "The plague of 1347–1351 that killed a huge share of Europe's people and weakened feudalism." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Land granted by a lord to a vassal was called a:",
          options: ["Manor", "Fief", "Guild", "Tithe"],
          answer: 1,
          explain: "A fief was the land grant; a manor was the estate where the lord lived and serfs worked.",
        },
        {
          kind: "truefalse",
          q: "A manor was largely self-sufficient.",
          answer: true,
          explain: "It produced most of what its people needed, so there was little trade.",
        },
        {
          kind: "fill",
          q: "The Western Roman Empire fell in the year ___ CE.",
          answer: ["476"],
          explain: "476 CE is taken as the start of the Middle Ages in Europe.",
        },
        {
          kind: "multi",
          q: "Which helped bring about the decline of feudalism? (Choose all that apply.)",
          options: ["Use of gunpowder", "The Black Death", "Growth of towns and trade", "Building more castles"],
          answers: [0, 1, 2],
          explain: "Castles were part of feudal power; gunpowder made them weaker.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "How was a serf different from a slave?",
          options: [
            "A serf was tied to the land and could not be sold away from it",
            "A serf was free to go anywhere",
            "A serf owned the manor",
            "There was no difference",
          ],
          answer: 0,
          explain: "Serfs were bound to the land but had homes and plots; slaves were owned as property.",
          difficulty: 2,
          hint: "Think about whether the bond was to a person or to the land.",
        },
        {
          kind: "order",
          q: "Arrange the feudal ranks from highest to lowest.",
          items: ["King", "Nobles", "Knights", "Serfs"],
          explain: "The king granted land to nobles, nobles to knights, and serfs worked the land.",
        },
      ],
    },
    {
      slug: "c9-me-church-crusades-towns",
      title: "The Church, the Crusades and the Rise of Towns",
      summary: "The power of the medieval Church and monasteries, the Crusades and their results, and the growth of towns, guilds and universities.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "In medieval Europe the **Church** was the most powerful institution. It was headed by the **Pope** in Rome, with archbishops, bishops and priests below him. The Church owned large lands, collected the **tithe** (one-tenth of a person's produce or income), and ran its own courts.\n\nThe Pope could **excommunicate** a person, even a king: expel him from the Church. People believed this would cost them salvation, so it was a powerful weapon.",
        },
        {
          type: "heading",
          text: "Monasteries",
        },
        {
          type: "text",
          md: "**Monks** were men who gave up worldly life to live in **monasteries** under strict rules of prayer and work. **St Benedict** of Italy founded an important order with simple rules. Women who led a similar life were **nuns**, living in **convents**.\n\nMonasteries were centres of learning. Monks copied old manuscripts by hand, ran schools, cared for the sick and gave shelter to travellers.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "Medieval monks helped preserve learning by copying manuscripts by hand.",
              answer: true,
              explain: "Before printing, monasteries kept knowledge alive by copying books.",
            },
          ],
        },
        {
          type: "heading",
          text: "The Crusades (1096–1291)",
        },
        {
          type: "text",
          md: "**Jerusalem** is a holy city for Jews, Christians and Muslims. In the 11th century it was under the control of the **Seljuk Turks**. In **1095** **Pope Urban II** called on Christians to win back the Holy Land. The series of wars that followed are called the **Crusades** (from *crux*, the Latin word for cross).\n\nThe First Crusade captured Jerusalem in **1099**. In **1187** the Muslim leader **Saladin** recaptured it. The Crusades went on, on and off, until **1291**, but the Christians failed to hold the Holy Land.",
        },
        {
          type: "list",
          items: [
            "**Trade grew**: Europeans came to like eastern goods such as spices, silk and sugar; Italian cities like **Venice** and **Genoa** grew rich.",
            "**New knowledge**: contact with the Arab world brought Europe new learning in science, medicine and mathematics.",
            "**Feudalism weakened**: many nobles died or sold their lands; kings grew stronger.",
            "The Pope's prestige suffered when the Crusades failed.",
          ],
        },
        {
          type: "heading",
          text: "Towns, guilds and universities",
        },
        {
          type: "text",
          md: "As trade grew, **towns** grew. Many towns bought **charters** (written grants of rights) from kings or lords to govern themselves. Serfs who escaped to a town were often free after living there for a year and a day.\n\nTraders and craftsmen formed **guilds**: associations that set prices, standards and training. **Merchant guilds** were for traders; **craft guilds** were for workers such as weavers and goldsmiths. A boy trained as an **apprentice**, then became a **journeyman** (paid worker) and finally a **master**. Universities grew too, such as those of **Bologna, Paris and Oxford**.",
        },
        {
          type: "example",
          title: "Tracing a long chain",
          problem: "Show how the Crusades helped prepare the way for the Renaissance.",
          steps: [
            "The Crusades brought Europeans into contact with the Arab world.",
            "Trade with the East grew, and Italian cities like Venice and Genoa became rich.",
            "Contact with Arab scholars brought new knowledge in science and mathematics, along with Greek works kept in Arabic translation.",
            "Rich Italian cities and new knowledge were two key causes of the Renaissance.",
          ],
          answer: "By increasing trade and contact with Arab learning, the Crusades made Italian cities rich and brought new knowledge, both of which helped the Renaissance begin in Italy.",
        },
        {
          type: "mistake",
          wrong: "The Crusades were won by the European Christians, who held Jerusalem until modern times.",
          right: "The First Crusade took Jerusalem in 1099, but Saladin recaptured it in 1187. In the end the Crusaders failed to hold the Holy Land.",
          why: "Students remember the success of the First Crusade and stop there. The long-term result was failure, and the biggest effects were on trade and learning in Europe, not on control of Jerusalem.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Church life or town life?",
            groups: ["The medieval Church", "Medieval towns"],
            items: [
              { text: "Tithe", group: 0, hint: "One-tenth of produce paid to this institution." },
              { text: "Merchant guild", group: 1, hint: "Traders formed these associations." },
              { text: "Excommunication", group: 0, hint: "Only the Pope could use this weapon." },
              { text: "Charter of self-government", group: 1, hint: "Bought from a king or lord to run local affairs." },
              { text: "Monastery", group: 0, hint: "Monks lived here under strict rules." },
              { text: "Apprentice, journeyman, master", group: 1, hint: "The training ladder in a craft guild." },
            ],
            explain: "The Church shaped faith and learning; towns, with their guilds and charters, built a new life of trade and freedom outside the feudal manor.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka board tip",
          md: "\"What were the results of the Crusades?\" is a common question. Give **trade, new knowledge, decline of feudalism, and the weakening of the Pope's prestige**. Many students only describe the battles; the marks are for the **results**. This chapter then continues with the **Renaissance** and the **Reformation**.",
        },
        {
          type: "keypoints",
          items: [
            "The Pope headed a rich and powerful Church that collected tithes and could excommunicate people.",
            "Monasteries, such as those following St Benedict's rule, preserved learning.",
            "The Crusades (1096–1291) were wars for Jerusalem; Saladin recaptured it in 1187.",
            "Results: more trade, new knowledge, weaker feudalism, rich Italian cities.",
            "Towns grew with charters, guilds and universities like Bologna, Paris and Oxford.",
          ],
        },
      ],
      flashcards: [
        { front: "Excommunication", back: "Expulsion from the Church by the Pope; a powerful medieval weapon." },
        { front: "Monastery", back: "A community where monks lived under strict rules of prayer and work." },
        { front: "Crusades", back: "Wars between European Christians and Muslims for Jerusalem, 1096–1291." },
        { front: "Saladin", back: "Muslim leader who recaptured Jerusalem in 1187." },
        { front: "Guild", back: "An association of traders or craftsmen that set prices, standards and training." },
        { front: "Charter", back: "A written grant of rights, letting a town govern itself." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which Pope called for the First Crusade in 1095?",
          options: ["Leo X", "Urban II", "Gregory I", "Paul III"],
          answer: 1,
          explain: "Pope Urban II called the First Crusade in 1095.",
        },
        {
          kind: "fill",
          q: "In 1187 Jerusalem was recaptured by the Muslim leader ___.",
          answer: ["Saladin", "Salahuddin", "Salah ad-Din"],
          explain: "Saladin's victory ended Christian rule of Jerusalem after the First Crusade.",
        },
        {
          kind: "truefalse",
          q: "The Crusades helped trade between Europe and the East to grow.",
          answer: true,
          explain: "Europeans came to want eastern goods, and Italian ports grew rich.",
        },
        {
          kind: "mcq",
          q: "In a craft guild, what was the correct order of training?",
          options: ["Master → journeyman → apprentice", "Apprentice → journeyman → master", "Journeyman → apprentice → master", "Apprentice → master → journeyman"],
          answer: 1,
          explain: "A boy started as an apprentice, became a paid journeyman, and finally a master.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which were results of the Crusades? (Choose all that apply.)",
          options: ["Growth of trade", "New knowledge from the Arab world", "Weakening of feudalism", "Permanent Christian rule over Jerusalem"],
          answers: [0, 1, 2],
          explain: "The Crusaders did not keep Jerusalem; Saladin took it back in 1187.",
          difficulty: 2,
          hint: "Who held Jerusalem after 1187?",
        },
        {
          kind: "order",
          q: "Arrange in time order.",
          items: ["Pope Urban II calls the Crusade", "Crusaders capture Jerusalem", "Saladin recaptures Jerusalem", "The last Crusader stronghold falls"],
          explain: "1095 → 1099 → 1187 → 1291.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* American War of Independence (Karnataka "The Age of Revolutions")   */
/* ------------------------------------------------------------------ */
const americanRevolution: Topic = {
  slug: "c9-american-revolution",
  title: "The American War of Independence",
  icon: "🗽",
  description: "How thirteen British colonies in North America won their freedom and set up the United States.",
  lessons: [
    {
      slug: "c9-am-war-of-independence",
      title: "The American War of Independence (1775–1783)",
      summary: "The thirteen colonies, the causes of the revolt, the Declaration of Independence, the war and its results.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "In the 17th and 18th centuries, people from Britain and other parts of Europe settled along the Atlantic coast of North America. By the mid-18th century there were **thirteen British colonies**, such as Virginia, Massachusetts and New York. A **colony** is a land ruled by another country.\n\nThe colonists ran their own local assemblies, but the **British Parliament** made laws on trade and taxes for them. Under the policy of **mercantilism**, colonies were expected to send raw materials to Britain and buy British goods, so that Britain grew rich.",
        },
        {
          type: "heading",
          text: "Causes of the war",
        },
        {
          type: "list",
          items: [
            "**Debt from the Seven Years' War (1756–1763)**: Britain had fought France and wanted the colonies to share the cost.",
            "**New taxes**: the **Stamp Act (1765)** taxed newspapers and legal papers; later duties taxed goods such as tea.",
            "**\"No taxation without representation\"**: colonists had no members in the British Parliament, so they said it had no right to tax them.",
            "**New ideas**: writers such as **John Locke** argued that people have natural rights; **Thomas Paine**'s pamphlet *Common Sense* (1776) urged independence.",
            "**Trade restrictions**: British laws limited what the colonies could make and with whom they could trade.",
          ],
        },
        {
          type: "text",
          md: "In **1773**, to protest against the tax on tea, colonists in Boston dumped chests of British tea into the harbour. This is the **Boston Tea Party**. Britain punished Massachusetts with harsh laws. In **1774** the colonies sent representatives to the **First Continental Congress** at **Philadelphia** to plan joint action.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What did the slogan \"No taxation without representation\" mean?",
              options: [
                "Colonists wanted no taxes at all",
                "Britain should not tax the colonies because they had no members in the British Parliament",
                "Only the king could tax",
                "Colonists wanted to tax Britain",
              ],
              answer: 1,
              explain: "The colonists argued that only a body in which they were represented could tax them.",
            },
          ],
        },
        {
          type: "heading",
          text: "The war",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**1775**: fighting begins at **Lexington and Concord**. The Second Continental Congress makes **George Washington** commander of the colonial army.",
            "**4 July 1776**: Congress adopts the **Declaration of Independence**, drafted mainly by **Thomas Jefferson**. It says all men are created equal, with rights to life, liberty and the pursuit of happiness.",
            "**1777**: the Americans win at **Saratoga**. This victory persuades **France** to join them against Britain in 1778.",
            "**1781**: the British general **Cornwallis** surrenders at **Yorktown**.",
            "**1783**: by the **Treaty of Paris**, Britain recognises the independence of the **United States of America**.",
          ],
        },
        {
          type: "example",
          title: "Building a cause-and-effect chain",
          problem: "Explain how the Seven Years' War led to the American War of Independence.",
          steps: [
            "The Seven Years' War (1756–1763) left Britain with a large debt.",
            "To pay it, Britain taxed the colonies, for example through the Stamp Act (1765).",
            "Colonists objected that they had no representatives in Parliament: \"No taxation without representation.\"",
            "Protests such as the Boston Tea Party (1773) led to British punishment, and then to war in 1775.",
          ],
          answer: "War debt led to new taxes, taxes led to protest over representation, and protest and punishment led to open war.",
        },
        {
          type: "mistake",
          wrong: "The American colonies became independent on 4 July 1776, so the war ended that day.",
          right: "4 July 1776 is when independence was **declared**. The war went on until 1781 (Yorktown), and Britain **recognised** independence only by the Treaty of Paris in 1783.",
          why: "Americans celebrate 4 July as Independence Day, so it seems like the end. A declaration is a statement of intent; it still had to be won on the battlefield.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put these events in the order they happened.",
            items: [
              "Stamp Act",
              "Boston Tea Party",
              "Declaration of Independence",
              "Battle of Saratoga",
              "Treaty of Paris",
            ],
            explain: "1765 → 1773 → 1776 → 1777 → 1783. Taxes and protests came first; the war decided the result.",
          },
        },
        {
          type: "text",
          md: "**Results**: a new nation, the **USA**, was born. Its **Constitution** (written in **1787**) created a federal **republic** with an elected president; **George Washington** became the first President in **1789**. The ideas of liberty and equality, and the success of a people against a great power, inspired the **French Revolution** that broke out in 1789. France's heavy spending on this war also deepened its own money crisis.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Karnataka board tip",
          md: "In \"The Age of Revolutions\", KSEAB often asks for the **causes** and **results** of the American War of Independence. Number your points. Remember the link to the next topic: the war's ideas and its cost to France both helped cause the **French Revolution**.",
        },
        {
          type: "keypoints",
          items: [
            "Thirteen British colonies on the Atlantic coast resented taxes imposed by a Parliament where they had no members.",
            "Key steps: Stamp Act (1765) → Boston Tea Party (1773) → First Continental Congress (1774) → war (1775).",
            "4 July 1776: Declaration of Independence, drafted mainly by Thomas Jefferson.",
            "Saratoga (1777) brought France in; Yorktown (1781) ended the fighting; Treaty of Paris (1783) recognised the USA.",
            "The USA became a federal republic (Constitution 1787); Washington was the first President.",
          ],
        },
      ],
      flashcards: [
        { front: "Colony", back: "A land ruled by another country." },
        { front: "No taxation without representation", back: "The colonists' argument that Britain could not tax them because they had no members in its Parliament." },
        { front: "Boston Tea Party (1773)", back: "Colonists dumped British tea into Boston harbour to protest against the tea tax." },
        { front: "Declaration of Independence", back: "Adopted on 4 July 1776; drafted mainly by Thomas Jefferson." },
        { front: "Treaty of Paris (1783)", back: "Britain recognised the independence of the United States." },
        { front: "First President of the USA", back: "George Washington, from 1789." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Who mainly drafted the Declaration of Independence?",
          options: ["George Washington", "Thomas Jefferson", "Thomas Paine", "John Locke"],
          answer: 1,
          explain: "Jefferson drafted it; Washington led the army; Paine wrote *Common Sense*.",
        },
        {
          kind: "fill",
          q: "Britain recognised American independence by the Treaty of ___ in 1783.",
          answer: ["Paris"],
          explain: "The Treaty of Paris (1783) ended the war.",
        },
        {
          kind: "truefalse",
          q: "The American victory at Saratoga helped bring France into the war on the American side.",
          answer: true,
          explain: "After Saratoga (1777), France allied with the Americans in 1778.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange in time order.",
          items: ["Seven Years' War ends", "Stamp Act", "Boston Tea Party", "Fighting at Lexington and Concord", "Surrender at Yorktown"],
          explain: "1763 → 1765 → 1773 → 1775 → 1781.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which were causes of the American War of Independence? (Choose all that apply.)",
          options: ["New British taxes like the Stamp Act", "No colonial members in the British Parliament", "Ideas of natural rights", "The Reign of Terror"],
          answers: [0, 1, 2],
          explain: "The Reign of Terror happened in France in 1793–94, after the American war.",
        },
        {
          kind: "mcq",
          q: "How did the American War of Independence affect France?",
          options: [
            "It made France richer",
            "Its ideas inspired the French, and France's war spending worsened its debt",
            "France lost its king in the war",
            "It had no effect on France",
          ],
          answer: 1,
          explain: "Both ideas and debt linked the American war to the French Revolution of 1789.",
          difficulty: 2,
          hint: "Think of two links: ideas and money.",
        },
        {
          kind: "mcq",
          q: "Where did the British general Cornwallis surrender in 1781?",
          options: ["Saratoga", "Boston", "Yorktown", "Philadelphia"],
          answer: 2,
          explain: "The surrender at Yorktown effectively ended the fighting.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [
  frenchRevolution,
  russianRevolution,
  nazism,
  renaissance,
  reformation,
  industrialRevolution,
  christianityIslam,
  medievalEurope,
  americanRevolution,
];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  // CBSE History
  "9:The French Revolution": "c9-french-revolution",
  "9:Socialism in Europe and the Russian Revolution": "c9-russian-revolution",
  "9:Nazism and the Rise of Hitler": "c9-nazism-rise-of-hitler",
  // ICSE History
  "9:The Renaissance": "c9-renaissance",
  "9:The Reformation": "c9-reformation",
  "9:The Industrial Revolution": "c9-industrial-revolution",
  // Karnataka History
  "9:Christianity and Islam": "c9-christianity-and-islam",
  "9:Medieval Europe, the Renaissance and the Reformation": ["c9-medieval-europe", "c9-renaissance", "c9-reformation"],
  "9:The Age of Revolutions": ["c9-american-revolution", "c9-french-revolution", "c9-industrial-revolution"],
};
