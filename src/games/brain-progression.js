import { rounds, runGames } from '../index.js';
import randomNum from '../Utils.js';

const description = 'What number is missing in the progression?';

function randomQuestion() {
  const randomLegth = randomNum(11, 6);
  const randomIndex = randomNum(randomLegth, 0);
  const randomStep = randomNum(11, 1);

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
  for (let i = 0; i < rounds; i += 1) {
    questions.push(randomQuestion());
  }
  return questions;
}

export default function playProgression() {
  runGames(description, generateQuestions);
}
