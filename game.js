console.log('Lets get ready to RUMBLE!');
console.log('Type "game()" in the console to play!')

let playerScore = 0;
let computerScore = 0;

function game() {

    let playerSelection = prompt('Choose rock, paper, or scissors!').toLowerCase();

    function getComputerChoice() {
        return computerSelection = Math.floor(Math.random() * 3);
    }
    console.log(playerSelection);
    console.log(getComputerChoice());

    // Computer Selection Key:
    // 0: Rock
    // 1: Paper
    // 2: Scissors

    function playRound(playerSelection, computerSelection) {
        if (playerSelection==='rock' && computerSelection===0) {
            console.log("Computer selects Rock")
                return "Tie! You both chose rock.";
            }
        else if (playerSelection==='paper' && computerSelection===0) {
                console.log("Computer selects Rock")
                return "You win! Paper beats rock.", playerScore++;
            }
        else if (playerSelection==='scissors' && computerSelection===0) {
                console.log("Computer selects Rock")
                return "You lose! Rock beats scissors.", computerScore++;
            }
        else if (playerSelection==='rock' && computerSelection===1) {
                console.log("Computer selects Paper")
                return "You lose! Paper beats rock.", computerScore++;
            }
        else if (playerSelection==='paper' && computerSelection===1) {
                console.log("Computer selects Paper")
                return "Tie! You both chose paper.";
            }
        else if (playerSelection==='scissors' && computerSelection===1) {
                console.log("Computer selects Paper")
                return "You win! Scissors beats paper.", playerScore++;
            }
        else if (playerSelection==='rock' && computerSelection===2) {
                console.log("Computer selects Scissors")
                return "You win! Rock beats scissors.", playerScore++;
            }
        else if (playerSelection==='paper' && computerSelection===2) {
                console.log("Computer selects Scissors")
                return "You lose! Scissors beats paper.", computerScore++;
            }
        else if (playerSelection==='scissors' && computerSelection===2) ;{
                console.log("Computer selects Scissors")
                return "Tie! You both chose scissors.";
            }
    }

    console.log(playRound(playerSelection, computerSelection));
    console.log('Your score: ',playerScore);
    console.log('Opponent Score: ',computerScore);

    if (playerScore===3) {
            console.log("You win!");
        }
    else if (computerScore===3) {
            console.log("You lose!")
        }
}