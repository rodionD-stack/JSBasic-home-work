'use strict';



//Нарисовать горку с помощью console.log (используя цикл for), как показано
//на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

//Создаем цикл в котором х равняеется строке 'x'. Затем задаем что, пока длина значения переменной х меньше 20, то мы к ней добавляем еще 'x'.

for (let x = 'x'; x.length < 20; x += 'x') {
    console.log(x);
}