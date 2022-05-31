
const allPossibilities = ['Rock', 'Paper', 'Scissor'];
const winningComb = ['Paper', 'Scissor', 'Rock']
const loosingComb = ['Scissor', 'Rock', 'Paper']
const resultDisplay = document.querySelector('.resultDisplay');
const announceWinnerText = document.querySelector('.announceWinner');
const userScoreDisplay = document.querySelector('.userScore');
const computerScoreDisplay = document.querySelector('.computerScore');
const toLookForClicks = document.querySelectorAll('.toSelect');
const arrOptions= Array.from(toLookForClicks)

let playerScore = 0;
let computerScore = 0;
function setDefault(){
    for(let i = 0; i<3; i++){
        arrOptions[i].textContent = allPossibilities[i];
    }
}

toLookForClicks.forEach((option) => {
    option.addEventListener('click', ()=>{
        setDefault()
        const playerSelection = option.textContent;
        game(playerSelection);
    })
})

function computerPlay(){
    return Math.round((Math.random() * 2));
}

function determineWinner(playerSelection, computerPlay){
    
    if(winningComb.indexOf(playerSelection) === computerPlay){
        return true;
    } else if(loosingComb.indexOf(playerSelection) === computerPlay){
        return false;
    }
    return 'tie';               
}   


function game(playerSelection){
    const computerplay = computerPlay();
    if(determineWinner(playerSelection, computerplay) === 'tie'){
        resultDisplay.textContent = 'It is a tie';
    }else if(determineWinner(playerSelection, computerplay)){
        playerScore += 1;
        resultDisplay.textContent =  `You Win! ${playerSelection} beats ${allPossibilities[computerplay]}`
        userScoreDisplay.textContent = `Your score is: ${playerScore}`;
        announceWinnerFunction()
    }else if (!determineWinner(playerSelection, computerplay)){
        computerScore += 1;
        resultDisplay.textContent =  `You Lose! ${allPossibilities[computerplay]} beats ${playerSelection}`
        computerScoreDisplay.textContent = `Computers score is: ${computerScore}`;
        announceWinnerFunction()
    }
}

function announceWinnerFunction(){
    if(playerScore  === 5){
        announceWinnerText.textContent = 'You Won!!!';
        setTimeout(reset, 3000);
    }else if(computerScore === 5){
        announceWinnerText.textContent = 'You Lost!!!';
        setTimeout(reset, 3000);
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = `Computers score is ${playerScore}`;    
    userScoreDisplay.textContent = `Your score is ${computerScore}`;
        

}
