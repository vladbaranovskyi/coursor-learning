function getRandomArray(length, minNumber, maxNumber) {
  let numbers = [];
  for (var i = minNumber; i <= length; i++) {
    numbers.push(Math.floor(Math.random() * (maxNumber - minNumber) + minNumber));
  }
  return numbers;
}

const randomArray = getRandomArray(15, 1, 100)
console.log(`Массив случайных чисел`, randomArray);


function getInteger(number) {
    if(Number.isInteger(number)) {
        return number
    }
}


function getMedian(numbers) {
let half = Math.floor(numbers.length / 2);
let intNumbers = numbers.filter(getInteger);
 if (intNumbers.length % 2 === 1) {
      return intNumbers[half];
    } else {
  return (intNumbers[half-1] + intNumbers[half]) / 2;
  }
}


const median = getMedian([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
console.log(`Медиана массива`, median);


function getAverage(nums) {
    return nums
    .filter(getInteger)
    .reduce((sum, element) => (sum + element), 0) / nums.length;
}

const averegeNumber = getAverage(randomArray);
console.log(`Среднее арифметическое массива`, averegeNumber);


function filterEvenNumbers(randomArray) {
  return randomArray.filter(element => element % 2 === 0);
}

const evenNumbers = filterEvenNumbers(randomArray);
console.log(`Массив без парных чисел`, evenNumbers);


function countPositiveNumbers(array) {
  let positiveNumbers = array.filter(element => element > 0);
  return positiveNumbers.length
}

const positiveNumbers = countPositiveNumbers([-2, -3, 23, 49, -5, 1, -7, 11, 32]);
console.log(`Массив где только позитивные числа`, positiveNumbers);



function getDividedByFive(randomArray) {
  return randomArray.filter(element => element % 5 === 0);;
}

const dividedByFive = getDividedByFive(randomArray);
console.log(`Массив где все числа делятся на 5`, dividedByFive);
