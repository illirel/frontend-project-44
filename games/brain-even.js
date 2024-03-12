import { rounds, runGames } from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  return num % 2 === 0;
}
function generateQuestions() {
  const questions = [];
  let i = 0;
  while (i < rounds) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    questions.push([randomNumber, isEven(randomNumber) ? 'yes' : 'no']);
    i += 1;
  }
  return questions;
}

export default function playEvenGame() {
  runGames(description, generateQuestions);
}
