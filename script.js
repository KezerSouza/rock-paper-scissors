let computerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");

let resultText = document.querySelector(".results .results-text");

let playerScoreDom = document.querySelector(".player-score-value");
let computerScoreDom = document.querySelector(".computer-score-value");

let winnerText = document.querySelector(".game-winner .game-winner-text");

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

function verifyWinner(playerChoice) {
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

function announceWinner(winner) {
    if(winner == "player") {
        winnerText.textContent = "Fim de jogo! Player venceu";
    }else if(winner == "computer") {
        winnerText.textContent = "Fim de jogo! Computador venceu"; 
    }
}

function updateScoreboard() {
    
    console.log(playerScoreDom);
    playerScoreDom.textContent = playerScore;
    computerScoreDom.textContent = computerScore;

    if(playerScore >= 5) {
        announceWinner("player");
    }else if (computerScore >= 5) {
        announceWinner("computer");
    }

}

function start(playerChoice) {

    getComputerChoice();

    winner = verifyWinner(playerChoice);
    if(winner == "Draw") resultText.textContent = `Player selected ${playerChoice}, Computer selected ${computerChoice}. It's a draw!`;
    else if(winner == "Player") {
        resultText.textContent = `Player selected ${playerChoice}, Computer selected ${computerChoice}. Player won!`;
        playerScore++;
    }
    else {
        resultText.textContent = `Player selected ${playerChoice}, Computer selected ${computerChoice}. Computer won!`;
        computerScore++;
    }

    updateScoreboard();
    console.log("--Scoreboard--\n"+`Player: ${playerScore} | Computer: ${computerScore}`);

}

rockButton.addEventListener("click", function() {
    start("rock");
});

paperButton.addEventListener("click", function() {
    start("paper");
});

scissorsButton.addEventListener("click", function() {
    start("scissors");
});