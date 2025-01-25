'use strict'; 

const product_name = prompt("Введите наименование товара:", "Наименование товара"); 
const product_quantity = prompt("Введите количество товара:", "Количество товара"); 
const product_category = prompt("Введите категорию товара:", "Категория товара"); 
const product_price = prompt("Введите цену товара:", "Цена товара"); 


console.log("Наименование товара: " + product_name);
console.log("Количество товара: " + product_quantity);
console.log("Категория товара: " + product_category);
console.log("Цена товара: " + product_price);

const product_quantity_number = Number(product_quantity);
const product_price_number = Number(product_price);

console.log("Количество товара: " + product_quantity_number);
console.log("Цена товара: " + product_price_number);

console.log(typeof product_quantity_number);
console.log(typeof product_price_number);

const total_amount = product_quantity * product_price;

console.log(`На складе ${product_quantity} единицы товара "${product_name}" на сумму ${total_amount} деревянных`);