let computerChoice;
let playerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
     let random_number = Math.floor(Math.random() * 3);
     
     if(random_number == 0) {
        computerChoice = "rock";
        return;
     }
     if(random_number == 1) {
        computerChoice = "paper";
        return;
     }
     if(random_number == 2) {
        computerChoice = "scissors";
        return;
     }

}

function getPlayerChoice() {
    playerChoice = prompt("Rock Paper Scissors");
    verifyPlayerChoice();
}

function verifyPlayerChoice() {
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return
    }
    playerChoice = prompt("You need to input a valid value (rock, paper, or scissors)");
    verifyPlayerChoice();
}

function verifyWinner() {
    if(playerChoice == "rock") {
        if(computerChoice == "rock") return "Draw";
        if(computerChoice == "paper") return "Computer";
        if(computerChoice == "scissors") return "Player";
    }

    if(playerChoice == 'paper') {
        if(computerChoice == "rock") return "Player";
        if(computerChoice == "paper") return "Draw";
        if(computerChoice == "scissors") return "Computer";
    }

    if(playerChoice == "scissors") {
        if(computerChoice == "rock") return "Computer";
        if(computerChoice == "paper") return "Player";
        if(computerChoice == "scissors") return "Draw";
    }

}


function start() {
    getComputerChoice();
    getPlayerChoice();

    winner = verifyWinner();
    if(winner == "Draw") console.log(`Player selected ${playerChoice}, Computer selected ${computerChoice}. It's a draw!`);
    else if(winner == "Player") {
        console.log(`Player selected ${playerChoice}, Computer selected ${computerChoice}. Player won!`);
        playerScore++;
    }
    else {
        console.log(`Player selected ${playerChoice}, Computer selected ${computerChoice}. Computer won!`);
        computerScore++;
    }

    console.log("--Scoreboard--\n"+`Player: ${playerScore} | Computer: ${computerScore}`);

    start();
}

start();
