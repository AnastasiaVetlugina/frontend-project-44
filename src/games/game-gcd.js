import startGame from "../index.js";
import getRandomNumber from "../getRandomNumber.js";

const gameRules = "Find the greatest common divisor of given numbers.";

const getCorrectAnswer = (num1, num2) => {
  while (num2) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const makeQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const correctAnswer = getCorrectAnswer(num1, num2);
  return [`${num1} ${num2}`, String(correctAnswer)];
};

const gameGCD = () => startGame(gameRules, makeQuestionAndAnswer);

export default gameGCD;
