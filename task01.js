"use strict";
//Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
//1 евро = 1.2 доллара,
//1 доллар = 73 рубля.

const convertToRubles = (euro) => {
    const getDollar = euro * 1.2;
    const getRubles = getDollar * 73;
    return getRubles;
};

const result = convertToRubles(1);
console.log(result);