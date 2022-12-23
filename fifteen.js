function  checksStringIsValid(str) {

  if (str.length >= 3 && str.length <= 16 && str.length !== "") {
    if ((/[0-9]/.test(str)) === true) {
      return "Не коректна строка, вміщує цифри. Виправіть будь ласка.";
    }
    return "Строка коректнa";
  }
  return "Не коректна строка. Виправіть будь ласка.";
}

console.log(checksStringIsValid("Як справи в тебе? Що робиш?"));
console.log(checksStringIsValid("Привіт1"));
console.log(checksStringIsValid("Привіт"));
console.log(checksStringIsValid(""));

/* 
15. Напишите функцию, которая проверяет корректность строки.
Строка должна быть не менее 3х символов и не более 16ти символов, 
должна быть не пустая, не должна содержать числа.
*/
