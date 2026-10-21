import type { CourseResources } from "./types";

export const machineLearningResources: CourseResources = {
  course: "machine-learning",
  caseStudies: [
    {
      slug: "fraud-model-99-accuracy",
      title: "The fraud model with 99.6% accuracy that caught nothing",
      summary: "Why accuracy misled a payments team, and how precision, recall and thresholds fixed it.",
      units: ["classification", "generalisation"],
      minutes: 16,
      scenario: `A payments start-up trained a classifier to flag fraudulent card transactions. In the training data, 0.4% of 250,000 transactions were fraud. The first model reported **99.6% accuracy** on the test set and the team celebrated — until the risk lead noticed it had flagged **zero** transactions in a week of production.

The data scientist rebuilt the evaluation around a confusion matrix and retrained a logistic-regression model with class weights. She then swept the decision threshold instead of using the default 0.5. Each missed fraud costs on average ₹8,000; each false alarm costs ₹60 in support time and annoys a genuine customer.`,
      data: {
        caption: "Logistic regression on 50,000 test transactions (200 are fraud)",
        headers: ["Threshold", "True positives", "False positives", "False negatives", "Precision", "Recall"],
        rows: [
          ["0.50", "62", "18", "138", "0.78", "0.31"],
          ["0.20", "131", "240", "69", "0.35", "0.66"],
          ["0.08", "172", "1,450", "28", "0.11", "0.86"],
        ],
      },
      questions: [
        "Explain how a model can reach 99.6% accuracy while catching no fraud.",
        "Verify the precision and recall in the 0.20 row from the counts.",
        "Using the costs given, compute the total cost (missed fraud + false alarms) at each threshold. Which threshold is cheapest?",
        "What other ways could the team handle the class imbalance besides class weights?",
      ],
      outcome: `Predicting "not fraud" for everything is right 99.6% of the time, so accuracy says nothing on imbalanced data. At threshold 0.20, precision = 131 / (131 + 240) ≈ 0.35 and recall = 131 / 200 ≈ 0.66.

Costs: 0.50 → 138 × 8,000 + 18 × 60 ≈ ₹11.05 lakh; 0.20 → 69 × 8,000 + 240 × 60 ≈ ₹5.66 lakh; 0.08 → 28 × 8,000 + 1,450 × 60 ≈ ₹3.11 lakh. The lowest *money* cost is at 0.08, but 1,450 false alarms a week overwhelmed the support team, so they shipped 0.12 with a second-stage review queue. They also added resampling and monitoring of recall per week.`,
      takeaways: [
        "Never report accuracy alone on imbalanced data — use a confusion matrix.",
        "The decision threshold is a business decision; tie it to real costs.",
        "Precision–recall trade-offs should be evaluated on a held-out set, not training data.",
        "Operational capacity (who reviews alerts?) is part of the objective.",
      ],
    },
    {
      slug: "house-prices-overfit",
      title: "When the house-price model memorised the city",
      summary: "A 40-feature regression scored R² 0.98 in training and 0.41 on new listings.",
      units: ["foundations", "generalisation"],
      minutes: 15,
      scenario: `A property portal built a model to suggest listing prices. Analysts fed it 40 features (area, floor, age, distance to metro, plus one-hot encoded *street names*) and fitted a degree-3 polynomial regression on 1,200 past sales. Training R² was **0.98**. Two months after launch, sellers complained that suggested prices were wildly off for new buildings.

A review compared models of increasing complexity using 5-fold cross-validation.`,
      data: {
        caption: "Cross-validated error (RMSE, ₹ lakh) by model",
        headers: ["Model", "Train RMSE", "Validation RMSE"],
        rows: [
          ["Linear, 6 core features", "18.2", "19.0"],
          ["Linear, 40 features", "11.5", "21.7"],
          ["Polynomial (deg 3), 40 features", "2.9", "46.3"],
          ["Ridge (λ = 10), 40 features", "13.1", "15.8"],
        ],
      },
      questions: [
        "Which model overfits most, and what in the table shows it?",
        "Why do one-hot street names make overfitting easy with 1,200 sales?",
        "Explain in your own words what ridge regularisation is doing to the coefficients.",
        "What would you monitor after deployment to detect the model drifting?",
      ],
      outcome: `The polynomial model has the biggest gap between training (2.9) and validation (46.3) error — classic high variance. Hundreds of sparse street columns let the model memorise individual sales. Ridge penalises large coefficients ($\\lambda \\sum w_j^2$), shrinking noisy ones and giving the best validation error (15.8).

The team shipped ridge with cross-validated λ, replaced street names with a smoothed neighbourhood price index, and set up monthly monitoring of error on new sales by locality.`,
      takeaways: [
        "Training score alone says nothing about generalisation.",
        "Cross-validation is the honest way to compare model complexity.",
        "Regularisation trades a little bias for a large drop in variance.",
        "Feature engineering (aggregating rare categories) often beats a bigger model.",
      ],
    },
  ],
  readings: {
    foundations: [
      { title: "Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course", source: "Google for Developers", type: "course", level: "intro", note: "Free, practical course covering regression, loss and gradient descent." },
      { title: "Linear models", url: "https://scikit-learn.org/stable/modules/linear_model.html", source: "scikit-learn docs", type: "docs", level: "intermediate", note: "Ordinary least squares, ridge, lasso with code." },
      { title: "Gradient descent", url: "https://en.wikipedia.org/wiki/Gradient_descent", source: "Wikipedia", type: "article", level: "intro", note: "The optimisation idea behind most ML training." },
      { title: "Introduction to Machine Learning (6.036)", url: "https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/", source: "MIT OpenCourseWare", type: "course", level: "intermediate", note: "University-level notes and exercises." },
    ],
    classification: [
      { title: "Logistic regression (scikit-learn)", url: "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression", source: "scikit-learn docs", type: "docs", level: "intermediate", note: "Regularised logistic regression in practice." },
      { title: "Model evaluation: metrics and scoring", url: "https://scikit-learn.org/stable/modules/model_evaluation.html", source: "scikit-learn docs", type: "docs", level: "intermediate", note: "Precision, recall, ROC-AUC and more." },
      { title: "Precision and recall", url: "https://en.wikipedia.org/wiki/Precision_and_recall", source: "Wikipedia", type: "article", level: "intro", note: "Definitions with the classic search-engine example." },
      { title: "Confusion matrix", url: "https://en.wikipedia.org/wiki/Confusion_matrix", source: "Wikipedia", type: "article", level: "intro", note: "All the derived metrics in one table." },
    ],
    generalisation: [
      { title: "Cross-validation: evaluating estimator performance", url: "https://scikit-learn.org/stable/modules/cross_validation.html", source: "scikit-learn docs", type: "docs", level: "intermediate", note: "k-fold, stratified and time-series splits." },
      { title: "Bias–variance tradeoff", url: "https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff", source: "Wikipedia", type: "article", level: "intermediate", note: "Why simpler models can generalise better." },
      { title: "Regularization for simplicity (MLCC)", url: "https://developers.google.com/machine-learning/crash-course", source: "Google for Developers", type: "course", level: "intro", note: "L1/L2 regularisation with interactive exercises." },
    ],
    "neural-networks": [
      { title: "Neural Networks (video series)", url: "https://www.3blue1brown.com/topics/neural-networks", source: "3Blue1Brown", type: "video", level: "intro", note: "The clearest visual intuition for backpropagation." },
      { title: "Deep Learning (book)", url: "https://www.deeplearningbook.org/", source: "Goodfellow, Bengio & Courville", type: "book", level: "advanced", note: "Free online textbook; chapter 6 covers feedforward networks." },
      { title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762", source: "arXiv (Vaswani et al., 2017)", type: "paper", level: "advanced", note: "The transformer paper behind modern language models." },
      { title: "Perceptron", url: "https://en.wikipedia.org/wiki/Perceptron", source: "Wikipedia", type: "article", level: "intro", note: "History and the learning rule; why XOR needs hidden layers." },
    ],
    unsupervised: [
      { title: "Clustering (scikit-learn)", url: "https://scikit-learn.org/stable/modules/clustering.html", source: "scikit-learn docs", type: "docs", level: "intermediate", note: "k-means, DBSCAN and how to choose." },
      { title: "Principal component analysis", url: "https://en.wikipedia.org/wiki/Principal_component_analysis", source: "Wikipedia", type: "article", level: "intermediate", note: "The linear-algebra view of PCA." },
      { title: "Decomposition (PCA etc.)", url: "https://scikit-learn.org/stable/modules/decomposition.html", source: "scikit-learn docs", type: "docs", level: "intermediate", note: "Practical dimensionality reduction." },
    ],
    "responsible-ai": [
      { title: "Fairness (MLCC module)", url: "https://developers.google.com/machine-learning/crash-course", source: "Google for Developers", type: "course", level: "intro", note: "Types of bias and fairness metrics." },
      { title: "Fairness and Machine Learning (book)", url: "https://fairmlbook.org/", source: "Barocas, Hardt & Narayanan", type: "book", level: "advanced", note: "Free book on the limits and opportunities of fair ML." },
      { title: "Model Cards for Model Reporting", url: "https://arxiv.org/abs/1810.03993", source: "arXiv (Mitchell et al., 2019)", type: "paper", level: "intermediate", note: "A template for transparent model documentation." },
    ],
  },
  competencies: [
    { id: "regression", name: "Regression & optimisation", description: "Fit models with loss functions and gradient descent.", lessons: ["machine-learning/foundations/what-is-ml", "machine-learning/foundations/linear-regression-gradient-descent"] },
    { id: "classification", name: "Classification", description: "Build and threshold probabilistic classifiers.", lessons: ["machine-learning/classification/logistic-regression"] },
    { id: "evaluation", name: "Model evaluation", description: "Choose metrics that match the problem.", lessons: ["machine-learning/classification/evaluation-metrics", "machine-learning/generalisation/validation-bias-variance"] },
    { id: "generalisation", name: "Generalisation", description: "Diagnose and fix over/underfitting.", lessons: ["machine-learning/generalisation/overfitting-regularisation", "machine-learning/generalisation/validation-bias-variance"] },
    { id: "deep-learning", name: "Neural networks", description: "Explain perceptrons, layers and backprop.", lessons: ["machine-learning/neural-networks/perceptron", "machine-learning/neural-networks/deep-networks-backprop"] },
    { id: "unsupervised", name: "Unsupervised learning", description: "Cluster and reduce dimensions.", lessons: ["machine-learning/unsupervised/k-means", "machine-learning/unsupervised/dimensionality-reduction"] },
    { id: "responsible", name: "Responsible AI", description: "Identify bias, protect privacy and document models.", lessons: ["machine-learning/responsible-ai/bias-and-fairness", "machine-learning/responsible-ai/transparency-privacy"] },
  ],
};
