const tshirtPrice = 15.678;
const coatPrice = 123.965;
const shoesPrice = 90.2345;

const discount = Math.random();
const productsPrice = (tshirtPrice + coatPrice + shoesPrice);

console.log(`
  Максимальная цена = ${(Math.max (tshirtPrice, coatPrice, shoesPrice))}
  Минимальная цена = ${(Math.min (tshirtPrice, coatPrice, shoesPrice))}
  Стоимость всех товаров = ${(productsPrice)}
  Стоимость всех товаров без копеек (океругленная в меньшую сторону) = ${(Math.floor(tshirtPrice) + Math.floor(coatPrice) + Math.floor(shoesPrice))}
  Сумма товаров округленная до сотен = ${(Math.round(productsPrice / 100) * 100)}
  Являеться ли сума всех товаров (округленная в меньшую сторону) парным числом? = ${((Math.floor(tshirtPrice) + Math.floor(coatPrice) + Math.floor(shoesPrice)) % 2 == 0)}
  Здача при оплате купюрой 500 =  ${((500 - productsPrice).toFixed(2))}
  Среднее значение цен до 2 знака после запятой = ${((productsPrice / 3).toFixed(2))}
  Сумма к оплате с учетом случайной скидки = ${((productsPrice-(productsPrice * discount)).toFixed(2))}
  Чистая прибыль при оплате с случайной скидкой = ${((productsPrice/2) - (productsPrice * discount))}
  `);
