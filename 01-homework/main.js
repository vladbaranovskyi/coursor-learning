let sum = 0;
let N;
let M;

do {
  N = +prompt ("Введите чило N");
} while (!Number.isInteger(N) || isNaN(N));
console.log(N);

do {
  M = +prompt ("Введите чило M");
} while (!Number.isInteger(M) || isNaN(M));
console.log(M);

while (M < N) {
  M = +prompt ("M должно быть больше N, введите число M");
}

let isParedCount = confirm ("Пропускать парные числа?");

for (var i = N; i <= M; i++)
  {
    if (isParedCount == true) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
      else {
        sum += i;
    }
  }

document.writeln(`Сумма чисел равна ${sum}`)
