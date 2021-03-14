const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissors = document.getElementById('scissors-btn');
const computerChoiceDisplay = document.getElementById('computer-pick');
const playerChoiceDisplay = document.getElementById('player-1-pick');
const winner = document.getElementById('winner');
const resetGame = document.getElementById('reset');
let playerChoice;
let computerChoice;
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = function () {
	computerChoice = choices[Math.floor(Math.random() * choices.length)];
	computerChoiceDisplay.textContent = `Computer's pick:  ${computerChoice}`;
};

rock.addEventListener('click', () => {
	playerChoice = 'rock';
	playerChoiceDisplay.textContent = 'Your pick: Rock';
	getComputerChoice();
	getWinner(playerChoice, computerChoice);
});

paper.addEventListener('click', () => {
	playerChoice = 'paper';
	playerChoiceDisplay.textContent = 'Your pick: Paper';
	getComputerChoice();
	getWinner(playerChoice, computerChoice);
});

scissors.addEventListener('click', () => {
	playerChoice = 'scissors';
	playerChoiceDisplay.textContent = 'Your pick: Scissors';
	getComputerChoice();
	getWinner(playerChoice, computerChoice);
});

const getWinner = function (player, computer) {
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

resetGame.addEventListener('click', () => {
	playerChoice = ' ';
	playerChoiceDisplay.textContent = '';
	computerChoiceDisplay.textContent = '';
	computerChoice = ' ';

	winner.textContent = 'The Winner is?';
});
