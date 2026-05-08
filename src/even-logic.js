import readlineSync from 'readline-sync';
import { welcomeUser } from "../src/cli.js"; // Импортируем приветствие

export const runEvenGame = () => {
  const name = welcomeUser(); 
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const playRound = (round) => {
    return round === 0 
      ? console.log(`Congratulations, ${name}!`)
      : (() => {
          const number = Math.floor(Math.random() * 100);
          const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
          
          console.log(`Question: ${number}`);
          const userAnswer = readlineSync.question('Your answer: ');

          return userAnswer === correctAnswer
            ? (console.log('Correct!'), playRound(round - 1))
            : (console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`),
               console.log(`Let's try again, ${name}!`));
        })();
  };

  playRound(3);
};