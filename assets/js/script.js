

// Function to get user input
function getUserInput() {
    let userInput = "";
    let buttons = document.querySelectorAll(".button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            userInput = button.id;
            let computerMove = getComputerMove();
            compareMoves(userInput, computerMove);
        })
    }
 };


// Function to get computer move
function getComputerMove() {
    let computerOptions = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let computerMove = computerOptions[randomChoice];
    return computerMove;
};

let computerMove = getComputerMove();




// Function to compare
function compareMoves(userInput, computerMove) {    
    let action = document.getElementById("action");
    let winner = document.getElementById("winner"); 
    if(userInput === computerMove){
        action.textContent = `${userInput} is the same as ${computerMove}`;
        winner.textContent = "It's a TIE !"
    } else if (userInput === "rock" && computerMove === "paper"){
        action.textContent = `${computerMove} covers ${userInput}`;
        winner.textContent = "Computer wins!"

    }
    return action;
    return winner;
    
  }


// Increment scor depending on the winner
function incrementScore() {}


// End the game when one of the players get 20 points  
function checkGameEnd() {}

getUserInput();
getComputerMove();
console.log(computerMove);
compareMoves(userInput, computerMove)

  
