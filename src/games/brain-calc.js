import randomNum from '../Utils.js';
import { rounds, runGames } from '../index.js';

const description = 'What is the result of the expression?';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = randomNum(operators.length, 0);
  return operators[randomIndex];
}

function result(number1, operator, number2) {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '*') {
    return number1 * number2;
  }
  throw Error;
}

function randomQuestion() {
  const operator = getRandomOperator();
  const randomNumber1 = randomNum(11, 1);
  const randomNumber2 = randomNum(11, 1);
  return [`${randomNumber1} ${operator} ${randomNumber2}`, result(randomNumber1, operator, randomNumber2).toString()];
}

function generateQuestions() {
  const questions = [];
  for (let i = 0; i < rounds; i += 1) {
    questions.push(randomQuestion());
  }
  return questions;
}

export default function playCalc() {
  runGames(description, generateQuestions);
}
