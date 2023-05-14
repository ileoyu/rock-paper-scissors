function getPlayerChoice() {
    const userInput = prompt('Please choose rock, paper, or scissors:');
    const choice = userInput.toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        alert('Error, please input rock, paper, or scissors');
        return getPlayerChoice();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins! Paper beats Rock.";
        } else {
            return "User wins! Rock beats Scissors.";
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins! Scissors beats Paper.";
        } else {
            return "User wins! Paper beats Rock.";
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins! Rock beats Scissors.";
        } else {
            return "User wins! Scissors beats Paper.";
        }
    }
}

function playRPS() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice !== null) {
        console.log("User choice:", playerChoice);
        console.log("Computer choice:", computerChoice);
        console.log(determineWinner(playerChoice, computerChoice));
    } else {
        console.log("User canceled the game.");
    }
}

playRPS();
