import { rounds, runGames } from '../src/index.js';

const description = 'What number is missing in the progression?';

function randomProgression() {
	const randomLegth = Math.floor(Math.random() * 11) + 5;
	const randomIndex = Math.floor(Math.random() * (randomLegth + 1)) + 1;
	const randomStep = Math.floor(Math.random() * 11) + 1;

	let array = [];
	let j = 1;
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
		j++;
	}
	return [array.join(' '), result.toString()];
}

function generateQuestions() {
	let questions = [];
	let i = 0;
	while (i < rounds) {
		questions.push(randomProgression());
		i++;
	}
	return questions;
}

export default function playProgression() {
	runGames(description, generateQuestions);
}
