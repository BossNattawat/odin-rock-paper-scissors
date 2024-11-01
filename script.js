console.log("Hello World!");

const choice = ["rock", "paper", "scissors"]

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * choice.length)
    return choice[computerChoice]
}

function getHumanChoice(){
    humanChoice = prompt("Enter your choice : ").toLowerCase()
    return humanChoice
}

function playRound(humanChoice, computerChoice){

    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore+=1
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore+=1
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore+=1
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore+=1
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore+=1
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore+=1
    }
    else{
        console.log("Draw");
    }

}

function playGame(){
    for(let i = 0; i < 5; i++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    if(humanScore > computerScore){
        console.log("Human win!");
    }
    else if(humanScore < computerScore){
        console.log("Computer win!")
    }
    else{
        console.log("Tie!");
    }

}

playGame()