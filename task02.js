"use strict";
// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример:  "привет Мир" => "Привет мир"

const stringModification = (inputString) => {
  const words = inputString.split(" ");
  const modifiedWords = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  });
  return modifiedWords.join(" ");
};

const res = stringModification("привет Мир");
console.log(res);

