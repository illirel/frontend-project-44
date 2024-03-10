  GNU nano 6.2                              games/brain-calc.js                                       #!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';




export function playGcd() {
        const name = greetUser();
        console.log('Find the greatest common divisor of given numbers.')

        let correctAnswersCount = 0;

        while (correctAnswersCount < 3) {
                


                if (userAnswer !== correctAnswer) {
                        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correc>                        console.log(`Let's try again, ${name}!`);
                        return;
                }

                console.log('Correct!');
                correctAnswersCount += 1;
        }

        console.log(`Congratulations, ${name}!`);
}
playGcd();
