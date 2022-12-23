function arrayToSentence(arr) {
        return arr.filter(el => typeof el === "string").join(" ");
      }

console.log(arrayToSentence(['Привет', 1, null, 'как', '{}', 'дела']));

/* 
12. Напишите функцию, которая принимает массив. 
Функция должна вернуть предложение только из строковых значений массива.
Например:
arrayToSentence(['Привет', 1, null, 'как', '{}', 'дела']) // вернуть Привет как дела
*/