function upFirst(str) {
  return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

console.log(upFirst("иванов"));
console.log(upFirst("ИВАНОВ"));

/* 
1.Напишите функцию upFirst(str), которая возвращает строку str с заглавным первым символом, 
остальные символы должны быть в нижнем регистре (пример: upFirst("иванов"),
должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")
*/
