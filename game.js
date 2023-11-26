let playerScore = 0;
let computerScore = 0;
let playerSelection = null;
let computerSelection = null;

//Get buttons and score displays from doc
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundReport = document.querySelector('#report');
const gameUpdate = document.querySelector('#message');
const winner = document.querySelector('#winner');
const reset = document.querySelector('#reset')

//Buttons create player selection

buttonRock.addEventListener('click', () => {
    playerSelection = 0;
    computerSelection = Math.floor(Math.random() * 3);
    playRound();
});
buttonPaper.addEventListener('click', () => {
    playerSelection = 1;
    computerSelection = Math.floor(Math.random() * 3);
    playRound();
});
buttonScissors.addEventListener('click', () => {
    playerSelection = 2;
    computerSelection = Math.floor(Math.random() * 3);
    playRound();
});

reset.addEventListener('click', () => {
    location.reload();
})

function playRound () {
    if (
        (playerSelection === 0 && computerSelection === 2) ||
        (playerSelection === 1 && computerSelection === 0) ||
        (playerSelection === 2 && computerSelection === 1)
    ) {
        playerScore++;
        roundReport.textContent = 'Point to Player!';
    } else if (
        (playerSelection === 0 && computerSelection === 1) ||
        (playerSelection === 1 && computerSelection === 2) ||
        (playerSelection === 2 && computerSelection === 0)
    ) {
        computerScore++;
        roundReport.textContent = 'Point to Computer!';
    } else {
        roundReport.textContent = 'Tie!';
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerSelection === 0) {
        playerSelection = 'ROCK';
    } else if (playerSelection === 1) {
        playerSelection = 'PAPER';
    } else {
        playerSelection = 'SCISSORS';
    }

    if (computerSelection === 0) {
        computerSelection = 'ROCK';
    } else if (computerSelection === 1) {
        computerSelection = 'PAPER';
    } else {
        computerSelection = 'SCISSORS';
    }

    gameUpdate.textContent = ('You chose ' + playerSelection + ' and Computer chose ' + computerSelection)

    if (computerScore === 3) {
        winner.textContent = 'Computer Wins!';
        playerScore = 0;
        computerScore = 0;
    }
    if (playerScore === 3) {
        winner.textContent = 'You win!';
        playerScore = 0;
        computerScore = 0;
    }
}