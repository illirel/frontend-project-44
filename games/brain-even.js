import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';


function isEven(num) {
	return num % 2 === 0;
}

export function playEvenGame(){
	const name = greetUser();

	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	let correctAnswerCount = 0;

	while (correctAnswerCount < 3) {

		const randomNumber = Math.floor(Math.random() * 100) + 1;
		console.log(`Question: ${randomNumber}`);
		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

		if (userAnswer !== correctAnswer){
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
			console.log(`Let's try again, ${name}!`);
			return;
		}
		console.log(`Correct!`);
		correctAnswerCount += 1;
	}
	console.log(`Congratulations, ${name}!`);
}


