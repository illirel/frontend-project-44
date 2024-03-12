import { rounds, runGames } from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function generateQuestions() {
  const questions = [];
  let i = 0;
  while (i < rounds) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    questions.push([randomNumber, isPrime(randomNumber)]);
    i += 1;
  }
  return questions;
}

export default function playPrime() {
  runGames(description, generateQuestions);
}
