import { rounds, runGames } from '../src/index.js';

const description = 'What is the result of the expression?';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function result(randomNumber1, operator, randomNumber2) {
  if (operator === '+') {
    return randomNumber1 + randomNumber2;
  }
  if (operator === '-') {
    return randomNumber1 - randomNumber2;
  }
  return randomNumber1 * randomNumber2;
}

function generateQuestions() {
  const questions = [];
  let i = 0;
  while (i < rounds) {
    const operator = getRandomOperator();
    const randomNumber1 = Math.floor(Math.random() * 11) + 1;
    const randomNumber2 = Math.floor(Math.random() * 11) + 1;
    questions.push([
      `${randomNumber1} ${operator} ${randomNumber2}`,
      result(randomNumber1, operator, randomNumber2).toString(),
    ]);
    i += 1;
  }
  return questions;
}

export default function playCalc() {
  runGames(description, generateQuestions);
}
