/**
 * Fixed sentences Questy says (Explore mode UI, praise, games). Every line here
 * is pre-rendered by `npm run generate-voice`, together with all early-learning
 * lesson text and questions. Use these exact strings with `say()` so clips match.
 */
export const PRAISE = [
  "Great job!",
  "You did it!",
  "Wow, well done!",
  "Super star!",
  "Amazing work!",
  "You’re so clever!",
  "Hooray! That’s right!",
];

export const ENCOURAGE = [
  "Good try! Let’s learn it together.",
  "Oops! That’s okay, trying is how we learn.",
  "Nice try! Have another go.",
  "Almost! You’re getting better every time.",
];

export const EXPLORE_LINES = {
  welcome: "Hoot hoot! Hi, I’m Questy. What shall we learn today?",
  pickAdventure: "Tap a picture to start an adventure!",
  continue: "Let’s keep going! Tap the big button.",
  lessonDone: "Hooray! You finished the lesson and earned a sticker!",
  sticker: "You got a new sticker! Let’s look at your sticker book.",
  tryAgain: "Let’s try that again. You can do it!",
  listen: "Listen carefully, then tap the answer.",
  readyQuiz: "Your turn! Let’s answer some questions.",
  flipCards: "Let’s play flip cards! Tap the card to turn it over.",
  bye: "See you soon, friend! Keep exploring!",
  grownUp: "Please ask a grown-up to help with this.",
  chooseCourse: "Which adventure do you want to play? Tap a picture!",
  letsGo: "Let’s go! Tap the big green button to start.",
  mapIntro: "This is your map. Each circle is a lesson. Let’s visit the next one!",
  stickerBook: "This is your sticker book. Try new things to collect them all!",
  games: "Let’s play a game!",
  allDone: "Wow! You finished every lesson here. You’re a superstar!",
};

export const LETTER_WORDS: Record<string, string> = { A: "Apple", B: "Ball", C: "Cat", D: "Dog", E: "Egg", F: "Fish", G: "Goat", H: "Hat", I: "Igloo", J: "Jam", K: "Kite", L: "Lion", M: "Moon", N: "Nest", O: "Owl", P: "Pig", Q: "Queen", R: "Rain", S: "Sun", T: "Tree", U: "Umbrella", V: "Van", W: "Whale", X: "Xylophone", Y: "Yak", Z: "Zebra" };
export const SHAPE_NAMES = ["circle", "square", "triangle", "star", "heart", "rectangle", "diamond", "oval"] as const;

/** Kids game prompts — templates shared by the games and the clip generator. */
export const GAME_LINES = {
  balloons: (n: number) => `Pop ${n} balloon${n > 1 ? "s" : ""}!`,
  letter: (l: string, word: string) => `Find the letter ${l}. ${l} is for ${word}.`,
  shape: (name: string) => `Tap the ${name}!`,
  sum: (a: number, op: "+" | "−", b: number) => `What is ${a} ${op === "+" ? "plus" : "minus"} ${b}?`,
  pairs: "Find the matching pairs!",
  odd: "Which one doesn’t belong?",
  great: "Amazing! You are a superstar!",
  again: "Well played! Let's play again!",
};

export const ALL_FIXED_LINES = [...PRAISE, ...ENCOURAGE, ...Object.values(EXPLORE_LINES), GAME_LINES.pairs, GAME_LINES.odd, GAME_LINES.great, GAME_LINES.again];
