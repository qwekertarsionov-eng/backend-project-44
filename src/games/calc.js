import { runGameEngine } from '../index.js';

const generateRounds = () => {
  const roundsCount = 3;
  const operators = [
    { symbol: '+', calculate: (a, b) => a + b },
    { symbol: '-', calculate: (a, b) => a - b },
    { symbol: '*', calculate: (a, b) => a * b },
  ];

  return Array.from({ length: roundsCount }, () => {
    const getRandomNum = () => Math.floor(Math.random() * 100);
    const a = getRandomNum();
    const b = getRandomNum();
    const operator = operators[Math.floor(Math.random() * operators.length)];

    return {
      key: `${a} ${operator.symbol} ${b}`,
      value: String(operator.calculate(a, b))
    };
  });
};

export default () => {
  const description = 'What is the result of the expression?';
  const rounds = generateRounds();
  runGameEngine(description, rounds);
};