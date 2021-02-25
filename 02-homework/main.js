function getMaxDigit(n){
  if(n <= 0) {
    return 0;}
  else{
    return Math.max(n % 10, getMaxDigit(Math.floor(n/10)));
  }
}

function toUСFirst(name) {
  name = name.toLowerCase()
  return name[0].toUpperCase() + name.slice(1);
}

function getRandomNumber(minNumber, maxNumber) {
  return  Math.floor (Math.random() * (maxNumber - minNumber) + 1);
}

function getTax (salary) {
  tax = 19.5;
  return  Math.floor (salary - (salary/100 * tax));
}

function getRandomPassword (n = 8) {
  let pas = '';
  for (let i = 0; i < n; i++) {
    pas = pas + (Math.floor(Math.random() * 10));
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
  Функция №4: ${getTax(1000)}<br>
  Функция №5: ${getRandomPassword(5)}<br>
  Функция №6: ${countLetter("Блаблабла", "б")}<br>
  `);
