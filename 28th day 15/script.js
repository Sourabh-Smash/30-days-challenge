'use strict';
// document.querySelector('.message').textContent = '🥳 Correct Number';

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guessNo = Number(document.querySelector('.guess').value);
  console.log(guessNo);
  if (!guessNo) {
    document.querySelector('.message').textContent = '⛔️ Wrong Number';
  } else if (guessNo === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNo !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNo > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guessNo > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guessNo < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
