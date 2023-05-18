document.addEventListener('DOMContentLoaded', function() {

    //choices
    const playerChoices = document.querySelectorAll('.playerChoices > div');
    const resetBtn = document.getElementById('resetBtn');
    let playerChoice = '';
    let computerChoice = '';

    // result
    let result = '';

    // html scores
    const playerScoreboard = document.querySelector('.player-scoreboard')
    const computerScoreboard = document.querySelector('.computer-scoreboard')
    const computerScorevalue = document.querySelector('.computer-scorevalue')
    const playerScorevalue = document.querySelector('.player-scorevalue')
    
    // score counter 
    let playerScore = 0;
    let computerScore = 0;

    // html bot and player selections 
    const playerRock = document.querySelector('#player-rock');
    const playerPaper = document.querySelector('#player-paper');
    const playerScissors = document.querySelector('#player-scissors');
    const botRock = document.querySelector('#bot-rock');
    const botPaper = document.querySelector('#bot-paper');
    const botScissors = document.querySelector('#bot-scissors');
    
    
    for (let i = 0; i < playerChoices.length; i++) {
        playerChoices[i].addEventListener('click', function() {
            const choices = ['rock', 'paper', 'scissors'];
            playerChoice = choices[i];
            computerChoice = getComputerChoice();
            result = determineScore(playerChoice, computerChoice);
            determineWinner(playerScore, computerScore);
            console.log(playerChoice);
            console.log(computerChoice);
            console.log(result);
            console.log(playerScore);
            console.log(computerScore);

        })}
        
    // random computer choice 

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // determine score

    function determineScore(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        }

        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                
                computerScore++;
                computerScorevalue.textContent = computerScore;
                return "Computer wins! Paper beats Rock.";
            } else {
                playerScore++;
                playerScorevalue.textContent = playerScore;
                return "User wins! Rock beats Scissors.";
            }
        }

        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {

                computerScore++;
                computerScorevalue.textContent = computerScore;
                return "Computer wins! Scissors beats Paper.";
            } else {
                playerScore++;
                playerScorevalue.textContent = playerScore;
                return "User wins! Paper beats Rock.";
            }
        }

        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore++;
                computerScorevalue.textContent = computerScore;
                return "Computer wins! Rock beats Scissors.";
            } else {
                playerScore++;
                playerScorevalue.textContent = playerScore;
                return "User wins! Scissors beats Paper.";
            }
        }
    }

    // determine final winner, first to 5 wins 

    function determineWinner(playerScore, computerScore) {
        if (playerScore === 5) {
            // Hide player choices
            playerChoices.forEach(icon => {
                icon.style.display = 'none';
            });

            // Show reset button
            resetBtn.style.display = 'block';

            // change element color 
            playerScoreboard.classList.add('active');
            playerScorevalue.classList.add('active');
            
            return 'Player reaches 5, player wins';
        } else if (computerScore === 5) {
            // Hide player choices
            playerChoices.forEach(icon => {
                icon.style.display = 'none';
            });

            // Show reset button
            resetBtn.style.display = 'block';

            // change element color 
            computerScoreboard.classList.add('active');
            computerScorevalue.classList.add('active');
            

            return 'Computer reaches 5, computer wins';
        }
    }

    // restart game

    resetBtn.addEventListener('click', function () {
        //reset everything 
        playerScore = 0;
        computerScore = 0;
        playerScoreboard.classList.remove('active');
        playerScorevalue.classList.remove('active');
        computerScoreboard.classList.remove('active');
        computerScorevalue.classList.remove('active');
        playerScorevalue.innerHTML = '0'
        computerScorevalue.innerHTML = '0'
        // hide reset button
        resetBtn.style.display = 'none'
        // display player choices
        playerChoices.forEach(icon => {
            icon.style.display = 'block';
        });


    })
});
