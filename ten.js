function spam(str) {
  if (Array.isArray(str)) {
    return str.some((el) => str.toLowerCase().indexOf(el.toLowerCase()) > -1);
  }

  return str.indexOf(str) > -1;
}

console.log(spam("которая проверяет строку на спам строку на спам"));
console.log(spam("которая проверяет строку"));

/* 
10. Напишите функцию, которая проверяет строку на спам. 
Функция должна возвращать true, если в строке есть 2 одинаковых слова, 
и false - если все слова уникальны.
*/
