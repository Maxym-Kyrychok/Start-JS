const chocolate = 15.678;
const cookies = 123.965;
const marshmallow = 90.2345;
//1)
const mostExpensiveProduct = Math.max(chocolate, cookies, marshmallow);
console.log(mostExpensiveProduct);
//2)
const cheapestProduct = Math.min(chocolate, cookies, marshmallow);
console.log(cheapestProduct);
//3)
const priceOfAllGoods = chocolate+cookies+marshmallow;
console.log(priceOfAllGoods);
//4)
const roundAmountToLess = Math.floor(chocolate)+Math.floor(cookies)+Math.floor(marshmallow);
console.log(roundAmountToLess);
//5)
const amountRoundedToHundreds = Math.round(priceOfAllGoods / 100) * 100;
console.log(amountRoundedToHundreds);
//6)
const goodsIsEven = roundAmountToLess / 2 - Math.trunc(roundAmountToLess / 2)  === 0;
console.log(goodsIsEven);
//7)
const nominalBanknote = 500;
const restAfterPayment = nominalBanknote - priceOfAllGoods;
console.log(restAfterPayment);
//8)
const roundedAveragePrice = (priceOfAllGoods / 3).toFixed(2);
console.log( + roundedAveragePrice);
//9)
const min = 0;
const max = 100;
const roundedPriceOfAllGoods = priceOfAllGoods.toFixed(2);
const randomDiscount = min - 0.5 + Math.random() * (max - min + 1);
const discountedPrice = priceOfAllGoods - (priceOfAllGoods / 100) * randomDiscount;
const costOfGoods = priceOfAllGoods / 2;
const netProfit = (discountedPrice - costOfGoods);
console.log(+roundedPriceOfAllGoods, randomDiscount, discountedPrice, netProfit);

let results = `<p>1. Максимальна ціна: ${mostExpensiveProduct};</p>
<p>2. Мінімальна ціна: ${cheapestProduct};</p>
<p>3. Вартість усіх товарів: ${priceOfAllGoods};</p>
<p>4. Округлена в меншу сторону вартість товарів: ${roundAmountToLess};</p>
<p>5. Округлена до сотень вартість товарів: ${amountRoundedToHundreds};</p>
<p>6. Чи є окргулена вартість товарів (4) парним числом: ${goodsIsEven};</p>
<p>7. Решта: ${restAfterPayment};</p>
<p>8. Середнє значення: ${roundedAveragePrice};</p>
<p>9. Знижка ${randomDiscount.toFixed(2)};</p>
<p>Ціна зі знижкою ${discountedPrice.toFixed(2)};</p>
<p>Чистий прибуток: ${netProfit.toFixed(2)};</p>
`;
document.writeln(results);