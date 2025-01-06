let computerChoice;
let playerChoice;
let winner;

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
        if(computerchoice == "paper") return "Player";
        if(computerChoice == "scissors") return "Draw";
    }

}


function start() {
    getComputerChoice();
    getPlayerChoice();

    winner = verifyWinner();
    if(winner == "Draw") console.log(`Player selected ${playerChoice}, Computer selected ${computerChoice}. It's a draw!`);
    else console.log(`Player selected ${playerChoice}, Computer selected ${computerChoice}. ${winner} won!`);

    start();
}

start();
