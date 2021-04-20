'use strict';

//Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на
//каждый товар применить скидку 15%, можете использовать метод forEach.



const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

//Через метод .forEach мы перебираем массив products, в функцию подставляем
//элемент массива и к нему применяем свойство .price, затем вычисляем скидку
//и выводим итоговую сумму в консоль.

products.forEach(function(item) {
   item.price = item.price - item.price * 0.15;
});

console.log(products);
console.log(products[0].price);
console.log(products[1].price);
console.log(products[2].price);