

// Function to get user input
function getUserInput() {
    let userInput = "";
    let buttons = document.querySelectorAll(".button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            userInput = button.id;
            let computerMove = getComputerMove();
            console.log(userInput);
            console.log(computerMove, "is the comp")
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
function compareMoves(user_choice, computer_choice) {    
    // if human = rock and comp = paper
    //    winner = human
    winner = "human"
    return winner;
  }


// Increment scor depending on the winner
function incrementScore() {}


// End the game when one of the players get 20 points  
function checkGameEnd() {}

getUserInput();
getComputerMove();
console.log(computerMove);

  
