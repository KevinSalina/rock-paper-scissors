

const gameHands = ['r', 'p', 's']

console.log(playRound('scissors', computerHand()))

// Play 1 round 
function playRound(user, comp){
    user = user.toLowerCase().charAt(0);
    console.log(`User: ${user} vs. Comp: ${comp}`)
    // User hand first, computer hand second
    const matchUp = (user + comp);
    switch(matchUp){
        case "rs":
        case "pr":
        case "sp":
            console.log("User Wins! :)")
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("User Loses.. :(")
            break;
        default:
            console.log(`It's a draw`)    
    }
}

// Returns a Random Computer Play
function computerHand(){
    let randNum = Math.floor(Math.random() * 3)
    return gameHands[randNum]
}

