function promptResult() {
    let promptResult = prompt('Rock, Paper, or Scissors?');
    promptResult = promptResult.toLowerCase();
    
    if (promptResult === 'rock' || promptResult === 'paper' || promptResult === 'scissors') {
        alert(promptResult);
    }
    else { 
        alert('Invalid input!');
        prompt('Please try again');
     }

    return promptResult;
}

promptResult();

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

    console.log(getComputerChoice());


