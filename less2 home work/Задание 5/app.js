'use strict';

//Реализовать функцию с тремя параметрами: function mathOperation(arg1,
//arg2, operation),
//где arg1, arg2 – значения аргументов, operation – строка с названием
//операции. В зависимости от
//переданного значения операции (использовать switch) выполнить одну из
//арифметических
//операций (использовать функции из задания 4) и вернуть полученное значение.


let num1 = +prompt('Введите первое число', '');
let num2 = +prompt('Введите второе число', '');

function calcAddition(num1, num2) {
    return num1 + num2;
}

function calcSubstraction(num1, num2) {
    return num1 - num2;
}

function calcMultiplication(num1, num2) {
    return num1 * num2;
}

function calcDivision(num1, num2) {
    return num1 / num2;
}


/**
 * Функция получает два числа и вычисляет их при помощи математической операции.
 * @param {number} arg1 Значение первого числа.
 * @param {number} arg2 Значение второго числа.
 * @param {string} operation Необходимая операция выполнится в зависимости от знака ('+', '-', '*', '/').
 * @returns {number} Возвращает число полученное при помощи функций с математическими операциями.
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return calcAddition(arg1, arg2);
        case '-':
            return calcSubstraction(arg1, arg2);
        case '*':
            return calcMultiplication(arg1, arg2);
        case '/':
            return calcDivision(arg1, arg2);
    }
}

console.log(mathOperation(num1, num2, '+'));
console.log(mathOperation(num1, num2, '-'));
console.log(mathOperation(num1, num2, '*'));
console.log(mathOperation(num1, num2, '/'));