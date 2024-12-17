let humanScore  = 0;
let computerScore  = 0;

const getHumanChoice = () => {
    let value = prompt("Please, Enter a number of 1 to 3");
    return value;
    
}

const getComputerChoice = () => {
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    let computerChoice = '';

    if (number == 1) {
        computerChoice = '🪨';
    } else if (number == 2) {
        computerChoice = '🧻';
    } else if (number == 3) {
        computerChoice = '✂️';
    }
    
    return computerChoice;
}

const playRound = (getHumanChoice, getComputerChoice) => {
    const getHumanChoice = humanChoiceFunc();
    const getComputerChoice = computerChoiceFunc();
}