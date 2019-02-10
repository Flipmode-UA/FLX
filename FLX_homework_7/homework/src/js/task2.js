let confirmation = confirm('Do you want to play a game?');
if (confirmation) {
	let playAgain;
	let min = 0;
	let max = 5;
	let totalPrize = 0;
	let startingPrize = 10;
	let currentPossiblePrize;
	let template;
	let userGuess;
	do {
		playAgain = false;
		let currentNumber = Math.floor(Math.random() * (max - min + 1));
		currentPossiblePrize = startingPrize;
		let currentAttempt = 3;
			for (currentAttempt = 3; currentAttempt > 0; currentAttempt--) {
				template = `Enter a number from ${min} to ${max}
Attempts left: ${currentAttempt}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${currentPossiblePrize}$`;
				userGuess = Number(prompt(template, ''));
				if (userGuess===currentNumber) {
					playAgain = confirm(`Congratulation! Your prize is: ${totalPrize+currentPossiblePrize}$
Do you want to continue?`) ? (startingPrize = startingPrize * 3, max *=2) : 
					(alert(`Thank you for a game. Your prize is: ${totalPrize}$`),
					playAgain = confirm (`Do You want to play again?`));
					totalPrize +=currentPossiblePrize;
					break;
				} else {
					currentPossiblePrize = Math.floor(currentPossiblePrize/2);
				}
				if (userGuess!==currentNumber && currentAttempt===1) {
					alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
					playAgain = confirm('Do You want to play again?') ? 
					(max = 5, totalPrize = 0, startingPrize = 10) : false;
				}
			}
	}
	while (playAgain);
} else {
	alert('You did not become a millionaire, but can.');
}