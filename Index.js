function promptResult() {
    let promptResult = prompt('Rock, Paper, or Scissors?');
    promptResult = promptResult.toLowerCase();

    if (promptResult === 'rock' || promptResult === 'paper' || promptResult === 'scissors') {
        alert('Thank you!');
    }
    else {
        alert('Invalid input!');
        prompt('Please try again');
    }

    return promptResult;
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            randomNumber = 'Rock';
            break;

        case 1:
            randomNumber = 'Paper';
            break;

        case 2:
            randomNumber = 'Scissors';
            break;
    }

    return randomNumber;
}


let computerScore = 0;
let userScore = 0;



function playRound(playerSelection, computerSelection) {

    let startUserScore = userScore;
    let startComputerScore = computerScore;

    alert('You have selected' + ' ' + playerSelection);
    alert('The Computer has selected' + ' ' + computerSelection);
    computerSelection = computerSelection.toLowerCase();



    if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'scissors') {
        alert('It is a tie!');

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('Computer gets a point! Paper beats rock');
        computerScore++

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('Player gets a point! Rock beats scissors');
        userScore++


    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('Player gets a point! Paper beats rock');
        userScore++


    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('Computer gets a point! Scissors beats paper');
        computerScore++

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('Computer gets a point! Scissors beats rock');
        computerScore++


    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('Player wins! Scissors beats paper');
        userScore++

    }

    console.log(userScore, computerScore);

    if (computerScore > startComputerScore) {
        return 'The computer has won this round!';
    } else if (userScore > startUserScore) {
        return 'You win this round!';
    } else {
        return 'This round is a tie!';
    }
}

function game() {

    let playerSelection = promptResult();
    let computerSelection = getComputerChoice();

    alert(playRound(playerSelection, computerSelection));

    playerSelection = promptResult();
    computerSelection = getComputerChoice();

    alert(playRound(playerSelection, computerSelection));

    playerSelection = promptResult();
    computerSelection = getComputerChoice();

    alert(playRound(playerSelection, computerSelection));

    if (computerScore > userScore) {
        return 'The computer has won the game!';
    } else if (userScore > computerScore) {
        return 'You win the game!';
    } else if (computerScore === userScore) {
        return 'This game is a tie, keep going!';
    }

}

alert(game());
