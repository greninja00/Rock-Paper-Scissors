function getComputerChoice() // to get a computer choice
{
    let guess = Math.random()*100;
    guess = Math.floor(guess)
    if(guess < 33.33)
    return "rock";
    else if((guess > 33.33 )&&(guess < 66.66))
    return "paper";
    else 
    return "scissors";

}


function playRound(computerSelection, playerSelection)  // to play round and get display content change
{
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection == playerSelection)
    {
        display.textContent = 'Tie game';
    }
    else if (computerSelection =='rock' && playerSelection == 'paper')
    {
        display.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScores++;
    }
    else if (computerSelection =='rock' && playerSelection == 'scissors')
    {
        display.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScores++;
    }
    else if (computerSelection =='paper' && playerSelection == 'scissors')
    {
        display.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScores++;
    }
    else if (computerSelection =='paper' && playerSelection == 'rock')
    {
        display.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScores++;
    }
    else if (computerSelection =='scissors' && playerSelection == 'rock')
    {
        display.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScores++;
    }
    else if (computerSelection =='scissors' && playerSelection == 'paper')
    {
        display.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScores++;
    }
    scores.textContent = `Your Score is ${playerScores} and Computer score is ${computerScores}`;
    //updates the scores if we play the game


     // Now to reset the game when we reach the final score 
    if(computerScores == 5)
    {
        display.textContent = "Computer wins the game"
        playerScores = 0;
        computerScores = 0;
    }
    else if(playerScores == 5)
    {
        display.textContent = "Player wins the game"
        computerScores = 0;
        playerScores = 0;
    } 

}


const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissors = document.querySelector('.Scissors');  // query selection for dom manipulation
const display = document.querySelector('.result');
const scores = document.querySelector('.score-board')
let playerScores = 0;
let computerScores = 0;

rock.addEventListener('click',() =>{playRound(getComputerChoice(), 'rock')} );
paper.addEventListener('click',() =>{playRound(getComputerChoice(), 'paper')} ); // butttons function
scissors.addEventListener('click',() =>{playRound(getComputerChoice(), 'scissors')} );



