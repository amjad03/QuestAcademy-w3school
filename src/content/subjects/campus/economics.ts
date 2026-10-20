import type { Subject } from "@/content/types";

/*
 * Note: currency amounts avoid the dollar sign because "$...$" is the
 * inline-TeX delimiter in Md strings.
 */
export const economics: Subject = {
  slug: "economics",
  title: "Economics",
  world: "campus",
  icon: "📊",
  colors: ["#1d4ed8", "#f59e0b"],
  tagline: "How markets set prices, why economies grow, and what central banks actually do.",
  description:
    "Micro and macro foundations at university level: supply and demand, elasticity, market structures and game theory, GDP and growth, inflation and monetary policy, fiscal policy and international trade. Rigorous models, real policy case studies, and plenty of worked numbers.",
  levels: ["UG", "PG", "Professional"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Economics",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "supply-and-demand",
      title: "Supply & Demand",
      icon: "⚖️",
      description: "The core model of a market: curves, equilibrium, shifts and elasticity.",
      lessons: [
        {
          slug: "market-equilibrium",
          title: "Demand, Supply & Equilibrium",
          summary: "How buyers and sellers together set a price, and what moves it.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Every monsoon, onion prices in India can spike within weeks. Nobody in a government office decides that. Millions of farmers, traders and households, each acting on their own, push the price to where the quantity people want to buy matches the quantity available. That meeting point is **market equilibrium**.",
            },
            { type: "illustration", emoji: "🧅📈🛒", caption: "Scarce supply, steady demand: the price has to rise." },
            {
              type: "list",
              items: [
                "**Law of demand**: other things equal, a higher price means a lower quantity demanded (the curve slopes down).",
                "**Law of supply**: other things equal, a higher price means a higher quantity supplied (the curve slopes up).",
                "**Equilibrium**: the price at which quantity demanded equals quantity supplied. Above it there is a surplus; below it, a shortage.",
              ],
            },
            {
              type: "widget",
              widget: "supply-demand",
              caption: "Shift each curve and watch the equilibrium price and quantity respond.",
            },
            { type: "heading", text: "Solving equilibrium algebraically" },
            {
              type: "formula",
              tex: "Q_d = 100 - 2P, \\quad Q_s = 20 + 2P \\;\\Rightarrow\\; 100 - 2P = 20 + 2P \\;\\Rightarrow\\; P^* = 20,\\; Q^* = 60",
              caption: "Set quantity demanded equal to quantity supplied and solve.",
            },
            { type: "heading", text: "Movements along vs shifts of a curve" },
            {
              type: "table",
              headers: ["Change", "Effect"],
              rows: [
                ["The good's own price changes", "Movement **along** the curve"],
                ["Income, tastes, prices of substitutes/complements, expectations", "Demand curve **shifts**"],
                ["Input costs, technology, number of sellers, weather", "Supply curve **shifts**"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A drought destroys part of the wheat harvest. In the wheat market, the most likely result is…",
                  options: [
                    "Demand shifts left; price falls",
                    "Supply shifts left; price rises, quantity falls",
                    "Supply shifts right; price falls",
                    "Demand shifts right; quantity rises",
                  ],
                  answer: 1,
                  explain: "Less output at every price is a leftward supply shift, which raises the equilibrium price and lowers quantity.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Ride-hailing \"surge pricing\" is supply and demand made visible: when requests outnumber nearby drivers, the price rises, both rationing demand and drawing more drivers onto the road.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"The price went up, so demand fell.\" A price rise causes a fall in **quantity demanded** (a movement along the curve). **Demand** itself changes only when a non-price factor shifts the whole curve.",
            },
            {
              type: "keypoints",
              items: [
                "Demand slopes down, supply slopes up; equilibrium is where they cross.",
                "Surpluses push prices down; shortages push them up.",
                "Own-price changes move along a curve; other factors shift it.",
                "Price ceilings below equilibrium create shortages; floors above it create surpluses.",
              ],
            },
          ],
          flashcards: [
            { front: "Market equilibrium", back: "The price at which quantity demanded equals quantity supplied." },
            { front: "Shortage", back: "Quantity demanded exceeds quantity supplied at the current price (price is below equilibrium)." },
            { front: "Substitutes", back: "Goods used in place of each other; if tea gets dearer, demand for coffee rises." },
            { front: "Complements", back: "Goods used together; if petrol gets dearer, demand for large cars falls." },
            { front: "Price ceiling", back: "A legal maximum price; binding if set below equilibrium, causing shortages." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Demand is $Q_d = 120 - 3P$ and supply is $Q_s = 2P$. What is the equilibrium price?",
              answer: 24,
              tolerance: 0.01,
              explain: "$120 - 3P = 2P \\Rightarrow 5P = 120 \\Rightarrow P = 24$ (and Q = 48).",
            },
            {
              kind: "mcq",
              q: "A rise in consumers' incomes increases demand for a normal good. The new equilibrium has…",
              options: ["Higher price, higher quantity", "Lower price, higher quantity", "Higher price, lower quantity", "No change"],
              answer: 0,
              explain: "Demand shifts right along an upward-sloping supply curve, raising both price and quantity.",
            },
            {
              kind: "truefalse",
              q: "A rent-control ceiling set below the market rent tends to create a shortage of rental housing.",
              answer: true,
              explain: "At the capped price, more people want flats than landlords offer, so quantity demanded exceeds quantity supplied.",
            },
            {
              kind: "multi",
              q: "Which of these shift the supply curve of smartphones? (Select all.)",
              options: ["A fall in chip prices", "A change in the price of smartphones", "A new, cheaper assembly technology", "A rise in consumer incomes"],
              answers: [0, 2],
              explain: "Input costs and technology shift supply. The good's own price moves along the curve; income shifts demand.",
            },
          ],
        },
        {
          slug: "elasticity",
          title: "Elasticity",
          summary: "How strongly quantity responds to price and income, and why revenue depends on it.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "When a city raises metro fares by 20%, does ridership collapse or barely move? When a government taxes cigarettes, does smoking fall or does it just raise revenue? The answers depend on **elasticity**: how sensitive quantity is to a change in price.",
            },
            {
              type: "formula",
              tex: "\\varepsilon_d = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}, \\qquad \\%\\Delta X_{\\text{midpoint}} = \\frac{X_2 - X_1}{(X_1 + X_2)/2}",
              caption: "Price elasticity of demand. The midpoint method gives the same answer whichever direction the price moves.",
            },
            {
              type: "text",
              md: "**Worked example.** A café raises the price of a sandwich from ₹400 to ₹600 and sales fall from 120 to 80 a day. With the midpoint method, $\\%\\Delta Q = -40/100 = -40\\%$ and $\\%\\Delta P = 200/500 = 40\\%$, so $\\varepsilon_d = -1$: **unit elastic**. Daily revenue is 400 × 120 = ₹48,000 before and 600 × 80 = ₹48,000 after, unchanged.",
            },
            {
              type: "table",
              headers: ["|ε|", "Name", "Effect of a price rise on total revenue", "Examples"],
              rows: [
                ["> 1", "Elastic", "Revenue falls", "Restaurant meals, a specific brand of cereal"],
                ["= 1", "Unit elastic", "Revenue unchanged", "Benchmark case"],
                ["< 1", "Inelastic", "Revenue rises", "Petrol in the short run, insulin, salt"],
              ],
            },
            {
              type: "list",
              items: [
                "**Close substitutes** make demand more elastic.",
                "**Necessities** are less elastic than luxuries.",
                "**Larger share of budget** means more elastic.",
                "**More time** to adjust means more elastic (people eventually buy fuel-efficient cars).",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Airlines practise **price discrimination** by elasticity: business travellers booking last minute are inelastic and pay high fares, while leisure travellers booking months ahead are elastic and get discounts.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Elasticity is just the slope of the demand curve.\" Slope measures units per unit; elasticity measures percentage changes. Along a straight-line demand curve the slope is constant, yet elasticity varies, from elastic at high prices to inelastic at low prices.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A 10% price rise reduces quantity demanded by 25%. What is the absolute value of the price elasticity of demand?",
                  answer: 2.5,
                  tolerance: 0.01,
                  explain: "|−25% / 10%| = 2.5, so demand is elastic.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Elasticity = % change in quantity ÷ % change in price.",
                "Elastic (|ε| > 1): price rises cut revenue. Inelastic (|ε| < 1): price rises raise revenue.",
                "Income elasticity > 0 for normal goods, < 0 for inferior goods.",
                "Taxes on inelastic goods raise revenue but change behaviour little.",
              ],
            },
          ],
          flashcards: [
            { front: "Price elasticity of demand", back: "%ΔQd ÷ %ΔP; measures responsiveness of quantity to price." },
            { front: "Inelastic demand", back: "|ε| < 1: quantity changes proportionally less than price; price rises increase revenue." },
            { front: "Income elasticity", back: "%ΔQ ÷ %ΔIncome; positive for normal goods, negative for inferior goods." },
            { front: "Cross-price elasticity", back: "%ΔQ of good A ÷ %ΔP of good B; positive for substitutes, negative for complements." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Demand for a good is inelastic. If the seller raises the price, total revenue will…",
              options: ["Rise", "Fall", "Stay the same", "Become zero"],
              answer: 0,
              explain: "Quantity falls proportionally less than price rises, so P × Q increases.",
            },
            {
              kind: "numeric",
              q: "Using the midpoint method, price rises from 10 to 14 and quantity falls from 50 to 30. What is |ε|? (Two decimal places.)",
              answer: 1.5,
              tolerance: 0.01,
              explain: "%ΔQ = −20/40 = −50%; %ΔP = 4/12 = 33.3%; |ε| = 50 / 33.3 = 1.5.",
            },
            {
              kind: "truefalse",
              q: "Demand tends to become more elastic over longer time horizons.",
              answer: true,
              explain: "Given time, consumers find substitutes and change habits.",
            },
            {
              kind: "mcq",
              q: "If income rises 10% and demand for bus rides falls 4%, bus rides are…",
              options: ["A luxury good", "A normal necessity", "An inferior good", "A Giffen good by definition"],
              answer: 2,
              explain: "Negative income elasticity (−0.4) marks an inferior good: people switch to cars as incomes rise.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "market-structures",
      title: "Market Structures",
      icon: "🏭",
      description: "From perfect competition to monopoly, and the strategic world of oligopoly.",
      lessons: [
        {
          slug: "competition-vs-monopoly",
          title: "Perfect Competition vs Monopoly",
          summary: "Price takers, price makers, and the deadweight loss of market power.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A tomato farmer at a wholesale mandi cannot charge a rupee more than the going price; buyers would simply walk to the next stall. A firm holding the only patent on a life-saving drug faces no such limit. Market structure, how many sellers there are and how easily others can enter, decides who sets the price.",
            },
            {
              type: "table",
              headers: ["Feature", "Perfect competition", "Monopolistic competition", "Oligopoly", "Monopoly"],
              rows: [
                ["Number of firms", "Very many", "Many", "Few", "One"],
                ["Product", "Identical", "Differentiated", "Identical or differentiated", "Unique"],
                ["Entry barriers", "None", "Low", "High", "Very high"],
                ["Price-setting power", "None (price taker)", "Some", "Significant, interdependent", "Large"],
                ["Example", "Wholesale crops", "Cafés, salons", "Telecoms, airlines", "Local water utility"],
              ],
            },
            { type: "heading", text: "The profit-maximising rule" },
            {
              type: "formula",
              tex: "\\text{Produce where } MR = MC",
              caption: "Every firm, in every structure, maximises profit where marginal revenue equals marginal cost.",
            },
            {
              type: "text",
              md: "A competitive firm's MR is the market price, so it produces where $P = MC$. A monopolist's MR lies **below** its demand curve, because to sell one more unit it must cut the price on all units. **Example:** demand $P = 100 - Q$ gives $MR = 100 - 2Q$. With $MC = 20$, the monopolist sets $100 - 2Q = 20$, so $Q = 40$ and $P = 60$. A competitive market would produce where $P = MC$: $Q = 80$, $P = 20$.",
            },
            {
              type: "formula",
              tex: "DWL = \\tfrac{1}{2} (P_m - MC)(Q_c - Q_m) = \\tfrac{1}{2}(60 - 20)(80 - 40) = 800",
              caption: "Deadweight loss: mutually beneficial trades that never happen because of market power.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A monopolist faces $P = 80 - Q$ (so $MR = 80 - 2Q$) and constant MC = 20. What price does it charge?",
                  answer: 50,
                  tolerance: 0.01,
                  explain: "$80 - 2Q = 20 \\Rightarrow Q = 30$; then $P = 80 - 30 = 50$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Competition authorities (the CCI in India, the European Commission, the US FTC and DOJ) review mergers using concentration measures such as the **Herfindahl–Hirschman Index**, the sum of squared market shares. Four firms with 40%, 30%, 20% and 10% give HHI = 1600 + 900 + 400 + 100 = 3,000, a highly concentrated market.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A monopolist charges the highest price it possibly can.\" It charges the profit-maximising price where MR = MC. Pushing the price higher would lose so many sales that profit would fall.",
            },
            {
              type: "keypoints",
              items: [
                "All firms maximise profit at MR = MC.",
                "Competitive firms are price takers: P = MR = MC.",
                "Monopolists restrict output and charge P > MC, creating deadweight loss.",
                "Barriers to entry (patents, network effects, scale economies) sustain market power.",
              ],
            },
          ],
          flashcards: [
            { front: "Price taker", back: "A firm too small to influence the market price; typical of perfect competition." },
            { front: "Profit-maximising rule", back: "Produce where marginal revenue = marginal cost." },
            { front: "Deadweight loss", back: "Lost total surplus from trades that do not happen, e.g. due to monopoly or taxes." },
            { front: "Herfindahl–Hirschman Index (HHI)", back: "Sum of squared market shares (in %); higher means more concentrated." },
            { front: "Natural monopoly", back: "An industry where one firm can supply the whole market at lower cost than several, e.g. water pipes." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Three firms hold 50%, 30% and 20% of a market. What is the HHI?",
              answer: 3800,
              tolerance: 0,
              explain: "2500 + 900 + 400 = 3,800.",
            },
            {
              kind: "mcq",
              q: "Compared with perfect competition, a monopoly typically produces…",
              options: ["More output at a lower price", "Less output at a higher price", "The same output at a higher price", "More output at a higher price"],
              answer: 1,
              explain: "Restricting output to where MR = MC raises the price above marginal cost.",
            },
            {
              kind: "truefalse",
              q: "In long-run equilibrium, firms in perfect competition earn zero economic profit.",
              answer: true,
              explain: "Free entry competes away any profit above the normal return on capital.",
            },
            {
              kind: "fill",
              q: "A market with one seller and high barriers to entry is called a ___.",
              answer: ["monopoly"],
              explain: "Mono = one, poly = seller.",
            },
          ],
        },
        {
          slug: "oligopoly-game-theory",
          title: "Oligopoly & Game Theory",
          summary: "When a few rivals must anticipate each other: Nash equilibrium and the prisoner's dilemma.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "When one airline cuts fares on a busy route, its rivals react within hours. In an **oligopoly**, each firm's best move depends on what the others do. Economists model this with **game theory**.",
            },
            { type: "heading", text: "The pricing dilemma" },
            {
              type: "table",
              headers: ["Profits (Firm A, Firm B), ₹ crore", "B keeps price high", "B cuts price"],
              rows: [
                ["**A keeps price high**", "(10, 10)", "(2, 14)"],
                ["**A cuts price**", "(14, 2)", "(5, 5)"],
              ],
            },
            {
              type: "text",
              md: "Whatever B does, A earns more by cutting (14 > 10 and 5 > 2). Cutting is a **dominant strategy**, and the same holds for B. Both cut and earn 5 each, even though both would earn 10 if they kept prices high. That outcome, where no player can gain by changing strategy alone, is a **Nash equilibrium**, and this particular structure is the **prisoner's dilemma**.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Why cartels crack",
              md: "OPEC members repeatedly agree to cut oil output, then some quietly produce above quota. Each member gains by cheating if the others comply, the prisoner's dilemma at a global scale.",
            },
            {
              type: "list",
              items: [
                "**Repeated games** can sustain cooperation: strategies like tit-for-tat punish cheating next round.",
                "**Explicit collusion** (price-fixing) is illegal in most jurisdictions.",
                "**Monopolistic competition** (cafés, clothing brands) relies on differentiation and branding rather than strategic interdependence.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Spectrum auctions for mobile networks have been designed with game theory to stop bidders tacitly colluding. Auction theory earned Paul Milgrom and Robert Wilson the 2020 Nobel Memorial Prize in Economic Sciences.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A Nash equilibrium is the best outcome for everyone.\" It is only stable: no one gains by deviating alone. As the dilemma shows, it can leave every player worse off than cooperation would.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In the payoff table above, what is the Nash equilibrium?",
                  options: ["Both keep prices high", "A high, B cuts", "A cuts, B high", "Both cut prices"],
                  answer: 3,
                  explain: "Cutting is each firm's dominant strategy, so (cut, cut) with payoffs (5, 5) is the equilibrium.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Oligopolists are interdependent: they must anticipate rivals' moves.",
                "A dominant strategy is best regardless of what others do.",
                "Nash equilibrium: no player can gain by unilaterally changing strategy.",
                "The prisoner's dilemma explains why cartels are unstable.",
              ],
            },
          ],
          flashcards: [
            { front: "Oligopoly", back: "A market dominated by a few interdependent firms." },
            { front: "Dominant strategy", back: "A strategy that gives the best payoff whatever the other players do." },
            { front: "Nash equilibrium", back: "A set of strategies where no player can improve their payoff by changing strategy alone." },
            { front: "Prisoner's dilemma", back: "A game where individually rational choices lead to an outcome worse for all than cooperation." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "In a one-shot prisoner's dilemma, both players cooperating is a Nash equilibrium.",
              answer: false,
              explain: "Each player could gain by defecting, so mutual cooperation is not stable in a single round.",
            },
            {
              kind: "mcq",
              q: "Which factor makes tacit cooperation between oligopolists more likely?",
              options: ["A single, one-off interaction", "Frequent repeated interaction with observable prices", "Many small rivals", "Secret, hard-to-monitor prices"],
              answer: 1,
              explain: "Repetition and transparency allow rivals to detect and punish deviations, supporting cooperation.",
            },
            {
              kind: "numeric",
              q: "In the table, how much total profit (₹ crore, both firms combined) is lost at the Nash equilibrium compared with both keeping prices high?",
              answer: 10,
              tolerance: 0,
              unit: "₹ crore",
              explain: "Cooperation: 10 + 10 = 20. Equilibrium: 5 + 5 = 10. Loss = 10.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "gdp-and-growth",
      title: "GDP & Economic Growth",
      icon: "🌍",
      description: "Measuring the size of an economy and understanding why some grow rich.",
      lessons: [
        {
          slug: "measuring-gdp",
          title: "Measuring GDP",
          summary: "The expenditure approach, real vs nominal, and what GDP misses.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Headlines announce \"GDP grew 7.2% this year\". What exactly grew? **Gross domestic product** is the market value of all **final** goods and services produced within a country in a given period.",
            },
            {
              type: "formula",
              tex: "GDP = C + I + G + (X - M)",
              caption: "Expenditure approach: consumption + investment + government purchases + net exports.",
            },
            {
              type: "table",
              headers: ["Component", "₹ lakh crore (illustrative)"],
              rows: [
                ["Consumption (C)", "700"],
                ["Investment (I)", "200"],
                ["Government purchases (G)", "250"],
                ["Exports (X)", "150"],
                ["Imports (M)", "(180)"],
                ["**GDP**", "**1,120**"],
              ],
            },
            {
              type: "text",
              md: "Imports are subtracted because they are already counted inside C, I and G but were produced abroad. Only **final** goods count; the steel in a car is included once, in the car's price, to avoid double counting.",
            },
            { type: "heading", text: "Nominal vs real" },
            {
              type: "formula",
              tex: "\\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{GDP deflator}} \\times 100",
              caption: "Real GDP strips out price changes so we can compare actual output across years.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Nominal GDP is 1,100 and the GDP deflator is 110. What is real GDP?",
                  answer: 1000,
                  tolerance: 0,
                  explain: "1100 / 110 × 100 = 1,000.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "International comparisons often use **purchasing power parity (PPP)**, which adjusts for the fact that a haircut or a plate of rice costs far less in Delhi than in London. By PPP, India's economy ranks well above its position at market exchange rates.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Higher GDP means people are better off.\" GDP excludes unpaid household work and leisure, ignores inequality and pollution, and counts spending on disaster clean-up as output. That is why measures like the Human Development Index and median income complement it.",
            },
            {
              type: "keypoints",
              items: [
                "GDP = C + I + G + (X − M).",
                "Count only final goods and services produced domestically.",
                "Real GDP adjusts for inflation; nominal does not.",
                "GDP per capita and PPP enable fairer comparisons; GDP is not welfare.",
              ],
            },
          ],
          flashcards: [
            { front: "GDP", back: "Market value of all final goods and services produced within a country in a period." },
            { front: "Expenditure identity", back: "GDP = C + I + G + (X − M)" },
            { front: "GDP deflator", back: "(Nominal GDP ÷ Real GDP) × 100; a broad price index." },
            { front: "Purchasing power parity (PPP)", back: "Exchange-rate adjustment that equalises the cost of a common basket of goods across countries." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "C = 500, I = 150, G = 200, X = 100, M = 120. What is GDP?",
              answer: 830,
              tolerance: 0,
              explain: "500 + 150 + 200 + (100 − 120) = 830.",
            },
            {
              kind: "mcq",
              q: "Which transaction is counted in this year's GDP?",
              options: ["Buying a second-hand car", "A new laptop produced and sold this year", "Buying shares on the stock exchange", "A government pension payment"],
              answer: 1,
              explain: "Used goods were counted when made, shares are financial transfers, and pensions are transfer payments, not purchases of output.",
            },
            {
              kind: "truefalse",
              q: "If nominal GDP rises 8% while prices rise 5%, real GDP grows by roughly 3%.",
              answer: true,
              explain: "Real growth ≈ nominal growth − inflation = 8 − 5 = 3% (exactly 1.08/1.05 − 1 ≈ 2.9%).",
            },
          ],
        },
        {
          slug: "economic-growth",
          title: "What Drives Long-Run Growth?",
          summary: "Capital, labour, technology and institutions, and the power of compounding growth rates.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "In 1960 South Korea's income per person was comparable to that of many poor countries. Within two generations it became a high-income, high-tech economy. Small differences in growth rates, sustained for decades, create enormous differences in living standards.",
            },
            {
              type: "formula",
              tex: "\\text{Doubling time} \\approx \\frac{70}{g\\,(\\%)}",
              caption: "Rule of 70: at 2% growth incomes double in about 35 years; at 7% in about 10.",
            },
            {
              type: "formula",
              tex: "Y = A\\,K^{\\alpha} L^{1-\\alpha}",
              caption: "Cobb–Douglas production function: output Y from capital K, labour L, and total factor productivity A.",
            },
            {
              type: "list",
              items: [
                "**Physical capital (K)**: machines, roads, ports. Subject to diminishing returns.",
                "**Human capital**: education, health and skills make each worker more productive.",
                "**Technology (A)**: better ideas and methods; the only source of sustained growth in the Solow model.",
                "**Institutions**: property rights, rule of law and stable policy (emphasised by Acemoglu, Johnson and Robinson, 2024 Nobel laureates).",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Diminishing returns",
              md: "In the Solow model, piling up more capital per worker raises output by smaller and smaller amounts. Poorer countries can therefore grow faster by catching up (**convergence**), but long-run growth needs rising productivity.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Using the Rule of 70, roughly how many years does it take an economy growing at 3.5% a year to double its output?",
                  answer: 20,
                  tolerance: 0.5,
                  unit: "years",
                  explain: "70 / 3.5 = 20 years.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Growth-accounting studies decompose a country's growth into contributions from capital, labour and the residual, **total factor productivity**. Policymakers use them to judge whether growth is driven by genuine efficiency gains or simply by investing more.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A country can grow forever simply by saving and investing more.\" Without technological progress, diminishing returns mean extra capital eventually adds almost nothing. Sustained growth in income per person requires ideas.",
            },
            {
              type: "keypoints",
              items: [
                "Small growth-rate gaps compound into huge income gaps.",
                "Growth comes from capital, labour, human capital and productivity (A).",
                "Capital has diminishing returns; technology drives long-run growth.",
                "Institutions shape incentives to invest and innovate.",
              ],
            },
          ],
          flashcards: [
            { front: "Rule of 70", back: "Doubling time ≈ 70 ÷ growth rate (%)." },
            { front: "Total factor productivity (TFP)", back: "Output growth not explained by inputs; reflects technology and efficiency." },
            { front: "Diminishing returns to capital", back: "Each additional unit of capital per worker adds less output." },
            { front: "Convergence", back: "The tendency of poorer economies to grow faster and catch up, other things equal." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "In the Solow growth model, the only source of sustained growth in output per worker is…",
              options: ["Population growth", "Saving more", "Technological progress", "Government spending"],
              answer: 2,
              explain: "Higher saving raises the level of output but not its long-run growth rate; only rising productivity does.",
            },
            {
              kind: "numeric",
              q: "An economy grows at 7% per year. Using the Rule of 70, how many years does output take to double?",
              answer: 10,
              tolerance: 0.5,
              unit: "years",
              explain: "70 / 7 = 10 years.",
            },
            {
              kind: "truefalse",
              q: "Investment in education is a form of investment in human capital.",
              answer: true,
              explain: "Education raises the skills and productivity embodied in workers.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "money-and-inflation",
      title: "Inflation & Monetary Policy",
      icon: "🏛️",
      description: "Why prices rise, how central banks respond, and the trade-offs they face.",
      lessons: [
        {
          slug: "inflation",
          title: "Inflation: Measurement & Causes",
          summary: "CPI, real vs nominal interest rates, and demand-pull vs cost-push.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Ask your grandparents what a cinema ticket cost when they were young. The same experience now costs many times more. **Inflation** is a sustained rise in the general price level, which means each rupee buys a little less every year.",
            },
            {
              type: "formula",
              tex: "\\pi = \\frac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100",
              caption: "Inflation rate from the Consumer Price Index, which prices a fixed basket of typical household purchases.",
            },
            {
              type: "text",
              md: "If the CPI rises from 250 to 260, inflation is $10/250 = 4\\%$.",
            },
            {
              type: "formula",
              tex: "r \\approx i - \\pi",
              caption: "Fisher relation: real interest rate ≈ nominal rate − inflation.",
            },
            { type: "heading", text: "Causes of inflation" },
            {
              type: "table",
              headers: ["Type", "Mechanism", "Example"],
              rows: [
                ["Demand-pull", "Spending grows faster than the economy's capacity", "Post-pandemic stimulus plus reopening, 2021–22"],
                ["Cost-push", "Input costs rise, firms pass them on", "Oil and gas price shocks, 1973 and 2022"],
                ["Monetary", "Money supply grows much faster than output", "Zimbabwe 2008, Weimar Germany 1923"],
                ["Expectations", "Workers and firms expect inflation and set wages and prices accordingly", "Wage-price spirals"],
              ],
            },
            {
              type: "formula",
              tex: "MV = PY",
              caption: "Quantity equation: money × velocity = price level × real output.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A fixed deposit pays 7% nominal while inflation is 5%. What is the approximate real return (in %)?",
                  answer: 2,
                  tolerance: 0.1,
                  unit: "%",
                  explain: "r ≈ 7 − 5 = 2%.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Many central banks follow **inflation targeting**. The Reserve Bank of India targets 4% CPI inflation within a band of 2–6%; the US Federal Reserve, the ECB and the Bank of England target 2%.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Falling inflation means prices are falling.\" Lower inflation means prices are rising **more slowly**. Falling prices are **deflation**, which carries its own dangers, such as consumers delaying purchases and debts becoming heavier in real terms.",
            },
            {
              type: "keypoints",
              items: [
                "Inflation is a sustained rise in the general price level, measured by indices like the CPI.",
                "Real interest rate ≈ nominal rate − inflation.",
                "Causes: demand-pull, cost-push, excess money growth and expectations.",
                "Unexpected inflation redistributes from lenders and savers to borrowers.",
              ],
            },
          ],
          flashcards: [
            { front: "Inflation", back: "A sustained increase in the general price level." },
            { front: "Fisher relation", back: "Real rate ≈ nominal rate − inflation." },
            { front: "Cost-push inflation", back: "Inflation caused by rising production costs, e.g. energy prices." },
            { front: "Deflation", back: "A sustained fall in the general price level." },
            { front: "Quantity equation", back: "MV = PY" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "The CPI rises from 200 to 212. What is the inflation rate (in %)?",
              answer: 6,
              tolerance: 0.01,
              unit: "%",
              explain: "(212 − 200) / 200 = 6%.",
            },
            {
              kind: "mcq",
              q: "Unexpectedly high inflation tends to benefit…",
              options: ["Savers holding cash", "Lenders at fixed rates", "Borrowers with fixed-rate loans", "Pensioners on fixed nominal pensions"],
              answer: 2,
              explain: "Borrowers repay with rupees that are worth less than expected.",
            },
            {
              kind: "truefalse",
              q: "If velocity and real output are constant, the quantity equation implies that doubling the money supply doubles the price level.",
              answer: true,
              explain: "With V and Y fixed, MV = PY means P rises in proportion to M.",
            },
          ],
        },
        {
          slug: "monetary-policy",
          title: "Monetary Policy & Central Banks",
          summary: "How policy rates ripple through the economy, and the tools central banks use.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "In 2022 inflation surged worldwide, and central banks responded with some of the fastest rate rises in decades. Within months, home-loan EMIs climbed and borrowing slowed. How does one interest rate set in a meeting room reach your wallet?",
            },
            { type: "heading", text: "The transmission mechanism" },
            {
              type: "list",
              ordered: true,
              items: [
                "The central bank raises its **policy rate** (the repo rate in India, the federal funds rate in the US).",
                "Banks' funding costs rise, so loan and deposit rates follow.",
                "Borrowing for homes, cars and business investment becomes more expensive; saving becomes more attractive.",
                "Asset prices tend to fall and the currency tends to strengthen, cutting import prices.",
                "Spending slows, easing demand-pull pressure, and inflation falls, typically with a lag of a year or more.",
              ],
            },
            {
              type: "table",
              headers: ["Tool", "How it works"],
              rows: [
                ["Policy (repo) rate", "Price at which banks borrow from the central bank"],
                ["Open market operations", "Buying or selling government bonds to adjust liquidity"],
                ["Reserve requirements (e.g. CRR)", "Share of deposits banks must hold as reserves"],
                ["Quantitative easing", "Large-scale asset purchases when rates are near zero"],
                ["Forward guidance", "Signalling the future path of rates to shape expectations"],
              ],
            },
            {
              type: "formula",
              tex: "i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5\\,(\\text{output gap})",
              caption: "The Taylor rule: a benchmark for where the policy rate \"should\" be, given inflation π, target π*, and the neutral real rate r*.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Taylor rule with r* = 1%, inflation π = 4%, target π* = 2%, output gap 0. What policy rate (in %) does it suggest?",
                  answer: 6,
                  tolerance: 0.01,
                  unit: "%",
                  explain: "1 + 4 + 0.5(4 − 2) + 0 = 6%.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Bond traders parse every word of central-bank statements. A single phrase hinting at earlier rate cuts can move bond yields, currencies and stock markets within minutes, which is why central banks script communication so carefully.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Central banks print money to fund the government.\" Independent central banks buy bonds in the secondary market to steer interest rates and inflation, not to finance spending directly. Direct monetary financing has historically been linked to very high inflation, which is why many legal frameworks restrict it.",
            },
            {
              type: "keypoints",
              items: [
                "Higher policy rates cool demand and inflation; lower rates stimulate.",
                "Effects work through borrowing costs, asset prices, the exchange rate and expectations.",
                "Monetary policy acts with long and variable lags.",
                "Central-bank independence and credible targets anchor expectations.",
              ],
            },
          ],
          flashcards: [
            { front: "Repo rate", back: "The rate at which a central bank (e.g. the RBI) lends short-term funds to commercial banks." },
            { front: "Open market operations", back: "Central-bank purchases or sales of government securities to manage liquidity." },
            { front: "Quantitative easing (QE)", back: "Large-scale asset purchases to lower long-term rates when policy rates are near zero." },
            { front: "Taylor rule", back: "A guideline linking the policy rate to inflation and the output gap." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "To fight high inflation, a central bank would typically…",
              options: ["Cut the policy rate", "Raise the policy rate", "Buy more bonds through QE", "Lower reserve requirements"],
              answer: 1,
              explain: "Raising rates tightens financial conditions and cools demand.",
            },
            {
              kind: "order",
              q: "Order the transmission of a rate hike, from first to last.",
              items: ["Policy rate rises", "Bank lending rates rise", "Borrowing and spending slow", "Inflation eases"],
              explain: "Policy rate → market rates → demand → prices.",
            },
            {
              kind: "truefalse",
              q: "Monetary policy affects inflation almost immediately, within days.",
              answer: false,
              explain: "Effects on inflation typically take many months, often 12–24, to show fully.",
            },
            {
              kind: "multi",
              q: "Which are tools of monetary policy? (Select all.)",
              options: ["Repo rate", "Income tax rates", "Open market operations", "Forward guidance"],
              answers: [0, 2, 3],
              explain: "Tax rates are fiscal policy, set by the government.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "fiscal-policy-trade",
      title: "Fiscal Policy & Trade",
      icon: "🚢",
      description: "Government budgets, multipliers, and why countries gain from trading.",
      lessons: [
        {
          slug: "fiscal-policy",
          title: "Fiscal Policy & the Multiplier",
          summary: "Government spending, taxes, deficits, and how stimulus spreads.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "During the 2008 financial crisis and again in 2020, governments around the world launched huge spending packages. The theory: when households and firms stop spending, the government can step in. **Fiscal policy** is the use of government spending and taxation to influence the economy.",
            },
            {
              type: "formula",
              tex: "k = \\frac{1}{1 - MPC}",
              caption: "Simple Keynesian multiplier. MPC = marginal propensity to consume (share of extra income spent).",
            },
            {
              type: "text",
              md: "With MPC = 0.8, the multiplier is $1/0.2 = 5$. In this simple model, ₹10,000 crore of new government spending could raise GDP by up to ₹50,000 crore, because each round of income is partly spent again: 10,000 + 8,000 + 6,400 + …",
            },
            {
              type: "table",
              headers: ["Concept", "Meaning"],
              rows: [
                ["Expansionary policy", "Raise spending or cut taxes to boost demand"],
                ["Contractionary policy", "Cut spending or raise taxes to cool demand"],
                ["Automatic stabilisers", "Taxes and benefits that respond on their own (tax receipts fall in a recession)"],
                ["Fiscal deficit", "Spending exceeds revenue in a year"],
                ["Public debt", "Accumulated stock of past deficits"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real multipliers are smaller",
              md: "Leakages into saving, taxes and imports, plus possible **crowding out** (higher interest rates discouraging private investment), mean empirical multipliers are often estimated below 2, and they vary widely with the state of the economy.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "If MPC = 0.75, what is the simple spending multiplier?",
                  answer: 4,
                  tolerance: 0.01,
                  explain: "1 / (1 − 0.75) = 1 / 0.25 = 4.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Governments publish medium-term fiscal frameworks with deficit targets; India's fiscal responsibility legislation, for example, sets glide paths for the deficit. Credit-rating agencies watch these numbers closely when rating government bonds.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A government budget works exactly like a household budget.\" A government that borrows in its own currency can roll over debt indefinitely, its spending is someone else's income, and it can tax. That does not make deficits free: high debt can raise interest costs and inflation risk. But the analogy is too simple.",
            },
            {
              type: "keypoints",
              items: [
                "Fiscal policy = government spending and taxation.",
                "Multiplier k = 1 / (1 − MPC) in the simplest model.",
                "Leakages and crowding out shrink real-world multipliers.",
                "Deficit is a yearly flow; debt is the accumulated stock.",
              ],
            },
          ],
          flashcards: [
            { front: "Fiscal policy", back: "Use of government spending and taxes to influence aggregate demand." },
            { front: "Spending multiplier", back: "k = 1 / (1 − MPC); the change in GDP per unit change in spending (simple model)." },
            { front: "Crowding out", back: "Government borrowing raises interest rates and reduces private investment." },
            { front: "Automatic stabilisers", back: "Taxes and transfers that automatically dampen the business cycle." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "MPC = 0.9. By how much could GDP rise (simple model) after ₹2,000 crore of extra government spending (in ₹ crore)?",
              answer: 20000,
              tolerance: 0,
              unit: "₹ crore",
              explain: "k = 1 / 0.1 = 10, so 10 × 2,000 = ₹20,000 crore.",
            },
            {
              kind: "mcq",
              q: "Which is an example of contractionary fiscal policy?",
              options: ["Cutting income taxes", "Raising GST rates", "Building new highways", "Increasing unemployment benefits"],
              answer: 1,
              explain: "Higher taxes reduce disposable income and spending.",
            },
            {
              kind: "truefalse",
              q: "Public debt and the fiscal deficit are the same thing.",
              answer: false,
              explain: "The deficit is one year's shortfall; debt is the total accumulated from all past deficits (minus surpluses).",
            },
          ],
        },
        {
          slug: "international-trade",
          title: "Comparative Advantage & Trade",
          summary: "Why even the most productive country gains from trade, and the effects of tariffs.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A top surgeon might also be the fastest typist in the hospital. Should she type her own reports? No: each hour typing is an hour not operating. David Ricardo's insight (1817) was that the same logic applies to countries: trade depends on **comparative**, not absolute, advantage.",
            },
            {
              type: "table",
              headers: ["Output per worker-day", "Shirts", "Phones", "Opportunity cost of 1 phone"],
              rows: [
                ["Country A", "10", "5", "2 shirts"],
                ["Country B", "4", "4", "1 shirt"],
              ],
            },
            {
              type: "text",
              md: "A has an **absolute advantage** in both goods. But a phone costs A two shirts and costs B only one, so **B has the comparative advantage in phones**. Conversely, a shirt costs A half a phone and B a whole phone, so **A has the comparative advantage in shirts**. If each specialises and they trade at a price between 1 and 2 shirts per phone, both can consume more than they could alone.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "In Country A, what is the opportunity cost of one shirt, measured in phones?",
                  answer: 0.5,
                  tolerance: 0.01,
                  unit: "phones",
                  explain: "A gives up 5 phones to make 10 shirts, so 1 shirt costs 0.5 phones.",
                },
              ],
            },
            { type: "heading", text: "Tariffs and their effects" },
            {
              type: "list",
              items: [
                "A **tariff** (tax on imports) raises domestic prices.",
                "Domestic producers gain; consumers lose; the government collects revenue.",
                "The net effect is usually a **deadweight loss**, plus the risk of retaliation.",
                "Gains from trade are real but unevenly spread: some workers and regions lose, which is why adjustment support matters.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Modern supply chains slice production across borders: a smartphone may be designed in one country, use chips from another and be assembled in a third. Firms now weigh pure cost efficiency against resilience, a trend called \"friend-shoring\" or diversification of supply chains.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A trade deficit means a country is losing.\" A deficit means a country buys more goods and services than it sells abroad, financed by capital inflows. It reflects saving and investment patterns, and is not in itself a scorecard of economic health.",
            },
            {
              type: "keypoints",
              items: [
                "Comparative advantage = lower opportunity cost, not higher productivity.",
                "Specialisation and trade let both partners consume beyond their own production possibilities.",
                "Tariffs help protected producers but usually reduce total welfare.",
                "Trade creates winners and losers within each country.",
              ],
            },
          ],
          flashcards: [
            { front: "Absolute advantage", back: "Producing more of a good with the same resources." },
            { front: "Comparative advantage", back: "Producing a good at a lower opportunity cost than others." },
            { front: "Tariff", back: "A tax on imported goods." },
            { front: "Terms of trade", back: "The rate at which a country's exports exchange for its imports." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "In the table, which country should specialise in phones?",
              options: ["Country A", "Country B", "Both equally", "Neither"],
              answer: 1,
              explain: "B's opportunity cost of a phone (1 shirt) is lower than A's (2 shirts).",
            },
            {
              kind: "truefalse",
              q: "A country with an absolute advantage in every good cannot gain from trade.",
              answer: false,
              explain: "Gains come from differences in opportunity cost, so both countries can still benefit.",
            },
            {
              kind: "multi",
              q: "When a country imposes a tariff on imported steel, which typically happen? (Select all.)",
              options: ["Domestic steel prices rise", "Domestic steel producers gain", "Steel-using manufacturers face higher costs", "Total national welfare always rises"],
              answers: [0, 1, 2],
              explain: "Prices rise, producers gain and steel users lose. Total welfare usually falls due to deadweight loss.",
            },
            {
              kind: "numeric",
              q: "For trade to benefit both A and B in the example, the price of a phone must lie between 1 and how many shirts?",
              answer: 2,
              tolerance: 0,
              unit: "shirts",
              explain: "Between the two opportunity costs: B accepts at least 1 shirt per phone; A pays at most 2.",
            },
          ],
        },
      ],
    },
  ],
};
