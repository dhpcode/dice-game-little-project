const player1Image = document.querySelector('.player1-image');
const player2Image = document.querySelector('.player2-image');
const result = document.querySelector('.result');

const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

console.log(randomNumber1, randomNumber2);



if (randomNumber1 > randomNumber2) {
  player1Image.src = `../images/dice-${randomNumber1}.png`;
  player2Image.src = `../images/dice-${randomNumber2}.png`;
  result.textContent = `Player 1 wins!!!`
} else if (randomNumber1 < randomNumber2) {
  player1Image.src = `../images/dice-${randomNumber1}.png`;
  player2Image.src = `../images/dice-${randomNumber2}.png`;
  result.textContent = `Player 2 wins!!!`
} else {
  player1Image.src = `../images/dice-${randomNumber1}.png`;
  player2Image.src = `../images/dice-${randomNumber2}.png`;
  result.textContent = `Draw 🤝`
}