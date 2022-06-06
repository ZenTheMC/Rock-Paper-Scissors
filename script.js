function computerPlay() {
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

function game() {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    while (roundsPlayed < 5) {

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
            } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
                playerWin++;
                return paperbeatrockwin;
            } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
                playerWin++;
                return rockbeatscissorswin;
            } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
                playerWin++;
                return scissorsbeatpaperwin;
            } else if ((computerSelection === "Paper") && (playerSelection === "Rock")) {
                computerWin++;
                return paperbeatrocklose;
            } else if ((computerSelection === "Rock") && (playerSelection === "Scissors")) {
                computerWin++;
                return rockbeatscissorslose;
            } else {
                computerWin++;
                return scissorsbeatpaperlose;
            }
        }   

        // Have the computer pick a move
        const computerSelection = computerPlay();
        
        // Have the player pick a move
        let playerSelection = prompt("Player, please type in your selection");
        
        // Play the round and print the result to the console
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        
        // Increment the number of rounds played
        roundsPlayed++;
    }

    if (playerWin > computerWin) {
        gameWinner = "YOU WIN";
    } else if (playerWin === computerWin) {
        gameWinner = "IT IS A DRAW";
    } else {
        gameWinner = "COMPUTER WINS";
    }

    console.log("The final winner is: " + gameWinner);
}

game();
