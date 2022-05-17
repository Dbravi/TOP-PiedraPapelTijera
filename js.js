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
         document.getElementById("rfinal").innerHTML = (`<h2 style="border-radius:10px; background-color:green; color: white; padding: 15px;border: 3px solid white">RESULTADO FINAL: GANASTE!! :D`)
         document.getElementById("startOver").style.display = 'block';
         document.getElementById("b1").style.display = 'none';
         document.getElementById("b2").style.display = 'none';
         document.getElementById("b3").style.display = 'none';
    } else if (scorePlayer >= 5 || scoreComputer >=5 && scorePlayer < scoreComputer) {
         document.getElementById("rfinal").innerHTML = (`<h2 style="border-radius:10px; background-color:red; color: white; padding: 15px;border: 3px solid white">RESULTADO FINAL: COMPUTADORA gana la partida :()`)
         document.getElementById("startOver").style.display = 'block';
         document.getElementById("b1").style.display = 'none';
         document.getElementById("b2").style.display = 'none';
         document.getElementById("b3").style.display = 'none';
    } else if (scorePlayer >= 5 || scoreComputer >=5 && scorePlayer == scoreComputer){
         document.getElementById("rfinal").innerHTML = "RESULTADO FINAL: EMPATE!"
         document.getElementById("startOver").style.display = 'block';
         document.getElementById("b1").style.display = 'none';
         document.getElementById("b2").style.display = 'none';
         document.getElementById("b3").style.display = 'none';
    }
}

const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
        computerSelection = computerPlays()
        document.getElementById("selecciones").innerHTML = `<br> Humano elige <u>${playerSelection}</u> y Computadora elige <u>${computerSelection}</u>`;
        
        if (playerSelection === computerSelection) {
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; color:white; background-color: gray ; padding: 15px; border: 3px solid white; text-align:center">Empate, Nadie suma! xD`)
        }
        else if (playerSelection === papel && computerSelection === "piedra") {
            scorePlayer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:green; color: white; padding: 15px; border: 3px solid white; text-align:center">Humano gana round, papel le gana a piedra! ;D</h2>`)
        }
        else if (playerSelection === papel && computerSelection === "tijera") {
            scoreComputer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:red; color: white; padding: 15px; border: 3px solid white;text-align:center">Computadora gana round, tijera le gana a papel! :(</h2>`)
        }
        else if (playerSelection === piedra && computerSelection === "tijera") {
            scorePlayer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:green; color: white; padding: 15px; border: 3px solid white;text-align:center">Humano gana round, piedra le gana a tijera! ;D</h2>`)
        }
        else if (playerSelection === piedra && computerSelection === "papel") {
            scoreComputer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:red; color: white; padding: 15px; border: 3px solid white;text-align:center">Computadora gana round, papel le gana a piedra! :(</h2>`)
        }
        else if (playerSelection === tijera && computerSelection === "papel") {
            scorePlayer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:green; color: white; padding: 15px; border: 3px solid white;text-align:center">Humano gana round, tijera le gana a papel! ;D</h2>`)
        }
        else if (playerSelection === tijera && computerSelection === "piedra") {
            scoreComputer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:red; color: white; padding: 15px; border: 3px solid white;text-align:center">Computadora gana round, piedra le gana a tijera! :(</h2>`)
        }
        
        document.getElementById("scorePlayer").innerHTML =`<br><u>Tu puntaje</u> : <b>${scorePlayer}</b>`
        document.getElementById("scoreComputer").innerHTML =`<br><u>Computadora</u> : <b>${scoreComputer}</b>`
        scoreFinal()
    }
    
const playerSelection="";
const computerSelection = computerPlays();
// playRound(playerSelection, computerSelection);
// scoreFinal()
