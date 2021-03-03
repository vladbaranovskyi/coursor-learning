function getRandomArray(length, minNumber, maxNumber) {
  let numbers = [];
  for (var i = minNumber; i <= length; i++) {
    numbers.push(Math.floor(Math.random() * (maxNumber - minNumber) + minNumber));
  }
  return numbers;
}

const randomArray = getRandomArray(15, 1, 100)
console.log(`Массив случайных чисел`);
console.log(randomArray);


function getMedian(numbers) {
let half = Math.floor(numbers.length / 2);

if (numbers.length % 2 === 1) {
      return numbers[half];
    } else {
  return (numbers[half + 1] + numbers[numbers.length / 2]) / 2;
  }
}


const median = getMedian([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
console.log(`Медиана массива`);
console.log(median);


function getAverage(nums) {
    return nums.reduce((sum, element) => Math.floor(sum + element), 0) / nums.length;
}

const averegeNumber = getAverage(randomArray);
console.log(`Среднее арифметическое массива`);
console.log(averegeNumber);


function filterEvenNumbers(randomArray) {
  let resault = randomArray.filter((element)  => {
	if (element % 2 == 0) {
		return false;
	} else {
		return true;
	}
});
  return resault;
}

const evenNumbers = filterEvenNumbers(randomArray);
console.log(`Массив без парных чисел`);
console.log(evenNumbers);


function countPositiveNumbers(array) {
  let resault = array.filter((element) => {
	if (element >  0) {
		return true;
	} else {
		return false;
	}
});
  return resault;
}

const positiveNumbers = countPositiveNumbers([-2, -3, 23, 49, -5, 1, -7, 11, 32]);
console.log(`Массив где только позитивные числа`);
console.log(positiveNumbers);



function getDividedByFive(randomArray) {
  let resault = randomArray.filter((element) => {
	if (element % 5  === 0) {
		return true;
	} else {
		return false;
	}
});
  return resault;
}

const dividedByFive = getDividedByFive(randomArray);
console.log(`Массив где все числа делятся на 5`);
console.log(dividedByFive);
