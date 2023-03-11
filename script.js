function getComputerChoice()
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


function playRound(computerSelection, playerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection == playerSelection)
    {
        return "Tie Game"
    }
    else if (computerSelection =='rock' && playerSelection == 'paper')
    {
        return ` You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection =='rock' && playerSelection == 'scissors')
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection =='paper' && playerSelection == 'scissors')
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection =='paper' && playerSelection == 'rock')
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection =='scissors' && playerSelection == 'rock')
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection =='scissors' && playerSelection == 'paper')
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}

function game(){
    let pp =0;
    let cp =0;

    while((pp < 5)&&(cp < 5))
    {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("choose your weapon");
        let winner = playRound(computerSelection, playerSelection);
        console.log(winner);
        if(winner[4] ==  "W")
        {
            pp++;
        }
        else if(winner[4] == "L")
        {
            cp++;
        }
    }
    if( pp == 5)
    {
        console.log("You wins the final match");
    }
    else{
        console.log("computer wins with flying colors");
    }

}

