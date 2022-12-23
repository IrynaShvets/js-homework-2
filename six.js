function modifyString(str) {
  str = str.replace(/[^a-zA-Z0-9 ]/g, " ");

  str = str.replace(/([a-z](?=[A-Z]))/g, "$1 ");

  str = str
    .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, "")
    .trim()
    .toLowerCase();

  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
    return b.trim() + c.toUpperCase();
  });
  return str;
}

console.log(modifyString("snake_case"));
console.log(modifyString("super-user-name"));

/* 
6. Напишите функцию, которая преобразует строки snake_case в camelCase.
Например modifyString('super-user-name') // вернуть 'superUserName'
*/
