import runGames from '../src/index.js';


	function getRandomOperator() {
		const operators = ['+', '-', '*'];
		const randomIndex = Math.floor(Math.random() * operators.length);
		return operators[randomIndex];
}


	function generateQuestions() {
		const operator = getRandomOperator();
        	const randomNumber1 = Math.floor(Math.random() * 100) + 1;
        	const randomNumber2 = Math.floor(Math.random() * 100) + 1;
		return `${randomNumber1} ${operator} ${randomNumber2}`;
}

	function answer(question) {
		return (eval(question)).toString();
}

export default function playCalc() {
	const description = 'What is the result of the expression?';
	runGames(description, generateQuestions, answer);
}


