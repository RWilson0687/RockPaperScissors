const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
playerChoice = e.target.id
playerChoiceDisplay.innerHTML = playerChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice(){
const randomNumber = Math.floor(Math.random() * 3) + 1

if (randomNumber === 1){
    computerChoice = 'Rock'
}
if (randomNumber === 2){
        computerChoice = 'Paper'
}
if (randomNumber === 3){
    computerChoice = 'Scissors'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice){
        result = 'Its a draw!'
}
if (computerChoice === 'Rock' && playerChoice === "Paper"){
    result = 'You win!'
}
if (computerChoice === 'Rock' && playerChoice === "Scissors"){
    result = 'You lose!'
}
if (computerChoice === 'Paper' && playerChoice === "Scissors"){
    result = 'You win!'
}
if (computerChoice === 'Paper' && playerChoice === "Rock"){
    result = 'You lose!'
}
if (computerChoice === 'Scissors' && playerChoice === "Rock"){
    result = 'You win!'
}
if (computerChoice === 'Scissors' && playerChoice === "Paper"){
    result = 'You lose!'
}
resultDisplay.innerHTML = result
}
