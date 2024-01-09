// 1. Initialize Scores:
let userScore = 0;
let compScore = 0;

   //  These lines declare two variables (`userScore` and `compScore`) to keep track of the scores for the user and the computer.

//2. Handle User's Move:
function userMove(userChoice) {
    const compChoice = getComputerChoice();
    const result = determineWinner(userChoice, compChoice);

    updateScore(result);
    displayResult(userChoice, compChoice, result);
    }

   // This function is called when the user makes a move (clicks on an image).
   // It gets the computer's choice, determines the winner, updates the score, and displays the result.

//3. Generate Computer's Move:
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

//  This function generates a random choice for the computer: 'rock', 'paper', or 'scissors'.

//4. Determine Winner:
function determineWinner(userChoice, compChoice) {
        if (userChoice === compChoice) {
            return 'draw';
        } else if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')
        ) {
            return 'win';
        } else {
            return 'lose';
        }
    }

   //  This function compares the user's and computer's choices to determine the winner or if it's a draw.

//5. Update Score:
function updateScore(result) {
        if (result === 'win') {
            userScore++;
        } else if (result === 'lose') {
            compScore++;
        }
        updateScoreDisplay();
    }

   //  This function updates the scores based on the result of the round and then calls `updateScoreDisplay` to visually update the score on the webpage.

//6. Update Score Display:
function updateScoreDisplay() {
        document.getElementById('p1').innerText = userScore;
        document.getElementById('p2').innerText = compScore;
    }

   // This function updates the displayed scores on the webpage.

//7. Display Result:
function displayResult(userChoice, compChoice, result) {
        const resultMessage = getResultMessage(userChoice, compChoice, result);
        document.getElementById('p3').innerText = resultMessage;
    }

    // This function displays the result message on the webpage.

//8. Get Result Message:
function getResultMessage(userChoice, compChoice, result) {
        if (result === 'draw') {
            return `It's a draw! You both chose ${userChoice}.`;
        } else if (result === 'win') {
            return `You win! ${userChoice} beats ${compChoice}.`;
        } else {
            return `You lose! ${compChoice} beats ${userChoice}.`;
        }
    }
   //   This function generates a message based on the outcome of the round.

//9. Add Event Listeners for User's Moves:
    document.getElementById('img1').addEventListener('click', function () {
        userMove('rock');
    });

    document.getElementById('img2').addEventListener('click', function () {
        userMove('paper');
    });

    document.getElementById('img3').addEventListener('click', function () {
        userMove('scissors');
    });
   //- These lines add click event listeners to the image elements, triggering the `userMove` function with the corresponding move when an image is clicked.



// ... (previous code)

// Function to reset the game
function resetGame() {
    userScore = 0;
    compScore = 0;
    updateScoreDisplay();
    document.getElementById('p3').innerText = 'Play with Move';
}

// Function to start a new game
function startNewGame() {
    resetGame();
    // Add any additional setup or logic for starting a new game here
}

// ... (remaining code)

// Event listeners for buttons
document.getElementById('resetButton').addEventListener('click', resetGame);
document.getElementById('startButton').addEventListener('click', startNewGame);
