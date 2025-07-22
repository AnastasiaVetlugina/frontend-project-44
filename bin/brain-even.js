#!/usr/bin/env node
import readlineSync from "readline-sync";

const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 101);

const correctRounds = 3;

function startGame() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(exercise);

  let correctAnswers = 0;

  while (correctAnswers < correctRounds) {
    const randomNum = getRandomNumber();
    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();
    const numberIsEven = isEven(randomNum);
    const correctAnswer = numberIsEven ? "yes" : "no";

    if (
      (numberIsEven && userAnswer === "yes") ||
      (!numberIsEven && userAnswer === "no")
    ) {
      console.log("Correct!");
      correctAnswers++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      // correctAnswers = 0;
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

startGame();
