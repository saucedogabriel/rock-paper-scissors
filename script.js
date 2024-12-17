const getComputerChoice = () => {
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(number);
    

    if (number == 1) {
        console.log('🪨');
    } else if (number == 2) {
        console.log('🧻');
    } else if (number == 3) {
        console.log('✂️');
    }
}

getComputerChoice();