
export function randomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let computerChose;

    if (randomNumber === 1) {
        computerChose = 'rock';
    }

    else if (randomNumber === 2) { 
        computerChose = 'paper';
    }

    else if (randomNumber === 3) {
        computerChose = 'scissors';
    }

    return computerChose;
} 