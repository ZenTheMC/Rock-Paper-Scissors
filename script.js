function computerPlay(Rock, Paper, Scissors) {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random(); 
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    let paperbeatrockwin = "You win, Paper beats Rock";
    let rockbeatscissorswin = "You win, Rock beats Scissors";
    let scissorsbeatpaperwin = "You win, Scissors beats Paper";
    let paperbeatrocklose = "You lose, Paper beats Rock";
    let rockbeatscissorslose = "You lose, Rock beats Scissors";
    let scissorsbeatpaperlose = "You lose, Scissors beats Paper";
    let draw = "It's a draw, neither player won";

    if (playerSelection === computerSelection) {
        return draw;
    } else if ((playerSelection = "Paper") && (computerSelection = "Rock")) {
        return paperbeatrockwin;
    } else if ((playerSelection = "Rock") && (computerSelection = "Scissors")) {
        return rockbeatscissorswin;
    } else if ((playerSelection = "Scissors") && (computerSelection = "Paper")) {
        return scissorsbeatpaperwin;
    } else if ((computerSelection = "Paper") && (playerSelection = "Rock")) {
        return paperbeatrocklose;
    } else if ((computerSelection = "Rock") && (playerSelection = "Scissors")) {
        return rockbeatscissorslose;
    } else () {
        return scissorsbeatpaperlose;
    }
}

// Function to null case-sensitivity for inputs