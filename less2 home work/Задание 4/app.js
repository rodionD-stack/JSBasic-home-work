'use strict';

//Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций //с двумя параметрами. Т.е. например, функция для сложения должна принимать
//два числа, складывать их и возвращать результат. Обязательно использовать
//оператор return.

let num1 = +prompt('Введите первое число', '');
let num2 = +prompt('Введите второе число', '');

/**
 * Функция выполняет сложение двух чисел num1 и num2
 * @param {number} num1 Значение первого числа
 * @param {number} num2 Значение второго числа
 * @returns {number} Возвращает число получивщееся при сложении num1 и num2
 */
function calcAddition(num1, num2) {
    return num1 + num2;
}

let result = calcAddition(num1, num2);
alert('Сумма чисел равна:' +  ' ' + result);


/**
 * Функция выполнеят вычитание двух чисел. Из num1 вычитается num2
 * @param {number} num1 Значение первого числа
 * @param {number} num2 Значение второго числа
 * @returns {number} Возвращает число получивщееся при вычитании num1 и num2 
 */
function calcSubstraction(num1, num2) {
    return num1 - num2;
}

let result = calcSubstraction(num1, num2);
alert('Разность чисел равна:' +  ' ' + result);


/**
 * Функция выполняет умножение двух чисел num1 и num2
 * @param {number} num1 Значение первого числа
 * @param {number} num2 Значение второго числа
 * @returns {number} Возвращает число получивщееся при умножении num1 и num2 
 */

function calcMultiplication(num1, num2) {
    return num1 * num2;
}

let result = calcMultiplication(num1, num2);
alert('Произведение чисел равно:' +  ' ' + result);


/**
 * Функция выполняет деление двух чисел num1 и num2
 * @param {number} num1 Значение первого числа
 * @param {number} num2 Значение второго числа
 * @returns {number} Возвращает число получивщееся при делении num1 и num2 
 */
function calcDivision(num1, num2) {
    return num1 / num2;
}

let result = calcDivision(num1, num2);
alert('Частное чисел равно:' +  ' ' + result);


