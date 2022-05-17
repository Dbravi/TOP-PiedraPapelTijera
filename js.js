const papel = "papel"
const piedra = "piedra"
const tijera = "tijera"
const palabras = ["piedra", "papel", "tijera"]

function computerPlays() {
    let resultado = Math.floor(Math.random() * palabras.length);
    return palabras[resultado]
}

let scorePlayer= 0;
let scoreComputer=0;

const scoreFinal = function() {
    if (scorePlayer > scoreComputer) {
        console.log("HUMANO gana la partida")
    } else if (scorePlayer<scoreComputer){
        console.log("COMPUTADORA gana la partida")
    } else {
        console.log("El juego es un empate")
    }
}

const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "empate"
    }
    else if (playerSelection === papel && computerSelection === "piedra") {
        scorePlayer++
        return "papel gana"
        
    }
    else if (playerSelection === papel && computerSelection === "tijera") {
        scoreComputer++
        return "tijera gana"
    }
    else if (playerSelection === piedra && computerSelection === "tijera") {
        scorePlayer ++
        return "piedra gana"
    }
    else if (playerSelection === piedra && computerSelection === "papel") {
        scoreComputer ++
        return "papel gana"
    }
    else if (playerSelection === tijera && computerSelection === "papel") {
        scorePlayer ++
        return "tijera gana"
    }
    else if (playerSelection === tijera && computerSelection === "piedra") {
        scoreComputer ++
        return "piedra gana"
    }
}

const playerSelection = "piedra";
const computerSelection = computerPlays();
console.log(playRound(playerSelection, computerSelection));
console.log(scorePlayer)
console.log(scoreComputer)
scoreFinal()