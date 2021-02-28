let sum = 0;
let N;
let M;

do {
  N = +prompt ("Введите чило N");
} while (!Number.isInteger(N));
console.log(N);

do {
  M = +prompt ("Введите чило M");
} while (!Number.isInteger(M));
console.log(M);

if (M <= N) {
  M = +prompt (`Число M должно быть больше ${N}, введите число M`);
}

let isParedCount = confirm ("Пропускать парные числа?");

for (var i = N; i <= M; i++)
  {
    if (isParedCount) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
      else {
        sum += i;
    }
  }

document.writeln(`Сумма чисел равна ${sum}`)
