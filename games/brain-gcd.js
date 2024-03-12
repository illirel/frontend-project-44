import { rounds, runGames } from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGCD(number1, number2) {
  while (number2 !== 0) {
    const GCD = number2;
    // eslint-disable-next-line no-param-reassign
    number2 = number1 % number2;
    // eslint-disable-next-line no-param-reassign
    number1 = GCD;
  }

  return number1;
}

function generateQuestions() {
  const questions = [];
  let i = 0;
  while (i < rounds) {
    const randomNumber1 = Math.floor(Math.random() * 10) + 1;
    const randomNumber2 = Math.floor(Math.random() * 10) + 1;
    questions.push([`${randomNumber1} ${randomNumber2}`, findGCD(randomNumber1, randomNumber2).toString()]);
    i += 1;
  }
  return questions;
}

export default function playGcd() {
  runGames(description, generateQuestions);
}
