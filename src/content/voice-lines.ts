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
};

export const ALL_FIXED_LINES = [...PRAISE, ...ENCOURAGE, ...Object.values(EXPLORE_LINES)];
