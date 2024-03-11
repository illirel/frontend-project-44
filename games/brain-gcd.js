
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';




export function playGcd() {
        const name = greetUser();
        console.log('Find the greatest common divisor of given numbers.')

        let correctAnswersCount = 0;

        while (correctAnswersCount < 3) {
		const randomNumber1 = Math.floor(Math.random() * 100) + 1;
		const randomNumber2 = Math.floor(Math.random() * 100) + 1;
		console.log(`Question: ${randomNumber1} ${randomNumber2}`);
		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = 


                if (userAnswer !== correctAnswer) {
                        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correc>                        console.log(`Let's try again, ${name}!`);
                        return;
                }

                console.log('Correct!');
                correctAnswersCount += 1;
        }

        console.log(`Congratulations, ${name}!`);
}

