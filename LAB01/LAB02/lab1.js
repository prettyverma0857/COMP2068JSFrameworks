// ----------Importing the prompt package---------------
const prompt = Require('prompt');

// ---------------Function to generate computer's selection-----------
function generateComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return 'PAPER';
    } else if (randomNumber < 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// --------------Starting the prompt------------------
prompt.start();

// ---------------Asking user for input---------------
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }

    const userSelection = result.userSelection.toUpperCase();
    const computerSelection = generateComputerSelection();

    console.log('User Selection:', userSelection);
    console.log('Computer Selection:', computerSelection);

    // -------------Determining the winner-------------
    //--------------using if else loop ------------
    if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        console.log('User Wins');
    } else if (
        (computerSelection === 'ROCK' && userSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && userSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && userSelection === 'PAPER')
    ) {
        console.log('Computer Wins');
    } else {
        console.log("It's a tie");
    }
});

// --------------Error handling function--------------------
function onErr(err) {
    console.log(err);
    return 1;
}
