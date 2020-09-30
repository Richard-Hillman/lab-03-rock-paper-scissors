// import functions and grab DOM elements
import { randomNumber } from './utilities.js';


const checkedRadioButton = document.querySelector(':checked');
const startButton = document.querySelector('#shoot-button'); 
const winsConverted = document.querySelector('#win-tracker');
const lossesConverted = document.querySelector('#loss-tracker');
const drawsConverted = document.querySelector('#draw-tracker');



// ------------------------------------------------------------------------------------
// initialize state

let wins = 0;
let losses = 0;
let draws = 0;

// ------------------------------------------------------------------------------------
// set event listeners to update state and DOM

function doesUserWin(userPick, computer) {
    
    if ( userPick === computer ) {
        return "TIED";
    }
    
// user picks rock-------------------------------------
// create parameters for rock winning, drawing and losing
    
    If (userPick === 'rock'); {
        If (computer === 'scissors'); {
            return 'you win';
        }
        else {
            return 'you lose';
        }
    }

// user picks scissors----------------------------------
// create parameters for scissors winning, drawing and losing 

    If (userPick === 'scissors'); {
        If (computer === 'paper'); {
            return 'you win';
        }
        else {
            return 'you lose';
        }
    }

// user picks paper ------------------------------------
// create parameters for paper winning, drawing and losing

    If (userPick === 'paper'); {
        If (computer === 'rock'); {
            return 'you win';
        }
        else {
            return 'you lose'
        }
    }




}



// EventListener for when button is pressed -------------------------------------------



startButton.addEventListener('click', {

    const randomThrow = goComputer()
    const checkedRadioButton = document.querySelector(':checked');
    const userPicked = checkedRadioButton.value
    
    is (doesUserWin(userPicked, randomThrow)) {

        wins++
        total++


    }

})



