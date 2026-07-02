let numberChoice;
let humanScore = 0;
let computerScore = 0;
let humanScoreDisplay = document.querySelector(".human-score");
let computerScoreDisplay = document.querySelector(".computer-score");
let win = document.querySelector(".win");
let lose  = document.querySelector(".lose");

humanScoreDisplay.style.display = "none";
computerScoreDisplay.style.display = "none";
win.style.display = "none";
lose.style.display = "none";

function getComputerChoice() {
    numberChoice = Math.floor(Math.random() * 3);
    if (numberChoice === 0) return "rock";
    if (numberChoice === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("What do you want to pick? (rock, paper, or scissors)");
}

function playRound(humanChoice, computerChoice) {
    console.log("You played " + humanChoice + ".");
    console.log("The computer played " + computerChoice + ".");
    if (humanChoice === "rock" && computerChoice === "paper"|| humanChoice === "Rock" && computerChoice === "paper"|| humanChoice ==="ROCK" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "Rock" && computerChoice === "scissors"|| humanChoice ==="ROCK" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "rock"|| humanChoice === "Rock" && computerChoice === "rock"|| humanChoice ==="ROCK" && computerChoice === "rock") {
        console.log("You tied! You both played rock.");
    } else if (humanChoice === "paper" && computerChoice ==="paper"|| humanChoice ==="Paper"&& computerChoice ==="paper"||humanChoice==="PAPER" && computerChoice ==="paper") {
        console.log("You tied! You both played paper.");
    } else if (humanChoice === "paper" && computerChoice === "scissors"|| humanChoice ==="Paper"&& computerChoice === "scissors"||humanChoice==="PAPER" && computerChoice === "scissors") {
        console.log("You lost! Scissors beats paper.");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock"|| humanChoice ==="Paper"&& computerChoice === "rock"||humanChoice==="PAPER" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice ==="paper"|| humanChoice === "Scissors" && computerChoice ==="paper"|| humanChoice === "SCISSORS" && computerChoice ==="paper") {
        console.log("You win! Scissors beats paper.");
        humanScore += 1;
    } else if (humanChoice === "scissors"  && computerChoice === "scissors"|| humanChoice === "Scissors"  && computerChoice === "scissors"|| humanChoice === "SCISSORS" && computerChoice === "scissors") {
        console.log("You tied! You both played scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "rock"|| humanChoice === "Scissors" && computerChoice === "rock"|| humanChoice === "SCISSORS" && computerChoice === "rock") {
        console.log("You lost! Rock beats scissors.");
        computerScore += 1;
    } else {
        console.log("You entered an invalid input. Reload the page to try again.");
    }
}

function playGame() {
    console.log("Welcome to Rock Paper Scissors!");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("1/5 rounds completed.");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("2/5 rounds completed.");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("3/5 rounds completed.");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("4/5 rounds completed.");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("You completed the game!");
    console.log("You scored " + humanScore + ".");
    console.log("The computer scored " + computerScore + ".")
    if (humanScore > computerScore) {
        console.log("You won! Congratulations!");
        humanScoreDisplay.style.display = "block";
        computerScoreDisplay.style.display = "block";
        humanScoreDisplay.innerHTML = "You scored " + humanScore + ".";
        computerScoreDisplay.innerHTML = "The computer scored " + computerScore + ".";
        win.style.display = "block";
    } else if (computerScore > humanScore) {
        console.log("You lost. Better luck next time!");
        humanScoreDisplay.style.display = "block";
        computerScoreDisplay.style.display = "block";
        humanScoreDisplay.innerHTML = "You scored " + humanScore + ".";
        computerScoreDisplay.innerHTML = "The computer scored " + computerScore + ".";
        lose.style.display = "block";
    } else if (computerScore === humanScore) {
        console.log("You tied with the computer! Up for a rematch?");
        humanScoreDisplay.style.display = "block";
        computerScoreDisplay.style.display = "block";
        humanScoreDisplay.innerHTML = "You scored " + humanScore + ".";
        computerScoreDisplay.innerHTML = "The computer scored " + computerScore + ".";
    }
}

playGame();