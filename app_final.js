// Delcare Game Variables
let userScore = 0;
let compScore = 0;
let round;
const gameHands = ['r', 'p', 's']

// DOM Elements
const gameButtons = document.querySelectorAll('.selection')

gameButtons.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        console.log(e)
    })
})

// Run Game Function
game()

// Main Game Function - 5 Rounds
function game(){
    for(round = 1; round <= 5; round++){
        playRound(userHand(), computerHand())
    }
    // After 5 rounds...
    if (userScore > compScore){
        console.log(`User Wins! Final Score: ${userScore} - ${compScore}`)
    } else if ( userScore < compScore){
        console.log(`User Loses... Final Score: ${userScore} - ${compScore}`)
    } else {
        console.log(`It's a draw! Final Score: ${userScore} - ${compScore}`)
    }
}


// Helper Functions
// Play a single round 
function playRound(user, comp){
    // User hand first, computer hand second
    const matchUp = (user + comp);
    switch(matchUp){
        case "rs":
        case "pr":
        case "sp":
            userScore++
            roundResults('win', user, comp)
            break;
        case "sr":
        case "rp":
        case "ps":
            compScore++
            roundResults('lose', user, comp)
            break;
        default:
            roundResults('draw', user, comp)
    }
}

// Display results for each round
function roundResults(result, user, comp){
    if (result === 'win'){
        console.log(`Round ${round}. ${user} beats ${comp}. User Wins! Current Score - User: ${userScore}, Comp: ${compScore}`)
    } else if (result === 'lose'){
        console.log(`Round ${round}. ${user} loses to ${comp}. User loses. Current Score - User: ${userScore}, Comp: ${compScore}`)
    } else {
        console.log(`Round ${round}. ${user} ties ${comp}. It's a draw. Current Score - User: ${userScore}, Comp: ${compScore}`)
    }
}

// Select a random computer hand
function computerHand(){
    let randNum = Math.floor(Math.random() * 3)
    return gameHands[randNum]
}




