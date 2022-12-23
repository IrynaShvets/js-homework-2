function getShortName(fullName) {
  const arr = fullName.split(" ");
  const name = arr[1].slice(0, 1) + ".";
  const name1 = arr[2].slice(0, 1) + ".";
  return arr[0] + " " + name + name1;
}

console.log(getShortName("Иванов Сергей Петрович"));
console.log(getShortName("Дубей Наталія Степанівна"));

/* 
3. Напишите функцию getShortName(fullName), которая преобразует полное ФИО fullName в краткое.
Например getShortName("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
*/
