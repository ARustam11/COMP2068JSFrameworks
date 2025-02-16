// Lab 2 (Rock, Paper, Scissors game)
// Rustam Ainetdinov Student ID: 200540293
// Leonardo Figueiredo Pinheiro Silva Student ID: 200577759

const prompt = require('prompt-sync')();

// Function to get user's choice
function getUserChoice() {
    while (true) {
        const choice = prompt('Enter your choice (ROCK, PAPER, or SCISSORS): ').toUpperCase();
        
        if (choice === 'ROCK' || choice === 'PAPER' || choice === 'SCISSORS') {
            return choice;
        }
        console.log('Invalid input! Please enter ROCK, PAPER, or SCISSORS.');
    }
}

// Function to generate computer's choice
function getComputerChoice() {
    const random = Math.random();
    if (random <= 0.34) {
        return 'PAPER';
    } else if (random <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie";
    }
    
    if (
        (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (userChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (userChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
        return 'User Wins';
    }
    
    return 'Computer Wins';
}

// Main game function
function playGame() {
    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    console.log(`User selected: ${userSelection}`);
    console.log(`Computer selected: ${computerSelection}`);
    
    const result = determineWinner(userSelection, computerSelection);
    console.log(result);
}


playGame();