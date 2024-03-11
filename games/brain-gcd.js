import runGames from '../src/index.js';

function findGCD(num1, num2) {
	while (num2 !== 0) {
		let GCD = num2;
		num2 = num1 % num2;
		num1 = GCD;
	}

	return num1;
}

function generateQuestions() {
	const randomNumber1 = Math.floor(Math.random() * 100) + 1;
	const randomNumber2 = Math.floor(Math.random() * 100) + 1;
	return `${randomNumber1} ${randomNumber2}`;
}

function answer(question) {
	const [num1, num2] = question.split(' ').map(Number);
	return (findGCD(num1, num2)).toString();
}
export default function playGcd() {
        const description = 'Find the greatest common divisor of given numbers.';
 	runGames(description, generateQuestions, answer);
}

