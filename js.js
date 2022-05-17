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
        document.getElementById("rfinal").innerHTML = "RESULTADO FINAL: HUMANO gana la partida"
    } else if (scorePlayer < scoreComputer) {
        document.getElementById("rfinal").innerHTML = "RESULTADO FINAL: COMPUTADORA gana la partida"
    } else {
        document.getElementById("rfinal").innerHTML = "RESULTADO FINAL: EMPATE!"
    }
}

const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let i=1;
    do {
        // playerSelection = prompt("piedra, papel o tijera?");
        computerSelection = computerPlays()
        document.getElementById("selecciones").innerHTML = `<br> Round ${i}: Humano elige ${playerSelection} y Computadora elige ${computerSelection}`;
        if (playerSelection === computerSelection) {
            console.log("Empate, punto para cada uno!")
            scorePlayer++
            scoreComputer++
        }
        else if (playerSelection === papel && computerSelection === "piedra") {
            scorePlayer++
            console.log("Humano gana round, papel le gana a piedra!")
        }
        else if (playerSelection === papel && computerSelection === "tijera") {
            scoreComputer++
            console.log("Computadora gana round, tijera le gana a papel!")
        }
        else if (playerSelection === piedra && computerSelection === "tijera") {
            scorePlayer++
            console.log("Humano gana round, piedra le gana a tijera!")
        }
        else if (playerSelection === piedra && computerSelection === "papel") {
            scoreComputer++
            console.log("Computadora gana round, papel le gana a piedra!")
        }
        else if (playerSelection === tijera && computerSelection === "papel") {
            scorePlayer++
            console.log("Humano gana round, tijera le gana a papel!")
        }
        else if (playerSelection === tijera && computerSelection === "piedra") {
            scoreComputer++
            console.log("Computadora gana round, piedra le piedgana a tijera!")
        }
        document.getElementById("scorePlayer").innerHTML =`<br>Humano Score parcial: ${scorePlayer}`
        document.getElementById("scoreComputer").innerHTML =`<br>Computadora Score parcial: ${scoreComputer}`
        i++
    }
    while(i<6);
}

const playerSelection="piedra";
const computerSelection = computerPlays();
playRound(playerSelection, computerSelection);
scoreFinal()
