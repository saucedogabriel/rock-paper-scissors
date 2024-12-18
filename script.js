let humanScore = 0;
let computerScore  = 0;

const getHumanChoice = () => {
    let value = parseInt(prompt("Please, Enter a number of 1 to 3"));

    if (value < 1 || value > 3) {
        alert('Wrong number, please follow the instructions.');
    }
    
    return value;
}

const getComputerChoice = () => {
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    return number;
}

const playRound = (resultHuman, resultComputer) => {
    console.log(`Human result: ${resultHuman} \n Computer result: ${resultComputer}`);

    if (resultHuman == resultComputer) {
        console.log('Its a draw!');
    }else if ((resultHuman == (resultComputer + 1)) || (resultHuman == 1 && resultComputer == 3)) {
        console.log('Human wins!');
        humanScore++;
    } else if ((resultComputer == (resultHuman + 1)) || (resultComputer == 1 && resultHuman == 3)){
        console.log('Computer wins!');
        computerScore++;
    } else {
        console.log('Test');
    }
}

for (let i = 0; i < 5; i++) {
    resultHuman = getHumanChoice();
    resultComputer = getComputerChoice();
    playRound(resultHuman, resultComputer);
}

if (humanScore == computerScore){
    console.log('Its a final draw! 🤝');
}else if(humanScore > computerScore){
    console.log('Humans won the game! 😁');
} else {
    console.log('Computers won the game!💻');
}

console.log(`Human final result: ${humanScore} \n Computer final result: ${computerScore}`);
