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
         document.getElementById("rfinal").innerHTML = (`<h2 style="border-radius:10px; animation: shake-horizontal 2s linear infinite both; background-color:white; color: black; padding: 15px;border: 3px solid black">RESULTADO FINAL: Ganaste!! :D`)
         document.getElementById("startOver").style.display = 'block';
         document.getElementById("b1").style.display = 'none';
         document.getElementById("b2").style.display = 'none';
         document.getElementById("b3").style.display = 'none';
    } else if (scorePlayer >= 5 || scoreComputer >=5 && scorePlayer < scoreComputer) {
         document.getElementById("rfinal").innerHTML = (`<h2 style="border-radius:10px; background-color:black; color: white; padding: 15px;border: 3px solid white">Resultado Final: COMPUTADORA gana la partida :()`)
         document.getElementById("startOver").style.display = 'block';
         document.getElementById("b1").style.display = 'none';
         document.getElementById("b2").style.display = 'none';
         document.getElementById("b3").style.display = 'none';
    } else if (scorePlayer >= 5 || scoreComputer >=5 && scorePlayer == scoreComputer){
         document.getElementById("rfinal").innerHTML = "Resultado Final: EMPATE!"
         document.getElementById("startOver").style.display = 'block';
         document.getElementById("b1").style.display = 'none';
         document.getElementById("b2").style.display = 'none';
         document.getElementById("b3").style.display = 'none';
    }
}

const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
        computerSelection = computerPlays()
        document.getElementById("selecciones").innerHTML = `<br> Elegiste <u>${playerSelection}</u> y la computadora <u>${computerSelection}</u>.`;
        
        if (playerSelection === computerSelection) {
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; color:white; background-color: gray ; padding: 10px; border: 3px solid black; text-align:center">Empate: Nadie suma! &#128556;`)
        }
        else if (playerSelection === papel && computerSelection === "piedra") {
            scorePlayer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; animation: shake-horizontal 3s linear infinite both; background-color:white; color: black; padding: 10px; border: 3px solid black; text-align:center">Ganaste: papel gana a piedra! &#128512;</h2>`)
        }
        else if (playerSelection === papel && computerSelection === "tijera") {
            scoreComputer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:black; color: white; padding: 10px; border: 3px solid white;text-align:center">Perdiste: tijera gana a papel! &#128546;</h2>`)
        }
        else if (playerSelection === piedra && computerSelection === "tijera") {
            scorePlayer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; animation: shake-horizontal 3s linear infinite both; background-color:white; color: black; padding: 10px; border: 3px solid black;text-align:center">Ganaste: piedra gana a tijera! &#128512;</h2>`)
        }
        else if (playerSelection === piedra && computerSelection === "papel") {
            scoreComputer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:black; color: white; padding: 10px; border: 3px solid white;text-align:center">Perdiste: papel le gana a piedra! &#128546;</h2>`)
        }
        else if (playerSelection === tijera && computerSelection === "papel") {
            scorePlayer++
            document.getElementById("combate").innerHTML=(`<h2 style="animation: shake-horizontal 3s linear infinite both; border-radius:10px; background-color:white; color: black; padding: 15px; border: 3px solid black;text-align:center">Ganaste: tijera le gana a papel! &#128512;</h2>`)
        }
        else if (playerSelection === tijera && computerSelection === "piedra") {
            scoreComputer++
            document.getElementById("combate").innerHTML=(`<h2 style="border-radius:10px; background-color:black; color: white; padding: 10px; border: 3px solid white;text-align:center">Perdiste: piedra le gana a tijera! &#128546;</h2>`)
        }
        
        document.getElementById("scorePlayer").innerHTML =`<br>&#x1F435; Tu puntaje : <b>${scorePlayer}</b>`
        document.getElementById("scoreComputer").innerHTML =`<br>&#128187; Computadora : <b>${scoreComputer}</b>`
        scoreFinal()
    }
    
const playerSelection="";
const computerSelection = computerPlays();
// playRound(playerSelection, computerSelection);
// scoreFinal()
