import { rounds, runGames } from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

function findGCD(num1, num2) {
	while (num2 !== 0) {
		let GCD = num2;
		num2 = num1 % num2;
		num1 = GCD;
	}

	return num1;
}

function generateQuestions() {
	let questions = [];
	let i = 0;
	while (i < rounds) {
		const randomNumber1 = Math.floor(Math.random() * 10) + 1;
		const randomNumber2 = Math.floor(Math.random() * 10) + 1;
		questions.push([
			`${randomNumber1} ${randomNumber2}`,
			findGCD(randomNumber1, randomNumber2).toString(),
		]);
		i++;
	}
	return questions;
}

export default function playGcd() {
	runGames(description, generateQuestions);
}
