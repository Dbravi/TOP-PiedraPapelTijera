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
    if (scorePlayer >= 5 || scoreComputer >= 5 && scorePlayer > scoreComputer){
         document.getElementById("rfinal").innerHTML = "RESULTADO FINAL: HUMANO gana la partida"
    } else if (scorePlayer >= 5 || scoreComputer >=5 && scorePlayer < scoreComputer) {
         document.getElementById("rfinal").innerHTML = "RESULTADO FINAL: COMPUTADORA gana la partida"
    } else {
         document.getElementById("rfinal").innerHTML = "RESULTADO FINAL: EMPATE!"
    }
 
}

const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
        computerSelection = computerPlays()
        document.getElementById("selecciones").innerHTML = `<br> Humano elige <u>${playerSelection}</u> y Computadora elige <u>${computerSelection}</u>`;
        
        if (playerSelection === computerSelection) {
            document.getElementById("combate").innerHTML=("Empate, punto para cada uno!")
            scorePlayer++
            scoreComputer++
        }
        else if (playerSelection === papel && computerSelection === "piedra") {
            scorePlayer++
            document.getElementById("combate").innerHTML=("Humano gana round, papel le gana a piedra!")
        }
        else if (playerSelection === papel && computerSelection === "tijera") {
            scoreComputer++
            document.getElementById("combate").innerHTML=("Computadora gana round, tijera le gana a papel!")
        }
        else if (playerSelection === piedra && computerSelection === "tijera") {
            scorePlayer++
            document.getElementById("combate").innerHTML=("Humano gana round, piedra le gana a tijera!")
        }
        else if (playerSelection === piedra && computerSelection === "papel") {
            scoreComputer++
            document.getElementById("combate").innerHTML=("Computadora gana round, papel le gana a piedra!")
        }
        else if (playerSelection === tijera && computerSelection === "papel") {
            scorePlayer++
            document.getElementById("combate").innerHTML=("Humano gana round, tijera le gana a papel!")
        }
        else if (playerSelection === tijera && computerSelection === "piedra") {
            scoreComputer++
            document.getElementById("combate").innerHTML=("Computadora gana round, piedra le piedgana a tijera!")
        }
        
        document.getElementById("scorePlayer").innerHTML =`<br><u>Humano</u> Score parcial: <b>${scorePlayer}</b>`
        document.getElementById("scoreComputer").innerHTML =`<br><u>Computadora</u> Score parcial: <b>${scoreComputer}</b>`
        scoreFinal()
    }
    
const playerSelection="piedra";
const computerSelection = computerPlays();
// playRound(playerSelection, computerSelection);
// scoreFinal()
