const arr = ["Скромняга", "робота", "він"];

function checkString(str) {
  if (Array.isArray(arr)) {
      return arr.some(el => str.toLowerCase().indexOf(el.toLowerCase()) > -1);
  }
 
  return str.indexOf(arr) > -1;
}

console.log(checkString("Скромняга він був трохи."));
console.log(checkString("Був розумний."));
console.log(checkString("Робота на дому."));
console.log(checkString("Привіт."));
console.log(checkString("скромняга ти є"));

/* 
11.Напишите функцию, которая проверяет строку на нецензурную лексику.
Создайте массив, который будет содержать слова, которые нельзя пропускать.
Функция должна принимать строку и проверять наличие в ней слов из массива, которые нужно пропускать.
Если в строке есть слово из массива - вернуть true, если нет - false.
*/
