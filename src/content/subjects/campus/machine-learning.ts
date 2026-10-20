import type { Subject } from "@/content/types";

export const machineLearning: Subject = {
  slug: "machine-learning",
  title: "Machine Learning",
  world: "campus",
  icon: "🤖",
  colors: ["#7c3aed", "#ec4899"],
  tagline: "From a straight line to a neural network — and how to use it responsibly.",
  description:
    "A university-level introduction to machine learning: supervised learning with linear and logistic regression, gradient descent, evaluation metrics, overfitting and regularisation, neural networks, unsupervised learning and responsible AI. Built around plain-Python code you can run and real case studies from industry.",
  levels: ["UG Year 2", "UG Year 3", "PG"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Data Science & AI",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "foundations",
      title: "Foundations of ML",
      icon: "📈",
      description: "What learning from data means, and your first model trained by gradient descent.",
      lessons: [
        {
          slug: "what-is-ml",
          title: "What Is Machine Learning?",
          summary: "Programs that improve with data: supervised, unsupervised and reinforcement learning.",
          minutes: 15,
          xp: 25,
          blocks: [
            {
              type: "text",
              md: "Try writing rules to spot spam: \"contains *FREE*\", \"lots of exclamation marks\"… Spammers adapt in a week and your rule list becomes a monster. Machine learning flips the approach: show the computer thousands of labelled emails and let it **learn the rules from data**.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "A classic definition",
              md: "Tom Mitchell (1997): a program learns from experience **E** with respect to task **T** and performance measure **P** if its performance on T, measured by P, improves with E. For spam: T = classify emails, P = accuracy, E = labelled emails.",
            },
            {
              type: "table",
              headers: ["Paradigm", "Data", "Goal", "Example"],
              rows: [
                ["Supervised", "Inputs with labels $(x, y)$", "Predict $y$ for new $x$", "House price from size; spam or not"],
                ["Unsupervised", "Inputs only $x$", "Find structure", "Customer segments, anomaly detection"],
                ["Reinforcement", "Rewards from actions", "Learn a policy", "Game-playing agents, robot control"],
              ],
            },
            {
              type: "text",
              md: "Within supervised learning, **regression** predicts a number (price, temperature) and **classification** predicts a category (spam/ham, digit 0–9).",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Predicting tomorrow's electricity demand in megawatts is…",
                  options: ["Classification", "Regression", "Clustering", "Reinforcement learning"],
                  answer: 1,
                  explain: "The output is a continuous number, so it's regression.",
                },
              ],
            },
            { type: "heading", text: "The ML workflow" },
            {
              type: "list",
              ordered: true,
              items: [
                "Frame the problem and choose a metric that matches the real goal.",
                "Collect and clean data; split into **train / validation / test** sets.",
                "Engineer features and pick a model family.",
                "Train (fit parameters) and tune hyperparameters on validation data.",
                "Evaluate once on the untouched test set.",
                "Deploy, monitor for drift, retrain.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Practitioners often say most of an ML project is data work — collection, labelling, cleaning and pipelines — not model design. A simple model on clean, relevant data usually beats a fancy model on messy data.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"ML models understand the world.\" A model finds statistical patterns in its training data. If the data shifts (new slang, a pandemic, a new camera), performance can collapse silently.",
            },
            {
              type: "keypoints",
              items: [
                "ML learns a mapping from data instead of hand-written rules.",
                "Supervised = labelled; unsupervised = unlabelled; reinforcement = rewards.",
                "Always hold out a test set you never train or tune on.",
              ],
            },
          ],
          flashcards: [
            { front: "Supervised learning", back: "Learning a mapping $x \\to y$ from labelled examples." },
            { front: "Regression vs classification", back: "Regression predicts a number; classification predicts a category." },
            { front: "Mitchell's E, T, P", back: "Experience, Task, Performance measure." },
            { front: "Why keep a test set untouched?", back: "To get an unbiased estimate of performance on new data." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Grouping shoppers by behaviour, with no predefined labels, is…",
              options: ["Supervised regression", "Supervised classification", "Unsupervised clustering", "Reinforcement learning"],
              answer: 2,
              explain: "No labels and a goal of finding groups: clustering.",
            },
            {
              kind: "truefalse",
              q: "It is fine to tune hyperparameters by checking test-set accuracy repeatedly.",
              answer: false,
              explain: "That leaks test information into model choices; use a validation set (or cross-validation) instead.",
            },
            {
              kind: "multi",
              q: "Which are classification tasks? (Select all.)",
              options: ["Is this transaction fraudulent?", "What will the stock close at?", "Which digit is in this image?", "How many minutes until the bus arrives?"],
              answers: [0, 2],
              explain: "Fraud yes/no and digit 0–9 are categories; price and minutes are numbers.",
            },
            {
              kind: "order",
              q: "Put the workflow in order.",
              items: ["Frame the problem", "Collect and split data", "Train the model", "Evaluate on test set", "Deploy and monitor"],
              explain: "Framing comes first; monitoring never really ends.",
            },
          ],
        },
        {
          slug: "linear-regression-gradient-descent",
          title: "Linear Regression & Gradient Descent",
          summary: "Fit a line by minimising squared error, one downhill step at a time.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "An estate agent notices bigger flats cost more. Can we turn that hunch into a formula? Linear regression fits $\\hat{y} = wx + b$ — a slope $w$ and an intercept $b$ — to the data.",
            },
            {
              type: "widget",
              widget: "function-plot",
              props: { kind: "linear" },
              caption: "Adjust slope and intercept. Imagine data points scattered around — which line fits best?",
            },
            {
              type: "text",
              md: "\"Best\" needs a definition. We use the **mean squared error** (MSE) loss: the average squared gap between prediction and truth.",
            },
            {
              type: "formula",
              tex: "J(w, b) = \\frac{1}{n}\\sum_{i=1}^{n}\\big(w x_i + b - y_i\\big)^2",
              caption: "Squaring punishes big errors and makes the loss smooth.",
            },
            { type: "heading", text: "Gradient descent" },
            {
              type: "text",
              md: "Imagine standing on a foggy hillside (the loss surface). You can't see the valley, but you can feel the slope under your feet. Take a step downhill, repeat. That's gradient descent:",
            },
            {
              type: "formula",
              tex: "w \\leftarrow w - \\alpha\\,\\frac{\\partial J}{\\partial w}, \\qquad b \\leftarrow b - \\alpha\\,\\frac{\\partial J}{\\partial b}",
              caption: "$\\alpha$ is the learning rate — the step size.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `# flat size (tens of m^2) -> price (lakhs)
xs = [3, 5, 6, 8, 10]
ys = [31, 49, 62, 79, 101]

w, b, lr = 0.0, 0.0, 0.01
n = len(xs)
for step in range(2001):
    preds = [w * x + b for x in xs]
    dw = 2 / n * sum((p - y) * x for p, y, x in zip(preds, ys, xs))
    db = 2 / n * sum(p - y for p, y in zip(preds, ys))
    w -= lr * dw
    b -= lr * db
    if step % 500 == 0:
        mse = sum((p - y) ** 2 for p, y in zip(preds, ys)) / n
        print(f"step {step:4d}  w={w:6.3f}  b={b:6.3f}  mse={mse:8.3f}")`,
              caption: "Plain-Python gradient descent. Try lr = 0.05 and see what happens.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "The loss starts increasing and shooting off to huge values each step. The most likely cause is…",
                  options: ["Learning rate too small", "Learning rate too large", "Too much data", "The intercept is zero"],
                  answer: 1,
                  explain: "Steps that are too big overshoot the valley and diverge.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              md: "Linear regression also has a closed-form solution (the *normal equation*). Gradient descent matters because the same idea scales to models with billions of parameters where no closed form exists.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Deep-learning frameworks (PyTorch, JAX, TensorFlow) compute gradients automatically and use variants such as **mini-batch SGD** and **Adam**, which take steps on small random batches of data instead of the whole dataset.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Linear regression can only fit straight lines.\" It's linear in the *parameters*. Add features like $x^2$ or $\\log x$ and it fits curves, while still being linear regression.",
            },
            {
              type: "keypoints",
              items: [
                "Model: $\\hat{y} = wx + b$; loss: mean squared error.",
                "Gradient descent repeatedly steps opposite the gradient.",
                "Learning rate too small = slow; too large = divergence.",
              ],
            },
          ],
          flashcards: [
            { front: "MSE", back: "Mean squared error: $\\frac{1}{n}\\sum (\\hat{y}_i - y_i)^2$." },
            { front: "Gradient descent update", back: "$\\theta \\leftarrow \\theta - \\alpha \\nabla J(\\theta)$" },
            { front: "Learning rate", back: "Step size $\\alpha$ in gradient descent." },
            { front: "Mini-batch SGD", back: "Gradient descent using small random subsets of data per step." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A model predicts $\\hat{y} = 2x + 1$. For the point $(x, y) = (3, 9)$, what is the squared error?",
              answer: 4,
              explain: "Prediction $= 7$; error $= 7 - 9 = -2$; squared $= 4$.",
            },
            {
              kind: "mcq",
              q: "Gradient descent moves parameters in which direction?",
              options: ["Along the gradient", "Opposite the gradient", "Perpendicular to the gradient", "Randomly"],
              answer: 1,
              explain: "The gradient points uphill; we want to go downhill.",
            },
            {
              kind: "truefalse",
              q: "Fitting $\\hat{y} = w_1 x + w_2 x^2 + b$ is still linear regression.",
              answer: true,
              explain: "The model is linear in the parameters $w_1, w_2, b$.",
            },
            {
              kind: "fill",
              q: "The step-size hyperparameter $\\alpha$ is called the learning ___.",
              answer: ["rate"],
              explain: "It sets how far each update moves.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "classification",
      title: "Classification & Evaluation",
      icon: "🎯",
      description: "Predict categories with logistic regression and measure success honestly.",
      lessons: [
        {
          slug: "logistic-regression",
          title: "Logistic Regression",
          summary: "Squash a linear score into a probability with the sigmoid, and train with log loss.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A bank wants the *probability* that a loan defaults, not a raw number that could be −3 or 47. Logistic regression takes a linear score $z = w \\cdot x + b$ and squashes it into $(0, 1)$.",
            },
            {
              type: "formula",
              tex: "\\sigma(z) = \\frac{1}{1 + e^{-z}}, \\qquad P(y = 1 \\mid x) = \\sigma(w \\cdot x + b)",
              caption: "The sigmoid (logistic) function.",
            },
            {
              type: "table",
              headers: ["$z$", "$\\sigma(z)$", "Meaning"],
              rows: [
                ["$-4$", "≈ 0.018", "Very likely class 0"],
                ["$0$", "0.5", "Undecided — the decision boundary"],
                ["$2$", "≈ 0.881", "Probably class 1"],
              ],
            },
            {
              type: "text",
              md: "To train it we use **log loss** (binary cross-entropy), which heavily penalises confident wrong answers:",
            },
            {
              type: "formula",
              tex: "L = -\\frac{1}{n}\\sum_{i}\\Big[y_i \\log p_i + (1 - y_i)\\log(1 - p_i)\\Big]",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `import math

# hours studied -> passed exam (1) or not (0)
hours = [0.5, 1, 1.5, 2, 3, 3.5, 4, 5]
passed = [0, 0, 0, 0, 1, 1, 1, 1]

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

w, b, lr = 0.0, 0.0, 0.5
for _ in range(3000):
    gw = gb = 0.0
    for x, y in zip(hours, passed):
        p = sigmoid(w * x + b)
        gw += (p - y) * x
        gb += (p - y)
    w -= lr * gw / len(hours)
    b -= lr * gb / len(hours)

for h in [1, 2.5, 4]:
    print(f"{h} h -> P(pass) = {sigmoid(w * h + b):.2f}")
print("boundary at", round(-b / w, 2), "hours")`,
              caption: "The decision boundary is where $w x + b = 0$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is $\\sigma(0)$?",
                  answer: 0.5,
                  tolerance: 0.001,
                  explain: "$1 / (1 + e^0) = 1/2$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Logistic regression remains a workhorse in credit scoring, click-through prediction and medical risk scores because it is fast, well-calibrated and *interpretable*: each weight shows how a feature shifts the log-odds — important when regulators ask \"why was this loan refused?\"",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Logistic regression is a regression algorithm.\" Despite the name, it's used for **classification**. It regresses the log-odds, then thresholds the probability (often at 0.5) to pick a class.",
            },
            {
              type: "keypoints",
              items: [
                "Sigmoid maps any real number to a probability.",
                "Train with log loss, not MSE.",
                "The decision boundary is linear: $w \\cdot x + b = 0$.",
              ],
            },
          ],
          flashcards: [
            { front: "Sigmoid function", back: "$\\sigma(z) = 1/(1 + e^{-z})$, output in $(0, 1)$." },
            { front: "Log loss", back: "Binary cross-entropy: $-[y\\log p + (1-y)\\log(1-p)]$ averaged." },
            { front: "Decision boundary of logistic regression", back: "Where $w \\cdot x + b = 0$, i.e. $p = 0.5$." },
            { front: "Log-odds", back: "$\\log\\frac{p}{1-p}$, which logistic regression models linearly." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Logistic regression is mainly used for…",
              options: ["Regression of continuous targets", "Binary classification", "Clustering", "Dimensionality reduction"],
              answer: 1,
              explain: "It outputs a class probability.",
            },
            {
              kind: "truefalse",
              q: "As $z \\to +\\infty$, $\\sigma(z) \\to 1$.",
              answer: true,
              explain: "$e^{-z} \\to 0$, so $\\sigma(z) \\to 1$.",
            },
            {
              kind: "mcq",
              q: "A model is 99% sure an email is spam, but it isn't. Under log loss this mistake is…",
              options: ["Ignored", "Penalised mildly", "Penalised heavily", "Rewarded"],
              answer: 2,
              explain: "$-\\log(0.01) \\approx 4.6$ — confident wrong answers are costly.",
            },
            {
              kind: "numeric",
              q: "With $w = 2$ and $b = -6$, at what $x$ is the decision boundary?",
              answer: 3,
              explain: "$2x - 6 = 0 \\Rightarrow x = 3$.",
            },
          ],
        },
        {
          slug: "evaluation-metrics",
          title: "Confusion Matrix, Precision & Recall",
          summary: "Why 99% accuracy can be useless, and which metric to trust.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "A screening test for a rare disease (1 in 100 people) proudly reports **99% accuracy**. How? It says \"healthy\" to *everyone*. It never catches a single sick patient. Accuracy alone lies on imbalanced data.",
            },
            {
              type: "table",
              headers: ["", "Predicted positive", "Predicted negative"],
              rows: [
                ["**Actually positive**", "True Positive (TP)", "False Negative (FN)"],
                ["**Actually negative**", "False Positive (FP)", "True Negative (TN)"],
              ],
            },
            {
              type: "formula",
              tex: "\\text{Precision} = \\frac{TP}{TP + FP}, \\quad \\text{Recall} = \\frac{TP}{TP + FN}, \\quad F_1 = \\frac{2PR}{P + R}",
            },
            {
              type: "list",
              items: [
                "**Precision:** of everything flagged positive, how much was right? (\"Don't cry wolf.\")",
                "**Recall (sensitivity):** of all real positives, how many did we catch? (\"Don't miss any.\")",
                "**F1:** harmonic mean — high only if *both* are high.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A fraud model flags 50 transactions; 40 are really fraud. There were 60 frauds in total. What is the precision?",
                  answer: 0.8,
                  tolerance: 0.01,
                  explain: "$TP = 40$, $FP = 10$: $40/50 = 0.8$.",
                },
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `y_true = [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
y_pred = [1, 0, 0, 1, 0, 1, 1, 0, 0, 0]

tp = sum(t == 1 and p == 1 for t, p in zip(y_true, y_pred))
fp = sum(t == 0 and p == 1 for t, p in zip(y_true, y_pred))
fn = sum(t == 1 and p == 0 for t, p in zip(y_true, y_pred))
tn = sum(t == 0 and p == 0 for t, p in zip(y_true, y_pred))

precision = tp / (tp + fp)
recall = tp / (tp + fn)
f1 = 2 * precision * recall / (precision + recall)
print("TP FP FN TN:", tp, fp, fn, tn)
print(f"precision={precision:.2f} recall={recall:.2f} f1={f1:.2f}")`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "The threshold trade-off",
              md: "Lowering the probability threshold flags more items: recall rises, precision usually falls. The **ROC curve** and **precision–recall curve** show this trade-off across all thresholds; AUC summarises it in one number.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Cancer screening favours **recall** — missing a tumour is far worse than a follow-up scan. A spam filter favours **precision** — losing a job offer to the spam folder is worse than seeing one extra spam. The metric is a product decision, not just a maths one.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Higher accuracy always means a better model.\" On imbalanced data, the trivial majority-class predictor can top the accuracy chart while being worthless.",
            },
            {
              type: "keypoints",
              items: [
                "The confusion matrix is the source of all classification metrics.",
                "Precision = correctness of positive predictions; recall = coverage of real positives.",
                "Choose the metric from the real-world cost of each error type.",
              ],
            },
          ],
          flashcards: [
            { front: "Precision", back: "$TP / (TP + FP)$" },
            { front: "Recall (sensitivity)", back: "$TP / (TP + FN)$" },
            { front: "F1 score", back: "Harmonic mean of precision and recall: $2PR/(P+R)$." },
            { front: "False negative", back: "A real positive the model predicted as negative." },
            { front: "Why accuracy misleads", back: "With class imbalance, predicting the majority class scores high but finds nothing." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "TP = 40, FN = 20. What is the recall? (Give a decimal to 2 places.)",
              answer: 0.67,
              tolerance: 0.01,
              explain: "$40 / (40 + 20) = 0.667$.",
            },
            {
              kind: "mcq",
              q: "For an airport weapon detector, which error is most important to minimise?",
              options: ["False positives", "False negatives", "True negatives", "True positives"],
              answer: 1,
              explain: "Missing a real weapon (FN) is catastrophic; an extra bag check (FP) is an inconvenience. Prioritise recall.",
            },
            {
              kind: "truefalse",
              q: "A model with precision 1.0 and recall 0.1 has an F1 score above 0.5.",
              answer: false,
              explain: "$F_1 = 2(1)(0.1)/(1.1) \\approx 0.18$. The harmonic mean is dragged down by the weaker metric.",
            },
            {
              kind: "fill",
              q: "A prediction of positive when the truth is negative is a false ___.",
              answer: ["positive"],
              explain: "False positive = Type I error.",
            },
          ],
          challenge: {
            title: "Precision and recall from scratch",
            prompt:
              "Write `precision_recall(y_true, y_pred)` returning a tuple `(precision, recall)` for binary labels (0/1). If there are no predicted positives, precision is `0.0`; if there are no actual positives, recall is `0.0`.",
            lang: "python",
            starter: `def precision_recall(y_true, y_pred):
    # count TP, FP, FN
    return (0.0, 0.0)
`,
            tests: [
              { label: "Basic example", check: "precision_recall([1, 0, 1, 1], [1, 1, 0, 1]) == (2/3, 2/3)" },
              { label: "Perfect predictions", check: "precision_recall([1, 0, 1], [1, 0, 1]) == (1.0, 1.0)" },
              { label: "No predicted positives", check: "precision_recall([1, 1, 0], [0, 0, 0]) == (0.0, 0.0)" },
              { label: "Returns a tuple", check: "isinstance(precision_recall([1], [1]), tuple)" },
            ],
            solution: `def precision_recall(y_true, y_pred):
    tp = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 1)
    fp = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 1)
    fn = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 0)
    precision = tp / (tp + fp) if tp + fp else 0.0
    recall = tp / (tp + fn) if tp + fn else 0.0
    return (precision, recall)
`,
            hints: ["Use `zip(y_true, y_pred)` to walk both lists together.", "Guard against division by zero."],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "generalisation",
      title: "Overfitting & Generalisation",
      icon: "📉",
      description: "Models that memorise versus models that learn.",
      lessons: [
        {
          slug: "overfitting-regularisation",
          title: "Overfitting & Regularisation",
          summary: "Spot when a model memorises noise, and tame it with L1/L2 penalties, dropout and early stopping.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A student memorises last year's exam answers word for word and scores 100% on practice. On the real exam, with new questions, they fail. That's **overfitting**: brilliant on training data, poor on unseen data.",
            },
            {
              type: "table",
              headers: ["Symptom", "Training error", "Validation error", "Diagnosis"],
              rows: [
                ["Both high", "High", "High", "**Underfitting** (too simple)"],
                ["Low train, high val", "Low", "High", "**Overfitting** (too complex / too little data)"],
                ["Both low, close together", "Low", "Low", "Good fit"],
              ],
            },
            {
              type: "widget",
              widget: "function-plot",
              props: { kind: "quadratic" },
              caption: "A quadratic captures a curved trend. A degree-15 polynomial would wiggle through every noisy point — and fail on new ones.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Training accuracy 99%, validation accuracy 71%. What's happening?",
                  options: ["Underfitting", "Overfitting", "Perfect fit", "Data leakage guaranteed"],
                  answer: 1,
                  explain: "A large train–validation gap is the signature of overfitting.",
                },
              ],
            },
            { type: "heading", text: "Regularisation" },
            {
              type: "text",
              md: "Regularisation adds a penalty for complexity, nudging the model towards simpler explanations:",
            },
            {
              type: "formula",
              tex: "J_{\\text{reg}}(w) = J(w) + \\lambda \\sum_j w_j^2 \\ \\ (\\text{L2, Ridge}) \\qquad J(w) + \\lambda \\sum_j |w_j| \\ \\ (\\text{L1, Lasso})",
              caption: "$\\lambda$ controls the strength of the penalty.",
            },
            {
              type: "list",
              items: [
                "**L2 (ridge / weight decay):** shrinks all weights smoothly towards zero.",
                "**L1 (lasso):** drives many weights exactly to zero — automatic feature selection.",
                "**Dropout:** randomly switches off neurons during training so the network can't rely on any single one.",
                "**Early stopping:** stop training when validation loss starts rising.",
                "**More data / augmentation:** often the most powerful fix of all.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Kaggle competitions have a public and a private leaderboard. Teams who tune obsessively against the public one often tumble on the private one — a very public lesson in overfitting to a validation set.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"More model complexity is always better if you have a GPU.\" Without enough data or regularisation, extra capacity just memorises noise.",
            },
            {
              type: "keypoints",
              items: [
                "Overfitting = low training error but high validation error.",
                "L2 shrinks weights; L1 zeroes some out.",
                "Dropout, early stopping and more data all improve generalisation.",
              ],
            },
          ],
          flashcards: [
            { front: "Overfitting", back: "Fitting noise in training data so the model generalises poorly." },
            { front: "Underfitting", back: "Model too simple to capture the pattern; high train and val error." },
            { front: "L1 vs L2", back: "L1 (lasso) gives sparse weights; L2 (ridge) shrinks weights smoothly." },
            { front: "Early stopping", back: "Halt training when validation loss stops improving." },
            { front: "Dropout", back: "Randomly zero neurons during training to prevent co-adaptation." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which regulariser tends to produce exactly-zero weights?",
              options: ["L2 (ridge)", "L1 (lasso)", "Dropout", "Batch size"],
              answer: 1,
              explain: "The L1 penalty's corner at zero pushes many weights to exactly 0.",
            },
            {
              kind: "truefalse",
              q: "Increasing $\\lambda$ in ridge regression makes the model more complex.",
              answer: false,
              explain: "Larger $\\lambda$ penalises weights more, making the model simpler.",
            },
            {
              kind: "multi",
              q: "Which actions typically reduce overfitting? (Select all.)",
              options: ["Collect more training data", "Add dropout", "Train for many more epochs past the validation minimum", "Use early stopping"],
              answers: [0, 1, 3],
              explain: "Training past the validation minimum increases overfitting.",
            },
            {
              kind: "mcq",
              q: "Training and validation errors are both high and similar. The best next step is…",
              options: ["Add stronger regularisation", "Use a more expressive model or better features", "Stop training earlier", "Remove data"],
              answer: 1,
              explain: "This is underfitting — the model needs more capacity or better features.",
            },
          ],
        },
        {
          slug: "validation-bias-variance",
          title: "Cross-Validation & the Bias–Variance Trade-off",
          summary: "Estimate performance reliably and understand why errors come from two opposite sources.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Judge a cook on one dish and you might catch a lucky (or unlucky) day. Taste five dishes and your verdict is far more reliable. **K-fold cross-validation** applies the same logic to models.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Split the training data into $k$ equal folds (commonly $k = 5$ or $10$).",
                "Train on $k - 1$ folds and validate on the remaining fold.",
                "Repeat $k$ times so every fold is the validation set once.",
                "Average the $k$ scores (and look at their spread).",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "With 5-fold cross-validation, how many times is the model trained?",
                  answer: 5,
                  explain: "Once per fold.",
                },
              ],
            },
            { type: "heading", text: "Bias and variance" },
            {
              type: "formula",
              tex: "\\mathbb{E}\\big[(y - \\hat{f}(x))^2\\big] = \\text{Bias}^2 + \\text{Variance} + \\sigma^2_{\\text{noise}}",
              caption: "Expected squared error decomposes into three parts.",
            },
            {
              type: "table",
              headers: ["", "High bias", "High variance"],
              rows: [
                ["Analogy", "Darts clustered, far from the bullseye", "Darts scattered all over"],
                ["Cause", "Model too simple", "Model too sensitive to the training sample"],
                ["Looks like", "Underfitting", "Overfitting"],
                ["Fix", "More features / capacity", "More data, regularisation, ensembling"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Random forests reduce variance by averaging many deep (high-variance) trees trained on bootstrap samples. Gradient boosting reduces bias by adding shallow trees one at a time to fix residual errors. Libraries like XGBoost and LightGBM dominate tabular-data problems this way.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Cross-validation lets me skip the test set.\" CV is for model selection. After you've chosen, you still want one final, untouched test score — and for time-series data, folds must respect time order to avoid peeking into the future.",
            },
            {
              type: "keypoints",
              items: [
                "K-fold CV gives a lower-variance performance estimate than one split.",
                "Error = bias² + variance + irreducible noise.",
                "Bagging cuts variance; boosting cuts bias.",
              ],
            },
          ],
          flashcards: [
            { front: "K-fold cross-validation", back: "Rotate which of k folds is held out; average the k scores." },
            { front: "Bias", back: "Error from wrong assumptions — a model too simple to capture the signal." },
            { front: "Variance", back: "Error from sensitivity to the particular training sample." },
            { front: "Irreducible error", back: "Noise in the data that no model can remove." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A very deep decision tree trained on a small dataset most likely has…",
              options: ["High bias, low variance", "Low bias, high variance", "Low bias, low variance", "Zero error"],
              answer: 1,
              explain: "It fits training data closely (low bias) but changes a lot with new samples (high variance).",
            },
            {
              kind: "truefalse",
              q: "For stock-price forecasting, randomly shuffling days into CV folds is the right approach.",
              answer: false,
              explain: "Shuffling lets the model train on the future and validate on the past. Use time-ordered (walk-forward) splits.",
            },
            {
              kind: "fill",
              q: "Averaging many trees trained on bootstrap samples (bagging) mainly reduces ___.",
              answer: ["variance"],
              explain: "Averaging smooths out the individual trees' fluctuations.",
            },
            {
              kind: "numeric",
              q: "In 10-fold CV on 1,000 examples, how many examples are in each validation fold?",
              answer: 100,
              explain: "$1000 / 10 = 100$.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "neural-networks",
      title: "Neural Networks",
      icon: "🧠",
      description: "From a single artificial neuron to deep networks trained by backpropagation.",
      lessons: [
        {
          slug: "perceptron",
          title: "The Perceptron",
          summary: "Weighted sum, activation, update rule — and the famous XOR limitation.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "In 1958 Frank Rosenblatt unveiled the **perceptron**, a machine that learned to tell shapes apart. Newspapers predicted thinking machines. The idea was simple — and it's still the building block of today's giant networks.",
            },
            {
              type: "formula",
              tex: "\\hat{y} = \\begin{cases} 1 & \\text{if } w_1x_1 + w_2x_2 + b > 0 \\\\ 0 & \\text{otherwise} \\end{cases}",
              caption: "Weighted sum of inputs, plus a bias, through a step function.",
            },
            {
              type: "widget",
              widget: "perceptron",
              caption: "Adjust weights and bias. The line where the weighted sum equals zero splits the plane into two classes.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `# Learn logical AND with the perceptron rule
data = [((0, 0), 0), ((0, 1), 0), ((1, 0), 0), ((1, 1), 1)]
w = [0.0, 0.0]
b = 0.0
lr = 0.1

def predict(x):
    s = w[0] * x[0] + w[1] * x[1] + b
    return 1 if s > 0 else 0

for epoch in range(10):
    errors = 0
    for x, y in data:
        err = y - predict(x)
        if err != 0:
            errors += 1
            w[0] += lr * err * x[0]
            w[1] += lr * err * x[1]
            b += lr * err
    print("epoch", epoch, "errors", errors)
    if errors == 0:
        break

print("weights", w, "bias", round(b, 2))
print([predict(x) for x, _ in data])`,
              caption: "Perceptron learning rule: w ← w + η (y − ŷ) x.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "A single perceptron can learn XOR (output 1 when exactly one input is 1).",
                  answer: false,
                  explain: "XOR's classes cannot be separated by one straight line, so a single perceptron cannot represent it.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "The first AI winter",
              md: "Minsky and Papert's 1969 book *Perceptrons* highlighted that single-layer perceptrons can only learn **linearly separable** functions. Funding and enthusiasm cooled — until multi-layer networks trained with backpropagation revived the field in the 1980s.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Every \"neuron\" in a modern model — from image classifiers to large language models — still computes a weighted sum plus bias, then applies a non-linearity. The difference is scale: billions of them, with smooth activations instead of a hard step.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Artificial neurons work like brain neurons.\" They're loosely *inspired* by biology, but real neurons are vastly more complex (spike timing, dendritic computation, chemistry). Treat the analogy as a metaphor.",
            },
            {
              type: "keypoints",
              items: [
                "Perceptron = weighted sum + bias + step activation.",
                "The learning rule nudges weights towards correct answers.",
                "A single layer only separates classes with a straight line (hyperplane).",
              ],
            },
          ],
          flashcards: [
            { front: "Perceptron output", back: "1 if $w \\cdot x + b > 0$, else 0." },
            { front: "Perceptron learning rule", back: "$w \\leftarrow w + \\eta (y - \\hat{y}) x$" },
            { front: "Linearly separable", back: "Two classes can be split by a single line / hyperplane." },
            { front: "Why XOR broke the perceptron", back: "XOR is not linearly separable; it needs a hidden layer." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "With $w_1 = 0.6$, $w_2 = 0.6$, $b = -1$ and inputs $(1, 1)$, what is the weighted sum $w_1x_1 + w_2x_2 + b$?",
              answer: 0.2,
              tolerance: 0.001,
              explain: "$0.6 + 0.6 - 1 = 0.2$, which is positive, so the output is 1.",
            },
            {
              kind: "mcq",
              q: "Which logic function can a single perceptron NOT learn?",
              options: ["AND", "OR", "NOT", "XOR"],
              answer: 3,
              explain: "AND, OR and NOT are linearly separable; XOR isn't.",
            },
            {
              kind: "truefalse",
              q: "If the perceptron's prediction is correct, the learning rule leaves the weights unchanged.",
              answer: true,
              explain: "$y - \\hat{y} = 0$, so the update is zero.",
            },
            {
              kind: "fill",
              q: "The perceptron was introduced by Frank ___ in 1958.",
              answer: ["Rosenblatt"],
              explain: "Rosenblatt built it at the Cornell Aeronautical Laboratory.",
            },
          ],
        },
        {
          slug: "deep-networks-backprop",
          title: "Deep Networks & Backpropagation",
          summary: "Stack layers with non-linear activations and train them with the chain rule.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "One perceptron draws one line. Stack layers of them and the network can carve out curves, rings and almost any shape — the **universal approximation** idea. The trick is training all those weights at once.",
            },
            { type: "illustration", emoji: "🕸️", caption: "Input layer → hidden layers → output layer, every arrow a learnable weight." },
            {
              type: "table",
              headers: ["Activation", "Formula", "Notes"],
              rows: [
                ["Sigmoid", "$1/(1+e^{-z})$", "Outputs in (0, 1); gradients vanish at extremes"],
                ["tanh", "$\\tanh z$", "Outputs in (−1, 1); zero-centred"],
                ["ReLU", "$\\max(0, z)$", "Default for hidden layers; cheap and avoids vanishing gradients for $z > 0$"],
                ["Softmax", "$e^{z_i}/\\sum_j e^{z_j}$", "Output layer for multi-class probabilities"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Why non-linearity?",
              md: "Stacking linear layers without activations collapses into one linear layer: $W_2(W_1x) = (W_2W_1)x$. Non-linear activations are what give depth its power.",
            },
            { type: "heading", text: "Backpropagation" },
            {
              type: "text",
              md: "Training needs $\\partial L / \\partial w$ for every weight. **Backpropagation** computes them efficiently by applying the chain rule from the output backwards, reusing intermediate results:",
            },
            {
              type: "formula",
              tex: "\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial \\hat{y}} \\cdot \\frac{\\partial \\hat{y}}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w}",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `import math

# One neuron: z = w*x + b, y_hat = sigmoid(z), loss = (y_hat - y)^2
x, y = 2.0, 1.0
w, b = 0.1, 0.0

for step in range(5):
    z = w * x + b
    y_hat = 1 / (1 + math.exp(-z))
    loss = (y_hat - y) ** 2
    dL_dyhat = 2 * (y_hat - y)          # chain rule, link 1
    dyhat_dz = y_hat * (1 - y_hat)      # link 2 (sigmoid derivative)
    dz_dw, dz_db = x, 1.0               # link 3
    w -= 1.0 * dL_dyhat * dyhat_dz * dz_dw
    b -= 1.0 * dL_dyhat * dyhat_dz * dz_db
    print(f"step {step}: loss={loss:.4f}")`,
              caption: "Backprop by hand for a single neuron — frameworks automate exactly this.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What is the main reason ReLU replaced sigmoid in hidden layers?",
                  options: ["It outputs probabilities", "It reduces the vanishing-gradient problem", "It is non-differentiable everywhere", "It needs fewer weights"],
                  answer: 1,
                  explain: "For positive inputs its gradient is 1, so signals don't shrink layer after layer.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "The 2012 ImageNet win by **AlexNet** — a deep convolutional network trained on GPUs with ReLU and dropout — slashed the top-5 error rate and kicked off the deep-learning boom. Today's language models are transformers trained with the same backprop + gradient-descent recipe at enormous scale.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Backpropagation is a learning algorithm on its own.\" Backprop only computes gradients. An *optimiser* (SGD, Adam) uses those gradients to update the weights.",
            },
            {
              type: "keypoints",
              items: [
                "Depth + non-linear activations = expressive models.",
                "Backprop = chain rule applied efficiently from output to input.",
                "ReLU in hidden layers, softmax for multi-class outputs.",
              ],
            },
          ],
          flashcards: [
            { front: "ReLU", back: "$\\max(0, z)$" },
            { front: "Backpropagation", back: "Efficient gradient computation via the chain rule, from output backwards." },
            { front: "Vanishing gradient", back: "Gradients shrink through many layers (e.g. with sigmoid), stalling learning." },
            { front: "Softmax", back: "Turns a vector of scores into probabilities that sum to 1." },
            { front: "Sigmoid derivative", back: "$\\sigma(z)(1 - \\sigma(z))$" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "A 10-layer network with no activation functions is no more expressive than a single linear layer.",
              answer: true,
              explain: "A composition of linear maps is itself linear.",
            },
            {
              kind: "numeric",
              q: "What is $\\text{ReLU}(-3.5)$?",
              answer: 0,
              explain: "$\\max(0, -3.5) = 0$.",
            },
            {
              kind: "mcq",
              q: "Which layer typically uses softmax?",
              options: ["Input layer", "Every hidden layer", "Output layer for multi-class classification", "None — it's only for regression"],
              answer: 2,
              explain: "Softmax gives a probability distribution over classes.",
            },
            {
              kind: "order",
              q: "Order one training step of a neural network.",
              items: ["Forward pass to compute predictions", "Compute the loss", "Backpropagate gradients", "Optimiser updates weights"],
              explain: "Forward, loss, backward, update — repeat.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "unsupervised",
      title: "Unsupervised Learning",
      icon: "🫧",
      description: "Find structure without labels: clustering and dimensionality reduction.",
      lessons: [
        {
          slug: "k-means",
          title: "K-Means Clustering",
          summary: "Assign, update, repeat: Lloyd's algorithm and how to pick k.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A food-delivery startup has the GPS coordinates of 50,000 orders and money for 4 dark kitchens. Where should they go? Nobody labelled the data — we need to **discover** natural groups. Enter k-means.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Choose $k$ and place $k$ initial centroids (e.g. random points).",
                "**Assign:** each point joins its nearest centroid.",
                "**Update:** move each centroid to the mean of its points.",
                "Repeat until assignments stop changing.",
              ],
            },
            {
              type: "formula",
              tex: "\\min_{C_1,\\dots,C_k} \\sum_{j=1}^{k} \\sum_{x \\in C_j} \\lVert x - \\mu_j \\rVert^2",
              caption: "K-means minimises within-cluster sum of squares (inertia).",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `points = [(1, 2), (1.5, 1.8), (1, 0.6), (8, 8), (9, 11), (8, 9), (0.5, 1.2), (9, 9.5)]
centroids = [(0.5, 1.2), (1, 2)]   # k = 2 deliberately poor starting guesses

def dist2(a, b):
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2

for it in range(5):
    clusters = [[] for _ in centroids]
    for p in points:
        nearest = min(range(len(centroids)), key=lambda j: dist2(p, centroids[j]))
        clusters[nearest].append(p)
    centroids = [
        (sum(x for x, _ in c) / len(c), sum(y for _, y in c) / len(c))
        for c in clusters
    ]
    print(it, [tuple(round(v, 2) for v in c) for c in centroids])`,
              caption: "Lloyd's algorithm in a dozen lines.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In the update step, each centroid moves to…",
                  options: ["A random data point", "The mean of its assigned points", "The farthest point", "The origin"],
                  answer: 1,
                  explain: "The mean minimises the sum of squared distances within the cluster.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Choosing k",
              md: "Plot inertia against $k$ and look for the **elbow** where improvements flatten. The **silhouette score** is another guide. Business constraints (\"we can open 4 kitchens\") often decide.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Retailers segment customers by spending patterns, image compressors cluster colours into a small palette, and search systems use k-means to partition embeddings for fast approximate nearest-neighbour lookup. scikit-learn defaults to **k-means++** initialisation, which spreads starting centroids out.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"K-means finds the true clusters.\" It assumes roughly spherical, similar-sized clusters, it's sensitive to feature scaling and initialisation, and it only finds a local optimum. Always scale features and try several restarts.",
            },
            {
              type: "keypoints",
              items: [
                "K-means alternates assignment and centroid update.",
                "It minimises within-cluster squared distance; results depend on initialisation.",
                "Pick $k$ with the elbow method, silhouette score or domain constraints.",
              ],
            },
          ],
          flashcards: [
            { front: "K-means objective", back: "Minimise the sum of squared distances from points to their cluster centroid." },
            { front: "Lloyd's algorithm steps", back: "Assign points to nearest centroid; recompute centroids; repeat." },
            { front: "Elbow method", back: "Choose k where inertia stops dropping sharply." },
            { front: "k-means++", back: "Smart initialisation spreading centroids apart." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A cluster contains points 2, 4 and 9 on a number line. Where does its centroid move?",
              answer: 5,
              explain: "Mean $= (2 + 4 + 9)/3 = 5$.",
            },
            {
              kind: "truefalse",
              q: "K-means always reaches the global optimum.",
              answer: false,
              explain: "It converges to a local optimum; different starts can give different answers.",
            },
            {
              kind: "mcq",
              q: "Why scale features before k-means?",
              options: ["To speed up printing", "Because distances are dominated by large-range features otherwise", "To make k smaller", "It is never needed"],
              answer: 1,
              explain: "Income in rupees would swamp age in years in a Euclidean distance.",
            },
            {
              kind: "multi",
              q: "Which are unsupervised tasks? (Select all.)",
              options: ["Customer segmentation", "Anomaly detection on unlabelled logs", "Predicting house prices from labelled sales", "Compressing image colours"],
              answers: [0, 1, 3],
              explain: "House-price prediction uses labels, so it is supervised.",
            },
          ],
        },
        {
          slug: "dimensionality-reduction",
          title: "Dimensionality Reduction with PCA",
          summary: "Compress many features into a few directions that keep most of the variance.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A smartwatch records 300 features per minute. Plotting 300 dimensions is impossible, and many features move together anyway. **Principal Component Analysis (PCA)** finds a few new axes that capture most of the variation.",
            },
            { type: "illustration", emoji: "🔦", caption: "PCA is like rotating a torch to find the angle where a 3-D object casts its most informative 2-D shadow." },
            {
              type: "list",
              ordered: true,
              items: [
                "Centre the data (subtract each feature's mean), usually also standardise.",
                "Compute the covariance matrix.",
                "Find its eigenvectors (principal components) and eigenvalues (variance along each).",
                "Keep the top $d$ components and project the data onto them.",
              ],
            },
            {
              type: "formula",
              tex: "\\text{explained variance ratio}_i = \\frac{\\lambda_i}{\\sum_j \\lambda_j}",
              caption: "Eigenvalue $\\lambda_i$ measures variance along component $i$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Eigenvalues are 6, 3 and 1. What fraction of variance do the first two components explain?",
                  answer: 0.9,
                  tolerance: 0.001,
                  explain: "$(6 + 3)/(6 + 3 + 1) = 0.9$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "PCA de-noises sensor data, speeds up downstream models and visualises high-dimensional embeddings. For visualisation of complex clusters, t-SNE and UMAP are popular non-linear alternatives.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"The first principal component is the most predictive feature.\" PCA is unsupervised: it maximises *variance*, not relevance to any label. A low-variance direction might be exactly what separates your classes.",
            },
            {
              type: "keypoints",
              items: [
                "PCA finds orthogonal directions of maximum variance.",
                "Components are eigenvectors of the covariance matrix.",
                "Standardise features first so units don't dominate.",
              ],
            },
          ],
          flashcards: [
            { front: "Principal component", back: "A direction (eigenvector of the covariance matrix) of maximal remaining variance." },
            { front: "Explained variance ratio", back: "$\\lambda_i / \\sum_j \\lambda_j$" },
            { front: "Are principal components correlated?", back: "No — they are orthogonal and uncorrelated." },
            { front: "Non-linear visualisation alternatives", back: "t-SNE and UMAP." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "PCA uses class labels to choose its components.",
              answer: false,
              explain: "PCA is unsupervised; it only looks at the features' variance.",
            },
            {
              kind: "mcq",
              q: "Why standardise features before PCA?",
              options: ["To remove all variance", "So features measured in large units don't dominate", "To make eigenvalues negative", "It is required for k-means only"],
              answer: 1,
              explain: "Variance depends on units; standardising puts features on equal footing.",
            },
            {
              kind: "fill",
              q: "Principal components are the ___ of the covariance matrix.",
              answer: ["eigenvectors"],
              explain: "And their eigenvalues give the variance along each.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "responsible-ai",
      title: "Responsible AI",
      icon: "⚖️",
      description: "Fairness, transparency, privacy and accountability in real systems.",
      lessons: [
        {
          slug: "bias-and-fairness",
          title: "Bias & Fairness",
          summary: "How historical data bakes in unfairness, and how to measure and mitigate it.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "In 2018 Reuters reported that Amazon had scrapped an experimental CV-screening model. Trained on a decade of mostly male hires, it had learned to downgrade CVs containing the word *\"women's\"* (as in \"women's chess club captain\"). Nobody programmed sexism — the model **learned it from history**.",
            },
            {
              type: "table",
              headers: ["Source of bias", "Example"],
              rows: [
                ["Historical bias", "Past hiring or lending decisions reflect discrimination"],
                ["Representation bias", "Face datasets with few darker-skinned faces"],
                ["Measurement bias", "Using arrests as a proxy for crime"],
                ["Feedback loops", "Predictive policing sends officers where past data says — generating more data there"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Gender Shades (2018)",
              md: "Joy Buolamwini and Timnit Gebru audited commercial gender-classification systems. Error rates were under 1% for lighter-skinned men but reached about 35% for darker-skinned women. Several vendors improved their systems after the study.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "Removing the 'gender' column from a dataset guarantees a gender-fair model.",
                  answer: false,
                  explain: "Other features (hobbies, colleges, word choices) can act as proxies and leak the same information.",
                },
              ],
            },
            { type: "heading", text: "Measuring fairness" },
            {
              type: "list",
              items: [
                "**Demographic parity:** each group receives positive outcomes at the same rate.",
                "**Equal opportunity:** equal true-positive rates (recall) across groups.",
                "**Calibration:** a predicted 70% risk means 70% in every group.",
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"There's one correct definition of fairness.\" When base rates differ between groups, calibration and equal error rates generally cannot all hold at once (a known impossibility result). Choosing a definition is an ethical and legal decision, made with stakeholders.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Teams run **disaggregated evaluation** (metrics per subgroup), use toolkits like Fairlearn or AI Fairness 360, and document models with **model cards**. The EU AI Act classifies hiring and credit scoring as high-risk uses with extra obligations.",
            },
            {
              type: "keypoints",
              items: [
                "Bias enters through data, labels, proxies and feedback loops.",
                "Always report metrics per subgroup, not just overall.",
                "Fairness definitions can conflict; pick deliberately and document why.",
              ],
            },
          ],
          flashcards: [
            { front: "Proxy variable", back: "A feature correlated with a protected attribute that can leak it indirectly." },
            { front: "Demographic parity", back: "Equal positive-outcome rates across groups." },
            { front: "Equal opportunity", back: "Equal true-positive rates across groups." },
            { front: "Disaggregated evaluation", back: "Reporting performance separately for each subgroup." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A model trained on decades of biased loan approvals rejects qualified applicants from one area. This is mainly…",
              options: ["Measurement noise", "Historical bias", "Overfitting to validation data", "A GPU error"],
              answer: 1,
              explain: "The labels themselves encode past discrimination.",
            },
            {
              kind: "multi",
              q: "Which practices help detect unfairness? (Select all.)",
              options: ["Evaluating accuracy per demographic group", "Reporting only overall accuracy", "Publishing a model card", "Auditing for proxy features"],
              answers: [0, 2, 3],
              explain: "Overall accuracy can hide large subgroup gaps.",
            },
            {
              kind: "truefalse",
              q: "Feedback loops can make a biased model's predictions appear increasingly 'correct' over time.",
              answer: true,
              explain: "Acting on predictions generates data that confirms them, e.g. more patrols → more recorded incidents.",
            },
          ],
        },
        {
          slug: "transparency-privacy",
          title: "Transparency, Privacy & Accountability",
          summary: "Explain decisions, protect personal data, and keep humans in the loop.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Your loan application is refused by an algorithm. You ask why. \"The neural network said so\" isn't an acceptable answer — legally or ethically. Responsible ML means systems that can be **explained, audited and corrected**.",
            },
            {
              type: "table",
              headers: ["Pillar", "Practice", "Tools / examples"],
              rows: [
                ["Transparency", "Explain predictions", "SHAP, LIME, feature importances, model cards"],
                ["Privacy", "Minimise and protect personal data", "Anonymisation, differential privacy, federated learning"],
                ["Robustness", "Test against shift and attacks", "Stress tests, adversarial examples, red-teaming"],
                ["Accountability", "Clear ownership and recourse", "Human review, audit logs, appeal processes"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "**Differential privacy** adds carefully calibrated noise so the output barely changes whether or not any one person's data is included. The US Census Bureau used it for 2020 census data products.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Federated learning protects privacy mainly by…",
                  options: [
                    "Deleting all data",
                    "Training on devices and sharing model updates instead of raw data",
                    "Encrypting the final model only",
                    "Using smaller models",
                  ],
                  answer: 1,
                  explain: "Raw data stays on phones/hospitals; only updates are aggregated centrally.",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Anonymised data can't identify anyone.\" Researchers have repeatedly re-identified people by linking 'anonymous' datasets with public ones — e.g. a combination of ZIP code, birth date and sex is unique for a large share of Americans.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Regulations such as the EU's GDPR and AI Act, and India's Digital Personal Data Protection Act 2023, push companies towards data minimisation, consent and documented risk assessments. Many firms now have responsible-AI review boards that sign off before high-risk models ship.",
            },
            {
              type: "keypoints",
              items: [
                "Explainability tools (SHAP, LIME) help justify individual predictions.",
                "Privacy techniques: minimisation, differential privacy, federated learning.",
                "Accountability needs owners, audit trails and a route for people to appeal.",
              ],
            },
          ],
          flashcards: [
            { front: "Differential privacy", back: "Adding calibrated noise so outputs reveal little about any single individual." },
            { front: "Federated learning", back: "Training across devices; only model updates leave the device." },
            { front: "Model card", back: "Short document describing a model's intended use, data, metrics and limitations." },
            { front: "SHAP", back: "A method attributing a prediction to features using Shapley values." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Removing names and phone numbers always makes a dataset fully anonymous.",
              answer: false,
              explain: "Quasi-identifiers like postcode + birth date can still re-identify people.",
            },
            {
              kind: "mcq",
              q: "Which practice best supports accountability for an automated decision system?",
              options: ["Hiding the model from auditors", "Logging decisions and offering human review and appeal", "Retraining daily without records", "Using only accuracy as a metric"],
              answer: 1,
              explain: "Audit logs plus human recourse make it possible to find and fix mistakes.",
            },
            {
              kind: "fill",
              q: "Learning from data that stays on users' devices is called ___ learning.",
              answer: ["federated"],
              explain: "Only aggregated model updates are shared.",
            },
          ],
        },
      ],
    },
  ],
};
