import { generateRandomNumber } from '../utils.js';
import runGame from '../engine.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = generateRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [
    number,
    correctAnswer,
  ];
};

const startPrimeGame = () => runGame(DESCRIPTION, generateRound);

export default startPrimeGame;
