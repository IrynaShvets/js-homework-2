function changedArray(arr) {
    let element = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (typeof element[i] === "number") {
            element[i] = element[i] * 2;
        }
        if (typeof element[i] === "string") {
            element[i] = [...element[i]];
        }
    }
    return element;
  }

  console.log(changedArray([2, 3, 10, "Привіт", "Здоров був"]))

/* 
9. Напишите функцию, которая принимает массив. 
Каждый элемент массива, который является числом - умножить на 2,
строки - преобразовать в массив, где каждый символ - отдельный элемент массива. 
Функция должна вернуть измененный объект
*/