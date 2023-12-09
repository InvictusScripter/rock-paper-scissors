// Get references to UI elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultsDisplay = document.getElementById('results');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

// Initialize game variables
let playerScore = 0;
let computerScore = 0;

// Function to play a single round of the game
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    // Implement game logic to determine the winner of the round
    let roundResult = "";  // Initialize a variable to store the result message
    
    if (playerSelection === computerSelection) {
        roundResult = "It's a tie! Replay the round.";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++; // Update player score
    } else {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++; // Update computer score
    }

    // Display the round result and running score on the UI
    resultsDisplay.textContent = roundResult;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // Check if any player reaches a score of 5 (win condition) and announce the winner
    if (playerScore === 5) {
        resultsDisplay.textContent += ' Congratulations! You win the game!';
        // Disable the buttons or add any other end-game logic here
    } else if (computerScore === 5) {
        resultsDisplay.textContent += ' Sorry, you lose the game.';
        // Disable the buttons or add any other end-game logic here
    }
}

// Event listeners for button clicks
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Function to get computer's choice (you can reuse your existing getComputerChoice function)
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

