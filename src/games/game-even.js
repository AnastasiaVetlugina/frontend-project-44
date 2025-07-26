import startGame from "../index.js";
import getRandomNumber from "../getRandomNumber.js";

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const makeQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return [question, correctAnswer];
};

const gameEven = () => {
  startGame(gameRules, makeQuestionAndAnswer);
};

export default gameEven;
