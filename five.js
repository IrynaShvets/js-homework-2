function filter(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(filter([7, 7, 28, 4, 0, 0, 9], [4, 88, 7, 7, 28, 1]));
console.log(filter(["Аліна", "Олег", "Аліна", "Юля", "Дмитро"], ["Валя", "Аліна", "Олег"]));

/* 
5. Напишите функцию, которая принимает два массива. 
Функция должна вернуть результат объединения этих массивов без дубликатов
*/