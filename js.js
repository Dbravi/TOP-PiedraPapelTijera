const palabras= ["rock","papper", "scissors"]
function computerPlay() {
    let resultado= Math.floor(Math.random() * palabras.length);
    console.log(palabras[resultado]) 
  }

// computerPlay()

//if - else if 3 options
//
//

const paper="paper"
const rock="rock"
const scissors="scissors"

const singleRound= function (playerSelection, computerSelection) {
if (playerSelection=== computerSelection) {
    return console.log ("empate")
}
else if(playerSelection === paper && computerSelection === "rock") {
   console.log("paper wins")
}
else if(playerSelection === paper && computerSelection === "scissors") {
    console.log("scissors wins")
}
else if(playerSelection === rock && computerSelection === "scissors") {
    console.log("rock wins")
}
else if(playerSelection === rock && computerSelection === "paper") {
    console.log("scissors wins")
}
else if(playerSelection === scissors && computerSelection === "paper") {
    console.log("scissors wins")
}
else if(playerSelection === scissors && computerSelection === "rock") {
    console.log("rock wins")
}
}

singleRound(rock,scissors)