import readlineSync from 'readline-sync';
import { welcomeUser } from "./cli.js";

export const runGameEngine = (description, rounds) => {
  const name = welcomeUser(); 
  console.log(description);

  const playRound = (roundIndex) => {
    // Если прошли все раунды (индекс равен длине массива)
    if (roundIndex === rounds.length) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const { key, value } = rounds[roundIndex];
    
    console.log(`Question: ${key}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === value) {
      console.log('Correct!');
      return playRound(roundIndex + 1); // Переход к следующему объекту
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${value}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };

  playRound(0); // Стартуем с первого элемента массива (индекс 0)
};