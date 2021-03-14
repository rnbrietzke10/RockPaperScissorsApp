const computerChoiceDisplay = document.getElementById('computer-pick');
const playerChoiceDisplay = document.getElementById('player-1-pick');
const winner = document.getElementById('winner');
let playerChoice;
let computerChoice;
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = function () {
	computerChoice = choices[Math.floor(Math.random() * choices.length)];
	computerChoiceDisplay.textContent = `Computer's pick:  ${computerChoice}`;
};

document.getElementById('rock-btn').addEventListener('click', () => {
	playerChoice = 'rock';
	playerChoiceDisplay.textContent = 'Your pick: Rock';
	getComputerChoice();
	determineWinner(playerChoice, computerChoice);
});

document.getElementById('paper-btn').addEventListener('click', () => {
	playerChoice = 'paper';
	playerChoiceDisplay.textContent = 'Your pick: Paper';
	getComputerChoice();
	determineWinner(playerChoice, computerChoice);
});

document.getElementById('scissors-btn').addEventListener('click', () => {
	playerChoice = 'scissors';
	playerChoiceDisplay.textContent = 'Your pick: Scissors';
	getComputerChoice();
	determineWinner(playerChoice, computerChoice);
});

const determineWinner = function (player, computer) {
	if (
		(player === 'scissors' && computer === 'rock') ||
		(player === 'paper' && computer === 'scissors') ||
		(player === 'rock' && computer === 'paper')
	) {
		winner.textContent = 'Computer Wins!';
	} else if (
		(player === 'paper' && computer === 'rock') ||
		(player === 'scissors' && computer === 'paper') ||
		(player === 'rock' && computer === 'scissors')
	) {
		winner.textContent = 'You Win!';
	} else if (
		(player === 'rock' && computer === 'rock') ||
		(player === 'scissors' && computer === 'scissors') ||
		(player === 'paper' && computer === 'paper')
	) {
		winner.textContent = "It's a Draw!";
	}
};

document.getElementById('reset').addEventListener('click', () => {
	playerChoice = ' ';
	playerChoiceDisplay.textContent = '';
	computerChoiceDisplay.textContent = '';
	computerChoice = ' ';
	winner.textContent = 'The Winner is?';
});
