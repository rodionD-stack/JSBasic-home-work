'use strict';

//Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
//1 Получить все товары, у которых есть фотографии, можете использовать метод //filter.
//2 Отсортируйте товары по цене (от низкой цены к высокой), можете
//использовать метод sort.

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            '1.jpg',
            '2.jpg',
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            '3.jpg'
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

//Проверяем есть ли свойство photos в объекте при помощи оператора in, а так
//же, проверяем что длинна этого массива больше 0, если все значения дают
//true, то записываем данный объект в новый массив.
let photoInProducts = products.filter(item => 'photos' in item && item.photos.length > 0);
console.log(photoInProducts);

//Проводим сортировку через .sort, сравниваем значения если a > b возвращаем 1, если a < b возвращаем -1, если значения равны возвращаем 0. При таком условии значения цены будут записываться в новый массив от меньшего к большему.
let sortPrice = products.sort(function(a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});
console.log(sortPrice);

