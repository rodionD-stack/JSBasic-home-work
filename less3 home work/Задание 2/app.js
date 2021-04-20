'use strict';

//Выведите в консоль значения, указанные рядом с комментариями:


const post = {
    author: 'John', //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: 'Alex',
            text: 'lorem ipsum',
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: 'Jane',
            text: 'lorem ipsum 2', //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

//обращаемся к объекту post, через свойство .author и выводи в консоль его значение 'John'.
console.log(post.author);

//обращаемся к объекту post, через свойство .comments, которое
//содержит в себе массив, нас интересует элемент массива с индексом 0, далее
//через свойство .rating и .dislikes выводим в
//консоль значение последнего.
console.log(post.comments[0].rating.dislikes);

//обращаемся к объекту post, через свойство .comments, которое
//содержит в себе массив, нас интересует элемент массива с индексом 1, далее
//через свойство .userId выводим его значение в консоль.
console.log(post.comments[1].userId);

//обращаемся к объекту post, через свойство .comments, которое
//содержит в себе массив, нас интересует элемент массива с индексом 1, далее
//через свойство .text выводим его значение в консоль.
console.log(post.comments[1].text);