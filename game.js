console.log('Lets get ready to RUMBLE!');

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
        return 'You lose! Paper beats Rock!';
    else if (playerSelection === 'rock' && computerSelection === 2)
        return 'You win! Rock beats Scissors!';
    else if (playerSelection === 'paper' && computerSelection === 0)
        return 'You win! Paper beats Rock!';
    else if (playerSelection === 'paper' && computerSelection === 1)
        return 'Tie! You both chose Paper!';
    else if (playerSelection === 'paper' && computerSelection === 2)
        return 'You lose! Scissors beats Paper!';
    else if (playerSelection === 'scissors' && computerSelection === 0)
        return 'You lose! Rock beats Scissors!';
    else if (playerSelection === 'scissors' && computerSelection === 1)
        return 'You win! Scissors beats Paper!';
    else if (playerSelection === 'scissors' && computerSelection === 2)
        return 'Tie! You both chose Scissors!';
}

console.log(playRound(playerSelection,computerSelection));