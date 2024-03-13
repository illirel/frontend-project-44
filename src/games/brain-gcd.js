import { rounds, runGames } from '../index.js';
import randomNum from '../Utils.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGCD(randomNumber1, randomNumber2) {
  let num1 = randomNumber1;
  let num2 = randomNumber2;
  while (num2 !== 0) {
    const gcd = num2;
    num2 = num1 % num2;
    num1 = gcd;
  }
  return num1;
}

function randomQuestion() {
  const randomNumber1 = randomNum(11, 1);
  const randomNumber2 = randomNum(11, 1);
  return [`${randomNumber1} ${randomNumber2}`, findGCD(randomNumber1, randomNumber2).toString()];
}

function generateQuestions() {
  const questions = [];
  for (let i = 0; i < rounds; i += 1) {
    questions.push(randomQuestion());
  }
  return questions;
}

export default function playGcd() {
  runGames(description, generateQuestions);
}
