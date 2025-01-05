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
    playerChoice = playerChoice.toUpperCase();
}

getComputerChoice();
getPlayerChoice();
console.log(computerChoice);
console.log(playerChoice);