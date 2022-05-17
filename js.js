//input: none
//solution(steps):
//1.
//2.
//3.
//output: console.log(random Rock’, ‘Paper’ or ‘Scissors)

const palabras= ["rock","papper", "scissors"]
function getRandomInt() {
    let resultado= Math.floor(Math.random() * palabras.length);
    console.log(palabras[resultado]) 
  }

getRandomInt()