import { generateRandomNumber } from '../utils.js';
import runGame from '../engine.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [
    number,
    correctAnswer,
  ];
};

const startEvenGame = () => runGame(DESCRIPTION, generateRound);

export default startEvenGame;
