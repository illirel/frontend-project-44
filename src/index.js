import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

const rounds = 3;

function runGames(description, generateQuestions) {
	const name = greetUser();

	console.log(description);

	const question = generateQuestions();

	let correctAnswerCount = 0;
	while (correctAnswerCount < question.length) {
		console.log(`Question: ${question[correctAnswerCount][0]}`);

		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = question[correctAnswerCount][1];

		if (userAnswer !== correctAnswer) {
			console.log(
				`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
			);
			console.log(`Let's try again, ${name}!`);
			return;
		}
		console.log(`Correct!`);
		correctAnswerCount += 1;
	}
	console.log(`Congratulations, ${name}!`);
}

export { rounds, runGames };
