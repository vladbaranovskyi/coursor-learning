function getMaxDigit (n) {
  if (n <= 0) {
    return 0;
  } else {
    return Math.max (n % 10, getMaxDigit(Math.floor (n/10)));
  }
}

function changeName (name) {
  return  name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function getRandomNumber (minNumber, maxNumber) {
  return  Math.floor (Math.random() * (maxNumber - minNumber) + minNumber);
}

function getTax (salary, tax) {
  return  Math.floor(salary - (salary/100 * tax));
}

function getRandomPassword (n = 8) {
  let pas = '';
  for (let i = 0; i < n; i++) {
    pas = pas + (Math.floor (Math.random() * 10));
  }
  return pas;
}

function countLetter (sentence, letter) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
     if (sentence[i].toLowerCase() == letter.toLowerCase()) {
         count++
     }
    }
  return count;
}


document.writeln(
  `Функция №1: ${getMaxDigit(468542341)}<br>
  Функция №2: ${toUСFirst("maXiMuS")}<br>
  Функция №3: ${getRandomNumber(10, 100)}<br>
  Функция №4: ${getTax(1000, 19.5)}<br>
  Функция №5: ${getRandomPassword(5)}<br>
  Функция №6: ${countLetter("Блаблабла", "б")}<br>
  `);
