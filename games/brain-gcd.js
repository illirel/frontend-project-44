import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';

function findGCD(num1, num2) {
	while (num2 !== 0) {
		let GCD = num2;
		num2 = num1 % num2;
		num1 = GCD;
	}

	return num1;
}


export function playGcd() {
        const name = greetUser();
        console.log('Find the greatest common divisor of given numbers.')

        let correctAnswersCount = 0;

        while (correctAnswersCount < 3) {
		const randomNumber1 = Math.floor(Math.random() * 100) + 1;
		const randomNumber2 = Math.floor(Math.random() * 100) + 1;
		console.log(`Question: ${randomNumber1} ${randomNumber2}`);
		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = findGCD(randomNumber1, randomNumber2);


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

