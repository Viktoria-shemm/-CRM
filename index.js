"use strict";

{
  const product_name = "iphone";
  const product_quantity = 1;
  const product_category = "mobile devices";
  const product_price = 90000;

  console.log(product_name);
}

{
  const productName = prompt(
    "Введите наименование товара:",
    "Наименование товара"
  );
  const productQuantity = prompt(
    "Введите количество товара:",
    "Количество товара"
  );
  const productCategory = prompt(
    "Введите категорию товара:",
    "Категория товара"
  );
  const productPrice = prompt(
    "Введите цену товара:", 
    "Цена товара"
  );

  console.log("Наименование товара: " + productName);
  console.log("Количество товара: " + productQuantity);
  console.log("Категория товара: " + productCategory);
  console.log("Цена товара: " + productPrice);

  const productQuantityNumber = Number(productQuantity);
  const productPriceNumber = Number(productPrice);

  console.log("Количество товара: " + productQuantityNumber);
  console.log("Цена товара: " + productPriceNumber);

  console.log(typeof productQuantityNumber);
  console.log(typeof productPriceNumber);

  const totalAmount = productQuantityNumber * productPriceNumber;

  console.log(
    `На складе ${productQuantityNumber} единицы товара "${productName}" на сумму ${totalAmount} деревянных`
  );
}
