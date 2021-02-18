const tshirtPrice = 15.678;
const coatPrice = 123.965;
const shoesPrice = 90.2345;

const discount = Math.random();

//Максимальная цена
const maxPrice = (Math.max (tshirtPrice, coatPrice, shoesPrice));
console.log(maxPrice);

//Минимальная цена
const minPrice = (Math.min (tshirtPrice, coatPrice, shoesPrice));
console.log(minPrice);

//Стоимость товаров
const productsPrice = (tshirtPrice + coatPrice + shoesPrice);
console.log(productsPrice);

//Стоимость всех товаров без копеек
const roundPrice = (Math.floor(tshirtPrice) + Math.floor(coatPrice) + Math.floor(shoesPrice));
console.log(roundPrice);

//Сумма товаров округленная до сотен
const roundSum = (Math.round(productsPrice / 100) * 100);
console.log(roundSum);

//Является ли сумма всех товаров парным числом
const isSumPaired = ((Math.floor(tshirtPrice) + Math.floor(coatPrice) + Math.floor(shoesPrice)) % 2 == 0);
console.log(isSumPaired);

//Сдача при оплате 500
const change = ((500 - productsPrice).toFixed(2));
console.log(change);

//Среднее значение цен до 2 знака после запятой
const meanPrice = ((productsPrice / 3).toFixed(2));
console.log(meanPrice);

//Сумма к оплате с учетом случайной скидки
const discountPrice = ((productsPrice-(productsPrice * discount)).toFixed(2));
console.log(discountPrice);

//Чистая прибыль при оплате с случайной скидкой
const profit = ((productsPrice/2) - (productsPrice * discount));
console.log(profit);



document.writeln(`
  Максимальная цена: ${(maxPrice)} <br>
  Минимальная цена: ${(minPrice)}  <br>
  Стоимость всех товаров: ${(productsPrice)}  <br>
  Стоимость всех товаров без копеек (округленная в меньшую сторону): ${(roundPrice)} <br>
  Сумма товаров округленная до сотен: ${(roundSum)} <br>
  Является ли сумма всех товаров (округленная в меньшую сторону) парным числом? - ${(isSumPaired)} <br>
  Сдача при оплате купюрой 500:  ${(change)} <br>
  Среднее значение цен до 2 знака после запятой: ${(meanPrice)} <br>
  Сумма к оплате с учетом случайной скидки: ${(discountPrice)} <br>
  Чистая прибыль при оплате с случайной скидкой: ${(profit)}
  `);
