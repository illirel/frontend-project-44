import { rounds, runGames } from '../index.js';
import randomNum from '../Utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  return num % 2 === 0;
}

function randomQuestion() {
  const randomNumber = randomNum(11, 1);
  return [randomNumber, isEven(randomNumber) ? 'yes' : 'no'];
}

function generateQuestions() {
  const questions = [];
  for (let i = 0; i < rounds; i += 1) {
    questions.push(randomQuestion());
  }
  return questions;
}

export default function playEvenGame() {
  runGames(description, generateQuestions);
}
