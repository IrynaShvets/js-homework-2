function checkingStringForSpam(str) {
const arr = str.split(" ")

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
   if (arr[i].toLowerCase().includes(arr[j].toLowerCase())) {
        return true; 
      }
  }
}
return false;
}

console.log(checkingStringForSpam("которая проверяет строку на спам строку на спам"));
console.log(checkingStringForSpam("которая проверяет строку"));
console.log(checkingStringForSpam("Привіт, де ти"));
console.log(checkingStringForSpam("Привіт, привіт"));

/* 
10. Напишите функцию, которая проверяет строку на спам. 
Функция должна возвращать true, если в строке есть 2 одинаковых слова, 
и false - если все слова уникальны.
*/
