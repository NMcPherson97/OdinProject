function getComputerChoice(){
    let choice 
    let roll = Math.random()
    if(roll < 0.33){
        choice = 'Rock'
    }else if(roll < 0.66){
        choice = 'Paper'
    }else{
        choice = 'Scissors'
    }

    let choiceValueComp
    switch(choice){
        case 'Rock':
            choiceValueComp = 1
            break;
        case 'Paper':
            choiceValueComp = 2
            break;
        case 'Scissors':
            choiceValueComp = 3
        }
    console.log(`Computer chooses: ${choice}`)
    return choiceValueComp
}

function getHumanChoice(){
    let humanChoice = prompt(`Choose Rock, Paper or Scissors: `).toLocaleLowerCase().trim()
    let choiceValueHuman

    switch(humanChoice){
        case 'rock':
            choiceValueHuman = 1
            break;
        case 'paper':
            choiceValueHuman = 2
            break;
        case 'scissors':
            choiceValueHuman = 3
            break;
        default:
            console.log('Invalid entry. Try again.')
            break;
    }
    console.log(`Human chooses: ${humanChoice}`)
    return choiceValueHuman
}

let humanScore = 0
let computerScore = 0

function playGame(){
    
    function playRound(){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        if(
           (humanChoice === 1 && computerChoice === 2) 
        || (humanChoice === 2 && computerChoice === 3)
        || (humanChoice === 3 && computerChoice === 1)){
                computerScore += 1
                console.log('Computer Wins!')}
    
        else if(
           (humanChoice === 2 && computerChoice === 1) 
        || (humanChoice === 3 && computerChoice === 2)
        || (humanChoice === 1 && computerChoice === 3)){
                humanScore += 1
                console.log('Human Wins!')}

        else{console.log("It's a tie!")}

        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }

    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

playGame()
