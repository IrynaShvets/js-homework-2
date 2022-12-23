function createPhoneNumber(numbers) {
  let number = "(xxx) xxx-xxxx";
  numbers.forEach((element) => {
   number = number.replace("x", element);
  });

  return number;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/* 13. Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), 
который возвращает строку этих чисел в форме номера телефона.
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" 
*/
