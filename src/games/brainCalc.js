import { generateRandomNumber } from '../utils.js';
import runGame from '../engine.js';

const DESCRIPTION = 'What is the result of the expression?';

const Operator = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case Operator.PLUS:
      return a + b;
    case Operator.MINUS:
      return a - b;
    case Operator.MULTIPLY:
      return a * b;
    default:
      throw new Error('Unexpected math operator');
  }
};

const getRandomOperator = () => {
  const operators = Object.values(Operator);
  const index = generateRandomNumber(0, operators.length - 1);
  return operators[index];
};

const generateRound = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operator);

  return [
    question,
    correctAnswer.toString(),
  ];
};

const startCalcGame = () => runGame(DESCRIPTION, generateRound);

export default startCalcGame;
