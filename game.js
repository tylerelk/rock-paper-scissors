console.log('Lets get ready to RUMBLE!');
console.log('Type "game()" in the console to play!')

let playerScore = 0;
let computerScore = 0;
console.log('Your score: ',playerScore);
console.log('Opponent Score: ',computerScore);

function game() {
    let playerSelection = prompt('Choose rock, paper, or scissors!').toLowerCase()

    function getComputerChoice() {
        return computerSelection = Math.floor(Math.random() * 3)
    }
    console.log(playerSelection)
    console.log(getComputerChoice())

    // Computer Selection Key:
    // 0: Rock
    // 1: Paper
    // 2: Scissors

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === 'rock' && computerSelection === 0)
            return 'Tie! You both chose Rock!';
        else if (playerSelection === 'rock' && computerSelection === 1)
            return 'You lose! Paper beats Rock!'; ++computerScore
        else if (playerSelection === 'rock' && computerSelection === 2)
            return 'You win! Rock beats Scissors!'; ++playerScore
        else if (playerSelection === 'paper' && computerSelection === 0)
            return 'You win! Paper beats Rock!'; ++playerScore
        else if (playerSelection === 'paper' && computerSelection === 1)
            return 'Tie! You both chose Paper!';
        else if (playerSelection === 'paper' && computerSelection === 2)
            return 'You lose! Scissors beats Paper!'; ++computerScore
        else if (playerSelection === 'scissors' && computerSelection === 0)
            return 'You lose! Rock beats Scissors!'; ++computerScore
        else if (playerSelection === 'scissors' && computerSelection === 1)
            return 'You win! Scissors beats Paper!'; ++playerScore
        else (playerSelection === 'scissors' && computerSelection === 2)
            return 'Tie! You both chose Scissors!';
    }

    console.log(playRound(playerSelection, computerSelection));
    console.log('Your score: ',playerScore);
    console.log('Opponent Score: ',computerScore);
    if ((playerScore + computerScore) === 5) {
        console.log('Game Over!')
    }
    else console.log('Next Round!')
}