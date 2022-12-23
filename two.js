function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "…";
  }
  return str;
}

console.log(truncate("Як в тебе справи?", 100));
console.log(truncate("Мені тринадцяти минало", 14));
console.log(truncate("І мертвим, і живим", 3));

/* 
2. Напишите функцию truncate(str, maxlength), которая проверяет длину строки str,
и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength
*/
