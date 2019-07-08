let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);

let randomDiceImage1 = document.getElementsByTagName('img')[0].setAttribute('src', 'docs/images/dice' + randomNumber1 + '.png');
let randomDiceImage2 = document.getElementsByTagName('img')[1].setAttribute('src', 'docs/images/dice' + randomNumber2 + '.png');

let text = document.getElementsByTagName('h1')[0];
let textPlayer1 = document.getElementsByTagName('p')[0];
let textPlayer2 = document.getElementsByTagName('p')[1];

console.log(text);

if(randomNumber1 > randomNumber2) {
    text.innerHTML = "🚩 Player 1 Wins";
    textPlayer1.classList.add("winner");
} else if(randomNumber1 < randomNumber2 ) {
    text.innerHTML = "Player 2 Wins 🚩";
    textPlayer2.classList.add("winner");
} else {
    text.innerHTML = "It's a tie!";
}



