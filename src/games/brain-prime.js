import randomNum from '../Utils.js';
import { rounds, runGames } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function randomQuestion() {
  const randomNumber = randomNum(100, 1);
  return [randomNumber, isPrime(randomNumber) ? 'yes' : 'no'];
}

function generateQuestions() {
  const questions = [];
  for (let i = 0; i < rounds; i += 1) {
    questions.push(randomQuestion());
  }
  return questions;
}

export default function playPrime() {
  runGames(description, generateQuestions);
}
