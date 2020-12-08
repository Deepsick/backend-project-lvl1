import { generateRandomNumber } from '../utils.js';
import runGame from '../engine.js';

const HIDDEN_MARK = '..';
const DESCRIPTION = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => (
  new Array(length)
    .fill(null)
    .map((_, index) => start + step * index)
);

const getQuestion = (progression, hiddenElementIndex) => {
  const copiedProgression = [...progression];
  copiedProgression[hiddenElementIndex] = HIDDEN_MARK;
  return copiedProgression.join(' ');
};

const generateRound = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const progressionStart = generateRandomNumber();
  const progressionStep = generateRandomNumber();

  const progression = generateProgression(progressionStart, progressionStep, progressionLength);
  const hiddenElementIndex = generateRandomNumber(0, progressionLength - 1);
  const question = getQuestion(progression, hiddenElementIndex);
  const correctAnswer = progression[hiddenElementIndex];

  return [
    question,
    correctAnswer.toString(),
  ];
};

const startGcdGame = () => runGame(DESCRIPTION, generateRound);

export default startGcdGame;
