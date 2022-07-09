'use strict';
/*
cnsole.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 24;
*/

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.between').style.animation = '';
  document.querySelector('.between').style.color = 'white';
  score = 20;
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  let range = guess > 0 && guess < 21;
  if (!guess) {
    document.querySelector('.message').textContent = '🤷‍♂️ Enter a value..';
    //When Player Wins
  } else if (!range) {
    document.querySelector('.message').textContent = 'Out of range..😕';
    document.querySelector('.between').style.animation = 'animate 1s linear 5';
    document.querySelector('.between').style.color = 'red';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is higher
  else if (guess !== secretNumber && range) {
    if (score > 1) {
      score--;

      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⚡Too High' : '🔽 Too Low';
      document.querySelector('.between').style.animation = '';
      document.querySelector('.between').style.color = 'white';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '🙇‍♀️You Lost!';
    }
  }
});
