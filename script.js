// Step 3: Create a function called getComputerChoice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 4: Write a function playRound
function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Check for a tie
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie! Replay the round.";
    }

    // Check for winner
    if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Step 6: Write a new function called game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Play best-of-five rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        
        console.log(roundResult);

        // Update scores
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("It's a tie game!");
    }
}

// Step 8: Call the game function
game();
