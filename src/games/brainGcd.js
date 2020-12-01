import { generateRandomNumber } from '../utils.js';
import runGame from '../engine.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateRound = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);

  return [
    question,
    correctAnswer.toString(),
  ];
};

const startGcdGame = () => runGame(DESCRIPTION, generateRound);

export default startGcdGame;
