import { rounds, runGames } from '../src/index.js';

const description = 'What number is missing in the progression?';

function randomProgression() {
  const randomLegth = Math.floor(Math.random() * 11) + 6;
  const randomIndex = Math.floor(Math.random() * randomLegth);
  const randomStep = Math.floor(Math.random() * 11) + 1;

  const array = [];
  let j = 0;
  let num = randomStep;
  let result = 0;
  while (j < randomLegth) {
    if (j === randomIndex) {
      array.push('..');
      result = num;
    } else {
      array.push(num);
    }
    num += randomStep;
    j += 1;
  }
  return [array.join(' '), result.toString()];
}

function generateQuestions() {
  const questions = [];
  let i = 0;
  while (i < rounds) {
    questions.push(randomProgression());
    i += 1;
  }
  return questions;
}

export default function playProgression() {
  runGames(description, generateQuestions);
}
