import startGame from "../index.js";
import getRandomNumber from "../getRandomNumber.js";

const gameRules = "What number is missing in the progression?";

const makeQuestionAndAnswer = () => {
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 10);
  const start = getRandomNumber(1, 100 - step * (length - 1));
  const hidden = getRandomNumber(0, length - 1);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const answer = progression[hidden];
  progression[hidden] = "..";
  return [progression.join(" "), String(answer)];
};

const gameProgression = () => startGame(gameRules, makeQuestionAndAnswer);

export default gameProgression;
