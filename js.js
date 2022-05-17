const papel = "papel"
const piedra = "piedra"
const tijera = "tijera"
const palabras = ["piedra", "papel", "tijera"]

function computerPlays() {
    let resultado = Math.floor(Math.random() * palabras.length);
    return palabras[resultado]
}

let scorePlayer = 0;
let scoreComputer = 0;

const scoreFinal = function () {
    if (scorePlayer > scoreComputer) {
        console.log("HUMANO gana la partida")
    } else if (scorePlayer < scoreComputer) {
        console.log("COMPUTADORA gana la partida")
    } else {
        console.log("El juego es un empate")
    }
}

const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let i=0
    do {
        computerSelection = computerPlays()
        console.log (`Round ${i}, Humano elige ${playerSelection} y Computadora elige ${computerSelection}`)
        if (playerSelection === computerSelection) {
            console.log("Empate, punto para cada uno")
            scorePlayer++
            scoreComputer++
        }
        else if (playerSelection === papel && computerSelection === "piedra") {
            scorePlayer++
            console.log("Humano gana round, papel gana a piedra")
        }
        else if (playerSelection === papel && computerSelection === "tijera") {
            scoreComputer++
            console.log("Computadora gana round, tijera gana a papel")
        }
        else if (playerSelection === piedra && computerSelection === "tijera") {
            scorePlayer++
            console.log("Humano gana round, piedra gana a tijera")
        }
        else if (playerSelection === piedra && computerSelection === "papel") {
            scoreComputer++
            console.log("Computadora gana round, papel gana a piedra")
        }
        else if (playerSelection === tijera && computerSelection === "papel") {
            scorePlayer++
            console.log("Humano gana round, tijera gana a papel")
        }
        else if (playerSelection === tijera && computerSelection === "piedra") {
            scoreComputer++
            console.log("Computadora gana round, piedra gana a tijera")
        }
        console.log(`Humano Score parcial: ${scorePlayer}`)
        console.log(`Computadora Score parcial: ${scoreComputer}`)
        i++
    }
    while(i<5);
}

const playerSelection = "piedra";
const computerSelection = computerPlays();
playRound(playerSelection, computerSelection);
console.log(`Humano Score final: ${scorePlayer}`)
console.log(`Computadora Score final: ${scoreComputer}`)
scoreFinal()