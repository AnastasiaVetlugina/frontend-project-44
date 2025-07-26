import startGame from "../index.js";
import getRandomNumber from "../getRandomNumber.js";

const gameRules = "What is the result of the expression?";
const operators = ["+", "-", "*"];

const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      return undefined;
  }
};

const makeQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const correctAnswer = getCorrectAnswer(num1, num2, operator);
  return [`${num1} ${operator} ${num2}`, String(correctAnswer)];
};

const gameCalc = () => startGame(gameRules, makeQuestionAndAnswer);

export default gameCalc;
