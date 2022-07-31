'use strict'

let randomNum = parseInt(Math.random() * 10);
function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
function guessNumber() {
  let userNum = prompt('Угадай число от 0 до 10');
  if (isNum(userNum)) {
    userNum = +userNum;
  }
  if (userNum === null) {
    alert('Игра окончена');
    return;
  }
  if (userNum > randomNum) {
    alert('Загаданное число меньше, введите новый вариант');
    return guessNumber();
  }
  else if (userNum < randomNum) {
    alert('Загаданное число больше, введите новый вариант');
    return guessNumber();
  }
  else if (userNum === randomNum) {
    alert('Поздравляю, Вы угадали!!!');
    return userNum;
  }
  else {
    alert('Введи число!');
    return guessNumber();
  }
}
console.log(guessNumber());
