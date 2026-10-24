import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "development",
    title: "Development",
    icon: "📈",
    description: "What development means, how income and other goals are measured, per capita income, HDI and sustainability.",
    lessons: [
      {
        slug: "what-is-development",
        title: "What Development Means",
        summary: "Different people have different development goals; income matters, but so do security, freedom, respect and public facilities.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "illustration",
            emoji: "🧑‍🌾",
            caption: "A farmer in Mandya wants a fair price and water for her fields. A girl in Pune wants to study abroad. Both want development, but not the same thing.",
          },
          {
            type: "text",
            md: "**Development** means a change that makes life better. But \"better\" is not the same for everyone. Each person has their own **development goals**: the things they hope for.\n\nA landless labourer may want more days of work and better wages. A rich farmer may want a high price for his crops. A girl from a well-off family may want the same freedom as her brother.",
          },
          {
            type: "text",
            md: "Sometimes the goals of two groups **conflict**. A big dam may give electricity to cities and factories, but it can flood the land and homes of people living in the valley. What is development for one group can be destruction for another.",
          },
          {
            type: "table",
            headers: ["Person", "A likely development goal"],
            rows: [
              ["Landless rural labourer", "More days of work, better wages, a school for the children"],
              ["Prosperous farmer from Punjab", "Assured high prices for crops, cheap loans"],
              ["Urban unemployed youth", "A regular job with a fair salary"],
              ["Adivasi family near a forest", "Keep their land and forest; not be displaced"],
              ["Girl from a city family", "Freedom to study and decide like her brother"],
            ],
          },
          {
            type: "heading",
            text: "Income and other goals",
          },
          {
            type: "text",
            md: "Most people want **more income**, because money buys material things. But people also want **non-material things**: equal treatment, freedom, security, respect, and a safe and clean place to live.\n\nMany important things cannot be bought with money alone. You cannot buy a pollution-free city or protection from infectious disease for yourself only. These come from **public facilities**: things the government or the community provides for everyone, like hospitals, schools, clean water and a fair **Public Distribution System (PDS)** for rationed food.",
          },
          {
            type: "example",
            title: "Reasoning: is a higher salary always the better job?",
            problem: "Meera gets two job offers. Job A pays ₹30,000 a month, is in her own town, and is permanent. Job B pays ₹36,000 a month, is far away, has no job security and no safe transport at night. Which job is more \"developmental\" for her?",
            steps: [
              "List the **material** factor: Job B pays ₹6,000 more each month.",
              "List the **non-material** factors: Job A gives security (permanent), family support (own town) and safety.",
              "Ask what Meera values. If she values security and safety, these may matter more than ₹6,000.",
              "Conclude: income is only one part of development; the right choice depends on all her goals.",
            ],
            answer: "Job A may well be better for her. Development includes security, safety and freedom, not just a bigger salary.",
          },
          {
            type: "mistake",
            wrong: "Development just means earning more money.",
            right: "Development means a better overall life: income plus security, freedom, health, education, respect and a clean environment.",
            why: "Income is the easiest goal to see and count, so it feels like the whole story. But a person with a high income can still be unsafe, unhealthy or treated unfairly.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Building a large dam gives cities electricity but floods villages in the valley. This shows that:",
                options: [
                  "Dams are never useful",
                  "Development goals of different groups can conflict",
                  "Only cities need development",
                  "Villages do not want electricity",
                ],
                answer: 1,
                explain: "What is development for one group (city users) may harm another (people displaced by the dam).",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each goal material or non-material?",
              groups: ["Material", "Non-material"],
              items: [
                { text: "Higher monthly salary", group: 0, hint: "It is money, which buys goods." },
                { text: "Being treated with respect at work", group: 1, hint: "You cannot buy respect in a shop." },
                { text: "A bigger house", group: 0, hint: "A house is a physical thing you can buy." },
                { text: "Freedom to choose your career", group: 1, hint: "Freedom is not a thing you can buy." },
                { text: "Safety while travelling at night", group: 1, hint: "Security comes from society and law, not from a purchase." },
                { text: "A new scooter", group: 0, hint: "It is a good bought with income." },
              ],
              explain: "People want both kinds of goals. Non-material goals such as respect, freedom and safety are often just as important as income.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For \"Development goals are different for different people. Explain with examples\", write the point and pair it with a person. Two clear examples with reasons usually earn full marks; a list of goals without the people does not.",
          },
          {
            type: "keypoints",
            items: [
              "Different people have different, sometimes conflicting, development goals.",
              "People want more income, but also equality, freedom, security and respect.",
              "Some needs, like clean air and disease control, can only be met by public facilities.",
              "Development of one group may be destruction for another.",
            ],
          },
        ],
        flashcards: [
          { front: "Development", back: "A change that improves people's lives. Its meaning differs from person to person." },
          { front: "Development goals", back: "The things a person or group hopes for, e.g. more income, regular work, freedom, safety." },
          { front: "Conflicting goals (example)", back: "A dam helps cities with power but displaces people in the valley it floods." },
          { front: "Non-material goals", back: "Things money cannot buy directly: respect, equality, freedom, security." },
          { front: "Public facilities", back: "Services provided collectively for everyone, e.g. government hospitals, schools, clean water, PDS." },
          { front: "Why can't money buy everything?", back: "Some goods, like a pollution-free environment or protection from disease, can only be had together, through public action." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a non-material development goal?",
            options: ["A car", "A higher salary", "Equal treatment for women", "A new mobile phone"],
            answer: 2,
            explain: "Equal treatment cannot be bought; it is a non-material goal.",
          },
          {
            kind: "truefalse",
            q: "Every person in a country has the same development goals.",
            answer: false,
            explain: "Goals depend on a person's situation: a farmer, a worker and a student want different things.",
          },
          {
            kind: "fill",
            q: "A ration shop run under the ___ Distribution System is an example of a public facility.",
            answer: ["Public", "public"],
            explain: "The PDS supplies food grains at fair prices through ration shops.",
          },
          {
            kind: "multi",
            q: "Which of these are best provided collectively, as public facilities? (Choose all that apply.)",
            options: ["Clean drinking water", "Protection from infectious diseases", "A personal laptop", "A pollution-free city"],
            answers: [0, 1, 3],
            explain: "A laptop can be bought by one person. Clean water, disease control and clean air need action by the whole community or government.",
            difficulty: 2,
            hint: "Ask: can one rich family get it for itself alone?",
          },
          {
            kind: "mcq",
            q: "A mining project would bring jobs to a town but destroy the forest that local Adivasis depend on. What is the most accurate statement?",
            options: [
              "The project is development for everyone",
              "The Adivasis are against all development",
              "The project may be development for some and destruction for others",
              "Forests have no economic value",
            ],
            answer: 2,
            explain: "Development goals conflict; one group's gain can be another group's loss.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A family with a high income can still lack some things it wants, such as safety or a clean environment.",
            answer: true,
            explain: "Money cannot buy every need; non-material goals and public goods matter too.",
          },
        ],
      },
      {
        slug: "measuring-development",
        title: "Measuring Development: Per Capita Income, HDI and Sustainability",
        summary: "Average income, why averages can hide inequality, health and education indicators, the Human Development Index and sustainable development.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "To compare countries or states we need a common yardstick. The most common one is **income**. A country's total income is large if it has many people, so we divide it by the population. This gives **average income**, also called **per capita income**.",
          },
          {
            type: "formula",
            tex: "\\text{Per capita income} = \\frac{\\text{Total income of the country}}{\\text{Total population}}",
            caption: "\"Per capita\" is Latin for \"per head\". The World Bank uses per capita income to group countries into rich, middle-income and low-income countries.",
          },
          {
            type: "example",
            title: "Averages can hide inequality",
            problem: "Country X has five citizens earning ₹8,000, ₹9,000, ₹10,000, ₹11,000 and ₹12,000 a month. Country Y has five citizens earning ₹1,000, ₹1,000, ₹1,000, ₹1,000 and ₹46,000. Find the average income of each. Where would you rather live, if you could be any citizen?",
            steps: [
              "Country X total = 8,000 + 9,000 + 10,000 + 11,000 + 12,000 = ₹50,000.",
              "Country X average = 50,000 ÷ 5 = ₹10,000.",
              "Country Y total = 1,000 × 4 + 46,000 = ₹50,000. Average = 50,000 ÷ 5 = ₹10,000.",
              "The averages are equal, but in Y four out of five people are very poor. Income is far more equally shared in X.",
            ],
            answer: "Both averages are ₹10,000, but Country X is the better place to live for most people. An average does not show how income is distributed.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A state has a total income of ₹6,000 crore and a population of 2 crore. What is its per capita income in rupees?",
                answer: 3000,
                unit: "₹",
                explain: "6,000 crore ÷ 2 crore = ₹3,000 per person.",
              },
            ],
          },
          {
            type: "heading",
            text: "Beyond income: health and education",
          },
          {
            type: "text",
            md: "A state can have a higher income than another and still do worse on health and schooling. Indian textbooks often compare Kerala with richer states: Kerala's per capita income is not the highest, yet it has a low infant mortality rate and high literacy, helped by good basic health and education facilities and a well-run PDS.",
          },
          {
            type: "table",
            headers: ["Indicator", "What it means"],
            rows: [
              ["**Infant Mortality Rate (IMR)**", "Number of children who die before age one, out of every 1,000 live births in a year"],
              ["**Literacy rate**", "Share of literate people in the 7-and-above age group"],
              ["**Net Attendance Ratio**", "Share of children of a given age group (e.g. 14–15) actually attending school"],
              ["**Life expectancy at birth**", "Average number of years a newborn is expected to live"],
              ["**Body Mass Index (BMI)**", "Weight (kg) ÷ height² (m²); used to check for under-nourishment"],
            ],
          },
          {
            type: "text",
            md: "The **Human Development Index (HDI)** is published every year by the **UNDP** (United Nations Development Programme) in its **Human Development Report**. It ranks countries using three things together: **health** (life expectancy), **education** (years of schooling) and **income** (per capita income). So a country with high income but poor health and schooling will not rank as high on HDI.",
          },
          {
            type: "mistake",
            wrong: "The country or state with the highest per capita income is the most developed.",
            right: "Per capita income is one useful measure, but development also depends on health, education, equality and public facilities, which is why HDI is used.",
            why: "Income is easy to compare, so it is tempting to stop there. But an average can hide inequality, and money does not automatically buy good schools, hospitals or clean water for everyone.",
          },
          {
            type: "heading",
            text: "Sustainability of development",
          },
          {
            type: "text",
            md: "**Sustainable development** means meeting today's needs without harming the ability of future generations to meet theirs. If we pump out **groundwater** faster than rain can refill it, or use up **non-renewable resources** like crude oil, our development today will hurt our children tomorrow. Environmental damage does not stop at state or national borders, so sustainability concerns everyone.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Two states have equal per capita income. What else could make one better to live in?",
              emoji: "⚖️",
              options: [
                "Nothing; equal income means equal development",
                "Lower infant mortality and higher school attendance",
                "A bigger area of land",
              ],
              answer: 1,
              trap: 0,
              explain: "Equal average income can come with very different health and education outcomes. Indicators like IMR and attendance show the real quality of life.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to find average income, always show the total, then the division, then the unit (₹). Then add one line on its **limitation**: \"Average income does not tell us how income is distributed among people.\" This last line is often the mark students lose.",
          },
          {
            type: "keypoints",
            items: [
              "Per capita (average) income = total income ÷ population.",
              "Averages hide how income is shared; two countries with equal averages can be very unequal.",
              "IMR, literacy rate and attendance ratio show health and education.",
              "HDI (UNDP) combines health, education and income.",
              "Sustainable development protects resources such as groundwater and crude oil for future generations.",
            ],
          },
        ],
        flashcards: [
          { front: "Per capita income", back: "Total income of a country ÷ its total population. Also called average income." },
          { front: "Main limitation of average income", back: "It hides inequality: it does not show how income is distributed." },
          { front: "Infant Mortality Rate (IMR)", back: "Children dying before age one per 1,000 live births in a year." },
          { front: "Who publishes the Human Development Report?", back: "UNDP, the United Nations Development Programme." },
          { front: "Three dimensions of HDI", back: "Health (life expectancy), education (schooling) and income (per capita income)." },
          { front: "Sustainable development", back: "Development that meets present needs without harming future generations' ability to meet theirs." },
          { front: "Example of over-use of a renewable resource", back: "Groundwater pumped out faster than it is recharged by rain." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Four friends earn ₹5,000, ₹7,000, ₹9,000 and ₹15,000 a month. What is their average income in rupees?",
            answer: 9000,
            unit: "₹",
            explain: "Total = ₹36,000; 36,000 ÷ 4 = ₹9,000.",
          },
          {
            kind: "mcq",
            q: "The World Bank's main criterion for classifying countries is:",
            options: ["Literacy rate", "Per capita income", "Life expectancy", "Area of the country"],
            answer: 1,
            explain: "The World Bank uses per capita income. HDI (UNDP) uses health and education too.",
          },
          {
            kind: "multi",
            q: "Which of these are used to calculate the Human Development Index? (Choose all that apply.)",
            options: ["Life expectancy", "Years of schooling", "Per capita income", "Size of the army"],
            answers: [0, 1, 2],
            explain: "HDI uses health, education and income.",
          },
          {
            kind: "fill",
            q: "The Human Development Report is published by the ___.",
            answer: ["UNDP", "United Nations Development Programme"],
            explain: "UNDP publishes it every year.",
          },
          {
            kind: "truefalse",
            q: "If two countries have the same average income, people in both are equally well off.",
            answer: false,
            explain: "Income may be shared very unequally in one of them.",
            difficulty: 2,
            hint: "Think of Country Y in the worked example.",
          },
          {
            kind: "mcq",
            q: "A state has a high per capita income but a high infant mortality rate. This most likely means:",
            options: [
              "It has too many hospitals",
              "Its income is not turning into good basic health facilities for all",
              "Infant mortality has nothing to do with development",
              "Its population is too small",
            ],
            answer: 1,
            explain: "Money alone does not ensure health; public facilities and their reach matter.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A town has a total yearly income of ₹90 crore and a population of 3 lakh. What is its per capita income in rupees? (1 crore = 100 lakh)",
            answer: 3000,
            unit: "₹",
            explain: "₹90 crore = 9,000 lakh rupees. 9,000 lakh ÷ 3 lakh people = ₹3,000 per person.",
            difficulty: 3,
            hint: "Convert crore to lakh first so both are in the same unit.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sectors-of-the-indian-economy",
    title: "Sectors of the Indian Economy",
    icon: "🏭",
    description: "Primary, secondary and tertiary sectors, GDP, underemployment, MGNREGA, organised and unorganised, public and private sectors.",
    lessons: [
      {
        slug: "primary-secondary-tertiary-gdp",
        title: "Primary, Secondary and Tertiary Sectors and GDP",
        summary: "How economic activities are grouped into three sectors, how they depend on one another, and how GDP is counted using final goods.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🌾",
            caption: "Cotton grown in Gujarat is spun into yarn in a mill, made into shirts, and carried by truck to a shop in Delhi. Three sectors in one shirt.",
          },
          {
            type: "text",
            md: "People do many kinds of work. Economists group these **economic activities** into three **sectors**, based on what is done.\n\n**Primary sector**: activities that use natural resources directly, like farming, dairy, fishing and forestry. It is also called the **agriculture and related sector**, because most natural products come from farming.",
          },
          {
            type: "text",
            md: "**Secondary sector**: natural products are changed into other forms by **manufacturing**. Making sugar from sugarcane or cloth from cotton is secondary. It is also called the **industrial sector**.\n\n**Tertiary sector**: activities that do not produce a good themselves but **support** the other two, like transport, storage, communication, banking and trade. It is also called the **service sector**. Teachers, doctors, call-centre workers and software engineers are also in this sector.",
          },
          {
            type: "table",
            headers: ["Sector", "Other name", "Examples"],
            rows: [
              ["Primary", "Agriculture and related sector", "Growing wheat, fishing, dairy farming, cutting timber"],
              ["Secondary", "Industrial sector", "Sugar mill, cloth factory, brick-making, construction"],
              ["Tertiary", "Service sector", "Bus transport, banks, shops, schools, hospitals, IT services"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Put each activity in its sector.",
              groups: ["Primary", "Secondary", "Tertiary"],
              items: [
                { text: "A fisherman in Kerala catching fish", group: 0, hint: "He takes a natural product directly." },
                { text: "A mill turning sugarcane into sugar", group: 1, hint: "A natural product is changed by manufacturing." },
                { text: "A truck carrying rice to Bengaluru", group: 2, hint: "Transport is a service." },
                { text: "A bank giving a loan to a farmer", group: 2, hint: "Banking supports other activities." },
                { text: "A potter making clay pots", group: 1, hint: "Clay is changed into a new product." },
                { text: "A dairy farmer milking cows", group: 0, hint: "Milk is produced directly using animals." },
              ],
              explain: "Ask what is happening: taking from nature (primary), changing the form (secondary), or providing a service (tertiary).",
            },
          },
          {
            type: "text",
            md: "The sectors depend on each other. A sugar mill needs sugarcane (primary). Farmers need trucks and banks (tertiary). If the monsoon fails and cane output falls, the sugar mill also suffers.",
          },
          {
            type: "heading",
            text: "Counting what is produced: GDP",
          },
          {
            type: "text",
            md: "To add up production, we use the **value** of goods and services in rupees. But we count only **final goods**: goods that reach the final consumer. Goods used up in making other goods, like wheat used to make biscuits, are **intermediate goods**. Their value is already included in the final price, so counting them again would be **double counting**.\n\nThe value of all final goods and services produced **within a country** during a **particular year** is the **Gross Domestic Product (GDP)**. In India it is measured by a central government ministry, together with state and union territory departments.",
          },
          {
            type: "example",
            title: "Avoiding double counting",
            problem: "A farmer sells wheat to a flour mill for ₹500. The mill grinds it and sells the flour to a biscuit company for ₹700. The company makes biscuits and sells them to consumers for ₹1,000. What value should be added to GDP?",
            steps: [
              "Identify the final good: biscuits are bought by the final consumer.",
              "Wheat (₹500) and flour (₹700) are intermediate goods; they are used up in making biscuits.",
              "The ₹1,000 price of the biscuits already includes the value of the wheat and the flour.",
              "Adding 500 + 700 + 1,000 = ₹2,200 would count the wheat three times and the flour twice.",
            ],
            answer: "Only ₹1,000 (the value of the final good) is added to GDP.",
          },
          {
            type: "mistake",
            wrong: "To find total production, add the value of everything sold at every stage.",
            right: "Count only the value of final goods and services. Intermediate goods are already included in the final value.",
            why: "Every sale seems like production, so adding them all feels natural. But the same wheat would be counted again inside the flour and again inside the biscuits.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Cotton bought by a textile mill to make cloth is a:",
                options: ["Final good", "Intermediate good", "Service", "Public good"],
                answer: 1,
                explain: "The cotton is used up to make cloth, so it is intermediate.",
              },
            ],
          },
          {
            type: "text",
            md: "**Historical change**: in most developed countries, the primary sector was most important first. As farming became efficient, manufacturing grew; later, services became the largest. India's data since the 1970s shows production growing in all three sectors, with the **tertiary sector becoming the largest producing sector**. But the primary sector **still employs the most people**. Services grew because of basic services (hospitals, schools, police), growth of farming and industry (needing transport and trade), rising incomes (people want eating out, tourism, private schools) and new IT-based services.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A frequent question: \"The tertiary sector is the largest producer, so why does the primary sector still employ the most people?\" Answer: not enough jobs were created in the secondary and tertiary sectors, so many people stayed in farming. Also mention that not all of the service sector is growing well: many service workers are in small, low-paid work.",
          },
          {
            type: "keypoints",
            items: [
              "Primary: uses natural resources directly. Secondary: manufacturing. Tertiary: services that support others.",
              "The three sectors depend on each other.",
              "GDP = value of all final goods and services produced within a country in a year.",
              "Count only final goods to avoid double counting.",
              "In India, the tertiary sector produces the most, but the primary sector employs the most people.",
            ],
          },
        ],
        flashcards: [
          { front: "Primary sector", back: "Activities that use natural resources directly, e.g. farming, fishing, dairy, forestry. Also called agriculture and related sector." },
          { front: "Secondary sector", back: "Manufacturing: changing natural products into other forms, e.g. sugar from cane. Also called industrial sector." },
          { front: "Tertiary sector", back: "Services that support other sectors, e.g. transport, banking, trade, teaching. Also called service sector." },
          { front: "Intermediate goods", back: "Goods used up in producing final goods, e.g. wheat used to make biscuits." },
          { front: "GDP", back: "Value of all final goods and services produced within a country during a particular year." },
          { front: "Why count only final goods?", back: "Their value already includes the intermediate goods; counting both would be double counting." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which activity belongs to the tertiary sector?",
            options: ["Basket weaving", "Mining", "A courier delivering parcels", "A flour mill"],
            answer: 2,
            explain: "Delivering parcels is a service. Basket weaving and the flour mill change raw materials into new goods (secondary); mining takes natural resources directly (usually grouped with primary).",
          },
          {
            kind: "fill",
            q: "The secondary sector is also called the ___ sector.",
            answer: ["industrial"],
            explain: "Because it is mostly linked to factories and manufacturing.",
          },
          {
            kind: "numeric",
            q: "Iron ore worth ₹2,000 is made into steel worth ₹5,000, which is made into a cycle sold to a customer for ₹8,000. What value is added to GDP, in rupees?",
            answer: 8000,
            unit: "₹",
            explain: "Only the final good (the cycle) is counted; ore and steel are intermediate.",
            difficulty: 2,
            hint: "Which item reaches the final consumer?",
          },
          {
            kind: "truefalse",
            q: "In India today, the tertiary sector employs more people than the primary sector.",
            answer: false,
            explain: "Tertiary is the largest producer, but the primary sector is still the largest employer.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "In most developed countries, which sector became most important first? Put them in the order they became the most important.",
            items: ["Primary", "Secondary", "Tertiary"],
            explain: "Farming came first, then industry, then services.",
          },
          {
            kind: "multi",
            q: "Which of these are reasons for the growth of services in India? (Choose all that apply.)",
            options: [
              "Basic services like hospitals and schools are needed",
              "Rising incomes increase demand for services like tourism",
              "Growth of farming and industry needs transport and trade",
              "Services do not need any workers",
            ],
            answers: [0, 1, 2],
            explain: "The first three are the reasons given in NCERT. Services need many workers.",
          },
          {
            kind: "mcq",
            q: "GDP counts the value of final goods and services produced:",
            options: [
              "by Indians anywhere in the world",
              "within the country during a particular year",
              "by the government only",
              "including intermediate goods",
            ],
            answer: 1,
            explain: "\"Domestic\" means within the country; GDP is measured for a year.",
          },
        ],
      },
      {
        slug: "employment-and-sector-types",
        title: "Underemployment, MGNREGA, Organised and Unorganised, Public and Private",
        summary: "Disguised unemployment, ways to create jobs, MGNREGA 2005, and dividing the economy by conditions of work and by ownership.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Imagine a small farm in Bihar that needs three workers. Five family members work on it all year because they have no other job. If two leave, the output does not fall. These two people look employed, but their work adds nothing. This is **underemployment**, also called **disguised unemployment**: people are working, but each is working less than their potential.",
          },
          {
            type: "text",
            md: "Disguised unemployment is common in farming. In cities it is seen in casual services: painters, plumbers or street vendors who find work only on some days.",
          },
          {
            type: "heading",
            text: "How can more jobs be created?",
          },
          {
            type: "list",
            items: [
              "**Irrigation**: a dam or canal lets farmers grow a second crop, creating work in farming and transport.",
              "**Roads and storage**: better roads, cold storage and markets let farmers sell more and earn more.",
              "**Cheap credit**: loans from banks help farmers buy seeds and tools.",
              "**Agro-processing**: small units for things like dal milling, honey or vegetable processing in semi-rural areas.",
              "**Services**: more schools and health centres mean jobs for teachers, nurses and others; tourism and IT also add jobs.",
            ],
          },
          {
            type: "text",
            md: "**MGNREGA 2005** (Mahatma Gandhi National Rural Employment Guarantee Act) is a law passed by Parliament to implement the **Right to Work**. It guarantees **100 days of employment in a year** to every rural household willing to do unskilled work. If the government cannot give work, it must pay an **unemployment allowance**. Preferred works are those that also improve land, like water conservation and building ponds.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "MGNREGA guarantees ___ days of employment in a year to rural households.",
                answer: ["100", "hundred", "one hundred"],
                explain: "If work is not given, an unemployment allowance must be paid.",
              },
            ],
          },
          {
            type: "heading",
            text: "Organised and unorganised sectors",
          },
          {
            type: "table",
            headers: ["", "Organised sector", "Unorganised sector"],
            rows: [
              ["Registration", "Registered by the government; follows its rules and laws", "Small, scattered units, largely outside government control"],
              ["Job security", "Regular, assured work; written appointment letter", "Low-paid, often not regular; can be removed any time"],
              ["Benefits", "Fixed hours, overtime pay, paid leave, provident fund, gratuity, medical benefits", "Few or no benefits; no paid leave"],
              ["Examples", "Government offices, large factories, banks", "Farm labourers, street vendors, small workshops, domestic helpers"],
            ],
          },
          {
            type: "text",
            md: "Most workers in India are in the **unorganised sector**. They need protection: fair wages, safe working conditions, help with health and old age, and cheap loans for small producers.",
          },
          {
            type: "heading",
            text: "Public and private sectors",
          },
          {
            type: "text",
            md: "Another way to divide the economy is by **who owns the assets**. In the **public sector**, the government owns most of the assets and provides the services, like Indian Railways or a post office. In the **private sector**, assets are owned by individuals or companies, like a private steel company or a private bus operator.\n\nThe private sector mainly aims to earn **profit**. The public sector aims at **public welfare**, so it provides things like roads, dams and cheap electricity, which need huge money and would not be profitable for private firms at fair prices.",
          },
          {
            type: "example",
            title: "Reasoning: classifying a worker two ways",
            problem: "Ramesh is a carpenter who works on daily wages for different house owners in Hubballi. He has no written contract and gets no paid leave. Classify his work by (a) activity, (b) conditions of work, (c) ownership.",
            steps: [
              "(a) Activity: he makes furniture from wood, changing its form. That is **secondary** (manufacturing).",
              "(b) Conditions: no contract, no regular work, no paid leave. That is the **unorganised** sector.",
              "(c) Ownership: he works for private house owners, not the government. That is the **private** sector.",
            ],
            answer: "Secondary sector, unorganised sector, private sector. The three ways of dividing the economy answer three different questions.",
          },
          {
            type: "mistake",
            wrong: "Private sector means the unorganised sector, and public sector means the organised sector.",
            right: "Public/private is about ownership. Organised/unorganised is about conditions of work. A large private company is private but organised.",
            why: "Government jobs are usually secure, so students link \"public\" with \"organised\". But big private banks and factories are registered and give benefits too, so they are private and organised.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each worker to the best description.",
              pairs: [
                ["Clerk in a State Bank branch", "Public sector, organised"],
                ["Engineer in a large private IT company", "Private sector, organised"],
                ["Vegetable seller on a footpath", "Tertiary sector, unorganised"],
                ["Labourer on two neighbours' farms, paid daily", "Primary sector, unorganised"],
              ],
              explain: "Every worker can be described in all three ways. Do not mix up ownership (public/private) with conditions of work (organised/unorganised).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For \"Distinguish between organised and unorganised sectors\", give at least three points in a table (registration, job security, benefits) with one example each. A table with matching points on both sides is quicker to mark and scores better than two separate paragraphs.",
          },
          {
            type: "keypoints",
            items: [
              "Disguised unemployment: more people working than needed, so some add nothing to output.",
              "Irrigation, roads, credit, agro-processing and services can create jobs.",
              "MGNREGA 2005 guarantees 100 days of work a year to rural households, or an allowance.",
              "Organised vs unorganised: conditions of work. Public vs private: ownership.",
              "The public sector aims at welfare; the private sector mainly at profit.",
            ],
          },
        ],
        flashcards: [
          { front: "Disguised unemployment", back: "People appear to be working, but their removal would not reduce output. Common in farming. Also called underemployment." },
          { front: "MGNREGA 2005", back: "Law guaranteeing 100 days of work in a year to rural households; if not provided, an unemployment allowance is paid." },
          { front: "Organised sector", back: "Registered with the government, regular work, benefits like paid leave and provident fund." },
          { front: "Unorganised sector", back: "Small scattered units, low pay, irregular work, few or no benefits." },
          { front: "Public sector", back: "Government owns most assets and provides services, e.g. Indian Railways, post office." },
          { front: "Private sector", back: "Assets owned by individuals or companies; main aim is profit." },
          { front: "Why does the government build dams and roads?", back: "They need very large investment and benefit everyone; private firms may not provide them at fair prices." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Six people work on a farm that needs only four. Two of them are:",
            options: ["Fully employed", "Disguisedly unemployed", "In the organised sector", "In the tertiary sector"],
            answer: 1,
            explain: "Their removal would not reduce output, so they are disguisedly unemployed.",
          },
          {
            kind: "truefalse",
            q: "If MGNREGA work is not given within the set time, the government must pay an unemployment allowance.",
            answer: true,
            explain: "This makes the right to work enforceable.",
          },
          {
            kind: "multi",
            q: "Which benefits are usually available in the organised sector? (Choose all that apply.)",
            options: ["Paid leave", "Provident fund", "Fixed working hours", "Work only on some days with no notice"],
            answers: [0, 1, 2],
            explain: "Irregular work without notice is a feature of the unorganised sector.",
          },
          {
            kind: "mcq",
            q: "The basis for dividing the economy into public and private sectors is:",
            options: ["Number of workers", "Ownership of assets", "Nature of activity", "Conditions of work"],
            answer: 1,
            explain: "Who owns the assets: government or private individuals/companies.",
          },
          {
            kind: "mcq",
            q: "A worker in a large private car factory with a written contract, PF and paid leave is in the:",
            options: ["Public, unorganised sector", "Private, unorganised sector", "Private, organised sector", "Public, organised sector"],
            answer: 2,
            explain: "Private ownership, but registered with regular work and benefits, so organised.",
            difficulty: 2,
            hint: "Answer ownership and conditions of work separately.",
          },
          {
            kind: "fill",
            q: "Indian Railways is an example of the ___ sector.",
            answer: ["public"],
            explain: "It is owned and run by the government.",
          },
          {
            kind: "truefalse",
            q: "Most workers in India are employed in the organised sector.",
            answer: false,
            explain: "Most workers are in the unorganised sector, which is why their protection matters.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "money-and-credit",
    title: "Money and Credit",
    icon: "💰",
    description: "Money as a medium of exchange, bank deposits and loans, terms of credit, formal and informal credit, SHGs and the Grameen Bank.",
    lessons: [
      {
        slug: "money-and-banks",
        title: "Money, Deposits and Banks",
        summary: "Why money solves the double coincidence of wants, modern forms of money, demand deposits and cheques, and how banks lend out deposits.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Suppose a shoemaker wants wheat. Without money, he must find a farmer who has wheat **and** wants shoes. Both must want what the other has. This is called the **double coincidence of wants**, and it is hard to find. Exchanging goods directly for goods is called the **barter system**.",
          },
          {
            type: "text",
            md: "Money solves this. The shoemaker sells shoes to anyone for money, then uses the money to buy wheat from any farmer. Because money sits in the middle of every exchange, it is called a **medium of exchange**.",
          },
          {
            type: "illustration",
            emoji: "🪙",
            caption: "Long ago, grain, cattle and later gold, silver and copper coins were used as money. Today we use paper notes, coins and bank deposits.",
          },
          {
            type: "heading",
            text: "Modern forms of money",
          },
          {
            type: "text",
            md: "**Currency**: paper notes and coins. In India, the **Reserve Bank of India (RBI)** issues currency notes on behalf of the central government. Rupee notes are accepted because the law makes the rupee a legal means of payment; no one can refuse it in settling transactions in India.\n\n**Deposits with banks**: people keep extra cash in a bank account and earn interest. They can withdraw it whenever they want, so these are called **demand deposits**. Payment can be made from them by a **cheque**: a paper instructing the bank to pay a specific amount from the account to the person named. Since demand deposits are widely accepted as payment, they are also money.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who issues currency notes in India?",
                options: ["State Bank of India", "Ministry of Finance directly", "Reserve Bank of India, on behalf of the central government", "Any commercial bank"],
                answer: 2,
                explain: "Only the RBI is authorised to issue currency notes, on behalf of the central government.",
              },
            ],
          },
          {
            type: "heading",
            text: "How banks use deposits",
          },
          {
            type: "text",
            md: "Banks do not keep all the deposits as cash. They keep only a **small share** (NCERT gives about 15%) to pay depositors who come to withdraw on a given day. The rest is given as **loans** to people who need money.\n\nBanks charge a **higher interest on loans** than they pay **on deposits**. The difference is the main source of a bank's income. In this way, banks link people who have extra money (depositors) with people who need it (borrowers).",
          },
          {
            type: "example",
            title: "A bank's earnings from the interest gap",
            problem: "A small bank receives deposits of ₹10 crore and pays 4% interest a year on them. It keeps 15% as cash and lends the rest at 10% a year. What is its yearly income from this interest gap?",
            steps: [
              "Cash kept = 15% of ₹10 crore = ₹1.5 crore. Amount lent = 10 − 1.5 = ₹8.5 crore.",
              "Interest earned on loans = 10% of ₹8.5 crore = ₹0.85 crore.",
              "Interest paid to depositors = 4% of ₹10 crore = ₹0.40 crore.",
              "Difference = 0.85 − 0.40 = ₹0.45 crore.",
            ],
            answer: "₹0.45 crore, that is ₹45 lakh a year (before the bank's other costs).",
          },
          {
            type: "mistake",
            wrong: "When I deposit money, the bank keeps my notes safely locked in its vault until I come back.",
            right: "The bank keeps only a small share of deposits as cash and lends most of it out to borrowers.",
            why: "We can withdraw any time, so it feels as if the money is just stored. It works because, on any day, only a few depositors come to withdraw.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the deposit-and-loan chain in order.",
              items: [
                "Priya deposits her extra savings in a bank",
                "The bank keeps a small share as cash reserve",
                "The bank lends the rest to a shopkeeper",
                "The shopkeeper repays the loan with interest",
                "The bank pays Priya interest on her deposit",
              ],
              explain: "Banks are middlemen between savers and borrowers. Their income comes from charging borrowers more interest than they pay to savers.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked \"How does money solve the problem of double coincidence of wants?\", define the term first, give a two-person barter example, then show how money breaks the exchange into two steps (sell for money, then buy with money). Students often skip the definition and lose a mark.",
          },
          {
            type: "keypoints",
            items: [
              "Barter needs a double coincidence of wants; money removes this need.",
              "Money acts as a medium of exchange.",
              "Modern money: currency (issued by RBI) and demand deposits (used through cheques).",
              "Banks keep a small share of deposits as cash and lend the rest.",
              "Loan interest minus deposit interest is the main income of banks.",
            ],
          },
        ],
        flashcards: [
          { front: "Double coincidence of wants", back: "Each party in a barter must want what the other has to offer." },
          { front: "Medium of exchange", back: "Money's role as the go-between in all exchanges." },
          { front: "Demand deposits", back: "Bank deposits that can be withdrawn on demand; payment can be made from them by cheque." },
          { front: "Cheque", back: "A paper instructing the bank to pay a specific amount from the account holder's account to the named person." },
          { front: "Who issues currency in India?", back: "The Reserve Bank of India, on behalf of the central government." },
          { front: "Main source of a bank's income", back: "The difference between interest charged on loans and interest paid on deposits." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The main problem of the barter system is:",
            options: ["Too much money in circulation", "Need for double coincidence of wants", "High interest rates", "No banks in villages"],
            answer: 1,
            explain: "Barter needs both people to want each other's goods.",
          },
          {
            kind: "truefalse",
            q: "Demand deposits are considered money because they are widely accepted as a means of payment.",
            answer: true,
            explain: "Payments by cheque or digital transfer come from demand deposits.",
          },
          {
            kind: "fill",
            q: "Money acts as a medium of ___ in an economy.",
            answer: ["exchange"],
            explain: "It sits in the middle of every exchange.",
          },
          {
            kind: "numeric",
            q: "A bank has deposits of ₹2,00,000 and keeps 15% as cash. How much (in ₹) can it lend?",
            answer: 170000,
            unit: "₹",
            explain: "15% of 2,00,000 = 30,000. Lend 2,00,000 − 30,000 = ₹1,70,000.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Why do banks charge more interest on loans than they pay on deposits?",
            options: [
              "To discourage people from saving",
              "Because the RBI fixes all loans at double rates",
              "The difference is their main source of income",
              "Because depositors do not want interest",
            ],
            answer: 2,
            explain: "The interest gap pays for the bank's costs and gives it income.",
          },
          {
            kind: "multi",
            q: "Which of these are modern forms of money in India? (Choose all that apply.)",
            options: ["Currency notes", "Coins", "Demand deposits in banks", "Bags of rice"],
            answers: [0, 1, 2],
            explain: "Rice could be used in barter, but it is not a modern form of money.",
          },
        ],
      },
      {
        slug: "credit-terms-and-sources",
        title: "Credit: Terms, Sources, SHGs and the Grameen Bank",
        summary: "How loans can help or trap borrowers, terms of credit, formal versus informal sources, and self-help groups.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "**Credit** (a loan) is an agreement in which the lender gives money, goods or services to the borrower, who promises to repay in the future. Credit can help or hurt.\n\nA shoe-maker in Agra takes an advance from a trader before a festival, buys leather, completes the order on time, repays and earns a profit. Credit helped. A small farmer borrows to grow a crop; the crop fails and he cannot repay. He sells part of his land to clear the loan. He is now worse off. This is a **debt trap**.",
          },
          {
            type: "heading",
            text: "Terms of credit",
          },
          {
            type: "list",
            items: [
              "**Interest rate**: the extra amount paid on top of the loan.",
              "**Collateral**: an asset the borrower owns (land, building, vehicle, livestock, bank deposits) that is used as a **guarantee** to the lender until the loan is repaid. If the loan is not repaid, the lender can sell it.",
              "**Documentation**: papers the lender asks for, like proof of income or land records.",
              "**Mode of repayment**: how and when the loan is paid back.",
            ],
          },
          {
            type: "text",
            md: "**Formal sources** of credit are banks and **cooperatives**. They are supervised by the **RBI**, which checks that they give loans to small borrowers too and do not just chase profit.\n\n**Informal sources** are moneylenders, traders, employers, relatives and friends. No one supervises their interest rates, so they often charge much more and may use unfair means to get money back.",
          },
          {
            type: "example",
            title: "Comparing the cost of two loans",
            problem: "Lakshmi needs ₹20,000 for one year. A moneylender charges 5% per month. A bank charges 12% per year (simple interest). How much interest does she pay in each case, and how much does she save by borrowing from the bank?",
            steps: [
              "Use simple interest: $I = \\dfrac{P \\times R \\times T}{100}$.",
              "Moneylender: 5% a month for 12 months = 60% a year. $I = \\dfrac{20000 \\times 60 \\times 1}{100} = 12000$, so ₹12,000.",
              "Bank: $I = \\dfrac{20000 \\times 12 \\times 1}{100} = 2400$, so ₹2,400.",
              "Saving = 12,000 − 2,400 = ₹9,600.",
            ],
            answer: "Moneylender: ₹12,000; bank: ₹2,400. She saves ₹9,600 with the bank loan.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A farmer borrows ₹10,000 from a moneylender at 3% per month for 6 months. What is the simple interest in rupees?",
                answer: 1800,
                unit: "₹",
                explain: "3% × 6 months = 18%. 18% of ₹10,000 = ₹1,800.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Poor families borrow from moneylenders because they like dealing with people they know.",
            right: "They often have no choice: banks ask for collateral and documents that poor families do not have, and banks may be far away.",
            why: "Informal loans look easy and friendly. The real reason is that the poor are shut out of formal credit, even though informal loans cost far more.",
          },
          {
            type: "text",
            md: "In India, richer urban households get most of their loans from formal sources, while poorer rural households depend heavily on informal ones. So the government wants **formal credit** to reach everyone, especially the poor, and at cheaper rates.",
          },
          {
            type: "heading",
            text: "Self-Help Groups (SHGs)",
          },
          {
            type: "text",
            md: "A **Self-Help Group (SHG)** is a small group of usually **15–20 members**, often rural women from the same area, who save regularly. Members can take small loans from the group's savings at a reasonable interest rate. After a year or two of regular saving, the group can get a **bank loan** in its own name, **without collateral**, to start small self-employment activities like tailoring, a dairy or a provision shop.\n\nThe group, not the bank, decides who gets a loan and makes sure it is repaid. Members also meet regularly to discuss issues like health, nutrition and domestic violence, which helps women become more independent.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Grameen Bank of Bangladesh",
            md: "Started in the 1970s, the **Grameen Bank** gives small loans to poor people, mostly women, at reasonable rates. Its founder, **Professor Muhammad Yunus**, and the bank were jointly awarded the **Nobel Peace Prize in 2006**. It shows that poor women are reliable borrowers.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each a formal or an informal source of credit?",
              groups: ["Formal", "Informal"],
              items: [
                { text: "A nationalised bank", group: 0, hint: "Banks are supervised by the RBI." },
                { text: "A village moneylender", group: 1, hint: "No one controls his interest rate." },
                { text: "A farmers' cooperative society", group: 0, hint: "Cooperatives are formal sources." },
                { text: "A trader who gives seeds on credit", group: 1, hint: "Traders are not supervised as lenders." },
                { text: "A loan from an uncle", group: 1, hint: "Relatives and friends are informal." },
                { text: "A landlord advancing money to a labourer", group: 1, hint: "Landlords and employers are informal lenders." },
              ],
              explain: "Formal lenders (banks, cooperatives) are supervised by the RBI. Informal lenders are not, so their terms can be harsh.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Questions on SHGs usually ask for their **benefits**. Write separate points: savings habit, loans without collateral, the group handles repayment, timely loans at fair rates, a platform for women to discuss social issues. Five crisp points earn more than one long paragraph.",
          },
          {
            type: "keypoints",
            items: [
              "Credit can increase income or push borrowers into a debt trap.",
              "Terms of credit: interest rate, collateral, documentation and mode of repayment.",
              "Formal sources (banks, cooperatives) are supervised by the RBI; informal sources are not.",
              "SHGs give poor women savings, cheap loans without collateral and a voice.",
              "Grameen Bank and Muhammad Yunus won the Nobel Peace Prize in 2006.",
            ],
          },
        ],
        flashcards: [
          { front: "Credit", back: "An agreement where a lender gives money, goods or services to a borrower in return for a promise of future payment." },
          { front: "Collateral", back: "An asset the borrower owns, used as a guarantee to the lender until the loan is repaid." },
          { front: "Terms of credit", back: "Interest rate, collateral, documentation and mode of repayment." },
          { front: "Debt trap", back: "When a borrower cannot repay and ends up worse off than before, e.g. selling land to repay a loan." },
          { front: "Formal sources of credit", back: "Banks and cooperatives, supervised by the RBI." },
          { front: "Self-Help Group", back: "15–20 members, usually rural women, who save together, lend to members and can get bank loans without collateral." },
          { front: "Grameen Bank", back: "Bangladesh bank for small loans to the poor; Muhammad Yunus and the bank won the Nobel Peace Prize in 2006." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is NOT a term of credit?",
            options: ["Interest rate", "Collateral", "Mode of repayment", "Number of bank branches"],
            answer: 3,
            explain: "Terms of credit are interest rate, collateral, documentation and mode of repayment.",
          },
          {
            kind: "numeric",
            q: "An SHG lends ₹5,000 to a member at 2% per month for 5 months. How much interest (₹) will she pay?",
            answer: 500,
            unit: "₹",
            explain: "2% × 5 = 10%. 10% of ₹5,000 = ₹500.",
          },
          {
            kind: "truefalse",
            q: "The RBI supervises the lending of moneylenders in villages.",
            answer: false,
            explain: "The RBI supervises formal lenders like banks; informal lenders are not supervised.",
          },
          {
            kind: "fill",
            q: "An asset used as a guarantee for a loan is called ___.",
            answer: ["collateral"],
            explain: "If the loan is not repaid, the lender can sell the collateral.",
          },
          {
            kind: "multi",
            q: "Which are benefits of Self-Help Groups? (Choose all that apply.)",
            options: [
              "Loans without collateral",
              "Habit of regular saving",
              "A forum to discuss social issues",
              "Guaranteed government jobs for members",
            ],
            answers: [0, 1, 2],
            explain: "SHGs do not give government jobs; they help members start their own work.",
          },
          {
            kind: "mcq",
            q: "A poor farmer in a village is most likely to borrow from a moneylender because:",
            options: [
              "Moneylenders charge less interest than banks",
              "He lacks collateral and documents that banks require",
              "Banks refuse to lend to anyone in villages",
              "The RBI forbids farmers from using banks",
            ],
            answer: 1,
            explain: "Lack of collateral and documents keeps the poor away from formal credit, even though it is cheaper.",
            difficulty: 2,
            hint: "Moneylenders usually charge MORE, not less.",
          },
          {
            kind: "numeric",
            q: "₹15,000 is borrowed for 2 years at 10% per year simple interest. What is the total amount (₹) repaid?",
            answer: 18000,
            unit: "₹",
            explain: "Interest = 15,000 × 10 × 2 ÷ 100 = ₹3,000. Total = 15,000 + 3,000 = ₹18,000.",
            difficulty: 2,
            hint: "Amount = principal + interest.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "globalisation",
    title: "Globalisation and the Indian Economy",
    icon: "🌐",
    description: "MNCs, foreign trade and investment, technology, the 1991 reforms, WTO, impact of globalisation on people and businesses, and fair globalisation.",
    lessons: [
      {
        slug: "mncs-and-integration",
        title: "MNCs, Trade and the Integration of Markets",
        summary: "What MNCs are and how they spread production, how foreign trade links markets, and how technology made globalisation faster.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "📱",
            caption: "Your phone may be designed in one country, its chips made in another, assembled in a third and sold in India.",
          },
          {
            type: "text",
            md: "A **Multinational Corporation (MNC)** is a company that **owns or controls production in more than one nation**. MNCs set up offices and factories where they can produce cheaply: where labour is cheap, raw materials are close, markets are near and government policies are helpful.\n\nThe money spent by an MNC to buy land, buildings, machines and equipment in another country is called **foreign investment**. It is invested in the hope that these assets will earn profit.",
          },
          {
            type: "heading",
            text: "How MNCs spread their production",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Joint production with local companies**: the MNC brings money and new technology; the local company knows the market.",
              "**Buying up local companies**: a common way to expand fast. NCERT's example: Cargill Foods, an American MNC, bought the Indian company Parakh Foods.",
              "**Placing orders with small producers**: big MNCs in garments, footwear and sports items order products from small producers around the world and sell them under their own brand names.",
            ],
          },
          {
            type: "text",
            md: "**Foreign trade** also links markets. When Chinese toys come into Indian shops, Indian buyers get more choice, and Indian toy makers face **competition**. Prices of similar goods in the two countries start to come closer. So foreign trade leads to **integration of markets** across countries.",
          },
          {
            type: "text",
            md: "**Globalisation** is this process of rapid **integration or interconnection between countries**, through the movement of goods, services, investment, technology and, to a smaller extent, people. MNCs play a major role in it.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which statement best describes an MNC?",
                options: [
                  "A company that exports a lot",
                  "A company that owns or controls production in more than one nation",
                  "Any company with more than 1,000 workers",
                  "A government company",
                ],
                answer: 1,
                explain: "The key feature is control of production across nations, not just selling abroad.",
              },
            ],
          },
          {
            type: "heading",
            text: "Technology made it possible",
          },
          {
            type: "text",
            md: "Faster and cheaper transport (containers, ships, planes) lets goods move cheaply over long distances. **Information and communication technology** (telephones, mobile phones, computers, the internet) lets a company in London get designs made in Bengaluru and send them back in minutes. Services like customer care, data entry and accounting can now be done in India for companies abroad.",
          },
          {
            type: "example",
            title: "Reasoning: why would an MNC set up in Chennai?",
            problem: "A foreign car company is choosing a site for a new factory. Explain, step by step, why it might choose a city like Chennai.",
            steps: [
              "**Market**: India has a large and growing market for cars.",
              "**Labour**: skilled engineers and workers are available at lower cost than in the MNC's home country.",
              "**Supply and transport**: local parts makers are nearby and a port helps import parts and export cars.",
              "**Policy**: government rules allow foreign investment, and sometimes offer incentives.",
            ],
            answer: "Because it gives the MNC a large market, cheaper skilled labour, nearby suppliers and a port, and supportive government policies, so it can produce at lower cost and earn more profit.",
          },
          {
            type: "mistake",
            wrong: "An MNC is any company that sells its products in many countries.",
            right: "An MNC owns or controls **production** in more than one country. A company that only exports from one country is not an MNC.",
            why: "Big brands are seen everywhere, so selling abroad seems to be the key. The defining point is where the company **produces**, not where it sells.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each case to how the MNC spreads production.",
              pairs: [
                ["A foreign food company buys a large Indian food brand", "Buying up a local company"],
                ["A foreign firm and an Indian firm build a factory together", "Joint production"],
                ["A global sports brand orders shoes from small Indian units", "Placing orders with small producers"],
              ],
              explain: "MNCs do not always build their own factories. They can partner, buy, or simply place orders with local producers.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "\"How do MNCs control production in other countries?\" is a frequent 3-mark question. Write the three ways (joint production, buying local companies, placing orders with small producers) with one example each. Examples carry marks, so do not skip them.",
          },
          {
            type: "keypoints",
            items: [
              "MNCs own or control production in more than one nation.",
              "They spread production by joint production, buying local firms and placing orders with small producers.",
              "Foreign trade and foreign investment integrate markets across countries.",
              "Globalisation: rapid integration of countries through goods, services, investment, technology and people.",
              "Cheap transport and IT made globalisation faster.",
            ],
          },
        ],
        flashcards: [
          { front: "MNC", back: "A company that owns or controls production in more than one nation." },
          { front: "Foreign investment", back: "Investment made by MNCs in assets like land, buildings and machines in another country." },
          { front: "Three ways MNCs spread production", back: "Joint production with local firms, buying local firms, placing orders with small producers." },
          { front: "Globalisation", back: "Rapid integration or interconnection between countries through trade, investment, technology and people." },
          { front: "Integration of markets", back: "When foreign trade makes markets of different countries connected, so goods and prices start to match." },
          { front: "Main technology drivers", back: "Cheap, fast transport and information & communication technology (internet, mobiles, computers)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Cargill Foods buying Parakh Foods is an example of an MNC:",
            options: ["Placing orders with small producers", "Buying up a local company", "Setting up a joint venture with the government", "Exporting goods"],
            answer: 1,
            explain: "Cargill, an American MNC, bought the Indian company Parakh Foods.",
          },
          {
            kind: "truefalse",
            q: "A company that makes everything in India but sells abroad is a multinational corporation.",
            answer: false,
            explain: "An MNC must own or control production in more than one country.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which factors attract an MNC to set up production in a country? (Choose all that apply.)",
            options: ["Cheap skilled labour", "Closeness to markets", "Supportive government policies", "Very high import taxes on its own parts"],
            answers: [0, 1, 2],
            explain: "High taxes on the parts it needs would make production costly and keep it away.",
          },
          {
            kind: "fill",
            q: "The money spent by MNCs to buy assets in another country is called foreign ___.",
            answer: ["investment"],
            explain: "Foreign investment, made in the hope of earning profit.",
          },
          {
            kind: "mcq",
            q: "Which technology has done the most to allow services like data entry to be done in India for foreign firms?",
            options: ["Railways", "Information and communication technology", "Tractors", "Canal irrigation"],
            answer: 1,
            explain: "The internet and telecom let services be delivered across the world instantly.",
          },
          {
            kind: "order",
            q: "Order the steps by which Chinese toys reaching India integrate markets.",
            items: [
              "Chinese toys are imported into India",
              "Indian buyers get more choice",
              "Indian toy makers face competition",
              "Prices of toys in the two countries come closer",
            ],
            explain: "Trade connects buyers and sellers in different countries, and markets start to act as one.",
          },
        ],
      },
      {
        slug: "liberalisation-wto-and-impact",
        title: "Liberalisation, WTO and the Impact of Globalisation",
        summary: "Trade barriers, India's 1991 reforms, the WTO, who gained and who lost from globalisation, its effects on businesses, and fair globalisation.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A **trade barrier** is a restriction on foreign trade, such as a **tax on imports** or a limit on how much can be imported. After Independence, India put barriers on foreign trade and investment to **protect** young Indian industries from foreign competition.",
          },
          {
            type: "text",
            md: "In **1991**, India changed its economic policy. Barriers on foreign trade and foreign investment were largely removed. Removing barriers or restrictions set by the government is called **liberalisation**. Indian producers were now expected to improve quality and compete with the best in the world. The 1991 reforms are often called **LPG**: Liberalisation, Privatisation and Globalisation.",
          },
          {
            type: "text",
            md: "The **World Trade Organisation (WTO)**, set up in **1995**, aims to **liberalise international trade**. It makes rules about trade and checks that they are followed. Most countries of the world are members. But developed countries have often kept barriers for themselves, like large **subsidies** to their farmers, while asking developing countries to remove theirs. So many people argue that WTO rules are not always fair.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Special Economic Zones",
            md: "To attract foreign investment, the government sets up **Special Economic Zones (SEZs)**: areas with world-class facilities like electricity, water, roads and transport, where companies may get tax breaks for some years.",
          },
          {
            type: "heading",
            text: "Who gained and who lost?",
          },
          {
            type: "table",
            headers: ["Group", "Effect of globalisation"],
            rows: [
              ["Well-off urban consumers", "More choice, better quality, lower prices"],
              ["Large Indian companies (e.g. Tata Motors, Infosys, Asian Paints)", "New technology, partnerships, and some became MNCs themselves"],
              ["IT and service workers", "New jobs in IT, data and customer services"],
              ["Small manufacturers (e.g. batteries, plastic toys, tyres, dairy, vegetable oil)", "Hit hard by cheap imports; many units shut down"],
              ["Many factory workers", "Less job security; temporary work, long hours, fewer benefits ('flexible' labour laws)"],
            ],
          },
          {
            type: "heading",
            text: "Globalisation and business",
          },
          {
            type: "text",
            md: "For a business, **globalisation** means the business world becomes one big market. Firms can **import** cheaper inputs, **export** to buyers abroad, raise money from foreign investors, and form **joint ventures** with foreign firms. Companies can also **outsource**: get part of their work, like customer support, done by another firm, often in another country.\n\nThe flip side: competition is fierce. Firms that cannot match world quality and prices may lose their market.",
          },
          {
            type: "example",
            title: "Reasoning: a small toy maker after liberalisation",
            problem: "Before 1991, Anil's toy unit in Channapatna sold wooden toys in Indian markets with little foreign competition. After import barriers fell, cheap plastic toys arrived. Reason out what happens and what Anil could do.",
            steps: [
              "**Effect**: imported toys are cheaper, so buyers shift and Anil's sales fall.",
              "**Option 1, quality**: improve finish and safety to compete on quality, not just price.",
              "**Option 2, niche**: market his toys as eco-friendly, handmade and traditional.",
              "**Option 3, export**: use globalisation himself, selling online to buyers abroad who value such toys.",
            ],
            answer: "Globalisation creates both a threat (cheap imports) and an opportunity (new markets). Small producers who upgrade and find their niche can benefit; others may close.",
          },
          {
            type: "mistake",
            wrong: "Globalisation has benefited everyone in India equally.",
            right: "Its benefits have been uneven. Skilled, educated and well-off people and big companies gained most; many small producers and workers lost.",
            why: "We see shops full of foreign goods and new IT jobs, so it seems everyone is better off. But competition also closed many small units and made jobs less secure.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Removing barriers on foreign trade and investment is called:",
                options: ["Privatisation", "Liberalisation", "Nationalisation", "Protection"],
                answer: 1,
                explain: "Liberalisation = removing government barriers or restrictions.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Did this group mostly gain or face problems from globalisation?",
              groups: ["Mostly gained", "Faced problems"],
              items: [
                { text: "Urban consumers buying phones", group: 0, hint: "More choice and lower prices." },
                { text: "Small battery makers", group: 1, hint: "Cheap imports hit them hard." },
                { text: "Large IT companies", group: 0, hint: "They got work from foreign clients." },
                { text: "Factory workers on temporary contracts", group: 1, hint: "Less job security and fewer benefits." },
                { text: "Small vegetable-oil producers", group: 1, hint: "Imported edible oil competed with them." },
                { text: "Big Indian firms that became MNCs", group: 0, hint: "They expanded abroad." },
              ],
              explain: "Globalisation has winners and losers. That is why people demand **fair globalisation**.",
            },
          },
          {
            type: "text",
            md: "**Fair globalisation** means creating opportunities for all and making sure benefits are shared better. The government can help by enforcing labour laws so workers get their rights, supporting small producers until they become strong enough to compete, using trade barriers when needed, and negotiating at the WTO for fairer rules.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For \"What is the role of the WTO?\" write: it was started (1995) to liberalise international trade, it makes and enforces trade rules, and then add the criticism that developed countries keep unfair barriers like farm subsidies. Many students write only the role and miss the criticism mark. Karnataka students: questions on globalisation of business often ask for its advantages and disadvantages; use the gain/loss points above.",
          },
          {
            type: "keypoints",
            items: [
              "Trade barriers (e.g. import taxes) protect domestic producers.",
              "In 1991 India began liberalisation of foreign trade and investment.",
              "WTO (1995) aims to liberalise trade, but its rules are criticised as unfair to developing countries.",
              "Globalisation helped consumers, big firms and skilled workers; hurt many small producers and workers.",
              "Fair globalisation means sharing the benefits more widely, with government support.",
            ],
          },
        ],
        flashcards: [
          { front: "Trade barrier", back: "A government restriction on trade, e.g. a tax on imports or a limit on quantity." },
          { front: "Liberalisation", back: "Removing barriers or restrictions set by the government." },
          { front: "When did India begin liberalisation?", back: "1991." },
          { front: "WTO", back: "World Trade Organisation, set up in 1995 to liberalise international trade." },
          { front: "SEZ", back: "Special Economic Zone: an area with world-class facilities and tax benefits to attract investment." },
          { front: "Fair globalisation", back: "Globalisation that creates opportunities for all and shares benefits better." },
          { front: "Outsourcing", back: "A company getting part of its work, like customer support, done by an outside firm, often in another country." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The World Trade Organisation was set up in:",
            options: ["1947", "1991", "1995", "2001"],
            answer: 2,
            explain: "The WTO started in 1995. 1991 is when India began liberalisation.",
          },
          {
            kind: "truefalse",
            q: "A tax on imports is an example of a trade barrier.",
            answer: true,
            explain: "It makes imported goods costlier and so restricts trade.",
          },
          {
            kind: "fill",
            q: "India removed most barriers on foreign trade and investment from the year ___.",
            answer: ["1991"],
            explain: "The new economic policy of 1991.",
          },
          {
            kind: "multi",
            q: "Which groups were hit hard by competition from cheap imports? (Choose all that apply.)",
            options: ["Small battery makers", "Plastic toy makers", "Large IT companies", "Small dairy producers"],
            answers: [0, 1, 3],
            explain: "IT companies mostly gained from foreign clients.",
          },
          {
            kind: "mcq",
            q: "Why is the WTO criticised by developing countries?",
            options: [
              "It has no rules at all",
              "Developed countries keep barriers like farm subsidies while asking others to remove theirs",
              "It bans all foreign trade",
              "It only works within India",
            ],
            answer: 1,
            explain: "Unequal rules let rich countries protect their farmers while poorer countries open up.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which of these is a step towards fair globalisation?",
            options: [
              "Letting firms ignore labour laws",
              "Supporting small producers until they can compete",
              "Removing every barrier immediately regardless of effect",
              "Stopping all exports",
            ],
            answer: 1,
            explain: "Fair globalisation helps the weak, not just the strong.",
          },
          {
            kind: "truefalse",
            q: "Globalisation only creates threats for small businesses and never opportunities.",
            answer: false,
            explain: "Small producers can also export and reach new markets, especially online.",
            difficulty: 2,
            hint: "Think of the Channapatna toy maker.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "consumer-rights",
    title: "Consumer Rights and Consumer Protection",
    icon: "🛒",
    description: "How consumers are exploited, their rights and duties, the Consumer Protection Act 2019, the three-tier consumer commissions and quality marks.",
    lessons: [
      {
        slug: "consumer-exploitation-and-rights",
        title: "Consumer Exploitation, Rights and Duties",
        summary: "Ways consumers are cheated, the consumer movement in India, the six consumer rights, quality marks and the duties of a consumer.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🧾",
            caption: "A packet of chips says 100 g, but weighs 85 g. A shopkeeper charges more than the MRP for a cold drink. These are everyday cases of consumer exploitation.",
          },
          {
            type: "text",
            md: "A **consumer** is a person who buys goods or hires services for their own use, not for resale. Every one of us is a consumer: of food, medicines, bus rides, mobile data and electricity.\n\nConsumers are often in a weak position. A seller knows much more about the product. Big companies have money, power and influence. So consumers can be cheated. This is called **consumer exploitation**.",
          },
          {
            type: "list",
            items: [
              "**Under-weighing and under-measurement**: giving less than the amount paid for.",
              "**Adulteration**: mixing cheap or harmful material, e.g. water in milk, papaya seeds in black pepper.",
              "**Overcharging**: charging more than the **MRP** (maximum retail price) printed on the pack.",
              "**Sub-standard or defective goods**: a pressure cooker with a faulty safety valve.",
              "**Misleading information and advertisements**: false claims about a product's benefits.",
              "**Poor after-sales service**: refusing to repair a product under warranty.",
            ],
          },
          {
            type: "text",
            md: "The **consumer movement** in India grew out of public anger at food shortages, hoarding, black marketing and adulteration. Consumer groups began to form in the 1960s. A major step was the **Consumer Protection Act 1986 (COPRA)**. This was later **replaced by the Consumer Protection Act 2019**, which updated the law for e-commerce and created a **Central Consumer Protection Authority (CCPA)**.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Two important days",
            md: "**24 December** is **National Consumer Day** in India; the Consumer Protection Act was enacted on this date in 1986. **15 March** is **World Consumer Rights Day**.",
          },
          {
            type: "heading",
            text: "Rights of consumers",
          },
          {
            type: "table",
            headers: ["Right", "What it means", "Example"],
            rows: [
              ["**Right to safety**", "Protection from goods and services that are dangerous to life and property", "Electric iron with a proper earth wire; working brakes in a car"],
              ["**Right to be informed**", "Information about ingredients, price, batch number, date of manufacture, expiry, address of maker", "Expiry date on a medicine strip"],
              ["**Right to choose**", "Freedom to choose from a variety of goods at fair prices; no forced buying", "A gas agency cannot force you to buy a stove with a new connection"],
              ["**Right to seek redressal**", "Right to get compensation or a fair settlement against unfair trade practices", "Getting a replacement for a defective phone"],
              ["**Right to represent** (be heard)", "Right to be heard in consumer forums and on bodies that make decisions about consumers", "Consumer groups giving views to the government"],
              ["**Right to consumer education**", "Right to learn about one's rights and how to use them", "Awareness campaigns like Jago Grahak Jago"],
            ],
          },
          {
            type: "text",
            md: "The **Right to Information (RTI) Act**, passed in **2005**, extends the right to be informed to government departments: citizens can ask for information about the functioning of government offices.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A medicine strip does not show its expiry date. Which right is violated?",
                options: ["Right to safety", "Right to be informed", "Right to choose", "Right to represent"],
                answer: 1,
                explain: "The expiry date is information the consumer has a right to know.",
              },
            ],
          },
          {
            type: "heading",
            text: "Quality marks",
          },
          {
            type: "table",
            headers: ["Mark", "Found on", "Given by"],
            rows: [
              ["**ISI**", "Industrial and consumer goods like electrical items, cement, LPG cylinders", "Bureau of Indian Standards (BIS)"],
              ["**Agmark**", "Agricultural products like honey, ghee, spices, pulses", "Directorate of Marketing and Inspection (Government of India)"],
              ["**Hallmark**", "Gold and silver jewellery (certifies purity)", "Bureau of Indian Standards (BIS)"],
            ],
          },
          {
            type: "example",
            title: "Reasoning: spotting the right violated",
            problem: "Sana buys a ₹40 cold drink with an MRP of ₹35. The shopkeeper says \"₹5 extra for cooling\". When she refuses, he tells her she must also buy chips if she wants the drink. Which rights are violated, and what should she do?",
            steps: [
              "Charging ₹40 when MRP is ₹35 is **overcharging**, an unfair trade practice. MRP is the maximum, including all taxes, so no extra can be charged.",
              "Forcing her to buy chips with the drink violates the **right to choose**.",
              "Her **duty** is to ask for a proper bill and not pay more than MRP.",
              "If needed, she can complain on the **National Consumer Helpline** or file a complaint with the **District Commission** (right to seek redressal).",
            ],
            answer: "Overcharging above MRP and the right to choose are violated. She should insist on MRP, take a bill, and complain if the seller refuses.",
          },
          {
            type: "mistake",
            wrong: "A shop can charge more than the MRP if it keeps the drink cold or adds tax.",
            right: "MRP is the maximum retail price including all taxes. No one can legally charge more than MRP; one can bargain for less.",
            why: "Shops often add \"cooling charges\" and people pay without thinking. The word \"maximum\" is the key: MRP is a ceiling, not a starting price.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each situation to the consumer right involved.",
              pairs: [
                ["A pressure cooker's safety valve bursts", "Right to safety"],
                ["A pack has no date of manufacture", "Right to be informed"],
                ["A dealer insists you buy his brand of battery", "Right to choose"],
                ["A company refuses to replace a faulty fridge", "Right to seek redressal"],
                ["Consumer groups are invited to give views on a new rule", "Right to represent"],
              ],
              explain: "Each right protects a different part of buying: safety in use, information before buying, freedom of choice, a remedy afterwards, and a voice in decisions.",
            },
          },
          {
            type: "text",
            md: "Consumers also have **duties**: ask for a **cash memo or bill**, check quality marks (ISI, Agmark, Hallmark), read the label and expiry date, read warranty terms, file a complaint when cheated, and form or join consumer groups.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Case-based questions often describe a situation and ask \"which right is violated?\". Name the right **exactly** (e.g. \"right to be informed\", not \"right to know\") and give one line of reason from the case. A right named without a reason usually gets only half the marks.",
          },
          {
            type: "keypoints",
            items: [
              "Consumer exploitation: under-weighing, adulteration, overcharging, defective goods, misleading ads.",
              "Six rights: safety, information, choice, redressal, representation and consumer education.",
              "COPRA 1986 was replaced by the Consumer Protection Act 2019.",
              "Quality marks: ISI and Hallmark (BIS), Agmark (agricultural products).",
              "Duties: take a bill, check marks and labels, complain when cheated.",
            ],
          },
        ],
        flashcards: [
          { front: "Consumer", back: "A person who buys goods or hires services for own use, not for resale." },
          { front: "Six consumer rights", back: "Safety, to be informed, to choose, to seek redressal, to represent (be heard), consumer education." },
          { front: "MRP", back: "Maximum Retail Price, inclusive of all taxes. Sellers cannot charge more than this." },
          { front: "National Consumer Day", back: "24 December (the Consumer Protection Act was enacted on 24 December 1986)." },
          { front: "Which Act replaced COPRA 1986?", back: "The Consumer Protection Act 2019." },
          { front: "Agmark", back: "Quality certification mark for agricultural products like honey, ghee and spices." },
          { front: "Hallmark", back: "Mark certifying the purity of gold and silver jewellery, given by BIS." },
          { front: "RTI Act", back: "Right to Information Act 2005: citizens can get information about government departments." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Mixing water in milk is an example of:",
            options: ["Under-weighing", "Adulteration", "Overcharging", "Right to choose"],
            answer: 1,
            explain: "Adding a cheaper substance to a product is adulteration.",
          },
          {
            kind: "truefalse",
            q: "A shopkeeper may charge more than the MRP if he pays for refrigeration.",
            answer: false,
            explain: "MRP is the maximum price including all taxes. Charging more is unfair.",
          },
          {
            kind: "fill",
            q: "The ISI mark is given by the Bureau of Indian ___.",
            answer: ["Standards"],
            explain: "BIS certifies industrial and consumer goods with the ISI mark.",
          },
          {
            kind: "mcq",
            q: "World Consumer Rights Day is observed on:",
            options: ["24 December", "15 March", "15 August", "5 June"],
            answer: 1,
            explain: "15 March is World Consumer Rights Day. 24 December is National Consumer Day in India.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these are duties of a consumer? (Choose all that apply.)",
            options: [
              "Ask for a bill",
              "Check the expiry date",
              "Look for quality marks like ISI",
              "Pay whatever the seller asks without question",
            ],
            answers: [0, 1, 2],
            explain: "A responsible consumer checks and questions; blindly paying helps exploitation.",
          },
          {
            kind: "mcq",
            q: "An LPG agency forces you to buy a gas stove from it to get a new connection. Which right is violated?",
            options: ["Right to safety", "Right to be informed", "Right to choose", "Right to consumer education"],
            answer: 2,
            explain: "Forcing an extra purchase takes away your freedom to choose.",
            difficulty: 2,
            hint: "Can you buy the stove elsewhere?",
          },
          {
            kind: "truefalse",
            q: "The Consumer Protection Act 1986 is still the main consumer law in India today.",
            answer: false,
            explain: "It was replaced by the Consumer Protection Act 2019.",
          },
        ],
      },
      {
        slug: "consumer-commissions-and-complaints",
        title: "Consumer Commissions and Filing a Complaint",
        summary: "The three-tier quasi-judicial machinery under the Consumer Protection Act 2019, the Central Consumer Protection Authority, and how to file a complaint.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "Knowing your rights is only half the job. You also need a place to get justice. The Consumer Protection Act sets up special **consumer courts** that are **quasi-judicial**: they work like courts and give binding orders, but they are simpler, quicker and cheaper than ordinary courts. A consumer can argue the case **without a lawyer**.",
          },
          {
            type: "heading",
            text: "Three-tier consumer commissions",
          },
          {
            type: "table",
            headers: ["Level", "Body", "Role"],
            rows: [
              ["District", "**District Consumer Disputes Redressal Commission**", "Hears complaints from consumers in the district; the first place most cases go"],
              ["State", "**State Consumer Disputes Redressal Commission**", "Hears larger cases and appeals against District Commission orders"],
              ["National", "**National Consumer Disputes Redressal Commission** (New Delhi)", "Hears the biggest cases and appeals against State Commission orders"],
            ],
          },
          {
            type: "text",
            md: "Which commission hears a case depends on the **value of the goods or services** paid for. The value limits for each level are fixed by the government and have been changed over time, so always check the current limits. Under the 1986 Act these bodies were called consumer **forums** (District Forum); the 2019 Act renamed them **commissions**. Some textbooks still use the old names.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Central Consumer Protection Authority (CCPA)",
            md: "The 2019 Act created the **CCPA** to protect consumers as a class. It can investigate unfair trade practices and **false or misleading advertisements**, order recalls of unsafe goods, and act against them. The Act also covers **e-commerce** (online shopping) and **product liability**: a maker or seller can be held responsible for harm caused by a defective product.",
          },
          {
            type: "heading",
            text: "How to file a complaint",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Keep the **bill**, warranty card and any letters or emails with the seller.",
              "Write to the seller or company first, asking them to fix the problem.",
              "If they do not respond, you may call the **National Consumer Helpline**, or file a written complaint with the District Commission (online filing is also available).",
              "Describe the facts, attach copies of the bill and documents, and state the relief you want (refund, replacement, compensation).",
              "Attend the hearing (in person or through a representative); the commission gives its order.",
            ],
          },
          {
            type: "text",
            md: "A complaint should be filed within **two years** from the date the problem arose (the cause of action). If the consumer is not satisfied with the District Commission's order, they can **appeal** to the State Commission, and then to the National Commission.",
          },
          {
            type: "example",
            title: "Walking through a real-style case",
            problem: "Ravi in Mysuru buys a ₹15,000 washing machine with a one-year warranty. It stops working in month three. The company's service centre keeps delaying repair for two months. What steps should Ravi take, and where would his case go?",
            steps: [
              "Identify the problem: a defective product and poor after-sales service; his **right to seek redressal** applies.",
              "Collect evidence: bill, warranty card, dates of complaints to the service centre.",
              "Send a written complaint to the company asking for repair or replacement within a fixed time.",
              "If it fails, file a complaint with the **District Consumer Disputes Redressal Commission**, Mysuru; no lawyer is needed.",
              "If unhappy with the order, he can appeal to the **State Commission**.",
            ],
            answer: "Ravi should first complain to the company in writing, then approach the District Commission with his bill and warranty. A small-value case like his starts at the district level.",
          },
          {
            type: "mistake",
            wrong: "You need to hire a lawyer and pay large fees to go to a consumer court.",
            right: "A consumer can file and argue the case personally. Consumer commissions are designed to be simple, quick and low-cost.",
            why: "Most people think of ordinary courts, which are slow and costly. Consumer commissions were set up precisely to avoid this, though cases can still take time.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "order",
                q: "Order the consumer commissions from the lowest level to the highest.",
                items: ["District Commission", "State Commission", "National Commission"],
                explain: "Appeals go upward: district → state → national.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Ravi is unhappy with the District Commission's order. Where does he go next?",
              emoji: "⚖️",
              options: ["Straight to the Supreme Court", "The State Consumer Commission", "The police station"],
              answer: 1,
              trap: 0,
              explain: "Appeals in consumer cases go step by step: district → state → national. Consumer disputes are civil matters, not police cases.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Write \"three-tier quasi-judicial machinery at district, state and national levels\". Many students write \"consumer police\" or mix up the levels. Avoid writing exact rupee limits unless your textbook gives them, because they have been revised. Karnataka students: this matches the Business Studies chapter on consumer protection; also mention consumer councils and voluntary consumer organisations if asked about consumer education.",
          },
          {
            type: "keypoints",
            items: [
              "Consumer commissions are quasi-judicial, at district, state and national levels.",
              "The 2019 Act renamed forums as commissions and set up the CCPA.",
              "A consumer can file a complaint without a lawyer, within two years of the problem.",
              "Appeals go from district to state to national commission.",
              "Keep bills and warranty cards: they are your evidence.",
            ],
          },
        ],
        flashcards: [
          { front: "Quasi-judicial", back: "A body that works like a court and gives binding orders, but with simpler, faster procedures." },
          { front: "Three tiers of consumer commissions", back: "District, State and National Consumer Disputes Redressal Commissions." },
          { front: "CCPA", back: "Central Consumer Protection Authority, set up under the 2019 Act to act against unfair trade practices and misleading ads." },
          { front: "Time limit to file a consumer complaint", back: "Within two years from the date the cause of action arose." },
          { front: "Do you need a lawyer in a consumer commission?", back: "No. A consumer can file and argue the case personally." },
          { front: "Where does an appeal against a District Commission order go?", back: "To the State Commission." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which is the highest body in the consumer redressal machinery?",
            options: ["District Commission", "State Commission", "National Commission", "Gram Panchayat"],
            answer: 2,
            explain: "The National Consumer Disputes Redressal Commission is at the top.",
          },
          {
            kind: "truefalse",
            q: "Consumer commissions are called quasi-judicial because they work like courts but with simpler procedures.",
            answer: true,
            explain: "They give binding orders but are quicker and cheaper than ordinary courts.",
          },
          {
            kind: "fill",
            q: "The 2019 Act set up the Central Consumer Protection ___ to act against misleading advertisements.",
            answer: ["Authority"],
            explain: "The CCPA.",
          },
          {
            kind: "mcq",
            q: "What decides whether a case is heard at the district, state or national level?",
            options: [
              "The age of the consumer",
              "The value of goods or services paid for",
              "The brand of the product",
              "The distance to New Delhi",
            ],
            answer: 1,
            explain: "Jurisdiction depends on the value of goods or services; the limits are set by the government.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which documents help most when filing a consumer complaint? (Choose all that apply.)",
            options: ["Bill or cash memo", "Warranty card", "Copies of complaints sent to the seller", "Your school report card"],
            answers: [0, 1, 2],
            explain: "These prove the purchase, the promise and your attempts to settle.",
          },
          {
            kind: "order",
            q: "Put the steps of seeking redressal in order.",
            items: [
              "Keep the bill and warranty",
              "Complain to the seller in writing",
              "File a complaint at the District Commission",
              "Appeal to the State Commission if unsatisfied",
            ],
            explain: "Try to settle first; go to the commission if that fails; appeal upward if needed.",
          },
          {
            kind: "truefalse",
            q: "Under the 2019 Act, consumer protection also covers goods bought online.",
            answer: true,
            explain: "The 2019 Act includes e-commerce.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "rural-development",
    title: "Rural Development",
    icon: "🏡",
    description: "Why rural development matters, rural problems, Panchayat Raj and decentralisation, SHGs and women's empowerment, and rural employment schemes.",
    lessons: [
      {
        slug: "rural-development-and-panchayat-raj",
        title: "Rural Development, Panchayat Raj and Women's Empowerment",
        summary: "The meaning and importance of rural development, problems of villages, decentralisation through Panchayat Raj, SHGs and schemes like MGNREGA.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🛖",
            caption: "A large share of India's people still live in villages. When villages grow, India grows.",
          },
          {
            type: "text",
            md: "**Rural development** means improving the economic and social life of people living in villages. It includes better farming and incomes, more jobs, and better facilities: roads, drinking water, electricity, schools, health centres and housing.\n\nMahatma Gandhi believed that the real India lives in its villages, and that India could develop only if its villages became self-reliant. He called this ideal **Gram Swaraj** (village self-rule).",
          },
          {
            type: "heading",
            text: "Why is rural development important?",
          },
          {
            type: "list",
            items: [
              "Most Indians live in villages, so national development depends on rural development.",
              "Agriculture supplies food to the country and raw materials to industries.",
              "Rural poverty and unemployment push people to migrate to crowded cities.",
              "Villages need basic facilities to give everyone a fair chance in life.",
            ],
          },
          {
            type: "text",
            md: "**Rural problems** include poverty, unemployment and **disguised unemployment** in farming, dependence on the monsoon, illiteracy, poor health facilities, poor roads and markets, debt to moneylenders, and inequality, including discrimination against women and weaker sections.",
          },
          {
            type: "heading",
            text: "Decentralisation and Panchayat Raj",
          },
          {
            type: "text",
            md: "**Decentralisation** means handing power and responsibility from the central and state governments to local bodies, so that people can plan and decide for their own area. Local people know their own problems best.\n\nThe **73rd Constitutional Amendment (1992)** gave Panchayat Raj institutions constitutional status. It requires regular elections every five years and reserves seats for SCs, STs and **at least one-third of seats for women**. Many states have raised women's reservation to half.",
          },
          {
            type: "table",
            headers: ["Level in Karnataka", "Covers", "Example of work"],
            rows: [
              ["**Gram Panchayat**", "A village or group of villages", "Drinking water, street lights, village roads, sanitation"],
              ["**Taluk Panchayat**", "A taluk", "Coordinating plans of gram panchayats in the taluk"],
              ["**Zilla Panchayat**", "A district", "District-level development plans, rural schools and health centres"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "order",
                q: "Arrange the Panchayat Raj institutions of Karnataka from the village level upward.",
                items: ["Gram Panchayat", "Taluk Panchayat", "Zilla Panchayat"],
                explain: "Village → taluk → district.",
              },
            ],
          },
          {
            type: "heading",
            text: "Women's empowerment and SHGs",
          },
          {
            type: "text",
            md: "**Women's empowerment** means giving women the confidence, income and power to make their own decisions. In villages, **Self-Help Groups (SHGs)** of 15–20 women save small sums regularly, give loans to members, and later get bank loans without collateral to start small businesses like tailoring, papad-making or dairy. Karnataka's **Stree Shakti** programme organises rural women into such groups.\n\nEarning their own money gives women more say at home and in the community, and reservation in panchayats brings many women into local leadership.",
          },
          {
            type: "example",
            title: "How an SHG builds capital",
            problem: "An SHG in Haveri has 15 women. Each saves ₹100 a month. After 2 years, the bank lends the group four times its savings. How much money does the group have to lend and invest?",
            steps: [
              "Monthly saving of the group = 15 × ₹100 = ₹1,500.",
              "Savings in 2 years = 1,500 × 24 = ₹36,000.",
              "Bank loan = 4 × 36,000 = ₹1,44,000.",
              "Total funds = 36,000 + 1,44,000 = ₹1,80,000 (ignoring interest).",
            ],
            answer: "₹1,80,000, enough to start small enterprises for several members. Small savings plus bank credit make a real difference.",
          },
          {
            type: "mistake",
            wrong: "Rural development only means improving agriculture.",
            right: "It includes farming, but also non-farm jobs, education, health, roads, housing, drinking water, and empowerment of women and weaker sections.",
            why: "Villages are linked in our minds with farms, so farming looks like the whole answer. But many rural people are landless and need jobs, skills and services too.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is this a rural problem or a step towards rural development?",
              groups: ["Rural problem", "Step towards development"],
              items: [
                { text: "Dependence on the monsoon for crops", group: 0, hint: "A failed monsoon can ruin farmers." },
                { text: "Building an all-weather road to the village", group: 1, hint: "Roads connect villages to markets." },
                { text: "Borrowing from moneylenders at high interest", group: 0, hint: "It can lead to a debt trap." },
                { text: "Forming a women's SHG", group: 1, hint: "SHGs give savings and credit." },
                { text: "100 days of work under MGNREGA", group: 1, hint: "It gives employment and builds village assets." },
                { text: "Young people migrating to cities for any work", group: 0, hint: "It happens when there are no jobs in villages." },
              ],
              explain: "Rural development tackles problems like poverty, debt and lack of work with roads, credit, jobs and empowerment.",
            },
          },
          {
            type: "text",
            md: "Some schemes for rural development: **MGNREGA (2005)**, which guarantees 100 days of wage work a year to rural households; **Pradhan Mantri Gram Sadak Yojana**, for all-weather rural roads; rural housing schemes; and **cooperative societies** that give farmers credit, seeds and fertilisers at fair rates.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip (Karnataka SSLC)",
            md: "Questions often ask \"Why is decentralisation important?\" or \"How do SHGs empower women?\". Give 3–4 separate points, and link at least one point to Gandhiji's idea of self-reliant villages. Spell the three tiers correctly: Gram, Taluk and Zilla Panchayat.",
          },
          {
            type: "keypoints",
            items: [
              "Rural development improves incomes, jobs and facilities in villages.",
              "Gandhiji saw self-reliant villages (Gram Swaraj) as the base of India's development.",
              "The 73rd Amendment (1992) gave Panchayat Raj constitutional status, with at least one-third seats for women.",
              "Karnataka has Gram, Taluk and Zilla Panchayats.",
              "SHGs (e.g. Stree Shakti) and MGNREGA help rural women and households.",
            ],
          },
        ],
        flashcards: [
          { front: "Rural development", back: "Improving the economic and social life of village people: incomes, jobs, roads, water, health, education." },
          { front: "Decentralisation", back: "Transfer of power and responsibility from central and state governments to local bodies." },
          { front: "73rd Constitutional Amendment", back: "1992; gave Panchayat Raj constitutional status, regular elections and reservation (at least one-third for women)." },
          { front: "Three tiers of Panchayat Raj in Karnataka", back: "Gram Panchayat, Taluk Panchayat, Zilla Panchayat." },
          { front: "Gram Swaraj", back: "Gandhiji's ideal of self-reliant, self-governing villages." },
          { front: "Stree Shakti", back: "Karnataka programme organising rural women into Self-Help Groups." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which amendment gave constitutional status to Panchayat Raj institutions?",
            options: ["42nd", "52nd", "73rd", "86th"],
            answer: 2,
            explain: "The 73rd Amendment, 1992.",
          },
          {
            kind: "fill",
            q: "The Panchayat Raj body at the district level in Karnataka is the ___ Panchayat.",
            answer: ["Zilla", "Zila"],
            explain: "Gram (village), Taluk (taluk), Zilla (district).",
          },
          {
            kind: "truefalse",
            q: "The 73rd Amendment reserves at least one-third of panchayat seats for women.",
            answer: true,
            explain: "Many states have increased this further.",
          },
          {
            kind: "multi",
            q: "Which of these are rural problems? (Choose all that apply.)",
            options: ["Disguised unemployment", "Dependence on monsoon", "Poor roads to markets", "Too many factories in villages"],
            answers: [0, 1, 2],
            explain: "Villages usually lack industry, not have too much of it.",
          },
          {
            kind: "numeric",
            q: "An SHG of 20 women each saves ₹50 a month. What are the group's total savings (₹) after 1 year?",
            answer: 12000,
            unit: "₹",
            explain: "20 × 50 = ₹1,000 a month; × 12 = ₹12,000.",
          },
          {
            kind: "mcq",
            q: "The main idea of decentralisation is that:",
            options: [
              "All decisions should be taken in New Delhi",
              "Local people can best plan for their own area",
              "Panchayats should collect all national taxes",
              "Villages should not have elections",
            ],
            answer: 1,
            explain: "Local bodies understand local problems and can act faster.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Rural development means only increasing crop production.",
            answer: false,
            explain: "It also covers jobs, health, education, infrastructure and empowerment.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "public-finance-and-budget",
    title: "Public Finance and Budget",
    icon: "🏛️",
    description: "Government income and spending, taxes and non-tax revenue, the budget, and balanced, surplus and deficit budgets.",
    lessons: [
      {
        slug: "public-finance-and-budget",
        title: "Government Revenue, Expenditure and the Budget",
        summary: "What public finance is, sources of government revenue, direct and indirect taxes, public expenditure, the budget and its types, and deficits.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A family plans how much it will earn and spend in a month. A government does the same, on a huge scale. **Public finance** is the study of the **income (revenue) and expenditure of the government**, and how the two are balanced.",
          },
          {
            type: "heading",
            text: "Where does the government's money come from?",
          },
          {
            type: "text",
            md: "**Tax revenue**: a **tax** is a compulsory payment to the government, for which the taxpayer does not get a direct service in return.\n\n- A **direct tax** is paid by the person on whom it is imposed; its burden cannot be shifted. Examples: **income tax**, **corporation tax** (on company profits).\n- An **indirect tax** is collected through the seller, so its burden can be passed on to the buyer in the price. Examples: **GST** (Goods and Services Tax, introduced on 1 July 2017) and **customs duty** on imports.",
          },
          {
            type: "text",
            md: "**Non-tax revenue**: money the government gets other than taxes: **fees** (for licences, registration), **fines and penalties**, **profits of public sector enterprises**, **interest** on loans given to states and others, and grants.\n\nWhen revenue is not enough, the government **borrows** from people and banks inside the country (**internal debt**) or from abroad (**external debt**). The total of these loans is called **public debt**.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is it a direct tax, an indirect tax or non-tax revenue?",
              groups: ["Direct tax", "Indirect tax", "Non-tax revenue"],
              items: [
                { text: "Income tax paid by a doctor", group: 0, hint: "The doctor pays it herself; she cannot shift it." },
                { text: "GST added to a restaurant bill", group: 1, hint: "The restaurant collects it from the customer." },
                { text: "Corporation tax on a company's profit", group: 0, hint: "The company bears it directly." },
                { text: "Customs duty on imported phones", group: 1, hint: "The importer passes it on in the price." },
                { text: "A fine for jumping a red light", group: 2, hint: "A penalty is not a tax." },
                { text: "Profit of a government-owned company", group: 2, hint: "It is earnings from an enterprise, not a tax." },
              ],
              explain: "Ask two questions: is it compulsory with no direct service (a tax)? Can the burden be passed on (indirect) or not (direct)?",
            },
          },
          {
            type: "text",
            md: "**Public expenditure** is the money the government spends: on **defence** and police, **education** and **health**, roads, railways and dams, **subsidies** (e.g. on food and fertilisers), salaries and pensions, and **interest** on public debt. Spending on development helps the economy grow and reduces inequality.",
          },
          {
            type: "heading",
            text: "The budget",
          },
          {
            type: "text",
            md: "A **budget** is a statement of the **estimated revenue and expenditure** of the government for a **financial year**. In India the financial year runs from **1 April to 31 March**. The Constitution calls the Union Budget the **Annual Financial Statement**. The Union Finance Minister presents it in Parliament (now on **1 February** each year), and each state's budget is presented in its legislature.",
          },
          {
            type: "table",
            headers: ["Type of budget", "Condition", "Meaning"],
            rows: [
              ["**Balanced budget**", "Revenue = Expenditure", "Government spends exactly what it earns"],
              ["**Surplus budget**", "Revenue > Expenditure", "Government earns more than it spends"],
              ["**Deficit budget**", "Revenue < Expenditure", "Government spends more than it earns and must borrow or cover the gap"],
            ],
          },
          {
            type: "example",
            title: "Finding the budget type",
            problem: "A state estimates: tax revenue ₹1,80,000 crore, non-tax revenue ₹20,000 crore, and total expenditure ₹2,30,000 crore (borrowing not counted as revenue). What type of budget is this and by how much?",
            steps: [
              "Total revenue = 1,80,000 + 20,000 = ₹2,00,000 crore.",
              "Compare: expenditure ₹2,30,000 crore is greater than revenue ₹2,00,000 crore.",
              "Gap = 2,30,000 − 2,00,000 = ₹30,000 crore.",
              "Since expenditure exceeds revenue, it is a deficit budget; the gap must be met by borrowing.",
            ],
            answer: "A deficit budget, with a deficit of ₹30,000 crore.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A government expects revenue of ₹500 crore and plans to spend ₹460 crore. By how much (₹ crore) is the budget in surplus?",
                answer: 40,
                unit: "₹ crore",
                explain: "Revenue exceeds expenditure by 500 − 460 = ₹40 crore, so it is a surplus budget.",
              },
            ],
          },
          {
            type: "text",
            md: "**Fiscal deficit** is the gap between the government's **total expenditure** and its **total receipts excluding borrowings**. It shows how much the government must borrow in the year. A moderate deficit spent on roads, schools and hospitals can help growth, but a very large one piles up public debt and interest payments.",
          },
          {
            type: "mistake",
            wrong: "A deficit budget is always bad, and a surplus budget is always good.",
            right: "It depends on why. Deficit spending on development can help growth, especially in a developing country; a surplus while people lack basic services is not ideal.",
            why: "For a family, spending more than you earn sounds bad. But a government can borrow to build assets that raise future income, while a surplus may mean it is spending too little.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip (Karnataka SSLC)",
            md: "Differences between direct and indirect taxes are asked often. Write in a table: who pays, can the burden be shifted, examples. When asked for types of budget, give the condition (revenue vs expenditure) for each. Use \"revenue\" and \"expenditure\", not \"income\" and \"spending\", to match the textbook terms.",
          },
          {
            type: "keypoints",
            items: [
              "Public finance studies government revenue and expenditure.",
              "Revenue: taxes (direct and indirect) and non-tax revenue (fees, fines, PSU profits, interest).",
              "Direct tax burden cannot be shifted (income tax); indirect tax burden can (GST, customs).",
              "A budget estimates revenue and expenditure for the financial year (1 April to 31 March).",
              "Balanced: R = E; surplus: R > E; deficit: R < E.",
            ],
          },
        ],
        flashcards: [
          { front: "Public finance", back: "The study of the income (revenue) and expenditure of the government and how they are balanced." },
          { front: "Tax", back: "A compulsory payment to the government without a direct service in return." },
          { front: "Direct tax", back: "Burden cannot be shifted, e.g. income tax, corporation tax." },
          { front: "Indirect tax", back: "Burden can be shifted to buyers, e.g. GST, customs duty." },
          { front: "Budget", back: "Statement of estimated revenue and expenditure of the government for a financial year." },
          { front: "India's financial year", back: "1 April to 31 March." },
          { front: "Deficit budget", back: "Expenditure is greater than revenue." },
          { front: "Fiscal deficit", back: "Total expenditure minus total receipts excluding borrowings." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a direct tax?",
            options: ["GST", "Customs duty", "Income tax", "A traffic fine"],
            answer: 2,
            explain: "Income tax is paid by the earner and cannot be shifted. GST and customs are indirect; a fine is non-tax revenue.",
          },
          {
            kind: "truefalse",
            q: "In a surplus budget, the government's expenditure is more than its revenue.",
            answer: false,
            explain: "In a surplus budget, revenue is more than expenditure.",
          },
          {
            kind: "numeric",
            q: "Revenue is ₹840 crore and expenditure is ₹900 crore. What is the deficit (₹ crore)?",
            answer: 60,
            unit: "₹ crore",
            explain: "900 − 840 = ₹60 crore.",
          },
          {
            kind: "fill",
            q: "GST stands for Goods and Services ___.",
            answer: ["Tax"],
            explain: "GST was introduced in India on 1 July 2017.",
          },
          {
            kind: "multi",
            q: "Which are sources of non-tax revenue? (Choose all that apply.)",
            options: ["Fees for a driving licence", "Profits of public sector companies", "Fines", "Income tax"],
            answers: [0, 1, 2],
            explain: "Income tax is a tax, so it is tax revenue.",
          },
          {
            kind: "mcq",
            q: "India's financial year runs from:",
            options: ["1 January to 31 December", "1 April to 31 March", "1 July to 30 June", "1 February to 31 January"],
            answer: 1,
            explain: "The financial year is 1 April to 31 March. The budget is presented on 1 February, before the year starts.",
            difficulty: 2,
            hint: "Do not confuse the date the budget is presented with the financial year.",
          },
          {
            kind: "numeric",
            q: "A government's total expenditure is ₹1,200 crore. Its revenue receipts are ₹950 crore and other non-borrowed receipts are ₹50 crore. What is the fiscal deficit (₹ crore)?",
            answer: 200,
            unit: "₹ crore",
            explain: "Receipts excluding borrowings = 950 + 50 = ₹1,000 crore. Fiscal deficit = 1,200 − 1,000 = ₹200 crore.",
            difficulty: 3,
            hint: "Add up all receipts that are not borrowings first.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bank-transactions",
    title: "Bank Transactions",
    icon: "🏦",
    description: "Types of bank accounts, opening an account, deposit slips, cheques and crossing, and modern e-banking.",
    lessons: [
      {
        slug: "bank-accounts-slips-and-cheques",
        title: "Bank Accounts, Deposit Slips and Cheques",
        summary: "Savings, current, recurring and fixed deposit accounts, how to open an account, filling a pay-in slip and a cheque, crossing, and e-banking.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A **bank** accepts deposits from the public and gives loans. To use a bank, you first open an **account**. Different people need different kinds of accounts.",
          },
          {
            type: "table",
            headers: ["Account", "Best for", "Key features"],
            rows: [
              ["**Savings Bank (SB) account**", "Individuals saving money", "Earns interest; withdrawals allowed; cheque book and debit card available"],
              ["**Current account**", "Businesses and traders", "Any number of deposits and withdrawals; usually no interest; overdraft may be allowed"],
              ["**Recurring Deposit (RD)**", "People who can save a fixed sum every month", "Fixed monthly deposit for a fixed period; higher interest than SB"],
              ["**Fixed Deposit (FD)**", "A lump sum not needed for some time", "Deposited for a fixed period; highest interest of these; early withdrawal may cut interest"],
            ],
          },
          {
            type: "heading",
            text: "Opening an account",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Get the **account opening form** from the bank (or its website) and fill it in.",
              "Attach **KYC (Know Your Customer)** documents: proof of identity and address, such as Aadhaar, PAN card, passport or voter ID.",
              "Attach recent **passport-size photographs** and give your **specimen signature**.",
              "Make the **initial deposit**, if the bank requires one.",
              "The bank checks the documents, opens the account and gives an **account number**, a **passbook** and, if asked, a **cheque book** and debit card.",
            ],
          },
          {
            type: "heading",
            text: "Depositing money: the pay-in slip",
          },
          {
            type: "text",
            md: "To deposit cash or a cheque at the branch, you fill a **pay-in slip** (deposit slip). It has the date, branch, account number, account holder's name, the **denominations** of notes, the total in **figures and words**, and the depositor's signature. The bank stamps and returns the small **counterfoil** as your receipt.",
          },
          {
            type: "example",
            title: "Filling a pay-in slip step by step",
            problem: "Kavya deposits cash into her savings account: 3 notes of ₹500, 4 notes of ₹200 and 5 notes of ₹100. Fill in the amount on the pay-in slip.",
            steps: [
              "Write the date, branch name, her **account number** and **name** exactly as in the passbook.",
              "Denomination table: 500 × 3 = ₹1,500; 200 × 4 = ₹800; 100 × 5 = ₹500.",
              "Total in figures: 1,500 + 800 + 500 = **₹2,800**.",
              "Total in words: **Rupees Two Thousand Eight Hundred only**.",
              "Sign the slip, hand it over with the cash, and keep the stamped counterfoil.",
            ],
            answer: "₹2,800 (Rupees Two Thousand Eight Hundred only), with the denominations listed and the counterfoil kept as proof.",
          },
          {
            type: "heading",
            text: "Cheques",
          },
          {
            type: "text",
            md: "A **cheque** is a written order by an account holder to the bank to pay a stated sum to a named person or to the bearer. It has three parties:\n\n- **Drawer**: the account holder who writes and signs the cheque.\n- **Drawee**: the bank on which it is drawn, which pays.\n- **Payee**: the person who receives the money.\n\nA cheque is valid for **three months** from its date.",
          },
          {
            type: "table",
            headers: ["Type", "How it is paid"],
            rows: [
              ["**Bearer cheque**", "Paid in cash to whoever presents it at the counter; risky if lost"],
              ["**Order cheque**", "\"Bearer\" is struck off; paid only to the named payee, after identification"],
              ["**Crossed cheque**", "Two parallel lines on the top-left corner; cannot be cashed at the counter, only credited to a bank account"],
              ["**Account payee crossing**", "\"A/c Payee\" written between the lines; credited only to the payee's own account"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Ramesh writes a cheque from his SBI account to pay Suresh. Who is the drawee?",
                options: ["Ramesh", "Suresh", "SBI, the bank", "The RBI"],
                answer: 2,
                explain: "The drawee is the bank that is ordered to pay. Ramesh is the drawer; Suresh is the payee.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The person who receives the cheque is the drawer, because the money is drawn out to them.",
            right: "The **drawer** writes and signs the cheque; the **payee** receives the money; the **drawee** is the bank.",
            why: "\"Draw\" sounds like \"take money out\", so students give it to the receiver. Remember: the drawer *draws up* (writes) the cheque.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps to write a safe cheque.",
              items: [
                "Write the date",
                "Write the payee's name and strike off \"or bearer\"",
                "Write the amount in words, ending with \"only\"",
                "Write the amount in figures in the box",
                "Draw two parallel lines with \"A/c Payee\" at the top-left",
                "Sign as the drawer",
              ],
              explain: "Writing \"only\", striking off \"bearer\" and crossing the cheque all reduce the risk of fraud. Words and figures must match.",
            },
          },
          {
            type: "text",
            md: "**E-banking** lets you bank without visiting the branch: **ATMs** and debit cards for cash, **net banking** and **mobile banking** apps, **NEFT** and **RTGS** for transfers between banks, and **UPI** for instant payments from a phone. Never share your PIN, OTP or password with anyone, not even someone claiming to be from the bank.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip (Karnataka SSLC Business Studies)",
            md: "You may be asked to fill a specimen pay-in slip or cheque. Marks are given for: correct date, payee name, amount in words with \"only\", amount in figures matching, crossing where asked, and signature. A mismatch between words and figures is the most common error.",
          },
          {
            type: "keypoints",
            items: [
              "Accounts: savings (individuals), current (businesses), RD (monthly saving), FD (lump sum, fixed period).",
              "Opening an account needs a form, KYC documents, photos and a specimen signature.",
              "The pay-in slip lists denominations and the amount in figures and words.",
              "Cheque parties: drawer (writes), drawee (bank), payee (receives). Valid for three months.",
              "A crossed cheque is paid only into a bank account, not in cash.",
            ],
          },
        ],
        flashcards: [
          { front: "Current account", back: "Account for businesses with unlimited transactions, usually no interest; overdraft may be allowed." },
          { front: "Fixed deposit", back: "A lump sum kept for a fixed period at a higher interest rate." },
          { front: "Recurring deposit", back: "A fixed sum deposited every month for a fixed period." },
          { front: "KYC", back: "Know Your Customer: identity and address proof needed to open an account." },
          { front: "Drawer, drawee, payee", back: "Drawer writes the cheque, drawee is the bank, payee receives the money." },
          { front: "Crossed cheque", back: "Two parallel lines at the top-left; cannot be paid in cash, only into a bank account." },
          { front: "Validity of a cheque", back: "Three months from the date written on it." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A trader who makes many deposits and withdrawals daily should open a:",
            options: ["Fixed deposit", "Recurring deposit", "Current account", "Savings account with a monthly limit"],
            answer: 2,
            explain: "A current account allows unlimited transactions for businesses.",
          },
          {
            kind: "numeric",
            q: "On a pay-in slip, Arjun lists 2 notes of ₹500, 6 notes of ₹100 and 10 notes of ₹50. What total (₹) should he write?",
            answer: 2100,
            unit: "₹",
            explain: "1,000 + 600 + 500 = ₹2,100.",
          },
          {
            kind: "truefalse",
            q: "A crossed cheque can be cashed over the bank counter.",
            answer: false,
            explain: "A crossed cheque can only be credited to a bank account.",
          },
          {
            kind: "fill",
            q: "The person who writes and signs a cheque is called the ___.",
            answer: ["drawer"],
            explain: "The bank is the drawee; the receiver is the payee.",
          },
          {
            kind: "multi",
            q: "Which documents can serve as KYC proof? (Choose all that apply.)",
            options: ["Aadhaar card", "PAN card", "Passport", "A shopping bill"],
            answers: [0, 1, 2],
            explain: "A shopping bill does not prove identity.",
          },
          {
            kind: "numeric",
            q: "Meena puts ₹40,000 in a fixed deposit at 7% per year simple interest for 2 years. What interest (₹) does she earn?",
            answer: 5600,
            unit: "₹",
            explain: "40,000 × 7 × 2 ÷ 100 = ₹5,600. (Banks often compound interest, which gives a little more.)",
            difficulty: 2,
            hint: "I = P × R × T ÷ 100.",
          },
          {
            kind: "mcq",
            q: "Writing \"only\" after the amount in words on a cheque helps to:",
            options: ["Make the cheque valid for six months", "Prevent anyone adding words to increase the amount", "Turn it into a bearer cheque", "Earn interest"],
            answer: 1,
            explain: "It closes the space so the amount cannot be altered.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship",
    icon: "💡",
    description: "Who an entrepreneur is, qualities and functions, steps to start an enterprise, role in economic development, and government support.",
    lessons: [
      {
        slug: "entrepreneur-qualities-and-role",
        title: "Entrepreneurs: Qualities, Functions and Role",
        summary: "Entrepreneur, enterprise and entrepreneurship, qualities and functions of an entrepreneur, steps to start a business, and its role in development.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🧵",
            caption: "Shabana starts a small tailoring unit in Belagavi with two machines. Two years later she employs six women. She is an entrepreneur.",
          },
          {
            type: "text",
            md: "An **entrepreneur** is a person who has a business idea, brings together money, people and materials, starts a business and **bears the risk** of loss in the hope of profit. The word comes from the French word *entreprendre*, meaning \"to undertake\".\n\nThe business unit the entrepreneur sets up is the **enterprise**. **Entrepreneurship** is the whole process: spotting an opportunity, taking the risk and building the enterprise.",
          },
          {
            type: "table",
            headers: ["Term", "Meaning", "Example"],
            rows: [
              ["Entrepreneur", "The person", "Shabana"],
              ["Enterprise", "The business unit", "Her tailoring unit"],
              ["Entrepreneurship", "The process or activity", "Starting and growing the unit, taking the risk"],
            ],
          },
          {
            type: "heading",
            text: "Qualities of a successful entrepreneur",
          },
          {
            type: "list",
            items: [
              "**Initiative**: acts on an idea instead of waiting.",
              "**Risk-bearing**: ready to face uncertainty and possible loss.",
              "**Creativity and innovation**: finds new products, methods or markets.",
              "**Leadership**: guides and motivates workers.",
              "**Decision-making**: takes timely, sensible decisions.",
              "**Hard work and perseverance**: keeps going after setbacks.",
              "**Self-confidence**: believes in the idea and in themselves.",
            ],
          },
          {
            type: "text",
            md: "**Functions** of an entrepreneur: generating the idea, studying whether it will work (**feasibility**), arranging **finance**, **organising** land, labour and machines, **managing** production and sales, **innovating**, and **bearing the risk**.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of starting an enterprise in order.",
              items: [
                "Spot a business idea",
                "Do a market survey",
                "Prepare a project report",
                "Arrange finance",
                "Register and set up the unit",
                "Start production and selling",
              ],
              explain: "A good entrepreneur checks the market and plans on paper before spending money.",
            },
          },
          {
            type: "example",
            title: "Does the business make a profit?",
            problem: "In one month, Shabana's unit stitches 200 blouses and sells each for ₹250. Costs: cloth and thread ₹18,000, rent ₹5,000, electricity ₹2,000, wages of helpers ₹10,000. Find her profit.",
            steps: [
              "Sales revenue = 200 × ₹250 = ₹50,000.",
              "Total cost = 18,000 + 5,000 + 2,000 + 10,000 = ₹35,000.",
              "Profit = Revenue − Cost = 50,000 − 35,000 = ₹15,000.",
              "Profit is the reward for her risk. If she could sell only 120 of the 200 blouses she made, revenue would be ₹30,000 against the same ₹35,000 cost: a loss of ₹5,000.",
            ],
            answer: "Profit = ₹15,000 for the month. The risk is real: lower sales could turn it into a loss.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A juice stall earns ₹24,000 in a month. Its costs are ₹9,000 for fruit, ₹3,000 rent and ₹6,000 wages. What is the profit (₹)?",
                answer: 6000,
                unit: "₹",
                explain: "Cost = ₹18,000. Profit = 24,000 − 18,000 = ₹6,000.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "An entrepreneur is anyone who has a job in a business.",
            right: "An entrepreneur **starts and owns** an enterprise and **bears its risk**. An employee earns a fixed salary and does not bear the business risk.",
            why: "Both work in business, so they seem similar. The key difference is risk: if the business fails, the entrepreneur loses money, while an employee only loses the job.",
          },
          {
            type: "heading",
            text: "Role in economic development",
          },
          {
            type: "list",
            items: [
              "Creates **employment**, for the entrepreneur and others.",
              "Raises **income** and the standard of living.",
              "Uses **local resources** and skills, e.g. silk in Ramanagara or toys in Channapatna.",
              "Promotes **balanced regional development** by setting up units in small towns and villages.",
              "Increases **exports** and brings in foreign exchange.",
              "Brings **innovation**: new products and better methods.",
            ],
          },
          {
            type: "text",
            md: "The government supports new entrepreneurs through schemes like **Pradhan Mantri MUDRA Yojana** (loans to small and micro enterprises, in categories Shishu, Kishore and Tarun), **Startup India** and **Stand-Up India** (bank loans for women and SC/ST entrepreneurs). Karnataka is home to well-known entrepreneurs: **Kiran Mazumdar-Shaw** founded the biotechnology company **Biocon** in Bengaluru in 1978.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip (Karnataka SSLC Business Studies)",
            md: "Questions often ask for \"qualities of an entrepreneur\" or \"role of entrepreneurs in economic development\". Write each point as a heading word in bold plus one line of explanation. Do not mix up qualities (what the person is like) with functions (what the person does).",
          },
          {
            type: "keypoints",
            items: [
              "Entrepreneur = the person; enterprise = the business; entrepreneurship = the process.",
              "Key qualities: initiative, risk-bearing, innovation, leadership, decision-making, perseverance.",
              "Functions: idea, feasibility, finance, organising, managing, innovating, bearing risk.",
              "Profit = revenue − cost; it is the reward for bearing risk.",
              "Entrepreneurs create jobs, use local resources and support balanced regional development.",
            ],
          },
        ],
        flashcards: [
          { front: "Entrepreneur", back: "A person who starts a business, organises resources and bears the risk in the hope of profit." },
          { front: "Origin of the word 'entrepreneur'", back: "French entreprendre, meaning \"to undertake\"." },
          { front: "Enterprise", back: "The business unit set up by an entrepreneur." },
          { front: "Entrepreneurship", back: "The process of spotting an opportunity, taking risk and building an enterprise." },
          { front: "Profit", back: "Revenue minus cost; the reward for the entrepreneur's risk." },
          { front: "MUDRA loan categories", back: "Shishu, Kishore and Tarun (for micro and small enterprises); a larger Tarun Plus category was added later." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The most important feature that separates an entrepreneur from an employee is:",
            options: ["Working long hours", "Bearing the risk of the business", "Having a degree", "Working in an office"],
            answer: 1,
            explain: "The entrepreneur bears the risk of loss; the employee gets a fixed salary.",
          },
          {
            kind: "fill",
            q: "The business unit set up by an entrepreneur is called an ___.",
            answer: ["enterprise"],
            explain: "Entrepreneur (person), enterprise (unit), entrepreneurship (process).",
          },
          {
            kind: "numeric",
            q: "A candle maker sells 500 candles at ₹20 each. Wax and wicks cost ₹4,000 and other costs are ₹2,500. What is the profit (₹)?",
            answer: 3500,
            unit: "₹",
            explain: "Revenue = ₹10,000. Cost = ₹6,500. Profit = ₹3,500.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are qualities of a successful entrepreneur? (Choose all that apply.)",
            options: ["Initiative", "Willingness to take risks", "Fear of any change", "Leadership"],
            answers: [0, 1, 3],
            explain: "Entrepreneurs welcome change and innovation.",
          },
          {
            kind: "truefalse",
            q: "Setting up enterprises in small towns helps balanced regional development.",
            answer: true,
            explain: "It spreads jobs and income beyond big cities.",
          },
          {
            kind: "order",
            q: "Order these steps of starting a business.",
            items: ["Business idea", "Market survey", "Project report", "Arranging finance", "Starting production"],
            explain: "Plan and test the idea before investing money.",
          },
          {
            kind: "mcq",
            q: "\"Arranging finance and organising land, labour and machines\" describes an entrepreneur's:",
            options: ["Qualities", "Functions", "Profit", "Enterprise"],
            answer: 1,
            explain: "These are things the entrepreneur does, i.e. functions. Qualities describe what they are like.",
            difficulty: 2,
            hint: "Qualities = what they are like; functions = what they do.",
          },
        ],
      },
    ],
  },
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  // CBSE (NCERT) Economics
  "Development": "development",
  "Sectors of the Indian Economy": "sectors-of-the-indian-economy",
  "Money and Credit": "money-and-credit",
  "Globalisation and the Indian Economy": "globalisation",
  "Consumer Rights": "consumer-rights",
  // Karnataka SSLC Economics ("Development" is shared with CBSE above)
  "Rural Development": "rural-development",
  "Public Finance and Budget": "public-finance-and-budget",
  // Karnataka SSLC Business Studies
  "Bank Transactions": "bank-transactions",
  "Entrepreneurship": "entrepreneurship",
  "Globalisation of Business": "globalisation",
  "Consumer Education and Protection": "consumer-rights",
};
