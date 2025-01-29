"use strict";
// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
// Порядок применения скидок должен соблюдаться

const calculate = (sum, quantity, discount) => {
    if (quantity > 10) {
        sum -= sum * 0.03;
    }

    if (sum > 30000) {
        const newSum = sum - 30000;
        sum -= newSum * 0.15;
    }

    if (discount === "METHED") {
        sum -= sum * 0.1
    }

    if (discount === "G3H2Z1" && sum > 2000) {
        sum -= 500
    }

    return sum
};

console.log(calculate(30000, 10, "METHED")); 
console.log(calculate(2500, 5, "G3H2Z1"));   
console.log(calculate(15000, 12, "")); 