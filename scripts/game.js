//Code for generating random number on Dice.

const rollButton1 = document.getElementById("dice1");
const rollButton2 = document.getElementById("dice2");
const player1Score = document.getElementById("label1");
const player2Score = document.getElementById("label2");
const min = 1;
const max = 6;
let randomNum;

rollButton1.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    player1Score.textContent = randomNum;
}

rollButton2.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    player2Score.textContent = randomNum;
}