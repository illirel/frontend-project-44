import { rounds, runGames } from '../src/index.js';

const description = 'What is the result of the expression?';

function getRandomOperator() {
	const operators = ['+', '-', '*'];
	const randomIndex = Math.floor(Math.random() * operators.length);
	return operators[randomIndex];
}

function result(randomNumber1, operator, randomNumber2) {
	if (operator === '+') {
		return randomNumber1 + randomNumber2;
	} else if (operator === '-') {
		return randomNumber1 - randomNumber2;
	} else {
		return randomNumber1 * randomNumber2;
	}
}

function generateQuestions() {
	let questions = [];
	let i = 0;
	while (i < rounds) {
		const operator = getRandomOperator();
		const randomNumber1 = Math.floor(Math.random() * 100) + 1;
		const randomNumber2 = Math.floor(Math.random() * 100) + 1;
		questions.push([
			`${randomNumber1} ${operator} ${randomNumber2}`,
			result(randomNumber1, operator, randomNumber2).toString(),
		]);
		i++;
	}
	return questions;
}
function answer(question) {
	return question.toString();
}

export default function playCalc() {
	runGames(description, generateQuestions, answer);
}
