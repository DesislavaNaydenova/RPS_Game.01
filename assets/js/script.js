

// Function to get user input
function getUserInput() {
    let userInput = "";
    let buttons = document.querySelectorAll(".button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            userInput = button.id;
            let computerMove = getComputerMove();
            compareMoves(userInput, computerMove);
            changeImg(userInput, computerMove);
        });
    }
 }


// Function to get computer move
function getComputerMove() {
    let computerOptions = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computerMove = computerOptions[randomChoice];
    return computerMove;
}


// Function to compare
function compareMoves(userInput, computerMove) {    
    let action = document.getElementById("action");
    let winner = document.getElementById("winner"); 

    let capUserInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    let capComputerMove = computerMove.charAt(0).toUpperCase() + computerMove.slice(1);
    

    if(userInput === computerMove){
        action.textContent = `${capUserInput} is the same as ${capComputerMove}`;
        winner.textContent = "It's a TIE !";
    } else if (userInput === "rock" && computerMove === "paper"){
        action.textContent = `${capComputerMove} covers ${capUserInput}`;
        winner.textContent = "Computer wins!";
    } else if (userInput === "rock" && computerMove === "scissors"){
        action.textContent = `${capUserInput} crushes ${capComputerMove}`;
        winner.textContent = "Player wins!";
    } else if (userInput === "paper" && computerMove === "scissors"){
        action.textContent = `${capComputerMove} cuts ${capUserInput}`;
        winner.textContent = "Computer wins!";
    } else if (userInput === "paper" && computerMove === "rock"){
        action.textContent = `${capUserInput} covers ${capComputerMove}`;
        winner.textContent = "Player wins!";
    } else if (userInput === "scissors" && computerMove === "rock"){
        action.textContent = `${capComputerMove} crushes ${capUserInput}`;
        winner.textContent = "Computer wins!";
    } else if (userInput === "scissors" && computerMove === "paper"){
        action.textContent = `${capUserInput} cuts ${capComputerMove}`;
        winner.textContent = "Player wins!";
    } else {
        action.textContent = "Invalid move";
        winner.textContent = "";
    }
    incrementScore(winner.textContent);
    return action;    
  }


// Increment scor depending on the winner
function incrementScore(winner) {
    let pScore = document.getElementById("player-score");
    let cScore = document.getElementById("computer-score");

    if( winner === "Player wins!"){
        pScore.textContent = parseInt(pScore.textContent) +1;
        if(pScore.textContent >= 20){
            checkGameEnd("Player");
        }
    }else if (winner === "Computer wins!"){
        cScore.textContent = parseInt(cScore.textContent) +1;
        if ( cScore.textContent >= 20){
            checkGameEnd("Computer");
        }
    }
}

// Cahnges the images to show the player's and computer's choice better to the user
// Credit https://github.com/developedbyed/rock-paper-scissor/blob/master/app.js
function changeImg(userInput, computerMove){
    document.getElementById("player").src =`assets/images/${userInput}.png`;
    document.getElementById("computer").src =`assets/images/${computerMove}.png`;
    
}


// End the game when one of the players get 20 points  
function checkGameEnd(winner) {
    document.getElementById("action").textContent = `${winner} got 20 points!`;
    document.getElementById("winner").textContent = `Pick a hand to start a new game!`;
    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
}

getUserInput();
getComputerMove();
compareMoves();

  
