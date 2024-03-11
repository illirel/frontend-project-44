import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';



  function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}



export function playCalc() {
	const name = greetUser();
	console.log('What is the result of the expression?')

	let correctAnswersCount = 0;

	while (correctAnswersCount < 3) {
		const operator = getRandomOperator();
		const randomNumber1 = Math.floor(Math.random() * 100) + 1;
		const randomNumber2 = Math.floor(Math.random() * 100) + 1;
		console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = eval(`${randomNumber1} ${operator} ${randomNumber2}`);


		if (userAnswer != correctAnswer) {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}

		console.log('Correct!');
		correctAnswersCount += 1;
	}

  	console.log(`Congratulations, ${name}!`);
}

