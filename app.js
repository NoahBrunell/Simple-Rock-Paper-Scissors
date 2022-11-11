const computerChoiceTarget = document.getElementById('computer-choice')
const userChoiceTarget = document.getElementById('user-choice')
const resultTarget = document.getElementById('result')
const rockTarget = document.getElementById('rock')
const paperTarget = document.getElementById('paper')
const scissorsTarget = document.getElementById('scissors')
let userChoice = ""
let computerChoice = ""


function chooseRandom() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    if (randomNumber == 1) {
        computerChoice = "Rock"
    } else if (randomNumber == 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    computerChoiceTarget.innerText = computerChoice
}

function chooseRock() {
    userChoiceTarget.innerText = rockTarget.innerText
    console.log(userChoiceTarget.innerText)
 }
function choosePaper() {
    userChoiceTarget.innerText = paperTarget.innerText
    console.log(userChoiceTarget.innerText)
}
function chooseScissors() {
    userChoiceTarget.innerText = scissorsTarget.innerText
    console.log(userChoiceTarget.innerText)
}



