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

function playRound () {
    if (
        (playerSelection === 0 && computerSelection === 2) ||
        (playerSelection === 1 && computerSelection === 0) ||
        (playerSelection === 2 && computerSelection === 1)
    ) {
        playerScore++;
        console.log('You win!');
    } else if (
        (playerSelection === 0 && computerSelection === 1) ||
        (playerSelection === 1 && computerSelection === 2) ||
        (playerSelection === 2 && computerSelection === 0)
    ) {
        computerScore++;
        console.log('You lose!');
    } else {
        console.log('Tie!')
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    console.log('You chose ' + playerSelection + ' and Computer chose ' + computerSelection)
}