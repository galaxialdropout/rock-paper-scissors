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
    var randomNumber = Math.floor(Math.random()*3);
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

 

function playRound(playerSelection, computerSelection) {
alert('You have selected' + ' ' + playerSelection);
alert('The Computer has selected' + ' ' + computerSelection);
computerSelection = computerSelection.toLowerCase();

    var computerScore = 0;
    var userScore = 0;


     if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'scissors')  {
         alert('It is a tie!');
         
     } else if (playerSelection === 'rock' && computerSelection === 'paper')  {
        alert('Computer gets a point! Paper beats rock');
        computerScore++
        
    }  else if (playerSelection === 'rock' && computerSelection === 'scissors')  {
        alert('Player gets a point! Rock beats scissors');
        userScore++
       

    } else if (playerSelection === 'paper' && computerSelection === 'rock')  {
        alert('Player gets a point! Paper beats rock');
        userScore++
       

    } else if (playerSelection === 'paper' && computerSelection === 'scissors')  {
        alert('Computer gets a point! Scissors beats paper');
        computerScore++

    } else if (playerSelection === 'scissors' && computerSelection === 'rock')  {
        alert('Computer gets a point! Scissors beats rock');
        computerScore++
       

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {  
        alert('Player wins! Scissors beats paper');
        userScore++
        
    }

    if (computerScore > userScore) {
        alert('The computer has won this round!');
    } else if (computerScore < userScore){
        alert('You win this round!');
    } else if (computerScore === userScore){
        alert('This round is a tie!');
    }
}

const playerSelection = promptResult();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);