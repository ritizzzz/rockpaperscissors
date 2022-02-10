
const allPossibilities = ['Rock', 'Paper', 'Scissor'];
const winningComb = ['Paper', 'Scissor', 'Rock']
const loosingComb = ['Scissor', 'Rock', 'Paper']
const resultDisplay = document.querySelector('.resultDisplay');

let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    return Math.round((Math.random() * 2));
}

function determineWinner(playerSelection, computerPlay){
    const casedPlayerSelection = `${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1).toLowerCase()}`
    if(winningComb.indexOf(casedPlayerSelection) === computerPlay){
        return true;
    } else if(loosingComb.indexOf(casedPlayerSelection) === computerPlay){
        return false;
    }
    return 'tie';               
}   


function game(){
    const playerSelection = prompt('Select rock paper or scissors', 'Rock');
    const computerplay = computerPlay();
    if(determineWinner(playerSelection, computerplay) === 'tie'){
        return 'It is a tie';
    }else if(determineWinner(playerSelection, computerplay)){
        playerScore += 1;
        return  `You Win! ${playerSelection} beats ${allPossibilities[computerplay]}`
    }else if (!determineWinner(playerSelection, computerplay)){
        computerScore += 1;
        return  `You Lose! ${allPossibilities[computerplay]} beats ${playerSelection}`
    }
}

function announceWinner(){
    for(let i = 0; i< 5; i++){
        console.log(game())
    }
    if(playerScore > computerScore){
        console.log(`You win with a score of ${playerScore}`)
    }else if(playerScore === computerScore){
        console.log('It is a tie');
    }else{
        console.log(`You lose! Computers score was ${computerScore}`);
    }
}