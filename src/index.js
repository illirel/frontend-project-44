import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

export default function runGames(description, generateQuestions, answer) {
    const name = greetUser();

    console.log(description);

    let correctAnswerCount = 0;

    while (correctAnswerCount < 4) {
        const question = generateQuestions();
        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = answer(question);

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
