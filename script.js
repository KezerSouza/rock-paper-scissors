let computerChoice;
let playerChoice;

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

getComputerChoice();
getPlayerChoice();
console.log(computerChoice);
console.log(playerChoice);