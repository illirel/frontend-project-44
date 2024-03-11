import runGames from '../src/index.js';

function generateQuestions() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

function isEven(num) {
    return num % 2 === 0;
}

function answer(question) {
    return isEven(question) ? 'yes' : 'no';
}

export default function playEvenGame() {
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    runGames(description, generateQuestions, answer);
}
