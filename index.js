var randNo1 = Math.floor(Math.random() * 6) + 1;
var randNo2 = Math.floor(Math.random() * 6) + 1;
if (randNo1 > randNo2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if (randNo1 < randNo2) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩 ";
} else {
  document.querySelector("h1").textContent = "Draw ";
}
if (randNo1 === 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randNo1 === 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randNo1 === 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randNo1 === 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randNo1 === 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else {
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (randNo2 === 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randNo2 === 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randNo2 === 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randNo2 === 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randNo2 === 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}
