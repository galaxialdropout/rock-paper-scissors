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

alert(getComputerChoice());

