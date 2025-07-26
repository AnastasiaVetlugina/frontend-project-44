import startGame from "../index.js";
import getRandomNumber from "../getRandomNumber.js";

const gameRules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const makeQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? "yes" : "no";
  return [question, correctAnswer];
};

const gamePrime = () => startGame(gameRules, makeQuestionAndAnswer);

export default gamePrime;
