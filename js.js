const papel="papel"
const piedra="piedra"
const tijera="tijera"

const palabras= ["piedra","papel", "tijera"]
function computerPlay() {
    let resultado= Math.floor(Math.random() * palabras.length);
    console.log(palabras[resultado]) 
  }

// computerPlay()

const singleRound= function (playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase()
if (playerSelection=== computerSelection) {
    return console.log ("empate")
}
else if(playerSelection === papel && computerSelection === "piedra") {
   console.log("papel gana")
}
else if(playerSelection === papel && computerSelection === "tijera") {
    console.log("tijera gana")
}
else if(playerSelection === piedra && computerSelection === "tijera") {
    console.log("piedra gana")
}
else if(playerSelection === piedra && computerSelection === "papel") {
    console.log("tijera gana")
}
else if(playerSelection === tijera && computerSelection === "papel") {
    console.log("tijera gana")
}
else if(playerSelection === tijera && computerSelection === "piedra") {
    console.log("piedra gana")
}
}

singleRound("Papel",tijera)

