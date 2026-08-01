const resultDiv = document.querySelector('#results')
const winner = document.createElement('h2')

const playerButtons = document.querySelectorAll('.btn')

const choices = document.querySelector('#choices')
const compChoice = document.createElement('h1')
const playerChoice = document.createElement('h1')

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

    compChoice.textContent = `Computer chooses: ${choice}`
    choices.appendChild(compChoice)
    return choice
}

// function getHumanChoice(){
//     let choice
//     playerButtons.forEach(btn =>{ 
//             choice = btn.textContent
//         })
//         choices.appendChild(playerChoice)
//         return choice
//     }

function getHumanChoice(clickedText){
    playerChoice.textContent = `Human chooses: ${clickedText}`
    choices.appendChild(playerChoice)
    return clickedText
}
    
let humanScore = 0
let computerScore = 0
 
const playerScore = document.createElement('p')
const compScore = document.createElement('p')



    
function playRound(humanChoice){
    humanChoice = getHumanChoice(humanChoice)
    const computerChoice = getComputerChoice()

    if(
        (humanChoice === 'Rock' && computerChoice === 'Paper') 
    || (humanChoice === 'Paper' && computerChoice === 'Scissors')
    || (humanChoice === 'Scissors' && computerChoice === 'Rock')){
            computerScore += 1
            winner.textContent = 'Computer Wins!'}

    else if(
        (humanChoice === 'Rock' && computerChoice === 'Scissors') 
    || (humanChoice === 'Paper' && computerChoice === 'Rock')
    || (humanChoice === 'Scissors' && computerChoice === 'Paper')){
            humanScore += 1
            winner.textContent = 'Human Wins!';}

    else{
            winner.textContent = "It's a tie!"
    }


    playerScore.textContent = `Human Score: ${humanScore}`
    compScore.textContent = `Computer Score: ${computerScore}`
    resultDiv.appendChild(winner)
    resultDiv.appendChild(playerScore)
    resultDiv.appendChild(compScore)
}

playerButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        playRound(btn.textContent)
    })
})


// playerButtons.forEach(btn => {
//     btn.addEventListener('click', event=>{
//         playerChoice.textContent = `Human chooses: ${btn.textContent}`
//         playRound()
//     })
// })



