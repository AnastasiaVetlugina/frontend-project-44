import * as readlineSync from "readline-sync";

const roundsCount = 3;

const startGame = (gameRules, makeQuestionAndAnswer) => {
  console.log("Welcome to the Brain Games!");
  const playerName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${playerName}!`);
  console.log(gameRules);

  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = makeQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
